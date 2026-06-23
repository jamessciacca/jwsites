import type { Metadata } from "next";
import {
  BarChart3,
  FormInput,
  Gauge,
  Mail,
  MonitorSmartphone,
  Paintbrush,
  RefreshCw,
  Search,
  Server,
} from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { HostingMaintenance } from "@/components/HostingMaintenance";
import { PageHero } from "@/components/PageHero";
import { PricingPreview } from "@/components/PricingPreview";
import { ServiceCard } from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Website Services",
  description:
    "Custom website design, mobile optimization, hosting, maintenance, SEO basics, analytics, and more for local businesses.",
};

const services = [
  {
    icon: Paintbrush,
    title: "Custom Website Design",
    description:
      "Your business is not generic, and your website should not feel generic either. We create a clean, professional design around your brand, services, and customers.",
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile Optimization",
    description:
      "Most customers will visit from a phone. We make sure every page is easy to read, navigate, and use on phones, tablets, and desktops.",
  },
  {
    icon: Server,
    title: "Hosting Setup",
    description:
      "We help get your website online with reliable hosting and connect the technical pieces, so you do not have to sort through confusing options.",
  },
  {
    icon: Gauge,
    title: "Website Maintenance",
    description:
      "A website needs occasional care. We can handle content changes, routine checks, and updates that keep your site accurate and working smoothly.",
  },
  {
    icon: Search,
    title: "Basic SEO Setup",
    description:
      "We build a search-friendly foundation with clear page titles, descriptions, structure, and content that helps search engines understand your business.",
  },
  {
    icon: BarChart3,
    title: "Google Analytics Setup",
    description:
      "See how many people visit, where they come from, and which pages they view. We connect the tools that make website activity easier to understand.",
  },
  {
    icon: FormInput,
    title: "Contact Forms",
    description:
      "Make it simple for potential customers to ask a question, request a quote, or start a conversation directly from your website.",
  },
  {
    icon: Mail,
    title: "Business Email Guidance",
    description:
      "A professional email address builds trust. We can point you toward a setup that matches your domain and fits the way your business works.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesigns",
    description:
      "If your current site feels dated, slow, or hard to use, we can rebuild it into a cleaner experience while keeping the parts that still serve you.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything your business website needs."
        text="From the first design to ongoing updates, we take care of the details that make your website look credible and work well."
      />
      <section className="pb-10 sm:pb-16">
        <div className="container-site grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>
      <section className="section-pad bg-surface">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">One website standard</span>
            <h2 className="display">Premium quality is not an upgrade.</h2>
            <p className="body-large mt-6">
              Every client receives the same professionally designed custom
              website for a $500 one-time build fee. Monthly plans determine
              the hosting, support, maintenance, SEO, and domain service
              JWSites provides after launch.
            </p>
          </div>
          <div className="mt-12">
            <PricingPreview
              heading="Custom design, one clear price."
              text="No starter templates or reduced-quality tiers. Your website receives the same careful design, responsive build, and launch support for $500."
            />
          </div>
        </div>
      </section>
      <HostingMaintenance />
      <section className="section-pad bg-surface">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">What working together feels like</span>
            <h2 className="display">Clear answers. No technical fog.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Plain-language guidance", "We explain the options clearly and help you choose what matters."],
              ["One reliable contact", "You always know who to talk to when you need something."],
              ["Built around your goals", "Every page has a job, from building trust to earning inquiries."],
              ["Support after launch", "We do not disappear the moment your website goes live."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
