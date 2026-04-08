import { test, expect } from '@playwright/test';

test.describe('Clinician Directory', () => {
  test('directory page loads with therapist cards', async ({ page }) => {
    await page.goto('/ketamine-therapist-directory');
    await expect(page.locator('h1')).toContainText('Clinician Directory');
    // Should have at least some therapist cards
    const cards = page.locator('a[href*="/ketamine-therapist-directory/"]');
    await expect(cards.first()).toBeVisible();
  });

  test('search filter works', async ({ page }) => {
    await page.goto('/ketamine-therapist-directory');
    await page.fill('input[placeholder="Search by name..."]', 'zzzznonexistent');
    await expect(page.locator('text=No therapists match your filters')).toBeVisible();
  });

  test('Why Join section exists', async ({ page }) => {
    await page.goto('/ketamine-therapist-directory');
    // Scroll to bottom to load the Why Join section
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    await expect(page.locator('text=Are You a Ketamine Therapy Clinician').first()).toBeVisible();
    await expect(page.locator('text=Completely Free').first()).toBeVisible();
  });

  test('login page loads', async ({ page }) => {
    const response = await page.goto('/ketamine-therapist-directory/login');
    expect(response?.status()).toBe(200);
  });

  test('create account page loads', async ({ page }) => {
    const response = await page.goto('/ketamine-therapist-directory/create-account');
    expect(response?.status()).toBe(200);
  });
});
