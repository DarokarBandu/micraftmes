import { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: '/resources/production-monitoring-guide',
  },
    title: "Factory Production Monitoring | Complete Guide to Real-Time Monitoring",
    description: "Learn how modern production monitoring systems help manufacturers track factory operations, improve machine utilization, and gain real-time visibility of manufacturing performance.",
    keywords: "factory production monitoring, production monitoring system, manufacturing monitoring software, factory monitoring system, real-time production monitoring, manufacturing performance monitoring",
}

export default function FactoryProductionMonitoringLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
