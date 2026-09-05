import { mkdirSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.join(__dirname, "..", "app");

const SLUGS = [
  "Instagram-Caption-Character-Counter",
  "Instagram-Bio-Character-Counter",
  "Instagram-Hashtag-Counter",
  "Instagram-Invisible-Character-Generator",
  "Instagram-Line-Break-Generator",
  "Instagram-Reel-Size-Checker",
  "Instagram-Reel-Safe-Zone-Checker",
  "Instagram-Reel-Cover-Size-Checker",
  "Instagram-Story-Size-Checker",
  "Instagram-Post-Size-Checker",
  "Instagram-Carousel-Size-Checker",
  "Instagram-Image-Aspect-Ratio-Calculator",
  "Instagram-Crop-Calculator",
  "Instagram-Image-Compressor",
  "Instagram-Engagement-Rate-Calculator",
  "Instagram-Reel-Engagement-Calculator",
  "Instagram-Follower-Growth-Calculator",
  "Instagram-Posting-Frequency-Calculator",
  "Instagram-Influencer-Rate-Calculator",
  "Instagram-Sponsored-Post-Calculator",
  "Instagram-Media-Kit-Generator",
  "Instagram-Bio-Previewer",
  "Instagram-Carousel-Previewer",
  "Instagram-Profile-QR-Code-Generator",
  "Instagram-Reel-QR-Code-Generator",
];

const template = (slug) => `import type { Metadata } from "next";
import ToolPageShell from "@/components/ToolPageShell";
import { getToolBySlug } from "@/data/tools";

const SLUG = "${slug}";

export function generateMetadata(): Metadata {
  const tool = getToolBySlug(SLUG)!;
  return {
    title: tool.title,
    description: tool.description,
    keywords: [tool.keyword],
    alternates: { canonical: \`/\${SLUG}\` },
    openGraph: {
      title: tool.title,
      description: tool.description,
      url: \`/\${SLUG}\`,
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
`;

for (const slug of SLUGS) {
  const dir = path.join(appDir, slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(path.join(dir, "page.tsx"), template(slug), "utf8");
  console.log("created", path.join(slug, "page.tsx"));
}

console.log(`\nDone. Generated ${SLUGS.length} tool pages.`);
