import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://micraftsolutions.com'
  const currentDate = new Date().toISOString().split('T')[0]

  const routes: {
    url: string
    lastModified?: string
    changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
    priority?: number
  }[] = [
    // ═══════════════ 1. CORE & MAIN PAGES (11) ═══════════════
    { url: '', priority: 1.0, changeFrequency: 'daily' },
    { url: '/book-demo', priority: 0.95, changeFrequency: 'weekly' },
    { url: '/contact', priority: 0.85, changeFrequency: 'monthly' },
    { url: '/faq', priority: 0.80, changeFrequency: 'monthly' },
    { url: '/sitemap', priority: 0.75, changeFrequency: 'weekly' },
    { url: '/success-stories', priority: 0.80, changeFrequency: 'monthly' },
    { url: '/company/about', priority: 0.80, changeFrequency: 'monthly' },
    { url: '/company/leadership', priority: 0.75, changeFrequency: 'monthly' },
    { url: '/company/careers', priority: 0.75, changeFrequency: 'weekly' },
    { url: '/team', priority: 0.70, changeFrequency: 'monthly' },
    { url: '/team-carousel', priority: 0.65, changeFrequency: 'monthly' },

    // ═══════════════ 2. PRODUCT & ARCHITECTURE (7) ═══════════════
    { url: '/product', priority: 0.95, changeFrequency: 'weekly' },
    { url: '/product/micraft-mes', priority: 0.95, changeFrequency: 'weekly' },
    { url: '/product/how-micraft-mes-works', priority: 0.90, changeFrequency: 'weekly' },
    { url: '/product/mes-features', priority: 0.90, changeFrequency: 'weekly' },
    { url: '/product/mes-implementation', priority: 0.85, changeFrequency: 'monthly' },
    { url: '/product/mes-pricing', priority: 0.85, changeFrequency: 'weekly' },
    { url: '/products', priority: 0.85, changeFrequency: 'monthly' },

    // ═══════════════ 3. MANUFACTURING SOLUTIONS (11) ═══════════════
    { url: '/solutions', priority: 0.90, changeFrequency: 'weekly' },
    { url: '/solutions/production-tracking-software', priority: 0.90, changeFrequency: 'weekly' },
    { url: '/solutions/shop-floor-visibility-software', priority: 0.90, changeFrequency: 'weekly' },
    { url: '/solutions/machine-utilization-tracking', priority: 0.90, changeFrequency: 'weekly' },
    { url: '/solutions/manufacturing-process-tracking', priority: 0.90, changeFrequency: 'weekly' },
    { url: '/solutions/quality-inspection-tracking', priority: 0.90, changeFrequency: 'weekly' },
    { url: '/solutions/digital-production-dashboard', priority: 0.90, changeFrequency: 'weekly' },
    { url: '/solutions/packing-dispatch-tracking', priority: 0.90, changeFrequency: 'weekly' },
    { url: '/solutions/real-time-production-monitoring', priority: 0.90, changeFrequency: 'weekly' },
    { url: '/solutions/factory-production-monitoring-system', priority: 0.90, changeFrequency: 'weekly' },
    { url: '/solutions/manufacturing-performance-tracking', priority: 0.90, changeFrequency: 'weekly' },

    // ═══════════════ 4. MES CORE FEATURES (10) ═══════════════
    { url: '/features', priority: 0.90, changeFrequency: 'weekly' },
    { url: '/features/production-order-management', priority: 0.85, changeFrequency: 'weekly' },
    { url: '/features/production-planning-scheduling', priority: 0.85, changeFrequency: 'weekly' },
    { url: '/features/work-order-tracking', priority: 0.85, changeFrequency: 'weekly' },
    { url: '/features/shop-floor-data-collection', priority: 0.85, changeFrequency: 'weekly' },
    { url: '/features/machine-monitoring', priority: 0.85, changeFrequency: 'weekly' },
    { url: '/features/quality-inspection-management', priority: 0.85, changeFrequency: 'weekly' },
    { url: '/features/dispatch-tracking', priority: 0.85, changeFrequency: 'weekly' },
    { url: '/features/production-dashboard', priority: 0.85, changeFrequency: 'weekly' },
    { url: '/features/production-analytics-reports', priority: 0.85, changeFrequency: 'weekly' },

    // ═══════════════ 5. INDUSTRY VERTICALS (7) ═══════════════
    { url: '/industries', priority: 0.85, changeFrequency: 'monthly' },
    { url: '/industries/automotive-component-manufacturing', priority: 0.85, changeFrequency: 'monthly' },
    { url: '/industries/cnc-machining-engineering', priority: 0.85, changeFrequency: 'monthly' },
    { url: '/industries/plastic-injection-molding', priority: 0.85, changeFrequency: 'monthly' },
    { url: '/industries/fabrication-industry', priority: 0.85, changeFrequency: 'monthly' },
    { url: '/industries/electronics-manufacturing', priority: 0.85, changeFrequency: 'monthly' },
    { url: '/industries/general-manufacturing-smes', priority: 0.85, changeFrequency: 'monthly' },

    // ═══════════════ 6. WHY MICRAFT MES (5) ═══════════════
    { url: '/why-micraft', priority: 0.85, changeFrequency: 'monthly' },
    { url: '/why-micraft/micraft-vs-traditional-mes', priority: 0.85, changeFrequency: 'monthly' },
    { url: '/why-micraft/manual-vs-digital-production-tracking', priority: 0.85, changeFrequency: 'monthly' },
    { url: '/why-micraft/mes-vs-erp', priority: 0.85, changeFrequency: 'monthly' },
    { url: '/why-micraft/mes-benefits-small-manufacturers', priority: 0.85, changeFrequency: 'monthly' },

    // ═══════════════ 7. RESOURCES & GUIDES (6) ═══════════════
    { url: '/resources', priority: 0.85, changeFrequency: 'weekly' },
    { url: '/resources/what-is-mes', priority: 0.90, changeFrequency: 'monthly' },
    { url: '/resources/mes-implementation-guide', priority: 0.85, changeFrequency: 'monthly' },
    { url: '/resources/production-monitoring-guide', priority: 0.85, changeFrequency: 'monthly' },
    { url: '/resources/shop-floor-digitization-benefits', priority: 0.85, changeFrequency: 'monthly' },
    { url: '/resources/manufacturing-productivity-guide', priority: 0.85, changeFrequency: 'monthly' },

    // ═══════════════ 8. CASE STUDIES & TESTIMONIALS (7) ═══════════════
    { url: '/customers/case-studies', priority: 0.80, changeFrequency: 'monthly' },
    { url: '/customers/case-studies/automotive-traceability', priority: 0.80, changeFrequency: 'monthly' },
    { url: '/customers/case-studies/cnc-machine-downtime', priority: 0.80, changeFrequency: 'monthly' },
    { url: '/customers/case-studies/engineering-visibility', priority: 0.80, changeFrequency: 'monthly' },
    { url: '/customers/case-studies/fabrication-dispatch', priority: 0.80, changeFrequency: 'monthly' },
    { url: '/testimonials', priority: 0.75, changeFrequency: 'monthly' },
    { url: '/testimonials-carousel', priority: 0.70, changeFrequency: 'monthly' },

    // ═══════════════ 9. MES BLOG & ARTICLES (10) ═══════════════
    { url: '/mes-blog', priority: 0.85, changeFrequency: 'weekly' },
    { url: '/mes-blog/blog-list', priority: 0.80, changeFrequency: 'weekly' },
    { url: '/mes-blog/blog-list-2', priority: 0.80, changeFrequency: 'weekly' },
    { url: '/mes-blog/blog-carousel', priority: 0.75, changeFrequency: 'weekly' },
    { url: '/mes-blog/production-tracking/what-is-production-tracking-in-manufacturing', priority: 0.85, changeFrequency: 'monthly' },
    { url: '/mes-blog/shop-floor-visibility/how-to-improve-shop-floor-visibility', priority: 0.85, changeFrequency: 'monthly' },
    { url: '/mes-blog/machine-utilization/how-to-improve-machine-utilization', priority: 0.85, changeFrequency: 'monthly' },
    { url: '/mes-blog/quality-control/how-to-track-quality-inspections', priority: 0.85, changeFrequency: 'monthly' },
    { url: '/mes-blog/manufacturing-efficiency/7-ways-to-improve-manufacturing-productivity', priority: 0.85, changeFrequency: 'monthly' },
    { url: '/mes-blog/manufacturing-technology/mes-vs-erp', priority: 0.85, changeFrequency: 'monthly' },

    // ═══════════════ 10. TECHNICAL SERVICES & INFRASTRUCTURE (10) ═══════════════
    { url: '/services', priority: 0.75, changeFrequency: 'monthly' },
    { url: '/services-carousel', priority: 0.70, changeFrequency: 'monthly' },
    { url: '/cloud-managed-services', priority: 0.75, changeFrequency: 'monthly' },
    { url: '/data-protection-privacy', priority: 0.75, changeFrequency: 'monthly' },
    { url: '/endpoint-device-security', priority: 0.75, changeFrequency: 'monthly' },
    { url: '/threat-detection-prevention', priority: 0.75, changeFrequency: 'monthly' },
    { url: '/advanced-technology', priority: 0.75, changeFrequency: 'monthly' },
    { url: '/backup-recovery', priority: 0.75, changeFrequency: 'monthly' },
    { url: '/gallery', priority: 0.65, changeFrequency: 'monthly' },
    { url: '/portfolio', priority: 0.70, changeFrequency: 'monthly' },

    // ═══════════════ 11. LEGAL & POLICIES (2) ═══════════════
    { url: '/privacy-policy', priority: 0.40, changeFrequency: 'yearly' },
    { url: '/terms-of-use', priority: 0.40, changeFrequency: 'yearly' },

    // ═══════════════ 12. UTILITY, AUTH & TEMPLATE PAGES (9) ═══════════════
    { url: '/login', priority: 0.50, changeFrequency: 'monthly' },
    { url: '/sign-up', priority: 0.50, changeFrequency: 'monthly' },
    { url: '/wishlist', priority: 0.40, changeFrequency: 'monthly' },
    { url: '/error', priority: 0.30, changeFrequency: 'yearly' },
    { url: '/coming-soon', priority: 0.30, changeFrequency: 'monthly' },
    { url: '/portfolio-details', priority: 0.50, changeFrequency: 'monthly' },
    { url: '/product-details', priority: 0.50, changeFrequency: 'monthly' },
    { url: '/team-details', priority: 0.50, changeFrequency: 'monthly' },
    { url: '/mes-blog/blog-details', priority: 0.50, changeFrequency: 'monthly' },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
