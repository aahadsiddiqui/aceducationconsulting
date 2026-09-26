"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks, site } from "@/lib/siteContent";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((link) => link.href.slice(1));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.15, 0.4] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-300 ${
        solid
          ? "border-b border-[color:var(--line)] bg-[color:var(--bg)]/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-[calc(env(safe-area-inset-top)+0.75rem)] focus:z-[60] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/ac-mark.png"
            alt=""
            width={473}
            height={338}
            priority
            className="h-11 w-auto shrink-0 sm:h-14"
          />
          <span className="truncate font-[family-name:var(--font-display)] text-sm tracking-tight text-white sm:text-lg lg:text-xl">
            {site.name}
          </span>
        </a>

        <nav className="hidden items-center gap-x-3 xl:gap-x-5 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const current = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={current ? "true" : undefined}
                className={`rounded-sm px-1 py-2 text-[13px] font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 xl:text-sm ${
                  current ? "text-white" : "text-white/75 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#contact"
            className="ml-1 inline-flex min-h-10 items-center rounded-md bg-white px-3.5 py-2 text-sm font-medium text-black transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            Book a consult
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-white lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden className="flex h-5 w-6 flex-col justify-between">
            <span
              className={`h-0.5 w-full origin-center bg-current transition ${open ? "translate-y-[9px] rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-current transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full origin-center bg-current transition ${open ? "-translate-y-[9px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="max-h-[calc(100dvh-4rem-env(safe-area-inset-top))] overflow-y-auto border-t border-[color:var(--line)] bg-[color:var(--bg)] px-4 py-3 lg:hidden animate-fade-in"
        >
          <nav className="flex flex-col gap-1 pb-[env(safe-area-inset-bottom)]" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={active === link.href ? "true" : undefined}
                onClick={() => setOpen(false)}
                className={`flex min-h-12 items-center rounded-md px-3 text-base font-medium ${
                  active === link.href ? "bg-white/10 text-white" : "text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex min-h-12 items-center justify-center rounded-md bg-white px-3 text-base font-semibold text-black"
            >
              Book a consult
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
