export const site = {
  name: "AC Education Consulting",
  tagline: "Master’s programs, government funding, and career support",
  email: "agnescamalla@aceductationconsulting.com",
  phone: "416-809-1298",
  location: "Serving Canadian citizens, permanent residents, and refugees across Canada",
  disclaimer:
    "AC Education Consulting is an independent advisory service. We are not affiliated with, endorsed by, or representatives of any college or university.",
};

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#funding", label: "Funding" },
  { href: "#programs", label: "Programs" },
  { href: "#directory", label: "Directory" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

export const whoWeServe = [
  {
    title: "Canadian citizens",
    description:
      "Domestic applicants looking for the right master’s or graduate-level program and the funding that can support it.",
  },
  {
    title: "Permanent residents",
    description:
      "PR holders ready to advance with a master’s degree or graduate credential at a Canadian college or university.",
  },
  {
    title: "Refugees & protected persons",
    description:
      "Eligible refugee and protected-person clients navigating program choice, student aid applications, and next-step career plans.",
  },
] as const;

export const services = [
  {
    title: "Right college & university fit",
    description:
      "We help you compare master’s and graduate-level options at community colleges and universities—based on your goals, background, and where you live. We are not affiliated with any institution.",
  },
  {
    title: "Government grants & student loans",
    description:
      "We guide you through OSAP in Ontario and the student assistance system in your province so you understand grants, loans, and how to apply for support you may be eligible for.",
  },
  {
    title: "Application guidance",
    description:
      "We help organize transcripts, references, statements, and timelines so your applications to colleges and universities are complete and competitive.",
  },
  {
    title: "Career support after graduation",
    description:
      "Once you successfully complete your program, we assist with career planning—résumés, role targeting, and connecting your credential to real job opportunities in Canada.",
  },
] as const;

export const fundingHighlights = [
  {
    title: "OSAP (Ontario)",
    description:
      "For eligible students studying in Ontario, we walk through the Ontario Student Assistance Program—grants, loans, and how your course load and income can affect your award.",
  },
  {
    title: "Provincial student aid",
    description:
      "Outside Ontario, each province has its own student assistance system. We help you identify the right portal and documents for where you live and plan to study.",
  },
  {
    title: "Grants vs. loans",
    description:
      "We explain the difference between non-repayable grants and repayable loans so you can plan realistically before you accept an offer.",
  },
  {
    title: "Eligibility clarity",
    description:
      "Citizenship, PR, and refugee/protected-person status can affect funding. We help you understand what typically applies—and what you should confirm with the official aid office.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discovery consult",
    description:
      "We learn your status (citizen, PR, or refugee/protected person), academic background, career goals, and preferred province of study.",
  },
  {
    step: "02",
    title: "Program shortlist",
    description:
      "We shortlist master’s and graduate-level programs at colleges and universities that fit you—without institutional affiliation or pressure toward a single school.",
  },
  {
    step: "03",
    title: "Funding & applications",
    description:
      "We support your school applications and help you navigate OSAP or your province’s student assistance system for grants and loans.",
  },
  {
    step: "04",
    title: "Career after graduation",
    description:
      "After you successfully pass your course, we help you plan the next step—job search strategy and career positioning with your new credential.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "As a permanent resident, I needed a master’s option I could fund through OSAP. AC Education helped me compare programs and submit a clearer aid application.",
    name: "Amara O.",
    detail: "Permanent resident · Ontario",
  },
  {
    quote:
      "They explained Alberta Student Aid in plain language and helped me choose a graduate program that matched the career I wanted after finishing.",
    name: "Daniel K.",
    detail: "Canadian citizen · Alberta",
  },
  {
    quote:
      "I appreciated that they were honest about not being part of any school—and still guided me on funding and what to do after I graduated.",
    name: "Priya S.",
    detail: "Protected person · British Columbia",
  },
] as const;

export const faqs = [
  {
    question: "Who do you work with?",
    answer:
      "We work with Canadian citizens, permanent residents, and refugees/protected persons. We do not provide overseas recruitment, study-permit, or visa assistance.",
  },
  {
    question: "Do you only advise on master’s programs?",
    answer:
      "Yes. We focus on master’s and graduate-level programs offered through Canadian community colleges and universities. We are not affiliated with those institutions.",
  },
  {
    question: "Can you guarantee OSAP or provincial funding?",
    answer:
      "No. Funding decisions are made by OSAP and each province’s student assistance office. We help you prepare a stronger, clearer application and understand what information those systems typically need.",
  },
  {
    question: "Are you part of a college or university?",
    answer:
      "No. AC Education Consulting is independent. We help you choose among institutions; we do not represent or receive placement direction from any school.",
  },
  {
    question: "What happens after I finish my program?",
    answer:
      "We can assist with career planning after you successfully complete your course—clarifying target roles, strengthening application materials, and aligning your credential with the Canadian job market.",
  },
] as const;
