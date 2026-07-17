import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Manufacturing Performance Tracking Software | Production Analytics | Micraft MES",
  description: "Analyze production performance with real-time dashboards and manufacturing analytics using Micraft MES. Monitor KPIs and improve factory efficiency.",
  keywords: [
    "manufacturing performance tracking software",
    "production analytics software",
    "manufacturing KPI dashboard",
    "factory performance analytics",
    "production reporting software"
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
