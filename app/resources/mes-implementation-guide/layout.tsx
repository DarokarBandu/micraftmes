import { Metadata } from "next"

export const metadata: Metadata = {
    title: "MES Implementation Guide | Practical Deployments for Small Factories",
    description: "Learn how to implement a Manufacturing Execution System (MES) in your factory in 30-60 days. A practical guide to MES deployment for small and mid-sized manufacturers.",
    keywords: "MES implementation, MES deployment, small factory MES, practical MES, manufacturing execution system guide, MES strategy",
}

export default function MESImplementationLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
