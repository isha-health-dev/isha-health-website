import type { Metadata } from 'next';

const SITE_URL = 'https://isha.health';
const DEFAULT_OG_IMAGE = '/images/isha_logo.webp';

// Layout title template appends ' | Isha Health' (14 chars). Aim ≤70 total.
const TITLE_BUDGET = 56;
const META_BUDGET = 158;

function truncateAtWord(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text
    .slice(0, max - 1)
    .replace(/\s+\S*$/, '')
    .replace(/[\s,;:.\-—]+$/, '');
  return cut + '…';
}

export function truncateTitle(title: string): string {
  return truncateAtWord(title, TITLE_BUDGET);
}

export function truncateDescription(description: string): string {
  return truncateAtWord(description, META_BUDGET);
}

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
