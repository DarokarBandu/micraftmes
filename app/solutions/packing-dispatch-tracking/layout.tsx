import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Packing and Dispatch Tracking Software for Manufacturing | Micraft MES",
  description: "Track packing completion and dispatch readiness with Micraft MES manufacturing dispatch tracking software designed for production environments.",
  keywords: [
    "packing and dispatch tracking software",
    "dispatch tracking system for manufacturing",
    "packing process tracking software",
    "manufacturing dispatch management system",
    "shipment readiness tracking software"
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
