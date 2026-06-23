import { Check } from "lucide-react";
import { Button } from "./Button";
import { getPlanContactHref } from "@/data/pricing";

type SupportPlanCardProps = {
  planId: string;
  name: string;
  price: string;
  cadence: string;
  description: string;
  buildPrice: string;
  domain: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export function SupportPlanCard({
  planId,
  name,
  price,
  cadence,
  description,
  buildPrice,
  domain,
  features,
  cta,
  featured = false,
}: SupportPlanCardProps) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-[2rem] border p-7 transition duration-300 hover:-translate-y-1 sm:p-8 ${
        featured
          ? "border-accent bg-white shadow-[0_28px_70px_rgba(91,92,240,0.16)] lg:-translate-y-3 lg:hover:-translate-y-4"
          : "border-line bg-white shadow-sm hover:border-gray-300 hover:shadow-card"
      }`}
    >
      {featured && (
        <span className="absolute right-6 top-6 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
          Most Popular
        </span>
      )}
      <h3 className="pr-24 text-2xl font-semibold tracking-[-0.035em]">
        {name}
      </h3>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.13em] text-accent">
        {buildPrice}
      </p>
      <div className="mt-6 flex items-end gap-1">
        <span className="text-5xl font-semibold tracking-[-0.06em] sm:text-6xl">
          {price}
        </span>
        <span className="mb-2 text-sm font-medium text-muted">{cadence}</span>
      </div>
      <p className="mt-5 min-h-20 text-sm leading-6 text-muted">
        {description}
      </p>
      <div
        className={`mt-5 rounded-xl border px-4 py-3 text-xs font-medium leading-5 ${
          featured
            ? "border-accent/20 bg-accent/[0.05] text-accent-dark"
            : "border-line bg-surface text-gray-600"
        }`}
      >
        {domain}
      </div>
      <div className="my-7 h-px bg-line" />
      <ul className="mb-8 flex-1 space-y-3.5">
        {features.map((feature, index) => (
          <li
            key={feature}
            className={`flex gap-3 text-sm ${
              index === 0 && feature.startsWith("Everything")
                ? "font-semibold text-ink"
                : "text-gray-700"
            }`}
          >
            <span
              className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${
                featured ? "bg-accent text-white" : "bg-accent/10 text-accent"
              }`}
            >
              <Check size={12} strokeWidth={3} />
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <Button
        href={getPlanContactHref(planId)}
        variant={featured ? "primary" : "secondary"}
        className="w-full"
        arrow
      >
        {cta}
      </Button>
    </article>
  );
}
