import type { Metadata } from 'next';
import { buildOpenGraph } from '@/lib/seo';
import { getTherapistsForCity } from '@/lib/city-therapists';

export const metadata: Metadata = {
  title: "At-Home Ketamine Therapy in San Diego, CA",
  description: "Online ketamine-assisted therapy in San Diego, California. Physician-led at-home treatment for depression, anxiety, and PTSD. No clinic visits required…",
  alternates: { canonical: "https://isha.health/locations/ketamine-therapy-san-diego" },
  robots: { index: true, follow: true }, // Major metro — overrides locations/layout.tsx noindex
  openGraph: buildOpenGraph({
    title: "At-Home Ketamine Therapy in San Diego, CA",
    description: "Online ketamine-assisted therapy in San Diego, California. Physician-led at-home treatment for depression, anxiety, and PTSD. No clinic visits required…",
    path: '/locations/ketamine-therapy-san-diego',
  }),
  twitter: {
    card: "summary_large_image",
    title: "At-Home Ketamine Therapy in San Diego, CA",
    description: "Online ketamine-assisted therapy in San Diego, California. Physician-led at-home treatment for depression, anxiety, and PTSD. No clinic visits required…",
  },
};

export default async function Page() {
  const therapists = await getTherapistsForCity('ketamine-therapy-san-diego');
  const therapistsHtml = therapists.length > 0
    ? `
    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-top:2.5rem;margin-bottom:1rem;">Ketamine-assisted therapists in San Diego</h2>
    <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#4b5563;line-height:1.6;margin-bottom:1.25rem;">These licensed clinicians work with San Diego-area patients receiving ketamine therapy. Many can complement your Isha Health treatment with integration support.</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:0.75rem;margin-bottom:0.75rem;">${therapists.map((t) => `<a href="/ketamine-therapist-directory/${t.slug}" style="display:block;padding:0.85rem 1rem;border:1px solid #e5e7eb;border-radius:10px;text-decoration:none;color:inherit;background:#fafafa;"><span style="display:block;font-family:&apos;Poppins&apos;,sans-serif;font-weight:600;color:#111827;font-size:0.95rem;">${t.name}</span>${t.city ? `<span style="display:block;font-family:&apos;Poppins&apos;,sans-serif;font-size:0.8rem;color:#6b7280;margin-top:0.15rem;">${t.city}, ${t.state || ''}</span>` : ''}</a>`).join('')}</div>
    <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#6b7280;"><a href="/ketamine-therapist-directory" style="color:#0d9488;text-decoration:underline;">Browse the full clinician directory →</a></p>
    `
    : '';
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div style="padding:0 0 2rem;">
  <script type="application/ld+json">{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How does at-home ketamine therapy work in San Diego?", "acceptedAnswer": {"@type": "Answer", "text": "Isha Health provides ketamine therapy via telemedicine for patients in San Diego, California. You meet with a physician over video for your initial consultation, receive your prescription by mail, and complete sessions at home with ongoing clinical support."}}, {"@type": "Question", "name": "How much does ketamine therapy cost in San Diego?", "acceptedAnswer": {"@type": "Answer", "text": "Initial consultation is $350 (60 minutes with a physician). Follow-up appointments are $350 (30 minutes). Medication typically costs $50-150 for a 30-day supply from a compounding pharmacy. HSA/FSA accepted."}}, {"@type": "Question", "name": "Is ketamine therapy legal in California?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Ketamine is a Schedule III medication that can be legally prescribed off-label by licensed physicians in California for conditions including depression, anxiety, and PTSD. Isha Health physicians are licensed to practice in California."}}, {"@type": "Question", "name": "Do I need to visit a clinic?", "acceptedAnswer": {"@type": "Answer", "text": "No. Isha Health is fully telehealth-based. All consultations are conducted via secure video. Your medication is delivered to your home in San Diego. No in-person visits required."}}]}</script>
  <script type="application/ld+json">{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://isha.health"}, {"@type": "ListItem", "position": 2, "name": "Ketamine Therapy in California", "item": "https://isha.health/locations/online-at-home-ketamine-therapy-in-california"}, {"@type": "ListItem", "position": 3, "name": "Ketamine Therapy in San Diego", "item": "https://isha.health/locations/ketamine-therapy-san-diego"}]}</script>
  <div style="text-align:center;padding:3rem 1.5rem 1.5rem;">
    <h1 style="font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#111827;margin:0;">At-Home Ketamine Therapy in San Diego, CA</h1>
  </div>
  <div style="max-width:800px;margin:0 auto;padding:1.5rem;" style="max-width:800px;margin:0 auto;padding:2rem 1.5rem;">
    <nav aria-label="Breadcrumb" style="font-size:0.8rem;color:#6b7280;margin-bottom:1.5rem;font-family:'Poppins',sans-serif;">
      <a href="/" style="color:#0d9488;text-decoration:none;">Home</a> /
      <a href="/locations/online-at-home-ketamine-therapy-in-california" style="color:#0d9488;text-decoration:none;">California</a> /
      <span style="color:#9ca3af;">San Diego</span>
    </nav>

    <p style="font-family:'Poppins',sans-serif;font-size:1.05rem;line-height:1.8;color:#374151;margin-bottom:2rem;text-wrap:pretty;">
      If you're in San Diego and struggling with depression, anxiety, or PTSD, you don't need to visit a clinic. Isha Health brings physician-led ketamine-assisted therapy directly to you through secure telemedicine — no traffic, no waiting rooms, no disruption to your routine.
    </p>


    <div style="background:#fff7ed;border:1px solid #fed7aa;border-left:4px solid #ea580c;border-radius:10px;padding:1rem 1.25rem;margin:1.5rem 0 2rem;">
      <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;font-weight:700;letter-spacing:0.04em;color:#9a3412;margin-bottom:0.5rem;text-transform:uppercase;">If you&rsquo;re in crisis</p>
      <p style="font-family:'Poppins',sans-serif;font-size:0.92rem;color:#7c2d12;line-height:1.6;margin:0;">Ketamine therapy is not appropriate for an active crisis. If you&rsquo;re experiencing thoughts of suicide or self-harm right now, call or text <strong>988</strong> (Suicide &amp; Crisis Lifeline), text <strong>HOME to 741741</strong> (Crisis Text Line), or call <strong>911</strong>. These are free, confidential, and available 24/7.</p>
    </div>

    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">How it works</h2>
    <div style="display:flex;flex-wrap:wrap;gap:1rem;margin-bottom:2rem;">
      <div style="flex:1 1 200px;padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;background:#fafafa;">
        <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#0d9488;margin-bottom:0.25rem;">1. Consultation</p>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">60-minute video evaluation with a physician. We assess your symptoms, history, and suitability for ketamine therapy.</p>
      </div>
      <div style="flex:1 1 200px;padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;background:#fafafa;">
        <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#0d9488;margin-bottom:0.25rem;">2. Medication</p>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">Your personalized prescription is sent to a pharmacy and delivered to your door in San Diego within 3-5 business days.</p>
      </div>
      <div style="flex:1 1 200px;padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;background:#fafafa;">
        <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#0d9488;margin-bottom:0.25rem;">3. At-home sessions</p>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">Complete your ketamine sessions from the comfort of home with ongoing support from your care team.</p>
      </div>
    </div>

    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">Why patients in San Diego choose Isha Health</h2>
    <ul style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.8;padding-left:1.25rem;margin-bottom:2rem;">
      <li><strong>No clinic visits</strong> — everything is done via telemedicine from your home in San Diego</li>
      <li><strong>Physician-led</strong> — your treatment is managed by a licensed physician, not a nurse or automated system</li>
      <li><strong>Personalized protocol</strong> — dosage and frequency adjusted based on your individual response</li>
      <li><strong>86% positive response</strong> — among patients with moderate to severe symptoms</li>
      <li><strong>Appointments in 24 hours</strong> — no weeks-long waitlists</li>
      <li><strong>HSA/FSA accepted</strong> — $350 per appointment, medication $50-150/month</li>
    </ul>

    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">Conditions we treat</h2>
    <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:2rem;">
      <a href="/ketamine-therapy-for-depression" style="padding:0.4rem 1rem;border-radius:20px;border:1px solid #d1d5db;font-size:0.85rem;text-decoration:none;color:#374151;font-family:'Poppins',sans-serif;">Depression</a>
      <a href="/ketamine-therapy-for-anxiety" style="padding:0.4rem 1rem;border-radius:20px;border:1px solid #d1d5db;font-size:0.85rem;text-decoration:none;color:#374151;font-family:'Poppins',sans-serif;">Anxiety</a>
      <a href="/post/ketamine-ptsd-clinical-evidence" style="padding:0.4rem 1rem;border-radius:20px;border:1px solid #d1d5db;font-size:0.85rem;text-decoration:none;color:#374151;font-family:'Poppins',sans-serif;">PTSD</a>
      <a href="/post/ketamine-ocd-emerging-evidence" style="padding:0.4rem 1rem;border-radius:20px;border:1px solid #d1d5db;font-size:0.85rem;text-decoration:none;color:#374151;font-family:'Poppins',sans-serif;">OCD</a>
      <a href="/post/ketamine-bipolar-depression" style="padding:0.4rem 1rem;border-radius:20px;border:1px solid #d1d5db;font-size:0.85rem;text-decoration:none;color:#374151;font-family:'Poppins',sans-serif;">Bipolar depression</a>
      <span style="padding:0.4rem 1rem;border-radius:20px;border:1px solid #d1d5db;font-size:0.85rem;color:#374151;font-family:'Poppins',sans-serif;">Treatment-resistant depression</span>
    </div>


    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-top:2.5rem;margin-bottom:1rem;">About ketamine therapy in San Diego</h2>
    <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;line-height:1.8;color:#374151;margin-bottom:1.25rem;text-wrap:pretty;">
      San Diego, a 1.4 million-resident city in California (Pacific Time), sits within the San Diego County metro of 3.3 million. San Diego's military and veteran population — including many active-duty and recently-separated service members — has unmet demand for evidence-based PTSD and depression care. Telehealth ketamine therapy lets you start treatment without a referral chain or waitlist.
    </p>
    <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;line-height:1.8;color:#374151;margin-bottom:1.25rem;text-wrap:pretty;">
      Major healthcare systems serving the area include UC San Diego Health, Scripps Health, Sharp HealthCare, and Naval Medical Center San Diego (TRICARE). Isha Health complements these in-system options with a fully telehealth alternative — accessible from Downtown, La Jolla, North County, East County, and South Bay and anywhere else with a stable internet connection. Sessions are scheduled in your local Pacific Time, and our physician network is licensed to prescribe in California.
    </p>

    <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-top:1.5rem;margin-bottom:0.5rem;">Mental health context in San Diego</h3>
    <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;line-height:1.8;color:#374151;margin-bottom:1rem;text-wrap:pretty;">
      San Diego's active-duty and veteran population — including service members at MCRD, NB Coronado, and NB San Diego — accounts for a disproportionate share of regional PTSD and depression diagnoses. The Naval Center for Combat & Operational Stress Control has documented persistent mental-health load in this population.
    </p>
    <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-top:1.25rem;margin-bottom:0.5rem;">Local research and clinical trials</h3>
    <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;line-height:1.8;color:#374151;margin-bottom:1rem;text-wrap:pretty;">
      UC San Diego Health is an active site for psychedelic clinical research and runs the Center for Psychedelic Research, with ongoing trials for treatment-resistant depression. For active studies, see <a href="https://clinicaltrials.gov/search?term=ketamine%20San%20Diego&aggFilters=status:rec" rel="nofollow" style="color:#0d9488;text-decoration:underline;">recruiting ketamine trials in San Diego on ClinicalTrials.gov</a>.
    </p>


${therapistsHtml}
    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">Frequently asked questions</h2>
    <div style="margin-bottom:2rem;">
      <div style="border-bottom:1px solid #e5e7eb;padding:1rem 0;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#111827;margin-bottom:0.35rem;">How does at-home ketamine therapy work in San Diego?</h3>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">You meet with a physician over video, receive your prescription by mail at your San Diego address, and complete sessions at home with ongoing clinical support.</p>
      </div>
      <div style="border-bottom:1px solid #e5e7eb;padding:1rem 0;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#111827;margin-bottom:0.35rem;">How much does ketamine therapy cost in San Diego?</h3>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">Initial consultation is $350 (60 min). Follow-ups are $350 (30 min). Medication is typically $50-150/month. HSA/FSA accepted. See our <a href="/pricing" style="color:#0d9488;text-decoration:underline;">pricing page</a> for details.</p>
      </div>
      <div style="border-bottom:1px solid #e5e7eb;padding:1rem 0;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#111827;margin-bottom:0.35rem;">Is ketamine therapy legal in California?</h3>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">Yes. Ketamine is a Schedule III medication that can be legally prescribed off-label by licensed physicians in California. It is not a controlled substance in the same category as Schedule I or II drugs.</p>
      </div>
      <div style="padding:1rem 0;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#111827;margin-bottom:0.35rem;">Do I need to visit a clinic?</h3>
        <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">No. Isha Health is 100% telemedicine. All consultations are via secure video. Medication is delivered to your home.</p>
      </div>
    </div>
  </div>


  <div style="background:#f0fdfa;border:1px solid #ccfbf1;border-radius:10px;padding:1.25rem 1.5rem;text-align:center;max-width:700px;margin:2rem auto;">
    <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#0f766e;font-weight:600;margin-bottom:0.25rem;">88.8% of Isha Health patients with moderate-to-severe depression show measurable improvement</p>
    <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;">Based on over 500 patients with validated assessments. <a href="/outcomes" style="color:#0d9488;text-decoration:underline;">See our clinical outcomes report →</a></p>
  </div>

  <div style="text-align:center;margin:1.5rem 0;">
    <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;margin-bottom:0.75rem;">Looking for a ketamine therapist in your area?</p>
    <a href="/ketamine-therapist-directory" style="display:inline-block;background-color:#fff;color:#0d9488;padding:0.7rem 1.5rem;border-radius:8px;text-decoration:none;font-weight:600;font-size:0.9rem;font-family:'Poppins',sans-serif;border:1px solid #0d9488;">Browse the Clinician Directory</a>
  </div>

  <div style="background-color:#f0fdfa;padding:3rem 1.5rem;text-align:center;border-top:1px solid #ccfbf1;">
    <p style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#0f766e;margin-bottom:0.5rem;">Ready to start feeling better?</p>
    <p style="font-family:'Poppins',sans-serif;color:#4b5563;margin-bottom:1.5rem;font-size:0.95rem;">Appointments often available within 24 hours for patients in San Diego.</p>
    <a href="/appointment" style="display:inline-block;background-color:#0d9488;color:#fff;padding:0.85rem 2.5rem;border-radius:8px;text-decoration:none;font-weight:600;font-size:1rem;font-family:'Poppins',sans-serif;">Check Appointment Availability</a>
  </div>
</div>`
      }}
    />
  );
}
