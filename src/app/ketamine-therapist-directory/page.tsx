import type { Metadata } from 'next';
import { buildOpenGraph } from '@/lib/seo';
import { getAllTherapists } from '@/lib/therapist-queries';
import { getTherapistName, getTherapistSlug } from '@/lib/therapist-types';
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <TherapistDirectory therapists={therapists} />
      {/* All clinician links — visible, server-rendered for crawlers */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem 3rem' }}>
        <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '1.3rem', fontWeight: 700, color: '#111827', marginBottom: '1rem', textAlign: 'center' }}>Browse All Clinicians</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '0.4rem 0.75rem', justifyContent: 'center' }}>
          {therapists.map((t) => (
            <a
              key={t.id}
              href={`/ketamine-therapist-directory/${getTherapistSlug(t)}`}
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.8rem', color: '#0d9488', textDecoration: 'none' }}
            >
              {getTherapistName(t)}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
