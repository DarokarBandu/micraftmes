"use client";

import React from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedTitle from "@/components/elements/AnimatedTitle";
import {
    Clock, BarChart3, Users, ShieldCheck,
    Zap, Layers, CheckCircle2,
    XCircle, FileText, ClipboardList, PenTool,
    AlertTriangle, Search, LayoutDashboard,
    MonitorCheck, Globe, Cog, Workflow, MonitorDot,
    ArrowRightCircle, CheckSquare, Rocket,
    EyeOff, MonitorX,
} from 'lucide-react';

export default function ManualVsDigitalProductionTrackingPage() {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Layout
            headerStyle={1}
            footerStyle={1}
            breadcrumbTitle="Manual vs Digital Production Tracking"
        >
            {mounted && (
                <div className="manual-vs-digital-page">

                    {/* 1. Hero Section */}
                    <section className="why-choose-two py-100 bg-black-mes position-relative overflow-hidden" id="hero">
                        <div className="why-choose-two__shape-1 float-bob-y position-absolute top-0 start-0 opacity-10">
                            <Image src="/assets/images/shapes/why-choose-two-shape-1.png" alt="Shape" width={100} height={100} />
                        </div>
                        <div className="position-absolute top-0 end-0 w-100 h-100 mesh-shape-bg-03 opacity-15"></div>

                        <div className="container position-relative z-index-1">
                            <div className="row align-items-center">
                                <div className="col-xl-6 wow slideInLeft" data-wow-delay="100ms">
                                    <div className="section-title text-left">
                                        <div className="section-title__tagline-box">
                                            <div className="section-title__tagline-shape-1"></div>
                                            <span className="section-title__tagline text-gold text-uppercase letter-spacing-2">Evolution of Manufacturing</span>
                                            <div className="section-title__tagline-shape-2"></div>
                                        </div>
                                        <AnimatedTitle>
                                            <h1 className="section-title__title text-white font-marcellus lowercase leading-tight">
                                                Manual vs Digital <span>Production Tracking</span>
                                            </h1>
                                        </AnimatedTitle>
                                        <p className="text-gold fw-bold mb-4 font-marcellus fs-5">
                                            Understand the limitations of manual systems and how digital monitoring helps manufacturers gain real-time visibility.
                                        </p>
                                    </div>
                                    <p className="text-white-opacity-70 mb-5 font-marcellus leading-relaxed">
                                        Many companies still rely on paper registers and spreadsheets. While these work for small operations, they create significant blind spots as complexity increases. Digital tracking provides the operational control needed for modern manufacturing.
                                    </p>
                                    <div className="d-flex flex-wrap gap-3">
                                        <Link href="/contact" className="thm-btn shiny-btn px-4 py-3">See Digital Tracking in Action <span className="icon-arrow-right ms-2"></span></Link>
                                        <Link href="/contact" className="thm-btn outline-btn px-4 py-3 bg-white-05 border-0">Book a Live Demo</Link>
                                    </div>
                                </div>
                                <div className="col-xl-6 mt-5 mt-xl-0 ps-xl-5 wow slideInRight" data-wow-delay="200ms">
                                    <div className="p-3 bg-dark-deep-mes border border-white-10 rounded-4 shadow-3xl position-relative overflow-hidden group">
                                        <div className="position-absolute top-2 left-2 z-index-5">
                                            <div className="bg-glass-dark border border-white-10 px-3 py-1 rounded-pill d-flex align-items-center gap-2">
                                                <div className="live-dot-hero"></div>
                                                <span className="text-white font-marcellus uppercase fw-bold" style={{ fontSize: '10px', letterSpacing: '1px' }}>Live Data Feed</span>
                                            </div>
                                        </div>
                                        <div className="position-relative w-100 overflow-hidden rounded-3" style={{ aspectRatio: '1/1' }}>
                                            <Image
                                                src="/assets/images/features/qi_realtime.png"
                                                alt="Manual vs Digital Tracking"
                                                fill
                                                className="object-fit-cover transition-all duration-700 group-hover:scale-105"
                                            />
                                            <div className="hud-line-scanner"></div>
                                            <div className="position-absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 2. What is Manual Production Tracking? */}
                    <section className="py-100 bg-dark-deep-mes border-top border-white-05 position-relative overflow-hidden">
                        {/* Section BG */}
                        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
                            <Image src="/assets/images/backgrounds/PracticalImplementation.jpg" alt="" fill className="object-fit-cover" style={{ opacity: 0.06 }} aria-hidden="true" />
                            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to right, #04070D 0%, transparent 50%, #04070D 100%)' }}></div>
                        </div>

                        <div className="container position-relative" style={{ zIndex: 2 }}>
                            <div className="row align-items-center g-5">

                                {/* Left — Vertical Auto-Scroll Image Slider */}
                                <div className="col-xl-5 wow slideInLeft" data-wow-delay="100ms">
                                    <div className="legacy-slider-wrapper position-relative">
                                        {/* Fade mask top & bottom */}
                                        <div className="legacy-slider-fade-top"></div>
                                        <div className="legacy-slider-fade-bottom"></div>

                                        {/* Scrolling track */}
                                        <div className="legacy-slider-track">
                                            {[
                                                { src: "/assets/images/backgrounds/Realtimeshopfloor.jpg", label: "Complex Systems" },
                                                { src: "/assets/images/backgrounds/ProductionandDowntime.jpg", label: "High Licensing Costs" },
                                                { src: "/assets/images/backgrounds/PracticalImplementation.jpg", label: "Long Implementation" },
                                                { src: "/assets/images/backgrounds/EndtoEndVisibility.jpg", label: "Outdated Infrastructure" },
                                                /* Duplicated for seamless loop */
                                                { src: "/assets/images/backgrounds/Realtimeshopfloor.jpg", label: "Complex Systems" },
                                                { src: "/assets/images/backgrounds/ProductionandDowntime.jpg", label: "High Licensing Costs" },
                                                { src: "/assets/images/backgrounds/PracticalImplementation.jpg", label: "Long Implementation" },
                                                { src: "/assets/images/backgrounds/EndtoEndVisibility.jpg", label: "Outdated Infrastructure" },
                                            ].map((slide, i) => (
                                                <div key={i} className="legacy-slide">
                                                    <Image
                                                        src={slide.src}
                                                        alt={slide.label}
                                                        fill
                                                        className="object-fit-cover legacy-slide-img"
                                                        style={{ filter: 'grayscale(30%) brightness(0.7)' }}
                                                    />
                                                    <div className="legacy-slide-overlay"></div>
                                                    <div className="position-absolute bottom-0 start-0 p-3">
                                                        <span className="legacy-slide-label">
                                                            ⚠ {slide.label}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Floating stat badges */}
                                        <div className="position-absolute top-0 end-0 me-n4 mt-4" style={{ zIndex: 10 }}>
                                            <div className="legacy-stat-badge">
                                                <div className="text-gold fw-bold font-marcellus fs-4">48h+</div>
                                                <div className="text-white-opacity-60 font-marcellus" style={{ fontSize: '11px' }}>Avg Report Delay</div>
                                            </div>
                                        </div>
                                        <div className="position-absolute bottom-0 end-0 me-n4 mb-4" style={{ zIndex: 10 }}>
                                            <div className="legacy-stat-badge">
                                                <div className="text-red fw-bold font-marcellus fs-4">34%</div>
                                                <div className="text-white-opacity-60 font-marcellus" style={{ fontSize: '11px' }}>Data Error Rate</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right — Content */}
                                <div className="col-xl-7 wow fadeInRight" data-wow-delay="200ms">
                                    <div className="section-title mb-4">
                                        <div className="section-title__tagline-box">
                                            <div className="section-title__tagline-shape-1"></div>
                                            <span className="section-title__tagline text-gold">The Legacy Approach</span>
                                            <div className="section-title__tagline-shape-2"></div>
                                        </div>
                                        <AnimatedTitle>
                                            <h2 className="section-title__title text-white font-marcellus">
                                                Manual Production <span>Tracking in Manufacturing</span>
                                            </h2>
                                        </AnimatedTitle>
                                    </div>
                                    <p className="text-white-opacity-70 font-marcellus leading-relaxed mb-4 border-start border-gold ps-4">
                                        Manual production tracking involves recording activities using traditional methods. Data is usually captured after operations complete — creating blind spots that hurt performance.
                                    </p>

                                    {/* Icon-card list */}
                                    <div className="d-grid gap-3">
                                        {[
                                            { text: "Paper production registers & shift logs", icon: FileText, desc: "Handwritten entries prone to errors and loss" },
                                            { text: "Spreadsheets (Excel / Google Sheets)", icon: ClipboardList, desc: "Disconnected files, no real-time sync" },
                                            { text: "Whiteboards & physical floor cards", icon: PenTool, desc: "No audit trail, manually erased" },
                                            { text: "Verbal updates from supervisors", icon: Users, desc: "Unverifiable, delayed, and inconsistent" }
                                        ].map((item, i) => (
                                            <div key={i} className="d-flex align-items-start gap-4 p-3 rounded-4 border border-white-05 bg-white-02 legacy-item">
                                                <div className="bg-red-opacity-10 border border-red-glow p-2 rounded-3 shrink-0">
                                                    <item.icon size={20} color="#FF5252" />
                                                </div>
                                                <div>
                                                    <h5 className="text-white font-marcellus mb-1 fs-6 fw-bold">{item.text}</h5>
                                                    <p className="text-white-opacity-50 font-marcellus mb-0 small">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* 3. Challenges of Manual Production Tracking */}
                    <section className="py-100 bg-dark-deep-mes" id="challenges">
                        <div className="container">
                            <div className="section-title text-center mb-60">
                                <div className="section-title__tagline-box justify-content-center mx-auto">
                                    <span className="section-title__tagline text-gold">The Operational Cost</span>
                                </div>
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white font-marcellus">
                                        Problems with <span>Manual Tracking</span>
                                    </h2>
                                </AnimatedTitle>
                            </div>
                            <div className="row g-4">
                                {[
                                    { title: "No Real-Time Visibility", text: "Managers cannot see shop floor activity instantly.", icon: EyeOff, color: "#FF5252" },
                                    { title: "Delayed Reporting", text: "Production data updated hours or even days later.", icon: Clock, color: "#FFD25D" },
                                    { title: "Machine Utilization", text: "Impossible to accurately measure equipment productivity.", icon: MonitorX, color: "#FF5252" },
                                    { title: "Hidden Bottlenecks", text: "Production delays remain hidden until after the fact.", icon: AlertTriangle, color: "#FF5252" },
                                    { title: "Inaccurate Data", text: "High risk of manual entry errors and data silos.", icon: Search, color: "#FFD25D" },
                                    { title: "Poor Coordination", text: "Teams struggle to track complex workflow progress.", icon: Layers, color: "#FF5252" }
                                ].map((item, i) => (
                                    <div key={i} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${i * 100}ms`}>
                                        <div className="glass-card-innovative p-5 rounded-4 border-white-05 h-100 transition-all hover-translate-y bg-white-02">
                                            <div className="mb-4 bg-white-05 p-3 rounded-4 d-inline-block border border-white-10">
                                                <item.icon size={30} color={item.color} />
                                            </div>
                                            <h4 className="text-white h5 font-marcellus mb-3">{item.title}</h4>
                                            <p className="text-white-opacity-60 small mb-0 font-marcellus">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 4. What is Digital Production Tracking? */}
                    <section className="py-100 bg-black-mes position-relative overflow-hidden">
                        {/* Background */}
                        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
                            <Image src="/assets/images/features/digital_sync_motion.png" alt="" fill className="object-fit-cover" style={{ opacity: 0.1 }} aria-hidden="true" />
                            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(105deg, #070B14 40%, transparent 100%)' }}></div>
                            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'radial-gradient(ellipse at 70% 50%, transparent 20%, #070B14 80%)' }}></div>
                        </div>
                        <div className="container position-relative" style={{ zIndex: 2 }}>
                            <div className="row align-items-center">
                                <div className="col-xl-6 wow fadeInLeft" data-wow-delay="100ms">
                                    <div className="section-title">
                                        <div className="section-title__tagline-box">
                                            <span className="section-title__tagline text-gold">The Digital Shift</span>
                                        </div>
                                        <AnimatedTitle>
                                            <h2 className="section-title__title text-white font-marcellus">
                                                Digital Production <span>Tracking Systems</span>
                                            </h2>
                                        </AnimatedTitle>
                                    </div>
                                    <p className="text-white-opacity-70 font-marcellus mb-4">
                                        Digital tracking uses software platforms to monitor every aspect of production. It transforms raw data into real-time operational insights that drive better decision-making.
                                    </p>
                                    <div className="row g-3">
                                        {[
                                            { label: "Production Orders", icon: ClipboardList },
                                            { label: "Machine Activity", icon: MonitorDot },
                                            { label: "Production Output", icon: BarChart3 },
                                            { label: "Inspection Results", icon: CheckSquare },
                                            { label: "Step Workflows", icon: Workflow }
                                        ].map((tag, i) => (
                                            <div key={i} className="col-auto">
                                                <div className="bg-white-05 border border-white-10 px-3 py-2 rounded-pill text-gold small font-marcellus d-flex align-items-center gap-2">
                                                    <tag.icon size={14} /> {tag.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-5">
                                        <Link href="/solutions/production-tracking-software" className="text-gold fw-bold underline-hover d-flex align-items-center gap-2 font-marcellus">
                                            Explore Production Tracking Software <ArrowRightCircle size={18} />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-6 mt-5 mt-xl-0 wow slideInRight" data-wow-delay="200ms">
                                    <div className="digital-slider-wrapper position-relative">
                                        {/* Fade masks */}
                                        <div className="digital-slider-fade-top"></div>
                                        <div className="digital-slider-fade-bottom"></div>

                                        {/* Scrolling track - scrolls DOWN for visual contrast with legacy slider */}
                                        <div className="digital-slider-track">
                                            {[
                                                { src: "/assets/images/backgrounds/EndtoEndVisibility.jpg", label: "Real-Time Visibility" },
                                                { src: "/assets/images/backgrounds/Realtimeshopfloor.jpg", label: "Live Shop Floor Data" },
                                                { src: "/assets/images/backgrounds/ProductionandDowntime.jpg", label: "Machine Monitoring" },
                                                { src: "/assets/images/backgrounds/PracticalImplementation.jpg", label: "Digital Dashboards" },
                                                /* Duplicated for seamless loop */
                                                { src: "/assets/images/backgrounds/EndtoEndVisibility.jpg", label: "Real-Time Visibility" },
                                                { src: "/assets/images/backgrounds/Realtimeshopfloor.jpg", label: "Live Shop Floor Data" },
                                                { src: "/assets/images/backgrounds/ProductionandDowntime.jpg", label: "Machine Monitoring" },
                                                { src: "/assets/images/backgrounds/PracticalImplementation.jpg", label: "Digital Dashboards" },
                                            ].map((slide, i) => (
                                                <div key={i} className="digital-slide">
                                                    <Image
                                                        src={slide.src}
                                                        alt={slide.label}
                                                        fill
                                                        className="object-fit-cover digital-slide-img"
                                                        style={{ filter: 'brightness(0.65) saturate(1.2)' }}
                                                    />
                                                    <div className="digital-slide-overlay"></div>
                                                    <div className="position-absolute bottom-0 start-0 p-3">
                                                        <span className="digital-slide-label">
                                                            ✦ {slide.label}
                                                        </span>
                                                    </div>
                                                    {/* Live pulse dot */}
                                                    <div className="position-absolute top-0 end-0 p-3 d-flex align-items-center gap-2">
                                                        <span className="live-dot"></span>
                                                        <span className="text-white font-marcellus" style={{ fontSize: '11px', opacity: 0.8 }}>LIVE</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Floating accuracy badge */}
                                        <div className="position-absolute top-0 start-0 ms-n4 mt-4" style={{ zIndex: 10 }}>
                                            <div className="digital-stat-badge">
                                                <div className="text-gold fw-bold font-marcellus fs-4">99%</div>
                                                <div className="text-white-opacity-60 font-marcellus" style={{ fontSize: '11px' }}>Data Accuracy</div>
                                            </div>
                                        </div>
                                        <div className="position-absolute bottom-0 start-0 ms-n4 mb-4" style={{ zIndex: 10 }}>
                                            <div className="digital-stat-badge">
                                                <div className="text-gold fw-bold font-marcellus fs-4">1s</div>
                                                <div className="text-white-opacity-60 font-marcellus" style={{ fontSize: '11px' }}>Update Latency</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 5. Manual vs Digital Comparison */}
                    <section className="py-100 bg-dark-deep-mes position-relative overflow-hidden">
                        {/* Section Background */}
                        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
                            <Image src="/assets/images/backgrounds/PracticalImplementation.jpg" alt="" fill className="object-fit-cover" style={{ opacity: 0.08 }} aria-hidden="true" />
                            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to bottom, #04070D 0%, transparent 30%, transparent 70%, #04070D 100%)' }}></div>
                            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to right, #04070D 0%, transparent 20%, transparent 80%, #04070D 100%)' }}></div>
                        </div>
                        <div className="container position-relative" style={{ zIndex: 2 }}>
                            <div className="section-title text-center mb-60">
                                <div className="section-title__tagline-box justify-content-center mx-auto">
                                    <span className="section-title__tagline text-gold">Head-to-Head</span>
                                </div>
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white font-marcellus">
                                        Manual vs <span>Digital Tracking</span>
                                    </h2>
                                </AnimatedTitle>
                            </div>
                            <div className="versus-panel overflow-hidden mx-auto shadow-3xl bg-glass-dark" style={{ maxWidth: '1000px' }}>
                                <div className="versus-panel__headers">
                                    <div className="versus-panel__header py-5 px-5 d-flex align-items-center gap-3 bg-red-opacity-05">
                                        <div className="bg-red-opacity-10 p-3 rounded-3 border border-red-glow shadow-lg">
                                            <FileText size={24} color="#FF5252" />
                                        </div>
                                        <div>
                                            <span className="text-red fw-bold tracking-widest font-marcellus uppercase d-block fs-7 mb-1">Traditional</span>
                                            <h4 className="text-white font-marcellus h5 mb-0 uppercase">Manual Tracking</h4>
                                        </div>
                                    </div>
                                    <div className="versus-panel__divider-header d-flex align-items-center justify-content-center position-relative">
                                        <div className="versus-vs-badge shadow-glow-gold-v2">VS</div>
                                        <div className="versus-vertical-laser h-100"></div>
                                    </div>
                                    <div className="versus-panel__header py-5 px-5 d-flex align-items-center justify-content-end gap-3 text-end bg-gold-opacity-05">
                                        <div>
                                            <span className="text-gold fw-bold tracking-widest font-marcellus uppercase d-block fs-7 mb-1">Next Generation</span>
                                            <h4 className="text-white font-marcellus h5 mb-0 uppercase">Digital Hosting</h4>
                                        </div>
                                        <div className="bg-gold-soft p-3 rounded-3 border border-gold-glow text-gold shadow-lg">
                                            <Zap size={24} />
                                        </div>
                                    </div>
                                </div>
                                <div className="versus-body">
                                    {[
                                        { m: "Recorded manually using registers & excel", d: "100% Digital capture through MES software", icon: FileText },
                                        { m: "Significant visibility gaps in production", d: "Complete 360° Real-time visibility", icon: BarChart3 },
                                        { m: "Data entry happens post-shift / shift-end", d: "Instant data availability for supervisors", icon: Clock },
                                        { m: "Human error - High risk of data silos", d: "Standardized & automated data workflows", icon: ShieldCheck },
                                        { m: "Manual analysis requires hours of work", d: "Live production dashboards & automated OEE", icon: LayoutDashboard },
                                        { m: "Fragmented historical production logs", d: "Centralized traceable digital production history", icon: Workflow }
                                    ].map((row, i) => (
                                        <div key={i} className="versus-row wow fadeInUp align-items-stretch" data-wow-delay={`${i * 50}ms`}>
                                            <div className="versus-cell-left py-4 px-5 d-flex align-items-center gap-4 transition-all">
                                                <div className="bg-white-05 p-2 rounded-2 border border-white-10 shrink-0 opacity-40">
                                                    <XCircle size={16} className="text-red" />
                                                </div>
                                                <span className="text-white-opacity-70 font-marcellus small leading-relaxed">{row.m}</span>
                                            </div>
                                            <div className="versus-row__center d-flex align-items-center justify-content-center position-relative">
                                                <div className="versus-row__line"></div>
                                                <div className="versus-row__icon-node"><row.icon size={12} className="text-gold opacity-50" /></div>
                                            </div>
                                            <div className="versus-cell-right py-4 px-5 d-flex align-items-center justify-content-end gap-4 transition-all group">
                                                <span className="text-white font-marcellus small leading-relaxed fw-bold text-end">{row.d}</span>
                                                <div className="bg-gold-soft p-2 rounded-2 border border-gold-glow shrink-0 shadow-sm transition-all group-hover:scale-110">
                                                    <CheckCircle2 size={16} className="text-gold" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 6. Benefits of Digital Production Tracking */}
                    <section className="py-100 bg-black-mes">
                        <div className="container">
                            <div className="section-title text-center mb-60">
                                <div className="section-title__tagline-box justify-content-center mx-auto">
                                    <span className="section-title__tagline text-gold">Key Advantages</span>
                                </div>
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white font-marcellus">
                                        Advantages of <span>Digital Monitoring</span>
                                    </h2>
                                </AnimatedTitle>
                            </div>
                            <div className="row g-4">
                                {[
                                    { title: "Real-Time Visibility", text: "Monitor factory operations instantly.", icon: BarChart3 },
                                    { title: "Faster Decision Making", text: "Identify and resolve issues early.", icon: Zap },
                                    { title: "Enhanced Utilization", text: "Track accurate machine productivity.", icon: MonitorCheck },
                                    { title: "Better Coordination", text: "Manage complex shop floor workflows.", icon: Workflow },
                                    { title: "Accurate Reporting", text: "Reliable and consistent production data.", icon: ClipboardList },
                                    { title: "Operational Efficiency", text: "Reduce delays and optimize workflows.", icon: Rocket }
                                ].map((item, i) => (
                                    <div key={i} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${i * 100}ms`}>
                                        <div className="p-4 rounded-4 bg-white-02 border border-white-05 hover-scale-sm transition-all h-100 d-flex gap-4 cursor-pointer">
                                            <div className="bg-gold p-3 rounded-circle text-black shadow-glow-gold-small shrink-0" style={{ width: '56px', height: '56px' }}>
                                                <item.icon size={28} />
                                            </div>
                                            <div>
                                                <h4 className="text-white h6 font-marcellus mb-1 fw-bold">{item.title}</h4>
                                                <p className="text-white-opacity-60 font-marcellus small mb-0">{item.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 6.5 New Strategic Section - Production Intelligence */}
                    <section className="py-100 bg-black-depth position-relative overflow-hidden">
                        <div className="position-absolute inset-0 z-index-0 opacity-20">
                            <Image src="/assets/images/features/sft_status_map.png" alt="Intelligence Map" fill className="object-fit-cover" />
                        </div>
                        <div className="container relative z-index-1">
                            <div className="bg-glass-dark border border-white-10 p-5 rounded-5 shadow-3xl wow zoomIn">
                                <div className="row align-items-center">
                                    <div className="col-lg-7">
                                        <span className="text-gold fw-bold font-marcellus uppercase tracking-widest d-block mb-3">Software Architecture</span>
                                        <h2 className="text-white font-marcellus h3 mb-4">Command Your Shop Floor with <br /><span className="text-gold">Live Factory Maps</span></h2>
                                        <p className="text-white-opacity-65 mb-0">Unlike manual tracking, our Digital MES provides a bird&apos;s-eye view of your entire operation in real-time. Every machine, work center, and operator status is updated millisecond by millisecond.</p>
                                    </div>
                                    <div className="col-lg-5 mt-4 mt-lg-0 text-lg-end">
                                        <div className="d-inline-flex flex-column gap-3 p-4 bg-white-02 rounded-4 border border-white-05">
                                            <div className="d-flex align-items-center justify-content-between gap-5">
                                                <span className="text-white-opacity-70 font-marcellus small">Active Nodes</span>
                                                <span className="text-green fw-bold font-marcellus" style={{ width: '40px' }}>24</span>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between gap-5">
                                                <span className="text-white-opacity-70 font-marcellus small">Data Packets / sec</span>
                                                <span className="text-gold fw-bold font-marcellus" style={{ width: '40px' }}>128</span>
                                            </div>
                                            <div className="progress bg-white-10" style={{ height: '2px' }}>
                                                <div className="progress-bar bg-gold animate-progress-glow" style={{ width: '85%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 7. Role of MES in Digital Production Tracking */}
                    <section className="py-100 bg-dark-deep-mes border-top border-white-05 position-relative overflow-hidden">
                        <div className="position-absolute top-0 end-0 p-5 opacity-05">
                            <Cog size={300} className="text-white animate-spin-slow" />
                        </div>
                        <div className="container relative z-index-1">
                            <div className="row align-items-center">
                                <div className="col-xl-6 wow fadeInLeft" data-wow-delay="100ms">
                                    <div className="section-title">
                                        <AnimatedTitle>
                                            <h2 className="section-title__title text-white font-marcellus">
                                                How MES Enables <span>Digital Tracking</span>
                                            </h2>
                                        </AnimatedTitle>
                                    </div>
                                    <p className="text-white-opacity-70 font-marcellus mb-5">
                                        Manufacturing Execution Systems (MES) act as the central technology platform to digitize shop floor operations, visualize performance, and capture precise data.
                                    </p>
                                    <div className="row g-4 mb-4">
                                        {[
                                            { title: "Order Tracking", text: "Real-time order progress monitoring." },
                                            { title: "Machine Utilization", text: "Capture precise uptime and downtime." },
                                            { title: "Performance Dashboards", text: "Visualize factory-wide performance." }
                                        ].map((adv, i) => (
                                            <div key={i} className="col-12">
                                                <div className="d-flex align-items-center gap-3">
                                                    <CheckCircle2 size={20} className="text-gold" />
                                                    <span className="text-white font-marcellus fs-6">{adv.title} - <span className="text-white-opacity-60">{adv.text}</span></span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <Link href="/resources/what-is-mes" className="thm-btn shiny-btn px-4 py-3 mt-4 text-nowrap">What is MES? <ArrowRightCircle size={18} className="ms-2" /></Link>
                                </div>
                                <div className="col-xl-6 mt-5 mt-xl-0 ps-xl-5 wow fadeInRight" data-wow-delay="200ms">
                                    <div className="position-relative p-5 bg-glass-dark rounded-5 overflow-hidden border border-white-10">
                                        <div className="bg-mesh-center-gold opacity-10"></div>
                                        <div className="text-center position-relative z-index-2">
                                            <div className="mb-4 d-inline-block p-4 rounded-circle bg-gold-soft border border-gold-glow shadow-glow-gold-small">
                                                <MonitorCheck size={48} className="text-gold" />
                                            </div>
                                            <h3 className="text-white font-marcellus h4 mb-3">Unified Production View</h3>
                                            <p className="text-white-opacity-60 font-marcellus small mb-5">Consolidating every shop floor data point into a single, high-fidelity digital dashboard.</p>

                                            <div className="row g-4 text-center">
                                                {[
                                                    { icon: LayoutDashboard, label: "Live Stats", color: "#FFD25D" },
                                                    { icon: Globe, label: "Multi-Plant", color: "#6065D4" },
                                                    { icon: Rocket, label: "Performance", color: "#FA5674" }
                                                ].map((item, i) => (
                                                    <div key={i} className="col-4">
                                                        <div className="bg-white-05 py-4 rounded-4 border border-white-05 transition-all hover-translate-y">
                                                            <item.icon size={26} color={item.color} className="mb-2 mx-auto" />
                                                            <span className="d-block text-white font-marcellus" style={{ fontSize: '10px' }}>{item.label}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="py-100 bg-dark-deep-mes border-top border-white-05 position-relative overflow-hidden">
                        {/* Section Background Visual */}
                        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
                            <Image src="/assets/images/features/roi_section_bg.png" alt="" fill className="object-fit-cover" style={{ opacity: 0.15 }} />
                            <div className="position-absolute inset-0 bg-gradient-to-b from-dark-deep-mes via-transparent to-dark-deep-mes"></div>
                            <div className="position-absolute inset-0" style={{ background: 'radial-gradient(circle at center, transparent 30%, #04070D 90%)' }}></div>
                        </div>

                        <div className="container position-relative z-index-1">
                            <div className="section-title text-center mb-60 wow fadeInUp">
                                <span className="text-gold fw-bold font-marcellus uppercase tracking-widest d-block mb-3">Strategic Decision Point</span>
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white font-marcellus">
                                        Is it Time to <span>Switch?</span>
                                    </h2>
                                </AnimatedTitle>
                                <p className="text-white-opacity-65 max-w-700 mx-auto font-marcellus mt-3 fs-6">If your production team is experiencing any of these signals, manual tracking is likely limiting your factory&apos;s growth potential.</p>
                            </div>
                            <div className="row g-4 justify-content-center">
                                {[
                                    { title: "Manual Reporting Lag", text: "Production reports take hours to compile, delaying critical management responses.", icon: Clock },
                                    { title: "Inaccurate Dashboards", text: "Supervisors find discrepancies between recorded data and physical stock or output.", icon: ShieldCheck },
                                    { title: "Ghost Downtime", text: "Machines are idling without clear reasons specified in paper logs or Excel files.", icon: AlertTriangle },
                                    { title: "Traceability Issues", text: "Finding the root cause of quality defects takes days instead of seconds.", icon: Search },
                                    { title: "Siloed Operations", text: "Managers from different departments cannot see current production status without calling the floor.", icon: Users }
                                ].map((item, i) => (
                                    <div key={i} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${i * 100}ms`}>
                                        <div className="glass-card-innovative h-100 p-5 rounded-4 transition-all hover-translate-y bg-glass-dark border border-white-10 group">
                                            <div className="mb-4 d-inline-block p-4 rounded-4 bg-white-05 border border-white-10 transition-all group-hover:border-gold-glow">
                                                <item.icon size={36} className="text-gold" />
                                            </div>
                                            <h4 className="text-white h5 font-marcellus mb-3 group-hover:text-gold transition-all">{item.title}</h4>
                                            <p className="text-white-opacity-60 small mb-0 font-marcellus leading-relaxed">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 9. How Micraft MES Helps */}
                    <section className="py-100 bg-dark-deep-mes position-relative overflow-hidden">
                        <div className="capability-mesh h-100 opacity-20"></div>
                        <div className="container relative z-index-1">
                            <div className="section-title text-center mb-80 wow fadeInUp">
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white font-marcellus">
                                        Micraft MES for <span>Digital Monitoring</span>
                                    </h2>
                                </AnimatedTitle>
                                <p className="mt-4 text-white-opacity-70 mx-auto font-marcellus max-w-800">
                                    Replace manual tracking with real-time digital monitoring built for speed and precision.
                                </p>
                            </div>
                            <div className="row g-4 justify-content-center">
                                {[
                                    { title: "Production Tracking", text: "End-to-end visibility into every work order, from material issue to final goods completion.", img: "micraftmeswork/production-order.png", isCustom: false },
                                    { title: "Machine Monitoring", text: "Automated data capture of machine status, cycle times, and OEE performance metrics.", img: "micraftmeswork/machine-monitoring.png", isCustom: false },
                                    { title: "Shop Floor Dashboards", text: "HDS (High-Definition Shopfloor) dashboards for real-time visualization of production targets.", img: "micraftmeswork/shop-floor-data.png", isCustom: false },
                                    { title: "Quality Tracking", text: "Digitized quality checks at every stage, ensuring defect reduction and complete traceability.", img: "micraftmeswork/quality-inspection.png", isCustom: false },
                                    { title: "Real-Time Analytics", text: "Harness big data to identify hidden bottlenecks and optimize factory floor throughput.", img: "micraftmeswork/dispatch-dashboard.png", isCustom: false }
                                ].map((choice, i) => (
                                    <div key={i} className={`col-xl-4 col-md-6 wow fadeInUp`} data-wow-delay={`${(i + 1) * 100}ms`}>
                                        <div className="capability-card h-100 p-5 group">
                                            <div className="capability-img-box mb-4 position-relative">
                                                <div className="capability-icon-glow"></div>
                                                <Image
                                                    src={`/assets/images/${choice.img}`}
                                                    alt={choice.title}
                                                    width={400}
                                                    height={250}
                                                    className="capability-illustration object-fit-cover rounded-3 border border-white-10"
                                                />
                                            </div>
                                            <h3 className="text-white font-marcellus h5 mb-3 group-hover:text-gold transition-all">{choice.title}</h3>
                                            <p className="text-white-opacity-65 small mb-0 font-marcellus leading-relaxed">{choice.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 10. Final CTA Section */}
                    <section className="newsletter-one py-120 bg-black-mes border-top border-white-05">
                        <div className="container">
                            <div className="newsletter-one__inner wow fadeInUp" style={{ background: 'linear-gradient(90deg, #FA5674 0%, #6065D4 100%)', borderRadius: '40px' }}>
                                <div className="newsletter-one__shape-bg" style={{ backgroundImage: "url(/assets/images/shapes/newsletter-one-shape-bg.png)" }}></div>
                                <div className="newsletter-one__shape-1 float-bob-x">
                                    <Image src="/assets/images/shapes/newsletter-one-shape-1.png" alt="Shape" width={416} height={368} />
                                </div>
                                <div className="newsletter-one__img">
                                    <Image src="/assets/images/backgrounds/cta.png" alt="Micraft MES" width={300} height={300} />
                                </div>
                                <div className="row justify-content-center text-center position-relative z-index-5">
                                    <div className="col-lg-10">
                                        <AnimatedTitle>
                                            <h2 className="newsletter-one__title text-white mb-4 font-marcellus" style={{ fontSize: '42px' }}>
                                                Move from Manual Tracking to <br />
                                                <span>Real-Time Visibility</span>
                                            </h2>
                                        </AnimatedTitle>
                                        <p className="text-white mb-5 font-marcellus fw-bold fs-5 opacity-90">
                                            Micraft MES digitizes your factory operations to drive manufacturing efficiency.
                                        </p>
                                        <div className="d-flex flex-wrap justify-content-center gap-4">
                                            <Link href="/contact" className="thm-btn shiny-btn px-5 py-4 fs-6">Book Your Demo Now <span className="icon-arrow-right ms-2"></span></Link>
                                            <Link href="/product/micraft-mes" className="thm-btn outline-btn px-5 py-4 fs-6 bg-white-10 border-0">Explore More Features</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <style jsx global>{`
                        .bg-black-mes { background-color: #070B14 !important; }
                        .bg-dark-deep-mes { background-color: #04070D !important; }
                        .text-gold { color: #FFD25D !important; }
                        .hover-translate-y:hover { transform: translateY(-10px); }
                        .hover-scale-sm:hover { transform: scale(1.02); }
                        .bg-gold-soft { background: rgba(255, 210, 93, 0.08); }
                        .border-gold-glow { border-color: rgba(255, 210, 93, 0.3) !important; }
                        .bg-white-02 { background: rgba(255, 255, 255, 0.02); }
                        .bg-white-05 { background: rgba(255, 255, 255, 0.05); }
                        .border-white-05 { border-color: rgba(255, 255, 255, 0.05) !important; }
                        .border-white-10 { border-color: rgba(255, 255, 255, 0.1) !important; }
                        .shadow-glow-gold-small { box-shadow: 0 0 20px rgba(255, 210, 93, 0.15); }
                        .max-w-800 { max-width: 800px; }
                        .bg-red-opacity-10 { background: rgba(255, 82, 82, 0.1); }
                        .border-red-glow { border-color: rgba(255, 82, 82, 0.3) !important; }
                        .text-red { color: #FF5252 !important; }
                        .shrink-0 { flex-shrink: 0; }
                        .cursor-pointer { cursor: pointer; }
                        .legacy-item { transition: all 0.3s ease; }
                        .legacy-item:hover { border-color: rgba(255, 82, 82, 0.25) !important; background: rgba(255, 82, 82, 0.04) !important; transform: translateX(6px); }
                        .backdrop-blur { backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }

                        /* === Vertical Infinite Scroll Slider === */
                        .legacy-slider-wrapper {
                            height: 480px;
                            overflow: hidden;
                            border-radius: 20px;
                            border: 1px solid rgba(255,255,255,0.08);
                            box-shadow: 0 30px 60px rgba(0,0,0,0.5);
                            position: relative;
                        }
                        .legacy-slider-wrapper:hover .legacy-slider-track {
                            animation-play-state: paused;
                        }
                        .legacy-slider-track {
                            display: flex;
                            flex-direction: column;
                            gap: 12px;
                            padding: 6px;
                            animation: scrollUp 18s linear infinite;
                        }
                        @keyframes scrollUp {
                            0%   { transform: translateY(0); }
                            100% { transform: translateY(-50%); }
                        }
                        .legacy-slide {
                            position: relative;
                            height: 220px;
                            border-radius: 14px;
                            overflow: hidden;
                            flex-shrink: 0;
                            box-shadow: 0 8px 24px rgba(0,0,0,0.4);
                            transition: transform 0.4s ease;
                        }
                        .legacy-slide:hover { transform: scale(1.02); }
                        .legacy-slide-img { transition: transform 0.6s ease; }
                        .legacy-slide:hover .legacy-slide-img { transform: scale(1.06); }
                        .legacy-slide-overlay {
                            position: absolute; inset: 0;
                            background: linear-gradient(to top, rgba(4,7,13,0.85) 0%, rgba(4,7,13,0.2) 50%, transparent 100%);
                        }
                        .legacy-slide-label {
                            display: inline-block;
                            background: rgba(255,82,82,0.12);
                            border: 1px solid rgba(255,82,82,0.3);
                            color: #FF5252;
                            font-family: 'Marcellus', serif;
                            font-size: 12px;
                            font-weight: 700;
                            padding: 5px 12px;
                            border-radius: 6px;
                            letter-spacing: 0.5px;
                        }
                        .legacy-slider-fade-top {
                            position: absolute; top: 0; left: 0; right: 0; height: 80px;
                            background: linear-gradient(to bottom, #04070D 0%, transparent 100%);
                            z-index: 5; pointer-events: none;
                        }
                        .legacy-slider-fade-bottom {
                            position: absolute; bottom: 0; left: 0; right: 0; height: 80px;
                            background: linear-gradient(to top, #04070D 0%, transparent 100%);
                            z-index: 5; pointer-events: none;
                        }
                        .legacy-stat-badge {
                            background: rgba(255,255,255,0.05);
                            border: 1px solid rgba(255,255,255,0.1);
                            backdrop-filter: blur(14px);
                            -webkit-backdrop-filter: blur(14px);
                            border-radius: 14px;
                            padding: 12px 16px;
                            text-align: center;
                            min-width: 110px;
                            box-shadow: 0 8px 24px rgba(0,0,0,0.4);
                        }
                        @media (max-width: 1199px) {
                            .legacy-slider-wrapper { height: 360px; }
                            .legacy-slide { height: 170px; }
                        }

                        /* === Digital Slider (Gold Theme) === */
                        .digital-slider-wrapper {
                            height: 480px;
                            overflow: hidden;
                            border-radius: 20px;
                            border: 1px solid rgba(255,210,93,0.15);
                            box-shadow: 0 30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(255,210,93,0.04);
                            position: relative;
                        }
                        .digital-slider-wrapper:hover .digital-slider-track {
                            animation-play-state: paused;
                        }
                        .digital-slider-track {
                            display: flex;
                            flex-direction: column;
                            gap: 12px;
                            padding: 6px;
                            animation: scrollDown 20s linear infinite;
                        }
                        @keyframes scrollDown {
                            0%   { transform: translateY(-50%); }
                            100% { transform: translateY(0); }
                        }
                        .digital-slide {
                            position: relative;
                            height: 220px;
                            border-radius: 14px;
                            overflow: hidden;
                            flex-shrink: 0;
                            box-shadow: 0 8px 24px rgba(0,0,0,0.4);
                            transition: transform 0.4s ease;
                        }
                        .digital-slide:hover { transform: scale(1.02); }
                        .digital-slide-img { transition: transform 0.6s ease; }
                        .digital-slide:hover .digital-slide-img { transform: scale(1.06); }
                        .digital-slide-overlay {
                            position: absolute; inset: 0;
                            background: linear-gradient(to top, rgba(4,7,13,0.8) 0%, rgba(4,7,13,0.1) 50%, transparent 100%);
                        }
                        .digital-slide-label {
                            display: inline-block;
                            background: rgba(255,210,93,0.12);
                            border: 1px solid rgba(255,210,93,0.35);
                            color: #FFD25D;
                            font-family: 'Marcellus', serif;
                            font-size: 12px;
                            font-weight: 700;
                            padding: 5px 12px;
                            border-radius: 6px;
                            letter-spacing: 0.5px;
                        }
                        .digital-slider-fade-top {
                            position: absolute; top: 0; left: 0; right: 0; height: 80px;
                            background: linear-gradient(to bottom, #070B14 0%, transparent 100%);
                            z-index: 5; pointer-events: none;
                        }
                        .digital-slider-fade-bottom {
                            position: absolute; bottom: 0; left: 0; right: 0; height: 80px;
                            background: linear-gradient(to top, #070B14 0%, transparent 100%);
                            z-index: 5; pointer-events: none;
                        }
                        .digital-stat-badge {
                            background: rgba(255,210,93,0.06);
                            border: 1px solid rgba(255,210,93,0.2);
                            backdrop-filter: blur(14px);
                            -webkit-backdrop-filter: blur(14px);
                            border-radius: 14px;
                            padding: 12px 16px;
                            text-align: center;
                            min-width: 110px;
                            box-shadow: 0 8px 24px rgba(0,0,0,0.4);
                        }
                        @media (max-width: 1199px) {
                            .digital-slider-wrapper { height: 360px; }
                            .digital-slide { height: 170px; }
                        }

                        /* Live pulse dot */
                        .live-dot {
                            width: 8px; height: 8px;
                            background: #4ADE80;
                            border-radius: 50%;
                            display: inline-block;
                            box-shadow: 0 0 0 0 rgba(74,222,128,0.4);
                            animation: livePulse 2s ease-in-out infinite;
                        }
                        @keyframes livePulse {
                            0%   { box-shadow: 0 0 0 0 rgba(74,222,128,0.4); }
                            70%  { box-shadow: 0 0 0 8px rgba(74,222,128,0); }
                            100% { box-shadow: 0 0 0 0 rgba(74,222,128,0); }
                        }
                        .animate-spin-slow { animation: spin 20s linear infinite; }
                        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

                        /* Versus Grid */
                        .versus-panel { border-radius: 24px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.01); backdrop-filter: blur(10px); }
                        .versus-panel__headers { display: grid; grid-template-columns: 1fr 80px 1fr; border-bottom: 1px solid rgba(255,255,255,0.1); overflow: hidden; }
                        .vs-badge-glow { box-shadow: 0 0 30px rgba(255, 210, 93, 0.4); }
                        .versus-vs-badge { width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Marcellus', serif; color: #FFD25D; background: rgba(255,210,93,0.15); border: 1px solid rgba(255,210,93,0.4); font-size: 14px; font-weight: 900; z-index: 5; position: relative; }
                        .shadow-glow-gold-v2 { box-shadow: 0 0 25px rgba(255, 210, 93, 0.3), inset 0 0 10px rgba(255, 210, 93, 0.3); }
                        .bg-red-opacity-05 { background: rgba(255, 82, 82, 0.05); }
                        .bg-gold-opacity-05 { background: rgba(255, 210, 93, 0.05); }
                        .versus-vertical-laser { position: absolute; left: 50%; top: 0; width: 1px; background: linear-gradient(to bottom, transparent, rgba(255,210,93,0.3), transparent); transform: translateX(-50%); }
                        .versus-row { display: grid; grid-template-columns: 1fr 100px 1fr; border-bottom: 1px solid rgba(255,255,255,0.05); transition: 0.3s; }
                        .versus-row:last-child { border-bottom: none; }
                        .versus-row:hover .versus-cell-left { background: rgba(255, 82, 82, 0.03); }
                        .versus-row:hover .versus-cell-right { background: rgba(255, 210, 93, 0.025); }
                        .versus-row__center { background: rgba(255,255,255,0.01); border-left: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05); }
                        .versus-row__line { position: absolute; left: 50%; top: 0; height: 100%; width: 1px; background: linear-gradient(to bottom, rgba(255,255,255,0.03), rgba(255,210,93,0.15), rgba(255,255,255,0.03)); transform: translateX(-50%); }
                        .versus-row__icon-node { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); background: #04070D; border: 1px solid rgba(255,210,93,0.2); width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; z-index: 2; box-shadow: 0 0 10px rgba(0,0,0,0.5); }
                        .bg-mesh-center-gold { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 200%; height: 200%; background: radial-gradient(circle, rgba(255, 210, 93, 0.1) 0%, transparent 70%); }
                        .bg-glass-dark { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
                        .bg-black-depth { background: #04070D; }

                        /* Animations for Live Feel */
                        .live-dot-hero { width: 6px; height: 6px; background: #4ADE80; border-radius: 50%; box-shadow: 0 0 10px #4ADE80; animation: pulse-green 1.5s infinite; }
                        @keyframes pulse-green { 0% { opacity: 0.4; transform: scale(1); } 50% { opacity: 1; transform: scale(1.4); } 100% { opacity: 0.4; transform: scale(1); } }
                        
                        .hud-line-scanner { position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(to right, transparent, rgba(74,222,128,0.5), transparent); z-index: 5; animation: scan-line 4s linear infinite; }
                        @keyframes scan-line { from { top: 0%; } to { top: 100%; } }

                        .animate-progress-glow { animation: progress-glow 2s ease-in-out infinite alternate; }
                        @keyframes progress-glow { from { box-shadow: 0 0 5px rgba(255,210,93,0.3); } to { box-shadow: 0 0 15px rgba(255,210,93,0.8); } }

                        /* Capability Card */
                        .capability-card { background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 24px; transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1); position: relative; overflow: hidden; text-align: center; }
                        .capability-card:hover { transform: translateY(-12px) scale(1.02); border-color: rgba(255, 210, 93, 0.4); background: rgba(255, 255, 255, 0.06); box-shadow: 0 40px 80px rgba(0,0,0,0.6); }
                        .capability-img-box { height: 200px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 12px; }
                        .capability-illustration { filter: drop-shadow(0 15px 30px rgba(0,0,0,0.4)); transition: 0.5s; z-index: 2; position: relative; width: 100%; height: 100%; }
                        .capability-card:hover .capability-illustration { transform: scale(1.1); }
                        .capability-icon-glow { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 100px; height: 100px; background: radial-gradient(circle, rgba(255, 210, 93, 0.2) 0%, transparent 70%); opacity: 0; transition: 0.5s; }
                        .capability-card:hover .capability-icon-glow { opacity: 1; width: 180px; height: 180px; }
                        .filter-gold-boost { filter: sepia(1) saturate(6) hue-rotate(5deg) brightness(1.2) drop-shadow(0 10px 20px rgba(0,0,0,0.5)) !important; }
                        .group-hover\:border-gold-glow:hover { border-color: rgba(255, 210, 93, 0.4) !important; box-shadow: 0 0 20px rgba(255, 210, 93, 0.1); }
                        .max-w-700 { max-w-width: 700px; }
                        .leading-relaxed { line-height: 1.625; }

                        @media (max-width: 991px) {
                            .versus-panel__headers, .versus-row { grid-template-columns: 1fr 1fr; }
                            .versus-panel__divider-header, .versus-row__center { display: none; }
                            .newsletter-one__img { display: none; }
                        }
                    `}</style>

                </div>
            )}
        </Layout>
    );
}