import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - Personalized Ketamine Therapy',
  description:
    "ISHA Health offers personalized online ketamine therapy for depression and anxiety. No one-size-fits-all — your treatment plan is tailored to your unique needs. Initial consultation $350.",
  alternates: { canonical: 'https://isha.health/pricing' },
  openGraph: {
    title: 'Pricing - Personalized Ketamine Therapy | Isha Health',
    description:
      'Personalized ketamine-assisted therapy tailored to your unique needs. Initial consultation $350.',
    type: 'website',
    url: 'https://isha.health/pricing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | Isha Health',
    description: 'Personalized ketamine therapy. Initial consultation $350.',
  },
};

export default function PricingPage() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<div class="section-base white-section static-page">
  <div class="hero-isha">
    <h1 class="heading static-heading">Your Healing Journey, Personalized</h1>
  </div>

  <!-- Personalized Care Intro -->
  <div class="section-wrapper" style="max-width:800px;margin:0 auto;padding:2rem 1.5rem 0;">
    <p style="font-family:'Poppins',sans-serif;font-size:1.1rem;line-height:1.8;color:#4b5563;text-align:center;text-wrap:pretty;">
      At Isha Health, we don't believe in one-size-fits-all treatment. Every patient receives a care plan built around their unique history, symptoms, and goals — guided by a licensed clinician from start to finish.
    </p>
  </div>

  <!-- Pricing Cards -->
  <div class="section-wrapper" style="max-width:900px;margin:0 auto;padding:2.5rem 1.5rem;">
    <div style="display:flex;flex-wrap:wrap;gap:1.5rem;justify-content:center;">

      <!-- Initial Consultation -->
      <div style="flex:1 1 360px;max-width:420px;border:2px solid #0d9488;border-radius:12px;overflow:hidden;">
        <div style="background-color:#0d9488;padding:1.25rem;text-align:center;">
          <p style="color:#fff;font-family:'Libre Baskerville',serif;font-size:1.2rem;font-weight:700;margin:0;">Initial Consultation</p>
          <p style="color:#ccfbf1;font-size:0.85rem;margin:0.25rem 0 0;font-family:'Poppins',sans-serif;">60 minutes with a physician</p>
        </div>
        <div style="padding:1.5rem;">
          <p style="text-align:center;margin-bottom:1.25rem;">
            <span style="font-size:2.5rem;font-weight:700;color:#111827;font-family:'Libre Baskerville',serif;">$350</span>
          </p>
          <ul style="list-style:none;padding:0;margin:0;font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.6;">
            <li style="padding:0.5rem 0;border-bottom:1px solid #f3f4f6;display:flex;gap:0.5rem;align-items:flex-start;">
              <span style="color:#0d9488;font-weight:700;flex-shrink:0;">✓</span>
              Comprehensive medical evaluation
            </li>
            <li style="padding:0.5rem 0;border-bottom:1px solid #f3f4f6;display:flex;gap:0.5rem;align-items:flex-start;">
              <span style="color:#0d9488;font-weight:700;flex-shrink:0;">✓</span>
              Personalized treatment plan designed for your symptoms
            </li>
            <li style="padding:0.5rem 0;border-bottom:1px solid #f3f4f6;display:flex;gap:0.5rem;align-items:flex-start;">
              <span style="color:#0d9488;font-weight:700;flex-shrink:0;">✓</span>
              Medication prescribed and sent to pharmacy
            </li>
            <li style="padding:0.5rem 0;display:flex;gap:0.5rem;align-items:flex-start;">
              <span style="color:#0d9488;font-weight:700;flex-shrink:0;">✓</span>
              Ongoing support from your care team
            </li>
            <li style="padding:0.5rem 0;display:flex;gap:0.5rem;align-items:flex-start;">
              <span style="color:#0d9488;font-weight:700;flex-shrink:0;">✓</span>
              Thorough advice on how to make the most of your sessions based on our experience from tens of thousands of sessions
            </li>
          </ul>
        </div>
      </div>

      <!-- Follow-up -->
      <div style="flex:1 1 360px;max-width:420px;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
        <div style="background-color:#f9fafb;padding:1.25rem;text-align:center;">
          <p style="color:#111827;font-family:'Libre Baskerville',serif;font-size:1.2rem;font-weight:700;margin:0;">Follow-Up Appointment</p>
          <p style="color:#6b7280;font-size:0.85rem;margin:0.25rem 0 0;font-family:'Poppins',sans-serif;">30 minutes — adjust and optimize your plan</p>
        </div>
        <div style="padding:1.5rem;">
          <p style="text-align:center;margin-bottom:1.25rem;">
            <span style="font-size:2.5rem;font-weight:700;color:#111827;font-family:'Libre Baskerville',serif;">$350</span>
          </p>
          <ul style="list-style:none;padding:0;margin:0;font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.6;">
            <li style="padding:0.5rem 0;border-bottom:1px solid #f3f4f6;display:flex;gap:0.5rem;align-items:flex-start;">
              <span style="color:#0d9488;font-weight:700;flex-shrink:0;">✓</span>
              Review your progress and symptom tracking
            </li>
            <li style="padding:0.5rem 0;border-bottom:1px solid #f3f4f6;display:flex;gap:0.5rem;align-items:flex-start;">
              <span style="color:#0d9488;font-weight:700;flex-shrink:0;">✓</span>
              Dosage and protocol adjustments based on your response — personalized advice on how to make the most of your sessions
            </li>
            <li style="padding:0.5rem 0;border-bottom:1px solid #f3f4f6;display:flex;gap:0.5rem;align-items:flex-start;">
              <span style="color:#0d9488;font-weight:700;flex-shrink:0;">✓</span>
              Prescription refills as needed
            </li>
            <li style="padding:0.5rem 0;display:flex;gap:0.5rem;align-items:flex-start;">
              <span style="color:#0d9488;font-weight:700;flex-shrink:0;">✓</span>
              Integration guidance and wellness check-in
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Medication note -->
    <p style="text-align:center;font-family:'Poppins',sans-serif;font-size:0.85rem;color:#6b7280;margin-top:1.5rem;text-wrap:pretty;">
      Medication cost is separate — typically $50–150 for a 30-day supply, depending on your pharmacy. If you have a preferred pharmacy, we can send the prescription there.
    </p>

    <!-- CTA -->
    <div style="text-align:center;margin-top:2rem;">
      <a href="/appointment" style="display:inline-block;background-color:#0d9488;color:#fff;padding:0.85rem 2.5rem;border-radius:8px;text-decoration:none;font-weight:600;font-size:1rem;font-family:'Poppins',sans-serif;">Check Appointment Availability</a>
    </div>
  </div>

  <!-- What Makes Us Different -->
  <div style="background-color:#f9fafb;padding:3rem 1.5rem;">
    <div style="max-width:900px;margin:0 auto;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.5rem;font-weight:700;color:#111827;text-align:center;margin-bottom:2rem;">Why Personalized Care Matters</h2>
      <div style="display:flex;flex-wrap:wrap;gap:1.5rem;">
        <div style="flex:1 1 250px;background:#fff;border-radius:10px;padding:1.5rem;border:1px solid #e5e7eb;">
          <p style="font-size:1.5rem;margin-bottom:0.5rem;">🧠</p>
          <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">Your Brain, Your Protocol</h3>
          <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#4b5563;line-height:1.6;">Everyone responds differently to ketamine. We start with a thorough evaluation and adjust your dosage and frequency based on how you respond — not a generic script.</p>
        </div>
        <div style="flex:1 1 250px;background:#fff;border-radius:10px;padding:1.5rem;border:1px solid #e5e7eb;">
          <p style="font-size:1.5rem;margin-bottom:0.5rem;">👩‍⚕️</p>
          <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">Licensed Clinician at Every Step</h3>
          <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#4b5563;line-height:1.6;">Unlike mail-order ketamine services, every Isha Health patient works directly with a licensed physician or psychiatric nurse practitioner who knows your full history.</p>
        </div>
        <div style="flex:1 1 250px;background:#fff;border-radius:10px;padding:1.5rem;border:1px solid #e5e7eb;">
          <p style="font-size:1.5rem;margin-bottom:0.5rem;">📊</p>
          <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">Continuous Monitoring</h3>
          <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#4b5563;line-height:1.6;">We track your progress with validated tools (PHQ-9, GAD-7) and adjust your plan proactively — not just when you ask. 86% of our members feel better within 3 months.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- FAQ Section -->
  <div class="section-wrapper" style="max-width:800px;margin:0 auto;padding:3rem 1.5rem;">
    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.5rem;font-weight:700;color:#111827;text-align:center;margin-bottom:2rem;">Frequently Asked Questions</h2>

    <div style="border-bottom:1px solid #e5e7eb;padding:1.25rem 0;">
      <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">Which states do you serve?</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.6;">We offer ketamine-assisted therapy in <a href="/locations/online-at-home-ketamine-therapy-in-arizona" style="color:#0d9488;text-decoration:underline;">Arizona</a>, <a href="/locations/online-at-home-ketamine-therapy-in-california" style="color:#0d9488;text-decoration:underline;">California</a>, <a href="/locations/online-at-home-ketamine-therapy-in-colorado" style="color:#0d9488;text-decoration:underline;">Colorado</a>, <a href="/locations/online-at-home-ketamine-therapy-in-florida" style="color:#0d9488;text-decoration:underline;">Florida</a>, <a href="/locations/online-at-home-ketamine-therapy-in-georgia" style="color:#0d9488;text-decoration:underline;">Georgia</a>, <a href="/locations/online-at-home-ketamine-therapy-in-new-york" style="color:#0d9488;text-decoration:underline;">New York</a>, <a href="/locations/online-at-home-ketamine-therapy-in-oregon" style="color:#0d9488;text-decoration:underline;">Oregon</a>, <a href="/locations/online-at-home-ketamine-therapy-in-texas" style="color:#0d9488;text-decoration:underline;">Texas</a>, and <a href="/locations/online-at-home-ketamine-therapy-in-washington" style="color:#0d9488;text-decoration:underline;">Washington</a>.</p>
    </div>

    <div style="border-bottom:1px solid #e5e7eb;padding:1.25rem 0;">
      <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">Can I use HSA/FSA?</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.6;">Yes. Isha Health services are eligible for HSA and FSA spending.</p>
    </div>

    <div style="border-bottom:1px solid #e5e7eb;padding:1.25rem 0;">
      <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">Do you accept insurance?</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.6;">We do not accept insurance plans, including Medicaid and Medicare. Payment is due at the time of service. We prioritize patient care, ensuring immediate availability and privacy. We can provide a <a href="/current-patients/superbill" style="color:#0d9488;text-decoration:underline;">superbill</a> for you to submit to your insurance for potential reimbursement.</p>
    </div>

    <div style="border-bottom:1px solid #e5e7eb;padding:1.25rem 0;">
      <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">What about the medication cost?</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.6;">You typically pay $50–150 for a 30-day supply of ketamine from a compounding pharmacy. The cost varies depending on your location and the pharmacy. If you have a preferred pharmacy, we can send the prescription there.</p>
    </div>

    <div style="border-bottom:1px solid #e5e7eb;padding:1.25rem 0;">
      <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">What is your cancellation policy?</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.6;">Please provide at least 48 hours' notice to cancel or reschedule. Late cancellations incur a $120 fee. No-shows are charged the full $350 appointment fee. See our full <a href="/cancellation-policy-isha-health" style="color:#0d9488;text-decoration:underline;">cancellation policy</a>.</p>
    </div>

    <div style="padding:1.25rem 0;">
      <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">How quickly can I get an appointment?</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.6;">Appointments are often available within 24 hours. If there are no immediate openings, email us at <a href="mailto:info@isha.health" style="color:#0d9488;text-decoration:underline;">info@isha.health</a> and we'll do our best to accommodate you.</p>
    </div>
  </div>

  <!-- Bottom CTA -->
  <div style="background-color:#f0fdfa;padding:3rem 1.5rem;text-align:center;border-top:1px solid #ccfbf1;">
    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.35rem;font-weight:700;color:#0f766e;margin-bottom:0.5rem;">Ready to feel better?</h2>
    <p style="font-family:'Poppins',sans-serif;color:#4b5563;margin-bottom:1.5rem;font-size:0.95rem;max-width:500px;margin-left:auto;margin-right:auto;text-wrap:pretty;">Book your initial consultation and get a treatment plan built around you — not a template.</p>
    <a href="/appointment" style="display:inline-block;background-color:#0d9488;color:#fff;padding:0.85rem 2.5rem;border-radius:8px;text-decoration:none;font-weight:600;font-size:1rem;font-family:'Poppins',sans-serif;">Check Appointment Availability</a>
    <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#9ca3af;margin-top:1rem;">Available in AZ, CA, CO, FL, GA, NY, OR, TX, and WA</p>
  </div>
</div>
`,
      }}
    />
  );
}
