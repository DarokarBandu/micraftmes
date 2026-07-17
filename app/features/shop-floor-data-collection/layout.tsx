import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real-Time Shop Floor Tracking Software | Micraft MES',
  description: 'Track production activities across your shop floor in real time. Monitor work orders, machine status, and operator progress.',
  keywords: [
    'Shop Floor Tracking Software',
    'Real-time production tracking',
    'SFDC software',
    'manufacturing data collection',
    'operator activity tracking'
  ]
};

export default function SFDCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
