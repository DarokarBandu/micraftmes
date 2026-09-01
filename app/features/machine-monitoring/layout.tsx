import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/features/machine-monitoring',
  },
  title: 'Real-Time Machine Monitoring & OEE Software | Micraft MES',
  description: 'Monitor machine activity, evaluate OEE, and reduce production downtime with Micraft MES machine monitoring.',
  keywords: [
    'Machine Monitoring Software',
    'OEE Monitoring System',
    'Manufacturing Equipment Monitoring',
    'machine utilization tracking',
    'factory equipment monitoring',
    'OEE analysis software'
  ]
};

export default function MachineMonitoringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
