"use client";

import React from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedTitle from "@/components/elements/AnimatedTitle";
import {
  ArrowRightCircle,
  XCircle,
  Rocket,
  AlertTriangle,
  Zap,
  TrendingUp,
  CarFront,
  Package,
  Box,
  EyeOff,
  PenTool,
  Clock,
  MonitorX,
  FileText,
  Boxes,
  MonitorDot,
  ShieldCheck,
  Landmark,
  Cog,
  Workflow,
  CheckSquare,
  BarChart3,
  LayoutDashboard,
  Globe,
  Settings,
  Layers,
  Cpu
} from 'lucide-react';

export default function MESBenefitsForSmallManufacturersPage() {

    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    // Slider images for Hero
    const heroSlider = [
        "/assets/images/micraftmeswork/production-order.png",
        "/assets/images/micraftmeswork/machine-monitoring.png",
        "/assets/images/micraftmeswork/quality-inspection.png",
        "/assets/images/micraftmeswork/shop-floor-data.png"
    ];

    return (
        <Layout
            headerStyle={1}
            footerStyle={1}
            breadcrumbTitle="MES Benefits for Small Manufacturers"
        >
            {mounted && (
                <div className="sme-benefits-page container-fluid p-0 overflow-hidden">

                    {/* 1. Hero Section - Digital Growth for SMEs */}
                    <section className="py-70 py-md-100 bg-black-mes position-relative overflow-hidden" id="hero">
                        {/* Immersive Background Atmos */}
                        <div className="position-absolute top-0 start-0 w-100 h-100 mesh-shape-bg-03 opacity-10"></div>

                        <div className="container position-relative z-index-1">
                            <div className="row align-items-center g-5">
                                <div className="col-xl-7 col-lg-8 text-center text-xl-start wow slideInLeft" data-wow-delay="100ms">
                                    <div className="section-title mb-4">
                                        <div className="section-title__tagline-box justify-content-center justify-content-xl-start mx-auto mx-xl-0">
                                            <div className="section-title__tagline-shape-1"></div>
                                            <span className="section-title__tagline text-gold">SME Operational Excellence</span>
                                            <div className="section-title__tagline-shape-2"></div>
                                        </div>
                                        <AnimatedTitle>
                                            <h1 className="section-title__title text-white font-marcellus lowercase leading-tight fs-2 fs-md-1 display-xl-3">
                                                Benefits of MES for <br className="d-none d-md-block" />
                                                <span>Small Manufacturing</span> <span>Companies</span>
                                            </h1>
                                        </AnimatedTitle>
                                    </div>
                                    <div className="border-start border-4 border-gold-glow ps-4 my-4 d-none d-md-block">
                                        <p className="text-white font-marcellus h4 mb-3 text-gold">
                                            Discover how Manufacturing Execution Systems help small and mid-sized manufacturers gain real-time production visibility, improve machine utilization, and optimize factory operations.
                                        </p>
                                    </div>
                                    <div className="mb-5">
                                        <p className="text-white-opacity-65 font-marcellus mb-3">
                                            Many small manufacturing companies rely on manual production tracking methods such as paper registers or spreadsheets. As production complexity grows, these methods make it difficult to monitor factory operations efficiently.
                                        </p>
                                        <p className="text-white-opacity-70 font-marcellus mb-0 fw-bold border-top border-white-05 pt-3">
                                            Manufacturing Execution Systems (MES) help small manufacturers digitize shop floor operations and gain real-time insights into production performance.
                                        </p>
                                    </div>

                                    {/* Floating KPI Nodes */}
                                    <div className="row g-4 mb-5">
                                        {[
                                            { label: "OEE Uplift", val: "+24%", icon: Zap },
                                            { label: "ROI Potential", val: "6 Months", icon: TrendingUp }
                                        ].map((kpi, i) => (
                                            <div key={i} className="col-auto">
                                                <div className="bg-glass-dark p-3 rounded-4 border border-white-05 d-flex align-items-center gap-3 shadow-lg">
                                                    <div className="p-3 rounded-3 bg-gold-opacity-10">
                                                        <kpi.icon size={20} className="text-gold" />
                                                    </div>
                                                    <div>
                                                        <div className="text-gold fw-bold font-marcellus h5 mb-0">{kpi.val}</div>
                                                        <div className="text-white-opacity-50 small font-marcellus text-uppercase">{kpi.label}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>


                                </div>

                                <div className="col-xl-5 wow fadeInRight" data-wow-delay="200ms">
                                    <div className="hero-visual-perspective mt-5 mt-xl-0">
                                        <div className="p-2 bg-dark-deep-mes border border-white-10 rounded-5 shadow-lg position-relative overflow-hidden group perspective-card">
                                            <div className="position-absolute top-0 start-0 w-100 h-100 z-index-2 pointer-events-none">
                                                <div className="hud-line-scanner"></div>
                                            </div>
                                            <div className="hero-slider-v-container rounded-5">
                                                <div className="hero-slider-v-track d-flex flex-column w-100">
                                                    {[...heroSlider, ...heroSlider].map((img, i) => (
                                                        <div key={i} className="hero-slider-v-item bg-black-depth position-relative mb-3 rounded-4 overflow-hidden" style={{ height: '380px' }}>
                                                            <Image src={img} alt="MES Dashboard" fill className="object-fit-cover opacity-90 shadow-lg" />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-70 py-md-100 bg-dark-deep-mes border-top border-white-05 overflow-hidden">
                        <div className="container position-relative" style={{ zIndex: 1 }}>
                                <div className="section-title text-center mb-40 mb-md-60">
                                    <div className="section-title__tagline-box justify-content-center mx-auto">
                                        <div className="section-title__tagline-shape-1"></div>
                                        <span className="section-title__tagline text-gold">Operational Dilemmas</span>
                                        <div className="section-title__tagline-shape-2"></div>
                                    </div>
                                    <AnimatedTitle>
                                        <h2 className="section-title__title text-white font-marcellus lowercase leading-tight fs-2">
                                            Common Challenges in <span>Small Manufacturing</span> <span>Operations</span>
                                        </h2>
                                    </AnimatedTitle>
                                </div>
                            <div className="row g-4 d-flex justify-content-center">
                                {[
                                    { title: "Limited Visibility", desc: "No clear view of real-time shop floor activity.", icon: EyeOff },
                                    { title: "Manual Tracking", desc: "Reliance on paper logs prone to human error.", icon: PenTool },
                                    { title: "Order Lag", desc: "Difficulty tracking work order progress and status.", icon: Clock },
                                    { title: "Underutilized Assets", desc: "Machine idle times not clearly identified.", icon: MonitorX },
                                    { title: "Reporting Delays", desc: "Delayed production data hinders decision flow.", icon: FileText },
                                    { title: "Late Bottlenecks", desc: "Issues discovered only after production completes.", icon: AlertTriangle }
                                ].map((item, i) => (
                                    <div key={i} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${i * 100}ms`}>
                                        <div className="bg-glass-dark p-5 rounded-4 border border-white-10 h-100 group transition-all">
                                            <div className="mb-4 d-inline-block p-3 rounded-4 bg-red-opacity-10 border border-red-glow">
                                                <item.icon size={30} className="text-red" />
                                            </div>
                                            <h4 className="text-white h5 font-marcellus mb-3 group-hover:text-gold transition-all">{item.title}</h4>
                                            <p className="text-white-opacity-60 small font-marcellus mb-0">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 3. What is MES and how it helps */}
                    <section className="py-70 py-md-100 bg-black-mes position-relative overflow-hidden">
                        <div className="position-absolute top-1/2 start-1/2 translate-middle w-100 h-100 bg-mesh-center-gold opacity-10"></div>
                        <div className="container position-relative z-index-1">
                            <div className="row align-items-center g-5">
                                <div className="col-lg-6 text-center text-lg-start wow slideInLeft" data-wow-delay="100ms">
                                    <div className="position-relative p-2 bg-white-05 border border-white-10 rounded-5 shadow-3xl overflow-hidden">
                                        <div className="ratio ratio-16x9 rounded-5 overflow-hidden">
                                            <Image src="/assets/images/features/qi_realtime.png" alt="What is MES" fill className="object-fit-cover shadow-2xl rounded-5" />
                                        </div>
                                        <div className="position-absolute top-1 start-1 top-md-4 start-md-4 bg-glass-dark px-2 px-md-3 py-1 py-md-2 rounded-4 border border-white-10 backdrop-blur">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="live-dot"></div>
                                                <span className="text-white font-marcellus smaller text-uppercase">Digital Core Tracking</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                                    <div className="section-title mb-4">
                                        <div className="section-title__tagline-box">
                                            <div className="section-title__tagline-shape-1"></div>
                                            <span className="section-title__tagline text-gold">System Overview</span>
                                            <div className="section-title__tagline-shape-2"></div>
                                        </div>
                                        <AnimatedTitle>
                                            <h2 className="section-title__title text-white font-marcellus lowercase leading-tight">
                                                Manufacturing Execution Systems for <span>Small Factories</span>
                                            </h2>
                                        </AnimatedTitle>
                                    </div>
                                    <p className="text-white-opacity-70 mb-5 font-marcellus leading-relaxed">A Manufacturing Execution System is a digital platform that monitors and manages production operations in real time, serving as the bridge between raw material and shipment.</p>
                                    <div className="row g-3">
                                        {[
                                            { label: "Production Orders", icon: Boxes },
                                            { label: "Machine Activity", icon: MonitorDot },
                                            { label: "Production Output", icon: TrendingUp },
                                            { label: "Inspection Results", icon: ShieldCheck },
                                            { label: "Dispatch Readiness", icon: Landmark }
                                        ].map((tag, i) => (
                                            <div key={i} className="col-sm-6">
                                                <div className="bg-white-02 border border-white-05 p-3 rounded-4 d-flex align-items-center gap-3 transition-all hover:border-gold">
                                                    <div className="p-2 rounded-3 bg-white-05">
                                                        <tag.icon size={18} className="text-gold" />
                                                    </div>
                                                    <span className="text-white font-marcellus small">{tag.label}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-5 pt-3">
                                        <Link href="/solutions/production-tracking-software" className="text-gold fw-bold font-marcellus d-flex align-items-center gap-2 hover-translate-x transition-all">
                                            Explore Microtracking Workflows <ArrowRightCircle size={18} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-100 bg-dark-deep-mes" id="benefits">
                        <div className="container">
                            <div className="section-title text-center mb-40 mb-md-60">
                                <div className="section-title__tagline-box justify-content-center mx-auto">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline text-gold">Core Performance Gains</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white font-marcellus lowercase leading-tight">
                                        Major Benefits of <span>MES Implementation</span>
                                    </h2>
                                </AnimatedTitle>
                            </div>
                            <div className="row g-4">
                                {[
                                    { title: "Real-Time Visibility", icon: EyeOff, text: "Monitor production as it happens, not after the shift ends." },
                                    { title: "Machine Utilization", icon: Cog, text: "Understand exact idle time and maximize asset productivity." },
                                    { title: "Faster Decisions", icon: Zap, text: "Identify and resolve floor issues in seconds to protect margins." },
                                    { title: "Coordination", icon: Workflow, text: "Sync multiple departments with a single source of truth." },
                                    { title: "Digital Quality", icon: CheckSquare, text: "Eliminate paper checks and track defect trends automatically." },
                                    { title: "Accurate Data", icon: BarChart3, text: "Reliable production analytics for precise growth planning." }
                                ].map((benefit, i) => (
                                    <div key={i} className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay={`${i * 100}ms`}>
                                        <div className="benefit-card h-100 p-5 group">
                                            <div className="benefit-icon-box mb-4">
                                                <benefit.icon size={40} className="text-gold transition-all group-hover:scale-110" />
                                            </div>
                                            <h4 className="text-white h5 font-marcellus mb-3">{benefit.title}</h4>
                                            <p className="text-white-opacity-60 small font-marcellus leading-relaxed mb-0">{benefit.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="py-100 bg-black-mes border-top border-white-05">
                        <div className="container">
                            <div className="section-title text-center mb-40 mb-md-60">
                                <div className="section-title__tagline-box justify-content-center mx-auto">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline text-gold">The Micraft Edge</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white font-marcellus lowercase leading-tight">
                                        Why Traditional MES <span>Fails SMEs</span>
                                    </h2>
                                </AnimatedTitle>
                            </div>
                            <div className="row g-5 align-items-center">
                                <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                                    <div className="section-title mb-4">
                                        <div className="section-title__tagline-box">
                                            <div className="section-title__tagline-shape-1"></div>
                                            <span className="section-title__tagline text-gold">Enterprise Traps</span>
                                            <div className="section-title__tagline-shape-2"></div>
                                        </div>
                                        <AnimatedTitle>
                                            <h2 className="section-title__title text-white font-marcellus lowercase leading-tight">Why Traditional MES <span>Fails SMEs</span></h2>
                                        </AnimatedTitle>
                                    </div>
                                    <p className="text-white-opacity-70 mb-5 font-marcellus">Built for Fortune 500s, traditional systems often overwhelm and underserve smaller manufacturing companies.</p>
                                    <div className="d-grid gap-3">
                                        {[
                                            { label: "Complex Implementation", desc: "Months of configuration and training required." },
                                            { label: "High Licensing Costs", desc: "Enterprise pricing that eats up SME margins." },
                                            { label: "IT Infrastructure Heavy", desc: "Requires dedicated server rooms and IT staff." },
                                            { label: "Long Deployment Timelines", desc: "Years before you see a single dollar of ROI." }
                                        ].map((trap, i) => (
                                            <div key={i} className="d-flex align-items-start gap-4 p-4 rounded-4 bg-white-02 border border-white-05">
                                                <XCircle size={22} className="text-red mt-1" />
                                                <div>
                                                    <h5 className="text-white font-marcellus fs-6 mb-1">{trap.label}</h5>
                                                    <p className="text-white-opacity-50 small mb-0 font-marcellus">{trap.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                                    <div className="p-5 bg-gold-opacity-05 border border-gold-glow rounded-5 position-relative">
                                        <div className="position-absolute top-0 end-0 p-4 opacity-20">
                                            <Rocket size={80} className="text-gold" />
                                        </div>
                                        <h4 className="text-gold font-marcellus h4 mb-4">The Micraft Advantage</h4>
                                        <div className="d-grid gap-4">
                                            {[
                                                { title: "Simple Shop Floor Interface", icon: LayoutDashboard },
                                                { title: "Fast Implementation", icon: Zap },
                                                { title: "Minimal Infrastructure", icon: Globe },
                                                { title: "Real-Time Dashboards", icon: BarChart3 },
                                                { title: "Scalable Architecture", icon: Settings }
                                            ].map((adv, i) => (
                                                <div key={i} className="d-flex align-items-center gap-4">
                                                    <div className="p-3 bg-gold-opacity-10 rounded-pill">
                                                        <adv.icon size={20} className="text-gold" />
                                                    </div>
                                                    <span className="text-white font-marcellus fw-bold">{adv.title}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-5 text-center">
                                            <Link href="/contact" className="text-gold fw-bold font-marcellus d-flex align-items-center justify-content-center gap-2 underline-hover">
                                                Digitize Without Complexity <ArrowRightCircle size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-100 bg-black-mes">
                        <div className="container">
                            <div className="section-title text-center mb-40 mb-md-60">
                                <div className="section-title__tagline-box justify-content-center mx-auto">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline text-gold">SME Market Verticals</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white font-marcellus lowercase leading-tight">
                                        Industries Powered <span>By Digital Connectivity</span>
                                    </h2>
                                </AnimatedTitle>
                            </div>
                            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-5 g-4">
                                {[
                                    { title: "CNC Machining", short: "High-precision OEE", img: "micraftmeswork/machine-monitoring.png", icon: Cog },
                                    { title: "Auto Components", short: "Zero-defect tracking", img: "micraftmeswork/production-order.png", icon: CarFront },
                                    { title: "Metal Fabrication", short: "Material yield control", img: "micraftmeswork/quality-inspection.png", icon: Layers },
                                    { title: "Plastic Injection", short: "Cycle-time analytics", img: "micraftmeswork/shop-floor-data.png", icon: Package },
                                    { title: "Electronics", short: "Traceability & SMT", img: "micraftmeswork/dispatch-dashboard.png", icon: Cpu }
                                ].map((ind, i) => (
                                    <div key={i} className="col wow fadeInUp" data-wow-delay={`${i * 100}ms`}>
                                        <div className="bg-glass-dark border border-white-05 rounded-4 overflow-hidden h-100 transition-all group hover:border-gold-glow hover-translate-y shadow-lg position-relative">
                                            <div className="position-absolute top-0 end-0 p-3 z-index-2 opacity-30 group-hover:opacity-100 transition-all">
                                                <ind.icon size={20} className="text-gold" />
                                            </div>
                                            <div className="position-relative overflow-hidden mb-0" style={{ height: '180px' }}>
                                                <Image src={`/assets/images/${ind.img}`} alt={ind.title} fill className="object-fit-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" />
                                                <div className="position-absolute bottom-0 start-0 w-100 h-50 bg-gradient-to-t from-black-mes to-transparent"></div>
                                                <div className="hud-line-scanner opacity-0 group-hover:opacity-50 transition-all"></div>
                                            </div>
                                            <div className="p-4 pt-3 position-relative z-index-1">
                                                <h5 className="text-white font-marcellus mb-2 group-hover:text-gold transition-all">{ind.title}</h5>
                                                <div className="smaller text-white-opacity-50 font-marcellus text-uppercase tracking-wider">{ind.short}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="py-100 bg-black-mes position-relative overflow-hidden">
                        {/* Immersive Industrial Backdrop */}
                        <div className="position-absolute top-0 start-0 w-100 h-100">
                            <Image 
                                src="/assets/images/backgrounds/ProductionandDowntime.jpg" 
                                alt="Industrial Diagnostic Backdrop" 
                                fill 
                                className="object-fit-cover opacity-10 grayscale"
                            />
                            <div className="position-absolute top-0 start-0 w-100 h-100 bg-black-depth opacity-80"></div>
                            <div className="position-absolute top-0 start-0 w-100 h-100 bg-mesh-center-red opacity-20"></div>
                        </div>

                        <div className="container position-relative z-index-1">
                            <div className="section-title text-center mb-60">
                                <div className="section-title__tagline-box justify-content-center mx-auto">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline text-gold">Operational Diagnostic</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white font-marcellus lowercase leading-tight">
                                        Signs Your Factory <span>Needs an MES</span> <span>System</span>
                                    </h2>
                                </AnimatedTitle>
                            </div>
                        </div>

                        {/* Top Marquee - Scrolling Left */}
                        <div className="diagnostic-marquee-container mb-4 position-relative">
                            <div className="diagnostic-marquee-track scroll-left">
                                {[
                                    "Lack of production visibility", "Growing Process Complexity", "Frequent Production Delays",
                                    "Delayed Quality Results", "Over-reliance on Paperwork", "Machine Idle Spikes",
                                    "Stock Reconciliation Lag", "Manual Data Entry Errors"
                                ].concat([
                                    "Lack of production visibility", "Growing Process Complexity", "Frequent Production Delays",
                                    "Delayed Quality Results", "Over-reliance on Paperwork", "Machine Idle Spikes",
                                    "Stock Reconciliation Lag", "Manual Data Entry Errors"
                                ]).map((sign, i) => (
                                    <div key={i} className="diagnostic-marquee-card bg-glass-dark border-red-glow p-4 rounded-4 mx-3">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="bg-red-opacity-10 p-2 rounded-3">
                                                <AlertTriangle size={18} className="text-red" />
                                            </div>
                                            <span className="text-white-opacity-80 font-marcellus small tracking-wider uppercase text-nowrap">{sign}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Marquee - Scrolling Right */}
                        <div className="diagnostic-marquee-container position-relative">
                            <div className="diagnostic-marquee-track scroll-right">
                                {[
                                    "High Defect Rates", "Inaccurate Job Costing", "Tooling Management Chaos",
                                    "Unclear Operator Performance", "Inventory Blind Spots", "Late Customer Dispatch",
                                    "OEE Inconsistencies", "Report Preparation Headaches"
                                ].concat([
                                    "High Defect Rates", "Inaccurate Job Costing", "Tooling Management Chaos",
                                    "Unclear Operator Performance", "Inventory Blind Spots", "Late Customer Dispatch",
                                    "OEE Inconsistencies", "Report Preparation Headaches"
                                ]).map((sign, i) => (
                                    <div key={i} className="diagnostic-marquee-card bg-glass-dark border-white-05 p-4 rounded-4 mx-3 hover:border-red-glow transition-all">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="bg-white-05 p-2 rounded-3 text-white-opacity-40">
                                                <Zap size={18} />
                                            </div>
                                            <span className="text-white-opacity-50 font-marcellus small tracking-wider uppercase text-nowrap">{sign}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="py-100 bg-black-mes pb-0">
                        <div className="container-fluid px-md-5">
                            <div className="vibrant-cta-box position-relative overflow-hidden wow zoomIn" data-wow-delay="100ms">
                                {/* Tech Mesh Background Overlays */}
                                <div className="position-absolute top-0 start-0 w-100 h-100 bg-vibrant-gradient opacity-100"></div>
                                <div className="position-absolute top-0 start-0 w-100 h-100 bg-tech-mesh opacity-20 translate-middle-x"></div>
                                
                                <div className="container position-relative z-index-1 py-5 py-md-5 text-center">
                                    <div className="row justify-content-center">
                                        <div className="col-xl-9 col-lg-10">
                                            <AnimatedTitle>
                                                <h2 className="display-6 display-md-4 text-white font-marcellus fw-bold mb-4 lowercase leading-tight">
                                                    Move from Manual Tracking <span>to Real-Time Visibility</span>
                                                </h2>
                                            </AnimatedTitle>
                                            <p className="text-white font-marcellus fs-6 fs-md-5 opacity-90 mb-5 max-w-700 mx-auto leading-relaxed">
                                                Micraft MES digitizes your factory operations to drive manufacturing efficiency.
                                            </p>
                                            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 gap-sm-4 px-3 px-sm-0">
                                                <Link href="/contact" className="btn-vibrant-cta w-100 w-sm-auto text-nowrap">
                                                    Book Your Demo Now
                                                </Link>
                                                <Link href="/solutions/production-tracking-software" className="btn-vibrant-secondary w-100 w-sm-auto text-nowrap">
                                                    Explore More Features
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Subtle Isometric Factory Element Corner Decoration */}
                                    <div className="position-absolute bottom-0 end-0 p-4 d-none d-xl-block opacity-40">
                                        <div className="cta-isometric-deco">
                                            <Box size={100} className="text-white opacity-10" />
                                        </div>
                                    </div>
                                </div>

                                {/* Floating HUD Elements */}
                                <div className="position-absolute top-10 start-10 bg-white-05 p-3 rounded-4 border border-white-10 backdrop-blur d-none d-lg-block animate-float">
                                    <TrendingUp size={24} className="text-white" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <style jsx global>{`
                        .bg-black-mes { background: #070B14; }
                        .bg-dark-deep-mes { background: #04070D; }
                        .bg-black-depth { background: #020306; }
                        .border-white-05 { border-color: rgba(255, 255, 255, 0.05) !important; }
                        .border-white-10 { border-color: rgba(255, 255, 255, 0.1) !important; }
                        .bg-white-02 { background: rgba(255, 255, 255, 0.02); }
                        .bg-white-05 { background: rgba(255, 255, 255, 0.05); }
                        .text-white-opacity-70 { color: rgba(255, 255, 255, 0.7); }
                        .text-white-opacity-60 { color: rgba(255, 255, 255, 0.6); }
                        .text-white-opacity-80 { color: rgba(255, 255, 255, 0.8); }
                        .bg-red-opacity-10 { background: rgba(255, 82, 82, 0.1); }
                        .bg-gold-opacity-05 { background: rgba(255, 210, 93, 0.05); }
                        .bg-gold-opacity-10 { background: rgba(255, 210, 93, 0.1); }
                        .border-gold-glow { border-color: rgba(255, 210, 93, 0.3) !important; }
                        .border-red-glow { border-color: rgba(255, 82, 82, 0.2); }
                        .text-gold { color: #7366CA; }
                        .text-red { color: #FF5252; }
                        .bg-glass-dark { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(20px); }
                        
                        .bg-gold-glow-radial { background: radial-gradient(circle, rgba(255, 210, 93, 0.2) 0%, transparent 70%); }
                        .bg-red-glow-radial { background: radial-gradient(circle, rgba(251, 86, 116, 0.15) 0%, transparent 70%); }
                        .text-gold-gradient { color: #7366CA; } /* Reverted to solid gold for better accessibility and stability */
                        .section-title h1 span, .section-title h2 span, h1 span, h2 span { background-color: transparent !important; background-image: none !important; -webkit-background-clip: initial !important; -webkit-text-fill-color: initial !important; color: inherit; }
                        .text-gold { color: #7366CA !important; }
                        .smaller { font-size: 11px; }
                        .max-w-500 { max-w-width: 500px; }
                        .btn-glass-gold { background: linear-gradient(90deg, #7366CA 0%, #B58B24 100%); color: black; border: none; }
                        .btn-glass-gold:hover { transform: scale(1.05); filter: brightness(1.1); box-shadow: 0 15px 30px rgba(255, 210, 93, 0.3); }

                        .hero-visual-perspective { perspective: 1000px; }
                        .perspective-card { transform: rotateY(-5deg) rotateX(2deg); transition: 0.5s; }
                        .perspective-card:hover { transform: rotateY(0deg) rotateX(0deg); }
                        
                        /* Hero Slider */
                        .hero-slider-v-container { height: 320px; overflow: hidden; position: relative; border-radius: 20px; }
                        @media (min-width: 992px) { .hero-slider-v-container { height: 480px; } }
                        .hero-slider-v-track { display: flex; flex-direction: column; width: 100%; animation: scrollUpHero 25s linear infinite; }
                        .hero-slider-v-item { height: 300px; width: 100%; position: relative; margin-bottom: 20px; border-radius: 20px; overflow: hidden; border: 1px solid rgba(255,255,255,0.05); }
                        @media (min-width: 992px) { .hero-slider-v-item { height: 350px; } }
                        @keyframes scrollUpHero { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }

                        /* Benefit Cards */
                        .benefit-card { background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 30px; transition: all 0.4s ease; }
                        .benefit-card:hover { transform: translateY(-10px); background: rgba(255,255,255,0.06); border-color: rgba(255, 210, 93, 0.3); }

                        /* Industry Minimal Cards */
                        .industry-img-circle { position: relative; width: 100px; height: 100px; border-radius: 50%; overflow: hidden; border: 2px solid rgba(255, 210, 93, 0.1); margin: 0 auto; transition: 0.5s; background: #04070D; }
                        .industry-minimal-card:hover .industry-img-circle { border-color: #7366CA; transform: scale(1.1); box-shadow: 0 0 30px rgba(255, 210, 93, 0.2); }

                        /* HUD & Scan */
                        .hud-line-scanner { position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(to right, transparent, rgba(255,210,93,0.5), transparent); animation: scanV 5s linear infinite; }
                        @keyframes scanV { from { top: 0%; } to { top: 100%; } }
                        .live-dot-hero { width: 8px; height: 8px; background: #4ADE80; border-radius: 50%; box-shadow: 0 0 10px #4ADE80; animation: pulseG 2s infinite; }
                        @keyframes pulseG { 0% { opacity: 0.4; transform: scale(1); } 50% { opacity: 1; transform: scale(1.4); } 100% { opacity: 0.4; transform: scale(1); } }
                        
                        .hover-gold:hover { background: #7366CA !important; color: black !important; }

                        /* Marquee Styles */
                        .diagnostic-marquee-container { width: 100%; overflow: hidden; display: flex; }
                        .diagnostic-marquee-track { display: flex; width: max-content; }
                        .scroll-left { animation: marqueeL 60s linear infinite; }
                        .scroll-right { animation: marqueeR 60s linear infinite; }
                        .diagnostic-marquee-card { min-width: 320px; transition: all 0.3s ease; border: 1px solid rgba(255,255,255,0.05); }
                        .diagnostic-marquee-card:hover { transform: scale(1.05); background: rgba(255,255,255,0.05); border-color: rgba(255, 82, 82, 0.3); z-index: 10; }
                        @keyframes marqueeL { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                        @keyframes marqueeR { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }

                        .vibrant-cta-box { border-radius: 24px; padding: 40px 15px; box-shadow: 0 30px 60px rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); }
                        @media (min-width: 768px) {
                            .vibrant-cta-box { border-radius: 40px; padding: 60px 20px; }
                        }
                        .bg-vibrant-gradient { background: linear-gradient(135deg, #DD4C8C 0%, #9055E3 50%, #5E7DEB 100%); }
                        .bg-tech-mesh { background-image: radial-gradient(rgba(255,255,255,0.1) 1px, transparent 0); background-size: 30px 30px; }
                        .btn-vibrant-cta { 
                            background: linear-gradient(90deg, #626EEF 0%, #EB5B81 100%); 
                            color: white; 
                            padding: 14px 25px; 
                            border-radius: 12px; 
                            font-weight: 700; 
                            font-family: 'Marcellus', serif; 
                            border: none; 
                            transition: 0.3s;
                            box-shadow: 0 10px 20px rgba(98, 110, 239, 0.3);
                            display: inline-block;
                            text-decoration: none;
                            font-size: 14px;
                        }
                        @media (min-width: 768px) {
                            .btn-vibrant-cta { padding: 18px 45px; border-radius: 16px; font-size: 16px; }
                        }
                        .btn-vibrant-cta:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(235, 91, 129, 0.4); color: white; }
                        .btn-vibrant-secondary { 
                            background: rgba(255,255,255,0.1); 
                            backdrop-filter: blur(10px);
                            color: white; 
                            padding: 14px 25px; 
                            border-radius: 12px; 
                            font-weight: 700; 
                            font-family: 'Marcellus', serif; 
                            border: 1px solid rgba(255,255,255,0.2); 
                            transition: 0.3s;
                            display: inline-block;
                            text-decoration: none;
                            font-size: 14px;
                        }
                        @media (min-width: 768px) {
                            .btn-vibrant-secondary { padding: 18px 45px; border-radius: 16px; font-size: 16px; }
                        }
                        .btn-vibrant-secondary:hover { background: rgba(255,255,255,0.2); transform: translateY(-5px); color: white; }
                        .animate-float { animation: float 6s ease-in-out infinite; }
                        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
                        
                    `}</style>

                </div>
            )}
        </Layout>
    );
}