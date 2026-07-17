import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MES Software for Manufacturing SMEs | Production Monitoring System | Micraft MES',
  description: 'Micraft MES helps manufacturing SMEs track production, monitor shop floor operations, and improve factory efficiency with real-time manufacturing visibility.',
  keywords: [
    'MES for manufacturing SMEs',
    'manufacturing execution system for small manufacturers',
    'production tracking software for manufacturing companies',
    'shop floor monitoring system for factories',
    'manufacturing production monitoring software'
  ],
  alternates: {
    canonical: '/industries/general-manufacturing-smes',
  }
};

export default function SmeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
