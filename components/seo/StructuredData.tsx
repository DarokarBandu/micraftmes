import { siteConfig } from "@/lib/siteConfig";

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: 'Micraft Solutions',
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      url: siteConfig.ogImage,
      width: 190,
      height: 50,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91 93568 65559',
      contactType: 'sales & technical support',
      email: 'support@micraft.co.in',
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'Hindi'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '603, White Square, Hinjewadi-Wakad Road, Near Wakad Bridge, Phase 1, Hinjewadi',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '411057',
      addressCountry: 'IN',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      '@id': `${siteConfig.url}/#organization`,
    },
  }

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${siteConfig.url}/#software`,
    name: siteConfig.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web-based, Cloud, On-Premise',
    description: 'Practical Manufacturing Execution System for real-time shop floor visibility, downtime tracking, work order management, and production monitoring.',
    url: siteConfig.url,
    provider: {
      '@id': `${siteConfig.url}/#organization`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </>
  )
}
