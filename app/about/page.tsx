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

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how JWSites combines a Rutgers Computer Science background with clear communication and dependable support for local businesses.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-hero-glow pb-20 pt-32 sm:pb-28 sm:pt-40">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Founder-led web design</span>
            <h2 className="display">
              Built with technical skill and local-business focus.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-7 text-muted sm:leading-8">
              <p>
                JWSites was founded by James Sciacca to make professional web
                design more approachable for small businesses. With a Computer
                Science background from Rutgers University and experience in
                full-stack development, the focus is on building websites that
                are fast, polished, easy to maintain, and simple for customers
                to use.
              </p>
              <p>
                Every project is designed around clear communication,
                dependable support, and practical results. The goal is not to
                overcomplicate the process—it is to give business owners a
                website that looks credible, works smoothly, and helps more
                customers reach them.
              </p>
              <p>
                Additional work and technical projects can be viewed through{" "}
                <a
                  href="https://www.jamessciacca.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-accent underline decoration-accent/30 underline-offset-4 transition hover:decoration-accent"
                >
                  James Sciacca’s portfolio
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
                .
              </p>
            </div>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/contact" arrow>
                Start a Website Project
              </Button>
              <a
                href="https://www.jamessciacca.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-gray-300 hover:bg-surface"
              >
                View Portfolio <ExternalLink size={15} />
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
