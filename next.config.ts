import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** @type {import('next').NextConfig} */
  output: 'export',
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
