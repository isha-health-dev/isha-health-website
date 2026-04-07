import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Am I a Candidate for Ketamine Treatment?",
  description: "Find out if you are eligible for ketamine treatment with our online assessment. Take the first step towards innovative mental health care.",
  alternates: {
    canonical: "https://isha.health/am-i-a-candidate",
  },
  openGraph: {
    title: "Am I a Candidate for Ketamine Treatment?",
    description: "Find out if you are eligible for ketamine treatment with our online assessment. Take the first step towards innovative mental health care.",
    type: "website",
    images: ["/images/isha_logo.webp"],
    url: "https://isha.health/am-i-a-candidate",
  },
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
        __html: "<div class=\"hero-isha\"><h1 class=\"heading static-heading\">Am I a Candidate?</h1></div><div class=\"section-base white-section static-page\"><div style=\"width:100%;height:600px;\"><div data-tf-widget=\"GDo2cArM\" data-tf-opacity=\"100\" data-tf-iframe-props=\"title=Isha Health\" data-tf-medium=\"snippet\" style=\"width:100%;height:100%;\"></div><script src=\"//embed.typeform.com/next/embed.js\"></script></div></div>",
      }}
    />
  );
}
