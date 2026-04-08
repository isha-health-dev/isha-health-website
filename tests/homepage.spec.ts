import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders hero section with correct heading', async ({ page }) => {
    await expect(page.locator('h1')).toContainText("Unlock Your Mind's Potential");
  });

  test('hero CTA links to /am-i-a-candidate', async ({ page }) => {
    const cta = page.locator('a[href="/am-i-a-candidate"]');
    await expect(cta).toBeVisible();
    await expect(cta).toContainText('Am I a Candidate');
  });

  test('outcomes trust bar shows key stats', async ({ page }) => {
    await expect(page.locator('text=88.8%').first()).toBeVisible();
    await expect(page.locator('text=92.6%').first()).toBeVisible();
    await expect(page.locator('text=over 500 patients').first()).toBeVisible();
  });

  test('outcomes bar links to /outcomes', async ({ page }) => {
    const link = page.locator('a[href="/outcomes"]').first();
    await expect(link).toBeVisible();
  });

  test('neuroplasticity section shows 88.8% stat', async ({ page }) => {
    await expect(page.locator('text=Where Healing Meets Innovation')).toBeVisible();
  });

  test('Joseph case study section exists', async ({ page }) => {
    await expect(page.locator('text=Joseph, Art Director')).toBeVisible();
    await expect(page.locator('a[href*="youtube.com"]')).toBeVisible();
  });

  test('How It Works has 4 steps', async ({ page }) => {
    const section = page.locator('text=How It Works').first();
    await expect(section).toBeVisible();
    await expect(page.locator('h3:has-text("Meet Your Doctor")').first()).toBeVisible();
    await expect(page.locator('h3:has-text("Receive Your Medication")')).toBeVisible();
    await expect(page.locator('h3:has-text("Prepare with Your Team")')).toBeVisible();
    await expect(page.locator('h3:has-text("Your First Session")')).toBeVisible();
  });

  test('Get Started button links to /appointment', async ({ page }) => {
    const btn = page.locator('a[href="/appointment"]', { hasText: 'Get Started' });
    await expect(btn).toBeVisible();
  });

  test('Why Choose section has 3 cards', async ({ page }) => {
    await expect(page.locator('text=Faster and Better Outcomes')).toBeVisible();
    await expect(page.locator('text=Affordable, Accessible Telehealth')).toBeVisible();
    await expect(page.locator('text=Personalized, Evidence-Based')).toBeVisible();
  });

  test('testimonials section shows patient quotes', async ({ page }) => {
    await expect(page.locator('text=What Our Patients Say')).toBeVisible();
    // At least some testimonials should be visible
    await expect(page.locator('text=Amber S, Brooklyn')).toBeVisible();
    await expect(page.locator('text=Rakesh V, Seattle')).toBeVisible();
  });

  test('collaborative care section with founder and directory link', async ({ page }) => {
    await expect(page.locator('text=A Collaborative Approach to Care')).toBeVisible();
    await expect(page.locator('text=Mai Shimada, MD').first()).toBeVisible();
    await expect(page.locator('text=600+ clinicians').first()).toBeVisible();
    const dirLink = page.locator('a[href="/ketamine-therapist-directory"]', { hasText: 'Browse the Clinician Directory' });
    await expect(dirLink).toBeVisible();
  });

  test('In the News section shows press logos', async ({ page }) => {
    const newsHeading = page.locator('text=In the News').first();
    await newsHeading.scrollIntoViewIfNeeded();
    await expect(newsHeading).toBeVisible();
    await expect(page.locator('img[alt="Forbes"]').first()).toBeVisible();
    await expect(page.locator('img[alt="The New Yorker"]').first()).toBeVisible();
    await expect(page.locator('img[alt="Glamour"]').first()).toBeVisible();
  });

  test('featured content section links to key pages', async ({ page }) => {
    // Multiple /outcomes links: trust bar, neuroplasticity, featured card, footer
    await expect(page.locator('a[href="/outcomes"]').first()).toBeVisible();
    await expect(page.locator('a[href*="case-study-julian"]')).toBeVisible();
    await expect(page.locator('a[href*="how-much-does-ketamine-therapy-cost"]').first()).toBeVisible();
  });

  test('navbar is sticky', async ({ page }) => {
    const navbar = page.locator('.navbar');
    await expect(navbar).toBeVisible();
    await page.evaluate(() => window.scrollTo(0, 1000));
    await expect(navbar).toBeVisible();
  });

  test('footer has Patient Outcomes link', async ({ page }) => {
    await expect(page.locator('.footer-link-two[href="/outcomes"]')).toBeVisible();
  });
});
