"use client";

import { useState } from "react";
import {
  PROGRAM_FIELDS,
  PROVINCES,
  getProgramsByCategory,
  type ProgramField,
  type ProvinceId,
} from "@/lib/courseData";
import { requestDirectory } from "@/lib/directorySelection";
import { site } from "@/lib/siteContent";

export default function ProgramsSection() {
  const byCategory = getProgramsByCategory();
  const [field, setField] = useState<ProgramField | "all">("all");

  const fields = PROGRAM_FIELDS.filter((category) => (byCategory[category]?.length ?? 0) > 0);
  const visibleFields = field === "all" ? fields : fields.filter((category) => category === field);

  return (
    <section
      id="programs"
      className="scroll-mt-24 bg-[color:var(--bg-soft)] text-white"
      aria-labelledby="programs-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/50">
            Programs
          </p>
          <h2
            id="programs-heading"
            className="mt-3 font-[family-name:var(--font-display)] text-3xl sm:text-4xl"
          >
            Career-focused programs at private colleges
          </h2>
          <p className="mt-3 text-white/65 leading-relaxed">
            Private-college diplomas and certificates across Canada, grouped by
            field. Once a program is completed, the college presents a diploma or
            a certificate. Length varies from 1 to 4 years. {site.disclaimer}
          </p>
        </div>

        <div
          className="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
          role="group"
          aria-label="Filter programs by field"
        >
          <FilterChip
            pressed={field === "all"}
            onClick={() => setField("all")}
          >
            All fields
          </FilterChip>
          {fields.map((category) => (
            <FilterChip
              key={category}
              pressed={field === category}
              onClick={() => setField(category)}
            >
              {category}
            </FilterChip>
          ))}
        </div>

        <div className="mt-8 space-y-10">
          {visibleFields.map((category) => (
            <div key={category}>
              <h3 className="border-b border-white/15 pb-3 text-sm font-semibold uppercase tracking-[0.12em] text-white/50">
                {category}
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {byCategory[category]?.map((program) => (
                  <li key={program.id}>
                    <button
                      type="button"
                      onClick={() =>
                        requestDirectory({
                          field: program.category,
                          programId: program.id,
                        })
                      }
                      className="flex h-full w-full flex-col rounded-xl border border-white/10 bg-white/[0.03] p-4 text-left transition hover:border-white/30 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                    >
                      <span className="font-semibold text-white">{program.name}</span>
                      <span className="mt-1 text-sm text-white/45">
                        {program.credential} · {program.duration}
                      </span>
                      <span className="mt-2 text-sm leading-relaxed text-white/65">
                        {program.summary}
                      </span>
                      <span className="mt-3 text-sm font-medium text-white/80">
                        View by province
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/15 pt-12">
          <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl">
            Study across Canada’s provinces
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-white/55">
            Tap a province to open its program directory and the student aid
            system that typically applies.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {PROVINCES.map((province) => (
              <li key={province.id}>
                <button
                  type="button"
                  onClick={() =>
                    requestDirectory({ provinceId: province.id as ProvinceId })
                  }
                  className="flex h-full w-full flex-col rounded-xl border border-white/10 bg-black/20 p-4 text-left transition hover:border-white/30 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/45">
                    {province.shortName}
                  </span>
                  <span className="mt-1 font-semibold">{province.name}</span>
                  <span className="mt-1.5 text-sm leading-relaxed text-white/55">
                    {province.highlight}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FilterChip({
  pressed,
  onClick,
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`shrink-0 snap-start rounded-full border px-3.5 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
        pressed
          ? "border-white bg-white text-black"
          : "border-white/20 text-white/80 hover:border-white/40 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}
