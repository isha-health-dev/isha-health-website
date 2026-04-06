import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Isha Health Media Kit",
  description: "Download Isha Health clinic logos and HTML code to easily add a link to Isha Health on your website.",
  alternates: {
    canonical: "https://isha.health/isha-health-media-kit",
  },
  openGraph: {
    title: "Isha Health Media Kit",
    description: "Download Isha Health clinic logos and HTML code to easily add a link to Isha Health on your website.",
    type: "website",
    url: "https://isha.health/isha-health-media-kit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isha Health Media Kit",
    description: "Download Isha Health clinic logos and HTML code to easily add a link to Isha Health on your website.",
  },
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: "<div class=\"section-base white-section static-page\"><div class=\"hero-isha\"><h1 class=\"heading static-heading\"><strong>Isha Health Media Kit</strong></h1></div><div class=\"section-wrapper static-page-wrapper\"><div class=\"w-richtext\"><h4><strong>Welcome to the Isha Health Media Kit</strong></h4><p>On this page, you can easily access and download our clinic’s official logos, as well as HTML code snippets to create a clickable link to Isha Health on your website. Feel free to use these resources to share or highlight our services.</p><p>‍</p><h4><strong>Download our logos</strong></h4></div><div class=\"horizontal\"><img src=\"/images/cd4f580f_66ed4db3ad891a3cbd9a58e5_Isha_Health_Original_Logo.png\" loading=\"lazy\" sizes=\"(max-width: 1233px) 100vw, 1233px\" srcset=\"/images/2c399fd5_66ed4db3ad891a3cbd9a58e5_Isha_Health_Original_Logo-p-500.png 500w, /images/c471008a_66ed4db3ad891a3cbd9a58e5_Isha_Health_Original_Logo-p-800.png 800w, /images/775973d0_66ed4db3ad891a3cbd9a58e5_Isha_Health_Original_Logo-p-1080.png 1080w, /images/4443720f_66ed4db3ad891a3cbd9a58e5_Isha_Health_Original_Logo.png 1233w\" alt=\"Isha Health Original Logo\" class=\"image-30\"><img src=\"/images/136b475e_66ed4db30b6f6525e28cf34a_Isha_Health_Original_Logo_White.png.png\" loading=\"lazy\" sizes=\"(max-width: 1232px) 100vw, 1232px\" srcset=\"/images/3f78a574_66ed4db30b6f6525e28cf34a_Isha_Health_Original_Logo_White.png-p-500.png 500w, /images/498cd9ac_66ed4db30b6f6525e28cf34a_Isha_Health_Original_Logo_White.png-p-800.png 800w, /images/7c9eaced_66ed4db30b6f6525e28cf34a_Isha_Health_Original_Logo_White.png-p-1080.png 1080w, /images/2a63013e_66ed4db30b6f6525e28cf34a_Isha_Health_Original_Logo_White.png.png 1232w\" alt=\"Isha Health Original Logo White.png\" class=\"image-30\"></div><div class=\"w-embed\">\n\n<a href=\"/images/cd4f580f_66ed4db3ad891a3cbd9a58e5_Isha_Health_Original_Logo.png\" download=\"Isha Health Original Logo\">\n    <button class=\"download-button\">Download Black Logo</button>\n</a>\n\n<a href=\"/images/136b475e_66ed4db30b6f6525e28cf34a_Isha_Health_Original_Logo_White.png.png\" download=\"Isha Health Original Logo\">\n    <button class=\"download-button\">Download White Logo</button>\n</a></div><div class=\"w-richtext\"><p>Copy the snippet below and paste it into your website to generate a \"Collaborate with Isha Health\" button like the one shown below.</p></div><div class=\"w-embed\">\n\n<a href=\"https://www.isha.health\" class=\"isha-collab-link\" target=\"_blank\">\n    Collaborating with\n    <img src=\"/images/cd4f580f_66ed4db3ad891a3cbd9a58e5_Isha_Health_Original_Logo.png\" alt=\"Isha Health Logo\">\n</a></div><div class=\"w-embed w-script\">\n\n<h3>Embed the \"Collaborating with Isha Health\" button on your website:</h3>\n\n<textarea id=\"code-snippet\" rows=\"10\" cols=\"70\">&lt;style&gt;\n    .isha-collab-link {\n        display: inline-flex;\n        align-items: center;\n        background-color: #bcd9c7;\n        color: #333;\n        padding: 12px 24px;\n        border: none;\n        border-radius: 5px;\n        font-size: 16px;\n        text-decoration: none;\n        margin: 10px 0;\n        font-weight: bold;\n    }\n\n    .isha-collab-link:hover {\n        background-color: #a0c2a9;\n    }\n\n    .isha-collab-link img {\n        height: 30px;\n        margin-left: 12px;\n    }\n&lt;/style&gt;\n\n&lt;a href=\"https://www.isha.health\" class=\"isha-collab-link\" target=\"_blank\"&gt;\n    Collaborating with\n    &lt;img src=\"/images/cd4f580f_66ed4db3ad891a3cbd9a58e5_Isha_Health_Original_Logo.png\" alt=\"Isha Health Logo\"&gt;\n&lt;/a&gt;\n</textarea>\n\n<br>\n\n<button class=\"copy-btn\" onclick=\"copyCode()\">Copy Code</button>\n\n</div></div></div><!-- Google Tag Manager (noscript) -->\n\n<!-- End Google Tag Manager (noscript) -->\n\n",
      }}
    />
  );
}
