import { test, expect } from '@playwright/test';

test.describe('Navigation and links', () => {
  test('navbar has pricing and appointment links', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('a[href="/pricing"]').first()).toBeVisible();
    await expect(page.locator('a[href="/appointment"]').first()).toBeVisible();
  });

  test('footer has all required sections', async ({ page }) => {
    await page.goto('/');
    // Service links in footer
    await expect(page.locator('.footer-link-two[href="/about-us/ketamine-therapy"]')).toBeVisible();
    await expect(page.locator('.footer-link-two[href="/ketamine-therapy-for-depression"]')).toBeVisible();
    await expect(page.locator('.footer-link-two[href="/outcomes"]')).toBeVisible();
    // Legal links
    await expect(page.locator('.footer-link-two[href="/terms-of-use"]')).toBeVisible();
    await expect(page.locator('.footer-link-two[href="/privacy-policy"]')).toBeVisible();
    // Location links
    await expect(page.locator('.footer-link-two[href*="ketamine-therapy-in-california"]')).toBeVisible();
  });

  test('internal links do not use absolute URLs', async ({ page }) => {
    await page.goto('/');
    const allLinks = await page.locator('a[href^="https://isha.health/"]').all();
    const hrefs: string[] = [];
    for (const link of allLinks) {
      const href = await link.getAttribute('href');
      if (href) hrefs.push(href);
    }
    // Filter out known external press links
    const internalAbsolute = hrefs.filter(
      h => !h.includes('forbes') && !h.includes('newyorker') && !h.includes('glamour') && !h.includes('youtube')
    );
    // Should have minimal absolute internal links
    expect(internalAbsolute.length).toBeLessThanOrEqual(3);
  });

  test('BingSiteAuth.xml is accessible', async ({ page }) => {
    const response = await page.goto('/BingSiteAuth.xml');
    expect(response?.status()).toBe(200);
    const body = await response?.text();
    expect(body).toContain('20CDD9BA2D71831A2CDBA6A7679F26A3');
  });
});
