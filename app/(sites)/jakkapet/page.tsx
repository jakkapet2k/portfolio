"use client";

import { AuroraText } from "@/components/ui/aurora-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { Highlighter } from "@/components/ui/highlighter";
import { TypingAnimation } from "@/components/ui/typing-animation";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function JakkapetHomePage() {
  const mainRef = useRef<HTMLElement>(null);
  const bgOrbsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const leftLinesRef = useRef<HTMLDivElement>(null);
  const rightLinesRef = useRef<HTMLDivElement>(null);
  const cornersRef = useRef<HTMLDivElement>(null);
  const sideDecorLeftRef = useRef<HTMLDivElement>(null);
  const sideDecorRightRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background orbs floating animation
      if (bgOrbsRef.current) {
        const orbs = bgOrbsRef.current.children;
        gsap.to(orbs[0], {
          x: 30,
          y: -20,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(orbs[1], {
          x: -25,
          y: 30,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(orbs[2], {
          scale: 1.2,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }

      // Grid entrance animation
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
        );

        // Border lines drawing effect
        const borders = gridRef.current.querySelectorAll("[class*='border']");
        gsap.fromTo(
          borders,
          { opacity: 0 },
          { opacity: 1, duration: 0.8, stagger: 0.05, ease: "power2.out", delay: 0.3 }
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

        // Continuous glow pulse
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

        // Continuous glow pulse
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

      // Side decorations slide in
      if (sideDecorLeftRef.current) {
        gsap.fromTo(
          sideDecorLeftRef.current,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.4 }
        );

        // Diamonds rotation
        const diamonds = sideDecorLeftRef.current.querySelectorAll("[class*='rotate-45']");
        gsap.to(diamonds, {
          rotation: "+=360",
          duration: 8,
          repeat: -1,
          ease: "none",
        });
      }

      if (sideDecorRightRef.current) {
        gsap.fromTo(
          sideDecorRightRef.current,
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.4 }
        );

        // Diamonds rotation
        const diamonds = sideDecorRightRef.current.querySelectorAll("[class*='rotate-45']");
        gsap.to(diamonds, {
          rotation: "+=360",
          duration: 8,
          repeat: -1,
          ease: "none",
        });
      }

      // Dots staggered bounce
      dotsRef.current.forEach((dotGroup, index) => {
        if (dotGroup) {
          const dots = dotGroup.children;
          gsap.fromTo(
            dots,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.4,
              stagger: 0.1,
              ease: "back.out(2)",
              delay: 1 + index * 0.2,
            }
          );

          // Continuous subtle bounce
          gsap.to(dots, {
            y: -3,
            duration: 0.6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: 0.1,
            delay: 2,
          });
        }
      });

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

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={mainRef}
      className="relative flex min-h-screen flex-col items-center justify-center bg-linear-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Background decoration */}
      <div ref={bgOrbsRef} className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-orange-600/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-orange-400/5 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px]" />

      {/* Decorative grid layout */}
      <div ref={gridRef} className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Top decorative row */}
        <div className="flex w-full">
          <div className="flex-1 h-32 border-b border-r border-dashed border-[#ffffff17]" />
          <div className="w-64 h-32 border-b border-dashed border-[#ffffff17] flex items-end justify-center pb-4">
            <div className="w-2 h-2 rounded-full bg-orange-500/50 animate-pulse" />
          </div>
          <div className="flex-1 h-32 border-b border-l border-dashed border-[#ffffff17]" />
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

          <div className="w-fit px-12 py-16 border-x border-dashed border-[#ffffff17] flex flex-col items-center justify-center">
            <div className="relative">
              {/* Corner decorations */}
              <div ref={cornersRef}>
                <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-dashed border-orange-500/30" />
                <div className="absolute -top-4 -right-4 w-8 h-8 border-t border-r border-dashed border-orange-500/30" />
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b border-l border-dashed border-orange-500/30" />
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-dashed border-orange-500/30" />
              </div>

              <TypingAnimation className="uppercase text-gray-400 text-lg tracking-widest mb-4">
                Welcome to 👋
              </TypingAnimation>
              <BlurFade delay={0.15} inView>
                <h1 className="uppercase text-4xl font-bold tracking-tighter md:text-5xl lg:text-9xl text-white drop-shadow-2xl">
                  Jak
                  <AuroraText colors={["#FF6D00", "#FF8F00", "#FFA726", "#FFB74D"]}>Kapet</AuroraText>
                  <Highlighter action="underline" color="#FF8F00">
                    .com
                  </Highlighter>
                </h1>
              </BlurFade>
              <BlurFade delay={0.25 * 2} inView>
                <p className="text-end mt-6 text-gray-500 text-sm tracking-wider uppercase">
                  By Jakkapet Ladnok . Web Developer
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

        {/* Bottom decorative row */}
        <div className="flex w-full">
          <div className="flex-1 h-32 border-t border-r border-dashed border-[#ffffff17] flex items-center justify-center">
            <div
              ref={(el) => {
                dotsRef.current[0] = el;
              }}
              className="flex gap-2"
            >
              <div className="w-1 h-1 rounded-full bg-[#ffffff17]" />
              <div className="w-1 h-1 rounded-full bg-[#ffffff17]" />
              <div className="w-1 h-1 rounded-full bg-[#ffffff17]" />
            </div>
          </div>
          <div className="w-64 h-32 border-t border-dashed border-[#ffffff17] flex items-start justify-center pt-4">
            <div className="w-2 h-2 rounded-full bg-orange-500/50 animate-pulse" />
          </div>
          <div className="flex-1 h-32 border-t border-l border-dashed border-[#ffffff17] flex items-center justify-center">
            <div
              ref={(el) => {
                dotsRef.current[1] = el;
              }}
              className="flex gap-2"
            >
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
        className="absolute left-8 top-1/2 -translate-y-1/2 h-64 w-px border-l border-dashed border-[#ffffff17]"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 border border-dashed border-[#ffffff17] rotate-45" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 border border-dashed border-[#ffffff17] rotate-45" />
      </div>
      <div
        ref={sideDecorRightRef}
        className="absolute right-8 top-1/2 -translate-y-1/2 h-64 w-px border-r border-dashed border-[#ffffff17]"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 border border-dashed border-[#ffffff17] rotate-45" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 border border-dashed border-[#ffffff17] rotate-45" />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent" />
    </main>
  );
}
