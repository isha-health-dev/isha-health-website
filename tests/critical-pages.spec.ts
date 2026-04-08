import { test, expect } from '@playwright/test';

test.describe('Critical pages load without errors', () => {
  const pages = [
    { path: '/', title: 'Online Ketamine Therapy' },
    { path: '/pricing', title: 'Pricing' },
    { path: '/outcomes', title: 'Patient Outcomes' },
    { path: '/appointment', title: 'Appointment' },
    { path: '/am-i-a-candidate', title: 'Candidate' },
    { path: '/blog', title: 'Blog' },
    { path: '/resources', title: 'Resources' },
    { path: '/ketamine-therapist-directory', title: 'Clinician Directory' },
    { path: '/dr-mai-shimada', title: 'Mai Shimada' },
    { path: '/guide/ketamine-therapy', title: 'Complete Guide' },
    { path: '/guide/ketamine-for-depression', title: 'Ketamine for Depression' },
    { path: '/guide/choosing-ketamine-provider', title: 'Choose a' },
    { path: '/conditions/treatment-resistant-depression', title: 'Treatment-Resistant' },
    { path: '/compare/ketamine-vs-antidepressants', title: 'Ketamine vs' },
    { path: '/faq/ketamine-therapy', title: 'FAQ' },
    { path: '/locations/ketamine-therapy-san-francisco', title: 'San Francisco' },
  ];

  for (const { path, title } of pages) {
    test(`${path} returns 200 and has correct title`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      await expect(page).toHaveTitle(new RegExp(title, 'i'));
    });
  }
});

test.describe('404 handling', () => {
  test('non-existent page returns 404', async ({ page }) => {
    const response = await page.goto('/this-page-does-not-exist');
    expect(response?.status()).toBe(404);
  });
});
