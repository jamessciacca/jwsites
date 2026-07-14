import Link from "next/link";
import { ArrowRight } from "lucide-react";

type DemoCTAProps = {
  eyebrow?: string;
  title: string;
  text: string;
  label: string;
  href?: string;
  className?: string;
  buttonClassName?: string;
};

export function DemoCTA({
  eyebrow,
  title,
  text,
  label,
  href = "/contact",
  className = "bg-ink text-white",
  buttonClassName = "bg-white text-ink",
}: DemoCTAProps) {
  return (
    <section className="px-5 py-14 sm:px-8 sm:py-16">
      <div className={`mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-7 py-12 text-center sm:px-12 sm:py-16 ${className}`}>
        <div className="mx-auto max-w-3xl">
          {eyebrow && (
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] opacity-65">
              {eyebrow}
            </p>
          )}
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty leading-7 opacity-70">
            {text}
          </p>
          <Link
            href={href}
            className={`mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5 ${buttonClassName}`}
          >
            {label} <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
