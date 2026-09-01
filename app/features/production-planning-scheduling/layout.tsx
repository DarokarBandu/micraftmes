import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/features/production-planning-scheduling',
  },
  title: 'Production Planning & Scheduling Software | Micraft MES',
  description: 'Plan production efficiently and allocate machine capacity with Micraft MES.',
  keywords: [
    'Production Planning Software',
    'Manufacturing Scheduling System',
    'MES planning module',
    'capacity planning software',
    'shop floor scheduling tools'
  ]
};

export default function ProductionPlanningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
