"use client";

import gsap from "gsap";
import { ArrowLeftIcon, ExternalLinkIcon, GithubIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function ProjectsPage() {
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

  const projects = [
    {
      title: "GSB Merchant Back Office",
      description:
        "Developed the Front-End and Back-End of the project. For the Front-End, created a website and features for reporting various store data. For the Back-End, developed APIs to efficiently handle data transfer between the Front-End and Back-End",
      tech: ["Nuxt.js", "Vuetify", "Node.js"],
      period: "December 2024 - Mars 2025",
    },
    {
      title: "Clinic Management Web Application",
      description:
        "Developed backend using Express and Node.js, designing and implementing APIs based on design specifications and user requirements. Additionally, developed the frontend and integrated APIs to create dashboards and reporting pages.",
      tech: ["Next.js", "Express", "Node.js"],
      period: "July - August 2024",
    },
    {
      title: "Fiber Optic Management System",
      description:
        "Worked as a DevOps with Bitbucket and Git server on Ubuntu, and developed the frontend of a web application for administration and technicians",
      tech: ["Angular.js", ".Net", "Ubuntu"],
      period: "May 2023 - May 2024",
    },
    {
      title: "Social Media Application",
      description:
        "Developed the frontend and integrated with the backend API of the web application using NuxtJS, while managing the server on Ubuntu",
      tech: ["Nuxt.js", "Ubuntu"],
      period: "October 2022 - August 2023",
    },
    {
      title: "EDV Metaverse Digital Land",
      description:
        "Developed the frontend, integrated APIs from the backend, and designed the website's UI/UX for a metaverse digital land marketplace",
      tech: ["Next.js", "Web3"],
      period: "August 2021 - December 2022",
    },
    {
      title: "EDV NFT Marketplace",
      description:
        "Developed the frontend of websites, integrated APIs, and designed website interfaces for NFT trading",
      tech: ["Next.js", "Web3"],
      period: "August 2021 - December 2022",
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
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-4">Projects</h1>
          <p className="text-gray-400 uppercase tracking-wide text-sm">Web development projects</p>
        </div>

        {/* Content */}
        <div ref={contentRef} className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/60 border border-dashed border-orange-500/20 p-6 hover:border-orange-500/40 transition-all duration-300"
            >
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-orange-500/30 group-hover:border-orange-500/60 transition-colors" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-orange-500/30 group-hover:border-orange-500/60 transition-colors" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-orange-500/30 group-hover:border-orange-500/60 transition-colors" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-orange-500/30 group-hover:border-orange-500/60 transition-colors" />

              <div className="flex items-start justify-between mb-4">
                <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                <div className="flex gap-2">
                  <GithubIcon className="w-5 h-5 text-gray-500 hover:text-orange-500 transition-colors cursor-pointer" />
                  <ExternalLinkIcon className="w-5 h-5 text-gray-500 hover:text-orange-500 transition-colors cursor-pointer" />
                </div>
              </div>

              <p className="text-gray-400 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs text-orange-500/70 border border-orange-500/30 px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-gray-500 text-xs uppercase tracking-wider">{project.period}</p>

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
