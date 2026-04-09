import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ketamine Therapy for Suicidal Ideation",
  description: "Research suggests ketamine may rapidly reduce suicidal thoughts when other treatments have not been effective.",
  alternates: { canonical: "https://isha.health/conditions/suicidal-ideation" },
  openGraph: {
    title: "Ketamine Therapy for Suicidal Ideation",
    description: "Research suggests ketamine may rapidly reduce suicidal thoughts when other treatments have not been effective.",
    type: "website",
    images: ["/images/isha_logo.webp"],
    url: "https://isha.health/conditions/suicidal-ideation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ketamine Therapy for Suicidal Ideation",
    description: "Research suggests ketamine may rapidly reduce suicidal thoughts when other treatments have not been effective.",
  },
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div style="padding:0 0 2rem;">
  <script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can ketamine help reduce suicidal thoughts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Multiple clinical studies have found that ketamine may rapidly reduce suicidal ideation, often within hours of administration. This rapid-acting property is particularly significant because most conventional antidepressants take weeks to affect suicidal thinking. However, ketamine is not a standalone crisis intervention — if you are in immediate danger, please call 988 (Suicide and Crisis Lifeline) or go to your nearest emergency room."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly does ketamine work for suicidal ideation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Research suggests that ketamine may reduce suicidal thoughts within hours of administration, with some studies showing significant improvement within 4-24 hours. This is notably faster than conventional antidepressants, which may take 4-6 weeks. However, the duration of this anti-suicidal effect varies, and repeated treatments are typically needed."
        }
      },
      {
        "@type": "Question",
        "name": "Is ketamine FDA-approved for suicidal ideation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Esketamine (Spravato) nasal spray received an FDA indication in 2020 for treatment of depressive symptoms in adults with major depressive disorder with acute suicidal ideation or behavior. Racemic ketamine itself is FDA-approved only as an anesthetic. At Isha Health, oral ketamine is prescribed off-label based on clinical evidence and physician evaluation."
        }
      },
      {
        "@type": "Question",
        "name": "Is ketamine therapy safe for someone with suicidal thoughts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When prescribed and monitored by a qualified physician, ketamine therapy can be administered safely to individuals experiencing suicidal ideation. At Isha Health, patients are carefully screened, and safety protocols are in place. However, ketamine therapy is not appropriate for individuals in acute suicidal crisis — immediate emergency care should be sought in those situations."
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
      { "@type": "ListItem", "position": 3, "name": "Suicidal Ideation", "item": "https://isha.health/conditions/suicidal-ideation" }
    ]
  })}</script>
  <div style="text-align:center;padding:3rem 1.5rem 1.5rem;">
    <h1 style="font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#111827;margin:0;">Ketamine Therapy for Suicidal Ideation</h1>
  </div>
  <div style="max-width:800px;margin:0 auto;padding:1.5rem;" style="max-width:800px;margin:0 auto;padding:2rem 1.5rem;">
    <nav aria-label="Breadcrumb" style="font-size:0.8rem;color:#6b7280;margin-bottom:1.5rem;font-family:'Poppins',sans-serif;">
      <a href="/" style="color:#0d9488;text-decoration:none;">Home</a> /
      <span style="color:#6b7280;">Conditions</span> /
      <span style="color:#9ca3af;">Suicidal Ideation</span>
    </nav>

    <div style="background-color:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:1rem 1.25rem;margin-bottom:2rem;">
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#991b1b;line-height:1.6;margin:0;">
        <strong>If you or someone you know is in immediate danger, please call 988 (Suicide and Crisis Lifeline), text HOME to 741741 (Crisis Text Line), or go to your nearest emergency room.</strong> Ketamine therapy is not a crisis intervention. The information on this page is for individuals seeking longer-term treatment options in consultation with a physician.
      </p>
    </div>

    <p style="font-family:'Poppins',sans-serif;font-size:1.05rem;line-height:1.8;color:#374151;margin-bottom:2rem;text-wrap:pretty;">
      Suicidal ideation — persistent thoughts about ending one's life — is a serious symptom that can accompany depression, PTSD, bipolar disorder, and other mental health conditions. Traditional antidepressants can take weeks to reduce suicidal thinking, leaving a dangerous gap in treatment. One of the most significant findings in recent psychiatric research is that ketamine may rapidly reduce suicidal ideation, often within hours, offering a potential lifeline for individuals in severe distress who have not responded to conventional treatments.
    </p>

    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">How ketamine may help with suicidal ideation</h2>
    <ul style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.8;padding-left:1.25rem;margin-bottom:2rem;">
      <li><strong>Rapid reduction in suicidal thoughts</strong> — multiple studies have demonstrated that ketamine may decrease suicidal ideation within hours, far faster than conventional antidepressants</li>
      <li><strong>Effect independent of depression improvement</strong> — research suggests that ketamine's anti-suicidal effect may occur independently of its antidepressant action, indicating a distinct mechanism</li>
      <li><strong>Neurobiological reset</strong> — ketamine's action on the glutamate system and promotion of neuroplasticity may help disrupt the rigid thought patterns associated with suicidal thinking</li>
    </ul>

    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">What the research shows</h2>
    <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;line-height:1.8;color:#374151;margin-bottom:1rem;text-wrap:pretty;">
      A meta-analysis by Witt et al. (2020), published in <em>Pharmacotherapy</em>, reviewed 25 studies encompassing over 1,000 participants and found that ketamine significantly reduced suicidal ideation within 24 hours, with effects lasting up to one week in some patients. The rapid-acting nature of this effect was observed across different ketamine formulations and routes of administration. A large retrospective analysis of over 9,000 patients receiving IV ketamine (Zheng et al., 2020) found that 73% of patients showed a reduction in suicidal ideation.
    </p>
    <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;line-height:1.8;color:#374151;margin-bottom:2rem;text-wrap:pretty;">
      These findings contributed to the FDA's 2020 approval of esketamine (Spravato) nasal spray for depressive symptoms in adults with MDD with acute suicidal ideation or behavior — the first medication with a specific indication related to suicidality. While racemic ketamine is used off-label for this purpose, the strength of the evidence base is notable. It is important to emphasize that ketamine therapy is part of a comprehensive treatment plan and is not a substitute for emergency psychiatric care. For more information, see our resource on <a href="/safety-information-for-ketamine-treatment" style="color:#0d9488;text-decoration:underline;">safety information for ketamine treatment</a>.
    </p>

    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">How treatment works at Isha Health</h2>
    <div style="display:flex;flex-wrap:wrap;gap:1rem;margin-bottom:2rem;">
      <div style="flex:1 1 200px;padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;background:#fafafa;">
        <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#0d9488;margin-bottom:0.25rem;">1. Thorough evaluation</p>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">A 60-minute telehealth consultation with a physician. We conduct a detailed assessment of your symptoms, safety, treatment history, and support system to determine if ketamine therapy is appropriate and safe for you.</p>
      </div>
      <div style="flex:1 1 200px;padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;background:#fafafa;">
        <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#0d9488;margin-bottom:0.25rem;">2. Safety-focused protocol</p>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">If ketamine is appropriate, your physician creates a treatment plan with enhanced safety measures, including coordination with your existing mental health providers when applicable. Medication is delivered to your home.</p>
      </div>
      <div style="flex:1 1 200px;padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;background:#fafafa;">
        <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#0d9488;margin-bottom:0.25rem;">3. Close clinical follow-up</p>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">Given the severity of suicidal ideation, your physician provides close monitoring with more frequent check-ins to track your response and ensure your safety throughout treatment.</p>
      </div>
    </div>

    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">Frequently asked questions</h2>
    <div style="margin-bottom:2rem;">
      <div style="border-bottom:1px solid #e5e7eb;padding:1rem 0;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#111827;margin-bottom:0.35rem;">Can ketamine help reduce suicidal thoughts?</h3>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">Multiple clinical studies have found that ketamine may rapidly reduce suicidal ideation, often within hours of administration. This rapid-acting property is particularly significant because most conventional antidepressants take weeks to affect suicidal thinking. However, ketamine is not a standalone crisis intervention — if you are in immediate danger, please call 988 or go to your nearest emergency room.</p>
      </div>
      <div style="border-bottom:1px solid #e5e7eb;padding:1rem 0;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#111827;margin-bottom:0.35rem;">How quickly does ketamine work for suicidal ideation?</h3>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">Research suggests that ketamine may reduce suicidal thoughts within hours of administration, with some studies showing significant improvement within 4-24 hours. This is notably faster than conventional antidepressants, which may take 4-6 weeks. However, the duration of this anti-suicidal effect varies, and repeated treatments are typically needed.</p>
      </div>
      <div style="border-bottom:1px solid #e5e7eb;padding:1rem 0;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#111827;margin-bottom:0.35rem;">Is ketamine FDA-approved for suicidal ideation?</h3>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">Esketamine (Spravato) nasal spray received an FDA indication in 2020 for treatment of depressive symptoms in adults with major depressive disorder with acute suicidal ideation or behavior. Racemic ketamine itself is FDA-approved only as an anesthetic. At Isha Health, oral ketamine is prescribed off-label based on clinical evidence and physician evaluation.</p>
      </div>
      <div style="padding:1rem 0;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#111827;margin-bottom:0.35rem;">Is ketamine therapy safe for someone with suicidal thoughts?</h3>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">When prescribed and monitored by a qualified physician, ketamine therapy can be administered safely to individuals experiencing suicidal ideation. At Isha Health, patients are carefully screened, and safety protocols are in place. However, ketamine therapy is not appropriate for individuals in acute suicidal crisis — immediate emergency care should be sought in those situations.</p>
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
    <p style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#0f766e;margin-bottom:0.5rem;">Ready to explore ketamine therapy?</p>
    <p style="font-family:'Poppins',sans-serif;color:#4b5563;margin-bottom:1.5rem;font-size:0.95rem;">Appointments often available within 24 hours.</p>
    <a href="/appointment" style="display:inline-block;padding:0.85rem 2rem;background-color:#0d9488;color:#fff;border-radius:8px;font-family:'Poppins',sans-serif;font-weight:600;font-size:0.95rem;text-decoration:none;">Check Appointment Availability</a>
  </div>
</div>`,
      }}
    />
  );
}
