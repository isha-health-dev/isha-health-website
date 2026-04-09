# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage.spec.ts >> Homepage >> In the News section shows press logos
- Location: tests/homepage.spec.ts:73:7

# Error details

```
Error: page.goto: Target page, context or browser has been closed
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test.describe('Homepage', () => {
  4   |   test.beforeEach(async ({ page }) => {
> 5   |     await page.goto('/');
      |                ^ Error: page.goto: Target page, context or browser has been closed
  6   |   });
  7   | 
  8   |   test('renders hero section with correct heading', async ({ page }) => {
  9   |     await expect(page.locator('h1')).toContainText("Unlock Your Mind's Potential");
  10  |   });
  11  | 
  12  |   test('hero CTA links to /am-i-a-candidate', async ({ page }) => {
  13  |     const cta = page.locator('a[href="/am-i-a-candidate"]');
  14  |     await expect(cta).toBeVisible();
  15  |     await expect(cta).toContainText('Am I a Candidate');
  16  |   });
  17  | 
  18  |   test('outcomes trust bar shows key stats', async ({ page }) => {
  19  |     await expect(page.locator('text=88.8%').first()).toBeVisible();
  20  |     await expect(page.locator('text=92.6%').first()).toBeVisible();
  21  |     await expect(page.locator('text=over 500 patients').first()).toBeVisible();
  22  |   });
  23  | 
  24  |   test('outcomes bar links to /outcomes', async ({ page }) => {
  25  |     const link = page.locator('a[href="/outcomes"]').first();
  26  |     await expect(link).toBeVisible();
  27  |   });
  28  | 
  29  |   test('neuroplasticity section shows 88.8% stat', async ({ page }) => {
  30  |     await expect(page.locator('text=Where Healing Meets Innovation')).toBeVisible();
  31  |   });
  32  | 
  33  |   test('Joseph case study section exists', async ({ page }) => {
  34  |     await expect(page.locator('text=Joseph, Art Director')).toBeVisible();
  35  |     await expect(page.locator('a[href*="youtube.com"]')).toBeVisible();
  36  |   });
  37  | 
  38  |   test('How It Works has 4 steps', async ({ page }) => {
  39  |     const section = page.locator('text=How It Works').first();
  40  |     await expect(section).toBeVisible();
  41  |     await expect(page.locator('h3:has-text("Meet Your Doctor")').first()).toBeVisible();
  42  |     await expect(page.locator('h3:has-text("Receive Your Medication")')).toBeVisible();
  43  |     await expect(page.locator('h3:has-text("Prepare with Your Team")')).toBeVisible();
  44  |     await expect(page.locator('h3:has-text("Your First Session")')).toBeVisible();
  45  |   });
  46  | 
  47  |   test('Get Started button links to /appointment', async ({ page }) => {
  48  |     const btn = page.locator('a[href="/appointment"]', { hasText: 'Get Started' });
  49  |     await expect(btn).toBeVisible();
  50  |   });
  51  | 
  52  |   test('Why Choose section has 3 cards', async ({ page }) => {
  53  |     await expect(page.locator('text=Faster and Better Outcomes')).toBeVisible();
  54  |     await expect(page.locator('text=Affordable, Accessible Telehealth')).toBeVisible();
  55  |     await expect(page.locator('text=Personalized, Evidence-Based')).toBeVisible();
  56  |   });
  57  | 
  58  |   test('testimonials section shows patient quotes', async ({ page }) => {
  59  |     await expect(page.locator('text=What Our Patients Say')).toBeVisible();
  60  |     // At least some testimonials should be visible
  61  |     await expect(page.locator('text=Amber S, Brooklyn')).toBeVisible();
  62  |     await expect(page.locator('text=Rakesh V, Seattle')).toBeVisible();
  63  |   });
  64  | 
  65  |   test('collaborative care section with founder and directory link', async ({ page }) => {
  66  |     await expect(page.locator('text=A Collaborative Approach to Care')).toBeVisible();
  67  |     await expect(page.locator('text=Mai Shimada, MD').first()).toBeVisible();
  68  |     await expect(page.locator('text=600+ clinicians').first()).toBeVisible();
  69  |     const dirLink = page.locator('a[href="/ketamine-therapist-directory"]', { hasText: 'Browse the Clinician Directory' });
  70  |     await expect(dirLink).toBeVisible();
  71  |   });
  72  | 
  73  |   test('In the News section shows press logos', async ({ page }) => {
  74  |     const newsHeading = page.locator('text=In the News').first();
  75  |     await newsHeading.scrollIntoViewIfNeeded();
  76  |     await expect(newsHeading).toBeVisible();
  77  |     await expect(page.locator('img[alt="Forbes"]').first()).toBeVisible();
  78  |     await expect(page.locator('img[alt="The New Yorker"]').first()).toBeVisible();
  79  |     await expect(page.locator('img[alt="Glamour"]').first()).toBeVisible();
  80  |   });
  81  | 
  82  |   test('featured content section links to key pages', async ({ page }) => {
  83  |     // Multiple /outcomes links: trust bar, neuroplasticity, featured card, footer
  84  |     await expect(page.locator('a[href="/outcomes"]').first()).toBeVisible();
  85  |     await expect(page.locator('a[href*="case-study-julian"]')).toBeVisible();
  86  |     await expect(page.locator('a[href*="how-much-does-ketamine-therapy-cost"]').first()).toBeVisible();
  87  |   });
  88  | 
  89  |   test('navbar is sticky', async ({ page }) => {
  90  |     const navbar = page.locator('.navbar');
  91  |     await expect(navbar).toBeVisible();
  92  |     await page.evaluate(() => window.scrollTo(0, 1000));
  93  |     await expect(navbar).toBeVisible();
  94  |   });
  95  | 
  96  |   test('footer has Patient Outcomes link', async ({ page }) => {
  97  |     await expect(page.locator('.footer-link-two[href="/outcomes"]')).toBeVisible();
  98  |   });
  99  | });
  100 | 
```