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
      gsap.fromTo(
        ".experience-item",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.12,
          scrollTrigger: { trigger: ".experience-item", start: "top 88%" },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="border-t border-zinc-200 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="experience-header mb-12 flex flex-col gap-4 border-b border-zinc-200 pb-5 sm:mb-16 sm:flex-row sm:items-end sm:justify-between sm:pb-6 lg:mb-20">
          <div>
            <span className="font-mono text-[clamp(0.64rem,1.8vw,0.72rem)] uppercase tracking-[0.22em] text-zinc-400 sm:tracking-[0.3em]">{messages.experience.chapter}</span>
            <h2 className="font-editorial text-balance mt-2 text-[clamp(2.5rem,8vw,4.2rem)] font-bold italic tracking-[-0.03em] text-zinc-950">{messages.experience.title}</h2>
          </div>
          <span className="font-mono text-[clamp(0.64rem,1.8vw,0.72rem)] uppercase tracking-[0.16em] text-zinc-400 sm:block sm:tracking-[0.2em]">
            {experiences.length} {messages.experience.countLabel}
          </span>
        </div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div
              key={exp.role}
              className="experience-item group relative grid gap-6 border-b border-zinc-100 py-10 transition-all duration-500 first:pt-0 last:border-0 hover:bg-zinc-50/60 sm:py-12 md:grid-cols-[220px_1fr_1fr] md:gap-10"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-14 hidden h-2.5 w-2.5 border-2 border-zinc-300 bg-white transition-all duration-300 group-hover:scale-125 group-hover:border-zinc-950 group-hover:bg-zinc-950 md:block" />

              {/* Date column */}
              <div className="flex flex-col md:border-l md:border-zinc-200 md:pl-6">
                <span className="font-mono text-[clamp(0.68rem,1.8vw,0.75rem)] uppercase tracking-[0.12em] text-zinc-400 transition-colors duration-300 group-hover:text-zinc-600 sm:tracking-[0.15em]">{exp.period}</span>
                <span className="font-editorial mt-1 text-[clamp(2rem,6vw,3rem)] font-light text-zinc-200 transition-colors duration-500 group-hover:text-zinc-950">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title column */}
              <div>
                <h3 className="font-editorial text-balance text-[clamp(1.55rem,3.7vw,2rem)] font-bold text-zinc-950">{exp.role}</h3>
                <p className="mt-1 text-[clamp(0.92rem,1.9vw,1rem)] italic text-zinc-400">{exp.company}</p>
                <div className="mt-3 h-px w-8 bg-zinc-300 transition-all duration-500 group-hover:w-16 group-hover:bg-zinc-950" />
              </div>

              {/* Description column */}
              <div className="space-y-5">
                {exp.projects.map((project, j) => (
                  <div
                    key={j}
                    className="border-l-2 border-transparent pl-4 transition-all duration-300 hover:border-zinc-950"
                  >
                    <span className="font-mono text-[clamp(0.64rem,1.7vw,0.72rem)] font-semibold uppercase tracking-[0.08em] text-zinc-500 sm:tracking-[0.1em]">
                      {project.name}
                    </span>
                    <p className="text-pretty mt-1 text-[clamp(0.98rem,2.05vw,1.05rem)] leading-[1.8] text-zinc-600 sm:leading-[1.85]">{project.description}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-zinc-200 px-2.5 py-0.5 font-mono text-[clamp(0.58rem,1.5vw,0.66rem)] uppercase tracking-[0.05em] text-zinc-400 transition-colors duration-300 group-hover:border-zinc-300 group-hover:text-zinc-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
