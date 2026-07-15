export const smallBusinessWebsite = {
  planId: "small-business-website",
  name: "Small-Business Website",
  price: "$500",
  ongoingPrice: "$49",
  ongoingCadence: "/month",
  description:
    "A polished, mobile-friendly website for a local business, with ongoing care included.",
  features: [
    "Up to five pages",
    "Custom, mobile-friendly design",
    "Contact or estimate form",
    "Basic local SEO setup",
    "Hosting, security, and maintenance",
    "Reasonable content updates included",
    "Direct support",
  ],
};

export const portfolioPlans = [
  {
    planId: "student-portfolio",
    name: "Student Portfolio",
    price: "$299",
    ongoingPrice: "$99",
    ongoingCadence: "/year",
    description:
      "A focused one-page portfolio for students and early-career job seekers.",
    features: [
      "One-page portfolio",
      "About, projects, skills, résumé, and contact sections",
      "Custom domain connection",
      "Mobile-friendly design",
      "Reasonable content updates included",
      "Hosting and support",
    ],
  },
  {
    planId: "professional-portfolio",
    name: "Professional Portfolio",
    price: "$499",
    ongoingPrice: "$149",
    ongoingCadence: "/year",
    description:
      "A more customized portfolio for established professionals, freelancers, developers, designers, and creatives.",
    features: [
      "Up to four pages",
      "More customized design",
      "Project case studies",
      "Résumé download",
      "Contact form",
      "Reasonable content updates included",
      "Hosting and support",
    ],
  },
];

export const complexBusinessWebsite = {
  planId: "advanced-business-website",
  name: "More Involved Business Website",
  price: "Starting at $1,200",
  description:
    "For projects involving booking systems, extensive galleries or menus, ecommerce, or custom functionality.",
};

export const pricingSelections = [
  { id: smallBusinessWebsite.planId, name: smallBusinessWebsite.name },
  ...portfolioPlans.map((plan) => ({ id: plan.planId, name: plan.name })),
  { id: complexBusinessWebsite.planId, name: complexBusinessWebsite.name },
];

export const projectTypes = [
  { id: "small-business-website", name: "Small-business website" },
  { id: "personal-portfolio", name: "Personal portfolio" },
  { id: "website-redesign", name: "Website redesign" },
  { id: "other", name: "Other" },
];

export function getPlanContactHref(planId: string) {
  return `/contact?plan=${encodeURIComponent(planId)}#contact-form`;
}

export function getProjectContactHref(projectId: string) {
  return `/contact?project=${encodeURIComponent(projectId)}#contact-form`;
}
