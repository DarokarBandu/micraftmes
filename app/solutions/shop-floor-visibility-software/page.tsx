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
    { id: "hero", label: "Visibility Overview", icon: "fas fa-eye" },
    { id: "problems", label: "The Challenges", icon: "fas fa-exclamation-triangle" },
    { id: "what-is", label: "Digital Definition", icon: "fas fa-layer-group" },
    { id: "how-it-works", label: "Operational Logic", icon: "fas fa-sync" },
    { id: "key-features", label: "Core Platform", icon: "fas fa-desktop" },
    { id: "benefits", label: "Strategic Benefits", icon: "fas fa-gem" },
    { id: "industries", label: "Industry Focus", icon: "fas fa-industry" },
    { id: "why-micraft", label: "The Micraft Advantage", icon: "fas fa-star" },
    { id: "related", label: "Related Solutions", icon: "fas fa-th-large" },
]

export default function ShopFloorVisibilitySoftwarePage() {
    const { activeId: activeSection, scrollTo } = useScrollSpy(sections.map(s => s.id));

    return (
        <Layout headerStyle={1} footerStyle={2}>

            <Breadcrumb breadcrumbTitle="Shop Floor Visibility Software" />

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
                                                        <span className="section-title__tagline text-primary">MICRAFT MES VISIBILITY</span>
                                                    </div>
                                                    <AnimatedTitle>
                                                        <h1 className="section-title__title title-animation mb-4" style={{ lineHeight: '1.0', fontSize: '48px' }}>
                                                            Shop Floor <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Visibility Software for Real-Time Production Monitoring</span>
                                                        </h1>
                                                    </AnimatedTitle>
                                                </div>
                                                <div className="mt-4 pe-xl-5">
                                                    <h2 className="text-white mb-4 fw-medium" style={{ fontSize: '20px', lineHeight: '1.6', borderLeft: '4px solid #3D72FC', paddingLeft: '20px', opacity: 0.9 }}>
                                                        Gain complete real-time visibility of your factory floor operations. Monitor production status, machine activity, inspection results, packing progress, and dispatch updates from a single digital dashboard.
                                                    </h2>
                                                    <p className="text-white-50 mt-4 opacity-80 lh-lg" style={{ fontSize: '16px' }}>
                                                        Micraft MES enables manufacturers to eliminate production blind spots by providing live shop floor insights, helping plant managers and business owners track work orders, production progress, bottlenecks, and operator performance across the factory.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-12 mt-2">
                                                <div className="position-relative p-2 rounded-5 overflow-hidden shadow-2xl border-primary-glow mb-5" style={{ minHeight: '400px' }}>
                                                    <Image src="/assets/images/solutions/digital-production-dashboard-hero-1775021023737.png" alt="Shop Floor Visibility" fill style={{ objectFit: 'cover' }} className="rounded-4" priority />
                                                    <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-gradient-to-t from-dark to-transparent">
                                                        <div className="p-2 rounded-3 bg-primary bg-opacity-20 backdrop-blur-md border border-white border-opacity-10 d-inline-flex align-items-center gap-2">
                                                            <div className="pulse-dot bg-success" style={{ background: '#00D261' }}></div>
                                                            <span className="text-white fw-bold extra-small letter-spacing-1">REAL-TIME VISIBILITY V2 ACTIVE</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-flex flex-wrap gap-4">
                                                    <Link href="/contact" className="thm-btn rounded-pill shadow-primary-light" style={{ fontSize: '14px', padding: '12px 30px' }}>Request a Live Demo</Link>
                                                    <Link href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollTo('how-it-works'); }} className="btn btn-outline-light rounded-pill fw-bold border-2" style={{ fontSize: '14px', padding: '12px 28px' }}>See How It Works</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                {/* 2. Problem Section */}
                                <section id="problems" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="section-title text-left mb-4">
                                            <div className="section-title__tagline-box">
                                                <span className="section-title__tagline" style={{ color: '#FA5674' }}>The Hidden Problem</span>
                                            </div>
                                            <AnimatedTitle>
                                                <h2 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.2' }}>The Hidden Problem in <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Most Factory Floors</span></h2>
                                            </AnimatedTitle>
                                        </div>
                                        <p className="text-white-50 mb-3 opacity-80 pe-xl-5" style={{ fontSize: '16px' }}>Many manufacturing units still rely on manual production updates, paper-based reporting, and delayed communication between shop floor operators and management. This leads to:</p>

                                        <div className="row g-4 mt-2">
                                            {[
                                                { text: "Lack of Visibility", sub: "Lack of real-time production visibility.", icon: "fas fa-eye-slash", color: "#6065D4", label: "BLIND SPOT" },
                                                { text: "Delayed Bottlenecks", sub: "Delayed identification of bottlenecks.", icon: "fas fa-exclamation-triangle", color: "#FA5674", label: "LATENCY" },
                                                { text: "Inaccurate Reporting", sub: "Inaccurate production reporting data.", icon: "fas fa-file-invoice", color: "#7366CA", label: "DATA GAP" },
                                                { text: "Work Order Drift", sub: "Difficulty tracking work order progress.", icon: "fas fa-tasks", color: "#00D261", label: "INERTIA" },
                                                { text: "Missed Commitments", sub: "Production delays leading to missed delivery commitments.", icon: "fas fa-calendar-times", color: "#3D72FC", label: "RISK" }
                                            ].map((item, i) => (
                                                <div key={i} className="col-lg-4 col-md-6">
                                                    <div className="p-3 p-lg-4 rounded-4 border border-white border-opacity-5 h-100 transition-all hover-translate-up" style={{ background: 'rgba(255,255,255,0.03)', position: 'relative', overflow: 'hidden' }}>
                                                        <div className="position-absolute" style={{ top: '-30%', right: '-15%', width: '120px', height: '120px', borderRadius: '50%', background: `${item.color}08`, filter: 'blur(35px)', zIndex: 0 }}></div>
                                                        <div className="d-flex flex-column h-100 position-relative" style={{ zIndex: 1 }}>
                                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                                <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: '48px', height: '48px', background: `${item.color}25`, border: `1px solid ${item.color}40` }}>
                                                                    <i className={`${item.icon} fs-5`} style={{ color: item.color }}></i>
                                                                </div>
                                                                <span className="badge rounded-pill px-2 py-1" style={{ fontSize: '8px', fontWeight: '800', background: `${item.color}20`, color: item.color, border: `1px solid ${item.color}40` }}>{item.label}</span>
                                                            </div>
                                                            <h3 className="text-white h6 mb-2 fw-bold">{item.text}</h3>
                                                            <p className="text-white-50 mb-0 opacity-60" style={{ fontSize: '13px', lineHeight: '1.5' }}>{item.sub}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            <div className="col-12 mt-4 p-4 rounded-5" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                <p className="text-white extra-small mb-0 opacity-80 lh-lg">Without real-time shop floor visibility, factory managers often discover problems only after production delays occur. <span className="text-primary fw-bold">Micraft MES solves this by bringing real-time digital visibility to every stage of production.</span></p>
                                            </div>
                                        </div>
                                    </section>

                                {/* 3. What is Section */}
                                <section id="what-is" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="row g-5 align-items-center">
                                            <div className="col-xl-6">
                                                <div className="section-title text-left mb-5">
                                                    <div className="section-title__tagline-box mb-3">
                                                        <span className="section-title__tagline text-primary">Core Definition</span>
                                                    </div>
                                                    <AnimatedTitle>
                                                        <h2 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.1' }}>What is Shop Floor <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Visibility Software?</span></h2>
                                                    </AnimatedTitle>
                                                    <p className="text-white-50 mt-4 opacity-80 lh-lg" style={{ fontSize: '15px' }}>
                                                        Shop Floor Visibility Software is a digital system that allows manufacturers to monitor and track production activities in real time across the factory floor. It provides centralized insights into every operational pulse, helping manufacturers detect production delays early, optimize resources, and improve operational efficiency. <strong>Micraft MES provides a simple and powerful shop floor monitoring platform designed specifically for small and mid-sized manufacturing units.</strong>
                                                    </p>
                                                </div>

                                                <div className="row g-3">
                                                    {[
                                                        { t: "Work order progress", icon: "fas fa-chart-line", gradient: "linear-gradient(135deg, #3D72FC 0%, #6065D4 100%)" },
                                                        { t: "Machine activity", icon: "fas fa-robot", gradient: "linear-gradient(135deg, #FFB01F 0%, #FA5674 100%)" },
                                                        { t: "Production output", icon: "fas fa-box-open", gradient: "linear-gradient(135deg, #00D261 0%, #3D72FC 100%)" },
                                                        { t: "Inspection results", icon: "fas fa-vial", gradient: "linear-gradient(135deg, #8B7DEC 0%, #7366CA 100%)" },
                                                        { t: "Packing status", icon: "fas fa-archive", gradient: "linear-gradient(135deg, #5EEAD4 0%, #3D72FC 100%)" },
                                                        { t: "Dispatch readiness", icon: "fas fa-truck-loading", gradient: "linear-gradient(135deg, #FA5674 0%, #FFB01F 100%)" }
                                                    ].map((box, i) => (
                                                        <div key={i} className="col-md-6">
                                                            <div className="d-flex align-items-center gap-3 p-4 rounded-4 transition-all hover-translate-up h-100" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                                <div className="icon-wrap p-2 rounded-3 d-flex align-items-center justify-content-center" style={{ background: box.gradient, minWidth: '40px', height: '40px' }}>
                                                                    <i className={`${box.icon} text-white extra-small`}></i>
                                                                </div>
                                                                <h3 className="text-white h6 mb-0 fw-bold extra-small">{box.t}</h3>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="position-relative p-2 rounded-5 overflow-hidden shadow-2xl bg-dark h-100 border-primary-glow" style={{ minHeight: '450px' }}>
                                                    <Image src="/assets/images/solutions/shop-floor-visibility.png" alt="Visibility" fill className="rounded-4" style={{ objectFit: 'cover', padding: '10px' }} />
                                                    <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-primary bg-opacity-70 backdrop-blur-md text-white text-center h6 mb-0 letter-spacing-2">
                                                        CENTRALIZED REAL-TIME INSIGHTS
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                {/* 4. How it Works Section */}
                                <section id="how-it-works" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="section-title text-center mb-4">
                                            <div className="section-title__tagline-box mx-auto">
                                                <span className="section-title__tagline text-info">Operational Flow</span>
                                            </div>
                                            <AnimatedTitle>
                                                <h2 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.2' }}>How Micraft MES Gives You <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Complete Shop Floor Control</span></h2>
                                            </AnimatedTitle>
                                        </div>

                                        <div className="p-4 p-lg-5 rounded-5 shadow-2xl position-relative overflow-hidden mb-5"
                                            style={{ background: 'rgba(11, 15, 25, 0.4)', border: '1px solid rgba(61, 114, 252, 0.1)', backdropFilter: 'blur(10px)' }}>

                                            <div className="section-title text-left mb-5">
                                                <p className="text-white extra-small opacity-80" style={{ fontSize: '15px' }}>
                                                    Micraft MES connects production processes, operators, and management through a centralized production tracking system. Production data is captured from the shop floor and displayed in live dashboards, enabling management teams to monitor operations without physically visiting every workstation.
                                                </p>
                                            </div>

                                            <div className="row g-4 relative">
                                                {[
                                                    { t: "Track Orders", d: "Track production orders in real time.", i: "1" },
                                                    { t: "Stage Monitoring", d: "Monitor stage-wise progress of jobs.", i: "2" },
                                                    { t: "Instant Bottlenecks", d: "Identify bottlenecks instantly.", i: "3" },
                                                    { t: "Quality Status", d: "Track inspection status and rejections.", i: "4" },
                                                    { t: "Ready for Dispatch", d: "Monitor packing and dispatch readiness.", i: "5" },
                                                    { t: "Remote Access", d: "Access production insights from anywhere.", i: "6" }
                                                ].map((step, i) => (
                                                    <div key={i} className="col-lg-4 col-md-6 mb-3">
                                                        <div className="p-3 p-lg-4 rounded-5 border border-white border-opacity-5 text-center h-100 transition-all hover-translate-up" style={{ background: 'rgba(255,255,255,0.02)' }}>
                                                            <div className="h1 text-primary-light mb-3 opacity-20 fw-900">{step.i}</div>
                                                            <h3 className="text-white h6 mb-2 fw-bold">{step.t}</h3>
                                                            <p className="text-white-50 extra-small mb-0 opacity-60" style={{ fontSize: '13px' }}>{step.d}</p>
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
                                                <span className="section-title__tagline text-primary">Toolkit</span>
                                            </div>
                                            <AnimatedTitle>
                                                <h2 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.2' }}>Key Features of <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Micraft Shop Floor Visibility Software</span></h2>
                                            </AnimatedTitle>
                                        </div>
                                        <div className="row g-4">
                                            {[
                                                { t: "Real-Time Production Tracking", d: "Monitor the progress of work orders across all production stages.", i: "fas fa-location-arrow", c: "LIVE FLOW" },
                                                { t: "Digital Shop Floor Dashboard", d: "View live production updates through an easy-to-understand visual dashboard.", i: "fas fa-desktop", c: "VISUALS" },
                                                { t: "Stage-Wise Production Monitoring", d: "Track production activities such as machining, assembly, inspection, packing, and dispatch.", i: "fas fa-layer-group", c: "STAGES" },
                                                { t: "Operator Activity Tracking", d: "Understand operator productivity and job status across shifts.", i: "fas fa-user-clock", c: "SQUAD" },
                                                { t: "Bottleneck Detection", d: "Identify production delays quickly and take corrective action.", i: "fas fa-bolt", c: "AGILITY" },
                                                { t: "Inspection & Quality Tracking", d: "Track quality checks and rejection data during production.", i: "fas fa-clipboard-check", c: "ZERO DEFECT" },
                                                { t: "Packing & Dispatch Monitoring", d: "Ensure production completion aligns with dispatch schedules.", i: "fas fa-truck-loading", c: "LOGISTICS" }
                                            ].map((f, i) => (
                                                <div key={i} className="col-lg-4 col-md-6">
                                                    <div className="capability-card h-100 p-4 rounded-5 position-relative overflow-hidden transition-all hover-translate-up" style={{ background: '#0F172A', border: '1px solid rgba(139, 92, 246, 0.1)' }}>
                                                        <div className="d-flex flex-column h-100 position-relative" style={{ zIndex: 1 }}>
                                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                                <div className="icon-container d-flex align-items-center justify-content-center rounded-circle" style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, #3D72FC 0%, #00D2FF 100%)' }}>
                                                                    <i className={`${f.i} text-white fs-4`}></i>
                                                                </div>
                                                                <span className="text-uppercase letter-spacing-2 fw-bold text-white-50" style={{ fontSize: '9px', opacity: '0.4' }}>{f.c}</span>
                                                            </div>
                                                            <h3 className="text-white h5 mb-3 fw-bold">{f.t}</h3>
                                                            <p className="text-white-50 extra-small opacity-70 lh-lg" style={{ fontSize: '13px' }}>{f.d}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                {/* 6. Benefits Section */}
                                <section id="benefits" className="pt-0 pb-4 section-anchor section-fade-in premium-flow-section">
                                        <div className="p-xl-5 ps-3 pe-3 p-4 rounded-5 position-relative overflow-hidden"
                                            style={{ background: 'rgba(7, 11, 20, 0.9)', border: '1px solid rgba(61, 114, 252, 0.25)', boxShadow: '0 30px 60px rgba(0,0,0,0.6)' }}>

                                            <div className="section-title text-center mb-5 position-relative" style={{ zIndex: 1 }}>
                                                <div className="section-title__tagline-box mx-auto mb-3">
                                                    <span className="section-title__tagline text-primary" style={{ letterSpacing: '4px', fontWeight: '900' }}>VALUE GENERATION</span>
                                                </div>
                                                <AnimatedTitle>
                                                    <h2 className="section-title__title title-animation mb-3" style={{ lineHeight: '1.2' }}>Benefits of Implementing <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Shop Floor Visibility Software</span></h2>
                                                </AnimatedTitle>
                                                <p className="text-white-50 extra-small opacity-60 mx-auto" style={{ maxWidth: '650px' }}>
                                                    Manufacturers using Micraft MES gain significant operational advantages through deep-floor transparency.
                                                </p>
                                            </div>

                                            <div className="benefits-flow-container position-relative mt-5 pt-4" style={{ zIndex: 1 }}>
                                                <div className="row g-4 justify-content-center position-relative" style={{ zIndex: 1 }}>
                                                    {[
                                                        { b: "Improved Production Transparency", d: "Know exactly what is happening on the factory floor at any moment.", i: "fas fa-eye", c1: "#3D72FC", c2: "#00D2FF" },
                                                        { b: "Faster Decision Making", d: "Real-time insights enable quicker production adjustments.", i: "fas fa-bolt", c1: "#00D261", c2: "#3D72FC" },
                                                        { b: "Reduced Production Delays", d: "Detect bottlenecks early and prevent disruptions.", i: "fas fa-clock", c1: "#FA5674", c2: "#FB923C" },
                                                        { b: "Better Resource Utilization", d: "Optimize machine and manpower usage efficiently.", i: "fas fa-sync-alt", c1: "#8B7DEC", c2: "#7366CA" },
                                                        { b: "Accurate Production Reporting", d: "Generate reliable production reports for management.", i: "fas fa-chart-line", c1: "#FFB01F", c2: "#FDE047" },
                                                        { b: "Improved Delivery Commitments", d: "Ensure production schedules align with dispatch timelines.", i: "fas fa-truck-loading", c1: "#00D2FF", c2: "#3D72FC" }
                                                    ].map((item, i) => (
                                                        <div key={i} className="col-lg-4 col-md-6">
                                                            <div className="benefit-flow-card p-4 rounded-4 transition-all hover-translate-up" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                                <div className="icon-box-vibrant mb-4 d-flex align-items-center justify-content-center rounded-4 shadow-lg overflow-hidden position-relative"
                                                                    style={{ width: '64px', height: '64px', background: `linear-gradient(135deg, ${item.c1} 0%, ${item.c2} 100%)` }}>
                                                                    <i className={`${item.i} text-white fs-4 position-relative`} style={{ zIndex: 1 }}></i>
                                                                </div>
                                                                <h4 className="text-white h6 mb-2 fw-bold" style={{ fontSize: '14px', letterSpacing: '0.5px' }}>{item.b}</h4>
                                                                <p className="text-white-50 extra-small opacity-60 mb-0" style={{ fontSize: '12px', lineHeight: '1.5' }}>{item.d}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                {/* 7. Industries Section */}
                                <section id="industries" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="text-left mb-5">
                                            <div className="section-title__tagline-box mb-3">
                                                <span className="section-title__tagline text-primary">Vertical Segments</span>
                                            </div>
                                            <AnimatedTitle>
                                                <h2 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.2' }}>Designed for <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Manufacturing SMEs</span></h2>
                                            </AnimatedTitle>
                                            <p className="text-white-50 mt-4 opacity-70 lh-relaxed max-w-700">Micraft MES is ideal for small and mid-sized manufacturing companies such as Automotive, CNC, Fabrication, Plastic, and Electronics manufacturing units. The platform is designed to be easy to implement, scalable, and cost-effective.</p>
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
                                                    <div className="industry-segment-card p-4 rounded-5 position-relative overflow-hidden h-100 transition-all hover-translate-up" style={{ background: '#0F172A', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                        <div className="icon-box mb-4 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '64px', height: '64px', background: 'rgba(61, 114, 252, 0.1)' }}>
                                                            <i className={`${ind.i} fs-3 text-primary`}></i>
                                                        </div>
                                                        <h3 className="text-white h6 mb-3 fw-bold">{ind.t}</h3>
                                                        <div className="pt-3 border-top border-white border-opacity-5 mt-auto">
                                                            <Link href={ind.link} className="extra-small text-primary hover-underline fw-bold">Explore Case Study <i className="fas fa-arrow-right ms-1"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                {/* 8. Why Micraft Section */}
                                <section id="why-micraft" className="pt-0 pb-4 section-anchor section-fade-in">
                                        <div className="p-4 p-xl-5 rounded-5 shadow-2xl position-relative overflow-hidden" style={{ background: 'rgba(15, 23, 42, 0.3)', border: '1px solid rgba(61, 114, 252, 0.1)' }}>
                                            <div className="section-title text-center mb-5 max-w-800 mx-auto">
                                                <div className="section-title__tagline-box mx-auto mb-3">
                                                    <span className="section-title__tagline text-primary">The Micraft Edge</span>
                                                </div>
                                                <AnimatedTitle>
                                                    <h2 className="section-title__title title-animation responsive-h2" style={{ lineHeight: '1.2' }}>Why Manufacturers Choose <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Micraft MES</span></h2>
                                                </AnimatedTitle>
                                                <p className="text-white-50 mt-4 opacity-70 lh-relaxed max-w-700 mx-auto" style={{ fontSize: '15px' }}>
                                                    Unlike complex enterprise systems, Micraft MES is built specifically for manufacturing SMEs requiring practical shop floor visibility without implementation overhead.
                                                </p>
                                            </div>

                                            <div className="row g-3">
                                                {[
                                                    { t: "Fast Deployment", d: "Minimal disruption methodology to get your factory live in weeks.", i: "fas fa-rocket", c: "#3D72FC" },
                                                    { t: "Intuitive Interface", d: "Designed for rapid, zero-friction adoption by shop floor operators.", i: "fas fa-mouse-pointer", c: "#00D261" },
                                                    { t: "Live Visibility", d: "Real-time accurate data for immediate floor control and decisioning.", i: "fas fa-chart-line", c: "#FA5674" },
                                                    { t: "Modular Core", d: "Scalable architecture that grows and adapts with your production volume.", i: "fas fa-expand-arrows-alt", c: "#8B5CF6" },
                                                    { t: "Localized Design", d: "Purpose-built specifically for Indian manufacturing shop floor environments.", i: "fas fa-shield-alt", c: "#7366CA" },
                                                    { t: "Cost-Effective", d: "High-impact digital transformation optimized for SME capital efficiency.", i: "fas fa-hand-holding-usd", c: "#3D72FC" }
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

                                {/* 10. Related Solutions - The Industry Ecosystem Carousel */}
                                <section id="related" className="py-4 section-anchor section-fade-in">
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

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CALL TO ACTION */}
            <section className="newsletter-one newsletter-three" style={{ padding: '60px 0 30px 0' }}>
                <div className="container">
                    <div className="newsletter-one__inner" style={{ background: 'linear-gradient(90deg, #3D72FC 0%, #070B14 100%)' }}>
                        <div className="newsletter-one__shape-bg" style={{ backgroundImage: "url(/assets/images/shapes/newsletter-one-shape-bg.png)" }}></div>
                        <div className="newsletter-one__img">
                            <Image src="/assets/images/backgrounds/cta.png" alt="CTA" width={280} height={280} priority />
                        </div>
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-10" style={{ position: 'relative', zIndex: 5 }}>
                                <AnimatedTitle>
                                    <h2 className="newsletter-one__title text-white mb-20" style={{ lineHeight: '1.2', fontSize: '36px', fontWeight: '700' }}>
                                        Get Complete Visibility of <br />
                                        <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }}>Your Shop Floor</span>
                                    </h2>
                                </AnimatedTitle>
                                <p className="newsletter-one__text text-white mb-40 mx-auto" style={{ maxWidth: '750px' }}>
                                    Stop relying on delayed production reports and manual tracking. Gain real-time control over your factory operations with Micraft MES. Book a Live Demo today and see how Micraft MES transforms shop floor visibility.
                                </p>
                                <div className="cta-btns d-flex flex-wrap justify-content-center gap-4">
                                    <Link href="/contact" className="thm-btn" style={{ background: '#0B192C', color: '#fff', fontSize: '14px', padding: '12px 30px' }}>
                                        Schedule Your Demo <i className="fas fa-arrow-right ms-2 mt-1"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .newsletter-three { padding: 40px 0 !important; }
                    .newsletter-one__img { position: absolute; right: 40px; top: 50%; transform: translateY(-50%); display: flex; align-items: center; z-index: 2; }
                    .thm-btn:hover { background: #fff !important; color: #0B192C !important; }
                    @media (max-width: 991px) { .newsletter-one__img { display: none !important; } }
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
                .data-pulse-path { stroke-dasharray: 40 1000; animation: rotate-pulse 5s linear infinite; }
                @keyframes rotate-pulse { from { stroke-dashoffset: 1131; } to { stroke-dashoffset: 0; } }
                @keyframes sectionFadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                .section-fade-in { animation: sectionFadeIn 0.5s ease-out both; }
                .hover-translate-right:hover { transform: translateX(10px); }
                .infographic-container:hover .hover-scale-105 { transform: scale(1.05); }
                
                .flowing-data-line {
                    background: linear-gradient(90deg, transparent, rgba(61, 114, 252, 0.6), transparent);
                    background-size: 200% 100%;
                    animation: dataFlowAnim 4s linear infinite;
                }
                @keyframes dataFlowAnim { from { background-position: 200% 0; } to { background-position: -200% 0; } }

                .data-grid-animate {
                    background-image: linear-gradient(rgba(61, 114, 252, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(61, 114, 252, 0.08) 1px, transparent 1px);
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

                .benefit-flow-card:hover .icon-box-vibrant { transform: translateY(-5px) scale(1.05); box-shadow: 0 15px 40px rgba(61, 114, 252, 0.4) !important; filter: brightness(1.1); }
                .benefit-flow-card:hover h4 { color: #3D72FC !important; text-shadow: 0 0 10px rgba(61, 114, 252, 0.3); }
            `}} />

        </Layout>
    )
}
