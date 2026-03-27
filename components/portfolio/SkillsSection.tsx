"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { category: "Frontend", items: ["TypeScript", "NuxtJS", "Next.js", "Tailwind CSS", "Shadcn UI", "PHP"] },
  { category: "Backend", items: ["NestJS", "AdonisJS", "Go", "Python", "Laravel"] },
  { category: "Database", items: ["Redis", "MongoDB", "PostgreSQL", "MySQL"] },
  { category: "Tools", items: ["Git", "Docker", "DevOps", "Ubuntu", "Bitbucket"] },
];

const SkillsSection = function SkillsSection() {
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
      className="border-t border-zinc-200 bg-zinc-950 px-6 py-32 text-white sm:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="skills-header mb-20 flex items-end justify-between border-b border-zinc-800 pb-6">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-500">Chapter 03</span>
            <h2 className="font-editorial mt-2 text-5xl font-bold italic tracking-[-0.02em] sm:text-6xl">Skills</h2>
          </div>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 sm:block">
            {skills.reduce((acc, s) => acc + s.items.length, 0)} Skills
          </span>
        </div>

        <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div key={skill.category} className="skill-group">
              <h3 className="mb-6 border-b border-zinc-800 pb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500">
                {skill.category}
              </h3>
              <ul className="space-y-4">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between text-base text-zinc-400 transition-colors hover:text-white"
                  >
                    <span>{item}</span>
                    <span className="h-px flex-1 mx-3 bg-zinc-800" />
                    <span className="font-mono text-[10px] text-zinc-600">●</span>
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
