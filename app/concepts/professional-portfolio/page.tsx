import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownToLine,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Layers3,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { ConceptBanner } from "@/components/concepts/ConceptBanner";
import { ConceptSiteNav } from "@/components/concepts/ConceptSiteNav";
import { DemoSection } from "@/components/concepts/DemoSection";
import { demoImages } from "@/data/demoImages";

export const metadata: Metadata = {
  title: "Jordan Ellis | Professional Project Portfolio Website Demo",
  description:
    "A distinctive professional portfolio website concept by JWSites with case studies, skills, career highlights, resume framing, and contact.",
};

const caseStudies = [
  {
    name: "Operations Command Center",
    category: "Dashboard",
    status: "Shipped",
    description:
      "Turned weekly spreadsheet chaos into a live operating dashboard for leadership, vendors, and field teams.",
    outcome: "42% less reporting time",
    image: demoImages.portfolios.professional.work[0],
    skills: ["Stakeholder mapping", "KPI design", "Executive reporting"],
  },
  {
    name: "Customer Onboarding Reset",
    category: "Process",
    status: "Measured",
    description:
      "Rebuilt a fragmented first-30-day experience into a guided rollout with owners, checkpoints, and escalation paths.",
    outcome: "18 point completion lift",
    image: demoImages.portfolios.professional.work[1],
    skills: ["Service design", "Documentation", "Change management"],
  },
  {
    name: "Five-Market Launch Plan",
    category: "Launch",
    status: "Delivered",
    description:
      "Coordinated timeline, vendor readiness, risk review, and internal communication across five regional launches.",
    outcome: "5 markets aligned",
    image: demoImages.portfolios.professional.work[2],
    skills: ["Roadmapping", "Risk tracking", "Cross-team rituals"],
  },
];

const timeline = [
  ["Now", "Senior Operations Lead", "Owns launch planning, dashboards, and cross-functional operating rhythm."],
  ["2024", "Customer Experience Program", "Created the onboarding reset used by account teams and customer success."],
  ["2022", "Project Management Certificate", "Formalized the planning system used across Jordan's case studies."],
];

