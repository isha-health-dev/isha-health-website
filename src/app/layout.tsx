import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { NewsletterForm } from './newsletter-form';

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
  metadataBase: new URL('https://isha.health'),
  openGraph: {
    siteName: 'Isha Health',
    type: 'website',
    images: [
      {
        url: '/images/isha_logo.webp',
        width: 400,
        height: 100,
        alt: 'Isha Health - Online Ketamine Therapy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@IshaHealth',
  },
};

const navbarHtml = `
<nav style="position:sticky;top:0;z-index:1000;font-family:'Poppins',sans-serif;background:#fff;">
  <!-- Main navbar -->
  <div style="max-width:1200px;margin:0 auto;padding:12px 24px;display:flex;align-items:center;justify-content:space-between;">
    <!-- Left: hamburger + logo + therapist link -->
    <div style="display:flex;align-items:center;gap:16px;">
      <button class="menu-btn" aria-label="Menu" style="background:none;border:none;cursor:pointer;padding:4px;font-size:24px;line-height:1;display:flex;flex-direction:column;">
        <span style="display:block;width:22px;height:2px;background:#333;margin:3px 0;"></span>
        <span style="display:block;width:22px;height:2px;background:#333;margin:3px 0;"></span>
        <span style="display:block;width:22px;height:2px;background:#333;margin:3px 0;"></span>
      </button>
      <a href="/" style="text-decoration:none;display:flex;flex-direction:column;align-items:flex-start;">
        <span class="desktop-only" style="font-size:10px;letter-spacing:2px;color:#555;font-weight:500;">FEEL BETTER WITH</span>
        <img src="/images/isha_logo.webp" loading="lazy" alt="Isha Health" class="nav-logo" style="height:36px;margin-top:2px;" />
      </a>
    </div>
    <!-- Right: links + CTA -->
    <div style="display:flex;align-items:center;gap:18px;flex-shrink:0;">
      <a href="/ketamine-therapist-directory" class="desktop-only nav-link" style="font-size:13px;font-weight:500;color:#374151;text-decoration:none;">Find a therapist</a>
      <a href="/blog" class="desktop-only nav-link" style="font-size:13px;font-weight:500;color:#374151;text-decoration:none;">Blog</a>
      <a href="/outcomes" class="desktop-only nav-link" style="font-size:13px;font-weight:500;color:#374151;text-decoration:none;">Outcomes</a>
      <a href="/pricing" class="desktop-only nav-link" style="font-size:13px;font-weight:500;color:#374151;text-decoration:none;">Pricing</a>
      <a href="/collaborate-with-isha-health" class="desktop-only" style="font-size:11px;letter-spacing:0.5px;color:#9ca3af;text-decoration:none;font-weight:500;">FOR CLINICIANS</a>
      <a id="check-availability" href="/appointment" class="nav-cta" style="background:#0d9488;color:#fff;padding:10px 20px;border-radius:6px;font-size:13px;font-weight:600;letter-spacing:0.3px;text-decoration:none;white-space:nowrap;">Check availability</a>
    </div>
  </div>
  <!-- Overlay backdrop -->
  <div id="menu-backdrop" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.4);z-index:998;" onclick="document.getElementById('mobile-menu').style.display='none';this.style.display='none';"></div>
  <!-- Side menu -->
  <div id="mobile-menu" style="display:none;position:fixed;top:0;left:0;width:320px;max-width:85vw;height:100vh;background:#fff;z-index:999;overflow-y:auto;padding:24px;font-family:'Poppins',sans-serif;box-shadow:2px 0 12px rgba(0,0,0,0.15);">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
      <a href="/" style="text-decoration:none;">
        <img src="/images/isha_logo.webp" alt="Isha Health" style="height:30px;" />
      </a>
      <button id="close-menu" style="background:none;border:none;cursor:pointer;font-size:24px;color:#333;padding:4px;">&#10005;</button>
    </div>
    <div style="margin-bottom:16px;">
      <p style="font-size:12px;font-weight:600;letter-spacing:1px;color:#888;margin:0 0 8px;">FOR PATIENTS</p>
      <a href="/appointment" style="display:block;padding:6px 0;color:#333;text-decoration:none;font-size:14px;">Make an Appointment</a>
      <a href="/pricing" style="display:block;padding:6px 0;color:#333;text-decoration:none;font-size:14px;">Pricing</a>
      <a href="/our-treatment-approach" style="display:block;padding:6px 0;color:#333;text-decoration:none;font-size:14px;">Our Treatment Approach</a>
      <p style="font-size:13px;font-weight:500;color:#555;margin:10px 0 4px;">Current Patients</p>
      <a href="/current-patients/scheduling" style="display:block;padding:4px 0 4px 12px;color:#333;text-decoration:none;font-size:13px;">Scheduling</a>
      <a href="/current-patients/referral-from-your-primary-doctor" style="display:block;padding:4px 0 4px 12px;color:#333;text-decoration:none;font-size:13px;">Qualified Telemedicine Referral</a>
      <a href="/current-patients/superbill" style="display:block;padding:4px 0 4px 12px;color:#333;text-decoration:none;font-size:13px;">Superbill</a>
      <a href="/current-patients/session-instruction" style="display:block;padding:4px 0 4px 12px;color:#333;text-decoration:none;font-size:13px;">Dosing Session Instructions</a>
      <a href="/healing-music-playlist" style="display:block;padding:4px 0 4px 12px;color:#333;text-decoration:none;font-size:13px;">Healing Sound Playlist</a>
      <a href="/ketamine-therapist-directory" style="display:block;padding:6px 0;color:#333;text-decoration:none;font-size:14px;">Clinician Directory</a>
    </div>
    <div style="border-top:1px solid #eee;padding-top:16px;margin-bottom:16px;">
      <p style="font-size:12px;font-weight:600;letter-spacing:1px;color:#888;margin:0 0 8px;">FOR CLINICIANS</p>
      <a href="/collaborate-with-isha-health" style="display:block;padding:6px 0;color:#333;text-decoration:none;font-size:14px;">Collaborate with Isha Health</a>
      <a href="/referral-patient-process" style="display:block;padding:6px 0;color:#333;text-decoration:none;font-size:14px;">Patient Referral Process</a>
      <a href="/isha-health-media-kit" style="display:block;padding:6px 0;color:#333;text-decoration:none;font-size:14px;">Isha Health Media Kit</a>
    </div>
    <div style="border-top:1px solid #eee;padding-top:16px;margin-bottom:16px;">
      <p style="font-size:13px;font-weight:500;color:#555;margin:0 0 4px;">About Us</p>
      <a href="/about-us/about-isha-health" style="display:block;padding:4px 0 4px 12px;color:#333;text-decoration:none;font-size:13px;">Isha</a>
      <a href="/about-us/ketamine-therapy" style="display:block;padding:4px 0 4px 12px;color:#333;text-decoration:none;font-size:13px;">Ketamine</a>
    </div>
    <div style="border-top:1px solid #eee;padding-top:16px;">
      <a href="/isha-health-in-the-media" style="display:block;padding:6px 0;color:#333;text-decoration:none;font-size:14px;">Media</a>
      <a href="/faq" style="display:block;padding:6px 0;color:#333;text-decoration:none;font-size:14px;">FAQ</a>
      <a href="/blog" style="display:block;padding:6px 0;color:#333;text-decoration:none;font-size:14px;">Blog</a>
    </div>
  </div>
  <div style="height:1px;background:#222;"></div>
  <style>
    .nav-link:hover { color: #0d9488 !important; }
    @media (max-width: 1024px) {
      .desktop-only.nav-link[href="/ketamine-therapist-directory"],
      .desktop-only.nav-link[href="/outcomes"] { display: none !important; }
    }
    @media (max-width: 768px) {
      .desktop-only { display: none !important; }
      .nav-cta { padding: 8px 14px !important; font-size: 11px !important; }
    }
    @media (max-width: 400px) {
      .nav-cta { padding: 7px 10px !important; font-size: 10px !important; letter-spacing: 0 !important; }
      .nav-logo { height: 28px !important; }
    }
  </style>
  <script>
    document.querySelector('.menu-btn').addEventListener('click', function() {
      document.getElementById('mobile-menu').style.display = 'block';
      document.getElementById('menu-backdrop').style.display = 'block';
    });
    document.getElementById('close-menu').addEventListener('click', function() {
      document.getElementById('mobile-menu').style.display = 'none';
      document.getElementById('menu-backdrop').style.display = 'none';
    });
  </script>
</nav>`;

const footerHtml = `
<footer style="background:#1a1a1a;color:#fff;font-family:'Poppins',sans-serif;padding:60px 24px 0;">
  <div style="max-width:1200px;margin:0 auto;">
    <!-- Logo + social -->
    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;margin-bottom:48px;">
      <a href="/" style="text-decoration:none;">
        <img src="/images/logo_white.webp" loading="lazy" alt="Isha Health" style="height:40px;" />
      </a>
      <div style="display:flex;gap:16px;">
        <a href="https://www.linkedin.com/company/isha-health/" style="text-decoration:none;"><img src="/images/icon-linkedin.webp" loading="lazy" alt="LinkedIn" style="width:28px;height:28px;" /></a>
        <a href="https://www.instagram.com/isha.health/" style="text-decoration:none;"><img src="/images/icon-instagram.webp" loading="lazy" alt="Instagram" style="width:28px;height:28px;" /></a>
        <a href="https://twitter.com/IshaHealth" style="text-decoration:none;"><img src="/images/icon-twitter.webp" loading="lazy" alt="Twitter" style="width:28px;height:28px;" /></a>
      </div>
    </div>
    <!-- Link columns -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:40px;margin-bottom:48px;">
      <!-- Company -->
      <div>
        <p style="font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#888;margin:0 0 16px;">Company</p>
        <a href="/pricing" style="display:block;color:#ccc;text-decoration:none;font-size:14px;padding:4px 0;">PRICING</a>
        <a href="/about-us/about-isha-health" style="display:block;color:#ccc;text-decoration:none;font-size:14px;padding:4px 0;">About Us</a>
      </div>
      <!-- Service -->
      <div>
        <p style="font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#888;margin:0 0 16px;">Service</p>
        <a href="/about-us/ketamine-therapy" style="display:block;color:#ccc;text-decoration:none;font-size:14px;padding:4px 0;">Ketamine Therapy</a>
        <a href="/ketamine-therapy-for-depression" style="display:block;color:#ccc;text-decoration:none;font-size:14px;padding:4px 0;">Ketamine Therapy for Depression</a>
        <a href="/ketamine-therapy-for-anxiety" style="display:block;color:#ccc;text-decoration:none;font-size:14px;padding:4px 0;">Ketamine Therapy for Anxiety</a>
        <a href="/what-is-ketamine-assisted-therapy" style="display:block;color:#ccc;text-decoration:none;font-size:14px;padding:4px 0;">What is Ketamine Assisted Therapy</a>
        <a href="/outcomes" style="display:block;color:#ccc;text-decoration:none;font-size:14px;padding:4px 0;">Patient Outcomes</a>
        <a href="/faq/ketamine-therapy" style="display:block;color:#ccc;text-decoration:none;font-size:14px;padding:4px 0;">FAQ</a>
        <a href="/current-patients/superbill" style="display:block;color:#ccc;text-decoration:none;font-size:14px;padding:4px 0;">Superbill</a>
      </div>
      <!-- Legal -->
      <div>
        <p style="font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#888;margin:0 0 16px;">Legal</p>
        <a href="/terms-of-use" style="display:block;color:#ccc;text-decoration:none;font-size:14px;padding:4px 0;">Terms of Use</a>
        <a href="/privacy-policy" style="display:block;color:#ccc;text-decoration:none;font-size:14px;padding:4px 0;">Privacy Policy</a>
        <a href="/notice-of-privacy-practices" style="display:block;color:#ccc;text-decoration:none;font-size:14px;padding:4px 0;">Notice of Privacy Practices</a>
        <a href="/safety-information-for-ketamine-treatment" style="display:block;color:#ccc;text-decoration:none;font-size:14px;padding:4px 0;">Safety Information</a>
        <a href="/good-faith-estimate" style="display:block;color:#ccc;text-decoration:none;font-size:14px;padding:4px 0;">Good Faith Estimate</a>
        <a href="/consent-form" style="display:block;color:#ccc;text-decoration:none;font-size:14px;padding:4px 0;">Consent Form</a>
      </div>
      <!-- Contact -->
      <div>
        <p style="font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#888;margin:0 0 16px;">Contact Us</p>
        <span style="display:block;color:#ccc;font-size:14px;padding:4px 0;">San Francisco, California</span>
        <a href="mailto:info@isha.health" style="display:block;color:#ccc;text-decoration:none;font-size:14px;padding:4px 0;">Email: info@isha.health</a>
      </div>
    </div>
    <!-- Emergency notice + locations -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:40px;margin-bottom:48px;padding-top:32px;border-top:1px solid #333;">
      <div>
        <p style="font-size:13px;color:#999;line-height:1.7;margin:0;">
          This website has been reviewed by Isha Health California, P.C. and should not be used as medical advice in place of a licensed psychiatric clinician.<br/><br/>
          <strong style="color:#ccc;">IN CASE OF EMERGENCY:</strong><br/>
          If you are in a life-threatening situation, don't use this site. Call, text, or chat 988 or 1-800-273-TALK (8255), or use these resources to get immediate help.
        </p>
      </div>
      <div>
        <p style="font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#888;margin:0 0 16px;">Location</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px 24px;">
          <a href="/locations/online-at-home-ketamine-therapy-in-arizona" style="color:#ccc;text-decoration:none;font-size:14px;padding:4px 0;">Arizona</a>
          <a href="/locations/online-at-home-ketamine-therapy-in-california" style="color:#ccc;text-decoration:none;font-size:14px;padding:4px 0;">California</a>
          <a href="/locations/online-at-home-ketamine-therapy-in-oregon" style="color:#ccc;text-decoration:none;font-size:14px;padding:4px 0;">Oregon</a>
          <a href="/locations/online-at-home-ketamine-therapy-in-colorado" style="color:#ccc;text-decoration:none;font-size:14px;padding:4px 0;">Colorado</a>
          <a href="/locations/online-at-home-ketamine-therapy-in-washington" style="color:#ccc;text-decoration:none;font-size:14px;padding:4px 0;">Washington</a>
          <a href="/locations/online-at-home-ketamine-therapy-in-florida" style="color:#ccc;text-decoration:none;font-size:14px;padding:4px 0;">Florida</a>
          <a href="/locations/online-at-home-ketamine-therapy-in-texas" style="color:#ccc;text-decoration:none;font-size:14px;padding:4px 0;">Texas</a>
          <a href="/locations/online-at-home-ketamine-therapy-in-georgia" style="color:#ccc;text-decoration:none;font-size:14px;padding:4px 0;">Georgia</a>
        </div>
      </div>
    </div>
    <!-- Copyright -->
    <div style="border-top:1px solid #333;padding:24px 0;text-align:center;">
      <p style="font-size:13px;color:#666;margin:0;">&copy; 2026 Isha Health. All rights reserved</p>
    </div>
  </div>
</footer>`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Ahrefs Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="cQOExkk7E6SoS147G9lR0w"
          strategy="afterInteractive"
        />
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KDHR9XT');`,
          }}
        />
        {/* Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16993591045"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-16993591045');`,
          }}
        />
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
                'Physician-led online ketamine therapy for depression, anxiety, and PTSD. 88.8% of patients with moderate-to-severe depression show measurable improvement. Available in 8 states.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '4255 18th Street',
                addressLocality: 'San Francisco',
                addressRegion: 'CA',
                postalCode: '94114',
                addressCountry: 'US',
              },
              telephone: '+1-415-501-0812',
              email: 'info@isha.health',
              priceRange: '$$',
              image: 'https://isha.health/images/isha_logo.webp',
              sameAs: [
                'https://www.linkedin.com/company/isha-health/',
                'https://www.instagram.com/isha.health/',
                'https://twitter.com/IshaHealth',
                'https://www.trustpilot.com/review/isha.health',
              ],
              medicalSpecialty: 'Psychiatric',
              areaServed: [
                { '@type': 'AdministrativeArea', name: 'Arizona' },
                { '@type': 'AdministrativeArea', name: 'California' },
                { '@type': 'AdministrativeArea', name: 'Colorado' },
                { '@type': 'AdministrativeArea', name: 'Florida' },
                { '@type': 'AdministrativeArea', name: 'Georgia' },
                { '@type': 'AdministrativeArea', name: 'Oregon' },
                { '@type': 'AdministrativeArea', name: 'Texas' },
                { '@type': 'AdministrativeArea', name: 'Washington' },
              ],
              founder: {
                '@type': 'Person',
                name: 'Mai Shimada, MD',
                url: 'https://isha.health/dr-mai-shimada',
                jobTitle: 'Founder & CEO',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Ketamine Therapy Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    name: 'Initial Consultation',
                    price: '350',
                    priceCurrency: 'USD',
                    description: '60-minute video consultation with a physician',
                  },
                  {
                    '@type': 'Offer',
                    name: 'Follow-Up Appointment',
                    price: '350',
                    priceCurrency: 'USD',
                    description: '30-minute follow-up to adjust treatment plan',
                  },
                ],
              },
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
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KDHR9XT"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <div
          dangerouslySetInnerHTML={{ __html: navbarHtml }}
        />
        {children}
        {/* Newsletter signup */}
        <div
          style={{
            backgroundColor: '#1a1a2e',
            padding: '2.5rem 1.5rem',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <p
              style={{
                color: '#fff',
                fontFamily: "'Libre Baskerville', serif",
                fontSize: '1.1rem',
                fontWeight: 700,
                marginBottom: '0.5rem',
              }}
            >
              Stay informed on ketamine therapy
            </p>
            <p
              style={{
                color: '#9ca3af',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '0.85rem',
                marginBottom: '1rem',
              }}
            >
              Research updates, clinical insights, and mental health resources — delivered to your inbox.
            </p>
            <NewsletterForm variant="footer" />
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: footerHtml }}
        />
      </body>
    </html>
  );
}
