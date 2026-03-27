"use client";

import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const menuItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#about");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const brandRef = useRef<HTMLAnchorElement>(null);
  const desktopNavRef = useRef<HTMLDivElement>(null);
  const mobilePanelRef = useRef<HTMLElement>(null);
  const mobileItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const navLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const pillRef = useRef<HTMLSpanElement>(null);
  const clickLockRef = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(brandRef.current, { opacity: 0, y: -14 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" });
      gsap.fromTo(
        desktopNavRef.current,
        { opacity: 0, y: -14 },
        { opacity: 1, y: 0, duration: 0.65, delay: 0.1, ease: "power3.out" },
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      for (let index = menuItems.length - 1; index >= 0; index -= 1) {
        const id = menuItems[index].href.slice(1);
        const section = document.getElementById(id);

        if (!section) {
          continue;
        }

        const rect = section.getBoundingClientRect();
        if (rect.top <= 140) {
          if (!clickLockRef.current) {
            setActiveSection(menuItems[index].href);
          }
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const panel = mobilePanelRef.current;
    if (!panel) {
      return () => {
        document.body.style.overflow = "";
      };
    }

    if (menuOpen) {
      panel.style.visibility = "visible";
      panel.style.pointerEvents = "auto";
      gsap.fromTo(
        panel,
        { xPercent: 100, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 0.35, ease: "power3.out" },
      );

      gsap.fromTo(
        mobileItemsRef.current.filter(Boolean),
        { opacity: 0, x: 18 },
        { opacity: 1, x: 0, duration: 0.35, stagger: 0.05, delay: 0.08, ease: "power2.out" },
      );
    } else {
      gsap.to(panel, {
        xPercent: 100,
        opacity: 0,
        duration: 0.25,
        ease: "power3.in",
        onComplete: () => {
          panel.style.visibility = "hidden";
          panel.style.pointerEvents = "none";
        },
      });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Animate active pill indicator
  useEffect(() => {
    const activeIndex = menuItems.findIndex((item) => item.href === activeSection);
    const activeLink = navLinksRef.current[activeIndex];
    const pill = pillRef.current;

    if (!activeLink || !pill) return;

    const parentUl = pill.parentElement;
    if (!parentUl) return;

    const parentRect = parentUl.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    gsap.to(pill, {
      x: linkRect.left - parentRect.left,
      width: linkRect.width,
      opacity: 1,
      duration: 0.4,
      ease: "power3.out",
    });
  }, [activeSection]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50">
      <div
        className={`flex w-full items-center justify-between px-6 py-3 transition-all duration-500 sm:px-10 lg:px-16 ${
          scrolled
            ? "border-b border-zinc-200/90 bg-white/88 shadow-[0_4px_20px_rgba(0,0,0,0.06)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent shadow-none"
        }`}
      >
        <Link
          ref={brandRef}
          href="#about"
          className="font-editorial text-2xl font-bold italic tracking-[-0.02em] text-zinc-950 sm:text-3xl"
        >
          Jakkapet /.
        </Link>

        <div ref={desktopNavRef} className="hidden lg:block">
          <nav aria-label="Primary navigation" className="p-1">
            <ul className="relative flex items-center gap-0">
              {/* Sliding underline indicator */}
              <span
                ref={pillRef}
                className="pointer-events-none absolute bottom-0 left-0 h-px bg-zinc-950 opacity-0"
                style={{ width: 0 }}
              />
              {menuItems.map((item, i) => {
                const isActive = activeSection === item.href;

                return (
                  <li key={item.href} className="relative z-10">
                    <Link
                      ref={(el) => {
                        navLinksRef.current[i] = el;
                      }}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        clickLockRef.current = true;
                        setActiveSection(item.href);
                        const target = document.getElementById(item.href.slice(1));
                        target?.scrollIntoView({ behavior: "smooth" });
                        setTimeout(() => {
                          clickLockRef.current = false;
                        }, 900);
                      }}
                      className={`block px-5 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.15em] transition-colors duration-200 ${
                        isActive ? "text-zinc-950" : "text-zinc-400 hover:text-zinc-950"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className={`relative flex h-11 w-11 items-center justify-center rounded-full text-zinc-950 transition-all duration-500 lg:hidden ${
            scrolled
              ? "border border-zinc-200 bg-white hover:bg-zinc-50"
              : "border border-transparent bg-transparent hover:bg-zinc-100"
          }`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Toggle menu</span>
          <span
            className={`absolute h-0.5 w-4 bg-current transition-transform duration-300 ${menuOpen ? "rotate-45" : "-translate-y-1.5"}`}
          />
          <span
            className={`absolute h-0.5 w-4 bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`absolute h-0.5 w-4 bg-current transition-transform duration-300 ${menuOpen ? "-rotate-45" : "translate-y-1.5"}`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <nav
        ref={mobilePanelRef}
        className="fixed right-4 top-4 z-50 h-[calc(100vh-2rem)] w-[min(20rem,calc(100vw-2rem))] rounded-4xl border border-zinc-200 bg-white p-5 shadow-[0_24px_80px_rgba(0,0,0,0.16)] lg:hidden"
        style={{ visibility: "hidden", pointerEvents: "none" }}
        aria-label="Mobile navigation"
      >
        <div className="mb-10 flex items-center justify-between border-b border-zinc-100 pb-4">
          <span className="font-editorial text-lg font-bold italic text-zinc-950">Navigation</span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-700"
            aria-label="Close menu"
          >
            <span className="absolute h-0.5 w-4 rotate-45 bg-current" />
            <span className="absolute h-0.5 w-4 -rotate-45 bg-current" />
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {menuItems.map((item, index) => {
            const isActive = activeSection === item.href;

            return (
              <Link
                key={item.href}
                ref={(element) => {
                  mobileItemsRef.current[index] = element;
                }}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  clickLockRef.current = true;
                  setActiveSection(item.href);
                  const target = document.getElementById(item.href.slice(1));
                  target?.scrollIntoView({ behavior: "smooth" });
                  setTimeout(() => {
                    clickLockRef.current = false;
                  }, 900);
                }}
                className={`flex items-center justify-between rounded-2xl px-4 py-3.5 transition-all duration-200 ${
                  isActive ? "bg-zinc-950 text-white" : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950"
                }`}
              >
                <span className="font-mono text-[13px] font-medium uppercase tracking-[0.08em]">{item.label}</span>
                <span className={`font-mono text-[11px] ${isActive ? "text-zinc-300" : "text-zinc-400"}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
