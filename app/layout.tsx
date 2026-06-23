import type { Metadata } from "next";
import { SiteChrome } from "@/components/SiteChrome";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://jwsites.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "JWSites | Modern Websites for Local Businesses",
    template: "%s | JWSites",
  },
  description:
    "JWSites designs, hosts, and maintains modern websites for local businesses that want a professional online presence without the tech headaches.",
  applicationName: "JWSites",
  authors: [{ name: "James Sciacca", url: "https://www.jamessciacca.com" }],
  creator: "JWSites",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "JWSites | Modern Websites for Local Businesses",
    description:
      "JWSites designs, hosts, and maintains modern websites for local businesses that want a professional online presence without the tech headaches.",
    url: siteUrl,
    siteName: "JWSites",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "JWSites | Modern Websites for Local Businesses",
    description:
      "Modern websites for local businesses, without the tech headaches.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
