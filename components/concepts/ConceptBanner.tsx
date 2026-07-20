import Link from "next/link";
import { ArrowLeft, ArrowRight, FlaskConical } from "lucide-react";

type ConceptBannerProps = {
  tone?: "warm" | "strong" | "calm";
  backHref?: string;
  backLabel?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

const tones = {
  warm: "bg-[#201713] text-[#fff8ef] border-[#3c2a21]",
  strong: "bg-[#111820] text-white border-white/10",
  calm: "bg-[#173b42] text-white border-white/10",
};

export function ConceptBanner({
  tone = "warm",
  backHref = "/work#concept-sites",
  backLabel = "Back to Work",
  ctaHref = "/contact",
  ctaLabel = "Start a site like this",
}: ConceptBannerProps) {
  return (
    <div className={`border-b ${tones[tone]}`}>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="flex min-w-0 items-center gap-2 text-xs font-medium leading-5 sm:text-sm">
          <FlaskConical size={16} className="shrink-0" aria-hidden="true" />
          <span>Concept website by JWSites — this sample is not a real business.</span>
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href={backHref}
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-white/25 px-4 py-2 text-center text-xs font-bold transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            {backLabel}
          </Link>
          <Link
            href={ctaHref}
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-center text-xs font-bold text-ink transition hover:-translate-y-0.5"
          >
            {ctaLabel} <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
