import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/solutions/production-tracking-software',
  },
  title: "Production Tracking Software for Manufacturing | Micraft MES",
  description: "Track manufacturing production in real time with Micraft MES Production Tracking Software. Monitor work orders, production progress, inspections, and dispatch from one platform.",
  keywords: [
    "production tracking software",
    "manufacturing production tracking software",
    "factory production tracking system",
    "production monitoring software",
    "shop floor production tracking"
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
