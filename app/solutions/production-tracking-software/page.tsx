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
    { id: "hero", label: "Production Overview", icon: "fas fa-clipboard-check" },
    { id: "problems", label: "The Challenges", icon: "fas fa-exclamation-triangle" },
    { id: "what-is", label: "Digital Definition", icon: "fas fa-book-open" },
    { id: "how-it-works", label: "Operational Logic", icon: "fas fa-project-diagram" },
    { id: "key-features", label: "Core Platform", icon: "fas fa-shield-alt" },
    { id: "benefits", label: "Strategic Benefits", icon: "fas fa-chart-line" },
    { id: "industries", label: "Industry Focus", icon: "fas fa-industry" },
    { id: "why-micraft", label: "The Micraft Advantage", icon: "fas fa-star" },
    { id: "integration", label: "Smart Integrations", icon: "fas fa-link" },
    { id: "related", label: "Related Solutions", icon: "fas fa-th-large" },
]

export default function ProductionTrackingSoftwarePage() {
    const { activeId: activeSection, scrollTo } = useScrollSpy(sections.map(s => s.id));

    return (
        <Layout headerStyle={1} footerStyle={2}>

            <Breadcrumb breadcrumbTitle="Production Tracking Software" />

            <section className="services-details pt-0 pt-lg-0" style={{ background: '#02050A', minHeight: '100vh', paddingBottom: '0' }}>
                <div className="services-details__shape-1"></div>
                <div className="services-details__shape-2">
                    <Image src="/assets/images/shapes/services-details-shape-2.png" alt="Shape" width={1920} height={1332} style={{ opacity: 0.1 }} priority />
                </div>
                <div className="container-fluid px-xl-5">
                    <div className="row g-4 align-items-start pt-0">
                        {/* Sidebar (Left) - Sticky on Desktop only */}
                        <div className="col-xl-3 col-lg-4 order-1 solution-sidebar-col">
                            <div className="services-details__left mt-0 pt-0">
                                <div className="services-details__services-list-box p-0 overflow-hidden mt-0 mb-4 mb-lg-0" style={{ background: '#080D1A', border: '1px solid rgba(61, 114, 252, 0.25)', boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6)', borderRadius: '16px' }}>
                                    <div className="p-4" style={{ background: 'linear-gradient(90deg, rgba(61, 114, 252, 0.15), rgba(8, 13, 26, 0.95))', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                                        <h3 style={{ fontSize: '14px', margin: 0, color: '#7366CA', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '900' }}>
                                            Solutions Menu
                                        </h3>
                                    </div>
                                    <div className="p-3">
                                        <ul className="services-details__services-list list-unstyled">
                                            {sections.map((section) => {
                                                const isActive = activeSection === section.id;
                                                return (
                                                    <li key={section.id} className={isActive ? 'active' : ''}>
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
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content (Right) - On-Demand Content View */}
                        <div className="col-xl-9 col-lg-8 order-2 pt-0">
                            <div id="main-content-area" suppressHydrationWarning className="services-details__right mt-0 pt-0 pb-5 pe-xl-5">

                                {/* 1. Hero / Overview Section */}
                                <section id="hero" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="row g-4 align-items-center">
                                            <div className="col-lg-12">
                                                <div className="section-title text-left mb-4">
                                                    <div className="section-title__tagline-box">
                                                        <span className="section-title__tagline text-primary">MICRAFT MES</span>
                                                    </div>
                                                    <AnimatedTitle>
                                                        <h1 className="section-title__title title-animation mb-4" style={{ lineHeight: '1.0', fontSize: '48px' }}>
                                                            Production Tracking Software for <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Real-Time Manufacturing Visibility</span>
                                                        </h1>
                                                    </AnimatedTitle>
                                                </div>
                                                <div className="mt-4 pe-xl-5">
                                                    <h4 className="text-white mb-4 fw-medium" style={{ fontSize: '18px', lineHeight: '1.6', borderLeft: '4px solid #3D72FC', paddingLeft: '20px', opacity: 0.9 }}>
                                                        Digitize and monitor your production process in real time. Track work orders, production progress, inspection results, packing status, and dispatch readiness from a single centralized platform.
                                                    </h4>
                                                    <p className="text-white-50 mt-4 opacity-80 lh-lg" style={{ fontSize: '16px' }}>
                                                        Micraft MES production tracking software helps manufacturers eliminate manual production reporting by providing live production updates directly from the shop floor. Gain complete visibility of every job, machine, and production stage to improve efficiency and ensure on-time delivery.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-12 mt-2">
                                                <div className="position-relative p-2 rounded-5 overflow-hidden shadow-2xl border-primary-glow mb-5" style={{ minHeight: '400px' }}>
                                                    <Image src="/assets/images/solutions/production-tracking-hero-1775020832743.png" alt="Digital Production Tracking" fill style={{ objectFit: 'cover' }} className="rounded-4" priority />
                                                    <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-gradient-to-t from-dark to-transparent">
                                                        <div className="p-2 rounded-3 bg-primary bg-opacity-20 backdrop-blur-md border border-white border-opacity-10 d-inline-flex align-items-center gap-2">
                                                            <div className="pulse-dot bg-info" style={{ background: '#0dcaf0' }}></div>
                                                            <span className="text-white fw-bold extra-small letter-spacing-1">SHOP FLOOR DATA SYNC ACTIVE</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 mt-2">
                                                <div className="d-flex flex-wrap gap-4 mt-3">
                                                    <Link href="/contact" className="thm-btn rounded-pill shadow-primary-light" style={{ fontSize: '14px', padding: '12px 30px' }}>Book a Live Demo</Link>
                                                    <Link href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollTo('how-it-works'); }} className="btn btn-outline-light rounded-pill fw-bold border-2" style={{ fontSize: '14px', padding: '12px 28px' }}>See How Production Tracking Works</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                {/* 2. Problem Section */}
                                <section id="problems" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="section-title text-left mb-4">
                                            <div className="section-title__tagline-box">
                                                <span className="section-title__tagline" style={{ color: '#FA5674' }}>Pain Points</span>
                                            </div>
                                            <AnimatedTitle>
                                                <h2 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.1' }}>The Challenges of <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Manual Production Tracking</span></h2>
                                            </AnimatedTitle>
                                        </div>
                                        <p className="text-white-50 mb-3 opacity-80 pe-xl-5" style={{ fontSize: '16px' }}>
                                            Many factories still rely on paper registers, Excel sheets, or verbal updates to track production progress. This leads to several operational challenges:
                                        </p>

                                        <div className="row g-4 mt-2">
                                            {[
                                                { text: "Lack of real-time production visibility", sub: "Difficulty knowing exact status across the shop floor.", icon: "fas fa-eye-slash", color: "#6065D4", label: "VISIBILITY" },
                                                { text: "Delayed identification of bottlenecks", sub: "Issues are often discovered hours or days too late.", icon: "fas fa-hourglass-half", color: "#FA5674", label: "LATENCY" },
                                                { text: "Inaccurate production reporting", sub: "Paper-based logs lead to consistent data errors.", icon: "fas fa-file-signature", color: "#7366CA", label: "REPORTING" },
                                                { text: "Difficulty tracking work order progress", sub: "Inertia in locating specific jobs in the production flow.", icon: "fas fa-search-location", color: "#00D261", label: "TRACKING" },
                                                { text: "Inefficient stage coordination", sub: "Friction and lost time between production stages.", icon: "fas fa-project-diagram", color: "#3D72FC", label: "COORDINATION" },
                                                { text: "Missed delivery schedules", sub: "Late insight leads to compromised fulfillment dates.", icon: "fas fa-calendar-times", color: "#6065D4", label: "DELIVERY" }
                                            ].map((item, i) => (
                                                <div key={i} className="col-lg-4 col-md-6">
                                                    <div className="p-3 p-lg-4 rounded-4 border border-white border-opacity-5 h-100 transition-all hover-translate-up" style={{ background: 'rgba(255,255,255,0.02)', position: 'relative', overflow: 'hidden' }}>
                                                        <div className="position-absolute" style={{ top: '-30%', right: '-15%', width: '120px', height: '120px', borderRadius: '50%', background: `${item.color}08`, filter: 'blur(35px)', zIndex: 0 }}></div>

                                                        <div className="d-flex flex-column h-100 position-relative" style={{ zIndex: 1 }}>
                                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                                <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: '48px', height: '48px', background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                                                                    <i className={`${item.icon} fs-5`} style={{ color: item.color, filter: `drop-shadow(0 0 8px ${item.color}60)` }}></i>
                                                                </div>
                                                                <span className="badge rounded-pill px-2 py-1" style={{ fontSize: '8px', fontWeight: '800', letterSpacing: '0.5px', background: `${item.color}20`, color: item.color, border: `1px solid ${item.color}40` }}>{item.label}</span>
                                                            </div>

                                                            <h3 className="text-white h6 mb-2 fw-bold" style={{ fontSize: '15px' }}>{item.text}</h3>
                                                            <p className="text-white-50 mb-0 opacity-60" style={{ fontSize: '13px', lineHeight: '1.5' }}>{item.sub}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-white-50 mt-5 opacity-80 pe-xl-5" style={{ fontSize: '16px' }}>
                                            Without a reliable production tracking system, management often receives production updates hours or days after the actual activity occurs. <strong>Micraft MES solves this problem by enabling real-time digital production tracking across the factory floor.</strong>
                                        </p>
                                    </section>

                                {/* 3. What is */}
                                <section id="what-is" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="row g-5 align-items-center">
                                            <div className="col-xl-6">
                                                <div className="section-title text-left mb-5">
                                                    <div className="section-title__tagline-box mb-3">
                                                        <span className="section-title__tagline text-primary">Core Definition</span>
                                                    </div>
                                                    <AnimatedTitle>
                                                        <h2 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.1' }}>What is Production <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Tracking Software?</span></h2>
                                                    </AnimatedTitle>
                                                    <p className="text-white-50 mt-4 opacity-80 lh-lg" style={{ fontSize: '16px' }}>
                                                        Production Tracking Software is a digital system that enables manufacturers to monitor, record, and analyze production activities in real time. It acts as the digital pulse of your factory, transforming raw floor data into actionable insights for production excellence.
                                                    </p>
                                                    <p className="text-white-50 opacity-80 lh-lg" style={{ fontSize: '16px' }}>
                                                        By digitizing production updates, manufacturers gain accurate operational insights and better control over manufacturing processes. Micraft MES provides a simple and scalable production tracking platform designed specifically for small and mid-sized manufacturing companies.
                                                    </p>
                                                </div>

                                                <div className="d-flex flex-wrap gap-2 mt-4">
                                                    {[
                                                        { t: "Work order progress", icon: "fas fa-clipboard-list", gradient: "linear-gradient(135deg, #3D72FC 0%, #6065D4 100%)" },
                                                        { t: "Production output", icon: "fas fa-box-open", gradient: "linear-gradient(135deg, #00D261 0%, #3D72FC 100%)" },
                                                        { t: "Machine activity", icon: "fas fa-robot", gradient: "linear-gradient(135deg, #FA5674 0%, #FFB01F 100%)" },
                                                        { t: "Operator performance", icon: "fas fa-user-clock", gradient: "linear-gradient(135deg, #8B7DEC 0%, #7366CA 100%)" },
                                                        { t: "Inspection results", icon: "fas fa-microscope", gradient: "linear-gradient(135deg, #5EEAD4 0%, #3D72FC 100%)" },
                                                        { t: "Dispatch status", icon: "fas fa-truck", gradient: "linear-gradient(135deg, #FFB01F 0%, #FA5674 100%)" }
                                                    ].map((box, i) => (
                                                        <div key={i} className="flex-grow-1" style={{ minWidth: '160px' }}>
                                                            <div className="d-flex align-items-center gap-2 p-2 px-3 rounded-4 transition-all hover-translate-up h-100" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                                <div className="icon-wrap p-2 rounded-3 d-flex align-items-center justify-content-center shadow-sm" style={{ background: box.gradient, minWidth: '32px', height: '32px' }}>
                                                                    <i className={`${box.icon} text-white`} style={{ fontSize: '10px' }}></i>
                                                                </div>
                                                                <h3 className="text-white h6 mb-0 fw-bold" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>{box.t}</h3>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="position-relative p-2 rounded-5 overflow-hidden shadow-2xl bg-dark h-100 border-primary-glow" style={{ minHeight: '450px' }}>
                                                    <Image src="/assets/images/solutions/production-flow-status-interface-1775020851357.png" alt="Production Flow Dashboard" fill className="rounded-4 rotate-hint" style={{ objectFit: 'cover', padding: '10px' }} />
                                                    <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-primary bg-opacity-70 backdrop-blur-md text-white text-center h6 mb-0 letter-spacing-2 rounded-bottom-4">
                                                        ACCURATE OPERATIONAL INSIGHTS
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                {/* 4. How it Works */}
                                <section id="how-it-works" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="section-title text-center mb-4">
                                            <div className="section-title__tagline-box mx-auto">
                                                <span className="section-title__tagline text-info">Logic Flow</span>
                                            </div>
                                            <AnimatedTitle>
                                                <h2 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.1' }}>How Micraft MES <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Tracks Production in Real Time</span></h2>
                                            </AnimatedTitle>
                                            <p className="text-white-50 mt-4 opacity-80 lh-base max-w-700 mx-auto" style={{ fontSize: '16px' }}>
                                                Micraft MES connects shop floor operations with management dashboards, enabling live production monitoring across the factory. Production data is captured at each stage of the process and displayed in centralized dashboards.
                                            </p>
                                        </div>
                                        <div className="p-3 p-lg-4 rounded-5 shadow-2xl position-relative overflow-hidden" style={{ background: 'rgba(15, 23, 42, 0.3)', border: '1px solid rgba(255, 255, 255, 0.05)', minHeight: '600px' }}>
                                            {/* --- Custom Coded Circular Cycle Diagram --- */}
                                            <div className="manufacturing-cycle-container d-flex align-items-center justify-content-center h-100 py-3 py-md-5">
                                                <div className="position-relative operational-cycle">

                                                    {/* Central Hub */}
                                                    <div className="position-absolute translate-middle top-50 start-50 rounded-circle d-flex align-items-center justify-content-center z-3" style={{ width: '120px', height: '120px', background: 'radial-gradient(circle, #3D72FC 0%, transparent 100%)', boxShadow: '0 0 50px rgba(61, 114, 252, 0.4)', border: '2px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                                                        <div className="text-center">
                                                            <div className="text-white fw-900 fs-6">MES</div>
                                                            <div className="text-info extra-small fw-bold">CORE HUB</div>
                                                        </div>
                                                    </div>

                                                    {/* SVG Cyclic Path */}
                                                    <svg className="position-absolute top-0 start-0 w-100 h-100" viewBox="0 0 500 500" style={{ zIndex: 0 }}>
                                                        <circle cx="250" cy="250" r="180" fill="none" stroke="rgba(61, 114, 252, 0.15)" strokeWidth="2" strokeDasharray="10 10" />
                                                        <circle className="data-pulse-path" cx="250" cy="250" r="180" fill="none" stroke="url(#pulse-gradient)" strokeWidth="3" strokeLinecap="round" />
                                                        <defs>
                                                            <linearGradient id="pulse-gradient">
                                                                <stop offset="0%" stopColor="#3D72FC" stopOpacity="0" />
                                                                <stop offset="100%" stopColor="#3D72FC" stopOpacity="1" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>

                                                    {/* Cycle Nodes */}
                                                    {[
                                                        { t: "ORDER PLACEMENT", s: "Order Received", icon: "fas fa-shopping-cart", angle: -90, color: "#6065D4" },
                                                        { t: "ORDER PROCESSING", s: "Data Validated", icon: "fas fa-server", angle: -30, color: "#3D72FC" },
                                                        { t: "PRODUCTION PLANNING", s: "Resource Allocation", icon: "fas fa-calendar-check", angle: 30, color: "#00D261" },
                                                        { t: "MANUFACTURING", s: "Work in Progress", icon: "fas fa-cogs", angle: 90, color: "#FA5674" },
                                                        { t: "QUALITY CONTROL", s: "Inspect & Test", icon: "fas fa-check-double", angle: 150, color: "#7366CA" },
                                                        { t: "DISPATCH READY", s: "Order Shipped", icon: "fas fa-truck-loading", angle: 210, color: "#3D72FC" }
                                                    ].map((item, i) => {
                                                        const radius = 180;
                                                        const rad = (item.angle * Math.PI) / 180;
                                                        const x = 250 + radius * Math.cos(rad);
                                                        const y = 250 + radius * Math.sin(rad);

                                                        return (
                                                            <div key={i} className="position-absolute translate-middle cycle-node text-center z-2" style={{ left: `${x}px`, top: `${y}px`, width: '130px' }}>
                                                                <div className="p-3 rounded-4 border border-white border-opacity-10 shadow-lg d-inline-block transition-all hover-glow" style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(8px)', border: `1px solid ${item.color}30` }}>
                                                                    <i className={`${item.icon} fs-4 mb-2`} style={{ color: item.color, filter: `drop-shadow(0 0 10px ${item.color}50)` }}></i>
                                                                    <div className="extra-small fw-bold text-white mb-0" style={{ fontSize: '9px' }}>{item.t}</div>
                                                                    <div className="text-white-50 opacity-50" style={{ fontSize: '8px' }}>{item.s}</div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row g-4 mt-5">
                                            {[
                                                { t: "Order Creation", d: "Production orders are digitally initiated in the MES core.", i: "fas fa-file-invoice", color: "#3D72FC" },
                                                { t: "Live Updates", d: "Operators log progress at every stage via floor terminals.", i: "fas fa-sync-alt", color: "#6065D4" },
                                                { t: "Digital Quality", d: "Results are captured instantly for real-time compliance.", i: "fas fa-microscope", color: "#00D261" },
                                                { t: "Packing Sync", d: "Readiness is synced for seamless dispatch staging.", i: "fas fa-box-open", color: "#FA5674" },
                                                { t: "Active Pulse", d: "Live KPIs flow to management dashboards immediately.", i: "fas fa-desktop", color: "#7366CA" }
                                            ].map((step, i) => (
                                                <div key={i} className="col-lg col-md-4 col-sm-6">
                                                    <div className="process-step-card p-4 rounded-5 border border-white border-opacity-5 text-center h-100 transition-all hover-translate-up" style={{ background: 'rgba(255,255,255,0.02)', position: 'relative', overflow: 'hidden' }}>
                                                        {/* Step Background Label */}
                                                        <div className="position-absolute" style={{ top: '10px', right: '15px', fontSize: '40px', fontWeight: '900', opacity: '0.03', color: '#fff', fontStyle: 'italic', zIndex: 0 }}>0{i+1}</div>
                                                        
                                                        <div className="position-relative z-1">
                                                            <div className="d-flex align-items-center justify-content-center mx-auto mb-4 rounded-circle bg-glow" style={{ width: '60px', height: '60px', background: `${step.color}15`, border: `1px solid ${step.color}30`, boxShadow: `0 0 20px ${step.color}20` }}>
                                                                <i className={`${step.i} fs-5`} style={{ color: step.color, filter: `drop-shadow(0 0 8px ${step.color}60)` }}></i>
                                                            </div>
                                                            <h3 className="text-white h6 mb-2 fw-bold letter-spacing-1 uppercase" style={{ fontSize: '13px' }}>{step.t}</h3>
                                                            <p className="text-white-50 mb-0 opacity-60 mt-3" style={{ fontSize: '11px', lineHeight: '1.6' }}>{step.d}</p>
                                                        </div>
                                                        
                                                        {/* Connector Hint (Desktop) */}
                                                        {i < 4 && (
                                                            <div className="d-none d-lg-block position-absolute" style={{ top: '50%', right: '-15px', width: '30px', height: '2px', background: 'linear-gradient(90deg, #3D72FC40, transparent)', transform: 'translateY(-50%)', zIndex: 0 }}></div>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                {/* 5. Key Features */}
                                <section id="key-features" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="section-title text-left mb-4">
                                            <div className="section-title__tagline-box">
                                                <span className="section-title__tagline text-primary">Toolkit</span>
                                            </div>
                                            <AnimatedTitle>
                                                <h2 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.1' }}>Key Features of <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Micraft Production Tracking Software</span></h2>
                                            </AnimatedTitle>
                                        </div>
                                        <div className="row g-4">
                                            {[
                                                { t: "Real-Time Production Monitoring", d: "Track production status instantly across multiple workstations and machines.", i: "fas fa-chart-line", c: "LIVE DATA" },
                                                { t: "Work Order Tracking", d: "Monitor progress of each work order from start to completion.", i: "fas fa-search-location", c: "PRECISION" },
                                                { t: "Stage-Wise Production Updates", d: "Track production progress across machining, assembly, inspection, packing, and dispatch.", i: "fas fa-layer-group", c: "FLOW" },
                                                { t: "Operator Productivity Tracking", d: "Understand how operators contribute to production output.", i: "fas fa-user-cog", c: "PERFORMANCE" },
                                                { t: "Production Dashboard", d: "Access visual dashboards showing live factory performance.", i: "fas fa-desktop", c: "VISUALS" },
                                                { t: "Quality Inspection Recording", d: "Track inspection results and quality metrics during production.", i: "fas fa-check-double", c: "QUALITY" },
                                                { t: "Packing & Dispatch Monitoring", d: "Ensure completed production moves smoothly to packing and dispatch stages.", i: "fas fa-box", c: "LOGISTICS" }
                                            ].map((f, i) => (
                                                <div key={i} className="col-lg-4 col-md-6">
                                                    <div className="capability-card h-100 p-4 rounded-5 position-relative overflow-hidden transition-all hover-translate-up" style={{ background: '#0F172A', border: '1px solid rgba(115, 102, 202, 0.15)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                                                        {/* Animated background glow */}
                                                        <div className="position-absolute" style={{ top: '-20%', right: '-10%', width: '150px', height: '150px', borderRadius: '50%', background: 'linear-gradient(135deg, #8B7DEC 0%, #7366CA 100%)', opacity: '0.08', filter: 'blur(40px)' }}></div>

                                                        <div className="d-flex flex-column h-100 position-relative" style={{ zIndex: 1 }}>
                                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                                <div className="icon-container d-flex align-items-center justify-content-center rounded-circle" style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, #8B7DEC 0%, #7366CA 100%)', boxShadow: '0 10px 20px rgba(115, 102, 202, 0.35)' }}>
                                                                    <i className={`${f.i} text-white fs-4`}></i>
                                                                </div>
                                                                <span className="text-uppercase letter-spacing-2 fw-bold text-white-50" style={{ fontSize: '9px', opacity: '0.4' }}>{f.c}</span>
                                                            </div>

                                                            <h3 className="text-white h5 mb-3 fw-bold">{f.t}</h3>
                                                            <p className="text-white-50 extra-small mb-0 opacity-70 lh-lg" style={{ fontSize: '13px' }}>{f.d}</p>

                                                            <div className="mt-4 pt-4 border-top border-white border-opacity-5 mt-auto">
                                                                <div className="d-flex align-items-center gap-2">
                                                                    <div className="rounded-circle bg-success" style={{ width: '6px', height: '6px', boxShadow: '0 0 10px #28a745' }}></div>
                                                                    <span className="extra-small text-white-50 opacity-50 fw-bold">SYSTEM ACTIVE</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    </section>

                                {/* 6. Benefits - Operational Intelligence Hub */}
                                <section id="benefits" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="p-xl-5 p-4 rounded-5 position-relative overflow-hidden analytics-dashboard" style={{ background: 'rgba(15, 23, 42, 0.5)', border: '1px solid rgba(139, 92, 246, 0.15)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>

                                            <div className="section-title text-center mb-5">
                                                <div className="section-title__tagline-box mx-auto mb-3">
                                                    <span className="section-title__tagline" style={{ color: '#00D261' }}>Industrial Intelligence</span>
                                                </div>
                                                <AnimatedTitle>
                                                    <h2 className="section-title__title title-animation mb-3" style={{ lineHeight: '1.1' }}>Benefits of Implementing <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Production Tracking Software</span></h2>
                                                </AnimatedTitle>
                                                <p className="text-white-50 opacity-70 max-w-700 mx-auto" style={{ fontSize: '16px' }}>Manufacturers implementing Micraft MES gain measurable operational improvements through digitized floor control.</p>
                                            </div>

                                            {/* Primary Intelligence Hub */}
                                            <div className="row g-4 align-items-stretch mt-4">
                                                {/* Column 1: Performance Pulse */}
                                                <div className="col-lg-4">
                                                    <div className="p-3 p-lg-4 rounded-5 h-100 transition-all hover-glow" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #02050A 100%)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                        <div className="d-flex align-items-center gap-3 mb-4">
                                                            <div className="p-2 rounded-3 bg-success bg-opacity-10 text-success">
                                                                <i className="fas fa-bolt fs-5"></i>
                                                            </div>
                                                            <h5 className="text-white h6 mb-0 fw-bold letter-spacing-1 uppercase">Performance</h5>
                                                        </div>

                                                        <div className="metric-item mb-5">
                                                            <div className="d-flex justify-content-between mb-2">
                                                                <span className="extra-small text-white-50">Production Yield</span>
                                                                <span className="extra-small text-success fw-bold">+26% GAIN</span>
                                                            </div>
                                                            <div className="progress rounded-pill p-1" style={{ height: '30px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                                <div className="progress-bar rounded-pill d-flex align-items-center justify-content-end pe-3" style={{ width: '98%', background: 'linear-gradient(90deg, #3D72FC, #00D261)', boxShadow: '0 0 15px rgba(61, 114, 252, 0.4)' }}>
                                                                    <span className="fw-900" style={{ fontSize: '10px' }}>98%</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="metric-item">
                                                            <div className="d-flex justify-content-between mb-2">
                                                                <span className="extra-small text-white-50">Downtime Incidents</span>
                                                                <span className="extra-small text-danger fw-bold">-45% REDUCTION</span>
                                                            </div>
                                                            <div className="progress rounded-pill p-1" style={{ height: '30px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                                <div className="progress-bar rounded-pill d-flex align-items-center justify-content-end pe-3" style={{ width: '35%', background: 'linear-gradient(90deg, #FA5674, #FFB01F)', boxShadow: '0 0 15px rgba(250, 86, 116, 0.3)' }}>
                                                                    <span className="fw-900" style={{ fontSize: '10px' }}>12%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Column 2: Digital Twin Core (Innovative SVG) */}
                                                <div className="col-lg-4">
                                                    <div className="p-3 p-lg-4 rounded-5 h-100 d-flex flex-column align-items-center justify-content-center position-relative overflow-hidden" style={{ background: 'radial-gradient(circle at center, rgba(61, 114, 252, 0.1) 0%, transparent 70%)' }}>
                                                        <div className="position-relative" style={{ width: '180px', height: '180px' }}>
                                                            <svg className="w-100 h-100 rotate-loop-slow" viewBox="0 0 100 100">
                                                                <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" strokeDasharray="2 2" />
                                                                <circle cx="50" cy="50" r="40" fill="none" stroke="url(#core-grad)" strokeWidth="1" strokeDasharray="10 5" />
                                                                <defs>
                                                                    <linearGradient id="core-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                                                        <stop offset="0%" stopColor="#3D72FC" />
                                                                        <stop offset="100%" stopColor="#8B5CF6" />
                                                                    </linearGradient>
                                                                </defs>
                                                            </svg>
                                                            <div className="position-absolute top-50 start-50 translate-middle text-center">
                                                                <div className="h3 text-white fw-900 mb-0">LIVE</div>
                                                                <div className="extra-small text-primary fw-bold letter-spacing-2">TRACKING</div>
                                                            </div>
                                                            {/* Pulse Rings */}
                                                            <div className="position-absolute top-50 start-50 translate-middle rounded-circle animate-ping" style={{ width: '80px', height: '80px', background: 'rgba(61, 114, 252, 0.15)', animationDuration: '3s' }}></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Column 3: Economic Outcome */}
                                                <div className="col-lg-4">
                                                    <div className="p-3 p-lg-4 rounded-5 h-100 transition-all hover-glow" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #02050A 100%)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                        <div className="d-flex align-items-center gap-3 mb-4">
                                                            <div className="p-2 rounded-3 bg-primary bg-opacity-10 text-primary">
                                                                <i className="fas fa-hand-holding-usd fs-5"></i>
                                                            </div>
                                                            <h5 className="text-white h6 mb-0 fw-bold letter-spacing-1 uppercase">Economic Impact</h5>
                                                        </div>

                                                        <div className="p-3 rounded-4 border border-white border-opacity-05 text-center mb-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
                                                            <div className="h2 text-white fw-900 mb-0">30%</div>
                                                            <div className="extra-small text-success fw-bold">ANNUAL ROI SAVINGS</div>
                                                        </div>

                                                        <div className="p-3 rounded-4 border border-white border-opacity-05 text-center" style={{ background: 'rgba(255,255,255,0.02)' }}>
                                                            <div className="h2 text-white fw-900 mb-0">1.2x</div>
                                                            <div className="extra-small text-info fw-bold">EFFICIENCY MULTIPLIER</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* New Detailed Benefits Grid */}
                                            <div className="row g-4 mt-5 pt-3">
                                                {[
                                                    { t: "Complete Production Visibility", d: "Know exactly what is happening in the factory at any moment.", i: "fas fa-eye", c: "#3D72FC" },
                                                    { t: "Faster Decision Making", d: "Real-time data enables quicker responses to production issues.", i: "fas fa-bolt", c: "#00D261" },
                                                    { t: "Improved Production Efficiency", d: "Identify bottlenecks and optimize resource usage.", i: "fas fa-tachometer-alt", c: "#8B5CF6" },
                                                    { t: "Accurate Production Reports", d: "Generate reliable production reports for management review.", i: "fas fa-file-invoice", c: "#FA5674" },
                                                    { t: "Better Delivery Performance", d: "Track production progress to ensure timely order fulfillment.", i: "fas fa-truck-container", c: "#FFB01F" },
                                                    { t: "Increased Shop Floor Accountability", d: "Improve coordination between operators, supervisors, and management.", i: "fas fa-users-cog", c: "#00D2FF" }
                                                ].map((benefit, i) => (
                                                    <div key={i} className="col-lg-4 col-md-6">
                                                        <div className="p-3 p-lg-4 rounded-4 h-100 transition-all hover-translate-up" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                            <div className="d-flex align-items-center gap-3 mb-3">
                                                                <div className="icon-wrap p-2 rounded-2" style={{ background: benefit.c + '15', color: benefit.c }}>
                                                                    <i className={`${benefit.i} extra-small`}></i>
                                                                </div>
                                                                <h6 className="text-white h6 mb-0 fw-bold extra-small uppercase letter-spacing-1">{benefit.t}</h6>
                                                            </div>
                                                            <p className="text-white-50 extra-small mb-0 opacity-60 lh-base">{benefit.d}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </section>

                                {/* 7. Industries */}
                                <section id="industries" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="text-left mb-5">
                                            <div className="section-title__tagline-box mb-3">
                                                <span className="section-title__tagline text-primary">Vertical Segments</span>
                                            </div>
                                            <AnimatedTitle>
                                                <h3 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.1' }}>Ideal for <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Manufacturing SMEs</span></h3>
                                            </AnimatedTitle>
                                            <p className="text-white-50 mt-3" style={{ fontSize: '16px' }}>Engineered for versatility across diverse industrial production environments.</p>
                                        </div>
                                        <div className="row g-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
                                            {[
                                                { t: "Automotive Components", i: "fas fa-car-side", link: "/industries/automotive-component-manufacturing" },
                                                { t: "CNC Machining & Engineering", i: "fas fa-cogs", link: "/industries/cnc-machining-engineering" },
                                                { t: "Fabrication & Metal Processing", i: "fas fa-hammer", link: "/industries/fabrication-industry" },
                                                { t: "Plastic Injection Molding", i: "fas fa-vial", link: "/industries/plastic-injection-molding" },
                                                { t: "Electronics Manufacturing", i: "fas fa-microchip", link: "/industries/electronics-manufacturing" },
                                                { t: "General Manufacturing SMEs", i: "fas fa-industry", link: "/industries/general-manufacturing-smes" }
                                            ].map((ind, i) => (
                                                <div key={i} className="col">
                                                    <div className="industry-segment-card p-4 rounded-5 position-relative overflow-hidden transition-all hover-translate-up h-100" style={{ background: '#0F172A', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                        <div className="icon-box mb-4 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '64px', height: '64px', background: 'rgba(115, 102, 202, 0.1)', border: '1px solid rgba(115, 102, 202, 0.25)' }}>
                                                            <i className={`${ind.i} fs-3`} style={{ color: '#7366CA' }}></i>
                                                        </div>
                                                        <h3 className="text-white h6 mb-3 fw-bold">{ind.t}</h3>
                                                        <div className="pt-3 border-top border-white border-opacity-5 mt-auto">
                                                            <Link href={ind.link} className="extra-small text-primary hover-underline fw-bold d-flex align-items-center gap-2">
                                                                Explore Case Study <i className="fas fa-arrow-right" style={{ fontSize: '10px' }}></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    </section>

                                 {/* 8. Why Micraft */}
                                 <section id="why-micraft" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="p-4 p-xl-5 rounded-5 position-relative overflow-hidden" style={{ background: 'rgba(15, 23, 42, 0.3)', border: '1px solid rgba(139, 92, 246, 0.1)' }}>
                                            <div className="section-title text-center mb-5 max-w-800 mx-auto">
                                                <div className="section-title__tagline-box mx-auto mb-3">
                                                    <span className="section-title__tagline text-primary">The Micraft Edge</span>
                                                </div>
                                                <AnimatedTitle>
                                                    <h2 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.1' }}>Why Manufacturers Choose <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Micraft MES for Production Tracking</span></h2>
                                                </AnimatedTitle>
                                                <p className="text-white-50 mt-4 opacity-70 lh-relaxed max-w-700 mx-auto" style={{ fontSize: '15px' }}>
                                                   Micraft MES eliminates implementation complexity for SMEs through purpose-built digital production tools and intuitive logic.
                                                </p>
                                            </div>

                                            <div className="row g-3">
                                                {[
                                                    { t: "Intuitive Interface", d: "Zero-friction UI designed for rapid operator adoption.", i: "fas fa-mouse-pointer", c: "#3D72FC" },
                                                    { t: "Fast Deployment", d: "Live factory execution in weeks, not months of setup.", i: "fas fa-bolt", c: "#00D261" },
                                                    { t: "Live Precision", d: "Real-time accuracy for immediate floor control.", i: "fas fa-chart-line", c: "#FA5674" },
                                                    { t: "Agile Scalability", d: "Architecture that grows with your production volume.", i: "fas fa-expand-arrows-alt", c: "#8B5CF6" },
                                                    { t: "SME First approach", d: "Built specifically for small/mid-sized manufacturer needs.", i: "fas fa-industry", c: "#7366CA" },
                                                    { t: "Low Complexity", d: "High impact transformation without enterprise overhead.", i: "fas fa-shield-alt", c: "#3D72FC" }
                                                ].map((adv, i) => (
                                                    <div key={i} className="col-lg-4 col-md-6">
                                                        <div className="p-4 rounded-4 h-100 transition-all hover-translate-up" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                            <div className="d-flex align-items-center gap-3 mb-3">
                                                                <div className="d-flex align-items-center justify-content-center rounded-3 bg-opacity-10" style={{ width: '42px', height: '42px', background: `${adv.c}15`, border: `1px solid ${adv.c}30` }}>
                                                                    <i className={`${adv.i}`} style={{ color: adv.c, fontSize: '16px' }}></i>
                                                                </div>
                                                                <h3 className="text-white h6 mb-0 fw-bold letter-spacing-1">{adv.t}</h3>
                                                            </div>
                                                            <p className="text-white-50 extra-small mb-0 opacity-60 mt-2" style={{ fontSize: '12px', lineHeight: '1.5' }}>{adv.d}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </section>
                                {/* 9. Integration - The Neural Connectivity Hub */}
                                <section id="integration" className="pt-0 pb-4 section-anchor section-fade-in">
                                        {/* Tier 1: Narrative Header */}
                                        <div className="section-title text-center mb-5 max-w-900 mx-auto">
                                            <div className="section-title__tagline-box mb-3 mx-auto">
                                                <span className="section-title__tagline text-primary">Neural Integration Hub</span>
                                            </div>
                                            <AnimatedTitle>
                                                <h2 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.1' }}>Production Tracking + <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}><Link href="/solutions/shop-floor-visibility-software" className="text-decoration-none border-bottom border-primary pb-1" style={{ color: 'inherit' }}>Complete Shop Floor Visibility</Link></span></h2>
                                            </AnimatedTitle>
                                            <p className="text-white-50 mt-4 x-small opacity-70 leading-relaxed mx-auto max-w-700">
                                                Micraft MES production monitoring software integrates seamlessly with your factory&apos;s digital pulse, providing a unified manufacturing execution environment for real-time shop floor production tracking.
                                            </p>
                                        </div>

                                        {/* Tier 2: Inline Integration Cards */}
                                        <div className="row g-4 mb-5">
                                            {[
                                                { title: "Visibility", desc: "Live production monitoring across all factory floors.", icon: "fas fa-desktop", color: "#3D72FC" },
                                                { title: "Utilization", desc: "Real-time OEE and machine downtime capture.", icon: "fas fa-robot", color: "#FA5674" },
                                                { title: "Inspection", desc: "Zero-defect tracking during production.", icon: "fas fa-microscope", color: "#00D261" },
                                                { title: "Packing", desc: "Final stage monitoring for delivery readiness.", icon: "fas fa-box-open", color: "#FFB01F" }
                                            ].map((node, i) => (
                                                <div key={i} className="col-lg-3 col-md-6">
                                                    <div className="p-3 p-lg-4 rounded-5 hover-translate-up transition-all h-100" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
                                                        <div className={`p-3 rounded-circle bg-opacity-10 mb-3 d-inline-flex`} style={{ backgroundColor: node.color + '20', color: node.color, border: '1px solid ' + node.color + '30' }}>
                                                            <i className={`${node.icon} h6 mb-0`}></i>
                                                        </div>
                                                        <h5 className="text-white h6 mb-2 fw-bold letter-spacing-1">{node.title}</h5>
                                                        <p className="text-white-50 extra-small mb-0 opacity-60 lh-base">{node.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Tier 3: Digital Core Hub (Now Bottom Banner) */}
                                        <div className="col-12 mt-4">
                                            <div className="p-3 p-xl-5 rounded-5 shadow-2xl position-relative overflow-hidden border-primary-glow" style={{ background: 'linear-gradient(135deg, #070B14 0%, #0F172A 100%)', minHeight: '300px' }}>
                                                <div className="position-absolute top-0 start-0 w-100 h-100 opacity-20 rotate-loop">
                                                    <Image src="/assets/images/solutions/networked-production-hub-v3.png" alt="Neural Core" fill style={{ objectFit: 'cover' }} className="rounded-5 x-small" />
                                                </div>
                                                <div className="position-relative z-1 text-center d-flex flex-column h-100 justify-content-center py-4">
                                                    <div className="p-4 rounded-circle border-white border-opacity-10 backdrop-blur-md glow-neon-blue mx-auto mb-4" style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        <i className="fas fa-network-wired fa-2x text-primary shadow-primary-light"></i>
                                                    </div>
                                                    <h4 className="text-white h5 mb-2 fw-900 letter-spacing-2 uppercase">Core Pulse Hub</h4>
                                                    <p className="text-white-50 extra-small opacity-60 max-w-500 mx-auto">Centralized Intelligence for Complete Shop Floor Control</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                {/* 10. Related Solutions - The Industry Ecosystem Carousel */}
                                <section id="related" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="section-title text-center mb-5">
                                            <div className="section-title__tagline-box mx-auto">
                                                <span className="section-title__tagline text-primary">Related Ecosystem</span>
                                            </div>
                                            <AnimatedTitle>
                                                <h3 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.2' }}>Explore Related <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Micraft MES Solutions</span></h3>
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
                                                    { title: "Shop Floor Visibility", img: "shop-floor-visibility-v2.png", link: "/solutions/shop-floor-visibility-software", desc: "Eliminate operational blind spots with live factory visibility." },
                                                    { title: "Factory Monitoring", img: "factory-monitoring.png", link: "/solutions/factory-production-monitoring-system", desc: "Comprehensive monitoring of integrated factory operations." },
                                                    { title: "Digital Dashboards", img: "digital-production-kpi-v2.png", link: "/solutions/digital-production-dashboard", desc: "Live performance analytics on localized dashboards." },
                                                    { title: "Machine Tracking", img: "machine-utilization-v2.png", link: "/solutions/machine-utilization-tracking", desc: "Sensor-based OEE and equipment productivity capture." }
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

                                {/* Closing main content divs clearly */}
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
                                    <h2 className="newsletter-one__title text-white mb-20" style={{ lineHeight: '1.0', fontSize: '32px', fontWeight: '700' }}>
                                        Monitor Your Factory <br />
                                        <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Production in Real Time</span>
                                    </h2>
                                </AnimatedTitle>
                                <p className="newsletter-one__text text-white mb-40 mx-auto" style={{ maxWidth: '750px', fontSize: '16px', opacity: 0.9 }}>
                                    Stop relying on delayed production reports and manual tracking methods. Gain complete visibility of your manufacturing operations with Micraft MES.
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
                .group-hover-scale { transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1); }
                .rounded-5 { border-radius: 32px !important; }
                .border-primary-glow { border: 1px solid rgba(61, 114, 252, 0.4); box-shadow: inset 0 0 20px rgba(61, 114, 252, 0.1); }
                .letter-spacing-2 { letter-spacing: 2px; }
                
                .responsive-h2 { font-size: 32px; }
                @media (max-width: 767px) {
                    .responsive-h2 { font-size: 24px !important; }
                    .display-5 { font-size: 28px !important; }
                    .h3, h3 { font-size: 22px !important; }
                    .section-title__title { line-height: 1.3 !important; padding-right: 15px; }
                }
                .backdrop-blur { backdrop-filter: blur(10px); }
                .text-gradient { background: linear-gradient(135deg, #3D72FC 0%, #00D2FF 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                .fw-900 { font-weight: 900 !important; }
                .fw-600 { font-weight: 600 !important; }
                .shadow-success { box-shadow: 0 0 15px rgba(40, 167, 69, 0.5); }
                .fa-15x { font-size: 11rem; }
                .text-primary-light { color: #5D8CFF; }
                .hover-translate-up { transition: transform 0.3s ease; }
                .hover-translate-up:hover { transform: translateY(-8px); }
                .hover-border-primary:hover { border-color: rgba(61, 114, 252, 0.5) !important; }
                .x-small { font-size: 0.85rem; line-height: 1.4; }
                .extra-small { font-size: 0.75rem; line-height: 1.3; }

                @keyframes sectionFadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .section-fade-in {
                    animation: sectionFadeIn 0.5s ease-out both;
                }
                .pulse-dot { width: 8px; height: 8px; border-radius: 50%; position: relative; }
                .pulse-dot::after { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 50%; background: inherit; animation: pulse 2s infinite; }
                @keyframes pulse { 0% { transform: scale(1); opacity: 0.8; } 100% { transform: scale(3); opacity: 0; } }
                .rotate-hint { transition: transform 0.8s ease; }
                .hover-translate-up:hover .rotate-hint { transform: rotate(1deg) scale(1.02); }
                
                @media (max-width: 991px) {
                    .services-details { padding: 40px 0; }
                    .services-details__left { 
                        position: relative !important; 
                        top: 0 !important;
                        margin-bottom: 30px;
                    }
                }

                /* Consolidated & New Component Styles */
                .data-pulse-path { stroke-dasharray: 40 1000; animation: rotate-pulse 5s linear infinite; }
                .cycle-node { transition: transform 0.3s ease; }
                .cycle-node:hover { transform: translate(-50%, -50%) scale(1.1); }
                .hover-glow:hover { background: rgba(255,255,255,0.06) !important; box-shadow: 0 0 25px rgba(61, 114, 252, 0.2) !important; }
                
                .capability-card { transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); }
                .capability-card:hover { border-color: rgba(139, 92, 246, 0.4) !important; box-shadow: 0 30px 60px rgba(0,0,0,0.6), 0 0 20px rgba(139, 92, 246, 0.1) !important; }
                .capability-card:hover .icon-container { transform: scale(1.1) rotate(5deg); }
                
                .industry-segment-card { transition: all 0.4s ease; }
                .industry-segment-card:hover { border-color: rgba(139, 92, 246, 0.3) !important; transform: translateY(-10px); box-shadow: 0 40px 80px -10px rgba(0,0,0,0.6); }
                
                /* Analytics Dashboard Styles */
                .analytics-card { transition: all 0.3s ease; }
                .analytics-card:hover { border-color: rgba(139, 92, 246, 0.3) !important; transform: scale(1.02); }
                .graph-path { stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: draw-line 3s ease-out forwards; animation-delay: 0.5s; }
                
                @keyframes rotate-pulse { from { stroke-dashoffset: 1131; } to { stroke-dashoffset: 0; } }
                @keyframes draw-line { to { stroke-dashoffset: 0; } }
                
                .roi-hub { transition: border-color 0.4s ease; }
                .roi-hub:hover { border-color: rgba(40,167,69,0.5) !important; }

                /* Operational Custom Circle Scaling */
                .operational-cycle { width: 500px; height: 500px; }
                @media (max-width: 991px) {
                    .operational-cycle { transform: scale(0.8); margin-top: -40px; margin-bottom: -40px; }
                }
                @media (max-width: 767px) {
                    .operational-cycle { transform: scale(0.65); margin-top: -80px; margin-bottom: -80px; }
                }
                @media (max-width: 480px) {
                    .operational-cycle { transform: scale(0.55); margin-top: -110px; margin-bottom: -110px; }
                }

                /* Ecosystem & Neural Hub Styles */
                .ecosystem-hub { transition: all 0.5s ease; position: relative; }
                .rotate-loop { animation: neural-rotate 60s linear infinite; }
                .rotate-loop-slow { animation: neural-rotate 120s linear infinite; }
                @keyframes neural-rotate { from { transform: rotate(0deg) scale(1.1); } to { transform: rotate(360deg) scale(1.1); } }
                
                .glow-neon-blue { box-shadow: 0 0 30px rgba(61, 114, 252, 0.4), 0 0 60px rgba(61, 114, 252, 0.2); background: rgba(0,0,0,0.4); }
                .backdrop-blur-md { backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
                
                .ecosystem-card { transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); border: 1px solid rgba(255,255,255,0.03) !important; position: relative; overflow: hidden; }
                .ecosystem-card:hover { border-color: rgba(61, 114, 252, 0.3) !important; transform: translateY(-10px); background: rgba(255,255,255,0.04) !important; box-shadow: 0 40px 80px -20px rgba(0,0,0,0.8); }
                .ecosystem-card:hover .icon-wrap { transform: scale(1.1) rotate(5deg); border-color: rgba(61, 114, 252, 0.4) !important; }

                /* Related Solutions Carousel Styles */
                .solutions-carousel-wrapper { position: relative; }
                .blog-one__single:hover .solution-card-img { transform: scale(1.1); }
                .solution-header a:hover { color: #FA5674 !important; }
                
                :global(.solutions-swiper .swiper-pagination-bullet) { background: #3D72FC; width: 10px; height: 10px; opacity: 0.3; transition: all 0.3s ease; }
                :global(.solutions-swiper .swiper-pagination-bullet-active) { background: #3D72FC; width: 24px; border-radius: 5px; opacity: 1; }
                
                :global(.solutions-swiper .swiper-button-next),
                :global(.solutions-swiper .swiper-button-prev) { 
                    color: #fff; 
                    background: rgba(255,255,255,0.05); 
                    width: 44px; 
                    height: 44px; 
                    border-radius: 50%; 
                    border: 1px solid rgba(255,255,255,0.1);
                    backdrop-filter: blur(5px);
                    transition: all 0.3s ease;
                }
                :global(.solutions-swiper .swiper-button-next:after),
                :global(.solutions-swiper .swiper-button-prev:after) { font-size: 16px; font-weight: 800; }
                :global(.solutions-swiper .swiper-button-next:hover),
                :global(.solutions-swiper .swiper-button-prev:hover) { background: #3D72FC; border-color: #3D72FC; }
                
                @media (max-width: 767px) {
                    :global(.solutions-swiper .swiper-button-next),
                    :global(.solutions-swiper .swiper-button-prev) { display: none; }
                }
            `}} />

        </Layout>
    )
}
