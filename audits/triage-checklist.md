# Audit triage checklist

When `npm run audit` fails locally or the CI Audit job fails on a PR, work through the report in this order. Most categories are deterministic (real bugs); a few are ignorable false positives or intentional patterns. This list captures the calls we've already made so the same questions don't re-litigate every time.

## CI audit failures (`npm run audit`)

### `audit:metadata` (static lint)
- **`title >70 chars`** — fix at the source. Google truncates at ~60.
- **`description >165 chars`** — fix at the source.
- **`description 156–165`** — warning only; tighten if convenient.

### Sitemap completeness (`tests/audit/sitemap.spec.ts`)
- **`/post/` count below floor** — sitemap is silently empty (regression class). Most likely cause is a runtime `readdirSync` failing in production. Repro locally with `npm run build`, inspect `.next/server/app/sitemap.xml.body`.
- **Published post missing from sitemap** — check `content/blog/<slug>.mdx` frontmatter for `draft: true` or a future `date:`.

### JSON-LD validation (`tests/audit/schema.spec.ts`)
- **Non-absolute URL in image/url/item field** — prepend the host. Caught the relative-image-in-Article regression class.
- **Malformed URL (long string or contains spaces)** — usually data quality (free text in a `website`/url field). Validate before emitting in JSON-LD.
- **Missing required Article field** — fix the schema generator at `src/app/post/[slug]/page.tsx`.
- **Breadcrumb URL returning 301** — the breadcrumb points at a route that redirects (e.g. `/conditions` → `/resources`). Update the breadcrumb to point at the final destination.

### Internal link integrity (`tests/audit/internal-links.spec.ts`)
- **`HTTP 404` on internal link** — fix the source link or restore the destination.
- **Known internal redirect** — link the final URL directly. Source list is hardcoded in the test, mirroring `next.config.mjs`.

## Weekly external audit (`audit-external.yml` opens an issue)

This runs lychee against every URL in the live sitemap.

### Real bugs to fix
- **Internal 4xx/5xx** — page is gone or broken. Fix or remove the link.
- **External 404 / 410** — link rot. Replace with the new URL or remove.
- **Internal 3xx** — link points at a route that redirects. Update to the final URL.

### Skip / accept
- **External 429 / 403** — bot-blocking; not real link rot. Already accepted in `audits/lychee.toml`.
- **Social platforms (LinkedIn, X, Instagram, etc.)** — already excluded; they block crawlers wholesale.
- **`googletagmanager.com` / `google-analytics.com`** — analytics tags, excluded.

### Investigate
- **External 3xx that loses information** — e.g. `consensus.app/papers/<slug>` redirecting to `consensus.app/search/new/`. Don't update the link to the redirect target — the original URL has more context. Either find the new canonical URL or remove the link.
- **doi.org redirects to publisher domain** — leave alone. DOIs are intentionally stable; publisher URLs rot faster.

## Ad-hoc Sitebulb / Ahrefs reports

When you run a third-party crawl manually after a major release, these categories from past reports were determined to be false positives or intentional and can be ignored:

- **"More than 3 URL parameters"** on `/_next/image?...` — Next.js image optimizer URLs. Expected.
- **"Page has no outgoing links"** on `claims.isha.health` — separate Mozu-hosted product, not in this repo.
- **`/locations/online-at-home-ketamine-therapy-in-new-york`** flagged as noindex — intentional; NY service is paused.
- **`/ketamine-therapist-directory/login`, `/create-account`** flagged as noindex/nofollow — intentional auth pages.
- **City pages with `noindex`** — small-market city pages are noindex by design (see `src/app/locations/layout.tsx`).
- **`http://www.isha.health/` redirect chain** — standard `www`+http canonicalization; fine to leave as a 2-hop chain.
- **"H1 tag changed"** on a single therapist profile (e.g. `Alexander Camargo,PSYD` missing space) — Sitebulb extraction artifact; the rendered H1 has correct spacing via inner `<span>`.
- **Therapist profile `website` URLs that redirect** — those are stored in Supabase, not in code. Needs a database update, not a code change.

## When all else fails

If a finding doesn't fit any of the above and isn't obviously a real bug, post the URL + the specific finding in #seo-audit (or a fresh GitHub issue) before changing code. Cheap to ask, expensive to "fix" something that wasn't broken.
