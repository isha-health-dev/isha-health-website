/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yqmliskulywrurqcbhfr.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  // sitemap.ts and /post/[slug] read MDX from content/blog via readdirSync.
  // Vercel's file-trace doesn't pick up dynamic process.cwd() reads, so these
  // files must be explicitly bundled into the serverless function output.
  outputFileTracingIncludes: {
    '/sitemap.xml': ['./content/blog/**/*'],
    '/post/[slug]': ['./content/blog/**/*'],
  },
  async redirects() {
    return [
      // Fix 404 location aliases
      {
        source: '/locations/ketamine-therapy-nyc',
        destination: '/locations/ketamine-therapy-new-york-city',
        permanent: true,
      },
      {
        source: '/ketamine-therapy-nyc',
        destination: '/locations/ketamine-therapy-new-york-city',
        permanent: true,
      },
      // Redirect findyourkaptherapist.isha.health -> main site login
      {
        source: '/login',
        has: [{ type: 'host', value: 'findyourkaptherapist.isha.health' }],
        destination: 'https://isha.health/ketamine-therapist-directory/login',
        permanent: true,
      },
      {
        source: '/create-account',
        has: [{ type: 'host', value: 'findyourkaptherapist.isha.health' }],
        destination: 'https://isha.health/ketamine-therapist-directory/create-account',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'findyourkaptherapist.isha.health' }],
        destination: 'https://isha.health/ketamine-therapist-directory',
        permanent: true,
      },
      // Old blog slugs that changed
      {
        source: '/post/is-ketamine-addictive',
        destination: '/post/is-ketamine-therapy-addictive',
        permanent: true,
      },
      // Unpublished cost post — pricing page is the canonical source
      {
        source: '/post/how-much-does-ketamine-therapy-cost',
        destination: '/pricing',
        permanent: true,
      },
      // Parent directory index pages
      {
        source: '/locations',
        destination: '/',
        permanent: false,
      },
      {
        source: '/current-patients',
        destination: '/',
        permanent: false,
      },
      {
        source: '/about-us',
        destination: '/about-us/about-isha-health',
        permanent: true,
      },
      // Parent directory pages without index
      {
        source: '/compare',
        destination: '/resources',
        permanent: false,
      },
      {
        source: '/conditions',
        destination: '/resources',
        permanent: false,
      },
      {
        source: '/guide',
        destination: '/resources',
        permanent: false,
      },
      // Old therapist directory state abbreviation URLs
      {
        source: '/ketamine-therapist-directory/wa',
        destination: '/ketamine-therapist-directory',
        permanent: true,
      },
      {
        source: '/ketamine-therapist-directory/az',
        destination: '/ketamine-therapist-directory',
        permanent: true,
      },
      {
        source: '/ketamine-therapist-directory/ny',
        destination: '/ketamine-therapist-directory',
        permanent: true,
      },
      {
        source: '/ketamine-therapist-directory/la',
        destination: '/ketamine-therapist-directory',
        permanent: true,
      },
      {
        source: '/ketamine-therapist-directory/co',
        destination: '/ketamine-therapist-directory',
        permanent: true,
      },
      {
        source: '/ketamine-therapist-directory/ca',
        destination: '/ketamine-therapist-directory',
        permanent: true,
      },
      // Old Webflow learning center and misc URLs
      {
        source: '/ketamine-learning-center/:slug*',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/Isha',
        destination: '/',
        permanent: true,
      },
      {
        source: '/post/this-week-in-ketamine-9-20',
        destination: '/post/this-week-in-ketamine-new-studies-explore-its-efficacy-and-mechanisms-of-action',
        permanent: true,
      },
      // Old URL patterns from Ahrefs 404 report
      {
        source: '/ketamine-for-depression',
        destination: '/ketamine-therapy-for-depression',
        permanent: true,
      },
      {
        source: '/ketamine-for-anxiety',
        destination: '/ketamine-therapy-for-anxiety',
        permanent: true,
      },
      {
        source: '/ketamine-therapy-long-island',
        destination: '/locations/ketamine-therapy-long-island',
        permanent: true,
      },
      {
        source: '/post/what-a-therapist-should-be-aware-of-as-your-client-goes-through-ketamine-therapy',
        destination: '/post/therapist-awareness-ketamine-client-therapy',
        permanent: true,
      },
      {
        source: '/superbill',
        destination: '/current-patients/superbill',
        permanent: true,
      },
      {
        source: '/collaborating-with-isha-health',
        destination: '/collaborate-with-isha-health',
        permanent: true,
      },
      {
        source: '/scheduling',
        destination: '/current-patients/scheduling',
        permanent: true,
      },
      // Old therapist directory URLs with domains/UUIDs -> directory listing
      {
        source: '/ketamine-therapist-directory/:slug/public-profile',
        destination: '/ketamine-therapist-directory',
        permanent: true,
      },
      {
        source: '/ketamine-therapist-directory/alissahirshfeld.com',
        destination: '/ketamine-therapist-directory',
        permanent: true,
      },
      {
        source: '/ketamine-therapist-directory/kadmoncpt.com',
        destination: '/ketamine-therapist-directory',
        permanent: true,
      },
      {
        source: '/ketamine-therapist-directory/brianlissak.com',
        destination: '/ketamine-therapist-directory',
        permanent: true,
      },
      // Strip .html extensions (catch-all pattern)
      {
        source: '/:path*.html',
        destination: '/:path*',
        permanent: true,
      },
      // Webflow index.html -> root
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      // Blog post URLs: Webflow used /post/:slug, preserve that pattern
      // If you later move blog posts to /blog/:slug, add a redirect here:
      // {
      //   source: '/post/:slug',
      //   destination: '/blog/:slug',
      //   permanent: true,
      // },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
