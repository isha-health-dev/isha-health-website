#!/usr/bin/env node
// Auto-tweet new blog posts from @ishahealth.
//
// Reads content/blog/*.mdx, finds posts that:
//   1. Have firstPublished >= START_DATE (avoids back-tweeting the archive)
//   2. Have date <= today (respects scheduled future publishing)
//   3. Are not already in social/tweeted-posts.json
//
// Posts each one as a single tweet (title + URL, optionally with a hook from
// the description if it fits under 280 chars). Appends to the log on success.
//
// Required env vars:
//   X_API_KEY, X_API_SECRET, X_ACCESS_TOKEN, X_ACCESS_TOKEN_SECRET
//
// Optional env vars:
//   DRY_RUN=1               — print what would be tweeted without posting
//   AUTO_TWEET_START_DATE   — override the default 2026-05-22 cutoff

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { TwitterApi } from 'twitter-api-v2';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT, 'content/blog');
const LOG_PATH = path.join(ROOT, 'social/tweeted-posts.json');
const SITE_ORIGIN = 'https://isha.health';

const START_DATE = process.env.AUTO_TWEET_START_DATE || '2026-05-22';
const DRY_RUN = process.env.DRY_RUN === '1';
const TWEET_MAX = 280;
const URL_LEN = 23; // t.co shortens every URL to 23 chars

function todayISO() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

function loadLog() {
  if (!fs.existsSync(LOG_PATH)) return { tweeted: [] };
  return JSON.parse(fs.readFileSync(LOG_PATH, 'utf8'));
}

function saveLog(log) {
  fs.mkdirSync(path.dirname(LOG_PATH), { recursive: true });
  fs.writeFileSync(LOG_PATH, JSON.stringify(log, null, 2) + '\n');
}

function normalizeDate(d) {
  if (!d) return null;
  if (typeof d === 'string') return d.slice(0, 10);
  if (d instanceof Date) return d.toISOString().slice(0, 10);
  return String(d).slice(0, 10);
}

function buildTweetText({ title, description, slug }) {
  const url = `${SITE_ORIGIN}/post/${slug}`;
  // Try title + first sentence of description + URL
  const firstSentence = (description || '').split(/(?<=[.?!])\s+/)[0]?.trim() || '';
  const withHook = `${title}\n\n${firstSentence}\n\n${url}`;
  // tweet length counts URL as URL_LEN (23) regardless of actual length
  const lenWithHook = withHook.length - url.length + URL_LEN;
  if (lenWithHook <= TWEET_MAX && firstSentence && firstSentence !== title) {
    return withHook;
  }
  // Fallback: title + URL
  const minimal = `${title}\n\n${url}`;
  return minimal;
}

function findCandidates(log) {
  const today = todayISO();
  const tweeted = new Set(log.tweeted.map((t) => t.slug));
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'));
  const candidates = [];
  for (const file of files) {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
    let parsed;
    try {
      parsed = matter(raw);
    } catch {
      continue;
    }
    const fm = parsed.data || {};
    const slug = fm.slug || file.replace(/\.mdx$/, '');
    if (tweeted.has(slug)) continue;
    const firstPub = normalizeDate(fm.firstPublished) || normalizeDate(fm.date);
    const pubDate = normalizeDate(fm.date) || firstPub;
    if (!firstPub || !pubDate) continue;
    if (firstPub < START_DATE) continue; // don't backfill the archive
    if (pubDate > today) continue; // not yet its publish date
    if (!fm.title) continue;
    candidates.push({
      slug,
      title: fm.title,
      description: fm.description || '',
      firstPublished: firstPub,
      date: pubDate,
    });
  }
  // Tweet oldest-first so a backlog drains chronologically.
  candidates.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
  return candidates;
}

async function main() {
  const log = loadLog();
  const candidates = findCandidates(log);

  if (candidates.length === 0) {
    console.log('No new posts to tweet today.');
    return;
  }

  console.log(`Found ${candidates.length} post(s) to tweet:`);
  for (const c of candidates) console.log(`  - ${c.slug} (date: ${c.date})`);

  let client = null;
  if (!DRY_RUN) {
    const { X_API_KEY, X_API_SECRET, X_ACCESS_TOKEN, X_ACCESS_TOKEN_SECRET } = process.env;
    if (!X_API_KEY || !X_API_SECRET || !X_ACCESS_TOKEN || !X_ACCESS_TOKEN_SECRET) {
      console.error('Missing X API credentials in env. Aborting.');
      process.exit(1);
    }
    client = new TwitterApi({
      appKey: X_API_KEY,
      appSecret: X_API_SECRET,
      accessToken: X_ACCESS_TOKEN,
      accessSecret: X_ACCESS_TOKEN_SECRET,
    });
  }

  for (const c of candidates) {
    const text = buildTweetText(c);
    console.log(`\n→ ${c.slug}`);
    console.log(text);
    if (DRY_RUN) {
      console.log('(DRY_RUN — not posting)');
      continue;
    }
    try {
      const result = await client.v2.tweet(text);
      const tweetId = result?.data?.id;
      console.log(`  ✓ posted: https://x.com/ishahealth/status/${tweetId}`);
      log.tweeted.push({
        slug: c.slug,
        date: c.date,
        tweetedAt: new Date().toISOString(),
        tweetId,
      });
      saveLog(log);
    } catch (err) {
      console.error(`  ✗ failed: ${err.message || err}`);
      // Don't crash the whole run on a single failure.
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
