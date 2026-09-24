import { faqs, testimonials } from "@/lib/siteContent";

export default function SocialProofSection() {
  return (
    <>
      <section
        className="bg-[color:var(--bg)]"
        aria-labelledby="stories-heading"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2
            id="stories-heading"
            className="font-[family-name:var(--font-display)] text-3xl text-white sm:text-4xl"
          >
            What clients say
          </h2>
          <ul className="mt-10 grid gap-8 lg:grid-cols-3">
            {testimonials.map((item) => (
              <li
                key={item.name}
                className="border-t border-[color:var(--line)] pt-6"
              >
                <blockquote className="text-[15px] leading-relaxed text-white/90">
                  “{item.quote}”
                </blockquote>
                <p className="mt-4 text-sm font-semibold text-white">
                  {item.name}
                </p>
                <p className="text-sm text-[color:var(--muted)]">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="faq"
        className="border-t border-[color:var(--line)] bg-[color:var(--bg-elevated)]"
        aria-labelledby="faq-heading"
      >
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <h2
            id="faq-heading"
            className="font-[family-name:var(--font-display)] text-3xl text-white sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <div className="mt-10 divide-y divide-[color:var(--line)]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 rounded-sm font-semibold text-white outline-none marker:content-none focus-visible:ring-2 focus-visible:ring-white/30">
                  <span>{faq.question}</span>
                  <span
                    aria-hidden
                    className="mt-0.5 text-white/50 transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 pr-8 text-[15px] leading-relaxed text-[color:var(--muted)]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
