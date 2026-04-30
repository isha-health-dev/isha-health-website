import type { Metadata } from 'next';
import { buildOpenGraph } from '@/lib/seo';

export const metadata: Metadata = {
  title: "Healing Music Playlist",
  description: "Relax and enhance your ketamine therapy experience with our carefully curated healing music playlist. Find peace and calmness while you undergo treatment…",
  alternates: {
    canonical: "https://isha.health/healing-music-playlist",
  },
  openGraph: buildOpenGraph({
    title: "Healing Music Playlist",
    description: "Relax and enhance your ketamine therapy experience with our carefully curated healing music playlist. Find peace and calmness while you undergo treatment…",
    path: '/healing-music-playlist',
  }),
  twitter: {
    card: "summary_large_image",
    title: "Healing Music Playlist",
    description: "Relax and enhance your ketamine therapy experience with our carefully curated healing music playlist. Find peace and calmness while you undergo treatment…",
  },
};

type Embed = {
  kind: 'playlist' | 'album';
  id: string;
  title: string;
  curator: string;
  description: string;
};

type Section = {
  heading: string;
  subheading: string;
  embeds: Embed[];
};

const sections: Section[] = [
  {
    heading: 'For Your Session',
    subheading:
      'Long-form ambient and cinematic journeys curated for the dosing window — drones, electronica, and modern classical to hold the space.',
    embeds: [
      {
        kind: 'playlist',
        id: '5vmeBxK341JO8oOJ6BUPjK',
        title: 'Isha Health KAP Journey #1',
        curator: 'Steve Friedlander',
        description: '2.5-hour arc of ambient electronica (Jon Hopkins, Carbon Based Lifeforms).',
      },
      {
        kind: 'playlist',
        id: '2CBAwuuqP9ORwBl89Uvq39',
        title: 'Ketamine: Sublingual Sessions 1',
        curator: 'PRATI Music',
        description:
          'Restorative neoclassical and electronica (Stars of the Lid, Biosphere) tuned for sublingual sessions.',
      },
      {
        kind: 'playlist',
        id: '6Dto3bi9XooAYZyObaD1l9',
        title: 'A Playlist for Ketamine',
        curator: 'Eric Sienknecht / Matt Baldwin',
        description:
          'Spacious psybient — Solar Fields, Shpongle, Carbon Based Lifeforms.',
      },
      {
        kind: 'playlist',
        id: '2mT6LpOU4ipJ0BkoCigAiw',
        title: 'Psychedelic Therapy Playlist 1',
        curator: 'Mendel Kaelen, Wavepaths',
        description:
          'Minimalist ambient and modern classical (Stars of the Lid, Brian Eno, Górecki).',
      },
      {
        kind: 'playlist',
        id: '334NrKIQaK8dfQUNWA1N9k',
        title: 'We Are One',
        curator: 'Polaris Insight Center',
        description:
          'Cinematic ambient — Christian Löffler, Ólafur Arnalds, East Forest.',
      },
      {
        kind: 'playlist',
        id: '6EBtnrgLRXUI0mrvgyJVLc',
        title: 'Ketamine Assisted Therapy',
        curator: 'Kaila Compton',
        description: 'Two hours of soundscapes, neoclassical, and field recordings.',
      },
      {
        kind: 'playlist',
        id: '0DkS4rI50cBtRMAILOdxlE',
        title: 'Peaceful Ketamine Journey 1',
        curator: 'Ben Jones',
        description: 'Soft, gentle, ethereal — calm and easy throughout.',
      },
      {
        kind: 'playlist',
        id: '1PBhHh3DqkRUsVf8lqtTVd',
        title: 'Ethereal Memories',
        curator: 'Polaris Insight Center',
        description:
          'Lighter atmospheric progressive (Marsh, Mimi Page) — a more uplifting tone.',
      },
    ],
  },
  {
    heading: 'Heart-Opening & Embodied',
    subheading:
      'Emotional, devotional, and world-rhythmic music for heart-centered work or grounded, embodied sessions.',
    embeds: [
      {
        kind: 'playlist',
        id: '233QHLsMhXceP8xharLmzI',
        title: 'Psychedelic Therapy: Heart Opening',
        curator: 'Tracy Carver',
        description: 'Emotional, sweeping music for heart-centered practice.',
      },
      {
        kind: 'playlist',
        id: '41FOMAZXEBVtzrYpeGsxZA',
        title: 'KAP Love',
        curator: 'Melissa Whippo',
        description: 'Devotional and loving — Max Richter, Ram Dass, East Forest.',
      },
      {
        kind: 'playlist',
        id: '4elYzxuJtMdIsZHB5Z5uTB',
        title: 'KAP Rose',
        curator: 'Ketamine Playlists',
        description: 'Ethereal and devotional — Cocteau Twins, Ashana.',
      },
      {
        kind: 'playlist',
        id: '2U3WLh1hDoBWhB9wtuf6Bx',
        title: 'Tribal',
        curator: 'Polaris Insight Center',
        description: 'Tibetan bowls, drums, and chant — grounded and embodied.',
      },
    ],
  },
  {
    heading: 'Tuning Frequencies',
    subheading:
      'Frequency-based works — useful for meditation, intention-setting, or integration outside the dosing window.',
    embeds: [
      {
        kind: 'album',
        id: '3G6sgqTyhRddurUilNLJNR',
        title: 'Solfeggio Frequency Music, Vol. 1',
        curator: 'inHarmony Media',
        description: 'Solfeggio tones (174 → 963 Hz).',
      },
      {
        kind: 'album',
        id: '6py1dRNZE25nASqawLVWLR',
        title: 'The Pure Heart of Gnosis',
        curator: 'End of Agnoia',
        description: 'Three 432 Hz pieces.',
      },
    ],
  },
];

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const renderCard = (e: Embed) => `
<article class="kap-card">
  <header class="kap-card-head">
    <h3 class="kap-card-title">${escapeHtml(e.title)}</h3>
    <p class="kap-card-curator">${escapeHtml(e.curator)}</p>
    <p class="kap-card-desc">${escapeHtml(e.description)}</p>
  </header>
  <iframe class="kap-embed" src="https://open.spotify.com/embed/${e.kind}/${e.id}?utm_source=generator" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
</article>`;

