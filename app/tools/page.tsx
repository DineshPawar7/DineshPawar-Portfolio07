import Link from "next/link";
import type { Metadata } from "next";
import { TOOLS, type ToolCategory } from "@/data/tools";
import GrohubzPromo from "@/components/GrohubzPromo";

export const metadata: Metadata = {
  title: "25 Free Instagram Tools — Counters, Size Checkers & Calculators",
  description:
    "Free Instagram tools for creators and brands: character counters, size checkers, aspect ratio calculators, engagement calculators, QR generators and more. No signup. Built by Grohubz.",
  alternates: { canonical: "/" },
};
 
const CATEGORIES: ToolCategory[] = [
  "Text & Captions",
  "Sizes & Dimensions",
  "Growth & Money",
  "Preview & Generate",
];

export default function Home() {
  const itemList = TOOLS.map((tool, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: tool.title,
    url: `/${tool.slug}`,
  }));

  return (
    <div>
      <section className="mx-auto max-w-6xl px-5 pt-14 pb-10 sm:pt-20 sm:pb-14">
        <p className="text-xs font-mono-data text-[var(--signal-ink)] mb-3">
          25 FREE TOOLS · NO SIGNUP · RUNS IN YOUR BROWSER
        </p>
        <h1 className="text-4xl sm:text-6xl font-semibold leading-[1.05] max-w-3xl mb-5">
          Measure, check and calculate everything Instagram before you hit post.
        </h1>
        <p className="text-lg text-[var(--ink-soft)] max-w-xl mb-8">
          Character counters, size checkers, engagement calculators and more —
          one toolkit, built and kept free by{" "}
          <Link href="https://grohubz.com" target="_blank" rel="noopener" className="underline-signal text-[var(--ink)]">
            Grohubz
          </Link>
          .
        </p>
       
      </section>

      <div className="tick-rule" />

      <section id="tools" className="mx-auto max-w-6xl px-5 py-14 flex flex-col gap-14">
        {CATEGORIES.map((cat) => {
          const items = TOOLS.filter((t) => t.category === cat);
          return (
            <div key={cat}>
              <h2 className="text-2xl font-semibold mb-5">{cat}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/tools/${tool.slug}`}
                    className="device-panel p-5 flex flex-col gap-2 hover:border-[var(--signal)] transition-colors"
                  >
                    <span className="font-medium">{tool.shortTitle}</span>
                    <span className="text-sm text-[var(--ink-soft)] line-clamp-2">{tool.description}</span>
                    <span className="text-xs font-mono-data text-[var(--signal-ink)] mt-1">Open tool →</span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <GrohubzPromo
          variant="banner"
          context="content calendars, growth playbooks and analytics for creators and brands"
        />
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                name: "IG Toolkit by Grohubz",
                description:
                  "Free Instagram tools for creators and brands, including counters, size checkers and calculators.",
                url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://grohubz.com",
                publisher: {
                  "@type": "Organization",
                  name: "Grohubz",
                  url: "https://grohubz.com",
                },
              },
              {
                "@type": "ItemList",
                name: "Free Instagram tools",
                itemListElement: itemList,
              },
            ],
          }),
        }}
      />
    </div>
  );
}
