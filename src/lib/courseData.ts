/**
 * Private-college diploma and certificate directory by province.
 * These are not master’s programs. AC Education Consulting advises on
 * private-college programs across Canada and is not affiliated with any institution.
 *
 * A few names were listed more than once. Each appears once. “Medical Laboratory
 * Assistant” is kept separate from “Medical Laboratory Technician.” Home
 * Inspection, Home Inspection Certificate, and Home Inspection Diploma stay
 * separate because the credential differs.
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
  | "Hospitality & Wellness"
  | "Skilled Trades";

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
  | "medical-office-administrator"
  | "dental-treatment-coordinator"
  | "physiotherapist-assistant"
  | "occupational-therapy-assistant"
  | "psw-bridging"
  | "early-childcare-assistant"
  | "accounting-payroll-administration"
  | "conference-event-planner"
  | "customer-service-information-clerk"
  | "international-hospitality-management"
  | "marketing-coordinator"
  | "project-administration"
  | "sales-professional"
  | "business-management"
  | "business-digital-marketing-management"
  | "sustainable-business-management"
  | "supply-chain-management"
  | "warehouse-distribution-management"
  | "hospitality-management"
  | "social-media-web-marketing"
  | "mastercam-training"
  | "solidworks-training"
  | "a-plus-certification-preparation"
  | "computer-service-technician"
  | "it-security-specialist"
  | "network-administrator"
  | "pc-support-specialist"
  | "web-designer"
  | "sas-programming"
  | "sql-programming"
  | "python-data-analytics"
  | "tableau-data-analytics"
  | "machine-learning"
  | "sap-s4-hana"
  | "data-science-application"
  | "network-cloud-computing"
  | "erp-sap-supply-chain-management"
  | "data-analytics-business-intelligence"
  | "cybersecurity-specialist"
  | "network-system-administrator"
  | "network-system-engineer"
  | "computer-business-applications-specialist"
  | "web-mobile-application"
  | "red-hat-system-administration"
  | "it-support-software-qa"
  | "post-grad-data-science-ai"
  | "post-grad-enterprise-linux"
  | "post-grad-enterprise-resource-planning"
  | "cnc-lathe-operator"
  | "cnc-mill-lathe-setup"
  | "cnc-programmer-operator-setup"
  | "cnc-machine-tool-operator-programmer"
  | "home-inspection"
  | "construction-maintenance-electrician"
  | "hvac"
  | "welding"
  | "civil-structural-engineering-design"
  | "mechanical-engineering-design"
  | "autocad-2d-3d"
  | "staad-pro"
  | "civil-3d"
  | "in-roads"
  | "renovation-construction-technician"
  | "home-inspection-certificate"
  | "home-inspection-diploma"
  | "food-service-worker-online"
  | "addictions-community-services-worker"
  | "addictions-recovery-support"
  | "child-youth-services-worker"
  | "education-assistant"
  | "legal-administrative-assistant"
  | "law-clerk"
  | "immigration-assistant"
  | "security-guard";

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
  "Skilled Trades",
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
  {
    id: "dental-treatment-coordinator",
    name: "Dental Treatment Coordinator",
    field: "Dental",
    credential: "Certificate",
    focus:
      "treatment presentation, scheduling, and case follow-up in a dental office",
    outcomes: "preparation for dental treatment coordinator roles",
    modules: [
      "Dental terminology and treatment planning language",
      "Case presentation and patient financial discussions",
      "Scheduling, recalls, and treatment follow-up",
      "Records, privacy, and professional communication",
    ],
    practicum: "Dental office placement or simulated treatment coordination",
  },
  {
    id: "physiotherapist-assistant",
    name: "Physiotherapist Assistant",
    field: "Health Sciences",
    credential: "Diploma",
    focus:
      "assisting physiotherapists with exercise, mobility, and clinic support",
    outcomes:
      "preparation for physiotherapist assistant roles under the supervision of a physiotherapist",
    modules: [
      "Anatomy, movement, and common conditions",
      "Therapeutic exercise and mobility support",
      "Modalities, equipment, and safety",
      "Documentation and working on a rehab team",
    ],
    practicum: "Placement in a physiotherapy or rehabilitation setting",
  },
  {
    id: "occupational-therapy-assistant",
    name: "Occupational Therapy Assistant",
    field: "Health Sciences",
    credential: "Diploma",
    focus:
      "supporting occupational therapists with daily living, activity, and adaptive equipment",
    outcomes:
      "preparation for occupational therapy assistant roles under the supervision of an occupational therapist",
    modules: [
      "Occupation, function, and client-centred support",
      "Activities of daily living and adaptive strategies",
      "Therapeutic activity and equipment basics",
      "Observation, documentation, and teamwork",
    ],
    practicum: "Placement in a rehabilitation, community, or care setting",
  },
  {
    id: "psw-bridging",
    name: "PSW Bridging",
    field: "Health Sciences",
    credential: "Certificate",
    focus:
      "bridging prior care experience toward personal support worker preparation",
    outcomes:
      "preparation for learners moving into personal support work through a bridging pathway",
    modules: [
      "Personal care skills review and gap training",
      "Canadian care settings, safety, and infection control",
      "Communication, dementia care, and documentation",
      "Professional responsibilities in home and long-term care",
    ],
    practicum: "Supervised care placement arranged by the college",
  },
  {
    id: "early-childcare-assistant",
    name: "Early Childcare Assistant",
    field: "Early Childhood Education",
    credential: "Diploma",
    focus: "assisting with care, play, routines, and supervision of young children",
    outcomes: "preparation for assistant roles in child care settings",
    modules: [
      "Child development and play",
      "Health, safety, and daily routines",
      "Supporting educators and inclusive rooms",
      "Working with families and professional conduct",
    ],
    practicum: "Placement in a child care or early learning setting",
  },
  {
    id: "accounting-payroll-administration",
    name: "Accounting and Payroll Administration",
    field: "Business & Administration",
    credential: "Diploma",
    focus: "bookkeeping, payroll processing, and routine accounting administration",
    outcomes: "preparation for accounting clerk and payroll administration roles",
    modules: [
      "Bookkeeping and the accounting cycle",
      "Payroll calculations, deductions, and records",
      "Spreadsheets and accounting software",
      "Business communication and office procedures",
    ],
    practicum: "Applied accounting project or office placement",
  },
  {
    id: "conference-event-planner",
    name: "Conference and Event Planner",
    field: "Business & Administration",
    credential: "Diploma",
    focus: "planning meetings, conferences, and events from brief to delivery",
    outcomes: "preparation for conference, meeting, and event coordination roles",
    modules: [
      "Event design, timelines, and client briefs",
      "Venues, vendors, and logistics",
      "Budgets, contracts, and promotion",
      "On-site coordination and guest service",
    ],
    practicum: "Event project or placement with a planner or venue",
  },
  {
    id: "customer-service-information-clerk",
    name: "Customer Service and Information Clerk",
    field: "Business & Administration",
    credential: "Certificate",
    focus: "front-line customer service, inquiries, and information desk work",
    outcomes: "preparation for customer service and information clerk roles",
    modules: [
      "Customer communication in person, phone, and email",
      "Inquiry handling and information resources",
      "Cash, records, and office software basics",
      "Professional conduct and conflict basics",
    ],
    practicum: "Customer-service placement or simulated service desk",
  },
  {
    id: "international-hospitality-management",
    name: "International Hospitality Management",
    field: "Hospitality & Wellness",
    credential: "Diploma",
    focus:
      "hotel, food, and guest-service management with an international hospitality context",
    outcomes: "preparation for supervisory roles in hotels and hospitality operations",
    modules: [
      "Hospitality operations and guest service",
      "Front office, housekeeping, and food service coordination",
      "Marketing, sales, and cultural awareness",
      "Supervision, cost control, and professional practice",
    ],
    practicum: "Hospitality placement or an applied operations project",
  },
  {
    id: "marketing-coordinator",
    name: "Marketing Coordinator",
    field: "Business & Administration",
    credential: "Diploma",
    focus: "campaign support, content, and marketing coordination for businesses",
    outcomes: "preparation for marketing coordinator and junior marketing roles",
    modules: [
      "Marketing principles and customer research",
      "Campaign planning and promotion",
      "Digital content and social channels",
      "Reporting, budgets, and workplace communication",
    ],
    practicum: "Marketing project or placement",
  },
  {
    id: "project-administration",
    name: "Project Administration",
    field: "Business & Administration",
    credential: "Diploma",
    focus: "schedules, documentation, and coordination that keep projects on track",
    outcomes: "preparation for project administration and coordinator support roles",
    modules: [
      "Project lifecycle and stakeholder communication",
      "Schedules, meetings, and status reporting",
      "Budgets, documents, and office systems",
      "Risk, change, and team coordination basics",
    ],
    practicum: "Applied project or administrative placement",
  },
  {
    id: "sales-professional",
    name: "Sales Professional",
    field: "Business & Administration",
    credential: "Diploma",
    focus: "prospecting, presenting, and closing in business-to-business and retail sales",
    outcomes: "preparation for sales representative and account support roles",
    modules: [
      "Sales process and customer needs",
      "Presentations, proposals, and negotiation",
      "CRM tools and pipeline tracking",
      "Ethics, service after the sale, and communication",
    ],
    practicum: "Sales simulation or workplace placement",
  },
  {
    id: "business-management",
    name: "Business Management",
    field: "Business & Administration",
    credential: "Diploma",
    focus: "supervising people, operations, and day-to-day business decisions",
    outcomes: "preparation for junior management and supervisory roles",
    modules: [
      "Management, leadership, and team communication",
      "Operations, customer service, and quality",
      "Finance basics for supervisors",
      "Planning, problem solving, and professional practice",
    ],
    practicum: "Management project or workplace placement",
  },
  {
    id: "business-digital-marketing-management",
    name: "Business & Digital Marketing Management",
    field: "Business & Administration",
    credential: "Diploma",
    focus: "business operations combined with digital marketing management",
    outcomes:
      "preparation for roles that combine business coordination and digital marketing",
    modules: [
      "Business management and customer strategy",
      "Digital marketing channels and content",
      "Analytics, campaigns, and reporting",
      "Budgets, ethics, and professional communication",
    ],
    practicum: "Digital marketing or business project arranged by the college",
  },
  {
    id: "sustainable-business-management",
    name: "Sustainable Business Management",
    field: "Business & Administration",
    credential: "Diploma",
    focus: "running business operations with sustainability and responsible practice",
    outcomes: "preparation for business roles that include sustainability responsibilities",
    modules: [
      "Business operations and management basics",
      "Sustainability, environment, and community impact",
      "Reporting, procurement, and resource use",
      "Communication, ethics, and project work",
    ],
    practicum: "Sustainability or business project arranged by the college",
  },
  {
    id: "supply-chain-management",
    name: "Supply Chain Management",
    field: "Business & Administration",
    credential: "Diploma",
    focus: "planning the flow of goods from suppliers through to customers",
    outcomes: "preparation for supply chain coordination and planning support roles",
    modules: [
      "Supply chain planning and procurement",
      "Inventory, suppliers, and logistics",
      "Quality, cost, and customer service",
      "Systems, communication, and workplace practice",
    ],
    practicum: "Supply chain project or industry placement",
  },
  {
    id: "warehouse-distribution-management",
    name: "Warehouse & Distribution Management",
    field: "Business & Administration",
    credential: "Diploma",
    focus: "warehouse operations, distribution, and inventory control",
    outcomes: "preparation for warehouse and distribution coordination roles",
    modules: [
      "Warehouse layout, receiving, and shipping",
      "Inventory control and distribution",
      "Workplace safety and equipment awareness",
      "Supervision, software, and customer orders",
    ],
    practicum: "Warehouse project or placement",
  },
  {
    id: "hospitality-management",
    name: "Hospitality Management",
    field: "Hospitality & Wellness",
    credential: "Diploma",
    focus: "guest service, hotel operations, and hospitality supervision",
    outcomes: "preparation for supervisory roles in hotels and hospitality businesses",
    modules: [
      "Guest service and front-office operations",
      "Food, beverage, and housekeeping coordination",
      "Sales, marketing, and cost control",
      "Supervision and professional practice",
    ],
    practicum: "Hospitality placement or operations project",
  },
  {
    id: "social-media-web-marketing",
    name: "Social Media & Web Marketing",
    field: "Business & Administration",
    credential: "Diploma",
    focus: "social media, web content, and online marketing for organizations",
    outcomes: "preparation for social media and web marketing support roles",
    modules: [
      "Social platforms, content, and community management",
      "Web marketing, search, and landing pages",
      "Campaigns, scheduling, and basic analytics",
      "Brand voice, ethics, and client communication",
    ],
    practicum: "Social or web marketing project arranged by the college",
  },
  {
    id: "mastercam-training",
    name: "Mastercam Training",
    field: "Information Technology",
    credential: "Certificate",
    focus: "Mastercam toolpaths and programming used with CNC machining",
    outcomes: "preparation to use Mastercam in a machining or manufacturing setting",
    modules: [
      "CAD geometry for machining",
      "2-axis and multi-axis toolpath basics taught by the college",
      "Setup sheets, simulation, and verification",
      "Shop communication and safe programming practice",
    ],
    practicum: "Mastercam programming project in the college lab",
  },
  {
    id: "solidworks-training",
    name: "SolidWorks Training (Level 1 & 2)",
    field: "Information Technology",
    credential: "Certificate",
    focus: "SolidWorks part, assembly, and drawing skills at Level 1 and Level 2",
    outcomes: "preparation to produce SolidWorks models and drawings for design work",
    modules: [
      "Sketching, parts, and design intent",
      "Assemblies, mates, and configurations",
      "Drawings, dimensions, and detailing",
      "Level 2 modelling topics taught by the college",
    ],
    practicum: "SolidWorks design project in the college lab",
  },
  {
    id: "a-plus-certification-preparation",
    name: "A+ Certification Preparation",
    field: "Information Technology",
    credential: "Certificate",
    focus: "PC hardware, operating systems, and troubleshooting for A+ exam preparation",
    outcomes:
      "preparation for CompTIA A+ style hardware and support exams. The college course is preparation; the certification exam is separate",
    modules: [
      "PC hardware, mobile devices, and peripherals",
      "Operating systems and software troubleshooting",
      "Networking and security basics for support technicians",
      "Operational procedures and customer support",
    ],
    practicum: "Hardware lab troubleshooting project",
  },
  {
    id: "computer-service-technician",
    name: "Computer Service Technician",
    field: "Information Technology",
    credential: "Diploma",
    focus: "diagnosing, repairing, and supporting computers and related devices",
    outcomes: "preparation for computer service and technical support roles",
    modules: [
      "Hardware assembly, repair, and upgrades",
      "Operating systems, software, and data care",
      "Networking basics and peripheral support",
      "Customer service and service documentation",
    ],
    practicum: "Computer service lab or workplace placement",
  },
  {
    id: "it-security-specialist",
    name: "IT Security Specialist",
    field: "Information Technology",
    credential: "Diploma",
    focus: "protecting systems, networks, and data in an IT support environment",
    outcomes: "preparation for junior IT security and secure-support roles",
    modules: [
      "Security principles, threats, and risk basics",
      "Network and endpoint protection",
      "Access control, policies, and incident basics",
      "Professional practice and security awareness",
    ],
    practicum: "Security lab project or IT placement",
  },
  {
    id: "network-administrator",
    name: "Network Administrator",
    field: "Information Technology",
    credential: "Diploma",
    focus: "installing, configuring, and maintaining computer networks",
    outcomes: "preparation for network administration and support roles",
    modules: [
      "Network models, devices, and cabling",
      "Switching, routing, and addressing",
      "Network services, monitoring, and troubleshooting",
      "Security basics and documentation",
    ],
    practicum: "Network lab project or workplace placement",
  },
  {
    id: "pc-support-specialist",
    name: "PC Support Specialist",
    field: "Information Technology",
    credential: "Diploma",
    focus: "desktop support, user issues, and routine PC maintenance",
    outcomes: "preparation for PC support and help-desk roles",
    modules: [
      "PC hardware and operating system support",
      "Software, accounts, and common user problems",
      "Help-desk communication and ticketing",
      "Backup, security hygiene, and documentation",
    ],
    practicum: "Support lab or help-desk placement",
  },
  {
    id: "web-designer",
    name: "Web Designer",
    field: "Information Technology",
    credential: "Diploma",
    focus: "designing and building web pages for organizations and clients",
    outcomes: "preparation for web design and junior front-end roles",
    modules: [
      "Layout, typography, and visual design",
      "HTML, CSS, and responsive pages",
      "Images, content, and basic interactivity",
      "Client briefs, accessibility, and publishing",
    ],
    practicum: "Web design project or placement",
  },
  {
    id: "sas-programming",
    name: "SAS Programming",
    field: "Information Technology",
    credential: "Certificate",
    focus: "SAS programming for data preparation, reporting, and analysis tasks",
    outcomes: "preparation for junior roles that use SAS with business data",
    modules: [
      "SAS environment, data steps, and libraries",
      "Procedures for reporting and summaries",
      "Data cleaning and combining tables",
      "Outputs, documentation, and workplace practice",
    ],
    practicum: "SAS programming project arranged by the college",
  },
  {
    id: "sql-programming",
    name: "SQL Programming",
    field: "Information Technology",
    credential: "Certificate",
    focus: "writing SQL to query, update, and report on relational data",
    outcomes: "preparation for data and reporting roles that use SQL",
    modules: [
      "Tables, keys, and relational data",
      "SELECT queries, filters, and joins",
      "Aggregates, views, and basic data changes",
      "Reporting queries and documentation",
    ],
    practicum: "SQL project using a sample business database",
  },
  {
    id: "python-data-analytics",
    name: "Python for Data Analytics",
    field: "Information Technology",
    credential: "Certificate",
    focus: "Python for cleaning, analysing, and presenting data",
    outcomes: "preparation for analyst-support roles that use Python",
    modules: [
      "Python basics for data work",
      "Data frames, cleaning, and transformation",
      "Summaries, charts, and simple analysis",
      "Sharing results and documenting notebooks",
    ],
    practicum: "Python analytics project arranged by the college",
  },
  {
    id: "tableau-data-analytics",
    name: "Tableau for Data Analytics",
    field: "Information Technology",
    credential: "Certificate",
    focus: "Tableau dashboards and visual analysis for business questions",
    outcomes: "preparation for reporting roles that use Tableau",
    modules: [
      "Connecting to data and preparing fields",
      "Charts, filters, and calculated fields",
      "Dashboards and stories",
      "Sharing workbooks and explaining findings",
    ],
    practicum: "Tableau dashboard project arranged by the college",
  },
  {
    id: "machine-learning",
    name: "Machine Learning",
    field: "Information Technology",
    credential: "Certificate",
    focus: "introductory machine-learning methods for applied data problems",
    outcomes: "preparation to support applied machine-learning projects at a junior level",
    modules: [
      "Data preparation for modelling",
      "Supervised learning methods taught by the college",
      "Model evaluation and common pitfalls",
      "Communicating results and ethical use of models",
    ],
    practicum: "Applied machine-learning project in the college lab",
  },
  {
    id: "sap-s4-hana",
    name: "SAP S4 HANA",
    field: "Information Technology",
    credential: "Diploma",
    focus: "navigation and business processes in SAP S/4HANA",
    outcomes: "preparation for junior SAP support and business-process roles",
    modules: [
      "SAP navigation and master data",
      "Core business processes taught by the college",
      "Reporting and transaction support",
      "Workplace communication and process documentation",
    ],
    practicum: "SAP process exercises or an applied case",
  },
  {
    id: "data-science-application",
    name: "Data Science and Application",
    field: "Information Technology",
    credential: "Diploma",
    focus: "applied data science for business and operational questions",
    outcomes: "preparation for junior data analysis and applied data science roles",
    modules: [
      "Data collection, cleaning, and exploration",
      "Statistics and analysis for decisions",
      "Visualisation and reporting",
      "An applied data project and professional practice",
    ],
    practicum: "Applied data science project arranged by the college",
  },
  {
    id: "network-cloud-computing",
    name: "Network Cloud Computing",
    field: "Information Technology",
    credential: "Diploma",
    focus: "networks together with cloud services used by organizations",
    outcomes: "preparation for junior cloud and network support roles",
    modules: [
      "Network fundamentals and connectivity",
      "Cloud service models and core services",
      "Identity, storage, and basic deployment",
      "Security, monitoring, and documentation",
    ],
    practicum: "Cloud and network lab project",
  },
  {
    id: "erp-sap-supply-chain-management",
    name: "ERP SAP Supply Chain Management",
    field: "Information Technology",
    credential: "Diploma",
    focus: "supply chain processes carried out in an SAP ERP environment",
    outcomes: "preparation for SAP supply chain support and coordination roles",
    modules: [
      "Supply chain flows and master data",
      "Procurement, inventory, and order processes in SAP",
      "Reporting and exception handling",
      "Process documentation and workplace practice",
    ],
    practicum: "SAP supply chain case or lab project",
  },
  {
    id: "data-analytics-business-intelligence",
    name: "Data Analytics & Business Intelligence",
    field: "Information Technology",
    credential: "Diploma",
    focus: "analysing business data and presenting it for decisions",
    outcomes: "preparation for business intelligence and data analytics support roles",
    modules: [
      "Business questions, data sources, and quality",
      "Analysis with spreadsheets, SQL, or related tools",
      "Dashboards and business intelligence reporting",
      "Insights, ethics, and stakeholder communication",
    ],
    practicum: "Business intelligence project arranged by the college",
  },
  {
    id: "cybersecurity-specialist",
    name: "Cybersecurity Specialist",
    field: "Information Technology",
    credential: "Diploma",
    focus: "defensive cybersecurity skills for organizational IT environments",
    outcomes: "preparation for junior cybersecurity analyst and specialist support roles",
    modules: [
      "Threats, vulnerabilities, and security foundations",
      "Network, system, and application security basics",
      "Monitoring, incident response basics, and controls",
      "Policy, privacy, and professional practice",
    ],
    practicum: "Cybersecurity lab project arranged by the college",
  },
  {
    id: "network-system-administrator",
    name: "Network System Administrator",
    field: "Information Technology",
    credential: "Diploma",
    focus: "administering servers and networks for day-to-day IT operations",
    outcomes: "preparation for network and systems administration roles",
    modules: [
      "Server operating systems and accounts",
      "Network services and directory basics",
      "Backup, monitoring, and troubleshooting",
      "Security hygiene and documentation",
    ],
    practicum: "Systems lab project or IT placement",
  },
  {
    id: "network-system-engineer",
    name: "Network System Engineer",
    field: "Information Technology",
    credential: "Diploma",
    focus: "designing and implementing network and system solutions",
    outcomes: "preparation for junior network systems engineering roles",
    modules: [
      "Network design and infrastructure",
      "Routing, switching, and system integration",
      "Implementation, testing, and documentation",
      "Security and operational handoff",
    ],
    practicum: "Network engineering lab project",
  },
  {
    id: "computer-business-applications-specialist",
    name: "Computer Business Applications Specialist",
    field: "Information Technology",
    credential: "Diploma",
    focus: "office software and business applications used in Canadian workplaces",
    outcomes: "preparation for business application and office technology roles",
    modules: [
      "Documents, spreadsheets, and presentations",
      "Databases and business information tools",
      "Collaboration software and file management",
      "Accuracy, privacy, and professional communication",
    ],
    practicum: "Business applications project or office placement",
  },
  {
    id: "web-mobile-application",
    name: "Web & Mobile Application",
    field: "Information Technology",
    credential: "Diploma",
    focus: "building web and mobile applications for business use",
    outcomes: "preparation for junior web and mobile application roles",
    modules: [
      "Interface design for web and mobile",
      "Application development tools taught by the college",
      "Data, forms, and user flows",
      "Testing, publishing, and client communication",
    ],
    practicum: "Web or mobile application project",
  },
  {
    id: "red-hat-system-administration",
    name: "Red Hat System Administration",
    field: "Information Technology",
    credential: "Diploma",
    focus: "Linux system administration with Red Hat enterprise practices",
    outcomes: "preparation for junior Linux and Red Hat system administration roles",
    modules: [
      "Linux command line and file systems",
      "Users, permissions, and software packages",
      "Networking, services, and storage basics",
      "Troubleshooting, security, and documentation",
    ],
    practicum: "Linux administration lab project",
  },
  {
    id: "it-support-software-qa",
    name: "IT Support with Support QA",
    field: "Information Technology",
    credential: "Diploma",
    focus: "IT user support together with software testing and quality checks",
    outcomes: "preparation for IT support roles that include software quality tasks",
    modules: [
      "Help desk, hardware, and user support",
      "Ticketing, documentation, and communication",
      "Software testing, defects, and quality basics",
      "Test cases, reporting, and professional practice",
    ],
    practicum: "Support and testing project or placement",
  },
  {
    id: "post-grad-data-science-ai",
    name: "Post-Grad Diploma in Data Science & AI",
    field: "Information Technology",
    credential: "Diploma",
    focus: "post-graduate study in applied data science and artificial intelligence",
    outcomes:
      "preparation for applied data science and AI support roles after prior post-secondary study, as required by the college",
    modules: [
      "Data preparation and analysis",
      "Machine learning and AI methods taught by the college",
      "Model evaluation and responsible use",
      "An applied project and professional reporting",
    ],
    practicum: "Applied data science or AI project",
  },
  {
    id: "post-grad-enterprise-linux",
    name: "Post-Grad Diploma in Enterprise Linux Administration",
    field: "Information Technology",
    credential: "Diploma",
    focus: "post-graduate enterprise Linux administration for organizational systems",
    outcomes:
      "preparation for enterprise Linux administration roles after prior post-secondary study, as required by the college",
    modules: [
      "Enterprise Linux installation and configuration",
      "Users, services, storage, and networking",
      "Security, automation, and troubleshooting",
      "Documentation and operational practice",
    ],
    practicum: "Enterprise Linux lab project",
  },
  {
    id: "post-grad-enterprise-resource-planning",
    name: "Post-Grad Diploma in Enterprise Resource Planning",
    field: "Information Technology",
    credential: "Diploma",
    focus: "post-graduate study of ERP systems and cross-functional business processes",
    outcomes:
      "preparation for ERP support and process roles after prior post-secondary study, as required by the college",
    modules: [
      "ERP concepts and integrated business processes",
      "Finance, supply chain, or related modules taught by the college",
      "Configuration support, reporting, and master data",
      "Project documentation and professional practice",
    ],
    practicum: "ERP case or lab project",
  },
  {
    id: "cnc-lathe-operator",
    name: "CNC & Lathe Operator",
    field: "Skilled Trades",
    credential: "Certificate",
    focus: "operating CNC and lathe equipment in a machine shop",
    outcomes: "preparation for CNC and lathe operator roles",
    modules: [
      "Shop safety, measurement, and blueprint reading",
      "Lathe setup and basic machining",
      "CNC operation, offsets, and program running",
      "Quality checks and workplace routines",
    ],
    practicum: "Machine-shop lab practice arranged by the college",
  },
  {
    id: "cnc-mill-lathe-setup",
    name: "CNC Mill & Lathe Setup",
    field: "Skilled Trades",
    credential: "Certificate",
    focus: "setting up CNC mills and lathes for production work",
    outcomes: "preparation for CNC mill and lathe setup roles",
    modules: [
      "Workholding, tooling, and machine setup",
      "Offsets, tooling data, and first-piece checks",
      "Mill and lathe setup differences",
      "Safety, quality, and shop communication",
    ],
    practicum: "CNC setup practice in the college shop",
  },
  {
    id: "cnc-programmer-operator-setup",
    name: "CNC Programmer/Operator/Setup Certificate",
    field: "Skilled Trades",
    credential: "Certificate",
    focus: "CNC programming, setup, and operation as one certificate pathway",
    outcomes: "preparation for CNC programming, setup, and operator work",
    modules: [
      "Blueprint reading, measurement, and shop safety",
      "CNC programming basics",
      "Machine setup and operation",
      "Inspection and process documentation",
    ],
    practicum: "CNC programming and setup project in the college shop",
  },
  {
    id: "cnc-machine-tool-operator-programmer",
    name: "CNC Machine Tool Operator and Programmer",
    field: "Skilled Trades",
    credential: "Diploma",
    focus: "operating and programming CNC machine tools",
    outcomes: "preparation for CNC machine tool operator and programmer roles",
    modules: [
      "Machining fundamentals and safety",
      "CNC programming and verification",
      "Setup, operation, and tooling",
      "Quality control and shop documentation",
    ],
    practicum: "CNC machine-tool project in the college shop",
  },
  {
    id: "home-inspection",
    name: "Home Inspection",
    field: "Skilled Trades",
    credential: "Certificate",
    focus: "inspecting residential buildings and reporting visible conditions",
    outcomes:
      "preparation for home inspection work, subject to provincial licensing or association rules where they apply",
    modules: [
      "Building structure, roof, and exterior",
      "Electrical, plumbing, and HVAC overview",
      "Interior, insulation, and moisture issues",
      "Inspection reporting and professional conduct",
    ],
    practicum: "Supervised inspection practice or a reporting project",
  },
  {
    id: "construction-maintenance-electrician",
    name: "Construction Maintenance Electrician",
    field: "Skilled Trades",
    credential: "Diploma",
    focus:
      "electrical installation and maintenance skills taught as a private-college program",
    outcomes:
      "preparation for electrical helper or further apprenticeship pathways. A private-college diploma is not a provincial trade certificate",
    modules: [
      "Electrical safety, codes awareness, and tools",
      "Circuit theory and wiring methods",
      "Residential and maintenance electrical tasks",
      "Blueprint reading and workplace practice",
    ],
    practicum: "Electrical lab practice arranged by the college",
  },
  {
    id: "hvac",
    name: "HVAC",
    field: "Skilled Trades",
    credential: "Diploma",
    focus: "heating, ventilation, and air-conditioning installation and service basics",
    outcomes:
      "preparation for HVAC helper roles or further apprenticeship pathways. A private-college diploma is not a provincial trade certificate",
    modules: [
      "HVAC safety, tools, and system overview",
      "Heating and cooling equipment basics",
      "Airflow, controls, and routine maintenance",
      "Customer communication and workplace practice",
    ],
    practicum: "HVAC lab practice arranged by the college",
  },
  {
    id: "welding",
    name: "Welding",
    field: "Skilled Trades",
    credential: "Diploma",
    focus: "welding processes, shop safety, and fabrication basics",
    outcomes:
      "preparation for welding helper or further apprenticeship pathways. A private-college diploma is not a provincial trade certificate",
    modules: [
      "Shop safety, tools, and metal preparation",
      "Welding processes taught by the college",
      "Joints, positions, and quality checks",
      "Blueprint reading and fabrication practice",
    ],
    practicum: "Welding shop practice arranged by the college",
  },
  {
    id: "civil-structural-engineering-design",
    name: "Civil/Structural Engineering Design and Technology",
    field: "Skilled Trades",
    credential: "Diploma",
    focus: "civil and structural drawings and design-technology support",
    outcomes:
      "preparation for civil or structural design-technology support roles. The diploma is not a professional engineering licence",
    modules: [
      "Drafting standards and construction documents",
      "Civil and structural drawing basics",
      "Materials, loads, and design-support calculations taught by the college",
      "Software, coordination, and professional practice",
    ],
    practicum: "Civil or structural design project",
  },
  {
    id: "mechanical-engineering-design",
    name: "Mechanical Engineering Design and Technology",
    field: "Skilled Trades",
    credential: "Diploma",
    focus: "mechanical drawings, modelling, and design-technology support",
    outcomes:
      "preparation for mechanical design-technology support roles. The diploma is not a professional engineering licence",
    modules: [
      "Mechanical drafting and drawing standards",
      "Parts, assemblies, and design software",
      "Materials, fits, and manufacturing awareness",
      "Documentation and professional practice",
    ],
    practicum: "Mechanical design project",
  },
  {
    id: "autocad-2d-3d",
    name: "AutoCAD 2D & 3D",
    field: "Skilled Trades",
    credential: "Certificate",
    focus: "AutoCAD drafting in 2D and 3D",
    outcomes: "preparation for drafting support roles that use AutoCAD",
    modules: [
      "AutoCAD interface, drawing, and editing",
      "Layers, annotation, and plotting",
      "3D modelling topics taught by the college",
      "Drawing standards and file management",
    ],
    practicum: "AutoCAD drawing project",
  },
  {
    id: "staad-pro",
    name: "STAAD Pro",
    field: "Skilled Trades",
    credential: "Certificate",
    focus: "structural modelling and analysis support with STAAD Pro",
    outcomes:
      "preparation to use STAAD Pro in a design-support role. The course is not a professional engineering licence",
    modules: [
      "Model geometry and supports",
      "Loads and analysis basics",
      "Reviewing results and member checks at the level taught",
      "Documentation and drawing coordination",
    ],
    practicum: "STAAD Pro modelling project",
  },
  {
    id: "civil-3d",
    name: "Civil 3D",
    field: "Skilled Trades",
    credential: "Certificate",
    focus: "civil design drawings and models in Civil 3D",
    outcomes: "preparation for civil drafting support roles that use Civil 3D",
    modules: [
      "Surfaces, points, and survey data basics",
      "Alignments, profiles, and corridors at the level taught",
      "Pipe networks or grading topics taught by the college",
      "Plan production and file management",
    ],
    practicum: "Civil 3D drawing project",
  },
  {
    id: "in-roads",
    name: "In Roads",
    field: "Skilled Trades",
    credential: "Certificate",
    focus: "civil roadway design drawings using InRoads",
    outcomes: "preparation for civil drafting support that uses InRoads",
    modules: [
      "Project data, surfaces, and geometry",
      "Alignments and roadway modelling basics",
      "Plan, profile, and output drawings",
      "File setup and coordination practice",
    ],
    practicum: "InRoads drawing project",
  },
  {
    id: "renovation-construction-technician",
    name: "Renovation & Construction Technician",
    field: "Skilled Trades",
    credential: "Diploma",
    focus: "residential renovation and construction technician skills",
    outcomes: "preparation for renovation and construction technician support roles",
    modules: [
      "Construction safety, tools, and materials",
      "Framing, finishes, and renovation methods",
      "Reading drawings and estimating basics",
      "Jobsite communication and quality checks",
    ],
    practicum: "Renovation lab or construction project",
  },
  {
    id: "home-inspection-certificate",
    name: "Home Inspection Certificate",
    field: "Skilled Trades",
    credential: "Certificate",
    focus: "a certificate pathway in residential home inspection and reporting",
    outcomes:
      "preparation for home inspection work at certificate level, subject to provincial rules where they apply",
    modules: [
      "Residential systems and components",
      "Inspection procedures and defect recognition",
      "Report writing and photographs",
      "Ethics, standards, and client communication",
    ],
    practicum: "Inspection practice and a sample report",
  },
  {
    id: "home-inspection-diploma",
    name: "Home Inspection Diploma",
    field: "Skilled Trades",
    credential: "Diploma",
    focus: "a longer diploma pathway in residential home inspection",
    outcomes:
      "preparation for home inspection work at diploma level, subject to provincial rules where they apply",
    modules: [
      "Structure, envelope, and interior systems",
      "Mechanical, electrical, and plumbing overviews",
      "Standards of practice and reporting",
      "Business practice for inspectors",
    ],
    practicum: "Supervised inspections and reporting assignments",
  },
  {
    id: "food-service-worker-online",
    name: "Food Service Worker Online",
    field: "Hospitality & Wellness",
    credential: "Certificate",
    focus:
      "food preparation support, service, and safety, delivered online by the college",
    outcomes:
      "preparation for food service roles in restaurants, care facilities, and institutional kitchens",
    modules: [
      "Food safety and sanitation",
      "Basic food preparation and kitchen routines",
      "Customer service and dining support",
      "Workplace safety and teamwork",
    ],
    practicum: "Online applied assignments or a placement where the college requires one",
  },
  {
    id: "addictions-community-services-worker",
    name: "Addictions & Community Services Worker",
    field: "Community & Social Services",
    credential: "Diploma",
    focus: "addiction support together with community services practice",
    outcomes:
      "preparation for addictions and community service roles in agencies and community programs",
    modules: [
      "Addiction, recovery, and community resources",
      "Interviewing, case notes, and client support",
      "Harm reduction, crisis basics, and ethics",
      "Group work and agency practice",
    ],
    practicum: "Placement in an addictions or community service agency",
  },
  {
    id: "addictions-recovery-support",
    name: "Addictions Recovery Support (Youth & Families)",
    field: "Community & Social Services",
    credential: "Diploma",
    focus: "recovery support for youth and families affected by addiction",
    outcomes:
      "preparation for recovery-support roles with youth and families in community settings",
    modules: [
      "Youth development and family systems",
      "Addiction, recovery, and support planning",
      "Trauma-informed communication and boundaries",
      "Community resources, documentation, and ethics",
    ],
    practicum: "Placement with a youth, family, or recovery-support service",
  },
  {
    id: "child-youth-services-worker",
    name: "Child and Youth Services Worker",
    field: "Community & Social Services",
    credential: "Diploma",
    focus: "supporting children and youth in community and care settings",
    outcomes: "preparation for child and youth service roles in agencies and programs",
    modules: [
      "Child and youth development",
      "Behaviour support and relationship-building",
      "Family, community, and cultural context",
      "Documentation, ethics, and professional boundaries",
    ],
    practicum: "Placement in a child or youth service setting",
  },
  {
    id: "education-assistant",
    name: "Education Assistant",
    field: "Community & Social Services",
    credential: "Diploma",
    focus: "supporting teachers and students in classroom and school settings",
    outcomes: "preparation for education assistant roles in schools",
    modules: [
      "Learning, behaviour, and classroom support",
      "Inclusive practice and student needs",
      "Communication with teachers, students, and families",
      "Safety, documentation, and professional conduct",
    ],
    practicum: "School or classroom placement where the college arranges one",
  },
  {
    id: "legal-administrative-assistant",
    name: "Legal Administrative Assistant",
    field: "Justice & Public Safety",
    credential: "Diploma",
    focus: "legal office administration, documents, and file support",
    outcomes: "preparation for legal administrative assistant roles in law offices",
    modules: [
      "Legal office procedures and terminology",
      "Documents, correspondence, and file management",
      "Scheduling, billing support, and records",
      "Confidentiality and professional communication",
    ],
    practicum: "Legal office placement or simulated practice",
  },
  {
    id: "law-clerk",
    name: "Law Clerk",
    field: "Justice & Public Safety",
    credential: "Diploma",
    focus: "legal research support, documents, and file work under a lawyer",
    outcomes:
      "preparation for law clerk studies at a private college. Scope of work is set by the employer and provincial rules",
    modules: [
      "Canadian legal system and file practice",
      "Legal documents and writing",
      "Research support and procedure taught by the college",
      "Ethics, confidentiality, and client communication",
    ],
    practicum: "Law office placement or simulated practice",
  },
  {
    id: "immigration-assistant",
    name: "Immigration Assistant",
    field: "Justice & Public Safety",
    credential: "Diploma",
    focus: "administrative support for immigration files and client inquiries",
    outcomes:
      "preparation for immigration office support roles. Giving immigration advice to the public is regulated, so confirm the permitted scope with the college",
    modules: [
      "Immigration process overview and terminology",
      "Forms, files, and document checklists",
      "Client communication and office procedures",
      "Privacy, ethics, and professional limits",
    ],
    practicum: "Office placement or a simulated immigration-file project",
  },
  {
    id: "security-guard",
    name: "Security Guard",
    field: "Justice & Public Safety",
    credential: "Certificate",
    focus: "security observation, access control, and incident reporting",
    outcomes:
      "preparation for security guard training. Provincial licensing is separate where it is required",
    modules: [
      "Roles, law awareness, and use-of-force limits taught by the college",
      "Patrol, access control, and observation",
      "Incident notes, reports, and communication",
      "Safety, ethics, and customer contact",
    ],
    practicum: "Scenario practice or a placement where the college offers one",
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
