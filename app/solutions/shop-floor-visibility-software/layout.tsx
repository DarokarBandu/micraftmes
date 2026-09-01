import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/solutions/shop-floor-visibility-software',
  },
  title: "Shop Floor Visibility Software for Manufacturing | Micraft MES",
  description: "Improve factory productivity with Micraft MES Shop Floor Visibility Software. Track production, monitor operations in real time, detect bottlenecks, and optimize manufacturing performance.",
  keywords: [
    "shop floor visibility software",
    "factory floor monitoring system",
    "production visibility software",
    "manufacturing shop floor monitoring",
    "MES shop floor visibility"
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
