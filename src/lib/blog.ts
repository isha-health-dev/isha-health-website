import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const BLOG_DIR = join(process.cwd(), 'content', 'blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  firstPublished?: string;
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
    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      firstPublished: data.firstPublished,
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
