import { MetadataRoute } from 'next';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import { getAllTherapists } from '@/lib/therapist-queries';
import { getTherapistSlug } from '@/lib/therapist-types';

const BASE_URL = 'https://isha.health';

function getBlogPosts(): { slug: string; date: string }[] {
  const blogDir = join(process.cwd(), 'content', 'blog');
  const today = new Date().toISOString().split('T')[0];
  try {
    const files = readdirSync(blogDir).filter((f) => f.endsWith('.mdx'));
    return files
      .map((file) => {
        const content = readFileSync(join(blogDir, file), 'utf-8');
        const slug = file.replace(/\.mdx$/, '');
        const dateMatch = content.match(/^date:\s*(.+)$/m);
        const date = dateMatch ? dateMatch[1].trim().replace(/['"]/g, '') : '2024-01-01';
        return { slug, date };
      })
      .filter((post) => post.date <= today); // Exclude future-dated posts
  } catch {
    return [];
  }
}

function getDynamicPages(dir: string, prefix: string): string[] {
  try {
    return readdirSync(join(process.cwd(), 'src', 'app', dir), { withFileTypes: true })
      .filter((d) => d.isDirectory() && !d.name.startsWith('[') && !d.name.startsWith('('))
      .map((d) => `${prefix}/${d.name}`);
  } catch {
    return [];
  }
}

const staticPages = [
  '',
  'about-us/about-isha-health',
  'about-us/ketamine-therapy',
  'affordable-ketamine-therapy',
  'am-i-a-candidate',
  'appointment',
  'blog',
  'cancellation-policy-isha-health',
  'collaborate-with-isha-health',
  'compare/ketamine-providers',
  'consent-form',
  'current-patients/referral-from-your-primary-doctor',
  'current-patients/scheduling',
  'current-patients/session-instruction',
  'current-patients/superbill',
  'dr-akua-brown',
  'dr-mai-shimada',
  'faq',
  'good-faith-estimate',
  'healing-music-playlist',
  'isha-health-in-the-media',
  'isha-health-media-kit',
  'ketamine-therapist-directory',
  'ketamine-therapy-cost',
  'ketamine-therapy-for-anxiety',
  'ketamine-therapy-for-depression',
  'ketamine-therapy-reviews',
  'notice-of-privacy-practices',
  'online-ketamine-therapy',
  'our-treatment-approach',
  'pricing',
  'privacy-policy',
  'referral-patient-process',
  'refund-policy',
  'safety-information-for-ketamine-treatment',
  'support-person-overview',
  'terms-of-use',
  'what-is-ketamine-assisted-therapy',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // lastModified is intentionally omitted for pages where we don't have a
  // trustworthy per-page timestamp. Stamping every URL with today's date
  // dilutes the freshness signal — Google recommends omitting lastmod over
  // supplying a value that doesn't reflect a real content change.

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: page ? `${BASE_URL}/${page}` : BASE_URL,
    changeFrequency: page === '' ? 'weekly' : 'monthly',
    priority: page === '' ? 1.0 : page === 'pricing' || page === 'appointment' ? 0.9 : 0.7,
  }));

  // Blog posts — frontmatter date is a real per-post timestamp
  const blogPosts = getBlogPosts();
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/post/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  // Location pages (state pages from static + city pages)
  const statePages = [
    'online-at-home-ketamine-therapy-in-arizona',
    'online-at-home-ketamine-therapy-in-california',
    'online-at-home-ketamine-therapy-in-colorado',
    'online-at-home-ketamine-therapy-in-florida',
    'online-at-home-ketamine-therapy-in-georgia',
    'online-at-home-ketamine-therapy-in-new-york',
    'online-at-home-ketamine-therapy-in-oregon',
    'online-at-home-ketamine-therapy-in-texas',
    'online-at-home-ketamine-therapy-in-washington',
  ];
  const stateEntries: MetadataRoute.Sitemap = statePages.map((page) => ({
    url: `${BASE_URL}/locations/${page}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const cityPages = getDynamicPages('locations', 'locations');
  const cityEntries: MetadataRoute.Sitemap = cityPages.map((page) => ({
    url: `${BASE_URL}/${page}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Condition pages
  const conditionPages = getDynamicPages('conditions', 'conditions');
  const conditionEntries: MetadataRoute.Sitemap = conditionPages.map((page) => ({
    url: `${BASE_URL}/${page}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Comparison pages
  const comparePages = getDynamicPages('compare', 'compare');
  const compareEntries: MetadataRoute.Sitemap = comparePages.map((page) => ({
    url: `${BASE_URL}/${page}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Guide pages
  const guidePages = getDynamicPages('guide', 'guide');
  const guideEntries: MetadataRoute.Sitemap = guidePages.map((page) => ({
    url: `${BASE_URL}/${page}`,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  // Therapist directory — main page + all profiles from Supabase
  let therapistEntries: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/ketamine-therapist-directory`, changeFrequency: 'weekly', priority: 0.8 },
  ];
  try {
    const therapists = await getAllTherapists();
    const profileEntries: MetadataRoute.Sitemap = therapists.map((t) => ({
      url: `${BASE_URL}/ketamine-therapist-directory/${getTherapistSlug(t)}`,
      // therapist rows carry updated_at from Supabase; use it when present
      ...(t.updated_at ? { lastModified: new Date(t.updated_at) } : {}),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }));
    therapistEntries = [...therapistEntries, ...profileEntries];
  } catch {};

  // Additional dynamic pages
  const additionalPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/resources`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/pricing`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/outcomes`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/faq/ketamine-therapy`, changeFrequency: 'monthly', priority: 0.8 },
  ];

  return [
    ...staticEntries,
    ...blogEntries,
    ...stateEntries,
    ...cityEntries,
    ...conditionEntries,
    ...compareEntries,
    ...guideEntries,
    ...therapistEntries,
    ...additionalPages,
  ];
}
