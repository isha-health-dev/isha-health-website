import { test, expect } from '@playwright/test';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

// Catches the regression where /sitemap.xml shipped with zero /post/ URLs
// because readdirSync silently failed at runtime. Floors are deliberately
// low so they don't false-fail when content is added; the sentinel checks
// are what guard against silent-empty regressions.
test.describe('Sitemap completeness', () => {
  test('sitemap is well-formed and has expected URL volume', async ({ page }) => {
    const response = await page.goto('/sitemap.xml');
    expect(response?.status()).toBe(200);
    const body = await response!.text();
    const locs = body.match(/<loc>[^<]+<\/loc>/g) ?? [];
    expect(locs.length).toBeGreaterThan(400);

    const urls = new Set(locs.map((m) => m.replace(/<\/?loc>/g, '')));
    expect(urls.size).toBe(locs.length); // no duplicates
  });

  test('sitemap contains all major dynamic route types', async ({ page }) => {
    const body = await (await page.goto('/sitemap.xml'))!.text();

    // Floors per route family — set well below current counts so these only
    // fire when an entire family silently drops out (the actual regression
    // we hit). Bump as the site grows.
    const checks: Array<[RegExp, number, string]> = [
      [/<loc>https:\/\/isha\.health\/post\//g, 150, '/post/'],
      [/<loc>https:\/\/isha\.health\/conditions\//g, 5, '/conditions/'],
      [/<loc>https:\/\/isha\.health\/compare\//g, 5, '/compare/'],
      [/<loc>https:\/\/isha\.health\/guide\//g, 2, '/guide/'],
      [/<loc>https:\/\/isha\.health\/locations\//g, 15, '/locations/'],
      [/<loc>https:\/\/isha\.health\/ketamine-therapist-directory\//g, 50, '/ketamine-therapist-directory/'],
    ];
    for (const [re, min, label] of checks) {
      const count = (body.match(re) ?? []).length;
      expect(count, `expected ≥${min} URLs under ${label}, got ${count}`).toBeGreaterThanOrEqual(min);
    }
  });

  test('every published blog post is in the sitemap', async ({ page }) => {
    const body = await (await page.goto('/sitemap.xml'))!.text();
    const sitemapPosts = new Set(
      [...body.matchAll(/<loc>https:\/\/isha\.health\/post\/([^<]+)<\/loc>/g)].map((m) => m[1]),
    );

    const today = new Date().toISOString().slice(0, 10);
    const publishedSlugs = readdirSync(join(process.cwd(), 'content', 'blog'))
      .filter((f) => f.endsWith('.mdx'))
      .map((f) => {
        const raw = readFileSync(join(process.cwd(), 'content', 'blog', f), 'utf-8');
        const dateMatch = raw.match(/^date:\s*(.+)$/m);
        const date = dateMatch ? dateMatch[1].trim().replace(/['"]/g, '') : '';
        const isDraft = /^draft:\s*true\b/m.test(raw);
        return { slug: f.replace(/\.mdx$/, ''), date, isDraft };
      })
      .filter((p) => !p.isDraft && p.date && p.date <= today)
      .map((p) => p.slug);

    const missing = publishedSlugs.filter((s) => !sitemapPosts.has(s));
    expect(missing, `published posts missing from sitemap: ${missing.slice(0, 5).join(', ')}`).toHaveLength(0);
  });
});
