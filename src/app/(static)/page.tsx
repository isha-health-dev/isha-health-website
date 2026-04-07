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

export default function Page() {
  return (
    <>
    {/* Hero */}
    <div
      dangerouslySetInnerHTML={{
        __html: `<div style="background-color:#f9f7f3;padding:5rem 1.5rem 4rem;">
          <div style="max-width:700px;margin:0 auto;text-align:center;">
            <h1 style="font-family:'Libre Baskerville',serif;font-size:2.8rem;font-weight:700;color:#111827;line-height:1.15;margin-bottom:1rem;">Unlock Your Mind's Potential</h1>
            <p style="font-family:'Poppins',sans-serif;font-size:1.15rem;color:#4b5563;line-height:1.7;margin-bottom:0.75rem;">Personalized ketamine-assisted therapy for depression, anxiety, and PTSD — from the comfort of your home.</p>
            <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#6b7280;margin-bottom:2rem;">Physician-led · $350 per consultation · Available in 9 states</p>
            <a href="/am-i-a-candidate" style="display:inline-block;background-color:#0d9488;color:#fff;padding:0.9rem 2.5rem;border-radius:8px;text-decoration:none;font-weight:600;font-size:1rem;font-family:'Poppins',sans-serif;">Am I a Candidate?</a>
          </div>
        </div>`,
      }}
    />

    {/* Outcomes Trust Bar */}
    <div
      dangerouslySetInnerHTML={{
        __html: `<div style="background-color:#0f766e;padding:2.5rem 1.5rem;">
          <div style="max-width:1000px;margin:0 auto;text-align:center;">
            <p style="font-family:'Libre Baskerville',serif;font-size:1.2rem;font-weight:700;color:#fff;margin-bottom:1.5rem;">Real Results from Real Patients</p>
            <div style="display:flex;flex-wrap:wrap;gap:1.5rem;justify-content:center;">
              <div style="flex:1 1 180px;max-width:220px;">
                <p style="font-family:'Libre Baskerville',serif;font-size:2.2rem;font-weight:700;color:#5eead4;margin-bottom:0.25rem;">88.8%</p>
                <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#ccfbf1;line-height:1.4;">improvement rate in patients with moderate-to-severe depression</p>
              </div>
              <div style="flex:1 1 180px;max-width:220px;">
                <p style="font-family:'Libre Baskerville',serif;font-size:2.2rem;font-weight:700;color:#5eead4;margin-bottom:0.25rem;">92.6%</p>
                <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#ccfbf1;line-height:1.4;">of anxiety patients reach minimal anxiety levels</p>
              </div>
              <div style="flex:1 1 180px;max-width:220px;">
                <p style="font-family:'Libre Baskerville',serif;font-size:2.2rem;font-weight:700;color:#5eead4;margin-bottom:0.25rem;">546</p>
                <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#ccfbf1;line-height:1.4;">patients with validated PHQ-9 and GAD-7 assessments</p>
              </div>
              <div style="flex:1 1 180px;max-width:220px;">
                <p style="font-family:'Libre Baskerville',serif;font-size:2.2rem;font-weight:700;color:#5eead4;margin-bottom:0.25rem;">99.1%</p>
                <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#ccfbf1;line-height:1.4;">patient retention rate across treatment</p>
              </div>
            </div>
            <a href="/outcomes" style="display:inline-block;margin-top:1.5rem;font-family:'Poppins',sans-serif;font-size:0.85rem;color:#5eead4;text-decoration:underline;">See our full clinical outcomes report →</a>
          </div>
        </div>`,
      }}
    />

    {/* How It Works */}
    <div
      dangerouslySetInnerHTML={{
        __html: `<div style="background-color:#fff;padding:3rem 1.5rem;">
          <div style="max-width:900px;margin:0 auto;">
            <h2 style="font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:700;color:#111827;text-align:center;margin-bottom:2rem;">How It Works</h2>
            <div style="display:flex;flex-wrap:wrap;gap:1.5rem;justify-content:center;">
              <div style="flex:1 1 220px;max-width:260px;text-align:center;">
                <p style="font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#0d9488;margin-bottom:0.5rem;">1</p>
                <h3 style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#111827;margin-bottom:0.35rem;">Book a Consultation</h3>
                <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#4b5563;line-height:1.5;">60-minute video appointment with a licensed physician. Same-day availability.</p>
              </div>
              <div style="flex:1 1 220px;max-width:260px;text-align:center;">
                <p style="font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#0d9488;margin-bottom:0.5rem;">2</p>
                <h3 style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#111827;margin-bottom:0.35rem;">Get Your Treatment Plan</h3>
                <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#4b5563;line-height:1.5;">Your doctor creates a personalized protocol based on your symptoms, history, and goals.</p>
              </div>
              <div style="flex:1 1 220px;max-width:260px;text-align:center;">
                <p style="font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#0d9488;margin-bottom:0.5rem;">3</p>
                <h3 style="font-family:'Poppins',sans-serif;font-size:0.95rem;font-weight:600;color:#111827;margin-bottom:0.35rem;">Start Treatment at Home</h3>
                <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#4b5563;line-height:1.5;">Medication shipped to your door. Your care team monitors progress and adjusts as needed.</p>
              </div>
            </div>
            <div style="text-align:center;margin-top:1.75rem;">
              <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#6b7280;">Led by <a href="/dr-mai-shimada" style="color:#0d9488;text-decoration:underline;">Mai Shimada, MD</a> — board-certified physician with 10+ years of experience</p>
            </div>
          </div>
        </div>`,
      }}
    />

    {/* Testimonials */}
    <div
      dangerouslySetInnerHTML={{
        __html: `<div style="background-color:#f9fafb;padding:3rem 1.5rem;border-top:1px solid #e5e7eb;">
          <div style="max-width:900px;margin:0 auto;">
            <h2 style="font-family:'Libre Baskerville',serif;font-size:1.35rem;font-weight:700;color:#111827;text-align:center;margin-bottom:2rem;">What Our Patients Say</h2>
            <div style="display:flex;flex-wrap:wrap;gap:1.5rem;justify-content:center;">
              <div style="flex:1 1 260px;max-width:400px;padding:1.5rem;border:1px solid #e5e7eb;border-radius:10px;background:#fff;">
                <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#374151;line-height:1.6;font-style:italic;margin-bottom:0.75rem;">"Ketamine assisted therapy helped me so much to get out of my depression and PTSD. I never felt better in my life."</p>
                <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;font-weight:600;">— Amber S, Brooklyn, New York</p>
              </div>
              <div style="flex:1 1 260px;max-width:400px;padding:1.5rem;border:1px solid #e5e7eb;border-radius:10px;background:#fff;">
                <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#374151;line-height:1.6;font-style:italic;margin-bottom:0.75rem;">"My anxiety is just gone. I barely think about it anymore. It wasn't instantaneous, but it worked eventually."</p>
                <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;font-weight:600;">— Patricia L, Santa Monica, California</p>
              </div>
              <div style="flex:1 1 260px;max-width:400px;padding:1.5rem;border:1px solid #e5e7eb;border-radius:10px;background:#fff;">
                <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#374151;line-height:1.6;font-style:italic;margin-bottom:0.75rem;">"I tried IV ketamine for my treatment-resistant depression before and it was too much for me. Isha's approach is gentler on my body and worked great."</p>
                <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;font-weight:600;">— Laila L, New York, New York</p>
              </div>
              <div style="flex:1 1 260px;max-width:400px;padding:1.5rem;border:1px solid #e5e7eb;border-radius:10px;background:#fff;">
                <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.9rem;color:#374151;line-height:1.6;font-style:italic;margin-bottom:0.75rem;">"Ketamine therapy is the only treatment that has worked for my depression and anxiety."</p>
                <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;font-weight:600;">— Rakesh V, Seattle, Washington</p>
              </div>
            </div>
          </div>
        </div>`,
      }}
    />

    {/* Featured Content */}
    <div
      dangerouslySetInnerHTML={{
        __html: `<div style="background-color:#fff;padding:3.5rem 1.5rem;border-top:1px solid #e5e7eb;">
          <div style="max-width:1100px;margin:0 auto;">
            <div style="text-align:center;margin-bottom:2rem;">
              <h2 style="font-family:'Libre Baskerville',serif;font-size:1.5rem;font-weight:700;color:#111827;margin-bottom:0.5rem;">Learn More</h2>
              <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#6b7280;">Evidence-based insights on ketamine therapy from our clinical team</p>
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:1.5rem;justify-content:center;">
              <a href="/outcomes" style="flex:1 1 300px;max-width:340px;text-decoration:none;color:inherit;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;background:#f9fafb;">
                <div style="padding:1.25rem;">
                  <p style="font-family:'Poppins',sans-serif;font-size:0.7rem;color:#0d9488;font-weight:600;margin-bottom:0.35rem;text-transform:uppercase;letter-spacing:0.05em;">Clinical Data</p>
                  <p style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;line-height:1.4;margin-bottom:0.5rem;">Patient Outcomes & Clinical Results</p>
                  <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.85rem;color:#4b5563;line-height:1.5;">88.8% improvement rate across 546 patients. PHQ-9, GAD-7, and retention data from our practice.</p>
                </div>
              </a>
              <a href="/post/case-study-julian-ketamine-maintenance-treatment-resistant-depression" style="flex:1 1 300px;max-width:340px;text-decoration:none;color:inherit;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;background:#f9fafb;">
                <div style="padding:1.25rem;">
                  <p style="font-family:'Poppins',sans-serif;font-size:0.7rem;color:#0d9488;font-weight:600;margin-bottom:0.35rem;text-transform:uppercase;letter-spacing:0.05em;">Patient Story</p>
                  <p style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;line-height:1.4;margin-bottom:0.5rem;">Julian's Story: When Ketamine Worked</p>
                  <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.85rem;color:#4b5563;line-height:1.5;">A senior attorney with treatment-resistant depression found rapid relief — then learned why maintenance matters.</p>
                </div>
              </a>
              <a href="/post/how-much-does-ketamine-therapy-cost" style="flex:1 1 300px;max-width:340px;text-decoration:none;color:inherit;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;background:#f9fafb;">
                <div style="padding:1.25rem;">
                  <p style="font-family:'Poppins',sans-serif;font-size:0.7rem;color:#0d9488;font-weight:600;margin-bottom:0.35rem;text-transform:uppercase;letter-spacing:0.05em;">Cost & Insurance</p>
                  <p style="font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;color:#111827;line-height:1.4;margin-bottom:0.5rem;">How Much Does Ketamine Therapy Cost?</p>
                  <p style="font-family:'Source Sans Pro',sans-serif;font-size:0.85rem;color:#4b5563;line-height:1.5;">A breakdown of ketamine therapy pricing, insurance options, and what to expect financially.</p>
                </div>
              </a>
            </div>
            <div style="text-align:center;margin-top:1.5rem;">
              <a href="/blog" style="font-family:'Poppins',sans-serif;color:#0d9488;text-decoration:underline;font-size:0.9rem;">View all articles →</a>
            </div>
          </div>
        </div>`,
      }}
    />
    </>
  );
}
