import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { LayoutShell } from "@/components/layout/LayoutShell";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import { brand } from "@/config/brand";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" });

const siteUrl = "https://midaid.com";
const siteDescription = "MidAid provides compassionate, professional in-home senior care across Australia. Our experienced caregivers help your loved ones thrive at home with dignity and independence.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.brandName} | Compassionate In-Home Senior Care`,
    template: `%s | ${brand.brandName}`
  },
  description: siteDescription,
  keywords: [
    "home care", "senior care", "in-home care", "aged care", "elderly care",
    "companion care", "dementia care", "alzheimers care", "respite care",
    "palliative care", "live-in care", "personal care", "caregiver",
    "MidAid", "Australia", "Sydney", "Ultimo", "NSW"
  ],
  authors: [{ name: brand.brandName, url: siteUrl }],
  creator: brand.brandName,
  publisher: brand.brandName,
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    title: `${brand.brandName} | Compassionate In-Home Senior Care`,
    description: siteDescription,
    siteName: brand.brandName,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: `${brand.brandName} - Compassionate In-Home Senior Care`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.brandName} | Compassionate In-Home Senior Care`,
    description: siteDescription,
    images: ["/images/twitter-image.png"],
    creator: "@midaid",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {},
  category: "healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} font-sans antialiased flex flex-col min-h-screen overflow-x-hidden`}>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
