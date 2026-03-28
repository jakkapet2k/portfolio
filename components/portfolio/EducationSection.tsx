"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const EducationSection = function EducationSection() {
  const { messages } = useLocale();
  const education = messages.education.items;
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
    <section ref={sectionRef} id="education" className="border-t border-zinc-200 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl">
        <div className="education-header mb-12 flex flex-col gap-4 border-b border-zinc-200 pb-5 sm:mb-16 sm:flex-row sm:items-end sm:justify-between sm:pb-6 lg:mb-20 dark:border-zinc-700">
          <div>
            <span className="font-mono text-[clamp(0.64rem,1.8vw,0.72rem)] uppercase tracking-[0.22em] text-zinc-400 sm:tracking-[0.3em] dark:text-zinc-500">{messages.education.chapter}</span>
            <h2 className="font-editorial text-balance mt-2 text-[clamp(2.5rem,8vw,4.2rem)] font-bold italic tracking-[-0.03em] text-zinc-950 dark:text-zinc-50">{messages.education.title}</h2>
          </div>
        </div>

        <div className="space-y-10">
          {education.map((edu) => (
            <div key={edu.degree} className="education-card grid gap-6 sm:gap-8 md:grid-cols-[200px_1fr_1fr] md:gap-12">
              {/* Period */}
              <div>
                <span className="font-mono text-[clamp(0.68rem,1.8vw,0.75rem)] uppercase tracking-[0.12em] text-zinc-400 sm:tracking-[0.15em]">{edu.period}</span>
              </div>

              {/* Degree & School */}
              <div>
                <h3 className="font-editorial text-balance text-[clamp(1.55rem,3.7vw,2rem)] font-bold text-zinc-950 dark:text-zinc-50">{edu.degree}</h3>
                <p className="mt-1 text-[clamp(0.92rem,1.9vw,1rem)] italic text-zinc-400">{edu.school}</p>
              </div>

              {/* Detail */}
              <p className="text-pretty text-[clamp(0.98rem,2.05vw,1.05rem)] leading-[1.8] text-zinc-600 sm:leading-[1.85] dark:text-zinc-400">{edu.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
