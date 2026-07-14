import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownToLine, Instagram, Mail, MapPin } from "lucide-react";
import { ConceptBanner } from "@/components/concepts/ConceptBanner";
import { ConceptSiteNav } from "@/components/concepts/ConceptSiteNav";
import { DemoSection } from "@/components/concepts/DemoSection";
import { demoImages } from "@/data/demoImages";

export const metadata: Metadata = {
  title: "Maya Chen Studio | Art Portfolio Website Demo",
  description:
    "A polished sample art portfolio website by JWSites featuring collections, exhibitions, artist statement, and inquiry-focused contact.",
};

const collections = [
  ["Threshold Studies", "Layered acrylic pieces exploring memory, architecture, and soft boundaries.", demoImages.portfolios.art.work[0]],
  ["Field Notes", "Small-format mixed-media works inspired by walks, sketches, and found textures.", demoImages.portfolios.art.work[1]],
  ["Color Rooms", "Large canvases built around saturated palettes and calm negative space.", demoImages.portfolios.art.work[2]],
];

export default function ArtPortfolioExamplePage() {
  return (
    <div id="top" className="bg-[#fbf3f5] text-[#281421]">
      <ConceptBanner
        tone="warm"
        backHref="/portfolio/examples"
        backLabel="Back to Portfolio Examples"
        ctaHref="/contact?project=personal-portfolio"
        ctaLabel="Start a portfolio like this"
      />
      <ConceptSiteNav
        name="Maya Chen Studio"
        links={[
          { label: "Work", href: "#work" },
          { label: "Statement", href: "#statement" },
          { label: "Exhibitions", href: "#exhibitions" },
          { label: "Contact", href: "#contact" },
        ]}
        ctaLabel="Inquire"
        ctaHref="#contact"
        className="bg-[#fbf3f5] text-[#281421]"
        buttonClassName="bg-[#cf4d82] text-white"
      />

      <section className="relative min-h-[610px] overflow-hidden sm:min-h-[700px]">
        <Image
          src={demoImages.portfolios.art.hero}
          alt="Artist arranging paintings in a creative studio"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1f1021]/90 via-[#36152f]/55 to-[#cf4d82]/10" />
        <div className="relative mx-auto flex min-h-[610px] max-w-7xl items-center px-5 py-20 sm:min-h-[700px] sm:px-8">
          <div className="max-w-3xl animate-fade-up text-white">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#ffd7e6]">
              Painter · Mixed-media artist · Brooklyn, NY
            </p>
            <h1 className="text-balance font-serif text-4xl leading-[0.98] tracking-[-0.035em] sm:text-7xl lg:text-8xl">
              Color, texture, and quiet places between memory.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              Selected works, exhibition history, and studio inquiries for a contemporary visual artist.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#work" className="rounded-full bg-[#cf4d82] px-7 py-3.5 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#b83c70]">
                View Work
              </Link>
              <Link href="#contact" className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-center text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#281421]">
                Studio Inquiries
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#ead1dc] bg-[#fff8fa] px-5 py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-12 gap-y-3 text-xs font-bold uppercase tracking-[0.17em] text-[#7b4a63]">
          <span>Original paintings</span><span>Commissions considered</span><span>Gallery-ready portfolio</span><span>Resume download</span>
        </div>
      </section>

      <DemoSection
        id="work"
        eyebrow="Selected collections"
        title="A visual-first portfolio made for browsing."
        text="Artwork pages can organize collections, show detail images, and guide visitors toward the right inquiry."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {collections.map(([name, description, image]) => (
            <article key={name} className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={image} alt={`${name} artwork collection`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h2 className="font-serif text-2xl">{name}</h2>
                <p className="mt-2 text-sm leading-6 text-[#7b6370]">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </DemoSection>

      <DemoSection id="statement" eyebrow="Artist statement" title="Work with a point of view." className="bg-[#281421] text-white">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image src={demoImages.portfolios.art.studio} alt="Artist working in a bright studio" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <p className="font-serif text-3xl leading-10 text-white/90">
              My paintings begin with ordinary rooms and become emotional maps:
              where a doorway used to be, where a conversation lingered, where
              color changes the temperature of a memory.
            </p>
            <p className="mt-6 leading-8 text-white/60">
              This section gives curators, buyers, and collaborators a concise
              way to understand the work without burying them in a long biography.
            </p>
          </div>
        </div>
      </DemoSection>

      <DemoSection id="exhibitions" eyebrow="CV highlights" title="Exhibitions, press, and credentials.">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["2026", "North Light Group Show", "Haven Gallery, Jersey City"],
            ["2025", "Color Rooms", "Solo exhibition, Eastline Arts"],
            ["2024", "Emerging Works Fellowship", "Residency and studio grant"],
          ].map(([year, title, detail]) => (
            <article key={title} className="rounded-3xl border border-[#ead1dc] bg-white p-7">
              <p className="text-sm font-bold text-[#cf4d82]">{year}</p>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#7b6370]">{detail}</p>
            </article>
          ))}
        </div>
        <Link href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#cf4d82]/30 px-6 py-3 text-sm font-bold text-[#9f315f] transition hover:-translate-y-0.5 hover:bg-[#cf4d82] hover:text-white">
          <ArrowDownToLine size={17} aria-hidden="true" />
          Download Sample Artist CV
        </Link>
      </DemoSection>

      <section id="contact" className="bg-[#f3dfe7] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-[2rem] bg-[#281421] p-8 text-white sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ffd7e6]">Studio contact</p>
            <h2 className="mt-4 font-serif text-4xl">Available for exhibitions, commissions, and studio visits.</h2>
            <div className="mt-8 space-y-5 text-sm text-white/65">
              <p className="flex min-w-0 items-center gap-3"><Mail size={18} className="shrink-0 text-[#ffd7e6]" /><span className="min-w-0 break-all">studio@mayachen.example</span></p>
              <p className="flex items-center gap-3"><MapPin size={18} className="text-[#ffd7e6]" />Brooklyn, New York</p>
              <p className="flex min-w-0 items-center gap-3"><Instagram size={18} className="shrink-0 text-[#ffd7e6]" /><span className="min-w-0 break-all">@mayachenstudio</span></p>
            </div>
            <p className="mt-8 text-xs text-white/40">Fictional contact details for this sample portfolio.</p>
          </div>
          <form className="rounded-[2rem] bg-white p-8 shadow-xl sm:p-10">
            <h2 className="font-serif text-4xl">Send an inquiry</h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <input className="rounded-xl border border-[#e4cbd7] px-4 py-3 text-sm outline-none focus:border-[#cf4d82] focus:ring-4 focus:ring-[#cf4d82]/10" aria-label="Name" placeholder="Name" />
              <input className="rounded-xl border border-[#e4cbd7] px-4 py-3 text-sm outline-none focus:border-[#cf4d82] focus:ring-4 focus:ring-[#cf4d82]/10" type="email" aria-label="Email" placeholder="Email" />
            </div>
            <textarea className="mt-4 min-h-32 w-full rounded-xl border border-[#e4cbd7] px-4 py-3 text-sm outline-none focus:border-[#cf4d82] focus:ring-4 focus:ring-[#cf4d82]/10" aria-label="Message" placeholder="Tell me what you are interested in." />
            <button type="button" className="mt-5 w-full rounded-full bg-[#cf4d82] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#b83c70]">
              Send Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
