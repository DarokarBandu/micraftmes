import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MES for Automotive Component Manufacturing | Production Monitoring Software | Micraft MES',
  description: 'Micraft MES helps automotive component manufacturers monitor production, track machining operations, manage inspections, and improve delivery performance.',
  keywords: [
    'MES for automotive component manufacturing',
    'manufacturing software for automotive components',
    'MES for auto parts manufacturing',
    'automotive manufacturing production tracking software',
    'automotive factory monitoring system'
  ],
  alternates: {
    canonical: '/industries/automotive-component-manufacturing',
  }
};

export default function AutomotiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
