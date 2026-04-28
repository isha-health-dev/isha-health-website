import type { Metadata } from 'next';
import { buildOpenGraph } from '@/lib/seo';

export const metadata: Metadata = {
  title: "Dr Mai Shimada | Isha Health",
  description: "Dr. Mai Shimada is a board certified emergency medicine physician with over 10 years of experience . She decided to start Isha Health after discovering the transformative benefits of ketamine therapy for various mental health conditions. She completed Psychedelic Facilitation Certification Program at the UC Berkeley and is a study physician for psychedelic medicine clinical trials at Open Mind Collective.",
  alternates: {
    canonical: "https://isha.health/dr-mai-shimada",
  },
  openGraph: buildOpenGraph({
    title: "Dr Mai Shimada | Isha Health",
    description: "Dr. Mai Shimada is a board certified emergency medicine physician with over 10 years of experience . She decided to start Isha Health after discovering the transformative benefits of ketamine therapy for various mental health conditions. She completed Psychedelic Facilitation Certification Program at the UC Berkeley and is a study physician for psychedelic medicine clinical trials at Open Mind Collective.",
    path: '/dr-mai-shimada',
  }),
  twitter: {
    card: "summary_large_image",
    title: "Dr Mai Shimada | Isha Health",
    description: "Dr. Mai Shimada is a board certified emergency medicine physician with over 10 years of experience . She decided to start Isha Health after discovering the transformative benefits of ketamine therapy for various mental health conditions. She completed Psychedelic Facilitation Certification Program at the UC Berkeley and is a study physician for psychedelic medicine clinical trials at Open Mind Collective.",
  },
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<div style="max-width: 1100px; margin: 0 auto; padding: 60px 24px; font-family: 'Poppins', sans-serif; color: #1a1a1a;">
  <div style="display: flex; flex-wrap: wrap; gap: 48px;">

    <!-- Sidebar -->
    <div style="flex: 0 0 280px; max-width: 100%;">
      <img
        src="/images/9e2f85f0_664f5478f308400fff293b76_dr_mai.png"
        alt="Dr. Mai Shimada, double board-certified physician in Emergency Medicine and Clinical Informatics, founder of Isha Health, and expert in psychedelic-assisted therapy"
        loading="lazy"
        style="width: 220px; height: 300px; object-fit: cover; object-position: top; border-radius: 12px; display: block; margin-bottom: 32px;"
      />

      <div style="display: flex; align-items: flex-start; gap: 16px; margin-top: 16px;">
        <img
          src="/images/54a9ae89_6651b07fc907482f661bf222_Group_24__6).png"
          alt="Experience and Training icon"
          loading="lazy"
          width="60"
          height="60"
          style="flex-shrink: 0;"
        />
        <div>
          <h3 style="font-family: 'Libre Baskerville', Georgia, serif; font-size: 1.05rem; font-weight: 700; margin: 0 0 12px 0; color: #1a1a1a;">Experience &amp; Training</h3>
          <ul style="padding-left: 18px; margin: 0 0 10px 0; font-size: 0.9rem; line-height: 1.7; color: #333;">
            <li style="margin-bottom: 8px;">Ketamine-Assisted Psychotherapy Training Program, <a href="https://training.polarisinsight.com/" style="color: #0d9488; text-decoration: underline;">Polaris Insight Center</a></li>
            <li style="margin-bottom: 8px;">Psychedelic Facilitation Certification, UC Berkeley Center for the Science of Psychedelics in two areas</li>
          </ul>
          <ul style="padding-left: 18px; margin: 0; font-size: 0.9rem; line-height: 1.7; color: #333;">
            <li style="margin-bottom: 8px;">Clinical Trial Study Physician, Open Mind Collective</li>
            <li style="margin-bottom: 8px;">Postdoctoral Research, Harvard John A. Paulson School of Engineering and Applied Sciences</li>
            <li style="margin-bottom: 8px;">Doctor of Medicine, The University of Tokyo</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div style="flex: 1 1 500px; min-width: 0;">
      <h1 style="font-family: 'Libre Baskerville', Georgia, serif; font-size: 2rem; font-weight: 700; margin: 0 0 16px 0; color: #1a1a1a;">Dr. Mai Shimada</h1>
      <div style="width: 60px; height: 3px; background-color: #0d9488; border-radius: 2px; margin-bottom: 16px;"></div>
      <p style="font-size: 1rem; line-height: 1.7; margin: 0 0 24px 0; color: #444;">
        Founder &amp; CEO<br />
        Available in AZ, CA, CO, FL, GA, NY, OR, TX, and WA
      </p>
      <a
        href="https://isha.health/appointment#all-states-booking"
        style="display: inline-block; background-color: #0d9488; color: #fff; font-family: 'Poppins', sans-serif; font-size: 1rem; font-weight: 600; padding: 14px 32px; border-radius: 8px; text-decoration: none; margin-bottom: 36px; transition: background-color 0.2s;"
      >Schedule with Dr. Mai</a>

      <div style="font-size: 1rem; line-height: 1.85; color: #333;">
        <p style="margin-bottom: 20px;">Dr. Mai Shimada is a double board-certified physician with over a decade of experience. Born and raised in Japan, she has always been drawn to bridging cultures and disciplines to create innovative healthcare solutions.</p>
        <p style="margin-bottom: 20px;">After earning her medical degree from The University of Tokyo, Dr. Shimada pursued postdoctoral research at Harvard, where she deepened her understanding of cutting-edge medical advancements. She later earned an MBA from INSEAD, gaining an international perspective on building sustainable healthcare systems that truly serve patients.</p>
        <p style="margin-bottom: 20px;">Her journey into mental health was shaped by both professional experiences and personal insights. As an ER doctor, she witnessed firsthand how conventional treatments often fell short, leading her to explore transformative therapies like ketamine-assisted psychotherapy. She founded Isha Health to make these innovative treatments accessible, combining medical expertise with a human-centered approach.</p>
        <p style="margin-bottom: 20px;">Dr. Shimada also completed the Psychedelic Facilitation Certification Program at the UC Berkeley Center for the Science of Psychedelics and serves as a study physician in clinical trials for psychedelic medicine. She remains committed to advancing mental healthcare through evidence-based, integrative approaches.</p>
      </div>

      <!-- Testimonials -->
      <div style="margin-top: 48px; padding-top: 40px; border-top: 1px solid #e5e5e5;">
        <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 32px;">
          <img
            src="/images/01f8e368_665035e3fba05b4f530e4073_Frame_97.png"
            alt="Testimonials icon"
            loading="lazy"
            style="width: 48px; height: 48px;"
          />
          <h3 style="font-family: 'Libre Baskerville', Georgia, serif; font-size: 1.3rem; font-weight: 700; margin: 0; color: #1a1a1a;">Patient Testimonials</h3>
        </div>

        <!-- Testimonial 1 -->
        <div style="margin-bottom: 28px;">
          <p style="font-family: 'Source Sans Pro', 'Source Sans 3', sans-serif; font-size: 1.05rem; line-height: 1.75; color: #333; font-style: italic; margin: 0 0 8px 0;">
            "Dr. Mai is a doctor who truly listens to her patients."
          </p>
          <p style="font-size: 0.9rem; color: #666; margin: 0;">Alex V from Seattle, Washington</p>
        </div>
        <div style="width: 60px; height: 2px; background-color: #0d9488; border-radius: 2px; margin-bottom: 28px;"></div>

        <!-- Testimonial 2 -->
        <div style="margin-bottom: 28px;">
          <p style="font-family: 'Source Sans Pro', 'Source Sans 3', sans-serif; font-size: 1.05rem; line-height: 1.75; color: #333; font-style: italic; margin: 0 0 8px 0;">
            "I'm grateful that I started ketamine treatment with Dr. Mai. After decades of struggling with depression, I finally felt like myself again."
          </p>
          <p style="font-size: 0.9rem; color: #666; margin: 0;">Davis P from San Francisco, California</p>
        </div>
        <div style="width: 60px; height: 2px; background-color: #0d9488; border-radius: 2px; margin-bottom: 28px;"></div>

        <!-- Testimonial 3 -->
        <div style="margin-bottom: 28px;">
          <p style="font-family: 'Source Sans Pro', 'Source Sans 3', sans-serif; font-size: 1.05rem; line-height: 1.75; color: #333; font-style: italic; margin: 0 0 8px 0;">
            "Dr. Mai is professional and provided clear explanations to all my questions about ketamine treatment. I find her highly trustworthy."
          </p>
          <p style="font-size: 0.9rem; color: #666; margin: 0;">Zoe P from Boulder, Colorado</p>
        </div>
      </div>

    </div>
  </div>
</div>
`,
      }}
    />
  );
}
