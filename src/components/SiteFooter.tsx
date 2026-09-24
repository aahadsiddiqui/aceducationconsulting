import { navLinks, site } from "@/lib/siteContent";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-[color:var(--bg)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl text-white">
            {site.name}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-[color:var(--muted)]">
            {site.tagline}. For Canadian citizens, permanent residents, and
            refugees.
          </p>
          <p className="mt-3 max-w-sm text-xs leading-relaxed text-white/40">
            {site.disclaimer}
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[color:var(--muted)] transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-[color:var(--line)]">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-white/40 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {site.name}. Program and funding details
          are advisory summaries—always confirm admissions, fees, and student aid
          eligibility with the institution and the official government aid
          office.
        </p>
      </div>
    </footer>
  );
}
