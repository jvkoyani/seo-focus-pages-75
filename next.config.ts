import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /** @type {import('next').NextConfig} */
  output: 'export', // Enabled for Static Site Generation
  images: {
    unoptimized: true, // Required for static export (next/image optimization needs a server)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cms.powermyseo.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  // Note: images.formats and minimumCacheTTL require a Node.js server (not static export).
  // These will be enabled when switching from 'output: export' to server-side rendering.
  // experimental: { optimizeCss: true }, // Uncomment when on server-rendered deployment
};

export default nextConfig;
