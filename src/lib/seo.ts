import type { Metadata } from 'next';

const SITE_URL = 'https://isha.health';
const DEFAULT_OG_IMAGE = '/images/isha_logo.webp';

type OGInput = {
  title: string;
  description?: string;
  path: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
};

// Next.js 14 replaces (does not merge) child openGraph objects with the parent's,
// so every page that overrides openGraph must re-specify siteName, url, and images.
// This helper ensures every page emits the full required set.
export function buildOpenGraph(input: OGInput): NonNullable<Metadata['openGraph']> {
  return {
    siteName: 'Isha Health',
    type: input.type ?? 'website',
    url: `${SITE_URL}${input.path}`,
    title: input.title,
    ...(input.description ? { description: input.description } : {}),
    images: [input.image ?? DEFAULT_OG_IMAGE],
    ...(input.publishedTime ? { publishedTime: input.publishedTime } : {}),
  };
}
