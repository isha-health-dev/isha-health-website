import type { Metadata } from 'next';
import { buildOpenGraph } from '@/lib/seo';

export const metadata: Metadata = {
  title: "Isha Health Media Kit",
  description: "Download Isha Health clinic logos and HTML code to easily add a link to Isha Health on your website. Access high-quality branding materials for media use…",
  alternates: {
    canonical: "https://isha.health/isha-health-media-kit",
  },
  openGraph: buildOpenGraph({
    title: "Isha Health Media Kit",
    description: "Download Isha Health clinic logos and HTML code to easily add a link to Isha Health on your website. Access high-quality branding materials for media use…",
    path: '/isha-health-media-kit',
  }),
  twitter: {
    card: "summary_large_image",
    title: "Isha Health Media Kit",
    description: "Download Isha Health clinic logos and HTML code to easily add a link to Isha Health on your website. Access high-quality branding materials for media use…",
  },
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<div style="padding:0 0 3rem;">
  <div style="text-align:center;padding:3rem 1.5rem 1.5rem;">
    <h1 style="font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#111827;margin:0;">
      Isha Health Media Kit
    </h1>
  </div>

  <div style="max-width:800px;margin:0 auto;padding:0 1.5rem;">
    <div style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;">

      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin:2rem 0 0.75rem;">
        Welcome to the Isha Health Media Kit
      </h2>
      <p style="margin:0 0 1.5rem;">
        On this page, you can easily access and download our clinic's official logos, as well as HTML code snippets to create a clickable link to Isha Health on your website. Feel free to use these resources to share or highlight our services.
      </p>

      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin:2rem 0 0.75rem;">
        Download our logos
      </h2>

      <div style="margin-bottom:1.5rem;">
        <img
          src="/images/cd4f580f_66ed4db3ad891a3cbd9a58e5_Isha_Health_Original_Logo.png"
          loading="lazy"
          sizes="(max-width: 1233px) 100vw, 1233px"
          srcset="/images/2c399fd5_66ed4db3ad891a3cbd9a58e5_Isha_Health_Original_Logo-p-500.png 500w, /images/c471008a_66ed4db3ad891a3cbd9a58e5_Isha_Health_Original_Logo-p-800.png 800w, /images/775973d0_66ed4db3ad891a3cbd9a58e5_Isha_Health_Original_Logo-p-1080.png 1080w, /images/4443720f_66ed4db3ad891a3cbd9a58e5_Isha_Health_Original_Logo.png 1233w"
          alt="Isha Health Original Logo"
          style="max-width:100%;height:auto;display:block;margin-bottom:1rem;"
        >
        <img
          src="/images/136b475e_66ed4db30b6f6525e28cf34a_Isha_Health_Original_Logo_White.png.png"
          loading="lazy"
          sizes="(max-width: 1232px) 100vw, 1232px"
          srcset="/images/3f78a574_66ed4db30b6f6525e28cf34a_Isha_Health_Original_Logo_White.png-p-500.png 500w, /images/498cd9ac_66ed4db30b6f6525e28cf34a_Isha_Health_Original_Logo_White.png-p-800.png 800w, /images/7c9eaced_66ed4db30b6f6525e28cf34a_Isha_Health_Original_Logo_White.png-p-1080.png 1080w, /images/2a63013e_66ed4db30b6f6525e28cf34a_Isha_Health_Original_Logo_White.png.png 1232w"
          alt="Isha Health Original Logo White"
          style="max-width:100%;height:auto;display:block;background:#333;padding:1rem;border-radius:8px;"
        >
      </div>

      <div style="display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:2rem;">
        <a href="/images/cd4f580f_66ed4db3ad891a3cbd9a58e5_Isha_Health_Original_Logo.png" download="Isha Health Original Logo" style="display:inline-block;background:#0d9488;color:#fff;font-family:'Poppins',sans-serif;font-size:0.9rem;font-weight:600;padding:0.65rem 1.5rem;border-radius:6px;text-decoration:none;text-align:center;">
          Download Black Logo
        </a>
        <a href="/images/136b475e_66ed4db30b6f6525e28cf34a_Isha_Health_Original_Logo_White.png.png" download="Isha Health Original Logo White" style="display:inline-block;background:#0d9488;color:#fff;font-family:'Poppins',sans-serif;font-size:0.9rem;font-weight:600;padding:0.65rem 1.5rem;border-radius:6px;text-decoration:none;text-align:center;">
          Download White Logo
        </a>
      </div>

      <p style="margin:0 0 1.5rem;">
        Copy the snippet below and paste it into your website to generate a "Collaborating with Isha Health" button like the one shown below.
      </p>

      <div style="margin-bottom:1.5rem;">
        <a href="https://isha.health" target="_blank" style="display:inline-flex;align-items:center;background-color:#bcd9c7;color:#333;padding:12px 24px;border:none;border-radius:5px;font-size:16px;text-decoration:none;margin:10px 0;font-weight:bold;">
          Collaborating with
          <img src="/images/cd4f580f_66ed4db3ad891a3cbd9a58e5_Isha_Health_Original_Logo.png" alt="Isha Health Logo" style="height:30px;margin-left:12px;">
        </a>
      </div>

      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin:2rem 0 0.75rem;">
        Embed the "Collaborating with Isha Health" button on your website:
      </h2>

      <textarea id="code-snippet" rows="10" style="width:100%;font-family:monospace;font-size:0.85rem;padding:1rem;border:1px solid #d1d5db;border-radius:8px;background:#f9fafb;color:#374151;resize:vertical;">&lt;style&gt;
    .isha-collab-link {
        display: inline-flex;
        align-items: center;
        background-color: #bcd9c7;
        color: #333;
        padding: 12px 24px;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        text-decoration: none;
        margin: 10px 0;
        font-weight: bold;
    }    .isha-collab-link:hover {
        background-color: #a0c2a9;
    }    .isha-collab-link img {
        height: 30px;
        margin-left: 12px;
    }
&lt;/style&gt;&lt;a href="https://isha.health" class="isha-collab-link" target="_blank"&gt;
    Collaborating with
    &lt;img src="/images/cd4f580f_66ed4db3ad891a3cbd9a58e5_Isha_Health_Original_Logo.png" alt="Isha Health Logo"&gt;
&lt;/a&gt;</textarea>

      <div style="margin-top:0.75rem;">
        <button onclick="navigator.clipboard.writeText(document.getElementById('code-snippet').value)" style="background:#0d9488;color:#fff;font-family:'Poppins',sans-serif;font-size:0.9rem;font-weight:600;padding:0.65rem 1.5rem;border:none;border-radius:6px;cursor:pointer;">
          Copy Code
        </button>
      </div>

    </div>
  </div>
</div>
`,
      }}
    />
  );
}
