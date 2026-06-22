type DemoSectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  text?: string;
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  align?: "left" | "center";
};

export function DemoSection({
  id,
  eyebrow,
  title,
  text,
  children,
  className = "",
  contentClassName = "",
  align = "left",
}: DemoSectionProps) {
  return (
    <section id={id} className={`px-5 py-20 sm:px-8 sm:py-24 lg:py-28 ${className}`}>
      <div className={`mx-auto max-w-7xl ${contentClassName}`}>
        <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
          {eyebrow && (
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] opacity-65">
              {eyebrow}
            </p>
          )}
          <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
            {title}
          </h2>
          {text && (
            <p className="mt-5 text-pretty text-base leading-7 opacity-70 sm:text-lg sm:leading-8">
              {text}
            </p>
          )}
        </div>
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}
