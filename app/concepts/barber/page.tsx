import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock3, Instagram, MapPin, Phone, Scissors, Star } from "lucide-react";
import { ConceptBanner } from "@/components/concepts/ConceptBanner";
import { ConceptSiteNav } from "@/components/concepts/ConceptSiteNav";
import { DemoSection } from "@/components/concepts/DemoSection";
import { demoImages } from "@/data/demoImages";

export const metadata: Metadata = {
  title: "Crown & Blade Barber Co. | Barber Shop Website Demo",
  description:
    "A premium sample barber shop website by JWSites featuring real photography, service pricing, reviews, gallery, and booking calls to action.",
};

const services = [
  ["Classic Haircut", "Consultation, tailored cut, hot towel finish", "$35"],
  ["Skin Fade", "Precision fade with detailed finish and styling", "$40"],
  ["Beard Trim", "Shape, line-up, conditioning, hot towel", "$20"],
  ["Haircut & Beard", "Complete cut, beard sculpt, and finish", "$50"],
  ["Kids Cut", "Patient, polished cuts for ages 12 and under", "$25"],
  ["Hot Towel Shave", "Traditional lather shave and skin treatment", "$30"],
];

const inputClass =
  "min-w-0 max-w-full w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#c59a62] focus:ring-4 focus:ring-[#c59a62]/10";

