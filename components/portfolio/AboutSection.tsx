"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-content > *",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="border-t border-zinc-200 bg-zinc-50 px-6 py-32 sm:px-10">
      <div className="about-content mx-auto max-w-7xl">
        {/* Editorial section header */}
        <div className="about-header mb-20 flex items-end justify-between border-b border-zinc-200 pb-6">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-400">Prologue</span>
            <h2 className="font-editorial mt-2 text-5xl font-bold italic tracking-[-0.02em] text-zinc-950 sm:text-6xl">
              About Me
            </h2>
          </div>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400 sm:block">
            Who I Am
          </span>
        </div>

        {/* Content grid with editorial number accent */}
        <div className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-16">
          {/* Large decorative quote mark */}
          <span className="font-editorial hidden text-[10rem] font-light leading-none text-zinc-100 select-none md:block">
            &ldquo;
          </span>

          <div className="space-y-8">
            <p className="text-lg leading-[1.9] text-zinc-600 sm:text-xl sm:leading-[1.9]">
              I&apos;m a Full Stack Developer who started out working on small front-end projects for multiple companies
              while studying, and later transitioned into a full-time role in this field. I have experience building
              back-office systems, trading platforms, and government-related applications, working across both front-end
              and back-end.
            </p>
            <p className="text-base leading-[1.9] text-zinc-500">
              I&apos;ve worked both independently and as part of a team, and I&apos;m comfortable adapting to either
              environment. Working in a team has helped me grow quickly through collaboration and shared learning
              throughout each project. I&apos;m a fast learner, enjoy trying new things, and am always looking for new
              challenges. I believe my skills and experience can contribute effectively to your team and organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
