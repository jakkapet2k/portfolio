"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const curtainTopRef = useRef<HTMLDivElement>(null);
  const curtainBotRef = useRef<HTMLDivElement>(null);
  const topLineRef = useRef<HTMLDivElement>(null);
  const issueRef = useRef<HTMLDivElement>(null);
  const nameFirstRef = useRef<HTMLDivElement>(null);
  const nameLastRef = useRef<HTMLDivElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLDivElement>(null);
  const bottomLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // ── Phase 1: Top thin line draws in ──
      tl.fromTo(topLineRef.current, { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: "power3.inOut" }, 0.3);

      // Issue label fades in
      tl.fromTo(issueRef.current, { opacity: 0, y: 8 }, { opacity: 0.4, y: 0, duration: 0.5, ease: "power2.out" }, 0.6);

      // ── Phase 2: Name reveals with clip ──
      tl.fromTo(
        nameFirstRef.current,
        { clipPath: "inset(100% 0 0 0)", opacity: 0 },
        { clipPath: "inset(0% 0 0 0)", opacity: 1, duration: 0.9, ease: "power4.out" },
        0.8,
      );
      tl.fromTo(
        nameLastRef.current,
        { clipPath: "inset(100% 0 0 0)", opacity: 0 },
        { clipPath: "inset(0% 0 0 0)", opacity: 1, duration: 0.9, ease: "power4.out" },
        1.0,
      );

      // Rule extends
      tl.fromTo(ruleRef.current, { scaleX: 0 }, { scaleX: 1, duration: 0.7, ease: "power3.out" }, 1.4);

      // Role text
      tl.fromTo(
        roleRef.current,
        { opacity: 0, letterSpacing: "0.5em" },
        { opacity: 0.5, letterSpacing: "0.25em", duration: 0.6, ease: "power2.out" },
        1.5,
      );

      // Year
      tl.fromTo(yearRef.current, { opacity: 0 }, { opacity: 0.3, duration: 0.5, ease: "power2.out" }, 1.7);

      // Bottom line
      tl.fromTo(bottomLineRef.current, { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: "power3.inOut" }, 1.6);

      // ── Phase 3: Exit ──
      // Everything fades/slides out
      tl.to(
        nameFirstRef.current,
        { clipPath: "inset(0 0 100% 0)", opacity: 0, duration: 0.5, ease: "power3.in" },
        "+=1.0",
      );
      tl.to(
        nameLastRef.current,
        { clipPath: "inset(0 0 100% 0)", opacity: 0, duration: 0.5, ease: "power3.in" },
        "-=0.4",
      );
      tl.to(
        [
          ruleRef.current,
          roleRef.current,
          yearRef.current,
          issueRef.current,
          topLineRef.current,
          bottomLineRef.current,
        ],
        { opacity: 0, duration: 0.35, ease: "power2.in" },
        "-=0.3",
      );

      // Fire onComplete before curtain split
      tl.call(() => onComplete());

      // Curtain split
      tl.to(curtainTopRef.current, { yPercent: -100, duration: 0.9, ease: "power4.inOut" });
      tl.to(curtainBotRef.current, { yPercent: 100, duration: 0.9, ease: "power4.inOut" }, "<");
    }, container);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] overflow-hidden">
      {/* Curtain panels */}
      <div ref={curtainTopRef} className="absolute inset-x-0 top-0 z-0 h-1/2 bg-white" />
      <div ref={curtainBotRef} className="absolute inset-x-0 bottom-0 z-0 h-1/2 bg-white" />

      {/* Content layer */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6">
        {/* Top thin line */}
        <div
          ref={topLineRef}
          className="absolute left-1/2 top-10 h-px w-24 -translate-x-1/2 bg-zinc-300 sm:top-14 sm:w-32"
        />

        {/* Issue label */}
        <div
          ref={issueRef}
          className="absolute top-14 font-mono text-[10px] uppercase tracking-[0.35em] text-zinc-400 opacity-0 sm:top-[4.5rem]"
        >
          Issue No. 01
        </div>

        {/* Center — editorial name */}
        <div className="flex flex-col items-center">
          <div
            ref={nameFirstRef}
            className="font-editorial text-6xl font-black leading-[1.1] tracking-[-0.03em] text-zinc-950 opacity-0 sm:text-8xl lg:text-9xl"
          >
            Jakkapet
          </div>
          <div
            ref={nameLastRef}
            className="font-editorial text-6xl font-bold italic leading-[1.1] tracking-[-0.02em] text-zinc-400 opacity-0 sm:text-8xl lg:text-9xl"
          >
            Ladnok
          </div>

          {/* Thin rule */}
          <div ref={ruleRef} className="mt-6 h-px w-20 origin-center bg-zinc-300 sm:mt-8 sm:w-28" />

          {/* Role */}
          <div
            ref={roleRef}
            className="mt-4 font-mono text-[10px] font-medium uppercase text-zinc-400 opacity-0 sm:text-[11px]"
          >
            Full Stack Developer
          </div>

          {/* Year */}
          <div ref={yearRef} className="mt-3 font-editorial text-sm italic text-zinc-300 opacity-0">
            Portfolio — 2025
          </div>
        </div>

        {/* Bottom thin line */}
        <div
          ref={bottomLineRef}
          className="absolute bottom-10 left-1/2 h-px w-24 -translate-x-1/2 bg-zinc-300 sm:bottom-14 sm:w-32"
        />
      </div>
    </div>
  );
}
