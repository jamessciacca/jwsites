import { Button } from "./Button";

export function CTASection() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-16 text-center text-white sm:px-12 sm:py-20 lg:py-24">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/35 blur-[90px]" />
          <div className="relative mx-auto max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#a9aaff]">
              Let’s build something better
            </p>
            <h2 className="text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Ready to give your business a website that looks professional?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              Start with a free, no-pressure conversation about your business,
              your goals, and what your website needs to do.
            </p>
            <Button href="/contact" className="mt-9" arrow>
              Start Your Website
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
