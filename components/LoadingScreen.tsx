"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const curtainLeftRef = useRef<HTMLDivElement>(null);
  const curtainRightRef = useRef<HTMLDivElement>(null);
  const cornerTLRef = useRef<HTMLDivElement>(null);
  const cornerTRRef = useRef<HTMLDivElement>(null);
  const cornerBLRef = useRef<HTMLDivElement>(null);
  const cornerBRRef = useRef<HTMLDivElement>(null);
  const issueRef = useRef<HTMLDivElement>(null);
  const nameFirstRef = useRef<HTMLDivElement>(null);
  const nameLastRef = useRef<HTMLDivElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // ── Phase 1: Corner frames draw in ──
      tl.fromTo(
        [cornerTLRef.current, cornerBRRef.current],
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out", stagger: 0.1 },
        0.2,
      );
      tl.fromTo(
        [cornerTRRef.current, cornerBLRef.current],
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out", stagger: 0.1 },
        0.3,
      );

      // Issue label fades in
      tl.fromTo(
        issueRef.current,
        { opacity: 0, y: 8 },
        { opacity: 0.5, y: 0, duration: 0.5, ease: "power2.out" },
        0.5,
      );

      // ── Phase 2: Name reveals with clip ──
      tl.fromTo(
        nameFirstRef.current,
        { clipPath: "inset(100% 0 0 0)", opacity: 0 },
        { clipPath: "inset(0% 0 0 0)", opacity: 1, duration: 0.9, ease: "power4.out" },
        0.7,
      );
      tl.fromTo(
        nameLastRef.current,
        { clipPath: "inset(0 100% 0 0)", opacity: 0 },
        { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 0.9, ease: "power4.out" },
        0.9,
      );

      // Rule extends
      tl.fromTo(ruleRef.current, { scaleX: 0 }, { scaleX: 1, duration: 0.7, ease: "power3.out" }, 1.3);

      // Role text — letter spacing cinematic reveal
      tl.fromTo(
        roleRef.current,
        { opacity: 0, letterSpacing: "0.6em" },
        { opacity: 0.6, letterSpacing: "0.25em", duration: 0.7, ease: "power2.out" },
        1.4,
      );

      // Year
      tl.fromTo(yearRef.current, { opacity: 0 }, { opacity: 0.35, duration: 0.5, ease: "power2.out" }, 1.6);

      // Progress bar fills
      tl.fromTo(
        progressRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.8, ease: "power1.inOut" },
        1.2,
      );

      // ── Phase 3: Exit ──
      // Name slides out
      tl.to(
        nameFirstRef.current,
        { clipPath: "inset(0 0 100% 0)", opacity: 0, duration: 0.5, ease: "power3.in" },
        "+=0.6",
      );
      tl.to(
        nameLastRef.current,
        { clipPath: "inset(0 0 0 100%)", opacity: 0, duration: 0.5, ease: "power3.in" },
        "-=0.4",
      );

      // Everything else fades
      tl.to(
        [
          ruleRef.current,
          roleRef.current,
          yearRef.current,
          issueRef.current,
          progressTrackRef.current,
          cornerTLRef.current,
          cornerTRRef.current,
          cornerBLRef.current,
          cornerBRRef.current,
        ],
        { opacity: 0, duration: 0.35, ease: "power2.in" },
        "-=0.3",
      );

      // Fire onComplete before curtain split
      tl.call(() => onComplete());

      // Curtain split — left/right for editorial magazine feel
      tl.to(curtainLeftRef.current, { xPercent: -100, duration: 0.9, ease: "power4.inOut" });
      tl.to(curtainRightRef.current, { xPercent: 100, duration: 0.9, ease: "power4.inOut" }, "<");
    }, container);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] overflow-hidden">
      {/* Curtain panels — horizontal split */}
      <div ref={curtainLeftRef} className="absolute inset-y-0 left-0 z-0 w-1/2 bg-zinc-950" />
      <div ref={curtainRightRef} className="absolute inset-y-0 right-0 z-0 w-1/2 bg-zinc-950" />

      {/* Content layer */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6">
        {/* Corner frames — editorial accent */}
        <div ref={cornerTLRef} className="absolute left-8 top-8 h-12 w-12 border-l border-t border-zinc-700 opacity-0 sm:left-12 sm:top-12 sm:h-16 sm:w-16" />
        <div ref={cornerTRRef} className="absolute right-8 top-8 h-12 w-12 border-r border-t border-zinc-700 opacity-0 sm:right-12 sm:top-12 sm:h-16 sm:w-16" />
        <div ref={cornerBLRef} className="absolute bottom-8 left-8 h-12 w-12 border-b border-l border-zinc-700 opacity-0 sm:bottom-12 sm:left-12 sm:h-16 sm:w-16" />
        <div ref={cornerBRRef} className="absolute bottom-8 right-8 h-12 w-12 border-b border-r border-zinc-700 opacity-0 sm:bottom-12 sm:right-12 sm:h-16 sm:w-16" />

        {/* Issue label */}
        <div
          ref={issueRef}
          className="absolute top-12 font-mono text-[10px] uppercase tracking-[0.35em] text-zinc-500 opacity-0 sm:top-16"
        >
          Issue No. 01 — Portfolio 2025
        </div>

        {/* Center — editorial name */}
        <div className="flex flex-col items-center">
          <div
            ref={nameFirstRef}
            className="font-editorial pb-3 text-6xl font-bold italic leading-[1.1] tracking-[-0.02em] text-white opacity-0 sm:text-8xl lg:text-9xl"
          >
            Jakkapet
          </div>
          <div
            ref={nameLastRef}
            className="font-editorial text-6xl font-bold italic leading-[1.1] tracking-[-0.02em] text-zinc-500 opacity-0 sm:text-8xl lg:text-9xl"
          >
            Ladnok
          </div>

          {/* Thin rule */}
          <div ref={ruleRef} className="mt-6 h-px w-20 origin-center bg-zinc-600 sm:mt-8 sm:w-28" />

          {/* Role */}
          <div
            ref={roleRef}
            className="mt-4 font-mono text-[10px] font-medium uppercase text-zinc-400 opacity-0 sm:text-[11px]"
          >
            Full Stack Developer
          </div>

          {/* Year */}
          <div ref={yearRef} className="mt-3 font-editorial text-sm italic text-zinc-600 opacity-0">
            Based in Bangkok, Thailand
          </div>
        </div>

        {/* Progress bar — bottom */}
        <div ref={progressTrackRef} className="absolute bottom-12 left-1/2 w-32 -translate-x-1/2 sm:bottom-16 sm:w-40">
          <div className="h-px w-full bg-zinc-800" />
          <div ref={progressRef} className="absolute inset-y-0 left-0 h-px w-full origin-left bg-zinc-500" />
        </div>
      </div>
    </div>
  );
}
