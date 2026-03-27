"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Banking Merchant Back Office",
    description:
      "A Back Office web system focused on merchant management with Front-end and Back-end API implementation, processing over 100,000 transactions daily with optimized data export for large-scale datasets.",
    tags: ["NuxtJS", "AdonisJS", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Smart Trading Back Office",
    description:
      "Back Office system for a stock trading application to manage user permissions, trading accounts, and stock market data uploads with mobile APIs for trading data.",
    tags: ["NuxtJS", "NestJS", "TypeScript", "MongoDB"],
  },
  {
    title: "Government Website",
    description:
      "A public-facing government website with event map, area-based notification system, and back-office APIs for managing event-related information.",
    tags: ["Next.js", "Node.js", "REST APIs"],
  },
  {
    title: "Clinic Management App",
    description:
      "A full-featured clinic management web application with POS system for product sales and back-office for managing inventory, events, and sales reports across multiple branches.",
    tags: ["AngularJS", "Node.js", "MySQL", "REST APIs"],
  },
  {
    title: "Fiber Optic Monitoring System",
    description:
      "Web system for fiber optic management and monitoring/reporting, integrating data from hardware devices. Handled DevOps with Bitbucket and Git servers on Ubuntu.",
    tags: ["AngularJS", "DevOps", "Ubuntu", "Git"],
  },
  {
    title: "EDV Metaverse & NFT Marketplace",
    description:
      "Designed UI/UX and developed the frontend for a digital land sales platform and NFT marketplace with interactive interfaces and backend API integration.",
    tags: ["React", "TypeScript", "Web3", "REST APIs"],
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
        ".project-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: { trigger: ".project-card", start: "top 90%" },
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

        {/* Editorial grid — alternating large/small */}
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {projects.map((project, i) => {
            const isFeature = i % 3 === 0;
            return (
              <div
                key={project.title}
                className={`project-card group cursor-pointer ${isFeature ? "md:col-span-2" : ""}`}
              >
                <div className={`${isFeature ? "grid gap-8 md:grid-cols-[1fr_1fr] md:items-start" : ""}`}>
                  {/* Number + title column */}
                  <div>
                    {/* Large editorial number */}
                    <span className="font-editorial block text-8xl font-light leading-none text-zinc-200 transition-colors duration-500 group-hover:text-zinc-950 sm:text-9xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-editorial mt-4 text-2xl font-bold text-zinc-950 sm:text-3xl">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description column */}
                  <div className={`${isFeature ? "md:pt-20" : "mt-4"}`}>
                    <p className="text-base leading-[1.85] text-zinc-600">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-zinc-200 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-zinc-500 transition-colors group-hover:border-zinc-400 group-hover:text-zinc-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Read more arrow */}
                    <div className="mt-6 flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.12em] text-zinc-400 transition-colors group-hover:text-zinc-950">
                      Read More
                      <svg
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Thin rule */}
                <hr className="editorial-rule mt-10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
