import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { LayoutShell } from "@/components/layout/LayoutShell";
import { brand } from "@/config/brand";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: brand.brandName,
    template: `%s | ${brand.brandName}`
  },
  description: brand.tagline,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://midaid.com.au',
    title: brand.brandName,
    description: brand.tagline,
    siteName: brand.brandName
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} font-sans antialiased flex flex-col min-h-screen overflow-x-hidden`}>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
