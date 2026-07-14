import { ArrowRight, BriefcaseBusiness, UserRound } from "lucide-react";
import { Button } from "./Button";
import { portfolioPlans, smallBusinessWebsite } from "@/data/pricing";

type PricingPreviewProps = { heading?: string; text?: string };

export function PricingPreview({
  heading = "Simple options for businesses and individuals.",
  text = "Choose a small-business website or a personal portfolio. Hosting, support, and reasonable content updates are built into the ongoing service.",
}: PricingPreviewProps) {
  return (
    <div className="rounded-[2rem] border border-line bg-white p-7 shadow-card sm:p-9">
      <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Straightforward pricing</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">{heading}</h3>
          <p className="mt-4 text-sm leading-7 text-muted">{text}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-ink p-5 text-white">
            <BriefcaseBusiness className="text-[#a5a6ff]" size={21} />
            <p className="mt-4 font-semibold">Small-Business Website</p>
            <p className="mt-2 text-2xl font-semibold">{smallBusinessWebsite.standardPrice} <span className="text-xs font-normal text-gray-400">setup</span></p>
            <p className="mt-1 text-sm text-gray-400">{smallBusinessWebsite.ongoingPrice}{smallBusinessWebsite.ongoingCadence}</p>
          </div>
          <div className="rounded-2xl border border-accent/15 bg-accent/[0.04] p-5">
            <UserRound className="text-accent" size={21} />
            <p className="mt-4 font-semibold">Personal Portfolios</p>
            <p className="mt-2 text-2xl font-semibold">From {portfolioPlans[0].price}</p>
            <p className="mt-1 text-sm text-muted">Annual hosting and support</p>
          </div>
        </div>
      </div>
      <Button href="/pricing" variant="secondary" className="mt-7" arrow>
        Compare Full Pricing <ArrowRight size={15} />
      </Button>
    </div>
  );
}
