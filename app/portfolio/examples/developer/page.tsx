import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownToLine,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  GitBranch,
  Github,
  Mail,
  MonitorSmartphone,
  Rocket,
  Terminal,
} from "lucide-react";
import { ConceptBanner } from "@/components/concepts/ConceptBanner";
import { ConceptSiteNav } from "@/components/concepts/ConceptSiteNav";
import { DemoSection } from "@/components/concepts/DemoSection";
import { demoImages } from "@/data/demoImages";

export const metadata: Metadata = {
  title: "Alex Rivera | Developer Portfolio Website Demo",
  description:
    "A distinctive developer portfolio website concept by JWSites featuring project cards, stack chips, resume, GitHub links, and contact.",
};

const projects = [
  {
    name: "Studio Booking OS",
    category: "Full stack",
    status: "Live concept",
    description:
      "Scheduling, intake, reminders, and admin workflows for small studios that need booking without enterprise clutter.",
    stack: ["Next.js", "Postgres", "Stripe", "Email"],
    image: demoImages.portfolios.developer.work[0],
    highlights: ["Calendar rules", "Client intake", "Owner dashboard"],
  },
  {
    name: "Inventory Scanner",
    category: "Internal tool",
    status: "Prototype",
    description:
      "A mobile-first scanner for warehouse teams that need quick stock updates, audit trails, and fewer spreadsheet mistakes.",
    stack: ["React", "Node", "REST APIs", "PWA"],
    image: demoImages.portfolios.developer.work[1],
    highlights: ["Offline-friendly UI", "Audit history", "Role-aware screens"],
  },
  {
    name: "Interface Kit",
    category: "Design system",
    status: "Reusable",
    description:
      "A component starter for fast marketing pages, cleaner product screens, and consistent handoff between design and code.",
    stack: ["TypeScript", "Tailwind", "A11y", "Docs"],
    image: demoImages.portfolios.developer.work[2],
    highlights: ["Tokenized styles", "Accessible controls", "Fast page builds"],
  },
];

const stackGroups = [
  ["Frontend", "React", "Next.js", "TypeScript", "Tailwind"],
  ["Backend", "Node", "Postgres", "APIs", "Auth"],
  ["Workflow", "GitHub", "Testing", "Deployment", "Docs"],
];

