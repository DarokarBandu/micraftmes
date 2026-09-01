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
            { title: "About Micraft", url: "/company/about", desc: "Our mission to bring digital excellence to manufacturing plants worldwide." },
            { title: "Leadership Team", url: "/company/leadership", desc: "Meet the engineering and industry veterans behind Micraft MES." },
            { title: "Careers at Micraft", url: "/company/careers", desc: "Join our fast-growing smart manufacturing software engineering team.", badge: "Hiring" },
            { title: "Our Team", url: "/team", desc: "Overview of our software development and implementation teams." }
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
            { title: "Customer Testimonials", url: "/testimonials", desc: "Hear direct feedback from factory owners and plant heads." }
        ]
    },
    {
        category: "MES Blog & Industry Insights",
        icon: "fas fa-newspaper",
        description: "Actionable manufacturing technology articles, shop floor tips, and industry trends.",
        links: [
            { title: "MES Blog Hub", url: "/mes-blog", desc: "Latest articles on Industry 4.0, smart manufacturing, and shop floor management." },
            { title: "What is Production Tracking in Manufacturing?", url: "/mes-blog/production-tracking/what-is-production-tracking-in-manufacturing", desc: "Core principles of tracking jobs through complex plant workflows." },
            { title: "How to Improve Shop Floor Visibility", url: "/mes-blog/shop-floor-visibility/how-to-improve-shop-floor-visibility", desc: "7 practical steps to eliminate blind spots on your factory floor." },
            { title: "How to Improve Machine Utilization", url: "/mes-blog/machine-utilization/how-to-improve-machine-utilization", desc: "Proven techniques to increase OEE and reduce idle time." },
            { title: "How to Track Quality Inspections Digitally", url: "/mes-blog/quality-control/how-to-track-quality-inspections", desc: "A guide to paperless quality inspections and rejection analytics." },
            { title: "7 Ways to Improve Manufacturing Productivity", url: "/mes-blog/manufacturing-efficiency/7-ways-to-improve-manufacturing-productivity", desc: "Actionable strategies for lean manufacturing and Kaizen execution." },
            { title: "MES vs ERP: Understanding the Key Differences", url: "/mes-blog/manufacturing-technology/mes-vs-erp", desc: "Why your ERP needs a dedicated MES layer on the shop floor." }
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
            <section className="sitemap-hero py-5 position-relative overflow-hidden">
                <div className="container py-3 position-relative z-2">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-9">
                            <span className="badge px-3 py-2 rounded-pill mb-3" style={{ background: 'rgba(115, 102, 202, 0.12)', color: '#7366CA', border: '1px solid rgba(115, 102, 202, 0.25)', fontWeight: '700', fontSize: '12px', letterSpacing: '1px' }}>
                                <i className="fas fa-sitemap me-2"></i> COMPLETE WEBSITE DIRECTORY
                            </span>
                            <h1 className="display-5 fw-bold mb-3 sitemap-main-title">
                                Explore <span style={{ color: '#7366CA' }}>Micraft MES</span> Platform Sitemap
                            </h1>
                            <p className="lead sitemap-subtitle mx-auto mb-4" style={{ maxWidth: '750px', fontSize: '16px' }}>
                                A structured directory of all {totalUrls} production pages across core products, industry solutions, operational capabilities, case studies, guides, and articles.
                            </p>

                            {/* Key Stats Bar */}
                            <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
                                <div className="stat-pill px-3 py-2 rounded-3 sitemap-stat-pill">
                                    <strong className="text-primary me-1">{totalUrls}</strong> Core Pages
                                </div>
                                <div className="stat-pill px-3 py-2 rounded-3 sitemap-stat-pill">
                                    <strong className="text-primary me-1">{sitemapData.length}</strong> Categories
                                </div>
                                <div className="stat-pill px-3 py-2 rounded-3 sitemap-stat-pill">
                                    <strong className="text-primary me-1">100%</strong> Live & Indexable
                                </div>
                            </div>

                            {/* Search & Category Filter Controls */}
                            <div className="card border-0 shadow-lg p-3 mx-auto sitemap-search-card" style={{ maxWidth: '720px', borderRadius: '16px' }}>
                                <div className="row g-2">
                                    <div className="col-md-7">
                                        <div className="input-group">
                                            <span className="input-group-text bg-transparent border-0 text-muted ps-3">
                                                <i className="fas fa-search"></i>
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control border-0 shadow-none ps-2 sitemap-search-input"
                                                placeholder="Search by keyword, page title, or URL path..."
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                style={{ fontSize: '15px' }}
                                            />
                                            {searchTerm && (
                                                <button className="btn btn-link text-muted pe-3 text-decoration-none" onClick={() => setSearchTerm("")}>
                                                    <i className="fas fa-times"></i>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-5 border-start-md">
                                        <select
                                            className="form-select border-0 shadow-none rounded-3 sitemap-select"
                                            value={selectedCategory}
                                            onChange={(e) => setSelectedCategory(e.target.value)}
                                            style={{ fontSize: '14px', fontWeight: '500' }}
                                        >
                                            <option value="All">All Categories ({totalUrls})</option>
                                            {sitemapData.map((cat, idx) => (
                                                <option key={idx} value={cat.category}>
                                                    {cat.category} ({cat.links.length})
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Sitemap Content Grid */}
            <section className="sitemap-content py-5">
                <div className="container">
                    {filteredCategories.length === 0 ? (
                        <div className="text-center py-5 sitemap-empty-state rounded-4">
                            <div className="mb-3 text-muted" style={{ fontSize: '48px' }}>
                                <i className="fas fa-search-minus"></i>
                            </div>
                            <h4 className="fw-bold sitemap-card-title">No Pages Matching &quot;{searchTerm}&quot;</h4>
                            <p className="text-muted mb-4">Try searching for different keywords such as &quot;Downtime&quot;, &quot;OEE&quot;, &quot;Automotive&quot;, or &quot;Planning&quot;.</p>
                            <button
                                className="thm-btn"
                                onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
                            >
                                Reset Search Filters
                            </button>
                        </div>
                    ) : (
                        <div className="row g-4">
                            {filteredCategories.map((category, catIdx) => (
                                <div key={catIdx} className="col-lg-6">
                                    <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden sitemap-category-card">
                                        {/* Category Header */}
                                        <div className="card-header border-bottom py-3 px-4 d-flex align-items-center justify-content-between sitemap-category-header">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="cat-icon-box rounded-circle d-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px', background: 'rgba(115, 102, 202, 0.25)', color: '#7366CA' }}>
                                                    <i className={category.icon}></i>
                                                </div>
                                                <div>
                                                    <h5 className="mb-0 fw-bold sitemap-cat-title" style={{ fontSize: '17px' }}>{category.category}</h5>
                                                    <small className="sitemap-cat-desc" style={{ fontSize: '12px' }}>{category.description}</small>
                                                </div>
                                            </div>
                                            <span className="badge rounded-pill px-2 py-1" style={{ background: 'rgba(255, 210, 93, 0.2)', color: '#FFD25D', fontSize: '11px' }}>
                                                {category.links.length} URLs
                                            </span>
                                        </div>

                                        {/* Links List */}
                                        <div className="card-body p-0">
                                            <ul className="list-group list-group-flush">
                                                {category.links.map((link, linkIdx) => (
                                                    <li key={linkIdx} className="list-group-item px-4 py-3 sitemap-list-item transition-all">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="pe-2">
                                                                <div className="d-flex align-items-center gap-2 mb-1">
                                                                    <Link
                                                                        href={link.url}
                                                                        className="fw-bold text-decoration-none sitemap-link transition-all"
                                                                        style={{ fontSize: '15px' }}
                                                                    >
                                                                        {link.title}
                                                                    </Link>
                                                                    {link.badge && (
                                                                        <span className="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill" style={{ fontSize: '10px' }}>
                                                                            {link.badge}
                                                                        </span>
                                                                    )}
                                                                </div>
                                                                <p className="mb-0 sitemap-link-desc" style={{ fontSize: '13px', lineHeight: '1.4' }}>
                                                                    {link.desc}
                                                                </p>
                                                            </div>
                                                            <Link
                                                                href={link.url}
                                                                className="btn btn-sm border-0 rounded-circle p-2 mt-1 flex-shrink-0 sitemap-arrow-btn"
                                                                title={`Visit ${link.title}`}
                                                            >
                                                                <i className="fas fa-arrow-right" style={{ fontSize: '12px' }}></i>
                                                            </Link>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <FinalCTA />

            <style jsx>{`
                .transition-all {
                    transition: all 0.2s ease-in-out;
                }
                @media (min-width: 768px) {
                    .border-start-md {
                        border-left: 1px solid rgba(128, 128, 128, 0.2);
                    }
                }

                /* ════════════════════════════════════════════════════
                   THEME ADAPTATION FOR SITEMAP PAGE
                   ════════════════════════════════════════════════════ */
                :global([data-theme="dark"]) .sitemap-hero {
                    background: linear-gradient(180deg, rgba(115, 102, 202, 0.1) 0%, rgba(11, 25, 44, 0.2) 100%);
                }
                :global([data-theme="light"]) .sitemap-hero {
                    background: linear-gradient(180deg, rgba(115, 102, 202, 0.08) 0%, rgba(248, 250, 252, 1) 100%);
                }

                :global([data-theme="dark"]) .sitemap-main-title {
                    color: #FFFFFF;
                }
                :global([data-theme="light"]) .sitemap-main-title {
                    color: #0F172A;
                }

                :global([data-theme="dark"]) .sitemap-subtitle {
                    color: rgba(255, 255, 255, 0.65);
                }
                :global([data-theme="light"]) .sitemap-subtitle {
                    color: #475569;
                }

                :global([data-theme="dark"]) .sitemap-stat-pill {
                    background: rgba(115, 102, 202, 0.12);
                    border: 1px solid rgba(115, 102, 202, 0.25);
                    color: #FFFFFF;
                }
                :global([data-theme="light"]) .sitemap-stat-pill {
                    background: #FFFFFF;
                    border: 1px solid #E2E8F0;
                    color: #0F172A;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
                }

                :global([data-theme="dark"]) .sitemap-search-card {
                    background: rgba(16, 29, 48, 0.95);
                    border: 1px solid rgba(255, 255, 255, 0.12) !important;
                }
                :global([data-theme="light"]) .sitemap-search-card {
                    background: #FFFFFF;
                    border: 1px solid #E2E8F0 !important;
                    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
                }

                :global([data-theme="dark"]) .sitemap-search-input {
                    color: #FFFFFF;
                }
                :global([data-theme="light"]) .sitemap-search-input {
                    color: #0F172A;
                }

                :global([data-theme="dark"]) .sitemap-select {
                    background-color: rgba(255, 255, 255, 0.06);
                    color: #FFFFFF;
                }
                :global([data-theme="light"]) .sitemap-select {
                    background-color: #F8FAFC;
                    color: #0F172A;
                }

                /* Category Cards */
                :global([data-theme="dark"]) .sitemap-category-card {
                    background: #101D30;
                    border: 1px solid rgba(255, 255, 255, 0.08) !important;
                }
                :global([data-theme="light"]) .sitemap-category-card {
                    background: #FFFFFF;
                    border: 1px solid #E2E8F0 !important;
                    box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
                }

                :global([data-theme="dark"]) .sitemap-category-header {
                    background: linear-gradient(90deg, #070D18 0%, #101D30 100%);
                    border-color: rgba(255, 255, 255, 0.08) !important;
                }
                :global([data-theme="light"]) .sitemap-category-header {
                    background: linear-gradient(90deg, #F8FAFC 0%, #F1F5F9 100%);
                    border-color: #E2E8F0 !important;
                }

                :global([data-theme="dark"]) .sitemap-cat-title {
                    color: #FFFFFF;
                }
                :global([data-theme="light"]) .sitemap-cat-title {
                    color: #0F172A;
                }

                :global([data-theme="dark"]) .sitemap-cat-desc {
                    color: rgba(255, 255, 255, 0.55);
                }
                :global([data-theme="light"]) .sitemap-cat-desc {
                    color: #64748B;
                }

                /* List items */
                :global([data-theme="dark"]) .sitemap-list-item {
                    background: transparent;
                    border-color: rgba(255, 255, 255, 0.05);
                }
                :global([data-theme="dark"]) .sitemap-list-item:hover {
                    background: rgba(115, 102, 202, 0.06);
                }
                :global([data-theme="light"]) .sitemap-list-item {
                    background: transparent;
                    border-color: #F1F5F9;
                }
                :global([data-theme="light"]) .sitemap-list-item:hover {
                    background: rgba(115, 102, 202, 0.04);
                }

                :global([data-theme="dark"]) .sitemap-link {
                    color: #FFFFFF;
                }
                :global([data-theme="dark"]) .sitemap-link:hover {
                    color: #7366CA;
                }
                :global([data-theme="light"]) .sitemap-link {
                    color: #0F172A;
                }
                :global([data-theme="light"]) .sitemap-link:hover {
                    color: #7366CA;
                }

                :global([data-theme="dark"]) .sitemap-link-desc {
                    color: rgba(255, 255, 255, 0.6);
                }
                :global([data-theme="light"]) .sitemap-link-desc {
                    color: #64748B;
                }

                :global([data-theme="dark"]) .sitemap-arrow-btn {
                    color: rgba(255, 255, 255, 0.4);
                }
                :global([data-theme="dark"]) .sitemap-arrow-btn:hover {
                    color: #7366CA;
                    background: rgba(115, 102, 202, 0.1);
                }
                :global([data-theme="light"]) .sitemap-arrow-btn {
                    color: #94A3B8;
                }
                :global([data-theme="light"]) .sitemap-arrow-btn:hover {
                    color: #7366CA;
                    background: rgba(115, 102, 202, 0.08);
                }
            `}</style>
        </Layout>
    )
}
