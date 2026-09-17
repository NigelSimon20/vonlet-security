"use client";

import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, ChevronDown, LoaderCircle, Send } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";

import { cn } from "@/components/ui";
import { serviceCategories, services, servicesInCategory } from "@/lib/services";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

const fieldClass =
  "mt-2 w-full rounded-2xl border border-sand-200 bg-sand-50 px-4 py-3.5 text-[0.95rem] text-navy-950 placeholder:text-navy-900/35 transition-colors focus:border-gold-500 focus:bg-white focus:outline-none focus-visible:outline-none focus:ring-4 focus:ring-gold-500/15";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const serviceSelect = useRef<HTMLSelectElement>(null);

  // Service pages link here with ?service=<slug>; preselect it without opting the page out of static rendering.
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("service");
    const match = services.find((service) => service.slug === slug);
    if (match && serviceSelect.current) serviceSelect.current.value = match.title;
  }, [status]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        form.reset();
        setStatus("sent");
        return;
      }
      if (response.status !== 503) throw new Error(String(response.status));
    } catch {
      setStatus("error");
      return;
    }

    // Email delivery isn't configured on the server yet: hand off to the visitor's email app instead.
    const subject = `Website enquiry: ${data.service || "General"} — ${data.name}`;
    const lines = [data.message, "", `Name: ${data.name}`, `Email: ${data.email}`, `Phone: ${data.phone || "—"}`];
    window.location.href = `mailto:${site.emails.general}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setStatus("mailto");
  }

  const done = status === "sent" || status === "mailto";

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {done ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex min-h-112 flex-col items-center justify-center text-center"
            role="status"
          >
            <span className="grid size-16 place-items-center rounded-full bg-gold-100 text-gold-600">
              <CheckCircle2 className="size-8" />
            </span>
            <h3 className="mt-6 text-2xl font-bold text-navy-950">
              {status === "sent" ? "Thank you — message received." : "Almost there."}
            </h3>
            <p className="mt-3 max-w-sm text-muted">
              {status === "sent"
                ? "A member of our team will get back to you shortly. For urgent matters, please call us."
                : `We've opened your email app with your enquiry ready to send to ${site.emails.general}.`}
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-8 text-sm font-semibold text-navy-700 underline-offset-4 hover:underline"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium text-navy-900">
              Full name
              <input name="name" required autoComplete="name" placeholder="Your name" className={fieldClass} />
            </label>
            <label className="text-sm font-medium text-navy-900">
              Email address
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                className={fieldClass}
              />
            </label>
            <label className="text-sm font-medium text-navy-900">
              Phone number <span className="font-normal text-muted">(optional)</span>
              <input name="phone" type="tel" autoComplete="tel" placeholder="+263 …" className={fieldClass} />
            </label>
            <label className="text-sm font-medium text-navy-900">
              Service of interest
              <span className="relative block">
                <select ref={serviceSelect} name="service" defaultValue="" className={cn(fieldClass, "appearance-none pr-11")}>
                  <option value="">General enquiry</option>
                  {serviceCategories.map((category) => (
                    <optgroup key={category.id} label={category.title}>
                      {servicesInCategory(category.id).map((service) => (
                        <option key={service.slug} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 mt-1 size-4 -translate-y-1/2 text-navy-900/50" />
              </span>
            </label>
            <label className="text-sm font-medium text-navy-900 sm:col-span-2">
              How can we help?
              <textarea
                name="message"
                required
                minLength={10}
                rows={5}
                placeholder="Tell us about your premises, the number of guards you need, or any questions."
                className={cn(fieldClass, "resize-y")}
              />
            </label>
            <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

            <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p className={cn("text-sm", status === "error" ? "text-red-600" : "text-muted")} role={status === "error" ? "alert" : undefined}>
                {status === "error"
                  ? `Something went wrong. Please email ${site.emails.general} or call us.`
                  : "We usually respond within one business day."}
              </p>
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-gold-500 px-7 font-semibold text-navy-950 shadow-[0_8px_30px_-8px_rgb(215_151_53/0.6)] transition-colors hover:bg-gold-400 disabled:opacity-60"
              >
                {status === "sending" ? <LoaderCircle className="size-4 animate-spin" /> : <Send className="size-4" />}
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
