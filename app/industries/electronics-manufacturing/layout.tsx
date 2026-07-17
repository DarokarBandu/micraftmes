import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "MES & Traceability for Electronics Manufacturing | SMT Line Monitoring",
  description: "Optimize your PCB assembly line with Micraft MES. Track component-level traceability, AOI tester pass rates, MSD floor-life, and SMT line yield in real-time.",
  keywords: [
    'MES for Electronics Manufacturing',
    'PCB assembly tracking software',
    'SMT line monitoring system',
    'electronics components traceability',
    'SMT rework tracking hub'
  ],
  alternates: {
    canonical: '/industries/electronics-manufacturing',
  }
};

export default function ElectronicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