const renderSection = (s: Section) => `
<section class="kap-section">
  <div class="kap-section-head">
    <h2 class="kap-h2">${escapeHtml(s.heading)}</h2>
    <p class="kap-section-sub">${escapeHtml(s.subheading)}</p>
  </div>
  <div class="kap-grid">${s.embeds.map(renderCard).join('')}</div>
</section>`;

const html = `
<div class="kap-music-page">
  <section class="kap-hero">
    <div class="kap-hero-inner">
      <p class="kap-eyebrow">For Your Sessions</p>
      <h1 class="kap-h1">Healing Music Playlist</h1>
      <p class="kap-sub">A curated mix of ambient, meditative, and 432Hz sound — chosen by patients and clinicians to support your <a href="/post/9-things-you-should-do-before-your-ketamine-dosing-sessions">ketamine therapy sessions</a> at home.</p>
    </div>
  </section>
  <div class="kap-body">${sections.map(renderSection).join('')}</div>
</div>
<style>
.kap-music-page { background: #ffffff; }
.kap-hero {
  background: linear-gradient(180deg, #f0fdfa 0%, #ffffff 100%);
  padding: 4rem 1.5rem 3rem;
  border-bottom: 1px solid #e5e7eb;
}
.kap-hero-inner { max-width: 760px; margin: 0 auto; text-align: center; }
.kap-eyebrow {
  font-family: 'Poppins', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0f766e;
  margin: 0 0 0.75rem;
}
.kap-h1 {
  font-family: 'Libre Baskerville', serif;
  font-size: 2.6rem;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.15;
  letter-spacing: -0.01em;
  margin: 0 0 1rem;
}
.kap-sub {
  font-family: 'Poppins', sans-serif;
  font-size: 1.05rem;
  color: #4b5563;
  line-height: 1.65;
  max-width: 620px;
  margin: 0 auto;
}
.kap-sub a { color: #0d9488; text-decoration: underline; }

.kap-body { padding: 1rem 0 3rem; }
.kap-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 1rem;
}
.kap-section + .kap-section { padding-top: 2rem; }
.kap-section-head { margin-bottom: 1.5rem; }
.kap-h2 {
  font-family: 'Libre Baskerville', serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 0.5rem;
}
.kap-section-sub {
  font-family: 'Poppins', sans-serif;
  font-size: 0.95rem;
  color: #4b5563;
  line-height: 1.6;
  max-width: 720px;
  margin: 0;
}

.kap-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}
.kap-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 1.25rem 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.kap-card-head { min-height: 0; }
.kap-card-title {
  font-family: 'Libre Baskerville', serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.3;
  margin: 0 0 0.2rem;
}
.kap-card-curator {
  font-family: 'Poppins', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  color: #0f766e;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  margin: 0 0 0.5rem;
}
.kap-card-desc {
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  color: #4b5563;
  line-height: 1.55;
  margin: 0;
}
.kap-embed { border-radius: 12px; display: block; margin-top: auto; }

@media (max-width: 720px) {
  .kap-hero { padding: 3rem 1.25rem 2.25rem; }
  .kap-h1 { font-size: 2rem; }
  .kap-sub { font-size: 1rem; }
  .kap-section { padding: 2rem 1.25rem 0.5rem; }
  .kap-h2 { font-size: 1.35rem; }
  .kap-grid { grid-template-columns: 1fr; gap: 1.25rem; }
}
</style>
`;

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
