import type { Metadata } from "next";
import { Award, CheckCircle2, Clock3, Hammer, House, ShieldCheck, Star, Wrench } from "lucide-react";
import { ConceptBanner } from "@/components/concepts/ConceptBanner";
import { ConceptSiteNav } from "@/components/concepts/ConceptSiteNav";
import { DemoCTA } from "@/components/concepts/DemoCTA";
import { DemoHero } from "@/components/concepts/DemoHero";
import { DemoSection } from "@/components/concepts/DemoSection";

export const metadata: Metadata = {
  title: "Northline Roofing Contractor Website Concept",
  description:
    "A fictional roofing contractor website concept by JWSites. This is a sample design, not a real business.",
};

const services = [
  [House, "Roof Replacement", "Durable roofing systems installed with careful attention to your home and property."],
  [Wrench, "Roof Repair", "Clear assessments and practical repairs for leaks, storm damage, and worn materials."],
  [Hammer, "Commercial Roofing", "Reliable roofing solutions designed around the needs of local commercial properties."],
];

export default function ContractorConceptPage() {
  return (
    <div id="top" className="bg-[#f3f2ed] pt-20 text-[#15202a]">
      <ConceptBanner tone="strong" />
      <ConceptSiteNav
        name="NORTHLINE"
        links={[
          { label: "Services", href: "#services" },
          { label: "Why Northline", href: "#why" },
          { label: "Projects", href: "#projects" },
        ]}
        ctaLabel="Get a Free Quote"
        ctaHref="#quote"
        className="bg-[#f3f2ed] text-[#15202a]"
        buttonClassName="bg-[#eab329] text-[#15202a]"
      />

      <DemoHero
        eyebrow="Local roofing done right"
        title={
          <>
            Strong roofs.
            <br />
            <span className="text-[#b77d00]">Straight answers.</span>
          </>
        }
        text="Roofing work built around honest recommendations, skilled crews, and respect for your property from the first inspection to final cleanup."
        primaryLabel="Get a free estimate"
        primaryHref="#quote"
        secondaryLabel="Explore services"
        secondaryHref="#services"
        className="bg-[#f3f2ed]"
        buttonClassName="bg-[#eab329] text-[#15202a]"
      >
        <div className="relative min-h-[470px] overflow-hidden rounded-[2rem] bg-[#1b2732] shadow-[0_35px_80px_rgba(21,32,42,.25)]">
          <div className="absolute inset-0 bg-[linear-gradient(145deg,transparent_0_40%,rgba(234,179,41,.8)_41%_44%,transparent_45%),linear-gradient(35deg,#243440,#111a22)]" />
          <div className="absolute bottom-0 left-[12%] h-[45%] w-[76%] bg-[#d9d5c9] [clip-path:polygon(0_35%,50%_0,100%_35%,100%_100%,0_100%)]" />
          <div className="absolute bottom-0 left-[18%] h-[38%] w-[64%] bg-[#343c42] [clip-path:polygon(0_28%,50%_0,100%_28%,94%_38%,50%_13%,6%_38%)]" />
          <div className="absolute bottom-0 left-[44%] h-[22%] w-[12%] bg-[#b78c55]" />
          <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-2 rounded-2xl bg-white p-4 shadow-xl">
            {[
              ["15+", "Years"],
              ["4.9", "Rating"],
              ["24 hr", "Response"],
            ].map(([number, label]) => (
              <div key={label} className="text-center">
                <p className="text-lg font-black">{number}</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </DemoHero>

      <div className="bg-[#15202a] px-5 py-6 text-white">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-3">
          {[
            [ShieldCheck, "Licensed & insured"],
            [Award, "Workmanship warranty"],
            [Clock3, "Fast, clear estimates"],
          ].map(([Icon, label]) => {
            const IconComponent = Icon as typeof ShieldCheck;
            return (
              <div key={label as string} className="flex items-center justify-center gap-3">
                <IconComponent className="text-[#eab329]" size={21} />
                <span className="text-sm font-bold">{label as string}</span>
              </div>
            );
          })}
        </div>
      </div>

      <DemoSection
        id="services"
        eyebrow="Roofing services"
        title="The right work for the roof over your head."
        text="Clear options, durable materials, and a team that helps you understand what your property actually needs."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {services.map(([Icon, title, text]) => {
            const IconComponent = Icon as typeof House;
            return (
              <article key={title as string} className="rounded-3xl border border-[#d9d7cf] bg-white p-8">
                <span className="flex size-12 items-center justify-center rounded-xl bg-[#eab329] text-[#15202a]">
                  <IconComponent size={23} />
                </span>
                <h3 className="mt-6 text-xl font-black tracking-[-0.025em]">{title as string}</h3>
                <p className="mt-3 text-sm leading-7 text-[#65717b]">{text as string}</p>
              </article>
            );
          })}
        </div>
      </DemoSection>

      <DemoSection
        id="why"
        eyebrow="Why homeowners choose us"
        title="Built on the details that earn trust."
        className="bg-[#e4e2da]"
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="aspect-[4/3] rounded-[2rem] bg-[linear-gradient(145deg,#273743,#8d9593)] p-7">
            <div className="flex h-full items-end rounded-2xl border border-white/20 bg-[linear-gradient(35deg,#1b2832_0_50%,#d3d0c6_51%)] p-6">
              <span className="rounded-full bg-[#eab329] px-4 py-2 text-xs font-black uppercase tracking-wider">
                Respectful crews. Clean jobsites.
              </span>
            </div>
          </div>
          <div className="space-y-5">
            {[
              ["Honest recommendations", "We explain the condition of your roof, the available options, and what can wait."],
              ["Careful installation", "Experienced crews follow a clear process and protect the property around your home."],
              ["Communication that holds up", "You know what is happening, when it is happening, and who to call."],
              ["A clean final walkthrough", "We inspect the work with you and leave the site ready to enjoy."],
            ].map(([title, text]) => (
              <div key={title} className="flex gap-4">
                <CheckCircle2 className="mt-0.5 shrink-0 text-[#a87300]" size={22} />
                <div>
                  <h3 className="font-black">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#65717b]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DemoSection>

      <DemoSection
        id="projects"
        eyebrow="Recent work"
        title="Protection that looks as good as it performs."
        text="A sample project gallery showing how a contractor website can make workmanship easy to see."
      >
        <div className="grid auto-rows-[220px] gap-4 md:grid-cols-3">
          <div className="rounded-3xl bg-[linear-gradient(145deg,#5c6a70,#1d2a33)] md:col-span-2" />
          <div className="rounded-3xl bg-[linear-gradient(145deg,#c7b99f,#464d50)] md:row-span-2" />
          <div className="rounded-3xl bg-[linear-gradient(145deg,#273640,#8b8173)]" />
          <div className="rounded-3xl bg-[linear-gradient(145deg,#d1ccc0,#3d4a50)]" />
        </div>
      </DemoSection>

      <DemoSection
        eyebrow="Homeowner feedback"
        title="The kind of experience people recommend."
        className="bg-[#15202a] text-white"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            "They explained the repair clearly and never pushed us toward work we did not need.",
            "The crew was organized, respectful, and left the property cleaner than they found it.",
            "From estimate to final walkthrough, we always knew what came next.",
          ].map((quote, index) => (
            <blockquote key={quote} className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <div className="flex gap-1 text-[#eab329]">
                {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={14} fill="currentColor" />)}
              </div>
              <p className="mt-5 leading-7 text-gray-200">“{quote}”</p>
              <footer className="mt-5 text-xs font-bold uppercase tracking-wider text-gray-500">
                Sample testimonial {index + 1}
              </footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-gray-500">
          Testimonials are fictional and included for concept demonstration only.
        </p>
      </DemoSection>

      <div id="quote">
        <DemoCTA
          eyebrow="Free estimate"
          title="Tell us what is happening with your roof."
          text="Request a clear, no-pressure assessment and a practical plan for the next step."
          label="Build a contractor site like this"
          className="bg-[#eab329] text-[#15202a]"
          buttonClassName="bg-[#15202a] text-white"
        />
      </div>
    </div>
  );
}
