import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Online Ketamine Therapy for Depression & Anxiety",
  description: "88.8% of patients improve. Physician-led at-home ketamine therapy for depression, anxiety, and PTSD. $350 consultation, available in 9 states.",
  alternates: {
    canonical: "https://isha.health",
  },
  openGraph: {
    title: "Online Ketamine Therapy for Depression & Anxiety",
    description: "88.8% of patients improve. Physician-led at-home ketamine therapy for depression, anxiety, and PTSD. $350 consultation, available in 9 states.",
    type: "website",
    url: "https://isha.health",
    images: ["/images/isha_logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Ketamine Therapy for Depression & Anxiety",
    description: "88.8% of patients improve. Physician-led at-home ketamine therapy for depression, anxiety, and PTSD. $350 consultation, available in 9 states.",
  },
};

const h2Style = "font-family:'Libre Baskerville',serif;font-size:1.8rem;font-weight:700;color:#111827;text-align:center;margin-bottom:0.5rem;";
const subStyle = "font-family:'Poppins',sans-serif;font-size:1rem;color:#6b7280;text-align:center;margin-bottom:2.5rem;line-height:1.6;";
const bodyStyle = "font-family:'Poppins',sans-serif;font-size:0.95rem;color:#4b5563;line-height:1.7;";

const testimonials = [
  { quote: "Ketamine assisted therapy helped me so much to get out of my depression and PTSD. I never felt better in my life.", name: "Amber S", loc: "Brooklyn, New York" },
  { quote: "My anxiety is just gone. I barely think about it anymore. It wasn\u2019t instantaneous, but it worked eventually.", name: "Patricia L", loc: "Santa Monica, California" },
  { quote: "I tried IV ketamine for my TRD before and it was too much for me. Isha\u2019s approach is gentler on my body and worked great.", name: "Laila L", loc: "New York, New York" },
  { quote: "Ketamine therapy is the only treatment that has worked for my depression and anxiety.", name: "Rakesh V", loc: "Seattle, Washington" },
  { quote: "I have been able to come off from my meds for the past month. I am hopeful that I no longer need SSRIs in the future.", name: "David S", loc: "Denver, Colorado" },
  { quote: "I felt that my anxiety and depression melting away even during the first session.", name: "Cynthia L", loc: "Mountain View, California" },
  { quote: "I was recommended ECT for my severe depression. Then I found Isha. I am grateful.", name: "Elliot M", loc: "San Francisco, California" },
  { quote: "You saved my life. My anxiety is under control, and I finally feel like myself again.", name: "Emily P", loc: "Miami, Florida" },
  { quote: "I can\u2019t thank Isha Health enough for helping me overcome my depression and anxiety. Ketamine therapy has truly been a game-changer.", name: "Robert C", loc: "Beverly Hills, California" },
  { quote: "I started ketamine therapy for my depression. It ended up also helping me stop drinking. I\u2019m sober for 6 months by now.", name: "Sergey M", loc: "San Francisco, California" },
  { quote: "I was super nervous in the beginning but I quickly noticed my mood and motivation were improving after a week.", name: "Marc I", loc: "Miami, Florida" },
  { quote: "Ketamine really worked for my anxiety. I don\u2019t even remember when I last had a panic attack. I used to have it daily.", name: "Jared Y", loc: "Rochester, New York" },
  { quote: "IV ketamine worked but I could not afford to continue. Isha really saved me.", name: "Kurt Z", loc: "Brooklyn, New York" },
  { quote: "I just wanted to feel better. I actually now feel better.", name: "Levi S", loc: "Escondido, California" },
  { quote: "I was able to come off from SSRIs through ketamine therapy. I feel that my depression is now more manageable.", name: "Osi M", loc: "San Luis Obispo, California" },
  { quote: "These sessions have been transformative and have made me braver to embrace my interactions with others.", name: "Kenneth M", loc: "Monterey, California" },
  { quote: "Thank you. I just want to say thank you to get me out of a pit of depression.", name: "Rachel M", loc: "New York, New York" },
  { quote: "I\u2019m so glad that I found Isha Health for my depression and anxiety. I love that I can speak and message with my doctor as many times as I\u2019d like.", name: "Annika W", loc: "Oakland, California" },
];

