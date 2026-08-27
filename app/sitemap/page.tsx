"use client"
import React, { useState } from "react"
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Breadcrumb from "@/components/layout/Breadcrumb"
import FinalCTA from "@/components/sections/home1/FinalCTA"

interface SitemapItem {
    title: string
    url: string
    desc: string
    badge?: string
}

interface SitemapCategory {
    category: string
    icon: string
    description: string
    links: SitemapItem[]
}

const sitemapData: SitemapCategory[] = [
    {
        category: "Core & Company Pages",
        icon: "fas fa-home",
        description: "Main website entry points, demo scheduling, company profile, and team leadership.",
        links: [
            { title: "Home Page", url: "/", desc: "Main portal for Micraft MES manufacturing execution platform." },
            { title: "Book a Live Demo", url: "/book-demo", desc: "Schedule a personalized 1-on-1 walkthrough with MES specialists.", badge: "Schedule" },
            { title: "Contact Us", url: "/contact", desc: "Reach out to sales, technical support, and regional office locations." },
            { title: "Frequently Asked Questions", url: "/faq", desc: "Common questions regarding deployment, integrations, and pricing." },
            { title: "Website Sitemap", url: "/sitemap", desc: "Complete directory and navigation index of all website pages." },
            { title: "Success Stories", url: "/success-stories", desc: "Overview of customer success milestones and business impact." },
            { title: "About Micraft Solutions", url: "/company/about", desc: "Our mission to bring digital excellence to manufacturing plants worldwide." },
            { title: "Leadership Team", url: "/company/leadership", desc: "Meet the engineering and industry veterans behind Micraft MES." },
            { title: "Careers at Micraft", url: "/company/careers", desc: "Join our fast-growing smart manufacturing software engineering team.", badge: "Hiring" },
            { title: "Our Team", url: "/team", desc: "Overview of our software development and implementation teams." },
            { title: "Team Showcase Carousel", url: "/team-carousel", desc: "Visual gallery of the Micraft engineering & support talent." }
        ]
    },
    {
        category: "Product & Architecture",
        icon: "fas fa-layer-group",
        description: "Core MES platform capabilities, operational workflows, and system architecture.",
        links: [
            { title: "Product Overview", url: "/product", desc: "High-level overview of the entire Micraft MES manufacturing suite." },
            { title: "Micraft MES Core System", url: "/product/micraft-mes", desc: "Complete modular Manufacturing Execution System for smart factories.", badge: "Flagship" },
            { title: "How Micraft MES Works", url: "/product/how-micraft-mes-works", desc: "Step-by-step end-to-end shop floor workflow and data flow architecture." },
            { title: "Platform Features Overview", url: "/product/mes-features", desc: "Interactive showcase of all modular software capabilities." },
            { title: "MES Implementation Roadmap", url: "/product/mes-implementation", desc: "Structured 5-step rapid deployment strategy for manufacturing plants." },
            { title: "Pricing & Packages", url: "/product/mes-pricing", desc: "Transparent subscription plans tailored to shop floor scale." },
            { title: "Products Directory", url: "/products", desc: "Complete catalog of Micraft industrial hardware & software solutions." }
        ]
    },
    {
        category: "Manufacturing Solutions",
        icon: "fas fa-industry",
        description: "Targeted operational solutions designed to solve critical manufacturing challenges.",
        links: [
            { title: "Solutions Hub", url: "/solutions", desc: "Overview of all industry-grade manufacturing automation solutions." },
            { title: "Production Tracking Software", url: "/solutions/production-tracking-software", desc: "Real-time visibility into work orders, operations, and floor output.", badge: "Popular" },
            { title: "Shop Floor Visibility Software", url: "/solutions/shop-floor-visibility-software", desc: "Centralized live monitoring of active production across all lines." },
            { title: "Machine Utilization Tracking", url: "/solutions/machine-utilization-tracking", desc: "Automated OEE capture, uptime tracking, and downtime analysis." },
            { title: "Manufacturing Process Tracking", url: "/solutions/manufacturing-process-tracking", desc: "Eliminate process blind spots and streamline multi-stage fabrication." },
            { title: "Quality Inspection Tracking", url: "/solutions/quality-inspection-tracking", desc: "Digitize first-piece, in-process, and final QA inspection logs." },
            { title: "Digital Production Dashboard", url: "/solutions/digital-production-dashboard", desc: "Real-time visual TV dashboards for production managers." },
            { title: "Packing & Dispatch Tracking", url: "/solutions/packing-dispatch-tracking", desc: "Synchronize packaging lines with dispatch readiness and logistics." },
            { title: "Real-Time Production Monitoring", url: "/solutions/real-time-production-monitoring", desc: "Live operational telematics and continuous bottleneck detection." },
            { title: "Factory Production Monitoring System", url: "/solutions/factory-production-monitoring-system", desc: "Connected factory floor visibility across multiple plants." },
            { title: "Manufacturing Performance Tracking", url: "/solutions/manufacturing-performance-tracking", desc: "Granular KPI benchmarks, shift outputs, and efficiency analytics." }
        ]
    },
    {
        category: "MES Core Features",
        icon: "fas fa-cogs",
        description: "Deep dive into specific functional modules and floor control capabilities.",
        links: [
            { title: "Features Overview", url: "/features", desc: "Index of all 10 core modular functional components." },
            { title: "Production Order Management", url: "/features/production-order-management", desc: "Digitize bill of materials, routings, and order dispatching." },
            { title: "Production Planning & Scheduling", url: "/features/production-planning-scheduling", desc: "Dynamic shift planning and capacity balancing." },
            { title: "Work Order Tracking", url: "/features/work-order-tracking", desc: "Barcode/QR powered job card progression across machining stages." },
            { title: "Shop Floor Data Collection", url: "/features/shop-floor-data-collection", desc: "Paperless touchscreen kiosk terminals for machine operators." },
            { title: "Machine Monitoring", url: "/features/machine-monitoring", desc: "IoT sensor telemetry and automated cycle counting." },
            { title: "Quality Inspection Management", url: "/features/quality-inspection-management", desc: "Non-conformance root cause tracking and defect analytics." },
            { title: "Dispatch Tracking", url: "/features/dispatch-tracking", desc: "Outbound shipment verification and invoice sync." },
            { title: "Production Dashboard", url: "/features/production-dashboard", desc: "High-resolution executive and supervisor control center views." },
            { title: "Production Analytics & Reports", url: "/features/production-analytics-reports", desc: "Automated daily production reports and executive analytics." }
        ]
    },
    {
        category: "Industry Verticals",
        icon: "fas fa-building",
        description: "Specialized MES configurations optimized for specific manufacturing sectors.",
        links: [
            { title: "Industries Directory", url: "/industries", desc: "Overview of industry-tailored manufacturing architectures." },
            { title: "Automotive Component Manufacturing", url: "/industries/automotive-component-manufacturing", desc: "Strict lot traceability, IATF 16949 compliance, and scrap tracking.", badge: "Automotive" },
            { title: "CNC Machining & Precision Engineering", url: "/industries/cnc-machining-engineering", desc: "Spindle uptime, tool life monitoring, and precision cycle time tracking." },
            { title: "Plastic Injection Molding", url: "/industries/plastic-injection-molding", desc: "Mold shot counter tracking, cycle efficiency, and resin yield." },
            { title: "Sheet Metal & Fabrication Industry", url: "/industries/fabrication-industry", desc: "Laser cutting, bending, welding, and assembly progress tracking." },
            { title: "Electronics Manufacturing (EMS)", url: "/industries/electronics-manufacturing", desc: "SMT line tracking, PCB serial traceability, and test yields." },
            { title: "General Manufacturing SMEs", url: "/industries/general-manufacturing-smes", desc: "Cost-effective, rapid-deploy MES for growing SME factories." }
        ]
    },
    {
        category: "Why Micraft MES",
        icon: "fas fa-balance-scale",
        description: "Comparative insights, business cases, and strategic advantages.",
        links: [
            { title: "Why Choose Micraft MES", url: "/why-micraft", desc: "Strategic advantages of adopting a modern, agile MES architecture." },
            { title: "Micraft MES vs Traditional MES", url: "/why-micraft/micraft-vs-traditional-mes", desc: "Compare modern agile SaaS MES against legacy heavy enterprise systems." },
            { title: "Manual vs Digital Production Tracking", url: "/why-micraft/manual-vs-digital-production-tracking", desc: "Cost and efficiency comparison between paper logsheets and digital MES." },
            { title: "MES vs ERP in Manufacturing", url: "/why-micraft/mes-vs-erp", desc: "Understand why ERP alone is not sufficient for real-time shop floor control." },
            { title: "MES Benefits for Small Manufacturers", url: "/why-micraft/mes-benefits-small-manufacturers", desc: "How SMEs achieve ROI within 90 days with lightweight MES." }
        ]
    },
    {
        category: "Resources & Knowledge Hub",
        icon: "fas fa-book-open",
        description: "Authoritative implementation guides, best practice blueprints, and whitepapers.",
        links: [
            { title: "Resources Hub", url: "/resources", desc: "Central repository of educational resources and operational guides." },
            { title: "What is MES? Complete Guide", url: "/resources/what-is-mes", desc: "The definitive guide to Manufacturing Execution Systems.", badge: "Guide" },
            { title: "MES Implementation Step-by-Step Guide", url: "/resources/mes-implementation-guide", desc: "Pragmatic guide on planning, testing, and scaling MES on the floor." },
            { title: "Production Monitoring Blueprint", url: "/resources/production-monitoring-guide", desc: "Best practices for setting up live monitoring across disparate machinery." },
            { title: "Shop Floor Digitization Benefits", url: "/resources/shop-floor-digitization-benefits", desc: "10 proven business impacts of paperless factory floors." },
            { title: "Manufacturing Productivity Strategies", url: "/resources/manufacturing-productivity-guide", desc: "Frameworks to minimize unrecorded micro-stoppages and increase OEE." }
        ]
    },
    {
        category: "Case Studies & Customer Stories",
        icon: "fas fa-trophy",
        description: "Real-world manufacturing success stories and ROI breakthroughs.",
        links: [
            { title: "Case Studies Overview", url: "/customers/case-studies", desc: "Detailed case studies from automotive, CNC, and fabrication leaders." },
            { title: "Automotive Traceability Case Study", url: "/customers/case-studies/automotive-traceability", desc: "How a Tier-1 auto supplier eliminated dispatch errors and defect escapes." },
            { title: "CNC Machine Downtime Reduction Study", url: "/customers/case-studies/cnc-machine-downtime", desc: "24% improvement in spindle utilization within 60 days." },
            { title: "Engineering Visibility Case Study", url: "/customers/case-studies/engineering-visibility", desc: "Eliminating production status meetings with real-time dashboards." },
            { title: "Fabrication Dispatch Sync Study", url: "/customers/case-studies/fabrication-dispatch", desc: "Synchronizing heavy welding progress with customer shipping dates." },
            { title: "Customer Testimonials", url: "/testimonials", desc: "Hear direct feedback from factory owners and plant heads." },
            { title: "Testimonials Showcase Carousel", url: "/testimonials-carousel", desc: "Interactive carousel of plant manager feedback." }
        ]
    },
    {
        category: "MES Blog & Industry Insights",
        icon: "fas fa-newspaper",
        description: "Actionable manufacturing technology articles, shop floor tips, and industry trends.",
        links: [
            { title: "MES Blog Hub", url: "/mes-blog", desc: "Latest articles on Industry 4.0, smart manufacturing, and shop floor management." },
            { title: "Blog Directory (List View)", url: "/mes-blog/blog-list", desc: "Chronological archive of all published blog posts." },
            { title: "Blog Directory (Grid View)", url: "/mes-blog/blog-list-2", desc: "Visual grid layout of manufacturing articles." },
            { title: "Featured Blog Carousel", url: "/mes-blog/blog-carousel", desc: "Curated carousel of trending manufacturing intelligence." },
            { title: "What is Production Tracking in Manufacturing?", url: "/mes-blog/production-tracking/what-is-production-tracking-in-manufacturing", desc: "Core principles of tracking jobs through complex plant workflows." },
            { title: "How to Improve Shop Floor Visibility", url: "/mes-blog/shop-floor-visibility/how-to-improve-shop-floor-visibility", desc: "7 practical steps to eliminate blind spots on your factory floor." },
            { title: "How to Improve Machine Utilization", url: "/mes-blog/machine-utilization/how-to-improve-machine-utilization", desc: "Proven techniques to increase OEE and reduce idle time." },
            { title: "How to Track Quality Inspections Digitally", url: "/mes-blog/quality-control/how-to-track-quality-inspections", desc: "A guide to paperless quality inspections and rejection analytics." },
            { title: "7 Ways to Improve Manufacturing Productivity", url: "/mes-blog/manufacturing-efficiency/7-ways-to-improve-manufacturing-productivity", desc: "Actionable strategies for lean manufacturing and Kaizen execution." },
            { title: "MES vs ERP: Understanding the Key Differences", url: "/mes-blog/manufacturing-technology/mes-vs-erp", desc: "Why your ERP needs a dedicated MES layer on the shop floor." }
        ]
    },
    {
        category: "Technical Services & Infrastructure",
        icon: "fas fa-server",
        description: "Supporting cloud infrastructure, security protocols, and enterprise services.",
        links: [
            { title: "Enterprise Services", url: "/services", desc: "Overview of implementation, custom engineering, and integration services." },
            { title: "Services Showcase Carousel", url: "/services-carousel", desc: "Carousel view of technical offerings." },
            { title: "Cloud Managed Services", url: "/cloud-managed-services", desc: "Secure cloud hosting, high-availability backups, and managed uptime." },
            { title: "Data Protection & Privacy", url: "/data-protection-privacy", desc: "Enterprise security architecture protecting plant proprietary formulas." },
            { title: "Endpoint Device Security", url: "/endpoint-device-security", desc: "Hardened shop floor touchscreen kiosk security." },
            { title: "Threat Detection & Prevention", url: "/threat-detection-prevention", desc: "Industrial IoT network isolation and cyber protection." },
            { title: "Advanced Technology Hub", url: "/advanced-technology", desc: "Next-gen AI analytics and edge computing architecture." },
            { title: "Backup & Disaster Recovery", url: "/backup-recovery", desc: "Zero-data-loss redundancy and continuous plant replication." },
            { title: "Media Gallery", url: "/gallery", desc: "Visual media and shop floor deployment snapshots." },
            { title: "Project Portfolio", url: "/portfolio", desc: "Highlights of successful manufacturing transformations." }
        ]
    },
    {
        category: "Legal & Website Policies",
        icon: "fas fa-shield-alt",
        description: "Privacy terms, compliance frameworks, and conditions of service.",
        links: [
            { title: "Privacy Policy", url: "/privacy-policy", desc: "Data protection guidelines, compliance, and privacy terms." },
            { title: "Terms of Use", url: "/terms-of-use", desc: "Website legal policies and terms of software engagement." }
        ]
    },
    {
        category: "Utility, Auth & Template Pages",
        icon: "fas fa-tools",
        description: "Authentication portals, error handling, and component template blueprints.",
        links: [
            { title: "User Login Portal", url: "/login", desc: "Secure customer and operator login portal." },
            { title: "Account Registration", url: "/sign-up", desc: "Sign up and create an account on Micraft MES." },
            { title: "Saved Wishlist", url: "/wishlist", desc: "Saved solutions and bookmarked modules." },
            { title: "404 Error Page", url: "/error", desc: "Custom error handler page." },
            { title: "Coming Soon Notice", url: "/coming-soon", desc: "Upcoming feature and module roadmap preview." },
            { title: "Portfolio Detail View", url: "/portfolio-details", desc: "Detailed case study template." },
            { title: "Product Detail View", url: "/product-details", desc: "Individual product hardware template." },
            { title: "Team Member Detail View", url: "/team-details", desc: "Individual specialist biography template." },
            { title: "Blog Article Detail View", url: "/mes-blog/blog-details", desc: "Full article template page." }
        ]
    }
]

