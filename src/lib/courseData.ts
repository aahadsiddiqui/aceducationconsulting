/**
 * Private-college diploma and certificate directory by province.
 * These are not master’s programs. AC Education Consulting advises on
 * private-college programs across Canada and is not affiliated with any institution.
 *
 * A few names were listed more than once (Personal Support Worker, Pharmacy
 * Assistant, Early Childhood Assistant). Each appears once. “Medical Laboratory
 * Assistant” is kept separate from “Medical Laboratory Technician.”
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

export type ProgramField =
  | "Business & Administration"
  | "Health Sciences"
  | "Community & Social Services"
  | "Early Childhood Education"
  | "Information Technology"
  | "Justice & Public Safety"
  | "Dental"
  | "Hospitality & Wellness";

export type ProgramId =
  | "business-administration"
  | "cardiology-technology"
  | "child-youth-care-addiction-support"
  | "information-technology"
  | "law-enforcement-police-foundations"
  | "medical-office-administration"
  | "massage-therapy"
  | "orthopaedic-technician"
  | "personal-support-worker"
  | "pharmacy-technician"
  | "early-childhood-assistant"
  | "early-childhood-education"
  | "health-information-management"
  | "intra-oral-dental-assistant"
  | "medical-esthetician"
  | "medical-laboratory-technician"
  | "medical-office-assistant"
  | "paralegal"
  | "pharmacy-assistant"
  | "supply-chain-logistics"
  | "community-service-worker"
  | "dental-administrator"
  | "dental-assisting"
  | "fitness-and-health"
  | "food-service-worker"
  | "medical-laboratory-assistant"
  | "medical-office-administrator";

export type Credential = "Diploma" | "Certificate";

/** @deprecated Use ProgramField. Kept so existing imports keep working. */
export type ProgramCategory = ProgramField;

export interface CourseDetails {
  title: string;
  field: ProgramField;
  credential: Credential;
  duration: string;
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
  category: ProgramField;
  duration: string;
  credential: Credential;
  summary: string;
}

interface ProvinceContext {
  studentAid: string;
  studyNote: string;
}

interface ProgramDef {
  id: ProgramId;
  name: string;
  field: ProgramField;
  credential: Credential;
  focus: string;
  outcomes: string;
  modules: [string, string, string, string];
  practicum: string;
}

export const PROGRAM_FIELDS: readonly ProgramField[] = [
  "Business & Administration",
  "Health Sciences",
  "Community & Social Services",
  "Early Childhood Education",
  "Information Technology",
  "Justice & Public Safety",
  "Dental",
  "Hospitality & Wellness",
] as const;

export const PROVINCES: readonly Province[] = [
  {
    id: "alberta",
    name: "Alberta",
    shortName: "AB",
    studentAid: "Alberta Student Aid",
    highlight:
      "Private-college diplomas and certificates, with Alberta Student Aid for eligible domestic students.",
  },
  {
    id: "british-columbia",
    name: "British Columbia",
    shortName: "BC",
    studentAid: "StudentAid BC",
    highlight:
      "Private-college diplomas and certificates, with StudentAid BC where eligible.",
  },
  {
    id: "manitoba",
    name: "Manitoba",
    shortName: "MB",
    studentAid: "Manitoba Student Aid",
    highlight:
      "Private-college diplomas and certificates, with Manitoba Student Aid for qualifying students.",
  },
  {
    id: "new-brunswick",
    name: "New Brunswick",
    shortName: "NB",
    studentAid: "New Brunswick Student Financial Services",
    highlight:
      "Private-college diplomas and certificates, with provincial student financial services guidance.",
  },
  {
    id: "newfoundland-and-labrador",
    name: "Newfoundland and Labrador",
    shortName: "NL",
    studentAid: "StudentAid NL",
    highlight:
      "Private-college diplomas and certificates, with StudentAid NL for eligible applicants.",
  },
  {
    id: "nova-scotia",
    name: "Nova Scotia",
    shortName: "NS",
    studentAid: "Nova Scotia Student Assistance",
    highlight:
      "Private-college diplomas and certificates, with Nova Scotia Student Assistance for domestic learners.",
  },
  {
    id: "ontario",
    name: "Ontario",
    shortName: "ON",
    studentAid: "OSAP (Ontario Student Assistance Program)",
    highlight:
      "Private-college diplomas and certificates, with OSAP guidance for eligible Ontarians.",
  },
  {
    id: "prince-edward-island",
    name: "Prince Edward Island",
    shortName: "PE",
    studentAid: "PEI Student Financial Services",
    highlight:
      "Private-college diplomas and certificates, with PEI Student Financial Services for qualifying students.",
  },
  {
    id: "quebec",
    name: "Quebec",
    shortName: "QC",
    studentAid: "Aide financière aux études (AFE)",
    highlight:
      "Private-college diplomas and certificates, with Quebec’s AFE system for eligible students.",
  },
  {
    id: "saskatchewan",
    name: "Saskatchewan",
    shortName: "SK",
    studentAid: "Saskatchewan Student Aid",
    highlight:
      "Private-college diplomas and certificates, with Saskatchewan Student Aid for eligible domestic students.",
  },
] as const;

