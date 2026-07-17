import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Micraft Leadership Team | Manufacturing Technology Company",
  description: "Meet the leadership team at Micraft, focused on building manufacturing technology platforms that enable real-time production monitoring.",
  keywords: ["Micraft leadership team", "manufacturing technology leadership", "MES software company leadership", "Micraft management team"],
};

export default function LeadershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
