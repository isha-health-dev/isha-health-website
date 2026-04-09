import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dr Akua Brown | Isha Health",
  description: "Dr. Akua Brown specializes in psychedelic medicine with a focus on increasing accessibility, education, and safety in the field.",
  alternates: {
    canonical: "https://isha.health/dr-akua-brown",
  },
  openGraph: {
    title: "Dr Akua Brown | Isha Health",
    description: "Dr. Akua Brown specializes in psychedelic medicine with a focus on increasing accessibility, education, and safety in the field.",
    type: "website",
    url: "https://isha.health/dr-akua-brown",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Akua Brown | Isha Health",
    description: "Dr. Akua Brown specializes in psychedelic medicine with a focus on increasing accessibility, education, and safety in the field.",
  },
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: "<div style=\"padding:0 0 2rem;\"><div class=\"doctor-page-wrapper\"><div class=\"doctor-sidebar\"><img src=\"/images/96471302_664f5478f308400fff293b6c_dr_akua.png\" loading=\"lazy\" alt=\"Dr akua\" height=\"Auto\" class=\"doctor_pic\"><div class=\"doctor-sidebar-container\"><img src=\"/images/54a9ae89_6651b07fc907482f661bf222_Group_24__6).png\" loading=\"lazy\" width=\"60\" height=\"60\" alt=\"Group 24 6)\" class=\"doctor-psge-icon\"><div><div style=\"font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;\"><h3>Experience &amp;&nbsp;Training</h3><p>‍</p><ul role=\"list\"><li>Medical Director, <a href=\"https://www.alchemytherapy.org/\">Alchemy Community Therapy Center</a>‍</li><li>Ketamine-Assisted Psychotherapy Training Program, <a href=\"https://training.polarisinsight.com/\">Polaris Insight Center</a></li></ul><ul role=\"list\"><li>Speaker at MAPS PS2023 conference on a panel titled: <a href=\"https://maps.org/2023/05/12/psychedelic-science-2023-announces-sessions-and-select-featured-speakers-for-the-therapy-and-practitioners-tracks-for-june-conference/\">\"Building community-oriented therapy practices\"</a></li><li>Featured in a recent list of <a href=\"https://oaklandhyphae.substack.com/p/100-grassroots-psychedelic-community?utm_medium=reader2\">\"100 grassroots psychedelic community leaders you need to know in 2024\"</a></li></ul><ul role=\"list\"><li>Doctor of Medicine, Latin American School of Medicine</li></ul></div></div></div></div><div class=\"doctor-maiin-wrapper\"><h1>Akua Brown, MD</h1><div class=\"green-line\"></div><p>Board Certified Physician<br>Available in CA</p><a href=\"https://www.isha.health/appointment#ca-booking\" class=\"button-primary learn-more get-started w-button\">Schedule with Dr. Akua</a><div style=\"font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;\"><p>‍</p><p>‍</p><p>Dr. Akua Brown is a physician specializing in psychedelic medicine, with a deep commitment to accessibility, education, and safety in the field. Rooted in a community-focused approach, she brings a unique perspective informed by her identity as a Black American, queer, nature lover, and abolitionist.</p><p>‍</p><p>Fluent in Spanish and English, Dr. Brown embraces the power of culturally responsive care, ensuring that psychedelic therapy is inclusive and accessible to diverse communities. Her dedication to holistic health and patient empowerment has shaped her work, strengthening her connection to community, spirit, and the joy of healing through psychedelic therapies.</p><p>‍</p><p>As Medical Director at Alchemy Community Therapy Center, Dr. Brown actively expands access to psychedelic-assisted therapy, particularly for underserved populations. She has trained extensively in Ketamine-Assisted Psychotherapy at Polaris Insight Center and shares her expertise through speaking engagements, including her panel discussion at MAPS PS2023: \"Building Community-Oriented Therapy Practices.\"</p><p>‍</p><p>Her leadership in the field was recognized in 2024 when she was featured as one of the \"100 Grassroots Psychedelic Community Leaders You Need to Know.\"</p><p>‍</p><p>Dr. Brown earned her Doctor of Medicine from the Latin American School of Medicine, where she gained firsthand experience in global and integrative approaches to healthcare. She remains deeply committed to helping others find fulfillment and empowerment in their therapeutic journeys.</p><p>‍</p><p>‍</p></div><div class=\"doctor-testimonial\"><img src=\"/images/01f8e368_665035e3fba05b4f530e4073_Frame_97.png\" loading=\"lazy\" alt=\"Frame 97\" class=\"image-27\"><div class=\"rich-text-block-6 w-richtext\"><h3 class=\"heading-27\">Patient Testimonials</h3></div><p>Dr. Akua's approach to psychedelic therapy has transformed my perspective on mental health; her guidance is both empowering and enlightening.</p><p class=\"left-align\">Sonia G from Oakland, California</p><div class=\"green-line\"></div><p>I feel truly supported and understood in my sessions with Dr. Akua. She provides a safe and nurturing environment for healing.</p><p class=\"left-align\">Scarlett H from San Diego, California</p><div class=\"green-line\"></div><p>Dr. Akua’s expertise in psychedelic treatment has been crucial to my recovery. Her compassionate care has opened new paths for me.</p><p class=\"left-align\">Gianni W from Sacramento, California</p></div></div></div></div>",
      }}
    />
  );
}