const team = [
  { name: "Mai Shimada, MD", title: "Founder & CEO", img: "/images/94f52bd2_6539c2caf1b0c2065ced5bf4_mai.png" },
  { name: "Jennifer S. Birch, NP", title: "Psychiatric Nurse Practitioner", img: "/images/702ab160_65bbe1931d159fc0043c75be_jennifer.png" },
  { name: "Jenya Kaufman, MD", title: "Psychiatrist", img: "/images/0119903c_65bbe1933e6cae126541f4df_jenya2.png" },
  { name: "Margaret Brako, LCSW", title: "Clinical Social Worker", img: "/images/f8aea750_6539c2cacbe52be4e0624076_Margaret.png" },
  { name: "Perrin Elisha, PhD", title: "Clinical Psychologist", img: "/images/40bae703_65bbe193273c8fe689c24647_perrin.png" },
  { name: "Sandy Kong, LMFT", title: "Licensed Marriage & Family Therapist", img: "/images/ac260f0b_65bde0a90b546a064c202c2a_Sandy.png" },
  { name: "Katie Chaudry, LCSW", title: "Clinical Social Worker", img: "/images/e84285c3_65bde0a934b01ff54e70d5d5_Katie.png" },
  { name: "Susan Ono, PsyD", title: "Clinical Psychologist", img: "/images/62838ed7_64deffe0284aac100e3fd8f1_Susan.webp" },
  { name: "Vincent Rozalski, PhD", title: "Clinical Psychologist", img: "/images/a072c1a3_6539c2ca8377e9342911228c_Vincent.png" },
  { name: "Jyoti Nadhani, LMFT", title: "Licensed Marriage & Family Therapist", img: "/images/55eaaa6b_65bde0aa6cb8a036b6f541fd_Jyoti.png" },
];

