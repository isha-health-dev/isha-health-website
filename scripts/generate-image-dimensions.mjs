#!/usr/bin/env node
// Scans public/images/ at build time and writes dimensions to
// src/lib/image-dims.json so MDX images can use next/image without CLS.
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { imageSize } from 'image-size';

const IMAGES_DIR = 'public/images';
const OUTPUT = 'src/lib/image-dims.json';

const dims = {};
const files = readdirSync(IMAGES_DIR);
let ok = 0,
  failed = 0;

for (const f of files) {
  if (!/\.(png|jpe?g|webp|gif|svg)$/i.test(f)) continue;
  try {
    const buf = readFileSync(join(IMAGES_DIR, f));
    const d = imageSize(buf);
    if (d && d.width && d.height) {
      dims[`/images/${f}`] = { w: d.width, h: d.height };
      ok++;
    } else {
      failed++;
    }
  } catch {
    failed++;
  }
}

writeFileSync(OUTPUT, JSON.stringify(dims));
console.log(`Wrote ${ok} image dimensions (${failed} failed) to ${OUTPUT}`);
