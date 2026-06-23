import {
  ArrowRight,
  Check,
  Clock3,
  Code2,
  Gauge,
  Globe2,
  Search,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UsersRound,
  Wrench,
} from "lucide-react";
import { Button } from "./Button";

const valueCards = [
  {
    icon: Search,
    title: "Customers Search Before They Call",
    body: "Most customers look up a business before reaching out. A clean, modern website helps your business appear credible, active, and easy to contact.",
  },
  {
    icon: Globe2,
    title: "Google Visibility Matters",
    body: "Search engines use your website content, page structure, speed, mobile experience, location information, and service keywords to understand your business. A properly built site gives Google more information to connect you with local customers searching for what you offer.",
  },
  {
    icon: ShieldCheck,
    title: "Your Website Builds Trust",
    body: "Outdated pages, missing information, or no website at all can make a business feel less established. A professional site gives customers confidence before they ever call, book, or request a quote.",
  },
  {
    icon: ServerCog,
    title: "Hosting Is Technical",
    body: "Keeping a website online involves domains, DNS records, SSL certificates, hosting, deployments, backups, uptime monitoring, and security. JWSites handles the technical side so business owners do not have to figure it out themselves.",
  },
  {
    icon: Clock3,
    title: "Maintenance Saves Time",
    body: "Business hours, services, menus, prices, photos, staff, and seasonal promotions change. Instead of logging into a confusing website builder, clients can request updates and have them handled professionally.",
  },
  {
    icon: Smartphone,
    title: "A Better Customer Experience",
    body: "A fast, mobile-friendly website makes it easy for customers to call, submit a form, view services, find your location, or learn about your business without frustration.",
  },
];

const websiteItems = [
  "Custom design",
  "Mobile responsive build",
  "Contact form",
  "Service or menu sections",
  "Basic SEO structure",
  "Domain connection setup",
  "Launch support",
];

const monthlyItems = [
  "Hosting",
  "Domain management based on plan",
  "SSL and security",
  "Backups",
  "Uptime monitoring",
  "Troubleshooting",
  "Content updates",
  "SEO improvements depending on plan",
];

