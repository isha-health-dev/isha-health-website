import type { Metadata } from 'next';
import { buildOpenGraph } from '@/lib/seo';

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Isha Health refund policy: full refund if you cancel 48+ hours before your consultation, partial fees for late cancellations and missed appointments.",
  alternates: {
    canonical: "https://isha.health/refund-policy",
  },
  openGraph: buildOpenGraph({
    title: "Refund Policy",
    description: "By using ISHA Health's online ketamine therapy services, you agree to our terms of use.",
    path: '/refund-policy',
  }),
  twitter: {
    card: "summary_large_image",
    title: "Refund Policy",
    description: "By using ISHA Health's online ketamine therapy services, you agree to our terms of use.",
  },
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: "<div style=\"padding:0 0 2rem;\"><div style=\"text-align:center;padding:3rem 1.5rem 1.5rem;\"><h1 style=\"font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#111827;margin:0;\">REFUND&nbsp;POLICY</h1></div><div style=\"max-width:800px;margin:0 auto;padding:0 1.5rem;\"><div style=\"font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;\"><p>Please look below for a summary of the milestones that, once surpassed, determine the refund amounts available.</p><p> </p><p><strong>Full Refund</strong></p><ul role=\"list\"><li>If you cancel 48+ hours before your consultation.</li></ul><p><strong>$120 Charge</strong></p><ul role=\"list\"><li>If you cancel within 48 hours of your consultation.</li></ul><p><strong>$350 Charge</strong></p><ul role=\"list\"><li>If you cancel after the appointment time has started.</li></ul><p>‍</p></div></div></div>",
      }}
    />
  );
}
