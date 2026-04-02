import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Informed Consent",
  description: "Review Isha Health's informed consent policy detailing the rights and responsibilities of clients, including privacy, risks, and treatment protocols. Understand the consent process for participating in services offered by our clinic.",
  alternates: {
    canonical: "https://isha.health/consent-form",
  },
  openGraph: {
    title: "Informed Consent",
    description: "Review Isha Health's informed consent policy detailing the rights and responsibilities of clients, including privacy, risks, and treatment protocols. Understand the consent process for participating in services offered by our clinic.",
    type: "website",
    url: "https://isha.health/consent-form",
  },
  twitter: {
    card: "summary_large_image",
    title: "Informed Consent",
    description: "Review Isha Health's informed consent policy detailing the rights and responsibilities of clients, including privacy, risks, and treatment protocols. Understand the consent process for participating in services offered by our clinic.",
  },
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: "<div class=\"section-base white-section static-page\"><div class=\"hero-isha\"><h1 class=\"heading static-heading\">Ketamine Therapy Informed consent</h1></div><div class=\"section-wrapper static-page-wrapper\"><div class=\"w-embed w-iframe\"><iframe src=\"/images/8e6cd264_66f2b17fdc7238f5456dca90_Instructions___Informed_consent_09272024.pdf\" width=\"100%\" height=\"800px\" style=\"border:none;\"></iframe></div></div></div><!-- Google Tag Manager (noscript) -->\n\n<!-- End Google Tag Manager (noscript) -->\n\n",
      }}
    />
  );
}
