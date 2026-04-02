import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ISHA Health - Therapist Directory",
  description: "Find KAP trained therapists near you",
  alternates: {
    canonical: "https://isha.health/ketamine-therapist-directory/create-account",
  },
  openGraph: {
    url: "https://isha.health/ketamine-therapist-directory/create-account",
  },
  twitter: {
  },
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: "<div role=\"region\" aria-label=\"Notifications (F8)\" tabindex=\"-1\" style=\"pointer-events:none\"><ol tabindex=\"-1\" class=\"fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]\"></ol></div>",
      }}
    />
  );
}
