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
    { id: "hero", label: "Dispatch Overview", icon: "fas fa-shipping-fast" },
    { id: "problems", label: "Disorganized Dispatch", icon: "fas fa-exclamation-triangle" },
    { id: "what-is", label: "What is Dispatch Tracking", icon: "fas fa-question-circle" },
    { id: "how-it-works", label: "Monitoring Logic", icon: "fas fa-project-diagram" },
    { id: "capabilities", label: "Key Features", icon: "fas fa-list-ul" },
    { id: "benefits", label: "Operational Gains", icon: "fas fa-gem" },
    { id: "industries", label: "Industry Focus", icon: "fas fa-industry" },
    { id: "integration", label: "System Integration", icon: "fas fa-link" },
    { id: "why-micraft", label: "The Micraft Edge", icon: "fas fa-star" },
    { id: "related", label: "Related Solutions", icon: "fas fa-th-large" },
]

export default function PackingDispatchPage() {
    const { activeId: activeSection, scrollTo } = useScrollSpy(sections.map(s => s.id));

    return (
        <Layout headerStyle={1} footerStyle={2}>
            <Breadcrumb breadcrumbTitle="Packing & Dispatch Tracking" />

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
                                            Dispatch Menu
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
                                                        <span className="section-title__tagline text-primary">END-TO-END FULFILLMENT</span>
                                                    </div>
                                                    <AnimatedTitle>
                                                        <h1 className="section-title__title title-animation mb-4" style={{ lineHeight: '1.2', fontSize: '48px' }}>
                                                            Packing and Dispatch <span>Tracking Software for Manufacturing</span>
                                                        </h1>
                                                    </AnimatedTitle>
                                                </div>
                                                <div className="mt-4 pe-xl-5">
                                                    <h4 className="text-white mb-4 fw-medium" style={{ fontSize: '22px', lineHeight: '1.6', borderLeft: '4px solid #3D72FC', paddingLeft: '20px', opacity: 0.9 }}>
                                                        Track packing activities and monitor dispatch readiness in real time. Ensure completed orders move smoothly from production to shipment using a centralized digital system.
                                                    </h4>
                                                    <p className="text-white-50 mb-0 ps-4 opacity-80" style={{ fontSize: '16px', lineHeight: '1.8' }}>
                                                        Micraft MES packing and dispatch tracking software helps manufacturers monitor the final stages of production, ensuring that completed products are packed, verified, and dispatched on time. With real-time visibility of packing and shipment readiness, factories can improve delivery performance and reduce dispatch delays.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-12 mt-2">
                                                <div className="position-relative p-2 rounded-5 overflow-hidden shadow-2xl border-primary-glow mb-5" style={{ minHeight: '400px' }}>
                                                    <Image src="/assets/images/solutions/packing-dispatch-hero-1775020677341.png" alt="Packing and Dispatch Tracking" fill style={{ objectFit: 'cover' }} className="rounded-4" priority />
                                                    <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-gradient-to-t from-dark to-transparent">
                                                        <div className="p-2 rounded-3 bg-primary bg-opacity-20 backdrop-blur-md border border-white border-opacity-10 d-inline-flex align-items-center gap-2">
                                                            <div className="pulse-dot bg-success" style={{ background: '#00D261' }}></div>
                                                            <span className="text-white fw-bold extra-small letter-spacing-1">REAL-TIME DISPATCH MONITORING ACTIVE</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 mt-2">
                                                <div className="d-flex flex-wrap gap-4 mt-3">
                                                    <Link href="/book-demo" className="thm-btn rounded-pill shadow-primary-light" style={{ fontSize: '14px', padding: '12px 30px' }}>Schedule a Live Demo</Link>
                                                    <Link href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollTo('how-it-works'); }} className="btn btn-outline-light rounded-pill fw-bold border-2" style={{ fontSize: '14px', padding: '12px 28px' }}>See Dispatch Tracking in Action</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                {/* 2. Problems Section */}
                                <section id="problems" className="pt-0 pb-4 section-anchor section-fade-in">
                                         <div className="section-title text-left mb-4">
                                            <div className="section-title__tagline-box">
                                                <span className="section-title__tagline" style={{ color: '#FA5674' }}>Fulfillment Fragmentation</span>
                                            </div>
                                            <AnimatedTitle>
                                                <h2 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.2' }}>Why Packing and Dispatch <span>Tracking is Often Disorganized</span></h2>
                                            </AnimatedTitle>
                                        </div>
                                        <div className="pe-xl-5 mb-4">
                                            <p className="text-white mb-3 opacity-90" style={{ fontSize: '18px', fontWeight: '500' }}>In many manufacturing companies, the final stage of production — packing and dispatch — is managed manually.</p>
                                            <p className="text-white-50 opacity-80" style={{ fontSize: '16px' }}>This creates several operational problems: difficulty identifying which orders are ready for dispatch, delays between production completion and shipment, packing status not visible to management, inaccurate dispatch records, and coordination issues between production and logistics teams. Without a proper tracking system, factories struggle to maintain accurate shipment readiness information.</p>
                                        </div>
                                        <div className="row g-4 mt-2">
                                            {[
                                                { text: "Lack of Order Visibility", sub: "Difficulty identifying exactly which orders are packed and ready.", icon: "fas fa-eye-slash", color: "#6065D4" },
                                                { text: "Post-Production Latency", sub: "Significant delays between production completion and shipment.", icon: "fas fa-hourglass-half", color: "#FA5674" },
                                                { text: "Opaque Packing Status", sub: "Warehouse packing progress not visible to management or sales.", icon: "fas fa-box-open", color: "#7366CA" },
                                                { text: "Manual Dispatch Records", sub: "Inaccurate dispatch logs due to paper-based tracking methods.", icon: "fas fa-file-excel", color: "#00D261" },
                                                { text: "Logistical Gaps", sub: "Coordination issues between production and logistics teams.", icon: "fas fa-truck-monster", color: "#00D2FF" }
                                            ].map((item, i) => (
                                                <div key={i} className="col-lg-6">
                                                    <div className="p-4 rounded-4 border border-white border-opacity-5 h-100 transition-all hover-translate-up" style={{ background: 'rgba(255,255,255,0.02)' }}>
                                                        <div className="d-flex align-items-center gap-4">
                                                            <div className="icon-wrap rounded-circle d-flex align-items-center justify-content-center bg-white shadow-lg" style={{ minWidth: '70px', height: '70px' }}>
                                                                <i className={`${item.icon} fs-4`} style={{ color: item.color }}></i>
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
                                            <p className="text-white mb-0 text-center fw-medium">A digital packing and dispatch tracking system provides real-time visibility of order completion and shipment preparation.</p>
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
                                                        <h2 className="section-title__title title-animation mb-4" style={{ lineHeight: '1.2' }}>What is <span>Packing and Dispatch Tracking Software?</span></h2>
                                                    </AnimatedTitle>
                                                </div>
                                                <div className="pe-xl-5">
                                                    <p className="text-white-50 mb-4 opacity-80" style={{ fontSize: '16px', lineHeight: '1.8' }}>
                                                        Packing and dispatch tracking software is a system that monitors the final stages of manufacturing operations. It ensures that finished goods move efficiently from production to dispatch, maintaining consistent delivery cycles.
                                                    </p>
                                                    <p className="text-white fw-bold mb-4" style={{ fontSize: '18px' }}>It allows manufacturers to track:</p>
                                                    <div className="row g-3">
                                                        {[
                                                            "Packing completion status", "Shipment readiness", "Order dispatch preparation", 
                                                            "Completed production orders", "Delivery coordination", "Final inventory movement"
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
                                                            Micraft MES enables manufacturers to digitally manage packing and shipment preparation through a powerful integrated platform.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="position-relative p-2 rounded-5 overflow-hidden shadow-2xl border-primary-glow" style={{ minHeight: '400px' }}>
                                                    <Image src="/assets/images/solutions/dispatch-fulfillment-dashboard.png" alt="Dispatch Management Hub" fill style={{ objectFit: 'cover' }} className="rounded-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                {/* 4. How it Works Section */}
                                <section id="how-it-works" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="p-4 p-xl-5 rounded-5 shadow-2xl position-relative overflow-hidden" 
                                             style={{ background: 'rgba(11, 15, 25, 0.4)', border: '1px solid rgba(61, 114, 252, 0.1)', backdropFilter: 'blur(10px)' }}>
                                            <div className="section-title text-center mb-5">
                                                <span className="text-uppercase letter-spacing-5 text-primary fw-900 mb-2 d-block" style={{ fontSize: '10px' }}>DIGITAL DISPATCH LOGIC</span>
                                                <AnimatedTitle>
                                                    <h2 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.2' }}>How Micraft MES <span>Monitors Order Completion and Dispatch</span></h2>
                                                </AnimatedTitle>
                                            </div>
                                            <p className="text-white-50 text-center mb-5 mx-auto" style={{ maxWidth: '800px' }}>
                                                Micraft MES tracks production orders until the final dispatch stage, capturing data at every critical touchpoint in the fulfillment cycle.
                                            </p>
                                            <div className="row g-4 align-items-center mb-5">
                                                <div className="col-xl-6">
                                                    <div className="position-relative p-2 rounded-5 overflow-hidden shadow-2xl border-primary-glow" style={{ height: '400px' }}>
                                                        <Image src="/assets/images/solutions/digital-dispatch-interface-1775020693107.png" alt="Dispatch Interface" fill style={{ objectFit: 'cover' }} className="scale-hover rounded-4 transition-all" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="ps-xl-4">
                                                        <h4 className="text-white mb-4 fw-bold">Typical Digitized Workflow:</h4>
                                                        <div className="workflow-steps position-relative">
                                                            {[
                                                                "Production orders are completed in the MES",
                                                                "Finished goods move to the designated packing stage",
                                                                "Packing teams update status via mobile/tablet",
                                                                "Dispatch readiness is recorded automatically",
                                                                "Final shipment preparation and loading is tracked"
                                                            ].map((step, i) => (
                                                                <div key={i} className="d-flex align-items-center gap-3 mb-3 pb-3 border-bottom border-white border-opacity-5">
                                                                    <div className="step-num rounded-circle bg-primary bg-opacity-20 text-primary d-flex align-items-center justify-content-center fw-bold" style={{ minWidth: '32px', height: '32px', fontSize: '14px' }}>{i + 1}</div>
                                                                    <p className="text-white-50 mb-0 extra-small">{step}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <p className="text-white fw-bold extra-small mt-4 letter-spacing-1 text-primary"><i className="fas fa-truck-loading me-2"></i> MONITOR DISPATCH READINESS IN REAL TIME</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                {/* 5. Capabilities Section */}
                                <section id="capabilities" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="section-title text-left mb-5">
                                            <span className="section-title__tagline text-primary">SHIPMENT CONTROL</span>
                                            <AnimatedTitle>
                                                <h2 className="section-title__title title-animation mb-4" style={{ lineHeight: '1.2' }}>Key Features of <span>Packing and Dispatch Tracking</span></h2>
                                            </AnimatedTitle>
                                        </div>
                                        <div className="row g-4">
                                            {[
                                                { t: "Packing Stage Monitoring", d: "Track which production orders have been packed and labeled.", i: "fas fa-box", g: "linear-gradient(135deg, #3D72FC 0%, #6065D4 100%)" },
                                                { t: "Dispatch Readiness Tracking", d: "Monitor which completed orders are ready for immediate shipment.", i: "fas fa-clipboard-check", g: "#3D72FC" },
                                                { t: "Order Completion Visibility", d: "View all completed production orders currently awaiting dispatch.", i: "fas fa-eye", g: "#00D261" },
                                                { t: "Shipment Coordination", d: "Improve coordination between production teams and logistics.", i: "fas fa-sync", g: "#FA5674" },
                                                { t: "Dispatch Dashboard", d: "Visualize dispatch readiness through real-time digital dashboards.", i: "fas fa-desktop", g: "#FFB01F" },
                                                { t: "Delivery Planning Support", d: "Ensure completed orders are prepared for timely customer delivery.", i: "fas fa-calendar-check", g: "#00D2FF" }
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
                                                     <h2 className="section-title__title title-animation mb-3" style={{ lineHeight: '1.2' }}>Benefits of <span>Packing and Dispatch Tracking</span></h2>
                                                 </AnimatedTitle>
                                                 <p className="text-white-50 opacity-80 mt-3">Manufacturers implementing Micraft MES dispatch tracking gain several operational advantages.</p>
                                             </div>
                                             <div className="row g-5 align-items-center">
                                                 <div className="col-lg-7">
                                                     <div className="row g-4">
                                                         {[
                                                             { t: "Improved Delivery", d: "Ensure shipments are dispatched on time following schedules.", i: "fas fa-shipping-fast", c1: "#3D72FC", c2: "#6065D4" },
                                                             { t: "Better Coordination", d: "Improve communication between production and logistics.", i: "fas fa-users", c1: "#00D261", c2: "#3D72FC" },
                                                             { t: "Real-Time Visibility", d: "Monitor shipment readiness instantly across the factory.", i: "fas fa-broadcast-tower", c1: "#FA5674", c2: "#FFB01F" },
                                                             { t: "Reduced Delays", d: "Prevent bottlenecks at the final stage of production flow.", i: "fas fa-tachometer-alt", c1: "#00D2FF", c2: "#3D72FC" },
                                                             { t: "Accurate Records", d: "Maintain digital records of all packing and dispatch activities.", i: "fas fa-file-invoice", c1: "#6065D4", c2: "#00D261" },
                                                             { t: "Inventory Precision", d: "Sync finished goods inventory with actual dispatch movement.", i: "fas fa-boxes", c1: "#FFB01F", c2: "#FA5674" }
                                                         ].map((item, i) => (
                                                             <div key={i} className="col-md-6">
                                                                 <div className="p-4 rounded-4 h-100 transition-all hover-translate-up" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                                     <div className="mb-4 d-flex align-items-center justify-content-center rounded-circle bg-white shadow-lg mx-auto" style={{ width: '64px', height: '64px' }}>
                                                                         <i className={`${item.i} fs-3`} style={{ color: item.c1 }}></i>
                                                                     </div>
                                                                     <h4 className="text-white h6 mb-2 fw-bold text-center">{item.t}</h4>
                                                                     <p className="text-white-50 extra-small opacity-60 mb-0 text-center">{item.d}</p>
                                                                 </div>
                                                             </div>
                                                         ))}
                                                     </div>
                                                 </div>
                                                 <div className="col-lg-5">
                                                     <div className="position-relative p-0 rounded-5 overflow-hidden shadow-2xl border-primary-glow" style={{ height: '480px' }}>
                                                         <Image src="/assets/images/solutions/digital-packing-station.png" alt="Packing Station" fill style={{ objectFit: 'cover' }} className="scale-hover" />
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                    </section>

                                {/* 7. Industries Section */}
                                <section id="industries" className="pt-0 pb-4 section-anchor section-fade-in">
                                         <div className="section-title text-left mb-5">
                                            <span className="section-title__tagline text-primary">SCALABLE LOGISTICS</span>
                                            <AnimatedTitle>
                                                <h2 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.2' }}>Industries Using <span>Packing and Dispatch Tracking Systems</span></h2>
                                            </AnimatedTitle>
                                            <p className="text-white-50 opacity-80 mt-3">Factories that ship multiple orders daily benefit significantly from Micraft MES dispatch tracking software.</p>
                                        </div>
                                        <div className="row g-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
                                            {[
                                                { t: "Automotive Components", i: "fas fa-car-side" },
                                                { t: "CNC Machining Units", i: "fas fa-tools" },
                                                { t: "Fabrication Industries", i: "fas fa-industry" },
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
                                                     <h2 className="text-white mb-4 fw-bold" style={{ fontSize: '28px' }}>Integrated with <span>Complete Manufacturing Monitoring</span></h2>
                                                     <p className="text-white-50 mb-4">Micraft MES dispatch tracking integrates with other modules to provide complete visibility from production start to final shipment.</p>
                                                     <div className="row g-3">
                                                         {[
                                                            { t: "Production Tracking Software", l: "/solutions/production-tracking-software" },
                                                            { t: "Manufacturing Process Tracking", l: "/solutions/manufacturing-process-tracking" },
                                                            { t: "Quality Inspection Tracking", l: "/solutions/quality-inspection-tracking" },
                                                            { t: "Shop Floor Visibility Systems", l: "/solutions/shop-floor-visibility-software" },
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
                                                         <Image src="/assets/images/solutions/shipping-container-tracking.png" alt="Integrated Dispatch Hub" fill style={{ objectFit: 'cover' }} className="rounded-4" />
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
                                                <h2 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.2' }}>Why Choose Micraft for <span>Packing & Dispatch Tracking</span></h2>
                                            </AnimatedTitle>
                                            <p className="text-white-50 opacity-80 mt-3">We provide practical, SME-focused logistics monitoring that bridges the gap between production floors and distribution networks.</p>
                                        </div>
                                        <div className="row g-4 justify-content-center">
                                            {[
                                                { t: "Fulfillment Precision", d: "Eliminate shipping errors with digital verification at the packing station.", i: "fas fa-check-double" },
                                                { t: "Real-Time Staging", d: "Instantly see what is staged for dispatch and what is still in production.", i: "fas fa-layer-group" },
                                                { t: "Fast Deployment", d: "Digitize your warehouse in days with our ready-to-use packing interface.", i: "fas fa-bolt" },
                                                { t: "Modular Platform", d: "Scale your logistics module as your distribution complexity grows.", i: "fas fa-cubes" },
                                                { t: "Mobile Native", d: "Built for mobile tablet use right at the packing and loading bays.", i: "fas fa-mobile-alt" }
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
                                                      { title: "Quality Inspection", img: "quality-inspection-v2.png", link: "/solutions/quality-inspection-tracking", desc: "Digital inspection check-sheets and automated rejection logs." }
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
                                        Ensure On-Time Dispatch <br />
                                        <span>of Every Order</span>
                                    </h2>
                                </AnimatedTitle>
                                <p className="newsletter-one__text text-white mb-40 mx-auto" style={{ maxWidth: '750px', fontSize: '16px', opacity: 0.9 }}>
                                    Track packing completion and shipment readiness in real time with Micraft MES. Schedule a Live Demo to see how Micraft MES improves dispatch management.
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
