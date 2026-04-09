import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Informed Consent",
  description: "Review Isha Health's informed consent policy detailing the rights and responsibilities of clients, including privacy, risks, and treatment protocols.",
  alternates: {
    canonical: "https://isha.health/consent-form",
  },
  openGraph: {
    title: "Informed Consent",
    description: "Review Isha Health's informed consent policy detailing the rights and responsibilities of clients, including privacy, risks, and treatment protocols.",
    type: "website",
    url: "https://isha.health/consent-form",
  },
  twitter: {
    card: "summary_large_image",
    title: "Informed Consent",
    description: "Review Isha Health's informed consent policy detailing the rights and responsibilities of clients, including privacy, risks, and treatment protocols.",
  },
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: "<div style=\"padding:0 0 2rem;\"><div style=\"text-align:center;padding:3rem 1.5rem 1.5rem;\"><h1 style=\"font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#111827;margin:0;\">Ketamine Therapy Informed consent</h1></div><div style=\"max-width:800px;margin:0 auto;padding:0 1.5rem;\"><div class=\"w-embed w-iframe\"><iframe src=\"/images/8e6cd264_66f2b17fdc7238f5456dca90_Instructions___Informed_consent_09272024.pdf\" width=\"100%\" height=\"800px\" style=\"border:none;\"></iframe></div></div></div>",
      }}
    />
  );
}
