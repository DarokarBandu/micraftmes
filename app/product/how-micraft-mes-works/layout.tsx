import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/product/how-micraft-mes-works',
  },
  title: 'How Manufacturing Execution System Works | Micraft MES',
  description: 'Learn how Micraft MES works to track production, monitor machines, record inspections, and provide real-time factory visibility',
}

export default function HowMicraftMesWorksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