export default function DeveloperPortfolioExamplePage() {
  return (
    <div id="top" className="bg-[#0b1115] text-white">
      <ConceptBanner
        tone="strong"
        backHref="/portfolio/examples"
        backLabel="Back to Portfolio Examples"
        ctaHref="/contact?project=personal-portfolio"
        ctaLabel="Start a portfolio like this"
      />
      <ConceptSiteNav
        name="Alex Rivera"
        links={[
          { label: "Projects", href: "#projects" },
          { label: "Stack", href: "#stack" },
          { label: "Notes", href: "#notes" },
          { label: "Contact", href: "#contact" },
        ]}
        ctaLabel="Open Resume"
        ctaHref="#resume"
        className="bg-[#0b1115] text-white"
        buttonClassName="bg-[#7cf7d4] text-[#0b1115]"
      />

      <section className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-24">
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,#7cf7d4_1px,transparent_0)] [background-size:28px_28px]" />
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#7cf7d4]/10 blur-3xl" />
        <div className="relative mx-auto grid min-h-[620px] max-w-7xl gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="animate-fade-up">
            <p className="mb-5 inline-flex rounded-full border border-[#7cf7d4]/30 bg-[#7cf7d4]/10 px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.18em] text-[#7cf7d4]">
              ~/alex-rivera/portfolio
            </p>
            <h1 className="text-balance font-mono text-4xl font-black leading-[0.93] tracking-[-0.035em] sm:text-7xl lg:text-8xl">
              Build useful things. Explain them clearly. Ship the work.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
              A developer portfolio with the personality of a workspace:
              project cards, stack notes, build logs, GitHub links, and a
              recruiter-friendly path to the resume.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#projects" className="rounded-full bg-[#7cf7d4] px-7 py-3.5 text-center text-sm font-black text-[#0b1115] transition hover:-translate-y-0.5 hover:bg-white">
                View Build Log
              </Link>
              <Link href="#contact" className="rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-center text-sm font-bold text-white transition hover:bg-white hover:text-[#0b1115]">
                Contact Alex
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#101a20] p-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex gap-2">
                <span className="size-3 rounded-full bg-[#ff5f57]" />
                <span className="size-3 rounded-full bg-[#febc2e]" />
                <span className="size-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="font-mono text-xs text-white/45">alex.dev</span>
            </div>
            <div className="mt-5 rounded-3xl border border-[#7cf7d4]/20 bg-[#071013] p-5 font-mono">
              <p className="text-sm text-[#7cf7d4]">$ npm run profile</p>
              <div className="mt-5 space-y-3 text-sm leading-7 text-white/70">
                <p><span className="text-white">role:</span> front-end developer</p>
                <p><span className="text-white">focus:</span> product UI, internal tools, full-stack prototypes</p>
                <p><span className="text-white">status:</span> available for thoughtful teams</p>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  ["12", "Builds"],
                  ["6", "Stacks"],
                  ["3", "Case studies"],
                ].map(([stat, label]) => (
                  <div key={label} className="rounded-2xl border border-[#7cf7d4]/15 bg-[#7cf7d4]/5 p-4 text-center">
                    <p className="text-2xl font-black text-[#7cf7d4]">{stat}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-wider text-white/40">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mt-5 aspect-[16/9] overflow-hidden rounded-3xl">
              <Image
                src={demoImages.portfolios.developer.hero}
                alt="Developer workspace with code on a laptop screen"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1115]/80 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#101a20] px-5 py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-white/55">
          {["Projects", "Skills", "GitHub", "Resume", "Contact"].map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2">{item}</span>
          ))}
        </div>
      </section>

      <DemoSection id="projects" eyebrow="Build log" title="Projects with context, constraints, and receipts." className="bg-[#eef8f7] text-[#071b1f]">
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.name} className="group overflow-hidden rounded-[2rem] border border-[#bde8df] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image src={project.image} alt={`${project.name} developer project`} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute left-4 top-4 rounded-full bg-[#071b1f] px-3 py-1.5 font-mono text-[10px] font-black uppercase tracking-wider text-[#7cf7d4]">
                  build.0{index + 1}
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full bg-[#d7f1ee] px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#10685e]">{project.category}</span>
                  <span className="text-xs font-bold text-[#59716f]">{project.status}</span>
                </div>
                <h2 className="mt-5 text-2xl font-black tracking-[-0.04em]">{project.name}</h2>
                <p className="mt-3 text-sm leading-6 text-[#59716f]">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full bg-[#f0f7f6] px-3 py-1.5 font-mono text-xs font-bold text-[#10685e]">{tech}</span>
                  ))}
                </div>
                <ul className="mt-5 space-y-2 text-sm text-[#334947]">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2"><span className="mt-2 size-1.5 rounded-full bg-[#178f80]" />{highlight}</li>
                  ))}
                </ul>
                <Link href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#071b1f] transition hover:text-[#178f80]">
                  View notes <ExternalLink size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </DemoSection>

      <DemoSection id="stack" eyebrow="Stack map" title="A technical profile that still feels human." className="bg-[#0b1115] text-white">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 sm:p-8">
            <Terminal className="text-[#7cf7d4]" size={28} aria-hidden="true" />
            <h2 className="mt-5 font-mono text-3xl font-black tracking-[-0.04em] sm:text-4xl">
              I like interfaces that make the next step obvious.
            </h2>
            <p className="mt-5 leading-8 text-white/60">
              Dashboards people trust, forms people finish, and small systems
              that feel calm even when the workflow underneath is messy.
            </p>
          </div>
          <div className="grid gap-4">
            {stackGroups.map(([group, ...items]) => (
              <article key={group} className="rounded-3xl border border-white/10 bg-white/[0.07] p-6">
                <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-[#7cf7d4]">{group}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-white/70">{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </DemoSection>

      <DemoSection id="notes" eyebrow="Builder notes" title="Tiny details make a portfolio feel alive." className="bg-[#eef8f7] text-[#071b1f]">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            [Code2, "Code samples", "Link to repos, snippets, or selected implementation notes."],
            [MonitorSmartphone, "Responsive demos", "Show the work on mobile, not only desktop screenshots."],
            [Database, "Data thinking", "Explain schema choices, constraints, and tradeoffs."],
            [GitBranch, "Version history", "Tell the story from first prototype to shipped version."],
          ].map(([Icon, title, text]) => {
            const IconComponent = Icon as typeof Code2;
            return (
              <article key={title as string} className="rounded-3xl border border-[#bde8df] bg-white p-6">
                <IconComponent className="text-[#178f80]" size={24} aria-hidden="true" />
                <h3 className="mt-4 text-lg font-black tracking-[-0.03em]">{title as string}</h3>
                <p className="mt-2 text-sm leading-6 text-[#59716f]">{text as string}</p>
              </article>
            );
          })}
        </div>
        <div id="resume" className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="relative min-h-72 overflow-hidden rounded-[2rem]">
            <Image src={demoImages.portfolios.developer.profile} alt="Developer working on a laptop" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071b1f]/80 to-transparent" />
          </div>
          <div className="rounded-[2rem] bg-[#071b1f] p-7 text-white sm:p-8">
            <Cpu className="text-[#7cf7d4]" size={28} aria-hidden="true" />
            <h3 className="mt-5 text-3xl font-black tracking-[-0.04em]">Resume, GitHub, and contact in one place.</h3>
            <p className="mt-4 leading-8 text-white/60">
              The page gives hiring teams the fast scan first, then deeper proof
              for people who want to inspect how the work was made.
            </p>
            <Link href="#contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#7cf7d4] px-6 py-3 text-sm font-black text-[#071b1f] transition hover:-translate-y-0.5 hover:bg-white">
              <ArrowDownToLine size={17} aria-hidden="true" />
              Sample Resume
            </Link>
          </div>
        </div>
      </DemoSection>

      <section id="contact" className="bg-[#101a20] px-5 py-20 text-white sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[#0b1115] p-8 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7cf7d4]">Contact</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em]">Available for product teams and select freelance builds.</h2>
            <div className="mt-8 space-y-5 text-sm text-white/65">
              <p className="flex min-w-0 items-center gap-3"><Mail size={18} className="shrink-0 text-[#7cf7d4]" /><span className="min-w-0 break-all">alex@rivera.dev.example</span></p>
              <p className="flex min-w-0 items-center gap-3"><Github size={18} className="shrink-0 text-[#7cf7d4]" /><span className="min-w-0 break-all">github.com/alexrivera-example</span></p>
              <p className="flex items-center gap-3"><ArrowDownToLine size={18} className="text-[#7cf7d4]" />Resume and project notes</p>
            </div>
            <p className="mt-8 text-xs text-white/35">Fictional contact details for this sample portfolio.</p>
          </div>
          <form className="rounded-[2rem] border border-white/10 bg-white p-8 text-[#071b1f] shadow-xl sm:p-10">
            <h2 className="text-3xl font-black tracking-[-0.04em]">Send a message</h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <input className="rounded-xl border border-[#b9ddd8] px-4 py-3 text-sm outline-none focus:border-[#178f80] focus:ring-4 focus:ring-[#178f80]/10" aria-label="Name" placeholder="Name" />
              <input className="rounded-xl border border-[#b9ddd8] px-4 py-3 text-sm outline-none focus:border-[#178f80] focus:ring-4 focus:ring-[#178f80]/10" type="email" aria-label="Email" placeholder="Email" />
            </div>
            <textarea className="mt-4 min-h-32 w-full rounded-xl border border-[#b9ddd8] px-4 py-3 text-sm outline-none focus:border-[#178f80] focus:ring-4 focus:ring-[#178f80]/10" aria-label="Message" placeholder="Tell me about the role, team, or project." />
            <button type="button" className="mt-5 w-full rounded-full bg-[#071b1f] px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#178f80]">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
