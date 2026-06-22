import type { Metadata } from "next";
import { HelpCircle } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { HostingMaintenance } from "@/components/HostingMaintenance";
import { PageHero } from "@/components/PageHero";
import { PricingCard } from "@/components/PricingCard";
import { pricingTiers } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Website Pricing",
  description:
    "Website packages for local businesses starting at $799, with optional hosting, maintenance, and managed updates.",
};

const faqs = [
  [
    "Do I have to choose a package exactly as shown?",
    "No. These packages are useful starting points. We can provide a custom quote when your business needs something different.",
  ],
  [
    "Is monthly maintenance required?",
    "No. Maintenance is available if you want ongoing help with updates and site care. We will explain what is included before you decide.",
  ],
  [
    "What do I need to provide?",
    "Usually your logo, service details, business information, and any photos you want to use. If you are missing something, we will help you make a practical plan.",
  ],
  [
    "How long does a website take?",
    "Timing depends on the size of the site and how quickly content is ready. A clear project schedule is provided before work begins.",
  ],
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Clear packages. No mystery proposal."
        text="Start with the option that best matches your business. We’ll confirm the exact scope and price before any work begins."
      />
      <section className="pb-20 sm:pb-28">
        <div className="container-site">
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.name} {...tier} />
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-6 text-muted">
            Every business is different. Custom quotes are available for
            projects that fall outside these packages. Final pricing depends on
            project scope and is always agreed upon before work begins.
          </p>
        </div>
      </section>
      <HostingMaintenance />
      <section className="section-pad bg-surface">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Common questions</span>
            <h2 className="display">A few things worth knowing.</h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4">
            {faqs.map(([question, answer]) => (
              <article
                key={question}
                className="flex gap-4 rounded-2xl border border-line bg-white p-6 sm:p-7"
              >
                <HelpCircle className="mt-0.5 shrink-0 text-accent" size={21} />
                <div>
                  <h3 className="font-semibold">{question}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{answer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
