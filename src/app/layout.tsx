import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Isha Health - Online Ketamine Therapy for Depression & Anxiety',
    template: '%s | Isha Health',
  },
  description:
    'Isha Health offers online ketamine-assisted therapy for depression and anxiety. Personalized treatment plans from the comfort of your home.',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
};

const navbarHtml = `<div data-wf--navigation--variant="base" data-animation="default" data-collapse="all" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="top-label"><p class="p2">Online Ketamine Treatment Available in: AZ, CA, CO, FL, GA, NY, OR, TX, and WA.</p></div><div class="section-wrapper nav-wrapper"><div class="navbar-wrapper"><div class="header_left"><div data-w-id="efbf0ce3-b7e7-d709-9cde-4249ece669b7" class="menu-button w-nav-button"><div class="icon w-icon-nav-menu"></div></div><a href="/" class="logo-link w-nav-brand"><p class="journey_with">FEEL BETTER WITH</p><img src="/images/isha_logo.webp" loading="lazy" alt="Isha Health" class="logo-image"/></a><p class="paragraph-33"><a href="/collaborate-with-isha-health" class="link-6">FOR KAP TRAINED THERAPISTS</a></p></div><div class="header_right"><a href="/pricing" class="w-inline-block"><p class="paragraph-33">PRICING</p></a><a id="check-availability" href="/appointment" class="button-navbar w-button">CHECK AVAILABILITY</a></div></div><div class="menu-popup-wrapper"><div class="menu-popup"><div class="menu-popup-logo-column"><img src="/images/close_black.svg" loading="lazy" data-w-id="da2bd1ce-fa1e-9f4e-a882-a68198e882e9" alt="" class="close-menu"/><div class="div-block-37"><a href="/" class="logo-link w-nav-brand"><img src="/images/isha_logo.webp" loading="lazy" alt="Isha Health" class="logo-image"/></a></div></div><div class="menu-popup-list"><div class="menu-popup-list-inner"><p>FOR PATIENTS</p><a href="/appointment" class="popupmenu-link">Make an Appointment</a><a href="/pricing" class="popupmenu-link">Pricing</a><a href="/our-treatment-approach" class="popupmenu-link">OUR TREATMENT APPROACH</a><div class="menu-popup-dropdown"><div data-hover="false" data-delay="0" class="dropdown-2 w-dropdown"><div class="dropdown-toggle-2 w-dropdown-toggle"><div class="icon-3 w-icon-dropdown-toggle"></div><div class="text-block-2">For OUR Current Patients</div></div><nav class="menu-popup-dropdown-list w-dropdown-list"><div><a href="/current-patients/scheduling" class="popupmenu-link">Scheduling</a></div><div><a href="/current-patients/referral-from-your-primary-doctor" class="popupmenu-link">Qualified Telemedicine Referral</a></div><div><a href="/current-patients/superbill" class="popupmenu-link">Superbill</a></div><div><a href="/current-patients/session-instruction" class="popupmenu-link">Dosing session instructions</a></div><div><a href="/healing-music-playlist" class="popupmenu-link">Healing Sound Playlist</a></div></nav></div></div><a href="/ketamine-therapist-directory" class="popupmenu-link">Ketamine Assisted Psychotherapist Directory</a></div><div class="menu-separator"></div><div class="menu-popup-list-inner"><p>FOR CLINICIANS</p><a href="/collaborate-with-isha-health" class="popupmenu-link">Collaborate with Isha Health</a><a href="/referral-patient-process" class="popupmenu-link">PATIENT REFERRAL PROCESS</a><a href="/isha-health-media-kit" class="popupmenu-link">Isha Health Media Kit</a></div><div class="menu-separator"></div><div><div class="menu-popup-dropdown"><div data-hover="false" data-delay="0" class="dropdown-2 w-dropdown"><div class="dropdown-toggle-2 w-dropdown-toggle"><div class="icon-3 w-icon-dropdown-toggle"></div><div class="text-block-2">About Us</div></div><nav class="menu-popup-dropdown-list w-dropdown-list"><div><a href="/about-us/about-isha-health" class="popupmenu-link">Isha</a></div><div><a href="/about-us/ketamine-therapy" class="popupmenu-link">Ketamine</a></div></nav></div></div></div><div><a href="/isha-health-in-the-media" class="popupmenu-link">Media</a></div><div><a href="/faq" class="popupmenu-link">FAQ</a></div><div><a href="/blog" class="popupmenu-link">Blog</a></div></div></div></div></div><div class="black-line"></div></div>`;

