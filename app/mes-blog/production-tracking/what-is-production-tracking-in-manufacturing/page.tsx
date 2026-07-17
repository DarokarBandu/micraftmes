"use client"
import Layout from "../../../../components/layout/Layout"
import Breadcrumb from "../../../../components/layout/Breadcrumb"
import Image from "next/image"
import AnimatedTitle from "../../../../components/elements/AnimatedTitle"
import FinalCTA from "../../../../components/sections/home1/FinalCTA"
import MesBlogSidebar from "../../../../components/sections/InnerSection/MesBlogSidebar"

export default function ProductionTrackingPost() {
    return (
        <Layout headerStyle={1} footerStyle={2}>
            <Breadcrumb breadcrumbTitle="What is Production Tracking in Manufacturing?" />

            <section className="blog-details pt-100 pb-100 bg-dark-alt">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="blog-details__left">
                                {/* Article Header Info */}
                                <div className="section-title text-left mb-4">

                                    <AnimatedTitle>
                                        <h1 className="section-title__title text-white">
                                            What is <span>Production Tracking</span> in Manufacturing?
                                        </h1>
                                    </AnimatedTitle>
                                </div>

                                <div className="d-flex align-items-center gap-3 mb-4">
                                    <div style={{ width: '44px', height: '44px', position: 'relative', overflow: 'hidden', borderRadius: '50%', border: '2px solid rgba(96,101,212,0.6)', flexShrink: 0 }}>
                                        <Image src="/assets/images/blog/umesh-dahare.png" alt="Umesh Dahare" fill style={{ objectFit: 'cover' }} />
                                    </div>
                                    <div>
                                        <span className="text-white fw-bold d-block" style={{ fontSize: '14px' }}>Umesh Dahare</span>
                                        <span className="text-white-50" style={{ fontSize: '12px' }}><i className="far fa-calendar-alt me-1" style={{ color: 'rgba(96,101,212,0.9)' }}></i> March 22, 2026 · 9 min read</span>
                                    </div>
                                </div>

                                {/* Featured Image */}
                                <div className="blog-details__img mb-5 rounded-5 border border-primary border-opacity-20 overflow-hidden shadow-2xl" style={{ height: '420px', position: 'relative' }}>
                                    <Image src="/assets/images/blog/production-tracking-v4.png" alt="Production Tracking" fill style={{ objectFit: 'cover' }} className="rounded-4" />
                                </div>

                                <article className="blog-article text-white-50" style={{ lineHeight: '1.9', fontSize: '16px' }}>

                                    <h2 className="text-white h4 mb-3">What is Production Tracking?</h2>
                                    <p className="mb-4">
                                        Production tracking is the process of monitoring and recording manufacturing activities across the shop floor. It encompasses tracking work orders from creation to completion, recording operator performance, measuring output against targets, and capturing data at every stage of the production process.
                                    </p>
                                    <p className="mb-5">
                                        In modern manufacturing, production tracking has evolved from paper-based systems and spreadsheets to real-time digital platforms that provide instant visibility into every job, machine, and operator on the factory floor.
                                    </p>

                                    <div className="p-4 rounded-4 mb-5" style={{ background: 'rgba(96,101,212,0.1)', border: '1px solid rgba(96,101,212,0.3)' }}>
                                        <p className="text-white mb-0 fw-bold d-flex align-items-center gap-3">
                                            <i className="fas fa-tasks text-primary-glow fa-lg"></i>
                                            Companies using digital production tracking reduce production delays by up to 32% and improve job completion accuracy by 40%.
                                        </p>
                                    </div>

                                    <h2 className="text-white h4 mb-3">Why Production Tracking Matters</h2>
                                    <p className="mb-4">
                                        Without systematic production tracking, manufacturers face a range of operational problems. Work orders get lost, priorities conflict, machine capacity is wasted, and managers have no reliable way to know where production stands at any given time.
                                    </p>

                                    <div className="row g-3 mb-5">
                                        {[
                                            { issue: "No real-time work order status visibility", color: "danger" },
                                            { issue: "Inaccurate production reporting based on manual entries", color: "danger" },
                                            { issue: "Inability to detect production bottlenecks early", color: "danger" },
                                            { issue: "Poor coordination between production stages", color: "danger" }
                                        ].map((item, i) => (
                                            <div key={i} className="col-12">
                                                <div className="d-flex align-items-center gap-3 p-3 rounded-3 bg-glass-dark border border-white border-opacity-05">
                                                    <i className="fas fa-times-circle text-danger"></i>
                                                    <span className="text-white-50">{item.issue}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <h2 className="text-white h4 mb-3">Core Components of Production Tracking</h2>
                                    <p className="mb-4">A robust production tracking system covers these key areas:</p>

                                    {[
                                        { num: "01", title: "Work Order Management", body: "Digital work orders define what needs to be produced, in what quantity, and by when. A tracking system manages work orders from creation through production stages to completion, logging actual output against planned targets at each step." },
                                        { num: "02", title: "Real-Time Production Status", body: "Instead of waiting for shift-end reports, real-time tracking provides live production status for every active job. Managers can see current output, in-progress quantities, and completed orders instantly on a centralized dashboard." },
                                        { num: "03", title: "Operator Performance Tracking", body: "Production tracking records which operator completed which tasks, output quantities per operator, and cycle times. This data helps identify training needs, reward high performers, and balance workloads across the shift." },
                                        { num: "04", title: "Stage-by-Stage Process Tracking", body: "Multi-stage manufacturing requires tracking at each production stage — machining, assembly, quality check, finishing, and dispatch. End-to-end stage tracking ensures no job gets lost between operations." },
                                        { num: "05", title: "Production vs. Target Comparison", body: "Effective tracking compares actual output to planned targets in real time. Deviations trigger alerts, enabling supervisors to investigate and respond before a shortfall becomes a delivery problem." }
                                    ].map((step, i) => (
                                        <div key={i} className="mb-4 p-4 rounded-4 bg-glass-dark border border-white border-opacity-05">
                                            <div className="d-flex align-items-start gap-4">
                                                <span className="fw-bold flex-shrink-0" style={{ fontSize: '32px', color: 'rgba(96,101,212,0.4)', lineHeight: 1 }}>{step.num}</span>
                                                <div>
                                                    <h4 className="text-white mb-2" style={{ fontSize: '17px' }}>{step.title}</h4>
                                                    <p className="text-white-50 mb-0">{step.body}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    <h2 className="text-white h4 mb-3 mt-5">Digital vs. Manual Production Tracking</h2>
                                    <div className="row g-4 mb-5">
                                        <div className="col-md-6">
                                            <div className="p-4 rounded-4 h-100" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)' }}>
                                                <h5 className="text-white mb-3"><i className="fas fa-times-circle text-danger me-2"></i> Manual Tracking</h5>
                                                {["Data recorded on paper registers", "Hours of delay before reports are compiled", "High risk of human errors and omissions", "No real-time visibility for managers", "Difficult to audit or trace production history"].map((p, i) => (
                                                    <div key={i} className="d-flex align-items-center gap-2 mb-2">
                                                        <i className="fas fa-minus-circle text-danger" style={{ fontSize: '12px' }}></i>
                                                        <span className="text-white-50 small">{p}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="p-4 rounded-4 h-100" style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)' }}>
                                                <h5 className="text-white mb-3"><i className="fas fa-check-circle text-success me-2"></i> Digital Tracking</h5>
                                                {["Real-time data capture at point of production", "Instant dashboards with live production status", "Zero manual entry errors — system-recorded data", "Full visibility for managers from any device", "Complete traceable production history and analytics"].map((p, i) => (
                                                    <div key={i} className="d-flex align-items-center gap-2 mb-2">
                                                        <i className="fas fa-check-circle text-success" style={{ fontSize: '12px' }}></i>
                                                        <span className="text-white-50 small">{p}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className="text-white h4 mb-3">How Micraft MES Handles Production Tracking</h2>
                                    <p className="mb-5">
                                        Micraft MES provides an end-to-end production tracking platform built for manufacturing SMEs. From digital work order creation to real-time production status, machine activity monitoring, and quality inspection recording — Micraft MES connects every element of the production floor into a single, unified system accessible anywhere.
                                    </p>
                                </article>
                            </div>
                        </div>

                        {/* Sidebar Column */}
                        <div className="col-xl-4 col-lg-5">
                            <MesBlogSidebar />
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section (Full Width below) */}
            <section className="pt-60 pb-100 bg-dark-depth">
                <div className="container">
                    <div className="section-title text-center mb-50">
                        <h2 className="section-title__title text-white h4">Benefits of Digital <span>Production Tracking</span></h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { title: "Complete Production Visibility", desc: "See every active job, operator, and machine status in real time.", icon: "eye" },
                            { title: "Eliminate Manual Errors", desc: "Digital capture removes paper-based entry errors and reporting delays.", icon: "shield-check" },
                            { title: "Faster Job Prioritization", desc: "Live status enables quick reallocation of resources to priority jobs.", icon: "sort-amount-up" },
                            { title: "Accurate Shift Reports", desc: "Auto-generated shift summaries replace manual end-of-day reporting.", icon: "file-chart-line" },
                            { title: "Traceability & Compliance", desc: "Full production history is captured for quality audits and compliance.", icon: "history" },
                            { title: "Data-Backed Decisions", desc: "Production analytics help managers plan and improve continuously.", icon: "chart-bar" }
                        ].map((b, i) => (
                            <div key={i} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${i * 80}ms`}>
                                <div className="p-4 rounded-4 h-100 text-center" style={{ background: 'linear-gradient(145deg, rgba(15,17,35,0.95), rgba(22,25,50,0.9))', border: '1px solid rgba(96,101,212,0.2)' }}>
                                    <div className="mb-3 mx-auto d-flex align-items-center justify-content-center rounded-circle" style={{ width: '56px', height: '56px', background: 'rgba(96,101,212,0.12)', color: '#6065D4', fontSize: '22px' }}>
                                        <i className={`fas fa-${b.icon}`}></i>
                                    </div>
                                    <h4 className="text-white mb-2" style={{ fontSize: '16px', fontWeight: 700 }}>{b.title}</h4>
                                    <p className="text-white-50 small mb-0">{b.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <FinalCTA
                title={<>Track Every Job on Your <br /> <span>Factory Floor — Live</span></>}
                text="Micraft MES gives manufacturers digital work order tracking, real-time production status, and automated shift reporting from a single unified platform."
                buttonLabel1="Book a Free Demo"
            />
        </Layout>
    )
}
