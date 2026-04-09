import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ketamine Therapy Cost: Pricing Breakdown',
  description:
    'Ketamine therapy costs $350 per consultation at Isha Health. 88.8% improvement rate across 500+ patients. Compare at-home vs IV infusion vs Spravato pricing.',
  alternates: { canonical: 'https://isha.health/ketamine-therapy-cost' },
  openGraph: {
    title: 'How Much Does Ketamine Therapy Cost? | Isha Health',
    description:
      'Compare ketamine therapy costs: at-home ($350) vs IV infusion ($400-800) vs Spravato ($500-900). HSA/FSA accepted.',
    type: 'website',
    url: 'https://isha.health/ketamine-therapy-cost',
    images: ['/images/isha_logo.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ketamine Therapy Cost | Isha Health',
    description:
      'Ketamine therapy from $350 per consultation. Compare pricing for at-home, IV infusion, and Spravato.',
  },
};

export default function KetamineTherapyCostPage() {
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
        name: 'How much does ketamine therapy cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'At Isha Health, the initial 60-minute consultation is $350 and follow-up visits are $350 for 30 minutes. Monthly medication costs $50-$150. IV infusion clinics typically charge $400-$800 per session, while Spravato (esketamine) costs $500-$900 per session plus insurance requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does insurance cover ketamine therapy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most insurance plans do not cover off-label ketamine therapy directly. However, Isha Health provides superbills that you can submit to your insurance for potential out-of-network reimbursement. HSA and FSA cards are accepted for all services.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is at-home ketamine therapy cheaper than IV infusions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. At-home oral ketamine therapy through Isha Health costs $350 per consultation plus $50-$150/month for medication. A typical IV infusion series costs $2,400-$4,800 for six sessions. At-home treatment is significantly more affordable while clinical data shows comparable outcomes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use HSA or FSA to pay for ketamine therapy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Isha Health accepts HSA (Health Savings Account) and FSA (Flexible Spending Account) cards for consultations and medication costs.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in the $350 consultation fee?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The $350 initial consultation includes a full 60-minute psychiatric evaluation, personalized treatment planning, prescription (if appropriate), ongoing clinical monitoring via PHQ-9 and GAD-7 assessments, secure messaging access to your psychiatrist, and superbill generation for insurance reimbursement.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many sessions of ketamine therapy will I need?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most patients begin with an initial treatment phase of 4-6 sessions over several weeks, followed by maintenance sessions as needed. The average treatment duration at Isha Health is 128 days. Your psychiatrist will create a personalized plan based on your response to treatment.',
        },
      },
    ],
  })}</script>

  <div style="text-align:center;padding:3rem 1.5rem 1.5rem;">
    <h1 style="font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#111827;margin:0;">How Much Does Ketamine Therapy Cost?</h1>
  </div>

  <div style="max-width:800px;margin:0 auto;padding:1.5rem;" style="max-width:900px;margin:0 auto;padding:2rem 1.5rem;">

    <nav aria-label="Breadcrumb" style="font-size:0.8rem;color:#6b7280;margin-bottom:1.5rem;font-family:'Poppins',sans-serif;">
      <a href="/" style="color:#0d9488;text-decoration:none;">Home</a> /
      <span style="color:#9ca3af;">Ketamine Therapy Cost</span>
    </nav>

    <p style="font-family:'Poppins',sans-serif;font-size:1.1rem;line-height:1.8;color:#374151;text-align:center;max-width:700px;margin:0 auto 3rem;text-wrap:pretty;">
      Understanding the cost of ketamine therapy is an important step. Here is a transparent breakdown of Isha Health pricing and how it compares to other treatment options.
    </p>

    <!-- Isha Health Pricing -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Isha Health Pricing</h2>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin-bottom:1.5rem;">
        <div style="padding:1.5rem;background:#f0fdfa;border-radius:12px;border:1px solid #ccfbf1;text-align:center;">
          <p style="font-family:'Poppins',sans-serif;font-size:0.75rem;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.5rem;">Initial consultation</p>
          <p style="font-family:'Libre Baskerville',serif;font-size:2.25rem;font-weight:700;color:#0f766e;margin-bottom:0.25rem;">$350</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#4b5563;">60-minute psychiatric evaluation</p>
        </div>
        <div style="padding:1.5rem;background:#f0fdfa;border-radius:12px;border:1px solid #ccfbf1;text-align:center;">
          <p style="font-family:'Poppins',sans-serif;font-size:0.75rem;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.5rem;">Follow-up appointment</p>
          <p style="font-family:'Libre Baskerville',serif;font-size:2.25rem;font-weight:700;color:#0f766e;margin-bottom:0.25rem;">$350</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#4b5563;">30-minute follow-up visit</p>
        </div>
        <div style="padding:1.5rem;background:#f0fdfa;border-radius:12px;border:1px solid #ccfbf1;text-align:center;">
          <p style="font-family:'Poppins',sans-serif;font-size:0.75rem;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.5rem;">Monthly medication</p>
          <p style="font-family:'Libre Baskerville',serif;font-size:2.25rem;font-weight:700;color:#0f766e;margin-bottom:0.25rem;">$50–$150</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#4b5563;">Depending on dosage prescribed</p>
        </div>
      </div>
    </div>

    <!-- Cost comparison -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Ketamine Therapy Cost Comparison</h2>

      <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1.5rem;">
        There are several ways to receive ketamine therapy. Here is how costs compare across the most common treatment formats:
      </p>

      <div style="overflow-x:auto;margin-bottom:1.5rem;">
        <table style="width:100%;border-collapse:collapse;font-family:'Poppins',sans-serif;font-size:0.85rem;">
          <thead>
            <tr style="background:#f0fdfa;">
              <th style="padding:1rem;text-align:left;border-bottom:2px solid #0d9488;font-weight:600;color:#111827;"></th>
              <th style="padding:1rem;text-align:center;border-bottom:2px solid #0d9488;font-weight:600;color:#0f766e;">Isha Health (At-Home)</th>
              <th style="padding:1rem;text-align:center;border-bottom:2px solid #0d9488;font-weight:600;color:#111827;">IV Infusion Clinic</th>
              <th style="padding:1rem;text-align:center;border-bottom:2px solid #0d9488;font-weight:600;color:#111827;">Spravato (Esketamine)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;font-weight:500;color:#374151;">Cost per session</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;text-align:center;color:#0f766e;font-weight:600;">$350</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;text-align:center;color:#374151;">$400–$800</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;text-align:center;color:#374151;">$500–$900</td>
            </tr>
            <tr style="background:#f9fafb;">
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;font-weight:500;color:#374151;">6-session series</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;text-align:center;color:#0f766e;font-weight:600;">~$2,100 + med</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;text-align:center;color:#374151;">$2,400–$4,800</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;text-align:center;color:#374151;">$3,000–$5,400</td>
            </tr>
            <tr>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;font-weight:500;color:#374151;">Location</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;text-align:center;color:#0f766e;font-weight:600;">Your home</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;text-align:center;color:#374151;">In-clinic</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;text-align:center;color:#374151;">In-clinic (REMS)</td>
            </tr>
            <tr style="background:#f9fafb;">
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;font-weight:500;color:#374151;">Insurance</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;text-align:center;color:#374151;">HSA/FSA + superbill</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;text-align:center;color:#374151;">Rarely covered</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;text-align:center;color:#374151;">Some plans cover</td>
            </tr>
            <tr>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;font-weight:500;color:#374151;">Physician access</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;text-align:center;color:#0f766e;font-weight:600;">Board-certified psychiatrist</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;text-align:center;color:#374151;">Varies (often anesthesiologist)</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;text-align:center;color:#374151;">Varies</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">
        For a detailed comparison, see <a href="/compare/oral-ketamine-vs-iv-infusion" style="color:#0d9488;text-decoration:underline;">oral ketamine vs IV infusion</a> and <a href="/compare/spravato-vs-generic-ketamine" style="color:#0d9488;text-decoration:underline;">Spravato vs generic ketamine</a>.
      </p>
    </div>

    <!-- What's included -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">What Is Included in the $350 Consultation</h2>

      <ul style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:2;padding-left:1.25rem;">
        <li>Full 60-minute psychiatric evaluation with a board-certified psychiatrist</li>
        <li>Personalized treatment plan tailored to your symptoms and history</li>
        <li>Prescription for oral ketamine (if clinically appropriate)</li>
        <li>Ongoing clinical monitoring using validated tools (PHQ-9, GAD-7)</li>
        <li>Secure messaging access to your treating psychiatrist</li>
        <li>Superbill generation for insurance reimbursement</li>
        <li>Session preparation and integration guidance</li>
      </ul>
    </div>

    <!-- HSA/FSA -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">HSA/FSA and Insurance Reimbursement</h2>

      <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1rem;">
        While ketamine therapy is not typically covered by insurance directly, there are ways to reduce your out-of-pocket cost:
      </p>
      <ul style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:2;padding-left:1.25rem;margin-bottom:1rem;">
        <li><strong>HSA/FSA cards</strong> are accepted for all Isha Health services</li>
        <li><strong>Superbills</strong> are provided after each appointment for out-of-network insurance reimbursement</li>
        <li>Many patients receive <strong>partial reimbursement</strong> through their insurance plans</li>
      </ul>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">
        Learn more about reimbursement on our <a href="/current-patients/superbill" style="color:#0d9488;text-decoration:underline;">superbill page</a>.
      </p>
    </div>

    <!-- Outcomes -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Is Ketamine Therapy Worth the Cost?</h2>

      <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1.5rem;">
        Based on clinical data from over 500 patients treated through the Isha Health protocol:
      </p>

      <div style="display:flex;flex-wrap:wrap;gap:1.5rem;justify-content:center;margin-bottom:1.5rem;">
        <div style="flex:1 1 180px;max-width:220px;text-align:center;padding:2rem 1rem;background:#f0fdfa;border-radius:12px;border:1px solid #ccfbf1;">
          <p style="font-family:'Libre Baskerville',serif;font-size:2.5rem;font-weight:700;color:#0f766e;margin-bottom:0.25rem;">88.8%</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#4b5563;line-height:1.4;">improvement in moderate-to-severe depression</p>
        </div>
        <div style="flex:1 1 180px;max-width:220px;text-align:center;padding:2rem 1rem;background:#f0fdfa;border-radius:12px;border:1px solid #ccfbf1;">
          <p style="font-family:'Libre Baskerville',serif;font-size:2.5rem;font-weight:700;color:#0f766e;margin-bottom:0.25rem;">92.6%</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#4b5563;line-height:1.4;">achieved minimal anxiety</p>
        </div>
        <div style="flex:1 1 180px;max-width:220px;text-align:center;padding:2rem 1rem;background:#f0fdfa;border-radius:12px;border:1px solid #ccfbf1;">
          <p style="font-family:'Libre Baskerville',serif;font-size:2.5rem;font-weight:700;color:#0f766e;margin-bottom:0.25rem;">99.1%</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#4b5563;line-height:1.4;">patient retention rate</p>
        </div>
      </div>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;text-align:center;">
        View our complete <a href="/outcomes" style="color:#0d9488;text-decoration:underline;">clinical outcomes data</a>.
      </p>
    </div>

    <!-- FAQ -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Frequently Asked Questions</h2>

      <div style="margin-bottom:1.5rem;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">How much does ketamine therapy cost?</h3>
        <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">At Isha Health, the initial 60-minute consultation is $350 and follow-up visits are $350 for 30 minutes. Monthly medication costs $50-$150. IV infusion clinics typically charge $400-$800 per session, while Spravato costs $500-$900 per session plus insurance requirements.</p>
      </div>

      <div style="margin-bottom:1.5rem;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">Does insurance cover ketamine therapy?</h3>
        <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">Most insurance plans do not cover off-label ketamine therapy directly. However, Isha Health provides superbills that you can submit for potential out-of-network reimbursement. HSA and FSA cards are accepted for all services.</p>
      </div>

      <div style="margin-bottom:1.5rem;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">Is at-home ketamine therapy cheaper than IV infusions?</h3>
        <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">Yes. At-home oral ketamine therapy through Isha Health costs $350 per consultation plus $50-$150/month for medication. A typical IV infusion series costs $2,400-$4,800 for six sessions. At-home treatment is significantly more affordable while clinical data shows comparable outcomes.</p>
      </div>

      <div style="margin-bottom:1.5rem;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">Can I use HSA or FSA to pay for ketamine therapy?</h3>
        <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">Yes. Isha Health accepts HSA and FSA cards for consultations and medication costs.</p>
      </div>

      <div style="margin-bottom:1.5rem;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">What is included in the $350 consultation fee?</h3>
        <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">The $350 initial consultation includes a full 60-minute psychiatric evaluation, personalized treatment planning, prescription (if appropriate), ongoing clinical monitoring via PHQ-9 and GAD-7 assessments, secure messaging access to your psychiatrist, and superbill generation for insurance reimbursement.</p>
      </div>

      <div style="margin-bottom:1.5rem;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">How many sessions of ketamine therapy will I need?</h3>
        <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">Most patients begin with an initial treatment phase of 4-6 sessions over several weeks, followed by maintenance sessions as needed. The average treatment duration at Isha Health is 128 days. Your psychiatrist will create a personalized plan based on your response to treatment.</p>
      </div>
    </div>

    <!-- CTA -->
    <div style="background-color:#f0fdfa;padding:2.5rem;border-radius:12px;text-align:center;border:1px solid #ccfbf1;">
      <p style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#0f766e;margin-bottom:0.5rem;">Ready to get started?</p>
      <p style="font-family:'Poppins',sans-serif;color:#4b5563;margin-bottom:1.5rem;font-size:0.95rem;">See our full pricing or book your first consultation.</p>
      <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
        <a href="/pricing" style="display:inline-block;background-color:#fff;color:#0d9488;padding:0.85rem 2rem;border-radius:8px;text-decoration:none;font-weight:600;font-size:1rem;font-family:'Poppins',sans-serif;border:2px solid #0d9488;">View Full Pricing</a>
        <a href="/appointment" style="display:inline-block;background-color:#0d9488;color:#fff;padding:0.85rem 2rem;border-radius:8px;text-decoration:none;font-weight:600;font-size:1rem;font-family:'Poppins',sans-serif;">Book Consultation</a>
      </div>
    </div>

    <p style="font-family:'Poppins',sans-serif;font-size:0.75rem;color:#9ca3af;text-align:center;margin-top:2rem;">
      Prices current as of April 2026. Ketamine is prescribed off-label for depression and anxiety — it is not FDA-approved for these indications. Individual results may vary. <a href="/safety-information-for-ketamine-treatment" style="color:#9ca3af;text-decoration:underline;">Safety information</a>.
    </p>

  </div>
</div>`,
      }}
    />
  );
}