const footerHtml = `<section class="footer-light"><div class="container"><div class="footer-wrapper-two"><a href="/" class="footer-brand w-inline-block"><img src="/images/logo_white.webp" loading="lazy" alt="Isha Health" class="image-3"/></a><div class="footer-social-block-two"><a href="https://www.linkedin.com/company/isha-health/" class="footer-social-link w-inline-block"><img src="/images/icon-linkedin.webp" loading="lazy" alt="LinkedIn" class="social-icon"/></a><a href="https://www.instagram.com/isha.health/" class="footer-social-link w-inline-block"><img src="/images/icon-instagram.webp" loading="lazy" alt="Instagram" class="social-icon"/></a><a href="https://twitter.com/IshaHealth" class="footer-social-link w-inline-block"><img src="/images/icon-twitter.webp" loading="lazy" alt="Twitter" class="social-icon"/></a></div></div><div class="footer-wrapper-two"><div class="footer-block-two"><div class="footer-title">Company</div><a href="/pricing" class="footer-link-two">PRICING</a><a href="/about-us/about-isha-health" class="footer-link-two">About Us</a></div><div class="footer-block-two"><div class="footer-title">SERVICE</div><a href="/about-us/ketamine-therapy" class="footer-link-two">Ketamine Therapy</a><a href="/ketamine-therapy-for-depression" class="footer-link-two">Ketamine Therapy for Depression</a><a href="/ketamine-therapy-for-anxiety" class="footer-link-two">Ketamine Therapy for Anxiety</a><a href="/what-is-ketamine-assisted-therapy" class="footer-link-two">What is Ketamine Assisted Therapy</a><a href="/current-patients/superbill" class="footer-link-two">Superbill</a></div><div class="footer-block-two"><div class="footer-title">Legal</div><a href="/terms-of-use" class="footer-link-two">Terms of Use</a><a href="/privacy-policy" class="footer-link-two">Privacy Policy</a><a href="/notice-of-privacy-practices" class="footer-link-two">Notice of Privacy Practices</a><a href="/safety-information-for-ketamine-treatment" class="footer-link-two">Safety Information for Ketamine Treatment</a><a href="/good-faith-estimate" class="footer-link-two">Good Faith Estimate</a><a href="/consent-form" class="footer-link-two">Consent Form</a></div><div class="footer-block-two"><div class="footer-title">CONTACT US</div><a href="https://maps.google.com/?q=4255+18th+Street,+San+Francisco,+CA+94114" class="footer-link-two">4255 18th Street, San Francisco, CA 94114</a><a href="mailto:info@isha.health" class="footer-link-two">Email: info@isha.health</a></div></div><div class="footer-wrapper-two"><div class="div-block-43"><p class="paragraph-30">This website has been reviewed by Isha Health California, P.C. and should not be used as medical advice in place of a licensed psychiatric clinician.<br/><br/>IN CASE OF EMERGENCY:<br/>If you are in a life-threatening situation, don&apos;t use this site. Call, text, or chat 988 or 1-800-273-TALK (8255), or use these resources to get immediate help.</p></div><div class="footer-block-two"><div class="footer-title">Location</div><div class="horizontal"><div class="vertical"><a href="/locations/online-at-home-ketamine-therapy-in-arizona" class="footer-link-two">Arizona</a><a href="/locations/online-at-home-ketamine-therapy-in-california" class="footer-link-two">California</a><a href="/locations/online-at-home-ketamine-therapy-in-colorado" class="footer-link-two">Colorado</a><a href="/locations/online-at-home-ketamine-therapy-in-florida" class="footer-link-two">Florida</a><a href="/locations/online-at-home-ketamine-therapy-in-georgia" class="footer-link-two">Georgia</a></div><div class="vertical"><a href="/locations/online-at-home-ketamine-therapy-in-new-york" class="footer-link-two">New York</a><a href="/locations/online-at-home-ketamine-therapy-in-oregon" class="footer-link-two">Oregon</a><a href="/locations/online-at-home-ketamine-therapy-in-washington" class="footer-link-two">Washington</a><a href="/locations/online-at-home-ketamine-therapy-in-texas" class="footer-link-two">Texas</a></div></div></div></div><div class="footer-bottom"><footer><p class="footer-text">&copy; ${new Date().getFullYear()} Isha Health. All rights reserved</p></footer></div></div></section>`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalBusiness',
              name: 'Isha Health',
              url: 'https://isha.health',
              logo: 'https://isha.health/images/isha_logo.webp',
              description:
                'Isha Health offers online ketamine-assisted therapy for depression and anxiety. Personalized treatment plans from the comfort of your home.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '4255 18th Street',
                addressLocality: 'San Francisco',
                addressRegion: 'CA',
                postalCode: '94114',
                addressCountry: 'US',
              },
              email: 'info@isha.health',
              sameAs: [
                'https://www.linkedin.com/company/isha-health/',
                'https://www.instagram.com/isha.health/',
                'https://twitter.com/IshaHealth',
              ],
              medicalSpecialty: 'Psychiatric',
              areaServed: ['AZ', 'CA', 'CO', 'FL', 'GA', 'NY', 'OR', 'TX', 'WA'],
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Poppins:wght@300;400;500;600;700&family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="/css/webflow.css" rel="stylesheet" />
        <link href="/css/bxslider.css" rel="stylesheet" />
      </head>
      <body>
        <div
          dangerouslySetInnerHTML={{ __html: navbarHtml }}
        />
        {children}
        <div
          dangerouslySetInnerHTML={{ __html: footerHtml }}
        />
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/js/webflow.schunk.js" strategy="afterInteractive" />
        <Script src="/js/webflow.main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