export default function Page() {
  return (
    <>
    {/* Hero */}
    <div
      dangerouslySetInnerHTML={{
        __html: `<div style="background-image:url('/images/hero-bg.webp');background-size:cover;background-position:right center;min-height:520px;display:flex;align-items:center;padding:4rem 1.5rem;">
          <div style="max-width:550px;padding-left:8%;">
            <h1 style="font-family:'Libre Baskerville',serif;font-size:3rem;font-weight:700;color:#111827;line-height:1.15;margin-bottom:1.25rem;">Unlock Your Mind's Potential</h1>
            <p style="font-family:'Poppins',sans-serif;font-size:1rem;color:#4b5563;line-height:1.7;margin-bottom:0.75rem;">Personalized mental health care for depression, anxiety, and PTSD</p>
            <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;margin-bottom:2rem;">Are you struggling to feel like yourself? Isha Health combines ketamine-assisted therapy with holistic care — available via telemedicine in 9 states.</p>
            <a href="/am-i-a-candidate" style="display:inline-block;background-color:#0d9488;color:#fff;padding:0.9rem 2.5rem;border-radius:8px;text-decoration:none;font-weight:600;font-size:1rem;font-family:'Poppins',sans-serif;">Am I a Candidate?</a>
          </div>
        </div>
        <style>
          @media (max-width: 768px) {
            div[style*="hero-bg.webp"] {
              background-image: url('/images/hero-bg-mobile.webp') !important;
              background-position: center !important;
              min-height: 400px !important;
            }
            div[style*="hero-bg.webp"] > div {
              padding-left: 5% !important;
              max-width: 100% !important;
            }
          }
        </style>`,
      }}
    />

    {/* Outcomes Trust Bar */}
    <div
      dangerouslySetInnerHTML={{
        __html: `<div style="background-color:#0f766e;padding:2.5rem 1.5rem;">
          <div style="max-width:1000px;margin:0 auto;text-align:center;">
            <p style="font-family:'Libre Baskerville',serif;font-size:1.1rem;font-weight:700;color:#fff;margin-bottom:1.5rem;">Real Results from Real Patients</p>
            <div style="display:flex;flex-wrap:wrap;gap:3rem;justify-content:center;">
              <div style="flex:0 1 240px;text-align:center;">
                <p style="font-family:'Libre Baskerville',serif;font-size:2.5rem;font-weight:700;color:#5eead4;margin-bottom:0.25rem;">88.8%</p>
                <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#ccfbf1;line-height:1.4;">of patients with moderate-to-severe depression show measurable improvement</p>
              </div>
              <div style="flex:0 1 240px;text-align:center;">
                <p style="font-family:'Libre Baskerville',serif;font-size:2.5rem;font-weight:700;color:#5eead4;margin-bottom:0.25rem;">92.6%</p>
                <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#ccfbf1;line-height:1.4;">of anxiety patients reach minimal anxiety levels</p>
              </div>
            </div>
            <p style="font-family:'Poppins',sans-serif;font-size:0.75rem;color:#99f6e4;margin-top:1rem;">Based on over 500 patients with validated PHQ-9 and GAD-7 assessments</p>
            <a href="/outcomes" style="display:inline-block;margin-top:1.5rem;font-family:'Poppins',sans-serif;font-size:0.85rem;color:#5eead4;text-decoration:underline;">See our full clinical outcomes report \u2192</a>
          </div>
        </div>`,
      }}
    />

    {/* Neuroplasticity / Science */}
    <div
      dangerouslySetInnerHTML={{
        __html: `<div style="background-color:#fff;padding:4rem 1.5rem;">
          <div style="max-width:800px;margin:0 auto;">
            <div style="display:flex;flex-wrap:wrap;gap:2.5rem;align-items:center;">
              <div style="flex:1 1 300px;">
                <img src="/images/7ec90eca_668fd648d41ab7a4a59663f6_Frame_103.png" alt="Meet our CEO Mai Shimada MD" style="width:100%;border-radius:10px;" loading="lazy" />
              </div>
              <div style="flex:1 1 340px;">
                <h2 style="font-family:'Libre Baskerville',serif;font-size:1.5rem;font-weight:700;color:#111827;margin-bottom:1rem;line-height:1.3;">Where Healing Meets Innovation</h2>
                <p style="${bodyStyle}margin-bottom:1rem;">At Isha Health, we integrate the principles of neuroplasticity \u2014 the brain\u2019s ability to reorganize and adapt \u2014 with a personalized treatment approach. This method has been pivotal in transforming our patients\u2019 lives, with <strong>88.8%</strong> showing measurable improvement.</p>
                <p style="${bodyStyle}margin-bottom:1rem;">Our approach doesn\u2019t just treat symptoms \u2014 it fosters healing from within. Every person\u2019s journey is unique, which is why careful personalization is at the core of everything we do.</p>
                <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;">*Based on PHQ-9 assessments across 546 patients. <a href="/outcomes" style="color:#0d9488;text-decoration:underline;">See full outcomes report \u2192</a></p>
              </div>
            </div>
          </div>
        </div>`,
      }}
    />

    {/* Joseph Case Study */}
    <div
      dangerouslySetInnerHTML={{
        __html: `<div style="background-color:#f9fafb;padding:4rem 1.5rem;border-top:1px solid #e5e7eb;">
          <div style="max-width:800px;margin:0 auto;">
            <p style="font-family:'Poppins',sans-serif;font-size:0.75rem;color:#0d9488;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.5rem;">Case Study</p>
            <h2 style="font-family:'Libre Baskerville',serif;font-size:1.5rem;font-weight:700;color:#111827;margin-bottom:1.25rem;">Joseph, Art Director</h2>
            <p style="${bodyStyle}margin-bottom:1rem;">Despite a challenging upbringing, Joseph from Cambria, CA managed to forge successful careers in adolescent psychology and illustration. However, after years of unsatisfactory results from various antidepressants and psychotherapy, he turned to our clinic for his long-standing depression and anxiety.</p>
            <blockquote style="border-left:3px solid #0d9488;padding-left:1.25rem;margin:1.5rem 0;">
              <p style="font-family:'Source Sans Pro',sans-serif;font-size:1.05rem;color:#374151;font-style:italic;line-height:1.6;">\u201cI was aware of my feelings. I found myself enjoying myself in a way I had never been able to.\u201d</p>
            </blockquote>
            <p style="${bodyStyle}margin-bottom:1.5rem;">Joseph described his experience with ketamine-assisted therapy as not only pleasant but also educational. He was finally able to enjoy life in a way that had previously eluded him.</p>
            <a href="https://www.youtube.com/watch?v=MutkPa2btzE" target="_blank" rel="noopener" style="display:inline-block;font-family:'Poppins',sans-serif;color:#0d9488;font-weight:600;text-decoration:underline;font-size:0.95rem;">Watch Joseph\u2019s Testimonial \u2192</a>
          </div>
        </div>`,
      }}
    />

    {/* How It Works */}
    <div
      dangerouslySetInnerHTML={{
        __html: `<div style="background-color:#fff;padding:4rem 1.5rem;border-top:1px solid #e5e7eb;">
          <div style="max-width:1000px;margin:0 auto;">
            <h2 style="${h2Style}">How It Works</h2>
            <p style="${subStyle}max-width:600px;margin-left:auto;margin-right:auto;">From consultation to your first session \u2014 everything happens from home.</p>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:2rem;">
              <div style="text-align:center;">
                <p style="font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#0d9488;margin-bottom:0.5rem;">1</p>
                <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">Meet Your Doctor</h3>
                <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#4b5563;line-height:1.5;">60-minute video consultation with a thorough assessment of your symptoms, medical history, and goals.</p>
              </div>
              <div style="text-align:center;">
                <p style="font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#0d9488;margin-bottom:0.5rem;">2</p>
                <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">Receive Your Medication</h3>
                <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#4b5563;line-height:1.5;">Your prescription is sent to a compounding pharmacy. Medication arrives at your door within 3\u20135 business days.</p>
              </div>
              <div style="text-align:center;">
                <p style="font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#0d9488;margin-bottom:0.5rem;">3</p>
                <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">Prepare with Your Team</h3>
                <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#4b5563;line-height:1.5;">You\u2019ll receive thorough session instructions via email. Message the Isha team anytime with questions.</p>
              </div>
              <div style="text-align:center;">
                <p style="font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#0d9488;margin-bottom:0.5rem;">4</p>
                <h3 style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">Your First Session</h3>
                <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#4b5563;line-height:1.5;">Place the ketamine tablet under your tongue and relax on your couch or bed with an eye mask. Effects last about 2 hours.</p>
              </div>
            </div>
            <div style="text-align:center;margin-top:2rem;">
              <a href="/appointment" style="display:inline-block;background-color:#0d9488;color:#fff;padding:0.85rem 2rem;border-radius:8px;text-decoration:none;font-weight:600;font-size:0.95rem;font-family:'Poppins',sans-serif;">Get Started</a>
            </div>
          </div>
        </div>`,
      }}
    />

    {/* Why Choose Isha Health */}
    <div
      dangerouslySetInnerHTML={{
        __html: `<div style="background-color:#f9f7f3;padding:4rem 1.5rem;border-top:1px solid #e5e7eb;">
          <div style="max-width:900px;margin:0 auto;">
            <h2 style="${h2Style}">Why Choose Isha Health</h2>
            <p style="${subStyle}">For depression and anxiety treatment that actually works.</p>
            <div style="display:flex;flex-wrap:wrap;gap:1.5rem;">
              <div style="flex:1 1 260px;background:#fff;border-radius:10px;padding:1.75rem;border:1px solid #e5e7eb;">
                <h3 style="font-family:'Libre Baskerville',serif;font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Faster and Better Outcomes</h3>
                <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.6;">Unlike conventional medications that take months, ketamine therapy can yield rapid responses. Many patients report improvement within weeks \u2014 some within days.</p>
              </div>
              <div style="flex:1 1 260px;background:#fff;border-radius:10px;padding:1.75rem;border:1px solid #e5e7eb;">
                <h3 style="font-family:'Libre Baskerville',serif;font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Affordable, Accessible Telehealth</h3>
                <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.6;">Through telemedicine and sublingual ketamine, treatment is both cost-effective and convenient \u2014 all from your home. <a href="/pricing" style="color:#0d9488;text-decoration:underline;">$350 per consultation</a>, monitored by experienced clinicians.</p>
              </div>
              <div style="flex:1 1 260px;background:#fff;border-radius:10px;padding:1.75rem;border:1px solid #e5e7eb;">
                <h3 style="font-family:'Libre Baskerville',serif;font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Personalized, Evidence-Based</h3>
                <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.6;">With over 50 years of safety data, ketamine is well-established. Your treatment plan is carefully supervised by clinicians with extensive ketamine therapy experience.</p>
              </div>
            </div>
          </div>
        </div>`,
      }}
    />

    {/* Testimonials */}
    <div style={{ backgroundColor: '#fff', padding: '4rem 1.5rem', borderTop: '1px solid #e5e7eb' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '1.8rem', fontWeight: 700, color: '#111827', textAlign: 'center', marginBottom: '0.5rem' }}>What Our Patients Say</h2>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '1rem', color: '#6b7280', textAlign: 'center', marginBottom: '2.5rem' }}>Real stories from real patients across the country</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '10px', background: '#fafafa' }}>
              <p style={{ fontFamily: "'Source Sans Pro', sans-serif", fontSize: '0.9rem', color: '#374151', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '0.75rem' }}>&ldquo;{t.quote}&rdquo;</p>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.8rem', color: '#6b7280', fontWeight: 600 }}>&mdash; {t.name}, {t.loc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Collaborative Care */}
    <div style={{ backgroundColor: '#f9fafb', padding: '4rem 1.5rem', borderTop: '1px solid #e5e7eb' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '1.8rem', fontWeight: 700, color: '#111827', textAlign: 'center', marginBottom: '0.5rem' }}>A Collaborative Approach to Care</h2>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '1rem', color: '#6b7280', textAlign: 'center', marginBottom: '1rem', lineHeight: 1.7, maxWidth: '650px', marginLeft: 'auto', marginRight: 'auto' }}>Ketamine therapy works best when it&rsquo;s part of a broader care plan. That&rsquo;s why we work alongside therapists, psychologists, and counselors who specialize in ketamine-assisted psychotherapy.</p>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.95rem', color: '#4b5563', textAlign: 'center', marginBottom: '2.5rem', lineHeight: 1.7, maxWidth: '650px', marginLeft: 'auto', marginRight: 'auto' }}>Our physician prescribes and monitors your treatment, while your therapist provides the integration support that deepens and sustains your progress. This collaborative model is how we achieve an <strong>88.8% improvement rate</strong>.</p>

        {/* Founder */}
        <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '2rem', alignItems: 'center', marginBottom: '2.5rem', padding: '2rem', background: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
          <div style={{ flex: '0 0 120px' }}>
            <img src="/images/94f52bd2_6539c2caf1b0c2065ced5bf4_mai.png" alt="Mai Shimada, MD" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }} loading="lazy" />
          </div>
          <div style={{ flex: '1 1 300px' }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.75rem', color: '#0d9488', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Founder</p>
            <h3 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '1.2rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>
              <a href="/dr-mai-shimada" style={{ color: '#111827', textDecoration: 'none' }}>Mai Shimada, MD</a>
            </h3>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.6 }}>Double board-certified physician. Medical degree from The University of Tokyo, postdoctoral research at Harvard. Founded Isha Health to make evidence-based ketamine therapy accessible through telemedicine.</p>
          </div>
        </div>

        {/* Clinician Photo Grid */}
        <div style={{ display: 'flex', flexWrap: 'wrap' as const, justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
          {team.slice(1).map((m, i) => (
            <img key={i} src={m.img} alt={m.name} style={{ width: '72px', height: '72px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #fff', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }} loading="lazy" />
          ))}
        </div>

        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.85rem', color: '#6b7280', textAlign: 'center', marginBottom: '1.5rem' }}>Our network includes 600+ clinicians across the country &mdash; psychiatrists, psychologists, LMFTs, and LCSWs.</p>

        <div style={{ textAlign: 'center' }}>
          <a href="/ketamine-therapist-directory" style={{ display: 'inline-block', backgroundColor: '#0d9488', color: '#fff', padding: '0.85rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', fontFamily: "'Poppins', sans-serif" }}>Browse the Clinician Directory</a>
        </div>
      </div>
    </div>

    {/* In the News */}
    <div
      dangerouslySetInnerHTML={{
        __html: `<div style="background-color:#fff;padding:3rem 1.5rem;border-top:1px solid #e5e7eb;">
          <div style="max-width:700px;margin:0 auto;text-align:center;">
            <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;text-align:center;margin-bottom:0.5rem;">In the News</h2>
            <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#6b7280;text-align:center;margin-bottom:2rem;">Hundreds of thousands of patients are on their healing journey with ketamine therapy</p>
            <div style="display:flex;flex-wrap:wrap;gap:2.5rem;justify-content:center;align-items:center;">
              <a href="https://www.forbes.com/sites/willyakowicz/2021/10/18/why-ketamine-assisted-therapy-has-gone-mainstream/" target="_blank" rel="noopener" style="text-decoration:none;">
                <img src="/images/8bae9ca9_6337ea9bc2d6b0748d86a074_Forbes.png" alt="Forbes" style="height:28px;opacity:0.6;" loading="lazy" />
              </a>
              <a href="https://www.newyorker.com/culture/annals-of-inquiry/ketamine-therapy-is-going-mainstream-are-we-ready" target="_blank" rel="noopener" style="text-decoration:none;">
                <img src="/images/e113f654_6337f3659841f91f7e9a2ee5_TheNewYorker.webp" alt="The New Yorker" style="height:22px;opacity:0.6;" loading="lazy" />
              </a>
              <a href="https://www.glamour.com/story/ketamine-assisted-psychotherapy-to-treat-postpartum-depression" target="_blank" rel="noopener" style="text-decoration:none;">
                <img src="/images/cc41832e_6337ea9bad6a6d4e0ff50e47_Glamour.png" alt="Glamour" style="height:24px;opacity:0.6;" loading="lazy" />
              </a>
            </div>
          </div>
        </div>`,
      }}
    />

    {/* Featured Content */}
    <div
      dangerouslySetInnerHTML={{
        __html: `<div style="background-color:#f9fafb;padding:3.5rem 1.5rem;border-top:1px solid #e5e7eb;">
          <div style="max-width:1100px;margin:0 auto;">
            <div style="text-align:center;margin-bottom:2rem;">
              <h2 style="font-family:'Libre Baskerville',serif;font-size:1.5rem;font-weight:700;color:#111827;margin-bottom:0.5rem;">Learn More</h2>
              <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#6b7280;">Evidence-based insights on ketamine therapy from our clinical team</p>
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:1.5rem;justify-content:center;">
              <a href="/outcomes" style="flex:1 1 300px;max-width:340px;text-decoration:none;color:inherit;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;background:#fff;">
                <div style="padding:1.25rem;">
                  <p style="font-family:'Poppins',sans-serif;font-size:0.7rem;color:#0d9488;font-weight:600;margin-bottom:0.35rem;text-transform:uppercase;letter-spacing:0.05em;">Clinical Data</p>
                  <p style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;line-height:1.4;margin-bottom:0.5rem;">Patient Outcomes & Clinical Results</p>
                  <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.85rem;color:#4b5563;line-height:1.5;">88.8% improvement rate across 546 patients. PHQ-9, GAD-7, and retention data.</p>
                </div>
              </a>
              <a href="/post/case-study-julian-ketamine-maintenance-treatment-resistant-depression" style="flex:1 1 300px;max-width:340px;text-decoration:none;color:inherit;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;background:#fff;">
                <div style="padding:1.25rem;">
                  <p style="font-family:'Poppins',sans-serif;font-size:0.7rem;color:#0d9488;font-weight:600;margin-bottom:0.35rem;text-transform:uppercase;letter-spacing:0.05em;">Patient Story</p>
                  <p style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;line-height:1.4;margin-bottom:0.5rem;">Julian's Story: When Ketamine Worked</p>
                  <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.85rem;color:#4b5563;line-height:1.5;">A senior attorney with treatment-resistant depression found rapid relief.</p>
                </div>
              </a>
              <a href="/post/how-much-does-ketamine-therapy-cost" style="flex:1 1 300px;max-width:340px;text-decoration:none;color:inherit;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;background:#fff;">
                <div style="padding:1.25rem;">
                  <p style="font-family:'Poppins',sans-serif;font-size:0.7rem;color:#0d9488;font-weight:600;margin-bottom:0.35rem;text-transform:uppercase;letter-spacing:0.05em;">Cost & Insurance</p>
                  <p style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;line-height:1.4;margin-bottom:0.5rem;">How Much Does Ketamine Therapy Cost?</p>
                  <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.85rem;color:#4b5563;line-height:1.5;">Pricing, insurance options, and what to expect financially.</p>
                </div>
              </a>
            </div>
            <div style="text-align:center;margin-top:1.5rem;">
              <a href="/blog" style="font-family:'Poppins',sans-serif;color:#0d9488;text-decoration:underline;font-size:0.9rem;">View all articles \u2192</a>
            </div>
          </div>
        </div>`,
      }}
    />
    </>
  );
}
