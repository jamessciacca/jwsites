import { Check } from "lucide-react";
import { Button } from "./Button";
import { getPlanContactHref } from "@/data/pricing";

type SupportPlanCardProps = {
  planId: string;
  name: string;
  price: string;
  ongoingPrice: string;
  ongoingCadence: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export function SupportPlanCard({
  planId,
  name,
  price,
  ongoingPrice,
  ongoingCadence,
  description,
  features,
  featured = false,
}: SupportPlanCardProps) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-[2rem] border p-7 transition duration-300 hover:-translate-y-1 sm:p-8 ${
        featured
          ? "border-accent bg-white shadow-[0_28px_70px_rgba(91,92,240,0.16)]"
          : "border-line bg-white shadow-sm hover:border-gray-300 hover:shadow-card"
      }`}
    >
      {featured && (
        <span className="mb-4 w-fit rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
          Popular choice
        </span>
      )}
      <h3 className="text-2xl font-semibold tracking-[-0.035em]">{name}</h3>
      <p className="mt-5 text-sm leading-6 text-muted">{description}</p>
      <div className="mt-7">
        <p className="text-5xl font-semibold tracking-[-0.06em] sm:text-6xl">{price}</p>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.13em] text-accent">
          one-time design and build
        </p>
      </div>
      <div className="mt-6 rounded-xl border border-accent/15 bg-accent/[0.05] px-4 py-3">
        <p className="font-semibold text-ink">
          {ongoingPrice}<span className="text-sm font-normal text-muted">{ongoingCadence}</span>
        </p>
        <p className="mt-1 text-xs leading-5 text-muted">Hosting, support, and reasonable content updates included</p>
      </div>
      <div className="my-7 h-px bg-line" />
      <ul className="mb-8 flex-1 space-y-3.5">
        {features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm text-gray-700">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Check size={12} strokeWidth={3} />
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <Button href={getPlanContactHref(planId)} variant={featured ? "primary" : "secondary"} className="w-full" arrow>
        Choose {name}
      </Button>
    </article>
  );
}
