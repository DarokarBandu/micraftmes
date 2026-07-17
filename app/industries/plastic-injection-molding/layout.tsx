import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "MES & Cycle-Time Monitoring for Plastic Injection Molding",
  description: "Optimize your plastic molding shop with Micraft MES. Track machine cycle-times, cavity efficiency, shot counts, and manage mould maintenance in real-time with absolute data clarity.",
  keywords: [
    'MES for plastic molding',
    'injection molding production software',
    'cycle time monitoring system',
    'mould maintenance tracking',
    'plastic manufacturing shop floor software'
  ],
  alternates: {
    canonical: '/industries/plastic-injection-molding',
  }
};

export default function PlasticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
