import { Button } from "./Button";

export function CTASection() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-12 text-center text-white sm:px-12 sm:py-16 lg:py-20">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/35 blur-[90px]" />
          <div className="relative mx-auto max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#a9aaff]">
              Let’s build something better
            </p>
            <h2 className="text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Ready for a website that represents you well?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              Start with a free, no-pressure conversation about your business,
              your work, and what your website needs to do.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact?project=small-business-website#contact-form" arrow>
                Business Website
              </Button>
              <Button href="/contact?project=personal-portfolio#contact-form" variant="secondary" arrow>
                Personal Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
