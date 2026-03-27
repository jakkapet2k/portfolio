"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Developer",
    company: "ClickNext co.,ltd.",
    period: "Apr 2025 — Present",
    projects: [
      {
        name: "Banking Merchant Back Office",
        description:
          "Developed a Banking Back Office web system focused on merchant management, responsible for both Front-end development and Back-end API / Controller implementation to support high-volume transaction processing and Optimized data export functionality for large-scale datasets (Excel/PDF).",
        tags: ["Nuxt.JS", "AdonisJS", "TypeScript", "PostgreSQL"],
      },
      {
        name: "Smart Trading Back Office",
        description:
          "Developed a Back Office web system for a stock trading application to manage user permissions and trading accounts, including a system for uploading stock market data files from the stock exchange. Worked on both Front-end and Back-end development, and built Back-end APIs for the mobile application to deliver and display trading-related data.",
        tags: ["Next.JS", "Nest.JS", "TypeScript", "PostgreSQL", "MongoDB", "WebSocket"],
      },
      {
        name: "Government Website",
        description:
          "Developed a website for a government agency, working on both front-end and back-end. Added features such as an event map and area-based notification system for the public, and built APIs for delivering data to public-facing pages as well as back-office APIs for managing event-related information.",
        tags: ["Next.JS", "Node.JS", "PHP", "Laravel", "MySQL", "MongoDB"],
      },
    ],
  },
  {
    role: "Internship Full Stack Developer",
    company: "ClickNext co.,ltd.",
    period: "Dec 2024 — Apr 2025",
    projects: [
      {
        name: "Banking Merchant Back Office",
        description:
          "Developed a Back-office system for a banking institution, encompassing both Front-end and Back-end development. Responsible for data retrieval and generating internal management reports. The system was built using Node.js frameworks, specifically AdonisJS for the backend and Nuxt.js for the frontend.",
        tags: ["Nuxt.JS", "AdonisJS", "TypeScript", "PostgreSQL"],
      },
    ],
  },
  {
    role: "Co-founder & Developer",
    company: "Thewin dev tech co.,ltd.",
    period: "Jul 2023 — Dec 2024",
    projects: [
      {
        name: "Fiber Optic Monitoring System",
        description:
          "Developed a web system for fiber optic management and monitoring/reporting, integrating data from hardware devices connected to the website. Took on a DevOps role, managing Bitbucket and Git servers on Ubuntu, and developed front-end interfaces for administrators and technicians using AngularJS.",
        tags: ["AngularJS", "DevOps", "Ubuntu", "Git"],
      },
      {
        name: "Clinic Management Web Application",
        description:
          "Developed a Clinic Management web application and APIs, including a POS system for product sales and a back-office system for managing inventory, events, and sales reports across multiple branches.",
        tags: ["Next.JS", "Node.JS", "MySQL", "Express"],
      },
    ],
  },
  {
    role: "Student Developer",
    company: "University Project",
    period: "Aug 2021 — Dec 2022",
    projects: [
      {
        name: "EDV Metaverse",
        description:
          "Designed the UI/UX and developed the frontend for the EDV Metaverse digital land sales platform, creating an interactive user interface and successfully integrated backend APIs to handle complex land data and user purchase transactions seamlessly.",
        tags: ["Next.JS", "Node.JS", "Nest.JS", "Web3.JS", "TypeScript", "PostgreSQL", "Binance Smart Chain"],
      },
      {
        name: "EDV NFT Marketplace",
        description:
          "Developed the frontend for the EDV NFT Marketplace, focusing on a responsive and high-performance interface for digital asset trading including responsible for implementing the UI/UX design and integrating backend APIs to support asset listings and core marketplace functionalities.",
        tags: ["Next.JS", "Node.JS", "Nest.JS", "Web3.JS", "TypeScript", "PostgreSQL", "Binance Smart Chain"],
      },
    ],
  },
];

const ExperienceSection = function ExperienceSection() {
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
    <section ref={sectionRef} id="experience" className="border-t border-zinc-200 bg-white px-6 py-32 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="experience-header mb-20 flex items-end justify-between border-b border-zinc-200 pb-6">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-400">Chapter 02</span>
            <h2 className="font-editorial mt-2 text-5xl font-bold italic tracking-[-0.02em] text-zinc-950 sm:text-6xl">
              Experience
            </h2>
          </div>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400 sm:block">
            {experiences.length} Positions
          </span>
        </div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div
              key={exp.role}
              className="experience-item group relative grid gap-6 border-b border-zinc-100 py-12 transition-all duration-500 first:pt-0 last:border-0 hover:bg-zinc-50/60 md:grid-cols-[220px_1fr_1fr] md:gap-10"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-14 hidden h-2.5 w-2.5 border-2 border-zinc-300 bg-white transition-all duration-300 group-hover:scale-125 group-hover:border-zinc-950 group-hover:bg-zinc-950 md:block" />

              {/* Date column */}
              <div className="flex flex-col md:border-l md:border-zinc-200 md:pl-6">
                <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-zinc-400 transition-colors duration-300 group-hover:text-zinc-600">{exp.period}</span>
                <span className="font-editorial mt-1 text-4xl font-light text-zinc-200 transition-colors duration-500 group-hover:text-zinc-950 md:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title column */}
              <div>
                <h3 className="font-editorial text-2xl font-bold text-zinc-950">{exp.role}</h3>
                <p className="mt-1 text-sm italic text-zinc-400">{exp.company}</p>
                <div className="mt-3 h-px w-8 bg-zinc-300 transition-all duration-500 group-hover:w-16 group-hover:bg-zinc-950" />
              </div>

              {/* Description column */}
              <div className="space-y-5">
                {exp.projects.map((project, j) => (
                  <div
                    key={j}
                    className="border-l-2 border-transparent pl-4 transition-all duration-300 hover:border-zinc-950"
                  >
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-zinc-500">
                      {project.name}
                    </span>
                    <p className="mt-1 text-base leading-[1.85] text-zinc-600">{project.description}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-zinc-200 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.05em] text-zinc-400 transition-colors duration-300 group-hover:border-zinc-300 group-hover:text-zinc-600"
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
