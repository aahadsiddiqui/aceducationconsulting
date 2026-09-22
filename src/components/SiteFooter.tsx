import { navLinks, site } from "@/lib/siteContent";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-[color:var(--snow)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl text-[color:var(--ink)]">
            {site.name}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-[color:var(--muted)]">
            {site.tagline}. Helping students navigate Canadian college diplomas
            and certificates with clarity.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[color:var(--muted)] transition hover:text-[color:var(--ink)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-[color:var(--line)]">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-[color:var(--muted)] sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {site.name}. Program details are advisory
          summaries—always confirm admissions, fees, and credential recognition
          with the issuing college.
        </p>
      </div>
    </footer>
  );
}