const PROVINCE_CONTEXT: Record<ProvinceId, ProvinceContext> = {
  alberta: {
    studentAid: "Alberta Student Aid",
    studyNote:
      "Private colleges in Alberta often connect this kind of program to health care, energy-services offices, and business employers across the province.",
  },
  "british-columbia": {
    studentAid: "StudentAid BC",
    studyNote:
      "Private colleges in British Columbia often connect this kind of program to health authorities, child care, technology firms, and regional service employers.",
  },
  manitoba: {
    studentAid: "Manitoba Student Aid",
    studyNote:
      "Private colleges in Manitoba often connect this kind of program to health regions, community agencies, and employers in Winnipeg and across the province.",
  },
  "new-brunswick": {
    studentAid: "New Brunswick Student Financial Services",
    studyNote:
      "Private colleges in New Brunswick often connect this kind of program to health networks, public-facing services, and regional employers.",
  },
  "newfoundland-and-labrador": {
    studentAid: "StudentAid NL",
    studyNote:
      "Private colleges in Newfoundland and Labrador often connect this kind of program to health authorities, community services, and employers in St. John’s and regional communities.",
  },
  "nova-scotia": {
    studentAid: "Nova Scotia Student Assistance",
    studyNote:
      "Private colleges in Nova Scotia often connect this kind of program to health, education, and service employers in Halifax and across the province.",
  },
  ontario: {
    studentAid: "OSAP",
    studyNote:
      "Private colleges in Ontario often connect this kind of program to clinics, community agencies, and employers in the GTA and other regions.",
  },
  "prince-edward-island": {
    studentAid: "PEI Student Financial Services",
    studyNote:
      "Private colleges in Prince Edward Island often connect this kind of program to health, early learning, and community employers on the Island.",
  },
  quebec: {
    studentAid: "Aide financière aux études (AFE)",
    studyNote:
      "Private colleges in Quebec often connect this kind of program to health, administration, and service employers in Montréal and other regions. Language of study and recognition rules can differ, so confirm them with the college.",
  },
  saskatchewan: {
    studentAid: "Saskatchewan Student Aid",
    studyNote:
      "Private colleges in Saskatchewan often connect this kind of program to health regions, community services, and employers in Regina, Saskatoon, and smaller centres.",
  },
};

