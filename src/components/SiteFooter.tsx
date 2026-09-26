import Image from "next/image";
import { navLinks, site } from "@/lib/siteContent";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-[color:var(--bg)] pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start lg:px-8">
        <div className="min-w-0">
          <Image
            src="/images/ac-logo.png"
            alt="AC Education Consulting Inc. Your future starts now."
            width={745}
            height={538}
            className="h-auto w-36 sm:w-44"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-[color:var(--muted)]">
            {site.tagline}. For Canadian citizens, permanent residents, and
            refugees.
          </p>
          <p className="mt-3 max-w-sm text-xs leading-relaxed text-white/40">
            {site.disclaimer}
          </p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex min-h-11 items-center rounded-md px-2 text-sm text-[color:var(--muted)] transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-[color:var(--line)]">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs leading-relaxed text-white/40 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {site.name}. Program and funding details
          are advisory summaries—always confirm admissions, fees, and student aid
          eligibility with the institution and the official government aid
          office.
        </p>
      </div>
    </footer>
  );
}
