import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "MES for CNC Machining & Precision Engineering | Spindle Monitoring Software",
  description: "Optimize your CNC machine shop with Micraft MES. Track machine uptime, spindle OEE, tool life, and digitize precision engineering shop floor logs in real-time.",
  keywords: [
    'MES for CNC Machining',
    'CNC machine monitoring software',
    'precision engineering production tracking',
    'spindle utilization analytics',
    'CNC tool life tracking system'
  ],
  alternates: {
    canonical: '/industries/cnc-machining-engineering',
  }
};

export default function CncLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
