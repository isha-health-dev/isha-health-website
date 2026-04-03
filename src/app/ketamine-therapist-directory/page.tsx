import type { Metadata } from 'next';
import { getAllTherapists } from '@/lib/therapist-queries';
import { getTherapistName, getTherapistSlug } from '@/lib/therapist-types';
import { TherapistDirectory } from './directory';

export const metadata: Metadata = {
  title: 'Find a Ketamine-Assisted Psychotherapy Therapist',
  description:
    'Browse KAP-trained therapists across the United States. Filter by state, specialty, insurance, and visit type to find the right ketamine-assisted psychotherapy therapist for you.',
  alternates: {
    canonical: 'https://isha.health/ketamine-therapist-directory',
  },
  openGraph: {
    title: 'Find a Ketamine-Assisted Psychotherapy Therapist | Isha Health',
    description:
      'Browse KAP-trained therapists across the United States. Filter by state, specialty, insurance, and visit type.',
    type: 'website',
    url: 'https://isha.health/ketamine-therapist-directory',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Find a KAP Therapist | Isha Health',
    description:
      'Browse KAP-trained therapists across the US. Filter by state, specialty, and more.',
  },
};

export const revalidate = 3600;

export default async function Page() {
  const therapists = await getAllTherapists();

  // Generate ItemList structured data for the directory
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Ketamine-Assisted Psychotherapy Therapist Directory',
    description:
      'Directory of KAP-trained therapists offering ketamine-assisted psychotherapy across the United States.',
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
