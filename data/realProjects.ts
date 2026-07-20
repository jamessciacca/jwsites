export type RealProject = {
  name: string;
  type: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  status: string;
  services: string[];
};

export const realProjects: RealProject[] = [
  {
    name: "Michele Flynn, CPA",
    type: "CPA website",
    description:
      "A polished professional website for a Sea Girt, New Jersey CPA practice, built around trust, clarity, local credibility, and an easy path for potential clients to get in touch.",
    href: "https://www.mflynncpa.com/",
    image: "/michele-flynn-cpa.png",
    imageAlt: "Michele Flynn CPA website preview",
    status: "Live hosted project",
    services: [
      "Custom website design",
      "Professional branding",
      "Mobile-friendly layout",
      "Hosting and maintenance",
    ],
  },
];
