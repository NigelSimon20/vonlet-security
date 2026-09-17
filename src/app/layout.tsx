import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { fullAddress, primaryPhone, site } from "@/lib/site";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Guarding, K9 & Electronic Security in Zimbabwe`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "security company Zimbabwe",
    "security guards Harare",
    "armed guards",
    "K9 dog services",
    "rapid response",
    "CCTV installation",
    "Vonlet Security",
  ],
  openGraph: {
    type: "website",
    locale: "en_ZW",
    siteName: site.name,
    url: site.url,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0c0a24",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SecurityService",
  name: site.name,
  url: site.url,
  logo: `${site.url}/icon.png`,
  foundingDate: String(site.founded),
  telephone: primaryPhone.display,
  email: site.emails.general,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.street}, ${site.address.suburb}`,
    addressLocality: site.address.city,
    addressCountry: "ZW",
  },
  areaServed: ["Zimbabwe", "Zambia"],
  sameAs: [site.social.facebook],
  description: `${site.description} Head office: ${fullAddress}.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable}`}>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-full focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy-950"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
