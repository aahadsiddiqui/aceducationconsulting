export const site = {
  name: "Ace Education Consulting",
  tagline: "Your pathway to Canadian college success",
  email: "agnescamalla@aceductationconsulting.com",
  phone: "416-809-1298",
  location: "Serving students across Canada & internationally",
};

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#programs", label: "Programs" },
  { href: "#directory", label: "Directory" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

export const services = [
  {
    title: "Program & province matching",
    description:
      "We map your academic background, career goals, and budget to the right Canadian college diploma or certificate—and the province where that pathway works best.",
  },
  {
    title: "Full application processing",
    description:
      "From document checklists to submission timelines, we manage college applications end-to-end so nothing critical is missed.",
  },
  {
    title: "Study permit guidance",
    description:
      "Clear advice on study permit preparation, supporting documents, and what institutions typically expect from international applicants.",
  },
  {
    title: "Accommodation & arrival support",
    description:
      "Help securing suitable on-campus or off-campus housing and a practical landing plan for your first weeks in Canada.",
  },
  {
    title: "On-campus mentorship",
    description:
      "Continued guidance after you arrive—registration questions, academic adjustment, and next-step career planning.",
  },
  {
    title: "Sponsor & family advisory",
    description:
      "Transparent updates for parents and sponsors on timelines, tuition planning, and what success looks like at each stage.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discovery consult",
    description:
      "Share your goals, transcripts, and preferred fields. We clarify eligibility, timelines, and realistic college options.",
  },
  {
    step: "02",
    title: "Province & program shortlist",
    description:
      "Using our course directory and labour-market insight, we shortlist programs across the provinces that fit you best.",
  },
  {
    step: "03",
    title: "Applications & offers",
    description:
      "We prepare a polished application package, track deadlines, and help you compare offers when they arrive.",
  },
  {
    step: "04",
    title: "Permit, housing & launch",
    description:
      "Study permit support, housing options, and a pre-departure checklist so you land ready to succeed.",
  },
] as const;

export const whyCanada = [
  {
    title: "Globally respected credentials",
    description:
      "Canadian college diplomas and certificates are recognized worldwide and built around applied, career-ready learning.",
  },
  {
    title: "Work-integrated pathways",
    description:
      "Many programs include practicums, co-ops, or clinics—experience employers actually look for after graduation.",
  },
  {
    title: "Provincial choice & lifestyle",
    description:
      "From Ontario’s scale to Atlantic affordability and B.C.’s Pacific economy, province choice shapes cost, community, and opportunity.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Ace Education helped me choose a Personal Support Worker pathway in Ontario that matched my timeline and clinical goals. The application felt organized from day one.",
    name: "Amara O.",
    detail: "PSW Certificate · Ontario",
  },
  {
    quote:
      "I was torn between IT programs in Alberta and B.C. Their directory breakdown made the differences clear, and I accepted an offer with confidence.",
    name: "Daniel K.",
    detail: "Information Technology · Alberta",
  },
  {
    quote:
      "As a parent, I needed clarity on costs, housing, and study permits. Ace Education kept us informed at every stage without the jargon.",
    name: "Priya S.",
    detail: "Sponsor · Early Childhood Education",
  },
] as const;

export const faqs = [
  {
    question: "Do you only work with students outside Canada?",
    answer:
      "Most of our clients are international applicants, but we also support newcomers and domestic students comparing college diploma and certificate options across provinces.",
  },
  {
    question: "Can you guarantee admission or a study permit?",
    answer:
      "No ethical consultancy can guarantee outcomes. We strengthen your applications, keep documentation complete, and prepare you thoroughly—decisions remain with colleges and immigration authorities.",
  },
  {
    question: "How is the course directory different from a college website?",
    answer:
      "College sites describe one institution. Our directory compares program pathways by province, so you can see how the same field (for example Business Administration) is framed in Ontario versus Alberta or B.C.",
  },
  {
    question: "Which programs do you advise on?",
    answer:
      "Ace Education Consulting focuses on the career-oriented diploma and certificate programs listed in our directory—health, business, technology, community services, dental support, and justice foundations.",
  },
  {
    question: "How long does the process usually take?",
    answer:
      "Plan 4–8 months before your intended start for applications, offers, and study permit processing. Some intakes move faster; we build a timeline around your target semester.",
  },
] as const;
