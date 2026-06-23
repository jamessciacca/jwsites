import {
  Bot,
  Boxes,
  CheckCircle2,
  CircleUserRound,
  Code2,
  Gauge,
  Headphones,
  Layers3,
  LifeBuoy,
  MessagesSquare,
  PencilRuler,
  Rocket,
  ServerCog,
  Settings2,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  Wrench,
} from "lucide-react";
import { Button } from "./Button";

const features = [
  {
    icon: Code2,
    title: "Direct Access to Your Developer",
    description:
      "Need a change? Have a question? You’ll communicate directly with the person who built your website—no support tickets, chatbots, or outsourced call centers.",
  },
  {
    icon: Sparkles,
    title: "Done For You",
    description:
      "Skip the frustration of learning a website builder. We handle the design, setup, deployment, launch, and the hosting included with your selected plan.",
  },
  {
    icon: Rocket,
    title: "Fast Updates",
    description:
      "Need to update hours, pricing, photos, services, or contact information? Simply reach out and we’ll make the changes for you based on your support plan.",
  },
  {
    icon: PencilRuler,
    title: "Built for Your Business",
    description:
      "Every website is custom-built around your brand, goals, and customers—not assembled from a generic template.",
  },
  {
    icon: MessagesSquare,
    title: "Personal Support",
    description:
      "Questions don’t disappear into a queue. You’ll have a direct line for guidance, troubleshooting, and recommendations whenever you need help.",
  },
  {
    icon: Gauge,
    title: "Performance First",
    description:
      "Our websites are optimized for speed, mobile devices, accessibility, and a smooth user experience from day one.",
  },
  {
    icon: ServerCog,
    title: "Stress-Free Hosting",
    description:
      "Your monthly plan includes managed hosting, security, monitoring, and support so you don’t have to worry about the technical side.",
  },
  {
    icon: Layers3,
    title: "Built to Grow",
    description:
      "As your business grows, your website can grow with it. Add new pages, services, galleries, forms, SEO improvements, and new features over time.",
  },
];

const comparisons = [
  {
    feature: "Custom Design",
    diy: "Template-based",
    jwsites: "Fully custom",
    icon: PencilRuler,
  },
  {
    feature: "Support",
    diy: "General customer support",
    jwsites: "Direct access to your developer",
    icon: Headphones,
  },
  {
    feature: "Website Changes",
    diy: "Do it yourself",
    jwsites: "We handle it for you",
    icon: Wrench,
  },
  {
    feature: "Hosting",
    diy: "Self-managed",
    jwsites: "Managed through your plan",
    icon: ServerCog,
  },
  {
    feature: "Troubleshooting",
    diy: "Find answers yourself",
    jwsites: "Personalized assistance",
    icon: LifeBuoy,
  },
  {
    feature: "SEO Guidance",
    diy: "Limited",
    jwsites: "Personalized recommendations",
    icon: Gauge,
  },
  {
    feature: "Relationship",
    diy: "Software subscription",
    jwsites: "Long-term local partner",
    icon: UserRoundCheck,
  },
  {
    feature: "Setup",
    diy: "DIY",
    jwsites: "Done for you",
    icon: Settings2,
  },
  {
    feature: "Maintenance",
    diy: "Your responsibility",
    jwsites: "Available through maintenance plans",
    icon: ShieldCheck,
  },
];

export function WhyChooseJWSites() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f7f7ff] to-white py-20 sm:py-24 lg:py-28">
      <div className="absolute left-1/2 top-0 h-96 w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[110px]" />
      <div className="container-site relative">
        <div className="mx-auto max-w-4xl text-center">
          <span className="eyebrow">Why Choose JWSites</span>
          <h2 className="display">
            A Real Web Partner — Not Just Another Website Builder
          </h2>
          <p className="body-large mx-auto mt-6 max-w-3xl">
            When you work with JWSites, you’re not buying software. You’re
            partnering directly with the person designing, hosting, and
            maintaining your website.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-line bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-accent/25 hover:shadow-[0_22px_55px_rgba(45,46,120,0.1)]"
            >
              <span className="absolute right-5 top-5 text-xs font-semibold text-gray-300">
                0{index + 1}
              </span>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent transition duration-300 group-hover:scale-105 group-hover:bg-accent group-hover:text-white">
                <Icon size={23} strokeWidth={1.8} />
              </span>
              <h3 className="mt-6 text-lg font-semibold tracking-[-0.025em]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">A different kind of service</span>
            <h3 className="text-balance text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
              Software gives you tools. JWSites gives you a partner.
            </h3>
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_24px_65px_rgba(10,10,11,0.07)]">
            <div className="hidden grid-cols-[0.8fr_1fr_1fr] border-b border-line bg-surface px-7 py-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted md:grid">
              <span>Feature</span>
              <span>DIY Website Builder</span>
              <span className="text-accent">JWSites</span>
            </div>

            <div>
              {comparisons.map(
                ({ feature, diy, jwsites, icon: Icon }, index) => (
                  <div
                    key={feature}
                    className={`grid gap-4 px-5 py-5 transition hover:bg-accent/[0.025] sm:px-7 md:grid-cols-[0.8fr_1fr_1fr] md:items-center ${
                      index < comparisons.length - 1
                        ? "border-b border-line"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 font-semibold">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-surface text-muted">
                        <Icon size={18} strokeWidth={1.8} />
                      </span>
                      {feature}
                    </div>
                    <div className="flex items-start gap-3 pl-12 text-sm text-muted md:pl-0">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                        {index % 2 === 0 ? (
                          <Boxes size={12} />
                        ) : (
                          <Bot size={12} />
                        )}
                      </span>
                      <div>
                        <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-gray-400 md:hidden">
                          DIY Website Builder
                        </span>
                        {diy}
                      </div>
                    </div>
                    <div className="flex items-start gap-3 pl-12 text-sm font-medium text-ink md:pl-0">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                        <CheckCircle2 size={12} />
                      </span>
                      <div>
                        <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-accent md:hidden">
                          JWSites
                        </span>
                        {jwsites}
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="relative mt-16 overflow-hidden rounded-[2.25rem] bg-ink px-7 py-14 text-white shadow-soft sm:px-12 sm:py-16">
          <div className="absolute right-0 top-1/2 size-80 -translate-y-1/2 translate-x-1/3 rounded-full bg-accent/30 blur-[90px]" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[#a5a6ff]">
                <CircleUserRound size={22} />
                <span className="text-xs font-semibold uppercase tracking-[0.16em]">
                  The JWSites promise
                </span>
              </div>
              <h3 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                You’re Never On Your Own
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
                Our goal isn’t just to build your website and disappear. We aim
                to become your long-term web partner, helping keep your site
                updated, reliable, and ready to support your business as it
                grows.
              </p>
            </div>
            <Button
              href="/contact"
              className="w-full whitespace-nowrap lg:w-auto"
              arrow
            >
              Let’s Build Your Website
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
