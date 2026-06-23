import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Scissors,
  Shovel,
  Sparkles,
  Star,
  Trees,
} from "lucide-react";
import { ConceptBanner } from "@/components/concepts/ConceptBanner";
import { ConceptSiteNav } from "@/components/concepts/ConceptSiteNav";
import { DemoSection } from "@/components/concepts/DemoSection";
import { demoImages } from "@/data/demoImages";

export const metadata: Metadata = {
  title: "Evergreen Edge Landscaping | Landscaping Website Demo",
  description:
    "A polished sample landscaping company website by JWSites featuring real lawn-care photography, services, testimonials, and a quote form.",
};

const services = [
  [Scissors, "Lawn Mowing & Edging", "Reliable weekly cuts with crisp lines and a clean finish."],
  [Leaf, "Mulch Installation", "Fresh mulch that protects garden beds and sharpens curb appeal."],
  [Sparkles, "Seasonal Cleanups", "Complete spring and fall cleanup for leaves, beds, and debris."],
  [Trees, "Hedge & Shrub Trimming", "Careful shaping that keeps plantings healthy and polished."],
  [Shovel, "Garden Bed Design", "Thoughtful plant layouts built around your home and maintenance goals."],
  [Leaf, "Sod Installation", "Fresh, professionally installed sod for a healthy new lawn."],
  [MapPin, "Patio & Walkway Refresh", "Cleaned-up edges, joints, and surrounding beds for a renewed look."],
  [CalendarCheck, "Commercial Maintenance", "Consistent grounds care for offices, retail, and small properties."],
];

const inputClass =
  "w-full rounded-xl border border-[#cfd9cb] bg-white px-4 py-3 text-sm text-[#183524] outline-none transition focus:border-[#3f754d] focus:ring-4 focus:ring-[#3f754d]/10";

