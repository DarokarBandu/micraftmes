import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/solutions/digital-production-dashboard',
  },
  title: "Digital Production Dashboard for Manufacturing | Factory Dashboard Software | Micraft MES",
  description: "Monitor factory performance with Micraft MES digital production dashboards. Track production, machines, work orders, and inspections in real time.",
  keywords: [
    "digital production dashboard",
    "factory dashboard software",
    "manufacturing kpi dashboard",
    "real-time production monitoring",
    "MES dashboard"
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
