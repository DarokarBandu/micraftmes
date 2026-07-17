import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Micraft MES | Manufacturing Execution System for Real-Time Factory Control',
  description: 'Micraft MES is a real-time manufacturing execution system that provides complete visibility across production, machines, quality, and dispatch operations.',
  keywords: [
    'Manufacturing Execution System',
    'MES Software for Manufacturing',
    'Shop Floor Management System'
  ]
}

export default function WhyMicraftLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
