import type { ProgramField, ProgramId, ProvinceId } from "@/lib/courseData";

export const DIRECTORY_EVENT = "ace-directory";
export const INTEREST_EVENT = "ace-interest";

export interface DirectoryRequest {
  provinceId?: ProvinceId;
  field?: ProgramField;
  programId?: ProgramId;
}

export function requestDirectory(detail: DirectoryRequest) {
  window.dispatchEvent(new CustomEvent<DirectoryRequest>(DIRECTORY_EVENT, { detail }));
  document.getElementById("directory")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function requestConsult(interest: string) {
  window.dispatchEvent(new CustomEvent<string>(INTEREST_EVENT, { detail: interest }));
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
}
