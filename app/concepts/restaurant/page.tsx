import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock3, MapPin, Star } from "lucide-react";
import { ConceptBanner } from "@/components/concepts/ConceptBanner";
import { ConceptSiteNav } from "@/components/concepts/ConceptSiteNav";
import { DemoCTA } from "@/components/concepts/DemoCTA";
import { DemoHero } from "@/components/concepts/DemoHero";
import { DemoSection } from "@/components/concepts/DemoSection";

export const metadata: Metadata = {
  title: "Bella Table Restaurant Website Concept",
  description:
    "A fictional modern Italian restaurant website concept by JWSites. This is a sample design, not a real business.",
};

const menu = [
  ["Burrata & Roasted Tomato", "Basil oil, sea salt, grilled sourdough", "$16"],
  ["Wild Mushroom Pappardelle", "Brown butter, pecorino, fresh herbs", "$27"],
  ["Branzino al Limone", "Crispy potatoes, capers, seasonal greens", "$34"],
  ["Tiramisu Classico", "Espresso, mascarpone, dark cocoa", "$12"],
];

export default function RestaurantConceptPage() {
  return (
    <div id="top" className="bg-[#f7efe3] pt-20 text-[#2c1d18]">
      <ConceptBanner tone="warm" />
      <ConceptSiteNav
        name="Bella Table"
        links={[
          { label: "Menu", href: "#menu" },
          { label: "Our Story", href: "#story" },
          { label: "Visit", href: "#visit" },
        ]}
        ctaLabel="Reserve a Table"
        ctaHref="#reserve"
        className="bg-[#f7efe3] text-[#2c1d18]"
        buttonClassName="bg-[#a5412d] text-white"
      />

      <DemoHero
        eyebrow="Modern Italian · Neighborhood warmth"
        title={
          <>
            Gather around
            <br />
            something <em className="font-serif font-normal text-[#a5412d]">beautiful.</em>
          </>
        }
        text="Seasonal Italian cooking, thoughtful hospitality, and a room made for lingering a little longer."
        primaryLabel="Reserve your table"
        primaryHref="#reserve"
        secondaryLabel="Explore the menu"
        secondaryHref="#menu"
        className="bg-[#f7efe3]"
        buttonClassName="bg-[#a5412d] text-white"
      >
        <div className="relative mx-auto max-w-xl">
          <div className="aspect-[4/5] overflow-hidden rounded-[12rem_12rem_2rem_2rem] bg-[#4d271d] p-5 shadow-[0_35px_80px_rgba(78,39,29,.25)]">
            <div className="relative h-full overflow-hidden rounded-[11rem_11rem_1.3rem_1.3rem] bg-[radial-gradient(circle_at_45%_38%,#e9b96b_0_8%,#b4412d_9%_18%,#63804c_19%_25%,#e8c682_26%_32%,#5d291e_33%_100%)]">
              <div className="absolute inset-12 rounded-full border-[18px] border-[#eee1cc] shadow-2xl" />
              <div className="absolute bottom-8 left-8 rounded-full bg-[#f7efe3]/95 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] shadow-lg">
                Handmade every evening
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-4 rounded-2xl bg-white p-4 shadow-xl sm:-left-10">
            <div className="flex gap-1 text-[#b36b28]">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={14} fill="currentColor" />
              ))}
            </div>
            <p className="mt-2 text-xs font-semibold">An evening worth savoring</p>
          </div>
        </div>
      </DemoHero>

      <div className="border-y border-[#d7c6b4] bg-[#2c1d18] px-5 py-4 text-[#f7efe3]">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-12 gap-y-3 text-xs font-bold uppercase tracking-[0.18em] opacity-80">
          <span>House-made pasta</span>
          <span>Seasonal ingredients</span>
          <span>Warm hospitality</span>
          <span>Tuesday–Sunday</span>
        </div>
      </div>

      <DemoSection
        id="menu"
        eyebrow="From our kitchen"
        title="A menu rooted in tradition, shaped by the season."
        text="Familiar Italian flavors, carefully prepared with local produce and a little room for surprise."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {menu.map(([name, description, price]) => (
            <article key={name} className="rounded-2xl border border-[#d9c8b7] bg-[#fffaf3] p-6 sm:p-7">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h3 className="font-serif text-2xl">{name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#776157]">{description}</p>
                </div>
                <span className="font-bold text-[#a5412d]">{price}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="#reserve" className="inline-flex items-center gap-2 border-b border-[#2c1d18] pb-1 text-sm font-bold">
            Plan your visit <ArrowRight size={15} />
          </Link>
        </div>
      </DemoSection>

      <DemoSection
        id="story"
        eyebrow="Our story"
        title="The spirit of an Italian table, close to home."
        className="bg-[#2c1d18] text-[#f7efe3]"
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-[8rem_8rem_1rem_1rem] bg-[linear-gradient(145deg,#c76d4d,#6b2e22)]" />
            <div className="mt-12 aspect-[3/4] rounded-[1rem_1rem_8rem_8rem] bg-[linear-gradient(145deg,#d4ae6d,#667849)]" />
          </div>
          <div>
            <p className="font-serif text-2xl leading-10 text-[#d8c6b5] sm:text-3xl">
              Bella Table began with a simple belief: the best meals feel
              generous, unhurried, and shared.
            </p>
            <p className="mt-6 leading-8 text-[#a99589]">
              Our fictional kitchen brings handmade pasta, bright seasonal
              ingredients, and thoughtful service together in a space designed
              for date nights, family dinners, and every toast in between.
            </p>
          </div>
        </div>
      </DemoSection>

      <DemoSection
        eyebrow="A look inside"
        title="Come for dinner. Stay for the feeling."
        align="center"
      >
        <div className="grid auto-rows-[190px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl bg-[linear-gradient(145deg,#8f3b2b,#d2875c)] lg:row-span-2" />
          <div className="rounded-3xl bg-[linear-gradient(145deg,#d8b777,#6e7b4a)] lg:col-span-2" />
          <div className="rounded-3xl bg-[linear-gradient(145deg,#44251e,#9c6552)]" />
          <div className="rounded-3xl bg-[linear-gradient(145deg,#e0c598,#a54d36)]" />
          <div className="rounded-3xl bg-[linear-gradient(145deg,#65714c,#cfad71)] lg:col-span-2" />
        </div>
      </DemoSection>

      <DemoSection
        id="visit"
        eyebrow="Plan your visit"
        title="Dinner starts here."
        className="bg-[#efe1d0]"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl bg-[#fffaf3] p-8">
            <MapPin className="text-[#a5412d]" />
            <h3 className="mt-5 font-serif text-2xl">A neighborhood table</h3>
            <p className="mt-3 leading-7 text-[#776157]">
              128 Market Street
              <br />
              Sample City, NY 10001
            </p>
            <p className="mt-4 text-xs font-bold uppercase tracking-wider text-[#a5412d]">
              Fictional address for concept display
            </p>
          </div>
          <div className="rounded-3xl bg-[#fffaf3] p-8">
            <Clock3 className="text-[#a5412d]" />
            <h3 className="mt-5 font-serif text-2xl">Hours</h3>
            <div className="mt-3 space-y-2 text-sm text-[#776157]">
              <p className="flex justify-between"><span>Tuesday–Thursday</span><span>5–10 PM</span></p>
              <p className="flex justify-between"><span>Friday–Saturday</span><span>5–11 PM</span></p>
              <p className="flex justify-between"><span>Sunday</span><span>4–9 PM</span></p>
            </div>
          </div>
        </div>
      </DemoSection>

      <div id="reserve">
        <DemoCTA
          eyebrow="Reservations"
          title="Your table is waiting."
          text="Choose an evening, bring your favorite people, and let us take care of the rest."
          label="Build a restaurant site like this"
          className="bg-[#a5412d] text-white"
          buttonClassName="bg-[#f7efe3] text-[#2c1d18]"
        />
      </div>
    </div>
  );
}
