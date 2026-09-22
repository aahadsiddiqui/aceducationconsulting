/**
 * Course Directory — typed schema + province-aware content for all
 * 10 provinces × 28 programs.
 *
 * Duplicate handling (from the original 31-line list):
 * - Personal Support Worker ×3 → consolidated
 * - Pharmacy Assistant ×2 → consolidated
 * - Near-duplicates kept as distinct credentials where titles differ
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
  | "early-childhood-assistant-diploma"
  | "early-childhood-education"
  | "health-information-management"
  | "dental-assistant-intra-oral"
  | "medical-esthetician"
  | "medical-laboratory-technician"
  | "medical-office-assistant"
  | "paralegal"
  | "pharmacy-assistant"
  | "supply-chain-logistics"
  | "community-service-worker"
  | "dental-administrator"
  | "dental-assisting"
  | "early-childhood-assistant"
  | "fitness-and-health"
  | "food-service-worker"
  | "medical-laboratory-assistant-technician"
  | "medical-office-administrator";

export type ProgramCategory =
  | "Business & Administration"
  | "Health & Allied Care"
  | "Community & Human Services"
  | "Technology"
  | "Justice & Public Safety"
  | "Dental & Clinical Support";

export interface CourseDetails {
  title: string;
  description: string;
  breakdown: string[];
}

export interface Province {
  id: ProvinceId;
  name: string;
  shortName: string;
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
  regulator: string;
  labourFocus: string;
  campusNote: string;
  credentialFraming: string;
}

interface ProgramTemplate {
  focus: string;
  outcomes: string;
  modules: [string, string, string, string];
  clinicalOrCapstone: string;
}

export const PROVINCES: readonly Province[] = [
  {
    id: "alberta",
    name: "Alberta",
    shortName: "AB",
    highlight: "Energy, health care, and growing tech corridors in Calgary and Edmonton.",
  },
  {
    id: "british-columbia",
    name: "British Columbia",
    shortName: "BC",
    highlight: "Pacific gateway for trade, tourism, health care, and technology.",
  },
  {
    id: "manitoba",
    name: "Manitoba",
    shortName: "MB",
    highlight: "Affordable living with strong demand in health and community services.",
  },
  {
    id: "new-brunswick",
    name: "New Brunswick",
    shortName: "NB",
    highlight: "Bilingual opportunities and welcoming Atlantic college pathways.",
  },
  {
    id: "newfoundland-and-labrador",
    name: "Newfoundland and Labrador",
    shortName: "NL",
    highlight: "Close-knit campuses with health and trades-aligned career routes.",
  },
  {
    id: "nova-scotia",
    name: "Nova Scotia",
    shortName: "NS",
    highlight: "Halifax hub for education, ocean industries, and health programs.",
  },
  {
    id: "ontario",
    name: "Ontario",
    shortName: "ON",
    highlight: "Canada’s largest college system and widest program selection.",
  },
  {
    id: "prince-edward-island",
    name: "Prince Edward Island",
    shortName: "PE",
    highlight: "Small-campus experience with community-focused career training.",
  },
  {
    id: "quebec",
    name: "Quebec",
    shortName: "QC",
    highlight: "Distinct CEGEP/college pathways and bilingual career advantage.",
  },
  {
    id: "saskatchewan",
    name: "Saskatchewan",
    shortName: "SK",
    highlight: "Steady demand in health care, agriculture support, and administration.",
  },
] as const;

const PROVINCE_CONTEXT: Record<ProvinceId, ProvinceContext> = {
  alberta: {
    regulator: "Alberta Advanced Education program standards",
    labourFocus:
      "Calgary–Edmonton employers in energy services, continuing care, and mid-size enterprise",
    campusNote: "urban campuses with strong industry work-integrated learning options",
    credentialFraming: "Alberta college diploma or certificate pathway",
  },
  "british-columbia": {
    regulator: "B.C. Ministry of Post-Secondary Education and Future Skills expectations",
    labourFocus:
      "Lower Mainland and Island employers in health, tourism-adjacent services, and tech support",
    campusNote: "metro and regional campuses with practice-education placements",
    credentialFraming: "B.C. college diploma or certificate pathway",
  },
  manitoba: {
    regulator: "Manitoba advanced education college program frameworks",
    labourFocus:
      "Winnipeg and regional employers seeking health support, admin, and community roles",
    campusNote: "accessible campuses with community placement networks",
    credentialFraming: "Manitoba college diploma or certificate pathway",
  },
  "new-brunswick": {
    regulator: "New Brunswick post-secondary program quality standards",
    labourFocus:
      "bilingual and regional employers across health, administration, and public services",
    campusNote: "intimate class sizes and Atlantic employer connections",
    credentialFraming: "New Brunswick college diploma or certificate pathway",
  },
  "newfoundland-and-labrador": {
    regulator: "Newfoundland and Labrador college program guidelines",
    labourFocus:
      "provincial health authorities, community agencies, and administrative employers",
    campusNote: "supportive campus communities with applied practicum routes",
    credentialFraming: "Newfoundland and Labrador college diploma or certificate pathway",
  },
  "nova-scotia": {
    regulator: "Nova Scotia community college program standards",
    labourFocus:
      "Halifax and regional demand in health care, business support, and IT services",
    campusNote: "practice-ready labs and Atlantic career services support",
    credentialFraming: "Nova Scotia college diploma or certificate pathway",
  },
  ontario: {
    regulator: "Ontario Ministry of Colleges and Universities program standards",
    labourFocus:
      "GTA and regional employers across health systems, business, and public services",
    campusNote: "one of Canada’s broadest college networks and co-op options",
    credentialFraming: "Ontario College Diploma or Certificate pathway",
  },
  "prince-edward-island": {
    regulator: "Prince Edward Island post-secondary training frameworks",
    labourFocus:
      "community health, hospitality-adjacent services, and small-business administration",
    campusNote: "small cohorts and hands-on provincial placement partners",
    credentialFraming: "P.E.I. college diploma or certificate pathway",
  },
  quebec: {
    regulator: "Quebec college (CEGEP/college) program structures and language context",
    labourFocus:
      "Montreal and regional employers valuing bilingual capability in care and admin roles",
    campusNote: "college pathways that may include French-language workplace readiness",
    credentialFraming: "Quebec college diploma or attestation pathway",
  },
  saskatchewan: {
    regulator: "Saskatchewan post-secondary college program expectations",
    labourFocus:
      "provincial health, agriculture-support administration, and community service employers",
    campusNote: "applied learning with prairie employer partnerships",
    credentialFraming: "Saskatchewan college diploma or certificate pathway",
  },
};

const PROGRAM_TEMPLATES: Record<ProgramId, ProgramTemplate> = {
  "business-administration": {
    focus: "supervisory and administrative capability across public and private organizations",
    outcomes:
      "operations coordination, foundational accounting literacy, marketing basics, and people leadership",
    modules: [
      "Business fundamentals, communications, and introductory accounting",
      "Marketing, human resources, and digital productivity tools",
      "Operations, Canadian business law overview, and entrepreneurship",
      "Finance essentials and organizational decision-making",
    ],
    clinicalOrCapstone: "Applied business capstone or employer-linked project",
  },
  "cardiology-technology": {
    focus: "cardiac diagnostic support skills used in hospital and clinic settings",
    outcomes:
      "ECG acquisition, stress testing support, Holter monitoring workflows, and patient-centred communication",
    modules: [
      "Cardiovascular anatomy, physiology, and medical terminology",
      "ECG theory, acquisition technique, and rhythm recognition basics",
      "Ambulatory monitoring, stress testing support, and safety protocols",
      "Clinical documentation, ethics, and interprofessional practice",
    ],
    clinicalOrCapstone: "Supervised clinical practicum in approved cardiac care settings",
  },
  "child-youth-care-addiction-support": {
    focus: "supporting children, youth, and families facing behavioural and addiction challenges",
    outcomes:
      "crisis-aware communication, case documentation, community referral pathways, and trauma-informed care basics",
    modules: [
      "Child and youth development, ethics, and professional boundaries",
      "Addiction foundations, harm reduction, and motivational approaches",
      "Family systems, mental health awareness, and cultural humility",
      "Group facilitation, documentation, and community resources",
    ],
    clinicalOrCapstone: "Field placement with a youth, family, or addiction support agency",
  },
  "information-technology": {
    focus: "hands-on IT support, networking, and systems administration foundations",
    outcomes:
      "help-desk readiness, OS and network troubleshooting, security hygiene, and cloud awareness",
    modules: [
      "Hardware, operating systems, and customer service for IT",
      "Networking fundamentals and TCP/IP troubleshooting",
      "Windows/Linux administration and scripting basics",
      "Cybersecurity awareness, cloud intro, and IT service workflows",
    ],
    clinicalOrCapstone: "IT service desk simulation, portfolio project, or work term",
  },
  "law-enforcement-police-foundations": {
    focus: "foundations for policing, security, and justice-system support careers",
    outcomes:
      "criminal justice literacy, fitness and professional conduct, investigative basics, and community policing awareness",
    modules: [
      "Canadian criminal justice system and Charter considerations",
      "Criminology, diversity, and conflict de-escalation",
      "Investigation foundations, evidence handling, and report writing",
      "Fitness, ethics, and career preparation for justice pathways",
    ],
    clinicalOrCapstone: "Scenario labs, community engagement project, or justice placement",
  },
  "medical-office-administration": {
    focus: "front-office leadership for clinics, hospitals, and specialty practices",
    outcomes:
      "scheduling systems, medical billing awareness, records management, and patient flow coordination",
    modules: [
      "Medical terminology, office communications, and professionalism",
      "Electronic health records, scheduling, and privacy legislation basics",
      "Billing/coding awareness, inventory, and practice management",
      "Leadership in the medical office and quality improvement basics",
    ],
    clinicalOrCapstone: "Clinic or hospital administrative practicum",
  },
  "massage-therapy": {
    focus: "therapeutic massage assessment and treatment planning",
    outcomes:
      "manual therapy techniques, clinical assessment, documentation, and professional practice readiness",
    modules: [
      "Anatomy, physiology, and pathology foundations",
      "Assessment, treatment planning, and Swedish/therapeutic techniques",
      "Orthopaedic and clinical massage applications",
      "Professional practice, ethics, and business basics for therapists",
    ],
    clinicalOrCapstone: "Supervised student clinic hours meeting program requirements",
  },
  "orthopaedic-technician": {
    focus: "cast room and orthopaedic clinic technical support",
    outcomes:
      "casting/splinting support, traction awareness, sterile technique, and patient education",
    modules: [
      "Musculoskeletal anatomy and orthopaedic terminology",
      "Casting, splinting, and brace-fitting fundamentals",
      "Wound care awareness, infection control, and clinic safety",
      "Documentation, radiograph basics for techs, and team communication",
    ],
    clinicalOrCapstone: "Orthopaedic clinic or hospital cast-room practicum",
  },
  "personal-support-worker": {
    focus: "personal care and daily living support in home, long-term care, and community settings",
    outcomes:
      "ADL assistance, mobility support, dementia-aware care, and family communication",
    modules: [
      "Role of the PSW/HCA, ethics, and client-centred care",
      "Body systems, safety, and infection prevention",
      "Assisting with activities of daily living and mobility",
      "Mental health, dementia care, and palliative awareness",
    ],
    clinicalOrCapstone: "Facility and community clinical placements",
  },
  "pharmacy-technician": {
    focus: "dispensing support and pharmacy operations under pharmacist supervision",
    outcomes:
      "prescription processing, inventory control, compounding awareness, and regulated pharmacy workflows",
    modules: [
      "Pharmacy calculations, terminology, and legislation overview",
      "Dispensing systems, product preparation, and accuracy checks",
      "Inventory, narcotic controls, and community vs hospital practice",
      "Communication, ethics, and interprofessional collaboration",
    ],
    clinicalOrCapstone: "Community and/or hospital pharmacy practicum",
  },
  "early-childhood-assistant-diploma": {
    focus: "diploma-level support for licensed early learning environments",
    outcomes:
      "play-based learning support, observation notes, health and safety, and inclusive practice",
    modules: [
      "Child development and play-based learning foundations",
      "Guiding behaviour, inclusion, and family engagement",
      "Health, nutrition, and safety in early years settings",
      "Curriculum support, documentation, and professional practice",
    ],
    clinicalOrCapstone: "Practicum in licensed childcare or early years programs",
  },
  "early-childhood-education": {
    focus: "lead educator preparation for early learning and childcare settings",
    outcomes:
      "curriculum planning, observation and assessment, inclusive pedagogy, and regulatory awareness",
    modules: [
      "Foundations of ECE, ethics, and child development theory",
      "Curriculum design, literacy/numeracy through play, and outdoor learning",
      "Inclusion, Indigenous perspectives awareness, and family partnerships",
      "Program administration basics and professional leadership",
    ],
    clinicalOrCapstone: "Multiple practicum blocks in early learning centres",
  },
  "health-information-management": {
    focus: "clinical data quality, coding, and health records stewardship",
    outcomes:
      "classification/coding awareness, privacy compliance, data reporting, and digital HIM systems",
    modules: [
      "Health system structure and medical terminology for HIM",
      "Records management, privacy law, and release-of-information basics",
      "Coding foundations and clinical documentation improvement awareness",
      "Analytics intro, quality indicators, and digital health systems",
    ],
    clinicalOrCapstone: "HIM department practicum or applied data project",
  },
  "dental-assistant-intra-oral": {
    focus: "chairside and intra-oral Level 1 & 2 dental assisting competencies",
    outcomes:
      "four-handed dentistry support, radiography awareness, infection control, and patient education",
    modules: [
      "Dental anatomy, charting, and office protocols",
      "Chairside assisting, materials, and sterilization",
      "Intra-oral skills aligned to Level 1 & 2 scopes",
      "Radiography theory/practice awareness and prevention education",
    ],
    clinicalOrCapstone: "Dental clinic practicum with intra-oral skill demonstration",
  },
  "medical-esthetician": {
    focus: "clinical aesthetic treatments in medical-spa and dermatology-adjacent settings",
    outcomes:
      "skin analysis, advanced facial protocols, device-assisted treatments awareness, and sanitation standards",
    modules: [
      "Integumentary science, contraindications, and consultation skills",
      "Medical facial protocols and peels awareness",
      "Laser/IPL theory overview and device safety culture",
      "Retail ethics, documentation, and clinic operations",
    ],
    clinicalOrCapstone: "Supervised student clinic performing medical-esthetic services",
  },
  "medical-laboratory-technician": {
    focus: "specimen collection and core lab support procedures",
    outcomes:
      "phlebotomy, specimen handling, quality control awareness, and lab safety",
    modules: [
      "Lab safety, QA/QC, and professional practice",
      "Phlebotomy and specimen procurement",
      "Hematology, chemistry, and microbiology support procedures",
      "Instrumentation basics and result verification workflows",
    ],
    clinicalOrCapstone: "Hospital or private lab clinical rotation",
  },
  "medical-office-assistant": {
    focus: "front-desk and clinical admin support in medical offices",
    outcomes:
      "patient reception, appointment systems, EHR data entry, and OHIP/provincial billing awareness",
    modules: [
      "Medical office communications and customer service",
      "Scheduling, triage basics, and electronic records",
      "Billing awareness, forms, and confidentiality",
      "Clinical assisting support skills where program scope allows",
    ],
    clinicalOrCapstone: "Medical office work placement",
  },
  paralegal: {
    focus: "legal services support within the permitted paralegal/scope framework of the province",
    outcomes:
      "legal research basics, tribunal procedure awareness, client interviewing, and ethics",
    modules: [
      "Canadian legal system and professional responsibility",
      "Legal research, writing, and citation",
      "Small claims / tribunal practice foundations",
      "Evidence, advocacy basics, and practice management",
    ],
    clinicalOrCapstone: "Moot, clinic, or law-office field placement",
  },
  "pharmacy-assistant": {
    focus: "pharmacy counter and dispensary support under regulated supervision",
    outcomes:
      "customer service, prescription intake, inventory, and pharmacy software workflows",
    modules: [
      "Pharmacy workplace roles, ethics, and customer care",
      "Prescription intake, third-party basics, and product knowledge",
      "Inventory, compounding support awareness, and accuracy checks",
      "Communication with pharmacists and interprofessional teams",
    ],
    clinicalOrCapstone: "Community pharmacy assistant practicum",
  },
  "supply-chain-logistics": {
    focus: "end-to-end supply chain coordination for goods and services",
    outcomes:
      "procurement basics, inventory control, transportation awareness, and ERP literacy",
    modules: [
      "Supply chain foundations and Canadian trade context",
      "Procurement, vendor relations, and cost control",
      "Warehousing, inventory systems, and transportation modes",
      "ERP/spreadsheet analytics and continuous improvement",
    ],
    clinicalOrCapstone: "Logistics capstone or industry work term",
  },
  "community-service-worker": {
    focus: "frontline social service support across community agencies",
    outcomes:
      "intake interviewing, case note writing, crisis referral, and advocacy basics",
    modules: [
      "Human services ethics, diversity, and anti-oppressive practice intro",
      "Counselling micro-skills and group work foundations",
      "Community resources, housing/poverty awareness, and referrals",
      "Documentation, self-care, and professional boundaries",
    ],
    clinicalOrCapstone: "Community agency field placement",
  },
  "dental-administrator": {
    focus: "dental practice operations, scheduling, and patient financial coordination",
    outcomes:
      "dental software, insurance claim support, recall systems, and team coordination",
    modules: [
      "Dental office roles, terminology, and customer experience",
      "Scheduling, recall, and treatment coordination",
      "Insurance claims, billing support, and privacy",
      "Inventory, reporting, and practice administration",
    ],
    clinicalOrCapstone: "Dental office administrative placement",
  },
  "dental-assisting": {
    focus: "chairside dental assisting for general practice clinics",
    outcomes:
      "instrumentation, infection control, patient preparation, and preventive education",
    modules: [
      "Oral anatomy, charting, and dental materials",
      "Chairside procedures and four-handed dentistry",
      "Sterilization, radiography awareness, and OSHA-style safety culture",
      "Patient education and practice professionalism",
    ],
    clinicalOrCapstone: "Dental assisting clinical practicum",
  },
  "early-childhood-assistant": {
    focus: "assistant-level support in childcare centres and early years programs",
    outcomes:
      "routine care, play facilitation support, observation notes, and ratio-aware teamwork",
    modules: [
      "Introduction to early years practice and child development",
      "Supporting play, routines, and positive guidance",
      "Health, safety, and nutrition in childcare",
      "Working with RECE/lead educators and families",
    ],
    clinicalOrCapstone: "Assistant practicum in a licensed childcare setting",
  },
  "fitness-and-health": {
    focus: "exercise leadership and lifestyle coaching foundations",
    outcomes:
      "program design basics, client screening awareness, group fitness leadership, and wellness education",
    modules: [
      "Anatomy, physiology, and movement fundamentals",
      "Client assessment awareness and goal setting",
      "Resistance training, cardio programming, and group classes",
      "Nutrition basics, behaviour change, and professional practice",
    ],
    clinicalOrCapstone: "Fitness centre practicum or client case portfolio",
  },
  "food-service-worker": {
    focus: "institutional food service in health care and community settings",
    outcomes:
      "safe food handling, therapeutic diet awareness, tray service, and kitchen teamwork",
    modules: [
      "Food safety, sanitation, and workplace hygiene",
      "Therapeutic diets and nutrition basics for institutions",
      "Food production support, portioning, and tray assembly",
      "Customer service in health care dining and team communication",
    ],
    clinicalOrCapstone: "Health care or institutional kitchen placement",
  },
  "medical-laboratory-assistant-technician": {
    focus: "combined MLA/MLT support skills for specimen and bench workflows",
    outcomes:
      "phlebotomy, pre-analytical processing, basic analytical support, and lab information systems",
    modules: [
      "Lab safety, quality systems, and professionalism",
      "Phlebotomy and specimen accessioning",
      "Core lab support across hematology and chemistry",
      "Instrumentation support and result verification culture",
    ],
    clinicalOrCapstone: "Combined laboratory clinical experience",
  },
  "medical-office-administrator": {
    focus: "senior administrative coordination across multi-provider clinics",
    outcomes:
      "workflow design, staff scheduling support, compliance tracking, and patient experience leadership",
    modules: [
      "Advanced medical office systems and leadership communication",
      "Multi-provider scheduling and referral coordination",
      "Privacy, compliance, and quality indicators",
      "Financial administration awareness and process improvement",
    ],
    clinicalOrCapstone: "Clinic operations practicum or process-improvement project",
  },
};

export const PROGRAMS: readonly Program[] = [
  {
    id: "business-administration",
    name: "Business Administration",
    category: "Business & Administration",
    duration: "Typically 2 years",
    credential: "Diploma",
    summary: "Operations, marketing, HR, and leadership foundations for supervisory roles.",
  },
  {
    id: "cardiology-technology",
    name: "Cardiology Technology",
    category: "Health & Allied Care",
    duration: "Typically 2 years",
    credential: "Diploma",
    summary: "Cardiac diagnostics support including ECG and ambulatory monitoring.",
  },
  {
    id: "child-youth-care-addiction-support",
    name: "Child and Youth Care with Addiction Support Worker",
    category: "Community & Human Services",
    duration: "Typically 2 years",
    credential: "Diploma",
    summary: "Youth-centred support with addiction-aware community practice.",
  },
  {
    id: "information-technology",
    name: "Information Technology Diploma",
    category: "Technology",
    duration: "Typically 2 years",
    credential: "Diploma",
    summary: "Networking, systems support, and cybersecurity-ready IT skills.",
  },
  {
    id: "law-enforcement-police-foundations",
    name: "Law Enforcement / Police Foundations Diploma",
    category: "Justice & Public Safety",
    duration: "Typically 2 years",
    credential: "Diploma",
    summary: "Justice-system foundations for policing and related public safety paths.",
  },
  {
    id: "medical-office-administration",
    name: "Medical Office Administration Diploma",
    category: "Business & Administration",
    duration: "Typically 1–2 years",
    credential: "Diploma",
    summary: "Clinic leadership, scheduling systems, and medical office operations.",
  },
  {
    id: "massage-therapy",
    name: "Massage Therapy Diploma",
    category: "Health & Allied Care",
    duration: "Typically 2–3 years",
    credential: "Diploma",
    summary: "Therapeutic assessment and treatment with supervised clinic hours.",
  },
  {
    id: "orthopaedic-technician",
    name: "Orthopaedic Technician Diploma",
    category: "Health & Allied Care",
    duration: "Typically 1–2 years",
    credential: "Diploma",
    summary: "Casting, splinting, and orthopaedic clinic technical support.",
  },
  {
    id: "personal-support-worker",
    name: "Personal Support Worker",
    category: "Health & Allied Care",
    duration: "Typically under 1 year",
    credential: "Certificate",
    summary: "Personal care and daily living support in facility and community settings.",
  },
  {
    id: "pharmacy-technician",
    name: "Pharmacy Technician Diploma",
    category: "Health & Allied Care",
    duration: "Typically 2 years",
    credential: "Diploma",
    summary: "Dispensing support and regulated pharmacy operations training.",
  },
  {
    id: "early-childhood-assistant-diploma",
    name: "Early Childhood Assistant Diploma",
    category: "Community & Human Services",
    duration: "Typically 1–2 years",
    credential: "Diploma",
    summary: "Diploma-level assisting in licensed early learning environments.",
  },
  {
    id: "early-childhood-education",
    name: "Early Childhood Education Diploma",
    category: "Community & Human Services",
    duration: "Typically 2 years",
    credential: "Diploma",
    summary: "Lead educator preparation for curriculum and inclusive early years practice.",
  },
  {
    id: "health-information-management",
    name: "Health Information Management Diploma",
    category: "Health & Allied Care",
    duration: "Typically 2 years",
    credential: "Diploma",
    summary: "Clinical data quality, coding awareness, and health records stewardship.",
  },
  {
    id: "dental-assistant-intra-oral",
    name: "Intra Oral Level 1 & 2 Dental Assistant Diploma",
    category: "Dental & Clinical Support",
    duration: "Typically 1–2 years",
    credential: "Diploma",
    summary: "Chairside and intra-oral Level 1 & 2 dental assisting competencies.",
  },
  {
    id: "medical-esthetician",
    name: "Medical Esthetician Diploma",
    category: "Health & Allied Care",
    duration: "Typically 1–2 years",
    credential: "Diploma",
    summary: "Clinical aesthetic treatments in medical-spa environments.",
  },
  {
    id: "medical-laboratory-technician",
    name: "Medical Laboratory Technician Diploma",
    category: "Health & Allied Care",
    duration: "Typically 2 years",
    credential: "Diploma",
    summary: "Phlebotomy and core laboratory support procedures.",
  },
  {
    id: "medical-office-assistant",
    name: "Medical Office Assistant",
    category: "Business & Administration",
    duration: "Typically under 1 year",
    credential: "Certificate",
    summary: "Front-desk medical reception, scheduling, and EHR support.",
  },
  {
    id: "paralegal",
    name: "Paralegal",
    category: "Justice & Public Safety",
    duration: "Typically 2 years",
    credential: "Diploma",
    summary: "Legal research, tribunal practice foundations, and ethics.",
  },
  {
    id: "pharmacy-assistant",
    name: "Pharmacy Assistant",
    category: "Health & Allied Care",
    duration: "Typically under 1 year",
    credential: "Certificate",
    summary: "Pharmacy counter support, inventory, and dispensary workflows.",
  },
  {
    id: "supply-chain-logistics",
    name: "Supply Chain and Logistics Diploma",
    category: "Business & Administration",
    duration: "Typically 2 years",
    credential: "Diploma",
    summary: "Procurement, inventory, transportation, and ERP fundamentals.",
  },
  {
    id: "community-service-worker",
    name: "Community Service Worker",
    category: "Community & Human Services",
    duration: "Typically 1–2 years",
    credential: "Diploma / Certificate",
    summary: "Frontline social service support and community referral practice.",
  },
  {
    id: "dental-administrator",
    name: "Dental Administrator",
    category: "Dental & Clinical Support",
    duration: "Typically under 1 year",
    credential: "Certificate",
    summary: "Dental practice scheduling, insurance support, and operations.",
  },
  {
    id: "dental-assisting",
    name: "Dental Assisting",
    category: "Dental & Clinical Support",
    duration: "Typically 1 year",
    credential: "Certificate / Diploma",
    summary: "Chairside assisting, sterilization, and patient education.",
  },
  {
    id: "early-childhood-assistant",
    name: "Early Childhood Assistant",
    category: "Community & Human Services",
    duration: "Typically under 1 year",
    credential: "Certificate",
    summary: "Assistant-level support for childcare routines and play facilitation.",
  },
  {
    id: "fitness-and-health",
    name: "Fitness and Health",
    category: "Health & Allied Care",
    duration: "Typically 1–2 years",
    credential: "Diploma / Certificate",
    summary: "Exercise leadership, program design, and wellness education.",
  },
  {
    id: "food-service-worker",
    name: "Food Service Worker",
    category: "Health & Allied Care",
    duration: "Typically under 1 year",
    credential: "Certificate",
    summary: "Institutional food service for health care and community kitchens.",
  },
  {
    id: "medical-laboratory-assistant-technician",
    name: "Medical Laboratory Assistant / Technician",
    category: "Health & Allied Care",
    duration: "Typically 1–2 years",
    credential: "Certificate / Diploma",
    summary: "Combined specimen and bench support for clinical laboratories.",
  },
  {
    id: "medical-office-administrator",
    name: "Medical Office Administrator",
    category: "Business & Administration",
    duration: "Typically 1 year",
    credential: "Certificate / Diploma",
    summary: "Senior clinic coordination, compliance, and patient experience leadership.",
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
    description: `Build ${template.focus} through a ${ctx.credentialFraming} designed around ${ctx.regulator}. Coursework emphasizes ${template.outcomes}, with delivery suited to ${ctx.campusNote}. Graduates are prepared for opportunities among ${ctx.labourFocus}. ${province.highlight}`,
    breakdown: [
      `Module 1: ${template.modules[0]}`,
      `Module 2: ${template.modules[1]}`,
      `Module 3: ${template.modules[2]}`,
      `Module 4: ${template.modules[3]}`,
      `Applied learning: ${template.clinicalOrCapstone}`,
      `Credential: ${program.credential} · ${program.duration} · ${province.name}`,
    ],
  };
}

/** Fully populated directory: every province × every program. */
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
export const COMBINATION_COUNT = PROGRAM_COUNT * PROVINCE_COUNT;
