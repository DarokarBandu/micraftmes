import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/solutions/machine-utilization-tracking',
  },
  title: "Machine Utilization Tracking Software | Machine Monitoring System | Micraft MES",
  description: "Track machine utilization, monitor equipment productivity, and reduce idle time with Micraft MES machine monitoring software for manufacturing.",
  keywords: [
    "machine utilization tracking software",
    "machine monitoring software",
    "machine productivity tracking",
    "equipment utilization monitoring",
    "factory machine monitoring system"
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
