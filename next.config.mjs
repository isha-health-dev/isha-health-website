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
  async redirects() {
    return [
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
