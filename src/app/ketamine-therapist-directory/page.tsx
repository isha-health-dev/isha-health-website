import type { Metadata } from 'next';
import { getAllTherapists } from '@/lib/therapist-queries';
import { TherapistDirectory } from './directory';

export const metadata: Metadata = {
  title: 'ISHA Health - Therapist Directory',
  description:
    'Find KAP trained therapists near you. Browse our directory of ketamine-assisted psychotherapy therapists across the United States.',
  alternates: {
    canonical: 'https://isha.health/ketamine-therapist-directory',
  },
  openGraph: {
    title: 'ISHA Health - Therapist Directory',
    description:
      'Find KAP trained therapists near you. Browse our directory of ketamine-assisted psychotherapy therapists across the United States.',
    type: 'website',
    url: 'https://isha.health/ketamine-therapist-directory',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISHA Health - Therapist Directory',
    description:
      'Find KAP trained therapists near you. Browse our directory of ketamine-assisted psychotherapy therapists across the United States.',
  },
};

export const revalidate = 3600; // Revalidate every hour

export default async function Page() {
  const therapists = await getAllTherapists();

  return <TherapistDirectory therapists={therapists} />;
}
