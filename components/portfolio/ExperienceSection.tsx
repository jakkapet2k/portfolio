"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Developer",
    company: "ClickNext co.,ltd.",
    period: "Apr 2025 — Present",
    description:
      "Developed Banking Back Office, Stock Trading Back Office, and Government websites. Responsible for both front-end and back-end development, processing over 100,000 daily transactions, building mobile APIs, and implementing event map & notification systems.",
  },
  {
    role: "Internship Full Stack Developer",
    company: "ClickNext co.,ltd.",
    period: "Dec 2024 — Apr 2025",
    description:
      "Developed a Back-office system for a banking institution with both front-end and back-end development. Built data retrieval and internal management reports using AdonisJS and Nuxt.js.",
  },
  {
    role: "Co-founder & Developer",
    company: "Thewin dev tech co.,ltd.",
    period: "Jul 2023 — Dec 2024",
    description:
      "Contracted with software house companies building fiber optic monitoring systems, clinic management applications, and POS systems. Handled DevOps, full-stack development, and multi-branch reporting.",
  },
  {
    role: "Student Developer",
    company: "University Project",
    period: "Aug 2021 — Dec 2022",
    description:
      "Designed UI/UX and developed frontends for EDV Metaverse (digital land sales platform) and EDV NFT Marketplace with interactive interfaces and backend API integrations.",
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
              className="experience-item group grid gap-6 border-b border-zinc-100 py-12 first:pt-0 last:border-0 md:grid-cols-[220px_1fr_1fr] md:gap-10"
            >
              {/* Date column */}
              <div className="flex flex-col">
                <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-zinc-400">{exp.period}</span>
                <span className="font-editorial mt-1 text-4xl font-light text-zinc-200 md:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title column */}
              <div>
                <h3 className="font-editorial text-2xl font-bold text-zinc-950">{exp.role}</h3>
                <p className="mt-1 text-sm italic text-zinc-400">{exp.company}</p>
              </div>

              {/* Description column */}
              <p className="text-base leading-[1.85] text-zinc-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
