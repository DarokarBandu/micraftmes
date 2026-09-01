import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/why-micraft/mes-vs-erp',
  },
  title: 'MES vs ERP for Manufacturing | Key Differences Explained | Micraft MES',
  description: 'Learn the difference between MES and ERP systems and how manufacturing execution systems provide real-time shop floor visibility alongside traditional ERP.',
  keywords: [
    'MES vs ERP',
    'difference between MES and ERP',
    'MES vs ERP manufacturing',
    'ERP vs MES software',
    'manufacturing execution system vs ERP'
  ]
};

export default function MesVsErpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
