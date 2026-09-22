import { services, whyCanada } from "@/lib/siteContent";
import {
  COMBINATION_COUNT,
  PROGRAM_COUNT,
  PROVINCE_COUNT,
} from "@/lib/courseData";

export default function ServicesSection() {
  return (
    <>
      <section
        id="about"
        className="border-b border-[color:var(--line)] bg-[color:var(--snow)]"
        aria-labelledby="about-heading"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-14 lg:px-8 lg:py-24">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--pine)]">
                Why Ace Education
            </p>
            <h2
              id="about-heading"
              className="mt-3 font-[family-name:var(--font-display)] text-3xl leading-tight text-[color:var(--ink)] sm:text-4xl"
            >
              Education consulting built around Canadian college pathways
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-[color:var(--muted)]">
              Ace Education Consulting helps students and sponsors make clear study choices
              in Canada—selecting the right diploma or certificate, in the right
              province, with application and arrival support that stays with you
              beyond the offer letter.
            </p>
            <dl className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <dt className="text-xs uppercase tracking-wide text-[color:var(--muted)]">
                  Provinces
                </dt>
                <dd className="mt-1 font-[family-name:var(--font-display)] text-3xl text-[color:var(--ink)] sm:text-4xl">
                  {PROVINCE_COUNT}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-[color:var(--muted)]">
                  Programs
                </dt>
                <dd className="mt-1 font-[family-name:var(--font-display)] text-3xl text-[color:var(--ink)] sm:text-4xl">
                  {PROGRAM_COUNT}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-[color:var(--muted)]">
                  Pathways
                </dt>
                <dd className="mt-1 font-[family-name:var(--font-display)] text-3xl text-[color:var(--ink)] sm:text-4xl">
                  {COMBINATION_COUNT}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="bg-[color:var(--mist)]"
        aria-labelledby="services-heading"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--pine)]">
              Services
            </p>
            <h2
              id="services-heading"
              className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[color:var(--ink)] sm:text-4xl"
            >
              Support from first shortlist to campus arrival
            </h2>
            <p className="mt-3 text-[color:var(--muted)] leading-relaxed">
              One partner for matching, applications, permits, housing, and
              ongoing mentorship.
            </p>
          </div>

          <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.title}>
                <h3 className="text-lg font-semibold text-[color:var(--ink)]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)] sm:text-[15px]">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="border-y border-[color:var(--line)] bg-[color:var(--snow)]"
        aria-labelledby="why-canada-heading"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2
            id="why-canada-heading"
            className="font-[family-name:var(--font-display)] text-3xl text-[color:var(--ink)] sm:text-4xl"
          >
            Why study in Canada
          </h2>
          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {whyCanada.map((item) => (
              <li key={item.title} className="border-t border-[color:var(--line)] pt-5">
                <h3 className="text-lg font-semibold text-[color:var(--ink)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--muted)]">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
