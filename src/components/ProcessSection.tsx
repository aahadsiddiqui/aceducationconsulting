import Image from "next/image";
import { processSteps } from "@/lib/siteContent";

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="scroll-mt-24 bg-[color:var(--bg-elevated)]"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/50">
              Process
            </p>
            <h2
              id="process-heading"
              className="mt-3 font-[family-name:var(--font-display)] text-3xl text-white sm:text-4xl"
            >
              How we work with you
            </h2>
            <p className="mt-3 text-[color:var(--muted)] leading-relaxed">
              From first consult to career support after you successfully
              complete your program.
            </p>

            <ol className="mt-8 grid gap-3 sm:grid-cols-2">
              {processSteps.map((item) => (
                <li
                  key={item.step}
                  className="rounded-xl border border-white/10 bg-black/25 p-4"
                >
                  <span className="font-[family-name:var(--font-display)] text-3xl text-white/25">
                    {item.step}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)] sm:text-[15px]">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-lg sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/application-desk.jpg"
              alt="Student reviewing application and funding documents at a desk"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
