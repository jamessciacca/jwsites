"use client";

import { FormEvent, useState } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react";

type FormStatus =
  | { type: "idle"; message: "" }
  | { type: "success" | "error"; message: string };

const inputClasses =
  "mt-2 w-full rounded-xl border border-line bg-white px-4 py-3.5 text-sm text-ink outline-none transition placeholder:text-gray-400 focus:border-accent focus:ring-4 focus:ring-accent/10 disabled:cursor-not-allowed disabled:bg-surface";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

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
      setStatus({
        type: "success",
        message:
          "Thanks — your message has been sent. JWSites will reach out soon.",
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

  return (
    <form
      className="rounded-[2rem] border border-line bg-white p-7 shadow-card sm:p-10"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

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
          Business Name
          <input
            className={inputClasses}
            type="text"
            name="business"
            autoComplete="organization"
            placeholder="Your business"
            maxLength={120}
            disabled={isSubmitting}
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
          Phone
          <input
            className={inputClasses}
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="(555) 123-4567"
            maxLength={50}
            disabled={isSubmitting}
          />
        </label>
      </div>

      <label className="mt-6 block text-sm font-medium text-gray-700">
        Current Website URL
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
        Message <span className="text-accent">*</span>
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
        {status.type === "success" && (
          <p className="flex items-start gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-800">
            <CheckCircle2 className="mt-0.5 shrink-0" size={18} />
            {status.message}
          </p>
        )}
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
