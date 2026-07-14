import { demoImages } from "./demoImages";

export const portfolioExamples = [
  {
    name: "Maya Chen Studio",
    type: "Art Portfolio",
    description:
      "A visual portfolio for a painter and mixed-media artist, built around collections, exhibitions, artist statement, and inquiry-focused contact.",
    href: "/concepts/art-portfolio",
    theme: "art" as const,
    image: demoImages.portfolios.art.hero,
    imageAlt: "Artist arranging paintings in a bright creative studio",
  },
  {
    name: "Jordan Ellis",
    type: "Professional Project Portfolio",
    description:
      "A polished career portfolio for a project manager, featuring measurable case studies, resume highlights, leadership experience, and a clear contact path.",
    href: "/concepts/professional-portfolio",
    theme: "professional" as const,
    image: demoImages.portfolios.professional.hero,
    imageAlt: "Professionals collaborating around project plans in a meeting",
  },
  {
    name: "Alex Rivera",
    type: "Developer Portfolio",
    description:
      "A focused technical portfolio with featured builds, stack details, project outcomes, resume download, and recruiter-friendly contact.",
    href: "/concepts/developer-portfolio",
    theme: "developer" as const,
    image: demoImages.portfolios.developer.hero,
    imageAlt: "Developer workspace with code on a laptop screen",
  },
];
