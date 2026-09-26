"use client";

import { fundingHighlights } from "@/lib/siteContent";
import { PROVINCES, type ProvinceId } from "@/lib/courseData";
import { requestDirectory } from "@/lib/directorySelection";

export default function FundingSection() {
  return (
    <section
      id="funding"
      className="scroll-mt-24 border-y border-[color:var(--line)] bg-[color:var(--bg)]"
      aria-labelledby="funding-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/50">
            Government funding
          </p>
          <h2
            id="funding-heading"
            className="mt-3 font-[family-name:var(--font-display)] text-3xl text-white sm:text-4xl"
          >
            Grants and loans through OSAP and provincial student aid
          </h2>
          <p className="mt-3 text-[color:var(--muted)] leading-relaxed">
            We help eligible Ontario residents understand OSAP and apply for
            funding that can support career-focused college programs.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {fundingHighlights.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-[color:var(--line)] bg-[color:var(--bg-elevated)] p-5"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--muted)]">
                {item.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-14">
          <h3 className="font-[family-name:var(--font-display)] text-2xl text-white sm:text-3xl">
            Student assistance by province
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-[color:var(--muted)]">
            Tap a province to open programs for that region. Official decisions
            are always made by the government aid office.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {PROVINCES.map((province) => (
              <li key={province.id}>
                <button
                  type="button"
                  onClick={() =>
                    requestDirectory({ provinceId: province.id as ProvinceId })
                  }
                  className="flex h-full w-full flex-col rounded-xl border border-[color:var(--line)] p-4 text-left transition hover:border-white/30 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/45">
                    {province.shortName}
                  </span>
                  <span className="mt-1 font-semibold text-white">{province.name}</span>
                  <span className="mt-1 text-sm leading-relaxed text-white/55">
                    {province.studentAid}
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
