import Image from "next/image";
import { services, site, whoWeServe } from "@/lib/siteContent";

export default function ServicesSection() {
  return (
    <>
      <section
        id="about"
        className="border-b border-[color:var(--line)] bg-[color:var(--bg)]"
        aria-labelledby="about-heading"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-14 lg:px-8 lg:py-24">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/50">
              Who we serve
            </p>
            <h2
              id="about-heading"
              className="mt-3 font-[family-name:var(--font-display)] text-3xl leading-tight text-white sm:text-4xl"
            >
              Built for people already building a life in Canada
            </h2>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-lg lg:mt-10">
              <Image
                src="/images/study-session.jpg"
                alt="Advisor and student collaborating during a study session"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-[color:var(--muted)]">
              AC Education Consulting helps Canadian citizens, permanent
              residents, and refugees choose the right master’s or graduate-level
              program at a community college or university—then navigate
              government grants and student loans, and plan careers after
              successfully completing the course.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/45">
              {site.disclaimer}
            </p>
            <ul className="mt-10 space-y-6">
              {whoWeServe.map((item) => (
                <li key={item.title} className="border-t border-[color:var(--line)] pt-5">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--muted)]">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="bg-[color:var(--bg-elevated)]"
        aria-labelledby="services-heading"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/50">
              Services
            </p>
            <h2
              id="services-heading"
              className="mt-3 font-[family-name:var(--font-display)] text-3xl text-white sm:text-4xl"
            >
              From the right program to funding—and a career after you pass
            </h2>
            <p className="mt-3 text-[color:var(--muted)] leading-relaxed">
              No visa assistance. No overseas recruitment. Focused support for
              domestic and eligible refugee clients in Canada.
            </p>
          </div>

          <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.title}>
                <h3 className="text-lg font-semibold text-white">
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
    </>
  );
}
