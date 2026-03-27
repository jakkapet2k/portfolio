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
      // Name fades away
      tl.to(
        nameFirstRef.current,
        { opacity: 0, y: -18, duration: 0.45, ease: "power2.inOut" },
        "+=0.6",
      );
      tl.to(
        nameLastRef.current,
        { opacity: 0, y: 18, duration: 0.45, ease: "power2.inOut" },
        "<",
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
      <div ref={curtainLeftRef} className="absolute inset-y-0 left-0 z-0 w-1/2 bg-zinc-50" />
      <div ref={curtainRightRef} className="absolute inset-y-0 right-0 z-0 w-1/2 bg-zinc-50" />

      {/* Content layer */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6">
        {/* Corner frames — editorial accent */}
        <div ref={cornerTLRef} className="absolute left-8 top-8 h-12 w-12 border-l border-t border-zinc-300 opacity-0 sm:left-12 sm:top-12 sm:h-16 sm:w-16" />
        <div ref={cornerTRRef} className="absolute right-8 top-8 h-12 w-12 border-r border-t border-zinc-300 opacity-0 sm:right-12 sm:top-12 sm:h-16 sm:w-16" />
        <div ref={cornerBLRef} className="absolute bottom-8 left-8 h-12 w-12 border-b border-l border-zinc-300 opacity-0 sm:bottom-12 sm:left-12 sm:h-16 sm:w-16" />
        <div ref={cornerBRRef} className="absolute bottom-8 right-8 h-12 w-12 border-b border-r border-zinc-300 opacity-0 sm:bottom-12 sm:right-12 sm:h-16 sm:w-16" />

        {/* Issue label */}
        <div
          ref={issueRef}
          className="absolute top-8 max-w-[min(90vw,32rem)] px-4 text-center font-mono text-[clamp(0.52rem,1.5vw,0.66rem)] uppercase tracking-[0.18em] text-zinc-400 opacity-0 sm:top-16 sm:tracking-[0.3em]"
        >
          Issue No. 01 — Portfolio 2025
        </div>

        {/* Center — editorial name */}
        <div className="flex flex-col items-center">
          <div
            ref={nameFirstRef}
            className="font-editorial text-balance pb-2 text-center text-[clamp(2.7rem,12vw,7.2rem)] font-bold italic leading-[0.98] tracking-[-0.04em] text-zinc-950 opacity-0 sm:pb-3 sm:leading-[1.02] sm:tracking-[-0.03em] lg:text-[clamp(6rem,9vw,8rem)]"
          >
            Jakkapet
          </div>
          <div
            ref={nameLastRef}
            className="font-editorial text-balance text-center text-[clamp(2.7rem,12vw,7.2rem)] font-bold italic leading-[0.98] tracking-[-0.04em] text-zinc-300 opacity-0 sm:leading-[1.02] sm:tracking-[-0.03em] lg:text-[clamp(6rem,9vw,8rem)]"
          >
            Ladnok
          </div>

          {/* Thin rule */}
          <div ref={ruleRef} className="mt-5 h-px w-16 origin-center bg-zinc-300 sm:mt-8 sm:w-28" />

          {/* Role */}
          <div
            ref={roleRef}
            className="mt-3 max-w-[min(90vw,28rem)] px-4 text-center font-mono text-[clamp(0.55rem,1.6vw,0.72rem)] font-medium uppercase tracking-[0.14em] text-zinc-500 opacity-0 sm:mt-4 sm:tracking-[0.24em]"
          >
            Full Stack Developer
          </div>

          {/* Year */}
          <div ref={yearRef} className="mt-2 px-4 text-center font-editorial text-[clamp(0.78rem,1.9vw,0.95rem)] italic text-zinc-400 opacity-0 sm:mt-3">
            Based in Bangkok, Thailand
          </div>
        </div>

        {/* Progress bar — bottom */}
        <div ref={progressTrackRef} className="absolute bottom-10 left-1/2 w-24 -translate-x-1/2 sm:bottom-16 sm:w-40">
          <div className="h-px w-full bg-zinc-200" />
          <div ref={progressRef} className="absolute inset-y-0 left-0 h-px w-full origin-left bg-zinc-500" />
        </div>
      </div>
    </div>
  );
}
