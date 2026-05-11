import type { Metadata } from 'next';
import Link from 'next/link';
import { buildOpenGraph } from '@/lib/seo';
import { getAllTherapists } from '@/lib/therapist-queries';
import { getTherapistName, getTherapistSlug, getTherapistLocation } from '@/lib/therapist-types';
import { TherapistDirectory } from './directory';

export const metadata: Metadata = {
  title: 'Ketamine Therapy Clinician Directory',
  description:
    'Browse ketamine therapy clinicians across the US. Filter by state, specialty, insurance, and visit type to find the right therapist.',
  alternates: {
    canonical: 'https://isha.health/ketamine-therapist-directory',
  },
  openGraph: buildOpenGraph({
    title: 'Ketamine Therapy Clinician Directory | Isha Health',
    description: 'Browse ketamine therapy clinicians across the United States. Filter by state, specialty, insurance, and visit type.',
    path: '/ketamine-therapist-directory',
  }),
  twitter: {
    card: 'summary_large_image',
    title: 'Ketamine Therapy Clinician Directory | Isha Health',
    description:
      'Browse ketamine therapy clinicians across the US. Filter by state, specialty, and more.',
  },
};

// No timer-based ISR — use on-demand revalidation only (triggered by dashboard save)
// This prevents ISR reads from consuming Vercel free tier quota

export default async function Page() {
  const therapists = await getAllTherapists();

  // Generate ItemList structured data for the directory
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Ketamine-Assisted Psychotherapy Clinician Directory',
    description:
      'Directory of ketamine therapy clinicians offering ketamine-assisted psychotherapy across the United States.',
    numberOfItems: therapists.length,
    itemListElement: therapists.slice(0, 50).map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://isha.health/ketamine-therapist-directory/${getTherapistSlug(t)}`,
      name: getTherapistName(t),
    })),
  };

  // Render every profile link in static HTML so crawlers can reach them.
  // The interactive directory only renders the first 24 cards on initial
  // load (rest are client-state-gated behind a "Load more" button), so all
  // other profiles were previously orphaned from a crawl perspective.
  const allClinicians = [...therapists].sort((a, b) =>
    a.last_name.localeCompare(b.last_name),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <TherapistDirectory therapists={therapists} />
      <nav
        aria-label="Browse all clinicians"
        style={{
          maxWidth: '1200px',
          margin: '3rem auto 4rem',
          padding: '2rem 1.5rem',
          borderTop: '1px solid #e5e7eb',
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <h2
          style={{
            fontSize: '1.25rem',
            fontWeight: 600,
            color: '#374151',
            margin: '0 0 1rem',
          }}
        >
          Browse all clinicians ({allClinicians.length})
        </h2>
        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '0.5rem 1.5rem',
            listStyle: 'none',
            padding: 0,
            margin: 0,
            fontSize: '0.875rem',
          }}
        >
          {allClinicians.map((t) => {
            const location = getTherapistLocation(t);
            return (
              <li key={t.id}>
                <Link
                  href={`/ketamine-therapist-directory/${getTherapistSlug(t)}`}
                  style={{ color: '#0d9488', textDecoration: 'none' }}
                >
                  {getTherapistName(t)}
                </Link>
                {location && (
                  <span style={{ color: '#9ca3af', marginLeft: '0.5rem' }}>
                    — {location}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
