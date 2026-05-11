#!/usr/bin/env node
// Static lint for metadata title/description length across src/app/**/page.tsx.
// Doesn't need the site to be running — pure source scan. Catches the city-
// page meta-description-too-long regression class before deploy.

import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const TITLE_HARD_MAX = 70; // Google starts truncating around 60; >70 is a hard fail.
const DESC_SOFT_MAX = 155; // Recommended ceiling.
const DESC_HARD_MAX = 165; // Beyond this, Sitebulb/Ahrefs flag it.

function* walkPages(dir) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) {
      yield* walkPages(p);
    } else if (entry === 'page.tsx' || entry === 'layout.tsx') {
      yield p;
    }
  }
}

// Pulls metadata.title / metadata.description string literals. Handles single-,
// double-quoted, and template-literal strings without ${} substitutions. Skips
// fields inside generateMetadata() bodies (those vary per request — out of
// scope for static lint).
function extractMetadataField(src, field) {
  // Find the metadata object/declaration and grab the field within it.
  const metaMatch = src.match(/export\s+const\s+metadata\s*(?::\s*Metadata)?\s*=\s*\{([\s\S]*?)^\};/m);
  if (!metaMatch) return null;
  const block = metaMatch[1];
  const re = new RegExp(`\\b${field}:\\s*(['"\`])([^'"\`]*?)\\1`);
  const m = block.match(re);
  return m ? m[2] : null;
}

const root = join(process.cwd(), 'src', 'app');
const findings = { errors: [], warnings: [] };
let scanned = 0;

for (const file of walkPages(root)) {
  const src = readFileSync(file, 'utf-8');
  scanned++;
  const rel = file.replace(process.cwd() + '/', '');

  const title = extractMetadataField(src, 'title');
  if (title && title.length > TITLE_HARD_MAX) {
    findings.errors.push(`${rel}: title is ${title.length} chars (max ${TITLE_HARD_MAX}): "${title}"`);
  }

  const desc = extractMetadataField(src, 'description');
  if (desc) {
    if (desc.length > DESC_HARD_MAX) {
      findings.errors.push(`${rel}: description is ${desc.length} chars (max ${DESC_HARD_MAX}): "${desc.slice(0, 100)}..."`);
    } else if (desc.length > DESC_SOFT_MAX) {
      findings.warnings.push(`${rel}: description is ${desc.length} chars (target ≤${DESC_SOFT_MAX}): "${desc.slice(0, 100)}..."`);
    }
  }
}

console.log(`scanned ${scanned} page/layout files`);
if (findings.warnings.length) {
  console.log(`\n⚠ ${findings.warnings.length} warning(s):`);
  findings.warnings.forEach((w) => console.log(`  ${w}`));
}
if (findings.errors.length) {
  console.log(`\n✗ ${findings.errors.length} error(s):`);
  findings.errors.forEach((e) => console.log(`  ${e}`));
  process.exit(1);
}
console.log('✓ all metadata within length budgets');