const PROGRAM_DEFS: readonly ProgramDef[] = [
  {
    id: "business-administration",
    name: "Business Administration",
    field: "Business & Administration",
    credential: "Diploma",
    focus:
      "accounting, operations, marketing, and supervision for office and management work",
    outcomes:
      "preparation for administrative and junior management roles in Canadian businesses",
    modules: [
      "Business communications and professional workplace practice",
      "Accounting, finance basics, and business math",
      "Marketing, sales, and customer relations",
      "Operations, human resources, and supervision",
    ],
    practicum: "Applied business project or workplace placement arranged by the college",
  },
  {
    id: "cardiology-technology",
    name: "Cardiology Technology",
    field: "Health Sciences",
    credential: "Diploma",
    focus: "cardiac rhythm analysis, ECG testing, and support for cardiology teams",
    outcomes:
      "preparation for cardiology technology roles in clinics and hospitals, subject to provincial registration rules",
    modules: [
      "Anatomy and physiology of the cardiovascular system",
      "Electrocardiography and rhythm recognition",
      "Cardiac diagnostic procedures and equipment",
      "Patient care, safety, and professional practice",
    ],
    practicum: "Supervised clinical placement in a cardiac or diagnostic setting",
  },
  {
    id: "child-youth-care-addiction-support",
    name: "Child and Youth Care with Addiction Support Worker",
    field: "Community & Social Services",
    credential: "Diploma",
    focus:
      "supporting children, youth, and families, including addiction-support skills",
    outcomes:
      "preparation for child and youth care and addiction-support roles in community agencies",
    modules: [
      "Child and youth development and behaviour",
      "Trauma-informed care and family support",
      "Addiction support, harm reduction, and recovery resources",
      "Documentation, ethics, and professional boundaries",
    ],
    practicum: "Field placement with a child, youth, or addiction-support agency",
  },
  {
    id: "information-technology",
    name: "Information Technology",
    field: "Information Technology",
    credential: "Diploma",
    focus: "computer systems, networks, software tools, and technical support",
    outcomes: "preparation for IT support, systems, and junior technical roles",
    modules: [
      "Computer hardware, operating systems, and troubleshooting",
      "Networking and information security basics",
      "Software, databases, and business applications",
      "IT service workflows and client communication",
    ],
    practicum: "Technical lab project or IT workplace placement",
  },
  {
    id: "law-enforcement-police-foundations",
    name: "Law Enforcement / Police Foundations",
    field: "Justice & Public Safety",
    credential: "Diploma",
    focus: "policing foundations, community safety, and the Canadian justice system",
    outcomes:
      "preparation for further police or public-safety recruitment. The diploma is not a job offer from a police service",
    modules: [
      "Canadian criminal justice and law",
      "Community policing and public safety",
      "Ethics, diversity, and communication",
      "Fitness, wellness, and career preparation for public safety",
    ],
    practicum:
      "Community placement, simulation, or applied justice project through the college",
  },
  {
    id: "medical-office-administration",
    name: "Medical Office Administration",
    field: "Business & Administration",
    credential: "Diploma",
    focus:
      "running the administrative side of clinics, including billing, records, and patient coordination",
    outcomes: "preparation for medical office administration roles",
    modules: [
      "Medical terminology and health-care office systems",
      "Scheduling, billing, and insurance documentation",
      "Health records and privacy expectations in Canada",
      "Professional communication with patients and clinical teams",
    ],
    practicum: "Medical office placement or simulated clinic administration",
  },
  {
    id: "massage-therapy",
    name: "Massage Therapy",
    field: "Health Sciences",
    credential: "Diploma",
    focus: "massage techniques, anatomy, and client assessment for therapeutic massage",
    outcomes:
      "preparation to pursue massage therapy practice, subject to provincial regulation and exams where they apply",
    modules: [
      "Anatomy, physiology, and pathology for massage",
      "Massage techniques and treatment planning",
      "Client assessment, contraindications, and safety",
      "Professional practice, ethics, and clinic management",
    ],
    practicum: "Student clinic hours or a supervised clinical placement",
  },
  {
    id: "orthopaedic-technician",
    name: "Orthopaedic Technician",
    field: "Health Sciences",
    credential: "Diploma",
    focus: "casting, splinting, and technical support for orthopaedic care",
    outcomes: "preparation for orthopaedic technician roles in clinics and hospitals",
    modules: [
      "Musculoskeletal anatomy and orthopaedic conditions",
      "Casting, splinting, and traction basics",
      "Materials, equipment, and infection control",
      "Patient support and clinical teamwork",
    ],
    practicum: "Clinical placement in an orthopaedic or fracture-clinic setting",
  },
  {
    id: "personal-support-worker",
    name: "Personal Support Worker",
    field: "Health Sciences",
    credential: "Certificate",
    focus:
      "personal care, daily living support, and comfort for clients at home or in care settings",
    outcomes:
      "preparation for personal support work in home care, long-term care, and community settings",
    modules: [
      "Personal care and activities of daily living",
      "Body systems, common conditions, and observation",
      "Communication, dementia care, and family support",
      "Safety, infection control, and professional responsibilities",
    ],
    practicum: "Supervised placement in a care setting",
  },
  {
    id: "pharmacy-technician",
    name: "Pharmacy Technician",
    field: "Health Sciences",
    credential: "Diploma",
    focus:
      "prescription processing, pharmacy software, and technical support under a pharmacist",
    outcomes:
      "preparation for pharmacy technician roles, subject to provincial regulation and exams where they apply",
    modules: [
      "Pharmacology basics and pharmaceutical calculations",
      "Prescription processing and pharmacy software",
      "Compounding, inventory, and dispensing support",
      "Ethics, patient communication, and pharmacy law",
    ],
    practicum: "Community or hospital pharmacy placement",
  },
  {
    id: "early-childhood-assistant",
    name: "Early Childhood Assistant",
    field: "Early Childhood Education",
    credential: "Diploma",
    focus: "assisting early childhood educators with care, play, and daily routines",
    outcomes: "preparation for assistant roles in child care settings",
    modules: [
      "Child development and play",
      "Health, safety, and nutrition in child care",
      "Supporting inclusive classrooms",
      "Professionalism and working with families",
    ],
    practicum: "Placement in a licensed child care or early learning setting",
  },
  {
    id: "early-childhood-education",
    name: "Early Childhood Education",
    field: "Early Childhood Education",
    credential: "Diploma",
    focus: "planning early learning, guiding behaviour, and caring for young children",
    outcomes:
      "preparation for early childhood educator roles, subject to provincial certification",
    modules: [
      "Child development from infancy through school age",
      "Curriculum, play, and observation",
      "Inclusion, family partnerships, and community resources",
      "Health, safety, and professional practice",
    ],
    practicum: "Supervised placements across infant, toddler, and preschool settings",
  },
  {
    id: "health-information-management",
    name: "Health Information Management",
    field: "Health Sciences",
    credential: "Diploma",
    focus: "health records, coding, privacy, and information systems used in care settings",
    outcomes:
      "preparation for health information roles in hospitals, clinics, and health organizations",
    modules: [
      "Medical terminology and health-care systems",
      "Health records, coding, and data quality",
      "Privacy, confidentiality, and release of information",
      "Electronic health information systems",
    ],
    practicum: "Health information department placement or an applied records project",
  },
  {
    id: "intra-oral-dental-assistant",
    name: "Intra-Oral Level I & II Dental Assistant",
    field: "Dental",
    credential: "Diploma",
    focus:
      "chairside assisting, intra-oral Level I and Level II skills, and dental office support",
    outcomes:
      "preparation for dental assisting work, subject to provincial regulatory requirements",
    modules: [
      "Dental anatomy, charting, and infection control",
      "Chairside assisting and instrument knowledge",
      "Intra-oral Level I and Level II skills taught by the college",
      "Patient communication and dental office procedures",
    ],
    practicum: "Dental clinic placement",
  },
  {
    id: "medical-esthetician",
    name: "Medical Esthetician",
    field: "Health Sciences",
    credential: "Diploma",
    focus: "skin care treatments delivered in medical or clinical spa settings",
    outcomes:
      "preparation for medical esthetics roles alongside supervising clinical professionals",
    modules: [
      "Skin anatomy, conditions, and infection control",
      "Facial and clinical skin treatments",
      "Client consultation, contraindications, and documentation",
      "Clinic practice, safety, and professional ethics",
    ],
    practicum: "Student clinic or clinical spa placement",
  },
  {
    id: "medical-laboratory-technician",
    name: "Medical Laboratory Technician",
    field: "Health Sciences",
    credential: "Diploma",
    focus: "collecting and processing specimens and supporting laboratory testing",
    outcomes:
      "preparation for medical laboratory technician roles, subject to provincial certification where it is required",
    modules: [
      "Laboratory safety, specimen collection, and handling",
      "Hematology, chemistry, and microbiology basics",
      "Quality control and laboratory equipment",
      "Professional practice and patient interaction",
    ],
    practicum: "Clinical laboratory placement",
  },
  {
    id: "medical-office-assistant",
    name: "Medical Office Assistant",
    field: "Business & Administration",
    credential: "Certificate",
    focus: "front-desk and clerical support in a medical office",
    outcomes: "preparation for medical office assistant roles",
    modules: [
      "Medical terminology for the front office",
      "Reception, scheduling, and patient intake",
      "Basic billing support and records filing",
      "Privacy and professional communication",
    ],
    practicum: "Medical office placement or simulated front-office practice",
  },
  {
    id: "paralegal",
    name: "Paralegal",
    field: "Business & Administration",
    credential: "Diploma",
    focus:
      "legal procedures, documents, and client support within the scope allowed in that province",
    outcomes:
      "preparation for paralegal studies at a private college. In Ontario, providing legal services to the public requires Law Society of Ontario licensing; rules differ by province",
    modules: [
      "Canadian legal system and professional responsibility",
      "Legal research, writing, and document preparation",
      "Procedure taught by the college, such as tribunals or small claims",
      "Client communication and file management",
    ],
    practicum: "Legal placement or simulated practice arranged by the college",
  },
  {
    id: "pharmacy-assistant",
    name: "Pharmacy Assistant",
    field: "Health Sciences",
    credential: "Certificate",
    focus:
      "clerical and customer-service support in a pharmacy, separate from the pharmacy technician diploma",
    outcomes: "preparation for pharmacy assistant support roles",
    modules: [
      "Pharmacy workplace orientation and terminology",
      "Inventory, cash handling, and customer service",
      "Prescription intake support under supervision",
      "Privacy and professional conduct",
    ],
    practicum: "Community pharmacy placement where the college offers one",
  },
  {
    id: "supply-chain-logistics",
    name: "Supply Chain and Logistics",
    field: "Business & Administration",
    credential: "Diploma",
    focus: "purchasing, inventory, transportation, and warehouse operations",
    outcomes: "preparation for supply chain, logistics, and inventory roles",
    modules: [
      "Supply chain fundamentals and procurement",
      "Inventory control and warehousing",
      "Transportation and distribution",
      "Workplace software, communication, and safety",
    ],
    practicum: "Logistics project or industry placement",
  },
  {
    id: "community-service-worker",
    name: "Community Service Worker",
    field: "Community & Social Services",
    credential: "Diploma",
    focus: "supporting individuals and communities through social service agencies",
    outcomes: "preparation for community service roles in nonprofits and social agencies",
    modules: [
      "Human services and community resources",
      "Interviewing, counselling basics, and case notes",
      "Crisis support, diversity, and ethics",
      "Group work and agency practice",
    ],
    practicum: "Placement in a community or social service agency",
  },
  {
    id: "dental-administrator",
    name: "Dental Administrator",
    field: "Dental",
    credential: "Certificate",
    focus: "reception, billing, and records for a dental office",
    outcomes: "preparation for dental office administration roles",
    modules: [
      "Dental terminology and office systems",
      "Scheduling, insurance, and billing support",
      "Patient records and privacy",
      "Professional communication in a dental practice",
    ],
    practicum: "Dental office administration placement or simulation",
  },
  {
    id: "dental-assisting",
    name: "Dental Assisting",
    field: "Dental",
    credential: "Diploma",
    focus: "chairside support, infection control, and dental office procedures",
    outcomes:
      "preparation for dental assisting roles, subject to provincial regulatory requirements",
    modules: [
      "Dental sciences and charting",
      "Chairside assisting and instrument care",
      "Infection prevention and radiography basics where the college includes them",
      "Patient care and dental office communication",
    ],
    practicum: "Dental clinic placement",
  },
  {
    id: "fitness-and-health",
    name: "Fitness and Health",
    field: "Health Sciences",
    credential: "Diploma",
    focus: "exercise coaching, healthy living, and fitness program delivery",
    outcomes:
      "preparation for fitness and health roles in gyms, studios, and community programs",
    modules: [
      "Anatomy, physiology, and exercise principles",
      "Program design for general populations",
      "Nutrition basics and healthy-lifestyle coaching",
      "Client screening, safety, and professional practice",
    ],
    practicum: "Fitness facility placement or practical coaching hours",
  },
  {
    id: "food-service-worker",
    name: "Food Service Worker",
    field: "Hospitality & Wellness",
    credential: "Certificate",
    focus: "food preparation support, service, and safety in kitchens and dining settings",
    outcomes:
      "preparation for food service roles in restaurants, care facilities, and institutional kitchens",
    modules: [
      "Food safety and sanitation",
      "Basic food preparation and kitchen routines",
      "Customer service and dining support",
      "Workplace safety and teamwork",
    ],
    practicum: "Kitchen or food-service placement",
  },
  {
    id: "medical-laboratory-assistant",
    name: "Medical Laboratory Assistant",
    field: "Health Sciences",
    credential: "Certificate",
    focus:
      "specimen collection, clerical laboratory support, and pre-analytical tasks, separate from the medical laboratory technician diploma",
    outcomes: "preparation for medical laboratory assistant roles",
    modules: [
      "Specimen collection and handling",
      "Laboratory safety and infection control",
      "Data entry, reception, and sample-processing support",
      "Professional communication with patients and lab teams",
    ],
    practicum: "Specimen-collection or laboratory-support placement",
  },
  {
    id: "medical-office-administrator",
    name: "Medical Office Administrator",
    field: "Business & Administration",
    credential: "Diploma",
    focus: "coordinating clinic administration, staff schedules, and patient-flow systems",
    outcomes: "preparation for medical office administrator roles",
    modules: [
      "Clinic operations and supervision basics",
      "Medical billing systems and reporting",
      "Health records oversight and privacy",
      "Patient relations and team communication",
    ],
    practicum: "Administrative placement in a clinic or health office",
  },
];

