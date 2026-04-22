import type { Metadata } from 'next';

// City location pages (/locations/ketamine-therapy-*) are currently
// near-identical templates differing only by city name. Google treats
// these as scaled/thin content, so none of them rank meaningfully.
// Noindex them at the layout level until they get genuinely
// differentiated content. State pages live under (static)/locations/
// and are unaffected by this layout.
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
