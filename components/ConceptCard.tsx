import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ConceptCardProps = {
  name: string;
  type: string;
  description: string;
  href: string;
  theme: "restaurant" | "contractor" | "dental";
};

const themes = {
  restaurant: {
    frame: "bg-[#241813]",
    paper: "bg-[#f6ecdc]",
    accent: "bg-[#a9422d]",
    text: "bg-[#31221c]",
  },
  contractor: {
    frame: "bg-[#17212b]",
    paper: "bg-[#f5f4ef]",
    accent: "bg-[#efb528]",
    text: "bg-[#18222c]",
  },
  dental: {
    frame: "bg-[#cce9e8]",
    paper: "bg-[#f7fbfa]",
    accent: "bg-[#3e8f91]",
    text: "bg-[#173b42]",
  },
};

export function ConceptCard({
  name,
  type,
  description,
  href,
  theme,
}: ConceptCardProps) {
  const palette = themes[theme];

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-line bg-white transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className={`aspect-[16/10] p-5 sm:p-7 ${palette.frame}`}>
        <div className={`h-full overflow-hidden rounded-xl ${palette.paper} p-3 shadow-2xl transition duration-500 group-hover:-translate-y-1`}>
          <div className="flex items-center justify-between border-b border-black/10 pb-2">
            <div className={`h-2.5 w-16 rounded-full ${palette.text}`} />
            <div className="flex gap-2">
              <div className="h-1.5 w-7 rounded-full bg-black/15" />
              <div className="h-1.5 w-7 rounded-full bg-black/15" />
              <div className={`h-4 w-12 rounded-full ${palette.accent}`} />
            </div>
          </div>
          <div className="grid h-[calc(100%-16px)] grid-cols-2 items-center gap-4 p-3">
            <div>
              <div className="h-1.5 w-12 rounded-full bg-black/20" />
              <div className={`mt-3 h-4 w-full rounded ${palette.text}`} />
              <div className={`mt-1.5 h-4 w-4/5 rounded ${palette.text}`} />
              <div className="mt-3 h-1.5 w-full rounded-full bg-black/15" />
              <div className="mt-1.5 h-1.5 w-3/4 rounded-full bg-black/15" />
              <div className={`mt-4 h-5 w-20 rounded-full ${palette.accent}`} />
            </div>
            <div className={`h-4/5 rounded-[1.25rem] ${palette.accent} opacity-80`} />
          </div>
        </div>
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
          View Concept <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
