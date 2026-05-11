import type { Metadata } from 'next';
import { buildOpenGraph } from '@/lib/seo';

export const metadata: Metadata = {
  title: "About ISHA Health: Online Ketamine Therapy Provider",
  description: "Learn more about ISHA Health, the leading provider of online ketamine therapy for depression and anxiety. Our experienced team is dedicated to helping…",
  alternates: {
    canonical: "https://isha.health/about-us/about-isha-health",
  },
  openGraph: buildOpenGraph({
    title: "About ISHA Health: Online Ketamine Therapy Provider",
    description: "Learn more about ISHA Health, the leading provider of online ketamine therapy for depression and anxiety. Our experienced team is dedicated to helping…",
    path: '/about-us/about-isha-health',
  }),
  twitter: {
    card: "summary_large_image",
    title: "About ISHA Health: Online Ketamine Therapy Provider",
    description: "Learn more about ISHA Health, the leading provider of online ketamine therapy for depression and anxiety. Our experienced team is dedicated to helping…",
  },
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<div style="max-width:880px;margin:0 auto;padding:2rem 1.5rem 4rem;font-family:'Poppins',sans-serif;color:#374151;font-size:1rem;line-height:1.8;">

  <!-- Hero Section -->
  <div style="text-align:center;padding:3.5rem 0 3rem;">
    <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#0d9488;margin:0 0 1rem;">Our Story</p>
    <h1 style="font-family:'Libre Baskerville',serif;font-size:2.4rem;font-weight:700;color:#111827;margin:0;line-height:1.3;letter-spacing:-0.01em;">Reimagining Mental Health Treatment</h1>
    <div style="width:60px;height:3px;background:#0d9488;margin:1.5rem auto 1.5rem;border-radius:2px;"></div>
    <p style="font-family:'Poppins',sans-serif;font-size:1.05rem;line-height:1.7;color:#6b7280;max-width:620px;margin:0 auto;">
      Isha Health was founded by physicians who saw that conventional mental healthcare wasn't reaching the people who needed it most. This is how we got here — and how we practice now.
    </p>
  </div>

  <!-- Founder Story - Part 1 -->
  <section style="margin-bottom:3rem;">
    <p style="margin:0 0 1.5rem;font-size:1rem;line-height:1.8;">
      Isha Health was born out of my personal journey through the world of medicine and my desire to help those who are struggling with mental health issues. It was an odyssey that started in Japan, a country where mental health was often neglected or simply ignored.
    </p>
    <p style="margin:0 0 2rem;font-size:1rem;line-height:1.8;">
      My friend (I call her Kanako here to protect her privacy) was the first person I knew who suffered from depression, although at the time we did not have a name for it. The Japanese school nurse called it a "cold in the heart", as if it was just a temporary physical ailment that could be cured with rest and medicine. Kanako stopped coming to school and eventually disappeared from my life. Her absence left a deep impact on me and made me realize the importance of mental health.
    </p>
    <figure style="text-align:center;margin:2rem 0 0;">
      <img src="/images/ab6f7e84_64384f8d20293ffaf5e0a4fd_image.webp" loading="lazy" width="420" alt="Dr. Mai Shimada, founder of Isha Health" srcset="/images/34b8d47c_64384f8d20293ffaf5e0a4fd_image-p-500.webp 500w, /images/b941961a_64384f8d20293ffaf5e0a4fd_image-p-800.webp 800w" sizes="(max-width:767px) 100vw, 420px" style="width:100%;max-width:420px;height:auto;border-radius:12px;">
    </figure>
  </section>

  <!-- Founder Story - Part 2 -->
  <section style="margin-bottom:3rem;">
    <p style="margin:0 0 1.5rem;font-size:1rem;line-height:1.8;">
      Years later, as a young doctor working in the United States, I saw firsthand the challenges faced by patients with mental health issues. The healthcare system was not equipped to provide the comprehensive care that was needed. It was then that I knew I wanted to make a difference and find a way to provide more effective treatments.
    </p>
    <p style="margin:0;font-size:1rem;line-height:1.8;">
      My journey led me to ketamine therapy, which has shown great promise in treating depression and anxiety. By combining Western medicine with Eastern philosophy, we at Isha Health strive to treat the whole person, not just the symptoms. Our approach is inspired by the belief that mind and body are inseparable, and that a holistic approach is the key to achieving optimal health.
    </p>
  </section>

  <!-- Murakami Quote & Mission -->
  <section style="margin-bottom:3rem;">
    <blockquote style="border-left:4px solid #0d9488;padding:1.25rem 1.5rem;margin:0 0 2rem;background:#f0fdfa;border-radius:0 8px 8px 0;font-style:italic;color:#555;">
      "Memories warm you up from the inside. But they also tear you apart."
      <span style="display:block;margin-top:0.5rem;font-style:normal;font-size:0.9rem;color:#0d9488;">&#8212; Haruki Murakami, <em>Kafka on the Shore</em></span>
    </blockquote>
    <p style="margin:0 0 1.5rem;font-size:1rem;line-height:1.8;">
      This quote resonates with me because it speaks to the power of memories, both good and bad, to shape our lives. The memory of Kanako has stayed with me all these years, driving me to create Isha Health and help others who are struggling with mental health issues.
    </p>
    <p style="margin:0 0 2rem;font-size:1rem;line-height:1.8;">
      At Isha Health, we believe that everyone deserves access to high-quality mental healthcare. Our mission is to provide effective and compassionate care to those who need it most. Thank you for choosing Isha Health for your mental health needs.
    </p>
    <p style="text-align:right;font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;font-weight:600;margin:0;">
      Mai Shimada, MD MBA FAAEM
    </p>
  </section>

  <!-- Tokyo Image -->
  <figure style="text-align:center;margin:0 auto 3.5rem;max-width:480px;">
    <img src="/images/pexels-shane.webp" loading="lazy" width="480" alt="Cherry blossoms in Tokyo" style="width:100%;height:auto;border-radius:12px;display:block;">
    <figcaption style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#9ca3af;margin-top:0.75rem;font-style:italic;">
      Tokyo — where the journey began.
    </figcaption>
  </figure>

  <!-- Divider -->
  <div style="width:100%;height:1px;background:#e5e7eb;margin:0 0 3rem;"></div>

  <!-- Clinical Team Section -->
  <section style="margin-bottom:3rem;">
    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.75rem;font-weight:700;color:#111827;margin:0 0 0.5rem;text-align:center;">Clinical Team</h2>
    <div style="width:40px;height:3px;background:#0d9488;margin:0 auto 2.5rem;border-radius:2px;"></div>

    <!-- Lead Clinician (featured) -->
    <div style="display:flex;gap:0;align-items:stretch;margin-bottom:3.5rem;flex-wrap:wrap;background:#fff;border:1px solid #e5e7eb;border-radius:14px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,0.04);">
      <a href="/dr-mai-shimada" style="display:block;flex:0 0 280px;min-width:0;">
        <img src="/images/a4ede320_67fd440a4857c20020d732ef_Mai_profile.jpg" loading="lazy" width="293" height="300" alt="Dr. Mai Shimada, Founder and CEO of Isha Health" srcset="/images/ece85efe_67fd440a4857c20020d732ef_Mai_profile-p-500.jpg 500w, /images/5cb2995c_67fd440a4857c20020d732ef_Mai_profile-p-800.jpg 800w, /images/1b569815_67fd440a4857c20020d732ef_Mai_profile-p-1080.jpg 1080w" sizes="(max-width:639px) 100vw, 280px" style="width:100%;height:100%;min-height:280px;object-fit:cover;display:block;">
      </a>
      <div style="flex:1;min-width:260px;padding:2rem 2rem;display:flex;flex-direction:column;justify-content:center;">
        <p style="font-family:'Poppins',sans-serif;font-size:0.75rem;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#0d9488;margin:0 0 0.5rem;">Founder &amp; CEO</p>
        <h3 style="font-family:'Libre Baskerville',serif;font-size:1.5rem;font-weight:700;color:#111827;margin:0 0 0.75rem;line-height:1.3;">Mai Shimada, MD MBA FAAEM</h3>
        <p style="margin:0 0 1rem;font-size:0.95rem;line-height:1.7;color:#555;">
          Board-certified emergency medicine physician with 10+ years of clinical experience. Mai founded Isha Health after seeing how ketamine therapy could change outcomes for patients whom conventional treatments had failed.
        </p>
        <a href="/dr-mai-shimada" style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#0d9488;text-decoration:none;font-weight:600;align-self:flex-start;">Read full bio →</a>
      </div>
    </div>

    <!-- Collaborative Care -->
    <h3 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin:0 0 0.75rem;text-align:center;">A Collaborative Approach to Care</h3>
    <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#555;line-height:1.7;text-align:center;max-width:600px;margin:0 auto 1.5rem;">
      Ketamine therapy works best alongside integration support. We collaborate with a network of independent therapists and specialists who are trained in ketamine-assisted psychotherapy. They are not employees of Isha Health — they are independent practitioners who share our commitment to patient-centered care.
    </p>

    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:2rem;margin-bottom:2rem;">

      <!-- Margaret Brako -->
      <div style="text-align:center;">
        <img src="/images/f8aea750_6539c2cacbe52be4e0624076_Margaret.png" loading="lazy" alt="Margaret" style="width:160px;height:160px;border-radius:50%;object-fit:cover;margin-bottom:1rem;border:3px solid #f0fdfa;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;font-weight:700;color:#111827;margin:0 0 0.25rem;">Margaret Brako, LCSW</h4>
        <p style="margin:0 0 0.25rem;font-size:0.85rem;color:#0d9488;font-weight:500;">Psychotherapist</p>
        <p style="margin:0 0 0.5rem;font-size:0.85rem;color:#999;">Berkeley, California</p>
        <p style="margin:0;font-size:0.85rem;line-height:1.65;color:#555;text-align:left;">
          Margaret is passionate about helping people empower themselves. Her practice emphasizes trauma-informed and culturally responsive care for people of all backgrounds.
        </p>
      </div>

      <!-- Sarah Carr -->
      <div style="text-align:center;">
        <img src="/images/041d4f4b_6539c2cbf493550942503f9a_Sarah_.png" loading="lazy" alt="Sarah" style="width:160px;height:160px;border-radius:50%;object-fit:cover;margin-bottom:1rem;border:3px solid #f0fdfa;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;font-weight:700;color:#111827;margin:0 0 0.25rem;">Sarah Carr, LMFT</h4>
        <p style="margin:0 0 0.25rem;font-size:0.85rem;color:#0d9488;font-weight:500;">Psychotherapist</p>
        <p style="margin:0 0 0.5rem;font-size:0.85rem;color:#999;">San Francisco, California</p>
        <p style="margin:0;font-size:0.85rem;line-height:1.65;color:#555;text-align:left;">
          Sarah Carr, LMFT is the Founder and Clinical Director of <a href="https://www.mindfulsf.com/" target="_blank" style="color:#0d9488;text-decoration:none;">mindfulSF</a>. Sarah has extensive training in Ketamine Assisted Psychotherapy (KAP) and has completed the Internal Family Systems (IFS) and Ketamine Assisted Psychotherapy Intensive through the Ketamine Training Center and IFS Institute.
        </p>
      </div>

      <!-- Vincent Rozalski -->
      <div style="text-align:center;">
        <img src="/images/a072c1a3_6539c2ca8377e9342911228c_Vincent.png" loading="lazy" alt="Vincent" style="width:160px;height:160px;border-radius:50%;object-fit:cover;margin-bottom:1rem;border:3px solid #f0fdfa;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;font-weight:700;color:#111827;margin:0 0 0.25rem;">Vincent Rozalski, Ph.D</h4>
        <p style="margin:0 0 0.25rem;font-size:0.85rem;color:#0d9488;font-weight:500;">Psychotherapist</p>
        <p style="margin:0 0 0.5rem;font-size:0.85rem;color:#999;">San Francisco, California</p>
        <p style="margin:0;font-size:0.85rem;line-height:1.65;color:#555;text-align:left;">
          Vincent specializes in focused treatment for individuals who are suffering from the after effects of trauma and other stressful events. He has worked with people who've experienced a variety of terrible events, such as combat, accidents, abuse, sexual assaults, and near death experiences.
        </p>
      </div>

      <!-- Sarah Murray -->
      <div style="text-align:center;">
        <img src="/images/b5911d19_6539c2ca089ffde936fced75_sarah.png" loading="lazy" alt="Sarah" style="width:160px;height:160px;border-radius:50%;object-fit:cover;margin-bottom:1rem;border:3px solid #f0fdfa;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;font-weight:700;color:#111827;margin:0 0 0.25rem;">Sarah Murray, LMFT</h4>
        <p style="margin:0 0 0.25rem;font-size:0.85rem;color:#0d9488;font-weight:500;">Psychotherapist</p>
        <p style="margin:0 0 0.5rem;font-size:0.85rem;color:#999;">Denver, Colorado</p>
        <p style="margin:0;font-size:0.85rem;line-height:1.65;color:#555;text-align:left;">
          Sarah is an experienced therapist dedicated to guiding individuals on a journey back to their authentic selves. She specializes in utilizing emotional, somatic, cognitive, and spiritual approaches to help you rediscover your innate strength and wisdom.
        </p>
      </div>

      <!-- Perrin Elisha -->
      <div style="text-align:center;">
        <img src="/images/40bae703_65bbe193273c8fe689c24647_perrin.png" loading="lazy" alt="Perrin" style="width:160px;height:160px;border-radius:50%;object-fit:cover;margin-bottom:1rem;border:3px solid #f0fdfa;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;font-weight:700;color:#111827;margin:0 0 0.25rem;">Perrin Elisha, PhD</h4>
        <p style="margin:0 0 0.25rem;font-size:0.85rem;color:#0d9488;font-weight:500;">Clinical Psychologist</p>
        <p style="margin:0 0 0.5rem;font-size:0.85rem;color:#999;">Aspen, Colorado</p>
        <p style="margin:0;font-size:0.85rem;line-height:1.65;color:#555;text-align:left;">
          Perrin Elisha, PhD, a clinical psychologist, specializes in psychosomatics and eating disorders. Author of "The Conscious Body" and founder of Relationships ReWired, she focuses on improving relationship health and intimate dynamics.
        </p>
      </div>

      <!-- Sandy Kong -->
      <div style="text-align:center;">
        <img src="/images/ac260f0b_65bde0a90b546a064c202c2a_Sandy.png" loading="lazy" alt="Sandy" style="width:160px;height:160px;border-radius:50%;object-fit:cover;margin-bottom:1rem;border:3px solid #f0fdfa;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;font-weight:700;color:#111827;margin:0 0 0.25rem;">Sandy Kong, LMFT</h4>
        <p style="margin:0 0 0.25rem;font-size:0.85rem;color:#0d9488;font-weight:500;">Psychotherapist</p>
        <p style="margin:0 0 0.5rem;font-size:0.85rem;color:#999;">San Jose, California</p>
        <p style="margin:0;font-size:0.85rem;line-height:1.65;color:#555;text-align:left;">
          Sandy Kong is a culturally sensitive therapist focused on providing a safe space for healing and growth. She uses her background and expertise to empower clients towards a balanced life.
        </p>
      </div>

      <!-- Katie Chaudry -->
      <div style="text-align:center;">
        <img src="/images/e84285c3_65bde0a934b01ff54e70d5d5_Katie.png" loading="lazy" alt="Katie" style="width:160px;height:160px;border-radius:50%;object-fit:cover;margin-bottom:1rem;border:3px solid #f0fdfa;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;font-weight:700;color:#111827;margin:0 0 0.25rem;">Katie Chaudry, LCSW</h4>
        <p style="margin:0 0 0.25rem;font-size:0.85rem;color:#0d9488;font-weight:500;">Psychotherapist</p>
        <p style="margin:0 0 0.5rem;font-size:0.85rem;color:#999;">Santa Monica, California</p>
        <p style="margin:0;font-size:0.85rem;line-height:1.65;color:#555;text-align:left;">
          Katie Chaudry offers a holistic approach to therapy, emphasizing judgment-free support for those navigating life's challenges. Specializing in anxiety, trauma, and personal growth, she draws from her own experiences to provide practical guidance and support to young adults seeking a more meaningful life.
        </p>
      </div>

      <!-- Jyoti Nadhani -->
      <div style="text-align:center;">
        <img src="/images/55eaaa6b_65bde0aa6cb8a036b6f541fd_Jyoti.png" loading="lazy" alt="Jyoti" style="width:160px;height:160px;border-radius:50%;object-fit:cover;margin-bottom:1rem;border:3px solid #f0fdfa;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;font-weight:700;color:#111827;margin:0 0 0.25rem;">Jyoti Nadhani, LMFT</h4>
        <p style="margin:0 0 0.25rem;font-size:0.85rem;color:#0d9488;font-weight:500;">Psychotherapist</p>
        <p style="margin:0 0 0.5rem;font-size:0.85rem;color:#999;">Palo Alto, California</p>
        <p style="margin:0;font-size:0.85rem;line-height:1.65;color:#555;text-align:left;">
          Jyoti Nadhani, blending business acumen with counseling expertise, offers holistic, non-judgmental therapy focused on growth and healing. Her practice includes psychedelic-assisted therapy and is rooted in personal experiences with yoga and mindfulness, guiding clients towards a fulfilling life.
        </p>
      </div>

    </div>

    <div style="text-align:center;margin-top:1rem;">
      <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#6b7280;margin-bottom:1rem;">Our collaborating network includes 600+ clinicians across the country.</p>
      <a href="/ketamine-therapist-directory" style="display:inline-block;background-color:#fff;color:#0d9488;padding:0.75rem 2rem;border-radius:8px;text-decoration:none;font-weight:600;font-size:0.9rem;font-family:'Poppins',sans-serif;border:1px solid #0d9488;">Browse the Clinician Directory</a>
    </div>
  </section>

  <!-- CTA -->
  <div style="margin-top:3rem;padding:2.5rem 2rem;background:linear-gradient(135deg,#0d9488 0%,#0891a3 100%);border-radius:14px;text-align:center;color:#fff;">
    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.5rem;font-weight:700;margin:0 0 0.5rem;color:#fff;line-height:1.3;">Ready to take the next step?</h2>
    <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;line-height:1.6;margin:0 auto 1.5rem;max-width:480px;color:rgba(255,255,255,0.92);">
      A 60-minute consultation with a physician is the first step. We'll talk through your history and figure out whether ketamine therapy is a fit.
    </p>
    <a href="/appointment" style="display:inline-block;background-color:#fff;color:#0d9488;padding:0.85rem 2.25rem;border-radius:8px;text-decoration:none;font-weight:600;font-size:0.95rem;font-family:'Poppins',sans-serif;">Book a Consultation</a>
  </div>

</div>
        `,
      }}
    />
  );
}
