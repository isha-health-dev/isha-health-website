import type { Metadata } from 'next';
import { buildOpenGraph } from '@/lib/seo';

export const metadata: Metadata = {
  title: "Am I a Candidate for Ketamine Treatment?",
  description: "Find out if you are eligible for ketamine treatment with our online assessment. Take the first step towards innovative mental health care.",
  alternates: {
    canonical: "https://isha.health/am-i-a-candidate",
  },
  openGraph: buildOpenGraph({
    title: "Am I a Candidate for Ketamine Treatment?",
    description: "Find out if you are eligible for ketamine treatment with our online assessment. Take the first step towards innovative mental health care.",
    path: '/am-i-a-candidate',
  }),
  twitter: {
    card: "summary_large_image",
    title: "Am I a Candidate for Ketamine Treatment?",
    description: "Find out if you are eligible for ketamine treatment with our online assessment. Take the first step towards innovative mental health care.",
  },
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: "<div style=\"text-align:center;padding:3rem 1.5rem 1.5rem;\"><h1 style=\"font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#111827;margin:0;\">Am I a Candidate?</h1></div><div style=\"max-width:640px;margin:0 auto 1.5rem;padding:0 1.5rem;\"><p style=\"font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;text-align:center;\">Isha Health sees new patients by referral from a collaborating therapist. This assessment helps you understand whether ketamine treatment may be a fit &mdash; <a href=\"/appointment\" style=\"color:#0d9488;text-decoration:underline;\">see how referrals work</a>.</p></div><div style=\"padding:0 0 2rem;\"><div style=\"width:100%;height:600px;\"><div data-tf-widget=\"GDo2cArM\" data-tf-opacity=\"100\" data-tf-iframe-props=\"title=Isha Health\" data-tf-medium=\"snippet\" style=\"width:100%;height:100%;\"></div><script src=\"//embed.typeform.com/next/embed.js\"></script></div></div>",
      }}
    />
  );
}
