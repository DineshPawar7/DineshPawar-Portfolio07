import type { Metadata } from "next";
import ToolPageShell from "@/components/ToolPageShell";
import { getToolBySlug } from "@/data/tools";

const SLUG = "Instagram-Engagement-Rate-Calculator";

export function generateMetadata(): Metadata {
  const tool = getToolBySlug(SLUG)!;
  return {
    title: tool.title,
    description: tool.description,
    keywords: [tool.keyword],
    alternates: { canonical: `/${SLUG}` },
    openGraph: {
      title: tool.title,
      description: tool.description,
      url: `/${SLUG}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: tool.title,
      description: tool.description,
    },
  };
}

export default function Page() {
  const tool = getToolBySlug(SLUG)!;
  return <ToolPageShell tool={tool} />;
}
