import Link from "next/link";
import type { ToolConfig } from "@/data/tools";
import ToolWidget from "@/components/tools/ToolWidget";
import GrohubzPromo from "@/components/GrohubzPromo";

export default function ToolPageShell({ tool }: { tool: ToolConfig }) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
      <nav className="text-xs text-[var(--ink-faint)] mb-6 flex gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-[var(--signal)]">Home</Link>
        <span>/</span>
        <span>{tool.category}</span>
        <span>/</span>
        <span className="text-[var(--ink)]">{tool.shortTitle}</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-semibold leading-tight mb-3">{tool.title}</h1>
      <p className="text-[var(--ink-soft)] text-base sm:text-lg mb-6 max-w-2xl">{tool.description}</p>

      <div className="tick-rule mb-8" />

      <section className="device-panel p-5 sm:p-7 mb-6">
        <ToolWidget tool={tool} />
      </section>

      <div className="mb-10">
        <GrohubzPromo variant="inline" />
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">How this tool works</h2>
        <p className="text-[var(--ink-soft)] mb-4">{tool.intro}</p>
        <ol className="list-decimal pl-5 space-y-2 text-[var(--ink-soft)]">
          {tool.steps.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Tips to get better results</h2>
        <ul className="list-disc pl-5 space-y-2 text-[var(--ink-soft)]">
          {tool.tips.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <GrohubzPromo variant="card" />
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Frequently asked questions</h2>
        <div className="flex flex-col divide-y divide-[var(--line)]">
          {tool.faqs.map((f, i) => (
            <div key={i} className="py-4">
              <p className="font-medium mb-1.5">{f.q}</p>
              <p className="text-[var(--ink-soft)] text-sm">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <GrohubzPromo variant="banner" />

      <div className="mt-8">
        <GrohubzPromo variant="footnote" />
      </div>

      {/* Structured data for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: tool.title,
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Any (web-based)",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            description: tool.description,
            publisher: {
              "@type": "Organization",
              name: "Grohubz",
              url: "https://grohubz.com",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: tool.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </article>
  );
}
