"use client";

import React from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedTitle from "@/components/elements/AnimatedTitle";
import { Clock, BarChart3, Users, Cpu, ShieldCheck, HardDrive, LayoutDashboard, Zap, TrendingUp, Layers, CheckCircle2, XCircle, Settings, UserCog, Building2, Warehouse, AlertCircle, Server, Cloud, MonitorX, CalendarClock, Rocket, BadgeDollarSign, BadgeCheck } from 'lucide-react';

export default function MicraftVsTraditionalMesPage() {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Micraft MES vs Traditional MES Systems">
            {mounted && (
                <div className="micraft-vs-traditional-page-wrapper">

                    {/* 1. Hero Section */}
                    <section className="why-choose-two py-80 bg-black-mes position-relative overflow-hidden" id="hero">
                        <div className="why-choose-two__shape-1 float-bob-y position-absolute top-0 start-0 opacity-10">
                            <Image src="/assets/images/shapes/why-choose-two-shape-1.png" alt="Shape" width={100} height={100} />
                        </div>
                        <div className="why-choose-two__shape-2 absolute top-0 right-0 w-100 h-100 mesh-shape-bg-03 opacity-15"></div>
                        <div className="why-choose-two__shape-3 absolute top-0 start-0 w-100 h-100 bg-gradient-to-br from-primary-opacity-10 via-transparent to-gold-opacity-05"></div>

                        <div className="container relative z-index-1">
                            <div className="row align-items-center">
                                <div className="col-xl-6 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                                    <div className="why-choose-two__left position-relative">
                                        <div className="why-choose-two__img rounded-4 border-white-10 shadow-3xl overflow-hidden relative group">
                                            <Image src="/assets/images/features/micraft_vs_traditional_mes_elite_visual_1775295321456.png" alt="Modern vs Traditional MES" width={600} height={600} className="object-fit-cover w-100 h-100 transition-all duration-700 hover-scale-1" style={{ minHeight: '520px' }} />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                                            <div className="absolute top-0 -start-full w-50 h-100 bg-gradient-to-r from-transparent via-white-opacity-20 to-transparent skew-x-[-25deg] transition-all duration-1000 group-hover:start-full" style={{ pointerEvents: 'none' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 mt-80 mt-xl-0 ps-xl-5">
                                    <div className="why-choose-two__right">
                                        <div className="section-title text-left sec-title-animation animation-style2">
                                            <div className="section-title__tagline-box">
                                                <div className="section-title__tagline-shape-1"></div>
                                                <span className="section-title__tagline text-gold text-uppercase letter-spacing-2">Strategic Comparison</span>
                                                <div className="section-title__tagline-shape-2"></div>
                                            </div>
                                            <AnimatedTitle>
                                                <h1 className="section-title__title text-white font-marcellus lowercase leading-tight">
                                                    Micraft MES vs <br /> <span>Traditional MES Systems</span>
                                                </h1>
                                            </AnimatedTitle>
                                            <p className="text-gold fw-900 mb-4 font-marcellus fs-5 tracking-tight leading-snug">
                                                Understand how modern MES platforms like Micraft MES differ from <br className="d-none d-xl-block" /> traditional enterprise MES systems.
                                            </p>
                                        </div>
                                        <p className="why-choose-one__text text-white-opacity-90 fw-medium border-start border-gold ps-4 mb-40 font-marcellus leading-relaxed">
                                            Manufacturing Execution Systems have been used in factories for decades. However, many traditional MES platforms were designed for large enterprises and often require complex implementation processes, heavy infrastructure, and long deployment timelines.
                                        </p>
                                        <div className="d-flex align-items-center flex-wrap gap-3 mt-4">
                                            <Link href="/contact" className="thm-btn shiny-btn px-4 py-2 fs-7 m-0">Book a Live Demo <span className="icon-arrow-right ms-2"></span></Link>
                                            <Link href="/product/micraft-mes" className="thm-btn outline-btn px-4 py-2 fs-7 border-none m-0 bg-white-05 hover-bg-gold transition-all">Explore Micraft MES Features</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 2. Traditional MES Audit */}
                    <section className="about-three py-80 bg-black-mes position-relative overflow-hidden border-top border-white-05">
                        <div className="mesh-shape-bg-02 opacity-10 pulse-glow-gold"></div>
                        <div className="container relative z-index-1">
                            <div className="row align-items-center">
                                <div className="col-xl-6 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="1500ms">
                                    <div className="row g-3">
                                        {[
                                            { title: "Extensive system customization", span: "6", Icon: Settings },
                                            { title: "Long implementation timelines", span: "6", Icon: Clock },
                                            { title: "High licensing costs", span: "6", Icon: TrendingUp },
                                            { title: "Complex user interfaces", span: "6", Icon: LayoutDashboard },
                                            { title: "Significant IT infrastructure", span: "12", Icon: HardDrive }
                                        ].map((item, i) => (
                                            <div key={i} className={`col-md-${item.span}`}>
                                                <div className="glass-card-innovative p-4 rounded-4 border-white-10 h-100 transition-all hover-translate-y group relative overflow-hidden bg-white-02">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="icon bg-gold p-2 rounded-circle shadow-glow-gold-small">
                                                            <item.Icon size={18} className="text-black fw-bold" />
                                                        </div>
                                                        <h4 className="text-white h6 fw-900 m-0 font-marcellus extra-small text-uppercase tracking-wider leading-tight group-hover:text-gold transition-all">{item.title}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-xl-6 mt-80 mt-xl-0 ps-xl-5">
                                    <div className="about-three__right">
                                        <div className="section-title text-left sec-title-animation animation-style2">
                                            <div className="section-title__tagline-box">
                                                <div className="section-title__tagline-shape-1"></div>
                                                <span className="section-title__tagline text-gold">Tactical Precedent</span>
                                                <div className="section-title__tagline-shape-2"></div>
                                            </div>
                                            <AnimatedTitle>
                                                <h2 className="section-title__title text-white font-marcellus leading-tight lowercase">
                                                    Traditional Manufacturing<span>Execution Systems</span>
                                                </h2>
                                            </AnimatedTitle>
                                        </div>
                                        <p className="about-three__text text-white-opacity-70 border-start border-gold-opacity-30 ps-4 mb-5 font-marcellus leading-relaxed">
                                            Traditional MES systems were typically developed for large manufacturing corporations with complex production environments. While powerful, they can be difficult for many manufacturing companies to adopt.
                                        </p>
                                        <div className="about-three__btn-and-call-box d-flex flex-wrap align-items-center gap-5 pt-2">
                                            <Link href="/contact" className="thm-btn outline-btn px-5 py-4 fs-7 border-white-10">Legacy Gap Analysis<span className="icon-right-arrow ms-2"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 3. Challenges Grid */}
                    <section className="challenges-traditional py-100 bg-dark-deep-mes border-top border-white-05 position-relative overflow-hidden">
                        <div className="limitations-mesh-bg opacity-05"></div>
                        <div className="container relative z-index-1">
                            <div className="section-title text-center mb-60 sec-title-animation animation-style2">
                                <div className="section-title__tagline-box mx-auto">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline text-gold">Strategic Barrier Audit</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white font-marcellus lowercase">
                                        Common Challenges with <span>Traditional MES</span>
                                    </h2>
                                </AnimatedTitle>
                            </div>

                            <div className="row g-4 justify-content-center">
                                {[
                                    { title: "Long Implementation Cycles", text: "Some MES deployments take several months or even years.", Icon: Clock, color: "#FFD25D" },
                                    { title: "High Implementation Costs", text: "Enterprise MES systems often require significant investment.", Icon: TrendingUp, color: "#FF5252" },
                                    { title: "Complex User Interfaces", text: "Shop floor teams may find traditional systems difficult to use.", Icon: UserCog, color: "#FF5252" },
                                    { title: "Heavy IT Infrastructure", text: "Many systems require extensive hardware and system integration.", Icon: HardDrive, color: "#00E5FF" },
                                    { title: "Low Adoption by Floor Teams", text: "Complex systems can lead to poor operator adoption.", Icon: XCircle, color: "#FF5252" },
                                    { title: "Data Silos & Fragmentation", text: "Fragmented legacy modules lead to delayed reporting.", Icon: Layers, color: "#FFD25D" }
                                ].map((card, i) => (
                                    <div key={i} className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay={`${i * 100}ms`}>
                                        <div className="glass-card-innovative p-5 rounded-4 border-white-10 h-100 transition-all hover-translate-y group bg-white-02">
                                            <div className="mb-4 p-3 d-inline-flex rounded-4 bg-white-05 border border-white-10 group-hover:border-gold shadow-inner">
                                                <card.Icon size={28} color={card.color} strokeWidth={1.5} />
                                            </div>
                                            <h4 className="text-white h5 fw-900 mb-3 font-marcellus group-hover:text-gold transition-all">{card.title}</h4>
                                            <p className="text-white-opacity-70 small mb-0 font-marcellus leading-relaxed">{card.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 4. Modern MES Platforms */}
                    <section className="about-three py-80 position-relative overflow-hidden" id="modern-mes" style={{ background: '#070B14' }}>
                        {/* Background Image */}
                        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
                            <Image
                                src="/assets/images/features/digital_sync_motion.png"
                                alt=""
                                fill
                                className="object-fit-cover"
                                style={{ opacity: 0.18 }}
                                aria-hidden="true"
                            />
                            {/* Dark gradient overlays */}
                            <div className="position-absolute inset-0" style={{ background: 'linear-gradient(105deg, #070B14 45%, transparent 100%)', zIndex: 1 }}></div>
                            <div className="position-absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(7,11,20,0.4) 0%, transparent 40%, rgba(7,11,20,0.7) 100%)', zIndex: 2 }}></div>
                        </div>
                        <div className="container position-relative" style={{ zIndex: 3 }}>
                            <div className="row align-items-center">
                                <div className="col-xl-6 mt-80 mt-xl-0 pe-xl-5 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="1500ms">
                                    <div className="about-three__right">
                                        <div className="section-title text-left sec-title-animation animation-style2">
                                            <div className="section-title__tagline-box">
                                                <div className="section-title__tagline-shape-1"></div>
                                                <span className="section-title__tagline text-gold">Next-Gen Architecture</span>
                                                <div className="section-title__tagline-shape-2"></div>
                                            </div>
                                            <AnimatedTitle>
                                                <h2 className="section-title__title text-white font-marcellus leading-tight lowercase">
                                                    The New Generation of <span>MES Systems</span>
                                                </h2>
                                            </AnimatedTitle>
                                        </div>
                                        <p className="about-three__text text-white-opacity-70 border-start border-gold-opacity-30 ps-4 mb-4 font-marcellus leading-relaxed">
                                            Modern MES platforms focus on simplicity, speed, and usability. These systems are designed to streamline manufacturing operations without the overhead of traditional enterprise deployments.
                                        </p>
                                        <p className="text-white-opacity-70 font-marcellus leading-relaxed mb-5">
                                            Modern MES solutions allow manufacturers to digitize operations without complex IT projects.
                                        </p>
                                        <div className="about-three__btn-and-call-box d-flex flex-wrap align-items-center gap-5 pt-2">
                                            <Link href="/product/micraft-mes" className="thm-btn shiny-btn px-5 py-4 fs-7">Explore Micraft MES <span className="icon-arrow-right ms-2"></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 wow slideInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="row g-3">
                                        {[
                                            { title: "Deploy Quickly", text: "Get up and running in days, not months — minimal configuration required.", Icon: Zap, color: "#FFD25D" },
                                            { title: "Real-Time Production Visibility", text: "Live dashboards and instant reporting across every workstation.", Icon: BarChart3, color: "#00E5FF" },
                                            { title: "Easy Integration", text: "Connect seamlessly with existing ERP, IoT, and shop floor environments.", Icon: Cpu, color: "#4CAF50" },
                                            { title: "Simple Floor Interface", text: "Intuitive designs built for operators — not just IT specialists.", Icon: Users, color: "#FF9800" }
                                        ].map((item, i) => (
                                            <div key={i} className="col-md-6">
                                                <div className="glass-card-innovative p-4 rounded-4 border-white-10 h-100 transition-all hover-translate-y group relative overflow-hidden bg-white-02">
                                                    <div className="mb-3 p-3 d-inline-flex rounded-4 bg-white-05 border border-white-10 group-hover:border-gold shadow-inner">
                                                        <item.Icon size={26} color={item.color} strokeWidth={1.5} />
                                                    </div>
                                                    <h4 className="text-white h6 fw-900 mb-2 font-marcellus group-hover:text-gold transition-all">{item.title}</h4>
                                                    <p className="text-white-opacity-70 small mb-0 font-marcellus leading-relaxed">{item.text}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 5. Modern MES Advantages */}
                    <section className="feature-one position-relative py-100 bg-black-mes" id="modern-advantages">
                        <div className="container">
                            <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="100ms">
                                <div className="section-title__tagline-box justify-content-center mb-3">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline text-gold">Operational Excellence</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white">
                                        Advantages of Modern <span>MES Solutions</span>
                                    </h2>
                                </AnimatedTitle>
                                <p className="mt-4 text-white-opacity-70 mx-auto font-marcellus max-w-800">
                                    Manufacturers adopting modern MES systems experience significant improvements in speed, accuracy, and operational control.
                                </p>
                            </div>

                            <div className="row align-items-center py-5">
                                <div className="col-xl-6 wow fadeInLeft" data-wow-delay="200ms">
                                    <div className="p-3 bg-dark-deep-mes border border-white-10 rounded-4 shadow-lg position-relative w-100 overflow-hidden group">
                                        <div className="position-relative w-100 rounded-3 overflow-hidden" style={{ aspectRatio: '4/3' }}>
                                            <Image src="/assets/images/backgrounds/PracticalImplementation.jpg" alt="Advantages of Modern MES" fill priority className="object-fit-cover transition-all duration-700 group-hover:scale-105" />
                                            <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-tr from-gold-opacity-20 to-transparent"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 mt-5 mt-xl-0">
                                    <div className="ps-xl-5 wow fadeInRight" data-wow-delay="300ms">
                                        <div className="benefits-grid">
                                            {[
                                                { title: "Faster Implementation", text: "Factories can start monitoring production quickly.", icon: <Zap size={20} /> },
                                                { title: "Real-Time Visibility", text: "Managers can monitor shop floor operations instantly.", icon: <BarChart3 size={20} /> },
                                                { title: "Higher Shop Floor Adoption", text: "Simple interfaces make systems easier to use.", icon: <Users size={20} /> },
                                                { title: "Lower Implementation Risk", text: "Modern systems require less infrastructure.", icon: <ShieldCheck size={20} /> },
                                                { title: "Scalable Platform", text: "Easily scale across multiple production lines.", icon: <Layers size={20} /> }
                                            ].map((benefit, i) => (
                                                <div key={i} className="mb-3 d-flex align-items-start gap-4 p-4 rounded-4 bg-white-02 border border-white-05 hover-scale-sm transition-all cursor-pointer">
                                                    <div className="d-flex align-items-center justify-content-center bg-gold p-3 rounded-circle shadow-glow-gold-small text-black shrink-0" style={{ width: '50px', height: '50px' }}>
                                                        {benefit.icon}
                                                    </div>
                                                    <div>
                                                        <h4 className="text-white h6 mb-1 fw-bold font-marcellus">{benefit.title}</h4>
                                                        <p className="text-white-opacity-60 small mb-0 font-marcellus">{benefit.text}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 6. Industries */}
                    <section className="industries-section py-100 bg-dark-deep-mes  position-relative overflow-hidden">
                        <div className="mesh-shape-bg-02 opacity-05"></div>
                        <div className="container relative z-index-1">
                            <div className="row align-items-center mb-80">
                                <div className="col-lg-7">
                                    <div className="section-title text-left">
                                        <div className="section-title__tagline-box">
                                            <div className="section-title__tagline-shape-1"></div>
                                            <span className="section-title__tagline text-gold">Adoption Landscape</span>
                                            <div className="section-title__tagline-shape-2"></div>
                                        </div>
                                        <AnimatedTitle>
                                            <h2 className="section-title__title text-white font-marcellus leading-tight lowercase">
                                                Industries Thriving with <span>Modern MES</span>
                                            </h2>
                                        </AnimatedTitle>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <p className="text-white-opacity-70 fw-bold font-marcellus ps-lg-5 border-start border-gold ps-4 mt-xl-100">
                                        Global manufacturers are abandoning legacy complexity for real-time operational visibility across high-precision verticals.
                                    </p>
                                </div>
                            </div>

                            <div className="row g-4 overflow-hidden">
                                {[
                                    { title: "CNC & Engineering", img: "/assets/images/industries/cnc-v2.png", delay: "100ms" },
                                    { title: "Automotive Components", img: "/assets/images/industries/automotive-v2.png", delay: "200ms" },
                                    { title: "Metal Fabrication", img: "/assets/images/industries/fabrication-v2.png", delay: "300ms" },
                                    { title: "Plastic Molding", img: "/assets/images/industries/plastic-v2.png", delay: "400ms" },
                                    { title: "Electronics Mfg", img: "/assets/images/industries/electronics-v2.png", delay: "500ms" }
                                ].map((industry, i) => (
                                    <div key={i} className="col wow fadeInUp" data-wow-delay={industry.delay} style={{ minWidth: '220px' }}>
                                        <div className="industry-box glass-card-innovative border-white-10 h-100 text-center p-4 transition-all hover-scale-3 group relative overflow-hidden bg-white-02">
                                            <div className="mb-4 rounded-circle overflow-hidden mx-auto shadow-xl border border-white-10" style={{ width: '120px', height: '120px' }}>
                                                <Image src={industry.img} alt={industry.title} width={120} height={120} className="object-fit-cover w-100 h-100 grayscale hover-grayscale-off transition-all duration-700" />
                                            </div>
                                            <h5 className="text-white fw-900 font-marcellus group-hover:text-gold transition-all">{industry.title}</h5>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 6. Micraft MES vs Traditional MES — Creative Comparison */}
                    <section className="comparison-versus py-100 bg-black-mes position-relative overflow-hidden" id="comparison">
                        {/* Background Visuals */}
                        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
                            <Image src="/assets/images/features/industries_section_bg.png" alt="" fill className="object-fit-cover opacity-15" aria-hidden="true" />
                            <div className="position-absolute inset-0 bg-gradient-to-t from-black-mes via-transparent to-black-mes"></div>
                            <div className="position-absolute inset-0 bg-gradient-to-r from-black-mes via-transparent to-black-mes"></div>
                        </div>
                        <div className="versus-orb versus-orb--red"></div>
                        <div className="versus-orb versus-orb--blue"></div>
                        <div className="container relative z-index-1">

                            {/* Section Header */}
                            <div className="section-title text-center mb-70 sec-title-animation animation-style2">
                                <div className="section-title__tagline-box mx-auto">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline text-gold">Head-to-Head Analysis</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white font-marcellus lowercase">
                                        Comparison: Micraft MES vs <span>Traditional MES</span>
                                    </h2>
                                </AnimatedTitle>
                            </div>

                            {/* Comparison Panel */}
                            <div className="versus-panel overflow-hidden">

                                {/* Panel Column Headers */}
                                <div className="versus-panel__headers p-0 bg-white-02">
                                    <div className="versus-panel__header versus-panel__header--left py-4 px-4 d-flex align-items-center gap-3">
                                        <div className="icon bg-red-opacity-10 p-2 rounded-2 border border-red-glow">
                                            <Building2 size={20} color="#FF5252" strokeWidth={2} />
                                        </div>
                                        <span className="text-red fw-bold tracking-wider">Traditional MES</span>
                                    </div>
                                    <div className="versus-panel__divider-header d-flex justify-content-center align-items-center">
                                        <div className="versus-vs-badge shadow-glow-gold">VS</div>
                                    </div>
                                    <div className="versus-panel__header versus-panel__header--right py-4 px-4 d-flex align-items-center justify-content-end gap-3 text-end">
                                        <span className="text-gold fw-bold tracking-wider">Micraft MES</span>
                                        <div className="icon bg-gold-soft p-2 rounded-2 border border-gold-glow">
                                            <Warehouse size={20} color="#FFD25D" strokeWidth={2} />
                                        </div>
                                    </div>
                                </div>

                                {/* Comparison Rows */}
                                {[
                                    { traditional: "Designed for large enterprises", micraft: "Designed for manufacturing SMEs", IconT: Building2, IconM: Warehouse },
                                    { traditional: "Complex implementation", micraft: "Fast implementation", IconT: AlertCircle, IconM: Zap },
                                    { traditional: "Heavy IT infrastructure", micraft: "Minimal infrastructure", IconT: Server, IconM: Cloud },
                                    { traditional: "Complex user interface", micraft: "Simple shop floor interface", IconT: MonitorX, IconM: LayoutDashboard },
                                    { traditional: "Long deployment timelines", micraft: "Quick deployment", IconT: CalendarClock, IconM: Rocket },
                                    { traditional: "High licensing costs", micraft: "Affordable and scalable", IconT: BadgeDollarSign, IconM: BadgeCheck }
                                ].map((row, i) => (
                                    <div key={i} className="versus-row wow fadeInUp align-items-stretch" data-wow-delay={`${i * 80}ms`}>
                                        {/* Traditional Side */}
                                        <div className="versus-cell-left py-4 px-4 d-flex align-items-center gap-3">
                                            <div className="versus-row__icon versus-row__icon--red shrink-0">
                                                <row.IconT size={22} color="#FF5252" strokeWidth={1.5} />
                                            </div>
                                            <span className="versus-row__label versus-row__label--traditional">{row.traditional}</span>
                                        </div>
                                        {/* Center Divider */}
                                        <div className="versus-row__center d-flex align-items-center justify-content-center">
                                            <div className="versus-row__line h-100"></div>
                                        </div>
                                        {/* Micraft Side */}
                                        <div className="versus-cell-right py-4 px-4 d-flex align-items-center gap-3">
                                            <div className="versus-row__icon versus-row__icon--green shrink-0">
                                                <row.IconM size={22} color="#FFD25D" strokeWidth={1.5} />
                                            </div>
                                            <span className="versus-row__label versus-row__label--micraft">{row.micraft}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom Verdict */}
                            <div className="text-center mt-5 wow fadeInUp" data-wow-delay="500ms">
                                <div className="versus-verdict px-5 py-3">
                                    <CheckCircle2 size={24} color="#4CAF50" strokeWidth={2} className="me-2" />
                                    <p className="text-white-opacity-90 fw-bold font-marcellus mb-0 fs-5">
                                        This difference allows manufacturers to digitize operations{' '}
                                        <span className="text-gold fw-900">faster</span> and more{' '}
                                        <span className="text-gold fw-900">efficiently</span>.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* 8. Why Manufacturers Choose Micraft MES */}
                    <section className="capabilities-section who-is-for py-120 bg-dark-deep-mes" id="why-choose" style={{ position: 'relative', overflow: 'hidden' }}>
                        <div className="who-is-for__shape-1"></div>
                        <div className="who-is-for__shape-2"></div>
                        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                            <div className="section-title text-center mb-80 wow fadeInUp" data-wow-delay="100ms">
                                <div className="section-title__tagline-box justify-content-center">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline text-gold">The SME Preference</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white">
                                        Why Manufacturers Choose <span>Micraft MES</span>
                                    </h2>
                                </AnimatedTitle>
                                <p className="mt-4 text-white-opacity-70 mx-auto font-marcellus" style={{ maxWidth: '800px' }}>
                                    Micraft MES helps manufacturers overcome the challenges of traditional MES systems with a platform built for simplicity and scale.
                                </p>
                            </div>

                            <div className="row g-4 justify-content-center">
                                {/* Row 1: 3 cards */}
                                {[
                                    { title: "Real-Time Production Monitoring", text: "Instant visibility into shop floor status and work order progress.", img: "cho_monitoring_yellow.png" },
                                    { title: "Simple Shop Floor Workflows", text: "Intuitive interfaces designed specifically for machine operators.", img: "cho_interface_yellow.png" },
                                    { title: "Fast System Deployment", text: "Go live in weeks, not months, with our streamlined onboarding process.", img: "cho_speed_yellow.png" },
                                    { title: "Practical Manufacturing Insights", text: "Actionable data that helps solve production bottlenecks immediately.", img: "cho_insights_yellow.png" },
                                    { title: "Scalable System Architecture", text: "A platform that grows with your business from one line to many.", img: "cho_interface_yellow.png" }
                                ].map((choice, i) => (
                                    <div key={i} className={`col-xl-4 col-lg-6 col-md-6 wow fadeInUp`} data-wow-delay={`${(i + 1) * 100}ms`}>
                                        <div className="capability-card h-100">
                                            <div className="capability-img-box">
                                                <Image src={`/assets/images/capabilities/${choice.img}`} alt={choice.title} width={120} height={120} className="capability-illustration" />
                                            </div>
                                            <div className="capability-content">
                                                <h3 className="text-white font-marcellus h5 mb-3">{choice.title}</h3>
                                                <p className="text-white-opacity-60 small mb-0 font-marcellus leading-relaxed">
                                                    {choice.text}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>


                        </div>
                    </section>

                    {/* Final CTA Section - Micraft MES Design */}
                    <section className="newsletter-one newsletter-three py-100" style={{ background: '#000' }}>
                        <div className="container">
                            <div className="newsletter-one__inner wow fadeInUp" style={{ background: 'linear-gradient(90deg, #FA5674 0%, #6065D4 100%)', borderRadius: '30px' }}>
                                <div className="newsletter-one__shape-bg"
                                    style={{ backgroundImage: "url(/assets/images/shapes/newsletter-one-shape-bg.png)" }}></div>
                                <div className="newsletter-one__shape-1 float-bob-x">
                                    <Image src="/assets/images/shapes/newsletter-one-shape-1.png" alt="Shape" width={416} height={368} priority />
                                </div>
                                <div className="newsletter-one__shape-2"></div>
                                <div className="newsletter-one__shape-3"></div>
                                <div className="newsletter-one__img">
                                    <Image src="/assets/images/backgrounds/cta.png" alt="Micraft MES" width={280} height={280} priority />
                                </div>

                                <div className="row justify-content-center text-center">
                                    <div className="col-lg-10" style={{ position: 'relative', zIndex: 5 }}>
                                        <AnimatedTitle>
                                            <h2 className="newsletter-one__title text-white mb-20 font-marcellus" style={{ fontSize: '42px', lineHeight: '1.2' }}>
                                                Experience the <br />
                                                <span>Next Generation of MES</span>
                                            </h2>
                                        </AnimatedTitle>
                                        <p className="newsletter-one__text text-white mb-3 font-marcellus" style={{ fontSize: '18px', opacity: 1, fontWeight: '700' }}>
                                            Micraft MES helps manufacturing companies gain real-time production visibility and improve operational efficiency.
                                        </p>

                                        <div className="cta-btns d-flex flex-wrap justify-content-center gap-4">
                                            <Link href="/contact" className="thm-btn shiny-btn px-5 py-4 fs-6">Book Your Demo <span className="icon-arrow-right ms-2"></span></Link>
                                            <Link href="/product/micraft-mes" className="thm-btn thm-btn--two px-5 py-4 fs-6" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>Explore Features <span className="icon-arrow-right ms-2"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <style jsx global>{`
                        .scale-low { transform: scale(0.95); transition: all 0.5s ease; }
                        .scale-low:hover { transform: scale(1); filter: grayscale(0); opacity: 1; }
                        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
                        @keyframes pulse { 0%, 100% { opacity: 1; filter: brightness(1.2); } 50% { opacity: .7; filter: brightness(1); } }
                        .hover-translate-y:hover { transform: translateY(-10px); }
                        .hover-scale-sm:hover { transform: scale(1.02); }
                        .cursor-pointer { cursor: pointer; }
                        .max-w-700 { max-width: 700px; }
                        .max-w-800 { max-width: 800px; }

                        /* === Section 6: Versus Comparison === */
                        .versus-panel { max-width: 960px; margin: 0 auto; border-radius: 24px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.01); backdrop-filter: blur(10px); }
                        .versus-panel__headers { display: grid; grid-template-columns: 1fr 80px 1fr; border-bottom: 1px solid rgba(255,255,255,0.1); }
                        .versus-vs-badge { width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Marcellus', serif; color: #FFD25D; background: rgba(255,210,93,0.15); border: 1px solid rgba(255,210,93,0.4); font-size: 14px; font-weight: 900; }
                        .versus-row { display: grid; grid-template-columns: 1fr 80px 1fr; border-bottom: 1px solid rgba(255,255,255,0.05); transition: all 0.3s ease; }
                        .versus-row:last-child { border-bottom: none; }
                        .versus-row:hover .versus-cell-left { background: rgba(255,82,82,0.04); }
                        .versus-row:hover .versus-cell-right { background: rgba(255,210,93,0.03); }
                        .versus-row__icon { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); }
                        .versus-row__icon--red { border-color: rgba(255,82,82,0.2); }
                        .versus-row__icon--green { border-color: rgba(255,210,93,0.2); }
                        .versus-row__label { font-family: 'Marcellus', serif; font-size: 15px; }
                        .versus-row__label--traditional { color: rgba(255,255,255,0.6); }
                        .versus-row__label--micraft { color: #fff; font-weight: 700; }
                        .versus-row__center { border-left: 1px solid rgba(255,255,255,0.08); border-right: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.01); }
                        .versus-row__line { width: 1px; background: linear-gradient(to bottom, transparent, rgba(255,210,93,0.3), transparent); }
                        .versus-verdict { display: inline-flex; align-items: center; border-radius: 100px; background: rgba(61,114,252,0.1); border: 1px solid rgba(255,210,93,0.2); box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
                        .bg-red-opacity-10 { background: rgba(255, 82, 82, 0.1); }
                        .border-red-glow { border-color: rgba(255, 82, 82, 0.3) !important; }
                        .border-gold-glow { border-color: rgba(255, 210, 93, 0.3) !important; }
                        .text-red { color: #FF5252 !important; }
                        .shrink-0 { flex-shrink: 0; }

                        /* Capability Cards */
                        .capability-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; padding: 40px 30px; transition: 0.4s; position: relative; overflow: hidden; text-align: center; }
                        .capability-card:hover { transform: translateY(-8px); background: rgba(255,255,255,0.06); border-color: rgba(255,210,93,0.3); }
                        .capability-img-box { width: 100px; height: 100px; margin: 0 auto 30px; animation: float 4s ease-in-out infinite; }
                        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
                        :global(.capability-illustration) { width: 100px !important; height: 100px !important; object-fit: contain; border-radius: 20px; border: 1px solid rgba(255,210,93,0.1); transition: 0.4s; mix-blend-mode: lighten; }
                        
                        @media (max-width: 991px) {
                            .newsletter-one__img, .newsletter-one__shape-1 { display: none !important; }
                            .newsletter-one__inner { padding: 60px 20px; }
                            .versus-panel__headers, .versus-row { grid-template-columns: 1fr 1fr; }
                            .versus-panel__divider-header, .versus-row__center { display: none; }
                        }
                    `}</style>

                </div>
            )}
        </Layout>
    );
}