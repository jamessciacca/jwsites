import type { Metadata } from "next";
import { ConceptCard } from "@/components/ConceptCard";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { concepts } from "@/data/concepts";
import { portfolioExamples } from "@/data/portfolioExamples";

export const metadata: Metadata = {
  title: "Website Concepts",
  description:
    "Explore honest sample website concepts by JWSites for local businesses and personal portfolios. These are concept designs, not client projects.",
};

export default function ConceptsPage() {
  return (
    <>
      <PageHero
        eyebrow="Concept Websites"
        title="Website concepts built by JWSites"
        text="Explore sample websites that show what JWSites can create for local businesses and personal portfolios. These are concept designs, not real client projects."
      />
      <section className="pb-16 sm:pb-20">
        <div className="container-site grid gap-6 lg:grid-cols-3">
          {[...concepts, ...portfolioExamples].map((concept) => (
            <ConceptCard key={concept.href} {...concept} />
          ))}
        </div>
        <div className="container-site mt-10">
          <div className="rounded-2xl border border-accent/20 bg-accent/5 px-6 py-5 text-center text-sm leading-6 text-gray-600">
            Every business name, testimonial, location, and project detail shown
            in these concepts is fictional and included only to demonstrate
            design possibilities.
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
