"use client";

import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/jakkapet2k",
      icon: GithubIcon,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/jakkapet-ladnok",
      icon: LinkedinIcon,
    },
    {
      name: "Email",
      href: "mailto:jakkapet@jakkapet.com",
      icon: MailIcon,
    },
  ];

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Experience", href: "/experience" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative bg-linear-to-br from-gray-900 via-black to-gray-900 border-t border-orange-500/20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 left-1/4 h-40 w-40 rounded-full bg-orange-500/5 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 h-40 w-40 rounded-full bg-orange-600/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
                Jakka<span className="text-orange-500">pet</span>
              </h3>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer passionate about creating innovative web solutions and exceptional user experiences.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Navigation</h4>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-orange-500 text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 bg-gray-800/50 border border-gray-700 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© {currentYear} Jakkapet. All rights reserved.</p>
          <p className="text-gray-600 text-xs uppercase tracking-wider">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-orange-500/30" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-orange-500/30" />
    </footer>
  );
}
