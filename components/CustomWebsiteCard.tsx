import { Check } from "lucide-react";
import { Button } from "./Button";
import { getPlanContactHref, smallBusinessWebsite } from "@/data/pricing";

export function CustomWebsiteCard() {
  return (
    <article className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.25rem] border border-accent/25 bg-ink text-white shadow-[0_32px_90px_rgba(38,39,120,0.2)]">
      <div className="absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/45 blur-[100px]" />
      <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:p-12">
        <div className="flex flex-col justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#a5a6ff]/35 bg-[#a5a6ff]/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#c6c7ff]">
              Flat business setup
            </span>
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              {smallBusinessWebsite.name}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-gray-400">
              {smallBusinessWebsite.description}
            </p>
          </div>
          <div className="mt-8">
            <div className="mt-1 flex flex-wrap items-end gap-x-2 gap-y-1">
              <span className="text-6xl font-semibold tracking-[-0.06em] sm:text-8xl">
                {smallBusinessWebsite.price}
              </span>
              <span className="mb-3 text-sm text-gray-400">one time</span>
            </div>
            <p className="mt-4 text-xl font-semibold">
              {smallBusinessWebsite.ongoingPrice}<span className="text-sm font-normal text-gray-400">{smallBusinessWebsite.ongoingCadence}</span>
            </p>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm sm:p-8">
          <p className="text-sm font-semibold text-white">Everything needed to launch and stay current:</p>
          <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {smallBusinessWebsite.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                  <Check size={12} strokeWidth={3} />
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <p className="mt-7 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-xs leading-5 text-gray-300">
            One clear setup price for a polished small-business website, with ongoing hosting, maintenance, support, and reasonable content updates at {smallBusinessWebsite.ongoingPrice}{smallBusinessWebsite.ongoingCadence}.
          </p>
          <Button href={getPlanContactHref(smallBusinessWebsite.planId)} className="mt-8 w-full" arrow>
            Choose Business Website
          </Button>
        </div>
      </div>
    </article>
  );
}
