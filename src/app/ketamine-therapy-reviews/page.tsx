import type { Metadata } from 'next';
import { buildOpenGraph } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Ketamine Therapy Reviews: Real Patient Stories',
  description:
    'Read real ketamine therapy reviews from 500+ Isha Health patients. 88.8% improvement rate, 92.6% anxiety remission. Patient testimonials and case studies.',
  alternates: { canonical: 'https://isha.health/ketamine-therapy-reviews' },
  openGraph: buildOpenGraph({
    title: 'Ketamine Therapy Reviews | Isha Health',
    description: 'Real patient reviews and testimonials. 88.8% improvement rate across 500+ patients. Read their stories.',
    path: '/ketamine-therapy-reviews',
  }),
  twitter: {
    card: 'summary_large_image',
    title: 'Ketamine Therapy Reviews | Isha Health',
    description:
      'Real patient stories. 88.8% improvement, 92.6% anxiety remission. 500+ patients treated.',
  },
};

export default function KetamineTherapyReviewsPage() {
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
        name: 'Does ketamine therapy really work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Clinical data from over 500 Isha Health patients shows that 88.8% of patients with moderate-to-severe depression experienced measurable improvement, and 92.6% achieved minimal anxiety levels during treatment. These results are consistent with published clinical research on ketamine for treatment-resistant depression.',
        },
      },
      {
        '@type': 'Question',
        name: 'How quickly will I see results from ketamine therapy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Many patients notice improvement within the first 1-2 sessions. Isha Health clinical data shows an average of 1.29 sessions to first measurable improvement, which is significantly faster than the 4-6 weeks typically required for traditional antidepressants like SSRIs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is ketamine therapy safe long-term?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ketamine has been used safely in medical settings for over 50 years. At the low doses prescribed for depression and anxiety, serious side effects are rare. Isha Health monitors patients with regular psychiatric evaluations and validated clinical assessments (PHQ-9, GAD-7) to ensure ongoing safety and efficacy.',
        },
      },
      {
        '@type': 'Question',
        name: "What is the success rate of Isha Health's ketamine therapy?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: '88.8% of Isha Health patients with moderate-to-severe depressive symptoms showed measurable improvement. 92.6% achieved minimal anxiety during treatment. The patient retention rate is 99.1%, with only 0.92% single-session dropout. These results are based on data from 546 patients and over 1,900 clinical assessments.',
        },
      },
    ],
  })}</script>

  <div style="text-align:center;padding:3rem 1.5rem 1.5rem;">
    <h1 style="font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#111827;margin:0;">Ketamine Therapy Reviews: Real Patient Stories</h1>
  </div>

  <div style="max-width:900px;margin:0 auto;padding:2rem 1.5rem;">

    <nav aria-label="Breadcrumb" style="font-size:0.8rem;color:#6b7280;margin-bottom:1.5rem;font-family:'Poppins',sans-serif;">
      <a href="/" style="color:#0d9488;text-decoration:none;">Home</a> /
      <span style="color:#9ca3af;">Ketamine Therapy Reviews</span>
    </nav>

    <p style="font-family:'Poppins',sans-serif;font-size:1.1rem;line-height:1.8;color:#374151;text-align:center;max-width:700px;margin:0 auto 3rem;text-wrap:pretty;">
      Real stories from real patients. These reviews are from people who have completed ketamine therapy through Isha Health for depression, anxiety, PTSD, and treatment-resistant conditions.
    </p>

    <!-- Outcomes summary -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Clinical Outcomes Summary</h2>

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
          <p style="font-family:'Libre Baskerville',serif;font-size:2.5rem;font-weight:700;color:#0f766e;margin-bottom:0.25rem;">500+</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#4b5563;line-height:1.4;">patients treated and tracked</p>
        </div>
      </div>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;text-align:center;">
        Based on de-identified clinical data. View our full <a href="/outcomes" style="color:#0d9488;text-decoration:underline;">outcomes report</a>.
      </p>
    </div>

    <!-- Patient testimonials -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Patient Testimonials</h2>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;">

        <div style="padding:1.5rem;background:#f9fafb;border-radius:12px;border:1px solid #e5e7eb;border-left:4px solid #0d9488;">
          <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;font-style:italic;margin-bottom:0.75rem;">&ldquo;Ketamine assisted therapy helped me so much to get out of my depression and PTSD. I never felt better in my life.&rdquo;</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;font-weight:500;">&mdash; Amber S, Brooklyn, NY</p>
        </div>

        <div style="padding:1.5rem;background:#f9fafb;border-radius:12px;border:1px solid #e5e7eb;border-left:4px solid #0d9488;">
          <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;font-style:italic;margin-bottom:0.75rem;">&ldquo;My anxiety is just gone. I barely think about it anymore.&rdquo;</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;font-weight:500;">&mdash; Patricia L, Santa Monica, CA</p>
        </div>

        <div style="padding:1.5rem;background:#f9fafb;border-radius:12px;border:1px solid #e5e7eb;border-left:4px solid #0d9488;">
          <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;font-style:italic;margin-bottom:0.75rem;">&ldquo;I tried IV ketamine for my TRD before. Isha&rsquo;s approach is gentler on my body and worked great.&rdquo;</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;font-weight:500;">&mdash; Laila L, New York, NY</p>
        </div>

        <div style="padding:1.5rem;background:#f9fafb;border-radius:12px;border:1px solid #e5e7eb;border-left:4px solid #0d9488;">
          <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;font-style:italic;margin-bottom:0.75rem;">&ldquo;You saved my life. My anxiety is under control, and I finally feel like myself again.&rdquo;</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;font-weight:500;">&mdash; Emily P, Miami, FL</p>
        </div>

        <div style="padding:1.5rem;background:#f9fafb;border-radius:12px;border:1px solid #e5e7eb;border-left:4px solid #0d9488;">
          <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;font-style:italic;margin-bottom:0.75rem;">&ldquo;I started ketamine therapy for my depression. It ended up also helping me stop drinking. I&rsquo;m sober for 6 months.&rdquo;</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;font-weight:500;">&mdash; Sergey M, San Francisco, CA</p>
        </div>

        <div style="padding:1.5rem;background:#f9fafb;border-radius:12px;border:1px solid #e5e7eb;border-left:4px solid #0d9488;">
          <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;font-style:italic;margin-bottom:0.75rem;">&ldquo;Ketamine really worked for my anxiety. I don&rsquo;t even remember when I last had a panic attack.&rdquo;</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;font-weight:500;">&mdash; Jared Y, Rochester, NY</p>
        </div>

        <div style="padding:1.5rem;background:#f9fafb;border-radius:12px;border:1px solid #e5e7eb;border-left:4px solid #0d9488;">
          <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;font-style:italic;margin-bottom:0.75rem;">&ldquo;I was recommended ECT for my severe depression. Then I found Isha. I am grateful.&rdquo;</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;font-weight:500;">&mdash; Elliot M, San Francisco, CA</p>
        </div>

        <div style="padding:1.5rem;background:#f9fafb;border-radius:12px;border:1px solid #e5e7eb;border-left:4px solid #0d9488;">
          <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;font-style:italic;margin-bottom:0.75rem;">&ldquo;I was able to come off from SSRIs through ketamine therapy.&rdquo;</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;font-weight:500;">&mdash; Osi M, San Luis Obispo, CA</p>
        </div>

        <div style="padding:1.5rem;background:#f9fafb;border-radius:12px;border:1px solid #e5e7eb;border-left:4px solid #0d9488;">
          <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;font-style:italic;margin-bottom:0.75rem;">&ldquo;IV ketamine worked but I could not afford to continue. Isha really saved me.&rdquo;</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;font-weight:500;">&mdash; Kurt Z, Brooklyn, NY</p>
        </div>

        <div style="padding:1.5rem;background:#f9fafb;border-radius:12px;border:1px solid #e5e7eb;border-left:4px solid #0d9488;">
          <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;font-style:italic;margin-bottom:0.75rem;">&ldquo;I can&rsquo;t thank Isha Health enough. Ketamine therapy has truly been a game-changer.&rdquo;</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;font-weight:500;">&mdash; Robert C, Beverly Hills, CA</p>
        </div>

        <div style="padding:1.5rem;background:#f9fafb;border-radius:12px;border:1px solid #e5e7eb;border-left:4px solid #0d9488;">
          <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;font-style:italic;margin-bottom:0.75rem;">&ldquo;Dr. Mai is a doctor who truly listens to her patients.&rdquo;</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;font-weight:500;">&mdash; Alex V, Seattle, WA</p>
        </div>

        <div style="padding:1.5rem;background:#f9fafb;border-radius:12px;border:1px solid #e5e7eb;border-left:4px solid #0d9488;">
          <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;font-style:italic;margin-bottom:0.75rem;">&ldquo;I just wanted to feel better. I actually now feel better.&rdquo;</p>
          <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;font-weight:500;">&mdash; Levi S, Escondido, CA</p>
        </div>

      </div>
    </div>

    <!-- Video case study -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Video: Joseph's Story</h2>

      <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1.5rem;">
        Watch Joseph share his experience with ketamine therapy through Isha Health — in his own words.
      </p>

      <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;margin-bottom:1.5rem;">
        <iframe src="https://www.youtube.com/embed/MutkPa2btzE" title="Joseph's Ketamine Therapy Story — Isha Health" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe>
      </div>
    </div>

    <!-- Julian case study -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Case Study: Julian</h2>

      <div style="padding:1.5rem;background:#f0fdfa;border-radius:12px;border:1px solid #ccfbf1;">
        <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1rem;">
          Julian had tried multiple antidepressants for treatment-resistant depression without success. Read how ketamine maintenance therapy through Isha Health changed his trajectory.
        </p>
        <a href="/post/case-study-julian-ketamine-maintenance-treatment-resistant-depression" style="display:inline-block;color:#0d9488;font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;text-decoration:underline;">Read Julian's full case study &rarr;</a>
      </div>
    </div>

    <!-- FAQ -->
    <div style="margin-bottom:3rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;margin-bottom:1.25rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">Frequently Asked Questions</h2>

      <div style="margin-bottom:1.5rem;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">Does ketamine therapy really work?</h3>
        <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">Yes. Clinical data from over 500 Isha Health patients shows that 88.8% of patients with moderate-to-severe depression experienced measurable improvement, and 92.6% achieved minimal anxiety levels during treatment. These results are consistent with published clinical research on ketamine for treatment-resistant depression.</p>
      </div>

      <div style="margin-bottom:1.5rem;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">How quickly will I see results?</h3>
        <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">Many patients notice improvement within the first 1-2 sessions. Isha Health clinical data shows an average of 1.29 sessions to first measurable improvement, which is significantly faster than the 4-6 weeks typically required for traditional antidepressants like SSRIs.</p>
      </div>

      <div style="margin-bottom:1.5rem;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">Is ketamine therapy safe long-term?</h3>
        <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">Ketamine has been used safely in medical settings for over 50 years. At the low doses prescribed for depression and anxiety, serious side effects are rare. Isha Health monitors patients with regular psychiatric evaluations and validated clinical assessments (PHQ-9, GAD-7) to ensure ongoing safety and efficacy.</p>
      </div>

      <div style="margin-bottom:1.5rem;">
        <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">What is the success rate?</h3>
        <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.7;">88.8% of Isha Health patients with moderate-to-severe depressive symptoms showed measurable improvement. 92.6% achieved minimal anxiety during treatment. The patient retention rate is 99.1%, with only 0.92% single-session dropout. These results are based on data from 546 patients and over 1,900 clinical assessments.</p>
      </div>
    </div>

    <!-- CTA -->
    <div style="background-color:#f0fdfa;padding:2.5rem;border-radius:12px;text-align:center;border:1px solid #ccfbf1;">
      <p style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#0f766e;margin-bottom:0.5rem;">Ready to start your own story?</p>
      <p style="font-family:'Poppins',sans-serif;color:#4b5563;margin-bottom:1.5rem;font-size:0.95rem;">Find out if ketamine therapy is right for you.</p>
      <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
        <a href="/am-i-a-candidate" style="display:inline-block;background-color:#fff;color:#0d9488;padding:0.85rem 2rem;border-radius:8px;text-decoration:none;font-weight:600;font-size:1rem;font-family:'Poppins',sans-serif;border:2px solid #0d9488;">Am I a Candidate?</a>
        <a href="/appointment" style="display:inline-block;background-color:#0d9488;color:#fff;padding:0.85rem 2rem;border-radius:8px;text-decoration:none;font-weight:600;font-size:1rem;font-family:'Poppins',sans-serif;">Book Consultation</a>
      </div>
    </div>

    <p style="font-family:'Poppins',sans-serif;font-size:0.75rem;color:#9ca3af;text-align:center;margin-top:2rem;">
      Patient testimonials reflect individual experiences and may not be representative of all patients. Clinical outcomes based on de-identified data from 546 patients. Individual results may vary. Ketamine is prescribed off-label for depression and anxiety. <a href="/safety-information-for-ketamine-treatment" style="color:#9ca3af;text-decoration:underline;">Safety information</a>.
    </p>

  </div>
</div>`,
      }}
    />
  );
}
