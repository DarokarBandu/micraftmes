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
    { id: "hero", label: "Utilization Overview", icon: "fas fa-tachometer-alt" },
    { id: "problems", label: "Productivity Gaps", icon: "fas fa-exclamation-triangle" },
    { id: "how-it-works", label: "OEE Logic", icon: "fas fa-project-diagram" },
    { id: "capabilities", label: "Core Capabilities", icon: "fas fa-microchip" },
    { id: "benefits", label: "Efficiency Gains", icon: "fas fa-gem" },
    { id: "industries", label: "Industry Focus", icon: "fas fa-industry" },
    { id: "integration", label: "System Integration", icon: "fas fa-link" },
    { id: "why-micraft", label: "The Micraft Edge", icon: "fas fa-star" },
    { id: "related", label: "Related Solutions", icon: "fas fa-th-large" },
]

export default function MachineUtilizationPage() {
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
            <Breadcrumb breadcrumbTitle="Machine Utilization Tracking" />

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
                                            Utilization Menu
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
                                                        <span className="section-title__tagline text-primary">REAL-TIME EQUIPMENT PULSE</span>
                                                    </div>
                                                    <AnimatedTitle>
                                                        <h1 className="section-title__title title-animation mb-4" style={{ lineHeight: '1.0', fontSize: '48px' }}>
                                                            Machine Utilization Tracking <span style={{ color: '#FFD25D', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Software</span>
                                                        </h1>
                                                    </AnimatedTitle>
                                                </div>
                                                <div className="mt-4 pe-xl-5">
                                                    <h4 className="text-white mb-4 fw-medium" style={{ fontSize: '22px', lineHeight: '1.6', borderLeft: '4px solid #3D72FC', paddingLeft: '20px', opacity: 0.9 }}>
                                                        Monitor machine activity and OEE in real time. Identify idle assets and maximize factory efficiency with a centralized monitoring system.
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="col-12 mt-2">
                                                <div className="position-relative p-2 rounded-5 overflow-hidden shadow-2xl border-primary-glow mb-5" style={{ minHeight: '400px' }}>
                                                    <Image src="/assets/images/solutions/machine-utilization-hero-v3.png" alt="Machine Utilization Tracking" fill style={{ objectFit: 'cover' }} className="rounded-4" priority />
                                                    <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-gradient-to-t from-dark to-transparent">
                                                        <div className="p-2 rounded-3 bg-primary bg-opacity-20 backdrop-blur-md border border-white border-opacity-10 d-inline-flex align-items-center gap-2">
                                                            <div className="pulse-dot bg-success" style={{ background: '#00D261' }}></div>
                                                            <span className="text-white fw-bold extra-small letter-spacing-1">IOT EQUIPMENT SYNC ACTIVE</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-flex flex-wrap gap-4">
                                                    <Link href="/book-demo" className="thm-btn rounded-pill shadow-primary-light" style={{ fontSize: '14px', padding: '12px 30px' }}>Schedule a Live Demo</Link>
                                                    <Link href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollTo('how-it-works'); }} className="btn btn-outline-light rounded-pill fw-bold border-2" style={{ fontSize: '14px', padding: '12px 28px' }}>See OEE Tech</Link>
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
                                                <span className="section-title__tagline" style={{ color: '#FA5674' }}>Efficiency Leakage</span>
                                            </div>
                                            <AnimatedTitle>
                                                <h3 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.1' }}>Common <span style={{ color: '#FFD25D', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Machine Productivity</span> Gaps</h3>
                                            </AnimatedTitle>
                                        </div>
                                        <p className="text-white-50 mb-3 opacity-80 pe-xl-5" style={{ fontSize: '16px' }}>Manual machine logs often hide the true cause of equipment idleness and efficiency loss:</p>
                                        <div className="row g-4 mt-2">
                                            {[
                                                { text: "Unrecorded Micro-Stops", sub: "Small interruptions that cumulatively lead to hours of lost production.", icon: "fas fa-hourglass-start", color: "#6065D4", label: "HIDDEN LOSS" },
                                                { text: "Inaccurate OEE Data", sub: "Subjective operator logs result in unreliable efficiency benchmarks.", icon: "fas fa-exclamation-triangle", color: "#FA5674", label: "DATA GAP" },
                                                { text: "High Setup Times", sub: "Undetected delays in changeovers and machine initialization.", icon: "fas fa-tools", color: "#FFD25D", label: "LATENCY" },
                                                { text: "Reactive Maintenance", sub: "Lack of health monitoring leads to unexpected breakdowns.", icon: "fas fa-user-ninja", color: "#00D261", label: "INEFFICIENT" }
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
                                                <span className="text-uppercase letter-spacing-5 text-primary fw-900 mb-2 d-block" style={{ fontSize: '10px' }}>IOT INTELLIGENCE</span>
                                                <AnimatedTitle>
                                                    <h3 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.1' }}>Automated <span style={{ color: '#FFD25D', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>OEE Capture</span> Logic</h3>
                                                </AnimatedTitle>
                                            </div>
                                            <div className="row g-4 align-items-center mb-5">
                                                <div className="col-xl-6">
                                                    <div className="position-relative p-2 rounded-5 overflow-hidden shadow-2xl border-primary-glow" style={{ height: '400px' }}>
                                                        <Image src="/assets/images/solutions/oee-monitoring-interface-v3.png" alt="OEE Monitoring" fill style={{ objectFit: 'cover' }} className="scale-hover rounded-4 rotate-hint" />
                                                        <div className="position-absolute bottom-0 start-0 p-4 w-100 bg-gradient-to-t from-dark to-transparent">
                                                            <span className="text-white fw-900 letter-spacing-2 p-2 bg-dark bg-opacity-60 backdrop-blur-sm rounded" style={{ fontSize: '10px' }}>OEE PERFORMANCE INTERFACE</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <p className="text-white-50 mb-4 opacity-80 pe-xl-5" style={{ fontSize: '15px', lineHeight: '1.8' }}>
                                                        The OEE Capture logic uses non-invasive IoT sensors or direct PLC integration to track machine cycles at the source. This ensures that every micro-stop, changeover, and maintenance event is logged with zero manual intervention, providing the world&apos;s most accurate productivity benchmarks.
                                                    </p>
                                                    <p className="text-white fw-bold extra-small letter-spacing-1 text-primary"><i className="fas fa-check-circle me-2"></i> AUTOMATED KPI CALCULATION</p>
                                                </div>
                                            </div>
                                            <div className="row g-4">
                                                {[
                                                    { t: "Sensor Connectivity", d: "Connect machinery through PLC integration or non-invasive IoT sensors.", i: "fas fa-microchip" },
                                                    { t: "Direct Pulse Hub", d: "Capture machine cycles, downtime reasons, and speeds in real-time.", i: "fas fa-plug" },
                                                    { t: "Analytics Engine", d: "Automatically calculate Availability, Performance, and Quality KPIs.", i: "fas fa-calculator" }
                                                ].map((box, i) => (
                                                    <div key={i} className="col-lg-4">
                                                        <div className="text-center p-4 rounded-4 h-100" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                            <div className="bg-white shadow-lg rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '70px', height: '70px' }}>
                                                                <i className={`${box.i} text-primary fs-3`}></i>
                                                            </div>
                                                            <h4 className="text-white h6 mb-2 fw-bold">{box.t}</h4>
                                                            <p className="text-white-50 extra-small mb-0 opacity-60" style={{ fontSize: '13px' }}>{box.d}</p>
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
                                            <span className="section-title__tagline text-primary">HARDWARE SYNC</span>
                                            <AnimatedTitle>
                                                <h2 className="section-title__title title-animation mb-4" style={{ lineHeight: '1.1' }}>Core <span style={{ color: '#FFD25D', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Utilization Capabilities</span></h2>
                                            </AnimatedTitle>
                                        </div>
                                        <div className="row g-4">
                                            {[
                                                { t: "Live Machine Monitoring", d: "Visual status of every machine in the factory on a single screen.", i: "fas fa-tachometer-alt", g: "linear-gradient(135deg, #3D72FC 0%, #6065D4 100%)" },
                                                { t: "Downtime Reason Logs", d: "Categorize stoppages into maintenance, setup, or material shortages.", i: "fas fa-edit", g: "#3D72FC" },
                                                { t: "Automated OEE Calc", d: "Zero-error calculation of world-class OEE standards.", i: "fas fa-chart-line", g: "#00D261" },
                                                { t: "Machine Health Alerts", d: "Instant notifications for threshold violations or anomalies.", i: "fas fa-bell", g: "#FA5674" },
                                                { t: "Cycle Time Analysis", d: "Benchmark actual cycle times against theoretical standards.", i: "fas fa-history", g: "#FFB01F" },
                                                { t: "Production Count Sync", d: "Directly sync machine counts with inventory and work orders.", i: "fas fa-sync", g: "#00D2FF" }
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
                                                 <span className="section-title__tagline text-primary">OPERATIONAL GAINS</span>
                                                 <AnimatedTitle>
                                                     <h2 className="section-title__title title-animation mb-3" style={{ lineHeight: '1.1' }}>Equipment <span style={{ color: '#FFD25D', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Excellence Wins</span></h2>
                                                 </AnimatedTitle>
                                             </div>
                                             <div className="row g-5 align-items-center">
                                                 <div className="col-lg-7">
                                                     <div className="row g-4">
                                                         {[
                                                             { t: "Lower Downtime", d: "Identify and eliminate root causes of frequent stoppages.", i: "fas fa-clock", c1: "#3D72FC", c2: "#6065D4" },
                                                             { t: "Improved Asset Life", d: "Predictive monitoring prevents catastrophic machine failure.", i: "fas fa-heartbeat", c1: "#00D261", c2: "#3D72FC" },
                                                             { t: "Higher ROA", d: "Get more out of your existing investments before buying new gear.", i: "fas fa-dollar-sign", c1: "#FA5674", c2: "#FFB01F" },
                                                             { t: "Stable Lead Times", d: "Predictable machine output leads to better order planning.", i: "fas fa-calendar-check", c1: "#00D2FF", c2: "#3D72FC" }
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
                                                         <Image src="/assets/images/solutions/machine-utilization.png" alt="Utilization Analysis" fill style={{ objectFit: 'cover' }} className="scale-hover" />
                                                         <div className="position-absolute bottom-0 start-0 p-5 bg-gradient-to-t from-dark to-transparent w-100 text-left">
                                                            <div className="p-3 rounded-4 backdrop-blur-md bg-dark bg-opacity-60 border border-white border-opacity-10 shadow-2xl">
                                                                <h4 className="text-white fw-bold mb-0" style={{ fontSize: '14px' }}>Real-time Machine Monitoring Grid</h4>
                                                            </div>
                                                         </div>
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                    </section>
                                )}

                                {/* 6. Industries */}
                                {activeSection === 'industries' && (
                                    <section id="industries" className="pt-0 pb-4 section-anchor section-fade-in">
                                         <div className="section-title text-left mb-5">
                                            <span className="section-title__tagline text-primary">MACHINE FLEXIBILITY</span>
                                            <AnimatedTitle>
                                                <h3 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.1' }}>Optimizing <span style={{ color: '#FFD25D', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Global Operations</span></h3>
                                            </AnimatedTitle>
                                        </div>
                                        <div className="row g-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
                                            {[
                                                { t: "Textile Mills", i: "fas fa-tshirt" },
                                                { t: "Automotive Workshops", i: "fas fa-tools" },
                                                { t: "CNC Processing", i: "fas fa-robot" },
                                                { t: "Plastic Molding", i: "fas fa-fill" },
                                                { t: "Food Processing", i: "fas fa-utensils" },
                                                { t: "Assembly Lines", i: "fas fa-conveyor-belt" }
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

                                {/* 7. Integration */}
                                {activeSection === 'integration' && (
                                     <section id="integration" className="pt-0 pb-4 section-anchor section-fade-in">
                                         <div className="p-4 p-xl-5 rounded-5 border-primary-glow bg-dark shadow-2xl">
                                             <div className="row g-4 align-items-center">
                                                 <div className="col-lg-7">
                                                     <h4 className="text-white mb-4">Unified Industrial Integration</h4>
                                                     <p className="text-white-50 mb-4">Machine utilization data is the foundation of the entire Micraft MES analytical stack.</p>
                                                     <div className="row g-3">
                                                         {[
                                                            { t: "Digital Dashboards", l: "/solutions/digital-production-dashboard" },
                                                            { t: "OEE Performance", l: "/solutions/real-time-production-monitoring" },
                                                            { t: "Batch Monitoring", l: "/solutions/manufacturing-process-tracking" },
                                                            { t: "Shop Floor Views", l: "/solutions/factory-production-monitoring-system" }
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
                                                          <Image src="/assets/images/solutions/industrial-iot-sensors.png" alt="Sensor Integration" fill style={{ objectFit: 'cover' }} />
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                     </section>
                                )}

                                {/* 8. Why Micraft */}
                                {activeSection === 'why-micraft' && (
                                    <section id="why-micraft" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="p-4 p-xl-5 rounded-5 shadow-2xl" style={{ background: 'rgba(15, 23, 42, 0.4)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                                            <div className="row g-4 justify-content-center">
                                                {[
                                                    { t: "Hardware Agnostic", d: "Connect any machine, regardless of age or brand.", i: "fas fa-network-wired" },
                                                    { t: "Mobile Optimized", d: "View OEE and machine health from anywhere on your phone.", i: "fas fa-mobile-alt" },
                                                    { t: "Continuous Evolution", d: "Benefit from regular updates based on industrial standards.", i: "fas fa-sync" }
                                                ].map((adv, i) => (
                                                    <div key={i} className="col-md-4 col-sm-12">
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