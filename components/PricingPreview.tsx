import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import {
  customWebsiteOffer,
  getPlanContactHref,
  monthlyPlans,
} from "@/data/pricing";
import { Button } from "./Button";

type PricingPreviewProps = {
  heading?: string;
  text?: string;
};

export function PricingPreview({
  heading = "One premium website. Support your way.",
  text = "Every client receives the same $500 custom website. Choose Starter, Professional, or Premium for hosting, maintenance, support, SEO, and ongoing management after launch.",
}: PricingPreviewProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <article className="relative overflow-hidden rounded-[2rem] bg-ink p-7 text-white shadow-soft sm:p-9">
        <div className="absolute right-0 top-0 size-48 translate-x-1/3 -translate-y-1/3 rounded-full bg-accent/35 blur-[70px]" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a5a6ff]">
            {customWebsiteOffer.label}
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
            {heading}
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400">{text}</p>
          <div className="mt-8 flex items-end gap-3">
            <span className="text-6xl font-semibold tracking-[-0.07em]">
              {customWebsiteOffer.price}
            </span>
            <span className="mb-2 text-sm text-gray-400">one time</span>
          </div>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {customWebsiteOffer.features.slice(0, 6).map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                <Check size={15} className="text-[#a5a6ff]" strokeWidth={3} />
                {feature}
              </li>
            ))}
          </ul>
          <Button
            href={getPlanContactHref(customWebsiteOffer.planId)}
            className="mt-8"
            arrow
          >
            Start Your Website
          </Button>
        </div>
      </article>

      <div className="rounded-[2rem] border border-line bg-white p-7 sm:p-9">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              After launch
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em]">
              Monthly service plans
            </h3>
          </div>
          <Link
            href="/pricing"
            className="hidden items-center gap-1 text-sm font-semibold text-accent sm:flex"
          >
            Compare <ArrowRight size={15} />
          </Link>
        </div>
        <div className="mt-7 space-y-3">
          {monthlyPlans.map((plan) => (
            <Link
              key={plan.name}
              href={getPlanContactHref(plan.planId)}
              className={`flex items-center justify-between gap-4 rounded-2xl border p-5 transition hover:-translate-y-0.5 hover:shadow-card ${
                plan.featured
                  ? "border-accent/30 bg-accent/[0.04]"
                  : "border-line bg-surface/50"
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-semibold">{plan.name}</p>
                  {plan.featured && (
                    <span className="rounded-full bg-accent px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                      Most Popular
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-muted">{plan.description}</p>
              </div>
              <p className="shrink-0 text-xl font-semibold tracking-[-0.04em]">
                {plan.price}
                <span className="text-xs font-normal text-muted">
                  {plan.cadence}
                </span>
              </p>
            </Link>
          ))}
        </div>
        <Button href="/pricing" variant="secondary" className="mt-6 w-full" arrow>
          View Full Pricing
        </Button>
      </div>
    </div>
  );
}
