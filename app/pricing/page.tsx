import type { Metadata } from "next";
import {
  ChevronDown,
  ShieldCheck,
} from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { CustomWebsiteCard } from "@/components/CustomWebsiteCard";
import { DomainSetupOwnership } from "@/components/DomainSetupOwnership";
import { SupportPlanCard } from "@/components/SupportPlanCard";
import { WebsiteInvestmentValue } from "@/components/WebsiteInvestmentValue";
import { WhyChooseJWSites } from "@/components/WhyChooseJWSites";
import { monthlyPlans } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Website Pricing",
  description:
    "Every custom website is $500, with clear Starter, Professional, and Premium monthly plans for hosting, support, maintenance, and growth.",
};

const faqs = [
  {
    question: "How long does a website take?",
    answer:
      "Most websites are completed within two to four weeks once the needed content, photos, and business information are ready. A clear timeline is provided before work begins.",
  },
  {
    question: "Can I use my own domain?",
    answer:
      "Yes. JWSites can connect a domain you already own. On Starter, a new domain is paid separately at the registration cost. Professional and Premium include the first year of a new domain, which JWSites purchases and configures for you.",
  },
  {
    question: "Who owns my domain?",
    answer:
      "The domain represents your business. JWSites can manage the technical setup and registration, and you can request a domain transfer if you decide to move services later.",
  },
  {
    question: "Can I cancel monthly service?",
    answer:
      "Yes. Monthly service can be canceled. We will explain the hosting and domain transition steps clearly. If your domain was included, future renewal or transfer costs may apply at the standard registration rate.",
  },
  {
    question: "Can I update my own website?",
    answer:
      "Yes, that can be discussed during the project. Many clients prefer to send updates to JWSites so they do not have to manage the technical side themselves.",
  },
  {
    question: "What happens if I don’t choose a monthly plan?",
    answer:
      "The website is yours. Monthly plans cover hosting and ongoing management. If you do not choose a plan, you will need to arrange your own hosting, domain registration, security, maintenance, and technical support.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero-glow pb-16 pt-32 sm:pb-20 sm:pt-40">
        <div className="container-site text-center">
          <span className="eyebrow animate-fade-up">No Hidden Fees</span>
          <h1 className="page-display mx-auto max-w-4xl animate-fade-up animate-delay-1">
            Simple, transparent pricing.
          </h1>
          <p className="body-large mx-auto mt-7 max-w-3xl animate-fade-up animate-delay-2">
            Every business receives the same professionally designed custom
            website. Choose the support plan that’s right for you after launch.
          </p>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="container-site">
          <CustomWebsiteCard />
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-6 text-muted">
            Monthly service is optional and begins only after launch. The $500
            website price is a separate, one-time investment.
          </p>
        </div>
      </section>

      <section id="monthly-plans" className="section-pad scroll-mt-24 bg-surface">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Monthly Service Plans</span>
            <h2 className="display">Keep Your Website Running Smoothly</h2>
            <p className="body-large mt-6">
              Every plan starts with the same $500 custom website build. Choose
              the monthly level of hosting, support, maintenance, and growth
              that fits your business.
            </p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
            {monthlyPlans.map((plan) => (
              <SupportPlanCard key={plan.name} {...plan} />
            ))}
          </div>
          <div className="mx-auto mt-12 flex max-w-4xl items-start gap-4 rounded-2xl border border-accent/15 bg-white p-5 shadow-sm">
            <ShieldCheck className="mt-0.5 shrink-0 text-accent" size={22} />
            <p className="text-sm leading-6 text-muted">
              All websites require a one-time $500 custom build fee. Domain
              names are billed separately on the Starter Plan and included for
              the first year on Professional and Premium plans. Domain renewals
              after the first year may be billed annually at the standard
              registration cost.
            </p>
          </div>
        </div>
      </section>

      <DomainSetupOwnership />

      <WhyChooseJWSites />

      <WebsiteInvestmentValue />

      <section className="section-pad bg-surface">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2 className="display">Clear answers before you begin.</h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-line bg-white px-6 py-5 shadow-sm open:border-accent/25 open:shadow-card sm:px-7"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {faq.question}
                  <ChevronDown
                    className="shrink-0 text-accent transition group-open:rotate-180"
                    size={19}
                  />
                </summary>
                <p className="mt-4 max-w-3xl border-t border-line pt-4 text-sm leading-7 text-muted">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
