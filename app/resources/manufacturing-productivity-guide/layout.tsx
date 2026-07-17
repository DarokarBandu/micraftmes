import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Complete Guide to Improving Manufacturing Productivity | Micraft MES",
    description: "Discover practical strategies and systems manufacturers use to improve production efficiency, optimize machine utilization, and increase factory output.",
    keywords: "manufacturing productivity improvement, improve manufacturing efficiency, manufacturing productivity strategies, factory productivity improvement, production efficiency improvement",
}

export default function ManufacturingProductivityLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
