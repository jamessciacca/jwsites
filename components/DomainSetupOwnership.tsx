import {
  ArrowLeftRight,
  BadgeCheck,
  Globe2,
  KeyRound,
  Settings2,
  ShieldCheck,
} from "lucide-react";

const details = [
  {
    icon: Globe2,
    title: "Your Business Address Online",
    text: "A domain is the web address customers type to find your business, such as yourbusiness.com.",
  },
  {
    icon: KeyRound,
    title: "Clear Domain Pricing",
    text: "Starter clients pay for their chosen domain separately at cost. Professional and Premium include the first year.",
  },
  {
    icon: Settings2,
    title: "Technical Setup Handled",
    text: "JWSites handles the purchase when included, DNS configuration, SSL setup, and connection to your website.",
  },
  {
    icon: ArrowLeftRight,
    title: "Transfer Available",
    text: "If you ever decide to leave, you can request a domain transfer. The goal is a simple process without technical stress.",
  },
];

export function DomainSetupOwnership() {
  return (
    <section className="border-t border-line bg-white py-20 sm:py-24">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <span className="eyebrow">Domain Setup &amp; Ownership</span>
            <h2 className="display">Your web address, set up properly.</h2>
            <p className="body-large mt-6">
              Domain setup can feel technical. JWSites makes it straightforward
              by handling the connection work and clearly explaining what is
              included in your plan.
            </p>
            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-accent/15 bg-accent/[0.04] p-5">
              <BadgeCheck className="mt-0.5 shrink-0 text-accent" size={21} />
              <p className="text-sm leading-6 text-gray-700">
                Professional and Premium include the first year of domain
                registration. Renewals after year one may be billed annually at
                the standard registration cost.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {details.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-3xl border border-line bg-surface/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/20 hover:bg-white hover:shadow-card"
              >
                <span className="flex size-11 items-center justify-center rounded-2xl bg-white text-accent shadow-sm">
                  <Icon size={21} strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.025em]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-start gap-4 rounded-[1.75rem] bg-ink p-6 text-white sm:p-8">
          <ShieldCheck className="mt-0.5 shrink-0 text-[#a5a6ff]" size={24} />
          <div>
            <h3 className="font-semibold">Simple, transparent ownership</h3>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              JWSites may manage the technical setup, but the domain represents
              your business. Transfer assistance is available if you choose to
              move your website or domain management later.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
