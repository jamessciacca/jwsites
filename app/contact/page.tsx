import type { Metadata } from "next";
import { Clock3, Mail, MessageSquareText } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a free website consultation with JWSites. Tell us about your local business and get clear guidance on the right website option.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Free consultation"
        title="Tell us about your business."
        text="Tell us about your business and we’ll help you figure out the best website option."
      />
      <section className="pb-20 sm:pb-28">
        <div className="container-site grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="rounded-[2rem] bg-ink p-8 text-white sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a5a6ff]">
              What happens next
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
              A straightforward first conversation.
            </h2>
            <p className="mt-5 text-sm leading-7 text-gray-400">
              We’ll review what you share, learn a little more about your goals,
              and help you understand the most practical next step.
            </p>
            <div className="mt-10 space-y-7">
              {[
                [MessageSquareText, "No-pressure consultation", "Ask questions and get clear, honest guidance."],
                [Clock3, "Prompt follow-up", "We’ll get back to you as soon as possible."],
                [Mail, "Prefer email?", "jsciacca03@gmail.com"],
              ].map(([Icon, title, text]) => {
                const IconComponent = Icon as typeof Mail;
                return (
                  <div key={title as string} className="flex gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#a5a6ff]">
                      <IconComponent size={19} />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold">{title as string}</h3>
                      {title === "Prefer email?" ? (
                        <a
                          href="mailto:jsciacca03@gmail.com"
                          className="mt-1 block text-sm leading-6 text-gray-400 transition hover:text-white"
                        >
                          {text as string}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm leading-6 text-gray-400">{text as string}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
