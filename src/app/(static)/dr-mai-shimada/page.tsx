import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dr Mai Shimada | Isha Health",
  description: "Dr. Mai Shimada is a board certified emergency medicine physician with over 10 years of experience . She decided to start Isha Health after discovering the transformative benefits of ketamine therapy for various mental health conditions. She completed Psychedelic Facilitation Certification Program at the UC Berkeley and is a study physician for psychedelic medicine clinical trials at Open Mind Collective.",
  alternates: {
    canonical: "https://isha.health/dr-mai-shimada",
  },
  openGraph: {
    title: "Dr Mai Shimada | Isha Health",
    description: "Dr. Mai Shimada is a board certified emergency medicine physician with over 10 years of experience . She decided to start Isha Health after discovering the transformative benefits of ketamine therapy for various mental health conditions. She completed Psychedelic Facilitation Certification Program at the UC Berkeley and is a study physician for psychedelic medicine clinical trials at Open Mind Collective.",
    type: "website",
    url: "https://isha.health/dr-mai-shimada",
  },
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
        __html: "<div class=\"section-base white-section\"><div class=\"doctor-page-wrapper\"><div class=\"doctor-sidebar\"><img src=\"https://cdn.prod.website-files.com/6337562c72fde26133b64644/664f5478f308400fff293b76_dr_mai.png\" loading=\"lazy\" alt=\"Dr. Mai Shimada, double board-certified physician in Emergency Medicine and Clinical Informatics, founder of Isha Health, and expert in psychedelic-assisted therapy\" height=\"Auto\" class=\"doctor_pic\"><div class=\"doctor-sidebar-container\"><img src=\"https://cdn.prod.website-files.com/6337562c72fde26133b64644/6651b07fc907482f661bf222_Group%2024%20(6).png\" loading=\"lazy\" width=\"60\" height=\"60\" alt=\"\" class=\"doctor-psge-icon\"><div><div class=\"rich-text w-richtext\"><h3>Experience &amp;&nbsp;Training</h3><p>‍</p><ul role=\"list\"><li>Ketamine-Assisted Psychotherapy Training Program, <a href=\"https://training.polarisinsight.com/\">Polaris Insight Center</a></li><li>Psychedelic Facilitation Certification, UC Berkeley Center for the Science of Psychedelics in two areas</li></ul><ul role=\"list\"><li>Clinical Trail Study Physician, Open Mind Collective</li><li>Postdoctoral Research, Harvard John A. Paulson School of Engineering and Applied Sciences</li><li>Doctor of Medicine, The University of Tokyo</li></ul></div></div></div></div><div class=\"doctor-maiin-wrapper\"><h1>Dr. Mai Shimada</h1><div class=\"green-line\"></div><p>Founder &amp;&nbsp;CEO<br>Available in AZ, CA, CO, FL, GA, NY, OR, TX, and WA</p><a href=\"https://www.isha.health/appointment#all-states-booking\" class=\"button-primary learn-more get-started w-button\">Schedule with Dr. Mai</a><div class=\"rich-text w-richtext\"><p>‍</p><p>‍</p><p>Dr. Mai Shimada is a double board-certified physician with over a decade of experience. Born and raised in Japan, she has always been drawn to bridging cultures and disciplines to create innovative healthcare solutions.</p><p>‍</p><p>After earning her medical degree from The University of Tokyo, Dr. Shimada pursued postdoctoral research at Harvard, where she deepened her understanding of cutting-edge medical advancements. She later earned an MBA from INSEAD, gaining an international perspective on building sustainable healthcare systems that truly serve patients.</p><p>‍</p><p>Her journey into mental health was shaped by both professional experiences and personal insights. As an ER doctor, she witnessed firsthand how conventional treatments often fell short, leading her to explore transformative therapies like ketamine-assisted psychotherapy. She founded Isha Health to make these innovative treatments accessible, combining medical expertise with a human-centered approach.</p><p>‍</p><p>Dr. Shimada also completed the Psychedelic Facilitation Certification Program at the UC Berkeley Center for the Science of Psychedelics and serves as a study physician in clinical trials for psychedelic medicine. She remains committed to advancing mental healthcare through evidence-based, integrative approaches.</p><p>‍</p><p>‍</p></div><div class=\"doctor-sidebar-container mobile\"></div><div class=\"doctor-testimonial\"><img src=\"https://cdn.prod.website-files.com/6337562c72fde26133b64644/665035e3fba05b4f530e4073_Frame%2097.png\" loading=\"lazy\" alt=\"\" class=\"image-27\"><div class=\"rich-text-block-6 w-richtext\"><h3 class=\"heading-27\">Patient Testimonials</h3></div><div class=\"w-richtext\"><p>Dr. Mai is a doctor who truly listens to her patients.</p></div><p class=\"left-align\">Alex V from Seattle, Washington</p><div class=\"green-line\"></div><p>I'm grateful that I started ketamine treatment with Dr. Mai. After decades of struggling with depression, I finally felt like myself again.</p><p class=\"left-align\">Davis P &nbsp;from San Francisco, California</p><div class=\"green-line\"></div><p>Dr. Mai is professional and provided clear explanations to all my questions about ketamine treatment. I find her highly trustworthy.</p><p class=\"left-align\">Zoe P from Boulder, Colorado</p></div></div></div></div><!-- Google Tag Manager (noscript) -->\n\n<!-- End Google Tag Manager (noscript) -->\n\n",
      }}
    />
  );
}
