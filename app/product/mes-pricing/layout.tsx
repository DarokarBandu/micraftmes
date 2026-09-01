import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/product/mes-pricing',
  },
    title: 'MES Software Pricing for Manufacturing Companies | Micraft MES',
    description: 'Discover Micraft MES pricing designed for manufacturing SMEs looking to digitize production monitoring and shop floor operations',
    keywords: ['MES software pricing', 'manufacturing execution system cost', 'MES pricing for manufacturing companies', 'manufacturing software pricing', 'production monitoring software pricing'],
}

export default function MesPricingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
