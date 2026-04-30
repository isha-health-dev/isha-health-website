import type { Metadata } from 'next';
import { buildOpenGraph } from '@/lib/seo';

const description =
  'Partner with Isha Health on ketamine-assisted psychotherapy. Licensed clinicians can join our therapist directory, refer clients, or collaborate on care.';

export const metadata: Metadata = {
  title: 'Collaborate With Isha Health',
  description,
  alternates: { canonical: 'https://isha.health/collaborate-with-isha-health' },
  openGraph: buildOpenGraph({
    title: 'Collaborate With Isha Health',
    description,
    path: '/collaborate-with-isha-health',
  }),
  twitter: {
    card: 'summary_large_image',
    title: 'Collaborate With Isha Health',
    description,
  },
};

export default function CollaborateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
