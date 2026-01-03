"use client";

import { AuroraText } from "@/components/ui/aurora-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { Highlighter } from "@/components/ui/highlighter";
import { TypingAnimation } from "@/components/ui/typing-animation";
import gsap from "gsap";
import { BriefcaseIcon, CodeIcon, GithubIcon, GraduationCapIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function PortfolioHomePage() {
  const mainRef = useRef<HTMLElement>(null);
  const bgOrbsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const leftLinesRef = useRef<HTMLDivElement>(null);
  const rightLinesRef = useRef<HTMLDivElement>(null);
  const cornersRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const sideDecorLeftRef = useRef<HTMLDivElement>(null);
  const sideDecorRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background orbs floating animation
      if (bgOrbsRef.current) {
        const orbs = bgOrbsRef.current.children;
        gsap.to(orbs[0], { x: 30, y: -20, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
        gsap.to(orbs[1], { x: -25, y: 30, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut" });
        gsap.to(orbs[2], { scale: 1.2, duration: 3, repeat: -1, yoyo: true, ease: "power1.inOut" });
      }

      // Grid entrance animation
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
        );
      }

      // Left decorative lines animation
      if (leftLinesRef.current) {
        const lines = leftLinesRef.current.children;
        gsap.fromTo(
          lines,
          { scaleX: 0, transformOrigin: "right center" },
          { scaleX: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.5 }
        );
        gsap.to(lines, {
          opacity: 0.3,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.1,
          delay: 1.5,
        });
      }

      // Right decorative lines animation
      if (rightLinesRef.current) {
        const lines = rightLinesRef.current.children;
        gsap.fromTo(
          lines,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.5 }
        );
        gsap.to(lines, {
          opacity: 0.3,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.1,
          delay: 1.5,
        });
      }

      // Corner decorations animation
      if (cornersRef.current) {
        const corners = cornersRef.current.children;
        gsap.fromTo(
          corners,
          { scale: 0, rotation: -45 },
          { scale: 1, rotation: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)", delay: 0.8 }
        );
      }

      // Cards staggered animation
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: "power3.out", delay: 1 }
        );
      }

      // Side decorations slide in
      if (sideDecorLeftRef.current) {
        gsap.fromTo(
          sideDecorLeftRef.current,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.4 }
        );
        const diamonds = sideDecorLeftRef.current.querySelectorAll("[class*='rotate-45']");
        gsap.to(diamonds, { rotation: "+=360", duration: 8, repeat: -1, ease: "none" });
      }

      if (sideDecorRightRef.current) {
        gsap.fromTo(
          sideDecorRightRef.current,
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.4 }
        );
        const diamonds = sideDecorRightRef.current.querySelectorAll("[class*='rotate-45']");
        gsap.to(diamonds, { rotation: "+=360", duration: 8, repeat: -1, ease: "none" });
      }

      // Mouse parallax effect
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPercent = (clientX / window.innerWidth - 0.5) * 2;
        const yPercent = (clientY / window.innerHeight - 0.5) * 2;

        if (bgOrbsRef.current) {
          gsap.to(bgOrbsRef.current.children[0], {
            x: xPercent * 30,
            y: yPercent * 20,
            duration: 1,
            ease: "power2.out",
          });
          gsap.to(bgOrbsRef.current.children[1], {
            x: xPercent * -20,
            y: yPercent * -15,
            duration: 1.2,
            ease: "power2.out",
          });
        }
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      Icon: CodeIcon,
      title: "Projects",
      desc: "Web development projects",
      href: "/projects",
    },
    {
      Icon: BriefcaseIcon,
      title: "Experience",
      desc: "Professional journey",
      href: "/experience",
    },
    {
      Icon: GraduationCapIcon,
      title: "Skills",
      desc: "Technologies & tools",
      href: "/skills",
    },
    {
      Icon: GithubIcon,
      title: "GitHub",
      desc: "Open source contributions",
      href: "https://github.com/jakkapet2k",
      external: true,
    },
    {
      Icon: MailIcon,
      title: "Contact",
      desc: "Get in touch",
      href: "/contact",
    },
  ];

  return (
    <main
      ref={mainRef}
      className="relative flex min-h-screen flex-col items-center justify-center bg-linear-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Background decoration */}
      <div ref={bgOrbsRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-orange-600/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-orange-400/5 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/* Decorative grid layout */}
      <div ref={gridRef} className="relative z-10 w-full max-w-7xl mx-auto px-4">
        {/* Top decorative row */}
        <div className="flex w-full">
          <div className="flex-1 h-16 border-b border-r border-dashed border-[#ffffff17]" />
          <div className="w-64 h-16 border-b border-dashed border-[#ffffff17] flex items-end justify-center pb-4">
            <div className="w-2 h-2 rounded-full bg-orange-500/50 animate-pulse" />
          </div>
          <div className="flex-1 h-16 border-b border-l border-dashed border-[#ffffff17]" />
        </div>

        {/* Middle content row */}
        <div className="flex w-full">
          <div className="flex-1 border-r border-dashed border-[#ffffff17] flex items-center justify-end pr-8">
            <div ref={leftLinesRef} className="flex flex-col gap-2 items-end">
              <div className="w-16 h-px bg-linear-to-r from-transparent to-orange-500/50" />
              <div className="w-12 h-px bg-linear-to-r from-transparent to-orange-500/30" />
              <div className="w-8 h-px bg-linear-to-r from-transparent to-orange-500/20" />
            </div>
          </div>

          <div className="w-fit px-8 md:px-12 py-12 border-x border-dashed border-[#ffffff17] flex flex-col items-center justify-center">
            <div className="relative">
              {/* Corner decorations */}
              <div ref={cornersRef}>
                <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-dashed border-orange-500/30" />
                <div className="absolute -top-4 -right-4 w-8 h-8 border-t border-r border-dashed border-orange-500/30" />
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b border-l border-dashed border-orange-500/30" />
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-dashed border-orange-500/30" />
              </div>

              <TypingAnimation className="uppercase text-gray-400 text-lg tracking-widest mb-4">
                Portfolio 📁
              </TypingAnimation>
              <BlurFade delay={0.15} inView>
                <h1 className="uppercase text-4xl font-bold tracking-tighter md:text-5xl lg:text-8xl text-white drop-shadow-2xl text-center">
                  <Highlighter action="underline" color="#FF8F00">
                    Jakkapet
                  </Highlighter>
                  <AuroraText colors={["#FF6D00", "#FF8F00", "#FFA726", "#FFB74D"]}> Ladnok</AuroraText>
                </h1>
              </BlurFade>
              <BlurFade delay={0.5} inView>
                <p className="text-center mt-4 text-gray-500 text-base tracking-wider uppercase">
                  Web Developer with 2 years of experience. Strong Fullstack skills, excellent team collaboration, and a
                  fast learner. Capable of working independently or in teams, always seeking new challenges and growth
                  opportunities.
                </p>
              </BlurFade>
            </div>
          </div>

          <div className="flex-1 border-l border-dashed border-[#ffffff17] flex items-center justify-start pl-8">
            <div ref={rightLinesRef} className="flex flex-col gap-2 items-start">
              <div className="w-16 h-px bg-linear-to-l from-transparent to-orange-500/50" />
              <div className="w-12 h-px bg-linear-to-l from-transparent to-orange-500/30" />
              <div className="w-8 h-px bg-linear-to-l from-transparent to-orange-500/20" />
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="border-t border-dashed border-[#ffffff17] py-12">
          <div ref={cardsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {cards.map((card, index) => {
              const CardWrapper = card.external ? "a" : Link;
              const cardProps = card.external
                ? { href: card.href, target: "_blank", rel: "noopener noreferrer" }
                : { href: card.href };

              return (
                <CardWrapper
                  key={index}
                  {...cardProps}
                  className="group relative p-6 bg-gray-900/60 border border-dashed border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 cursor-pointer hover:bg-gray-900/80"
                >
                  {/* Card corner decorations */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-orange-500/30 group-hover:border-orange-500/60 transition-colors" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-orange-500/30 group-hover:border-orange-500/60 transition-colors" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-orange-500/30 group-hover:border-orange-500/60 transition-colors" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-orange-500/30 group-hover:border-orange-500/60 transition-colors" />

                  <card.Icon className="w-8 h-8 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-2">{card.title}</h3>
                  <p className="text-gray-500 text-xs uppercase tracking-wide">{card.desc}</p>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardWrapper>
              );
            })}
          </div>
        </div>

        {/* Bottom decorative row */}
        <div className="flex w-full">
          <div className="flex-1 h-16 border-t border-r border-dashed border-[#ffffff17] flex items-center justify-center">
            <div className="flex gap-2">
              <div className="w-1 h-1 rounded-full bg-[#ffffff17]" />
              <div className="w-1 h-1 rounded-full bg-[#ffffff17]" />
              <div className="w-1 h-1 rounded-full bg-[#ffffff17]" />
            </div>
          </div>
          <div className="w-64 h-16 border-t border-dashed border-[#ffffff17] flex items-start justify-center pt-4">
            <div className="w-2 h-2 rounded-full bg-orange-500/50 animate-pulse" />
          </div>
          <div className="flex-1 h-16 border-t border-l border-dashed border-[#ffffff17] flex items-center justify-center">
            <div className="flex gap-2">
              <div className="w-1 h-1 rounded-full bg-[#ffffff17]" />
              <div className="w-1 h-1 rounded-full bg-[#ffffff17]" />
              <div className="w-1 h-1 rounded-full bg-[#ffffff17]" />
            </div>
          </div>
        </div>
      </div>

      {/* Vertical side decorations */}
      <div
        ref={sideDecorLeftRef}
        className="absolute left-8 top-1/2 -translate-y-1/2 h-64 w-px border-l border-dashed border-[#ffffff17] hidden lg:block"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 border border-dashed border-[#ffffff17] rotate-45" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 border border-dashed border-[#ffffff17] rotate-45" />
      </div>
      <div
        ref={sideDecorRightRef}
        className="absolute right-8 top-1/2 -translate-y-1/2 h-64 w-px border-r border-dashed border-[#ffffff17] hidden lg:block"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 border border-dashed border-[#ffffff17] rotate-45" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 border border-dashed border-[#ffffff17] rotate-45" />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent pointer-events-none" />
    </main>
  );
}
