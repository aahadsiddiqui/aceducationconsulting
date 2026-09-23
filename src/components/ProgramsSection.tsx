import {
  getProgramsByCategory,
  PROVINCES,
  type ProgramCategory,
} from "@/lib/courseData";

const categoryOrder: ProgramCategory[] = [
  "Health & Allied Care",
  "Business & Administration",
  "Community & Human Services",
  "Dental & Clinical Support",
  "Technology",
  "Justice & Public Safety",
];

export default function ProgramsSection() {
  const byCategory = getProgramsByCategory();

  return (
    <section
      id="programs"
      className="bg-[color:var(--bg-soft)] text-white"
      aria-labelledby="programs-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/50">
            Programs
          </p>
          <h2
            id="programs-heading"
            className="mt-3 font-[family-name:var(--font-display)] text-3xl sm:text-4xl"
          >
            Career-focused diplomas and certificates we advise on
          </h2>
          <p className="mt-3 text-white/65 leading-relaxed">
            Browse fields of study below, then use the directory to compare how
            each program is framed across Canadian provinces.
          </p>
        </div>

        <div className="mt-14 space-y-12">
          {categoryOrder.map((category) => (
            <div key={category}>
              <h3 className="border-b border-white/15 pb-3 text-sm font-semibold uppercase tracking-[0.12em] text-white/50">
                {category}
              </h3>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {byCategory[category]?.map((program) => (
                  <li key={program.id} className="group">
                    <p className="font-semibold text-white transition-colors group-hover:text-white/80">
                      {program.name}
                    </p>
                    <p className="mt-1 text-sm text-white/45">
                      {program.credential} · {program.duration}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      {program.summary}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/15 pt-12">
          <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl">
            Ten provinces. Distinct opportunity landscapes.
          </h3>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {PROVINCES.map((province) => (
              <li key={province.id}>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/45">
                  {province.shortName}
                </p>
                <p className="mt-1 font-semibold">{province.name}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                  {province.highlight}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
