"use client"
import { useState, useEffect } from 'react'
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
    { id: "hero", label: "Dashboard Overview", icon: "fas fa-tachometer-alt" },
    { id: "problems", label: "Visibility Gaps", icon: "fas fa-eye-slash" },
    { id: "how-it-works", label: "Dashboard Logic", icon: "fas fa-project-diagram" },
    { id: "capabilities", label: "KPI Capabilities", icon: "fas fa-chart-pie" },
    { id: "benefits", label: "Operational Gains", icon: "fas fa-gem" },
    { id: "roles", label: "Role-Based Views", icon: "fas fa-users-cog" },
    { id: "industries", label: "Industry Focus", icon: "fas fa-industry" },
    { id: "integration", label: "System Integration", icon: "fas fa-link" },
    { id: "why-micraft", label: "The Micraft Edge", icon: "fas fa-star" },
    { id: "related", label: "Related Solutions", icon: "fas fa-th-large" },
]

export default function DigitalDashboardPage() {
    const [activeSection, setActiveSection] = useState("hero")

    useEffect(() => {
        // Metadata is now managed via layout.tsx
    }, []);

    const scrollTo = (id: string) => {
        setActiveSection(id);
        setTimeout(() => {
            const contentArea = document.getElementById('main-content-area');
            if (contentArea) {
                const headerOffset = 120;
                const elementPosition = contentArea.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        }, 50);
    }

    return (
        <Layout headerStyle={1} footerStyle={2}>
            <Breadcrumb breadcrumbTitle="Digital Production Dashboard" />

            <section className="services-details pt-0" style={{ background: '#02050A', minHeight: '100vh', paddingBottom: '0' }}>
                <div className="services-details__shape-1"></div>
                <div className="services-details__shape-2">
                    <Image src="/assets/images/shapes/services-details-shape-2.png" alt="Shape" width={1920} height={1332} style={{ opacity: 0.1 }} priority />
                </div>
                <div className="container-fluid px-xl-5">
                    <div className="row g-4 align-items-start pt-0">
                        {/* Sidebar */}
                        <div className="col-xl-3 col-lg-4 order-1 sticky-lg-top mt-1 mt-lg-0" style={{ height: 'fit-content', zIndex: 10 }}>
                            <div className="services-details__left">
                                <div className="services-details__services-list-box p-0 overflow-hidden mb-4 mb-lg-0" style={{ background: 'rgba(61, 114, 252, 0.03)', border: '1px solid rgba(61, 114, 252, 0.1)' }}>
                                    <div className="p-4" style={{ background: 'linear-gradient(90deg, rgba(61, 114, 252, 0.1), transparent)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <h3 style={{ fontSize: '14px', margin: 0, color: '#3D72FC', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '900' }}>
                                            Dashboard Menu
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
                        <div className="col-xl-9 col-lg-8 order-2 mt-5 mt-lg-0 pt-0">
                            <div id="main-content-area" key={activeSection} className="services-details__right mt-0 pt-0 pb-5 pe-xl-5">
                                {/* 1. Hero Section */}
                                {activeSection === 'hero' && (
                                    <section id="hero" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="row g-4 align-items-center">
                                            <div className="col-lg-12">
                                                <div className="section-title text-left mb-4">
                                                    <div className="section-title__tagline-box">
                                                        <span className="section-title__tagline text-primary">REAL-TIME VISUAL INTELLIGENCE</span>
                                                    </div>
                                                    <AnimatedTitle>
                                                        <h1 className="section-title__title title-animation mb-4" style={{ lineHeight: '1.0', fontSize: '48px' }}>
                                                            Digital Production <span style={{ color: '#FFD25D', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Dashboards</span> for Factory Visibility
                                                        </h1>
                                                    </AnimatedTitle>
                                                </div>
                                                <div className="mt-4 pe-xl-5">
                                                    <h4 className="text-white mb-4 fw-medium" style={{ fontSize: '22px', lineHeight: '1.6', borderLeft: '4px solid #3D72FC', paddingLeft: '20px', opacity: 0.9 }}>
                                                        Transform your operations with live factory dashboards. Gain instant visibility of performance and output from anywhere.
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="col-12 mt-2">
                                                <div className="position-relative p-2 rounded-5 overflow-hidden shadow-2xl border-primary-glow mb-5" style={{ minHeight: '400px' }}>
                                                    <Image src="/assets/images/solutions/digital-production-dashboard-hero-v3.png" alt="Digital Production Dashboard" fill style={{ objectFit: 'cover' }} className="rounded-4" priority />
                                                    <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-gradient-to-t from-dark to-transparent">
                                                        <div className="p-2 rounded-3 bg-primary bg-opacity-20 backdrop-blur-md border border-white border-opacity-10 d-inline-flex align-items-center gap-2">
                                                            <div className="pulse-dot bg-info" style={{ background: '#0dcaf0' }}></div>
                                                            <span className="text-white fw-bold extra-small letter-spacing-1">GLOBAL KPI DATA SYNC ACTIVE</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-flex flex-wrap gap-4">
                                                    <Link href="/book-demo" className="thm-btn rounded-pill shadow-primary-light" style={{ fontSize: '14px', padding: '12px 30px' }}>Schedule a Live Demo</Link>
                                                    <Link href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollTo('how-it-works'); }} className="btn btn-outline-light rounded-pill fw-bold border-2" style={{ fontSize: '14px', padding: '12px 28px' }}>Explore Interface</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                )}

                                {/* 2. Problems Section */}
                                {activeSection === 'problems' && (
                                    <section id="problems" className="pt-0 pb-4 section-anchor section-fade-in">
                                         <div className="section-title text-left mb-4">
                                            <div className="section-title__tagline-box">
                                                <span className="section-title__tagline" style={{ color: '#FA5674' }}>Pain Points</span>
                                            </div>
                                            <AnimatedTitle>
                                                <h3 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.1' }}>Challenges in Gaining <span style={{ color: '#FFD25D', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Production Visibility</span></h3>
                                            </AnimatedTitle>
                                        </div>
                                        <p className="text-white-50 mb-3 opacity-80 pe-xl-5" style={{ fontSize: '16px' }}>Without real-time digital dashboards, manufacturers often struggle with fragmented data and delayed reporting:</p>
                                        <div className="row g-4 mt-2">
                                            {[
                                                { text: "Manual Data Silos", sub: "Information trapped in paper registers and disjointed excels.", icon: "fas fa-database", color: "#6065D4", label: "CRITICAL" },
                                                { text: "Late Reporting", sub: "Production status is only known after shifts or days later.", icon: "fas fa-clock", color: "#FA5674", label: "DELAYED" },
                                                { text: "Inaccurate KPIs", sub: "Manual calculation errors lead to faulty performance metrics.", icon: "fas fa-exclamation-circle", color: "#FFD25D", label: "DATA GAP" },
                                                { text: "Reactive Decisions", sub: "Issues are only fixed after high-cost delays have occurred.", icon: "fas fa-fire-extinguisher", color: "#00D261", label: "RISK" }
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
                                    </section>
                                )}

                                {/* 3. How it Works */}
                                {activeSection === 'how-it-works' && (
                                    <section id="how-it-works" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="p-4 p-xl-5 rounded-5 shadow-2xl position-relative overflow-hidden" 
                                             style={{ background: 'rgba(11, 15, 25, 0.4)', border: '1px solid rgba(61, 114, 252, 0.1)', backdropFilter: 'blur(10px)' }}>
                                            <div className="section-title text-center mb-5">
                                                <span className="section-title__tagline text-primary">REAL-TIME DATA HUB</span>
                                                <AnimatedTitle>
                                                    <h3 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.1' }}>How Micraft MES <span style={{ color: '#FFD25D', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Dashboards Work</span></h3>
                                                </AnimatedTitle>
                                            </div>
                                            <div className="row g-4 align-items-center mb-5">
                                                <div className="col-xl-6">
                                                    <div className="position-relative p-2 rounded-5 overflow-hidden shadow-2xl border-primary-glow" style={{ height: '400px' }}>
                                                        <Image src="/assets/images/solutions/digital-dispatch-interface-v3.png" alt="Digital Dispatch" fill style={{ objectFit: 'cover' }} className="scale-hover rounded-4 rotate-hint" />
                                                        <div className="position-absolute bottom-0 start-0 p-4 w-100 bg-gradient-to-t from-dark to-transparent">
                                                            <span className="text-white fw-900 letter-spacing-2 p-2 bg-dark bg-opacity-60 backdrop-blur-sm rounded" style={{ fontSize: '10px' }}>LOGISTICS CONTROL INTERFACE</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <p className="text-white-50 mb-4 opacity-80 pe-xl-5" style={{ fontSize: '15px', lineHeight: '1.8' }}>
                                                        The Digital Dashboard serves as the central brain of your factory. It aggregates fragmented data into high-fidelity visual widgets, allowing for real-time monitoring of OEE, production targets, and machine health through a unified &apos;Command Center&apos; logic.
                                                    </p>
                                                    <p className="text-white fw-bold extra-small letter-spacing-1 text-primary"><i className="fas fa-check-circle me-2"></i> SUB-SECOND DATA LATENCY</p>
                                                </div>
                                            </div>
                                            <div className="row g-4">
                                                {[
                                                    { t: "Data Integration", d: "Aggregates information from machines, operators, and sensors into one stream.", i: "fas fa-project-diagram" },
                                                    { t: "Live Processing", d: "Processes data instantly to ensure sub-second latency on all visual widgets.", i: "fas fa-bolt" },
                                                    { t: "Visual Analytics", d: "Converts raw numbers into intuitive charts, heatmaps, and trend indicators.", i: "fas fa-chart-line" }
                                                ].map((box, i) => (
                                                    <div key={i} className="col-lg-4">
                                                        <div className="text-center p-4 rounded-4 h-100" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                            <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '50px', height: '50px' }}>
                                                                <i className={`${box.i} text-primary fs-5`}></i>
                                                            </div>
                                                            <h4 className="text-white h6 mb-2 fw-bold">{box.t}</h4>
                                                            <p className="text-white-50 extra-small mb-0 opacity-60">{box.d}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </section>
                                )}

                                {/* 4. Capabilities */}
                                {activeSection === 'capabilities' && (
                                    <section id="capabilities" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="section-title text-left mb-5">
                                            <span className="section-title__tagline text-primary">KPI ENGINE</span>
                                            <AnimatedTitle>
                                                <h2 className="section-title__title title-animation mb-4" style={{ lineHeight: '1.1' }}>Advanced <span style={{ color: '#FFD25D', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Dashboard Capabilities</span></h2>
                                            </AnimatedTitle>
                                        </div>
                                        <div className="row g-4">
                                            {[
                                                { t: "Live Machine Status", d: "Real-time visualization of machine up/down status.", i: "fas fa-desktop", g: "linear-gradient(135deg, #3D72FC 0%, #6065D4 100%)" },
                                                { t: "Work Order Progress", d: "Track each job across multi-stage workflows.", i: "fas fa-tasks", g: "#3D72FC" },
                                                { t: "OEE Performance Heatmaps", d: "Identify performance trends across different shifts.", i: "fas fa-layer-group", g: "#00D261" },
                                                { t: "Quality Reject Counters", d: "Instant visibility on inspection failures and scrap.", i: "fas fa-times-circle", g: "#FA5674" },
                                                { t: "Operator Efficiency Tags", d: "Visualize production output by operator or cell.", i: "fas fa-user-tag", g: "#FFB01F" },
                                                { t: "Custom KPI Widgets", d: "Drag-and-drop widgets for specific factory goals.", i: "fas fa-th-large", g: "#00D2FF" }
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
                                )}

                                {/* 5. Benefits */}
                                {activeSection === 'benefits' && (
                                    <section id="benefits" className="pt-0 pb-4 section-anchor section-fade-in">
                                         <div className="p-xl-5 p-4 rounded-5 position-relative overflow-hidden shadow-2xl" style={{ background: 'rgba(7, 11, 20, 0.95)', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                                             <div className="section-title text-center mb-5">
                                                 <span className="section-title__tagline text-primary">STRATEGIC BENEFITS</span>
                                                 <AnimatedTitle>
                                                     <h2 className="section-title__title title-animation mb-3" style={{ lineHeight: '1.1' }}>Factory <span style={{ color: '#FFD25D', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Performance Gains</span></h2>
                                                 </AnimatedTitle>
                                             </div>
                                             <div className="row g-5 align-items-center">
                                                 <div className="col-lg-7">
                                                     <div className="row g-4">
                                                         {[
                                                             { t: "Faster Response Time", d: "Reduce reaction time to downtime incidents by 50%.", i: "fas fa-bolt", c1: "#3D72FC", c2: "#6065D4" },
                                                             { t: "Data-Driven Culture", d: "Empower every level of management with factual insights.", i: "fas fa-chart-line", c1: "#00D261", c2: "#3D72FC" },
                                                             { t: "Reduced Overtime", d: "Optimize production planning based on real-time capacity.", i: "fas fa-hourglass-end", c1: "#FA5674", c2: "#FFB01F" },
                                                             { t: "Increased Yield", d: "Early detection of scrap prevents serial defects.", i: "fas fa-chart-pie", c1: "#00D2FF", c2: "#3D72FC" }
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
                                                         <Image src="/assets/images/solutions/kpi-hub-v3.png" alt="KPI Hub" fill style={{ objectFit: 'cover' }} className="scale-hover" />
                                                         <div className="position-absolute bottom-0 start-0 p-5 bg-gradient-to-t from-dark to-transparent w-100 text-left">
                                                            <div className="p-3 rounded-4 backdrop-blur-md bg-dark bg-opacity-60 border border-white border-opacity-10 shadow-2xl">
                                                                <h4 className="text-white fw-bold mb-0" style={{ fontSize: '14px' }}>Global Production Pulse Dashboard</h4>
                                                            </div>
                                                         </div>
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                    </section>
                                )}

                                {/* 6. Role-Based Views */}
                                {activeSection === 'roles' && (
                                     <section id="roles" className="pt-0 pb-4 section-anchor section-fade-in">
                                         <div className="section-title text-left mb-5">
                                            <span className="section-title__tagline text-primary">PERSONA-DRIVEN VIEWS</span>
                                            <AnimatedTitle>
                                                <h3 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.1' }}>Dashboards for <span style={{ color: '#FFD25D', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Every Role</span></h3>
                                            </AnimatedTitle>
                                        </div>
                                        <div className="row g-4">
                                            {[
                                                { role: "Plant Managers", focus: "OEE, Shift Output, Bottleneck Analysis", icon: "fas fa-user-tie" },
                                                { role: "Production Supervisors", focus: "Live Yield, Machine Uptime, Operator Logs", icon: "fas fa-user-shield" },
                                                { role: "Quality Teams", focus: "Rejection Rates, Inspection Backlogs, Compliance", icon: "fas fa-microscope" },
                                                { role: "SME Owners", focus: "Order Fulfillment, Costs, Annual Growth Progress", icon: "fas fa-briefcase" }
                                            ].map((role, i) => (
                                                <div key={i} className="col-md-6">
                                                    <div className="p-4 rounded-5 d-flex align-items-center gap-4 h-100" style={{ background: '#0F172A', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                        <div className="icon-box p-3 rounded-circle" style={{ background: 'rgba(61, 114, 252, 0.1)', color: '#3D72FC' }}>
                                                            <i className={`${role.icon} fs-4`}></i>
                                                        </div>
                                                        <div>
                                                            <h4 className="text-white h6 mb-1 fw-bold">{role.role}</h4>
                                                            <p className="text-white-50 extra-small opacity-60 mb-0">{role.focus}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                     </section>
                                )}

                                {/* 7. Industries */}
                                {activeSection === 'industries' && (
                                    <section id="industries" className="pt-0 pb-4 section-anchor section-fade-in">
                                         <div className="section-title text-left mb-5">
                                            <span className="section-title__tagline text-primary">VERSATILE APPLICATIONS</span>
                                            <AnimatedTitle>
                                                <h3 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.1' }}>Optimizing <span style={{ color: '#FFD25D', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Global Operations</span></h3>
                                            </AnimatedTitle>
                                        </div>
                                        <div className="row g-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
                                            {[
                                                { t: "CNC Machining", i: "fas fa-microchip" },
                                                { t: "Plastic Injection", i: "fas fa-flask" },
                                                { t: "Auto Parts Mfg", i: "fas fa-car-side" },
                                                { t: "Electronics Assembly", i: "fas fa-plug" },
                                                { t: "Packaging Units", i: "fas fa-box" },
                                                { t: "Fabrication Shops", i: "fas fa-hammer" }
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
                                )}

                                {/* 8. Integration */}
                                {activeSection === 'integration' && (
                                     <section id="integration" className="pt-0 pb-4 section-anchor section-fade-in">
                                         <div className="p-4 p-xl-5 rounded-5 border-primary-glow bg-dark shadow-2xl">
                                             <div className="row g-4 align-items-center">
                                                 <div className="col-lg-7">
                                                     <h4 className="text-white mb-4">Unified Industrial Intelligence</h4>
                                                     <p className="text-white-50 mb-4">The Digital Dashboard is the brain that connects all Micraft MES modules for a single source of truth.</p>
                                                     <div className="row g-3">
                                                         {[
                                                            { t: "Real-Time Tracking", l: "/solutions/production-tracking-software" },
                                                            { t: "Machine Utilization", l: "/solutions/machine-utilization-tracking" },
                                                            { t: "Quality Management", l: "/solutions/quality-inspection-tracking" },
                                                            { t: "Shop Floor Visibility", l: "/solutions/factory-production-monitoring-system" }
                                                         ].map((link, i) => (
                                                             <div key={i} className="col-md-6">
                                                                 <Link href={link.l} className="p-3 rounded-4 d-flex align-items-center justify-content-between text-decoration-none transition-all hover-translate-right" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                                                                    <span className="text-white fw-bold" style={{ fontSize: '14px' }}>{link.t}</span>
                                                                    <i className="fas fa-arrow-right text-primary" style={{ fontSize: '12px' }}></i>
                                                                 </Link>
                                                             </div>
                                                         ))}
                                                     </div>
                                                 </div>
                                                 <div className="col-lg-5 text-center">
                                                     <div className="position-relative p-2 rounded-5 overflow-hidden shadow-2xl border-primary-glow" style={{ minHeight: '300px' }}>
                                                          <Image src="/assets/images/solutions/manager-dashboard-hero-v3.png" alt="Integration View" fill style={{ objectFit: 'cover' }} />
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                     </section>
                                )}

                                {/* 9. Why Micraft */}
                                {activeSection === 'why-micraft' && (
                                    <section id="why-micraft" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="p-4 p-xl-5 rounded-5 shadow-2xl" style={{ background: 'rgba(15, 23, 42, 0.4)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                                            <div className="row g-4 justify-content-center">
                                                {[
                                                    { t: "Sub-Second Latency", d: "Experience true live data without manual refreshing.", i: "fas fa-tachometer-alt" },
                                                    { t: "SME Focused", d: "Designed for the practical needs of smaller factories.", i: "fas fa-industry" },
                                                    { t: "Mobile Native", d: "Access deep production insights from your home or while traveling.", i: "fas fa-mobile-alt" }
                                                ].map((adv, i) => (
                                                    <div key={i} className="col-md-4">
                                                        <div className="text-center p-4 rounded-4 h-100 transition-all hover-translate-up" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                            <div className="bg-white shadow-lg rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '70px', height: '70px' }}>
                                                                <i className={`${adv.i} text-primary fs-3`}></i>
                                                            </div>
                                                            <h4 className="text-white h6 mb-2 fw-bold" style={{ fontSize: '15px' }}>{adv.t}</h4>
                                                            <p className="text-white-50 extra-small mb-0 opacity-70" style={{ fontSize: '12px', lineHeight: '1.6' }}>{adv.d}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </section>
                                )}

                                 {/* 10. Related Solutions - The Industry Ecosystem Carousel */}
                                 {activeSection === 'related' && (
                                     <section id="related" className="pt-0 pb-4 section-anchor section-fade-in">
                                         <div className="section-title text-center mb-5">
                                             <div className="section-title__tagline-box mx-auto">
                                                 <span className="section-title__tagline text-primary">Related Ecosystem</span>
                                             </div>
                                             <AnimatedTitle>
                                                 <h3 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.1' }}>Explore Related <span style={{ color: '#FFD25D', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Micraft MES Solutions</span></h3>
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
                                 )}

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
                                        <span style={{ color: '#FFD25D', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Production in Real Time</span>
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
                .services-details { overflow: hidden; position: relative; }
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