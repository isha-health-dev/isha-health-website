#!/usr/bin/env node
// Generative Engine Optimization audit for content/blog/*.mdx
//
// Scores each post on heuristics that correlate with citation by AI search
// engines (ChatGPT, Perplexity, Claude, Google AI Overviews, Bing Copilot):
//   - answer-first structure (TL;DR near the top)
//   - Q&A formatting (question-shaped headings)
//   - citation density to authoritative sources
//   - stats / concrete numbers
//   - structured frontmatter (becomes Article schema)
//   - substantive length + heading hierarchy
//
// Outputs:
//   - audits/blog-geo-audit.csv (one row per post, all signals)
//   - stdout summary by grade + top issues

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const BLOG_DIR = join(process.cwd(), 'content', 'blog');
const CSV_OUT = join(process.cwd(), 'audits', 'blog-geo-audit.csv');

// Authoritative domains AI engines treat as high-trust citations.
const AUTHORITATIVE = [
  'pubmed.ncbi.nlm.nih.gov',
  'ncbi.nlm.nih.gov',
  'nih.gov',
  'fda.gov',
  'cdc.gov',
  'who.int',
  'doi.org',
  'dx.doi.org',
  'nejm.org',
  'jamanetwork.com',
  'thelancet.com',
  'nature.com',
  'sciencedirect.com',
  'cell.com',
  'springer.com',
  'wiley.com',
  'sagepub.com',
  'tandfonline.com',
  'frontiersin.org',
  'psychiatryonline.org',
  'apa.org',
  'health.harvard.edu',
  'mayoclinic.org',
  'hopkinsmedicine.org',
  'stanford.edu',
  'berkeley.edu',
  'samhsa.gov',
  'nimh.nih.gov',
];

function splitFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { fm: {}, body: raw };
  const fm = {};
  for (const line of m[1].split('\n')) {
    const km = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (km) fm[km[1]] = km[2].replace(/^["']|["']$/g, '').trim();
  }
  return { fm, body: m[2] };
}

function scorePost(filename, raw) {
  const { fm, body } = splitFrontmatter(raw);
  const signals = { file: filename, slug: fm.slug || filename.replace(/\.mdx$/, '') };

  // Frontmatter quality
  signals.hasTitle = !!fm.title && fm.title.length > 10;
  signals.hasDescription = !!fm.description;
  signals.descLen = fm.description?.length || 0;
  signals.hasFirstPublished = !!fm.firstPublished;
  signals.hasAuthor = !!fm.author;
  signals.hasCategory = !!fm.category;
  signals.hasImage = !!fm.image;
  signals.hasDate = !!fm.date;

  // Body analysis
  const wordCount = body.split(/\s+/).filter(Boolean).length;
  signals.wordCount = wordCount;

  // TL;DR or answer-first: explicit marker within first ~800 chars of body.
  const opener = body.slice(0, 800);
  signals.hasTldr =
    /(^|\n)\s*#{1,3}\s*tl[;:]?dr/i.test(opener) ||
    /(^|\n)\s*\*\*tl[;:]?dr/i.test(opener) ||
    /(^|\n)\s*\*\*(summary|key takeaway|key takeaways|the short answer|bottom line|in summary)/i.test(opener);

  // FAQ-style: count headings (##, ###) that end with "?"
  const questionHeadings = (body.match(/^#{2,4}\s+[^\n]+\?\s*$/gm) || []).length;
  signals.questionHeadings = questionHeadings;
  signals.hasFaq = questionHeadings >= 2;

  // All headings (for structure)
  signals.h2Count = (body.match(/^##\s+/gm) || []).length;
  signals.h3Count = (body.match(/^###\s+/gm) || []).length;

  // External citations to authoritative sources
  const links = body.match(/\[[^\]]+\]\(https?:\/\/[^)]+\)/g) || [];
  const externalLinks = links.filter((l) => !l.includes('isha.health'));
  signals.externalLinks = externalLinks.length;
  signals.authoritativeCitations = externalLinks.filter((l) =>
    AUTHORITATIVE.some((d) => l.includes(d)),
  ).length;

  // Internal cross-links
  signals.internalLinks = (body.match(/\]\(\/[^)]+\)/g) || []).length;

  // Stats density: count numeric facts (% or N digits or "X in Y")
  signals.statsCount =
    (body.match(/\d+%/g) || []).length +
    (body.match(/\b(?:one|two|three|four|five|six|seven|eight|nine|ten) (?:in|out of)/gi) || []).length +
    (body.match(/\$\d+/g) || []).length;

  // List formatting
  signals.bulletLines = (body.match(/^[-*]\s+/gm) || []).length;
  signals.hasLists = signals.bulletLines >= 3;

  // Date freshness — firstPublished within last 3 years (today is 2026-05-15)
  const fpYear = fm.firstPublished ? parseInt(fm.firstPublished.slice(0, 4)) : 0;
  signals.recencyYears = fpYear ? 2026 - fpYear : 99;
  signals.isFresh = signals.recencyYears <= 3;

  // ----- SCORING (out of 100) -----
  let score = 0;
  const reasons = [];
  const wins = [];

  // Frontmatter (25 pts)
  if (signals.hasTitle) score += 5; else reasons.push('missing/short title');
  if (signals.hasDescription && signals.descLen >= 120 && signals.descLen <= 165) {
    score += 10;
    wins.push('good description');
  } else if (signals.hasDescription) {
    score += 5;
    reasons.push(`description ${signals.descLen} chars (target 120–165)`);
  } else {
    reasons.push('missing description');
  }
  if (signals.hasFirstPublished) score += 3; else reasons.push('missing firstPublished');
  if (signals.hasAuthor) score += 2;
  if (signals.hasImage) score += 5; else reasons.push('missing featured image');

  // Body substance (20 pts)
  if (wordCount >= 800) score += 10;
  else if (wordCount >= 500) score += 7;
  else if (wordCount >= 300) score += 4;
  else reasons.push(`only ${wordCount} words (target 500+)`);

  if (signals.h2Count >= 3) score += 5;
  else reasons.push(`only ${signals.h2Count} H2 headings`);

  if (signals.hasLists) score += 5; else reasons.push('no list formatting');

  // GEO-specific (40 pts)
  if (signals.hasTldr) {
    score += 15;
    wins.push('answer-first opener');
  } else {
    reasons.push('no TL;DR / answer-first opener');
  }

  if (signals.questionHeadings >= 4) score += 10;
  else if (signals.questionHeadings >= 2) score += 7;
  else if (signals.questionHeadings >= 1) score += 3;
  else reasons.push('no Q&A headings');

  if (signals.authoritativeCitations >= 5) score += 10;
  else if (signals.authoritativeCitations >= 3) score += 7;
  else if (signals.authoritativeCitations >= 1) score += 3;
  else reasons.push('no authoritative citations');

  if (signals.statsCount >= 5) score += 5;
  else if (signals.statsCount >= 2) score += 3;
  else reasons.push('low stats density');

  // Trust + freshness (15 pts)
  if (signals.isFresh) score += 5; else reasons.push(`stale (${signals.recencyYears}y old)`);
  if (signals.internalLinks >= 3) score += 5;
  else if (signals.internalLinks >= 1) score += 3;
  else reasons.push('no internal cross-links');
  if (signals.externalLinks >= 3) score += 5;

  signals.score = score;
  signals.grade = score >= 85 ? 'A' : score >= 70 ? 'B' : score >= 55 ? 'C' : 'D';
  signals.reasons = reasons.join('; ');
  signals.wins = wins.join('; ');
  return signals;
}

// ----- Run -----
const files = readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'));
const rows = files.map((f) => scorePost(f, readFileSync(join(BLOG_DIR, f), 'utf-8')));

// CSV
const cols = [
  'slug', 'score', 'grade', 'wordCount', 'hasTldr', 'questionHeadings',
  'h2Count', 'h3Count', 'authoritativeCitations', 'externalLinks',
  'internalLinks', 'statsCount', 'bulletLines', 'descLen', 'recencyYears',
  'hasFirstPublished', 'hasImage', 'reasons',
];
const escape = (v) => {
  const s = String(v ?? '');
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};
const csv = [cols.join(','), ...rows.map((r) => cols.map((c) => escape(r[c])).join(','))].join('\n');
writeFileSync(CSV_OUT, csv);

// Summary
rows.sort((a, b) => a.score - b.score);
const grades = rows.reduce((acc, r) => ((acc[r.grade] = (acc[r.grade] || 0) + 1), acc), {});

const issueCount = (key) => rows.filter((r) => r.reasons.includes(key)).length;

console.log(`Scanned ${rows.length} blog posts. CSV written to ${CSV_OUT.replace(process.cwd() + '/', '')}\n`);
console.log('=== Grade distribution ===');
for (const g of ['A', 'B', 'C', 'D']) {
  const n = grades[g] || 0;
  const pct = Math.round((n / rows.length) * 100);
  console.log(`  ${g}: ${String(n).padStart(3)} posts (${pct}%)`);
}

console.log('\n=== Top issues (count of posts affected) ===');
const issues = [
  ['no TL;DR / answer-first opener', issueCount('no TL;DR')],
  ['no Q&A headings', issueCount('no Q&A headings')],
  ['no authoritative citations', issueCount('no authoritative citations')],
  ['low stats density', issueCount('low stats density')],
  ['no list formatting', issueCount('no list formatting')],
  ['missing featured image', issueCount('missing featured image')],
  ['missing firstPublished', issueCount('missing firstPublished')],
  ['description out of range (120–165)', issueCount('description ')],
  ['stale (>3y old)', issueCount('stale (')],
  ['short (<500 words)', issueCount('only ') /* word count or h2 count */],
];
for (const [label, n] of issues.sort((a, b) => b[1] - a[1])) {
  const pct = Math.round((n / rows.length) * 100);
  console.log(`  ${String(n).padStart(3)} (${String(pct).padStart(2)}%) — ${label}`);
}

console.log('\n=== 15 worst-scoring posts (quick wins) ===');
for (const r of rows.slice(0, 15)) {
  console.log(`  ${String(r.score).padStart(3)} (${r.grade}) /post/${r.slug}`);
  console.log(`       ${r.reasons.slice(0, 140)}`);
}

console.log('\n=== 10 best-scoring posts (templates to copy) ===');
const best = [...rows].sort((a, b) => b.score - a.score).slice(0, 10);
for (const r of best) {
  console.log(`  ${String(r.score).padStart(3)} (${r.grade}) /post/${r.slug}`);
}
