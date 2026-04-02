import { MetadataRoute } from 'next';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

const BASE_URL = 'https://isha.health';

function getBlogPosts(): { slug: string; date: string }[] {
  const blogDir = join(process.cwd(), 'content', 'blog');
  try {
    const files = readdirSync(blogDir).filter((f) => f.endsWith('.mdx'));
    return files.map((file) => {
      const content = readFileSync(join(blogDir, file), 'utf-8');
      const slug = file.replace(/\.mdx$/, '');
      const dateMatch = content.match(/^date:\s*(.+)$/m);
      const date = dateMatch ? dateMatch[1].trim().replace(/['"]/g, '') : '2024-01-01';
      return { slug, date };
    });
  } catch {
    return [];
  }
}

const staticPages = [
  '',
  'about-us/about-isha-health',
  'about-us/ketamine-therapy',
  'am-i-a-candidate',
  'appointment',
  'blog',
  'cancellation-policy-isha-health',
  'collaborate-with-isha-health',
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
  'ketamine-therapy-for-anxiety',
  'ketamine-therapy-for-depression',
  'locations/ketamine-therapy-long-island',
  'locations/ketamine-therapy-nyc',
  'locations/online-at-home-ketamine-therapy-in-arizona',
  'locations/online-at-home-ketamine-therapy-in-california',
  'locations/online-at-home-ketamine-therapy-in-colorado',
  'locations/online-at-home-ketamine-therapy-in-florida',
  'locations/online-at-home-ketamine-therapy-in-georgia',
  'locations/online-at-home-ketamine-therapy-in-new-york',
  'locations/online-at-home-ketamine-therapy-in-oregon',
  'locations/online-at-home-ketamine-therapy-in-texas',
  'locations/online-at-home-ketamine-therapy-in-washington',
  'notice-of-privacy-practices',
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

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: page ? `${BASE_URL}/${page}` : BASE_URL,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: page === '' ? 'weekly' : 'monthly',
    priority: page === '' ? 1.0 : page === 'pricing' || page === 'appointment' ? 0.9 : 0.7,
  }));

  const blogPosts = getBlogPosts();
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/post/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
