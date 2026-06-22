import Link from "next/link";
import { ArrowRight, FlaskConical } from "lucide-react";

type ConceptBannerProps = {
  tone?: "warm" | "strong" | "calm";
};

const tones = {
  warm: "bg-[#201713] text-[#fff8ef] border-[#3c2a21]",
  strong: "bg-[#111820] text-white border-white/10",
  calm: "bg-[#173b42] text-white border-white/10",
};

export function ConceptBanner({ tone = "warm" }: ConceptBannerProps) {
  return (
    <div className={`border-b ${tones[tone]}`}>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="flex items-center gap-2 text-xs font-medium sm:text-sm">
          <FlaskConical size={16} className="shrink-0" aria-hidden="true" />
          Concept website by JWSites — this sample is not a real business.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 self-start rounded-full bg-white px-4 py-2 text-xs font-bold text-ink transition hover:-translate-y-0.5 sm:self-auto"
        >
          Start a site like this <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
