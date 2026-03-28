"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const { messages } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(".hero-label", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.6 })
        .fromTo(".hero-name", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 }, "-=0.3")
        .fromTo(".hero-divider", { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: "power2.inOut" }, "-=0.4")
        .fromTo(".hero-role", { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.3")
        .fromTo(".hero-desc", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.3")
        .fromTo(".hero-btn", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, "-=0.3")
        .fromTo(".hero-image", { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }, "-=0.9")
        .fromTo(".hero-scroll", { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");

      gsap.to(".hero-scroll-line", {
        scaleY: 0.6,
        transformOrigin: "top center",
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: "power1.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative flex items-start overflow-x-hidden px-5 pt-10 pb-14 sm:px-8 sm:pt-12 sm:pb-16 md:min-h-[calc(100vh-65px)] md:items-center md:pb-24 xl:px-10"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-[minmax(0,1fr)_minmax(19rem,25rem)] md:items-center md:gap-x-12 md:gap-y-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,26rem)] lg:gap-x-16 lg:gap-y-10">
        {/* Left: Text */}
        <div className="relative order-1 flex flex-col items-center text-center md:order-none md:items-start md:pt-2 md:text-left lg:pt-4">
          <span className="hero-label mb-4 inline-flex items-center gap-3 font-mono text-[clamp(0.64rem,1.8vw,0.72rem)] uppercase tracking-[0.18em] text-stone-400 sm:tracking-[0.26em] dark:text-stone-500">
            <span className="h-px w-12 bg-stone-300 sm:w-16 dark:bg-stone-600" />
            {messages.hero.issue}
          </span>

          <h1 className="hero-name font-editorial text-[clamp(2.8rem,9vw,5.8rem)] font-bold italic leading-[0.98] tracking-[-0.04em] text-zinc-950 dark:text-zinc-50">
            Jakkapet
            <br />
            <span className="text-zinc-300 dark:text-zinc-600">Ladnok</span>
          </h1>

          <div className="hero-divider mt-6 h-px w-full max-w-xs origin-left bg-zinc-200 sm:mt-8 md:max-w-sm dark:bg-zinc-700" />

          <p className="hero-role mt-5 font-mono text-[clamp(0.78rem,1.7vw,0.9rem)] font-semibold uppercase tracking-[0.2em] text-zinc-950 sm:tracking-[0.24em] dark:text-zinc-50">
            {messages.hero.role}
          </p>

          <p className="hero-desc mt-5 max-w-[31rem] text-pretty text-[clamp(1.02rem,2vw,1.14rem)] leading-[1.9] text-zinc-600 dark:text-zinc-400">
            {messages.hero.description}
          </p>

          <div className="mt-9 flex w-full flex-col items-stretch gap-3 sm:max-w-max sm:flex-row sm:items-center sm:justify-center sm:gap-4 md:justify-start">
            <a
              className="hero-btn flex h-11 w-full items-center justify-center gap-2 border border-zinc-950 bg-zinc-950 px-5 text-[clamp(0.72rem,1.9vw,0.82rem)] font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-white hover:text-zinc-950 sm:h-12 sm:w-auto sm:px-7 sm:tracking-[0.12em] dark:border-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-transparent dark:hover:text-zinc-50"
              href="/Resume%20jakkapet.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75v10.5m0 0 4.5-4.5m-4.5 4.5-4.5-4.5M4.5 15.75v.75A2.25 2.25 0 0 0 6.75 18.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-.75" />
              </svg>
              {messages.hero.downloadCv}
            </a>
            <a
              className="hero-btn flex h-11 w-full items-center justify-center border border-zinc-200 bg-white px-5 text-[clamp(0.72rem,1.9vw,0.82rem)] font-semibold uppercase tracking-[0.1em] text-zinc-950 transition-all duration-300 hover:border-zinc-950 sm:h-12 sm:w-auto sm:px-7 sm:tracking-[0.12em] dark:border-zinc-700 dark:bg-transparent dark:text-zinc-50 dark:hover:border-zinc-50"
              href="#contact"
            >
              {messages.hero.getInTouch}
            </a>
          </div>
        </div>

        {/* Right: Portrait image — editorial frame */}
        <div className="hero-image order-3 relative mx-auto w-full max-w-[18rem] md:order-none md:col-start-2 md:row-span-2 md:row-start-1 md:max-w-[18rem] md:justify-self-end lg:max-w-[20rem] xl:max-w-[22rem]">
          <div className="pointer-events-none absolute left-1/2 top-8 h-52 w-52 -translate-x-1/2 rounded-full bg-stone-100 blur-3xl md:left-auto md:right-0 md:top-14 md:translate-x-0 dark:bg-zinc-800" />
          <div className="pointer-events-none absolute -left-2 top-10 h-[86%] w-[86%] -rotate-[2.5deg] border border-stone-100 bg-stone-50/85 md:-left-4 dark:border-zinc-800 dark:bg-zinc-900/85" />
          <div className="pointer-events-none absolute right-0 top-0 h-[90%] w-[80%] rotate-[1.5deg] border border-zinc-200/70 bg-white/92 md:-right-2 dark:border-zinc-700/70 dark:bg-zinc-800/92" />

          <div className="relative z-10 px-3 pt-3 sm:px-4 sm:pt-4">
            <div className="relative overflow-hidden bg-white shadow-[0_26px_55px_rgba(24,24,27,0.1)] dark:bg-zinc-900 dark:shadow-[0_26px_55px_rgba(0,0,0,0.4)]">
              <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20 bg-linear-to-b from-white/18 to-transparent" />
              <div className="pointer-events-none absolute left-4 top-4 z-20 h-12 w-12 border-l border-t border-white/45 sm:left-5 sm:top-5 sm:h-16 sm:w-16" />
              <div className="pointer-events-none absolute bottom-4 right-4 z-20 h-12 w-12 border-b border-r border-white/45 sm:bottom-5 sm:right-5 sm:h-16 sm:w-16" />

              <Image
                src="/profile.png"
                alt={messages.hero.imageAlt}
                width={440}
                height={560}
                className="mx-auto h-auto w-full scale-[1.01] object-cover"
                priority
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-stone-950/8 via-transparent to-transparent" />
            </div>
          </div>

          <div className="relative z-20 mt-5 flex items-end justify-between gap-4">
            <div className="border-l border-stone-200 pl-3 dark:border-stone-700">
              <span className="block font-editorial text-[clamp(1.15rem,2.4vw,1.45rem)] italic text-stone-300 dark:text-stone-600">Portrait</span>
              <span className="mt-1 block font-mono text-[0.58rem] uppercase tracking-[0.22em] text-stone-400 sm:text-[0.62rem] dark:text-stone-500">
                Soft Editorial
              </span>
            </div>
            <p className="pr-2 text-right font-mono text-[clamp(0.56rem,1.6vw,0.65rem)] uppercase tracking-[0.16em] text-stone-400 sm:tracking-[0.2em] dark:text-stone-500">
              {messages.hero.locationCaption}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[clamp(0.56rem,1.6vw,0.65rem)] uppercase tracking-[0.2em] text-zinc-400 sm:tracking-[0.3em] dark:text-zinc-500">{messages.hero.scroll}</span>
          <div className="hero-scroll-line h-12 w-px bg-linear-to-b from-zinc-300 to-transparent sm:h-14 dark:from-zinc-600" />
        </div>
      </div>
    </section>
  );
}
