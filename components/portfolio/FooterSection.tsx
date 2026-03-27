export default function FooterSection() {
  return (
    <footer className="border-t border-zinc-200 bg-white px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <span className="font-editorial text-lg font-bold italic text-zinc-950">Jakkapet Ladnok</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
            &copy; {new Date().getFullYear()} — All Rights Reserved
          </span>
        </div>
        <div className="flex items-center gap-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-zinc-950"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jakkapet-ladnok"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-zinc-950"
          >
            LinkedIn
          </a>
          <a
            href="mailto:jakkapet.l@jakkapet.com"
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-zinc-950"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
