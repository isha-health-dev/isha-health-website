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
        __html: "<div style=\"text-align:center;padding:3rem 1.5rem 1.5rem;\"><h1 style=\"font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#111827;margin:0;\">Am I a Candidate?</h1></div><div style=\"padding:0 0 2rem;\"><div style=\"width:100%;height:600px;\"><div data-tf-widget=\"GDo2cArM\" data-tf-opacity=\"100\" data-tf-iframe-props=\"title=Isha Health\" data-tf-medium=\"snippet\" style=\"width:100%;height:100%;\"></div><script src=\"//embed.typeform.com/next/embed.js\"></script></div></div>",
      }}
    />
  );
}
