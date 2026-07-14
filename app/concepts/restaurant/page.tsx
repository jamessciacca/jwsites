import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock3, Instagram, MapPin, Phone, Star } from "lucide-react";
import { ConceptBanner } from "@/components/concepts/ConceptBanner";
import { ConceptSiteNav } from "@/components/concepts/ConceptSiteNav";
import { DemoSection } from "@/components/concepts/DemoSection";
import { demoImages } from "@/data/demoImages";

export const metadata: Metadata = {
  title: "Bella Roma Trattoria | Italian Restaurant Website Demo",
  description:
    "A polished sample Italian restaurant website by JWSites featuring real food photography, a complete menu, gallery, and reservation experience.",
};

const featuredDishes = [
  ["Margherita Pizza", "San Marzano tomato, fresh mozzarella, basil", "$16", demoImages.restaurant.dishes[0]],
  ["Rigatoni alla Vodka", "Creamy tomato sauce, parmesan, Calabrian chili", "$19", demoImages.restaurant.dishes[1]],
  ["Chicken Parmigiana", "Breaded chicken, marinara, mozzarella, spaghetti", "$24", demoImages.restaurant.dishes[2]],
  ["Fettuccine Alfredo", "Fresh pasta, parmesan cream, cracked pepper", "$18", demoImages.restaurant.dishes[3]],
  ["Lasagna Classica", "Slow-cooked beef, ricotta, mozzarella, marinara", "$21", demoImages.restaurant.dishes[4]],
  ["Tiramisu", "Espresso-soaked ladyfingers, mascarpone, cocoa", "$9", demoImages.restaurant.dishes[5]],
];

const menu = [
  {
    category: "Antipasti",
    items: [
      ["Bruschetta al Pomodoro", "Toasted ciabatta, tomatoes, basil, garlic, olive oil", "$11"],
      ["Calamari Fritti", "Crispy calamari with lemon aioli and marinara", "$15"],
      ["Caprese Salad", "Fresh mozzarella, tomato, basil, balsamic glaze", "$13"],
    ],
  },
  {
    category: "Pasta",
    items: [
      ["Rigatoni alla Vodka", "Creamy tomato sauce, parmesan, Calabrian chili", "$19"],
      ["Spaghetti Carbonara", "Pancetta, egg, pecorino, cracked black pepper", "$20"],
      ["Pappardelle Bolognese", "Slow-braised beef and pork ragù, parmesan", "$23"],
      ["Fettuccine Alfredo", "Fresh pasta, parmesan cream, cracked pepper", "$18"],
    ],
  },
  {
    category: "Pizza",
    items: [
      ["Margherita", "San Marzano tomato, mozzarella, basil", "$16"],
      ["Pepperoni", "Tomato, mozzarella, cup-and-char pepperoni", "$17"],
      ["Prosciutto & Arugula", "Mozzarella, prosciutto, arugula, parmesan", "$20"],
      ["Quattro Formaggi", "Mozzarella, fontina, gorgonzola, parmesan", "$19"],
    ],
  },
  {
    category: "Entrées",
    items: [
      ["Chicken Parmigiana", "Breaded chicken, marinara, mozzarella, spaghetti", "$24"],
      ["Veal Milanese", "Crispy veal cutlet, arugula, tomato, lemon", "$29"],
      ["Salmon Piccata", "Pan-seared salmon, capers, lemon butter, vegetables", "$27"],
      ["Eggplant Rollatini", "Ricotta, spinach, marinara, mozzarella", "$22"],
    ],
  },
  {
    category: "Desserts",
    items: [
      ["Tiramisu", "Espresso, mascarpone, cocoa", "$9"],
      ["Cannoli", "Sweet ricotta, chocolate, pistachio", "$8"],
      ["New York Cheesecake", "Vanilla bean, seasonal berry sauce", "$10"],
    ],
  },
];

const inputClass =
  "min-w-0 max-w-full w-full rounded-xl border border-[#d8c8b5] bg-white px-4 py-3 text-sm text-[#2b1a15] outline-none transition focus:border-[#a33b2b] focus:ring-4 focus:ring-[#a33b2b]/10";

