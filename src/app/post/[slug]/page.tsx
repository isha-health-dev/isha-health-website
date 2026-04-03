import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getBlogPost, getAllBlogSlugs } from '@/lib/blog';

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.description || '',
    alternates: {
      canonical: `https://isha.health/post/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description || '',
      type: 'article',
      url: `https://isha.health/post/${post.slug}`,
      images: post.image ? [post.image] : [],
      publishedTime: post.firstPublished || post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description || '',
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const publishDate = post.firstPublished || post.date;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description || '',
    datePublished: post.firstPublished || post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'Isha Health',
      url: 'https://isha.health',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Isha Health',
      logo: {
        '@type': 'ImageObject',
        url: 'https://isha.health/images/isha_logo.webp',
      },
    },
    mainEntityOfPage: `https://isha.health/post/${post.slug}`,
    ...(post.image ? { image: post.image } : {}),
  };

  return (
    <div className="section-base white-section static-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="hero-isha">
        <h1 className="heading static-heading">{post.title}</h1>
      </div>
      <div className="section-wrapper static-page-wrapper">
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginBottom: '2rem',
              fontSize: '0.875rem',
              color: '#666',
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            {publishDate && (
              <time dateTime={publishDate}>
                {new Date(publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            )}
            {post.category && <span>{post.category}</span>}
          </div>
          {post.image && (
            <div style={{ marginBottom: '2rem' }}>
              <img
                src={post.image}
                alt={post.imageAlt || post.title}
                style={{ width: '100%', borderRadius: '8px' }}
              />
            </div>
          )}
          <div className="rich-text w-richtext">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </div>
    </div>
  );
}
