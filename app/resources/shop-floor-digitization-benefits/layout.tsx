import { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: '/resources/shop-floor-digitization-benefits',
  },
    title: "Shop Floor Digitization Guide | Benefits & Implementation Strategy",
    description: "The complete guide to shop floor digitization. Learn how to gain real-time visibility, optimize machine utilization, and improve manufacturing efficiency with digital monitoring.",
    keywords: "shop floor digitization, digital manufacturing, factory visibility, machine utilization tracking, production monitoring, digital shop floor",
}

export default function ShopFloorDigitizationLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
