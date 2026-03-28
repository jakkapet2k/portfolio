"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import gsap from "gsap";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

function GlobeIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9Zm0 0c2.02 2.22 3.15 5.12 3.2 8.12C15.15 14.13 14.02 17.02 12 19.25m0-16.25c-2.02 2.22-3.15 5.12-3.2 8.12.05 3.01 1.18 5.9 3.2 8.13m-8.05-5.38h16.1M3.95 9.25h16.1"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5m0 15V21m-7.07-2.93 1.06-1.06m12.02 0 1.06 1.06M3 12h1.5m15 0H21m-2.93-7.07-1.06 1.06M6.06 6.06 4.93 4.93M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75 9.75 9.75 0 0 1 8.25 6c0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 12c0 5.385 4.365 9.75 9.75 9.75 4.128 0 7.652-2.562 9.002-6.748Z" />
    </svg>
  );
}

export default function Navbar() {
  const { locale, messages, toggleLocale, t } = useLocale();
  const { theme, setTheme } = useTheme();
  const menuItems = messages.navbar.menu;
  const [activeSection, setActiveSection] = useState("#about");
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const brandRef = useRef<HTMLAnchorElement>(null);
  const desktopNavRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const pillRef = useRef<HTMLSpanElement>(null);
  const clickLockRef = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
  }, [menuItems]);

  useEffect(() => {
    const activeIndex = menuItems.findIndex((item) => item.href === activeSection);
    const activeLink = navLinksRef.current[activeIndex];
    const pill = pillRef.current;

    if (!activeLink || !pill) {
      return;
    }

    const parentUl = pill.parentElement;
    if (!parentUl) {
      return;
    }

    const parentRect = parentUl.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    gsap.to(pill, {
      x: linkRect.left - parentRect.left,
      width: linkRect.width,
      opacity: 1,
      duration: 0.4,
      ease: "power3.out",
    });
  }, [activeSection, menuItems]);

  const handleNavigate = (href: string) => {
    clickLockRef.current = true;
    setActiveSection(href);
    const target = document.getElementById(href.slice(1));
    target?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      clickLockRef.current = false;
    }, 900);
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-50">
      <div
        className={`flex w-full items-center justify-between gap-4 px-4 py-3 transition-all duration-500 sm:px-8 lg:px-16 ${
          scrolled
            ? "border-b border-zinc-200/90 bg-[#f9f8f5]/90 shadow-[0_4px_20px_rgba(0,0,0,0.06)] backdrop-blur-xl dark:border-zinc-800/90 dark:bg-[#141414]/90 dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
            : "border-b border-transparent bg-transparent shadow-none"
        }`}
      >
        <Link
          ref={brandRef}
          href="#about"
          className="font-editorial shrink-0 text-[clamp(1.5rem,4vw,1.9rem)] font-bold italic tracking-[-0.02em] text-zinc-950 dark:text-zinc-50"
        >
          {messages.navbar.brand}
        </Link>

        <div className="flex shrink-0 items-center gap-1 lg:hidden">
          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="inline-flex h-10 items-center justify-center px-1 text-zinc-500 transition-colors duration-300 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          )}
          <button
            type="button"
            onClick={toggleLocale}
            className="inline-flex h-10 shrink-0 items-center gap-2 px-1 font-mono text-[clamp(0.62rem,1.8vw,0.7rem)] uppercase tracking-[0.12em] text-zinc-500 transition-colors duration-300 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            aria-label={t("navbar.switchLanguage")}
            title={t("navbar.switchLanguage")}
          >
            <GlobeIcon />
            {locale.toUpperCase()}
          </button>
        </div>

        <div ref={desktopNavRef} className="hidden items-center gap-3 lg:flex">
          <nav aria-label="Primary navigation" className="p-1">
            <ul className="relative flex items-center gap-0">
              <span
                ref={pillRef}
                className="pointer-events-none absolute bottom-0 left-0 h-px bg-zinc-950 opacity-0 dark:bg-zinc-50"
                style={{ width: 0 }}
              />
              {menuItems.map((item, index) => {
                const isActive = activeSection === item.href;

                return (
                  <li key={item.href} className="relative z-10">
                    <Link
                      ref={(el) => {
                        navLinksRef.current[index] = el;
                      }}
                      href={item.href}
                      onClick={(event) => {
                        event.preventDefault();
                        handleNavigate(item.href);
                      }}
                      className={`block px-5 py-2 font-mono text-[0.68rem] font-medium uppercase tracking-[0.15em] transition-colors duration-200 ${
                        isActive ? "text-zinc-950 dark:text-zinc-50" : "text-zinc-400 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            onClick={toggleLocale}
            className="inline-flex h-10 items-center gap-2 px-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-zinc-500 transition-colors duration-300 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            aria-label={t("navbar.switchLanguage")}
            title={t("navbar.switchLanguage")}
          >
            <GlobeIcon />
            {locale.toUpperCase()}
          </button>

          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="inline-flex h-10 items-center gap-2 px-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-zinc-500 transition-colors duration-300 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
