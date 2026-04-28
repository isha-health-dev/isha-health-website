import type { Metadata } from 'next';
import { buildOpenGraph } from '@/lib/seo';

export const metadata: Metadata = {
  title: "Online Ketamine Therapy: How It Works",
  description: "At-home ketamine therapy with a physician. 88.8% of patients improve. Personalized treatment plans, telehealth sessions, medication delivered to your door.",
  alternates: {
    canonical: "https://isha.health/our-treatment-approach",
  },
  openGraph: buildOpenGraph({
    title: "Online Ketamine Therapy: How It Works",
    description: "At-home ketamine therapy with a physician. 88.8% of patients improve. Personalized treatment plans, telehealth sessions, medication delivered to your door.",
    path: '/our-treatment-approach',
  }),
  twitter: {
    card: "summary_large_image",
    title: "Online Ketamine Therapy: How It Works",
    description: "At-home ketamine therapy with a physician. 88.8% of patients improve. Personalized treatment plans, telehealth sessions, medication delivered to your door.",
  },
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<div style="max-width:800px;margin:0 auto;padding:2rem 1.5rem 3rem;">

  <div style="text-align:center;margin-bottom:2.5rem;">
    <h1 style="font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#111827;margin:0 0 0.5rem;">Our Treatment Approach</h1>
    <div style="width:60px;height:3px;background:#0d9488;margin:0 auto;border-radius:2px;"></div>
  </div>

  <div style="margin-bottom:2.5rem;">
    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">Our Innovative Ketamine Treatment Approach</h2>
    <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1rem;">Traditional treatment was not helpful enough?</p>
    <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1rem;">Ketamine is a versatile medication originally used for anesthesia since the 1970s, now also a key player in mental health treatments. Its superpower lies in working with your brain's glutamate receptors to create antidepressant effects. Imagine it like a brain gym — it encourages neuroplasticity, which is basically your brain's ability to rewire itself, helping you think, act, and behave differently.</p>
    <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1rem;">At Isha Health, we focus on helping you make the most of this treatment with the treatment plan made just for you. The world of ketamine research is always evolving with new studies. We take on the task of sifting through these studies to bring you the best, evidence-based approaches. This way, we ensure you get the most effective treatment to unlock your mental health potential. Below, you'll find a straightforward diagram explaining how our treatment flows.</p>
    <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1.5rem;">Please <a href="https://isha.health/consent-form" style="color:#0d9488;text-decoration:underline;">review our ketamine consent form</a> for more information and disclosures.</p>
    <div style="text-align:center;">
      <img src="/images/9fc1ea38_641c5cd1df883504184d8c02_bamboos.webp" loading="lazy" srcset="/images/3d374277_641c5cd1df883504184d8c02_bamboos-p-500.webp 500w, /images/14743862_641c5cd1df883504184d8c02_bamboos.webp 640w" alt="Experience a zen mind with ketamine therapy - Isha Health's online at-home ketamine clinic for depression and anxiety" sizes="(max-width: 479px) 86vw, (max-width: 767px) 90vw, 450px" style="max-width:450px;width:100%;border-radius:12px;">
    </div>
  </div>

  <div style="margin-bottom:2.5rem;">
    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1.5rem;">How It Works</h2>

    <div style="border:1px solid #e5e7eb;border-radius:10px;padding:1.25rem 1.5rem;margin-bottom:1rem;background:#f9fafb;">
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#0d9488;margin-bottom:0.75rem;">1. Meet an Isha Health Licensed Provider</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;">Start your path by arranging a telehealth consultation, which will involve a thorough assessment. This helps us determine your suitability for ketamine therapy and allows us to design a personalized treatment strategy that matches your unique requirements. (If you aren't a fit, you will not get charged for the visit.)</p>
    </div>

    <div style="border:1px solid #e5e7eb;border-radius:10px;padding:1.25rem 1.5rem;margin-bottom:1rem;background:#f9fafb;">
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#0d9488;margin-bottom:0.75rem;">2. Receive Your Shipment</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;">After your consultation, you will receive your medication delivered to your door.</p>
    </div>

    <div style="border:1px solid #e5e7eb;border-radius:10px;padding:1.25rem 1.5rem;margin-bottom:1rem;background:#f9fafb;">
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#0d9488;margin-bottom:0.75rem;">3. Prepare for Your Session with Isha Team</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;">You will receive thorough instructions for your session. You can message Isha team as many times as you like if you have any questions. You also have access to a complimentary video call with our clinician to help you get ready for your first session.</p>
    </div>

    <div style="border:1px solid #e5e7eb;border-radius:10px;padding:1.25rem 1.5rem;margin-bottom:1.5rem;background:#f9fafb;">
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#0d9488;margin-bottom:0.75rem;">4. Your First Session</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;">Once your space is prepared, start the treatment by situating the ketamine tablet under your tongue. The effects of the medicine persist for approximately 1.5 hours, during which you'll unwind on a sofa or bed, adorned with an eye mask.</p>
    </div>

    <div style="text-align:center;margin-bottom:2rem;">
      <img src="/images/ae5f6a69_64de1de50aadefba5f98b95c_how-it-works.webp" loading="lazy" width="400" height="600" alt="How it works" style="max-width:400px;width:100%;border-radius:12px;">
    </div>

    <div style="text-align:center;margin-bottom:2.5rem;">
      <a href="/pricing" style="display:inline-block;background-color:#0d9488;color:#fff;padding:0.85rem 2rem;border-radius:8px;text-decoration:none;font-weight:600;font-size:0.95rem;font-family:'Poppins',sans-serif;">Learn More</a>
    </div>
  </div>

  <div style="margin-bottom:2.5rem;">
    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1rem;">The Average Patient</h2>
    <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1rem;">The average patient is treated with a 100mg - 200mg sublingual ketamine troche, once to twice a week for the first month of the treatment. Every month, our clinician will interview you and review your clinical scores for depression, anxiety, and PTSD to optimize your treatment regimen.</p>
    <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1rem;">Once the optimal dosing is reached, the frequency may be adjusted. We highly encourage conjunctive psychotherapy treatment.</p>
    <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1.5rem;">Researches have shown that concurrent psychotherapeutic intervention improves the efficacy of the treatment. You can work with your own psychotherapist or with one of our certified and experienced psychotherapists.</p>
    <div style="text-align:center;margin-bottom:1.5rem;">
      <img src="/images/42749101_641c2b21fdcbce707aa7dd30_average_patient.webp" loading="lazy" srcset="/images/4ee45e85_641c2b21fdcbce707aa7dd30_average_patient-p-500.webp 500w, /images/f32257a9_641c2b21fdcbce707aa7dd30_average_patient.webp 640w" sizes="100vw" alt="Average patient" style="max-width:100%;border-radius:12px;">
    </div>
  </div>

  <div style="text-align:center;">
    <a href="/pricing" style="display:inline-block;background-color:#0d9488;color:#fff;padding:0.85rem 2rem;border-radius:8px;text-decoration:none;font-weight:600;font-size:0.95rem;font-family:'Poppins',sans-serif;">Learn More</a>
  </div>

</div>
`,
      }}
    />
  );
}
