import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getBlogPost, getAllBlogPosts } from '@/lib/blog';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getAllBlogPosts(); // Already filters out future-dated posts
  return posts.map((post) => ({ slug: post.slug }));
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

  // Don't render future-dated posts
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  if (new Date(post.date) > today) notFound();

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
    reviewedBy: {
      '@type': 'Person',
      name: 'Mai Shimada, MD',
      url: 'https://isha.health/dr-mai-shimada',
      jobTitle: 'Founder & CEO',
      worksFor: {
        '@type': 'Organization',
        name: 'Isha Health',
      },
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
            <span>
              · Reviewed by{' '}
              <a href="/dr-mai-shimada" style={{ color: '#0d9488', textDecoration: 'none' }}>
                Mai Shimada, MD
              </a>
            </span>
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

      {/* Outcomes Callout */}
      <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1rem' }}>
        <div style={{ background: '#f0fdfa', border: '1px solid #ccfbf1', borderRadius: '10px', padding: '1.25rem 1.5rem', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.95rem', color: '#0f766e', fontWeight: 600, marginBottom: '0.25rem' }}>88.8% of Isha Health patients with moderate-to-severe depression show measurable improvement</p>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.8rem', color: '#6b7280', margin: 0 }}>Based on 546 patients and 1,900+ validated assessments. <a href="/outcomes" style={{ color: '#0d9488', textDecoration: 'underline' }}>See our clinical outcomes →</a></p>
        </div>
      </div>

      {/* Related Posts */}
      {(() => {
        const allPosts = getAllBlogPosts();
        const sameCategoryPosts = post.categorySlug
          ? allPosts.filter((p) => p.categorySlug === post.categorySlug && p.slug !== post.slug)
          : [];
        const relatedPosts = sameCategoryPosts.length > 0
          ? sameCategoryPosts.slice(0, 3)
          : allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

        return relatedPosts.length > 0 ? (
          <div style={{ maxWidth: '800px', margin: '2rem auto 3rem', padding: '0 1rem' }}>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: '1.5rem', fontWeight: 600, color: '#1a1a1a', marginBottom: '1.25rem' }}>Related Posts</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.25rem' }}>
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/post/${related.slug}`}
                  style={{ textDecoration: 'none', color: 'inherit', display: 'block', borderRadius: '10px', overflow: 'hidden', border: '1px solid #e5e7eb', transition: 'box-shadow 0.2s ease' }}
                >
                  {related.thumbnail && (
                    <img
                      src={related.thumbnail}
                      alt={related.imageAlt || related.title}
                      style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }}
                    />
                  )}
                  <div style={{ padding: '1rem' }}>
                    <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.95rem', fontWeight: 600, color: '#0f766e', margin: '0 0 0.5rem', lineHeight: 1.3 }}>{related.title}</h3>
                    {related.description && (
                      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.8rem', color: '#6b7280', margin: 0, lineHeight: 1.5 }}>
                        {related.description.length > 100 ? related.description.slice(0, 100).trimEnd() + '...' : related.description}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : null;
      })()}
    </div>
  );
}
