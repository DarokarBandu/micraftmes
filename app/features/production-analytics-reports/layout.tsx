import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/features/production-analytics-reports',
  },
  title: 'Manufacturing Production Analytics & Reporting Software | Micraft MES',
  description: 'Gain real-time production analytics and performance reports using Micraft MES.',
  keywords: [
    'Production Analytics Software',
    'Manufacturing Reporting System',
    'MES analytics tools',
    'production performance reports',
    'industrial data insights'
  ]
};

export default function ProductionAnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
