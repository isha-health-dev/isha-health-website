import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ISHA Health Press - Online Ketamine Therapy",
  description: "ISHA Health has been featured in a variety of news outlets and publications for our innovative approach to online ketamine therapy for depression and",
  alternates: {
    canonical: "https://isha.health/isha-health-in-the-media",
  },
  openGraph: {
    title: "ISHA Health Press - Online Ketamine Therapy",
    description: "ISHA Health has been featured in a variety of news outlets and publications for our innovative approach to online ketamine therapy for depression and",
    type: "website",
    url: "https://isha.health/isha-health-in-the-media",
  },
  twitter: {
    card: "summary_large_image",
    title: "ISHA Health Press - Online Ketamine Therapy",
    description: "ISHA Health has been featured in a variety of news outlets and publications for our innovative approach to online ketamine therapy for depression and",
  },
};

const media = [
  {
    title: "Cohort Conversations",
    subtitle: "UC Berkeley Center for the Science of Psychedelics",
    desc: "Stories from the Psychedelic Facilitation Program — Mai Shimada, Founder and CEO of Isha Health",
    quote: "Mai Shimada MD, the founder and CEO of Isha Health, is dedicated to providing holistic mental healthcare, bridging Eastern and Western approaches to healing...",
    img: "/images/5b6c8946_672c752e058f922d2df92148_Frame_106.png",
    url: "https://psychedelics.berkeley.edu/cohort-conversations-mai-shimada-founder-and-ceo-of-isha-health/",
    cta: "Listen Now",
  },
  {
    title: "ACE NextGen Unity Conference",
    subtitle: "Panel Discussion",
    desc: "#78 — Dr. Mai Shimada, on Ketamine Assisted Therapy & Founding as an MD",
    quote: "At the ACE NextGen Unity Conference in New York City, Dr. Mai joined a panel discussion on Balancing Business and Well-Being, sharing insights on the intersection of entrepreneurship and mental health.",
    img: "/images/d6f8e999_6734811c7fd486f1b9e7b99a_acenexegen.png",
    url: "https://www.acenextgen.org/unity2024",
    cta: "Learn More",
  },
  {
    title: "The UrbanCred Podcast",
    subtitle: "Episode 27",
    desc: "Using Psychedelics to Cure Mental Health with Dr. Mai Shimada of Isha Health",
    quote: "We chat with an emergency medicine physician with over ten years of experience working in multiple emergency rooms...",
    img: "/images/c3d9cf86_6414f256a397e98c9e7b13d7_urbancred_podcast.webp",
    url: "https://podcasts.apple.com/us/podcast/27-using-psychedelics-to-cure-mental-health-with-dr/id1511053660?i=1000576251775",
    cta: "Listen Now",
  },
  {
    title: "The Next Iteration Podcast",
    subtitle: "Episode 78",
    desc: "Dr. Mai Shimada, on Ketamine Assisted Therapy & Founding as an MD",
    quote: "Today's episode is on ketamine assisted therapy and psychedelics in general, featuring Dr. Mai Shimada...",
    img: "/images/2566d26a_641834ee950cbe5631905b5c_the_next_iteration_podcast.webp",
    url: "https://podcasts.apple.com/ca/podcast/78-dr-mai-shimada-on-ketamine-assisted-therapy-founding/id1490976613?i=1000578732153",
    cta: "Listen Now",
  },
  {
    title: "Forward Thinking Founders",
    subtitle: "Episode 830",
    desc: "Mai Shimada (Isha Health) On Unlocking Your Mental Health With Ketamine",
    quote: "Mai Shimada is the founder of Isha Health. Isha Health enables online ketamine assisted therapy with a team of licensed clinicians.",
    img: "/images/59937d07_6418356862acbd1070e821c3_forward_thiking_founders.webp",
    url: "https://podcasts.apple.com/jp/podcast/830-mai-shimada-isha-health-on-unlocking-your-mental/id1454168902?i=1000567397373&l=en",
    cta: "Listen Now",
  },
  {
    title: "Beat the Often Path Podcast",
    subtitle: "Episode 149",
    desc: "Mai Shimada M.D.: Using Ketamine for Treating Depression and PTSD",
    quote: "Even though this treatment is completely legal, if that bothers you, turn it off right now. I'm going to preface this episode by...",
    img: "/images/bc73405c_6418618a494f1608b6f830cf_Screenshot_2023-03-18_at_00.49.28.webp",
    url: "https://rosspalmer.com/mai-shimada/",
    cta: "Listen Now",
  },
  {
    title: "Modern Aging Podcast",
    subtitle: "Holistic Health & Wellness After 50",
    desc: "Ketamine for Depression, Ketamine for Pain — How It Works for Treatment-Resistant Mental Health Conditions",
    quote: "If you have treatment-resistant depression or anxiety and feel like you have tried everything, then you may want to check...",
    img: "/images/fd74bcd0_6418631298b52b1d683e5345_Modern_Aging_Podcast_CoverArt.webp",
    url: "https://www.youtube.com/watch?v=al1YZSDwYbg",
    cta: "Watch Now",
  },
  {
    title: "Forbes Japan",
    subtitle: "Feature Article (in Japanese)",
    desc: "Dr. Shimada starts a ketamine clinic in San Francisco after her experience as an emergency physician in Brooklyn",
    quote: "The first place she started working as an emergency medicine resident was at a tertiary care hospital in Brooklyn, New York.",
    img: "/images/0ae075c6_644a00741e16495c195f1992_Frame_17.webp",
    url: "https://forbesjapan.com/articles/detail/52587",
    cta: "Read Now",
  },
];

export default function Page() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
      <div style={{ textAlign: 'center', padding: '2rem 0 3rem' }}>
        <h1 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '2rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>Isha Health in the Media</h1>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '1rem', color: '#6b7280', lineHeight: 1.6 }}>Podcasts, press features, and panel discussions with Dr. Mai Shimada</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
        {media.map((m, i) => (
          <a
            key={i}
            href={m.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              background: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '10px',
              overflow: 'hidden',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'box-shadow 0.2s',
            }}
          >
            <img
              src={m.img}
              alt={m.title}
              loading="lazy"
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '1.25rem' }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.7rem', color: '#0d9488', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.05em', marginBottom: '0.25rem' }}>{m.subtitle}</p>
              <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '1.05rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem', lineHeight: 1.3 }}>{m.title}</h2>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.85rem', color: '#374151', lineHeight: 1.5, marginBottom: '0.75rem' }}>{m.desc}</p>
              <p style={{ fontFamily: "'Source Sans Pro', sans-serif", fontSize: '0.8rem', color: '#6b7280', fontStyle: 'italic', lineHeight: 1.5, marginBottom: '1rem' }}>&ldquo;{m.quote}&rdquo;</p>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.85rem', color: '#0d9488', fontWeight: 600 }}>{m.cta} &rarr;</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
