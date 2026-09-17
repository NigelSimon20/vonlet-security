import { NextResponse } from "next/server";

import { site } from "@/lib/site";

type Enquiry = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`);

/**
 * Sends enquiries through Resend when RESEND_API_KEY is set.
 * Without it the endpoint answers 503 and the form falls back to the visitor's email app.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot field: real visitors never fill it in.
  if (clean(body.company, 200)) {
    return NextResponse.json({ ok: true });
  }

  const enquiry: Enquiry = {
    name: clean(body.name, 120),
    email: clean(body.email, 200),
    phone: clean(body.phone, 40),
    service: clean(body.service, 120),
    message: clean(body.message, 5000),
  };

  if (!enquiry.name || !/^\S+@\S+\.\S+$/.test(enquiry.email) || enquiry.message.length < 10) {
    return NextResponse.json({ error: "validation" }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const rows = [
    ["Name", enquiry.name],
    ["Email", enquiry.email],
    ["Phone", enquiry.phone || "—"],
    ["Service", enquiry.service || "General enquiry"],
  ]
    .map(([label, value]) => `<tr><td><strong>${label}</strong></td><td>${escapeHtml(value)}</td></tr>`)
    .join("");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Vonlet Website <website@vonletsecurity.co.zw>",
      to: [process.env.CONTACT_TO_EMAIL ?? site.emails.general],
      reply_to: enquiry.email,
      subject: `Website enquiry: ${enquiry.service || "General"} — ${enquiry.name}`,
      html: `<table cellpadding="6">${rows}</table><p>${escapeHtml(enquiry.message).replace(/\n/g, "<br>")}</p>`,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
