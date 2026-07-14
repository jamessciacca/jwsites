type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export function PageHero({ eyebrow, title, text }: PageHeroProps) {
  return (
    <section className="overflow-hidden bg-hero-glow pb-16 pt-32 sm:pb-20 sm:pt-36">
      <div className="container-site text-center">
        <span className="eyebrow animate-fade-up">{eyebrow}</span>
        <h1 className="page-display mx-auto max-w-5xl animate-fade-up animate-delay-1">
          {title}
        </h1>
        <p className="body-large mx-auto mt-7 max-w-2xl animate-fade-up animate-delay-2">
          {text}
        </p>
      </div>
    </section>
  );
}
