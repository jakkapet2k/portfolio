"use client";

import { useEffect, useRef } from "react";

export default function AnimatedLogo() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const kapetRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    const text = el.querySelector("text");
    if (!text) return;
    if ((text as any).__gsapInited) return;
    (text as any).__gsapInited = true;

    const run = () => {
      const length = (text as SVGTextContentElement).getComputedTextLength();
      text.setAttribute("stroke", "#fd9a00");
      text.setAttribute("fill", "transparent");
      text.setAttribute("stroke-width", "1.2");
      text.setAttribute("stroke-linecap", "round");
      text.setAttribute("stroke-linejoin", "round");
      text.setAttribute("stroke-miterlimit", "4");
      text.setAttribute("vector-effect", "non-scaling-stroke");

      const dash = Math.max(Math.floor(length * 1.5), 2000);
      text.setAttribute("stroke-dasharray", String(dash));
      text.setAttribute("stroke-dashoffset", String(dash));

      try {
        el.setAttribute("viewBox", `0 0 ${Math.ceil(length)} 140`);
        el.setAttribute("width", String(Math.ceil(length)));
      } catch (e) {
        // ignore
      }

      import("gsap").then((m) => {
        const gsap = (m as any).gsap || (m as any).default;
        const kapetEl = kapetRef.current;
        const tl = gsap.timeline();
        tl.to(text, { attr: { "stroke-dashoffset": 0 }, duration: 20, ease: "power1.out" });
        if (kapetEl) {
          tl.fromTo(kapetEl, { x: -80, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power2.out" }, "-=18");
        }
      });
    };

    if (typeof document !== "undefined" && (document as any).fonts && (document as any).fonts.ready) {
      (document as any).fonts.ready.then(run).catch(run);
    } else {
      run();
    }
  }, []);

  return (
    <div className="flex items-end uppercase gap-1">
      <svg
        ref={svgRef}
        width="260"
        height="140"
        viewBox="0 0 260 140"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        <text
          x="0"
          y="120"
          fontSize="130"
          fontWeight="700"
          fontFamily="Geist, system-ui, sans-serif"
          className="filter drop-shadow-md"
        >
          Jak
        </text>
      </svg>
      <h1
        ref={kapetRef}
        className="text-9xl font-bold bg-linear-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent drop-shadow-lg"
      >
        kapet
      </h1>
    </div>
  );
}
