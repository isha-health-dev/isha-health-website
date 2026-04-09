import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ketamine Therapy Resources & Guides',
  description:
    'Comprehensive resources on ketamine therapy for depression, anxiety, PTSD, and more.',
  alternates: { canonical: 'https://isha.health/resources' },
  openGraph: {
    title: 'Ketamine Therapy Resources & Guides | Isha',
    description: 'Comprehensive resources on ketamine therapy. Guides, research, comparisons, and condition-specific information.',
    type: 'website',
    url: 'https://isha.health/resources',
  },
};

export default function ResourcesPage() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="section-base white-section static-page">
  <div class="hero-isha">
    <h1 class="heading static-heading">Ketamine Therapy Resources</h1>
  </div>
  <div class="section-wrapper" style="max-width:1000px;margin:0 auto;padding:2rem 1.5rem;">

    <p style="font-family:'Poppins',sans-serif;font-size:1.05rem;line-height:1.8;color:#4b5563;text-align:center;margin-bottom:3rem;max-width:700px;margin-left:auto;margin-right:auto;text-wrap:pretty;">
      Everything you need to understand ketamine therapy — from how it works to finding the right provider. Evidence-based information from the Isha Health clinical team.
    </p>

    <!-- Guides -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Complete Guides</h2>
      <div style="display:flex;flex-wrap:wrap;gap:1rem;">
        <a href="/guide/ketamine-therapy" style="flex:1 1 280px;padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;text-decoration:none;color:inherit;background:#fff;">
          <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#111827;font-size:1rem;margin-bottom:0.35rem;">The Complete Guide to Ketamine Therapy</p>
          <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.85rem;color:#6b7280;line-height:1.5;">Everything you need to know — how it works, what to expect, cost, safety, and how to get started.</p>
        </a>
        <a href="/guide/ketamine-for-depression" style="flex:1 1 280px;padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;text-decoration:none;color:inherit;background:#fff;">
          <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#111827;font-size:1rem;margin-bottom:0.35rem;">Ketamine for Depression</p>
          <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.85rem;color:#6b7280;line-height:1.5;">Clinical evidence, how it compares to other treatments, and what results to expect.</p>
        </a>
        <a href="/guide/choosing-ketamine-provider" style="flex:1 1 280px;padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;text-decoration:none;color:inherit;background:#fff;">
          <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#111827;font-size:1rem;margin-bottom:0.35rem;">How to Choose a Provider</p>
          <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.85rem;color:#6b7280;line-height:1.5;">Red flags, questions to ask, at-home vs clinic, and what to look for in a ketamine provider.</p>
        </a>
      </div>
    </div>

    <!-- Getting Started -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Getting Started</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1rem;">
        <a href="/online-ketamine-therapy" style="padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;text-decoration:none;color:inherit;background:#fff;">
          <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#111827;font-size:1rem;margin-bottom:0.35rem;">Online Ketamine Therapy</p>
          <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.85rem;color:#6b7280;line-height:1.5;">How at-home ketamine therapy works, who it's for, and what to expect from telehealth treatment.</p>
        </a>
        <a href="/ketamine-therapy-cost" style="padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;text-decoration:none;color:inherit;background:#fff;">
          <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#111827;font-size:1rem;margin-bottom:0.35rem;">Ketamine Therapy Cost</p>
          <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.85rem;color:#6b7280;line-height:1.5;">Pricing breakdown for IV, oral, and Spravato — plus insurance and payment options.</p>
        </a>
        <a href="/ketamine-therapy-reviews" style="padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;text-decoration:none;color:inherit;background:#fff;">
          <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#111827;font-size:1rem;margin-bottom:0.35rem;">Ketamine Therapy Reviews</p>
          <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.85rem;color:#6b7280;line-height:1.5;">Real patient experiences and what the evidence says about ketamine outcomes.</p>
        </a>
        <a href="/compare/ketamine-providers" style="padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;text-decoration:none;color:inherit;background:#fff;">
          <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#111827;font-size:1rem;margin-bottom:0.35rem;">Compare Ketamine Providers</p>
          <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.85rem;color:#6b7280;line-height:1.5;">Side-by-side comparison of online ketamine therapy providers, clinics, and Spravato.</p>
        </a>
        <a href="/outcomes" style="padding:1.25rem;border:1px solid #e5e7eb;border-radius:10px;text-decoration:none;color:inherit;background:#fff;">
          <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#111827;font-size:1rem;margin-bottom:0.35rem;">Clinical Outcomes</p>
          <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.85rem;color:#6b7280;line-height:1.5;">88.8% improvement rate across 546 patients — our published outcomes data.</p>
        </a>
      </div>
    </div>

    <!-- Conditions -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Conditions We Treat</h2>
      <div style="display:flex;flex-wrap:wrap;gap:0.75rem;">
        <a href="/ketamine-therapy-for-depression" style="padding:0.6rem 1.25rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:#111827;font-family:'Poppins',sans-serif;font-size:0.9rem;background:#fff;">Depression</a>
        <a href="/ketamine-therapy-for-anxiety" style="padding:0.6rem 1.25rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:#111827;font-family:'Poppins',sans-serif;font-size:0.9rem;background:#fff;">Anxiety</a>
        <a href="/conditions/ptsd" style="padding:0.6rem 1.25rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:#111827;font-family:'Poppins',sans-serif;font-size:0.9rem;background:#fff;">PTSD</a>
        <a href="/conditions/treatment-resistant-depression" style="padding:0.6rem 1.25rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:#111827;font-family:'Poppins',sans-serif;font-size:0.9rem;background:#fff;">Treatment-Resistant Depression</a>
        <a href="/conditions/ocd" style="padding:0.6rem 1.25rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:#111827;font-family:'Poppins',sans-serif;font-size:0.9rem;background:#fff;">OCD</a>
        <a href="/conditions/bipolar-depression" style="padding:0.6rem 1.25rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:#111827;font-family:'Poppins',sans-serif;font-size:0.9rem;background:#fff;">Bipolar Depression</a>
        <a href="/conditions/chronic-pain" style="padding:0.6rem 1.25rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:#111827;font-family:'Poppins',sans-serif;font-size:0.9rem;background:#fff;">Chronic Pain</a>
        <a href="/conditions/postpartum-depression" style="padding:0.6rem 1.25rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:#111827;font-family:'Poppins',sans-serif;font-size:0.9rem;background:#fff;">Postpartum Depression</a>
        <a href="/conditions/suicidal-ideation" style="padding:0.6rem 1.25rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:#111827;font-family:'Poppins',sans-serif;font-size:0.9rem;background:#fff;">Suicidal Ideation</a>
        <a href="/conditions/alcohol-addiction" style="padding:0.6rem 1.25rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:#111827;font-family:'Poppins',sans-serif;font-size:0.9rem;background:#fff;">Alcohol Use Disorder</a>
      </div>
    </div>

    <!-- Comparisons -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Treatment Comparisons</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1rem;">
        <a href="/compare/ketamine-vs-antidepressants" style="padding:1rem 1.25rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:#111827;font-family:'Poppins',sans-serif;font-size:0.9rem;background:#fff;">Ketamine vs Antidepressants (SSRIs)</a>
        <a href="/compare/ketamine-vs-tms" style="padding:1rem 1.25rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:#111827;font-family:'Poppins',sans-serif;font-size:0.9rem;background:#fff;">Ketamine vs TMS</a>
        <a href="/compare/ketamine-vs-ect" style="padding:1rem 1.25rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:#111827;font-family:'Poppins',sans-serif;font-size:0.9rem;background:#fff;">Ketamine vs ECT</a>
        <a href="/compare/ketamine-vs-therapy" style="padding:1rem 1.25rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:#111827;font-family:'Poppins',sans-serif;font-size:0.9rem;background:#fff;">Ketamine vs Traditional Therapy</a>
        <a href="/compare/oral-ketamine-vs-iv-infusion" style="padding:1rem 1.25rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:#111827;font-family:'Poppins',sans-serif;font-size:0.9rem;background:#fff;">Oral Ketamine vs IV Infusion</a>
        <a href="/compare/spravato-vs-generic-ketamine" style="padding:1rem 1.25rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:#111827;font-family:'Poppins',sans-serif;font-size:0.9rem;background:#fff;">Spravato vs Generic Ketamine</a>
        <a href="/compare/at-home-ketamine-vs-clinic" style="padding:1rem 1.25rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:#111827;font-family:'Poppins',sans-serif;font-size:0.9rem;background:#fff;">At-Home Ketamine vs Clinic</a>
        <a href="/compare/ketamine-vs-psilocybin" style="padding:1rem 1.25rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:#111827;font-family:'Poppins',sans-serif;font-size:0.9rem;background:#fff;">Ketamine vs Psilocybin</a>
      </div>
    </div>

    <!-- Research -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Research & Evidence</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1rem;">
        <a href="/post/ketamine-rapid-antidepressant-nmda-glutamate-mechanism" style="padding:1rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:inherit;background:#fff;">
          <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#111827;font-size:0.9rem;margin-bottom:0.25rem;">How Ketamine Works as an Antidepressant</p>
          <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.8rem;color:#6b7280;">NMDA receptor mechanism and the landmark Zarate 2006 trial</p>
        </a>
        <a href="/post/ketamine-bdnf-neuroplasticity" style="padding:1rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:inherit;background:#fff;">
          <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#111827;font-size:0.9rem;margin-bottom:0.25rem;">Ketamine and BDNF Neuroplasticity</p>
          <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.8rem;color:#6b7280;">How ketamine promotes brain plasticity and new neural connections</p>
        </a>
        <a href="/post/ketamine-long-term-safety-profile" style="padding:1rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:inherit;background:#fff;">
          <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#111827;font-size:0.9rem;margin-bottom:0.25rem;">Ketamine Long-Term Safety</p>
          <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.8rem;color:#6b7280;">Systematic review of side effects: bladder, cognition, dependence</p>
        </a>
        <a href="/post/ketamine-vs-midazolam-depression-trial" style="padding:1rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:inherit;background:#fff;">
          <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#111827;font-size:0.9rem;margin-bottom:0.25rem;">Ketamine vs Midazolam Trial</p>
          <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.8rem;color:#6b7280;">The gold-standard placebo-controlled depression trial</p>
        </a>
        <a href="/post/sublingual-oral-ketamine-real-world-outcomes" style="padding:1rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:inherit;background:#fff;">
          <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#111827;font-size:0.9rem;margin-bottom:0.25rem;">Oral Ketamine Real-World Outcomes</p>
          <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.8rem;color:#6b7280;">What the data shows for sublingual ketamine outside clinical trials</p>
        </a>
        <a href="/outcomes" style="padding:1rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:inherit;background:#fff;">
          <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#111827;font-size:0.9rem;margin-bottom:0.25rem;">Clinical Outcomes Report</p>
          <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.8rem;color:#6b7280;">88.8% improvement rate across 546 patients — PHQ-9, GAD-7, and retention data</p>
        </a>
        <a href="/blog" style="padding:1rem;border:1px solid #0d9488;border-radius:8px;text-decoration:none;color:#0d9488;background:#f0fdfa;text-align:center;">
          <p style="font-family:'Poppins',sans-serif;font-weight:600;font-size:0.9rem;">View all research articles →</p>
        </a>
      </div>
    </div>

    <!-- Legal & Regulatory -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Legal & Regulatory</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1rem;">
        <a href="/post/is-ketamine-legal" style="padding:1rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:inherit;background:#fff;">
          <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#111827;font-size:0.9rem;margin-bottom:0.25rem;">Is Ketamine Legal? State-by-State Guide</p>
          <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.8rem;color:#6b7280;">Federal status, off-label prescribing, telehealth rules, and your 9-state guide</p>
        </a>
        <a href="/post/dea-extends-telemedicine-prescribing" style="padding:1rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:inherit;background:#fff;">
          <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#111827;font-size:0.9rem;margin-bottom:0.25rem;">DEA Extends Telemedicine Prescribing</p>
          <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.8rem;color:#6b7280;">What the latest DEA rules mean for at-home ketamine therapy</p>
        </a>
        <a href="/post/the-fda-approval-process-for-ketamine-treatment-why-hasnt-it-happened-yet" style="padding:1rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:inherit;background:#fff;">
          <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#111827;font-size:0.9rem;margin-bottom:0.25rem;">FDA Approval for Ketamine: Why Hasn't It Happened?</p>
          <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.8rem;color:#6b7280;">The regulatory path for ketamine as a depression treatment</p>
        </a>
        <a href="/post/psychedelic-therapy-legislation-expands-across-the-u-s" style="padding:1rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:inherit;background:#fff;">
          <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#111827;font-size:0.9rem;margin-bottom:0.25rem;">Psychedelic Therapy Legislation in the U.S.</p>
          <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.8rem;color:#6b7280;">How state laws are expanding access to psychedelic-assisted therapies</p>
        </a>
      </div>
    </div>

    <!-- Practical Guides -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Practical Guides</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1rem;">
        <a href="/post/9-things-you-should-do-before-your-ketamine-dosing-sessions" style="padding:1rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:inherit;background:#fff;">
          <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#111827;font-size:0.9rem;">How to Prepare for Ketamine Sessions</p>
        </a>
        <a href="/post/what-to-expect-after-taking-oral-ketamine" style="padding:1rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:inherit;background:#fff;">
          <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#111827;font-size:0.9rem;">What to Expect After Oral Ketamine</p>
        </a>
        <a href="/post/how-to-maximize-the-treatment-efficacy-of-ketamine-sessions" style="padding:1rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:inherit;background:#fff;">
          <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#111827;font-size:0.9rem;">Maximizing Ketamine Treatment Efficacy</p>
        </a>
        <a href="/post/intention-setting-for-ketamine-treatment" style="padding:1rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:inherit;background:#fff;">
          <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#111827;font-size:0.9rem;">Intention Setting for Ketamine</p>
        </a>
        <a href="/post/how-to-do-journaling-for-ketamine-assisted-therapy" style="padding:1rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:inherit;background:#fff;">
          <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#111827;font-size:0.9rem;">Journaling for Ketamine Therapy</p>
        </a>
        <a href="/post/ketamine-therapy-insurance-superbill" style="padding:1rem;border:1px solid #e5e7eb;border-radius:8px;text-decoration:none;color:inherit;background:#fff;">
          <p style="font-family:'Poppins',sans-serif;font-weight:600;color:#111827;font-size:0.9rem;">Insurance & Superbills</p>
        </a>
      </div>
    </div>

    <!-- Locations -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Available Locations</h2>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#6b7280;margin-bottom:1rem;">Isha Health offers physician-led at-home ketamine therapy via telemedicine in these states:</p>
      <div style="display:flex;flex-wrap:wrap;gap:0.75rem;">
        <a href="/locations/online-at-home-ketamine-therapy-in-arizona" style="padding:0.5rem 1rem;border:1px solid #e5e7eb;border-radius:6px;text-decoration:none;color:#111827;font-family:'Poppins',sans-serif;font-size:0.85rem;background:#fff;">Arizona</a>
        <a href="/locations/online-at-home-ketamine-therapy-in-california" style="padding:0.5rem 1rem;border:1px solid #e5e7eb;border-radius:6px;text-decoration:none;color:#111827;font-family:'Poppins',sans-serif;font-size:0.85rem;background:#fff;">California</a>
        <a href="/locations/online-at-home-ketamine-therapy-in-colorado" style="padding:0.5rem 1rem;border:1px solid #e5e7eb;border-radius:6px;text-decoration:none;color:#111827;font-family:'Poppins',sans-serif;font-size:0.85rem;background:#fff;">Colorado</a>
        <a href="/locations/online-at-home-ketamine-therapy-in-florida" style="padding:0.5rem 1rem;border:1px solid #e5e7eb;border-radius:6px;text-decoration:none;color:#111827;font-family:'Poppins',sans-serif;font-size:0.85rem;background:#fff;">Florida</a>
        <a href="/locations/online-at-home-ketamine-therapy-in-georgia" style="padding:0.5rem 1rem;border:1px solid #e5e7eb;border-radius:6px;text-decoration:none;color:#111827;font-family:'Poppins',sans-serif;font-size:0.85rem;background:#fff;">Georgia</a>
        <a href="/locations/online-at-home-ketamine-therapy-in-new-york" style="padding:0.5rem 1rem;border:1px solid #e5e7eb;border-radius:6px;text-decoration:none;color:#111827;font-family:'Poppins',sans-serif;font-size:0.85rem;background:#fff;">New York</a>
        <a href="/locations/online-at-home-ketamine-therapy-in-oregon" style="padding:0.5rem 1rem;border:1px solid #e5e7eb;border-radius:6px;text-decoration:none;color:#111827;font-family:'Poppins',sans-serif;font-size:0.85rem;background:#fff;">Oregon</a>
        <a href="/locations/online-at-home-ketamine-therapy-in-texas" style="padding:0.5rem 1rem;border:1px solid #e5e7eb;border-radius:6px;text-decoration:none;color:#111827;font-family:'Poppins',sans-serif;font-size:0.85rem;background:#fff;">Texas</a>
        <a href="/locations/online-at-home-ketamine-therapy-in-washington" style="padding:0.5rem 1rem;border:1px solid #e5e7eb;border-radius:6px;text-decoration:none;color:#111827;font-family:'Poppins',sans-serif;font-size:0.85rem;background:#fff;">Washington</a>
      </div>
    </div>

    <!-- CTA -->
    <div style="background-color:#f0fdfa;padding:2.5rem;border-radius:12px;text-align:center;border:1px solid #ccfbf1;">
      <p style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#0f766e;margin-bottom:0.5rem;">Ready to get started?</p>
      <p style="font-family:'Poppins',sans-serif;color:#4b5563;margin-bottom:1.5rem;font-size:0.95rem;">Book a consultation with an Isha Health physician.</p>
      <a href="/appointment" style="display:inline-block;background-color:#0d9488;color:#fff;padding:0.85rem 2.5rem;border-radius:8px;text-decoration:none;font-weight:600;font-size:1rem;font-family:'Poppins',sans-serif;">Check Appointment Availability</a>
    </div>

  </div>
</div>`,
      }}
    />
  );
}
