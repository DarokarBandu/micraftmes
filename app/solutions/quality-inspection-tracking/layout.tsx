import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Quality Inspection Tracking Software for Manufacturing | Micraft MES",
  description: "Track manufacturing quality inspections, monitor rejection trends, and maintain inspection records using Micraft MES quality inspection tracking software.",
  keywords: [
    "quality inspection tracking software",
    "manufacturing quality inspection software",
    "quality control tracking system",
    "production quality monitoring software",
    "factory quality inspection system"
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
