import { demoImages } from "./demoImages";

export const concepts = [
  {
    name: "Bella Roma Trattoria",
    type: "Italian Restaurant",
    description:
      "A warm, elegant restaurant concept featuring a full menu, food gallery, and reservation-focused experience.",
    href: "/concepts/restaurant",
    theme: "restaurant" as const,
    image: demoImages.restaurant.hero,
    imageAlt: "Wood-fired Italian pizza served with wine",
  },
  {
    name: "Evergreen Edge Landscaping",
    type: "Landscaping & Lawn Care",
    description:
      "A clean, trustworthy service website designed around local credibility, visual transformations, and quote requests.",
    href: "/concepts/landscaping",
    theme: "landscaping" as const,
    image: demoImages.landscaping.hero,
    imageAlt: "Beautifully landscaped residential street with green lawns",
  },
  {
    name: "Crown & Blade Barber Co.",
    type: "Modern Barber Shop",
    description:
      "A sharp, premium barber concept with clear pricing, strong photography, reviews, and appointment-focused calls to action.",
    href: "/concepts/barber",
    theme: "barber" as const,
    image: demoImages.barber.hero,
    imageAlt: "Barber giving a client a haircut in a stylish shop",
  },
];
