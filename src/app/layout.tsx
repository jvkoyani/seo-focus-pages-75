import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "seo-focus-pages",
  description: "Lovable Generated Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          {/* Replace 'G-XXXXXXXXXX' with your actual Google Analytics ID */}
          <GoogleAnalytics gaId="G-XXXXXXXXXX" />
        </Providers>
      </body>
    </html>
  );
}
