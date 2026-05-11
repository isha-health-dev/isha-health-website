import { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/lib/blog';
import { getAllTherapists } from '@/lib/therapist-queries';
import { getTherapistSlug } from '@/lib/therapist-types';

// Regenerate hourly so new therapists surface without waiting for a redeploy.
export const revalidate = 3600;

const BASE_URL = 'https://isha.health';

// Hardcoded rather than read from src/app/<dir> at runtime — readdirSync on the
// app source tree silently failed in production (Vercel's serverless bundle
// doesn't carry src/app), so the sitemap was shipping with zero conditions/
// guide entries and only the static compare page. New entries here require a
// one-line addition; tradeoff is worth it for a deterministic sitemap.
const CONDITION_PAGES = [
  'alcohol-addiction',
  'bipolar-depression',
  'chronic-pain',
  'ocd',
  'postpartum-depression',
  'ptsd',
  'suicidal-ideation',
  'treatment-resistant-depression',
];

const COMPARE_PAGES = [
  'at-home-ketamine-vs-clinic',
  'ketamine-providers',
  'ketamine-vs-antidepressants',
  'ketamine-vs-ect',
  'ketamine-vs-psilocybin',
  'ketamine-vs-therapy',
  'ketamine-vs-tms',
  'oral-ketamine-vs-iv-infusion',
  'spravato-vs-generic-ketamine',
];

const GUIDE_PAGES = [
  'choosing-ketamine-provider',
  'ketamine-for-depression',
  'ketamine-therapy',
];

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

  // Blog posts — getAllBlogPosts already excludes drafts + future-dated.
  // Routed through the same lib /post/[slug]'s generateStaticParams uses,
  // so either both routes pick up new posts or both fail in lockstep.
  const blogEntries: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
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
    'online-at-home-ketamine-therapy-in-oregon',
    'online-at-home-ketamine-therapy-in-texas',
    'online-at-home-ketamine-therapy-in-washington',
  ];
  const stateEntries: MetadataRoute.Sitemap = statePages.map((page) => ({
    url: `${BASE_URL}/locations/${page}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // City pages (/locations/ketamine-therapy-*) default to noindex via
  // src/app/locations/layout.tsx. The 17 major-metro pages below opt
  // back into indexing (and into the sitemap) by overriding `robots`
  // at the page level. Smaller-market city pages remain noindex.
  const majorCityPages = [
    'ketamine-therapy-los-angeles',
    'ketamine-therapy-san-francisco',
    'ketamine-therapy-san-diego',
    'ketamine-therapy-beverly-hills',
    'ketamine-therapy-houston',
    'ketamine-therapy-dallas',
    'ketamine-therapy-austin',
    'ketamine-therapy-miami',
    'ketamine-therapy-denver',
    'ketamine-therapy-atlanta',
    'ketamine-therapy-portland',
    'ketamine-therapy-seattle',
    'ketamine-therapy-phoenix',
    'ketamine-therapy-scottsdale',
  ];
  const cityEntries: MetadataRoute.Sitemap = majorCityPages.map((page) => ({
    url: `${BASE_URL}/locations/${page}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const conditionEntries: MetadataRoute.Sitemap = CONDITION_PAGES.map((slug) => ({
    url: `${BASE_URL}/conditions/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const compareEntries: MetadataRoute.Sitemap = COMPARE_PAGES.map((slug) => ({
    url: `${BASE_URL}/compare/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const guideEntries: MetadataRoute.Sitemap = GUIDE_PAGES.map((slug) => ({
    url: `${BASE_URL}/guide/${slug}`,
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

  // Dedupe by URL (some routes are listed in multiple blocks — e.g. the
  // directory + pricing + compare/ketamine-providers each appear in
  // staticPages and again in their specialized block).
  const all = [
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
  const seen = new Set<string>();
  return all.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}
