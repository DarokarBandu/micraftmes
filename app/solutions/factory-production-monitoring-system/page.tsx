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
    { id: "hero", label: "Monitoring Overview", icon: "fas fa-desktop" },
    { id: "problems", label: "Visibility Gaps", icon: "fas fa-exclamation-triangle" },
    { id: "what-is", label: "Digital Definition", icon: "fas fa-layer-group" },
    { id: "how-it-works", label: "Monitoring Logic", icon: "fas fa-sync" },
    { id: "ecosystem", label: "Unified Ecosystem", icon: "fas fa-sitemap" },
    { id: "capabilities", label: "Integrated Capabilities", icon: "fas fa-cogs" },
    { id: "key-features", label: "Core Features", icon: "fas fa-tachometer-alt" },
    { id: "benefits", label: "Operational Gains", icon: "fas fa-gem" },
    { id: "industries", label: "Industry Focus", icon: "fas fa-industry" },
    { id: "integration", label: "System Integration", icon: "fas fa-link" },
    { id: "why-micraft", label: "The Micraft Edge", icon: "fas fa-star" },
    { id: "related", label: "Related Solutions", icon: "fas fa-th-large" },
]

export default function FactoryMonitoringPage() {
    const { activeId: activeSection, scrollTo } = useScrollSpy(sections.map(s => s.id));

    return (
        <Layout headerStyle={1} footerStyle={2}>

            <Breadcrumb breadcrumbTitle="Factory Production Monitoring System" />

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

                        {/* Main Content */}
                        <div className="col-xl-9 col-lg-8 order-2 pt-0">
                            <div id="main-content-area" suppressHydrationWarning className="services-details__right mt-0 pt-0 pb-5 pe-xl-5">

                                {/* 1. Hero Section */}
                                <section id="hero" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="row g-4 align-items-center">
                                            <div className="col-lg-12">
                                                <div className="section-title text-left mb-4">
                                                    <div className="section-title__tagline-box">
                                                        <i className="fas fa-microchip text-primary"></i>
                                                        <span className="section-title__tagline text-primary">REAL-TIME MANUFACTURING VISIBILITY</span>
                                                    </div>
                                                    <AnimatedTitle>
                                                        <h1 className="section-title__title title-animation mb-4" style={{ lineHeight: '1.0', fontSize: '48px' }}>
                                                            Factory Production Monitoring System for <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Real-Time Manufacturing Visibility</span>
                                                        </h1>
                                                    </AnimatedTitle>
                                                </div>
                                                <div className="mt-4 pe-xl-5">
                                                    <h2 className="text-white mb-4 fw-medium" style={{ fontSize: '22px', lineHeight: '1.6', borderLeft: '4px solid #3D72FC', paddingLeft: '20px', opacity: 0.9 }}>
                                                        Monitor your entire factory production in real time. Track machine activity, production output, work order progress, inspection results, and dispatch readiness from a single digital platform.
                                                    </h2>
                                                    <p className="text-white-50 mb-0 opacity-80" style={{ fontSize: '16px', lineHeight: '1.8' }}>
                                                        Micraft MES factory production monitoring system enables manufacturers to gain complete visibility of shop floor operations, helping plant managers identify bottlenecks, track production performance, and improve operational efficiency.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-12 mt-2">
                                                <div className="position-relative p-2 rounded-5 overflow-hidden shadow-2xl border-primary-glow mb-5" style={{ minHeight: '400px' }}>
                                                    <Image src="/assets/images/solutions/factory-monitoring-hero-1775021228915.png" alt="Factory Production Monitoring" fill style={{ objectFit: 'cover' }} className="rounded-4" priority />
                                                    <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-gradient-to-t from-dark to-transparent">
                                                        <div className="p-2 rounded-3 bg-primary bg-opacity-20 backdrop-blur-md border border-white border-opacity-10 d-inline-flex align-items-center gap-2">
                                                            <div className="pulse-dot bg-success" style={{ background: '#00D261' }}></div>
                                                            <span className="text-white fw-bold extra-small letter-spacing-1">GLOBAL COMMAND CENTER ACTIVE</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-flex flex-wrap gap-4">
                                                    <Link href="/book-demo" className="thm-btn rounded-pill shadow-primary-light" style={{ fontSize: '14px', padding: '12px 30px' }}>
                                                        Schedule a Live Demo <i className="fas fa-calendar-check ms-2"></i>
                                                    </Link>
                                                    <Link href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollTo('how-it-works'); }} className="btn btn-outline-light rounded-pill fw-bold border-2" style={{ fontSize: '14px', padding: '12px 28px' }}>
                                                        See How Factory Monitoring Works <i className="fas fa-chevron-down ms-2 opacity-50"></i>
                                                    </Link>
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
                                                <h3 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.1' }}>Why Many Factories Lack <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Real-Time Production</span> Visibility</h3>
                                            </AnimatedTitle>
                                        </div>
                                        <p className="text-white-50 mb-3 opacity-80 pe-xl-5" style={{ fontSize: '16px' }}>In many manufacturing companies, production monitoring still relies on: manual registers, Excel spreadsheets, verbal updates from supervisors, and end-of-day production reports.</p>

                                        <div className="row g-4 mt-2">
                                            {[
                                                { text: "Delayed production updates", sub: "Information is recorded on paper and entered into systems late.", icon: "fas fa-clock", color: "#FA5674", label: "LATENCY" },
                                                { text: "Difficulty identifying bottlenecks", sub: "Lack of live visibility makes it hard to see where production stops.", icon: "fas fa-exclamation-triangle", color: "#6065D4", label: "OPACITY" },
                                                { text: "Lack of machine performance visibility", sub: "Machine idle time and output aren't tracked accurately in real-time.", icon: "fas fa-robot", color: "#00D261", label: "ASSET GAP" },
                                                { text: "Inefficient production coordination", sub: "Communication gaps lead to mismatched schedules and delay.", icon: "fas fa-project-diagram", color: "#7366CA", label: "FRICTION" },
                                                { text: "Inaccurate reporting", sub: "Manual records often lead to errors in critical production data.", icon: "fas fa-file-invoice", color: "#3D72FC", label: "DATA RISK" }
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
                                        <div className="mt-4 pe-xl-5">
                                            <p className="text-white-50 mb-0 opacity-80" style={{ fontSize: '16px' }}>Without a proper monitoring system, factory managers often discover production issues only after delays occur. A digital production monitoring system solves this by providing live visibility of manufacturing operations.</p>
                                        </div>
                                    </section>

                                {/* 3. What is Section */}
                                <section id="what-is" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="p-4 p-xl-5 rounded-5 shadow-2xl position-relative overflow-hidden" 
                                             style={{ background: 'rgba(11, 15, 25, 0.4)', border: '1px solid rgba(61, 114, 252, 0.1)', backdropFilter: 'blur(10px)' }}>
                                            
                                            <div className="section-title text-center mb-5">
                                                <div className="section-title__tagline-box mx-auto">
                                                    <span className="section-title__tagline text-primary">CORE DEFINITION</span>
                                                </div>
                                                <AnimatedTitle>
                                                    <h3 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.1' }}>What is a Factory Production <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Monitoring System?</span></h3>
                                                </AnimatedTitle>
                                                <p className="text-white opacity-80 mx-auto mt-4 px-xl-5" style={{ maxWidth: '900px', fontSize: '15px' }}>
                                                    A factory production monitoring system is a digital platform that allows manufacturers to track and analyze production performance in real time across the entire factory.
                                                </p>
                                            </div>

                                            {/* Top Visual Showcase: Side-by-Side Images */}
                                            <div className="row g-4 mb-5 align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="position-relative rounded-5 overflow-hidden shadow-2xl border-primary-glow" style={{ height: '400px' }}>
                                                        <Image src="/assets/images/solutions/factory-command-center-interface-1775021040955.png" alt="Command Center Interface" fill style={{ objectFit: 'cover' }} className="scale-hover rotate-hint rounded-4" />
                                                        <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-gradient-to-t from-dark to-transparent">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="fw-900 letter-spacing-2 text-white" style={{ fontSize: '10px' }}>CENTRAL OVERSIGHT HUB</span>
                                                                <div className="pulse-dot bg-primary" style={{ background: '#3D72FC' }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <h4 className="text-white mb-4">Unified Industrial Perspective</h4>
                                                    <p className="text-white-50 mb-4 opacity-80" style={{ fontSize: '15px' }}>
                                                        The factory production monitoring system isn&apos;t just about data collection; it&apos;s about context. By merging machine-level IoT pulses with human-led operational updates, Micraft MES creates a 360-degree view of your entire production lifecycle.
                                                    </p>
                                                    <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                                                        <li className="text-white extra-small"><i className="fas fa-check text-primary me-2"></i> Sub-second status synchronization</li>
                                                        <li className="text-white extra-small"><i className="fas fa-check text-primary me-2"></i> Historical trend correlation</li>
                                                        <li className="text-white extra-small"><i className="fas fa-check text-primary me-2"></i> Role-based analytical views</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Feature Grid: 3-Column Layout */}
                                            <div className="row g-4">
                                                {[
                                                    { t: "Production Output", d: "Monitor production quantities against targets in real time per shift.", icon: "fas fa-box-open", gradient: "linear-gradient(135deg, #3D72FC 0%, #00D2FF 100%)" },
                                                    { t: "Machine Utilization", d: "Track machine uptime, idle time, and availability for maximum ROI.", icon: "fas fa-robot", gradient: "linear-gradient(135deg, #00D261 0%, #3D72FC 100%)" },
                                                    { t: "Work Order Status", d: "Real-time visibility into the progress of every manufacturing job.", icon: "fas fa-tasks", gradient: "linear-gradient(135deg, #FFB01F 0%, #FA5674 100%)" },
                                                    { t: "Operator Activity", d: "Monitor operator efficiency, manual operations, and shift yield.", icon: "fas fa-user-clock", gradient: "linear-gradient(135deg, #8B5CF6 0%, #3D72FC 100%)" },
                                                    { t: "Quality Inspection", d: "Digital recording of inspection results and rejection trends live.", icon: "fas fa-check-double", gradient: "linear-gradient(135deg, #FA5674 0%, #FFB01F 100%)" },
                                                    { t: "Packing & Dispatch", d: "Ensure production completion aligns with dispatch schedules.", icon: "fas fa-truck-loading", gradient: "linear-gradient(135deg, #00D2FF 0%, #3D72FC 100%)" }
                                                ].map((box, i) => (
                                                    <div key={i} className="col-lg-4 col-md-6">
                                                        <div className="d-flex flex-column align-items-center text-center gap-3 p-4 rounded-5 transition-all hover-translate-up h-100" 
                                                             style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
                                                            
                                                            <div className="icon-wrap d-flex align-items-center justify-content-center shadow-lg rounded-circle" 
                                                                 style={{ background: box.gradient, width: '60px', height: '60px' }}>
                                                                <i className={`${box.icon} text-white fs-4`}></i>
                                                            </div>
                                                            <div className="px-1">
                                                                <h3 className="text-white mb-2 fw-900 letter-spacing-1" style={{ fontSize: '15px' }}>{box.t}</h3>
                                                                <p className="text-white-50 mb-0 opacity-70" style={{ fontSize: '12px', lineHeight: '1.6' }}>
                                                                    {box.d}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </section>

                                {/* 4. How it Works Section */}
                                <section id="how-it-works" className="py-2 section-anchor section-fade-in mb-4">
                                        <div className="px-4 px-xl-5 py-4 rounded-5 shadow-2xl position-relative overflow-hidden" 
                                             style={{ background: 'rgba(7, 10, 15, 0.6)', border: '1px solid rgba(61, 114, 252, 0.2)', backdropFilter: 'blur(20px)' }}>
                                             
                                             <div className="section-title text-center mb-4">
                                                 <span className="text-uppercase letter-spacing-5 text-primary fw-900 mb-2 d-block" style={{ fontSize: '10px' }}>MONITORING PROCESS FLOW</span>
                                                 <AnimatedTitle>
                                                     <h2 className="section-title__title title-animation mb-3" style={{ lineHeight: '1.1', fontSize: '28px' }}>How Micraft MES Provides <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Real-Time Factory Monitoring</span></h2>
                                                 </AnimatedTitle>
                                                 <div className="intro-text mx-auto" style={{ maxWidth: '900px' }}>
                                                     <p className="text-white opacity-90 fw-bold mb-2" style={{ fontSize: '15px' }}>Micraft MES connects shop floor operations with digital monitoring dashboards. Production data is captured at each stage of the manufacturing process and displayed in live dashboards accessible to supervisors and management teams.
                                                     </p>
                                                 </div>
                                             </div>

                                             <div className="diagram-wrapper position-relative py-3">
                                                 {/* The Connection Pipe */}
                                                 <div className="position-absolute d-none d-lg-block" style={{ top: '50%', left: '5%', right: '5%', height: '4px', background: 'rgba(61, 114, 252, 0.1)', borderRadius: '10px', transform: 'translateY(-50%)', overflow: 'hidden' }}>
                                                     <div className="position-absolute h-100 w-25 bg-primary" 
                                                          style={{ 
                                                              background: 'linear-gradient(to right, transparent, #3D72FC, transparent)',
                                                              animation: 'pulseLine 4s infinite linear',
                                                              boxShadow: '0 0 15px #3D72FC'
                                                          }}></div>
                                                 </div>

                                                 <div className="row g-4 justify-content-between position-relative">
                                                     {[
                                                         { t: "Order Creation", d: "Orders created in system.", i: "fas fa-file-invoice", g: "#3D72FC" },
                                                         { t: "Progress Updates", d: "Operators update stages.", i: "fas fa-sync", g: "#00D261" },
                                                         { t: "Live Recording", d: "Machine activity recorded.", i: "fas fa-robot", g: "#FFB01F" },
                                                         { t: "Digital Inspection", d: "Inspection results logged.", i: "fas fa-search-plus", g: "#FA5674" },
                                                         { t: "Packing & Dispatch", d: "Updates tracked live.", i: "fas fa-truck-loading", g: "#8B5CF6" }
                                                     ].map((node, index) => (
                                                         <div key={index} className="col-lg col-md-4 col-sm-6">
                                                             <div className="node-item text-center px-2">
                                                                 <div className="position-relative mb-3 mx-auto" style={{ width: '80px', height: '80px' }}>
                                                                     <div className="position-absolute top-50 start-50 translate-middle rounded-circle border border-primary border-opacity-30" 
                                                                          style={{ width: '120%', height: '120%', animation: 'spin 10s infinite linear' }}></div>
                                                                     
                                                                     <div className="position-absolute top-50 start-50 translate-middle rounded-circle shadow-2xl d-flex align-items-center justify-content-center transition-all bg-dark hover-translate-up" 
                                                                          style={{ width: '100%', height: '100%', border: `1px solid ${node.g}40`, backdropFilter: 'blur(10px)', zIndex: 2 }}>
                                                                         <i className={`${node.i} fs-4`} style={{ color: node.g }}></i>
                                                                     </div>

                                                                     <div className="position-absolute top-0 end-0 bg-dark rounded-circle border border-white border-opacity-20 d-flex align-items-center justify-content-center fw-900 shadow-lg text-white" 
                                                                          style={{ width: '22px', height: '22px', fontSize: '8px', zIndex: 3, transform: 'translate(30%, -30%)' }}>
                                                                         0{index + 1}
                                                                     </div>
                                                                 </div>

                                                                 <div className="mt-2" style={{ position: 'relative', zIndex: 4 }}>
                                                                     <h4 className="text-white h6 mb-1 fw-900 letter-spacing-1" style={{ fontSize: '13px' }}>{node.t}</h4>
                                                                     <p className="text-white-50 opacity-70 mb-0" style={{ fontSize: '10px', lineHeight: '1.4' }}>{node.d}</p>
                                                                 </div>
                                                             </div>
                                                         </div>
                                                     ))}
                                                 </div>
                                             </div>

                                             <div className="mt-4 text-center px-4">
                                                 <div className="p-3 rounded-5 bg-primary bg-opacity-5 border border-primary border-opacity-10 d-inline-block shadow-lg">
                                                     <p className="text-white mb-0 fw-bold" style={{ fontSize: '13px' }}>
                                                         <i className="fas fa-chart-line text-primary me-2"></i>
                                                         Management dashboards display live metrics enabling quick decision-making.
                                                     </p>
                                                 </div>
                                             </div>

                                             <style dangerouslySetInnerHTML={{ __html: `
                                                 @keyframes pulseLine {
                                                     0% { left: -30%; }
                                                     100% { left: 110%; }
                                                 }
                                                 @keyframes spin {
                                                     from { transform: translate(-50%, -50%) rotate(0deg); }
                                                     to { transform: translate(-50%, -50%) rotate(360deg); }
                                                 }
                                             `}} />
                                        </div>
                                    </section>

                                {/* 5. Unified Ecosystem Section */}
                                <section id="ecosystem" className="py-4 section-anchor section-fade-in mb-5">
                                        <div className="section-title text-center mb-5">
                                            <span className="text-uppercase letter-spacing-5 text-primary fw-900 mb-2 d-block" style={{ fontSize: '10px' }}>SYSTEM HARMONY</span>
                                            <AnimatedTitle>
                                                <h2 className="section-title__title title-animation mb-4" style={{ lineHeight: '1.1' }}>The Micraft <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Unified Ecosystem</span></h2>
                                            </AnimatedTitle>
                                            <p className="text-white opacity-80 mx-auto mt-4 px-xl-5" style={{ maxWidth: '850px', fontSize: '15px' }}>
                                                Breaking the silos between IT and the shop floor. Our ecosystem creates a single source of truth where every machine, operator, and supervisor is synchronized in real-time.
                                            </p>
                                        </div>

                                        <div className="row g-5 align-items-center">
                                            <div className="col-lg-7">
                                                <div className="mosaic-v2-grid position-relative" style={{ height: '550px' }}>
                                                    {/* Global Insight Image */}
                                                    <div className="position-absolute rounded-5 overflow-hidden shadow-2xl transition-all hover-translate-up" 
                                                         style={{ top: '0', left: '0', width: '65%', height: '55%', zIndex: 3, border: '1px solid rgba(255,255,255,0.1)' }}>
                                                        <Image src="/assets/images/solutions/digital-production-kpi-v2.png" alt="Global HQ monitoring" fill style={{ objectFit: 'cover' }} />
                                                        <div className="position-absolute bottom-0 start-0 p-3 bg-dark bg-opacity-60 backdrop-blur-md w-100">
                                                            <span className="text-white fw-900 letter-spacing-2 d-block" style={{ fontSize: '9px' }}>STRATEGIC HQ VIEW</span>
                                                        </div>
                                                    </div>

                                                    {/* Main Factory View */}
                                                    <div className="position-absolute rounded-5 overflow-hidden shadow-2xl transition-all hover-translate-up border-primary-glow" 
                                                         style={{ bottom: '0', right: '0', width: '75%', height: '60%', zIndex: 1 }}>
                                                        <Image src="/assets/images/solutions/shop-floor-visibility-v2.png" alt="Local Factory" fill style={{ objectFit: 'cover' }} />
                                                        <div className="position-absolute top-0 end-0 p-4">
                                                            <div className="animate-pulse bg-primary rounded-circle" style={{ width: '12px', height: '12px', boxShadow: '0 0 10px #3D72FC' }}></div>
                                                        </div>
                                                        <div className="position-absolute bottom-0 end-0 p-3 bg-dark bg-opacity-60 backdrop-blur-md">
                                                            <span className="text-white fw-900 letter-spacing-2 d-block" style={{ fontSize: '9px' }}>LIVE SHOP FLOOR</span>
                                                        </div>
                                                    </div>

                                                    {/* Handheld View */}
                                                    <div className="position-absolute rounded-5 overflow-hidden shadow-2xl transition-all hover-translate-up" 
                                                          style={{ bottom: '15%', left: '5%', width: '40%', height: '35%', zIndex: 4, border: '3px solid #02050A' }}>
                                                         <Image src="/assets/images/solutions/industrial-tablet-monitoring-interface-1774592929837.png" alt="Tablet Interface" fill style={{ objectFit: 'cover' }} />
                                                         <div className="position-absolute bottom-0 start-0 p-3 bg-dark bg-opacity-80 w-100 backdrop-blur-sm">
                                                            <span className="text-white fw-900 letter-spacing-2 d-block" style={{ fontSize: '8px' }}>EDGE DEVICE</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="d-flex flex-column gap-3">
                                                    {[
                                                        { t: "Seamless Integration", d: "Connect legacy hardware and modern IoT sensors under one protocol-agnostic layer.", i: "fas fa-network-wired" },
                                                        { t: "Multi-Role Visibility", d: "Custom views for CEOs, Plant Managers, and Line Operators—all from the same live data.", i: "fas fa-users-cog" },
                                                        { t: "Geographic Scalability", d: "Monitor production performance across global factory locations from HQ.", i: "fas fa-globe-americas" }
                                                    ].map((point, i) => (
                                                        <div key={i} className="ecosystem-card p-3 p-xl-4 rounded-5 transition-all hover-translate-up" style={{ background: 'rgba(61, 114, 252, 0.05)', border: '1px solid rgba(61, 114, 252, 0.15)', backdropFilter: 'blur(5px)' }}>
                                                            <div className="d-flex align-items-start gap-4">
                                                                <div className="icon-wrap rounded-circle d-flex align-items-center justify-content-center" style={{ minWidth: '45px', height: '45px', background: 'rgba(61, 114, 252, 0.2)' }}>
                                                                    <i className={`${point.i} fs-5 text-white`}></i>
                                                                </div>
                                                                <div>
                                                                    <h4 className="text-white h6 mb-1 fw-bold" style={{ fontSize: '15px' }}>{point.t}</h4>
                                                                    <p className="text-white-50 extra-small mb-0 opacity-70" style={{ fontSize: '11px', lineHeight: '1.6' }}>{point.d}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                {/* 6. Integrated Capabilities Section */}
                                <section id="capabilities" className="py-4 section-anchor section-fade-in mb-5">
                                        <div className="p-4 p-xl-5 rounded-5 shadow-2xl position-relative overflow-hidden"
                                             style={{ background: 'rgba(7, 10, 15, 0.4)', border: '1px solid rgba(61, 114, 252, 0.15)', backdropFilter: 'blur(10px)' }}>

                                             <div className="section-title text-center mb-5">
                                                 <span className="text-uppercase letter-spacing-5 text-primary fw-900 mb-2 d-block" style={{ fontSize: '10px' }}>TECHNICAL PORTFOLIO</span>
                                                 <AnimatedTitle>
                                                     <h2 className="section-title__title title-animation mb-4" style={{ lineHeight: '1.1' }}>Comprehensive <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Integrated Capabilities</span></h2>
                                                 </AnimatedTitle>
                                             </div>

                                             <div className="row g-4">
                                                 {[
                                                     { t: "Production Output Tracking", d: "Real-time recording of production units against shift targets.", i: "fas fa-chart-line", g: "linear-gradient(135deg, #3D72FC 0%, #00D2FF 100%)" },
                                                     { t: "Machine Activity Monitoring", d: "Monitor machine uptime, idle time, and availability.", i: "fas fa-robot", g: "#00D261" },
                                                     { t: "Work Order Progress Tracking", d: "Live visibility into the status of every open production order.", i: "fas fa-tasks", g: "#FFB01F" },
                                                     { t: "Quality Inspection Logging", d: "Digital recording of inspection results and rejection data.", i: "fas fa-check-double", g: "#FA5674" },
                                                     { t: "Operator Efficiency Tracking", d: "Tracking manual operations and operator performance.", i: "fas fa-user-clock", g: "#8B5CF6" },
                                                     { t: "Dispatch Readiness Visibility", d: "Complete visibility into goods ready for dispatch.", i: "fas fa-truck-loading", g: "#00D2FF" }
                                                 ].map((cap, i) => (
                                                     <div key={i} className="col-lg-4 col-md-6">
                                                         <div className="capability-node p-4 rounded-4 h-100 transition-all border border-white border-opacity-5 hover-translate-up" style={{ background: 'rgba(255,255,255,0.01)' }}>
                                                             <div className="d-flex align-items-center gap-3 mb-3">
                                                                 <div className="icon-box rounded-circle d-flex align-items-center justify-content-center shadow-lg" style={{ width: '40px', height: '40px', background: cap.g, color: '#fff' }}>
                                                                     <i className={`${cap.i} fs-6`}></i>
                                                                 </div>
                                                                 <h4 className="text-white h6 mb-0 fw-900" style={{ fontSize: '14px' }}>{cap.t}</h4>
                                                             </div>
                                                             <p className="text-white-50 extra-small mb-0 opacity-70" style={{ fontSize: '11px', lineHeight: '1.7' }}>{cap.d}</p>
                                                         </div>
                                                     </div>
                                                 ))}
                                             </div>
                                        </div>
                                    </section>

                                {/* 5. Key Features Section */}
                                <section id="key-features" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="section-title text-left mb-4">
                                            <div className="section-title__tagline-box">
                                                <span className="section-title__tagline text-primary">Core Toolkit</span>
                                            </div>
                                            <AnimatedTitle>
                                                <h3 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.1' }}>System <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Capabilities</span></h3>
                                            </AnimatedTitle>
                                        </div>
                                        <div className="row g-4">
                                            {[
                                                { t: "Real-Time Monitoring", d: "View live production activity across machines and workstations.", i: "fas fa-desktop", c: "LIVE" },
                                                { t: "Performance Dashboard", d: "Monitor output and progress through visual analytics.", i: "fas fa-chart-pie", c: "ANALYTICS" },
                                                { t: "Machine Utilization", d: "Track machine activity, idle time, and productivity.", i: "fas fa-cogs", c: "OEE" },
                                                { t: "Work Order Tracking", d: "Monitor each production order from start to completion.", i: "fas fa-clipboard-list", c: "PROGRESS" },
                                                { t: "Bottleneck Detection", d: "Detect delays and inefficiencies in the process.", i: "fas fa-search-minus", c: "AUDIT" },
                                                { t: "Quality Inspection", d: "Track inspection results and rejection trends live.", i: "fas fa-vial", c: "QUALITY" },
                                                { t: "Packing & Dispatch", d: "Ensure completion aligns with ready-to-ship schedules.", i: "fas fa-box", c: "LOGISTICS" }
                                            ].map((f, i) => (
                                                <div key={i} className="col-lg-4 col-md-6">
                                                    <div className="capability-card h-100 p-4 rounded-5 position-relative overflow-hidden transition-all hover-translate-up" style={{ background: '#0F172A', border: '1px solid rgba(61, 114, 252, 0.1)' }}>
                                                        <div className="d-flex flex-column h-100 position-relative" style={{ zIndex: 1 }}>
                                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                                <div className="icon-container d-flex align-items-center justify-content-center rounded-circle" style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, #3D72FC 0%, #00D2FF 100%)' }}>
                                                                    <i className={`${f.i} text-white fs-4`}></i>
                                                                </div>
                                                                <span className="text-uppercase letter-spacing-2 fw-bold text-white-50" style={{ fontSize: '9px', opacity: '0.4' }}>{f.c}</span>
                                                            </div>
                                                            <h3 className="text-white h5 mb-3 fw-bold" style={{ fontSize: '18px' }}>{f.t}</h3>
                                                            <p className="text-white-50 extra-small opacity-70 lh-lg">{f.d}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                {/* 6. Benefits Section */}
                                <section id="benefits" className="py-4 section-anchor section-fade-in premium-flow-section">
                                         <div className="p-xl-5 ps-3 pe-3 p-4 rounded-5 position-relative overflow-hidden" 
                                              style={{ background: 'rgba(7, 11, 20, 0.9)', border: '1px solid rgba(61, 114, 252, 0.25)' }}>
                                             
                                             <div className="section-title text-center mb-5 position-relative" style={{ zIndex: 1 }}>
                                                 <div className="section-title__tagline-box mx-auto mb-3">
                                                     <span className="section-title__tagline text-primary">STRATEGIC ADVANTAGES</span>
                                                 </div>
                                                 <AnimatedTitle>
                                                     <h2 className="section-title__title title-animation mb-3" style={{ lineHeight: '1.1' }}>Impact of <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Factory Monitoring</span></h2>
                                                 </AnimatedTitle>
                                             </div>
 
                                             <div className="row g-5 align-items-center" style={{ zIndex: 1 }}>
                                                 <div className="col-lg-7">
                                                     <div className="row g-4">
                                                         {[
                                                              { t: "Complete production visibility", d: "Gain a clear view of all factory operations.", i: "fas fa-eye", c1: "#3D72FC", c2: "#00D2FF" },
                                                              { t: "Faster decision making", d: "Respond quickly using live operational data.", i: "fas fa-bolt", c1: "#00D261", c2: "#3D72FC" },
                                                              { t: "Improved production efficiency", d: "Identify and eliminate process inefficiencies.", i: "fas fa-chart-line", c1: "#FA5674", c2: "#FB923C" },
                                                              { t: "Better resource utilization", d: "Optimize machine usage and workforce output.", i: "fas fa-sync", c1: "#8B7DEC", c2: "#7366CA" },
                                                              { t: "Accurate production reporting", d: "Reliable reports for strategic management reviews.", i: "fas fa-file-alt", c1: "#FFB01F", c2: "#FDE047" },
                                                              { t: "Improved delivery performance", d: "Align production with customer timelines.", i: "fas fa-truck-loading", c1: "#00D2FF", c2: "#3D72FC" }
                                                          ].map((item, i) => (
                                                             <div key={i} className="col-md-6">
                                                                 <div className="benefit-card p-4 rounded-4 h-100 transition-all hover-translate-up" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                                     <div className="icon-box-vibrant mb-4 d-flex align-items-center justify-content-center rounded-4 shadow-lg" 
                                                                          style={{ width: '56px', height: '56px', background: `linear-gradient(135deg, ${item.c1} 0%, ${item.c2} 100%)` }}>
                                                                         <i className={`${item.i} text-white fs-4`}></i>
                                                                     </div>
                                                                     <h4 className="text-white h6 mb-2 fw-bold">{item.t}</h4>
                                                                     <p className="text-white-50 extra-small opacity-60 mb-0">{item.d}</p>
                                                                 </div>
                                                             </div>
                                                         ))}
                                                     </div>
                                                 </div>
                                                 <div className="col-lg-5">
                                                     <div className="position-relative p-0 rounded-5 overflow-hidden shadow-2xl border-primary-glow" style={{ height: '560px' }}>
                                                         {/* Primary Success Visual */}
                                                         <Image src="/assets/images/solutions/realtime-production-monitor-v2.png" alt="Operational Success" fill style={{ objectFit: 'cover' }} className="rounded-4 scale-hover transition-transform duration-700" />
                                                         
                                                         {/* Secondary 'Real-Time Check' Overlay */}
                                                         <div className="position-absolute rounded-5 overflow-hidden shadow-2xl transition-all hover-translate-up floating-overlay" 
                                                              style={{ top: '10%', right: '5%', width: '60%', height: '35%', zIndex: 10, border: '4px solid #070B14' }}>
                                                             <Image src="/assets/images/solutions/quality-inspection-v2.png" alt="Quality Detection" fill style={{ objectFit: 'cover' }} />
                                                             <div className="position-absolute bottom-0 start-0 p-3 bg-dark bg-opacity-60 backdrop-blur-md w-100">
                                                                 <span className="text-white fw-900 letter-spacing-2 d-block" style={{ fontSize: '8px' }}>REAL-TIME ACCURACY</span>
                                                             </div>
                                                         </div>

                                                         {/* Context Text Box */}
                                                         <div className="position-absolute filter-dark-gradient bottom-0 start-0 w-100 p-5 p-xl-5" style={{ zIndex: 11 }}>
                                                             <div className="p-4 rounded-5 backdrop-blur-md bg-dark bg-opacity-40 border border-white border-opacity-10 shadow-2xl">
                                                                 <div className="d-flex align-items-center gap-3 mb-2">
                                                                     <div className="bg-success rounded-circle" style={{ width: '8px', height: '8px' }}></div>
                                                                     <span className="text-white fw-900 letter-spacing-2" style={{ fontSize: '11px' }}>PRODUCTION GOAL HIT</span>
                                                                 </div>
                                                                 <h5 className="text-white fw-bold mb-0" style={{ fontSize: '14px' }}>Strategic operational advantages with sub-second oversight.</h5>
                                                             </div>
                                                         </div>
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                     </section>

                                {/* 7. Industries Section */}
                                <section id="industries" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="text-left mb-5">
                                            <div className="section-title__tagline-box mb-3">
                                                <span className="section-title__tagline text-primary">Industry Application</span>
                                            </div>
                                            <AnimatedTitle>
                                                <h3 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.1' }}>Industries That <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Benefit</span></h3>
                                            </AnimatedTitle>
                                            <p className="text-white-50 opacity-80 mt-3" style={{ maxWidth: '700px' }}>Micraft MES is widely used by manufacturing SMEs looking to digitize their operations without over-complication.</p>
                                        </div>
                                        <div className="row g-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
                                            {[
                                                { t: "Automotive Components", i: "fas fa-car" },
                                                { t: "CNC & Engineering", i: "fas fa-tools" },
                                                { t: "Fabrication & Metal", i: "fas fa-hammer" },
                                                { t: "Plastic Injection Molding", i: "fas fa-boxes" },
                                                { t: "Electronics Manufacturing", i: "fas fa-microchip" },
                                                { t: "General Manufacturing", i: "fas fa-industry" }
                                            ].map((ind, i) => (
                                                <div key={i} className="col">
                                                    <div className="industry-segment-card p-4 rounded-5 position-relative overflow-hidden h-100" style={{ background: '#0F172A', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                        <div className="icon-box mb-4 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '64px', height: '64px', background: 'rgba(61, 114, 252, 0.1)' }}>
                                                            <i className={`${ind.i} fs-3 text-primary`}></i>
                                                        </div>
                                                        <h3 className="text-white h6 mb-3 fw-bold">{ind.t}</h3>
                                                        <p className="text-white-50 extra-small opacity-50 mb-0">Custom workflows for specific industry needs.</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                {/* 8. Integration Section */}
                                <section id="integration" className="pt-0 pb-4 section-anchor section-fade-in">
                                         <div className="section-title text-left mb-5">
                                             <div className="section-title__tagline-box mb-3">
                                                 <span className="section-title__tagline text-primary">ENTERPRISE CONNECTIVITY</span>
                                             </div>
                                             <AnimatedTitle>
                                                 <h3 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.1' }}>System Integration <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Architecture</span></h3>
                                             </AnimatedTitle>
                                         </div>
                                         <div className="p-4 p-xl-5 rounded-5 border-primary-glow bg-dark shadow-2xl">
                                             <div className="row g-4 align-items-center">
                                                 <div className="col-lg-7">
                                                     <h4 className="text-white mb-4">Complete MES Connectivity</h4>
                                                     <p className="text-white-50 mb-5">Micraft factory production monitoring system works seamlessly with our entire suite of manufacturing software solutions:</p>
                                                     <ul className="list-unstyled d-flex flex-column gap-3">
                                                         {[
                                                            { t: "Production Tracking Software", l: "/solutions/production-tracking-software" },
                                                            { t: "Shop Floor Visibility Systems", l: "/solutions/shop-floor-visibility-software" },
                                                            { t: "Machine Utilization Tracking", l: "/solutions/machine-utilization-tracking" },
                                                            { t: "Quality Inspection Tracking", l: "/solutions/quality-inspection-tracking" },
                                                            { t: "Packing and Dispatch Monitoring", l: "/solutions/packing-dispatch-tracking" }
                                                         ].map((link, i) => (
                                                             <li key={i} className="d-flex align-items-center gap-3 transition-all hover-translate-right">
                                                                 <div className="d-flex align-items-center justify-content-center rounded-circle" 
                                                                      style={{ width: '24px', height: '24px', background: 'rgba(0, 255, 136, 0.1)', border: '1px solid rgba(0, 255, 136, 0.3)' }}>
                                                                     <i className="fas fa-check extra-small" style={{ color: '#00ff88' }}></i>
                                                                 </div>
                                                                 <Link href={link.l} className="text-white-50 hover-text-primary text-decoration-none transition-all fw-medium" style={{ fontSize: '13px' }}>{link.t}</Link>
                                                             </li>
                                                         ))}
                                                     </ul>
                                                 </div>
                                                 <div className="col-lg-5">
                                                     <div className="position-relative p-2 rounded-5 overflow-hidden shadow-2xl border-primary-glow" style={{ minHeight: '430px' }}>
                                                         <Image src="/assets/images/solutions/realtime-production-monitor-v2.png" alt="Integrated Monitoring" fill style={{ objectFit: 'cover' }} className="scale-hover transition-transform duration-700" />
                                                         <div className="position-absolute bottom-0 start-0 w-100 p-4">
                                                             <div className="p-3 rounded-4 backdrop-blur-md bg-dark bg-opacity-60 border border-white border-opacity-10 shadow-2xl">
                                                                 <div className="d-flex align-items-center gap-3 mb-2">
                                                                     <div className="h4 text-white mb-0 fw-bold">360°</div>
                                                                     <span className="text-white fw-900 letter-spacing-2" style={{ fontSize: '10px' }}>VISIBILITY COVERAGE</span>
                                                                 </div>
                                                                 <p className="text-white-50 extra-small opacity-70 mb-0" style={{ fontSize: '11px' }}>One platform. Infinite insights across the entire production lifecycle.</p>
                                                             </div>
                                                         </div>
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                     </section>

                                {/* 9. Why Micraft Section */}
                                <section id="why-micraft" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="p-3 p-xl-5 rounded-5 shadow-2xl position-relative overflow-hidden" style={{ background: 'rgba(15, 23, 42, 0.4)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                                            <div className="row g-5 align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="section-title text-left mb-5">
                                                        <div className="section-title__tagline-box mb-3">
                                                            <span className="section-title__tagline text-primary">THE MICRAFT EDGE</span>
                                                        </div>
                                                        <AnimatedTitle>
                                                            <h2 className="section-title__title title-animation mb-4" style={{ lineHeight: '1.1', fontSize: '32px' }}>Why Choose <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Micraft MES?</span></h2>
                                                        </AnimatedTitle>
                                                        <p className="text-white opacity-70" style={{ fontSize: '15px' }}>Micraft MES is built specifically for the complexities of modern manufacturing, blending enterprise power with SME simplicity.</p>
                                                    </div>

                                                    <div className="d-flex flex-column gap-3">
                                                        {[
                                                             { t: "Easy and fast implementation", d: "Deploy the monitoring system without complex configurations.", i: "fas fa-bolt" },
                                                             { t: "Real-time production data", d: "Experience the pulse of your factory with real-time data capture.", i: "fas fa-broadcast-tower" },
                                                             { t: "Access from anywhere", d: "Native mobile and tablet support ensures supervisors stay connected.", i: "fas fa-mobile-alt" }
                                                         ].map((adv, i) => (
                                                            <div key={i} className="why-item d-flex align-items-center gap-4 p-4 rounded-5 transition-all hover-translate-up" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                                <div className="icon-wrap rounded-circle d-flex align-items-center justify-content-center shadow-lg bg-white" style={{ minWidth: '70px', height: '70px' }}>
                                                                    <i className={`${adv.i} text-primary fs-4`}></i>
                                                                </div>
                                                                <div>
                                                                    <h4 className="text-white h6 mb-1 fw-900" style={{ fontSize: '15px' }}>{adv.t}</h4>
                                                                    <p className="text-white-50 extra-small mb-0 opacity-70" style={{ fontSize: '12px', lineHeight: '1.6' }}>{adv.d}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="position-relative rounded-5 overflow-hidden shadow-2xl border-primary-glow" style={{ minHeight: '550px' }}>
                                                        <Image src="/assets/images/solutions/manufacturing-performance-v2.png" alt="Micraft Success" fill style={{ objectFit: 'cover' }} className="scale-hover transition-transform duration-700" />
                                                        <div className="position-absolute filter-dark-gradient bottom-0 start-0 w-100 p-5 p-xl-5">
                                                            <div className="p-4 rounded-5 backdrop-blur-md bg-dark bg-opacity-40 border border-white border-opacity-10 shadow-2xl">
                                                                <div className="d-flex align-items-center gap-3 mb-2">
                                                                    <div className="bg-success rounded-circle" style={{ width: '8px', height: '8px' }}></div>
                                                                    <span className="text-white fw-900 letter-spacing-2" style={{ fontSize: '11px' }}>TRUSTED PERFORMANCE</span>
                                                                </div>
                                                                <h5 className="text-white fw-bold mb-0" style={{ fontSize: '14px', fontStyle: 'italic' }}>&quot;Micraft transformed our blind spots into strategic operational advantages.&quot;</h5>
                                                            </div>
                                                        </div>
                                                    </div>
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
                                                 <h3 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.1' }}>Explore Related <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Micraft MES Solutions</span></h3>
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

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ———————————————— FINAL CALL TO ACTION ———————————————— */}
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
                                        Book Your Demo <i className="fas fa-calendar-check ms-2"></i>
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
                .pulse-dot { width: 8px; height: 8px; border-radius: 50%; position: relative; }
                .pulse-dot::after { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 50%; background: inherit; animation: pulse 2s infinite; }
                @keyframes pulse { 0% { transform: scale(1); opacity: 0.8; } 100% { transform: scale(3); opacity: 0; } }
                .rotate-hint { transition: transform 0.8s ease; }
                .hover-translate-up:hover .rotate-hint { transform: rotate(1deg) scale(1.02); }
                .responsive-h2 { font-size: 32px; }
                @media (max-width: 767px) {
                    .responsive-h2 { font-size: 24px !important; }
                }
                .hover-translate-up:hover { transform: translateY(-8px); }
                .hover-translate-right:hover { transform: translateX(8px); }
                @keyframes sectionFadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                .section-fade-in { animation: sectionFadeIn 0.5s ease-out both; }
                
                .solutions-swiper .swiper-pagination-bullet { background: #3D72FC; }
                .solutions-swiper .swiper-button-next, .solutions-swiper .swiper-button-prev { color: #3D72FC; transform: scale(0.6); }
                
                .thm-btn { 
                    display: inline-flex; 
                    align-items: center; 
                    justify-content: center; 
                    background: #3D72FC; 
                    color: #fff; 
                    font-weight: 700; 
                    text-transform: uppercase; 
                    transition: all 0.3s ease; 
                    text-decoration: none;
                    letter-spacing: 1px;
                }
                .thm-btn:hover { background: #0B192C; color: #fff; }
                .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
                @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
                .scale-hover { transition: transform 0.5s ease; }
                .scale-hover:hover { transform: scale(1.03); }
            `}} />

        </Layout>
    )
}
