/**
 * Graduate / master’s program directory by province.
 * AC Education Consulting is not affiliated with any college or university.
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
  | "mba"
  | "master-of-education"
  | "master-of-social-work"
  | "master-of-public-health"
  | "master-of-nursing"
  | "master-of-computer-science"
  | "master-of-engineering"
  | "master-of-public-administration"
  | "master-of-arts"
  | "master-of-science"
  | "master-of-finance"
  | "graduate-certificate-business"
  | "graduate-certificate-health"
  | "graduate-certificate-it"
  | "master-of-counselling"
  | "master-of-data-science";

export type ProgramCategory =
  | "Business & Management"
  | "Health & Social Care"
  | "Education & Counselling"
  | "Technology & Engineering"
  | "Public Policy & Arts"
  | "College Graduate Certificates";

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
    highlight: "Graduate study options with Alberta Student Aid for eligible domestic students.",
  },
  {
    id: "british-columbia",
    name: "British Columbia",
    shortName: "BC",
    studentAid: "StudentAid BC",
    highlight: "University and college graduate programs with StudentAid BC support where eligible.",
  },
  {
    id: "manitoba",
    name: "Manitoba",
    shortName: "MB",
    studentAid: "Manitoba Student Aid",
    highlight: "Master’s and graduate options with Manitoba Student Aid for qualifying students.",
  },
  {
    id: "new-brunswick",
    name: "New Brunswick",
    shortName: "NB",
    studentAid: "New Brunswick Student Financial Services",
    highlight: "Graduate credentials with provincial student financial services guidance.",
  },
  {
    id: "newfoundland-and-labrador",
    name: "Newfoundland and Labrador",
    shortName: "NL",
    studentAid: "StudentAid NL",
    highlight: "University and college graduate study with StudentAid NL for eligible applicants.",
  },
  {
    id: "nova-scotia",
    name: "Nova Scotia",
    shortName: "NS",
    studentAid: "Nova Scotia Student Assistance",
    highlight: "Master’s programs with Nova Scotia Student Assistance for domestic learners.",
  },
  {
    id: "ontario",
    name: "Ontario",
    shortName: "ON",
    studentAid: "OSAP (Ontario Student Assistance Program)",
    highlight: "Broad master’s and graduate-certificate options; OSAP for eligible Ontarians.",
  },
  {
    id: "prince-edward-island",
    name: "Prince Edward Island",
    shortName: "PE",
    studentAid: "PEI Student Financial Services",
    highlight: "Graduate study with PEI Student Financial Services for qualifying students.",
  },
  {
    id: "quebec",
    name: "Quebec",
    shortName: "QC",
    studentAid: "Aide financière aux études (AFE)",
    highlight: "University master’s programs with Quebec’s AFE system for eligible students.",
  },
  {
    id: "saskatchewan",
    name: "Saskatchewan",
    shortName: "SK",
    studentAid: "Saskatchewan Student Aid",
    highlight: "Graduate programs with Saskatchewan Student Aid for eligible domestic students.",
  },
] as const;

const PROVINCE_CONTEXT: Record<ProvinceId, ProvinceContext> = {
  alberta: {
    studentAid: "Alberta Student Aid",
    labourFocus: "energy services, health systems, public sector, and growing tech employers",
    institutionNote: "Alberta universities and colleges offering master’s or graduate-level study",
  },
  "british-columbia": {
    studentAid: "StudentAid BC",
    labourFocus: "health, education, technology, and public administration employers",
    institutionNote: "B.C. universities and colleges with graduate and post-degree options",
  },
  manitoba: {
    studentAid: "Manitoba Student Aid",
    labourFocus: "health care, community services, education, and government roles",
    institutionNote: "Manitoba universities and colleges with graduate-level offerings",
  },
  "new-brunswick": {
    studentAid: "New Brunswick Student Financial Services",
    labourFocus: "public services, health, education, and regional professional employers",
    institutionNote: "New Brunswick universities and colleges with graduate credentials",
  },
  "newfoundland-and-labrador": {
    studentAid: "StudentAid NL",
    labourFocus: "health authorities, education, public service, and applied research roles",
    institutionNote: "Newfoundland and Labrador universities and colleges with graduate study",
  },
  "nova-scotia": {
    studentAid: "Nova Scotia Student Assistance",
    labourFocus: "health, education, ocean-adjacent industries, and public sector employers",
    institutionNote: "Nova Scotia universities and colleges offering master’s or graduate study",
  },
  ontario: {
    studentAid: "OSAP",
    labourFocus: "GTA and regional employers across health, business, tech, and public services",
    institutionNote: "Ontario universities and colleges with master’s and graduate certificates",
  },
  "prince-edward-island": {
    studentAid: "PEI Student Financial Services",
    labourFocus: "health, education, public service, and community professional roles",
    institutionNote: "P.E.I. universities and colleges with graduate-level programs",
  },
  quebec: {
    studentAid: "Aide financière aux études (AFE)",
    labourFocus: "Montreal and regional employers in health, education, tech, and administration",
    institutionNote: "Quebec universities (and eligible college graduate options) for master’s study",
  },
  saskatchewan: {
    studentAid: "Saskatchewan Student Aid",
    labourFocus: "health, education, agriculture-support professions, and public sector roles",
    institutionNote: "Saskatchewan universities and colleges with graduate credentials",
  },
};

const PROGRAM_TEMPLATES: Record<ProgramId, ProgramTemplate> = {
  mba: {
    focus: "advanced business leadership, strategy, and organizational decision-making",
    outcomes: "management analysis, finance literacy, marketing strategy, and leadership practice",
    modules: [
      "Strategy, economics, and managerial accounting",
      "Marketing, operations, and organizational behaviour",
      "Finance, analytics, and digital transformation",
      "Leadership, ethics, and Canadian business context",
    ],
    capstone: "Applied consulting project or integrative strategy capstone",
  },
  "master-of-education": {
    focus: "advanced teaching, learning design, and educational leadership",
    outcomes: "curriculum inquiry, inclusive practice, assessment design, and research literacy",
    modules: [
      "Learning theory and educational research methods",
      "Curriculum design and inclusive pedagogy",
      "Leadership, policy, and school/community contexts",
      "Electives in literacy, technology, or adult learning",
    ],
    capstone: "Major research paper, thesis, or practitioner inquiry project",
  },
  "master-of-social-work": {
    focus: "advanced social work practice with individuals, families, and communities",
    outcomes: "clinical or community practice skills, ethics, policy analysis, and research",
    modules: [
      "Advanced social work theory and ethics",
      "Practice with individuals, families, and groups",
      "Social policy, advocacy, and Indigenous perspectives awareness",
      "Research methods for social work practice",
    ],
    capstone: "Supervised field practicum and integrative seminar",
  },
  "master-of-public-health": {
    focus: "population health, prevention, and health systems improvement",
    outcomes: "epidemiology basics, health promotion, policy analysis, and program evaluation",
    modules: [
      "Epidemiology and biostatistics foundations",
      "Health promotion and community assessment",
      "Health policy, systems, and equity",
      "Program planning and evaluation",
    ],
    capstone: "Practicum or applied public health project",
  },
  "master-of-nursing": {
    focus: "advanced nursing practice, leadership, and evidence-informed care",
    outcomes: "clinical leadership, quality improvement, and advanced nursing scholarship",
    modules: [
      "Advanced nursing practice and pathophysiology review",
      "Leadership, quality, and patient safety",
      "Evidence-informed practice and research methods",
      "Population health and interprofessional collaboration",
    ],
    capstone: "Clinical practicum, MRP, or thesis option",
  },
  "master-of-computer-science": {
    focus: "advanced computing, software systems, and applied research",
    outcomes: "algorithms, systems design, AI/ML awareness, and research communication",
    modules: [
      "Advanced algorithms and software architecture",
      "Systems, networks, or databases depth courses",
      "Machine learning / AI electives",
      "Research methods and professional practice",
    ],
    capstone: "Thesis or major research project",
  },
  "master-of-engineering": {
    focus: "advanced engineering practice and technical leadership",
    outcomes: "specialized technical depth, project leadership, and applied design",
    modules: [
      "Advanced engineering mathematics and methods",
      "Discipline specialization coursework",
      "Project management and professional practice",
      "Technical electives aligned to industry needs",
    ],
    capstone: "Design project or research-based culminating experience",
  },
  "master-of-public-administration": {
    focus: "public sector leadership, policy analysis, and program delivery",
    outcomes: "policy design, public finance awareness, governance, and stakeholder management",
    modules: [
      "Public policy analysis and governance",
      "Public finance and performance management",
      "Leadership, ethics, and intergovernmental relations",
      "Research methods for public administration",
    ],
    capstone: "Policy brief, practicum, or major research paper",
  },
  "master-of-arts": {
    focus: "advanced humanities or social science inquiry",
    outcomes: "critical analysis, research design, scholarly writing, and subject specialization",
    modules: [
      "Disciplinary theory and historiography/methods",
      "Research design and academic writing",
      "Specialized seminar courses",
      "Electives supporting thesis or MRP focus",
    ],
    capstone: "Thesis or major research paper",
  },
  "master-of-science": {
    focus: "advanced scientific research and technical specialization",
    outcomes: "experimental or computational methods, data analysis, and scientific communication",
    modules: [
      "Advanced methods in the chosen science discipline",
      "Statistics / research design",
      "Specialized seminars and lab coursework",
      "Scholarly communication and ethics",
    ],
    capstone: "Thesis or research project with faculty supervision",
  },
  "master-of-finance": {
    focus: "advanced corporate finance, markets, and investment analysis",
    outcomes: "valuation, risk, portfolio theory, and financial modelling",
    modules: [
      "Corporate finance and financial reporting analysis",
      "Investments and portfolio management",
      "Derivatives, risk, and fixed income",
      "Financial modelling and Canadian markets context",
    ],
    capstone: "Applied finance project or integrative case sequence",
  },
  "graduate-certificate-business": {
    focus: "post-degree business specialization through a college graduate certificate",
    outcomes: "applied management skills for career advancement or pivot",
    modules: [
      "Business fundamentals refresh for degree holders",
      "Applied marketing or operations specialization",
      "Workplace analytics and digital tools",
      "Professional communication and career readiness",
    ],
    capstone: "Industry project or work-integrated learning term",
  },
  "graduate-certificate-health": {
    focus: "post-degree health specialization at the college graduate level",
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
    focus: "post-degree IT specialization through a college graduate certificate",
    outcomes: "hands-on technical skills for cybersecurity, cloud, or development tracks",
    modules: [
      "Technical foundations for career changers/advancers",
      "Specialization labs (cloud, security, or development)",
      "IT service and project workflows",
      "Portfolio development",
    ],
    capstone: "Capstone build or industry placement",
  },
  "master-of-counselling": {
    focus: "professional counselling practice and therapeutic skill development",
    outcomes: "counselling theories, ethics, assessment, and supervised practice",
    modules: [
      "Counselling theories and helping relationships",
      "Ethics, diversity, and professional identity",
      "Assessment and intervention strategies",
      "Group counselling and specialized populations",
    ],
    capstone: "Supervised practicum hours and integrative seminar",
  },
  "master-of-data-science": {
    focus: "statistical modelling, machine learning, and data-driven decision support",
    outcomes: "programming for data, ML pipelines, visualization, and ethics",
    modules: [
      "Statistical learning and data wrangling",
      "Machine learning and model evaluation",
      "Data engineering / big data electives",
      "Ethics, privacy, and communication of insights",
    ],
    capstone: "Applied data science project with real datasets",
  },
};

export const PROGRAMS: readonly Program[] = [
  {
    id: "mba",
    name: "Master of Business Administration (MBA)",
    category: "Business & Management",
    duration: "Typically 1–2 years",
    credential: "Master’s degree",
    summary: "Leadership and management preparation for advancing or pivoting careers.",
  },
  {
    id: "master-of-finance",
    name: "Master of Finance",
    category: "Business & Management",
    duration: "Typically 1–2 years",
    credential: "Master’s degree",
    summary: "Advanced finance, markets, and investment analysis.",
  },
  {
    id: "graduate-certificate-business",
    name: "Graduate Certificate in Business",
    category: "College Graduate Certificates",
    duration: "Typically 8–12 months",
    credential: "Graduate certificate (college)",
    summary: "Post-degree business specialization at a community college.",
  },
  {
    id: "master-of-public-health",
    name: "Master of Public Health",
    category: "Health & Social Care",
    duration: "Typically 1–2 years",
    credential: "Master’s degree",
    summary: "Population health, policy, and program evaluation.",
  },
  {
    id: "master-of-nursing",
    name: "Master of Nursing",
    category: "Health & Social Care",
    duration: "Typically 2 years",
    credential: "Master’s degree",
    summary: "Advanced nursing practice, leadership, and evidence-informed care.",
  },
  {
    id: "master-of-social-work",
    name: "Master of Social Work",
    category: "Health & Social Care",
    duration: "Typically 1–2 years",
    credential: "Master’s degree",
    summary: "Advanced social work practice and field education.",
  },
  {
    id: "graduate-certificate-health",
    name: "Graduate Certificate in Health",
    category: "College Graduate Certificates",
    duration: "Typically 8–12 months",
    credential: "Graduate certificate (college)",
    summary: "Post-degree health specialization through a college program.",
  },
  {
    id: "master-of-education",
    name: "Master of Education",
    category: "Education & Counselling",
    duration: "Typically 1–2 years",
    credential: "Master’s degree",
    summary: "Advanced study in teaching, learning, and educational leadership.",
  },
  {
    id: "master-of-counselling",
    name: "Master of Counselling / Counselling Psychology",
    category: "Education & Counselling",
    duration: "Typically 2–3 years",
    credential: "Master’s degree",
    summary: "Professional counselling preparation with supervised practicum.",
  },
  {
    id: "master-of-computer-science",
    name: "Master of Computer Science",
    category: "Technology & Engineering",
    duration: "Typically 1–2 years",
    credential: "Master’s degree",
    summary: "Advanced computing, systems, and applied research.",
  },
  {
    id: "master-of-data-science",
    name: "Master of Data Science",
    category: "Technology & Engineering",
    duration: "Typically 1–2 years",
    credential: "Master’s degree",
    summary: "Statistical learning, machine learning, and applied analytics.",
  },
  {
    id: "master-of-engineering",
    name: "Master of Engineering",
    category: "Technology & Engineering",
    duration: "Typically 1–2 years",
    credential: "Master’s degree",
    summary: "Advanced engineering practice and technical leadership.",
  },
  {
    id: "graduate-certificate-it",
    name: "Graduate Certificate in Information Technology",
    category: "College Graduate Certificates",
    duration: "Typically 8–12 months",
    credential: "Graduate certificate (college)",
    summary: "Post-degree IT specialization at a community college.",
  },
  {
    id: "master-of-public-administration",
    name: "Master of Public Administration",
    category: "Public Policy & Arts",
    duration: "Typically 1–2 years",
    credential: "Master’s degree",
    summary: "Public sector leadership, policy analysis, and governance.",
  },
  {
    id: "master-of-arts",
    name: "Master of Arts",
    category: "Public Policy & Arts",
    duration: "Typically 1–2 years",
    credential: "Master’s degree",
    summary: "Advanced humanities or social science research and specialization.",
  },
  {
    id: "master-of-science",
    name: "Master of Science",
    category: "Technology & Engineering",
    duration: "Typically 1–2 years",
    credential: "Master’s degree",
    summary: "Advanced scientific research and technical specialization.",
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
