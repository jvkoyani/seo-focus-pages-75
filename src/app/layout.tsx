import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Script from "next/script";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollPopup from "@/components/ScrollPopup";
import JsonLd from '@/components/JsonLd';
import { generateOrganizationSchema } from '@/lib/schema';
import StickyOfferBanner from "@/components/StickyOfferBanner";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "SEOfocus: #1 Data-Driven SEO Agency for Growth",
  description: "Dominate search results with SEOfocus. Our data-driven SEO strategies drive qualified traffic and revenue. Get your free professional SEO audit today.",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const schemaString = JSON.stringify(organizationSchema);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://seo-jay.vercel.app" />
        <link rel="dns-prefetch" href="https://seo-jay.vercel.app" />
      </head>
      <body className={`${montserrat.className} ${montserrat.variable} bg-white text-seo-dark`}>
        <Providers>
          <JsonLd schemaString={schemaString} />
          {children}
          <StickyOfferBanner />
          <FloatingCTA />
          <ScrollPopup />
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
            strategy="lazyOnload"
          />
          <Script id="gtag-init" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `}
          </Script>
        </Providers>
      </body>
    </html>
  );
}
