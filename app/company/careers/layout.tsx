import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: '/company/careers',
  },
  title: "Careers at Micraft | Manufacturing Technology Company Jobs",
  description: "Explore career opportunities at Micraft and join our team building innovative manufacturing technology solutions.",
  keywords: ["careers at Micraft", "manufacturing software careers", "technology jobs in manufacturing software", "MES software company careers", "Micraft jobs"],
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
