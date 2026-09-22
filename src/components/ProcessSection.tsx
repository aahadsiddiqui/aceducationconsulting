import { processSteps } from "@/lib/siteContent";

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="bg-[color:var(--snow)]"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--pine)]">
            Process
          </p>
          <h2
            id="process-heading"
            className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[color:var(--ink)] sm:text-4xl"
          >
            A clear four-stage journey
          </h2>
          <p className="mt-3 text-[color:var(--muted)] leading-relaxed">
            Structured guidance from first conversation to your first week on
            campus.
          </p>
        </div>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item) => (
            <li key={item.step} className="relative">
              <span className="font-[family-name:var(--font-display)] text-4xl text-[color:var(--pine)]/30">
                {item.step}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-[color:var(--ink)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)] sm:text-[15px]">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
