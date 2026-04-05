import { NextRequest, NextResponse } from 'next/server';
import { readdirSync } from 'fs';
import { join } from 'path';

const INDEXNOW_KEY = '3fe8387a77404bc8be551eecb962a518';
const BASE_URL = 'https://isha.health';

function getAllUrls(): string[] {
  const urls: string[] = [BASE_URL];

  // Static pages
  const staticPages = [
    '/pricing', '/appointment', '/faq', '/blog',
    '/about-us/about-isha-health', '/about-us/ketamine-therapy',
    '/our-treatment-approach', '/am-i-a-candidate',
    '/ketamine-therapy-for-depression', '/ketamine-therapy-for-anxiety',
    '/what-is-ketamine-assisted-therapy', '/ketamine-therapist-directory',
    '/dr-mai-shimada', '/dr-akua-brown',
    '/collaborate-with-isha-health', '/referral-patient-process',
    '/isha-health-in-the-media', '/isha-health-media-kit',
    '/consent-form', '/terms-of-use', '/privacy-policy',
    '/notice-of-privacy-practices', '/good-faith-estimate',
    '/safety-information-for-ketamine-treatment',
    '/cancellation-policy-isha-health', '/refund-policy',
    '/support-person-overview', '/healing-music-playlist',
    '/current-patients/scheduling', '/current-patients/session-instruction',
    '/current-patients/superbill', '/current-patients/referral-from-your-primary-doctor',
  ];
  staticPages.forEach((p) => urls.push(`${BASE_URL}${p}`));

  // Blog posts
  try {
    const blogDir = join(process.cwd(), 'content', 'blog');
    const files = readdirSync(blogDir).filter((f) => f.endsWith('.mdx'));
    files.forEach((f) => {
      const slug = f.replace(/\.mdx$/, '');
      urls.push(`${BASE_URL}/post/${slug}`);
    });
  } catch {}

  // Location pages (state + city)
  const statePages = [
    'arizona', 'california', 'colorado', 'florida', 'georgia',
    'new-york', 'oregon', 'texas', 'washington',
  ];
  statePages.forEach((s) =>
    urls.push(`${BASE_URL}/locations/online-at-home-ketamine-therapy-in-${s}`)
  );

  // City pages
  try {
    const locDir = join(process.cwd(), 'src', 'app', 'locations');
    const dirs = readdirSync(locDir, { withFileTypes: true })
      .filter((d) => d.isDirectory() && d.name.startsWith('ketamine-therapy-'))
      .map((d) => d.name);
    dirs.forEach((d) => urls.push(`${BASE_URL}/locations/${d}`));
  } catch {}

  // Condition pages
  try {
    const condDir = join(process.cwd(), 'src', 'app', 'conditions');
    const dirs = readdirSync(condDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);
    dirs.forEach((d) => urls.push(`${BASE_URL}/conditions/${d}`));
  } catch {}

  // Comparison pages
  try {
    const compDir = join(process.cwd(), 'src', 'app', 'compare');
    const dirs = readdirSync(compDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);
    dirs.forEach((d) => urls.push(`${BASE_URL}/compare/${d}`));
  } catch {}

  return [...new Set(urls)];
}

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const urls = getAllUrls();

  // IndexNow API accepts up to 10,000 URLs per request
  const body = {
    host: 'isha.health',
    key: INDEXNOW_KEY,
    keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const status = response.status;
    const text = await response.text();

    return NextResponse.json({
      message: `Submitted ${urls.length} URLs to IndexNow`,
      indexnow_status: status,
      indexnow_response: text,
      url_count: urls.length,
      sample_urls: urls.slice(0, 10),
    });
  } catch (err) {
    return NextResponse.json(
      { error: 'IndexNow submission failed', details: String(err) },
      { status: 500 }
    );
  }
}
