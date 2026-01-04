"use client";

import gsap from "gsap";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function SkillsPage() {
  const mainRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }
        );
      }
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "Nuxt.js", level: 85 },
        { name: "Angular", level: 70 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 80 },
        { name: ".NET", level: 60 },
        { name: "REST API", level: 85 },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "PostgreSQL", level: 75 },
        { name: "MySQL", level: 75 },
        { name: "MongoDB", level: 70 },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 70 },
        { name: "Linux/Ubuntu", level: 75 },
        { name: "Bitbucket", level: 80 },
      ],
    },
    {
      title: "Other",
      skills: [
        { name: "UI/UX Design", level: 75 },
        { name: "Figma", level: 70 },
        { name: "Web3/Blockchain", level: 60 },
      ],
    },
  ];

  return (
    <main
      ref={mainRef}
      className="relative min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-orange-600/10 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors mb-8 group"
        >
          <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="uppercase tracking-wider text-sm">Back to Portfolio</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-4">Skills</h1>
          <p className="text-gray-400 uppercase tracking-wide text-sm">Technologies & tools</p>
        </div>

        {/* Content */}
        <div ref={contentRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/60 border border-dashed border-orange-500/20 p-6 hover:border-orange-500/40 transition-all duration-300"
            >
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-orange-500/30 group-hover:border-orange-500/60 transition-colors" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-orange-500/30 group-hover:border-orange-500/60 transition-colors" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-orange-500/30 group-hover:border-orange-500/60 transition-colors" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-orange-500/30 group-hover:border-orange-500/60 transition-colors" />

              <h3 className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-6">{category.title}</h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-white text-sm">{skill.name}</span>
                      <span className="text-gray-500 text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent pointer-events-none" />
    </main>
  );
}
