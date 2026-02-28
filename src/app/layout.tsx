import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { UtilityBar } from "@/components/layout/UtilityBar";
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
    url: 'https://guardianangels.com', // Placeholder
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
        <UtilityBar />
        <Header />
        <main className="flex-grow pb-14 lg:pb-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
