import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Manufacturing Process Tracking Software | Production Workflow Monitoring | Micraft MES",
  description: "Track every stage of your manufacturing workflow with Micraft MES process tracking software. Monitor production stages, inspections, and dispatch in real time.",
  keywords: [
    "manufacturing process tracking software",
    "production process tracking",
    "manufacturing process monitoring",
    "factory process tracking system",
    "production workflow tracking software"
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
