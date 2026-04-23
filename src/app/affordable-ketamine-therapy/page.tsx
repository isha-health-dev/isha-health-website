import type { Metadata } from 'next';
import { buildOpenGraph } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Affordable Ketamine Therapy: $350 Per Session',
  description:
    'At-home ketamine therapy from $350/session. Compare costs: IV infusion $400-800, Spravato $500-900. HSA/FSA accepted. No referral needed.',
  alternates: { canonical: 'https://isha.health/affordable-ketamine-therapy' },
  openGraph: buildOpenGraph({
    title: 'Affordable Ketamine Therapy from $350 | Isha Health',
    description: 'At-home ketamine therapy starting at $350 per session. Compare affordable ketamine treatment costs vs IV infusion and Spravato.',
    path: '/affordable-ketamine-therapy',
  }),
  twitter: {
    card: 'summary_large_image',
    title: 'Affordable Ketamine Therapy | Isha Health',
    description:
      'Affordable ketamine treatment from $350/session. HSA/FSA accepted. No referral needed.',
  },
};

export default function AffordableKetamineTherapyPage() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div style="padding:0 0 2rem;">

  <script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://isha.health/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Pricing',
        item: 'https://isha.health/pricing',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Affordable Ketamine Therapy',
        item: 'https://isha.health/affordable-ketamine-therapy',
      },
    ],
  })}</script>

  <script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does ketamine therapy cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'At Isha Health, affordable ketamine therapy starts at $350 per session. The initial 60-minute consultation and follow-up 30-minute visits are each $350. Monthly medication costs $50-$150. By comparison, IV infusion clinics charge $400-$800 per session and Spravato costs $500-$900 per session.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is ketamine therapy covered by insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most insurance plans do not cover off-label ketamine therapy directly. However, Isha Health provides superbills for every appointment that you can submit to your insurance for potential out-of-network reimbursement. HSA and FSA cards are accepted for all services, making affordable ketamine treatment more accessible.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use HSA or FSA for ketamine therapy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Isha Health accepts HSA (Health Savings Account) and FSA (Flexible Spending Account) cards for consultations and medication costs. This is one of the easiest ways to make ketamine therapy more affordable.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is at-home ketamine cheaper than IV?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'At-home oral ketamine therapy eliminates clinic overhead costs including IV setup, recovery rooms, nursing staff, and anesthesiologist fees. Telemedicine consultations also remove travel expenses. A six-session course at Isha Health costs approximately $2,100 compared to $2,400-$4,800 for IV infusion.',
        },
      },
      {
        '@type': 'Question',
        name: "What's included in the $350 consultation?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The $350 consultation includes a 60-minute physician evaluation (initial) or 30-minute follow-up, personalized treatment plan, prescription sent to your pharmacy, ongoing messaging with your care team, PHQ-9 and GAD-7 progress tracking, and a superbill for insurance reimbursement.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is affordable ketamine therapy safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Isha Health provides physician-led at-home ketamine therapy supervised by board-certified psychiatrists. Every patient undergoes a thorough psychiatric evaluation before treatment. Clinical data from over 500 patients shows an 88.8% improvement rate in depression with a 99.1% retention rate. A support person is required during sessions for safety.',
        },
      },
    ],
  })}</script>

  <!-- Hero -->
  <div style="text-align:center;padding:3rem 1.5rem 1.5rem;">
    <h1 style="font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#111827;margin:0;">Affordable Ketamine Therapy from Home</h1>
  </div>

  <div style="max-width:800px;margin:0 auto;padding:1.5rem;" style="max-width:900px;margin:0 auto;padding:2rem 1.5rem;">

    <nav aria-label="Breadcrumb" style="font-size:0.8rem;color:#6b7280;margin-bottom:1.5rem;font-family:'Poppins',sans-serif;">
      <a href="/" style="color:#0d9488;text-decoration:none;">Home</a> /
      <a href="/pricing" style="color:#0d9488;text-decoration:none;">Pricing</a> /
      <span style="color:#9ca3af;">Affordable Ketamine Therapy</span>
    </nav>

    <p style="font-family:'Poppins',sans-serif;font-size:1.1rem;line-height:1.8;color:#374151;text-align:center;max-width:700px;margin:0 auto 3rem;text-wrap:pretty;">
      Physician-led <strong>affordable ketamine treatment</strong> starting at $350 per session — a fraction of IV infusion or clinic-based costs. No referral needed.
    </p>

    <!-- Why Affordable -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Why Ketamine Therapy Is More Affordable Than You Think</h2>

      <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1rem;">
        Many people assume ketamine therapy is out of reach financially. At-home oral ketamine through <a href="/online-ketamine-therapy" style="color:#0d9488;text-decoration:underline;">Isha Health's telehealth program</a> changes that by eliminating the costs that make clinic-based options expensive:
      </p>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin-bottom:1.5rem;">
        <div style="padding:1.5rem;background:#f0fdfa;border-radius:12px;border:1px solid #ccfbf1;">
          <p style="font-family:'Libre Baskerville',serif;font-size:1.1rem;font-weight:700;color:#0f766e;margin-bottom:0.5rem;">No Clinic Overhead</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#4b5563;line-height:1.6;">At-home oral ketamine eliminates the cost of facility fees, recovery rooms, and on-site staff.</p>
        </div>
        <div style="padding:1.5rem;background:#f0fdfa;border-radius:12px;border:1px solid #ccfbf1;">
          <p style="font-family:'Libre Baskerville',serif;font-size:1.1rem;font-weight:700;color:#0f766e;margin-bottom:0.5rem;">No IV or Anesthesia Fees</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#4b5563;line-height:1.6;">No IV setup, no anesthesiologist, no monitoring equipment charges added to your bill.</p>
        </div>
        <div style="padding:1.5rem;background:#f0fdfa;border-radius:12px;border:1px solid #ccfbf1;">
          <p style="font-family:'Libre Baskerville',serif;font-size:1.1rem;font-weight:700;color:#0f766e;margin-bottom:0.5rem;">No Travel Costs</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#4b5563;line-height:1.6;">Telemedicine consultations mean zero commuting expenses, parking fees, or time off work.</p>
        </div>
        <div style="padding:1.5rem;background:#f0fdfa;border-radius:12px;border:1px solid #ccfbf1;">
          <p style="font-family:'Libre Baskerville',serif;font-size:1.1rem;font-weight:700;color:#0f766e;margin-bottom:0.5rem;">HSA/FSA Eligible</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#4b5563;line-height:1.6;">Pay with pre-tax dollars using your Health Savings Account or Flexible Spending Account.</p>
        </div>
      </div>
    </div>

    <!-- Cost Comparison Table -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Ketamine Therapy Cost Comparison</h2>

      <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1.5rem;">
        Wondering about the <strong>cheapest ketamine treatment online</strong>? Here is how Isha Health compares to other treatment formats:
      </p>

      <div style="overflow-x:auto;margin-bottom:1.5rem;">
        <table style="width:100%;border-collapse:collapse;font-family:'Poppins',sans-serif;font-size:0.85rem;">
          <thead>
            <tr style="background:#f0fdfa;">
              <th style="padding:1rem;text-align:left;border-bottom:2px solid #0d9488;font-weight:600;color:#111827;"></th>
              <th style="padding:1rem;text-align:center;border-bottom:2px solid #0d9488;font-weight:600;color:#0f766e;">Isha Health</th>
              <th style="padding:1rem;text-align:center;border-bottom:2px solid #0d9488;font-weight:600;color:#111827;">IV Infusion Clinic</th>
              <th style="padding:1rem;text-align:center;border-bottom:2px solid #0d9488;font-weight:600;color:#111827;">Spravato (Esketamine)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;font-weight:500;color:#374151;">Per session</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;text-align:center;color:#0f766e;font-weight:600;">$350</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;text-align:center;color:#374151;">$400–$800</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;text-align:center;color:#374151;">$500–$900</td>
            </tr>
            <tr style="background:#f9fafb;">
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;font-weight:500;color:#374151;">6-session cost</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;text-align:center;color:#0f766e;font-weight:600;">$2,100</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;text-align:center;color:#374151;">$2,400–$4,800</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;text-align:center;color:#374151;">$3,000–$5,400</td>
            </tr>
            <tr>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;font-weight:500;color:#374151;">Setting</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;text-align:center;color:#0f766e;font-weight:600;">At home</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;text-align:center;color:#374151;">In-clinic</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;text-align:center;color:#374151;">In-clinic (2hr monitoring)</td>
            </tr>
            <tr style="background:#f9fafb;">
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;font-weight:500;color:#374151;">Medication</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;text-align:center;color:#0f766e;font-weight:600;">$50–$150/mo</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;text-align:center;color:#374151;">Included</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;text-align:center;color:#374151;">May be covered by insurance</td>
            </tr>
            <tr>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;font-weight:500;color:#374151;">HSA/FSA</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;text-align:center;color:#0f766e;font-weight:600;">Yes</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;text-align:center;color:#374151;">Varies</td>
              <td style="padding:0.75rem 1rem;border-bottom:1px solid #e5e7eb;text-align:center;color:#374151;">Varies</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">
        For a full pricing breakdown, visit our <a href="/ketamine-therapy-cost" style="color:#0d9488;text-decoration:underline;">ketamine therapy cost</a> page or <a href="/compare/ketamine-providers" style="color:#0d9488;text-decoration:underline;">compare ketamine providers</a>.
      </p>
    </div>

    <!-- What's Included -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">What's Included in $350</h2>

      <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1rem;">
        Every consultation at Isha Health includes comprehensive physician-led care — not just a prescription:
      </p>

      <ul style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:2;padding-left:1.25rem;">
        <li>60-minute physician consultation (initial) or 30-minute follow-up</li>
        <li>Personalized treatment plan tailored to your symptoms and history</li>
        <li>Prescription sent directly to your pharmacy</li>
        <li>Ongoing messaging with your care team between appointments</li>
        <li>PHQ-9 and GAD-7 progress tracking at every visit</li>
        <li><a href="/current-patients/superbill" style="color:#0d9488;text-decoration:underline;">Superbill for insurance reimbursement</a> provided after each appointment</li>
      </ul>
    </div>

    <!-- How to Save -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">How to Save on Ketamine Therapy</h2>

      <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1rem;">
        Already affordable, here are additional ways to reduce your <strong>ketamine therapy cost</strong>:
      </p>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin-bottom:1.5rem;">
        <div style="padding:1.25rem;background:#fff;border-radius:12px;border:1px solid #e5e7eb;">
          <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#0f766e;margin-bottom:0.4rem;">Use HSA/FSA</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#4b5563;line-height:1.6;">Pay with pre-tax dollars and effectively save 20-35% depending on your tax bracket.</p>
        </div>
        <div style="padding:1.25rem;background:#fff;border-radius:12px;border:1px solid #e5e7eb;">
          <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#0f766e;margin-bottom:0.4rem;">Submit Superbills</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#4b5563;line-height:1.6;">Submit your <a href="/current-patients/superbill" style="color:#0d9488;text-decoration:underline;">superbills</a> for out-of-network reimbursement from your insurance plan.</p>
        </div>
        <div style="padding:1.25rem;background:#fff;border-radius:12px;border:1px solid #e5e7eb;">
          <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#0f766e;margin-bottom:0.4rem;">Book Before May 1, 2026</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#4b5563;line-height:1.6;">Lock in the current $350 rate before the price increases to $398 per session.</p>
        </div>
        <div style="padding:1.25rem;background:#fff;border-radius:12px;border:1px solid #e5e7eb;">
          <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#0f766e;margin-bottom:0.4rem;">Compare Pharmacy Prices</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#4b5563;line-height:1.6;">Medication costs vary by pharmacy. Ask your pharmacist or use GoodRx to find the lowest price.</p>
        </div>
      </div>
    </div>

    <!-- Outcomes Callout -->
    <div style="background:#f0fdfa;padding:2.5rem;border-radius:12px;border:1px solid #ccfbf1;text-align:center;margin-bottom:3rem;">
      <p style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#0f766e;margin-bottom:0.75rem;">Affordable and Effective</p>
      <div style="display:flex;flex-wrap:wrap;gap:2rem;justify-content:center;margin-bottom:1rem;">
        <div>
          <p style="font-family:'Libre Baskerville',serif;font-size:2.5rem;font-weight:700;color:#0f766e;margin-bottom:0.25rem;">88.8%</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#4b5563;">improvement in depression</p>
        </div>
        <div>
          <p style="font-family:'Libre Baskerville',serif;font-size:2.5rem;font-weight:700;color:#0f766e;margin-bottom:0.25rem;">500+</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#4b5563;">patients treated</p>
        </div>
        <div>
          <p style="font-family:'Libre Baskerville',serif;font-size:2.5rem;font-weight:700;color:#0f766e;margin-bottom:0.25rem;">99.1%</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#4b5563;">retention rate</p>
        </div>
      </div>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;">
        View our complete <a href="/outcomes" style="color:#0d9488;text-decoration:underline;">clinical outcomes data</a>.
      </p>
    </div>

    <!-- FAQ -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Frequently Asked Questions About Affordable Ketamine Therapy</h2>

      <div style="margin-bottom:1.5rem;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">How much does ketamine therapy cost?</h3>
        <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">At Isha Health, affordable ketamine therapy starts at $350 per session. The initial 60-minute consultation and follow-up 30-minute visits are each $350. Monthly medication costs $50-$150. By comparison, IV infusion clinics charge $400-$800 per session and Spravato costs $500-$900 per session.</p>
      </div>

      <div style="margin-bottom:1.5rem;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">Is ketamine therapy covered by insurance?</h3>
        <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">Most insurance plans do not cover off-label ketamine therapy directly. However, Isha Health provides superbills for every appointment that you can submit for potential out-of-network reimbursement. HSA and FSA cards are accepted for all services.</p>
      </div>

      <div style="margin-bottom:1.5rem;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">Can I use HSA or FSA for ketamine therapy?</h3>
        <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">Yes. Isha Health accepts HSA (Health Savings Account) and FSA (Flexible Spending Account) cards for consultations and medication costs. This is one of the easiest ways to make cheap ketamine therapy even more affordable.</p>
      </div>

      <div style="margin-bottom:1.5rem;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">Why is at-home ketamine cheaper than IV?</h3>
        <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">At-home oral ketamine therapy eliminates clinic overhead costs including IV setup, recovery rooms, nursing staff, and anesthesiologist fees. Telemedicine consultations also remove travel expenses. A six-session course at Isha Health costs approximately $2,100 compared to $2,400-$4,800 for IV infusion — making it the most affordable ketamine treatment option available.</p>
      </div>

      <div style="margin-bottom:1.5rem;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">What's included in the $350 consultation?</h3>
        <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">The $350 consultation includes a 60-minute physician evaluation (initial) or 30-minute follow-up, personalized treatment plan, prescription sent to your pharmacy, ongoing messaging with your care team, PHQ-9 and GAD-7 progress tracking, and a superbill for insurance reimbursement.</p>
      </div>

      <div style="margin-bottom:1.5rem;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">Is affordable ketamine therapy safe?</h3>
        <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">Yes. Isha Health provides physician-led at-home ketamine therapy supervised by board-certified psychiatrists. Every patient undergoes a thorough psychiatric evaluation before treatment. Clinical data from over 500 patients shows an 88.8% improvement rate in depression with a 99.1% retention rate. A support person is required during sessions for safety. Learn more about <a href="/online-ketamine-therapy" style="color:#0d9488;text-decoration:underline;">how online ketamine therapy works</a>.</p>
      </div>
    </div>

    <!-- CTA -->
    <div style="background-color:#f0fdfa;padding:2.5rem;border-radius:12px;text-align:center;border:1px solid #ccfbf1;">
      <p style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#0f766e;margin-bottom:0.5rem;">Book Your $350 Consultation</p>
      <p style="font-family:'Poppins',sans-serif;color:#4b5563;margin-bottom:1.5rem;font-size:0.95rem;">Start affordable ketamine therapy from the comfort of your home. No referral needed.</p>
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
