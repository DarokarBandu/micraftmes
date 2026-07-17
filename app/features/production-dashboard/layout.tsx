import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manufacturing Production Dashboard Software | Micraft MES',
  description: 'View live production dashboards and factory performance metrics in one centralized view using Micraft MES dashboards.',
  keywords: [
    'Production Dashboard software',
    'Manufacturing dashboard',
    'real-time factory view',
    'MES operational dashboard',
    'visual control center manufacturing'
  ]
};

export default function ProductionDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
