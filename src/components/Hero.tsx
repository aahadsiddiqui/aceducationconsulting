import Image from "next/image";
import { site } from "@/lib/siteContent";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-dvh overflow-hidden"
      aria-labelledby="hero-brand"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/consulting-session.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center animate-slow-zoom"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/45"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex min-h-dvh max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <p
          id="hero-brand"
          className="font-[family-name:var(--font-display)] text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl animate-rise"
        >
          {site.name}
        </p>
        <p className="mt-5 max-w-xl text-lg text-white/85 sm:text-xl animate-rise-delay">
          Guided pathways into Canadian college diplomas and certificates—matched
          to the right province for your goals.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 animate-rise-delay-2">
          <a
            href="#directory"
            className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Explore course directory
          </a>
          <a
            href="#contact"
            className="rounded-md border border-white/40 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Talk to an advisor
          </a>
        </div>
      </div>
    </section>
  );
}
