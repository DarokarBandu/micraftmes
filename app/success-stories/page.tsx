"use client";

import Layout from "../../components/layout/Layout";
import Breadcrumb from "../../components/layout/Breadcrumb";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../../components/elements/AnimatedTitle";
import FinalCTA from "../../components/sections/home1/FinalCTA";
import CountUp from "react-countup";

export default function SuccessStoriesPage() {
    return (
        <Layout headerStyle={1} footerStyle={2}>
            <Breadcrumb breadcrumbTitle="Success Stories" />

            {/* 1. Hero Section */}
            <section className="success-hero-section position-relative overflow-hidden" id="hero">
                <div className="container position-relative" style={{ zIndex: 2 }}>
                    <div className="row align-items-center g-5">
                        <div className="col-lg-7 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="section-title text-left mb-4">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline">REAL-WORLD MES CASE STUDIES</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <AnimatedTitle>
                                    <h1 className="section-title__title title-animation text-white mt-2">
                                        Measurable Results from Real <span>Manufacturing Floors</span>
                                    </h1>
                                </AnimatedTitle>
                            </div>
                            <p className="hero-subtitle mb-4">
                                Micraft MES empowers mid-sized and enterprise manufacturers to gain real-time visibility, eliminate production blindspots, reduce downtime, and ensure on-time delivery across the shop floor.
                            </p>
                            <div className="d-flex flex-wrap align-items-center gap-3 mt-4">
                                <Link href="/contact" className="thm-btn">
                                    Request a Live Demo <span className="icon-right-arrow"></span>
                                </Link>
                                <Link href="#stories" className="thm-btn-outline">
                                    <i className="fas fa-arrow-down me-2"></i> View Case Studies
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-5 wow fadeInRight" data-wow-delay="200ms">
                            <div className="success-hero-card position-relative">
                                <div className="card-image-wrap rounded-4 overflow-hidden position-relative">
                                    <Image
                                        src="/assets/images/project/prodcutiondashboard.jpg"
                                        alt="Micraft MES Production Dashboard"
                                        width={600}
                                        height={380}
                                        className="w-100 h-auto object-fit-cover rounded-4"
                                        priority
                                    />
                                    <div className="card-glow-badge position-absolute bottom-0 start-0 m-3 p-3 rounded-3 d-flex align-items-center gap-3">
                                        <div className="pulse-dot"></div>
                                        <div>
                                            <span className="d-block text-white fw-bold small">Live Shop Floor Analytics</span>
                                            <span className="d-block text-white-50 extra-small">Real-Time Data Streams</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Quick Impact Metrics (Redesigned Clean Cards) */}
            <section id="impact" className="success-metrics-section">
                <div className="container">
                    <div className="section-title text-center mb-5">
                        <div className="section-title__tagline-box justify-content-center">
                            <div className="section-title__tagline-shape-1"></div>
                            <span className="section-title__tagline">PROVEN BUSINESS IMPACT</span>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title title-animation text-white mt-2">
                                Quantifiable Gains with <span>Micraft MES</span>
                            </h2>
                        </AnimatedTitle>
                    </div>

                    <div className="row g-4">
                        {[
                            { val: 30, unit: "%", label: "Improvement in Production Visibility", icon: "eye", desc: "Complete end-to-end transparency across lines" },
                            { val: 20, unit: "%", label: "Reduction in Machine Downtime", icon: "clock", desc: "Instant automated root-cause logging" },
                            { val: 25, unit: "%", label: "Faster Issue Identification", icon: "bolt", desc: "Live bottleneck and latency alerts" },
                            { val: 100, unit: "%", label: "On-Time Dispatch Readiness", icon: "shipping-fast", desc: "Accurate barcode-verified packing" }
                        ].map((m, i) => (
                            <div key={i} className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`${i * 100}ms`}>
                                <div className="impact-metric-card text-center h-100">
                                    <div className="impact-icon-box mx-auto mb-3">
                                        <i className={`fas fa-${m.icon}`}></i>
                                    </div>
                                    <div className="impact-count-box mb-2 d-flex align-items-baseline justify-content-center gap-1">
                                        <h3 className="impact-val text-white mb-0">
                                            <CountUp end={m.val} duration={2.5} enableScrollSpy scrollSpyOnce />
                                        </h3>
                                        <span className="impact-unit">{m.unit}</span>
                                    </div>
                                    <h4 className="impact-label mb-2">{m.label}</h4>
                                    <p className="impact-desc mb-0">{m.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Success Stories Grid */}
            <section id="stories" className="success-stories-section bg-dark-depth">
                <div className="container">
                    <div className="section-title text-center mb-5">
                        <div className="section-title__tagline-box justify-content-center">
                            <div className="section-title__tagline-shape-1"></div>
                            <span className="section-title__tagline">REAL-WORLD CASE STUDIES</span>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title title-animation text-white mt-2">
                                Real Improvements Across <span>Shop Floor Operations</span>
                            </h2>
                        </AnimatedTitle>
                        <p className="text-white-50 mx-auto mt-3" style={{ maxWidth: '720px' }}>
                            Explore how manufacturing enterprises solve daily operational bottlenecks and achieve seamless execution using Micraft MES.
                        </p>
                    </div>

                    <div className="row g-4">
                        {[
                            {
                                t: "Production Visibility",
                                s: "Achieving Real-Time Production Visibility",
                                c: "Production status was unclear across machines, leading to delayed reports and blindspots.",
                                r: ["Live tracking of active work orders", "Immediate shop floor visibility", "Faster operational decision-making"],
                                img: "prodcutiondashboard.jpg",
                                icon: "tv"
                            },
                            {
                                t: "Machine Utilization",
                                s: "Maximizing Machine & Line Utilization",
                                c: "Frequent unaccounted machine idling with no categorized downtime reasons.",
                                r: ["Automated machine state tracking", "Reduced idle and stoppage events", "Measurable OEE improvements"],
                                img: "DowntimeTracking.jpg",
                                icon: "cogs"
                            },
                            {
                                t: "Quality Control",
                                s: "Strengthening In-Process Quality Assurance",
                                c: "Quality defects discovered late at the final stage, causing high scrap and rework costs.",
                                r: ["Stage-wise digital inspection records", "Early defect detection alerts", "Lower scrap and rejection rates"],
                                img: "InspectionQualityRecording.jpg",
                                icon: "check-circle"
                            },
                            {
                                t: "Material Visibility",
                                s: "Optimizing Material Flow & Work-In-Progress",
                                c: "Lack of clarity into material consumption, causing unexpected shortages and buffer delays.",
                                r: ["Real-time WIP stage tracking", "Tight material requirement sync", "Zero material starvation delays"],
                                img: "feat_process_monitoring.png",
                                icon: "boxes"
                            },
                            {
                                t: "Traceability",
                                s: "Complete Forward & Backward Traceability",
                                c: "Difficulty tracing raw material batches, heat numbers, and machine parameter logs.",
                                r: ["Full batch and part genealogy", "Instant root cause discovery", "Audit-ready compliance records"],
                                img: "feat_factory_monitoring.png",
                                icon: "fingerprint"
                            },
                            {
                                t: "Dispatch Efficiency",
                                s: "Streamlining Packing & On-Time Dispatch",
                                c: "Manual packing slips and mismatch errors caused delivery disputes and delays.",
                                r: ["Barcode-verified carton packing", "Real-time dispatch coordination", "100% accurate customer shipments"],
                                img: "DispatchTracking.jpg",
                                icon: "truck-loading"
                            }
                        ].map((story, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 100}ms`}>
                                <div className="case-card-redesigned h-100 d-flex flex-column">
                                    <div className="case-card-img-wrap position-relative">
                                        <Image
                                            src={`/assets/images/project/${story.img}`}
                                            alt={story.s}
                                            width={400}
                                            height={220}
                                            className="w-100 h-100 object-fit-cover"
                                        />
                                        <div className="case-sector-pill">
                                            <i className={`fas fa-${story.icon} me-1`}></i> {story.t}
                                        </div>
                                    </div>
                                    <div className="case-card-body p-4 d-flex flex-column flex-grow-1">
                                        <h3 className="case-title text-white mb-3">{story.s}</h3>
                                        
                                        <div className="case-challenge-box mb-3 p-3 rounded-3">
                                            <span className="case-sublabel challenge-label d-block mb-1">
                                                <i className="fas fa-exclamation-triangle me-1"></i> Challenge:
                                            </span>
                                            <p className="mb-0 text-white-50 small">{story.c}</p>
                                        </div>

                                        <div className="case-result-box p-3 rounded-3 mt-auto">
                                            <span className="case-sublabel result-label d-block mb-2">
                                                <i className="fas fa-chart-line me-1"></i> Results Delivered:
                                            </span>
                                            <ul className="list-unstyled mb-0">
                                                {story.r.map((item, i) => (
                                                    <li key={i} className="case-result-item d-flex align-items-center gap-2 mb-1">
                                                        <i className="fas fa-check-circle text-accent"></i>
                                                        <span className="text-white small">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Before vs After Section */}
            <section className="before-after-section pt-100 pb-100">
                <div className="container">
                    <div className="section-title text-center mb-5">
                        <div className="section-title__tagline-box justify-content-center">
                            <div className="section-title__tagline-shape-1"></div>
                            <span className="section-title__tagline">OPERATIONAL TRANSFORMATION</span>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title title-animation text-white mt-2">
                                From Fragmented Operations to <span>Connected Execution</span>
                            </h2>
                        </AnimatedTitle>
                    </div>

                    <div className="row g-4 align-items-stretch">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="comparison-card before-card p-4 p-md-5 rounded-4 h-100">
                                <div className="d-flex align-items-center gap-3 mb-4 pb-3 border-bottom border-white border-opacity-10">
                                    <div className="comp-icon-badge bg-danger-subtle text-danger">
                                        <i className="fas fa-times"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-white mb-0 fw-bold h5">Before Micraft MES</h3>
                                        <span className="text-white-50 extra-small">Manual & Reactive Operations</span>
                                    </div>
                                </div>
                                <ul className="list-unstyled comparison-list mb-0">
                                    {[
                                        "Delayed, paper-based shift production logs",
                                        "No real-time machine status or stoppage visibility",
                                        "Downtime reasons unrecorded and recurring",
                                        "Quality defects caught late at end-of-line",
                                        "Dispatch delays caused by packing mismatches"
                                    ].map((item, i) => (
                                        <li key={i} className="comparison-item d-flex align-items-center gap-3 py-2">
                                            <span className="comp-bullet bg-danger"></span>
                                            <span className="text-white-50">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="comparison-card after-card p-4 p-md-5 rounded-4 h-100">
                                <div className="d-flex align-items-center gap-3 mb-4 pb-3 border-bottom border-white border-opacity-10">
                                    <div className="comp-icon-badge bg-success-subtle text-success">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-white mb-0 fw-bold h5">After Micraft MES</h3>
                                        <span className="text-accent extra-small">Data-Driven Shop Floor Control</span>
                                    </div>
                                </div>
                                <ul className="list-unstyled comparison-list mb-0">
                                    {[
                                        "Instant live production updates on touch tablets",
                                        "Complete line and machine OEE transparency",
                                        "Automated reason capture for swift turnaround",
                                        "In-process digital quality gates prevent scrap",
                                        "100% verified dispatch readiness with zero errors"
                                    ].map((item, i) => (
                                        <li key={i} className="comparison-item d-flex align-items-center gap-3 py-2">
                                            <span className="comp-bullet bg-success"></span>
                                            <span className="text-white fw-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Industry Impact Section */}
            <section className="industries-section pt-100 pb-100 bg-dark-depth">
                <div className="container">
                    <div className="section-title text-center mb-5">
                        <div className="section-title__tagline-box justify-content-center">
                            <div className="section-title__tagline-shape-1"></div>
                            <span className="section-title__tagline">INDUSTRY FOOTPRINT</span>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title title-animation text-white mt-2">
                                Trusted Across <span>Manufacturing Sectors</span>
                            </h2>
                        </AnimatedTitle>
                        <p className="text-white-50 mx-auto mt-2" style={{ maxWidth: '600px' }}>
                            Engineered for high-mix and batch manufacturing shop floors.
                        </p>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {[
                            { t: "Automotive Components", i: "car", href: "/industries/automotive-component-manufacturing" },
                            { t: "Precision CNC Machining", i: "cogs", href: "/industries/cnc-machining-engineering" },
                            { t: "Fabrication & Assembly", i: "hammer", href: "/industries/fabrication-industry" },
                            { t: "Electronics & PCB", i: "microchip", href: "/industries/electronics-manufacturing" },
                            { t: "General Manufacturing", i: "industry", href: "/industries/general-manufacturing-smes" }
                        ].map((ind, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 100}ms`}>
                                <Link href={ind.href} className="text-decoration-none d-block h-100">
                                    <div className="industry-pill-card p-4 rounded-4 d-flex align-items-center gap-3 h-100">
                                        <div className="industry-icon-wrap">
                                            <i className={`fas fa-${ind.i}`}></i>
                                        </div>
                                        <h3 className="industry-name text-white mb-0 h6 fw-bold">{ind.t}</h3>
                                        <i className="fas fa-arrow-right ms-auto text-white-50 extra-small"></i>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. CTA Section */}
            <FinalCTA
                title={<>Ready to Deliver Similar Results <br /> <span>on Your Shop Floor?</span></>}
                text="Schedule a personalized 20-minute demonstration to see how Micraft MES fits your specific machines, processes, and manufacturing workflow."
                buttonLabel1="Schedule Live Demo"
                buttonLabel2="Speak with an Expert"
            />

            <style jsx>{`
                /* ─── Hero Styles ─── */
                .success-hero-section {
                    padding: 100px 0 80px;
                    background-color: #0B192C;
                }
                .hero-subtitle {
                    color: #C5C8CD;
                    font-size: 17.5px;
                    line-height: 1.7;
                    max-width: 620px;
                }
                .thm-btn-outline {
                    display: inline-flex;
                    align-items: center;
                    padding: 14px 28px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 8px;
                    color: #FFFFFF;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                .thm-btn-outline:hover {
                    border-color: #7366CA;
                    color: #7366CA;
                    background: rgba(115, 102, 202, 0.08);
                }
                .success-hero-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 20px;
                    padding: 12px;
                    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
                }
                .card-glow-badge {
                    background: rgba(11, 25, 44, 0.9);
                    border: 1px solid rgba(115, 102, 202, 0.35);
                    backdrop-filter: blur(10px);
                }
                .pulse-dot {
                    width: 10px;
                    height: 10px;
                    background: #10B981;
                    border-radius: 50%;
                    box-shadow: 0 0 10px #10B981;
                    animation: pulse 2s infinite;
                }

                /* ─── Metrics Section ─── */
                .success-metrics-section {
                    padding: 90px 0;
                    background-color: #08111F;
                }
                .impact-metric-card {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 20px;
                    padding: 36px 24px;
                    transition: all 0.35s ease;
                }
                .impact-metric-card:hover {
                    transform: translateY(-8px);
                    border-color: rgba(115, 102, 202, 0.5);
                    background: rgba(115, 102, 202, 0.05);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                }
                .impact-icon-box {
                    width: 60px;
                    height: 60px;
                    border-radius: 16px;
                    background: rgba(115, 102, 202, 0.12);
                    border: 1px solid rgba(115, 102, 202, 0.3);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #7366CA;
                    font-size: 24px;
                }
                .impact-val {
                    font-size: 46px;
                    font-weight: 800;
                    line-height: 1;
                    letter-spacing: -1px;
                }
                .impact-unit {
                    font-size: 28px;
                    font-weight: 700;
                    color: #7366CA;
                }
                .impact-label {
                    font-size: 15px;
                    font-weight: 700;
                    color: #FFFFFF;
                    line-height: 1.35;
                }
                .impact-desc {
                    font-size: 13px;
                    color: rgba(255, 255, 255, 0.55);
                }

                /* ─── Case Cards ─── */
                .success-stories-section {
                    padding: 100px 0;
                    background-color: #0B192C;
                }
                .case-card-redesigned {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 20px;
                    overflow: hidden;
                    transition: all 0.35s ease;
                }
                .case-card-redesigned:hover {
                    transform: translateY(-8px);
                    border-color: rgba(115, 102, 202, 0.45);
                    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
                }
                .case-card-img-wrap {
                    height: 200px;
                    width: 100%;
                    overflow: hidden;
                }
                .case-sector-pill {
                    position: absolute;
                    top: 14px;
                    left: 14px;
                    background: rgba(11, 25, 44, 0.88);
                    border: 1px solid rgba(115, 102, 202, 0.4);
                    backdrop-filter: blur(8px);
                    color: #FFFFFF;
                    font-size: 11px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    padding: 5px 12px;
                    border-radius: 20px;
                }
                .case-title {
                    font-size: 19px;
                    font-weight: 700;
                    line-height: 1.35;
                }
                .case-sublabel {
                    font-size: 11.5px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .challenge-label {
                    color: #F87171;
                }
                .result-label {
                    color: #7366CA;
                }
                .case-challenge-box {
                    background: rgba(248, 113, 113, 0.05);
                    border: 1px solid rgba(248, 113, 113, 0.15);
                }
                .case-result-box {
                    background: rgba(115, 102, 202, 0.05);
                    border: 1px solid rgba(115, 102, 202, 0.18);
                }
                .text-accent {
                    color: #7366CA !important;
                }

                /* ─── Comparison Section ─── */
                .before-after-section {
                    background-color: #08111F;
                }
                .comparison-card {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                }
                .before-card {
                    border-left: 3px solid #EF4444;
                }
                .after-card {
                    border-left: 3px solid #10B981;
                    background: rgba(115, 102, 202, 0.03);
                }
                .comp-icon-badge {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                }
                .comp-bullet {
                    width: 8px;
                    height: 8px;
                    min-width: 8px;
                    border-radius: 50%;
                }
                .extra-small {
                    font-size: 11px;
                }

                /* ─── Industry Section ─── */
                .industry-pill-card {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    transition: all 0.3s ease;
                }
                .industry-pill-card:hover {
                    background: rgba(115, 102, 202, 0.08);
                    border-color: rgba(115, 102, 202, 0.4);
                    transform: translateY(-3px);
                }
                .industry-icon-wrap {
                    width: 44px;
                    height: 44px;
                    min-width: 44px;
                    border-radius: 12px;
                    background: rgba(115, 102, 202, 0.15);
                    border: 1px solid rgba(115, 102, 202, 0.3);
                    color: #7366CA;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                }

                /* ─── Light Mode Overrides ─── */
                :global([data-theme="light"]) .success-hero-section,
                :global([data-theme="light"]) .success-stories-section {
                    background-color: #F8FAFC;
                }
                :global([data-theme="light"]) .success-metrics-section,
                :global([data-theme="light"]) .before-after-section,
                :global([data-theme="light"]) .industries-section {
                    background-color: #FFFFFF;
                }
                :global([data-theme="light"]) .hero-subtitle {
                    color: #475569;
                }
                :global([data-theme="light"]) .thm-btn-outline {
                    border-color: #CBD5E1;
                    color: #0F172A;
                }
                :global([data-theme="light"]) .thm-btn-outline:hover {
                    border-color: #7366CA;
                    color: #7366CA;
                    background: rgba(115, 102, 202, 0.06);
                }
                :global([data-theme="light"]) .success-hero-card {
                    background: #FFFFFF;
                    border-color: #E2E8F0;
                    box-shadow: 0 15px 35px rgba(15, 23, 42, 0.08);
                }
                :global([data-theme="light"]) .card-glow-badge {
                    background: rgba(255, 255, 255, 0.95);
                    border-color: #E2E8F0;
                }
                :global([data-theme="light"]) .card-glow-badge span:first-child {
                    color: #0F172A !important;
                }
                :global([data-theme="light"]) .impact-metric-card,
                :global([data-theme="light"]) .case-card-redesigned,
                :global([data-theme="light"]) .comparison-card,
                :global([data-theme="light"]) .industry-pill-card {
                    background: #FFFFFF;
                    border-color: #E2E8F0;
                    box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);
                }
                :global([data-theme="light"]) .impact-metric-card:hover,
                :global([data-theme="light"]) .case-card-redesigned:hover,
                :global([data-theme="light"]) .industry-pill-card:hover {
                    background: #F8FAFC;
                    border-color: #7366CA;
                }
                :global([data-theme="light"]) .impact-val,
                :global([data-theme="light"]) .impact-label,
                :global([data-theme="light"]) .case-title,
                :global([data-theme="light"]) .industry-name {
                    color: #0F172A !important;
                }
                :global([data-theme="light"]) .impact-desc,
                :global([data-theme="light"]) .case-result-item span {
                    color: #475569 !important;
                }
                :global([data-theme="light"]) .case-sector-pill {
                    background: #FFFFFF;
                    color: #0F172A;
                    border-color: #E2E8F0;
                }
                :global([data-theme="light"]) .before-card span.text-white-50 {
                    color: #64748B !important;
                }
                :global([data-theme="light"]) .after-card span.text-white {
                    color: #0F172A !important;
                }

                @keyframes pulse {
                    0% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.4); opacity: 0.6; }
                    100% { transform: scale(1); opacity: 1; }
                }
            `}</style>
        </Layout>
    );
}
