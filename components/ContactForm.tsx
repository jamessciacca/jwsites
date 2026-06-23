"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  LoaderCircle,
  PackageCheck,
  Send,
} from "lucide-react";
import { pricingSelections } from "@/data/pricing";

type FormStatus =
  | { type: "idle"; message: "" }
  | { type: "success" | "error"; message: string };

const inputClasses =
  "mt-2 w-full rounded-xl border border-line bg-white px-4 py-3.5 text-sm text-ink outline-none transition placeholder:text-gray-400 focus:border-accent focus:ring-4 focus:ring-accent/10 disabled:cursor-not-allowed disabled:bg-surface";

const selectedPlanStorageKey = "jwsites-selected-plan";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  useEffect(() => {
    const planId = new URLSearchParams(window.location.search).get("plan");
    const planFromUrl = pricingSelections.find((plan) => plan.id === planId);

    if (planFromUrl) {
      setSelectedPlan(planFromUrl.name);
      window.localStorage.setItem(selectedPlanStorageKey, planFromUrl.id);
      return;
    }

    const storedPlanId = window.localStorage.getItem(selectedPlanStorageKey);
    const storedPlan = pricingSelections.find(
      (plan) => plan.id === storedPlanId,
    );

    if (storedPlan) {
      setSelectedPlan(storedPlan.name);
    }
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Your message could not be sent.");
      }

      form.reset();
      window.localStorage.removeItem(selectedPlanStorageKey);
      setStatus({
        type: "success",
        message:
          "We’ll review your request and reach out within 24 hours.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Your message could not be sent. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (status.type === "success") {
    return (
      <div
        id="contact-form"
        className="scroll-mt-28 rounded-[2rem] border border-emerald-200 bg-white p-7 shadow-card sm:p-10"
      >
        <span className="flex size-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
          <CheckCircle2 size={25} />
        </span>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
          Inquiry received
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-ink">
          Thank you for your inquiry!
        </h2>
        {selectedPlan && (
          <div className="mt-6 rounded-2xl border border-accent/15 bg-accent/[0.05] px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Selected Package
            </p>
            <p className="mt-2 flex items-center gap-2 font-semibold text-ink">
              <PackageCheck size={19} className="text-accent" />
              {selectedPlan}
            </p>
          </div>
        )}
        <p className="mt-6 max-w-xl text-sm leading-7 text-muted">
          {status.message}
        </p>
      </div>
    );
  }

  return (
    <form
      id="contact-form"
      className="scroll-mt-28 rounded-[2rem] border border-line bg-white p-7 shadow-card sm:p-10"
      onSubmit={handleSubmit}
      noValidate
    >
      <input type="hidden" name="selectedPlan" value={selectedPlan} />

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {selectedPlan && (
        <div className="mb-7 rounded-2xl border border-accent/20 bg-accent/[0.05] px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Selected Package
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
            <p className="flex items-center gap-2 font-semibold text-ink">
              <CheckCircle2 size={18} className="text-accent" />
              {selectedPlan}
            </p>
            <Link
              href="/pricing#monthly-plans"
              className="text-xs font-semibold text-accent underline decoration-accent/30 underline-offset-4 transition hover:text-accent-dark"
            >
              Change Plan
            </Link>
          </div>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-sm font-medium text-gray-700">
          Name <span className="text-accent">*</span>
          <input
            className={inputClasses}
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Your name"
            maxLength={100}
            disabled={isSubmitting}
            required
          />
        </label>
        <label className="text-sm font-medium text-gray-700">
          Business Name <span className="text-accent">*</span>
          <input
            className={inputClasses}
            type="text"
            name="business"
            autoComplete="organization"
            placeholder="Your business"
            maxLength={120}
            disabled={isSubmitting}
            required
          />
        </label>
        <label className="text-sm font-medium text-gray-700">
          Email <span className="text-accent">*</span>
          <input
            className={inputClasses}
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@business.com"
            maxLength={160}
            disabled={isSubmitting}
            required
          />
        </label>
        <label className="text-sm font-medium text-gray-700">
          Phone Number <span className="text-accent">*</span>
          <input
            className={inputClasses}
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="(555) 123-4567"
            maxLength={50}
            disabled={isSubmitting}
            required
          />
        </label>
        <label className="text-sm font-medium text-gray-700 sm:col-span-2">
          Business Type <span className="text-accent">*</span>
          <input
            className={inputClasses}
            type="text"
            name="businessType"
            placeholder="Landscaping, restaurant, dental office…"
            maxLength={120}
            disabled={isSubmitting}
            required
          />
        </label>
      </div>

      <label className="mt-6 block text-sm font-medium text-gray-700">
        Current Website <span className="text-muted">(optional)</span>
        <input
          className={inputClasses}
          type="url"
          name="website"
          autoComplete="url"
          placeholder="https://yourwebsite.com"
          maxLength={300}
          disabled={isSubmitting}
        />
      </label>

      <label className="mt-6 block text-sm font-medium text-gray-700">
        Preferred Domain Name <span className="text-muted">(optional)</span>
        <input
          className={inputClasses}
          type="text"
          name="preferredDomain"
          placeholder="yourbusiness.com"
          maxLength={250}
          disabled={isSubmitting}
        />
      </label>

      <label className="mt-6 block text-sm font-medium text-gray-700">
        Additional Notes / Project Description{" "}
        <span className="text-accent">*</span>
        <textarea
          className={`${inputClasses} min-h-36 resize-y`}
          name="message"
          placeholder="Tell us about your business, what you need, and what you would like your new website to accomplish."
          maxLength={5000}
          disabled={isSubmitting}
          required
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(91,92,240,.28)] transition hover:-translate-y-0.5 hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:cursor-wait disabled:translate-y-0 disabled:opacity-70 sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <LoaderCircle className="animate-spin" size={17} />
            Sending…
          </>
        ) : (
          <>
            <Send size={16} />
            Request My Free Consultation
          </>
        )}
      </button>

      <div aria-live="polite" className="mt-5">
        {status.type === "error" && (
          <p className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">
            <AlertCircle className="mt-0.5 shrink-0" size={18} />
            {status.message}
          </p>
        )}
      </div>

      <p className="mt-4 text-xs leading-5 text-muted">
        Your information is used only to respond to your website inquiry.
      </p>
    </form>
  );
}
