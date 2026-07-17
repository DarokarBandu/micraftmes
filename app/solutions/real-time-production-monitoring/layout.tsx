import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Real-Time Production Monitoring Software | Factory Monitoring System | Micraft MES",
  description: "Monitor factory production performance live with Micraft MES real-time production monitoring software designed for manufacturing companies.",
  keywords: [
    "real-time production monitoring software",
    "production monitoring software",
    "factory monitoring software",
    "real-time factory monitoring system",
    "manufacturing monitoring platform"
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
