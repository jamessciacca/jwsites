import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://jwsites.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/pricing",
    "/concepts",
    "/portfolio",
    "/portfolio/examples",
    "/concepts/art-portfolio",
    "/concepts/professional-portfolio",
    "/concepts/developer-portfolio",
    "/concepts/restaurant",
    "/concepts/landscaping",
    "/concepts/barber",
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.8,
  }));
}
