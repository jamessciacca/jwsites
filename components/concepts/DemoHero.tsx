import Link from "next/link";
import { ArrowRight } from "lucide-react";

type DemoHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  children: React.ReactNode;
  className?: string;
  buttonClassName?: string;
};

export function DemoHero({
  eyebrow,
  title,
  text,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref = "#",
  children,
  className = "",
  buttonClassName = "bg-ink text-white",
}: DemoHeroProps) {
  return (
    <section className={`overflow-hidden px-5 py-16 sm:px-8 sm:py-24 lg:py-28 ${className}`}>
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="animate-fade-up">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] opacity-65">
            {eyebrow}
          </p>
          <h1 className="text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-8 opacity-70">
            {text}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={primaryHref}
              className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5 ${buttonClassName}`}
            >
              {primaryLabel} <ArrowRight size={16} aria-hidden="true" />
            </Link>
            {secondaryLabel && (
              <Link
                href={secondaryHref}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-current/20 px-6 py-3 text-sm font-bold transition hover:bg-black/5"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
        <div className="animate-fade-up animate-delay-1">{children}</div>
      </div>
    </section>
  );
}