export default function ProfessionalPortfolioExamplePage() {
  return (
    <div id="top" className="bg-[#eef2f7] text-[#101722]">
      <ConceptBanner
        tone="calm"
        backHref="/portfolio/examples"
        backLabel="Back to Portfolio Examples"
        ctaHref="/contact?project=personal-portfolio"
        ctaLabel="Start a portfolio like this"
      />
      <ConceptSiteNav
        name="Jordan Ellis"
        links={[
          { label: "Work", href: "#work" },
          { label: "System", href: "#system" },
          { label: "Timeline", href: "#timeline" },
          { label: "Contact", href: "#contact" },
        ]}
        ctaLabel="Resume"
        ctaHref="#resume"
        className="bg-[#0e1116] text-white"
        buttonClassName="bg-[#8fd4ff] text-[#0e1116]"
      />

      <section className="relative overflow-hidden bg-[#0e1116] px-5 py-20 text-white sm:px-8 sm:py-24">
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(#8fd4ff_1px,transparent_1px),linear-gradient(90deg,#8fd4ff_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#8fd4ff]/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#f7bd4f]/15 blur-3xl" />
        <div className="relative mx-auto grid min-h-[610px] max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="animate-fade-up">
            <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8fd4ff]">
              Project manager · Operations strategist · Resume site
            </p>
            <h1 className="text-balance font-mono text-4xl font-black leading-[0.95] tracking-[-0.035em] sm:text-7xl">
              Projects, proof, and the system behind the work.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
              A professional portfolio that reads like a living resume: case
              studies, measurable outcomes, skill chips, and a clear path for
              recruiters to understand the person behind the titles.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#work" className="rounded-full bg-[#8fd4ff] px-7 py-3.5 text-center text-sm font-black text-[#0e1116] transition hover:-translate-y-0.5 hover:bg-white">
                Explore Case Studies
              </Link>
              <Link href="#resume" className="rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-center text-sm font-bold text-white transition hover:bg-white hover:text-[#0e1116]">
                Download Resume
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <span className="size-3 rounded-full bg-[#ff6b6b]" />
                  <span className="size-3 rounded-full bg-[#f7bd4f]" />
                  <span className="size-3 rounded-full bg-[#60d394]" />
                </div>
                <span className="font-mono text-xs text-white/45">jordan-ellis.profile</span>
              </div>
              <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src={demoImages.portfolios.professional.profile}
                  alt="Professional portrait in an office setting"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1116]/70 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-[#0e1116]/75 p-4 backdrop-blur">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#8fd4ff]">Current focus</p>
                  <p className="mt-2 text-sm leading-6 text-white/78">
                    Building operating systems for teams that need less noise
                    and better decisions.
                  </p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                {[
                  ["8+", "Years"],
                  ["42%", "Time saved"],
                  ["5", "Markets"],
                ].map(([stat, label]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="font-mono text-2xl font-black text-[#8fd4ff]">{stat}</p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-white/45">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d9e3ee] bg-white px-5 py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#526171]">
          {["Case Studies", "Resume", "Skills", "Certificates", "Contact"].map((item) => (
            <span key={item} className="rounded-full border border-[#d9e3ee] bg-[#f6f8fb] px-4 py-2">{item}</span>
          ))}
        </div>
      </section>

      <DemoSection id="work" eyebrow="Filtered work" title="A portfolio that makes professional impact feel concrete.">
        <div className="mb-6 flex flex-wrap gap-3">
          {["All", "Dashboard", "Process", "Launch"].map((filter, index) => (
            <span key={filter} className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.14em] ${index === 0 ? "bg-[#0e1116] text-white" : "bg-white text-[#526171] ring-1 ring-[#d9e3ee]"}`}>
              {filter}
            </span>
          ))}
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {caseStudies.map((project, index) => (
            <article key={project.name} className="group overflow-hidden rounded-[2rem] border border-[#d9e3ee] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image src={project.image} alt={`${project.name} project case study`} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute left-4 top-4 rounded-full bg-[#0e1116] px-3 py-1.5 font-mono text-[10px] font-black uppercase tracking-wider text-[#8fd4ff]">
                  0{index + 1} · {project.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[#eaf6ff] px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#21628f]">{project.status}</span>
                  <span className="text-xs font-bold text-[#526171]">{project.outcome}</span>
                </div>
                <h2 className="mt-5 text-2xl font-black tracking-[-0.04em]">{project.name}</h2>
                <p className="mt-3 text-sm leading-6 text-[#5c6875]">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-[#f1f4f8] px-3 py-1.5 text-xs font-bold text-[#526171]">{skill}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </DemoSection>

      <DemoSection id="system" eyebrow="Operating system" title="The resume becomes a usable interface." className="bg-[#0e1116] text-white">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#8fd4ff]">jordan.method</p>
            <p className="mt-5 text-2xl font-semibold leading-10 text-white/88 sm:text-3xl">
              I turn ambiguous goals into practical systems: define the work,
              map the handoffs, make the numbers visible, and keep the team
              honest about what needs attention.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              [Layers3, "Workflows", "Clean ownership, dependencies, and repeatable planning rituals."],
              [BarChart3, "Metrics", "Dashboards that show what changed and what needs action."],
              [Sparkles, "Communication", "Sharp updates that make busy teams calmer and clearer."],
            ].map(([Icon, title, text]) => {
              const IconComponent = Icon as typeof Layers3;
              return (
                <article key={title as string} className="rounded-3xl border border-white/10 bg-white/[0.07] p-6">
                  <IconComponent className="text-[#8fd4ff]" size={24} aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-black tracking-[-0.03em]">{title as string}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/58">{text as string}</p>
                </article>
              );
            })}
          </div>
        </div>
      </DemoSection>

      <DemoSection id="timeline" eyebrow="Career snapshot" title="A timeline visitors can actually scan.">
        <div className="grid gap-4 lg:grid-cols-3">
          {timeline.map(([year, title, text]) => (
            <article key={title} className="rounded-[2rem] border border-[#d9e3ee] bg-white p-7">
              <CalendarDays className="text-[#285a94]" size={24} aria-hidden="true" />
              <p className="mt-5 font-mono text-sm font-black text-[#285a94]">{year}</p>
              <h3 className="mt-3 text-xl font-black tracking-[-0.03em]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#5c6875]">{text}</p>
            </article>
          ))}
        </div>
        <div id="resume" className="mt-8 rounded-[2rem] border border-[#d9e3ee] bg-[#f8fafc] p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 text-[#285a94]" size={22} aria-hidden="true" />
              <div>
                <h3 className="font-black tracking-[-0.02em]">Resume and references ready</h3>
                <p className="mt-1 text-sm leading-6 text-[#5c6875]">A real portfolio can pair this with a PDF resume, LinkedIn, references, or certificates.</p>
              </div>
            </div>
            <Link href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0e1116] px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#285a94]">
              <ArrowDownToLine size={17} aria-hidden="true" />
              Sample Resume
            </Link>
          </div>
        </div>
      </DemoSection>

      <section id="contact" className="bg-[#dce8f7] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] bg-[#0e1116] p-8 text-white sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8fd4ff]">Contact</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em]">Open to operations, project, and program roles.</h2>
            <div className="mt-8 space-y-5 text-sm text-white/65">
              <p className="flex min-w-0 items-center gap-3"><Mail size={18} className="shrink-0 text-[#8fd4ff]" /><span className="min-w-0 break-all">jordan@ellisprojects.example</span></p>
              <p className="flex items-center gap-3"><MapPin size={18} className="text-[#8fd4ff]" />New Jersey / Remote</p>
              <p className="flex items-center gap-3"><ArrowDownToLine size={18} className="text-[#8fd4ff]" />Resume, case studies, and references</p>
            </div>
            <p className="mt-8 text-xs text-white/40">Fictional contact details for this sample portfolio.</p>
          </div>
          <form className="rounded-[2rem] bg-white p-8 shadow-xl sm:p-10">
            <h2 className="text-3xl font-black tracking-[-0.04em]">Start a conversation</h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <input className="rounded-xl border border-[#cbd8e8] px-4 py-3 text-sm outline-none focus:border-[#285a94] focus:ring-4 focus:ring-[#285a94]/10" aria-label="Name" placeholder="Name" />
              <input className="rounded-xl border border-[#cbd8e8] px-4 py-3 text-sm outline-none focus:border-[#285a94] focus:ring-4 focus:ring-[#285a94]/10" type="email" aria-label="Email" placeholder="Email" />
            </div>
            <textarea className="mt-4 min-h-32 w-full rounded-xl border border-[#cbd8e8] px-4 py-3 text-sm outline-none focus:border-[#285a94] focus:ring-4 focus:ring-[#285a94]/10" aria-label="Message" placeholder="Role, collaboration, or project details" />
            <button type="button" className="mt-5 w-full rounded-full bg-[#0e1116] px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#285a94]">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
