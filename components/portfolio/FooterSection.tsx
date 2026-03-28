"use client";

import { useLocale } from "@/components/providers/LocaleProvider";

export default function FooterSection() {
  const { messages } = useLocale();

  return (
    <footer className="border-t border-zinc-200 px-5 py-8 sm:px-8 sm:py-10 lg:px-10 dark:border-zinc-800">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <span className="font-editorial text-balance text-[clamp(1.05rem,2.5vw,1.2rem)] font-bold italic text-zinc-950 dark:text-zinc-50">{messages.footer.name}</span>
          <span className="font-mono text-[clamp(0.58rem,1.5vw,0.66rem)] uppercase tracking-[0.16em] text-zinc-400 sm:tracking-[0.2em]">
            &copy; {new Date().getFullYear()} — {messages.footer.rights}
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:justify-end sm:gap-8">
          <a
            href="https://github.com/jakkapet2k"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[clamp(0.64rem,1.8vw,0.72rem)] uppercase tracking-[0.12em] text-zinc-400 transition-colors hover:text-zinc-950 sm:tracking-[0.15em] dark:hover:text-zinc-50"
          >
            {messages.footer.github}
          </a>
          <a
            href="https://www.linkedin.com/in/jakkapet-ladnok"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[clamp(0.64rem,1.8vw,0.72rem)] uppercase tracking-[0.12em] text-zinc-400 transition-colors hover:text-zinc-950 sm:tracking-[0.15em] dark:hover:text-zinc-50"
          >
            {messages.footer.linkedin}
          </a>
          <a
            href="mailto:jakkapet.l@jakkapet.com"
            className="font-mono text-[clamp(0.64rem,1.8vw,0.72rem)] uppercase tracking-[0.12em] text-zinc-400 transition-colors hover:text-zinc-950 sm:tracking-[0.15em] dark:hover:text-zinc-50"
          >
            {messages.footer.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
