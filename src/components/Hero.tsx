import Image from "next/image";

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

      <div className="relative mx-auto flex min-h-dvh max-w-6xl flex-col justify-end px-4 pb-[max(4rem,env(safe-area-inset-bottom))] pt-28 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <h1
          id="hero-brand"
          className="max-w-[14ch] font-[family-name:var(--font-display)] text-[2.35rem] leading-[1.05] tracking-tight text-white min-[380px]:text-4xl sm:max-w-none sm:text-5xl md:text-6xl lg:text-7xl animate-rise"
        >
          <span className="block">Get into College.</span>
          <span className="block">Get Funded.</span>
          <span className="block">Get Ahead.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:mt-6 sm:text-lg md:text-xl animate-rise-delay">
          Welcome to AC Education Consulting! We provide expert guidance to
          help you navigate education and achieve your goals through tailored
          consulting. Let&apos;s unlock your potential together!
        </p>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75 sm:mt-4 sm:text-base md:text-lg animate-rise-delay">
          Helping Ontario residents access career-focused programs and available
          funding—with no upfront consultation fees.
        </p>
        <div className="mt-7 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap animate-rise-delay-2">
          <a
            href="#funding"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Explore funding help
          </a>
          <a
            href="#directory"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/40 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Compare programs
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-white underline-offset-4 transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            Book a consult
          </a>
        </div>
      </div>
    </section>
  );
}
