import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  FileText,
  Palette,
  RefreshCcw,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { portfolioPlans } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Personal Portfolio Websites",
  description:
    "Personal portfolio websites by JWSites for students, job seekers, developers, designers, freelancers, creatives, and professionals, with hosting, support, and reasonable content updates included.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Personal Portfolios"
        title="A polished online home for your work."
        text="JWSites builds and helps maintain personal portfolio websites for students, job seekers, developers, designers, freelancers, creatives, and professionals who need a clear way to show who they are and what they can do."
      />
      <section className="bg-surface pb-16 pt-6 sm:pb-20 sm:pt-8">
        <div className="container-site">
          <div className="overflow-hidden rounded-[2.25rem] border border-line bg-white shadow-soft">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="bg-ink p-7 text-white sm:p-10 lg:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#a5a6ff]">
                  Built for individuals
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  Portfolio websites that launch clean and stay current.
                </h2>
                <p className="mt-5 leading-8 text-gray-300">
                  I can build a custom portfolio, connect your domain, host it,
                  support it, and help keep it updated as your resume, projects,
                  artwork, skills, experience, or contact information changes.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/portfolio/examples"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-[#a5a6ff]"
                  >
                    View Portfolio Examples <ArrowRight size={17} aria-hidden="true" />
                  </Link>
                  <Link
                    href="/contact?project=personal-portfolio"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    Start a Personal Portfolio
                  </Link>
                </div>
              </div>

              <div className="grid border-line sm:grid-cols-2 lg:border-l">
                {[
                  [UserRound, "Students & job seekers", "One-page sites for projects, resume, skills, and contact details."],
                  [BriefcaseBusiness, "Professionals", "Multi-page portfolios with case studies and career highlights."],
                  [Palette, "Creatives & freelancers", "Visual-first layouts for artwork, design, writing, services, or client work."],
                  [FileText, "Resume-ready sharing", "Custom domain, resume download, contact form, and mobile-friendly design."],
                  [RefreshCcw, "Updates after launch", "Reasonable content updates are included with ongoing hosting and support."],
                  [ShieldCheck, "Hosting & support", "I help keep the site online, maintained, and easier to update over time."],
                ].map(([Icon, title, text], index) => {
                  const IconComponent = Icon as typeof UserRound;
                  return (
                    <article
                      key={title as string}
                      className={`border-line p-6 sm:p-7 ${
                        index % 2 === 1 ? "sm:border-l" : ""
                      } ${index > 1 ? "sm:border-t" : "border-t sm:border-t-0"} ${
                        index > 0 ? "border-t sm:border-t-0" : ""
                      }`}
                    >
                      <IconComponent className="text-accent" size={24} aria-hidden="true" />
                      <h3 className="mt-4 font-semibold tracking-[-0.02em]">{title as string}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted">{text as string}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <div className="rounded-[2rem] border border-accent/20 bg-white p-7 shadow-sm sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                Built and cared for
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                You do not have to maintain your portfolio alone.
              </h2>
              <p className="mt-5 leading-8 text-muted">
                Routine updates are part of the ongoing plan, so keeping your
                current work accurate does not become another thing you have to
                figure out alone.
              </p>
              <div className="mt-6 rounded-2xl bg-accent/5 p-5 text-sm leading-7 text-muted">
                Larger additions and new functionality can be quoted separately
                before any work begins, so you will not receive an unexpected charge.
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Routine updates included", "Changes to existing text, images, resume files, projects, skills, contact information, hours, or testimonials."],
                ["Ongoing support", "Hosting, support, and maintenance help keep the site secure, current, and ready to share."],
                ["Room to grow", "New pages, major redesigns, ecommerce, booking, integrations, or large-scale content entry can be scoped separately."],
                ["Clear expectations", "Ordinary updates are included; larger work is discussed and quoted before anything begins."],
              ].map(([title, text]) => (
                <article key={title} className="rounded-2xl border border-line bg-white p-5 shadow-sm">
                  <h3 className="font-semibold tracking-[-0.02em]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {portfolioPlans.map((plan) => (
              <article key={plan.name} className="rounded-[2rem] border border-line bg-white p-7 shadow-sm sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                  {plan.name}
                </p>
                <div className="mt-4 flex flex-wrap items-end gap-x-3 gap-y-1">
                  <p className="text-4xl font-semibold tracking-[-0.05em]">{plan.price}</p>
                  <p className="pb-1 text-sm font-semibold text-muted">
                    plus {plan.ongoingPrice}
                    {plan.ongoingCadence}
                  </p>
                </div>
                <ul className="mt-6 grid gap-3 text-sm leading-6 text-muted sm:grid-cols-2">
                  {plan.features.slice(0, 6).map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