const DURATION = "1–4 years";

export const PROGRAMS: readonly Program[] = PROGRAM_DEFS.map((program) => ({
  id: program.id,
  name: program.name,
  category: program.field,
  duration: DURATION,
  credential: program.credential,
  summary: `${program.focus.charAt(0).toUpperCase()}${program.focus.slice(1)}. Once completed, the college presents a ${program.credential.toLowerCase()}.`,
}));

function credentialSentence(credential: Credential): string {
  return `Once completed, the college presents a ${credential.toLowerCase()}.`;
}

function buildCourseDetails(
  provinceId: ProvinceId,
  programId: ProgramId,
): CourseDetails {
  const province = PROVINCES.find((item) => item.id === provinceId)!;
  const program = PROGRAM_DEFS.find((item) => item.id === programId)!;
  const ctx = PROVINCE_CONTEXT[provinceId];
  const awarded = credentialSentence(program.credential);

  return {
    title: `${program.name} — ${province.name}`,
    field: program.field,
    credential: program.credential,
    duration: DURATION,
    description: `In ${province.name}, ${program.name} is a private-college program in ${program.field}. Students focus on ${program.focus}. Typical outcomes include ${program.outcomes}. Length varies from 1 to 4 years depending on the college and whether study is full-time or part-time. ${awarded} ${ctx.studyNote} Eligible Canadian citizens, permanent residents, and refugees or protected persons may explore ${ctx.studentAid}. AC Education Consulting advises on private-college programs across Canada and is not affiliated with any college.`,
    breakdown: [
      `Field: ${program.field}`,
      awarded,
      "Length: varies from 1 to 4 years, depending on the private college and the study schedule.",
      `Coursework: ${program.modules[0]}`,
      `Coursework: ${program.modules[1]}`,
      `Coursework: ${program.modules[2]}`,
      `Coursework: ${program.modules[3]}`,
      `Practical component: ${program.practicum}`,
      `${province.name}: ${ctx.studyNote}`,
      `Student aid to explore: ${province.studentAid}`,
    ],
  };
}

export const courseDirectory: Record<
  ProvinceId,
  Record<ProgramId, CourseDetails>
> = PROVINCES.reduce(
  (acc, province) => {
    acc[province.id] = PROGRAM_DEFS.reduce(
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

export function getProgramsByField(field: ProgramField | ""): Program[] {
  if (!field) return [...PROGRAMS];
  return PROGRAMS.filter((program) => program.category === field);
}

export function getProgramsByCategory(): Record<ProgramField, Program[]> {
  return PROGRAMS.reduce(
    (acc, program) => {
      if (!acc[program.category]) acc[program.category] = [];
      acc[program.category].push(program);
      return acc;
    },
    {} as Record<ProgramField, Program[]>,
  );
}

export const PROGRAM_COUNT = PROGRAMS.length;
export const PROVINCE_COUNT = PROVINCES.length;
