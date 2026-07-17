import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MES Implementation Process | Manufacturing Execution System Deployment | Micraft MES',
  description: 'Learn how Micraft MES is implemented in manufacturing companies to enable real-time production monitoring and shop floor visibility.',
  keywords: ['MES implementation', 'manufacturing execution system implementation', 'MES implementation process', 'factory MES deployment', 'implementing MES in manufacturing'],
}

export default function MesImplementationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
