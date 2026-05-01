import type { Metadata } from 'next';
import { buildOpenGraph } from '@/lib/seo';

export const metadata: Metadata = {
  title: "What Is Ketamine-Assisted Therapy?",
  description: "Ketamine-assisted therapy combines low-dose ketamine with clinical support to treat depression, anxiety, and PTSD. 88.8% of patients improve.",
  alternates: {
    canonical: "https://isha.health/what-is-ketamine-assisted-therapy",
  },
  openGraph: buildOpenGraph({
    title: "What Is Ketamine-Assisted Therapy?",
    description: "Ketamine-assisted therapy combines low-dose ketamine with clinical support to treat depression, anxiety, and PTSD. 88.8% of patients improve.",
    path: '/what-is-ketamine-assisted-therapy',
  }),
  twitter: {
    card: "summary_large_image",
    title: "What Is Ketamine-Assisted Therapy?",
    description: "Ketamine-assisted therapy combines low-dose ketamine with clinical support to treat depression, anxiety, and PTSD. 88.8% of patients improve.",
  },
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<div style="max-width:800px;margin:0 auto;padding:2rem 1.5rem 4rem;font-family:'Poppins',sans-serif;color:#374151;font-size:0.95rem;line-height:1.7;">

  <script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is ketamine-assisted therapy?", "acceptedAnswer": { "@type": "Answer", "text": "Ketamine-assisted therapy (KAT) combines low-dose ketamine with guided psychotherapy. The ketamine opens a window of neuroplasticity — the brain becomes more flexible and receptive to change — while therapy helps patients process emotions, trauma, and patterns that maintain depression and anxiety." }},
      { "@type": "Question", "name": "How does ketamine work in the brain?", "acceptedAnswer": { "@type": "Answer", "text": "Ketamine blocks NMDA receptors on the glutamate system, triggering a rapid increase in brain-derived neurotrophic factor (BDNF) and the formation of new synaptic connections. This is fundamentally different from SSRIs, which work on serotonin and take weeks to show effects." }},
      { "@type": "Question", "name": "What conditions can ketamine-assisted therapy treat?", "acceptedAnswer": { "@type": "Answer", "text": "KAT has shown effectiveness for major depressive disorder, treatment-resistant depression, PTSD, generalized anxiety disorder, OCD, suicidal ideation, and bipolar depression (with monitoring)." }},
      { "@type": "Question", "name": "Is ketamine-assisted therapy safe?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Ketamine has been safely used in medicine for over 50 years. When administered under clinical supervision at therapeutic doses, it has a well-established safety profile. Common side effects include temporary dissociation, mild nausea, and dizziness, which resolve within hours." }},
      { "@type": "Question", "name": "What happens during a ketamine therapy session?", "acceptedAnswer": { "@type": "Answer", "text": "You take an oral ketamine tablet under your tongue. Over 45-90 minutes, you may experience deep relaxation, vivid imagery, or emotional insights. Afterward, a therapist helps you process and integrate the experience." }}
    ]
  })}</script>

  <div style="text-align:center;padding:2rem 0 2.5rem;">
    <h1 style="font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#111827;margin-bottom:1rem;">What Is Ketamine-Assisted Therapy?</h1>
    <p style="font-size:1.05rem;color:#4b5563;max-width:600px;margin:0 auto;">A physician's guide to how ketamine therapy works, who it helps, and what to expect during treatment.</p>
  </div>

  <section style="margin-bottom:2.5rem;">
    <p>For people struggling with depression, anxiety, or PTSD, traditional treatments don't always work. About one-third of depression patients don't respond adequately to antidepressants — a condition known as <a href="/conditions/treatment-resistant-depression" style="color:#0d9488;text-decoration:underline;">treatment-resistant depression</a>.</p>
    <p style="margin-top:0.75rem;">Ketamine-assisted therapy (KAT) offers a different approach. It combines the rapid neurobiological effects of ketamine with guided psychotherapy to help patients heal in ways that medication or talk therapy alone often can't.</p>
  </section>

  <section style="margin-bottom:2.5rem;">
    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">How Ketamine Works in the Brain</h2>
    <p>Ketamine is fundamentally different from standard antidepressants:</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:1.25rem;margin:1.25rem 0;">
      <div style="background:#f9fafb;border-radius:10px;padding:1.25rem;border:1px solid #e5e7eb;">
        <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.5rem;">Neuroplasticity</h3>
        <p style="margin:0;font-size:0.9rem;">Ketamine stimulates <a href="/post/ketamine-bdnf-neuroplasticity" style="color:#0d9488;text-decoration:underline;">brain-derived neurotrophic factor (BDNF)</a>, promoting new neural connections. The brain becomes more flexible and open to change.</p>
      </div>
      <div style="background:#f9fafb;border-radius:10px;padding:1.25rem;border:1px solid #e5e7eb;">
        <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.5rem;">Rapid Action</h3>
        <p style="margin:0;font-size:0.9rem;">Unlike <a href="/post/ketamine-vs-ssris" style="color:#0d9488;text-decoration:underline;">SSRIs that take 4-6 weeks</a>, ketamine can reduce depression symptoms within hours to days.</p>
      </div>
      <div style="background:#f9fafb;border-radius:10px;padding:1.25rem;border:1px solid #e5e7eb;">
        <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.5rem;">Deeper Processing</h3>
        <p style="margin:0;font-size:0.9rem;">The temporary shift in consciousness helps patients access and process emotions and trauma that are difficult to reach in ordinary therapy.</p>
      </div>
    </div>
  </section>

  <section style="margin-bottom:2.5rem;">
    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">What Happens During a Session</h2>
    <div style="border-left:3px solid #0d9488;padding-left:1.25rem;margin-bottom:1.25rem;">
      <h3 style="font-weight:700;color:#111827;margin:0 0 0.35rem;font-size:0.95rem;">1. Preparation</h3>
      <p style="margin:0;">You meet with a clinician to discuss your goals, medical history, and treatment intentions. You'll receive detailed instructions on how to set up a safe, comfortable space at home.</p>
    </div>
    <div style="border-left:3px solid #0d9488;padding-left:1.25rem;margin-bottom:1.25rem;">
      <h3 style="font-weight:700;color:#111827;margin:0 0 0.35rem;font-size:0.95rem;">2. Ketamine Administration</h3>
      <p style="margin:0;">You take an oral ketamine tablet under your tongue and let it dissolve. The medicine begins working within 20-30 minutes.</p>
    </div>
    <div style="border-left:3px solid #0d9488;padding-left:1.25rem;margin-bottom:1.25rem;">
      <h3 style="font-weight:700;color:#111827;margin:0 0 0.35rem;font-size:0.95rem;">3. The Experience</h3>
      <p style="margin:0;">Over 45-90 minutes, you may experience deep relaxation, vivid imagery, or emotional insights. An eye mask and calming music are recommended. The effects gradually subside over about 2 hours.</p>
    </div>
    <div style="border-left:3px solid #0d9488;padding-left:1.25rem;margin-bottom:1.25rem;">
      <h3 style="font-weight:700;color:#111827;margin:0 0 0.35rem;font-size:0.95rem;">4. Integration</h3>
      <p style="margin:0;">After the session, a <a href="/ketamine-therapist-directory" style="color:#0d9488;text-decoration:underline;">trained therapist</a> helps you process the experience and apply insights to your daily life. This is where lasting change happens.</p>
    </div>
  </section>

  <!-- Video -->
  <div style="margin-bottom:2.5rem;">
    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">How to Prepare for Your Session</h2>
    <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;">
      <iframe src="https://www.youtube.com/embed/9KCRmNtZnC0" title="How to Prepare for Ketamine Therapy - Isha Health" frameborder="0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>
    </div>
  </div>

  <section style="margin-bottom:2.5rem;">
    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">Conditions Treated</h2>
    <p style="margin-bottom:1rem;">Ketamine-assisted therapy has shown effectiveness for:</p>
    <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
      <a href="/ketamine-therapy-for-depression" style="display:inline-block;padding:0.5rem 1rem;border:1px solid #e5e7eb;border-radius:6px;text-decoration:none;color:#111827;font-size:0.85rem;">Depression</a>
      <a href="/conditions/treatment-resistant-depression" style="display:inline-block;padding:0.5rem 1rem;border:1px solid #e5e7eb;border-radius:6px;text-decoration:none;color:#111827;font-size:0.85rem;">Treatment-Resistant Depression</a>
      <a href="/ketamine-therapy-for-anxiety" style="display:inline-block;padding:0.5rem 1rem;border:1px solid #e5e7eb;border-radius:6px;text-decoration:none;color:#111827;font-size:0.85rem;">Anxiety</a>
      <a href="/conditions/ptsd" style="display:inline-block;padding:0.5rem 1rem;border:1px solid #e5e7eb;border-radius:6px;text-decoration:none;color:#111827;font-size:0.85rem;">PTSD</a>
      <a href="/conditions/ocd" style="display:inline-block;padding:0.5rem 1rem;border:1px solid #e5e7eb;border-radius:6px;text-decoration:none;color:#111827;font-size:0.85rem;">OCD</a>
      <a href="/conditions/suicidal-ideation" style="display:inline-block;padding:0.5rem 1rem;border:1px solid #e5e7eb;border-radius:6px;text-decoration:none;color:#111827;font-size:0.85rem;">Suicidal Ideation</a>
      <a href="/conditions/bipolar-depression" style="display:inline-block;padding:0.5rem 1rem;border:1px solid #e5e7eb;border-radius:6px;text-decoration:none;color:#111827;font-size:0.85rem;">Bipolar Depression</a>
    </div>
  </section>

  <section style="margin-bottom:2.5rem;">
    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">Is It Safe?</h2>
    <p>Yes. Ketamine has been used safely in medicine for over 50 years. It's <a href="/post/is-ketamine-legal" style="color:#0d9488;text-decoration:underline;">FDA-approved as an anesthetic</a> and prescribed off-label for mental health conditions by licensed physicians.</p>
    <p style="margin-top:0.75rem;">At therapeutic doses under clinical supervision, side effects are mild and temporary:</p>
    <ul style="padding-left:1.25rem;margin-top:0.5rem;">
      <li>Temporary dissociation (feeling of detachment)</li>
      <li>Mild nausea or dizziness</li>
      <li>Slight increase in blood pressure</li>
      <li>Mild headache</li>
    </ul>
    <p style="margin-top:0.75rem;">These typically resolve within a few hours. Read our full <a href="/safety-information-for-ketamine-treatment" style="color:#0d9488;text-decoration:underline;">safety information</a>.</p>
  </section>

  <!-- Outcomes -->
  <div style="background:#f0fdfa;border:1px solid #ccfbf1;border-radius:10px;padding:1.5rem;text-align:center;margin-bottom:2.5rem;">
    <p style="font-family:'Libre Baskerville',serif;font-size:1.6rem;font-weight:700;color:#0d9488;margin-bottom:0.25rem;">88.8%</p>
    <p style="font-weight:600;color:#0f766e;margin-bottom:0.5rem;">of Isha Health patients with moderate-to-severe depression show measurable improvement</p>
    <p style="font-size:0.85rem;color:#6b7280;">Based on validated PHQ-9 assessments across 500+ patients. <a href="/outcomes" style="color:#0d9488;text-decoration:underline;">See full outcomes report →</a></p>
  </div>

  <!-- Patient Video -->
  <div style="margin-bottom:2.5rem;">
    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">Patient Story: Joseph's Experience</h2>
    <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;">
      <iframe src="https://www.youtube.com/embed/MutkPa2btzE" title="Joseph's Ketamine Therapy Testimonial - Isha Health" frameborder="0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>
    </div>
    <p style="font-size:0.85rem;color:#6b7280;margin-top:0.75rem;font-style:italic;">"I found myself enjoying myself in a way I had never been able to." — Joseph, Cambria, CA</p>
  </div>

  <section style="margin-bottom:2.5rem;">
    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">Getting Started</h2>
    <p>If you've tried traditional treatments with limited success, ketamine-assisted therapy may help. Here's how to take the next step:</p>
    <div style="margin-top:1rem;">
      <p style="margin-bottom:0.75rem;"><strong>Already working with a therapist?</strong> Ask them about incorporating KAP into your treatment plan, or have them <a href="/collaborate-with-isha-health" style="color:#0d9488;text-decoration:underline;">collaborate with Isha Health</a>.</p>
      <p style="margin-bottom:0.75rem;"><strong>Looking for a KAP therapist?</strong> Browse our <a href="/ketamine-therapist-directory" style="color:#0d9488;text-decoration:underline;">clinician directory</a> with 600+ therapists trained in ketamine-assisted psychotherapy.</p>
      <p><strong>Ready to start?</strong> Book a 60-minute consultation with an Isha Health physician.</p>
    </div>
  </section>

  <!-- CTA -->
  <div style="text-align:center;padding:2rem 0;">
    <a href="/appointment" style="display:inline-block;background-color:#0d9488;color:#fff;padding:0.9rem 2.5rem;border-radius:8px;text-decoration:none;font-weight:600;font-size:1rem;">Book a Consultation</a>
    <p style="font-size:0.85rem;color:#6b7280;margin-top:0.75rem;">$398 · 60 minutes · Available in AZ, CA, CO, FL, GA, OR, TX, WA</p>
  </div>

  <!-- Related -->
  <div style="border-top:1px solid #e5e7eb;padding-top:1.5rem;">
    <p style="font-weight:600;color:#111827;margin-bottom:0.75rem;">Learn more:</p>
    <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
      <a href="/guide/ketamine-therapy" style="display:inline-block;padding:0.4rem 0.8rem;border:1px solid #d1d5db;border-radius:6px;text-decoration:none;color:#374151;font-size:0.8rem;">Complete Guide to Ketamine Therapy</a>
      <a href="/online-ketamine-therapy" style="display:inline-block;padding:0.4rem 0.8rem;border:1px solid #d1d5db;border-radius:6px;text-decoration:none;color:#374151;font-size:0.8rem;">How Online Ketamine Therapy Works</a>
      <a href="/pricing" style="display:inline-block;padding:0.4rem 0.8rem;border:1px solid #d1d5db;border-radius:6px;text-decoration:none;color:#374151;font-size:0.8rem;">Pricing</a>
      <a href="/ketamine-therapy-reviews" style="display:inline-block;padding:0.4rem 0.8rem;border:1px solid #d1d5db;border-radius:6px;text-decoration:none;color:#374151;font-size:0.8rem;">Patient Reviews</a>
      <a href="/faq/ketamine-therapy" style="display:inline-block;padding:0.4rem 0.8rem;border:1px solid #d1d5db;border-radius:6px;text-decoration:none;color:#374151;font-size:0.8rem;">55-Question FAQ</a>
    </div>
  </div>

</div>
        `,
      }}
    />
  );
}
