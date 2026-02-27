import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** @type {import('next').NextConfig} */
  output: 'export', // Enabled for Static Site Generation
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Redirects are not supported in static export
  // async redirects() {
  //   return [
  //     {
  //       source: '/sitemap',
  //       destination: '/html-sitemap',
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;
