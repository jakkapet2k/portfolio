"use client";

import gsap from "gsap";
import { ArrowLeftIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function ContactPage() {
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

  const contactLinks = [
    {
      icon: MailIcon,
      title: "Email",
      value: "jakkapet@jakkapet.com",
      href: "mailto:jakkapet@jakkapet.com",
    },
    {
      icon: GithubIcon,
      title: "GitHub",
      value: "github.com/jakkapet2k",
      href: "https://github.com/jakkapet2k",
    },
    {
      icon: LinkedinIcon,
      title: "LinkedIn",
      value: "linkedin.com/in/jakkapet-ladnok",
      href: "https://linkedin.com/in/jakkapet-ladnok/",
    },
    // {
    //   icon: PhoneIcon,
    //   title: "Phone",
    //   value: "+66 XX XXX XXXX",
    //   href: "tel:+66XXXXXXXX",
    // },
    // {
    //   icon: MapPinIcon,
    //   title: "Location",
    //   value: "Bangkok, Thailand",
    //   href: "#",
    // },
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
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-4">Contact</h1>
          <p className="text-gray-400 uppercase tracking-wide text-sm">Get in touch</p>
        </div>

        {/* Content */}
        <div ref={contentRef} className="space-y-4">
          {/* Contact Links */}
          {contactLinks.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative flex items-center gap-4 bg-gray-900/60 border border-dashed border-orange-500/20 p-4 hover:border-orange-500/40 transition-all duration-300"
            >
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-orange-500/30 group-hover:border-orange-500/60 transition-colors" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-orange-500/30 group-hover:border-orange-500/60 transition-colors" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-orange-500/30 group-hover:border-orange-500/60 transition-colors" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-orange-500/30 group-hover:border-orange-500/60 transition-colors" />

              <contact.icon className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">{contact.title}</p>
                <p className="text-white text-sm">{contact.value}</p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent pointer-events-none" />
    </main>
  );
}
