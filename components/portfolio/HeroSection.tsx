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
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl
        .fromTo(".hero-issue", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5 })
        .fromTo(
          ".hero-name-line",
          { opacity: 0, y: 80, clipPath: "inset(100% 0 0 0)" },
          { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)", duration: 1, stagger: 0.12 },
          "-=0.2",
        )
        .fromTo(".hero-divider", { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: "power2.inOut" }, "-=0.4")
        .fromTo(".hero-role", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .fromTo(".hero-desc", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .fromTo(
          ".hero-btn",
          { opacity: 0, y: 16, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1 },
          "-=0.3",
        )
        .fromTo(
          ".hero-image",
          { opacity: 0, scale: 0.92 },
          { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" },
          "-=0.9",
        )
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
      className="relative flex min-h-[calc(100vh-65px)] items-center overflow-hidden bg-white px-5 pt-6 pb-20 sm:px-8 sm:pt-8 sm:pb-24 lg:px-10"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-8 md:gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.85fr)] lg:items-start lg:gap-x-16 lg:gap-y-10">
        <div className="flex flex-col items-center text-center lg:items-start lg:pt-6 lg:text-left">
          <div className="hero-issue mb-5 flex flex-wrap items-center justify-center gap-3 sm:mb-7 sm:gap-4 lg:justify-start">
            <span className="h-px w-12 bg-zinc-300 sm:w-16" />
            <span className="font-mono text-[clamp(0.64rem,1.8vw,0.72rem)] uppercase tracking-[0.18em] text-zinc-400 sm:tracking-[0.26em]">{messages.hero.issue}</span>
          </div>

          <h1 className="font-editorial text-balance text-[clamp(3rem,11vw,6.9rem)] font-bold italic leading-[0.94] tracking-[-0.045em] text-zinc-950 sm:leading-[0.98] lg:max-w-[7ch]">
            <span className="hero-name-line block pb-1 sm:pb-2">Jakkapet</span>
            <span className="hero-name-line block text-zinc-400">Ladnok</span>
          </h1>
        </div>

        <div className="hero-image relative mx-auto w-full max-w-[22rem] md:max-w-[29rem] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-[28rem] lg:justify-self-end">
          <div className="relative border border-zinc-200 bg-zinc-50 p-4 sm:p-5">
            <div className="relative z-10 overflow-hidden bg-white">
              <Image
                src="/profile.png"
                alt={messages.hero.imageAlt}
                width={440}
                height={560}
                className="mx-auto h-auto w-full object-cover"
                priority
              />
            </div>
            <div className="pointer-events-none absolute inset-3 border border-zinc-100 sm:inset-4" />
          </div>
          <p className="mt-4 text-right font-mono text-[clamp(0.56rem,1.6vw,0.65rem)] uppercase tracking-[0.16em] text-zinc-400 sm:tracking-[0.2em]">
            {messages.hero.locationCaption}
          </p>
        </div>

        <div className="flex max-w-2xl flex-col items-center text-center lg:row-start-2 lg:max-w-xl lg:items-start lg:text-left">
          <div className="hero-divider mb-6 h-px w-full origin-left bg-zinc-200 sm:mb-8" />

          <p className="hero-role text-[clamp(0.72rem,1.9vw,0.88rem)] font-semibold uppercase tracking-[0.18em] text-zinc-950 sm:tracking-[0.24em]">{messages.hero.role}</p>
          <p className="hero-desc text-pretty mt-4 text-[clamp(0.98rem,2.2vw,1.12rem)] leading-[1.75] text-zinc-600 sm:mt-5 sm:leading-[1.85]">{messages.hero.description}</p>

          <div className="mt-7 flex w-full flex-col items-stretch gap-3 sm:mt-9 sm:max-w-max sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:justify-start">
            <a
              className="hero-btn flex h-11 w-full items-center justify-center border border-zinc-950 bg-zinc-950 px-5 text-[clamp(0.72rem,1.9vw,0.82rem)] font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-white hover:text-zinc-950 sm:h-12 sm:w-auto sm:px-7 sm:tracking-[0.12em]"
              href="#contact"
            >
              {messages.hero.getInTouch}
            </a>
            <a
              className="hero-btn flex h-11 w-full items-center justify-center border border-zinc-200 bg-white px-5 text-[clamp(0.72rem,1.9vw,0.82rem)] font-semibold uppercase tracking-[0.1em] text-zinc-950 transition-all duration-300 hover:border-zinc-950 sm:h-12 sm:w-auto sm:px-7 sm:tracking-[0.12em]"
              href="/Resume%20jakkapet.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              {messages.hero.downloadCv}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[clamp(0.56rem,1.6vw,0.65rem)] uppercase tracking-[0.2em] text-zinc-400 sm:tracking-[0.3em]">{messages.hero.scroll}</span>
          <div className="hero-scroll-line h-12 w-px bg-linear-to-b from-zinc-300 to-transparent sm:h-14" />
        </div>
      </div>
    </section>
  );
}
