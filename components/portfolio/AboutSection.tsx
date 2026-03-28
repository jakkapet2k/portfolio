"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const { messages } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-content > *",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="border-t border-stone-200 bg-stone-50/60 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32 dark:border-zinc-800 dark:bg-zinc-900/60">
      <div className="about-content mx-auto max-w-7xl">
        {/* Editorial section header */}
        <div className="about-header mb-12 flex flex-col gap-4 border-b border-zinc-200 pb-5 sm:mb-16 sm:flex-row sm:items-end sm:justify-between sm:pb-6 lg:mb-20 dark:border-zinc-700">
          <div>
            <span className="font-mono text-[clamp(0.64rem,1.8vw,0.72rem)] uppercase tracking-[0.22em] text-zinc-400 sm:tracking-[0.3em] dark:text-zinc-500">{messages.about.chapter}</span>
            <h2 className="font-editorial text-balance mt-2 text-[clamp(2.5rem,8vw,4.2rem)] font-bold italic tracking-[-0.03em] text-zinc-950 dark:text-zinc-50">{messages.about.title}</h2>
          </div>
          <span className="font-mono text-[clamp(0.64rem,1.8vw,0.72rem)] uppercase tracking-[0.16em] text-zinc-400 sm:block sm:tracking-[0.2em]">
            {messages.about.sideLabel}
          </span>
        </div>

        {/* Content grid with editorial number accent */}
        <div className="grid gap-8 md:grid-cols-[auto_1fr] md:gap-16">
          {/* Large decorative quote mark */}
          <span className="font-editorial hidden text-[10rem] font-light leading-none text-zinc-100 select-none md:block dark:text-zinc-800">
            &ldquo;
          </span>

          <div className="space-y-8">
            <p className="text-pretty text-[clamp(1.05rem,2.5vw,1.35rem)] leading-[1.8] text-zinc-600 sm:leading-[1.9] dark:text-zinc-400">{messages.about.paragraphs[0]}</p>
            <p className="text-pretty text-[clamp(0.98rem,2.1vw,1.08rem)] leading-[1.85] text-zinc-500 dark:text-zinc-500">{messages.about.paragraphs[1]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
