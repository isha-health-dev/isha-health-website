import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ketamine Therapy for Postpartum Depression",
  description: "Preliminary research suggests ketamine may help with postpartum depression when standard treatments have not provided relief.",
  alternates: { canonical: "https://isha.health/conditions/postpartum-depression" },
  openGraph: {
    title: "Ketamine Therapy for Postpartum Depression",
    description: "Preliminary research suggests ketamine may help with postpartum depression when standard treatments have not provided relief.",
    type: "website",
    images: ["/images/isha_logo.webp"],
    url: "https://isha.health/conditions/postpartum-depression",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ketamine Therapy for Postpartum Depression",
    description: "Preliminary research suggests ketamine may help with postpartum depression when standard treatments have not provided relief.",
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
        "name": "Can ketamine help with postpartum depression?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Preliminary research suggests that ketamine may help reduce symptoms of postpartum depression (PPD), particularly in cases that have not responded to standard antidepressants or therapy. However, the research specifically on ketamine for PPD is still limited, and treatment decisions must account for factors unique to the postpartum period, including breastfeeding status."
        }
      },
      {
        "@type": "Question",
        "name": "Can I take ketamine while breastfeeding?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This is an important consideration that must be discussed with your physician. Ketamine does pass into breast milk in small amounts. The decision to use ketamine while breastfeeding involves weighing the severity of depressive symptoms against potential risks. Your physician will discuss the available data and help you make an informed decision, which may include pump-and-dump protocols."
        }
      },
      {
        "@type": "Question",
        "name": "Is ketamine FDA-approved for postpartum depression?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Ketamine is FDA-approved only as an anesthetic. Its use for postpartum depression is off-label. Brexanolone (Zulresso) is the only medication specifically FDA-approved for PPD, though its availability is limited. Oral ketamine is prescribed off-label based on clinical judgment and the broader evidence for ketamine in depression."
        }
      },
      {
        "@type": "Question",
        "name": "How is postpartum depression different from regular depression?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Postpartum depression occurs during pregnancy or within the first year after childbirth and involves unique hormonal, psychological, and social factors. Symptoms can include severe sadness, anxiety, difficulty bonding with the baby, and in serious cases, thoughts of self-harm. While it shares features with major depression, treatment must account for the specific context of the postpartum period, including potential medication effects on breastfeeding."
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
      { "@type": "ListItem", "position": 3, "name": "Postpartum Depression", "item": "https://isha.health/conditions/postpartum-depression" }
    ]
  })}</script>
  <div class="hero-isha">
    <h1 class="heading static-heading">Ketamine Therapy for Postpartum Depression</h1>
  </div>
  <div class="section-wrapper" style="max-width:800px;margin:0 auto;padding:2rem 1.5rem;">
    <nav aria-label="Breadcrumb" style="font-size:0.8rem;color:#6b7280;margin-bottom:1.5rem;font-family:'Poppins',sans-serif;">
      <a href="/" style="color:#0d9488;text-decoration:none;">Home</a> /
      <span style="color:#6b7280;">Conditions</span> /
      <span style="color:#9ca3af;">Postpartum Depression</span>
    </nav>

    <p style="font-family:'Poppins',sans-serif;font-size:1.05rem;line-height:1.8;color:#374151;margin-bottom:2rem;text-wrap:pretty;">
      Postpartum depression (PPD) affects approximately 1 in 7 women following childbirth and can also occur during pregnancy. It goes far beyond the common "baby blues," causing persistent sadness, severe anxiety, difficulty bonding with the baby, and impaired functioning that can last months if untreated. While antidepressants and psychotherapy are first-line treatments, some women do not respond adequately or need faster-acting relief. Emerging research suggests that ketamine, with its rapid antidepressant properties, may offer a potential option for women with postpartum depression who have not found relief through conventional approaches.
    </p>

    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">How ketamine may help with postpartum depression</h2>
    <ul style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.8;padding-left:1.25rem;margin-bottom:2rem;">
      <li><strong>Rapid onset of antidepressant action</strong> — the speed of ketamine's effect may be particularly valuable for new mothers who need faster relief to care for their infants and themselves</li>
      <li><strong>Different mechanism from SSRIs</strong> — ketamine works through NMDA receptor modulation rather than serotonin pathways, which may benefit women who have not responded to traditional antidepressants</li>
      <li><strong>Potential for combined benefit</strong> — ketamine may address both the depressive and anxiety symptoms that commonly co-occur in postpartum depression</li>
      <li><strong>Telehealth accessibility</strong> — at-home treatment via telemedicine may be particularly practical for new parents who face challenges getting to in-person appointments</li>
    </ul>

    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">What the research shows</h2>
    <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;line-height:1.8;color:#374151;margin-bottom:1rem;text-wrap:pretty;">
      A randomized controlled trial by Yao et al. (2020), published in the <em>Journal of Affective Disorders</em>, studied the effects of a single subanesthetic ketamine infusion in women with postpartum depression. The study found significant improvement in depressive symptoms within 24 hours, with effects persisting through the 7-day follow-up period. A pilot study by Xu et al. (2020) similarly reported rapid antidepressant effects of ketamine in PPD, with improvements in both mood and anxiety symptoms.
    </p>
    <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;line-height:1.8;color:#374151;margin-bottom:2rem;text-wrap:pretty;">
      While these early studies are promising, research specifically on ketamine for postpartum depression remains limited. Much of the rationale for its use in PPD is extrapolated from the broader evidence base for ketamine in major depression and treatment-resistant depression. Ketamine is not FDA-approved for postpartum depression, and treatment must carefully consider factors unique to the postpartum period, including breastfeeding status and childcare demands. All treatment decisions should be made in close consultation with a physician.
    </p>

    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">How treatment works at Isha Health</h2>
    <div style="display:flex;flex-wrap:wrap;gap:1rem;margin-bottom:2rem;">
      <div style="flex:1 1 200px;padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;background:#fafafa;">
        <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#0d9488;margin-bottom:0.25rem;">1. Comprehensive consultation</p>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">A 60-minute telehealth evaluation with a physician. We assess your depression symptoms, postpartum status, breastfeeding considerations, treatment history, and support system to determine if ketamine may be appropriate.</p>
      </div>
      <div style="flex:1 1 200px;padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;background:#fafafa;">
        <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#0d9488;margin-bottom:0.25rem;">2. Individualized plan</p>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">If ketamine therapy is appropriate, your physician creates a treatment protocol that accounts for the unique needs of the postpartum period. Medication is delivered to your home, minimizing disruption to your routine.</p>
      </div>
      <div style="flex:1 1 200px;padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;background:#fafafa;">
        <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#0d9488;margin-bottom:0.25rem;">3. Supportive follow-up</p>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">Your physician provides ongoing monitoring with attention to both your mood recovery and the practical realities of new parenthood. We coordinate with your OB/GYN or other providers as needed.</p>
      </div>
    </div>

    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">Frequently asked questions</h2>
    <div style="margin-bottom:2rem;">
      <div style="border-bottom:1px solid #e5e7eb;padding:1rem 0;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#111827;margin-bottom:0.35rem;">Can ketamine help with postpartum depression?</h3>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">Preliminary research suggests that ketamine may help reduce symptoms of postpartum depression, particularly in cases that have not responded to standard antidepressants or therapy. However, the research specifically on ketamine for PPD is still limited, and treatment decisions must account for factors unique to the postpartum period, including breastfeeding status.</p>
      </div>
      <div style="border-bottom:1px solid #e5e7eb;padding:1rem 0;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#111827;margin-bottom:0.35rem;">Can I take ketamine while breastfeeding?</h3>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">This is an important consideration that must be discussed with your physician. Ketamine does pass into breast milk in small amounts. The decision to use ketamine while breastfeeding involves weighing the severity of depressive symptoms against potential risks. Your physician will discuss the available data and help you make an informed decision, which may include pump-and-dump protocols.</p>
      </div>
      <div style="border-bottom:1px solid #e5e7eb;padding:1rem 0;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#111827;margin-bottom:0.35rem;">Is ketamine FDA-approved for postpartum depression?</h3>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">No. Ketamine is FDA-approved only as an anesthetic. Its use for postpartum depression is off-label. Brexanolone (Zulresso) is the only medication specifically FDA-approved for PPD, though its availability is limited. Oral ketamine is prescribed off-label based on clinical judgment and the broader evidence for ketamine in depression.</p>
      </div>
      <div style="padding:1rem 0;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#111827;margin-bottom:0.35rem;">How is postpartum depression different from regular depression?</h3>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">Postpartum depression occurs during pregnancy or within the first year after childbirth and involves unique hormonal, psychological, and social factors. Symptoms can include severe sadness, anxiety, difficulty bonding with the baby, and in serious cases, thoughts of self-harm. While it shares features with major depression, treatment must account for the specific context of the postpartum period, including potential medication effects on breastfeeding.</p>
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
    <p style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#0f766e;margin-bottom:0.5rem;">Ready to explore ketamine therapy for postpartum depression?</p>
    <p style="font-family:'Poppins',sans-serif;color:#4b5563;margin-bottom:1.5rem;font-size:0.95rem;">Appointments often available within 24 hours.</p>
    <a href="/appointment" style="display:inline-block;padding:0.85rem 2rem;background-color:#0d9488;color:#fff;border-radius:8px;font-family:'Poppins',sans-serif;font-weight:600;font-size:0.95rem;text-decoration:none;">Check Appointment Availability</a>
  </div>
</div>`,
      }}
    />
  );
}
