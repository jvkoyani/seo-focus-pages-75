import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollPopup from "@/components/ScrollPopup";
import JsonLd from '@/components/JsonLd';
import { generateOrganizationSchema } from '@/lib/schema';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-mackinac",
  weight: ["700"], // Bold only as requested
  display: "swap",
});

export const metadata: Metadata = {
  title: "SEOfocus: #1 Data-Driven SEO Agency for Growth",
  description: "Dominate search results with SEOfocus. Our data-driven SEO strategies drive qualified traffic and revenue. Get your free professional SEO audit today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en">
      <body className={`${inter.className} ${fraunces.variable}`}>
        <Providers>
          <JsonLd data={organizationSchema} />
          {children}
          <FloatingCTA />
          <ScrollPopup />
          {/* Replace 'G-XXXXXXXXXX' with your actual Google Analytics ID */}
          <GoogleAnalytics gaId="G-XXXXXXXXXX" />
        </Providers>
      </body>
    </html>
  );
}
