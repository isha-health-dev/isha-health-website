import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog - Ketamine Therapy & Mental Health',
  description:
    'Explore articles about ketamine therapy, mental health treatments, depression, anxiety, and psychedelic medicine from the Isha Health clinical team.',
  alternates: {
    canonical: 'https://isha.health/blog',
  },
  openGraph: {
    title: 'Blog - Ketamine Therapy & Mental Health | Isha Health',
    description:
      'Explore articles about ketamine therapy, mental health treatments, depression, anxiety, and psychedelic medicine from the Isha Health clinical team.',
    type: 'website',
    url: 'https://isha.health/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Ketamine Therapy & Mental Health | Isha Health',
    description:
      'Explore articles about ketamine therapy, mental health treatments, and psychedelic medicine.',
  },
};

const POSTS_PER_PAGE = 12;

export default function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const posts = getAllBlogPosts();
  const currentPage = Math.max(1, parseInt(searchParams.page || '1', 10));
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(start, start + POSTS_PER_PAGE);

  return (
    <div className="section-base white-section static-page">
      <div className="hero-isha">
        <h1 className="heading static-heading">Blog</h1>
      </div>
      <div
        className="section-wrapper"
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}
      >
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
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                  }}
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
                      {new Date(
                        post.firstPublished || post.date
                      ).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                  )}
                  {post.category && <span>{post.category}</span>}
                </div>
                {post.description && (
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
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav
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
                href={`/blog?page=${currentPage - 1}`}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  border: '1px solid #d1d5db',
                  textDecoration: 'none',
                  color: '#374151',
                  fontSize: '0.875rem',
                }}
              >
                Previous
              </Link>
            )}
            {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
              let page: number;
              if (totalPages <= 7) {
                page = i + 1;
              } else if (currentPage <= 4) {
                page = i + 1;
              } else if (currentPage >= totalPages - 3) {
                page = totalPages - 6 + i;
              } else {
                page = currentPage - 3 + i;
              }
              return (
                <Link
                  key={page}
                  href={`/blog?page=${page}`}
                  style={{
                    padding: '0.5rem 0.75rem',
                    borderRadius: '6px',
                    border: '1px solid #d1d5db',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    backgroundColor:
                      page === currentPage ? '#0d9488' : 'transparent',
                    color: page === currentPage ? '#fff' : '#374151',
                  }}
                >
                  {page}
                </Link>
              );
            })}
            {currentPage < totalPages && (
              <Link
                href={`/blog?page=${currentPage + 1}`}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  border: '1px solid #d1d5db',
                  textDecoration: 'none',
                  color: '#374151',
                  fontSize: '0.875rem',
                }}
              >
                Next
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
          {posts.length} articles &middot; Page {currentPage} of {totalPages}
        </p>
      </div>
    </div>
  );
}