export default function SitemapPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState<string>("All")

    const totalUrls = sitemapData.reduce((acc, cat) => acc + cat.links.length, 0)

    const filteredCategories = sitemapData
        .map(cat => ({
            ...cat,
            links: cat.links.filter(link => {
                const matchesSearch =
                    link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    link.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    link.url.toLowerCase().includes(searchTerm.toLowerCase())
                const matchesCategory = selectedCategory === "All" || cat.category === selectedCategory
                return matchesSearch && matchesCategory
            })
        }))
        .filter(cat => cat.links.length > 0)

    return (
        <Layout headerStyle={1} footerStyle={2}>
            <Breadcrumb breadcrumbTitle="Website Sitemap" />

            {/* Hero & Search Directory Section */}
            <section className="sitemap-hero py-5 position-relative overflow-hidden" style={{ background: 'linear-gradient(180deg, rgba(115, 102, 202, 0.08) 0%, rgba(115, 102, 202, 0.02) 100%)' }}>
                <div className="container py-3 position-relative z-2">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-9">
                            <span className="badge px-3 py-2 rounded-pill mb-3" style={{ background: 'rgba(115, 102, 202, 0.12)', color: '#7366CA', border: '1px solid rgba(115, 102, 202, 0.25)', fontWeight: '700', fontSize: '12px', letterSpacing: '1px' }}>
                                <i className="fas fa-sitemap me-2"></i> COMPLETE WEBSITE DIRECTORY
                            </span>
                            <h1 className="display-5 fw-bold mb-3">
                                Explore <span style={{ color: '#7366CA' }}>Micraft MES</span> Platform Sitemap
                            </h1>
                            <p className="lead text-secondary mx-auto mb-4" style={{ maxWidth: '750px', fontSize: '16px' }}>
                                A structured directory of all {totalUrls} pages across products, industry solutions, operational capabilities, case studies, guides, and services.
                            </p>

                            {/* Key Stats Bar */}
                            <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
                                <div className="stat-pill px-3 py-2 rounded-3" style={{ background: 'rgba(115, 102, 202, 0.08)', border: '1px solid rgba(115, 102, 202, 0.2)' }}>
                                    <strong className="text-primary me-1">{totalUrls}</strong> Total Pages
                                </div>
                                <div className="stat-pill px-3 py-2 rounded-3" style={{ background: 'rgba(115, 102, 202, 0.08)', border: '1px solid rgba(115, 102, 202, 0.2)' }}>
                                    <strong className="text-primary me-1">{sitemapData.length}</strong> Categories
                                </div>
                                <div className="stat-pill px-3 py-2 rounded-3" style={{ background: 'rgba(115, 102, 202, 0.08)', border: '1px solid rgba(115, 102, 202, 0.2)' }}>
                                    <strong className="text-primary me-1">100%</strong> Canonical
                                </div>
                                <div className="stat-pill px-3 py-2 rounded-3" style={{ background: 'rgba(115, 102, 202, 0.08)', border: '1px solid rgba(115, 102, 202, 0.2)' }}>
                                    <Link href="/sitemap.xml" className="text-primary text-decoration-none fw-bold" target="_blank">
                                        <i className="fas fa-code me-1"></i> XML Sitemap
                                    </Link>
                                </div>
                                <div className="stat-pill px-3 py-2 rounded-3" style={{ background: 'rgba(115, 102, 202, 0.08)', border: '1px solid rgba(115, 102, 202, 0.2)' }}>
                                    <Link href="/robots.txt" className="text-primary text-decoration-none fw-bold" target="_blank">
                                        <i className="fas fa-robot me-1"></i> robots.txt
                                    </Link>
                                </div>
                            </div>

                            {/* Search Box */}
                            <div className="sitemap-search-box mx-auto position-relative" style={{ maxWidth: '600px' }}>
                                <i className="fas fa-search position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"></i>
                                <input
                                    type="text"
                                    className="form-control form-control-lg ps-5 rounded-4 shadow-sm"
                                    placeholder="Search across all 95 pages..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    style={{ fontSize: '15px', border: '1.5px solid rgba(115, 102, 202, 0.3)' }}
                                />
                                {searchTerm && (
                                    <button
                                        type="button"
                                        className="btn btn-link position-absolute top-50 end-0 translate-middle-y me-2 text-secondary"
                                        onClick={() => setSearchTerm("")}
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Filter Pills */}
            <section className="py-3 border-bottom border-top" style={{ background: 'rgba(115, 102, 202, 0.03)' }}>
                <div className="container">
                    <div className="d-flex flex-wrap gap-2 justify-content-center align-items-center">
                        <span className="small text-muted me-2 fw-bold d-none d-md-inline">Filter:</span>
                        <button
                            type="button"
                            className={`btn btn-sm rounded-pill px-3 ${selectedCategory === "All" ? "btn-primary" : "btn-outline-secondary"}`}
                            onClick={() => setSelectedCategory("All")}
                        >
                            All ({totalUrls})
                        </button>
                        {sitemapData.map((cat, idx) => (
                            <button
                                key={idx}
                                type="button"
                                className={`btn btn-sm rounded-pill px-3 ${selectedCategory === cat.category ? "btn-primary" : "btn-outline-secondary"}`}
                                onClick={() => setSelectedCategory(cat.category)}
                            >
                                <i className={`${cat.icon} me-1 small`}></i> {cat.category} ({cat.links.length})
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sitemap Hierarchy & Listings */}
            <section className="sitemap-content py-5">
                <div className="container">
                    {filteredCategories.length === 0 ? (
                        <div className="text-center py-5">
                            <i className="fas fa-search fs-1 text-muted mb-3"></i>
                            <h3 className="h4 fw-bold">No matching pages found</h3>
                            <p className="text-muted">Try a different keyword or reset the category filter.</p>
                            <button
                                type="button"
                                className="btn btn-primary rounded-pill px-4"
                                onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
                            >
                                Reset Search
                            </button>
                        </div>
                    ) : (
                        <div className="row g-4">
                            {filteredCategories.map((group, groupIdx) => (
                                <div key={groupIdx} className="col-12">
                                    <div className="sitemap-category-box p-4 p-lg-5 rounded-4 shadow-sm border" style={{ background: 'var(--bg-card, #FFFFFF)' }}>
                                        {/* Category Title Header */}
                                        <div className="d-flex flex-wrap align-items-center justify-content-between pb-3 mb-4 border-bottom">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="category-icon-box rounded-3 d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #8B7DEC 0%, #7366CA 100%)', color: '#FFFFFF' }}>
                                                    <i className={`${group.icon} fs-5`}></i>
                                                </div>
                                                <div>
                                                    <h2 className="h4 mb-1 fw-bold">{group.category}</h2>
                                                    <p className="text-muted small mb-0">{group.description}</p>
                                                </div>
                                            </div>
                                            <span className="badge rounded-pill px-3 py-2 mt-2 mt-md-0" style={{ background: 'rgba(115, 102, 202, 0.1)', color: '#7366CA', fontWeight: '700' }}>
                                                {group.links.length} {group.links.length === 1 ? 'Page' : 'Pages'}
                                            </span>
                                        </div>

                                        {/* Category Link Grid */}
                                        <div className="row g-3">
                                            {group.links.map((link, linkIdx) => (
                                                <div key={linkIdx} className="col-xl-4 col-lg-6 col-md-6">
                                                    <Link
                                                        href={link.url}
                                                        className="sitemap-link-card d-block p-3 rounded-3 text-decoration-none h-100 border transition-all"
                                                        style={{ background: 'rgba(115, 102, 202, 0.02)', borderColor: 'rgba(115, 102, 202, 0.15)' }}
                                                    >
                                                        <div className="d-flex align-items-start justify-content-between mb-2">
                                                            <h3 className="h6 mb-0 fw-bold d-flex align-items-center gap-2 text-primary">
                                                                <i className="fas fa-chevron-right small text-muted"></i>
                                                                {link.title}
                                                            </h3>
                                                            {link.badge && (
                                                                <span className="badge bg-primary rounded-pill extra-small px-2" style={{ fontSize: '10px' }}>
                                                                    {link.badge}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className="text-secondary small mb-2 lh-sm" style={{ fontSize: '12.5px' }}>
                                                            {link.desc}
                                                        </p>
                                                        <div className="d-flex align-items-center gap-1 text-muted" style={{ fontSize: '11px' }}>
                                                            <code className="text-muted px-1 py-0 rounded" style={{ background: 'rgba(115, 102, 202, 0.08)' }}>
                                                                {link.url}
                                                            </code>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Final CTA */}
            <FinalCTA />
        </Layout>
    )
}
