"use client";

import { useEffect, useId, useState } from "react";
import {
  PROGRAM_COUNT,
  PROGRAM_FIELDS,
  PROVINCES,
  getCourseDetails,
  getProgramsByField,
  type ProgramField,
  type ProgramId,
  type ProvinceId,
} from "@/lib/courseData";
import {
  DIRECTORY_EVENT,
  requestConsult,
  type DirectoryRequest,
} from "@/lib/directorySelection";

const selectClassName =
  "field-select min-h-12 w-full cursor-pointer appearance-none rounded-lg border border-[color:var(--line)] bg-[color:var(--bg-elevated)] px-3.5 py-3 text-base text-white shadow-sm transition hover:border-white/30 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/25 disabled:cursor-not-allowed disabled:opacity-45";

export default function CourseDirectorySelector() {
  const provinceSelectId = useId();
  const fieldSelectId = useId();
  const programSelectId = useId();

  const [provinceId, setProvinceId] = useState<ProvinceId | "">("");
  const [field, setField] = useState<ProgramField | "">("");
  const [programId, setProgramId] = useState<ProgramId | "">("");

  const programs = getProgramsByField(field);
  const course = getCourseDetails(provinceId, programId);
  const provinceName = PROVINCES.find((province) => province.id === provinceId)?.name;

  useEffect(() => {
    function onRequest(event: Event) {
      const detail = (event as CustomEvent<DirectoryRequest>).detail;
      if (!detail) return;
      if (detail.provinceId) setProvinceId(detail.provinceId);
      if (detail.field) setField(detail.field);
      if (detail.programId) setProgramId(detail.programId);
      if (detail.programId && !detail.provinceId) {
        window.setTimeout(() => {
          document.getElementById(provinceSelectId)?.focus();
        }, 350);
      }
    }

    window.addEventListener(DIRECTORY_EVENT, onRequest);
    return () => window.removeEventListener(DIRECTORY_EVENT, onRequest);
  }, [provinceSelectId]);

  function handleProvinceChange(value: string) {
    setProvinceId(value as ProvinceId | "");
  }

  function handleFieldChange(value: string) {
    setField(value as ProgramField | "");
    setProgramId("");
  }

  function handleProgramChange(value: string) {
    setProgramId(value as ProgramId | "");
  }

  return (
    <section
      id="directory"
      className="scroll-mt-24 border-y border-[color:var(--line)] bg-[color:var(--bg)]"
      aria-labelledby="course-directory-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/50">
            Program directory
          </p>
          <h2
            id="course-directory-heading"
            className="mt-3 font-[family-name:var(--font-display)] text-3xl text-white sm:text-4xl"
          >
            Private-college programs by province
          </h2>
          <p className="mt-3 text-[color:var(--muted)] leading-relaxed">
            Choose a province, a field, then a program. All {PROGRAM_COUNT}{" "}
            diplomas and certificates are available in every province, each with
            its own description and breakdown. Once completed, the college
            presents a diploma or a certificate. Length varies from 1 to 4 years.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor={provinceSelectId} className="text-sm font-medium text-white">
              1. Province
            </label>
            <select
              id={provinceSelectId}
              value={provinceId}
              onChange={(event) => handleProvinceChange(event.target.value)}
              className={selectClassName}
            >
              <option value="">Select a province…</option>
              {PROVINCES.map((province) => (
                <option key={province.id} value={province.id}>
                  {province.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor={fieldSelectId} className="text-sm font-medium text-white">
              2. Field
            </label>
            <select
              id={fieldSelectId}
              value={field}
              onChange={(event) => handleFieldChange(event.target.value)}
              className={selectClassName}
            >
              <option value="">Filter by field…</option>
              {PROGRAM_FIELDS.map((programField) => (
                <option key={programField} value={programField}>
                  {programField}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor={programSelectId} className="text-sm font-medium text-white">
              3. Program
            </label>
            <select
              id={programSelectId}
              value={programId}
              disabled={field === ""}
              onChange={(event) => handleProgramChange(event.target.value)}
              className={selectClassName}
            >
              <option value="">
                {field ? "Select a program…" : "Choose a field first…"}
              </option>
              {programs.map((program) => (
                <option key={program.id} value={program.id}>
                  {program.name} ({program.credential})
                </option>
              ))}
            </select>
          </div>
        </div>

        {field !== "" && programId === "" && (
          <p className="mt-4 text-sm text-white/55">
            {programs.length} {programs.length === 1 ? "program" : "programs"} in {field}
            {provinceName ? ` for ${provinceName}` : ""}.
          </p>
        )}

        {course ? (
          <article
            key={`${provinceId}-${programId}`}
            className="mt-6 rounded-xl border border-[color:var(--line)] bg-[color:var(--bg-elevated)] p-5 text-left sm:p-7 animate-fade-in"
            aria-live="polite"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
              {course.field}
            </p>
            <h3 className="mt-2 text-xl font-semibold leading-snug text-white sm:text-2xl">
              {course.title}
            </h3>
            <p className="mt-3 text-sm font-medium text-white sm:text-base">
              Once completed, the college presents a {course.credential.toLowerCase()}.
            </p>
            <p className="mt-1 text-sm text-white/55">
              Length varies from {course.duration}, depending on the college.
            </p>

            <div className="mt-5">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-white/50">
                Program description
              </h4>
              <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--muted)] sm:text-base">
                {course.description}
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-white/50">
                Program breakdown
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
                    <span className="min-w-0">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={() => requestConsult(course.title)}
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:w-auto"
            >
              Ask about this program
            </button>
          </article>
        ) : (
          <p className="mt-6 rounded-xl border border-dashed border-white/15 px-4 py-5 text-sm leading-relaxed text-white/55 sm:px-5">
            {provinceId
              ? "Choose a field, then a program, to see the description and breakdown for that province."
              : "Start with your province. You can also open a program from the list above, then pick a province here."}
          </p>
        )}
      </div>
    </section>
  );
}
