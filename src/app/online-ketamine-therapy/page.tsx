import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Ketamine Therapy from Home | Isha Health',
  description:
    'Get online ketamine therapy from home. 88.8% of 500+ patients show improvement, 92.6% anxiety remission. Available in 9 states. $350 consultation.',
  alternates: { canonical: 'https://isha.health/online-ketamine-therapy' },
  openGraph: {
    title: 'Online Ketamine Therapy from Home | Isha Health',
    description:
      'Telehealth ketamine treatment with 88.8% improvement rate. Prescribed by board-certified psychiatrists. Available in AZ, CA, CO, FL, GA, NY, OR, TX, WA.',
    type: 'website',
    url: 'https://isha.health/online-ketamine-therapy',
    images: ['/images/isha_logo.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Ketamine Therapy from Home | Isha Health',
    description:
      'Telehealth ketamine treatment. 88.8% improvement rate across 500+ patients. $350 consultation.',
  },
};

export default function OnlineKetamineTherapyPage() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="section-base white-section static-page">

  <script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is online ketamine therapy safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Isha Health requires a thorough psychiatric evaluation before prescribing ketamine. Treatment is supervised by board-certified psychiatrists, and patients must have a support person present during each session. Ketamine has been used safely in medical settings for over 50 years.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does online ketamine therapy cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The initial 60-minute consultation is $350. Follow-up appointments are $350 for 30 minutes. Monthly medication costs range from $50 to $150 depending on your prescribed dosage. HSA/FSA cards are accepted and superbills are provided for insurance reimbursement.',
        },
      },
      {
        '@type': 'Question',
        name: 'What states offer online ketamine therapy through Isha Health?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Isha Health currently provides online ketamine therapy in Arizona, California, Colorado, Florida, Georgia, New York, Oregon, Texas, and Washington.',
        },
      },
      {
        '@type': 'Question',
        name: 'How quickly does ketamine therapy work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Many patients notice improvement within the first 1-2 sessions. Isha Health clinical data shows an average of 1.29 sessions to first measurable improvement, compared to the 4-6 weeks typically required for traditional antidepressants.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a referral for online ketamine therapy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No referral is needed. You can book a consultation directly through the Isha Health website. During the initial evaluation, the psychiatrist will determine whether ketamine therapy is appropriate for your condition.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use HSA/FSA for online ketamine therapy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Isha Health accepts HSA and FSA cards for payment. We also provide superbills that you can submit to your insurance company for potential out-of-network reimbursement.',
        },
      },
    ],
  })}</script>

  <div class="hero-isha">
    <h1 class="heading static-heading">Online Ketamine Therapy from Home</h1>
  </div>

  <div class="section-wrapper" style="max-width:900px;margin:0 auto;padding:2rem 1.5rem;">

    <nav aria-label="Breadcrumb" style="font-size:0.8rem;color:#6b7280;margin-bottom:1.5rem;font-family:'Poppins',sans-serif;">
      <a href="/" style="color:#0d9488;text-decoration:none;">Home</a> /
      <span style="color:#9ca3af;">Online Ketamine Therapy</span>
    </nav>

    <p style="font-family:'Poppins',sans-serif;font-size:1.1rem;line-height:1.8;color:#374151;text-align:center;max-width:700px;margin:0 auto 3rem;text-wrap:pretty;">
      Receive ketamine therapy online through a secure telehealth platform — prescribed and monitored by board-certified psychiatrists. No clinic visits required. Treatment from the comfort and privacy of your home.
    </p>

    <!-- How it works -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">How Online Ketamine Therapy Works</h2>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.5rem;margin-bottom:1.5rem;">
        <div style="padding:1.5rem;background:#f9fafb;border-radius:12px;border:1px solid #e5e7eb;text-align:center;">
          <p style="font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#0f766e;margin-bottom:0.5rem;">1</p>
          <p style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">Consultation</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#4b5563;line-height:1.5;">A 60-minute video evaluation with a board-certified psychiatrist to review your history, symptoms, and treatment goals.</p>
        </div>
        <div style="padding:1.5rem;background:#f9fafb;border-radius:12px;border:1px solid #e5e7eb;text-align:center;">
          <p style="font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#0f766e;margin-bottom:0.5rem;">2</p>
          <p style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">Prescription</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#4b5563;line-height:1.5;">If appropriate, your physician prescribes oral ketamine. Medication is shipped directly to your door from a licensed pharmacy.</p>
        </div>
        <div style="padding:1.5rem;background:#f9fafb;border-radius:12px;border:1px solid #e5e7eb;text-align:center;">
          <p style="font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#0f766e;margin-bottom:0.5rem;">3</p>
          <p style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">Treatment at Home</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#4b5563;line-height:1.5;">Complete sessions at home with a support person present. Your psychiatrist monitors your progress and adjusts dosing as needed.</p>
        </div>
      </div>
    </div>

    <!-- Who it's for -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Who Is Online Ketamine Therapy For?</h2>

      <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1rem;">
        Online ketamine therapy through Isha Health may be appropriate if you are experiencing:
      </p>
      <ul style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;padding-left:1.25rem;margin-bottom:1.5rem;">
        <li><strong>Depression</strong> — including <a href="/conditions/treatment-resistant-depression" style="color:#0d9488;text-decoration:underline;">treatment-resistant depression (TRD)</a></li>
        <li><strong>Anxiety</strong> — generalized anxiety, social anxiety, and related conditions</li>
        <li><strong>PTSD</strong> — post-traumatic stress disorder</li>
        <li><strong>Conditions that have not responded</strong> to traditional antidepressants (SSRIs, SNRIs)</li>
      </ul>
      <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;">
        Not sure if you qualify? <a href="/am-i-a-candidate" style="color:#0d9488;text-decoration:underline;">Check if you are a candidate</a> or read our <a href="/guide/ketamine-therapy" style="color:#0d9488;text-decoration:underline;">complete guide to ketamine therapy</a>.
      </p>
    </div>

    <!-- Outcomes -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Proven Outcomes</h2>

      <div style="display:flex;flex-wrap:wrap;gap:1.5rem;justify-content:center;margin-bottom:1.5rem;">
        <div style="flex:1 1 180px;max-width:220px;text-align:center;padding:2rem 1rem;background:#f0fdfa;border-radius:12px;border:1px solid #ccfbf1;">
          <p style="font-family:'Libre Baskerville',serif;font-size:2.5rem;font-weight:700;color:#0f766e;margin-bottom:0.25rem;">88.8%</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#4b5563;line-height:1.4;">of patients with moderate-to-severe depression showed measurable improvement</p>
        </div>
        <div style="flex:1 1 180px;max-width:220px;text-align:center;padding:2rem 1rem;background:#f0fdfa;border-radius:12px;border:1px solid #ccfbf1;">
          <p style="font-family:'Libre Baskerville',serif;font-size:2.5rem;font-weight:700;color:#0f766e;margin-bottom:0.25rem;">92.6%</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#4b5563;line-height:1.4;">achieved minimal anxiety during treatment</p>
        </div>
        <div style="flex:1 1 180px;max-width:220px;text-align:center;padding:2rem 1rem;background:#f0fdfa;border-radius:12px;border:1px solid #ccfbf1;">
          <p style="font-family:'Libre Baskerville',serif;font-size:2.5rem;font-weight:700;color:#0f766e;margin-bottom:0.25rem;">500+</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#4b5563;line-height:1.4;">patients treated and tracked</p>
        </div>
      </div>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;text-align:center;">
        View our full <a href="/outcomes" style="color:#0d9488;text-decoration:underline;">clinical outcomes data</a>.
      </p>
    </div>

    <!-- Cost -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Cost of Online Ketamine Therapy</h2>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin-bottom:1.5rem;">
        <div style="padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;">
          <p style="font-family:'Poppins',sans-serif;font-size:0.75rem;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.25rem;">Initial consultation</p>
          <p style="font-family:'Libre Baskerville',serif;font-size:1.75rem;font-weight:700;color:#111827;">$350</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;">60-minute evaluation</p>
        </div>
        <div style="padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;">
          <p style="font-family:'Poppins',sans-serif;font-size:0.75rem;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.25rem;">Follow-up visits</p>
          <p style="font-family:'Libre Baskerville',serif;font-size:1.75rem;font-weight:700;color:#111827;">$350</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;">30-minute appointments</p>
        </div>
        <div style="padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;">
          <p style="font-family:'Poppins',sans-serif;font-size:0.75rem;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.25rem;">Monthly medication</p>
          <p style="font-family:'Libre Baskerville',serif;font-size:1.75rem;font-weight:700;color:#111827;">$50–$150</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;">Depending on dosage</p>
        </div>
      </div>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">
        HSA/FSA accepted. Superbills provided for insurance reimbursement. See full <a href="/pricing" style="color:#0d9488;text-decoration:underline;">pricing details</a>.
      </p>
    </div>

    <!-- Available states -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Available States</h2>

      <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1rem;">
        Isha Health provides online ketamine therapy to patients in the following states:
      </p>
      <div style="display:flex;flex-wrap:wrap;gap:0.75rem;margin-bottom:1.5rem;">
        <a href="/locations/online-at-home-ketamine-therapy-in-arizona" style="display:inline-block;padding:0.5rem 1rem;background:#f0fdfa;border:1px solid #ccfbf1;border-radius:8px;color:#0f766e;text-decoration:none;font-family:'Poppins',sans-serif;font-size:0.9rem;font-weight:500;">Arizona</a>
        <a href="/locations/online-at-home-ketamine-therapy-in-california" style="display:inline-block;padding:0.5rem 1rem;background:#f0fdfa;border:1px solid #ccfbf1;border-radius:8px;color:#0f766e;text-decoration:none;font-family:'Poppins',sans-serif;font-size:0.9rem;font-weight:500;">California</a>
        <a href="/locations/online-at-home-ketamine-therapy-in-colorado" style="display:inline-block;padding:0.5rem 1rem;background:#f0fdfa;border:1px solid #ccfbf1;border-radius:8px;color:#0f766e;text-decoration:none;font-family:'Poppins',sans-serif;font-size:0.9rem;font-weight:500;">Colorado</a>
        <a href="/locations/online-at-home-ketamine-therapy-in-florida" style="display:inline-block;padding:0.5rem 1rem;background:#f0fdfa;border:1px solid #ccfbf1;border-radius:8px;color:#0f766e;text-decoration:none;font-family:'Poppins',sans-serif;font-size:0.9rem;font-weight:500;">Florida</a>
        <a href="/locations/online-at-home-ketamine-therapy-in-georgia" style="display:inline-block;padding:0.5rem 1rem;background:#f0fdfa;border:1px solid #ccfbf1;border-radius:8px;color:#0f766e;text-decoration:none;font-family:'Poppins',sans-serif;font-size:0.9rem;font-weight:500;">Georgia</a>
        <a href="/locations/online-at-home-ketamine-therapy-in-new-york" style="display:inline-block;padding:0.5rem 1rem;background:#f0fdfa;border:1px solid #ccfbf1;border-radius:8px;color:#0f766e;text-decoration:none;font-family:'Poppins',sans-serif;font-size:0.9rem;font-weight:500;">New York</a>
        <a href="/locations/online-at-home-ketamine-therapy-in-oregon" style="display:inline-block;padding:0.5rem 1rem;background:#f0fdfa;border:1px solid #ccfbf1;border-radius:8px;color:#0f766e;text-decoration:none;font-family:'Poppins',sans-serif;font-size:0.9rem;font-weight:500;">Oregon</a>
        <a href="/locations/online-at-home-ketamine-therapy-in-texas" style="display:inline-block;padding:0.5rem 1rem;background:#f0fdfa;border:1px solid #ccfbf1;border-radius:8px;color:#0f766e;text-decoration:none;font-family:'Poppins',sans-serif;font-size:0.9rem;font-weight:500;">Texas</a>
        <a href="/locations/online-at-home-ketamine-therapy-in-washington" style="display:inline-block;padding:0.5rem 1rem;background:#f0fdfa;border:1px solid #ccfbf1;border-radius:8px;color:#0f766e;text-decoration:none;font-family:'Poppins',sans-serif;font-size:0.9rem;font-weight:500;">Washington</a>
      </div>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">
        Find a <a href="/ketamine-therapist-directory" style="color:#0d9488;text-decoration:underline;">ketamine therapist near you</a> to complement your treatment.
      </p>
    </div>

    <!-- FAQ -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Frequently Asked Questions</h2>

      <div style="margin-bottom:1.5rem;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">Is online ketamine therapy safe?</h3>
        <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">Yes. Isha Health requires a thorough psychiatric evaluation before prescribing ketamine. Treatment is supervised by board-certified psychiatrists, and patients must have a support person present during each session. Ketamine has been used safely in medical settings for over 50 years.</p>
      </div>

      <div style="margin-bottom:1.5rem;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">How much does online ketamine therapy cost?</h3>
        <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">The initial 60-minute consultation is $350. Follow-up appointments are $350 for 30 minutes. Monthly medication costs range from $50 to $150 depending on your prescribed dosage. HSA/FSA cards are accepted and superbills are provided for insurance reimbursement.</p>
      </div>

      <div style="margin-bottom:1.5rem;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">What states offer online ketamine therapy through Isha Health?</h3>
        <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">Isha Health currently provides online ketamine therapy in Arizona, California, Colorado, Florida, Georgia, New York, Oregon, Texas, and Washington.</p>
      </div>

      <div style="margin-bottom:1.5rem;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">How quickly does ketamine therapy work?</h3>
        <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">Many patients notice improvement within the first 1-2 sessions. Our clinical data shows an average of 1.29 sessions to first measurable improvement, compared to the 4-6 weeks typically required for traditional antidepressants.</p>
      </div>

      <div style="margin-bottom:1.5rem;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">Do I need a referral?</h3>
        <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">No referral is needed. You can book a consultation directly through the Isha Health website. During the initial evaluation, the psychiatrist will determine whether ketamine therapy is appropriate for your condition.</p>
      </div>

      <div style="margin-bottom:1.5rem;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">Can I use HSA/FSA?</h3>
        <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">Yes. Isha Health accepts HSA and FSA cards for payment. We also provide superbills that you can submit to your insurance company for potential out-of-network reimbursement.</p>
      </div>
    </div>

    <!-- CTA -->
    <div style="background-color:#f0fdfa;padding:2.5rem;border-radius:12px;text-align:center;border:1px solid #ccfbf1;">
      <p style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#0f766e;margin-bottom:0.5rem;">Start Online Ketamine Therapy Today</p>
      <p style="font-family:'Poppins',sans-serif;color:#4b5563;margin-bottom:1.5rem;font-size:0.95rem;">Book a 60-minute consultation with a board-certified psychiatrist.</p>
      <a href="/appointment" style="display:inline-block;background-color:#0d9488;color:#fff;padding:0.85rem 2.5rem;border-radius:8px;text-decoration:none;font-weight:600;font-size:1rem;font-family:'Poppins',sans-serif;">Check Appointment Availability</a>
    </div>

    <p style="font-family:'Poppins',sans-serif;font-size:0.75rem;color:#9ca3af;text-align:center;margin-top:2rem;">
      Ketamine is prescribed off-label for depression and anxiety — it is not FDA-approved for these indications. Individual results may vary. <a href="/safety-information-for-ketamine-treatment" style="color:#9ca3af;text-decoration:underline;">Safety information</a>.
    </p>

  </div>
</div>`,
      }}
    />
  );
}
