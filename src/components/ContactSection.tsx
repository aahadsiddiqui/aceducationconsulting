"use client";

import { useState } from "react";
import { site } from "@/lib/siteContent";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");

    try {
      const response = await fetch(site.formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[color:var(--line)] bg-[color:var(--bg)] text-white"
      aria-labelledby="contact-heading"
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-white/5 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/50">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-3 font-[family-name:var(--font-display)] text-3xl sm:text-4xl"
          >
            Let’s plan your next credential
          </h2>
          <p className="mt-4 max-w-md text-white/65 leading-relaxed">
            Tell us about your goals and the career-focused college program
            you’re considering. We’ll follow up about admissions, OSAP funding,
            and next steps. There are no upfront consultation fees.
          </p>
          <p className="mt-4 max-w-md text-sm text-white/40 leading-relaxed">
            {site.disclaimer}
          </p>
          <dl className="mt-8 space-y-3 text-sm">
            <div>
              <dt className="text-white/40">Email</dt>
              <dd>
                <a
                  href={`mailto:${site.email}`}
                  className="text-white underline-offset-4 hover:underline"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-white/40">Phone</dt>
              <dd>
                <a
                  href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                  className="text-white underline-offset-4 hover:underline"
                >
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-white/40">Who we serve</dt>
              <dd className="text-white/75">{site.location}</dd>
            </div>
          </dl>
        </div>

        <form
          className="space-y-4"
          action={site.formEndpoint}
          method="POST"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-name" className="text-sm text-white/65">
                Full name
              </label>
              <input
                id="contact-name"
                name="name"
                required
                autoComplete="name"
                className="rounded-md border border-white/20 bg-white/5 px-3.5 py-2.5 text-white placeholder:text-white/35 transition hover:border-white/35 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-email" className="text-sm text-white/65">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="rounded-md border border-white/20 bg-white/5 px-3.5 py-2.5 text-white placeholder:text-white/35 transition hover:border-white/35 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="you@email.com"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-status" className="text-sm text-white/65">
              Status in Canada
            </label>
            <select
              id="contact-status"
              name="status"
              required
              className="cursor-pointer appearance-none rounded-md border border-white/20 bg-white/5 px-3.5 py-2.5 text-white transition hover:border-white/35 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
              defaultValue=""
            >
              <option value="" disabled>
                Select…
              </option>
              <option value="Canadian citizen">Canadian citizen</option>
              <option value="Permanent resident">Permanent resident</option>
              <option value="Refugee / protected person">Refugee / protected person</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-interest" className="text-sm text-white/65">
              Program interest
            </label>
            <input
              id="contact-interest"
              name="interest"
              className="rounded-md border border-white/20 bg-white/5 px-3.5 py-2.5 text-white placeholder:text-white/35 transition hover:border-white/35 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
              placeholder="e.g. business diploma in Ontario, funding through OSAP"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-message" className="text-sm text-white/65">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              className="resize-y rounded-md border border-white/20 bg-white/5 px-3.5 py-2.5 text-white placeholder:text-white/35 transition hover:border-white/35 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
              placeholder="Share your goals, province, or funding questions…"
            />
          </div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
          >
            {status === "submitting" ? "Sending…" : "Send message"}
          </button>
          <p className="min-h-5 text-sm" aria-live="polite">
            {status === "success" && (
              <span className="text-white/80">
                Thanks. Your message is on its way, and we&apos;ll follow up soon.
              </span>
            )}
            {status === "error" && (
              <span className="text-white/80">
                We couldn&apos;t send that just now. Try again, or email{" "}
                <a href={`mailto:${site.email}`} className="underline underline-offset-4">
                  {site.email}
                </a>
                .
              </span>
            )}
          </p>
        </form>
      </div>
    </section>
  );
}
