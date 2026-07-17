import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manufacturing Dispatch Tracking System | Micraft MES',
  description: 'Track dispatch readiness and delivery status across manufacturing operations using Micraft MES.',
  keywords: [
    'Dispatch Tracking System',
    'Manufacturing dispatch management',
    'packing and dispatch tracking',
    'industrial delivery tracking',
    'MES dispatch modules'
  ]
};

export default function DispatchTrackingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
