"use client"
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
import { useState, useEffect } from "react"

export default function MesImplementationPage() {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        { num: "01", title: "Process Assessment", icon: "search", color: "#FFD25D", desc: "Understanding Your Manufacturing Operations. Analyzing the existing production environment including workflows, workstations, and inspection checkpoints." },
        { num: "02", title: "System Configuration", icon: "tools", color: "#3D72FC", desc: "MES System Configuration based on defined factory workflows, machine setups, and production monitoring dashboards." },
        { num: "03", title: "Floor Deployment", icon: "industry", color: "#FA5674", desc: "Deploying MES on the Shop Floor through production tracking interfaces and enabling shop floor operator updates." },
        { num: "04", title: "Teams Training", icon: "users", color: "#00D094", desc: "Training Shop Floor Teams for successful adoption. Learning to update production status and monitor digital dashboards." },
        { num: "05", title: "System Go-Live", icon: "rocket", color: "#6065D4", desc: "Go-Live and Real-time Monitoring transition. Dashboards start displaying live factory data for operational efficiency improvement." }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 3000); // 3 seconds interval for better readability
        return () => clearInterval(interval);
    }, [steps.length]);

    const activePhase = steps[activeStep]!;

    return (
        <Layout headerStyle={1} footerStyle={2}>

            <Breadcrumb breadcrumbTitle="MES Implementation Process" />

            {/* ═══════════════ HERO SECTION with 5-STEP LIST ═══════════════ */}
            <section className="position-relative overflow-hidden" style={{ padding: '50px 0 30px', background: '#02050A' }}>
                <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(61, 114, 252, 0.15) 0%, transparent 70%)', filter: 'blur(60px)' }}></div>

                <div className="container position-relative z-1">
                    <div className="row align-items-center g-5">

                        {/* Text Content - Left Side */}
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="section-title text-left mb-4 mt-lg-4">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline">Rapid Deployment Engine</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <AnimatedTitle>
                                    <h1 className="section-title__title title-animation mb-4" style={{ fontSize: '56px', lineHeight: '1.2', color: '#fff' }}>
                                        Micraft MES <br />
                                        <span>Implementation Process</span>
                                    </h1>
                                </AnimatedTitle>
                            </div>

                            <p className="text-white mb-2 fw-bold" style={{ fontSize: '18px', color: '#FFD25D' }}>
                                Learn how Micraft MES can be implemented in your manufacturing environment quickly and efficiently with minimal disruption to factory operations.
                            </p>
                            <p className="text-white-50 mb-5" style={{ fontSize: '16px', lineHeight: '1.8', maxWidth: '550px' }}>
                                Micraft MES implementation follows a structured approach designed specifically for manufacturing companies. Our process ensures smooth deployment, fast adoption by shop floor teams, and quick realization of operational benefits.
                            </p>
                            <div className="d-flex flex-wrap gap-4">
                                <Link href="/book-demo" className="thm-btn" style={{ padding: '16px 36px', fontSize: '16px', background: 'linear-gradient(90deg, #3D72FC 0%, #6065D4 100%)', border: 'none' }}>
                                    Book a Demo <span className="icon-right-arrow ms-2"></span>
                                </Link>
                                <Link href="/contact" className="thm-btn" style={{ padding: '16px 36px', fontSize: '16px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                                    Talk to Our Implementation Team
                                </Link>
                            </div>
                        </div>

                        {/* Step-wise List (Exactly like Image 1) - Right Side */}
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="300ms">
                            <div className="staircase-flow-wrapper">
                                {[
                                    { num: "01", title: "Process Assessment", desc: "Mapping manufacturing operations and production workflow mapping.", color: "#FFD25D", icon: "search" },
                                    { num: "02", title: "System Configuration", desc: "Configuring production tracking processes and dashboards.", color: "#3D72FC", icon: "tools" },
                                    { num: "03", title: "Floor Deployment", desc: "Enabling shop floor teams with data collection interfaces.", color: "#FA5674", icon: "industry" },
                                    { num: "04", title: "Teams Training", desc: "Simplifying adoption for operators and digital shop floor monitoring.", color: "#00D094", icon: "chalkboard-teacher" },
                                    { num: "05", title: "System Go-Live", desc: "Transition from manual tracking to real-time digital monitoring.", color: "#6065D4", icon: "rocket" }
                                ].map((step, idx) => (
                                    <div key={idx} className="stair-block-row position-relative" style={{ zIndex: 10 - idx }}>
                                        <div className="stair-step-container" style={{ '--step-color': step.color } as React.CSSProperties}>
                                            <div className="stair-main-face d-flex align-items-center">
                                                <div className="stair-number-panel d-flex align-items-center justify-content-center">
                                                    {step.num}
                                                </div>
                                                <div className="stair-content-panel flex-grow-1 px-4 py-3">
                                                    <h4 className="text-white mb-1" style={{ fontSize: '18px', fontWeight: '800' }}>{step.title}</h4>
                                                    <p className="text-white-50 m-0" style={{ fontSize: '12px', lineHeight: '1.4' }}>{step.desc}</p>
                                                </div>
                                                <div className="stair-icon-panel d-flex align-items-center justify-content-center">
                                                    <i className={`fas fa-${step.icon}`}></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
                    .staircase-flow-wrapper { display: flex; flex-direction: column; gap: 4px; perspective: 1000px; }
                    .stair-step-container { position: relative; cursor: pointer; transition: all 0.4s ease; transform-style: preserve-3d; transform: rotateX(15deg) rotateY(-5deg); filter: drop-shadow(0 15px 30px rgba(0,0,0,0.5)); }
                    .stair-step-container:hover { transform: rotateX(10deg) rotateY(0deg) translateX(15px); }
                    .stair-main-face { background: #161C2D; border: 1px solid rgba(255,255,255,0.08); height: 80px; position: relative; border-radius: 4px; overflow: hidden; z-index: 2; }
                    .stair-number-panel { width: 80px; height: 100%; background: var(--step-color); color: #0B1320; font-size: 32px; font-weight: 900; }
                    .stair-icon-panel { width: 80px; height: 100%; background: rgba(255,255,255,0.02); border-left: 1px solid rgba(255,255,255,0.05); color: var(--step-color); font-size: 26px; }
                    .stair-step-container::before { content: ""; position: absolute; top: -15px; left: 0; width: 100%; height: 15px; background: var(--step-color); opacity: 0.6; transform-origin: bottom; transform: rotateX(-90deg); z-index: 1; border-radius: 4px 4px 0 0; }
                    .stair-step-container::after { content: ""; position: absolute; top: 0; right: -15px; width: 15px; height: 100%; background: var(--step-color); opacity: 0.4; transform-origin: left; transform: rotateY(90deg); z-index: 1; border-radius: 0 4px 4px 0; }
                    @media (max-width: 767px) { 
                        .stair-number-panel, .stair-icon-panel { width: 55px; font-size: 22px; }
                        .stair-main-face { height: 70px; }
                        .stair-content-panel h4 { font-size: 15px !important; }
                        .stair-content-panel p { display: none; }
                        .stair-step-container::before, .stair-step-container::after { display: none; }
                        .stair-step-container { transform: none; }
                    }
                `}} />

            </section>

            {/* ═══════════════ REDESIGNED OVERVIEW SECTION ═══════════════ */}
            <section className="position-relative overflow-hidden" style={{ background: '#02050A', padding: '40px 0' }}>
                <div style={{ position: 'absolute', top: '0', right: '0', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(61, 114, 252, 0.1) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>

                <div className="container position-relative z-1">
                    <div className="section-title text-center mb-3 wow fadeInUp">
                        <span className="section-title__tagline" style={{ color: '#00D094' }}>Practical Pathway</span>
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white" style={{ fontSize: '42px', lineHeight: '1.2' }}>
                                Simple and Practical <br />
                                <span>MES Implementation</span>
                            </h2>
                            <p className="text-white-50 mt-4 mx-auto" style={{ maxWidth: '800px', fontSize: '18px' }}>
                                Micraft MES is designed to be implemented in manufacturing environments without complex infrastructure or long deployment cycles.
                                The implementation process ensures manufacturers can begin digitizing production operations quickly.
                            </p>
                        </AnimatedTitle>
                    </div>

                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-2">
                        {[
                            { title: "Flow Assessment", icon: "project-diagram", color: "#3D72FC", desc: "Understanding existing manufacturing workflows and workstations.", num: "01" },
                            { title: "Configuration", icon: "cog", color: "#FFD25D", desc: "Configuring production order workflows and dashboards.", num: "02" },
                            { title: "Data Collection", icon: "user-cog", color: "#FA5674", desc: "Enabling shop floor operator data collection processes.", num: "03" },
                            { title: "Real-time Dashboards", icon: "chart-line", color: "#00D094", desc: "Deploying real-time monitoring and production dashboards.", num: "04" }
                        ].map((card, idx) => (
                            <div key={idx} className="col wow fadeInUp" data-wow-delay={`${idx * 150}ms`}>
                                <div className="prism-card card h-100 border-0 position-relative overflow-hidden" style={{
                                    background: 'rgba(255,255,255,0.02)',
                                    backdropFilter: 'blur(30px)',
                                    zIndex: 1
                                }}>
                                    <div className="card-body p-4 p-xl-5 position-relative z-2">
                                        {/* Ambient Glow */}
                                        <div className="card-glow" style={{ background: `radial-gradient(circle, ${card.color}15 0%, transparent 70%)` }}></div>

                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <div className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '45px', height: '45px', background: `${card.color}10`, color: card.color, border: `1px solid ${card.color}30` }}>
                                                <i className={`fas fa-${card.icon}`}></i>
                                            </div>
                                            <span className="fw-900 opacity-25 text-white h4 mb-0">{card.num}</span>
                                        </div>

                                        <h3 className="card-title text-white h5 mb-3 fw-bold">{card.title}</h3>
                                        <p className="card-text text-white-50 small" style={{ lineHeight: '1.7' }}>{card.desc}</p>
                                    </div>

                                    {/* Bottom Decorative Bar */}
                                    <div className="prism-accent position-absolute bottom-0 start-0" style={{ background: card.color }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
                    .prism-card { transition: transform 0.3s ease, background 0.3s ease; }
                    .prism-card:hover { 
                        transform: translateY(-5px); 
                        background: rgba(255,255,255,0.05) !important;
                    }
                    .card-glow { position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; opacity: 0; transition: opacity 0.5s ease; z-index: -1; pointer-events: none; }
                    .prism-card:hover .card-glow { opacity: 1; }
                    
                    .prism-accent { width: 0; height: 3px; transition: width 0.3s ease; }
                    .prism-card:hover .prism-accent { width: 100%; }
                `}} />
            </section>







            {/* ═══════════════ CINEMATIC STRATEGY ROTATOR ═══════════════ */}
            <section className="position-relative overflow-hidden"
                style={{
                    backgroundImage: 'url("/strategy_section_bg_1774259381445.png")',
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    padding: '60px 0 40px'
                }}>
                {/* Dark Cinematic Overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(2,5,10,0.95) 0%, rgba(2,5,10,0.85) 50%, rgba(2,5,10,0.95) 100%)', zIndex: 0 }}></div>

                <div style={{ position: 'absolute', top: '50%', left: '0', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(61, 114, 252, 0.08) 0%, transparent 70%)', filter: 'blur(100px)', zIndex: 0 }}></div>

                <div className="container position-relative z-1">
                    <div className="section-title text-center mb-4 pb-lg-2">
                        <span className="section-title__tagline" style={{ color: '#FFD25D' }}>Deep Dive</span>
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white">Execution <span>Strategy Lifecycle</span></h2>
                        </AnimatedTitle>
                    </div>

                    <div className="row align-items-center g-5 min-h-600">
                        {/* Rotating Orbit - Left Column */}
                        <div className="col-lg-6 col-12 d-flex justify-content-center order-2 order-lg-1">
                            <div className="sequencer-orbit-v2 position-relative" style={{
                                width: '450px', height: '450px',
                                transition: 'transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                                transform: `rotate(${-activeStep * 72}deg)`,
                                marginTop: '40px'
                            }}>
                                {/* Fixed Background Path */}
                                <div className="position-absolute start-50 top-50 translate-middle rounded-circle" style={{ width: '70%', height: '70%', border: '1px dashed rgba(255,255,255,0.05)', zIndex: 0 }}></div>

                                {steps.map((step, idx) => {
                                    const angle = (idx * 72);
                                    const isActive = activeStep === idx;

                                    return (
                                        <div key={idx}
                                            onClick={() => setActiveStep(idx)}
                                            className={`node-sequencer-v2 position-absolute d-flex align-items-center justify-content-center cursor-pointer transition-all ${isActive ? 'active' : ''}`}
                                            style={{
                                                top: '0%', left: '50%',
                                                width: '75px', height: '75px',
                                                transformOrigin: '50% 300%',
                                                transform: `translateX(-50%) rotate(${angle}deg)`,
                                                zIndex: isActive ? 10 : 5
                                            }}>
                                            <div className="node-inner rounded-circle d-flex align-items-center justify-content-center h-100 w-100 position-relative" style={{
                                                background: isActive ? '#0B1320' : 'rgba(255,255,255,0.03)',
                                                border: `2px solid ${isActive ? step.color : 'rgba(255,255,255,0.1)'}`,
                                                color: isActive ? step.color : '#fff',
                                                boxShadow: isActive ? `0 0 40px ${step.color}40` : 'none',
                                                transform: `rotate(${activeStep * 72 - angle}deg) ${isActive ? 'scale(1.2)' : 'scale(1)'}`,
                                                transition: 'all 0.8s ease'
                                            }}>
                                                <i className={`fas fa-${step.icon}`} style={{ fontSize: '24px' }}></i>
                                                {/* Counter-rotate text/number to keep it upright */}
                                                <div className="position-absolute start-50 translate-middle-x bg-dark px-2 rounded-pill font-900" style={{ bottom: '-15px', fontSize: '10px', color: step.color }}>{step.num}</div>
                                            </div>
                                        </div>
                                    );
                                })}

                                <div className="center-identity position-absolute start-50 top-50 translate-middle rounded-circle d-flex align-items-center justify-content-center text-center p-3" style={{ width: '130px', height: '130px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', zIndex: 2 }}>
                                    <div className="wow pulse infinite" data-wow-duration="4s">
                                        <div className="h5 text-white fw-900 mb-0">STEP</div>
                                        <div className="small text-white-50">{activeStep + 1} / 5</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Details Panel - Right Column */}
                        <div className="col-lg-6 col-12 order-1 order-lg-2">
                            <div className="data-panel-card p-4 p-md-5 rounded-4 h-100" style={{
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                backdropFilter: 'blur(15px)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <div className="wow fadeInRight" key={activeStep} data-wow-duration="0.6s">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="display-4 fw-900 opacity-25 me-3" style={{ color: activePhase.color }}>{activePhase.num}</div>
                                        <div>
                                            <div className="text-uppercase letter-spacing-2" style={{ color: activePhase.color, fontSize: '13px', fontWeight: '800' }}>Process Phase</div>
                                            <h3 className="text-white h4 fw-900 mb-0 mt-1">{activePhase.title}</h3>
                                        </div>
                                    </div>

                                    <div className="p-3 ps-4 border-start border-4 mb-2" style={{ borderColor: activePhase.color }}>
                                        <p className="text-white-50 small m-0 fw-500" style={{ lineHeight: '1.8', letterSpacing: '0.3px' }}>{activePhase.desc}</p>
                                    </div>

                                    <div className="mt-5 d-flex align-items-center">
                                        <div className="status-pulse me-3"></div>
                                        <div>
                                            <div className="text-white-50 x-small fw-bold letter-spacing-2 text-uppercase" style={{ fontSize: '10px' }}>Readiness Status</div>
                                            <div className="text-white small fw-900" style={{ letterSpacing: '0.5px' }}>
                                                {activeStep === 4 ? "SYSTEM READY FOR FULL PRODUCTION" : `IMPLEMENTATION SEQUENCE PHASE ${activePhase.num} ACTIVE`}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
                    .status-pulse { width: 10px; height: 10px; background: #00D094; border-radius: 50%; box-shadow: 0 0 15px #00D094; animation: statusPulse 1.5s ease-in-out infinite; }
                    @keyframes statusPulse { 0% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.5); opacity: 1; } 100% { transform: scale(1); opacity: 0.8; } }
                    .x-small { font-size: 9px; opacity: 0.6; }

                    .sequencer-orbit-v2 { transition: all 1.2s cubic-bezier(0.19, 1, 0.22, 1); }
                    .node-sequencer-v2 { transition: all 0.8s ease; }
                    .node-inner { transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
                    
                    .min-h-600 { min-height: 550px; }

                    @media (max-width: 991px) {
                        .sequencer-orbit-v2 { width: 320px !important; height: 320px !important; margin: 40px 0; }
                        .node-sequencer-v2 { width: 60px !important; height: 60px !important; transform-origin: 50% 260% !important; }
                        .min-h-600 { min-height: auto; }
                    }
                `}} />
            </section>






            {/* ═══════════════ CONTINUOUS OPTIMIZATION ═══════════════ */}
            <section className="py-4" style={{ background: '#070C14' }}>
                <div className="container py-4">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="section-title text-left mb-4">
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white" style={{ fontSize: '38px', lineHeight: '1.3' }}>
                                        Continuous Improvement <br /><span>After Implementation</span>
                                    </h2>
                                </AnimatedTitle>
                            </div>
                            <p className="text-white-50 mb-4" style={{ fontSize: '17px', lineHeight: '1.8' }}>
                                After deployment, manufacturers can continuously improve operations using MES insights.
                                Micraft MES helps factories continuously improve operational efficiency through digital visibility.
                            </p>
                            <h6 className="text-white fw-bold mb-3">Micraft MES helps companies:</h6>
                            <div className="row g-2">
                                {[
                                    { text: "Identify production bottlenecks", icon: "exclamation-triangle", color: "#FA5674" },
                                    { text: "Improve machine utilization", icon: "tachometer-alt", color: "#FFD25D" },
                                    { text: "Optimize production workflows", icon: "project-diagram", color: "#3D72FC" },
                                    { text: "Analyze production performance", icon: "chart-bar", color: "#00D094" }
                                ].map((item, idx) => (
                                    <div key={idx} className="col-sm-6">
                                        <div className="d-flex align-items-center p-3 rounded" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                            <i className={`fas fa-${item.icon} me-3`} style={{ color: item.color, fontSize: '18px' }}></i>
                                            <span className="text-white" style={{ fontSize: '13px' }}>{item.text}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="position-relative overflow-hidden rounded-4 shadow-lg" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                                <Swiper
                                    modules={[Autoplay, Pagination, Navigation]}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    loop={true}
                                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                                    pagination={{ clickable: true }}
                                    navigation={true}
                                    className="improvement-slider"
                                >
                                    {[
                                        { img: "/improvement_dash.png", title: "Live KPI Monitoring" },
                                        { img: "/improvement_floor.png", title: "Digital Shop Floor" },
                                        { img: "/improvement_qc.png", title: "Precision Quality Control" },
                                        { img: "/improvement_insights.png", title: "Executive Intelligence" }
                                    ].map((slide, idx) => (
                                        <SwiperSlide key={idx}>
                                            <div className="position-relative">
                                                <Image src={slide.img} alt={slide.title} width={800} height={500} className="w-100" style={{ height: '480px', objectFit: 'cover' }} />
                                                <div className="position-absolute bottom-0 start-0 w-100 p-4" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                                                    <h4 className="text-white mb-0" style={{ fontSize: '20px', fontWeight: '800' }}>{slide.title}</h4>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
                    .improvement-slider .swiper-button-next, 
                    .improvement-slider .swiper-button-prev { 
                        color: #fff; transform: scale(0.6); background: rgba(0,0,0,0.4); 
                        width: 50px; height: 50px; border-radius: 50%; backdrop-filter: blur(5px);
                    }
                    .improvement-slider .swiper-pagination-bullet { background: #fff; opacity: 0.3; }
                    .improvement-slider .swiper-pagination-bullet-active { background: #3D72FC; opacity: 1; }
                `}} />
            </section>

            {/* ═══════════════ TIMELINE & ADVANTAGES ═══════════════ */}
            <section className="py-4 position-relative" style={{ background: '#0B1320' }}>
                <div className="container py-4">
                    <div className="row g-5">
                        <div className="col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="p-4 p-lg-5 rounded-4 h-100" style={{ background: 'linear-gradient(180deg, rgba(61, 114, 252, 0.1) 0%, rgba(11, 19, 32, 0) 100%)', border: '1px solid rgba(61, 114, 252, 0.3)' }}>
                                <AnimatedTitle>
                                    <h3 className="text-white fw-bold mb-3" style={{ fontSize: '26px' }}>Implementation Timeline</h3>
                                </AnimatedTitle>
                                <div className="d-flex flex-column gap-4 mt-5">
                                    <div className="d-flex flex-column">
                                        <span className="text-white fw-bold mb-1" style={{ fontSize: '18px' }}>Small Units</span>
                                        <span style={{ fontSize: '22px', color: '#FFD25D', fontWeight: 'bold' }}>2–3 weeks</span>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <span className="text-white fw-bold mb-1" style={{ fontSize: '18px' }}>Medium Plants</span>
                                        <span style={{ fontSize: '22px', color: '#FA5674', fontWeight: 'bold' }}>3–6 weeks</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 wow fadeInRight" data-wow-delay="200ms">
                            <div className="section-title text-left mb-4">
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white" style={{ fontSize: '36px' }}>Advantages of <span>Micraft MES Implementation</span></h2>
                                </AnimatedTitle>
                            </div>
                            <p className="text-white-50 mb-4" style={{ fontSize: '16px' }}>
                                Unlike traditional enterprise MES systems, Micraft focuses on practical manufacturing workflows and fast deployment cycles.
                            </p>
                            <div className="row g-4 mt-4">
                                {[
                                    { title: "Simple system configuration", icon: "sliders-h" },
                                    { title: "Minimal infrastructure requirements", icon: "server" },
                                    { title: "Intuitive shop floor interface", icon: "tablet-alt" },
                                    { title: "Fast deployment timelines", icon: "shipping-fast" }
                                ].map((adv, idx) => (
                                    <div key={idx} className="col-md-6">
                                        <div className="d-flex align-items-center p-3 rounded-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                            <div className="d-flex justify-content-center align-items-center rounded-circle flex-shrink-0" style={{ width: '40px', height: '40px', background: '#3D72FC20', color: '#3D72FC' }}>
                                                <i className={`fas fa-${adv.icon}`}></i>
                                            </div>
                                            <h4 className="text-white mb-0 ms-3" style={{ fontSize: '16px' }}>{adv.title}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ INDUSTRIES SECTION ═══════════════ */}
            <section className="py-5" style={{ background: '#070C14' }}>
                <div className="container">
                    <div className="section-title text-center mb-5">
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white">Industries Using <span>Micraft MES</span></h2>
                        </AnimatedTitle>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {[
                            { name: "CNC Machining & Engineering", icon: "cogs", color: "#3D72FC" },
                            { name: "Automotive Component Manufacturing", icon: "car", color: "#FFD25D" },
                            { name: "Fabrication & Metal Processing", icon: "hammer", color: "#FA5674" },
                            { name: "Plastic Injection Molding", icon: "vial", color: "#00D094" },
                            { name: "Electronics Manufacturing", icon: "microchip", color: "#6065D4" }
                        ].map((industry, i) => (
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="p-4 rounded-4 h-100 d-flex align-items-center gap-3" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <div className="d-flex align-items-center justify-content-center rounded-3" style={{ width: 50, height: 50, background: `${industry.color}15`, color: industry.color, border: `1px solid ${industry.color}30` }}>
                                        <i className={`fas fa-${industry.icon} fs-5`}></i>
                                    </div>
                                    <h4 className="text-white mb-0" style={{ fontSize: '16px', fontWeight: '600' }}>{industry.name}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ QUICK LINKS SECTION ═══════════════ */}
            <section className="py-5" style={{ background: '#02050A', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container text-center">
                    <h5 className="text-white-50 mb-4 text-uppercase letter-spacing-2" style={{ fontSize: '14px' }}>Quick Links</h5>
                    <div className="d-flex flex-wrap justify-content-center gap-3">
                        {[
                            { name: "Production Tracking", path: "/solutions/production-tracking-software" },
                            { name: "Shop Floor Visibility", path: "/solutions/shop-floor-visibility-software" },
                            { name: "Factory Monitoring", path: "/solutions/factory-production-monitoring-system" },
                            { name: "Digital Dashboard", path: "/solutions/digital-production-dashboard" },
                            { name: "Machine Utilization", path: "/solutions/machine-utilization-tracking" },
                            { name: "Quality Control", path: "/solutions/quality-inspection-tracking" }
                        ].map((link, i) => (
                            <Link key={i} href={link.path} className="px-4 py-2 rounded-pill text-white text-decoration-none transition-all"
                                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', fontSize: '13px' }}>
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ FINAL CTA ═══════════════ */}
            <section className="newsletter-one newsletter-three" style={{ padding: '60px 0 30px 0' }}>
                <div className="container">
                    <div className="newsletter-one__inner wow fadeInUp" style={{ background: 'linear-gradient(90deg, #FA5674 0%, #6065D4 100%)' }}>
                        <div className="newsletter-one__shape-bg" style={{ backgroundImage: "url(/assets/images/shapes/newsletter-one-shape-bg.png)" }}></div>
                        <div className="newsletter-one__shape-1 float-bob-x">
                            <Image src="/assets/images/shapes/newsletter-one-shape-1.png" alt="Image" width={416} height={368} priority />
                        </div>
                        <div className="newsletter-one__img">
                            <Image src="/assets/images/backgrounds/cta.png" alt="Image" width={280} height={280} priority />
                        </div>
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-10" style={{ position: 'relative', zIndex: 5 }}>
                                <AnimatedTitle>
                                    <h2 className="newsletter-one__title text-white mb-20" style={{ fontSize: '42px', lineHeight: '1.2' }}>
                                        Start Your MES <br />
                                        <span>Implementation Journey</span>
                                    </h2>
                                </AnimatedTitle>
                                <p className="newsletter-one__text text-white mb-40 mx-auto" style={{ maxWidth: '700px' }}>
                                    Schedule a Live Demo to learn how Micraft MES can be implemented in your factory.
                                </p>
                                <div className="cta-btns d-flex flex-wrap justify-content-center gap-4">
                                    <Link href="/book-demo" className="thm-btn" style={{ background: '#0B192C', color: '#fff' }}>
                                        Book Your Demo <span className="icon-arrow-right"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}