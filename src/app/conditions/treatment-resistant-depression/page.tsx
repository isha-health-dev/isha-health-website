import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ketamine for Treatment-Resistant Depression",
  description: "Ketamine has shown significant promise for treatment-resistant depression when conventional antidepressants have not worked.",
  alternates: { canonical: "https://isha.health/conditions/treatment-resistant-depression" },
  openGraph: {
    title: "Ketamine for Treatment-Resistant Depression",
    description: "Ketamine has shown significant promise for treatment-resistant depression when conventional antidepressants have not worked.",
    type: "website",
    images: ["/images/isha_logo.webp"],
    url: "https://isha.health/conditions/treatment-resistant-depression",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ketamine for Treatment-Resistant Depression",
    description: "Ketamine has shown significant promise for treatment-resistant depression when conventional antidepressants have not worked.",
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
        "name": "What is treatment-resistant depression?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Treatment-resistant depression (TRD) is generally defined as depression that has not responded adequately to at least two different antidepressant medications taken at appropriate doses for sufficient durations. It affects an estimated one-third of people with major depressive disorder."
        }
      },
      {
        "@type": "Question",
        "name": "How effective is ketamine for treatment-resistant depression?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Multiple clinical studies and meta-analyses have shown that ketamine can produce rapid and significant reductions in depression scores in patients with TRD. Response rates in studies have varied, with some reporting that over 50% of patients experience meaningful improvement. However, individual results vary, and ongoing treatment is typically needed to maintain benefits."
        }
      },
      {
        "@type": "Question",
        "name": "Is ketamine or esketamine FDA-approved for treatment-resistant depression?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Esketamine (Spravato), a nasal spray form of the S-enantiomer of ketamine, was FDA-approved in 2019 for treatment-resistant depression in conjunction with an oral antidepressant. Racemic ketamine itself is FDA-approved as an anesthetic and is used off-label for depression. At Isha Health, we prescribe oral ketamine, which is used off-label for TRD."
        }
      },
      {
        "@type": "Question",
        "name": "How is ketamine therapy for TRD different from standard antidepressants?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard antidepressants primarily target the serotonin, norepinephrine, or dopamine systems and typically take 4-6 weeks to show effects. Ketamine works through a fundamentally different mechanism — NMDA receptor antagonism on the glutamate system — and may produce noticeable improvement within hours to days. This makes it a potentially valuable option for patients who have not responded to conventional approaches."
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
      { "@type": "ListItem", "position": 3, "name": "Treatment-Resistant Depression", "item": "https://isha.health/conditions/treatment-resistant-depression" }
    ]
  })}</script>
  <div class="hero-isha">
    <h1 class="heading static-heading">Ketamine Therapy for Treatment-Resistant Depression</h1>
  </div>
  <div class="section-wrapper" style="max-width:800px;margin:0 auto;padding:2rem 1.5rem;">
    <nav aria-label="Breadcrumb" style="font-size:0.8rem;color:#6b7280;margin-bottom:1.5rem;font-family:'Poppins',sans-serif;">
      <a href="/" style="color:#0d9488;text-decoration:none;">Home</a> /
      <span style="color:#6b7280;">Conditions</span> /
      <span style="color:#9ca3af;">Treatment-Resistant Depression</span>
    </nav>

    <p style="font-family:'Poppins',sans-serif;font-size:1.05rem;line-height:1.8;color:#374151;margin-bottom:2rem;text-wrap:pretty;">
      Treatment-resistant depression (TRD) affects roughly one-third of people with major depressive disorder — an estimated 2.8 million adults in the U.S. who have tried multiple antidepressants without achieving adequate relief. TRD is associated with significant functional impairment, increased healthcare costs, and higher risk of suicidal ideation. Ketamine represents one of the most significant advances in depression treatment in decades, offering a fundamentally different approach for patients who have not responded to conventional medications.
    </p>

    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">How ketamine may help with treatment-resistant depression</h2>
    <ul style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.8;padding-left:1.25rem;margin-bottom:2rem;">
      <li><strong>Rapid antidepressant onset</strong> — unlike SSRIs and SNRIs that take weeks to work, ketamine may produce noticeable mood improvement within hours to days</li>
      <li><strong>Novel mechanism</strong> — ketamine works through NMDA receptor antagonism and glutamate modulation, entirely different from serotonin-based antidepressants, which is why it may help when those medications have not</li>
      <li><strong>Neuroplasticity promotion</strong> — research indicates ketamine may stimulate the growth of new synaptic connections, potentially reversing some of the neural changes associated with chronic depression</li>
      <li><strong>Bridge to stability</strong> — the rapid onset of ketamine may provide relief while longer-term treatment strategies take effect</li>
    </ul>

    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">What the research shows</h2>
    <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;line-height:1.8;color:#374151;margin-bottom:1rem;text-wrap:pretty;">
      The evidence base for ketamine in TRD is among the strongest of any off-label ketamine indication. A landmark meta-analysis by Marcantoni et al. (2020), analyzing 28 studies, concluded that a single ketamine infusion was effective in reducing depression scores in TRD patients, with effects observed as early as 4 hours post-infusion and peaking at 24 hours. A large retrospective analysis by Zheng et al. (2020), published in the <em>Journal of Affective Disorders</em>, examined over 9,000 patients who received ketamine infusions and found that 53.6% showed more than 50% reduction in depression symptoms, with 73% showing reduced suicidal ideation.
    </p>
    <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;line-height:1.8;color:#374151;margin-bottom:2rem;text-wrap:pretty;">
      More recent real-world data from oral ketamine programs have also shown promising results. Hull et al. (2022) and Hassan et al. (2022) each published large retrospective chart reviews with over 1,000 patients receiving oral ketamine via telehealth, demonstrating significant reductions in depression and anxiety scores. While ketamine (racemic) is not FDA-approved specifically for TRD, the FDA approved intranasal esketamine (Spravato) for TRD in 2019 — a closely related compound. For more detail, visit our page on <a href="/ketamine-therapy-for-depression" style="color:#0d9488;text-decoration:underline;">ketamine for depression</a>.
    </p>

    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">How treatment works at Isha Health</h2>
    <div style="display:flex;flex-wrap:wrap;gap:1rem;margin-bottom:2rem;">
      <div style="flex:1 1 200px;padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;background:#fafafa;">
        <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#0d9488;margin-bottom:0.25rem;">1. Consultation</p>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">A 60-minute telehealth evaluation with a physician experienced in ketamine therapy. We review your depression history, prior medication trials, and overall health to determine if ketamine is appropriate.</p>
      </div>
      <div style="flex:1 1 200px;padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;background:#fafafa;">
        <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#0d9488;margin-bottom:0.25rem;">2. Personalized protocol</p>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">Your physician creates a tailored oral ketamine treatment plan with dosing and frequency adjusted to your needs. Medication is delivered to your home from a compounding pharmacy.</p>
      </div>
      <div style="flex:1 1 200px;padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;background:#fafafa;">
        <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#0d9488;margin-bottom:0.25rem;">3. Ongoing care</p>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">Regular follow-up appointments to monitor your response, adjust dosing, and ensure you are getting the best possible outcome from treatment.</p>
      </div>
    </div>

    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">Frequently asked questions</h2>
    <div style="margin-bottom:2rem;">
      <div style="border-bottom:1px solid #e5e7eb;padding:1rem 0;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#111827;margin-bottom:0.35rem;">What is treatment-resistant depression?</h3>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">Treatment-resistant depression (TRD) is generally defined as depression that has not responded adequately to at least two different antidepressant medications taken at appropriate doses for sufficient durations. It affects an estimated one-third of people with major depressive disorder.</p>
      </div>
      <div style="border-bottom:1px solid #e5e7eb;padding:1rem 0;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#111827;margin-bottom:0.35rem;">How effective is ketamine for treatment-resistant depression?</h3>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">Multiple clinical studies and meta-analyses have shown that ketamine can produce rapid and significant reductions in depression scores in patients with TRD. Response rates in studies have varied, with some reporting that over 50% of patients experience meaningful improvement. However, individual results vary, and ongoing treatment is typically needed to maintain benefits.</p>
      </div>
      <div style="border-bottom:1px solid #e5e7eb;padding:1rem 0;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#111827;margin-bottom:0.35rem;">Is ketamine or esketamine FDA-approved for treatment-resistant depression?</h3>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">Esketamine (Spravato), a nasal spray form of the S-enantiomer of ketamine, was FDA-approved in 2019 for treatment-resistant depression in conjunction with an oral antidepressant. Racemic ketamine itself is FDA-approved as an anesthetic and is used off-label for depression. At Isha Health, we prescribe oral ketamine, which is used off-label for TRD.</p>
      </div>
      <div style="padding:1rem 0;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#111827;margin-bottom:0.35rem;">How is ketamine therapy for TRD different from standard antidepressants?</h3>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">Standard antidepressants primarily target the serotonin, norepinephrine, or dopamine systems and typically take 4-6 weeks to show effects. Ketamine works through a fundamentally different mechanism — NMDA receptor antagonism on the glutamate system — and may produce noticeable improvement within hours to days. This makes it a potentially valuable option for patients who have not responded to conventional approaches.</p>
      </div>
    </div>
  </div>

  <div style="max-width:800px;margin:2rem auto;padding:0 1.5rem;">
    <div style="background:#fff;border:1px solid #ccfbf1;border-radius:10px;padding:1.25rem 1.5rem;text-align:center;">
      <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#0f766e;font-weight:600;margin-bottom:0.25rem;">88.8% of Isha Health patients with moderate-to-severe depression show measurable improvement</p>
      <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;">Based on PHQ-9 assessments across 546 patients. <a href="/outcomes" style="color:#0d9488;text-decoration:underline;">See our full clinical outcomes report →</a></p>
    </div>
  </div>

  <div style="background-color:#f0fdfa;padding:3rem 1.5rem;text-align:center;border-top:1px solid #ccfbf1;">
    <p style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#0f766e;margin-bottom:0.5rem;">Ready to explore ketamine therapy for treatment-resistant depression?</p>
    <p style="font-family:'Poppins',sans-serif;color:#4b5563;margin-bottom:1.5rem;font-size:0.95rem;">Appointments often available within 24 hours.</p>
    <a href="/appointment" style="display:inline-block;padding:0.85rem 2rem;background-color:#0d9488;color:#fff;border-radius:8px;font-family:'Poppins',sans-serif;font-weight:600;font-size:0.95rem;text-decoration:none;">Check Appointment Availability</a>
  </div>
</div>`,
      }}
    />
  );
}
