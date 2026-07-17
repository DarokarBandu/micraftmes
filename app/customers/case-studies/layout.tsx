import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Manufacturing Case Studies | Micraft MES Success Stories',
  description: 'Explore real manufacturing case studies using Micraft MES. See how factories improved production visibility, reduced downtime, and achieved operational efficiency.',
  keywords: [
    'Manufacturing case studies',
    'MES case studies',
    'Manufacturing execution system examples',
    'production visibility case study',
    'machine monitoring case study',
    'manufacturing automation success stories'
  ]
}

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
