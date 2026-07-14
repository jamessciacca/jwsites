import type { Metadata } from "next";
import { ConceptCard } from "@/components/ConceptCard";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { portfolioExamples } from "@/data/portfolioExamples";

export const metadata: Metadata = {
  title: "Personal Portfolio Website Examples",
  description:
    "Explore clearly labeled personal portfolio website examples by JWSites for artists, professionals, and developers.",
};

export default function PortfolioExamplesPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio Examples"
        title="Sample portfolio websites for different kinds of people."
        text="These fictional examples show how a personal portfolio can adapt to artwork, career projects, technical work, case studies, resumes, and contact goals."
      />
      <section className="pb-20 sm:pb-28">
        <div className="container-site grid gap-7 lg:grid-cols-3">
          {portfolioExamples.map((example) => (
            <ConceptCard key={example.href} {...example} />
          ))}
        </div>
        <div className="container-site mt-10">
          <p className="rounded-2xl border border-accent/20 bg-accent/5 p-5 text-center text-sm leading-6 text-muted">
            All names, biographies, project details, exhibitions, roles, and
            testimonials shown in these portfolio examples are fictional and
            used only for design demonstration.
          </p>
        </div>
      </section>
      <CTASection />
    </>
  );
}
