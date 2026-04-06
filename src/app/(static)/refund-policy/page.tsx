import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "By using ISHA Health's online ketamine therapy services, you agree to our terms of use.",
  alternates: {
    canonical: "https://isha.health/refund-policy",
  },
  openGraph: {
    title: "Refund Policy",
    description: "By using ISHA Health's online ketamine therapy services, you agree to our terms of use.",
    type: "website",
    images: ["/images/isha_logo.webp"],
    url: "https://isha.health/refund-policy",
  },
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
        __html: "<div class=\"section-base white-section static-page\"><div class=\"hero-isha\"><h1 class=\"heading static-heading\">REFUND&nbsp;POLICY</h1></div><div class=\"section-wrapper static-page-wrapper\"><div class=\"w-richtext\"><p>Please look below for a summary of the milestones that, once surpassed, determine the refund amounts available.</p><p> </p><p><strong>Full Refund</strong></p><ul role=\"list\"><li>If you cancel 48+ hours before your consultation.</li></ul><p><strong>$120 Charge</strong></p><ul role=\"list\"><li>If you cancel within 48 hours of your consultation.</li></ul><p><strong>$350 Charge</strong></p><ul role=\"list\"><li>If you cancel after the appointment time has started.</li></ul><p>‍</p></div></div></div><!-- Google Tag Manager (noscript) -->\n\n<!-- End Google Tag Manager (noscript) -->\n\n",
      }}
    />
  );
}
