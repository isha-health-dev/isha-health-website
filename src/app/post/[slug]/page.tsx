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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://isha.health',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://isha.health/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://isha.health/post/${post.slug}`,
      },
    ],
  };

  // Extract FAQ from content — find question headings and their answers
  const faqItems: { question: string; answer: string }[] = [];
  const lines = post.content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const qMatch = lines[i].match(/^#{2,3}\s+(.+\?)\s*$/);
    const boldQMatch = lines[i].match(/^\*\*(.+\?)\*\*\s*$/);
    const question = qMatch?.[1] || boldQMatch?.[1];
    if (question) {
      // Collect answer from following paragraphs until next heading
      const answerLines: string[] = [];
      for (let j = i + 1; j < lines.length; j++) {
        if (lines[j].match(/^#{1,3}\s/) || lines[j].match(/^\*\*.*\?\*\*/)) break;
        const cleaned = lines[j].replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').trim();
        if (cleaned && !cleaned.startsWith('---') && !cleaned.startsWith('![')) {
          answerLines.push(cleaned);
        }
      }
      if (answerLines.length > 0) {
        faqItems.push({
          question: question.replace(/\*\*/g, ''),
          answer: answerLines.slice(0, 3).join(' ').slice(0, 500),
        });
      }
    }
  }

  const faqSchema = faqItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.slice(0, 10).map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <nav
        aria-label="Breadcrumb"
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '1rem 1rem 0',
          fontSize: '0.8rem',
          color: '#6b7280',
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <a href="/" style={{ color: '#0d9488', textDecoration: 'none' }}>Home</a>
        {' / '}
        <a href="/blog" style={{ color: '#0d9488', textDecoration: 'none' }}>Blog</a>
        {' / '}
        <span style={{ color: '#9ca3af' }}>{post.title}</span>
      </nav>
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
            {post.date !== publishDate && post.date && (
              <span style={{ color: '#9ca3af' }}>
                · Updated{' '}
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
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
