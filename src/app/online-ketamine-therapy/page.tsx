import type { Metadata } from 'next';
import { buildOpenGraph } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Online Ketamine Therapy: At-Home Treatment from $398',
  description:
    'Online ketamine therapy from $398/session, prescribed by a board-certified physician. 88.8% of 500+ patients improve. Available in AZ, CA, CO, FL, GA…',
  alternates: { canonical: 'https://isha.health/online-ketamine-therapy' },
  openGraph: buildOpenGraph({
    title: 'Online Ketamine Therapy: At-Home Treatment from $398',
    description: 'Online ketamine therapy from $398/session, prescribed by a board-certified physician. 88.8% of 500+ patients improve. Available in 8 US states.',
    path: '/online-ketamine-therapy',
  }),
  twitter: {
    card: 'summary_large_image',
    title: 'Online Ketamine Therapy: At-Home Treatment from $398',
    description:
      'Physician-led online ketamine therapy. 88.8% improvement rate across 500+ patients. $398/session, no subscription.',
  },
};

export default function OnlineKetamineTherapyPage() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div style="padding:0 0 2rem;">

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
          text: 'The initial 60-minute consultation is $398. Follow-up appointments are $398 for 30 minutes. Monthly medication costs range from $50 to $150 depending on your prescribed dosage. HSA/FSA cards are accepted and superbills are provided for insurance reimbursement.',
        },
      },
      {
        '@type': 'Question',
        name: 'What states offer online ketamine therapy through Isha Health?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Isha Health currently provides online ketamine therapy in Arizona, California, Colorado, Florida, Georgia, Oregon, Texas, and Washington.',
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

  <div style="text-align:center;padding:3rem 1.5rem 1.5rem;">
    <h1 style="font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#111827;margin:0;">Online Ketamine Therapy from Home</h1>
  </div>

  <div style="max-width:900px;margin:0 auto;padding:2rem 1.5rem;">

    <nav aria-label="Breadcrumb" style="font-size:0.8rem;color:#6b7280;margin-bottom:1.5rem;font-family:'Poppins',sans-serif;">
      <a href="/" style="color:#0d9488;text-decoration:none;">Home</a> /
      <span style="color:#9ca3af;">Online Ketamine Therapy</span>
    </nav>

    <p style="font-family:'Poppins',sans-serif;font-size:1.1rem;line-height:1.8;color:#374151;text-align:center;max-width:720px;margin:0 auto 3rem;text-wrap:pretty;">
      Online ketamine therapy lets you receive a physician-prescribed mental health treatment from home — no clinic visits, no commute, no waiting room. Isha Health's telehealth program pairs a board-certified psychiatrist with structured at-home sessions and a required support person, with <a href="/outcomes" style="color:#0d9488;text-decoration:underline;">88.8% of patients showing measurable improvement</a>. Available in 8 US states.
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
          <p style="font-family:'Libre Baskerville',serif;font-size:1.75rem;font-weight:700;color:#111827;">$398</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;">60-minute evaluation</p>
        </div>
        <div style="padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;">
          <p style="font-family:'Poppins',sans-serif;font-size:0.75rem;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.25rem;">Follow-up visits</p>
          <p style="font-family:'Libre Baskerville',serif;font-size:1.75rem;font-weight:700;color:#111827;">$398</p>
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
        <a href="/locations/online-at-home-ketamine-therapy-in-oregon" style="display:inline-block;padding:0.5rem 1rem;background:#f0fdfa;border:1px solid #ccfbf1;border-radius:8px;color:#0f766e;text-decoration:none;font-family:'Poppins',sans-serif;font-size:0.9rem;font-weight:500;">Oregon</a>
        <a href="/locations/online-at-home-ketamine-therapy-in-texas" style="display:inline-block;padding:0.5rem 1rem;background:#f0fdfa;border:1px solid #ccfbf1;border-radius:8px;color:#0f766e;text-decoration:none;font-family:'Poppins',sans-serif;font-size:0.9rem;font-weight:500;">Texas</a>
        <a href="/locations/online-at-home-ketamine-therapy-in-washington" style="display:inline-block;padding:0.5rem 1rem;background:#f0fdfa;border:1px solid #ccfbf1;border-radius:8px;color:#0f766e;text-decoration:none;font-family:'Poppins',sans-serif;font-size:0.9rem;font-weight:500;">Washington</a>
      </div>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">
        Find a <a href="/ketamine-therapist-directory" style="color:#0d9488;text-decoration:underline;">ketamine therapist near you</a> to complement your treatment.
      </p>
    </div>

    <!-- Online vs In-Clinic comparison -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Online Ketamine Therapy vs In-Clinic</h2>
      <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1.25rem;">
        Most ketamine clinics in the US deliver treatment via IV infusion in a clinical setting. Online programs like Isha Health prescribe oral or sublingual ketamine that you take at home, supervised by a psychiatrist via telehealth. The differences that matter for most patients:
      </p>
      <div style="overflow-x:auto;">
        <table style="width:100%;border-collapse:collapse;font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
          <thead>
            <tr style="background:#f0fdfa;">
              <th style="text-align:left;padding:0.75rem 1rem;font-weight:600;color:#0f766e;border-bottom:1px solid #ccfbf1;"></th>
              <th style="text-align:left;padding:0.75rem 1rem;font-weight:600;color:#0f766e;border-bottom:1px solid #ccfbf1;">Online (at-home)</th>
              <th style="text-align:left;padding:0.75rem 1rem;font-weight:600;color:#0f766e;border-bottom:1px solid #ccfbf1;">In-clinic IV</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;font-weight:500;">Cost per session</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;">$398</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;">$400–$800</td>
            </tr>
            <tr>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;font-weight:500;">Setting</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;">Your home</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;">Clinic</td>
            </tr>
            <tr>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;font-weight:500;">Route</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;">Oral / sublingual</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;">Intravenous</td>
            </tr>
            <tr>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;font-weight:500;">Time per session</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;">~2 hours at home</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;">2–3 hours including travel</td>
            </tr>
            <tr>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;font-weight:500;">Insurance</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;">Out-of-network superbill; HSA/FSA</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;">Rarely covered</td>
            </tr>
            <tr>
              <td style="padding:0.75rem 1rem;font-weight:500;">Required support person</td>
              <td style="padding:0.75rem 1rem;">Yes</td>
              <td style="padding:0.75rem 1rem;">Provided by clinic</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;margin-top:1.25rem;">
        For a deeper dive on routes of administration, see our guide to <a href="/compare/oral-ketamine-vs-iv-infusion" style="color:#0d9488;text-decoration:underline;">oral ketamine vs IV infusion</a> and <a href="/compare/at-home-ketamine-vs-clinic" style="color:#0d9488;text-decoration:underline;">at-home vs clinic ketamine therapy</a>.
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
        <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">The initial 60-minute consultation is $398. Follow-up appointments are $398 for 30 minutes. Monthly medication costs range from $50 to $150 depending on your prescribed dosage. HSA/FSA cards are accepted and superbills are provided for insurance reimbursement.</p>
      </div>

      <div style="margin-bottom:1.5rem;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">What states offer online ketamine therapy through Isha Health?</h3>
        <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">Isha Health currently provides online ketamine therapy in Arizona, California, Colorado, Florida, Georgia, Oregon, Texas, and Washington.</p>
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

    
  <div style="margin:2.5rem 0;">
    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">Patient Story: Joseph's Experience</h2>
    <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;">
      <iframe src="https://www.youtube.com/embed/MutkPa2btzE" title="Joseph's Ketamine Therapy Testimonial - Isha Health" frameborder="0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>
    </div>
    <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#6b7280;margin-top:0.75rem;font-style:italic;">"I found myself enjoying myself in a way I had never been able to." — Joseph, Cambria, CA</p>
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
