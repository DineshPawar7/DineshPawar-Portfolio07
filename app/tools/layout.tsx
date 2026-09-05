import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Instagram Tools by Grohubz",
  description:
    "Free Instagram tools by Grohubz for creators and marketers: caption counters, size checkers, engagement calculators, QR generators and more.",
  keywords: ["Instagram tools", "Instagram calculator", "Instagram size checker", "Grohubz"],
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
