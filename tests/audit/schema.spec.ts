import { test, expect } from '@playwright/test';

// Validates JSON-LD on representative pages of each route type. Catches the
// classes of bug we shipped historically: relative image URLs in Article
// schema, unvalidated free-text in Person.url, and breadcrumb URLs pointing
// at routes that 301-redirect.

const SAMPLE_PAGES = [
  '/',
  '/post/how-does-ketamine-work',
  '/conditions/ptsd',
  '/compare/ketamine-vs-antidepressants',
  '/guide/ketamine-therapy',
  '/locations/ketamine-therapy-los-angeles',
  '/locations/online-at-home-ketamine-therapy-in-california',
  '/pricing',
  '/outcomes',
];

interface JsonLd {
  '@context'?: string;
  '@type'?: string | string[];
  [k: string]: unknown;
}

function getType(node: JsonLd): string {
  const t = node['@type'];
  return Array.isArray(t) ? t[0] : (t ?? '');
}

function* walkUrls(node: unknown, path: string = '$'): Generator<{ key: string; value: string; path: string }> {
  if (typeof node !== 'object' || node === null) return;
  for (const [k, v] of Object.entries(node as Record<string, unknown>)) {
    if (typeof v === 'string' && /^(image|url|item|logo|sameAs|mainEntityOfPage)$/.test(k)) {
      yield { key: k, value: v, path: `${path}.${k}` };
    } else if (typeof v === 'object' && v !== null) {
      yield* walkUrls(v, `${path}.${k}`);
    }
  }
}

test.describe('JSON-LD validation', () => {
  for (const path of SAMPLE_PAGES) {
    test(`${path}: all JSON-LD blocks parse and pass invariants`, async ({ page }) => {
      await page.goto(path);
      const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
      expect(blocks.length, `${path} has no JSON-LD`).toBeGreaterThan(0);

      for (const raw of blocks) {
        let parsed: JsonLd;
        try {
          parsed = JSON.parse(raw);
        } catch (e) {
          throw new Error(`Invalid JSON in ${path}: ${(e as Error).message}\n--- raw ---\n${raw.slice(0, 500)}`);
        }
        expect(parsed['@context'], `missing @context on ${path}`).toBeTruthy();
        expect(parsed['@type'], `missing @type on ${path}`).toBeTruthy();

        // All URL-shaped fields must be absolute (the relative-image bug).
        for (const { key, value, path: jp } of walkUrls(parsed)) {
          expect(
            /^https?:\/\//.test(value),
            `${path} has non-absolute URL at ${jp} (key=${key}): "${value.slice(0, 80)}"`,
          ).toBeTruthy();
          // Catch free-text stuffed into URL fields (the bio-as-website bug).
          expect(
            value.length < 500 && !/\s/.test(value),
            `${path} has malformed URL at ${jp}: "${value.slice(0, 80)}"`,
          ).toBeTruthy();
        }

        // Type-specific required fields.
        const t = getType(parsed);
        if (t === 'Article') {
          for (const k of ['headline', 'datePublished', 'author', 'publisher', 'image']) {
            expect(parsed[k], `Article on ${path} missing ${k}`).toBeTruthy();
          }
        }
        if (t === 'BreadcrumbList') {
          const items = (parsed.itemListElement as Array<Record<string, unknown>>) ?? [];
          for (const item of items) {
            expect(item.position, 'breadcrumb item missing position').toBeTruthy();
            expect(item.name, 'breadcrumb item missing name').toBeTruthy();
            expect(item.item, 'breadcrumb item missing item URL').toBeTruthy();
          }
        }
      }
    });
  }

  test('breadcrumb item URLs do not redirect', async ({ page, request }) => {
    // Verify the redirect-target-breadcrumb bug stays fixed: every breadcrumb
    // <item> URL must return 200 directly, not 301.
    const checked = new Set<string>();
    for (const path of ['/conditions/ptsd', '/compare/ketamine-vs-ect', '/guide/ketamine-therapy']) {
      await page.goto(path);
      const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
      for (const raw of blocks) {
        const parsed = JSON.parse(raw) as JsonLd;
        if (getType(parsed) !== 'BreadcrumbList') continue;
        const items = (parsed.itemListElement as Array<Record<string, unknown>>) ?? [];
        for (const item of items) {
          const url = item.item as string;
          if (!url.startsWith('https://isha.health') || checked.has(url)) continue;
          checked.add(url);
          const resp = await request.get(url, { maxRedirects: 0 });
          expect(
            resp.status(),
            `breadcrumb URL ${url} returned ${resp.status()} (expected 200, not a redirect)`,
          ).toBe(200);
        }
      }
    }
  });
});
