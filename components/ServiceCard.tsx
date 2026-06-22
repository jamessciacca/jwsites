import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article className="rounded-3xl border border-line bg-white p-7 card-hover sm:p-8">
      <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
        <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
      </div>
      <h2 className="text-xl font-semibold tracking-[-0.025em]">{title}</h2>
      <p className="mt-3 text-base leading-7 text-muted">{description}</p>
    </article>
  );
}
