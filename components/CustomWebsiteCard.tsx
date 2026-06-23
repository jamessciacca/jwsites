import { Check, Sparkles } from "lucide-react";
import { Button } from "./Button";
import { customWebsiteOffer, getPlanContactHref } from "@/data/pricing";

type CustomWebsiteCardProps = {
  compact?: boolean;
};

export function CustomWebsiteCard({
  compact = false,
}: CustomWebsiteCardProps) {
  return (
    <article className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.25rem] border border-accent/25 bg-ink text-white shadow-[0_32px_90px_rgba(38,39,120,0.2)]">
      <div className="absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/45 blur-[100px]" />
      <div
        className={`relative grid gap-10 ${
          compact
            ? "p-7 sm:p-9 lg:grid-cols-[0.8fr_1.2fr]"
            : "p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:p-12"
        }`}
      >
        <div className="flex flex-col justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#b8b9ff]">
              <Sparkles size={14} />
              Same premium quality for every client
            </span>
            <h2
              className={`mt-6 font-semibold tracking-[-0.05em] ${
                compact ? "text-3xl sm:text-4xl" : "text-4xl sm:text-5xl"
              }`}
            >
              {customWebsiteOffer.name}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-gray-400">
              {customWebsiteOffer.description}
            </p>
          </div>
          <div className="mt-8">
            <div className="flex items-end gap-2">
              <span
                className={`font-semibold tracking-[-0.07em] ${
                  compact ? "text-6xl" : "text-7xl sm:text-8xl"
                }`}
              >
                {customWebsiteOffer.price}
              </span>
            </div>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#a5a6ff]">
              {customWebsiteOffer.label}
            </p>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm sm:p-8">
          <p className="text-sm font-semibold text-white">
            Everything needed for a professional launch:
          </p>
          <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {customWebsiteOffer.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-sm text-gray-300"
              >
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                  <Check size={12} strokeWidth={3} />
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <Button
            href={getPlanContactHref(customWebsiteOffer.planId)}
            className="mt-8 w-full"
            arrow
          >
            Start Your Website
          </Button>
        </div>
      </div>
    </article>
  );
}
