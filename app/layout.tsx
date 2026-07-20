import type { Metadata } from "next";
import { SiteChrome } from "@/components/SiteChrome";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://jwsites.net";

const previewImage = {
  url: "/og-image.png",
  width: 1920,
  height: 819,
  alt: "JWSites.net logo",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "JWSites | Business Websites & Personal Portfolios",
    template: "%s | JWSites",
  },
  description:
    "JWSites creates, hosts, and supports modern websites for local businesses and personal portfolios for individuals.",
  applicationName: "JWSites",
  authors: [{ name: "James Sciacca", url: "https://www.jamessciacca.com" }],
  creator: "JWSites",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "JWSites | Business Websites & Personal Portfolios",
    description:
      "Modern small-business websites and personal portfolios, with clear pricing and ongoing care.",
    url: siteUrl,
    siteName: "JWSites",
    type: "website",
    images: [previewImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "JWSites | Business Websites & Personal Portfolios",
    description:
      "Modern websites for local businesses and personal portfolios for individuals.",
    images: [previewImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "JWSites",
              url: siteUrl,
              description:
                "Custom small-business websites and personal portfolios with hosting, maintenance, support, and reasonable content updates.",
              founder: { "@type": "Person", name: "James Sciacca" },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Website services",
                itemListElement: [
                  { "@type": "Offer", name: "Small-Business Website", price: "400", priceCurrency: "USD" },
                  { "@type": "Offer", name: "Student Portfolio", price: "100", priceCurrency: "USD" },
                  { "@type": "Offer", name: "Professional Portfolio", price: "250", priceCurrency: "USD" },
                ],
              },
            }),
          }}
        />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
