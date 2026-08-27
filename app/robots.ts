import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://micraftsolutions.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/login',
          '/sign-up',
          '/wishlist',
          '/error',
          '/coming-soon',
          '/*-details',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/login',
          '/sign-up',
          '/wishlist',
          '/error',
          '/coming-soon',
          '/*-details',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