export default function BarberConceptPage() {
  return (
    <div id="top" className="bg-[#0d0d0d] text-white">
      <ConceptBanner tone="strong" />
      <ConceptSiteNav
        name="CROWN & BLADE"
        links={[
          { label: "Services", href: "#services" },
          { label: "About", href: "#about" },
          { label: "Gallery", href: "#gallery" },
          { label: "Reviews", href: "#reviews" },
        ]}
        ctaLabel="Book Appointment"
        ctaHref="#book"
        className="bg-[#0d0d0d] text-white"
        buttonClassName="bg-[#c59a62] text-black"
      />

      <section className="relative min-h-[620px] overflow-hidden sm:min-h-[700px]">
        <Image
          src={demoImages.barber.hero}
          alt="Barber giving a client a haircut in a stylish neighborhood shop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-5 py-20 sm:min-h-[700px] sm:px-8 sm:py-24">
          <div className="max-w-3xl animate-fade-up">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#c59a62]">Modern cuts · Traditional craft</p>
            <h1 className="text-balance text-5xl font-black uppercase leading-[0.92] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
              Sharp Cuts.<br />Clean Fades.<br /><span className="text-[#c59a62]">Premium Grooming.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">
              A modern neighborhood barber shop built for detail, comfort, and confidence.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#book" className="rounded-full bg-[#c59a62] px-7 py-3.5 text-center text-sm font-black text-black transition hover:-translate-y-0.5 hover:bg-[#d8b17c]">Book Appointment</Link>
              <Link href="#services" className="rounded-full border border-white/30 px-7 py-3.5 text-center text-sm font-bold transition hover:bg-white hover:text-black">View Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#151515] px-5 py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-12 gap-y-3 text-xs font-bold uppercase tracking-[0.2em] text-white/55">
          <span>Appointments preferred</span><span>Walk-ins welcome</span><span>Premium grooming products</span><span>Open 6 days</span>
        </div>
      </section>

      <DemoSection id="services" eyebrow="Services & pricing" title="The details make the difference." text="Straightforward services, thoughtful consultation, and no rushed chairs." className="bg-[#f0e9df] text-[#17130f]">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([name, description, price], index) => (
            <article key={name} className="relative overflow-hidden rounded-2xl border border-[#d8cabb] bg-[#f9f5ef] p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <span className="absolute inset-y-0 left-0 w-1 bg-[#b88951]" />
              <div className="flex items-start justify-between gap-5">
                <span className="text-xs font-black uppercase tracking-widest text-[#a0794e]">0{index + 1}</span>
                <span className="text-xl font-black text-[#9b7448]">{price}</span>
              </div>
              <div className="mt-6"><h3 className="text-xl font-black">{name}</h3><p className="mt-2 text-sm leading-6 text-[#76695c]">{description}</p></div>
            </article>
          ))}
        </div>
      </DemoSection>

      <DemoSection id="about" eyebrow="The shop" title="A better chair to sit in." className="bg-[#0d0d0d] text-white">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image src={demoImages.barber.interior} alt="Modern barber shop interior with classic chairs and mirrors" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <p className="text-2xl font-semibold leading-10 text-white/85 sm:text-3xl">
              Crown & Blade was built around skilled barbers, a clean shop, and
              appointment-based service that respects your time.
            </p>
            <p className="mt-6 leading-8 text-white/55">
              Every service begins with a real consultation. We listen, work
              with your hair, and take the time to get the details right—from
              the blend and line-up to the final style.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {["Skilled barbers", "Clean, modern shop", "Easy booking"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-xs font-bold uppercase tracking-wider text-[#c59a62]">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </DemoSection>

      <DemoSection id="gallery" eyebrow="From the chair" title="Craft you can see." align="center" className="bg-[#171717] text-white">
        <div className="grid auto-rows-[250px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {demoImages.barber.gallery.map((image, index) => (
            <div key={`${image}-${index}`} className={`relative overflow-hidden rounded-3xl ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}>
              <Image src={image} alt={["Barber completing a detailed haircut", "Premium barber chairs in a clean shop", "Barber tools and grooming products", "Fresh fade haircut in progress"][index]} fill sizes="(max-width: 1024px) 50vw, 25vw" loading="eager" className="object-cover grayscale-[20%] transition duration-500 hover:scale-105 hover:grayscale-0" />
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection id="reviews" eyebrow="Shop reviews" title="Fresh cut. Better confidence." className="bg-[#f0e9df] text-[#17130f]" align="center">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            "Best fade I’ve gotten in years.",
            "Clean shop, great service, and easy booking.",
            "They take their time and actually listen.",
          ].map((quote, index) => (
            <blockquote key={quote} className="rounded-3xl bg-white p-8 text-left shadow-sm">
              <div className="flex gap-1 text-[#b48347]">{[1,2,3,4,5].map((s) => <Star key={s} size={15} fill="currentColor" />)}</div>
              <p className="mt-6 text-xl font-semibold leading-8">“{quote}”</p>
              <footer className="mt-6 text-xs font-bold uppercase tracking-wider text-[#867565]">Sample client review {index + 1}</footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-6 text-xs text-[#867565]">Testimonials are fictional and included for concept demonstration only.</p>
      </DemoSection>

      <section className="relative overflow-hidden px-5 py-24 text-center sm:px-8">
        <Image src={demoImages.barber.tools} alt="Professional barber tools arranged in a shop" fill sizes="100vw" loading="eager" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative mx-auto max-w-3xl">
          <Scissors className="mx-auto text-[#c59a62]" size={32} />
          <h2 className="mt-6 text-4xl font-black uppercase tracking-[-0.045em] sm:text-6xl">Ready for your next cut?</h2>
          <p className="mx-auto mt-5 max-w-xl text-white/60">Choose your service, pick a time, and walk out looking sharp.</p>
          <Link href="#book" className="mt-8 inline-flex rounded-full bg-[#c59a62] px-8 py-4 text-sm font-black text-black transition hover:-translate-y-0.5 hover:bg-[#d8b17c]">Book Now</Link>
        </div>
      </section>

      <section id="book" className="bg-[#111] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c59a62]">Visit Crown & Blade</p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em]">Your next chair is ready.</h2>
            <div className="mt-8 space-y-5 text-sm text-white/60">
              <p className="flex gap-3"><MapPin className="shrink-0 text-[#c59a62]" size={19} />48 Market Street<br />New Brunswick, NJ 08901</p>
              <p className="flex items-center gap-3"><Phone className="text-[#c59a62]" size={19} />(732) 555-0124</p>
              <div className="flex gap-3"><Clock3 className="shrink-0 text-[#c59a62]" size={19} /><div><p>Tue–Fri: 9 AM–7 PM</p><p>Saturday: 8 AM–5 PM</p><p>Sunday: 9 AM–3 PM</p></div></div>
            </div>
            <p className="mt-8 text-xs text-white/30">Fictional contact details for this sample concept.</p>
          </div>
          <form className="min-w-0 overflow-hidden rounded-[2rem] border border-white/10 bg-[#181818] p-8 sm:p-10">
            <h2 className="text-3xl font-black uppercase tracking-[-0.04em]">Request an appointment</h2>
            <div className="mt-7 grid min-w-0 gap-4 sm:grid-cols-2 [&>*]:min-w-0">
              <input className={inputClass} aria-label="Name" placeholder="Name" />
              <input className={inputClass} type="tel" aria-label="Phone" placeholder="Phone" />
              <select className={inputClass} aria-label="Service" defaultValue=""><option value="" disabled>Select a service</option>{services.map(([name]) => <option key={name}>{name}</option>)}</select>
              <label className="min-w-0 text-xs font-bold uppercase tracking-[0.12em] text-[#c59a62]">
                Preferred Date
                <input className={`${inputClass} mt-2 block overflow-hidden`} type="date" aria-label="Preferred date" />
              </label>
            </div>
            <textarea className={`${inputClass} mt-4 min-h-28`} aria-label="Appointment notes" placeholder="Preferred time, barber, or anything we should know" />
            <button type="button" className="mt-5 w-full rounded-full bg-[#c59a62] px-6 py-3.5 text-sm font-black text-black transition hover:-translate-y-0.5 hover:bg-[#d8b17c]">Request Appointment</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-5 py-12 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="text-2xl font-black">CROWN & BLADE</p><p className="mt-2 text-sm text-white/40">Sharp cuts. No shortcuts.</p></div>
          <div className="flex items-center gap-5 text-sm text-white/50"><Link href="#services">Services</Link><Link href="#book">Book</Link><Instagram size={18} /></div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-5 text-xs text-white/30">Concept website by JWSites — this sample is not a real business.</div>
      </footer>
    </div>
  );
}
