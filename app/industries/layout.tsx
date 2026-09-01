import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/industries',
  },
  title: "Vertical Manufacturing Solutions | Micraft MES Industries",
  description: "Explore specialized MES solutions for Automotive, CNC, Electronics, Plastic Molding, and Metal Fabrication. Purpose-built digital tracking for diverse industrial sectors.",
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
