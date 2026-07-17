
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
    { id: "hero", label: "Performance Overview", icon: "fas fa-chart-line" },
    { id: "problems", label: "Analysis Gaps", icon: "fas fa-search-minus" },
    { id: "how-it-works", label: "Analytics Logic", icon: "fas fa-project-diagram" },
    { id: "capabilities", label: "Core Capabilities", icon: "fas fa-shield-alt" },
    { id: "benefits", label: "Strategic Gains", icon: "fas fa-gem" },
    { id: "industries", label: "Industry Focus", icon: "fas fa-industry" },
    { id: "integration", label: "System Integration", icon: "fas fa-link" },
    { id: "why-micraft", label: "The Micraft Edge", icon: "fas fa-star" },
    { id: "related", label: "Related Solutions", icon: "fas fa-th-large" },
]

export default function PerformanceTrackingPage() {
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
            <Breadcrumb breadcrumbTitle="Manufacturing Performance Tracking" />

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
                                            Performance Menu
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
                                                        <span className="section-title__tagline text-primary">DATA-DRIVEN DECISIONS</span>
                                                    </div>
                                                    <AnimatedTitle>
                                                        <h1 className="section-title__title title-animation mb-4" style={{ lineHeight: '1.2', fontSize: '48px' }}>
                                                            Manufacturing Performance <span>Tracking and Production Analytics</span>
                                                        </h1>
                                                    </AnimatedTitle>
                                                </div>
                                                <div className="mt-4 pe-xl-5">
                                                    <h2 className="text-white mb-4 fw-medium" style={{ fontSize: '22px', lineHeight: '1.6', borderLeft: '4px solid #8B5CF6', paddingLeft: '20px', opacity: 0.9 }}>
                                                        Turn production data into actionable insights. Analyze production performance with real-time dashboards and manufacturing analytics to improve factory efficiency.
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="col-12 mt-2">
                                                <div className="position-relative p-2 rounded-5 overflow-hidden shadow-2xl border-primary-glow mb-5" style={{ minHeight: '400px' }}>
                                                    <Image src="/assets/images/solutions/performance-analytics-hero-1775020740550.png" alt="Performance Analytics Center" fill style={{ objectFit: 'cover' }} className="rounded-4" priority />
                                                    <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-gradient-to-t from-dark to-transparent">
                                                        <div className="p-2 rounded-3 bg-purple bg-opacity-20 backdrop-blur-md border border-white border-opacity-10 d-inline-flex align-items-center gap-2">
                                                            <div className="pulse-dot bg-purple" style={{ background: '#8B5CF6' }}></div>
                                                            <span className="text-white fw-bold extra-small letter-spacing-1">CONTINUOUS DATA AGGREGATION ACTIVE</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 mt-2">
                                                <div className="d-flex flex-wrap gap-4 mt-3">
                                                    <Link href="/book-demo" className="thm-btn rounded-pill shadow-primary-light" style={{ fontSize: '14px', padding: '12px 30px' }}>Schedule a Live Demo</Link>
                                                    <Link href="#capabilities" onClick={(e) => { e.preventDefault(); scrollTo('capabilities'); }} className="btn btn-outline-light rounded-pill fw-bold border-2" style={{ fontSize: '14px', padding: '12px 28px' }}>Explore Performance Tools</Link>
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
                                                <span className="section-title__tagline" style={{ color: '#FA5674' }}>Efficiency Blind Spots</span>
                                            </div>
                                            <AnimatedTitle>
                                                <h3 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.2' }}>Challenges of <span>Manual KPI Pursuit</span></h3>
                                            </AnimatedTitle>
                                        </div>
                                        <p className="text-white-50 mb-3 opacity-80 pe-xl-5" style={{ fontSize: '16px' }}>Without real-time data, performance improvement is based on guesswork rather than facts:</p>

                                        <div className="row g-4 mt-2 align-items-center">
                                            <div className="col-lg-7">
                                                <div className="row g-4">
                                                    {[
                                                        { text: "Inconsistent Benchmarking", sub: "Hard to compare shift performance or operator efficiency accurately.", icon: "fas fa-balance-scale", color: "#FA5674", label: "BIAS" },
                                                        { text: "Untraceable Micro-Stops", sub: "Small interruptions that add up to big losses remain hidden in paper logs.", icon: "fas fa-clock", color: "#6065D4", label: "HIDDEN LOSS" },
                                                        { text: "High Reporting Effort", sub: "Managers spend hours in Excel trying to consolidate daily production data.", icon: "fas fa-file-excel", color: "#00D261", label: "INEFFICIENT" },
                                                        { text: "Lack of Trend Insight", sub: "Cannot see if performance is improving or declining over weeks and months.", icon: "fas fa-chart-line", color: "#FFD25D", label: "NO VISION" }
                                                    ].map((item, i) => (
                                                        <div key={i} className="col-md-6">
                                                            <div className="p-4 rounded-4 border border-white border-opacity-5 h-100 transition-all hover-translate-up" style={{ background: 'rgba(255,255,255,0.03)' }}>
                                                                <div className="d-flex align-items-start gap-3">
                                                                    <div className="icon-wrap rounded-circle d-flex align-items-center justify-content-center" style={{ minWidth: '46px', height: '46px', background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                                                                        <i className={`${item.icon} fs-6`} style={{ color: item.color }}></i>
                                                                    </div>
                                                                    <div>
                                                                        <h4 className="text-white h6 mb-1 fw-bold extra-small lh-base">{item.text}</h4>
                                                                        <p className="text-white-50 mb-0 opacity-60 extra-small lh-base">{item.sub}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="position-relative p-2 rounded-5 overflow-hidden shadow-2xl border-primary-glow" style={{ minHeight: '320px' }}>
                                                    <Image src="/assets/images/solutions/efficiency-blind-spots-v3.png" alt="Production Blind Spots" fill style={{ objectFit: 'cover' }} className="rounded-4 rotate-hint" />
                                                    <div className="position-absolute bottom-0 start-0 p-3 w-100 bg-gradient-to-t from-dark to-transparent">
                                                        <div className="p-2 rounded-3 text-center bg-dark bg-opacity-70 backdrop-blur-sm border border-white border-opacity-10">
                                                            <span className="text-white fw-900 letter-spacing-2" style={{ fontSize: '9px' }}>IDENTIFIED PRODUCTION GAPS</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                )}

                                {/* 3. How it Works */}
                                {activeSection === 'how-it-works' && (
                                    <section id="how-it-works" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="p-4 p-xl-5 rounded-5 shadow-2xl position-relative overflow-hidden"
                                            style={{ background: 'rgba(11, 15, 25, 0.4)', border: '1px solid rgba(139, 92, 246, 0.1)', backdropFilter: 'blur(10px)' }}>

                                            <div className="section-title text-center mb-5">
                                                <span className="text-uppercase letter-spacing-5 text-purple fw-900 mb-2 d-block" style={{ fontSize: '10px', color: '#8B5CF6' }}>ANALYTICS ENGINE</span>
                                                <AnimatedTitle>
                                                    <h3 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.2' }}>From Shop Floor to <span>Top Management</span></h3>
                                                </AnimatedTitle>
                                            </div>

                                            <div className="position-relative rounded-5 overflow-hidden shadow-2xl mb-5 border-primary-glow" style={{ height: '400px' }}>
                                                <Image src="/assets/images/solutions/production-analytics-engine-v3.png" alt="Performance Analytics" fill style={{ objectFit: 'cover' }} className="scale-hover" />
                                                <div className="position-absolute bottom-0 start-0 p-4 w-100 bg-gradient-to-t from-dark to-transparent">
                                                    <span className="text-white fw-900 letter-spacing-2 p-2 bg-dark bg-opacity-60 backdrop-blur-sm rounded" style={{ fontSize: '10px' }}>DATA-DRIVEN KPI PERFORMANCE TRENDS</span>
                                                </div>
                                            </div>

                                            <div className="row g-4">
                                                {[
                                                    { t: "Automated Data Aggregation", d: "Performance data is pooled from every shift and machine automatically.", i: "fas fa-database" },
                                                    { t: "KPI Transformation", d: "Raw output counts are converted into OEE, Availability, and Quality KPIs.", i: "fas fa-calculator" },
                                                    { t: "Executive Insights", d: "High-level dashboards provide the &apos;Big Picture&apos; for strategic factory growth.", i: "fas fa-chart-pie" }
                                                ].map((box, i) => (
                                                    <div key={i} className="col-lg-4">
                                                        <div className="text-center p-4 rounded-4 h-100" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                            <div className="bg-purple bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '50px', height: '50px', background: 'rgba(139, 92, 246, 0.1)' }}>
                                                                <i className={`${box.i} fs-5`} style={{ color: '#8B5CF6' }}></i>
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
                                            <span className="section-title__tagline text-primary">ANALYTICS SUITE</span>
                                            <AnimatedTitle>
                                                <h2 className="section-title__title title-animation mb-4" style={{ lineHeight: '1.2' }}>Core <span>Performance Capabilities</span></h2>
                                            </AnimatedTitle>
                                        </div>

                                        <div className="row g-4 align-items-center">
                                            <div className="col-xl-7">
                                                <div className="row g-3">
                                                    {[
                                                        { t: "Production KPI Analytics", d: "Identify the top 5 performance-draining issues in your factory.", i: "fas fa-diagnoses", g: "linear-gradient(135deg, #8B5CF6 0%, #3D72FC 100%)" },
                                                        { t: "Shift Performance Reviews", d: "Compare target vs. actual counts for every shift instantly.", i: "fas fa-user-clock", g: "#3D72FC" },
                                                        { t: "Resource Utilization Tracking", d: "Monitor how effectively your machines and manpower are being used.", i: "fas fa-user-shield", g: "#00D261" },
                                                        { t: "OEE Tracking Engine", d: "Automated calculation of Overall Equipment Effectiveness (OEE).", i: "fas fa-tachometer-alt", g: "#FA5674" },
                                                        { t: "Custom Alert Logic", d: "Configure alerts for critical drops in production performance.", i: "fas fa-exclamation-triangle", g: "#FFB01F" },
                                                        { t: "ROI Analysis Tool", d: "Quantify the financial impact of production improvements immediately.", i: "fas fa-file-invoice-dollar", g: "#00D2FF" }
                                                    ].map((cap, i) => (
                                                        <div key={i} className="col-md-6">
                                                            <div className="p-4 rounded-4 h-100 transition-all border border-white border-opacity-5 hover-translate-up" style={{ background: 'rgba(255,255,255,0.01)' }}>
                                                                <div className="d-flex align-items-center gap-3 mb-3">
                                                                    <div className="icon-box rounded-circle d-flex align-items-center justify-content-center shadow-lg" style={{ width: '40px', height: '40px', background: cap.g, color: '#fff' }}>
                                                                        <i className={`${cap.i} fs-6`}></i>
                                                                    </div>
                                                                    <h4 className="text-white h6 mb-0 fw-bold extra-small">{cap.t}</h4>
                                                                </div>
                                                                <p className="text-white-50 extra-small mb-0 opacity-70" style={{ lineHeight: '1.6' }}>{cap.d}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="col-xl-5">
                                                <div className="position-relative p-2 rounded-5 overflow-hidden shadow-2xl border-primary-glow" style={{ minHeight: '500px' }}>
                                                    <Image src="/assets/images/solutions/performance-kpi-dashboard-1775020757736.png" alt="Performance Analytics Hub" fill style={{ objectFit: 'cover' }} className="rounded-4 rotate-hint" />
                                                    <div className="position-absolute bottom-0 start-0 p-4 w-100 bg-gradient-to-t from-dark to-transparent">
                                                        <div className="p-3 rounded-4 backdrop-blur-md bg-dark bg-opacity-60 border border-white border-opacity-10 text-center">
                                                            <div className="text-purple fw-900 letter-spacing-2" style={{ fontSize: '10px', color: '#8B5CF6' }}>ANALYTICS POWERHOUSE</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                )}

                                {/* 5. Benefits - Flow-wise Design */}
                                {activeSection === 'benefits' && (
                                    <section id="benefits" className="py-4 section-anchor section-fade-in premium-flow-section">
                                        <div className="p-xl-5 ps-3 pe-3 p-4 rounded-5 position-relative overflow-hidden"
                                            style={{ background: 'rgba(7, 11, 20, 0.9)', border: '1px solid rgba(139, 92, 246, 0.25)', boxShadow: '0 30px 60px rgba(0,0,0,0.6)' }}>

                                            {/* Animated Background Overlay */}
                                            <div className="position-absolute w-100 h-100 top-0 left-0 overflow-hidden" style={{ zIndex: 0, opacity: 0.2 }}>
                                                <div className="data-grid-animate"></div>
                                            </div>

                                            <div className="section-title text-center mb-5 position-relative" style={{ zIndex: 1 }}>
                                                <div className="section-title__tagline-box mx-auto mb-3">
                                                    <span className="section-title__tagline text-primary" style={{ letterSpacing: '4px', fontWeight: '900' }}>VALUE GENERATION FLOW</span>
                                                </div>
                                                <AnimatedTitle>
                                                    <h2 className="section-title__title title-animation mb-3" style={{ lineHeight: '1.2' }}>Strategic <span>Gains Pipeline</span></h2>
                                                </AnimatedTitle>
                                                <p className="text-white-50 extra-small opacity-60 mx-auto" style={{ maxWidth: '650px' }}>
                                                    Our performance analytics transform raw data into a continuous pipeline of operational optimization and strategic factory growth.
                                                </p>
                                            </div>

                                            <div className="position-relative rounded-5 overflow-hidden shadow-2xl mb-5 border-primary-glow" style={{ height: '350px' }}>
                                                <Image src="/assets/images/solutions/strategic-gains-pipeline-v3.png" alt="Strategic Gains Visualization" fill style={{ objectFit: 'cover' }} className="rounded-4" />
                                                <div className="position-absolute bottom-0 start-0 p-4 w-100 bg-gradient-to-t from-dark to-transparent">
                                                    <div className="p-3 rounded-4 backdrop-blur-md bg-dark bg-opacity-40 border border-white border-opacity-10 d-inline-flex align-items-center gap-3">
                                                        <div className="pulse-dot bg-success"></div>
                                                        <span className="text-white fw-900 letter-spacing-2" style={{ fontSize: '10px' }}>ROI PIPELINE ACTIVE & STABILIZED</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="benefits-flow-container position-relative mt-5 pt-4" style={{ zIndex: 1 }}>
                                                {/* Animated Connecting Line */}
                                                <div className="d-none d-lg-block position-absolute w-100 flowing-data-line"
                                                    style={{ top: '65px', left: '0', height: '1.5px', zIndex: 0 }}></div>

                                                <div className="row g-4 justify-content-center position-relative" style={{ zIndex: 1 }}>
                                                    {[
                                                        { t: "01", b: "Lower Operating Costs", d: "Eliminate manpower waste.", i: "fas fa-coins", c1: "#8B5CF6", c2: "#3D72FC" },
                                                        { t: "02", b: "Continuous Growth", d: "Apply live Kaizen data.", i: "fas fa-sync", c1: "#00D261", c2: "#3D72FC" },
                                                        { t: "03", b: "Smart Investments", d: "Data-driven upgrades.", i: "fas fa-piggy-bank", c1: "#FFB01F", c2: "#FA5674" },
                                                        { t: "04", b: "Predictable Capacity", d: "Maximize high-value orders.", i: "fas fa-warehouse", c1: "#00D2FF", c2: "#3D72FC" },
                                                        { t: "05", b: "Shift Performance", d: "Identify training needs.", i: "fas fa-user-check", c1: "#EC4899", c2: "#8B5CF6" },
                                                        { t: "06", b: "ROI Verification", d: "Quantify every change.", i: "fas fa-chart-line", c1: "#3D72FC", c2: "#00D261" }
                                                    ].map((item, i) => (
                                                        <div key={i} className="col-lg-2 col-md-4 col-sm-6">
                                                            <div className="benefit-flow-card text-center transition-all hover-translate-up">
                                                                <div className="step-count-badge mb-3 mx-auto d-flex align-items-center justify-content-center text-white fw-bold"
                                                                    style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#0F172A', border: `1px solid ${item.c1}40`, fontSize: '11px', boxShadow: `0 0 20px ${item.c1}20` }}>
                                                                    {item.t}
                                                                </div>
                                                                <div className="icon-box-vibrant mb-4 mx-auto d-flex align-items-center justify-content-center rounded-4 shadow-2xl overflow-hidden position-relative"
                                                                    style={{ width: '72px', height: '72px', background: `linear-gradient(135deg, ${item.c1} 0%, ${item.c2} 100%)`, border: '1px solid rgba(255,255,255,0.15)' }}>
                                                                    <div className="glare-swipe-animate"></div>
                                                                    <i className={`${item.i} text-white fs-4 position-relative`} style={{ zIndex: 1, textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}></i>
                                                                </div>
                                                                <h4 className="text-white h6 mb-2 fw-bold" style={{ minHeight: '40px', fontSize: '13px', letterSpacing: '0.5px', lineHeight: '1.4' }}>{item.b}</h4>
                                                                <p className="text-white-50 extra-small opacity-50 mb-0 px-2" style={{ fontSize: '10px', lineHeight: '1.5' }}>{item.d}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                )}

                                {/* 6. Industries */}
                                {activeSection === 'industries' && (
                                    <section id="industries" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="section-title text-left mb-5">
                                            <span className="section-title__tagline text-primary">PERFORMANCE BENCHMARKING</span>
                                            <AnimatedTitle>
                                                <h3 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.2' }}>Optimizing <span>Global Operations</span></h3>
                                            </AnimatedTitle>
                                        </div>
                                        <div className="row g-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
                                            {[
                                                { t: "High-Volume Assembly", i: "fas fa-microchip" },
                                                { t: "Textile & Garments", i: "fas fa-tshirt" },
                                                { t: "Auto Component Mfg", i: "fas fa-car-side" },
                                                { t: "Pharma Packaging", i: "fas fa-pills" },
                                                { t: "Forging Units", i: "fas fa-fire-alt" },
                                                { t: "Electrical Goods", i: "fas fa-plug" }
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
                                                    <div className="section-title text-left mb-4">
                                                        <div className="section-title__tagline-box">
                                                            <span className="section-title__tagline text-primary">Connected Ecosystem</span>
                                                        </div>
                                                        <h3 className="section-title__title" style={{ fontSize: '28px' }}>Unified <span>Industrial Intelligence</span></h3>
                                                    </div>
                                                    <p className="text-white-50 mb-4">Performance tracking is the analytical layer sitting atop all Micraft MES modules for a single source of truth.</p>
                                                    <div className="row g-3">
                                                        {[
                                                            { t: "Production Dashboards", l: "/solutions/digital-production-dashboard" },
                                                            { t: "Real-Time Monitoring", l: "/solutions/real-time-production-monitoring" },
                                                            { t: "Machine Tracking", l: "/solutions/machine-utilization-tracking" },
                                                            { t: "Quality Inspection", l: "/solutions/quality-inspection-tracking" }
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
                                                        <Image src="/assets/images/solutions/unified-industrial-intelligence-v3.png" alt="Unified Intelligence" fill style={{ objectFit: 'cover' }} />
                                                        <div className="position-absolute bottom-0 start-0 p-3 w-100 bg-gradient-to-t from-dark to-transparent">
                                                            <span className="text-white fw-900 letter-spacing-2 bg-dark bg-opacity-60 p-1 rounded" style={{ fontSize: '8px' }}>CORE DATA HUB INTERFACE</span>
                                                        </div>
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
                                                    { t: "SME Focus", d: "Complex analytics simplified for owners and plant managers.", i: "fas fa-shield-alt" },
                                                    { t: "Mobile Ready", d: "Access production trends from your home or while traveling.", i: "fas fa-mobile-alt" },
                                                    { t: "Continuous Evolution", d: "Regularly updated with new industrial performance benchmarks.", i: "fas fa-rocket" }
                                                ].map((adv, i) => (
                                                    <div key={i} className="col-md-4">
                                                        <div className="text-center p-4 rounded-4 h-100" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                            <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '60px', height: '60px', background: 'rgba(61, 114, 252, 0.1)', border: '1px solid rgba(61, 114, 252, 0.2)' }}>
                                                                <i className={`${adv.i} text-primary fs-3`}></i>
                                                            </div>
                                                            <h4 className="text-white h6 mb-2 fw-bold">{adv.t}</h4>
                                                            <p className="text-white-50 extra-small mb-0 opacity-70">{adv.d}</p>
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
                                    <h2 className="newsletter-one__title text-white mb-20" style={{ lineHeight: '1.2', fontSize: '32px', fontWeight: '700' }}>
                                        Monitor Your Factory <br />
                                        <span>Production in Real Time</span>
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
                .rounded-5 { border-radius: 32px !important; }
                .border-primary-glow { border: 1px solid rgba(139, 92, 246, 0.4); box-shadow: inset 0 0 20px rgba(139, 92, 246, 0.1); }
                .hover-translate-up:hover { transform: translateY(-8px); }
                .hover-translate-right:hover { transform: translateX(8px); }
                @keyframes sectionFadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                .section-fade-in { animation: sectionFadeIn 0.5s ease-out both; }
                .thm-btn:hover { background: #02050A !important; color: #fff !important; }
                .solutions-swiper .swiper-pagination-bullet { background: #3D72FC; }
                .solutions-swiper .swiper-button-next, .solutions-swiper .swiper-button-prev { color: #3D72FC; }
                .pulse-dot { width: 8px; height: 8px; border-radius: 50%; position: relative; }
                .pulse-dot::after { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 50%; background: inherit; animation: pulse 2s infinite; }
                @keyframes pulse { 0% { transform: scale(1); opacity: 0.8; } 100% { transform: scale(3); opacity: 0; } }
                .rotate-hint { transition: transform 0.8s ease; }
                .hover-translate-up:hover .rotate-hint { transform: rotate(2deg) scale(1.02); }

                .flowing-data-line {
                    background: linear-gradient(90deg, transparent, rgba(61, 114, 252, 0.6), transparent);
                    background-size: 200% 100%;
                    animation: dataFlowAnim 4s linear infinite;
                }
                @keyframes dataFlowAnim { from { background-position: 200% 0; } to { background-position: -200% 0; } }

                .data-grid-animate {
                    background-image: linear-gradient(rgba(139, 92, 246, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.08) 1px, transparent 1px);
                    background-size: 40px 40px;
                    width: 100%; height: 100%;
                    mask-image: radial-gradient(circle at 50% 50%, black 20%, transparent 80%);
                    animation: gridShift 80s linear infinite;
                }
                @keyframes gridShift { from { background-position: 0 0; } to { background-position: 400px 400px; } }

                .glare-swipe-animate {
                    position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
                    background: linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.4) 50%, transparent 55%);
                    animation: glassGlare 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                }
                @keyframes glassGlare { from { transform: translateX(-50%) translateY(-50%); } to { transform: translateX(50%) translateY(50%); } }

                .benefit-flow-card:hover .icon-box-vibrant { transform: translateY(-5px) scale(1.05); box-shadow: 0 15px 40px rgba(139, 92, 246, 0.4) !important; filter: brightness(1.1); }
                .benefit-flow-card:hover h4 { color: #8B5CF6 !important; text-shadow: 0 0 10px rgba(139, 92, 246, 0.3); }
            `}} />
        </Layout>
    )
}