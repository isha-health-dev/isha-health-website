import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ketamine Therapy for OCD | Isha Health",
  description: "Emerging evidence suggests ketamine may help reduce OCD symptoms when standard treatments have not been effective. Learn about the research and how Isha Health approaches ketamine therapy for obsessive-compulsive disorder.",
  alternates: { canonical: "https://isha.health/conditions/ocd" },
  openGraph: {
    title: "Ketamine Therapy for OCD | Isha Health",
    description: "Emerging evidence suggests ketamine may help reduce OCD symptoms when standard treatments have not been effective. Learn about the research and how Isha Health approaches ketamine therapy for obsessive-compulsive disorder.",
    type: "website",
    url: "https://isha.health/conditions/ocd",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ketamine Therapy for OCD | Isha Health",
    description: "Emerging evidence suggests ketamine may help reduce OCD symptoms when standard treatments have not been effective. Learn about the research and how Isha Health approaches ketamine therapy for obsessive-compulsive disorder.",
  },
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="section-base white-section static-page">
  <script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can ketamine help with OCD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Preliminary research suggests ketamine may help reduce obsessive-compulsive symptoms, particularly in individuals who have not responded to SSRIs or cognitive-behavioral therapy. However, research is still in early stages, and ketamine is not FDA-approved for OCD."
        }
      },
      {
        "@type": "Question",
        "name": "How does ketamine work differently from SSRIs for OCD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While SSRIs work primarily on the serotonin system and can take weeks to show effects, ketamine acts on the glutamate system through NMDA receptor modulation. This different mechanism may explain why some patients who do not respond to SSRIs may respond to ketamine, and why effects may appear more rapidly."
        }
      },
      {
        "@type": "Question",
        "name": "Is ketamine FDA-approved for OCD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Ketamine is FDA-approved as an anesthetic and is used off-label for OCD. Its use for OCD is based on emerging clinical evidence, and it should only be prescribed by a licensed physician who can evaluate your specific situation."
        }
      },
      {
        "@type": "Question",
        "name": "How long do the effects of ketamine last for OCD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The duration of symptom relief varies between individuals. Some studies have reported that a single ketamine dose may reduce OCD symptoms for up to one week, though repeated treatments are typically needed for sustained benefit. Your physician will work with you to determine an appropriate treatment schedule."
        }
      }
    ]
  })}</script>
  <script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://isha.health" },
      { "@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://isha.health/conditions" },
      { "@type": "ListItem", "position": 3, "name": "OCD", "item": "https://isha.health/conditions/ocd" }
    ]
  })}</script>
  <div class="hero-isha">
    <h1 class="heading static-heading">Ketamine Therapy for OCD</h1>
  </div>
  <div class="section-wrapper" style="max-width:800px;margin:0 auto;padding:2rem 1.5rem;">
    <nav aria-label="Breadcrumb" style="font-size:0.8rem;color:#6b7280;margin-bottom:1.5rem;font-family:'Poppins',sans-serif;">
      <a href="/" style="color:#0d9488;text-decoration:none;">Home</a> /
      <span style="color:#6b7280;">Conditions</span> /
      <span style="color:#9ca3af;">OCD</span>
    </nav>

    <p style="font-family:'Poppins',sans-serif;font-size:1.05rem;line-height:1.8;color:#374151;margin-bottom:2rem;text-wrap:pretty;">
      Obsessive-compulsive disorder (OCD) affects approximately 2-3% of the population and is characterized by persistent unwanted thoughts (obsessions) and repetitive behaviors (compulsions) that can significantly impair quality of life. Standard treatments include SSRIs and cognitive-behavioral therapy with exposure and response prevention, but up to 40% of patients do not achieve adequate relief. Emerging research suggests that ketamine, which works through a different brain mechanism than traditional medications, may offer a new avenue for individuals with treatment-resistant OCD.
    </p>

    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">How ketamine may help with OCD</h2>
    <ul style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.8;padding-left:1.25rem;margin-bottom:2rem;">
      <li><strong>Glutamate system modulation</strong> — OCD has been linked to glutamate dysregulation, and ketamine acts directly on the glutamate system through NMDA receptor antagonism</li>
      <li><strong>Rapid onset of action</strong> — unlike SSRIs, which may take 8-12 weeks to show full effect in OCD, ketamine may produce noticeable changes in obsessive-compulsive symptoms within hours to days</li>
      <li><strong>Novel mechanism</strong> — because ketamine works through a different pathway than serotonin-based medications, it may help patients who have not responded to conventional treatments</li>
      <li><strong>Potential to enhance therapy</strong> — by reducing the intensity of obsessive thoughts, ketamine may help patients engage more effectively in exposure-based psychotherapy</li>
    </ul>

    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">What the research shows</h2>
    <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;line-height:1.8;color:#374151;margin-bottom:1rem;text-wrap:pretty;">
      A proof-of-concept crossover trial by Rodriguez et al. (2013), published in <em>Neuropsychopharmacology</em>, found that a single intravenous ketamine infusion produced rapid and significant anti-obsessional effects in unmedicated adults with OCD. Over half of the participants met response criteria within one week of ketamine administration. A subsequent study by the same research group (Rodriguez et al., 2016) explored the effects of repeated ketamine infusions and observed that some patients maintained improvement over the treatment course.
    </p>
    <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;line-height:1.8;color:#374151;margin-bottom:2rem;text-wrap:pretty;">
      While these findings are promising, research on ketamine for OCD remains in its early stages. Studies have generally been small, and the optimal dosing, frequency, and long-term outcomes are still being investigated. Ketamine is not FDA-approved for OCD and is used off-label when prescribed for this condition. For more details, see our article on <a href="/post/ketamine-ocd-emerging-evidence" style="color:#0d9488;text-decoration:underline;">ketamine and OCD: emerging evidence</a>.
    </p>

    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">How treatment works at Isha Health</h2>
    <div style="display:flex;flex-wrap:wrap;gap:1rem;margin-bottom:2rem;">
      <div style="flex:1 1 200px;padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;background:#fafafa;">
        <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#0d9488;margin-bottom:0.25rem;">1. Consultation</p>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">Schedule a 60-minute telehealth evaluation with a physician experienced in ketamine-assisted therapy. We assess your OCD symptoms, treatment history, and suitability for ketamine.</p>
      </div>
      <div style="flex:1 1 200px;padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;background:#fafafa;">
        <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#0d9488;margin-bottom:0.25rem;">2. Personalized protocol</p>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">If ketamine is appropriate, your physician designs a tailored treatment plan. Medication is prescribed and delivered to your home.</p>
      </div>
      <div style="flex:1 1 200px;padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;background:#fafafa;">
        <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#0d9488;margin-bottom:0.25rem;">3. Ongoing support</p>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">Complete at-home sessions with continued clinical follow-up. Your physician monitors symptom changes and adjusts your protocol as needed.</p>
      </div>
    </div>

    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">Frequently asked questions</h2>
    <div style="margin-bottom:2rem;">
      <div style="border-bottom:1px solid #e5e7eb;padding:1rem 0;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#111827;margin-bottom:0.35rem;">Can ketamine help with OCD?</h3>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">Preliminary research suggests ketamine may help reduce obsessive-compulsive symptoms, particularly in individuals who have not responded to SSRIs or cognitive-behavioral therapy. However, research is still in early stages, and ketamine is not FDA-approved for OCD.</p>
      </div>
      <div style="border-bottom:1px solid #e5e7eb;padding:1rem 0;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#111827;margin-bottom:0.35rem;">How does ketamine work differently from SSRIs for OCD?</h3>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">While SSRIs work primarily on the serotonin system and can take weeks to show effects, ketamine acts on the glutamate system through NMDA receptor modulation. This different mechanism may explain why some patients who do not respond to SSRIs may respond to ketamine, and why effects may appear more rapidly.</p>
      </div>
      <div style="border-bottom:1px solid #e5e7eb;padding:1rem 0;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#111827;margin-bottom:0.35rem;">Is ketamine FDA-approved for OCD?</h3>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">No. Ketamine is FDA-approved as an anesthetic and is used off-label for OCD. Its use for OCD is based on emerging clinical evidence, and it should only be prescribed by a licensed physician who can evaluate your specific situation.</p>
      </div>
      <div style="padding:1rem 0;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#111827;margin-bottom:0.35rem;">How long do the effects of ketamine last for OCD?</h3>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">The duration of symptom relief varies between individuals. Some studies have reported that a single ketamine dose may reduce OCD symptoms for up to one week, though repeated treatments are typically needed for sustained benefit. Your physician will work with you to determine an appropriate treatment schedule.</p>
      </div>
    </div>
  </div>

  <div style="background-color:#f0fdfa;padding:3rem 1.5rem;text-align:center;border-top:1px solid #ccfbf1;">
    <p style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#0f766e;margin-bottom:0.5rem;">Ready to explore ketamine therapy for OCD?</p>
    <p style="font-family:'Poppins',sans-serif;color:#4b5563;margin-bottom:1.5rem;font-size:0.95rem;">Appointments often available within 24 hours.</p>
    <a href="/appointment" style="display:inline-block;padding:0.85rem 2rem;background-color:#0d9488;color:#fff;border-radius:8px;font-family:'Poppins',sans-serif;font-weight:600;font-size:0.95rem;text-decoration:none;">Check Appointment Availability</a>
  </div>
</div>`,
      }}
    />
  );
}
