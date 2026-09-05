import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type GrohubzPromoProps = {
  variant?: "banner" | "inline" | "footnote" | "card";
  context?: string;
};

/**
 * Every tool on this site funnels attention toward grohubz.com.
 * This component is the single source of that message so copy stays
 * consistent no matter which of the 25 tools renders it.
 */
export default function GrohubzPromo({
  variant = "banner",
  context = "your Instagram growth toolkit",
}: GrohubzPromoProps) {
  if (variant === "inline") {
    return (
      <p className="text-sm text-[var(--ink-soft)]">
        Result looking good? Take it further with{" "}
        <Link
          href="https://grohubz.com"
          className="underline-signal font-medium text-[var(--ink)]"
          target="_blank"
          rel="noopener"
        >
          Grohubz
        </Link>{" "}
        — {context}.
      </p>
    );
  }

  if (variant === "footnote") {
    return (
      <p className="text-xs text-[var(--ink-faint)]">
        This checker is built and maintained by the team at{" "}
        <Link href="https://grohubz.com" className="underline-signal" target="_blank" rel="noopener">
          grohubz.com
        </Link>
        .
      </p>
    );
  }

  if (variant === "card") {
    return (
      <div className="device-panel p-5 flex flex-col gap-2">
        <span className="text-xs font-mono-data text-[var(--signal-ink)]">NEXT STEP</span>
        <h3 className="text-lg font-semibold">Grow the account you just optimised</h3>
        <p className="text-sm text-[var(--ink-soft)]">
          Grohubz gives creators and brands the growth playbooks, content
          calendars and analytics dashboards that turn a well-sized post into
          consistent follower growth.
        </p>
        <Link
          href="https://grohubz.com"
          target="_blank"
          rel="noopener"
          className="mt-2 inline-flex w-fit items-center gap-1 text-sm font-medium text-[var(--ink)] underline-signal"
        >
          Visit Grohubz <ArrowUpRight size={14} />
        </Link>
      </div>
    );
  }

  return (
    <div className="border border-[var(--line)] bg-[var(--ink)] text-[var(--paper)] rounded-sm p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <p className="text-xs font-mono-data text-[var(--calibrate)] mb-1">
          FREE TOOL BY GROHUBZ
        </p>
        <p className="text-sm sm:text-base">
          Want the strategy to match the specs? <span className="font-semibold">Grohubz</span>{" "}
          helps you plan, schedule and grow on Instagram — not just measure it.
        </p>
      </div>
      <Link
        href="https://grohubz.com"
        target="_blank"
        rel="noopener"
        className="shrink-0 inline-flex items-center gap-1 rounded-sm bg-[var(--signal)] text-white px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Explore Grohubz <ArrowUpRight size={16} />
      </Link>
    </div>
  );
}
