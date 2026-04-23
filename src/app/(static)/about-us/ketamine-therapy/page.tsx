import type { Metadata } from 'next';
import { buildOpenGraph } from '@/lib/seo';

export const metadata: Metadata = {
  title: "What Is Ketamine Therapy? How It Treats Depression",
  description: "Ketamine therapy uses a 50-year-old FDA-approved medication to treat depression, anxiety, and PTSD. Learn how it works, who it helps, and what to expect.",
  alternates: {
    canonical: "https://isha.health/about-us/ketamine-therapy",
  },
  openGraph: buildOpenGraph({
    title: "What Is Ketamine Therapy? How It Treats Depression",
    description: "Ketamine therapy uses a 50-year-old FDA-approved medication to treat depression, anxiety, and PTSD. Learn how it works, who it helps, and what to expect.",
    path: '/about-us/ketamine-therapy',
  }),
  twitter: {
    card: "summary_large_image",
    title: "What Is Ketamine Therapy? How It Treats Depression",
    description: "Ketamine therapy uses a 50-year-old FDA-approved medication to treat depression, anxiety, and PTSD. Learn how it works, who it helps, and what to expect.",
  },
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<div style="max-width:800px;margin:0 auto;padding:2rem 1.5rem 4rem;font-family:'Poppins',sans-serif;color:#374151;font-size:0.95rem;line-height:1.7;">

  <!-- Hero -->
  <div style="text-align:center;padding:3rem 0 2.5rem;">
    <h1 style="font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#111827;margin:0;line-height:1.35;">Ketamine Therapy: What is it and How it can help with Mental Health?</h1>
    <div style="width:60px;height:3px;background:#0d9488;margin:1.5rem auto 0;border-radius:2px;"></div>
  </div>

  <!-- What is Ketamine Therapy -->
  <section style="margin-bottom:3rem;">
    <h3 style="font-family:'Libre Baskerville',serif;font-size:1.2rem;font-weight:700;color:#111827;margin:0 0 1rem;">What is Ketamine Therapy?</h3>
    <p style="margin:0 0 1.5rem;">
      Ketamine therapy is a type of treatment that involves the use of ketamine, a dissociative anesthetic drug, to alleviate symptoms of depression and anxiety. Unlike traditional antidepressant medications, which can take weeks or even months to take effect, ketamine therapy can provide rapid relief from symptoms, often within days.
    </p>

    <h3 style="font-family:'Libre Baskerville',serif;font-size:1.2rem;font-weight:700;color:#111827;margin:0 0 1rem;">How Ketamine Works in Body:</h3>
    <p style="margin:0 0 2rem;">
      Ketamine works by blocking the N-methyl-D-aspartate (NMDA) receptor in the brain. This receptor is responsible for transmitting pain signals to the brain, as well as regulating mood, memory, and learning. By blocking this receptor, ketamine produces a dissociative state, which can lead to feelings of detachment from one's body and surroundings. Additionally, ketamine has been shown to increase the production of certain neurotransmitters, including dopamine and serotonin, which can have mood-enhancing effects. However, the exact mechanisms by which ketamine produces its therapeutic effects are still not fully understood and continue to be studied.
    </p>

    <div style="text-align:center;">
      <img src="/images/9fc1ea38_641c5cd1df883504184d8c02_bamboos.webp" loading="lazy" srcset="/images/3d374277_641c5cd1df883504184d8c02_bamboos-p-500.webp 500w, /images/14743862_641c5cd1df883504184d8c02_bamboos.webp 640w" alt="Experience a zen mind with ketamine therapy" sizes="(max-width:479px) 86vw, 100%" style="width:100%;max-width:100%;height:280px;object-fit:cover;border-radius:12px;">
    </div>
  </section>

  <!-- How Ketamine Helps + Process -->
  <section style="display:flex;gap:2.5rem;align-items:flex-start;margin-bottom:3rem;flex-wrap:wrap;">
    <div style="flex:1;min-width:260px;">
      <img src="/images/6e5f14a0_64399bed868b7751024043b2_pexels-pixabay-302100__1).webp" loading="lazy" sizes="(max-width:479px) 100vw, 260px" alt="Zen and tranquility with ketamine therapy" width="260" srcset="/images/6e5f14a0_64399bed868b7751024043b2_pexels-pixabay-302100__1)-p-500.webp 500w, /images/6e5f14a0_64399bed868b7751024043b2_pexels-pixabay-302100__1).webp 640w" style="width:100%;height:320px;object-fit:cover;border-radius:12px;">
    </div>
    <div style="flex:2;min-width:280px;">
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.2rem;font-weight:700;color:#111827;margin:0 0 1rem;">How can Ketamine Therapy help with Mental Health?</h3>
      <p style="margin:0 0 1.5rem;">
        Ketamine therapy works by targeting and modulating specific neurotransmitters in the brain, such as glutamate and serotonin, which are involved in mood regulation and emotional processing. By altering the balance of these neurotransmitters, ketamine therapy can reduce symptoms of depression and anxiety, such as low mood, feelings of hopelessness, and persistent worry. In addition, ketamine therapy has been shown to have long-lasting effects on brain function, leading to sustained improvements in mental health and well-being.
      </p>

      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.2rem;font-weight:700;color:#111827;margin:0 0 1rem;">Ketamine Therapy Process: What to Expect</h3>
      <p style="margin:0 0 1.5rem;">
        First, you'll have an initial consultation with a licensed healthcare provider to discuss your medical history, current symptoms, and whether oral ketamine is an appropriate treatment option for you. If so, you'll be prescribed a dose of oral ketamine, which you'll take in the comfort of your own home.
      </p>
      <p style="margin:0;">
        During the treatment session, you'll be required to follow specific instructions provided by your healthcare provider to ensure your safety and maximize the effectiveness of the treatment. After the session, your healthcare provider will follow up with you to assess your response to the treatment and determine whether adjustments to the treatment plan are needed. It's important to note that the effects of oral ketamine therapy can vary from person to person, so it may take some time to find the optimal dose and frequency of treatment that works for you.
      </p>
    </div>
  </section>

  <!-- Benefits, Risks, Comparison -->
  <section style="margin-bottom:3rem;">
    <h3 style="font-family:'Libre Baskerville',serif;font-size:1.2rem;font-weight:700;color:#111827;margin:0 0 1rem;">Benefits and Risks of Ketamine Therapy</h3>
    <p style="margin:0 0 1.5rem;">
      The benefits of ketamine therapy for depression and anxiety include its rapid-acting nature, its ability to provide relief for treatment-resistant cases, and its long-lasting effects on brain function. However, there are also potential risks and side effects associated with the treatment, including nausea, dizziness, and changes in blood pressure or heart rate. It is important for patients to discuss the potential benefits and risks of ketamine therapy with their healthcare provider before beginning treatment.
    </p>

    <h3 style="font-family:'Libre Baskerville',serif;font-size:1.2rem;font-weight:700;color:#111827;margin:0 0 1rem;">Ketamine Therapy vs. Traditional Treatments</h3>
    <p style="margin:0 0 1.5rem;">
      Ketamine therapy offers a unique approach to treating depression and anxiety, particularly for individuals who have not found relief from traditional treatments such as talk therapy or medication. Unlike traditional antidepressants, which can take weeks or months to become effective, ketamine therapy can provide rapid relief from symptoms. Additionally, ketamine therapy has been shown to have long-lasting effects on brain function, leading to sustained improvements in mental health and well-being.
    </p>
    <p style="margin:0 0 2rem;">
      Please <a href="https://www.isha.health/consent-form" style="color:#0d9488;text-decoration:underline;">review our ketamine consent form</a> for more information and disclosures.
    </p>

    <div style="text-align:center;">
      <img src="/images/96614ab3_6439a980ca8c4e29711deb18_pexels-liger-pham-739074__2)%20(1).jpg" loading="lazy" sizes="(max-width:479px) 86vw, 100%" alt="Find peace and tranquility with ketamine therapy" width="800" srcset="/images/96614ab3_6439a980ca8c4e29711deb18_pexels-liger-pham-739074__2)%20(1)-p-500.webp 500w, /images/96614ab3_6439a980ca8c4e29711deb18_pexels-liger-pham-739074__2)%20(1)-p-800.webp 800w, /images/96614ab3_6439a980ca8c4e29711deb18_pexels-liger-pham-739074__2)%20(1)-p-1080.webp 1080w, /images/96614ab3_6439a980ca8c4e29711deb18_pexels-liger-pham-739074__2)%20(1).jpg 1280w" style="width:100%;max-width:100%;height:280px;object-fit:cover;border-radius:12px;">
    </div>
  </section>

  <!-- CTA -->
  <div style="text-align:center;padding:2rem 0;">
    <a href="/pricing" style="display:inline-block;background-color:#0d9488;color:#fff;padding:0.85rem 2rem;border-radius:8px;text-decoration:none;font-weight:600;font-size:0.95rem;font-family:'Poppins',sans-serif;">Learn More</a>
  </div>

</div>
        `,
      }}
    />
  );
}
