"use client";

import { useId, useState } from "react";
import {
  PROVINCES,
  PROGRAMS,
  getCourseDetails,
  type ProvinceId,
  type ProgramId,
} from "@/lib/courseData";

export default function CourseDirectorySelector() {
  const provinceSelectId = useId();
  const programSelectId = useId();

  const [provinceId, setProvinceId] = useState<ProvinceId | "">("");
  const [programId, setProgramId] = useState<ProgramId | "">("");

  const course = getCourseDetails(provinceId, programId);
  const showProgramSelect = provinceId !== "";
  const showDetails = Boolean(course);

  function handleProvinceChange(value: string) {
    setProvinceId(value as ProvinceId | "");
    setProgramId("");
  }

  function handleProgramChange(value: string) {
    setProgramId(value as ProgramId | "");
  }

  return (
    <section
      id="directory"
      className="border-y border-[color:var(--line)] bg-[color:var(--bg)]"
      aria-labelledby="course-directory-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/50">
            Program directory
          </p>
          <h2
            id="course-directory-heading"
            className="mt-3 font-[family-name:var(--font-display)] text-3xl text-white sm:text-4xl"
          >
            Compare master’s programs by province
          </h2>
          <p className="mt-3 text-[color:var(--muted)] leading-relaxed">
            Select a province and a graduate program to see a plain-language
            overview, typical coursework focus, and the student aid system to
            explore. Independent advice only—not an official school listing.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-xl">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5 text-left">
              <label
                htmlFor={provinceSelectId}
                className="text-sm font-medium text-white"
              >
                Province
              </label>
              <select
                id={provinceSelectId}
                value={provinceId}
                onChange={(e) => handleProvinceChange(e.target.value)}
                className="w-full cursor-pointer appearance-none rounded-lg border border-[color:var(--line)] bg-[color:var(--bg-elevated)] px-3.5 py-2.5 text-white shadow-sm transition
                  hover:border-white/30
                  focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/25"
              >
                <option value="">Select a province…</option>
                {PROVINCES.map((province) => (
                  <option key={province.id} value={province.id}>
                    {province.name}
                  </option>
                ))}
              </select>
            </div>

            {showProgramSelect && (
              <div
                className="flex flex-col gap-1.5 text-left animate-fade-in"
                key={provinceId}
              >
                <label
                  htmlFor={programSelectId}
                  className="text-sm font-medium text-white"
                >
                  Master’s / graduate program
                </label>
                <select
                  id={programSelectId}
                  value={programId}
                  onChange={(e) => handleProgramChange(e.target.value)}
                  className="w-full cursor-pointer appearance-none rounded-lg border border-[color:var(--line)] bg-[color:var(--bg-elevated)] px-3.5 py-2.5 text-white shadow-sm transition
                    hover:border-white/30
                    focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/25"
                >
                  <option value="">Select a program…</option>
                  {PROGRAMS.map((program) => (
                    <option key={program.id} value={program.id}>
                      {program.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {showDetails && course && (
            <article
              key={`${provinceId}-${programId}`}
              className="mt-8 rounded-xl border border-[color:var(--line)] bg-[color:var(--bg-elevated)] p-5 text-left sm:p-7 animate-fade-in"
              aria-live="polite"
            >
              <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                {course.title}
              </h3>

              <div className="mt-5">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-white/50">
                  Program Description
                </h4>
                <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--muted)] sm:text-base">
                  {course.description}
                </p>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-white/50">
                  Program Breakdown
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {course.breakdown.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[15px] leading-relaxed text-[color:var(--muted)] sm:text-base"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
