import type { Metadata } from "next";
import { ConceptCard } from "@/components/ConceptCard";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { concepts } from "@/data/concepts";

export const metadata: Metadata = {
  title: "Website Concept Portfolio",
  description:
    "Explore clearly labeled restaurant, landscaping, and barber website concepts by JWSites. These designs demonstrate possibilities and are not real client projects.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Concept Portfolio"
        title="Sample designs, clearly presented."
        text="These concept websites were created by JWSites to demonstrate what we can build. They are not real client projects or active businesses."
      />
      <section className="pb-20 sm:pb-28">
        <div className="container-site grid gap-7 lg:grid-cols-3">
          {concepts.map((concept) => (
            <ConceptCard key={concept.href} {...concept} />
          ))}
        </div>
        <div className="container-site mt-10">
          <p className="rounded-2xl border border-accent/20 bg-accent/5 p-5 text-center text-sm leading-6 text-muted">
            All names, locations, testimonials, and business details shown in
            these concepts are fictional and used only for design demonstration.
          </p>
        </div>
      </section>
      <CTASection />
    </>
  );
}
