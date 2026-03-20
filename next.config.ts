import type { NextConfig } from "next";
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

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
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-icons',
    ],
    esmExternals: true,
  },
};

export default withBundleAnalyzer(nextConfig);
