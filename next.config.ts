import type { NextConfig } from "next";

const oldPostSlugs = [
  "golf-day-for-the-vonlet-team",
  "tips-you-should-adopt-when-breeding-security-dogs",
  "training-of-guards",
  "cctv-making-the-technological-break-through-in-the-20th-century",
  "why-alarm-systems-are-important",
];

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Keep links to the old WordPress site working.
  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/our-directorate", destination: "/leadership", permanent: true },
      { source: "/management", destination: "/leadership#management", permanent: true },
      { source: "/our-team/:slug*", destination: "/leadership", permanent: true },
      { source: "/our-branches", destination: "/branches", permanent: true },
      { source: "/service/close-circuit-television-cctv", destination: "/services/cctv", permanent: true },
      { source: "/service/:slug", destination: "/services/:slug", permanent: true },
      { source: "/outsource-accounting-hr-functions", destination: "/news", permanent: true },
      { source: "/category/:slug*", destination: "/news", permanent: true },
      ...oldPostSlugs.map((slug) => ({ source: `/${slug}`, destination: `/news/${slug}`, permanent: true })),
    ];
  },
};

export default nextConfig;
