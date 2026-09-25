/**
 * Career-focused college program directory by province.
 * Master’s degrees are not offered. AC Education Consulting advises on
 * private-college programs and is not affiliated with any institution.
 */

export type ProvinceId =
  | "alberta"
  | "british-columbia"
  | "manitoba"
  | "new-brunswick"
  | "newfoundland-and-labrador"
  | "nova-scotia"
  | "ontario"
  | "prince-edward-island"
  | "quebec"
  | "saskatchewan";

export type ProgramId =
  | "graduate-certificate-business"
  | "graduate-certificate-health"
  | "graduate-certificate-it";

export type ProgramCategory =
  | "Business & Management"
  | "Health & Social Care"
  | "Education & Counselling"
  | "Technology & Engineering"
  | "Public Policy & Arts"
  | "Career-focused programs";

export interface CourseDetails {
  title: string;
  description: string;
  breakdown: string[];
}

export interface Province {
  id: ProvinceId;
  name: string;
  shortName: string;
  studentAid: string;
  highlight: string;
}

export interface Program {
  id: ProgramId;
  name: string;
  category: ProgramCategory;
  duration: string;
  credential: string;
  summary: string;
}

interface ProvinceContext {
  studentAid: string;
  labourFocus: string;
  institutionNote: string;
}

interface ProgramTemplate {
  focus: string;
  outcomes: string;
  modules: [string, string, string, string];
  capstone: string;
}

export const PROVINCES: readonly Province[] = [
  {
    id: "alberta",
    name: "Alberta",
    shortName: "AB",
    studentAid: "Alberta Student Aid",
    highlight: "Career-focused college programs with Alberta Student Aid for eligible domestic students.",
  },
  {
    id: "british-columbia",
    name: "British Columbia",
    shortName: "BC",
    studentAid: "StudentAid BC",
    highlight: "Career-focused college programs with StudentAid BC support where eligible.",
  },
  {
    id: "manitoba",
    name: "Manitoba",
    shortName: "MB",
    studentAid: "Manitoba Student Aid",
    highlight: "Career-focused college programs with Manitoba Student Aid for qualifying students.",
  },
  {
    id: "new-brunswick",
    name: "New Brunswick",
    shortName: "NB",
    studentAid: "New Brunswick Student Financial Services",
    highlight: "Career-focused college programs with provincial student financial services guidance.",
  },
  {
    id: "newfoundland-and-labrador",
    name: "Newfoundland and Labrador",
    shortName: "NL",
    studentAid: "StudentAid NL",
    highlight: "Career-focused college programs with StudentAid NL for eligible applicants.",
  },
  {
    id: "nova-scotia",
    name: "Nova Scotia",
    shortName: "NS",
    studentAid: "Nova Scotia Student Assistance",
    highlight: "Career-focused college programs with Nova Scotia Student Assistance for domestic learners.",
  },
  {
    id: "ontario",
    name: "Ontario",
    shortName: "ON",
    studentAid: "OSAP (Ontario Student Assistance Program)",
    highlight: "Career-focused private college programs and OSAP guidance for eligible Ontarians.",
  },
  {
    id: "prince-edward-island",
    name: "Prince Edward Island",
    shortName: "PE",
    studentAid: "PEI Student Financial Services",
    highlight: "Career-focused college programs with PEI Student Financial Services for qualifying students.",
  },
  {
    id: "quebec",
    name: "Quebec",
    shortName: "QC",
    studentAid: "Aide financière aux études (AFE)",
    highlight: "Career-focused college programs with Quebec’s AFE system for eligible students.",
  },
  {
    id: "saskatchewan",
    name: "Saskatchewan",
    shortName: "SK",
    studentAid: "Saskatchewan Student Aid",
    highlight: "Career-focused college programs with Saskatchewan Student Aid for eligible domestic students.",
  },
] as const;

const PROVINCE_CONTEXT: Record<ProvinceId, ProvinceContext> = {
  alberta: {
    studentAid: "Alberta Student Aid",
    labourFocus: "energy services, health systems, public sector, and growing tech employers",
    institutionNote: "Alberta colleges offering career-focused programs",
  },
  "british-columbia": {
    studentAid: "StudentAid BC",
    labourFocus: "health, education, technology, and public administration employers",
    institutionNote: "B.C. colleges offering career-focused programs",
  },
  manitoba: {
    studentAid: "Manitoba Student Aid",
    labourFocus: "health care, community services, education, and government roles",
    institutionNote: "Manitoba colleges offering career-focused programs",
  },
  "new-brunswick": {
    studentAid: "New Brunswick Student Financial Services",
    labourFocus: "public services, health, education, and regional professional employers",
    institutionNote: "New Brunswick colleges offering career-focused programs",
  },
  "newfoundland-and-labrador": {
    studentAid: "StudentAid NL",
    labourFocus: "health authorities, education, public service, and applied research roles",
    institutionNote: "Newfoundland and Labrador colleges offering career-focused programs",
  },
  "nova-scotia": {
    studentAid: "Nova Scotia Student Assistance",
    labourFocus: "health, education, ocean-adjacent industries, and public sector employers",
    institutionNote: "Nova Scotia colleges offering career-focused programs",
  },
  ontario: {
    studentAid: "OSAP",
    labourFocus: "GTA and regional employers across health, business, tech, and public services",
    institutionNote: "Accredited private colleges in Ontario offering career-focused programs",
  },
  "prince-edward-island": {
    studentAid: "PEI Student Financial Services",
    labourFocus: "health, education, public service, and community professional roles",
    institutionNote: "P.E.I. colleges offering career-focused programs",
  },
  quebec: {
    studentAid: "Aide financière aux études (AFE)",
    labourFocus: "Montreal and regional employers in health, education, tech, and administration",
    institutionNote: "Quebec colleges offering career-focused programs",
  },
  saskatchewan: {
    studentAid: "Saskatchewan Student Aid",
    labourFocus: "health, education, agriculture-support professions, and public sector roles",
    institutionNote: "Saskatchewan colleges offering career-focused programs",
  },
};

