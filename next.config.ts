import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/concepts/contractor",
        destination: "/concepts/landscaping",
        permanent: true,
      },
      {
        source: "/concepts/dental",
        destination: "/concepts/barber",
        permanent: true,
      },
      {
        source: "/portfolio/examples/art",
        destination: "/concepts/art-portfolio",
        permanent: true,
      },
      {
        source: "/portfolio/examples/professional",
        destination: "/concepts/professional-portfolio",
        permanent: true,
      },
      {
        source: "/portfolio/examples/developer",
        destination: "/concepts/developer-portfolio",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
