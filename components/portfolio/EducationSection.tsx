"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Mahasarakham University",
    period: "2019 — 2023",
    detail:
      "GPAX: 3.42 — Focused on software engineering and web technologies. Built EDV Metaverse and NFT Marketplace projects during university.",
  },
];

const EducationSection = function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".education-header > *",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          scrollTrigger: { trigger: ".education-header", start: "top 85%" },
        },
      );
      gsap.fromTo(
        ".education-card",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: ".education-card", start: "top 88%" } },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="education" className="border-t border-zinc-200 bg-white px-6 py-32 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="education-header mb-20 flex items-end justify-between border-b border-zinc-200 pb-6">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-400">Chapter 04</span>
            <h2 className="font-editorial mt-2 text-5xl font-bold italic tracking-[-0.02em] text-zinc-950 sm:text-6xl">
              Education
            </h2>
          </div>
        </div>

        <div className="space-y-10">
          {education.map((edu) => (
            <div key={edu.degree} className="education-card grid gap-8 md:grid-cols-[200px_1fr_1fr] md:gap-12">
              {/* Period */}
              <div>
                <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-zinc-400">{edu.period}</span>
              </div>

              {/* Degree & School */}
              <div>
                <h3 className="font-editorial text-2xl font-bold text-zinc-950">{edu.degree}</h3>
                <p className="mt-1 text-sm italic text-zinc-400">{edu.school}</p>
              </div>

              {/* Detail */}
              <p className="text-base leading-[1.85] text-zinc-600">{edu.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