export default function RestaurantConceptPage() {
  return (
    <div id="top" className="bg-[#f8f1e7] text-[#2b1a15]">
      <ConceptBanner tone="warm" />
      <ConceptSiteNav
        name="Bella Roma"
        links={[
          { label: "About", href: "#about" },
          { label: "Menu", href: "#menu" },
          { label: "Gallery", href: "#gallery" },
          { label: "Visit", href: "#reserve" },
        ]}
        ctaLabel="Reserve a Table"
        ctaHref="#reserve"
        className="bg-[#f8f1e7] text-[#2b1a15]"
        buttonClassName="bg-[#a33b2b] text-white"
      />

      <section className="relative min-h-[600px] overflow-hidden sm:min-h-[680px]">
        <Image
          src={demoImages.restaurant.hero}
          alt="Italian pizza served at a restaurant table with a glass of wine"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/15" />
        <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-center px-5 py-20 sm:min-h-[680px] sm:px-8 sm:py-24">
          <div className="max-w-3xl text-white animate-fade-up">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#e6c284]">
              Family recipes · Fresh ingredients · Warm hospitality
            </p>
            <h1 className="text-balance font-serif text-4xl leading-[0.98] tracking-[-0.035em] sm:text-7xl lg:text-8xl">
              Authentic Italian Dining, Made Fresh Daily
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              Handmade pasta, wood-fired pizza, and classic family recipes
              served in the heart of your neighborhood.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#menu" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#a33b2b] px-7 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#8c2f22]">
                View Menu
              </Link>
              <Link href="#reserve" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#2b1a15]">
                Reserve a Table
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#decfbd] bg-[#efe2d1] px-5 py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-12 gap-y-3 text-xs font-bold uppercase tracking-[0.17em] text-[#655046]">
          <span>House-made pasta</span><span>Wood-fired pizza</span><span>Family-owned hospitality</span><span>Open Tuesday–Sunday</span>
        </div>
      </section>

      <DemoSection
        id="about"
        eyebrow="Our story"
        title="A Taste of Italy Close to Home"
        text="At Bella Roma, dinner is more than a meal—it is a chance to slow down, gather together, and enjoy food made with care."
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-xl">
            <Image
              src={demoImages.restaurant.about}
              alt="Restaurant server presenting freshly prepared Italian dishes"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-serif text-2xl leading-10 text-[#513b31] sm:text-3xl">
              Inspired by family recipes passed down through generations, our
              kitchen prepares sauces from scratch, rolls pasta by hand, and
              chooses ingredients at their seasonal best.
            </p>
            <p className="mt-6 leading-8 text-[#765f54]">
              Whether you join us for a weeknight plate of pasta, a special
              celebration, or pizza and wine with friends, our table is ready
              to welcome you.
            </p>
            <div className="mt-8 flex gap-8">
              <div><p className="text-3xl font-bold text-[#a33b2b]">20+</p><p className="mt-1 text-xs uppercase tracking-wider text-[#765f54]">Years of tradition</p></div>
              <div><p className="text-3xl font-bold text-[#a33b2b]">Daily</p><p className="mt-1 text-xs uppercase tracking-wider text-[#765f54]">Fresh preparation</p></div>
            </div>
          </div>
        </div>
      </DemoSection>

      <DemoSection
        eyebrow="Guest favorites"
        title="Featured dishes"
        text="Italian comfort food, prepared with a fresh point of view."
        className="bg-[#2b1a15] text-[#fff8ef]"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredDishes.map(([name, description, price, image]) => (
            <article key={name} className="group overflow-hidden rounded-3xl bg-white text-[#2b1a15]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={image} alt={`${name} Italian dish`} fill sizes="(max-width: 640px) 100vw, 33vw" loading="eager" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-2xl">{name}</h3>
                  <span className="font-bold text-[#a33b2b]">{price}</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-[#765f54]">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </DemoSection>

      <DemoSection
        id="menu"
        eyebrow="Dinner menu"
        title="From our kitchen to your table."
        text="A complete sample menu designed to be easy to browse on any screen."
        className="bg-[#f8f1e7]"
        align="center"
      >
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#d8c8b5] bg-[#fffaf3] p-6 shadow-[0_20px_60px_rgba(68,37,27,.08)] sm:p-10 lg:p-14">
          <div className="grid gap-x-14 gap-y-12 md:grid-cols-2">
            {menu.map((section) => (
              <div key={section.category} className={section.category === "Desserts" ? "md:col-span-2 md:max-w-[calc(50%-1.75rem)]" : ""}>
                <h3 className="border-b border-[#b8955c] pb-3 font-serif text-3xl text-[#a33b2b]">{section.category}</h3>
                <div className="mt-5 space-y-5">
                  {section.items.map(([name, description, price]) => (
                    <div key={name}>
                      <div className="flex items-baseline gap-3">
                        <h4 className="font-bold">{name}</h4>
                        <span className="min-w-5 flex-1 border-b border-dotted border-[#c9b9a7]" />
                        <span className="font-bold">{price}</span>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-[#806a5f]">{description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-xs italic text-[#927b6f]">
            Please let your server know about allergies or dietary needs.
          </p>
        </div>
      </DemoSection>

      <DemoSection id="gallery" eyebrow="Inside Bella Roma" title="Good food. Good wine. Better company." align="center">
        <div className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[210px] sm:gap-4 lg:grid-cols-4">
          {demoImages.restaurant.gallery.slice(0, 5).map((image, index) => (
            <div
              key={`${image}-${index}`}
              className={`relative overflow-hidden rounded-2xl sm:rounded-3xl ${
                index === 0
                  ? "col-span-2 row-span-2"
                  : ""
              }`}
            >
              <Image
                src={image}
                alt={["Fresh Italian pasta", "Italian dining table with wine", "Restaurant service", "Handmade ravioli", "Wood-fired pizza", "Elegant Italian dinner"][index]}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                loading="eager"
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </DemoSection>

      <section id="reserve" className="bg-[#e9ddcc] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-[2rem] bg-[#2b1a15] p-8 text-white sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e6c284]">Visit us</p>
            <h2 className="mt-4 font-serif text-4xl">Your table is waiting.</h2>
            <div className="mt-8 space-y-6 text-sm text-white/70">
              <div className="flex gap-3"><MapPin className="shrink-0 text-[#e6c284]" size={20} /><p>214 Main Street<br />Monroe Township, NJ 08831</p></div>
              <div className="flex gap-3"><Phone className="shrink-0 text-[#e6c284]" size={20} /><p>(732) 555-0148</p></div>
              <div className="flex gap-3"><Clock3 className="shrink-0 text-[#e6c284]" size={20} /><div><p>Tue–Thu: 4–10 PM</p><p>Fri–Sat: 4–11 PM</p><p>Sunday: 3–9 PM</p></div></div>
            </div>
            <p className="mt-8 text-xs text-white/45">Fictional contact details for this sample concept.</p>
          </div>
          <form className="min-w-0 overflow-hidden rounded-[2rem] bg-white p-8 shadow-xl sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a33b2b]">Reservations</p>
            <h2 className="mt-3 font-serif text-4xl">Reserve a table</h2>
            <div className="mt-7 grid min-w-0 gap-4 sm:grid-cols-2 [&>*]:min-w-0">
              <input className={inputClass} aria-label="Name" placeholder="Name" />
              <input className={inputClass} type="email" aria-label="Email" placeholder="Email" />
              <label className="min-w-0 text-xs font-bold uppercase tracking-[0.12em] text-[#806a5f]">
                Reservation Date
                <input className={`${inputClass} mt-2 block overflow-hidden`} type="date" aria-label="Reservation date" />
              </label>
              <select className={inputClass} aria-label="Party size" defaultValue="">
                <option value="" disabled>Party size</option>
                <option>2 guests</option><option>3 guests</option><option>4 guests</option><option>5+ guests</option>
              </select>
            </div>
            <textarea className={`${inputClass} mt-4 min-h-28`} aria-label="Special requests" placeholder="Special requests or occasion" />
            <button type="button" className="mt-5 w-full rounded-full bg-[#a33b2b] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#8c2f22]">
              Request Reservation
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#21130f] px-5 py-12 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-serif text-3xl">Bella Roma Trattoria</p>
            <p className="mt-2 text-sm text-white/55">Italian food made with heart.</p>
          </div>
          <div className="flex items-center gap-5 text-sm text-white/65">
            <Link href="#menu">Menu</Link><Link href="#reserve">Reservations</Link><Instagram size={18} />
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-5 text-xs text-white/40">
          Concept website by JWSites — this sample is not a real business.
        </div>
      </footer>
    </div>
  );
}
