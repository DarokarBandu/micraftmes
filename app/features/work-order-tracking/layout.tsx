import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work Order Tracking Software | Micraft MES',
  description: 'Track work order progress and operational statuses across your factory floor in real-time with Micraft MES.',
  keywords: [
    'Work Order Tracking System',
    'Manufacturing order tracking',
    'real-time job status software',
    'MES work order control',
    'industrial progress monitoring'
  ]
};

export default function WorkOrderTrackingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
