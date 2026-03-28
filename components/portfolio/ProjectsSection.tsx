"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = function ProjectsSection() {
  const { messages } = useLocale();
  const projects = messages.projects.items;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".projects-header > *",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          scrollTrigger: { trigger: ".projects-header", start: "top 85%" },
        },
      );
      gsap.fromTo(
        ".project-row",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          scrollTrigger: { trigger: ".project-row", start: "top 90%" },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="border-t border-stone-200 bg-stone-50/60 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32 dark:border-zinc-800 dark:bg-zinc-900/60">
      <div className="mx-auto max-w-7xl">
        {/* Editorial section header */}
        <div className="projects-header mb-12 flex flex-col gap-4 border-b border-zinc-200 pb-5 sm:mb-16 sm:flex-row sm:items-end sm:justify-between sm:pb-6 lg:mb-20 dark:border-zinc-700">
          <div>
            <span className="font-mono text-[clamp(0.64rem,1.8vw,0.72rem)] uppercase tracking-[0.22em] text-zinc-400 sm:tracking-[0.3em] dark:text-zinc-500">{messages.projects.chapter}</span>
            <h2 className="font-editorial text-balance mt-2 text-[clamp(2.5rem,8vw,4.2rem)] font-bold italic tracking-[-0.03em] text-zinc-950 dark:text-zinc-50">{messages.projects.title}</h2>
          </div>
          <span className="font-mono text-[clamp(0.64rem,1.8vw,0.72rem)] uppercase tracking-[0.16em] text-zinc-400 sm:block sm:tracking-[0.2em]">
            {projects.length} {messages.projects.countLabel}
          </span>
        </div>

        {/* Project list — editorial catalogue style */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`project-row group relative overflow-hidden border border-zinc-200 p-6 transition-all duration-500 hover:border-zinc-400 hover:shadow-sm sm:p-8 lg:p-10 dark:border-zinc-700 dark:hover:border-zinc-500 ${i === 0 ? "md:col-span-2" : ""}`}
            >
              {/* Background number */}
                <span className="font-editorial pointer-events-none absolute -right-3 -top-5 text-[clamp(5rem,18vw,10rem)] font-light leading-none text-zinc-100 transition-colors duration-500 group-hover:text-zinc-200 dark:text-zinc-800 dark:group-hover:text-zinc-700">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                {/* Context label */}
                <span className="font-mono text-[clamp(0.58rem,1.5vw,0.66rem)] uppercase tracking-[0.16em] text-zinc-400 sm:tracking-[0.2em]">
                  {project.context}
                </span>

                {/* Title */}
                <h3 className="font-editorial text-balance mt-3 text-[clamp(1.55rem,4vw,2rem)] font-bold text-zinc-950 dark:text-zinc-50">
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className="text-pretty mt-2 max-w-2xl text-[clamp(0.92rem,1.9vw,1rem)] leading-relaxed text-zinc-500 dark:text-zinc-400">{project.tagline}</p>

                {/* Divider */}
                <div className="my-5 h-px w-12 bg-zinc-300 transition-all duration-500 group-hover:w-24 group-hover:bg-zinc-950 dark:bg-zinc-600 dark:group-hover:bg-zinc-50" />

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-zinc-200 px-2.5 py-0.5 font-mono text-[clamp(0.58rem,1.5vw,0.66rem)] uppercase tracking-[0.05em] text-zinc-400 transition-colors duration-300 group-hover:border-zinc-300 group-hover:text-zinc-600 dark:border-zinc-700 dark:text-zinc-500 dark:group-hover:border-zinc-600 dark:group-hover:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {"nda" in project && project.nda && (
                    <span className="inline-flex items-center gap-1 border border-zinc-200 px-2.5 py-0.5 font-mono text-[clamp(0.58rem,1.5vw,0.66rem)] uppercase tracking-[0.05em] text-zinc-400">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                      </svg>
                      {messages.projects.nda}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
