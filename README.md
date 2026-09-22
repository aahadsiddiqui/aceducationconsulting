# Ace Education Consulting

Education consulting website for Canadian college diploma and certificate pathways—with a province → program course directory.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Site sections

- Hero & navigation
- Why Ace / services / why Canada
- Programs by category + all 10 provinces
- Interactive course directory (every province × program)
- Process, testimonials, FAQ
- Contact & footer

## Data

All pathway content is generated in `src/lib/courseData.ts` with province-specific framing for each program. Site copy lives in `src/lib/siteContent.ts`.
