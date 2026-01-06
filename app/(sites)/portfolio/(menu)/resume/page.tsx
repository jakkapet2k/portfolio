"use client";

import gsap from "gsap";
import { ArrowLeftIcon, DownloadIcon, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function ResumePage() {
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

  const resumeUrl = "/files/resume.pdf";

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
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-4">Resume</h1>
            <p className="text-gray-400 uppercase tracking-wide text-sm">My professional resume</p>
          </div>

          {/* Action buttons */}
          <div className="flex gap-4 mt-6 md:mt-0">
            <a
              href={resumeUrl}
              download
              className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/50 text-orange-500 px-4 py-2 text-sm uppercase tracking-wider hover:bg-orange-500/30 transition-colors"
            >
              <DownloadIcon className="w-4 h-4" />
              Download
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-800/50 border border-gray-700 text-gray-300 px-4 py-2 text-sm uppercase tracking-wider hover:border-orange-500/50 hover:text-orange-500 transition-colors"
            >
              <ExternalLinkIcon className="w-4 h-4" />
              Open in New Tab
            </a>
          </div>
        </div>

        {/* Content */}
        <div ref={contentRef}>
          {/* PDF Preview */}
          <div className="relative bg-gray-900/60 border border-dashed border-orange-500/20">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-orange-500/30" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-orange-500/30" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-orange-500/30" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-orange-500/30" />

            <div className="p-2">
              <iframe
                src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                className="w-full h-screen bg-white"
                title="Resume PDF Preview"
              />
            </div>
          </div>

          {/* Fallback message */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              If the PDF doesn&apos;t display properly,{" "}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 underline"
              >
                click here to view it directly
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent pointer-events-none" />
    </main>
  );
}
