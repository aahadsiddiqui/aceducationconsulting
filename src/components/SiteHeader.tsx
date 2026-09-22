"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/siteContent";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onLight = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        onLight
          ? "bg-[color:var(--snow)]/95 backdrop-blur-md border-b border-[color:var(--line)] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <a
          href="#top"
          className={`font-[family-name:var(--font-display)] text-lg tracking-tight sm:text-xl transition-colors ${
            onLight ? "text-[color:var(--ink)]" : "text-white"
          }`}
        >
          {site.name}
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                onLight
                  ? "text-[color:var(--muted)] hover:text-[color:var(--ink)] focus-visible:ring-[color:var(--pine)]/40"
                  : "text-white/85 hover:text-white focus-visible:ring-white/50 focus-visible:ring-offset-[color:var(--ink)]"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`rounded-md px-3.5 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
              onLight
                ? "bg-[color:var(--ink)] text-white hover:bg-[color:var(--pine)] focus-visible:ring-[color:var(--pine)]/50"
                : "bg-white text-[color:var(--ink)] hover:bg-white/90 focus-visible:ring-white/60 focus-visible:ring-offset-[color:var(--ink)]"
            }`}
          >
            Book a consult
          </a>
        </nav>

        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-md p-2 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--pine)]/40 transition-colors ${
            onLight ? "text-[color:var(--ink)]" : "text-white"
          }`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden className="flex h-5 w-6 flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-current transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-[color:var(--line)] bg-[color:var(--snow)] px-4 py-4 md:hidden animate-fade-in"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-[color:var(--ink)] hover:bg-[color:var(--mist)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-[color:var(--ink)] px-3 py-3 text-center text-base font-medium text-white"
            >
              Book a consult
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
