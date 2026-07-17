import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Micraft MES | Manufacturing Execution System for Production Monitoring",
    description: "Micraft MES helps manufacturers monitor production, track machine utilization, and improve factory efficiency with real-time shop floor visibility.",
    keywords: ["Micraft MES", "Manufacturing Execution System", "Production Monitoring", "Machine Utilization", "OEE Tracking", "Smart Factory"],
};

export default function MicraftMesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
