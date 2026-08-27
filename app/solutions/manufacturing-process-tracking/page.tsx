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
    { id: "hero", label: "Process Overview", icon: "fas fa-project-diagram" },
    { id: "problems", label: "Workflow Gaps", icon: "fas fa-exclamation-triangle" },
    { id: "what-is", label: "What is Tracking", icon: "fas fa-question-circle" },
    { id: "how-it-works", label: "Process Logic", icon: "fas fa-sitemap" },
    { id: "capabilities", label: "Key Features", icon: "fas fa-list-ul" },
    { id: "benefits", label: "Operational Gains", icon: "fas fa-gem" },
    { id: "industries", label: "Industry Focus", icon: "fas fa-industry" },
    { id: "integration", label: "System Integration", icon: "fas fa-link" },
    { id: "why-micraft", label: "The Micraft Edge", icon: "fas fa-star" },
    { id: "related", label: "Related Solutions", icon: "fas fa-th-large" },
]

export default function ProcessTrackingPage() {
    const { activeId: activeSection, scrollTo } = useScrollSpy(sections.map(s => s.id));

    return (
        <Layout headerStyle={1} footerStyle={2}>
            <Breadcrumb breadcrumbTitle="Manufacturing Process Tracking" />

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
                                            Process Menu
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
                                                        <span className="section-title__tagline text-primary">MULTI-STAGE WORKFLOW COMMAND</span>
                                                    </div>
                                                    <AnimatedTitle>
                                                        <h1 className="section-title__title title-animation mb-4" style={{ lineHeight: '1.2', fontSize: '48px' }}>
                                                            Manufacturing Process <span>Tracking Software for Complete Production Visibility</span>
                                                        </h1>
                                                    </AnimatedTitle>
                                                </div>
                                                <div className="mt-4 pe-xl-5">
                                                    <h4 className="text-white mb-4 fw-medium" style={{ fontSize: '22px', lineHeight: '1.6', borderLeft: '4px solid #3D72FC', paddingLeft: '20px', opacity: 0.9 }}>
                                                        Track every stage of your manufacturing process in real time. Monitor work order progress, production stages, inspection results, packing status, and dispatch readiness from a centralized digital system.
                                                    </h4>
                                                    <p className="text-white-50 mb-0 ps-4 opacity-80" style={{ fontSize: '16px', lineHeight: '1.8' }}>
                                                        Micraft MES manufacturing process tracking software enables manufacturers to digitize production workflows and gain end-to-end visibility across the entire manufacturing process. From raw material processing to final dispatch, every stage of production can be tracked, monitored, and analyzed in real time.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-12 mt-2">
                                                <div className="position-relative p-2 rounded-5 overflow-hidden shadow-2xl border-primary-glow mb-5" style={{ minHeight: '400px' }}>
                                                    <Image src="/assets/images/solutions/manufacturing-process-hero-1775021166547.png" alt="Manufacturing Process Tracking" fill style={{ objectFit: 'cover' }} className="rounded-4" priority />
                                                    <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-gradient-to-t from-dark to-transparent">
                                                        <div className="p-2 rounded-3 bg-primary bg-opacity-20 backdrop-blur-md border border-white border-opacity-10 d-inline-flex align-items-center gap-2">
                                                            <div className="pulse-dot bg-success" style={{ background: '#00D261' }}></div>
                                                            <span className="text-white fw-bold extra-small letter-spacing-1">FLOW CONTROL SYNC ACTIVE</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-flex flex-wrap gap-4">
                                                    <Link href="/book-demo" className="thm-btn rounded-pill shadow-primary-light" style={{ fontSize: '14px', padding: '12px 30px' }}>Schedule a Live Demo</Link>
                                                    <Link href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollTo('how-it-works'); }} className="btn btn-outline-light rounded-pill fw-bold border-2" style={{ fontSize: '14px', padding: '12px 28px' }}>See How Process Tracking Works</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                {/* 2. Problems Section */}
                                <section id="problems" className="pt-0 pb-4 section-anchor section-fade-in">
                                         <div className="section-title text-left mb-4">
                                            <div className="section-title__tagline-box">
                                                <span className="section-title__tagline" style={{ color: '#FA5674' }}>Workflow Fragmentation</span>
                                            </div>
                                            <AnimatedTitle>
                                                <h2 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.2' }}>Why Manufacturing <span>Processes Become Difficult to Track</span></h2>
                                            </AnimatedTitle>
                                        </div>
                                        <div className="pe-xl-5 mb-4">
                                            <p className="text-white mb-3 opacity-90" style={{ fontSize: '18px', fontWeight: '500' }}>Most factories operate with multiple production stages, often spread across machines, departments, and teams.</p>
                                            <p className="text-white-50 opacity-80" style={{ fontSize: '16px' }}>Without a digital tracking system, manufacturers face several challenges including lack of visibility across production stages, delays between steps, and poor departmental coordination. In many factories, managers rely on manual communication, making it difficult to understand the true status of production.</p>
                                        </div>
                                        <div className="row g-4 mt-2">
                                            {[
                                                { text: "Lack of Visibility", sub: "No real-time insight into work order progress across different stages.", icon: "fas fa-eye-slash", color: "#6065D4" },
                                                { text: "Process Bottlenecks", sub: "Difficulty identifying exactly where production is stalling.", icon: "fas fa-hourglass-half", color: "#FA5674" },
                                                { text: "Production Delays", sub: "Significant downtime between production steps due to poor tracking.", icon: "fas fa-clock", color: "#7366CA" },
                                                { text: "Reporting Inaccuracy", sub: "Manual updates leading to unreliable production progress reports.", icon: "fas fa-file-excel", color: "#00D261" },
                                                { text: "Poor Coordination", sub: "Lack of synchronization between different factory departments.", icon: "fas fa-users-slash", color: "#00D2FF" }
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
                                            <p className="text-white mb-0 text-center fw-medium">Manufacturing process tracking software eliminates these challenges by providing real-time visibility across every production stage.</p>
                                        </div>
                                    </section>

                                {/* 3. What is Section */}
                                <section id="what-is" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="row g-4 align-items-center">
                                            <div className="col-lg-7">
                                                <div className="section-title text-left mb-4">
                                                    <div className="section-title__tagline-box">
                                                        <span className="section-title__tagline text-primary">CORE DEFINITION</span>
                                                    </div>
                                                    <AnimatedTitle>
                                                        <h2 className="section-title__title title-animation mb-4" style={{ lineHeight: '1.2' }}>What is <span>Manufacturing Process Tracking Software?</span></h2>
                                                    </AnimatedTitle>
                                                </div>
                                                <div className="pe-xl-5">
                                                    <p className="text-white-50 mb-4 opacity-80" style={{ fontSize: '16px', lineHeight: '1.8' }}>
                                                        Manufacturing process tracking software is a system that monitors each stage of the production workflow, ensuring that work orders move smoothly from one stage to the next. By tracking the manufacturing process digitally, companies gain complete control over production workflows and operational performance.
                                                    </p>
                                                    <p className="text-white fw-bold mb-4" style={{ fontSize: '18px' }}>The system tracks activities such as:</p>
                                                    <div className="row g-3">
                                                        {[
                                                            "Machining operations", "Assembly stages", "Inspection processes", 
                                                            "Finishing operations", "Packing activities", "Dispatch preparation"
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
                                                            Micraft MES provides a simple and powerful solution for process tracking in manufacturing environments.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="position-relative p-2 rounded-5 overflow-hidden shadow-2xl border-primary-glow" style={{ minHeight: '400px' }}>
                                                    <Image src="/assets/images/solutions/tracking-features.png" alt="Process Tracking Definition" fill style={{ objectFit: 'cover' }} className="rounded-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                {/* 4. How it Works Section */}
                                <section id="how-it-works" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="p-4 p-xl-5 rounded-5 shadow-2xl position-relative overflow-hidden" 
                                             style={{ background: 'rgba(11, 15, 25, 0.4)', border: '1px solid rgba(61, 114, 252, 0.1)', backdropFilter: 'blur(10px)' }}>
                                            <div className="section-title text-center mb-5">
                                                <span className="text-uppercase letter-spacing-5 text-primary fw-900 mb-2 d-block" style={{ fontSize: '10px' }}>DIGITAL WORKFLOW</span>
                                                <AnimatedTitle>
                                                    <h2 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.2' }}>How Micraft MES <span>Digitizes Production Workflows</span></h2>
                                                </AnimatedTitle>
                                            </div>
                                            <p className="text-white-50 text-center mb-5 mx-auto" style={{ maxWidth: '800px' }}>
                                                Micraft MES captures production data from every stage of the manufacturing process and organizes it into a centralized system, creating end-to-end visibility.
                                            </p>
                                            <div className="row g-4 align-items-center mb-5">
                                                <div className="col-xl-6">
                                                    <div className="position-relative p-2 rounded-5 overflow-hidden shadow-2xl border-primary-glow" style={{ height: '400px' }}>
                                                        <Image src="/assets/images/solutions/workflow-routing-interface-1775021184471.png" alt="Workflow Routing Interface" fill style={{ objectFit: 'cover' }} className="scale-hover rounded-4 rotate-hint" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="ps-xl-4">
                                                        <h4 className="text-white mb-4 fw-bold">Typical Digitized Workflow:</h4>
                                                        <div className="workflow-steps position-relative">
                                                            {[
                                                                "Production orders are created in the system",
                                                                "Each work order moves through predefined production stages",
                                                                "Operators update progress at each stage",
                                                                "Inspection results are recorded digitally",
                                                                "Completed jobs move to packing and dispatch"
                                                            ].map((step, i) => (
                                                                <div key={i} className="d-flex align-items-center gap-3 mb-3 pb-3 border-bottom border-white border-opacity-5">
                                                                    <div className="step-num rounded-circle bg-primary bg-opacity-20 text-primary d-flex align-items-center justify-content-center fw-bold" style={{ minWidth: '32px', height: '32px', fontSize: '14px' }}>{i + 1}</div>
                                                                    <p className="text-white-50 mb-0 extra-small">{step}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <p className="text-white fw-bold extra-small mt-4 letter-spacing-1 text-primary"><i className="fas fa-desktop me-2"></i> MONITOR WORKFLOW PROGRESS INSTANTLY</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                {/* 5. Capabilities Section */}
                                <section id="capabilities" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="section-title text-left mb-5">
                                            <span className="section-title__tagline text-primary">SHOP FLOOR CONTROL</span>
                                            <AnimatedTitle>
                                                <h2 className="section-title__title title-animation mb-4" style={{ lineHeight: '1.2' }}>Key Features of <span>Micraft Process Tracking System</span></h2>
                                            </AnimatedTitle>
                                        </div>
                                        <div className="row g-4">
                                            {[
                                                { t: "Stage-Wise Monitoring", d: "Track the progress of work orders across each production stage.", i: "fas fa-layer-group", g: "linear-gradient(135deg, #3D72FC 0%, #6065D4 100%)" },
                                                { t: "Workflow Visibility", d: "Monitor how jobs move through different manufacturing processes.", i: "fas fa-project-diagram", g: "#3D72FC" },
                                                { t: "Work Order Tracking", d: "Follow each work order from start to completion.", i: "fas fa-barcode", g: "#00D261" },
                                                { t: "Inspection Monitoring", d: "Track quality checks and inspection results during production.", i: "fas fa-clipboard-check", g: "#FA5674" },
                                                { t: "Bottleneck Detection", d: "Identify delays or inefficiencies in the manufacturing process.", i: "fas fa-exclamation-triangle", g: "#FFB01F" },
                                                { t: "Real-Time Dashboards", d: "Visualize process performance through digital dashboards.", i: "fas fa-desktop", g: "#00D2FF" },
                                                { t: "Packing & Dispatch", d: "Ensure completed products move efficiently toward dispatch.", i: "fas fa-truck-loading", g: "#6065D4" }
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
                                                 <span className="section-title__tagline text-primary">BUSINESS IMPACT</span>
                                                 <AnimatedTitle>
                                                     <h2 className="section-title__title title-animation mb-3" style={{ lineHeight: '1.2' }}>Benefits of <span>Process Tracking for Manufacturing Companies</span></h2>
                                                 </AnimatedTitle>
                                                 <p className="text-white-50 opacity-80 mt-3">Implementing manufacturing process tracking provides several operational advantages.</p>
                                             </div>
                                             <div className="row g-5 align-items-center">
                                                 <div className="col-lg-7">
                                                     <div className="row g-4">
                                                         {[
                                                             { t: "Workflow Visibility", d: "Understand the status of every production stage in real time.", i: "fas fa-eye", c1: "#3D72FC", c2: "#6065D4" },
                                                             { t: "Faster Identification", d: "Detect process delays early and take corrective action.", i: "fas fa-bolt", c1: "#00D261", c2: "#3D72FC" },
                                                             { t: "Improved Coordination", d: "Ensure smooth communication between departments.", i: "fas fa-sync", c1: "#FA5674", c2: "#FFB01F" },
                                                             { t: "Increased Efficiency", d: "Optimize workflows and reduce production delays.", i: "fas fa-chart-line", c1: "#00D2FF", c2: "#3D72FC" },
                                                             { t: "Accurate Reporting", d: "Generate reliable production data for management analysis.", i: "fas fa-file-invoice", c1: "#6065D4", c2: "#00D261" },
                                                             { t: "Delivery Performance", d: "Ensure production stays aligned with delivery schedules.", i: "fas fa-truck-moving", c1: "#FFB01F", c2: "#FA5674" }
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
                                                         <Image src="/assets/images/solutions/digital-shop-traveler.png" alt="Shop Traveler" fill style={{ objectFit: 'cover' }} className="scale-hover" />
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                    </section>

                                {/* 7. Industries Section */}
                                <section id="industries" className="pt-0 pb-4 section-anchor section-fade-in">
                                         <div className="section-title text-left mb-5">
                                            <span className="section-title__tagline text-primary">SCALABLE WORKFLOWS</span>
                                            <AnimatedTitle>
                                                <h2 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.2' }}>Industries That <span>Benefit from Manufacturing Process Tracking</span></h2>
                                            </AnimatedTitle>
                                            <p className="text-white-50 opacity-80 mt-3">Micraft MES process tracking software is widely used across manufacturing industries including any factory with multi-stage production workflows.</p>
                                        </div>
                                        <div className="row g-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
                                            {[
                                                { t: "Automotive Components", i: "fas fa-car-side" },
                                                { t: "CNC Machining Units", i: "fas fa-tools" },
                                                { t: "Fabrication & Metal", i: "fas fa-industry" },
                                                { t: "Plastic Injection Molding", i: "fas fa-cubes" },
                                                { t: "Electronics Units", i: "fas fa-microchip" },
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
                                                     <h2 className="text-white mb-4 fw-bold" style={{ fontSize: '28px' }}>Process Tracking Integrated with <span>Complete Manufacturing Monitoring</span></h2>
                                                     <p className="text-white-50 mb-4">Micraft MES manufacturing process tracking integrates with other modules to provide a complete manufacturing execution system for production visibility.</p>
                                                     <div className="row g-3">
                                                         {[
                                                            { t: "Production Tracking Software", l: "/solutions/production-tracking-software" },
                                                            { t: "Shop Floor Visibility Systems", l: "/solutions/shop-floor-visibility-software" },
                                                            { t: "Factory Production Monitoring", l: "/solutions/factory-production-monitoring-system" },
                                                            { t: "Machine Utilization Tracking", l: "/solutions/machine-utilization-tracking" },
                                                            { t: "Digital Production Dashboards", l: "/solutions/digital-production-dashboard" },
                                                            { t: "Quality Inspection Tracking", l: "/solutions/quality-inspection-tracking" }
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
                                                         <Image src="/assets/images/solutions/wip-monitoring-dashboard.png" alt="Process Integration Hub" fill style={{ objectFit: 'cover' }} />
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                     </section>

                                {/* 9. Why Micraft Section */}
                                <section id="why-micraft" className="pt-0 pb-4 section-anchor section-fade-in">
                                         <div className="section-title text-left mb-5">
                                            <span className="section-title__tagline text-primary">THE MICRAFT EDGE</span>
                                            <AnimatedTitle>
                                                <h2 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.2' }}>Why Manufacturers Choose Micraft MES for <span>Manufacturing Process Tracking</span></h2>
                                            </AnimatedTitle>
                                            <p className="text-white-50 opacity-80 mt-3">Micraft MES is built specifically for small and mid-sized manufacturing companies that need practical process monitoring solutions.</p>
                                        </div>
                                        <div className="row g-4 justify-content-center">
                                            {[
                                                { t: "Simple Interface", d: "Simple workflow tracking interface that operators actually use.", i: "fas fa-user-friends" },
                                                { t: "Easy Deployment", d: "Fast deployment in factory environments without zero downtime.", i: "fas fa-rocket" },
                                                { t: "Real-Time Visibility", d: "Instant visibility across every production stage and workstation.", i: "fas fa-broadcast-tower" },
                                                { t: "Scalable Platform", d: "Scalable platform that grows alongside your factory production.", i: "fas fa-chart-line" },
                                                { t: "Full MES Integration", d: "Deep integration with our full suite of MES manufacturing modules.", i: "fas fa-cubes" }
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
                                                      { title: "Quality Inspection", img: "quality-inspection-v2.png", link: "/solutions/quality-inspection-tracking", desc: "Digital inspection check-sheets and automated rejection logs." },
                                                      { title: "Digital Dashboards", img: "digital-production-kpi-v2.png", link: "/solutions/digital-production-dashboard", desc: "Live performance analytics on localized dashboards." }
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
                                        Gain Complete Visibility of <br />
                                        <span>Your Manufacturing Processes</span>
                                    </h2>
                                </AnimatedTitle>
                                <p className="newsletter-one__text text-white mb-40 mx-auto" style={{ maxWidth: '750px', fontSize: '16px', opacity: 0.9 }}>
                                    Stop relying on manual updates to track production workflows. Digitize and monitor your entire manufacturing process with Micraft MES process tracking software.
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
