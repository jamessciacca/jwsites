import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  business?: unknown;
  email?: unknown;
  phone?: unknown;
  website?: unknown;
  message?: unknown;
  company?: unknown;
};

const CONTACT_TO_EMAIL = "jsciacca03@gmail.com";

function readField(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidOptionalUrl(value: string) {
  if (!value) return true;

  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    // Hidden honeypot field. Bots often fill this; real visitors never see it.
    if (readField(body.company, 100)) {
      return NextResponse.json({ success: true });
    }

    const name = readField(body.name, 100);
    const business = readField(body.business, 120);
    const email = readField(body.email, 160);
    const phone = readField(body.phone, 50);
    const website = readField(body.website, 300);
    const message = readField(body.message, 5000);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please complete your name, email, and message." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!isValidOptionalUrl(website)) {
      return NextResponse.json(
        { error: "Please enter a complete website URL, including https://." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL;

    if (!apiKey || !fromEmail) {
      console.error(
        "Contact form email is not configured. Add RESEND_API_KEY and RESEND_FROM_EMAIL.",
      );
      return NextResponse.json(
        { error: "Email is temporarily unavailable. Please try again soon." },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);
    const rows = [
      ["Name", name],
      ["Business Name", business || "Not provided"],
      ["Email", email],
      ["Phone", phone || "Not provided"],
      ["Current Website", website || "Not provided"],
      ["Message", message],
    ];

    const htmlRows = rows
      .map(
        ([label, value]) => `
          <tr>
            <td style="padding:12px;border-bottom:1px solid #e7e7e9;font-weight:600;vertical-align:top;width:160px">${escapeHtml(label)}</td>
            <td style="padding:12px;border-bottom:1px solid #e7e7e9;white-space:pre-wrap">${escapeHtml(value)}</td>
          </tr>`,
      )
      .join("");

    const { error } = await resend.emails.send({
      from: `JWSites Website <${fromEmail}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New JWSites inquiry from ${name}${business ? ` — ${business}` : ""}`,
      html: `
        <div style="font-family:Arial,sans-serif;color:#0a0a0b;max-width:680px;margin:0 auto">
          <h1 style="font-size:24px;margin-bottom:8px">New website inquiry</h1>
          <p style="color:#666b73;margin-top:0">Submitted through the JWSites contact form.</p>
          <table style="border-collapse:collapse;width:100%;margin-top:24px">${htmlRows}</table>
        </div>`,
      text: rows.map(([label, value]) => `${label}: ${value}`).join("\n\n"),
    });

    if (error) {
      console.error("Resend contact email failed:", error);
      return NextResponse.json(
        { error: "Your message could not be sent. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form request failed:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
