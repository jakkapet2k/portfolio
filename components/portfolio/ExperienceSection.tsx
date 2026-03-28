"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = function ExperienceSection() {
  const { messages } = useLocale();
  const experiences = messages.experience.items;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        ".experience-header > *",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          scrollTrigger: { trigger: ".experience-header", start: "top 85%" },
        },
      );

      // Each experience block slides in
      document.querySelectorAll(".experience-item").forEach((item) => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: item, start: "top 88%" },
        });

        // Number fades in first
        tl.fromTo(
          item.querySelector(".exp-number"),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        );

        // Meta info slides in
        tl.fromTo(
          item.querySelector(".exp-meta"),
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3",
        );

        // Divider line draws across
        const divider = item.querySelector(".exp-divider");
        if (divider) {
          tl.fromTo(
            divider,
            { scaleX: 0 },
            { scaleX: 1, duration: 0.6, ease: "power2.inOut" },
            "-=0.3",
          );
        }

        // Projects stagger in
        tl.fromTo(
          item.querySelectorAll(".exp-project"),
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
          "-=0.3",
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="border-t border-zinc-200 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="experience-header mb-12 flex flex-col gap-4 border-b border-zinc-200 pb-5 sm:mb-16 sm:flex-row sm:items-end sm:justify-between sm:pb-6 lg:mb-20 dark:border-zinc-700">
          <div>
            <span className="font-mono text-[clamp(0.64rem,1.8vw,0.72rem)] uppercase tracking-[0.22em] text-zinc-400 sm:tracking-[0.3em] dark:text-zinc-500">{messages.experience.chapter}</span>
            <h2 className="font-editorial text-balance mt-2 text-[clamp(2.5rem,8vw,4.2rem)] font-bold italic tracking-[-0.03em] text-zinc-950 dark:text-zinc-50">{messages.experience.title}</h2>
          </div>
          <span className="font-mono text-[clamp(0.64rem,1.8vw,0.72rem)] uppercase tracking-[0.16em] text-zinc-400 sm:block sm:tracking-[0.2em]">
            {experiences.length} {messages.experience.countLabel}
          </span>
        </div>

        {/* Experience items */}
        <div>
          {experiences.map((exp, i) => (
            <div key={exp.role} className="experience-item group border-b border-zinc-200 py-10 first:pt-0 last:border-b-0 sm:py-14 lg:py-16 dark:border-zinc-800">
              {/* Position row */}
              <div className="grid items-start gap-6 md:grid-cols-[200px_1fr] md:gap-10 lg:grid-cols-[240px_1fr]">
                {/* Left: Meta */}
                <div className="flex items-start gap-4 md:flex-col md:gap-1">
                  <span className="exp-number font-editorial text-[clamp(1.8rem,5vw,2.4rem)] font-light leading-none text-zinc-200 md:mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="exp-meta">
                    <h3 className="font-editorial text-[clamp(1.3rem,3.2vw,1.6rem)] font-bold text-zinc-950 dark:text-zinc-50">{exp.role}</h3>
                    <p className="mt-0.5 text-[clamp(0.85rem,1.8vw,0.92rem)] italic text-zinc-400">{exp.company}</p>
                    <span className="mt-1.5 block font-mono text-[clamp(0.6rem,1.5vw,0.68rem)] uppercase tracking-[0.14em] text-zinc-400">{exp.period}</span>
                  </div>
                </div>

                {/* Right: Projects */}
                <div>
                  <div className="exp-divider mb-4 h-px origin-left bg-zinc-200 sm:mb-5 dark:bg-zinc-700" />
                  <div className="space-y-0 divide-y divide-zinc-100 dark:divide-zinc-800">
                  {exp.projects.map((project, j) => (
                    <div key={j} className="exp-project group/proj py-4 first:pt-0 last:pb-0 sm:py-5">
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-[clamp(0.56rem,1.4vw,0.62rem)] text-zinc-300">
                          {String(i + 1).padStart(2, "0")}.{j + 1}
                        </span>
                        <span className="font-mono text-[clamp(0.62rem,1.5vw,0.7rem)] font-semibold uppercase tracking-[0.1em] text-zinc-950 sm:tracking-[0.13em] dark:text-zinc-50">
                          {project.name}
                        </span>
                      </div>
                      <p className="text-pretty mt-2 text-[clamp(0.9rem,1.9vw,0.98rem)] leading-[1.75] text-zinc-500 sm:leading-[1.8]">
                        {project.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[clamp(0.56rem,1.4vw,0.62rem)] uppercase tracking-[0.05em] text-zinc-400"
                          >
                            {tag}
                            {project.tags.indexOf(tag) < project.tags.length - 1 && (
                              <span className="ml-1.5 text-zinc-300">/</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
