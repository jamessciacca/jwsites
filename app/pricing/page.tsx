import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { CustomWebsiteCard } from "@/components/CustomWebsiteCard";
import { SupportPlanCard } from "@/components/SupportPlanCard";
import { complexBusinessWebsite, portfolioPlans } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Website & Portfolio Pricing",
  description:
    "Transparent pricing for small-business websites and personal portfolios, with hosting, support, maintenance, and reasonable content updates included.",
};

const faqs = [
  {
    question: "What counts as a routine content update?",
    answer:
      "Reasonable content updates include changes to existing text, images, résumé files, projects, skills, contact information, business hours, and testimonials. These ordinary updates are included in your ongoing plan.",
  },
  {
    question: "Will I receive an unexpected charge for an update?",
    answer:
      "No. Routine content updates are included. If a request is a larger addition or new functionality, JWSites will explain the scope and provide a separate quote before any work begins.",
  },
  {
    question: "How long does a website take?",
    answer:
      "Most small websites are completed within two to four weeks once the needed content, photos, and information are ready. A clear timeline is provided before work begins.",
  },
  {
    question: "Can I use my own domain?",
    answer:
      "Yes. JWSites can connect a domain you already own or help connect a new one. Any domain registration or renewal cost is confirmed clearly with you.",
  },
  {
    question: "What happens if I end ongoing service?",
    answer:
      "We will explain the hosting and domain transition steps clearly. You will need another arrangement for hosting, security, maintenance, updates, and technical support.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero-glow pb-14 pt-32 sm:pb-20 sm:pt-36">
        <div className="container-site text-center">
          <span className="eyebrow animate-fade-up">Clear from the start</span>
          <h1 className="page-display mx-auto max-w-4xl animate-fade-up animate-delay-1">Simple, transparent pricing.</h1>
          <p className="body-large mx-auto mt-7 max-w-3xl animate-fade-up animate-delay-2">
            Choose a website for your business or a portfolio for yourself. Routine updates are included, and larger additions are always discussed before work begins.
          </p>
        </div>
      </section>

      <section id="business-websites" className="scroll-mt-24 pb-16 sm:pb-20">
        <div className="container-site">
          <CustomWebsiteCard />
        </div>
      </section>

      <section id="personal-portfolios" className="section-pad scroll-mt-24 bg-surface">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Personal Portfolios</span>
            <h2 className="display">Put your work and experience in one polished place.</h2>
            <p className="body-large mt-6">
              Built for students, job seekers, developers, designers, freelancers, creatives, and professionals who want a stronger personal presence online.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-2 lg:items-stretch">
            {portfolioPlans.map((plan, index) => (
              <SupportPlanCard key={plan.name} {...plan} featured={index === 1} />
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-5xl rounded-2xl border border-line bg-white px-6 py-5 text-sm leading-7 text-muted shadow-sm">
            <p>
              Reasonable content updates are included with ongoing service. More
              involved business websites, including booking systems, extensive
              galleries or menus, ecommerce, or custom functionality, are{" "}
              <span className="font-semibold text-ink">{complexBusinessWebsite.price}</span>.
              Larger additions and new functionality can be quoted separately
              before any work begins.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2 className="display">Clear answers before you begin.</h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group rounded-2xl border border-line bg-white px-6 py-5 shadow-sm open:border-accent/25 open:shadow-card sm:px-7" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {faq.question}<ChevronDown className="shrink-0 text-accent transition group-open:rotate-180" size={19} />
                </summary>
                <p className="mt-4 max-w-3xl border-t border-line pt-4 text-sm leading-7 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
