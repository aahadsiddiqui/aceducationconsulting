import { faqs, testimonials } from "@/lib/siteContent";

export default function SocialProofSection() {
  return (
    <>
      <section
        className="bg-[color:var(--mist)]"
        aria-labelledby="stories-heading"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2
            id="stories-heading"
            className="font-[family-name:var(--font-display)] text-3xl text-[color:var(--ink)] sm:text-4xl"
          >
            Stories from students and sponsors
          </h2>
          <ul className="mt-10 grid gap-8 lg:grid-cols-3">
            {testimonials.map((item) => (
              <li
                key={item.name}
                className="border-t border-[color:var(--line)] pt-6"
              >
                <blockquote className="text-[15px] leading-relaxed text-[color:var(--ink)]">
                  “{item.quote}”
                </blockquote>
                <p className="mt-4 text-sm font-semibold text-[color:var(--ink)]">
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
        className="border-t border-[color:var(--line)] bg-[color:var(--snow)]"
        aria-labelledby="faq-heading"
      >
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <h2
            id="faq-heading"
            className="font-[family-name:var(--font-display)] text-3xl text-[color:var(--ink)] sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <div className="mt-10 divide-y divide-[color:var(--line)]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="cursor-pointer list-none font-semibold text-[color:var(--ink)] outline-none marker:content-none focus-visible:ring-2 focus-visible:ring-[color:var(--pine)]/40 rounded-sm flex items-start justify-between gap-4">
                  <span>{faq.question}</span>
                  <span
                    aria-hidden
                    className="mt-0.5 text-[color:var(--pine)] transition group-open:rotate-45"
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
