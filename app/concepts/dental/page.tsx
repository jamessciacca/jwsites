import type { Metadata } from "next";
import { CalendarCheck, Check, CreditCard, Heart, ShieldCheck, Sparkles, Star, Users } from "lucide-react";
import { ConceptBanner } from "@/components/concepts/ConceptBanner";
import { ConceptSiteNav } from "@/components/concepts/ConceptSiteNav";
import { DemoCTA } from "@/components/concepts/DemoCTA";
import { DemoHero } from "@/components/concepts/DemoHero";
import { DemoSection } from "@/components/concepts/DemoSection";

export const metadata: Metadata = {
  title: "FreshPoint Dental Website Concept",
  description:
    "A fictional dental office website concept by JWSites. This is a sample design, not a real healthcare practice.",
};

const services = [
  [Sparkles, "Preventive Care", "Routine cleanings, exams, and practical guidance for a healthy smile."],
  [Heart, "Restorative Dentistry", "Comfortable, thoughtful care that helps restore strength and confidence."],
  [Star, "Cosmetic Dentistry", "Personalized options designed to help you feel good about your smile."],
  [Users, "Family Dentistry", "Friendly dental care for adults, teens, and children in one welcoming office."],
];

export default function DentalConceptPage() {
  return (
    <div id="top" className="bg-[#f5fbfa] pt-20 text-[#173b42]">
      <ConceptBanner tone="calm" />
      <ConceptSiteNav
        name="FreshPoint Dental"
        links={[
          { label: "Services", href: "#services" },
          { label: "Why Us", href: "#benefits" },
          { label: "Our Team", href: "#team" },
        ]}
        ctaLabel="Book Appointment"
        ctaHref="#appointment"
        className="bg-white text-[#173b42]"
        buttonClassName="bg-[#3e8f91] text-white"
      />

      <DemoHero
        eyebrow="Comfortable care for every smile"
        title={
          <>
            Dentistry that feels
            <br />
            <span className="text-[#3e8f91]">refreshingly human.</span>
          </>
        }
        text="Clear answers, gentle care, and a welcoming team focused on making every visit feel a little easier."
        primaryLabel="Request an appointment"
        primaryHref="#appointment"
        secondaryLabel="Meet the team"
        secondaryHref="#team"
        className="bg-[radial-gradient(circle_at_75%_20%,#d8f0ed,transparent_38%)]"
        buttonClassName="bg-[#3e8f91] text-white"
      >
        <div className="relative mx-auto max-w-xl">
          <div className="aspect-square overflow-hidden rounded-[45%_45%_45%_12%] bg-[#cde9e6] p-7 shadow-[0_35px_80px_rgba(47,110,112,.18)]">
            <div className="relative h-full overflow-hidden rounded-[42%_42%_42%_10%] bg-[linear-gradient(145deg,#eef9f7,#91c8c5)]">
              <div className="absolute bottom-0 left-1/2 h-[78%] w-[58%] -translate-x-1/2 rounded-[50%_50%_18%_18%] bg-[#f3c9b7]" />
              <div className="absolute bottom-0 left-1/2 h-[43%] w-[85%] -translate-x-1/2 rounded-[50%_50%_0_0] bg-white" />
              <div className="absolute left-1/2 top-[13%] h-[38%] w-[42%] -translate-x-1/2 rounded-[48%] bg-[#744b3d]" />
              <div className="absolute left-1/2 top-[31%] h-[9%] w-[16%] -translate-x-1/2 rounded-b-full bg-white" />
            </div>
          </div>
          <div className="absolute -bottom-4 -left-3 rounded-2xl bg-white p-4 shadow-xl sm:-left-10">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-[#dff2ef] text-[#3e8f91]">
                <CalendarCheck size={19} />
              </span>
              <div>
                <p className="text-sm font-bold">Appointments made simple</p>
                <p className="text-xs text-[#6e8588]">Online requests available</p>
              </div>
            </div>
          </div>
        </div>
      </DemoHero>

      <div className="border-y border-[#d9eae7] bg-white px-5 py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-12 gap-y-3 text-sm font-bold text-[#527176]">
          {["Gentle approach", "Clear treatment plans", "Flexible scheduling", "Family-friendly care"].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <Check className="text-[#3e8f91]" size={17} strokeWidth={3} /> {item}
            </span>
          ))}
        </div>
      </div>

      <DemoSection
        id="services"
        eyebrow="Dental services"
        title="Modern care, centered around you."
        text="From routine visits to restoring your smile, each service is explained clearly and planned around your comfort."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(([Icon, title, text]) => {
            const IconComponent = Icon as typeof Heart;
            return (
              <article key={title as string} className="rounded-3xl border border-[#d9eae7] bg-white p-7">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-[#dff2ef] text-[#3e8f91]">
                  <IconComponent size={22} />
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-[-0.02em]">{title as string}</h3>
                <p className="mt-3 text-sm leading-6 text-[#6e8588]">{text as string}</p>
              </article>
            );
          })}
        </div>
      </DemoSection>

      <DemoSection
        id="benefits"
        eyebrow="A better patient experience"
        title="You should feel informed, comfortable, and cared for."
        className="bg-[#dff2ef]"
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            {[
              ["Comfort-first visits", "A calm environment, gentle approach, and time to ask every question."],
              ["Clear recommendations", "Treatment options explained in everyday language without pressure."],
              ["Modern technology", "Thoughtful tools that support efficient visits and informed care."],
              ["Convenient scheduling", "Appointment options designed to fit busy family calendars."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl bg-white/75 p-6">
                <div className="flex gap-4">
                  <ShieldCheck className="mt-0.5 shrink-0 text-[#3e8f91]" size={22} />
                  <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#6e8588]">{text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="aspect-[4/5] rounded-[10rem_10rem_2rem_2rem] bg-[linear-gradient(145deg,#8bc5c1,#f1d6c5)] p-6">
            <div className="flex h-full items-end rounded-[9rem_9rem_1.4rem_1.4rem] border border-white/50 bg-white/20 p-6">
              <div className="w-full rounded-2xl bg-white p-5 shadow-lg">
                <p className="text-sm font-bold">A plan you can understand</p>
                <div className="mt-4 space-y-2">
                  <div className="h-2 rounded-full bg-[#dff2ef]" />
                  <div className="h-2 w-4/5 rounded-full bg-[#dff2ef]" />
                  <div className="h-8 w-28 rounded-full bg-[#3e8f91]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DemoSection>

      <DemoSection
        id="team"
        eyebrow="Meet the team"
        title="Friendly faces. Thoughtful care."
        text="A team preview that helps new patients feel familiar with the practice before their first visit."
        align="center"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Dr. Maya Chen", "General Dentist", "from-[#b8dcd8] to-[#e8c8b8]"],
            ["Dr. Owen Brooks", "Restorative Dentist", "from-[#bdd5e0] to-[#d6b9aa]"],
            ["Nina Patel", "Patient Care Coordinator", "from-[#d2e6d8] to-[#e5c4ac]"],
          ].map(([name, role, color]) => (
            <article key={name} className="overflow-hidden rounded-3xl border border-[#d9eae7] bg-white text-left">
              <div className={`aspect-[4/3] bg-gradient-to-br ${color}`} />
              <div className="p-6">
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="mt-1 text-sm text-[#3e8f91]">{role}</p>
                <p className="mt-4 text-xs text-[#829699]">
                  Fictional team member for concept display
                </p>
              </div>
            </article>
          ))}
        </div>
      </DemoSection>

      <DemoSection
        eyebrow="Insurance & payment"
        title="Clarity before care begins."
        className="bg-white"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl bg-[#f0f8f6] p-8">
            <ShieldCheck className="text-[#3e8f91]" size={26} />
            <h3 className="mt-5 text-xl font-bold">Insurance welcome</h3>
            <p className="mt-3 leading-7 text-[#6e8588]">
              A helpful team can review benefits, explain estimates, and make
              coverage easier to understand before treatment.
            </p>
          </article>
          <article className="rounded-3xl bg-[#f0f8f6] p-8">
            <CreditCard className="text-[#3e8f91]" size={26} />
            <h3 className="mt-5 text-xl font-bold">Flexible payment options</h3>
            <p className="mt-3 leading-7 text-[#6e8588]">
              Clear costs and practical payment choices help patients plan care
              with fewer surprises.
            </p>
          </article>
        </div>
      </DemoSection>

      <div id="appointment">
        <DemoCTA
          eyebrow="New patients welcome"
          title="Ready for a dental visit that feels different?"
          text="Request an appointment and let our friendly team help you plan your first visit."
          label="Build a dental site like this"
          className="bg-[#173b42] text-white"
          buttonClassName="bg-[#bfe7df] text-[#173b42]"
        />
      </div>
    </div>
  );
}
