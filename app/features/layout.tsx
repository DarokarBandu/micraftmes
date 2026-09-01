import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/features',
  },
  title: 'Manufacturing Execution System Features | Micraft MES',
  description: 'Explore Micraft MES features including production planning, shop floor tracking, quality management, machine monitoring, and dispatch management.',
  keywords: [
    'MES features',
    'manufacturing execution system capabilities',
    'shop floor management software features'
  ]
}

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
