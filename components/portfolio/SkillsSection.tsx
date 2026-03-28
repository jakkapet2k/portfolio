"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = function SkillsSection() {
  const { messages } = useLocale();
  const skills = messages.skills.items;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skills-header > *",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          scrollTrigger: { trigger: ".skills-header", start: "top 85%" },
        },
      );
      gsap.fromTo(
        ".skill-group",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          scrollTrigger: { trigger: ".skill-group", start: "top 88%" },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="border-t border-stone-200 bg-stone-50/60 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32 dark:border-zinc-800 dark:bg-zinc-900/60"
    >
      <div className="mx-auto max-w-7xl">
        <div className="skills-header mb-12 flex flex-col gap-4 border-b border-zinc-200 pb-5 sm:mb-16 sm:flex-row sm:items-end sm:justify-between sm:pb-6 lg:mb-20 dark:border-zinc-700">
          <div>
            <span className="font-mono text-[clamp(0.64rem,1.8vw,0.72rem)] uppercase tracking-[0.22em] text-zinc-400 sm:tracking-[0.3em] dark:text-zinc-500">{messages.skills.chapter}</span>
            <h2 className="font-editorial text-balance mt-2 text-[clamp(2.5rem,8vw,4.2rem)] font-bold italic tracking-[-0.03em] text-zinc-950 dark:text-zinc-50">{messages.skills.title}</h2>
          </div>
          <span className="font-mono text-[clamp(0.64rem,1.8vw,0.72rem)] uppercase tracking-[0.16em] text-zinc-400 sm:block sm:tracking-[0.2em] dark:text-zinc-500">
            {skills.reduce((acc, skill) => acc + skill.values.length, 0)} {messages.skills.countLabel}
          </span>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 lg:gap-16">
          {skills.map((skill) => (
            <div key={skill.category} className="skill-group">
              <h3 className="mb-5 border-b border-zinc-200 pb-3 font-mono text-[clamp(0.64rem,1.8vw,0.72rem)] font-semibold uppercase tracking-[0.22em] text-zinc-400 sm:mb-6 sm:tracking-[0.3em] dark:border-zinc-700 dark:text-zinc-500">
                {skill.category}
              </h3>
              <ul className="space-y-3.5 sm:space-y-4">
                {skill.values.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between gap-3 text-[clamp(0.98rem,2vw,1.05rem)] text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                  >
                    <span>{item}</span>
                    <span className="h-px flex-1 mx-3 bg-zinc-200 dark:bg-zinc-700" />
                    <span className="font-mono text-[clamp(0.58rem,1.5vw,0.66rem)] text-zinc-300 dark:text-zinc-600">●</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
