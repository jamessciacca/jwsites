import type { Metadata } from "next";
import { ConceptCard } from "@/components/ConceptCard";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { concepts } from "@/data/concepts";

export const metadata: Metadata = {
  title: "Website Concepts",
  description:
    "Explore honest sample website concepts by JWSites for restaurants, contractors, and dental offices. These are concept designs, not client projects.",
};

export default function ConceptsPage() {
  return (
    <>
      <PageHero
        eyebrow="Concept Websites"
        title="Website concepts built by JWSites"
        text="Explore sample websites that show what our team can create for local businesses. These are concept designs, not real client projects."
      />
      <section className="pb-20 sm:pb-28">
        <div className="container-site grid gap-7 lg:grid-cols-3">
          {concepts.map((concept) => (
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
