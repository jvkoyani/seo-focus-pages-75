import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/sitemap',
        destination: '/html-sitemap',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