export function WebsiteInvestmentValue() {
  return (
    <section className="overflow-hidden bg-[#f5f6f8] py-20 sm:py-24 lg:py-28">
      <div className="container-site">
        <div className="mx-auto max-w-4xl text-center">
          <span className="eyebrow">The value of a professional website</span>
          <h2 className="display">Why Your Website Is Worth the Investment</h2>
          <p className="body-large mx-auto mt-6 max-w-3xl">
            A professional website is more than an online business card—it
            helps customers find you, trust you, and contact you.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {valueCards.map(({ icon: Icon, title, body }, index) => (
            <article
              key={title}
              className="group rounded-3xl border border-white bg-white p-7 shadow-[0_8px_28px_rgba(10,10,11,0.045)] transition duration-300 hover:-translate-y-1 hover:border-accent/20 hover:shadow-[0_20px_50px_rgba(42,43,105,0.09)] sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white">
                  <Icon size={23} strokeWidth={1.8} />
                </span>
                <span className="text-xs font-semibold tracking-[0.15em] text-gray-300">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">{body}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-[2.25rem] border border-line bg-white shadow-[0_28px_75px_rgba(10,10,11,0.07)]">
          <div className="border-b border-line bg-gradient-to-r from-white to-accent/[0.06] px-7 py-9 sm:px-10">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              <Sparkles size={15} />
              Clear separation of costs
            </span>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
              What the $500 Website Covers
            </h3>
            <p className="mt-5 max-w-4xl text-base leading-8 text-muted">
              The $500 one-time website investment covers the design, build,
              mobile responsiveness, contact form setup, basic SEO structure,
              domain connection setup, and launch support. Domain registration
              is separate on Starter and included for the first year on
              Professional and Premium. The monthly plans cover the ongoing
              technical work needed to keep the site online, updated, secure,
              and supported.
            </p>
          </div>

          <div className="grid lg:grid-cols-2">
            <ComparisonColumn
              icon={Code2}
              eyebrow="Paid once"
              title="One-Time Website Investment"
              items={websiteItems}
              className="border-b border-line lg:border-b-0 lg:border-r"
            />
            <ComparisonColumn
              icon={ServerCog}
              eyebrow="Optional after launch"
              title="Monthly Support Plans"
              items={monthlyItems}
              accented
            />
          </div>
        </div>

        <div className="mt-8 grid overflow-hidden rounded-[2.25rem] bg-ink text-white lg:grid-cols-[0.78fr_1.22fr]">
          <div className="relative min-h-72 overflow-hidden bg-gradient-to-br from-accent via-[#4748c9] to-[#22235e] p-8 sm:p-10">
            <div className="absolute -bottom-16 -right-12 size-64 rounded-full border-[42px] border-white/10" />
            <div className="absolute right-14 top-10 size-28 rounded-full border-[22px] border-white/10" />
            <div className="relative flex h-full flex-col justify-between">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur">
                <Wrench size={27} />
              </span>
              <p className="max-w-sm text-2xl font-semibold leading-tight tracking-[-0.035em]">
                Your time is better spent running your business—not
                troubleshooting a website builder.
              </p>
            </div>
          </div>
          <div className="p-8 sm:p-10 lg:p-12">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a5a6ff]">
              Done-for-you service
            </span>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
              Why Not Just Use a DIY Website Builder?
            </h3>
            <p className="mt-5 text-base leading-8 text-gray-400">
              DIY website builders can be useful, but many business owners do
              not have time to design pages, write content, choose images,
              connect domains, manage SEO, fix layout issues, or troubleshoot
              technical problems. JWSites is for business owners who want the
              website done professionally for them, with direct support from
              the person building and managing it.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {[
                [UsersRound, "Direct support"],
                [Gauge, "Professional setup"],
                [Wrench, "Technical help"],
              ].map(([Icon, label]) => {
                const IconComponent = Icon as typeof UsersRound;
                return (
                  <span
                    key={label as string}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-gray-300"
                  >
                    <IconComponent size={16} className="text-[#a5a6ff]" />
                    {label as string}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center rounded-[2rem] border border-accent/15 bg-white px-6 py-12 text-center shadow-sm sm:px-10">
          <h3 className="text-balance text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
            Ready to Look More Professional Online?
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Start with a professionally designed website that makes it easier
            for customers to understand, trust, and contact your business.
          </p>
          <Button href="/contact" className="mt-7" arrow>
            Start Your Website
          </Button>
        </div>
      </div>
    </section>
  );
}

type ComparisonColumnProps = {
  icon: typeof Code2;
  eyebrow: string;
  title: string;
  items: string[];
  className?: string;
  accented?: boolean;
};

function ComparisonColumn({
  icon: Icon,
  eyebrow,
  title,
  items,
  className = "",
  accented = false,
}: ComparisonColumnProps) {
  return (
    <div
      className={`p-7 sm:p-10 ${
        accented ? "bg-accent/[0.035]" : ""
      } ${className}`}
    >
      <span
        className={`flex size-12 items-center justify-center rounded-2xl ${
          accented ? "bg-accent text-white" : "bg-surface text-accent"
        }`}
      >
        <Icon size={23} strokeWidth={1.8} />
      </span>
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-muted">
        {eyebrow}
      </p>
      <h4 className="mt-2 text-2xl font-semibold tracking-[-0.035em]">
        {title}
      </h4>
      <ul className="mt-7 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
            <span
              className={`flex size-5 shrink-0 items-center justify-center rounded-full ${
                accented
                  ? "bg-accent text-white"
                  : "bg-accent/10 text-accent"
              }`}
            >
              <Check size={12} strokeWidth={3} />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
