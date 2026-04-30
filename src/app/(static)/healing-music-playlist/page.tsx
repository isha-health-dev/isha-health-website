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

const embeds: { kind: 'playlist' | 'album'; id: string }[] = [
  { kind: 'playlist', id: '233QHLsMhXceP8xharLmzI' },
  { kind: 'playlist', id: '5vmeBxK341JO8oOJ6BUPjK' },
  { kind: 'playlist', id: '41FOMAZXEBVtzrYpeGsxZA' },
  { kind: 'playlist', id: '4elYzxuJtMdIsZHB5Z5uTB' },
  { kind: 'album', id: '3G6sgqTyhRddurUilNLJNR' },
  { kind: 'playlist', id: '2CBAwuuqP9ORwBl89Uvq39' },
  { kind: 'playlist', id: '6EBtnrgLRXUI0mrvgyJVLc' },
  { kind: 'playlist', id: '6Dto3bi9XooAYZyObaD1l9' },
  { kind: 'playlist', id: '2mT6LpOU4ipJ0BkoCigAiw' },
  { kind: 'playlist', id: '0DkS4rI50cBtRMAILOdxlE' },
  { kind: 'playlist', id: '334NrKIQaK8dfQUNWA1N9k' },
  { kind: 'playlist', id: '2U3WLh1hDoBWhB9wtuf6Bx' },
  { kind: 'playlist', id: '1PBhHh3DqkRUsVf8lqtTVd' },
  { kind: 'album', id: '6py1dRNZE25nASqawLVWLR' },
];

const embedsHtml = embeds
  .map(
    ({ kind, id }) =>
      `<iframe class="kap-embed" src="https://open.spotify.com/embed/${kind}/${id}?utm_source=generator" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
  )
  .join('');

const html = `
<div class="kap-music-page">
  <section class="kap-hero">
    <div class="kap-hero-inner">
      <p class="kap-eyebrow">For Your Sessions</p>
      <h1 class="kap-h1">Healing Music Playlist</h1>
      <p class="kap-sub">A curated mix of ambient, meditative, and 432Hz sound — chosen by patients and clinicians to support your <a href="/post/9-things-you-should-do-before-your-ketamine-dosing-sessions">ketamine therapy sessions</a> at home.</p>
    </div>
  </section>
  <section class="kap-grid-wrap">
    <div class="kap-grid">${embedsHtml}</div>
  </section>
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
.kap-grid-wrap { padding: 3rem 1.5rem 4rem; }
.kap-grid {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}
.kap-embed { border-radius: 12px; display: block; }
@media (max-width: 720px) {
  .kap-hero { padding: 3rem 1.25rem 2.25rem; }
  .kap-h1 { font-size: 2rem; }
  .kap-sub { font-size: 1rem; }
  .kap-grid { grid-template-columns: 1fr; gap: 1.25rem; }
  .kap-grid-wrap { padding: 2rem 1.25rem 3rem; }
}
</style>
`;

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
