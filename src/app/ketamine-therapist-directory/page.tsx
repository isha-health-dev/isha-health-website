import type { Metadata } from 'next';
import { getAllTherapists } from '@/lib/therapist-queries';
import { getTherapistName, getTherapistSlug } from '@/lib/therapist-types';
import { TherapistDirectory } from './directory';

export const metadata: Metadata = {
  title: 'Ketamine Therapy Clinician Directory',
  description:
    'Browse ketamine therapy clinicians across the United States. Filter by state, specialty, insurance, and visit type to find the right ketamine-assisted psychotherapy therapist for you.',
  alternates: {
    canonical: 'https://isha.health/ketamine-therapist-directory',
  },
  openGraph: {
    title: 'Ketamine Therapy Clinician Directory | Isha Health',
    description:
      'Browse ketamine therapy clinicians across the United States. Filter by state, specialty, insurance, and visit type.',
    type: 'website',
    url: 'https://isha.health/ketamine-therapist-directory',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ketamine Therapy Clinician Directory | Isha Health',
    description:
      'Browse ketamine therapy clinicians across the US. Filter by state, specialty, and more.',
  },
};

export const revalidate = 60;

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
    </>
  );
}
