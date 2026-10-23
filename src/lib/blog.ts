import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const BLOG_DIR = join(process.cwd(), 'content', 'blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  firstPublished?: string;
  // The `date` we're willing to show/claim as a genuine content update.
  // `date` often isn't a real edit timestamp — bulk CMS migrations and
  // exports stamp dozens of unrelated posts with the exact same value
  // (see isBulkTimestamp below). Showing that as "Updated <date>" on an
  // individual post is an unverifiable, misleading claim, so this falls
  // back to firstPublished (no modification claimed) whenever `date`
  // looks like a bulk stamp rather than a real per-post edit.
  modifiedDate: string;
  author: string;
  category?: string;
  categorySlug?: string;
  description?: string;
  image?: string;
  thumbnail?: string;
  imageAlt?: string;
  featured?: boolean;
  draft?: boolean;
  content: string;
}

// gray-matter parses unquoted YAML dates (date: 2025-03-17) into native
// Date objects, not strings, even though BlogPost types them as strings.
// Normalize to YYYY-MM-DD so every comparison in this file is a value
// comparison — comparing the raw Date objects with !== is always true
// (different object instances), which previously made every post show
// an "Updated" badge even when date and firstPublished were the same day.
function toISODate(value: unknown): string {
  if (!value) return '';
  const d = value instanceof Date ? value : new Date(String(value));
  if (Number.isNaN(d.getTime())) return String(value);
  return d.toISOString().slice(0, 10);
}

// Build-time cache: how many posts share each `date` value. A date shared
// by several unrelated posts is almost certainly a bulk CMS timestamp
// (migration, export, republish), not a genuine individual edit.
const BULK_TIMESTAMP_THRESHOLD = 3;
let dateFrequencyCache: Map<string, number> | null = null;

function getDateFrequency(): Map<string, number> {
  if (dateFrequencyCache) return dateFrequencyCache;
  const freq = new Map<string, number>();
  for (const slug of getAllBlogSlugs()) {
    try {
      const raw = readFileSync(join(BLOG_DIR, `${slug}.mdx`), 'utf-8');
      const { data } = matter(raw);
      const date = toISODate(data.date);
      if (date) freq.set(date, (freq.get(date) || 0) + 1);
    } catch {
      // skip unreadable files; getBlogPost will surface the real error
    }
  }
  dateFrequencyCache = freq;
  return freq;
}

export function getAllBlogSlugs(): string[] {
  return readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const filePath = join(BLOG_DIR, `${slug}.mdx`);
    const raw = readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);
    const date = toISODate(data.date);
    const firstPublished = toISODate(data.firstPublished) || undefined;
    const isBulkTimestamp =
      date !== firstPublished && (getDateFrequency().get(date) || 0) >= BULK_TIMESTAMP_THRESHOLD;
    const modifiedDate = isBulkTimestamp ? firstPublished || date : date || firstPublished || '';
    return {
      slug,
      title: data.title || '',
      date,
      firstPublished,
      modifiedDate,
      author: data.author || 'isha-team',
      category: data.category,
      categorySlug: data.categorySlug,
      description: data.description,
      image: data.image,
      thumbnail: data.thumbnail,
      imageAlt: data.imageAlt,
      featured: data.featured,
      draft: data.draft,
      content,
    };
  } catch {
    return null;
  }
}

export function getAllBlogPosts(): BlogPost[] {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const slugs = getAllBlogSlugs();
  return slugs
    .map((slug) => getBlogPost(slug))
    .filter((p): p is BlogPost => {
      if (p === null || p.draft) return false;
      // Exclude future-dated posts
      const postDate = new Date(p.date);
      return postDate <= today;
    })
    .sort((a, b) => {
      const dateA = a.firstPublished || a.date;
      const dateB = b.firstPublished || b.date;
      return new Date(dateB).getTime() - new Date(dateA).getTime();
    });
}
