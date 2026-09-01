import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/solutions/factory-production-monitoring-system',
  },
  title: "Factory Production Monitoring System | Manufacturing Monitoring Software | Micraft MES",
  description: "Monitor factory production in real time using Micraft MES production monitoring system. Track machines, work orders, and production performance across your factory.",
  keywords: [
    "factory production monitoring system",
    "production monitoring software",
    "manufacturing monitoring system",
    "factory monitoring software",
    "production monitoring dashboard"
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