const PROGRAM_TEMPLATES: Record<ProgramId, ProgramTemplate> = {
  "graduate-certificate-business": {
    focus: "career-focused business training at a private college",
    outcomes: "applied management skills for career advancement or pivot",
    modules: [
      "Business fundamentals for career-focused study",
      "Applied marketing or operations specialization",
      "Workplace analytics and digital tools",
      "Professional communication and career readiness",
    ],
    capstone: "Industry project or work-integrated learning term",
  },
  "graduate-certificate-health": {
    focus: "career-focused health training at a private college",
    outcomes: "applied clinical-adjacent or health administration skills",
    modules: [
      "Health systems and professional practice",
      "Specialization coursework (clinical support or admin)",
      "Quality, safety, and documentation standards",
      "Interprofessional collaboration",
    ],
    capstone: "Practicum or applied health project",
  },
  "graduate-certificate-it": {
    focus: "career-focused information technology training at a private college",
    outcomes: "hands-on technical skills for cybersecurity, cloud, or development tracks",
    modules: [
      "Technical foundations for career changers/advancers",
      "Specialization labs (cloud, security, or development)",
      "IT service and project workflows",
      "Portfolio development",
    ],
    capstone: "Capstone build or industry placement",
  },
};

export const PROGRAMS: readonly Program[] = [
  {
    id: "graduate-certificate-business",
    name: "Business",
    category: "Career-focused programs",
    duration: "Typically 8–12 months",
    credential: "College certificate",
    summary: "Career-focused business training at a private college.",
  },
  {
    id: "graduate-certificate-health",
    name: "Health",
    category: "Career-focused programs",
    duration: "Typically 8–12 months",
    credential: "College certificate",
    summary: "Career-focused health training through a private college program.",
  },
  {
    id: "graduate-certificate-it",
    name: "Information Technology",
    category: "Career-focused programs",
    duration: "Typically 8–12 months",
    credential: "College certificate",
    summary: "Career-focused IT training at a private college.",
  },
] as const;

function buildCourseDetails(
  provinceId: ProvinceId,
  programId: ProgramId,
): CourseDetails {
  const province = PROVINCES.find((p) => p.id === provinceId)!;
  const program = PROGRAMS.find((p) => p.id === programId)!;
  const ctx = PROVINCE_CONTEXT[provinceId];
  const template = PROGRAM_TEMPLATES[programId];

  return {
    title: `${program.name} — ${province.name}`,
    description: `Explore ${template.focus} through ${ctx.institutionNote}. Typical outcomes include ${template.outcomes}. Eligible Canadian citizens, permanent residents, and refugees/protected persons may apply for support through ${ctx.studentAid}. Graduates often look toward opportunities among ${ctx.labourFocus}. AC Education Consulting can help you compare options and plan funding—we are not affiliated with any college or university.`,
    breakdown: [
      `Coursework focus: ${template.modules[0]}`,
      `Coursework focus: ${template.modules[1]}`,
      `Coursework focus: ${template.modules[2]}`,
      `Coursework focus: ${template.modules[3]}`,
      `Culminating experience: ${template.capstone}`,
      `Credential: ${program.credential} · ${program.duration}`,
      `Student aid to explore: ${province.studentAid}`,
    ],
  };
}

export const courseDirectory: Record<
  ProvinceId,
  Record<ProgramId, CourseDetails>
> = PROVINCES.reduce(
  (acc, province) => {
    acc[province.id] = PROGRAMS.reduce(
      (programs, program) => {
        programs[program.id] = buildCourseDetails(province.id, program.id);
        return programs;
      },
      {} as Record<ProgramId, CourseDetails>,
    );
    return acc;
  },
  {} as Record<ProvinceId, Record<ProgramId, CourseDetails>>,
);

export function getCourseDetails(
  provinceId: ProvinceId | "",
  programId: ProgramId | "",
): CourseDetails | null {
  if (!provinceId || !programId) return null;
  return courseDirectory[provinceId]?.[programId] ?? null;
}

export function getProgramsByCategory(): Record<ProgramCategory, Program[]> {
  return PROGRAMS.reduce(
    (acc, program) => {
      if (!acc[program.category]) acc[program.category] = [];
      acc[program.category].push(program);
      return acc;
    },
    {} as Record<ProgramCategory, Program[]>,
  );
}

export const PROGRAM_COUNT = PROGRAMS.length;
export const PROVINCE_COUNT = PROVINCES.length;
