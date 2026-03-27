"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = function ContactSection() {
  const { messages } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-content > *",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          scrollTrigger: { trigger: ".contact-content", start: "top 85%" },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="border-t border-zinc-200 bg-zinc-50/50 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="contact-content flex flex-col items-center text-center">
          <span className="font-mono text-[clamp(0.64rem,1.8vw,0.72rem)] uppercase tracking-[0.22em] text-zinc-400 sm:tracking-[0.3em]">{messages.contact.chapter}</span>
          <h2 className="font-editorial text-balance mt-4 text-[clamp(2.7rem,9vw,5rem)] font-bold italic leading-[0.98] tracking-[-0.03em] text-zinc-950 sm:leading-[1.02]">
            {messages.contact.titleLine1}
            <br />
            {messages.contact.titleLine2}
          </h2>

          <div className="mx-auto my-8 h-px w-20 bg-zinc-300 sm:my-10 sm:w-24" />

          <p
            className="text-pretty max-w-2xl text-[clamp(0.98rem,2.2vw,1.1rem)] leading-[1.8] text-zinc-600 sm:leading-[1.85]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            {messages.contact.body}{" "}
            <span className="font-sans font-semibold text-zinc-950">jakkapet.l@jakkapet.com</span> {messages.contact.callLabel}{" "}
            <span className="font-sans font-semibold text-zinc-950">+66(0)99-167-3399</span>.
          </p>

          <div className="mt-10 flex w-full flex-col items-center gap-3 sm:mt-12 sm:w-auto sm:flex-row sm:gap-4">
            <a
              href="mailto:jakkapet.l@jakkapet.com"
              className="group flex h-11 w-full items-center justify-center gap-2.5 border border-zinc-950 bg-zinc-950 px-6 text-[clamp(0.72rem,1.9vw,0.82rem)] font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-white hover:text-zinc-950 sm:h-12 sm:w-auto sm:px-8 sm:tracking-[0.12em]"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              {messages.contact.emailCta}
            </a>
            <a
              href="https://github.com/jakkapet2k"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-full items-center justify-center gap-2.5 border border-zinc-200 bg-white px-6 text-[clamp(0.72rem,1.9vw,0.82rem)] font-semibold uppercase tracking-[0.1em] text-zinc-950 transition-all duration-300 hover:border-zinc-950 sm:h-12 sm:w-auto sm:px-8 sm:tracking-[0.12em]"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              {messages.contact.githubCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
