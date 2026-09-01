'use client';

import Link from "next/link";
import Image from "next/image";

export default function Footer2() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer-two">
            {/* Background Ambient Shapes */}
            <div className="site-footer-two__shape-1"></div>
            <div className="site-footer-two__shape-2"></div>
            <div className="site-footer-two__shape-3"></div>

            {/* ═══════════════════════════════════════════════════════════════
               1. TOP BRANDING & CONTACT INFO BAND
               ═══════════════════════════════════════════════════════════════ */}
            <div className="site-footer-two__top-band border-bottom py-4" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
                <div className="container">
                    <div className="row align-items-center g-4">
                        {/* Brand Logo & Tagline */}
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="site-footer-two__brand">
                                <Link href="/" className="d-inline-block mb-2">
                                    <Image
                                        src="/assets/images/logo/light.png"
                                        alt="Micraft MES Logo"
                                        width={190}
                                        height={50}
                                        priority
                                        style={{ height: "auto", maxHeight: "42px", width: "auto" }}
                                    />
                                </Link>
                                <p className="footer-brand-desc mb-0">
                                    Connected software for manufacturing, shop floor tracking, and plant operations.
                                </p>
                            </div>
                        </div>

                        {/* Call To Action Box */}
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div className="d-flex align-items-center gap-3">
                                <Link
                                    href="tel:+919356865559"
                                    className="footer-call-btn flex-shrink-0"
                                    title="Call Us Now"
                                >
                                    <i className="icon-phone-call"></i>
                                </Link>
                                <div>
                                    <small className="footer-cta-label d-block">Let&apos;s work together?</small>
                                    <Link href="tel:+919356865559" className="footer-call-text">
                                        Call Now
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Headquarters Address */}
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div>
                                <h6 className="footer-top-label mb-1">
                                    Headquarters - India
                                </h6>
                                <p className="footer-address-text mb-1">
                                    603, White Square, Hinjawadi Phase 1, Pune 411057
                                </p>
                                <Link href="tel:+919356865559" className="footer-top-phone">
                                    +91 93568 65559
                                </Link>
                            </div>
                        </div>

                        {/* Digital Support & Socials */}
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12">
                            <div>
                                <h6 className="footer-top-label mb-1">
                                    Digital Support
                                </h6>
                                <p className="mb-2">
                                    <Link href="mailto:support@micraft.co.in" className="footer-email-link">
                                        support@micraft.co.in
                                    </Link>
                                </p>
                                <div className="d-flex align-items-center gap-2 footer-social-strip">
                                    <Link href="https://www.linkedin.com/company/micraft-solutions/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                        <i className="fab fa-linkedin"></i>
                                    </Link>
                                    <Link href="https://www.instagram.com/micraft_solutions/?hl=en" target="_blank" rel="noopener noreferrer" title="Instagram">
                                        <i className="fab fa-instagram"></i>
                                    </Link>
                                    <Link href="https://www.youtube.com/channel/UC44Pb_1TzOY8mwPzy_0SjLQ" target="_blank" rel="noopener noreferrer" title="YouTube">
                                        <i className="fab fa-youtube"></i>
                                    </Link>
                                    <Link href="https://wa.me/9022476798?text=Hello%20there!" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                                        <i className="fab fa-whatsapp"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════
               2. MAIN 5-COLUMN MULTI-MENU NAVIGATION MATRIX
               ═══════════════════════════════════════════════════════════════ */}
            <div className="site-footer-two__middle py-4">
                <div className="container-fluid px-4 px-xl-5" style={{ maxWidth: '1600px' }}>
                    <div className="row g-4 justify-content-between">
                        {/* Column 1: Product */}
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                            <div className="footer-col-nav h-100 d-flex flex-column">
                                <h4 className="footer-nav-title">
                                    Product
                                </h4>
                                <ul className="list-unstyled d-flex flex-column gap-1 mb-0 footer-nav-list flex-grow-1">
                                    <li><Link href="/product/micraft-mes">Micraft MES</Link></li>
                                    <li><Link href="/product/how-micraft-mes-works">How Micraft Works</Link></li>
                                    <li><Link href="/product/mes-features">MES Features</Link></li>
                                    <li><Link href="/product/mes-implementation">MES Implementation</Link></li>
                                    <li><Link href="/product/mes-pricing">Pricing &amp; Plans</Link></li>
                                    <li><Link href="/features/shop-floor-data-collection">Operator Terminals</Link></li>
                                    <li><Link href="/features/machine-monitoring">Machine IoT Sync</Link></li>
                                    <li className="pt-2 mt-auto">
                                        <Link href="/product" className="footer-view-all">
                                            → View all products
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 2: Solutions */}
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                            <div className="footer-col-nav h-100 d-flex flex-column">
                                <h4 className="footer-nav-title">
                                    Solutions
                                </h4>
                                <ul className="list-unstyled d-flex flex-column gap-1 mb-0 footer-nav-list flex-grow-1">
                                    <li><Link href="/solutions/production-tracking-software">Production Tracking</Link></li>
                                    <li><Link href="/solutions/shop-floor-visibility-software">Floor Visibility</Link></li>
                                    <li><Link href="/solutions/factory-production-monitoring-system">Factory Monitoring</Link></li>
                                    <li><Link href="/solutions/quality-inspection-tracking">Quality Inspection</Link></li>
                                    <li><Link href="/solutions/machine-utilization-tracking">Machine Utilization</Link></li>
                                    <li><Link href="/solutions/manufacturing-performance-tracking">Performance (OEE)</Link></li>
                                    <li><Link href="/solutions/digital-production-dashboard">Digital Dashboards</Link></li>
                                    <li className="pt-2 mt-auto">
                                        <Link href="/solutions" className="footer-view-all">
                                            → View all solutions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 3: Industries */}
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                            <div className="footer-col-nav h-100 d-flex flex-column">
                                <h4 className="footer-nav-title">
                                    Industries
                                </h4>
                                <ul className="list-unstyled d-flex flex-column gap-1 mb-0 footer-nav-list flex-grow-1">
                                    <li><Link href="/industries/automotive-component-manufacturing">Automotive Parts</Link></li>
                                    <li><Link href="/industries/cnc-machining-engineering">CNC Machining</Link></li>
                                    <li><Link href="/industries/plastic-injection-molding">Plastic Molding</Link></li>
                                    <li><Link href="/industries/fabrication-industry">Sheet Metal Fab</Link></li>
                                    <li><Link href="/industries/electronics-manufacturing">Electronics (EMS)</Link></li>
                                    <li><Link href="/industries/general-manufacturing-smes">General Mfg SMEs</Link></li>
                                    <li><Link href="/industries/fabrication-industry">Process &amp; Tooling</Link></li>
                                    <li className="pt-2 mt-auto">
                                        <Link href="/industries" className="footer-view-all">
                                            → All industries
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 4: Features */}
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                            <div className="footer-col-nav h-100 d-flex flex-column">
                                <h4 className="footer-nav-title">
                                    Features
                                </h4>
                                <ul className="list-unstyled d-flex flex-column gap-1 mb-0 footer-nav-list flex-grow-1">
                                    <li><Link href="/features/production-order-management">Plan &amp; Schedule</Link></li>
                                    <li><Link href="/features/work-order-tracking">Work Order Track</Link></li>
                                    <li><Link href="/features/shop-floor-data-collection">Operator Terminals</Link></li>
                                    <li><Link href="/features/machine-monitoring">Machine Monitoring</Link></li>
                                    <li><Link href="/features/production-analytics-reports">Production Analytics</Link></li>
                                    <li><Link href="/features/dispatch-tracking">Dispatch Tracking</Link></li>
                                    <li><Link href="/product/micraft-mes">Audit &amp; Traceability</Link></li>
                                    <li className="pt-2 mt-auto">
                                        <Link href="/features" className="footer-view-all">
                                            → View all features
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 5: Why Micraft */}
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                            <div className="footer-col-nav h-100 d-flex flex-column">
                                <h4 className="footer-nav-title">
                                    Why Micraft
                                </h4>
                                <ul className="list-unstyled d-flex flex-column gap-1 mb-0 footer-nav-list flex-grow-1">
                                    <li><Link href="/why-micraft/mes-vs-erp">MES vs ERP</Link></li>
                                    <li><Link href="/why-micraft/manual-vs-digital-production-tracking">Manual vs Digital</Link></li>
                                    <li><Link href="/why-micraft/micraft-vs-traditional-mes">Micraft vs Legacy</Link></li>
                                    <li><Link href="/why-micraft/mes-benefits-small-manufacturers">Benefits for SMEs</Link></li>
                                    <li><Link href="/company/about">About Us</Link></li>
                                    <li><Link href="/company/leadership">Leadership Team</Link></li>
                                    <li><Link href="/company/careers">Careers &amp; Growth</Link></li>
                                    <li className="pt-2 mt-auto">
                                        <Link href="/why-micraft" className="footer-view-all">
                                            → Why choose us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 6: Resources */}
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                            <div className="footer-col-nav h-100 d-flex flex-column">
                                <h4 className="footer-nav-title">
                                    Resources
                                </h4>
                                <ul className="list-unstyled d-flex flex-column gap-1 mb-0 footer-nav-list flex-grow-1">
                                    <li><Link href="/resources/what-is-mes">What is MES Guide</Link></li>
                                    <li><Link href="/resources/mes-implementation-guide">Implement Roadmap</Link></li>
                                    <li><Link href="/resources/production-monitoring-guide">Production Monitor</Link></li>
                                    <li><Link href="/mes-blog">Blog &amp; Insights</Link></li>
                                    <li><Link href="/customers/case-studies">Case Studies</Link></li>
                                    <li><Link href="/testimonials">Client Testimonials</Link></li>
                                    <li><Link href="/faq">FAQs</Link></li>
                                    <li className="pt-2 mt-auto">
                                        <Link href="/resources" className="footer-view-all">
                                            → All resources
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════
               3. BOTTOM COPYRIGHT & LEGAL POLICIES BAR
               ═══════════════════════════════════════════════════════════════ */}
            <div className="site-footer-two__bottom border-top" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
                <div className="container">
                    <div className="site-footer-two__bottom-inner py-3 d-flex flex-wrap align-items-center justify-content-between gap-3">
                        <div className="site-footer-two__copyright">
                            <p className="site-footer-two__copyright-text mb-0">
                                © Copyright {currentYear} <Link href="/" className="footer-copyright-brand">Micraft MES</Link>. All rights reserved.
                            </p>
                        </div>
                        <div className="site-footer-two__legal-links d-flex align-items-center gap-3">
                            <Link href="/privacy-policy" className="footer-legal-link">
                                Privacy Policy
                            </Link>
                            <span className="footer-legal-divider">•</span>
                            <Link href="/terms-of-use" className="footer-legal-link">
                                Terms of Use
                            </Link>
                            <span className="footer-legal-divider">•</span>
                            <Link href="/sitemap" className="footer-legal-link">
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
