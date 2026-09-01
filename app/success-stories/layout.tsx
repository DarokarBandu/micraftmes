import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/success-stories',
  },
  title: 'Manufacturing Success Stories | Micraft MES Results',
  description: 'Discover how manufacturers improved production visibility, reduced downtime, and increased efficiency using Micraft MES success stories.',
  keywords: [
    'manufacturing success stories',
    'MES success stories',
    'manufacturing software results',
    'production improvement results',
    'machine utilization improvement',
    'manufacturing efficiency improvements'
  ]
}

export default function SuccessStoriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
