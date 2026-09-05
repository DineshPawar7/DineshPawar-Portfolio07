import Link from "next/link";
import { TOOLS } from "@/data/tools";

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-5 py-12 grid gap-10 md:grid-cols-[1.2fr_2fr]">
        <div>
          <p className="font-display text-lg font-semibold mb-2">IG Toolkit</p>
          <p className="text-sm text-[var(--ink-soft)] max-w-sm">
            25 free, no-signup Instagram utilities for counting, checking
            sizes and calculating the numbers that matter. Built and kept
            free by{" "}
            <Link href="https://grohubz.com" target="_blank" rel="noopener" className="underline-signal text-[var(--ink)]">
              Grohubz
            </Link>
            , the growth platform for creators and brands.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2 text-sm">
          {TOOLS.map((t) => (
            <Link
              key={t.slug}
              href={`/tools/${t.slug}`}
              className="text-[var(--ink-soft)] hover:text-[var(--signal)] transition-colors truncate"
            >
              {t.shortTitle}
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 pb-8 flex flex-col sm:flex-row justify-between gap-2 text-xs text-[var(--ink-faint)]">
        <p>© {new Date().getFullYear()} IG Toolkit — a Grohubz project.</p>
        <Link href="https://grohubz.com" target="_blank" rel="noopener" className="underline-signal">
          grohubz.com
        </Link>
      </div>
    </footer>
  );
}
