import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ketamine Therapy for Bipolar Depression |",
  description: "Research suggests ketamine may provide rapid relief from depressive episodes in bipolar disorder.",
  alternates: { canonical: "https://isha.health/conditions/bipolar-depression" },
  openGraph: {
    title: "Ketamine Therapy for Bipolar Depression |",
    description: "Research suggests ketamine may provide rapid relief from depressive episodes in bipolar disorder.",
    type: "website",
    images: ["/images/isha_logo.webp"],
    url: "https://isha.health/conditions/bipolar-depression",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ketamine Therapy for Bipolar Depression |",
    description: "Research suggests ketamine may provide rapid relief from depressive episodes in bipolar disorder.",
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
        "name": "Can ketamine help with bipolar depression?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Preliminary research indicates that ketamine may help reduce depressive symptoms in bipolar disorder. Several studies have shown rapid improvement in bipolar depression scores, though ketamine is not FDA-approved for this use and careful clinical oversight is essential."
        }
      },
      {
        "@type": "Question",
        "name": "Does ketamine cause manic episodes in bipolar patients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This is an important clinical concern. Studies to date have not reported a significant increase in manic switching with ketamine, particularly when patients are maintained on a mood stabilizer. However, the risk must be carefully evaluated by a physician, and treatment should include close monitoring for any mood destabilization."
        }
      },
      {
        "@type": "Question",
        "name": "Is ketamine FDA-approved for bipolar depression?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Ketamine is FDA-approved as an anesthetic. Its use for bipolar depression is off-label and based on emerging clinical research. Esketamine (Spravato) is FDA-approved for treatment-resistant depression but not specifically for bipolar depression."
        }
      },
      {
        "@type": "Question",
        "name": "Can I take ketamine while on a mood stabilizer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In many studies, ketamine was administered to patients who were already on mood stabilizers such as lithium or valproate. Your physician will review your current medications and make a determination about safety and suitability during your consultation."
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
      { "@type": "ListItem", "position": 3, "name": "Bipolar Depression", "item": "https://isha.health/conditions/bipolar-depression" }
    ]
  })}</script>
  <div class="hero-isha">
    <h1 class="heading static-heading">Ketamine Therapy for Bipolar Depression</h1>
  </div>
  <div class="section-wrapper" style="max-width:800px;margin:0 auto;padding:2rem 1.5rem;">
    <nav aria-label="Breadcrumb" style="font-size:0.8rem;color:#6b7280;margin-bottom:1.5rem;font-family:'Poppins',sans-serif;">
      <a href="/" style="color:#0d9488;text-decoration:none;">Home</a> /
      <span style="color:#6b7280;">Conditions</span> /
      <span style="color:#9ca3af;">Bipolar Depression</span>
    </nav>

    <p style="font-family:'Poppins',sans-serif;font-size:1.05rem;line-height:1.8;color:#374151;margin-bottom:2rem;text-wrap:pretty;">
      Bipolar disorder affects approximately 4.4% of U.S. adults at some point in their lives, and the depressive episodes that characterize this condition are often more disabling and longer-lasting than manic episodes. Treatment options for bipolar depression are more limited than for unipolar depression, as many standard antidepressants carry a risk of triggering mania. Emerging evidence suggests that ketamine may offer a rapid-acting option for bipolar depression, particularly when conventional approaches have not provided adequate relief.
    </p>

    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">How ketamine may help with bipolar depression</h2>
    <ul style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.8;padding-left:1.25rem;margin-bottom:2rem;">
      <li><strong>Rapid antidepressant action</strong> — ketamine may reduce depressive symptoms within hours, compared to weeks or months with conventional mood stabilizers and antidepressants</li>
      <li><strong>Different mechanism of action</strong> — ketamine works through NMDA receptor modulation on the glutamate system, offering a distinct approach from serotonin- and dopamine-based treatments</li>
      <li><strong>Lower reported manic switching risk</strong> — studies to date suggest that ketamine, when used alongside a mood stabilizer, may not carry the same risk of triggering mania as traditional antidepressants</li>
    </ul>

    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">What the research shows</h2>
    <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;line-height:1.8;color:#374151;margin-bottom:1rem;text-wrap:pretty;">
      A landmark study by Diazgranados et al. (2010), published in <em>Archives of General Psychiatry</em>, demonstrated that a single intravenous ketamine infusion produced rapid and robust antidepressant effects in patients with treatment-resistant bipolar depression who were maintained on mood stabilizers. Improvement was observed within 40 minutes of infusion and persisted for up to three days. A subsequent study by Zarate et al. (2012) replicated these findings, confirming the rapid antidepressant effect in bipolar depression and noting that ketamine did not induce manic symptoms in study participants.
    </p>
    <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;line-height:1.8;color:#374151;margin-bottom:2rem;text-wrap:pretty;">
      While these results are encouraging, research on ketamine for bipolar depression is ongoing. Most studies have been small and short-term, and the long-term safety profile in this population requires further investigation. Ketamine is not FDA-approved for bipolar depression and is prescribed off-label. Any treatment must include careful psychiatric monitoring. For further reading, see our article on <a href="/post/ketamine-bipolar-depression" style="color:#0d9488;text-decoration:underline;">ketamine and bipolar depression</a>.
    </p>

    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">How treatment works at Isha Health</h2>
    <div style="display:flex;flex-wrap:wrap;gap:1rem;margin-bottom:2rem;">
      <div style="flex:1 1 200px;padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;background:#fafafa;">
        <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#0d9488;margin-bottom:0.25rem;">1. Consultation</p>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">A 60-minute telehealth evaluation with a physician. We carefully assess your bipolar history, current medications, mood stability, and whether ketamine may be appropriate for your depressive episodes.</p>
      </div>
      <div style="flex:1 1 200px;padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;background:#fafafa;">
        <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#0d9488;margin-bottom:0.25rem;">2. Personalized protocol</p>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">If ketamine therapy is appropriate, your physician creates a treatment plan that works alongside your existing mood stabilizer regimen. Medication is delivered to your home.</p>
      </div>
      <div style="flex:1 1 200px;padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;background:#fafafa;">
        <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#0d9488;margin-bottom:0.25rem;">3. Close monitoring</p>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">Given the unique considerations of bipolar disorder, your physician provides ongoing follow-up with particular attention to mood stability and any signs of mood switching.</p>
      </div>
    </div>

    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">Frequently asked questions</h2>
    <div style="margin-bottom:2rem;">
      <div style="border-bottom:1px solid #e5e7eb;padding:1rem 0;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#111827;margin-bottom:0.35rem;">Can ketamine help with bipolar depression?</h3>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">Preliminary research indicates that ketamine may help reduce depressive symptoms in bipolar disorder. Several studies have shown rapid improvement in bipolar depression scores, though ketamine is not FDA-approved for this use and careful clinical oversight is essential.</p>
      </div>
      <div style="border-bottom:1px solid #e5e7eb;padding:1rem 0;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#111827;margin-bottom:0.35rem;">Does ketamine cause manic episodes in bipolar patients?</h3>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">This is an important clinical concern. Studies to date have not reported a significant increase in manic switching with ketamine, particularly when patients are maintained on a mood stabilizer. However, the risk must be carefully evaluated by a physician, and treatment should include close monitoring for any mood destabilization.</p>
      </div>
      <div style="border-bottom:1px solid #e5e7eb;padding:1rem 0;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#111827;margin-bottom:0.35rem;">Is ketamine FDA-approved for bipolar depression?</h3>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">No. Ketamine is FDA-approved as an anesthetic. Its use for bipolar depression is off-label and based on emerging clinical research. Esketamine (Spravato) is FDA-approved for treatment-resistant depression but not specifically for bipolar depression.</p>
      </div>
      <div style="padding:1rem 0;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#111827;margin-bottom:0.35rem;">Can I take ketamine while on a mood stabilizer?</h3>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">In many studies, ketamine was administered to patients who were already on mood stabilizers such as lithium or valproate. Your physician will review your current medications and make a determination about safety and suitability during your consultation.</p>
      </div>
    </div>
  </div>

  <div style="background-color:#f0fdfa;padding:3rem 1.5rem;text-align:center;border-top:1px solid #ccfbf1;">
    <p style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#0f766e;margin-bottom:0.5rem;">Ready to explore ketamine therapy for bipolar depression?</p>
    <p style="font-family:'Poppins',sans-serif;color:#4b5563;margin-bottom:1.5rem;font-size:0.95rem;">Appointments often available within 24 hours.</p>
    <a href="/appointment" style="display:inline-block;padding:0.85rem 2rem;background-color:#0d9488;color:#fff;border-radius:8px;font-family:'Poppins',sans-serif;font-weight:600;font-size:0.95rem;text-decoration:none;">Check Appointment Availability</a>
  </div>
</div>`,
      }}
    />
  );
}
