"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Banking Merchant Back Office",
    tagline: "Merchant management & high-volume transaction processing",
    tags: ["Nuxt.JS", "AdonisJS", "TypeScript", "PostgreSQL"],
    context: "ClickNext co.,ltd.",
  },
  {
    title: "Smart Trading Back Office",
    tagline: "Stock trading accounts, exchange data uploads & mobile APIs",
    tags: ["Next.JS", "Nest.JS", "TypeScript", "PostgreSQL", "MongoDB", "WebSocket"],
    context: "ClickNext co.,ltd.",
  },
  {
    title: "Government Website",
    tagline: "Event map, area-based notifications & back-office APIs",
    tags: ["Next.JS", "Node.JS", "PHP", "Laravel", "MySQL", "MongoDB"],
    context: "ClickNext co.,ltd.",
  },
  {
    title: "Clinic Management App",
    tagline: "POS, inventory tracking & multi-branch sales reports",
    tags: ["Next.JS", "Node.JS", "MySQL", "Express"],
    context: "Thewin dev tech co.,ltd.",
  },
  {
    title: "Fiber Optic Monitoring System",
    tagline: "Hardware data integration, monitoring dashboard & DevOps",
    tags: ["AngularJS", "DevOps", "Ubuntu", "Git"],
    context: "Thewin dev tech co.,ltd.",
    nda: true,
  },
  {
    title: "EDV Metaverse & NFT Marketplace",
    tagline: "Digital land sales platform & NFT trading interface",
    tags: ["Next.JS", "Nest.JS", "Web3.JS", "TypeScript", "PostgreSQL", "BSC"],
    context: "University Project",
  },
];

const ProjectsSection = function ProjectsSection() {
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
    <section ref={sectionRef} id="projects" className="border-t border-zinc-200 bg-zinc-50/50 px-6 py-32 sm:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Editorial section header */}
        <div className="projects-header mb-20 flex items-end justify-between border-b border-zinc-200 pb-6">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-400">Chapter 01</span>
            <h2 className="font-editorial mt-2 text-5xl font-bold italic tracking-[-0.02em] text-zinc-950 sm:text-6xl">
              Projects
            </h2>
          </div>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400 sm:block">
            {projects.length} Projects
          </span>
        </div>

        {/* Project list — editorial catalogue style */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`project-row group relative overflow-hidden border border-zinc-200 p-8 transition-all duration-500 hover:border-zinc-400 hover:shadow-sm sm:p-10 ${i === 0 ? "md:col-span-2" : ""}`}
            >
              {/* Background number */}
              <span className="font-editorial pointer-events-none absolute -right-4 -top-6 text-[120px] font-light leading-none text-zinc-100 transition-colors duration-500 group-hover:text-zinc-200 sm:text-[160px]">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                {/* Context label */}
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                  {project.context}
                </span>

                {/* Title */}
                <h3 className="font-editorial mt-3 text-2xl font-bold text-zinc-950 sm:text-3xl">
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-zinc-500">{project.tagline}</p>

                {/* Divider */}
                <div className="my-5 h-px w-12 bg-zinc-300 transition-all duration-500 group-hover:w-24 group-hover:bg-zinc-950" />

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-zinc-200 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.05em] text-zinc-400 transition-colors duration-300 group-hover:border-zinc-300 group-hover:text-zinc-600"
                    >
                      {tag}
                    </span>
                  ))}
                  {"nda" in project && project.nda && (
                    <span className="inline-flex items-center gap-1 border border-zinc-200 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.05em] text-zinc-400">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                      </svg>
                      NDA
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
