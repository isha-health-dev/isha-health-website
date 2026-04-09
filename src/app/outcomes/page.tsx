import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Patient Outcomes & Clinical Results',
  description:
    '88.8% of Isha Health patients with moderate-to-severe depression show measurable improvement. Based on 546 patients and 1,900+ assessments.',
  alternates: { canonical: 'https://isha.health/outcomes' },
  openGraph: {
    title: 'Patient Outcomes | Isha Health',
    description:
      '88.79% improvement rate. 546 patients. 92.64% anxiety remission. Real clinical data from Isha Health.',
    type: 'website',
    url: 'https://isha.health/outcomes',
    images: ['/images/isha_logo.webp'],
  },
};

export default function OutcomesPage() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div style="padding:0 0 2rem;">

  <script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'MedicalStudy',
    name: 'Isha Health Ketamine Therapy Patient Outcomes',
    description: '88.79% of patients with moderate-to-severe depression symptoms demonstrated measurable improvement through the Isha Health ketamine therapy protocol.',
    studySubject: { '@type': 'MedicalCondition', name: 'Treatment-Resistant Depression' },
    sponsor: { '@type': 'Organization', name: 'Isha Health', url: 'https://isha.health' },
  })}</script>

  <div style="text-align:center;padding:3rem 1.5rem 1.5rem;">
    <h1 style="font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#111827;margin:0;">Patient Outcomes</h1>
  </div>

  <div style="max-width:800px;margin:0 auto;padding:1.5rem;" style="max-width:900px;margin:0 auto;padding:2rem 1.5rem;">

    <nav aria-label="Breadcrumb" style="font-size:0.8rem;color:#6b7280;margin-bottom:1.5rem;font-family:'Poppins',sans-serif;">
      <a href="/" style="color:#0d9488;text-decoration:none;">Home</a> /
      <span style="color:#9ca3af;">Outcomes</span>
    </nav>

    <p style="font-family:'Poppins',sans-serif;font-size:1.1rem;line-height:1.8;color:#374151;text-align:center;max-width:700px;margin:0 auto 3rem;text-wrap:pretty;">
      We believe in transparency. These results are derived from de-identified clinical data across 546 patients treated through the Isha Health ketamine therapy protocol.
    </p>

    <!-- Headline stats -->
    <div style="display:flex;flex-wrap:wrap;gap:1.5rem;justify-content:center;margin-bottom:3rem;">
      <div style="flex:1 1 180px;max-width:220px;text-align:center;padding:2rem 1rem;background:#f0fdfa;border-radius:12px;border:1px solid #ccfbf1;">
        <p style="font-family:'Libre Baskerville',serif;font-size:2.5rem;font-weight:700;color:#0f766e;margin-bottom:0.25rem;">88.8%</p>
        <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#4b5563;line-height:1.4;">of patients with moderate-to-severe symptoms showed measurable improvement</p>
      </div>
      <div style="flex:1 1 180px;max-width:220px;text-align:center;padding:2rem 1rem;background:#f0fdfa;border-radius:12px;border:1px solid #ccfbf1;">
        <p style="font-family:'Libre Baskerville',serif;font-size:2.5rem;font-weight:700;color:#0f766e;margin-bottom:0.25rem;">92.6%</p>
        <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#4b5563;line-height:1.4;">achieved minimal anxiety (GAD-7 &lt; 5) during treatment</p>
      </div>
      <div style="flex:1 1 180px;max-width:220px;text-align:center;padding:2rem 1rem;background:#f0fdfa;border-radius:12px;border:1px solid #ccfbf1;">
        <p style="font-family:'Libre Baskerville',serif;font-size:2.5rem;font-weight:700;color:#0f766e;margin-bottom:0.25rem;">546</p>
        <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#4b5563;line-height:1.4;">patients analyzed with longitudinal tracking</p>
      </div>
      <div style="flex:1 1 180px;max-width:220px;text-align:center;padding:2rem 1rem;background:#f0fdfa;border-radius:12px;border:1px solid #ccfbf1;">
        <p style="font-family:'Libre Baskerville',serif;font-size:2.5rem;font-weight:700;color:#0f766e;margin-bottom:0.25rem;">99.1%</p>
        <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#4b5563;line-height:1.4;">retention rate — only 0.92% single-session dropout</p>
      </div>
    </div>

    <!-- Depression outcomes -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Depression outcomes (PHQ-9)</h2>

      <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1.5rem;">
        88.79% of patients who began treatment with moderate-to-severe depressive symptoms (baseline PHQ-9 ≥ 10) demonstrated measurable symptomatic improvement during their treatment course with Isha Health.
      </p>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin-bottom:1.5rem;">
        <div style="padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;">
          <p style="font-family:'Poppins',sans-serif;font-size:0.75rem;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.25rem;">Average PHQ-9 reduction</p>
          <p style="font-family:'Libre Baskerville',serif;font-size:1.75rem;font-weight:700;color:#111827;">-4.90 points</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;">Moderate-to-severe group (baseline ≥ 10)</p>
        </div>
        <div style="padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;">
          <p style="font-family:'Poppins',sans-serif;font-size:0.75rem;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.25rem;">All patients reduction</p>
          <p style="font-family:'Libre Baskerville',serif;font-size:1.75rem;font-weight:700;color:#111827;">-3.55 points</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;">Across all severity levels</p>
        </div>
        <div style="padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;">
          <p style="font-family:'Poppins',sans-serif;font-size:0.75rem;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.25rem;">Assessments per patient</p>
          <p style="font-family:'Libre Baskerville',serif;font-size:1.75rem;font-weight:700;color:#111827;">3.5 avg</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;">Longitudinal clinical tracking</p>
        </div>
      </div>
    </div>

    <!-- Speed of response -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Speed of response</h2>

      <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1.5rem;">
        One of ketamine's key advantages over traditional antidepressants is rapid onset. Our data confirms this at scale.
      </p>

      <div style="background:#f9fafb;border-radius:12px;padding:2rem;border:1px solid #e5e7eb;margin-bottom:1.5rem;">
        <div style="display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap;">
          <div style="flex:0 0 auto;">
            <p style="font-family:'Libre Baskerville',serif;font-size:3rem;font-weight:700;color:#0f766e;">1.29</p>
          </div>
          <div>
            <p style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;">Average sessions to first measurable improvement</p>
            <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#6b7280;line-height:1.5;">Patients typically see their first measurable PHQ-9 score reduction by their second clinical assessment — compared to the 4-6 week lead time typically required for SSRIs and SNRIs.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Anxiety outcomes -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Anxiety outcomes (GAD-7)</h2>

      <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1rem;">
        While ketamine is most commonly discussed for depression, our data shows equally compelling results for anxiety.
      </p>

      <div style="background:#f0fdfa;border-radius:12px;padding:2rem;border:1px solid #ccfbf1;">
        <p style="font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#0f766e;margin-bottom:0.5rem;">92.64% achieved minimal anxiety</p>
        <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.5;">Of patients tracked on the GAD-7, 92.64% reached a score below 5 — the threshold for "minimal anxiety" — at some point during their treatment course. This suggests that ketamine therapy may address both depressive and anxiety symptoms simultaneously.</p>
      </div>
    </div>

    <!-- Retention and engagement -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Patient retention and engagement</h2>

      <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1.5rem;">
        Effective treatment means nothing if patients don't stay engaged. Our retention data suggests a high level of patient commitment to the protocol.
      </p>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;">
        <div style="padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;">
          <p style="font-family:'Poppins',sans-serif;font-size:0.75rem;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.25rem;">Average treatment duration</p>
          <p style="font-family:'Libre Baskerville',serif;font-size:1.75rem;font-weight:700;color:#111827;">128 days</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;">~4 months of active engagement</p>
        </div>
        <div style="padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;">
          <p style="font-family:'Poppins',sans-serif;font-size:0.75rem;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.25rem;">Single-session dropout</p>
          <p style="font-family:'Libre Baskerville',serif;font-size:1.75rem;font-weight:700;color:#111827;">0.92%</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;">Only 5 of 546 patients</p>
        </div>
        <div style="padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;">
          <p style="font-family:'Poppins',sans-serif;font-size:0.75rem;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.25rem;">Average mood score</p>
          <p style="font-family:'Libre Baskerville',serif;font-size:1.75rem;font-weight:700;color:#111827;">5.39 / 10</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;">Stable baseline across ~3,000 entries</p>
        </div>
      </div>
    </div>

    <!-- Methodology -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Methodology</h2>

      <div style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">
        <p style="margin-bottom:1rem;">This data is derived from a retrospective analysis of de-identified clinical records from 546 unique patients treated through the Isha Health ketamine-assisted therapy protocol.</p>

        <p style="margin-bottom:0.5rem;font-weight:600;">Assessment tools:</p>
        <ul style="padding-left:1.25rem;margin-bottom:1rem;">
          <li><strong>PHQ-9</strong> (Patient Health Questionnaire-9) — validated 9-item depression severity measure, scored 0-27</li>
          <li><strong>GAD-7</strong> (Generalized Anxiety Disorder-7) — validated 7-item anxiety severity measure, scored 0-21</li>
          <li><strong>Self-reported mood scores</strong> (1-10 scale) — collected at regular intervals during treatment</li>
        </ul>

        <p style="margin-bottom:0.5rem;font-weight:600;">Definitions:</p>
        <ul style="padding-left:1.25rem;margin-bottom:1rem;">
          <li><strong>Moderate-to-severe symptoms:</strong> Baseline PHQ-9 score ≥ 10</li>
          <li><strong>Measurable improvement:</strong> Any reduction in PHQ-9 score from baseline during the treatment course</li>
          <li><strong>Minimal anxiety:</strong> GAD-7 score &lt; 5 achieved at any point during treatment</li>
          <li><strong>Single-session dropout:</strong> Patients with only one recorded clinical assessment</li>
        </ul>

        <p style="margin-bottom:1rem;font-weight:600;">Limitations:</p>
        <ul style="padding-left:1.25rem;margin-bottom:1rem;">
          <li>This is a retrospective observational analysis, not a randomized controlled trial</li>
          <li>There is no placebo control group — some improvement may be attributable to natural symptom fluctuation, placebo response, or concurrent treatments</li>
          <li>PHQ-9 improvement was defined as any score reduction, which includes clinically modest improvements</li>
          <li>Patients who discontinued treatment early may have different outcomes than those who completed the full protocol</li>
        </ul>

        <p>These results are consistent with published literature on ketamine for treatment-resistant depression, including the landmark <a href="/post/ketamine-vs-midazolam-depression-trial" style="color:#0d9488;text-decoration:underline;">Murrough et al. (2013) trial</a> and <a href="/post/ketamine-rapid-antidepressant-nmda-glutamate-mechanism" style="color:#0d9488;text-decoration:underline;">Zarate et al. (2006) study</a>.</p>
      </div>
    </div>

    <!-- What this means -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">What this means for patients</h2>

      <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1rem;">
        These numbers tell a clear story: most patients who begin ketamine therapy with Isha Health experience meaningful improvement, many within their first few sessions. But the data also shows something equally important — that sustained improvement requires sustained engagement.
      </p>
      <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1rem;">
        Our average treatment duration of 128 days reflects patients who commit to the maintenance phase, not just the initial breakthrough. This is consistent with our clinical philosophy: <strong>remission is not a destination — it is a maintained state.</strong>
      </p>
      <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;">
        If you have been struggling with depression or anxiety that hasn't responded to traditional treatments, these results suggest that ketamine therapy may offer a path forward — particularly when combined with <a href="/post/how-to-maximize-the-treatment-efficacy-of-ketamine-sessions" style="color:#0d9488;text-decoration:underline;">proper preparation</a>, <a href="/post/ketamine-assisted-psychotherapy-outcomes" style="color:#0d9488;text-decoration:underline;">psychotherapy integration</a>, and a commitment to <a href="/post/case-study-julian-ketamine-maintenance-treatment-resistant-depression" style="color:#0d9488;text-decoration:underline;">ongoing maintenance</a>.
      </p>
    </div>

    <!-- CTA -->
    <div style="background-color:#f0fdfa;padding:2.5rem;border-radius:12px;text-align:center;border:1px solid #ccfbf1;">
      <p style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#0f766e;margin-bottom:0.5rem;">Ready to see if ketamine therapy is right for you?</p>
      <p style="font-family:'Poppins',sans-serif;color:#4b5563;margin-bottom:1.5rem;font-size:0.95rem;">Book a 60-minute consultation with an Isha Health physician.</p>
      <a href="/appointment" style="display:inline-block;background-color:#0d9488;color:#fff;padding:0.85rem 2.5rem;border-radius:8px;text-decoration:none;font-weight:600;font-size:1rem;font-family:'Poppins',sans-serif;">Check Appointment Availability</a>
    </div>

    <p style="font-family:'Poppins',sans-serif;font-size:0.75rem;color:#9ca3af;text-align:center;margin-top:2rem;">
      Data current as of April 2026. Based on de-identified retrospective analysis of 546 patients. Individual results may vary. Ketamine is prescribed off-label for depression and anxiety — it is not FDA-approved for these indications. <a href="/safety-information-for-ketamine-treatment" style="color:#9ca3af;text-decoration:underline;">Safety information</a>.
    </p>

  </div>
</div>`,
      }}
    />
  );
}
