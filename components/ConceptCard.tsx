import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type ConceptCardProps = {
  name: string;
  type: string;
  description: string;
  href: string;
  theme: "restaurant" | "landscaping" | "barber" | "art" | "professional" | "developer";
  image: string;
  imageAlt: string;
};

const themes = {
  restaurant: "from-[#391814]/70 to-[#9e3c2c]/20",
  landscaping: "from-[#143b2a]/70 to-[#6f9b45]/20",
  barber: "from-black/80 to-[#9b7448]/20",
  art: "from-[#241229]/75 to-[#d65f8c]/20",
  professional: "from-[#10233b]/75 to-[#5d87c8]/20",
  developer: "from-[#071b1f]/80 to-[#18a999]/20",
};

export function ConceptCard({
  name,
  type,
  description,
  href,
  theme,
  image,
  imageAlt,
}: ConceptCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-line bg-white transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${themes[theme]}`} />
        <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/35 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
          Sample Concept
        </span>
      </div>
      <div className="p-7 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
            {type}
          </p>
          <span className="rounded-full bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent">
            Concept Website
          </span>
        </div>
        <h2 className="mt-4 text-2xl font-semibold tracking-[-0.035em]">{name}</h2>
        <p className="mt-3 leading-7 text-muted">{description}</p>
        <p className="mt-5 border-l-2 border-accent pl-4 text-xs leading-5 text-gray-500">
          Concept website by JWSites — built to show what we can create for
          businesses like this.
        </p>
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ink transition hover:text-accent"
        >
          View Demo <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