export default function LandscapingConceptPage() {
  return (
    <div id="top" className="bg-[#f5f2e9] text-[#183524]">
      <ConceptBanner tone="calm" />
      <ConceptSiteNav
        name="Evergreen Edge"
        links={[
          { label: "Services", href: "#services" },
          { label: "Our Work", href: "#work" },
          { label: "Service Area", href: "#area" },
          { label: "Reviews", href: "#reviews" },
        ]}
        ctaLabel="Free Quote"
        ctaHref="#quote"
        className="bg-white text-[#183524]"
        buttonClassName="bg-[#285b3a] text-white"
      />

      <section className="relative min-h-[600px] overflow-hidden sm:min-h-[660px]">
        <Image
          src={demoImages.landscaping.hero}
          alt="Beautiful residential street with manicured lawns and colorful landscaping"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#10291c]/95 via-[#153d28]/72 to-transparent" />
        <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-center px-5 py-16 sm:min-h-[660px] sm:px-8 sm:py-20">
          <div className="max-w-3xl text-white animate-fade-up">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#b8d993]">
              Central New Jersey lawn & landscape care
            </p>
            <h1 className="text-balance text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-7xl">
              Beautiful Lawns. Clean Edges. Reliable Service.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              Professional landscaping, lawn maintenance, and outdoor upgrades
              for homes and small businesses.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#quote" className="rounded-full bg-[#a9cf73] px-7 py-3.5 text-center text-sm font-black text-[#183524] transition hover:-translate-y-0.5 hover:bg-[#bde18a]">
                Request a Free Quote
              </Link>
              <Link href="#services" className="rounded-full border border-white/35 bg-white/10 px-7 py-3.5 text-center text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#183524]">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-6 shadow-sm sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [BadgeCheck, "Licensed & Insured"],
            [CalendarCheck, "Weekly Maintenance"],
            [CheckCircle2, "Free Estimates"],
            [Leaf, "Local Family-Owned Service"],
          ].map(([Icon, label]) => {
            const IconComponent = Icon as typeof BadgeCheck;
            return (
              <div key={label as string} className="flex items-center justify-center gap-3 text-sm font-bold">
                <IconComponent className="text-[#4e8258]" size={21} />
                {label as string}
              </div>
            );
          })}
        </div>
      </section>

      <DemoSection
        id="services"
        eyebrow="What we do"
        title="Outdoor care that shows up."
        text="From weekly lawn maintenance to a complete seasonal refresh, our crews keep properties clean, healthy, and ready to enjoy."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {services.slice(0, 3).map(([Icon, title, description], index) => {
            const IconComponent = Icon as typeof Leaf;
            const photos = [demoImages.landscaping.mowing, demoImages.landscaping.garden, demoImages.landscaping.trimming];
            return (
              <article key={title as string} className="group overflow-hidden rounded-3xl border border-[#d9dfd3] bg-white transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={photos[index]} alt={`${title} landscaping service`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-[#e7efe0] text-[#3f754d]"><IconComponent size={20} /></span>
                  <h3 className="mt-4 text-lg font-black tracking-[-0.025em]">{title as string}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#657466]">{description as string}</p>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.slice(3).map(([Icon, title, description]) => {
            const IconComponent = Icon as typeof Leaf;
            return (
              <article key={title as string} className="rounded-3xl border border-[#d9dfd3] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
                <span className="flex size-10 items-center justify-center rounded-xl bg-[#e7efe0] text-[#3f754d]"><IconComponent size={20} /></span>
                <h3 className="mt-4 font-black tracking-[-0.02em]">{title as string}</h3>
                <p className="mt-2 text-sm leading-6 text-[#657466]">{description as string}</p>
              </article>
            );
          })}
        </div>
      </DemoSection>

      <DemoSection
        id="work"
        eyebrow="Property transformation"
        title="A cleaner yard changes the whole view."
        text="See how thoughtful maintenance and defined planting beds can completely refresh a property."
        className="bg-[#e7e5da]"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {[
            ["Before", demoImages.landscaping.before, "Landscaping crew beginning lawn and grounds maintenance"],
            ["After", demoImages.landscaping.after, "Finished residential landscaping with green lawn and colorful flowers"],
          ].map(([label, image, alt]) => (
            <div key={label} className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-xl">
              <Image src={image} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" loading="eager" className="object-cover" />
              <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-wider text-[#183524] shadow-lg">{label}</span>
            </div>
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-[#738073]">
          Transformation preview uses representative stock imagery for this sample website.
        </p>
      </DemoSection>

      <DemoSection
        eyebrow="Why Evergreen Edge"
        title="Professional service, without the guesswork."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {[
            ["Fast quotes", "Clear estimates without a long wait."],
            ["Consistent scheduling", "Your service arrives when expected."],
            ["Clean work", "Crews respect your home and clean up."],
            ["Transparent pricing", "Know what is included before work begins."],
            ["Professional communication", "Easy updates and responsive support."],
          ].map(([title, text], index) => (
            <article key={title} className="rounded-3xl border border-[#d9dfd3] bg-white p-6">
              <span className="text-3xl font-black text-[#a9cf73]">0{index + 1}</span>
              <h3 className="mt-5 font-black">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#657466]">{text}</p>
            </article>
          ))}
        </div>
      </DemoSection>

      <section id="area" className="bg-[#183524] px-5 py-20 text-white sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a9cf73]">Service area</p>
            <h2 className="mt-4 text-balance text-4xl font-black tracking-[-0.045em] sm:text-5xl">
              Local service for Central NJ properties.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
              Serving Monroe Township, East Brunswick, Old Bridge, Jamesburg,
              and surrounding Central NJ areas.
            </p>
          </div>
          <div className="relative min-h-80 overflow-hidden rounded-[2rem] border border-white/10 bg-[#244b33] p-8">
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
            <div className="relative flex h-full min-h-64 items-center justify-center">
              <div className="rounded-full bg-[#a9cf73] p-6 text-[#183524] shadow-[0_0_0_18px_rgba(169,207,115,.15)]">
                <MapPin size={36} />
              </div>
              <span className="absolute left-[15%] top-[22%] size-3 rounded-full bg-white/50" />
              <span className="absolute bottom-[24%] right-[18%] size-3 rounded-full bg-white/50" />
              <span className="absolute right-[25%] top-[18%] size-2 rounded-full bg-white/35" />
            </div>
          </div>
        </div>
      </section>

      <DemoSection id="reviews" eyebrow="Neighbor reviews" title="Reliable work gets noticed." align="center">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            "They cleaned up our entire front yard in one afternoon. The difference was unbelievable.",
            "Reliable every week and always professional.",
            "Our mulch beds and edging finally look sharp again.",
          ].map((quote, index) => (
            <blockquote key={quote} className="rounded-3xl border border-[#d9dfd3] bg-white p-7 text-left shadow-sm">
              <div className="flex gap-1 text-[#d8a52a]">{[1,2,3,4,5].map((s) => <Star key={s} size={15} fill="currentColor" />)}</div>
              <p className="mt-5 text-lg leading-8">“{quote}”</p>
              <footer className="mt-5 text-xs font-bold uppercase tracking-wider text-[#758175]">Sample homeowner review {index + 1}</footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-6 text-xs text-[#758175]">Testimonials are fictional and included for concept demonstration only.</p>
      </DemoSection>

      <section id="quote" className="bg-[#e4eadb] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-[2rem] bg-[#285b3a] p-8 text-white sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9e6a5]">Free estimates</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em]">Let’s make your property look its best.</h2>
            <p className="mt-5 leading-7 text-white/65">Tell us what your property needs and we will follow up with a clear next step.</p>
            <div className="mt-8 space-y-4 text-sm text-white/75">
              <p className="flex items-center gap-3"><Phone size={18} className="text-[#c9e6a5]" />(732) 555-0186</p>
              <p className="flex items-center gap-3"><Mail size={18} className="text-[#c9e6a5]" />hello@evergreenedge.example</p>
              <p className="flex items-center gap-3"><Clock3 size={18} className="text-[#c9e6a5]" />Mon–Sat, 7 AM–6 PM</p>
            </div>
          </div>
          <form className="rounded-[2rem] bg-white p-8 shadow-xl sm:p-10">
            <h2 className="text-3xl font-black tracking-[-0.04em]">Get My Free Estimate</h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <input className={inputClass} aria-label="Name" placeholder="Name" />
              <input className={inputClass} type="email" aria-label="Email" placeholder="Email" />
              <input className={inputClass} type="tel" aria-label="Phone" placeholder="Phone" />
              <select className={inputClass} aria-label="Service needed" defaultValue=""><option value="" disabled>Service needed</option>{services.map(([,title]) => <option key={title as string}>{title as string}</option>)}</select>
              <select className={inputClass} aria-label="Property type" defaultValue=""><option value="" disabled>Property type</option><option>Residential</option><option>Commercial</option><option>HOA / Multi-unit</option></select>
            </div>
            <textarea className={`${inputClass} mt-4 min-h-28`} aria-label="Project details" placeholder="Tell us about your property and what you would like done." />
            <button type="button" className="mt-5 w-full rounded-full bg-[#285b3a] px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#1e482e]">Get My Free Estimate</button>
          </form>
        </div>
      </section>

      <footer className="bg-[#10291c] px-5 py-12 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-3">
          <div><p className="text-xl font-black">Evergreen Edge Landscaping</p><p className="mt-2 text-sm text-white/50">Clean properties. Reliable service.</p></div>
          <div className="text-sm text-white/60"><p>(732) 555-0186</p><p>hello@evergreenedge.example</p></div>
          <div className="text-sm text-white/60 sm:text-right"><p>Monroe Township · East Brunswick</p><p>Old Bridge · Jamesburg</p></div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-5 text-xs text-white/40">Concept website by JWSites — this sample is not a real business.</div>
      </footer>
    </div>
  );
}
