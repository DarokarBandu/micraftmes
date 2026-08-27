"use client"
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Layout from "@/components/layout/Layout"
import Breadcrumb from "@/components/layout/Breadcrumb"
import Link from "next/link"
import Image from "next/image"
import AnimatedTitle from "@/components/elements/AnimatedTitle"

const sections = [
    { id: "hero", label: "Quality Overview", icon: "fas fa-shield-alt" },
    { id: "problems", label: "Inspection Gaps", icon: "fas fa-exclamation-triangle" },
    { id: "what-is", label: "What is Quality Tracking", icon: "fas fa-question-circle" },
    { id: "how-it-works", label: "Digital Quality Logic", icon: "fas fa-project-diagram" },
    { id: "capabilities", label: "Key Features", icon: "fas fa-check-double" },
    { id: "benefits", label: "Operational Gains", icon: "fas fa-gem" },
    { id: "industries", label: "Industry Focus", icon: "fas fa-industry" },
    { id: "integration", label: "System Integration", icon: "fas fa-link" },
    { id: "why-micraft", label: "The Micraft Edge", icon: "fas fa-star" },
    { id: "related", label: "Related Solutions", icon: "fas fa-th-large" },
]

export default function QualityInspectionPage() {
    const { activeId: activeSection, scrollTo } = useScrollSpy(sections.map(s => s.id));

    return (
        <Layout headerStyle={1} footerStyle={2}>
            <Breadcrumb breadcrumbTitle="Quality Inspection Tracking" />

            <section className="services-details pt-0 pt-lg-0" style={{ background: '#02050A', minHeight: '100vh', paddingBottom: '0' }}>
                <div className="services-details__shape-1"></div>
                <div className="services-details__shape-2">
                    <Image src="/assets/images/shapes/services-details-shape-2.png" alt="Shape" width={1920} height={1332} style={{ opacity: 0.1 }} priority />
                </div>
                <div className="container-fluid px-xl-5">
                    <div className="row g-4 align-items-start pt-0">
                        {/* Sidebar */}
                        <div className="col-xl-3 col-lg-4 order-1 solution-sidebar-col">
                            <div className="services-details__left mt-0 pt-0">
                                <div className="services-details__services-list-box p-0 overflow-hidden mb-4 mb-lg-0" style={{ background: '#080D1A', border: '1px solid rgba(61, 114, 252, 0.25)', boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6)', borderRadius: '16px' }}>
                                    <div className="p-4" style={{ background: 'linear-gradient(90deg, rgba(61, 114, 252, 0.15), rgba(8, 13, 26, 0.95))', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                                        <h3 style={{ fontSize: '14px', margin: 0, color: '#7366CA', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '900' }}>
                                            Quality Menu
                                        </h3>
                                    </div>
                                    <div className="p-3">
                                        <ul className="services-details__services-list list-unstyled">
                                            {sections.map((section) => (
                                                <li key={section.id} className={activeSection === section.id ? 'active' : ''}>
                                                    <Link
                                                        href={`#${section.id}`}
                                                        onClick={(e) => { e.preventDefault(); scrollTo(section.id); }}
                                                        className="py-2 px-3 d-flex align-items-center gap-2"
                                                    >
                                                        <i className={`${section.icon} fa-fw opacity-50`} style={{ fontSize: '14px' }}></i>
                                                        <span>{section.label}</span>
                                                        <i className="fas fa-chevron-right ms-auto opacity-30" style={{ fontSize: '10px' }}></i>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="col-xl-9 col-lg-8 order-2 pt-0">
                            <div id="main-content-area" suppressHydrationWarning className="services-details__right mt-0 pt-0 pb-5 pe-xl-5">
                                {/* 1. Hero Section */}
                                <section id="hero" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="row g-4 align-items-center">
                                            <div className="col-lg-12">
                                                <div className="section-title text-left mb-4">
                                                    <div className="section-title__tagline-box">
                                                        <span className="section-title__tagline text-primary">ZERO-DEFECT MANUFACTURING</span>
                                                    </div>
                                                    <AnimatedTitle>
                                                        <h1 className="section-title__title title-animation mb-4" style={{ lineHeight: '1.2', fontSize: '48px' }}>
                                                            Quality Inspection <span>Tracking Software for Manufacturing</span>
                                                        </h1>
                                                    </AnimatedTitle>
                                                </div>
                                                <div className="mt-4 pe-xl-5">
                                                    <h4 className="text-white mb-4 fw-medium" style={{ fontSize: '22px', lineHeight: '1.6', borderLeft: '4px solid #3D72FC', paddingLeft: '20px', opacity: 0.9 }}>
                                                        Digitally track inspection results, quality checks, and rejection data across your production process. Ensure consistent product quality and maintain complete inspection records in real time.
                                                    </h4>
                                                    <p className="text-white-50 mb-0 ps-4 opacity-80" style={{ fontSize: '16px', lineHeight: '1.8' }}>
                                                        Micraft MES quality inspection tracking software helps manufacturers monitor quality checks during production and maintain accurate inspection records. Track inspection results, identify quality issues early, and improve overall manufacturing quality performance.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-12 mt-2">
                                                <div className="position-relative p-2 rounded-5 overflow-hidden shadow-2xl border-primary-glow mb-5" style={{ minHeight: '400px' }}>
                                                    <Image src="/assets/images/solutions/quality-inspection-hero-v3.png" alt="Quality Inspection Tracking" fill style={{ objectFit: 'cover' }} className="rounded-4" priority />
                                                    <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-gradient-to-t from-dark to-transparent">
                                                        <div className="p-2 rounded-3 bg-primary bg-opacity-20 backdrop-blur-md border border-white border-opacity-10 d-inline-flex align-items-center gap-2">
                                                            <div className="pulse-dot bg-success" style={{ background: '#00D261' }}></div>
                                                            <span className="text-white fw-bold extra-small letter-spacing-1">GLOBAL QC PROTOCOL SYNC ACTIVE</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 mt-2">
                                                <div className="d-flex flex-wrap gap-4 mt-3">
                                                    <Link href="/book-demo" className="thm-btn rounded-pill shadow-primary-light" style={{ fontSize: '14px', padding: '12px 30px' }}>Schedule a Live Demo</Link>
                                                    <Link href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollTo('how-it-works'); }} className="btn btn-outline-light rounded-pill fw-bold border-2" style={{ fontSize: '14px', padding: '12px 28px' }}>See How Quality Tracking Works</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                {/* 2. Problems Section */}
                                <section id="problems" className="pt-0 pb-4 section-anchor section-fade-in">
                                         <div className="section-title text-left mb-4">
                                            <div className="section-title__tagline-box">
                                                <span className="section-title__tagline" style={{ color: '#FA5674' }}>Quality Bottlenecks</span>
                                            </div>
                                            <AnimatedTitle>
                                                <h2 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.2' }}>Why Quality Tracking <span>is Difficult in Many Factories</span></h2>
                                            </AnimatedTitle>
                                        </div>
                                        <div className="pe-xl-5 mb-4">
                                            <p className="text-white mb-3 opacity-90" style={{ fontSize: '18px', fontWeight: '500' }}>In many manufacturing companies, quality inspections are recorded manually using paper forms or spreadsheets.</p>
                                            <p className="text-white-50 opacity-80" style={{ fontSize: '16px' }}>This creates several challenges including scattered data, difficult rejection trend analysis, and late discovery of quality issues. Without proper tracking, manufacturers struggle to identify recurring defects and improve production quality.</p>
                                        </div>
                                        <div className="row g-4 mt-2">
                                            {[
                                                { text: "Scattered Inspection Data", sub: "Quality records are spread across registers, making retrieval difficult.", icon: "fas fa-copy", color: "#6065D4" },
                                                { text: "Hidden Rejection Trends", sub: "Difficult to analyze scrap patterns and identify root causes.", icon: "fas fa-chart-line", color: "#FA5674" },
                                                { text: "Late Issue Discovery", sub: "Quality problems identified only at final stage, leading to high scrap.", icon: "fas fa-search-minus", color: "#7366CA" },
                                                { text: "Inaccessible Reports", sub: "Paper-based inspection reports are not easily accessible for analysis.", icon: "fas fa-file-excel", color: "#00D261" },
                                                { text: "Unclear Accountability", sub: "Weak tracking of who performed specific quality checks across shifts.", icon: "fas fa-user-shield", color: "#00D2FF" }
                                            ].map((item, i) => (
                                                <div key={i} className="col-lg-6">
                                                    <div className="p-4 rounded-4 border border-white border-opacity-5 h-100 transition-all hover-translate-up" style={{ background: 'rgba(255,255,255,0.02)' }}>
                                                        <div className="d-flex align-items-start gap-4">
                                                            <div className="icon-wrap rounded-circle d-flex align-items-center justify-content-center" style={{ minWidth: '50px', height: '50px', background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                                                                <i className={`${item.icon} fs-5`} style={{ color: item.color }}></i>
                                                            </div>
                                                            <div>
                                                                <h4 className="text-white h6 mb-2 fw-bold">{item.text}</h4>
                                                                <p className="text-white-50 mb-0 opacity-60" style={{ fontSize: '13px' }}>{item.sub}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-5 p-4 rounded-4 bg-primary bg-opacity-10 border border-primary border-opacity-20">
                                            <p className="text-white mb-0 text-center fw-medium">A digital inspection tracking system allows manufacturers to record and monitor quality checks in real time.</p>
                                        </div>
                                    </section>

                                {/* 3. What is Section */}
                                <section id="what-is" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="row g-4 align-items-center">
                                            <div className="col-lg-7">
                                                <div className="section-title text-left mb-4">
                                                    <div className="section-title__tagline-box">
                                                        <span className="section-title__tagline text-primary">QC DEFINITION</span>
                                                    </div>
                                                    <AnimatedTitle>
                                                        <h2 className="section-title__title title-animation mb-4" style={{ lineHeight: '1.2' }}>What is <span>Quality Inspection Tracking Software?</span></h2>
                                                    </AnimatedTitle>
                                                </div>
                                                <div className="pe-xl-5">
                                                    <p className="text-white-50 mb-4 opacity-80" style={{ fontSize: '16px', lineHeight: '1.8' }}>
                                                        Quality inspection tracking software is a digital system that records and monitors inspection activities during the manufacturing process. It helps factories maintain consistent quality standards and improve manufacturing performance.
                                                    </p>
                                                    <p className="text-white fw-bold mb-4" style={{ fontSize: '18px' }}>It enables manufacturers to track:</p>
                                                    <div className="row g-3">
                                                        {[
                                                            "Digital inspection results", "Defect types and descriptions",
                                                            "Rejection quantities", "Historical quality trends",
                                                            "In-process inspection stages", "Pre-dispatch verification"
                                                        ].map((item, i) => (
                                                            <div key={i} className="col-md-6">
                                                                <div className="d-flex align-items-center gap-2 text-white-50">
                                                                    <i className="fas fa-check-circle text-primary extra-small"></i>
                                                                    <span style={{ fontSize: '14px' }}>{item}</span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="mt-4">
                                                        <p className="text-white-50 opacity-80" style={{ fontSize: '15px' }}>
                                                            Micraft MES provides a simple and scalable inspection tracking solution designed specifically for manufacturing SMEs.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="position-relative p-2 rounded-5 overflow-hidden shadow-2xl border-primary-glow" style={{ minHeight: '400px' }}>
                                                    <Image src="/assets/images/solutions/quality-check-realtime-success-1774599937074.png" alt="Quality Inspection Definition" fill style={{ objectFit: 'cover' }} className="rounded-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                {/* 4. How it Works Section */}
                                <section id="how-it-works" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="p-4 p-xl-5 rounded-5 shadow-2xl position-relative overflow-hidden" 
                                             style={{ background: 'rgba(11, 15, 25, 0.4)', border: '1px solid rgba(61, 114, 252, 0.1)', backdropFilter: 'blur(10px)' }}>
                                            <div className="section-title text-center mb-5">
                                                <span className="text-uppercase letter-spacing-5 text-primary fw-900 mb-2 d-block" style={{ fontSize: '10px' }}>DIGITAL QC LOGIC</span>
                                                <AnimatedTitle>
                                                    <h2 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.2' }}>How Micraft MES <span>Digitizes Quality Inspections</span></h2>
                                                </AnimatedTitle>
                                            </div>
                                            <p className="text-white-50 text-center mb-5 mx-auto" style={{ maxWidth: '800px' }}>
                                                Micraft MES allows inspection results to be recorded directly within the production workflow, ensuring managers can instantly view performance and trends.
                                            </p>
                                            <div className="row g-4 align-items-center mb-5">
                                                <div className="col-xl-6">
                                                    <div className="position-relative p-2 rounded-5 overflow-hidden shadow-2xl border-primary-glow" style={{ height: '400px' }}>
                                                        <Image src="/assets/images/solutions/digital-qc-interface-v3.png" alt="Quality Inspection Interface" fill style={{ objectFit: 'cover' }} className="rounded-4 transition-all" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="ps-xl-4">
                                                        <h4 className="text-white mb-4 fw-bold">Typical Inspection Workflow:</h4>
                                                        <div className="workflow-steps">
                                                            {[
                                                                "Production orders move through manufacturing stages",
                                                                "Quality checks are performed during designated stages",
                                                                "Inspectors record results digitally via tablets",
                                                                "Rejection quantities and defect types are logged",
                                                                "Quality data becomes available in real-time dashboards"
                                                            ].map((step, i) => (
                                                                <div key={i} className="d-flex align-items-center gap-3 mb-3 pb-3 border-bottom border-white border-opacity-5">
                                                                    <div className="step-num rounded-circle bg-primary bg-opacity-20 text-primary d-flex align-items-center justify-content-center fw-bold" style={{ minWidth: '32px', height: '32px', fontSize: '14px' }}>{i + 1}</div>
                                                                    <p className="text-white-50 mb-0 extra-small">{step}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <p className="text-white fw-bold extra-small mt-4 letter-spacing-1 text-primary"><i className="fas fa-chart-pie me-2"></i> VIEW INSPECTION PERFORMANCE INSTANTLY</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                {/* 5. Capabilities Section */}
                                <section id="capabilities" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="section-title text-left mb-5">
                                            <span className="section-title__tagline text-primary">PRECISION QUALITY</span>
                                            <AnimatedTitle>
                                                <h2 className="section-title__title title-animation mb-4" style={{ lineHeight: '1.2' }}>Key Features of <span>Micraft Quality Inspection System</span></h2>
                                            </AnimatedTitle>
                                        </div>
                                        <div className="row g-4">
                                            {[
                                                { t: "Digital Inspection Records", d: "Record inspection results digitally for each production order.", i: "fas fa-folder-open", g: "linear-gradient(135deg, #3D72FC 0%, #6065D4 100%)" },
                                                { t: "Defect Tracking", d: "Track defect types and rejection quantities during production.", i: "fas fa-bug", g: "#FA5674" },
                                                { t: "Inspection Monitoring", d: "Monitor inspection processes across different production stages.", i: "fas fa-search", g: "#3D72FC" },
                                                { t: "Performance Dashboard", d: "View quality performance metrics through visual dashboards.", i: "fas fa-desktop", g: "#00D261" },
                                                { t: "Rejection Analysis", d: "Analyze rejection trends and identify quality improvements.", i: "fas fa-chart-bar", g: "#FFB01F" },
                                                { t: "Work Order Linkage", d: "Link inspection results directly with specific work orders.", i: "fas fa-link", g: "#00D2FF" },
                                                { t: "Real-Time Monitoring", d: "Track quality performance in real time across the factory.", i: "fas fa-broadcast-tower", g: "#6065D4" }
                                            ].map((cap, i) => (
                                                <div key={i} className="col-lg-4 col-md-6">
                                                    <div className="p-4 rounded-4 h-100 transition-all border border-white border-opacity-5 hover-translate-up" style={{ background: 'rgba(255,255,255,0.01)' }}>
                                                        <div className="d-flex align-items-center gap-3 mb-3">
                                                            <div className="icon-box rounded-circle d-flex align-items-center justify-content-center shadow-lg" style={{ width: '40px', height: '40px', background: cap.g, color: '#fff' }}>
                                                                <i className={`${cap.i} fs-6`}></i>
                                                            </div>
                                                            <h4 className="text-white h6 mb-0 fw-bold">{cap.t}</h4>
                                                        </div>
                                                        <p className="text-white-50 small mb-0 opacity-70" style={{ lineHeight: '1.6' }}>{cap.d}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                {/* 6. Benefits Section */}
                                <section id="benefits" className="pt-0 pb-4 section-anchor section-fade-in">
                                         <div className="p-xl-5 p-4 rounded-5 position-relative overflow-hidden shadow-2xl" style={{ background: 'rgba(7, 11, 20, 0.95)', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                                             <div className="section-title text-center mb-5">
                                                 <span className="section-title__tagline text-primary">QUALITY GAINS</span>
                                                 <AnimatedTitle>
                                                     <h2 className="section-title__title title-animation mb-3" style={{ lineHeight: '1.2' }}>Benefits of <span>Digital Quality Inspection Tracking</span></h2>
                                                 </AnimatedTitle>
                                                 <p className="text-white-50 opacity-80 mt-3">Manufacturers implementing Micraft MES inspection tracking gain several competitive advantages.</p>
                                             </div>
                                             <div className="row g-5 align-items-center">
                                                 <div className="col-lg-7">
                                                     <div className="row g-4">
                                                         {[
                                                             { t: "Improved Quality", d: "Identify quality issues early during production stages.", i: "fas fa-award", c1: "#3D72FC", c2: "#6065D4" },
                                                             { t: "Reduced Rejections", d: "Track defect patterns and implement corrective actions.", i: "fas fa-trash-alt", c1: "#FA5674", c2: "#FFB01F" },
                                                             { t: "Better Accountability", d: "Maintain clear inspection records and responsibilities.", i: "fas fa-user-check", c1: "#00D261", c2: "#3D72FC" },
                                                             { t: "Faster Analysis", d: "Access quality reports and rejection data instantly.", i: "fas fa-tachometer-alt", c1: "#00D2FF", c2: "#3D72FC" },
                                                             { t: "Customer Satisfaction", d: "Deliver consistent product quality to every customer.", i: "fas fa-smile", c1: "#FFB01F", c2: "#FA5674" },
                                                             { t: "Data-Driven Growth", d: "Use quality data to continuously improve processes.", i: "fas fa-chart-line", c1: "#6065D4", c2: "#00D261" }
                                                         ].map((item, i) => (
                                                             <div key={i} className="col-md-6">
                                                                 <div className="p-4 rounded-4 h-100" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                                     <div className="mb-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '48px', height: '48px', background: `linear-gradient(135deg, ${item.c1} 0%, ${item.c2} 100%)` }}>
                                                                         <i className={`${item.i} text-white fs-5`}></i>
                                                                     </div>
                                                                     <h4 className="text-white h6 mb-2 fw-bold">{item.t}</h4>
                                                                     <p className="text-white-50 extra-small opacity-60 mb-0">{item.d}</p>
                                                                 </div>
                                                             </div>
                                                         ))}
                                                     </div>
                                                 </div>
                                                 <div className="col-lg-5">
                                                     <div className="position-relative p-0 rounded-5 overflow-hidden shadow-2xl border-primary-glow" style={{ height: '480px' }}>
                                                         <Image src="/assets/images/solutions/rejection-analytics-dashboard.png" alt="QC Results Dashboard" fill style={{ objectFit: 'cover' }} className="rounded-4" />
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                    </section>

                                {/* 7. Industries Section */}
                                <section id="industries" className="pt-0 pb-4 section-anchor section-fade-in">
                                         <div className="section-title text-left mb-5">
                                            <span className="section-title__tagline text-primary">QC ADAPTABILITY</span>
                                            <AnimatedTitle>
                                                <h2 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.2' }}>Industries That <span>Benefit from Digital Inspection Tracking</span></h2>
                                            </AnimatedTitle>
                                            <p className="text-white-50 opacity-80 mt-3">Any factory with strict quality requirements benefits from digital inspection tracking with Micraft MES.</p>
                                        </div>
                                        <div className="row g-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
                                            {[
                                                { t: "Automotive Components", i: "fas fa-car" },
                                                { t: "CNC & Engineering", i: "fas fa-tools" },
                                                { t: "Fabrication & Metal", i: "fas fa-industry" },
                                                { t: "Plastic Injection Molding", i: "fas fa-cubes" },
                                                { t: "Electronics Manufacturers", i: "fas fa-microchip" },
                                                { t: "General Manufacturing SMEs", i: "fas fa-building" }
                                            ].map((ind, i) => (
                                                <div key={i} className="col">
                                                    <div className="p-4 rounded-5 text-center h-100" style={{ background: '#0F172A', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                        <div className="icon-box mb-4 d-flex align-items-center justify-content-center rounded-circle mx-auto" style={{ width: '64px', height: '64px', background: 'rgba(139, 92, 246, 0.1)' }}>
                                                            <i className={`${ind.i} fs-3 text-primary`}></i>
                                                        </div>
                                                        <h3 className="text-white h6 mb-0 fw-bold">{ind.t}</h3>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                {/* 8. Integration Section */}
                                <section id="integration" className="pt-0 pb-4 section-anchor section-fade-in">
                                         <div className="p-4 p-xl-5 rounded-5 border-primary-glow bg-dark shadow-2xl">
                                             <div className="row g-4 align-items-center">
                                                 <div className="col-lg-7">
                                                     <h2 className="text-white mb-4 fw-bold" style={{ fontSize: '28px' }}>Quality Inspection as Part of the <span>Complete MES Platform</span></h2>
                                                     <p className="text-white-50 mb-4">Micraft MES quality inspection tracking integrates with other modules to provide complete production and quality visibility.</p>
                                                     <div className="row g-3">
                                                         {[
                                                            { t: "Production Tracking Software", l: "/solutions/production-tracking-software" },
                                                            { t: "Shop Floor Visibility Systems", l: "/solutions/shop-floor-visibility-software" },
                                                            { t: "Manufacturing Process Tracking", l: "/solutions/manufacturing-process-tracking" },
                                                            { t: "Machine Utilization Tracking", l: "/solutions/machine-utilization-tracking" },
                                                            { t: "Digital Production Dashboards", l: "/solutions/digital-production-dashboard" },
                                                            { t: "Factory Production Monitoring", l: "/solutions/factory-production-monitoring-system" }
                                                         ].map((link, i) => (
                                                             <div key={i} className="col-md-6">
                                                                 <Link href={link.l} className="p-3 rounded-3 d-flex align-items-center justify-content-between text-decoration-none transition-all hover-translate-right" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                                    <span className="text-white fw-bold extra-small">{link.t}</span>
                                                                    <i className="fas fa-arrow-right text-primary extra-small"></i>
                                                                 </Link>
                                                             </div>
                                                         ))}
                                                     </div>
                                                 </div>
                                                 <div className="col-lg-5 text-center">
                                                     <div className="position-relative p-2 rounded-5 overflow-hidden shadow-2xl border-primary-glow" style={{ minHeight: '300px' }}>
                                                         <Image src="/assets/images/solutions/quality-compliance-report.png" alt="Integrated Quality Hub" fill style={{ objectFit: 'cover' }} className="rounded-4" />
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                     </section>

                                {/* 9. Why Micraft Section */}
                                <section id="why-micraft" className="pt-0 pb-4 section-anchor section-fade-in">
                                         <div className="section-title text-left mb-5">
                                            <span className="section-title__tagline text-primary">OPERATIONAL EXCELLENCE</span>
                                            <AnimatedTitle>
                                                <h2 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.2' }}>Why Manufacturers Choose Micraft MES for <span>Quality Inspection Tracking</span></h2>
                                            </AnimatedTitle>
                                            <p className="text-white-50 opacity-80 mt-3">Micraft MES is designed specifically for manufacturing SMEs that require practical and effective quality monitoring solutions.</p>
                                        </div>
                                        <div className="row g-4 justify-content-center">
                                            {[
                                                { t: "Simple Interface", d: "Easy-to-use inspection recording interface that operators love.", i: "fas fa-user-check" },
                                                { t: "Real-Time Tracking", d: "Real-time quality monitoring dashboards for instant visibility.", i: "fas fa-chart-line" },
                                                { t: "Seamless Integration", d: "Easy integration with existing shop floor production workflows.", i: "fas fa-sync" },
                                                { t: "Fast Implementation", d: "Deploy digital QC across the factory floor in days, not months.", i: "fas fa-bolt" },
                                                { t: "Scalable Choice", d: "A scalable quality system that grows with your manufacturing output.", i: "fas fa-expand-arrows-alt" }
                                            ].map((adv, i) => (
                                                <div key={i} className="col-md-4">
                                                    <div className="text-center p-4 rounded-4 h-100 transition-all hover-translate-up" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                        <div className="bg-white shadow-lg rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '70px', height: '70px' }}>
                                                            <i className={`${adv.i} text-primary fs-3`}></i>
                                                        </div>
                                                        <h4 className="text-white h6 mb-2 fw-bold">{adv.t}</h4>
                                                        <p className="text-white-50 extra-small mb-0 opacity-70" style={{ fontSize: '13px' }}>{adv.d}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                 {/* 10. Related Solutions Section */}
                                 <section id="related" className="pt-0 pb-4 section-anchor section-fade-in">
                                         <div className="section-title text-center mb-5">
                                             <div className="section-title__tagline-box mx-auto">
                                                 <span className="section-title__tagline text-primary">Related Ecosystem</span>
                                             </div>
                                             <AnimatedTitle>
                                                 <h3 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.2' }}>Explore Related <span>Micraft MES Solutions</span></h3>
                                             </AnimatedTitle>
                                         </div>
                                         
                                         <div className="solutions-carousel-wrapper">
                                             <Swiper
                                                 modules={[Autoplay, Pagination, Navigation]}
                                                 spaceBetween={24}
                                                 slidesPerView={1}
                                                 loop={true}
                                                 autoplay={{
                                                     delay: 4000,
                                                     disableOnInteraction: false,
                                                 }}
                                                 pagination={{
                                                     clickable: true,
                                                     dynamicBullets: true,
                                                 }}
                                                 navigation={true}
                                                 breakpoints={{
                                                     640: { slidesPerView: 1 },
                                                     768: { slidesPerView: 2 },
                                                     1200: { slidesPerView: 3 },
                                                 }}
                                                 className="solutions-swiper pt-2 pb-5"
                                             >
                                                  {[
                                                      { title: "Production Tracking", img: "production-tracking.png", link: "/solutions/production-tracking-software", desc: "Track every manufacturing stage with digital job cards." },
                                                      { title: "Shop Floor Visibility", img: "shop-floor-visibility-v2.png", link: "/solutions/shop-floor-visibility-software", desc: "Eliminate operational blind spots with live factory visibility." },
                                                      { title: "Process Tracking", img: "manufacturing-process-v2.png", link: "/solutions/manufacturing-process-tracking", desc: "Digitize production workflows and work order routing." },
                                                      { title: "Factory Monitoring", img: "factory-monitoring.png", link: "/solutions/factory-production-monitoring-system", desc: "Comprehensive monitoring of integrated factory operations." }
                                                  ].map((solution, i) => (
                                                     <SwiperSlide key={i}>
                                                         <div className="blog-one__single shadow-lg h-100 mb-3" style={{ background: 'rgba(15, 23, 42, 0.4)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', overflow: 'hidden' }}>
                                                             <div className="blog-one__img" style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                                                                 <Image src={`/assets/images/solutions/${solution.img}`} alt={solution.title} width={400} height={220} style={{ objectFit: 'cover', height: '100%', transition: 'transform 0.5s ease' }} className="solution-card-img" />
                                                                 <div className="position-absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                                                             </div>
                                                             <div className="blog-one__content p-3 position-relative">
                                                                 <h4 className="solution-header mt-0 mb-1">
                                                                     <Link href={solution.link} className="text-white text-decoration-none h6 fw-bold letter-spacing-1">{solution.title}</Link>
                                                                 </h4>
                                                                 <p className="solution-description text-white-50 extra-small opacity-60 mb-3 lh-base leading-relaxed">{solution.desc}</p>
                                                                 <div className="solution-btn-bar mt-auto pt-1">
                                                                     <Link href={solution.link} className="thm-btn" style={{ padding: '8px 24px', fontSize: '12px' }}>Explore Solution <span className="icon-right-arrow"></span></Link>
                                                                 </div>
                                                             </div>
                                                         </div>
                                                     </SwiperSlide>
                                                  ))}
                                             </Swiper>
                                         </div>
                                     </section>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ FINAL CALL TO ACTION ═══════════════ */}
            <section className="newsletter-one newsletter-three" style={{ padding: '60px 0 30px 0' }}>
                <div className="container">
                    <div className="newsletter-one__inner" style={{ 
                        background: 'linear-gradient(90deg, #3D72FC 0%, #070B14 100%)',
                        borderRadius: '60px' 
                    }}>
                        <div className="newsletter-one__shape-bg"
                            style={{ backgroundImage: "url(/assets/images/shapes/newsletter-one-shape-bg.png)" }}></div>
                        
                        <div className="newsletter-one__img">
                            <Image src="/assets/images/backgrounds/cta.png" alt="Image" width={320} height={320} priority />
                        </div>

                        <div className="row justify-content-center text-center">
                            <div className="col-lg-10" style={{ position: 'relative', zIndex: 5 }}>
                                <AnimatedTitle>
                                    <h2 className="newsletter-one__title text-white mb-20" style={{ lineHeight: '1.2', fontSize: '32px', fontWeight: '700' }}>
                                        Ensure Zero-Defect Manufacturing <br />
                                        <span>with Digital Quality Tracking</span>
                                    </h2>
                                </AnimatedTitle>
                                <p className="newsletter-one__text text-white mb-40 mx-auto" style={{ maxWidth: '750px', fontSize: '16px', opacity: 0.9 }}>
                                    Stop relying on manual inspection records. Digitize your quality checks and gain real-time visibility into production quality with Micraft MES.
                                </p>

                                <div className="cta-btns d-flex flex-wrap justify-content-center gap-4">
                                    <Link href="/book-demo" className="thm-btn" style={{ background: '#0B192C', color: '#fff', fontSize: '15px', padding: '14px 35px', borderRadius: '12px', textTransform: 'uppercase', fontWeight: '800' }}>
                                        Book Your Demo
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .newsletter-three { padding: 40px 0 !important; }
                    .newsletter-one__inner { position: relative; overflow: hidden; }
                    .newsletter-one__img { position: absolute; right: 40px; top: 50%; transform: translateY(-50%); display: flex; align-items: center; height: auto; z-index: 2; }
                    .thm-btn:hover { background: #fff !important; color: #0B192C !important; }
                    @media (max-width: 1199px) { .newsletter-one__img { right: 20px; } .newsletter-one__img img { width: 250px; height: auto; } }
                    @media (max-width: 991px) { .newsletter-one__img { display: none !important; } .newsletter-one__inner { padding: 60px 20px; } }
                    @media (max-width: 767px) { .newsletter-one__title { font-size: 28px !important; } .cta-btns { flex-direction: column; } .thm-btn { width: 100%; } }
                `}} />
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
                .services-details { overflow: visible !important; position: relative; }
                .shadow-2xl { box-shadow: 0 40px 100px -20px rgba(0,0,0,0.9); }
                .shadow-primary-light { box-shadow: 0 15px 45px -10px rgba(61, 114, 252, 0.5); }
                .rounded-5 { border-radius: 32px !important; }
                .border-primary-glow { border: 1px solid rgba(61, 114, 252, 0.4); box-shadow: inset 0 0 20px rgba(61, 114, 252, 0.1); }
                .hover-translate-up:hover { transform: translateY(-8px); }
                .hover-translate-right:hover { transform: translateX(8px); }
                @keyframes sectionFadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                .section-fade-in { animation: sectionFadeIn 0.5s ease-out both; }
                .solutions-swiper .swiper-pagination-bullet { background: #3D72FC; }
                .solutions-swiper .swiper-button-next, .solutions-swiper .swiper-button-prev { color: #3D72FC; }
                .pulse-dot { width: 8px; height: 8px; border-radius: 50%; position: relative; }
                .pulse-dot::after { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 50%; background: inherit; animation: pulse 2s infinite; }
                @keyframes pulse { 0% { transform: scale(1); opacity: 0.8; } 100% { transform: scale(3); opacity: 0; } }
                .rotate-hint { transition: transform 0.8s ease; }
                .hover-translate-up:hover .rotate-hint { transform: rotate(1deg) scale(1.02); }
            `}} />
        </Layout>
    )
}
