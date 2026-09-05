import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b border-[var(--line)] bg-[var(--paper)]/95 backdrop-blur sticky top-0 z-30">
      <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl font-semibold tracking-tight">
            IG Toolkit
          </span>
          <span className="hidden sm:inline text-xs font-mono-data text-[var(--ink-faint)]">
            25 free instagram tools
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link href="/tools" className="hover:text-[var(--signal)] transition-colors">
            All tools
          </Link>
          <Link
            href="https://grohubz.com"
            target="_blank"
            rel="noopener"
            className="rounded-sm bg-[var(--ink)] text-[var(--paper)] px-3 py-1.5 hover:bg-[var(--signal)] transition-colors"
          >
            Grohubz.com
          </Link>
        </nav>
      </div>
      <div className="tick-rule" />
    </header>
  );
}
