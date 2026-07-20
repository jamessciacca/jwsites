import type { Metadata } from "next";
import { ConceptCard } from "@/components/ConceptCard";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { RealProjectCard } from "@/components/RealProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { concepts } from "@/data/concepts";
import { portfolioExamples } from "@/data/portfolioExamples";
import { realProjects } from "@/data/realProjects";

export const metadata: Metadata = {
  title: "Client Work & Website Examples",
  description:
    "Explore JWSites client work, business website concepts, and personal portfolio examples for businesses and individuals.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Client work and website examples."
        text="Browse live client websites alongside business and portfolio concepts that show the range of styles JWSites can build for businesses and individuals."
      />

      <section id="real-projects" className="pb-16 sm:pb-20">
        <div className="container-site">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Client Projects"
              title="Live websites built with care."
              text="Featured client websites designed, hosted, or maintained by JWSites, with clean layouts, clear messaging, and reliable ongoing support."
            />
            <div className="flex flex-wrap gap-2">
              <a
                href="#concept-sites"
                className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
              >
                Concept Sites
              </a>
              <a
                href="#portfolio-examples"
                className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
              >
                Portfolio Examples
              </a>
            </div>
          </div>
          <div className="mt-10 grid gap-7 lg:grid-cols-2">
            {realProjects.map((project) => (
              <RealProjectCard key={project.name} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section id="concept-sites" className="section-pad scroll-mt-24 bg-surface">
        <div className="container-site">
          <SectionHeading
            eyebrow="Concept Sites"
            title="Business website concepts for different industries."
            text="Explore polished website directions for restaurants, local service businesses, professional practices, and other customer-focused brands."
            align="center"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {concepts.map((concept) => (
              <ConceptCard key={concept.href} {...concept} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="portfolio-examples"
        className="section-pad scroll-mt-24 bg-white"
      >
        <div className="container-site">
          <SectionHeading
            eyebrow="Portfolio Examples"
            title="Portfolio concepts for students and professionals."
            text="See how personal portfolio sites can present artwork, career projects, technical work, resumes, case studies, and contact paths."
            align="center"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {portfolioExamples.map((example) => (
              <ConceptCard key={example.href} {...example} />
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-4xl rounded-2xl border border-accent/20 bg-accent/5 p-5 text-center text-sm leading-6 text-muted">
            Concept sites are labeled separately from client projects so each
            visitor can clearly tell live work from example directions.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
