import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { RealProject } from "@/data/realProjects";

export function RealProjectCard({
  name,
  type,
  description,
  href,
  image,
  imageAlt,
  status,
  services,
}: RealProject) {
  const isExternal = href.startsWith("http");
  const linkClasses =
    "mt-6 inline-flex items-center gap-2 text-sm font-bold text-ink transition hover:text-accent";

  const linkLabel = isExternal ? "Visit Live Site" : "View Project";

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[16/9] overflow-hidden bg-surface">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/35 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
          {status}
        </span>
      </div>
      <div className="p-7 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
          {type}
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-[-0.035em]">
          {name}
        </h2>
        <p className="mt-3 leading-7 text-muted">{description}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {services.map((service) => (
            <li key={service} className="flex gap-2 text-sm text-gray-700">
              <CheckCircle2
                className="mt-0.5 shrink-0 text-accent"
                size={16}
                aria-hidden="true"
              />
              {service}
            </li>
          ))}
        </ul>
        {isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses}
          >
            {linkLabel} <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        ) : (
          <Link href={href} className={linkClasses}>
            {linkLabel} <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
}
