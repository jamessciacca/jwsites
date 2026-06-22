import { Check } from "lucide-react";
import { Button } from "./Button";

type PricingCardProps = {
  name: string;
  description: string;
  price: string;
  maintenance: string;
  features: string[];
  featured?: boolean;
};

export function PricingCard({
  name,
  description,
  price,
  maintenance,
  features,
  featured = false,
}: PricingCardProps) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-[2rem] border p-7 sm:p-8 ${
        featured
          ? "border-accent bg-ink text-white shadow-soft"
          : "border-line bg-white text-ink"
      }`}
    >
      {featured && (
        <span className="absolute right-6 top-6 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
          Most popular
        </span>
      )}
      <h2 className="text-2xl font-semibold tracking-[-0.035em]">{name}</h2>
      <p
        className={`mt-4 min-h-20 text-sm leading-6 ${
          featured ? "text-gray-400" : "text-muted"
        }`}
      >
        {description}
      </p>
      <div className="mt-6">
        <p className="text-sm font-medium">Starting at</p>
        <p className="mt-1 text-4xl font-semibold tracking-[-0.05em]">{price}</p>
        <p
          className={`mt-2 text-sm ${featured ? "text-gray-400" : "text-muted"}`}
        >
          {maintenance}
        </p>
      </div>
      <div className={`my-7 h-px ${featured ? "bg-white/15" : "bg-line"}`} />
      <ul className="mb-8 flex-1 space-y-3.5">
        {features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm">
            <span
              className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${
                featured ? "bg-accent text-white" : "bg-accent/10 text-accent"
              }`}
            >
              <Check size={12} strokeWidth={3} />
            </span>
            <span className={featured ? "text-gray-300" : "text-gray-700"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <Button
        href="/contact"
        variant={featured ? "primary" : "secondary"}
        className="w-full"
        arrow
      >
        Get started
      </Button>
    </article>
  );
}
