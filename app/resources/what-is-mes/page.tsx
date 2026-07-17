"use client"
import Layout from "../../../components/layout/Layout"
import Breadcrumb from "../../../components/layout/Breadcrumb"
import Link from "next/link"
import Image from "next/image"
import AnimatedTitle from "../../../components/elements/AnimatedTitle"
import FinalCTA from "../../../components/sections/home1/FinalCTA"

export default function WhatIsMesPage() {
    return (
        <Layout headerStyle={1} footerStyle={2}>
            {/* Meta tags can be placed in a dedicated metadata component or handled globally */}
            <Breadcrumb breadcrumbTitle="What is MES?" />

            {/* 1. Hero Section */}
            <section className="mes-hero pt-100 pb-100 overflow-hidden bg-dark-depth" id="hero">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="section-title text-left">
                                <AnimatedTitle>
                                    <h1 className="section-title__title text-white">
                                        What is a <span>MES ?</span> <br /> Complete Guide for Manufacturers
                                    </h1>
                                </AnimatedTitle>
                            </div>
                            <div className="mt-4 text-white">
                                <p className="text-white-50 mb-3 text-medium">
                                    Understand how Manufacturing Execution Systems help factories track production, monitor shop floor operations, and improve manufacturing performance through real-time production visibility.
                                </p>
                                <p className="text-white-50 mb-3 text-medium">
                                    A Manufacturing Execution System (MES) is a digital platform that connects factory operations with real-time production monitoring. It enables manufacturers to track work orders, monitor machines, manage inspections, and gain complete visibility of shop floor activities.
                                </p>
                                <p className="text-white-50 mb-5 text-medium">
                                    Modern MES platforms help manufacturing companies digitize operations, improve efficiency, and make data-driven decisions.
                                </p>
                                <div className="btn-box">
                                    <Link href="#definition" className="thm-btn">Read the Guide <span className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="hero-img-wrap p-2 bg-dark rounded-5 border border-secondary border-opacity-10 overflow-hidden shadow-2xl">
                                <Image
                                    src="/assets/images/backgrounds/Realtimeshopfloor.jpg"
                                    alt="Manufacturing Execution System Software"
                                    width={600}
                                    height={500}
                                    className="img-fluid rounded-4 img-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. What is a Manufacturing Execution System? */}
            <section id="definition" className="definition-section pt-100 pb-100 bg-dark-alt">
                <div className="container">
                    <div className="row align-items-center g-5">
                        {/* Image Column */}
                        <div className="col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay="100ms">
                            <div className="definition-img-wrapper">
                                <div className="glow-shape-1"></div>
                                <div className="glow-shape-2"></div>
                                <div className="definition-img-container rounded-5 overflow-hidden shadow-2xl border border-secondary border-opacity-10">
                                    <Image
                                        src="/assets/images/resources/mes_digital_bridge_overview.png"
                                        alt="MES Digital Bridge Overview"
                                        width={800}
                                        height={600}
                                        className="img-fluid hover-zoom"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="col-lg-6 order-lg-1 wow fadeInLeft" data-wow-delay="200ms">
                            <div className="section-title text-left mb-4">
                                <span className="section-title__tagline tagline-glow">Core Manufacturing Concept</span>
                                <h2 className="section-title__title text-white">Definition of <span>Manufacturing Execution System (MES)</span></h2>
                            </div>

                            <div className="text-white-50">
                                <p className="mb-4 text-highlight-premium">
                                    A Manufacturing Execution System (MES) is a software platform that monitors and manages production activities on the factory floor in real time.
                                </p>

                                {/* Bridge Visualization */}
                                <div className="bridge-viz p-4 rounded-4 mb-4 border border-secondary border-opacity-10">
                                    <p className="mb-3 text-white-50 fw-500">MES acts as a mission-critical bridge:</p>
                                    <div className="bridge-nodes d-flex align-items-center justify-content-between p-3 rounded-4 bg-glass-dark">
                                        <div className="node text-center">
                                            <div className="node-icon icon-bg-erp mb-2"><i className="fas fa-server"></i></div>
                                            <span className="text-white small fw-bold">Enterprise (ERP)</span>
                                        </div>
                                        <div className="node-connector flex-grow-1 mx-3">
                                            <div className="connector-line"></div>
                                            <div className="connector-pulse"></div>
                                        </div>
                                        <div className="node text-center">
                                            <div className="node-icon icon-bg-mes mb-2 text-white bg-accent-glow"><i className="fas fa-sync-alt fa-spin-slow"></i></div>
                                            <span className="text-white small fw-bold">MES HUB</span>
                                        </div>
                                        <div className="node-connector flex-grow-1 mx-3">
                                            <div className="connector-line"></div>
                                            <div className="connector-pulse"></div>
                                        </div>
                                        <div className="node text-center">
                                            <div className="node-icon icon-bg-shop mb-2"><i className="fas fa-industry"></i></div>
                                            <span className="text-white small fw-bold">Shop Floor</span>
                                        </div>
                                    </div>
                                    <p className="mt-3 text-white-50 small">It captures production data from machines, operators, and workstations and converts it into real-time operational insights.</p>
                                </div>

                                {/* Trackable Items Grid */}
                                <div className="tracking-grid-premium">
                                    <h4 className="text-white mb-3 text-h4-premium">Critical Production Visibility:</h4>
                                    <div className="row g-3">
                                        {[
                                            { t: 'Production Orders', i: 'clipboard-list' },
                                            { t: 'Machine Activity', i: 'cogs' },
                                            { t: 'Operator Performance', i: 'users-cog' },
                                            { t: 'Inspection Results', i: 'microscope' },
                                            { t: 'Production Output', i: 'box' },
                                            { t: 'Dispatch Readiness', i: 'truck-loading' }
                                        ].map((item, idx) => (
                                            <div key={idx} className="col-md-6">
                                                <div className="tracking-item-premium d-flex align-items-center gap-3 p-2 px-3 rounded-3">
                                                    <i className={`fas fa-${item.i} text-primary-glow`}></i>
                                                    <span className="text-white-50 small">{item.t}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="mt-4 text-accent-soft fw-bold mb-0">This enables factory managers to gain complete visibility of manufacturing operations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Why Modern Factories Need MES */}
            <section className="why-need-mes pt-100 pb-100 bg-dark-depth">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <h2 className="section-title__title text-white">Why Modern Factories Need <span>Manufacturing Execution Systems</span></h2>
                    </div>
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="challenge-card p-5 rounded-4 h-100 card-challenge">
                                <h3 className="text-white mb-4"><i className="fas fa-exclamation-triangle me-2 text-danger"></i> The Problem: Manual Methods</h3>
                                <p className="text-white-50 mb-4">Many manufacturing companies still rely on manual methods such as paper production registers, spreadsheets, and verbal updates from supervisors. These methods create operational blind spots.</p>
                                <h4 className="text-white mb-3 text-h4">Common challenges include:</h4>
                                <ul className="list-unstyled d-flex flex-column gap-2 text-white-50">
                                    <li><i className="fas fa-times-circle me-2 text-danger"></i> lack of real-time production visibility</li>
                                    <li><i className="fas fa-times-circle me-2 text-danger"></i> delayed identification of production bottlenecks</li>
                                    <li><i className="fas fa-times-circle me-2 text-danger"></i> inaccurate production reporting</li>
                                    <li><i className="fas fa-times-circle me-2 text-danger"></i> inefficient resource utilization</li>
                                    <li><i className="fas fa-times-circle me-2 text-danger"></i> difficulty tracking work orders</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="solution-card p-5 rounded-4 h-100 card-solution">
                                <h3 className="text-white mb-4"><i className="fas fa-check-circle me-2 text-success"></i> The Solution: MES Software</h3>
                                <p className="text-white mb-4 text-medium">MES software solves these challenges by providing live production monitoring and digital manufacturing control.</p>
                                <div className="solution-img rounded-4 overflow-hidden mt-4">
                                    <Image src="/assets/images/backgrounds/PracticalImplementation.jpg" alt="Shop floor monitoring software" width={500} height={300} className="img-fluid img-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. How MES Works */}
            <section className="how-mes-works pt-100 pb-100 bg-dark-surface">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <h2 className="section-title__title text-white">How MES Works <span>in a Factory</span></h2>
                        <p className="text-white-50 mt-3 max-w-2xl mx-auto">
                            A Manufacturing Execution System collects production data from shop floor activities and organizes it into centralized dashboards.
                        </p>
                    </div>
                    <div className="workflow-flow-container wow fadeInUp" data-wow-delay="200ms">
                        <div className="row g-4 justify-content-center">
                            {[
                                { t: "Order Creation", d: "Production orders are created in the system", i: "file-invoice-dollar" },
                                { t: "Live Execution", d: "Operators update work order progress during production", i: "tablet-alt" },
                                { t: "Machine Connect", d: "Machine activity and output are recorded", i: "microchip" },
                                { t: "Digital Quality", d: "Inspection results are captured digitally", i: "clipboard-check" },
                                { t: "Smart Dispatch", d: "Packing and dispatch readiness are tracked", i: "shipping-fast" }
                            ].map((step, idx) => (
                                <div key={idx} className="col-lg-2-5 col-md-4 col-sm-6 text-center workflow-node-col">
                                    <div className="workflow-node-inner">
                                        <div className={`workflow-icon-box node-color-${idx % 2 === 0 ? 'primary' : 'accent'}`}>
                                            <i className={`fas fa-${step.i}`}></i>
                                            {/* Connector arrow for next items except the last one */}
                                            {idx < 4 && <div className="flow-connector-arrow d-none d-lg-block"><i className="fas fa-chevron-right"></i></div>}
                                        </div>
                                        <div className="workflow-content-premium mt-4 pt-2">
                                            <h4 className="text-white small fw-bold text-uppercase mb-2" style={{ letterSpacing: '1px' }}>{step.t}</h4>
                                            <p className="text-white-50 small-text-relaxed mb-0">{step.d}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-center mt-60 wow fadeIn" data-wow-delay="500ms">
                        <div className="dashboard-callout p-4 mt-3 rounded-4 bg-glass-dark border border-secondary border-opacity-10 d-inline-block">
                            <p className="text-white mb-0 text-medium-weight d-flex align-items-center gap-3">
                                <i className="fas fa-chart-line text-accent"></i>
                                Real-time dashboards enable instant factory monitoring.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Key Functions of MES */}
            <section className="key-functions pt-100 pb-100 bg-dark-alt">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <h2 className="section-title__title text-white">Core Functions of <span>MES Software</span></h2>
                        <p className="text-white-50 mt-3">Modern MES platforms provide several capabilities to improve manufacturing operations.</p>
                    </div>
                    <div className="row g-4">
                        {[
                            { title: "Production Tracking", desc: "Track work order progress across production stages.", link: "/solutions/production-tracking-software", icon: "tasks" },
                            { title: "Shop Floor Visibility", desc: "Gain real-time visibility of shop floor operations.", link: "/solutions/shop-floor-visibility-software", icon: "eye" },
                            { title: "Machine Utilization Monitoring", desc: "Monitor machine activity and equipment productivity.", link: "/solutions/machine-utilization-tracking", icon: "industry" },
                            { title: "Manufacturing Process Tracking", desc: "Track multi-stage production workflows.", link: "/solutions/manufacturing-process-tracking", icon: "project-diagram" },
                            { title: "Quality Inspection Tracking", desc: "Record inspection results and track rejection data.", link: "/solutions/quality-inspection-tracking", icon: "check-double" },
                            { title: "Production Monitoring Dashboards", desc: "Visualize production performance through digital dashboards.", link: "/solutions/digital-production-dashboard", icon: "chart-pie" }
                        ].map((func, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 100}ms`}>
                                <div className="function-card p-4 rounded-4 h-100 d-flex flex-column function-card-base">
                                    <i className={`fas fa-${func.icon} fa-2x mb-3 icon-accent`}></i>
                                    <h4 className="text-white mb-2 text-h4">{func.title}</h4>
                                    <p className="text-white-50 mb-4 flex-grow-1">{func.desc}</p>
                                    <Link href={func.link} className="text-decoration-none d-flex align-items-center gap-2 link-explore">
                                        {func.title} Software <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-white mt-5">These capabilities enable manufacturers to digitize and optimize factory operations.</p>
                </div>
            </section>

            {/* 6. Benefits of Implementing MES */}
            <section className="mes-benefits pt-100 pb-100 position-relative overflow-hidden mes-benefits-bg">
                <div className="overlay-dark"></div>
                <div className="container relative-z2">
                    <div className="section-title text-center mb-60">
                        <h2 className="section-title__title text-white">Key Benefits of <span>Manufacturing Execution Systems</span></h2>
                        <p className="text-white-50 mt-3">Manufacturers implementing MES solutions gain several operational advantages.</p>
                    </div>
                    <div className="row g-4">
                        {[
                            { title: "Real-Time Production Visibility", desc: "Managers can monitor factory performance instantly." },
                            { title: "Improved Production Efficiency", desc: "Identify bottlenecks and optimize workflows." },
                            { title: "Better Machine Utilization", desc: "Track equipment productivity and reduce idle time." },
                            { title: "Improved Quality Control", desc: "Monitor inspection results and defect trends." },
                            { title: "Accurate Production Data", desc: "Access reliable operational data for decision making." },
                            { title: "Improved Delivery Performance", desc: "Ensure production stays aligned with dispatch schedules." }
                        ].map((ben, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 100}ms`}>
                                <div className="benefit-card p-4 rounded-4 text-center h-100 border border-secondary border-opacity-10 shadow-lg card-benefit-inner">
                                    <div className="icon-box mb-3 mx-auto icon-box-benefit">
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h4 className="text-white mb-2 text-h4">{ben.title}</h4>
                                    <p className="text-white-50 small mb-0">{ben.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. MES vs ERP */}
            <section className="mes-vs-erp pt-100 pb-100 bg-dark-depth overflow-hidden">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <h2 className="section-title__title text-white">Difference Between <span>MES and ERP</span> Systems</h2>
                        <p className="text-white-50 mt-3">Understanding the synergy between Planning and Execution.</p>
                    </div>

                    <div className="erp-mes-grid position-relative">
                        {/* Connecting 'Execution Engine' visual */}
                        <div className="execution-engine d-none d-lg-flex">
                            <div className="engine-core">
                                <i className="fas fa-microchip fa-spin-slow"></i>
                                <div className="engine-pulse"></div>
                            </div>
                        </div>

                        <div className="row g-4 align-items-stretch">
                            {/* ERP Side */}
                            <div className="col-lg-5 wow fadeInLeft" data-wow-delay="100ms">
                                <div className="comparison-pillar-card p-5 h-100 rounded-5 border border-secondary border-opacity-10 bg-glass-dark">
                                    <div className="pillar-header mb-4 text-center">
                                        <div className="pillar-icon bg-white text-dark mb-3"><i className="fas fa-brain"></i></div>
                                        <h3 className="text-white h2 mb-2">ERP</h3>
                                        <span className="text-white-50 small-text-bold">The Strategic Brain</span>
                                    </div>
                                    <div className="pillar-points d-flex flex-column gap-3">
                                        {[
                                            { t: "Macro Planning", d: "Manages overall business and financial planning.", i: "calendar-check" },
                                            { t: "Asset Management", d: "Handles high-level inventory and finance.", i: "wallet" },
                                            { t: "Historical Analysis", d: "Focuses on past performance for future strategy.", i: "history" }
                                        ].map((p, i) => (
                                            <div key={i} className="point-tile p-3 rounded-4 erp-tile-bg">
                                                <div className="d-flex align-items-start gap-3">
                                                    <i className={`fas fa-${p.i} mt-1 text-white-50`}></i>
                                                    <div>
                                                        <h4 className="text-white small fw-bold mb-1">{p.t}</h4>
                                                        <p className="text-white-50 small mb-0">{p.d}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Center Spacer for Mobile */}
                            <div className="col-lg-2 d-none d-lg-block"></div>

                            {/* MES Side */}
                            <div className="col-lg-5 wow fadeInRight" data-wow-delay="200ms">
                                <div className="comparison-pillar-card p-5 h-100 rounded-5 border border-accent border-opacity-20 accent-border-glow bg-glass-dark">
                                    <div className="pillar-header mb-4 text-center">
                                        <div className="pillar-icon bg-accent-glow text-white mb-3"><i className="fas fa-bolt"></i></div>
                                        <h3 className="text-white h2 mb-2">MES</h3>
                                        <span className="text-white-50 small-text-bold">The Tactical Engine</span>
                                    </div>
                                    <div className="pillar-points d-flex flex-column gap-3">
                                        {[
                                            { t: "Real-Time Execution", d: "Manages live shop floor operations as they occur.", i: "sync" },
                                            { t: "Operational Control", d: "Tracks production output and machine status.", i: "tachometer-alt" },
                                            { t: "Immediate Visibility", d: "Focus on live factory actions for instant control.", i: "eye" }
                                        ].map((p, i) => (
                                            <div key={i} className="point-tile p-3 rounded-4 bg-accent-glow-soft">
                                                <div className="d-flex align-items-start gap-3">
                                                    <i className={`fas fa-${p.i} mt-1 text-accent`}></i>
                                                    <div>
                                                        <h4 className="text-white small fw-bold mb-1">{p.t}</h4>
                                                        <p className="text-white-50 small mb-0">{p.d}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-50">
                        <p className="text-white-50 mb-4 mx-auto max-w-2xl">
                            While ERP handles the &quot;Why&quot; and &quot;What,&quot; MES handles the &quot;How&quot; and &quot;When.&quot; Together, they create a unified digital ecosystem.
                        </p>
                        <Link href="/resources/mes-vs-erp" className="thm-btn">Read Full Comparison Study <span className="icon-right-arrow"></span></Link>
                    </div>
                </div>
            </section>

            {/* 8. Industries That Use MES */}
            <section className="industries-marquee-section pt-100 pb-100 bg-dark-surface overflow-hidden">
                <div className="container-fluid p-0">
                    <div className="section-title text-center mb-50">
                        <h2 className="section-title__title text-white h3">Industries Powering Performance with <span>Micraft MES</span></h2>
                    </div>

                    <div className="marquee-wrapper position-relative">
                        {/* Edge Fades */}
                        <div className="marquee-fade-left"></div>
                        <div className="marquee-fade-right"></div>

                        <div className="marquee-container d-flex">
                            <div className="marquee-content d-flex gap-4">
                                {[
                                    "CNC Machining", "Automotive Components", "Metal Fabrication",
                                    "Injection Molding", "Electronics Assembly", "General Manufacturing",
                                    "Aerospace Parts", "Medical Devices", "Heavy Engineering", "Industrial Equipment"
                                ].map((ind, i) => (
                                    <div key={i} className="industry-badge-premium py-3 px-4 rounded-pill d-flex align-items-center gap-3 bg-glass-dark border border-secondary border-opacity-10">
                                        <div className="badge-dot pulse-primary"></div>
                                        <span className="text-white small fw-bold text-nowrap">{ind}</span>
                                    </div>
                                ))}
                                {/* Duplicate for seamless loop */}
                                {[
                                    "CNC Machining", "Automotive Components", "Metal Fabrication",
                                    "Injection Molding", "Electronics Assembly", "General Manufacturing",
                                    "Aerospace Parts", "Medical Devices", "Heavy Engineering", "Industrial Equipment"
                                ].map((ind, i) => (
                                    <div key={`dup-${i}`} className="industry-badge-premium py-3 px-4 rounded-pill d-flex align-items-center gap-3 bg-glass-dark border border-secondary border-opacity-10">
                                        <div className="badge-dot pulse-primary"></div>
                                        <span className="text-white small fw-bold text-nowrap">{ind}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9 & 10. Key Features & How Micraft Helps */}
            <section className="micraft-features-solution pt-100 pb-100 bg-dark-depth">
                <div className="container">
                    <div className="row g-5 align-items-center mb-80">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="section-title text-left mb-4">
                                <span className="section-title__tagline tagline-glow">System Capabilities</span>
                                <h2 className="section-title__title text-white">Advanced Features for <span>Modern Factories</span></h2>
                                <p className="text-white-50 mt-4 h6 fw-normal">
                                    Micraft MES provides a comprehensive suite of digital tools designed to transform shop floor data into actionable factory intelligence.
                                </p>
                            </div>
                            <div className="row g-3 mt-2">
                                {[
                                    { title: "Order Tracking", icon: "tasks", desc: "Real-time visibility of every production stage." },
                                    { title: "Floor Monitoring", icon: "broadcast-tower", desc: "Live status updates from across the factory." },
                                    { title: "Machine Analytics", icon: "microchip", desc: "Deep insights into equipment efficiency." },
                                    { title: "Quality Loops", icon: "check-double", desc: "Integrated digital inspection checkpoints." }
                                ].map((feat, i) => (
                                    <div key={i} className="col-sm-6">
                                        <div className="feature-mini-card p-4 rounded-4 bg-glass-dark border border-white border-opacity-05 h-100 transition-3s">
                                            <div className="mini-icon mb-3"><i className={`fas fa-${feat.icon} text-accent`}></i></div>
                                            <h4 className="text-white small fw-bold mb-2">{feat.title}</h4>
                                            <p className="text-white-50 xs-text mb-0">{feat.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="solution-dashboard-pannel p-1 rounded-5 bg-glass-dark border border-secondary border-opacity-10 shadow-2xl overflow-hidden mt-5 mt-lg-0">
                                <div className="p-5 bg-accent-glow-soft rounded-5 border border-accent border-opacity-10">
                                    <h3 className="text-white mb-4">The Micraft Advantage</h3>
                                    <p className="text-white mb-4 text-medium">Digitize, Track, and Optimize with Enterprise-Grade Precision.</p>
                                    <div className="advantage-list d-flex flex-column gap-3 mb-5">
                                        {[
                                            "End-to-End Production Traceability",
                                            "Instant Machine Downtime Alerts",
                                            "Digital Quality Inspection Reports",
                                            "Live Production Performance Dashboards"
                                        ].map((adv, i) => (
                                            <div key={i} className="d-flex align-items-center gap-3 text-white">
                                                <i className="fas fa-check-circle text-accent"></i>
                                                <span className="small fw-500">{adv}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Link href="/solutions" className="thm-btn w-100 text-center">Transform Your Operations <span className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 11. When Should a Factory Implement MES? */}
            <section className="when-to-implement pt-100 pb-100 bg-dark-alt">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="section-title text-left mb-4">
                                <h2 className="section-title__title text-white">Signs Your Factory Needs a <span>Manufacturing Execution System</span></h2>
                            </div>
                            <p className="text-white-50 mb-4">Manufacturing companies should consider implementing MES when they experience:</p>
                            <div className="signs-list d-flex flex-column gap-3">
                                {[
                                    "lack of production visibility",
                                    "frequent production delays",
                                    "difficulty tracking work orders",
                                    "limited machine utilization insights",
                                    "manual production reporting"
                                ].map((sign, idx) => (
                                    <div key={idx} className="d-flex align-items-center gap-3 p-3 rounded-3 card-sign">
                                        <i className="fas fa-exclamation-circle text-danger"></i>
                                        <span className="text-white">{sign}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-white mt-4 fw-bold text-medium">
                                MES becomes essential when factories want to digitize shop floor operations and improve production control.
                            </p>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="dual-image-perspective position-relative ps-lg-5">
                                {/* Main Image */}
                                <div className="perspective-main rounded-5 overflow-hidden shadow-2xl border border-secondary border-opacity-20 p-2 bg-dark">
                                    <Image 
                                        src="/assets/images/backgrounds/ProductionandDowntime.jpg" 
                                        alt="Factory Operations Flow" 
                                        width={600} 
                                        height={600} 
                                        className="img-fluid rounded-4 img-cover h-100" 
                                    />
                                </div>
                                {/* Floating Detail Card */}
                                <div className="perspective-floating-card d-none d-md-block p-2 bg-glass-dark-heavy shadow-2xl rounded-4 border border-accent border-opacity-20 position-absolute">
                                    <Image 
                                        src="/assets/images/resources/mes_dashboard_alert.png" 
                                        alt="Mobile Monitoring Alert" 
                                        width={280} 
                                        height={200} 
                                        className="rounded-3 img-cover shadow-inner" 
                                    />
                                    <div className="p-3">
                                        <div className="d-flex align-items-center gap-2 mb-1">
                                            <div className="dot-blink bg-danger"></div>
                                            <span className="text-white small fw-bold">Critical Downtime Alert</span>
                                        </div>
                                        <p className="text-white-50 tiny-text mb-0">Live Shop Floor Visualization Active</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 11. Final CTA */}
            <FinalCTA
                title={<>Ready to Transform Your <br /> <span>Manufacturing Operations?</span></>}
                text="Micraft MES provides manufacturing companies with a powerful, modern, and high-performance Management Execution System. Schedule a Live Demo to see how Micraft MES bridges the gap to advanced production."
                buttonLabel1="Book Your Demo"
            />
        </Layout>
    )
}