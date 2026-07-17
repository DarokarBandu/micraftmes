import { Metadata } from "next"

export const metadata: Metadata = {
    title: "What is Manufacturing Execution System (MES)? Complete Guide | Micraft MES",
    description: "Learn what a Manufacturing Execution System (MES) is, how it works, and how MES software helps manufacturers monitor production and improve factory efficiency",
}

export default function WhatIsMesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
