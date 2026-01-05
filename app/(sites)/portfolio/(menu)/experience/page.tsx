"use client";

import gsap from "gsap";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function ExperiencePage() {
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
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
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-4">Experience</h1>
          <p className="text-gray-400 uppercase tracking-wide text-sm">Professional journey</p>
        </div>

        {/* Content */}
        <div ref={contentRef} className="space-y-8">
          {/* ClickNext */}
          <div className="bg-gray-900/60 border border-dashed border-orange-500/20 p-6 hover:border-orange-500/40 transition-colors">
            <p className="text-orange-500 text-xs uppercase tracking-wider mb-2">December 2024 - Present</p>
            <div className="border-l-2 border-orange-500/50 pl-4">
              <h4 className="text-white font-semibold text-lg">ClickNext co.,ltd.</h4>
              <p className="text-gray-400 text-sm mt-1">
                Interned as a Full Stack Developer, responsible for developing web applications on both the Front-End
                and Back-End. Designed and implemented APIs to efficiently connect and transfer data, enhancing features
                and functionality for users while ensuring seamless communication between systems
              </p>
              <div className="mt-4">
                <p className="text-orange-500/80 text-xs uppercase tracking-wider mb-2">• Project</p>
                <div className="ml-4 space-y-3">
                  <div>
                    <p className="text-gray-300 text-sm flex items-center gap-2">✦ GSB Merchant Back Office</p>
                    <p className="text-gray-500 text-xs mt-1 ml-4">
                      Developed the Front-End and Back-End of the project. For the Front-End, created a website and
                      features for reporting various store data. For the Back-End, developed APIs to efficiently handle
                      data transfer between the Front-End and Back-End
                    </p>
                    <div className="flex gap-2 mt-2 ml-4">
                      <span className="text-xs text-orange-500/70 border border-orange-500/30 px-2 py-0.5 rounded">
                        Nuxt.js
                      </span>
                      <span className="text-xs text-orange-500/70 border border-orange-500/30 px-2 py-0.5 rounded">
                        Vuetify
                      </span>
                      <span className="text-xs text-gray-500">December 2024 - Mars 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thewin dev tech */}
          <div className="bg-gray-900/60 border border-dashed border-orange-500/20 p-6 hover:border-orange-500/40 transition-colors">
            <p className="text-orange-500 text-xs uppercase tracking-wider mb-2">July 2023 - December 2024</p>
            <div className="border-l-2 border-orange-500/50 pl-4">
              <h4 className="text-white font-semibold text-lg">Thewin dev tech co.,ltd.</h4>
              <p className="text-gray-400 text-sm mt-1">
                A Frontend Developer primarily focused on developing web applications, with some experience in API
                Backend development for certain projects.
              </p>
              <div className="mt-4">
                <p className="text-orange-500/80 text-xs uppercase tracking-wider mb-2">• Project</p>
                <div className="ml-4 space-y-4">
                  <div>
                    <p className="text-gray-300 text-sm flex items-center gap-2">
                      ✦ Clinic Management Web Application Project
                    </p>
                    <p className="text-gray-500 text-xs mt-1 ml-4">
                      Developed backend using Express and Node.js, designing and implementing APIs based on design
                      specifications and user requirements. Additionally, developed the frontend and integrated APIs to
                      create dashboards and reporting pages for efficient management of employee and clinic data,
                      including features for activity tracking and stock management.
                    </p>
                    <div className="flex gap-2 mt-2 ml-4">
                      <span className="text-xs text-orange-500/70 border border-orange-500/30 px-2 py-0.5 rounded">
                        Next.js
                      </span>
                      <span className="text-xs text-gray-500">July - August 2024</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm flex items-center gap-2">
                      ✦ Application for management monitoring&reporting fiber optic system
                    </p>
                    <p className="text-gray-500 text-xs mt-1 ml-4">
                      Worked as a DevOps with Bitbucket and Git server on Ubuntu, and developed the frontend of a web
                      application for administration and technicians
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2 ml-4">
                      <span className="text-xs text-orange-500/70 border border-orange-500/30 px-2 py-0.5 rounded">
                        Angular.js
                      </span>
                      <span className="text-xs text-orange-500/70 border border-orange-500/30 px-2 py-0.5 rounded">
                        .Net
                      </span>
                      <span className="text-xs text-gray-500">May 2023-May 2024</span>
                      <span className="text-xs text-gray-600">
                        Contract with Software house companies(The details are proprietary.)
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm flex items-center gap-2">✦ Social media application</p>
                    <p className="text-gray-500 text-xs mt-1 ml-4">
                      Developed the frontend and integrated with the backend API of the web application using NuxtJS,
                      while managing the server on Ubuntu
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2 ml-4">
                      <span className="text-xs text-orange-500/70 border border-orange-500/30 px-2 py-0.5 rounded">
                        Next.js
                      </span>
                      <span className="text-xs text-gray-500">October 2022-August 2023</span>
                      <span className="text-xs text-gray-600">
                        Contract with Software house companies(The details are proprietary.)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* University */}
          <div className="bg-gray-900/60 border border-dashed border-orange-500/20 p-6 hover:border-orange-500/40 transition-colors">
            <p className="text-orange-500 text-xs uppercase tracking-wider mb-2">August 2021 - December 2022</p>
            <div className="border-l-2 border-orange-500/30 pl-4">
              <h4 className="text-white font-semibold text-lg">
                Creating Digital Platforms and Virtual Environments at Mahasarakham University
              </h4>
              <p className="text-gray-400 text-sm mt-1">
                University Projects: Developed Frontend for the EDV Metaverse for Sale Digital Land Web Application and
                EDV NFT Marketplace Project using Next.js
              </p>
              <div className="mt-4">
                <p className="text-orange-500/80 text-xs uppercase tracking-wider mb-2">• Project</p>
                <div className="ml-4 space-y-4">
                  <div>
                    <p className="text-gray-300 text-sm flex items-center gap-2">
                      ✦ EDV Metaverse for sale digital land web application
                    </p>
                    <p className="text-gray-500 text-xs mt-1 ml-4">
                      Developed the frontend, integrated APIs from the backend, and designed the website&apos;s UI/UX
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm flex items-center gap-2">✦ EDV NFT Marketplace Project</p>
                    <p className="text-gray-500 text-xs mt-1 ml-4">
                      Developed the frontend of websites, integrated APIs, and designed website interfaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent pointer-events-none" />
    </main>
  );
}
