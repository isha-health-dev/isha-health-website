import { test, expect } from '@playwright/test';

test.describe('SEO essentials', () => {
  test('homepage has correct meta description', async ({ page }) => {
    await page.goto('/');
    const desc = await page.locator('meta[name="description"]').getAttribute('content');
    expect(desc).toContain('88.8%');
    expect(desc).toContain('$350');
  });

  test('homepage has canonical URL', async ({ page }) => {
    await page.goto('/');
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toBe('https://isha.health');
  });

  test('outcomes page has correct meta', async ({ page }) => {
    await page.goto('/outcomes');
    const desc = await page.locator('meta[name="description"]').getAttribute('content');
    expect(desc).toContain('88.79%');
    expect(desc).toContain('546');
  });

  test('pricing page has FAQPage schema', async ({ page }) => {
    await page.goto('/pricing');
    const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
    const hasFaq = schemas.some(s => s.includes('FAQPage'));
    expect(hasFaq).toBe(true);
  });

  test('outcomes page has MedicalStudy schema', async ({ page }) => {
    await page.goto('/outcomes');
    const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
    const hasStudy = schemas.some(s => s.includes('MedicalStudy'));
    expect(hasStudy).toBe(true);
  });

  test('blog post has Article schema and related posts', async ({ page }) => {
    await page.goto('/post/how-much-does-ketamine-therapy-cost');
    const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
    const hasArticle = schemas.some(s => s.includes('"Article"'));
    expect(hasArticle).toBe(true);
    await expect(page.locator('text=Related Posts')).toBeVisible();
  });

  test('blog post has outcomes callout', async ({ page }) => {
    await page.goto('/post/how-much-does-ketamine-therapy-cost');
    await expect(page.locator('text=88.8% of Isha Health patients')).toBeVisible();
    await expect(page.locator('a[href="/outcomes"]').first()).toBeVisible();
  });

  test('sitemap includes outcomes page', async ({ page }) => {
    const response = await page.goto('/sitemap.xml');
    const body = await response?.text();
    expect(body).toContain('/outcomes');
  });

  test('robots.txt allows all crawlers', async ({ page }) => {
    const response = await page.goto('/robots.txt');
    const body = await response?.text();
    expect(body).toContain('Allow: /');
    expect(body).toContain('sitemap');
  });

  test('condition pages have outcomes callout', async ({ page }) => {
    await page.goto('/conditions/treatment-resistant-depression');
    await expect(page.locator('text=88.8% of Isha Health patients')).toBeVisible();
    await expect(page.locator('a[href="/outcomes"]').first()).toBeVisible();
  });

  test('no truncated title tags', async ({ page }) => {
    const pages = [
      '/conditions/treatment-resistant-depression',
      '/guide/ketamine-for-depression',
      '/compare/ketamine-vs-antidepressants',
    ];
    for (const path of pages) {
      await page.goto(path);
      const title = await page.title();
      expect(title).not.toMatch(/\|$/);
      expect(title).not.toMatch(/,$/);
      expect(title.length).toBeGreaterThan(10);
    }
  });

  test('footer has outcomes link on every page', async ({ page }) => {
    await page.goto('/pricing');
    await expect(page.locator('a[href="/outcomes"]', { hasText: 'Patient Outcomes' })).toBeVisible();
  });
});
