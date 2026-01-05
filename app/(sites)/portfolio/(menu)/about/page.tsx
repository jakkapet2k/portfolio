"use client";

import gsap from "gsap";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function AboutPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-4">About Me</h1>
          <p className="text-gray-400 uppercase tracking-wide text-sm">Get to know me</p>
        </div>

        {/* Content */}
        <div ref={contentRef} className="space-y-8">
          {/* Profile Section */}
          <div className="relative bg-gray-900/60 border border-dashed border-orange-500/20 p-8">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-orange-500/30" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-orange-500/30" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-orange-500/30" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-orange-500/30" />

            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-orange-500/30">
                  <Image
                    src="/image/profile_image.png"
                    alt="Jakkapet Ladnok"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative ring */}
                <div
                  className="absolute inset-0 w-48 h-48 rounded-full border border-dashed border-orange-500/20 animate-spin-slow"
                  style={{ animationDuration: "20s" }}
                />
              </div>

              {/* Name and Title */}
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Jakkapet Ladnok</h2>
                <p className="text-orange-500 uppercase tracking-wider text-sm font-semibold">Web Developer</p>
                <div className="mt-4 flex items-center gap-2 justify-center md:justify-start">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-gray-400 text-sm">Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="relative bg-gray-900/60 border border-dashed border-orange-500/20 p-6">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-orange-500/30" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-orange-500/30" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-orange-500/30" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-orange-500/30" />

            <h3 className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-4">Introduction</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              I&apos;m Jakkapet Ladnok, and I have 2 years of experience as a Web Developer. I have strong Fullstack
              development skills, excel in team collaboration, and am a fast learner. I am capable of working both
              independently and in teams, always seeking new challenges and opportunities for growth.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Years Experience", value: "2+" },
              { label: "Projects Completed", value: "10+" },
              { label: "Technologies", value: "15+" },
              { label: "Happy Clients", value: "5+" },
            ].map((stat, index) => (
              <div
                key={index}
                className="relative bg-gray-900/60 border border-dashed border-orange-500/20 p-4 text-center"
              >
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-orange-500/30" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-orange-500/30" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-orange-500/30" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-orange-500/30" />

                <p className="text-2xl md:text-3xl font-bold text-orange-500">{stat.value}</p>
                <p className="text-gray-400 text-xs uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent pointer-events-none" />
    </main>
  );
}
