import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';
import { NewsletterForm } from '../newsletter-form';

const POSTS_PER_PAGE = 12;

const CATEGORIES = [
  { slug: 'mental-health', name: 'Mental Health' },
  { slug: 'ketamine', name: 'Science of Ketamine' },
  { slug: 'kap', name: 'Ketamine Therapy Basics' },
  { slug: 'news', name: 'News' },
  { slug: 'isha-method', name: 'Inside Isha' },
];

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { page?: string; category?: string };
}): Promise<Metadata> {
  const currentPage = parseInt(searchParams.page || '1', 10);
  const cat = CATEGORIES.find((c) => c.slug === searchParams.category);
  const catLabel = cat ? ` — ${cat.name}` : '';
  const pageLabel = currentPage > 1 ? ` | Page ${currentPage}` : '';

  return {
    title: `Ketamine Therapy Blog — Mental Health Insights & Treatment Guides${catLabel}${pageLabel}`,
    description:
      'Expert insights on ketamine therapy, depression, anxiety, PTSD, and mental health treatment. Updated regularly by the Isha Health clinical team.',
    alternates: {
      canonical: 'https://isha.health/blog',
    },
    openGraph: {
      title: `Ketamine Therapy Blog${catLabel} | Isha Health`,
      description:
        'Expert insights on ketamine therapy, depression, anxiety, PTSD, and mental health treatment from the Isha Health clinical team.',
      type: 'website',
      url: 'https://isha.health/blog',
      images: ['/images/isha_logo.webp'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Ketamine Therapy Blog${catLabel} | Isha Health`,
      description:
        'Expert insights on ketamine therapy, depression, anxiety, PTSD, and mental health treatment.',
    },
  };
}

export default function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string; category?: string };
}) {
  const allPosts = getAllBlogPosts();
  const activeCategory = searchParams.category || '';
  const currentPage = Math.max(1, parseInt(searchParams.page || '1', 10));

  // Filter by category
  const filtered = activeCategory
    ? allPosts.filter((p) => (p.categorySlug || '').includes(activeCategory))
    : allPosts;

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filtered.slice(start, start + POSTS_PER_PAGE);

  // Blog schema
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Isha Health Blog',
    description:
      'Expert insights on ketamine therapy, depression, anxiety, PTSD, and mental health treatment.',
    url: 'https://isha.health/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Isha Health',
      logo: { '@type': 'ImageObject', url: 'https://isha.health/images/isha_logo.webp' },
    },
    blogPost: paginatedPosts.slice(0, 10).map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `https://isha.health/post/${p.slug}`,
      datePublished: p.firstPublished || p.date,
      ...(p.description ? { description: p.description } : {}),
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://isha.health' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://isha.health/blog' },
      ...(activeCategory
        ? [{
            '@type': 'ListItem',
            position: 3,
            name: CATEGORIES.find((c) => c.slug === activeCategory)?.name || activeCategory,
            item: `https://isha.health/blog?category=${activeCategory}`,
          }]
        : []),
    ],
  };

  return (
    <div className="section-base white-section static-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Pagination link tags for SEO */}
      {currentPage > 1 && (
        <link
          rel="prev"
          href={`https://isha.health/blog?page=${currentPage - 1}${activeCategory ? `&category=${activeCategory}` : ''}`}
        />
      )}
      {currentPage < totalPages && (
        <link
          rel="next"
          href={`https://isha.health/blog?page=${currentPage + 1}${activeCategory ? `&category=${activeCategory}` : ''}`}
        />
      )}

      <div className="hero-isha">
        <h1 className="heading static-heading">
          Ketamine Therapy Blog — Mental Health Insights &amp; Treatment Guides
        </h1>
      </div>

      <div
        className="section-wrapper"
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}
      >
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          style={{ fontSize: '0.8rem', color: '#6b7280', marginBottom: '1rem', fontFamily: "'Poppins', sans-serif" }}
        >
          <a href="/" style={{ color: '#0d9488', textDecoration: 'none' }}>Home</a>
          {' / '}
          {activeCategory ? (
            <>
              <a href="/blog" style={{ color: '#0d9488', textDecoration: 'none' }}>Blog</a>
              {' / '}
              <span style={{ color: '#9ca3af' }}>
                {CATEGORIES.find((c) => c.slug === activeCategory)?.name || activeCategory}
              </span>
            </>
          ) : (
            <span style={{ color: '#9ca3af' }}>Blog</span>
          )}
        </nav>

        {/* Intro copy */}
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '0.95rem',
            color: '#4b5563',
            lineHeight: 1.7,
            maxWidth: '700px',
            marginBottom: '1.5rem',
            textWrap: 'pretty',
          }}
        >
          Expert insights on ketamine therapy, depression, anxiety, PTSD, and
          mental health treatment — updated regularly by the Isha Health
          clinical team.
        </p>

        {/* Category filters */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '2rem',
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          <Link
            href="/blog"
            style={{
              padding: '0.4rem 1rem',
              borderRadius: '20px',
              fontSize: '0.8rem',
              textDecoration: 'none',
              border: '1px solid #d1d5db',
              backgroundColor: !activeCategory ? '#0d9488' : '#fff',
              color: !activeCategory ? '#fff' : '#374151',
              fontWeight: !activeCategory ? 600 : 400,
            }}
          >
            All
          </Link>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/blog?category=${cat.slug}`}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                textDecoration: 'none',
                border: '1px solid #d1d5db',
                backgroundColor: activeCategory === cat.slug ? '#0d9488' : '#fff',
                color: activeCategory === cat.slug ? '#fff' : '#374151',
                fontWeight: activeCategory === cat.slug ? 600 : 400,
              }}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Post grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {paginatedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/post/${post.slug}`}
              style={{
                display: 'block',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid #e5e7eb',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'box-shadow 0.2s',
              }}
            >
              {post.thumbnail && (
                <img
                  src={post.thumbnail}
                  alt={post.imageAlt || post.title}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
              )}
              <div style={{ padding: '1.25rem' }}>
                <h2
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    lineHeight: 1.3,
                    marginBottom: '0.5rem',
                    fontFamily: "'Poppins', sans-serif",
                    color: '#111827',
                  }}
                >
                  {post.title}
                </h2>
                <div
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    fontSize: '0.8rem',
                    color: '#6b7280',
                    marginBottom: '0.5rem',
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {(post.firstPublished || post.date) && (
                    <time>
                      {new Date(post.firstPublished || post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                  )}
                  {post.category && <span>{post.category}</span>}
                </div>
                {post.description ? (
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: '#4b5563',
                      lineHeight: 1.5,
                      fontFamily: "'Source Sans Pro', sans-serif",
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {post.description}
                  </p>
                ) : (
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: '#9ca3af',
                      fontStyle: 'italic',
                      fontFamily: "'Source Sans Pro', sans-serif",
                    }}
                  >
                    Read more →
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav
            aria-label="Blog pagination"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '3rem',
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            {currentPage > 1 && (
              <Link
                href={`/blog?page=${currentPage - 1}${activeCategory ? `&category=${activeCategory}` : ''}`}
                style={{ padding: '0.5rem 1rem', borderRadius: '6px', border: '1px solid #d1d5db', textDecoration: 'none', color: '#374151', fontSize: '0.875rem' }}
              >
                ← Previous
              </Link>
            )}
            {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
              let page: number;
              if (totalPages <= 7) page = i + 1;
              else if (currentPage <= 4) page = i + 1;
              else if (currentPage >= totalPages - 3) page = totalPages - 6 + i;
              else page = currentPage - 3 + i;
              return (
                <Link
                  key={page}
                  href={`/blog?page=${page}${activeCategory ? `&category=${activeCategory}` : ''}`}
                  style={{
                    padding: '0.5rem 0.75rem',
                    borderRadius: '6px',
                    border: '1px solid #d1d5db',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    backgroundColor: page === currentPage ? '#0d9488' : 'transparent',
                    color: page === currentPage ? '#fff' : '#374151',
                  }}
                >
                  {page}
                </Link>
              );
            })}
            {currentPage < totalPages && (
              <Link
                href={`/blog?page=${currentPage + 1}${activeCategory ? `&category=${activeCategory}` : ''}`}
                style={{ padding: '0.5rem 1rem', borderRadius: '6px', border: '1px solid #d1d5db', textDecoration: 'none', color: '#374151', fontSize: '0.875rem' }}
              >
                Next →
              </Link>
            )}
          </nav>
        )}

        <p
          style={{
            textAlign: 'center',
            fontSize: '0.8rem',
            color: '#9ca3af',
            marginTop: '1rem',
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Page {currentPage} of {totalPages}
        </p>

        {/* Newsletter signup */}
        <div
          style={{
            marginTop: '3rem',
            padding: '2rem',
            backgroundColor: '#f0fdfa',
            borderRadius: '12px',
            border: '1px solid #ccfbf1',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: '1.1rem',
              fontWeight: 700,
              color: '#0f766e',
              marginBottom: '0.5rem',
            }}
          >
            Get new articles in your inbox
          </p>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.85rem',
              color: '#4b5563',
              marginBottom: '1rem',
            }}
          >
            Research updates and clinical insights on ketamine therapy — no spam.
          </p>
          <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <NewsletterForm variant="blog" />
          </div>
        </div>
      </div>
    </div>
  );
}
