import { site } from "@/lib/siteContent";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[color:var(--ink)] text-white"
      aria-labelledby="contact-heading"
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[color:var(--pine)]/30 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--gold)]">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-3 font-[family-name:var(--font-display)] text-3xl sm:text-4xl"
          >
            Start your Canadian college plan
          </h2>
          <p className="mt-4 max-w-md text-white/70 leading-relaxed">
            Tell us where you are in the journey. We’ll follow up with next steps
            for program matching and application timelines.
          </p>
          <dl className="mt-8 space-y-3 text-sm">
            <div>
              <dt className="text-white/45">Email</dt>
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
              <dt className="text-white/45">Phone</dt>
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
              <dt className="text-white/45">Coverage</dt>
              <dd className="text-white/80">{site.location}</dd>
            </div>
          </dl>
        </div>

        <form
          className="space-y-4"
          action={`mailto:${site.email}`}
          method="post"
          encType="text/plain"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-name" className="text-sm text-white/70">
                Full name
              </label>
              <input
                id="contact-name"
                name="name"
                required
                autoComplete="name"
                className="rounded-md border border-white/20 bg-white/5 px-3.5 py-2.5 text-white placeholder:text-white/35 transition hover:border-white/35 focus:border-[color:var(--gold)] focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]/30"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-email" className="text-sm text-white/70">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="rounded-md border border-white/20 bg-white/5 px-3.5 py-2.5 text-white placeholder:text-white/35 transition hover:border-white/35 focus:border-[color:var(--gold)] focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]/30"
                placeholder="you@email.com"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-interest" className="text-sm text-white/70">
              Program interest
            </label>
            <input
              id="contact-interest"
              name="interest"
              className="rounded-md border border-white/20 bg-white/5 px-3.5 py-2.5 text-white placeholder:text-white/35 transition hover:border-white/35 focus:border-[color:var(--gold)] focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]/30"
              placeholder="e.g. Business Administration in Ontario"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-message" className="text-sm text-white/70">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              className="resize-y rounded-md border border-white/20 bg-white/5 px-3.5 py-2.5 text-white placeholder:text-white/35 transition hover:border-white/35 focus:border-[color:var(--gold)] focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]/30"
              placeholder="Share your timeline, preferred province, or questions…"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-white px-5 py-3 text-sm font-semibold text-[color:var(--ink)] transition hover:bg-[color:var(--mist)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:w-auto"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
