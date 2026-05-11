import { test, expect } from '@playwright/test';

// Spot-checks internal link health on a representative sample of pages.
// Doesn't crawl the whole site (that's what the weekly external lychee
// audit is for); the goal here is to fail fast on obvious regressions
// like the future-dated-post 404 we shipped.
const SAMPLE_PAGES = [
  '/',
  '/blog',
  '/pricing',
  '/outcomes',
  '/ketamine-therapist-directory',
  '/conditions/ptsd',
  '/post/how-does-ketamine-work',
];

test.describe('Internal link integrity', () => {
  test('sampled pages have no internal links to 404 or to known-redirected paths', async ({
    page,
    request,
  }) => {
    // Internal redirects we know about — flagged so we update the source link
    // rather than relying on the redirect. Sourced from next.config.mjs.
    const KNOWN_REDIRECTS = new Set([
      '/locations/ketamine-therapy-nyc',
      '/ketamine-therapy-nyc',
      '/post/is-ketamine-addictive',
      '/post/how-much-does-ketamine-therapy-cost',
      '/locations',
      '/current-patients',
      '/about-us',
      '/compare',
      '/conditions',
      '/guide',
      '/ketamine-for-depression',
      '/ketamine-for-anxiety',
      '/superbill',
      '/scheduling',
      '/collaborating-with-isha-health',
    ]);

    const seen = new Map<string, number>(); // path → status
    const failures: string[] = [];

    for (const pagePath of SAMPLE_PAGES) {
      await page.goto(pagePath);
      const hrefs = await page.locator('a[href^="/"]').evaluateAll((els) =>
        Array.from(new Set(els.map((el) => (el as HTMLAnchorElement).getAttribute('href') ?? ''))),
      );

      for (const href of hrefs) {
        if (!href || href.startsWith('//')) continue;
        const url = href.split('#')[0].split('?')[0]; // strip fragment + query
        if (!url || url === '/') continue;

        if (KNOWN_REDIRECTS.has(url)) {
          failures.push(`${pagePath} → ${url} (known internal redirect; link the final destination)`);
          continue;
        }

        if (!seen.has(url)) {
          const resp = await request.get(`http://localhost:3000${url}`, { maxRedirects: 0 });
          seen.set(url, resp.status());
        }
        const status = seen.get(url)!;
        if (status >= 400) {
          failures.push(`${pagePath} → ${url} (HTTP ${status})`);
        }
      }
    }

    expect(failures, `internal-link issues:\n  ${failures.join('\n  ')}`).toEqual([]);
  });
});
