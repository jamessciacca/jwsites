import type { Metadata } from "next";
import {
  BarChart3,
  FormInput,
  Gauge,
  Mail,
  MonitorSmartphone,
  Paintbrush,
  Search,
  Server,
  UserRound,
} from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { HostingMaintenance } from "@/components/HostingMaintenance";
import { PageHero } from "@/components/PageHero";
import { PricingPreview } from "@/components/PricingPreview";
import { ServiceCard } from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Website Services",
  description:
    "Custom small-business websites and personal portfolios, with mobile-friendly design, hosting, maintenance, support, and reasonable content updates.",
};

const services = [
  {
    icon: Paintbrush,
    title: "Small-Business Websites",
    description:
      "Your business is not generic, and your website should not feel generic either. We create a clean, professional design around your brand, services, and customers.",
  },
  {
    icon: UserRound,
    title: "Personal Portfolios",
    description:
      "Showcase your experience, projects, skills, résumé, and contact details in a polished portfolio built for students, job seekers, developers, designers, freelancers, creatives, and professionals.",
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
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="A polished website for your business—or for you."
        text="From the first design to ongoing updates, we create and care for small-business websites and personal portfolios that look credible and work well."
      />
      <section className="pb-8 sm:pb-12">
        <div className="container-site grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>
      <section id="personal-portfolios" className="section-pad scroll-mt-24 bg-surface">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Personal Portfolios</span>
            <h2 className="display">Give your work a professional home.</h2>
            <p className="body-large mt-6">
              Whether you are applying for internships, looking for your next
              role, building a freelance practice, or presenting creative
              work, your portfolio can make your experience easier to explore
              and remember.
            </p>
          </div>
          <div className="mt-10">
            <PricingPreview
              heading="One clear path for each kind of project."
              text="Business websites include ongoing monthly care. Portfolio options include annual hosting, support, and reasonable content updates."
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
              ["Updates after launch", "Reasonable changes to existing content are included with ongoing service."],
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
