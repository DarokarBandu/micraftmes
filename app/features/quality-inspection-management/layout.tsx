import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Quality Management & Inspection Software | Micraft MES',
  description: 'Streamline quality inspection processes and ensure consistent product standards with Micraft MES.',
  keywords: [
    'Quality Inspection software',
    'Manufacturing Quality Management',
    'MES quality control',
    'defect tracking system',
    'industrial inspection software'
  ]
};

export default function QualityManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
