export const customWebsiteOffer = {
  planId: "website-build-only",
  name: "Custom Website",
  contactName: "Custom Website — Build Only",
  price: "$500",
  label: "One-Time Investment",
  description:
    "One professionally designed custom website, built around your business and ready to launch.",
  features: [
    "Fully custom website",
    "Mobile responsive",
    "Fast loading",
    "Contact form",
    "Modern professional design",
    "Google Maps integration",
    "Social media links",
    "Basic on-page SEO",
    "Domain connection setup",
    "Launch assistance",
  ],
};

export const monthlyPlans = [
  {
    planId: "starter-plan",
    name: "Starter Plan",
    price: "$49",
    cadence: "/mo",
    description:
      "Best for small businesses that want a simple, professional online presence.",
    buildPrice: "$500 one-time website build",
    domain: "Domain paid separately at registration cost",
    features: [
      "Fast, secure hosting",
      "SSL setup",
      "Basic maintenance",
      "Mobile-friendly design",
      "Contact form setup",
      "Basic support",
    ],
    cta: "Choose Starter",
  },
  {
    planId: "professional-plan",
    name: "Professional Plan",
    price: "$79",
    cadence: "/mo",
    description:
      "Recommended for most local businesses that want stronger visibility and faster ongoing help.",
    buildPrice: "$500 one-time website build",
    domain: "First-year domain included; JWSites purchases and configures it",
    features: [
      "Everything in Starter",
      "Stronger SEO setup",
      "Google Business Profile support",
      "Priority edits",
      "Analytics setup",
      "Improved content sections",
    ],
    cta: "Choose Professional",
    featured: true,
  },
  {
    planId: "premium-plan",
    name: "Premium Plan",
    price: "$119",
    cadence: "/mo",
    description:
      "Best for businesses that want the most hands-off website management and ongoing growth support.",
    buildPrice: "$500 one-time website build",
    domain: "First-year domain included; JWSites purchases and configures it",
    features: [
      "Everything in Professional",
      "Ongoing SEO improvements",
      "Monthly content updates",
      "Faster support",
      "Performance checks",
      "Expanded page and section updates",
    ],
    cta: "Choose Premium",
  },
];

export const pricingSelections = [
  {
    id: customWebsiteOffer.planId,
    name: customWebsiteOffer.contactName,
  },
  ...monthlyPlans.map((plan) => ({
    id: plan.planId,
    name: plan.name,
  })),
];

export function getPlanContactHref(planId: string) {
  return `/contact?plan=${encodeURIComponent(planId)}#contact-form`;
}
