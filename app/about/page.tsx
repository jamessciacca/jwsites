import type { Metadata } from "next";
import {
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  HeartHandshake,
  MessagesSquare,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet James Sciacca, the Rutgers Computer Science graduate behind JWSites, and learn how JWSites helps local businesses build a stronger online presence.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About JWSites"
        title="Small businesses deserve a website they’re proud to share."
        text="Founded by James Sciacca, JWSites makes modern web design and dependable website support more approachable for local businesses."
      />
      <section className="pb-20 sm:pb-28">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[430px] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#eae8ff] via-[#c9c5ff] to-[#7c7de8] p-6 sm:p-10">
            <div className="absolute -right-16 -top-16 size-56 rounded-full bg-white/50 blur-3xl" />
            <div className="relative flex h-full min-h-[370px] flex-col justify-between rounded-[1.7rem] border border-white/50 bg-white/85 p-8 shadow-soft backdrop-blur-md">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-accent text-xl font-bold text-white">
                JS
              </div>
              <blockquote className="max-w-md text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                “Good design should make your business feel clearer—not more
                complicated.”
              </blockquote>
              <p className="text-sm font-medium text-muted">
                Rutgers Computer Science · Full-stack development · Web hosting
              </p>
            </div>
          </div>

          <div>
            <span className="eyebrow">Meet the founder</span>
            <h2 className="display">Built by James Sciacca.</h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-muted">
              <p>
                JWSites was founded by James Sciacca, a Rutgers University
                graduate with a degree in Computer Science. James has
                experience in full-stack development, web hosting, and building
                modern websites that are fast, professional, and easy to
                maintain.
              </p>
              <p>
                JWSites was created to help local businesses build a stronger
                online presence without dealing with confusing technology,
                outdated website builders, or overpriced agency packages. The
                goal is simple: create clean, reliable websites that help
                businesses look credible and make it easier for customers to
                reach them.
              </p>
              <p>
                You can learn more about James and view his personal portfolio
                at{" "}
                <a
                  href="https://www.jamessciacca.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-accent underline decoration-accent/30 underline-offset-4 transition hover:decoration-accent"
                >
                  www.jamessciacca.com
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
                .
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" arrow>
                Tell us about your business
              </Button>
              <a
                href="https://www.jamessciacca.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-gray-300 hover:bg-surface"
              >
                James’s Portfolio <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">How we work</span>
            <h2 className="display">Professional, personal, and grounded.</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              [GraduationCap, "Technical foundation", "A Computer Science background supports careful, maintainable website builds."],
              [MessagesSquare, "Simple communication", "Clear updates, plain language, and no making you chase answers."],
              [CheckCircle2, "Clean design", "A polished look that supports your business instead of distracting from it."],
              [ShieldCheck, "Reliable setup", "The essential details handled carefully from domain to launch."],
              [HeartHandshake, "Long-term support", "A dependable person to contact when your website needs attention."],
            ].map(([Icon, title, text]) => {
              const IconComponent = Icon as typeof MessagesSquare;
              return (
                <article key={title as string} className="rounded-3xl border border-line bg-white p-7">
                  <IconComponent className="text-accent" size={24} />
                  <h3 className="mt-5 text-lg font-semibold">{title as string}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{text as string}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
