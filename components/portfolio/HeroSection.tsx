"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function HeroSection() {
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
      className="relative flex min-h-[calc(100vh-65px)] items-center overflow-hidden bg-white px-6 pt-5 pb-24 sm:px-10"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse gap-16 lg:flex-row lg:items-center lg:gap-20">
        {/* Text Column */}
        <div className="flex flex-1 flex-col items-start">
          {/* Issue label */}
          <div className="hero-issue mb-8 flex items-center gap-4">
            <span className="h-px w-16 bg-zinc-300" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-400">
              Issue No. 01 — Portfolio 2025
            </span>
          </div>

          {/* Big editorial name */}
          <h1 className="font-editorial text-6xl font-bold italic leading-[1.1] tracking-[-0.02em] text-zinc-950 sm:text-[5.5rem] lg:text-[7rem]">
            <span className="hero-name-line block pb-2">Jakkapet</span>
            <span className="hero-name-line block text-zinc-400">Ladnok</span>
          </h1>

          {/* Divider */}
          <div className="hero-divider my-8 h-px w-full max-w-md origin-left bg-zinc-200" />

          {/* Role + description */}
          <p className="hero-role text-xs font-semibold uppercase tracking-[0.25em] text-zinc-950">
            Full Stack Developer
          </p>
          <p className="hero-desc mt-5 max-w-md text-base leading-[1.85] text-zinc-600">
            A fast learner who loves new challenges — started coding as a student, now a full-time developer based in
            Bangkok, Thailand. Scroll down to learn more about my journey.
          </p>

          <div className="mt-10 flex items-center gap-5">
            <a
              className="hero-btn group flex h-12 items-center gap-2.5 border border-zinc-950 bg-zinc-950 px-7 text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-white hover:text-zinc-950"
              href="/Resume jakkapet.pdf"
              download
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
            <a
              className="hero-btn flex h-12 items-center border border-zinc-200 px-7 text-[13px] font-semibold uppercase tracking-[0.12em] text-zinc-950 transition-all duration-300 hover:border-zinc-950"
              href="#contact"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Image Column — editorial crop */}
        <div className="hero-image relative">
          <div className="relative z-10 overflow-hidden">
            <Image
              src="/profile.png"
              alt="Jakkapet Ladnok"
              width={440}
              height={560}
              className="mx-auto h-auto w-full max-w-70 object-cover sm:max-w-85 lg:max-w-none"
              priority
            />
          </div>
          {/* Editorial frame accent */}
          <div className="absolute -bottom-4 -right-4 h-full w-full border border-zinc-200" />
          {/* Caption */}
          <p className="absolute -bottom-10 right-0 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
            Bangkok, Thailand — 2025
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400">Scroll</span>
          <div className="hero-scroll-line h-14 w-px bg-linear-to-b from-zinc-300 to-transparent" />
        </div>
      </div>
    </section>
  );
}
