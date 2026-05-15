#!/usr/bin/env node
// Tier 1 programmatic GEO fixes for content/blog/*.mdx:
//   1. Backfill `firstPublished` from `date` for posts missing it.
//   2. Trim `description` >165 chars down to ≤160 at a sentence boundary
//      when possible, otherwise to the last full word ≤160.
//
// Idempotent: re-running on already-fixed posts is a no-op.

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const BLOG_DIR = join(process.cwd(), 'content', 'blog');
const MAX_DESC = 160;
const HARD_LIMIT = 165;

function trimDescription(desc) {
  if (desc.length <= HARD_LIMIT) return desc;
  // Prefer a sentence boundary at or before MAX_DESC.
  const sentenceCut = desc.slice(0, MAX_DESC).match(/^(.+[.!?])\s/);
  if (sentenceCut && sentenceCut[1].length >= 100) return sentenceCut[1];
  // Otherwise, last full word ≤MAX_DESC - 1 (leaving room for nothing).
  const wordCut = desc.slice(0, MAX_DESC).match(/^(.+)\s\S*$/);
  if (wordCut) return wordCut[1].replace(/[,;:—-]\s*$/, '') + '.';
  return desc.slice(0, MAX_DESC);
}

let trimmedCount = 0;
let backfilledCount = 0;
const examples = { trimmed: [], backfilled: [] };

for (const file of readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))) {
  const path = join(BLOG_DIR, file);
  let raw = readFileSync(path, 'utf-8');
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fmMatch) continue;
  let fm = fmMatch[1];
  let changed = false;

  // ----- 1. Trim long descriptions -----
  // Handles both quoted and unquoted forms. Description can wrap to next
  // lines if it was authored that way, but in this repo every description
  // is single-line, quoted or unquoted.
  const descRe = /^(description:\s*)(["'])([^]*?)\2\s*$/m;
  const descMatch = fm.match(descRe);
  if (descMatch && descMatch[3].length > HARD_LIMIT) {
    const trimmed = trimDescription(descMatch[3]);
    if (trimmed.length <= HARD_LIMIT && trimmed.length >= 80) {
      fm = fm.replace(descRe, `${descMatch[1]}${descMatch[2]}${trimmed}${descMatch[2]}`);
      changed = true;
      trimmedCount++;
      if (examples.trimmed.length < 3) {
        examples.trimmed.push({
          slug: file.replace(/\.mdx$/, ''),
          before: descMatch[3],
          after: trimmed,
        });
      }
    }
  }

  // ----- 2. Backfill firstPublished from date -----
  const hasFirstPublished = /^firstPublished:\s*\S/m.test(fm);
  if (!hasFirstPublished) {
    const dateMatch = fm.match(/^(date:\s*)(\S+)\s*$/m);
    if (dateMatch) {
      const dateValue = dateMatch[2].replace(/^["']|["']$/g, '');
      // Insert immediately after the `date:` line for tidy frontmatter.
      fm = fm.replace(/^(date:.*)$/m, `$1\nfirstPublished: ${dateValue}`);
      changed = true;
      backfilledCount++;
      if (examples.backfilled.length < 3) {
        examples.backfilled.push({
          slug: file.replace(/\.mdx$/, ''),
          date: dateValue,
        });
      }
    }
  }

  if (changed) {
    raw = raw.replace(fmMatch[0], `---\n${fm}\n---\n`);
    writeFileSync(path, raw);
  }
}

console.log(`Trimmed ${trimmedCount} over-long descriptions.`);
console.log(`Backfilled firstPublished on ${backfilledCount} posts.`);

if (examples.trimmed.length) {
  console.log('\nSample trims:');
  for (const e of examples.trimmed) {
    console.log(`  /post/${e.slug}`);
    console.log(`    before (${e.before.length}): ${e.before.slice(0, 120)}…`);
    console.log(`    after  (${e.after.length}): ${e.after}`);
  }
}
if (examples.backfilled.length) {
  console.log('\nSample backfills:');
  for (const e of examples.backfilled) {
    console.log(`  /post/${e.slug} → firstPublished: ${e.date}`);
  }
}
