import Link from "next/link";

type ConceptSiteNavProps = {
  name: string;
  links: { label: string; href: string }[];
  ctaLabel: string;
  ctaHref: string;
  className?: string;
  buttonClassName?: string;
};

export function ConceptSiteNav({
  name,
  links,
  ctaLabel,
  ctaHref,
  className = "bg-white text-ink",
  buttonClassName = "bg-ink text-white",
}: ConceptSiteNavProps) {
  return (
    <nav className={`border-b border-current/10 px-5 sm:px-8 ${className}`} aria-label={`${name} concept navigation`}>
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-3 py-3 sm:gap-6">
        <Link href="#top" className="min-w-0 text-base font-bold tracking-[-0.04em] sm:text-xl">
          {name}
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold opacity-65 transition hover:opacity-100"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href={ctaHref}
          className={`shrink-0 rounded-full px-4 py-2.5 text-center text-xs font-bold transition hover:-translate-y-0.5 sm:px-5 sm:text-sm ${buttonClassName}`}
        >
          {ctaLabel}
        </Link>
      </div>
    </nav>
  );
}
