import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/features/production-order-management',
  },
  title: 'Production Order Management System | Micraft MES',
  description: 'Manage production orders and manufacturing activities from creation to completion with Micraft MES.',
  keywords: [
    'Production Order Management',
    'Manufacturing order system',
    'MES order lifecycle',
    'digital production orders',
    'factory order management software'
  ]
};

export default function ProductionOrderManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
