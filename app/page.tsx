import type { Metadata } from "next";
import {
  BarChart3,
  Check,
  ChevronRight,
  Clock3,
  ExternalLink,
  Gauge,
  Globe2,
  LineChart,
  MonitorSmartphone,
  Search,
  ShieldCheck,
  Sparkles,
  UserRound,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/Button";
import { ConceptCard } from "@/components/ConceptCard";
import { CTASection } from "@/components/CTASection";
import { PricingPreview } from "@/components/PricingPreview";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { concepts } from "@/data/concepts";

export const metadata: Metadata = {
  title: {
    absolute: "JWSites | Business Websites & Personal Portfolios",
  },
  description:
    "JWSites creates polished websites for local businesses and personal portfolios for students, job seekers, creatives, and professionals.",
};

const values = [
  [Clock3, "Fast turnaround"],
  [MonitorSmartphone, "Mobile-friendly"],
  [ShieldCheck, "Updates included"],
  [Check, "Simple pricing"],
  [Globe2, "For businesses & individuals"],
] as const;

const services = [
  {
    icon: Sparkles,
    title: "Small-business websites",
    description:
      "A polished, custom website shaped around your business, services, and customers.",
  },
  {
    icon: UserRound,
    title: "Personal Portfolios",
    description:
      "A professional home for your experience, résumé, skills, projects, and creative work.",
  },
  {
    icon: Gauge,
    title: "Reliable hosting",
    description:
      "Fast, secure hosting setup so your website stays online and runs smoothly.",
  },
  {
    icon: Search,
    title: "SEO basics",
    description:
      "A search-friendly foundation that helps nearby customers find your business.",
  },
  {
    icon: Wrench,
    title: "Ongoing updates",
    description:
      "Reasonable changes to your existing content are included with ongoing service.",
  },
  {
    icon: BarChart3,
    title: "Analytics setup",
    description:
      "Simple reporting that shows how people find and use your website.",
  },
];

const process = [
  [
    "01",
    "Free consultation",
    "We learn about your business, customers, goals, and what your website needs.",
  ],
  [
    "02",
    "Design and build",
    "We create a clean, custom site and keep you involved without overwhelming you.",
  ],
  [
    "03",
    "Launch",
    "Once everything feels right, we connect your domain and bring your new site online.",
  ],
  [
    "04",
    "Maintain and update",
    "We stay available for updates, support, and the small details that keep a site current.",
  ],
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero-glow pb-14 pt-32 sm:pb-20 sm:pt-36 lg:pb-24">
        <div className="container-site text-center">
          <span className="eyebrow animate-fade-up">
            Thoughtful websites. Straightforward service.
          </span>
          <h1 className="page-display mx-auto max-w-5xl animate-fade-up animate-delay-1">
            Websites for businesses. Portfolios for{" "}
            <span className="text-accent">people.</span>
          </h1>
          <p className="body-large mx-auto mt-7 max-w-3xl animate-fade-up animate-delay-2">
            JWSites creates polished websites for local businesses and personal
            portfolios for students, job seekers, developers, designers,
            freelancers, creatives, and professionals.
          </p>
          <div className="mt-9 flex animate-fade-up animate-delay-2 flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact?project=small-business-website#contact-form" arrow>
              Business Website
            </Button>
            <Button href="/contact?project=personal-portfolio#contact-form" variant="secondary" arrow>
              Personal Portfolio
            </Button>
          </div>

          <div className="relative mx-auto mt-12 hidden max-w-5xl animate-fade-up animate-delay-2 sm:mt-16 sm:block">
            <div className="absolute inset-x-16 bottom-0 h-24 bg-accent/20 blur-[70px]" />
            <div className="relative rounded-[1.5rem] border border-gray-200 bg-white p-2 shadow-soft sm:rounded-[2rem] sm:p-3">
              <div className="overflow-hidden rounded-[1.1rem] border border-line bg-surface sm:rounded-[1.4rem]">
                <div className="flex h-10 items-center gap-1.5 border-b border-line bg-white px-4">
                  <span className="size-2 rounded-full bg-red-300" />
                  <span className="size-2 rounded-full bg-amber-300" />
                  <span className="size-2 rounded-full bg-green-300" />
                  <div className="mx-auto h-5 w-40 rounded-md bg-surface sm:w-56" />
                </div>
                <div className="grid min-h-[330px] items-center gap-10 bg-[radial-gradient(circle_at_80%_20%,rgba(91,92,240,.14),transparent_35%)] p-7 text-left sm:p-12 md:grid-cols-2 lg:min-h-[450px] lg:p-16">
                  <div>
                    <div className="mb-5 h-2.5 w-24 rounded-full bg-accent/80" />
                    <div className="h-9 w-full rounded-lg bg-ink sm:h-12" />
                    <div className="mt-3 h-9 w-4/5 rounded-lg bg-ink sm:h-12" />
                    <div className="mt-7 h-2.5 w-full rounded-full bg-gray-200" />
                    <div className="mt-2.5 h-2.5 w-3/4 rounded-full bg-gray-200" />
                    <div className="mt-8 flex gap-3">
                      <div className="h-10 w-32 rounded-full bg-accent" />
                      <div className="h-10 w-28 rounded-full border border-gray-300 bg-white" />
                    </div>
                  </div>
                  <div className="hidden aspect-square rounded-[2rem] bg-gradient-to-br from-[#dcd9ff] via-[#a9a4f6] to-[#6566dc] p-6 shadow-card md:block">
                    <div className="flex h-full items-end rounded-2xl border border-white/40 bg-white/20 p-5 backdrop-blur-sm">
                      <div className="w-full rounded-xl bg-white p-4 shadow-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="h-2 w-16 rounded bg-gray-200" />
                            <div className="mt-2 h-4 w-24 rounded bg-ink" />
                          </div>
                          <LineChart className="text-accent" size={26} />
                        </div>
                        <div className="mt-4 h-16 rounded-lg bg-accent/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="container-site grid grid-cols-2 gap-x-5 gap-y-6 py-6 sm:grid-cols-3 lg:grid-cols-5">
          {values.map(([Icon, label]) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon size={18} className="shrink-0 text-accent" aria-hidden="true" />
              <span className="text-sm font-medium text-gray-700">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            eyebrow="Everything you need"
            title="A better website, without the usual headaches."
            text="We handle the important pieces from first design to ongoing care, whether the website represents a business or your own work."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
            <div className="flex min-h-64 flex-col justify-between rounded-3xl bg-ink p-8 text-white">
              <div>
                <p className="text-sm font-semibold text-[#a5a6ff]">
                  Not sure what you need?
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em]">
                  We’ll help you make sense of it.
                </h3>
              </div>
              <Button href="/services" variant="secondary" className="mt-8 self-start" arrow>
                Explore services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink text-white">
        <div className="container-site grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="relative hidden min-h-80 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#d9d6ff] via-[#9d9df2] to-accent p-7 lg:block">
            <div className="absolute -right-16 -top-16 size-56 rounded-full bg-white/30 blur-3xl" />
            <div className="relative flex h-full min-h-64 flex-col justify-between rounded-[1.4rem] border border-white/40 bg-white/90 p-7 text-ink shadow-soft">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-accent text-lg font-bold text-white">
                JS
              </div>
              <div>
                <p className="text-2xl font-semibold tracking-[-0.04em]">
                  James Sciacca
                </p>
                <p className="mt-2 text-sm text-muted">
                  Founder · Rutgers Computer Science graduate
                </p>
              </div>
            </div>
          </div>
          <div>
            <span className="mb-4 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#b8b9ff]">
              About JWSites
            </span>
            <h2 className="text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Technical experience, explained in plain language.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              JWSites was founded by James Sciacca, a Rutgers University
              Computer Science graduate with experience in full-stack
              development, web hosting, and modern website design.
            </p>
            <p className="mt-4 leading-7 text-gray-400">
              The goal is simple: give local businesses and individuals a
              clean, reliable online presence without confusing technology or
              oversized agency packages.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/about" arrow>
                More about JWSites
              </Button>
              <a
                href="https://www.jamessciacca.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                James’s Portfolio <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-site">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Website Concepts"
              title="See what your business could look like online."
              text="Explore sample websites created by JWSites to show what we can build for restaurants, landscaping companies, barber shops, and other local businesses."
            />
            <Button href="/concepts" variant="secondary" arrow>
              Explore all concepts
            </Button>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {concepts.map((concept) => (
              <ConceptCard key={concept.href} {...concept} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            eyebrow="A simple process"
            title="From first conversation to launch."
            text="No confusing handoffs or drawn-out agency process. Just clear communication and steady progress."
          />
          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(([number, title, description], index) => (
              <article key={number} className="relative">
                <div className="mb-6 flex items-center">
                  <span className="flex size-12 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
                    {number}
                  </span>
                  {index < process.length - 1 && (
                    <ChevronRight
                      className="ml-auto hidden text-gray-300 lg:block"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.025em]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-site">
          <SectionHeading
            eyebrow="Simple, transparent pricing"
            title="Clear options, with routine updates included."
            text="Small-business websites begin with a one-time setup and $49 monthly service. Personal portfolios have student and professional options with annual hosting and support."
            align="center"
          />
          <div className="mt-10">
            <PricingPreview />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
