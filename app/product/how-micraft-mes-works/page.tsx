"use client"
import { Fragment } from 'react'
import Layout from "@/components/layout/Layout"
import Breadcrumb from "@/components/layout/Breadcrumb"
import Link from "next/link"
import Image from "next/image"
import AnimatedTitle from "@/components/elements/AnimatedTitle"
import "@/public/assets/css/module-css/micraftmeswork.css"

export default function HowMicraftMesWorksPage() {
    return (
        <Layout headerStyle={1} footerStyle={2}>
            <Breadcrumb breadcrumbTitle="How Micraft MES Works" />

            {/* ═══════════════ HERO SECTION ═══════════════ */}
            <section className="meswork-hero overflow-hidden position-relative">
                {/* Animated Background Shapes */}
                <div className="meswork-hero__glow-1"></div>
                <div className="meswork-hero__glow-2"></div>
                <div className="position-absolute float-bob-x" style={{ top: '10%', right: '5%', opacity: 0.06, zIndex: 0 }}>
                    <Image src="/assets/images/shapes/main-slider-two-shape-2.png" alt="shape" width={500} height={440} />
                </div>
                <div className="position-absolute float-bob-y" style={{ bottom: '5%', left: '2%', opacity: 0.05, zIndex: 0 }}>
                    <Image src="/assets/images/shapes/main-slider-two-shape-3.png" alt="shape" width={300} height={450} />
                </div>
                <div className="position-absolute" style={{ top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url(/assets/images/shapes/counter-one-bg-shape.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.04, zIndex: 0 }}></div>

                <div className="container position-relative z-1">
                    <div className="row justify-content-center">
                        <div className="col-xl-9 col-lg-10 text-center">
                            <div className="section-title text-center mb-4 wow fadeInUp" data-wow-delay="100ms">
                                <div className="section-title__tagline-box justify-content-center">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline">The Operational Foundation</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <AnimatedTitle>
                                    <h1 className="section-title__title title-animation mb-4" style={{ fontSize: '52px', lineHeight: '1.15' }}>
                                        How Micraft MES Works in a <span>Manufacturing Environment</span>
                                    </h1>
                                </AnimatedTitle>
                            </div>

                            {/* Subheading */}
                            <p className="wow fadeInUp mx-auto mb-4" data-wow-delay="200ms" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontSize: '18px', maxWidth: '720px', fontWeight: 500 }}>
                                Understand how Micraft MES connects shop floor operations with real-time production monitoring to give manufacturers complete visibility of factory performance.
                            </p>

                            {/* Supporting Text */}
                            <p className="wow fadeInUp mx-auto mb-5" data-wow-delay="300ms" style={{ color: 'rgba(255,255,255,0.45)', lineHeight: '1.7', fontSize: '15px', maxWidth: '780px' }}>
                                Micraft MES captures production data directly from shop floor activities and transforms it into real-time operational insights. The system helps manufacturers track production orders, monitor machine utilization, record inspections, and analyze factory performance through centralized dashboards.
                            </p>

                            {/* CTAs */}
                            <div className="d-flex flex-wrap justify-content-center gap-3 wow fadeInUp mb-5 pb-4" data-wow-delay="400ms">
                                <Link href="/book-demo" className="thm-btn">Book a Live Demo<span className="icon-right-arrow"></span></Link>
                                <Link href="/features" className="thm-btn" style={{ background: 'rgba(255,255,255,0.04)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)' }}>Explore MES Features<span className="icon-right-arrow"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ QUICK NAVIGATION ═══════════════ */}
            <div className="meswork-quick-nav d-none d-lg-block">
                <div className="container">
                    <div className="nav-wrapper" style={{ position: 'relative', top: '-30px', zIndex: 100 }}>
                        <div className="meswork-nav-inner d-flex align-items-center justify-content-center" 
                             style={{ 
                                background: 'rgba(13, 19, 31, 0.85)', 
                                padding: '12px 30px', 
                                borderRadius: '100px', 
                                border: '1px solid rgba(255, 255, 255, 0.12)', 
                                backdropFilter: 'blur(12px)',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 20px rgba(250, 86, 116, 0.05)'
                             }}>
                            
                            <div className="nav-links d-flex align-items-center justify-content-center gap-2 flex-wrap">
                                {[
                                    { id: "step-1-orders", label: "Production Orders", icon: "clipboard-list", color: "#FA5674" },
                                    { id: "step-2-progress", label: "Production Progress", icon: "sync", color: "#FFD25D" },
                                    { id: "step-3-monitoring", label: "Machine Utilization", icon: "cogs", color: "#6065D4" },
                                    { id: "step-4-workflow", label: "Workflow tracking", icon: "exchange-alt", color: "#3D72FC" },
                                    { id: "step-5-quality", label: "Quality Recording", icon: "shield-alt", color: "#00D094" },
                                    { id: "step-6-dashboards", label: "Dashboards", icon: "chart-bar", color: "#FA5674" },
                                    { id: "step-7-dispatch", label: "Dispatch Tracking", icon: "truck-loading", color: "#FFD25D" }
                                ].map((nav, i) => (
                                    <Fragment key={i}>
                                        <Link href={`#${nav.id}`} className="nav-item-link px-3 py-2 d-flex align-items-center gap-3">
                                            <div className="icon-wrap" style={{ 
                                                width: 32, 
                                                height: 32, 
                                                borderRadius: '10px', 
                                                background: `${nav.color}15`, 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                justifyContent: 'center',
                                                border: `1px solid ${nav.color}30`,
                                                transition: 'all 0.3s ease'
                                            }}>
                                                <i className={`fas fa-${nav.icon}`} style={{ fontSize: '14px', color: nav.color }}></i>
                                            </div>
                                            <span style={{ fontSize: '13px', fontWeight: '600', color: 'rgba(255, 255, 255, 0.65)', transition: 'all 0.3s ease', whiteSpace: 'nowrap' }}>
                                                {nav.label}
                                            </span>
                                        </Link>
                                        {i < 6 && <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.08)' }}></div>}
                                    </Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .meswork-nav-inner {
                        animation: floatingNav 3s ease-in-out infinite;
                    }
                    @keyframes floatingNav {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-5px); }
                    }
                    .nav-item-link {
                        text-decoration: none;
                        transition: all 0.3s ease;
                        position: relative;
                        border-radius: 50px;
                    }
                    .nav-item-link:hover {
                        background: rgba(255, 255, 255, 0.04);
                    }
                    .nav-item-link:hover span {
                        color: #ffffff !important;
                    }
                    .nav-item-link:hover .icon-wrap {
                        transform: scale(1.1);
                        background: #FA5674 !important;
                        border-color: transparent !important;
                        box-shadow: 0 0 15px rgba(250, 86, 116, 0.4);
                    }
                    .nav-item-link:hover .icon-wrap i {
                        color: #ffffff !important;
                    }
                `}</style>
            </div>
            <section className="py-5 position-relative" style={{ background: '#08111F' }}>
                <div className="position-absolute" style={{ top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url(/assets/images/shapes/process-one-bg-shape.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.03, zIndex: 0 }}></div>
                <div className="container py-4 position-relative z-1">
                    {/* Centered Title */}
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8 text-center">
                            <div className="section-title text-center mb-4 wow fadeInUp" data-wow-delay="100ms">
                                <div className="section-title__tagline-box justify-content-center">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline">Digital Backbone</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white" style={{ fontSize: '36px' }}>How Micraft MES Connects <span>Factory Operations</span></h2>
                                </AnimatedTitle>
                            </div>
                            <p className="mx-auto" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: '1.8', fontSize: '16px', maxWidth: '680px' }}>
                                Micraft MES acts as a digital platform that connects production operations with real-time monitoring dashboards. The system collects production data from:
                            </p>
                        </div>
                    </div>

                    {/* Data Source Cards */}
                    <div className="row g-4 justify-content-center mb-5">
                        {[
                            { title: "Operators", desc: "Shop floor workers update production progress at each stage", icon: "user-cog", color: "#FA5674", gradient: "linear-gradient(135deg, rgba(250,86,116,0.12), rgba(250,86,116,0.04))" },
                            { title: "Machines", desc: "Machine runtime, idle time, and utilization data is captured", icon: "cogs", color: "#6065D4", gradient: "linear-gradient(135deg, rgba(96,101,212,0.12), rgba(96,101,212,0.04))" },
                            { title: "Production Workstations", desc: "Stage-wise completion tracking across all workstations", icon: "desktop", color: "#FFD25D", gradient: "linear-gradient(135deg, rgba(255,210,93,0.12), rgba(255,210,93,0.04))" },
                            { title: "Inspection Stations", desc: "Quality checks and rejection data recorded instantly", icon: "shield-alt", color: "#00D094", gradient: "linear-gradient(135deg, rgba(0,208,148,0.12), rgba(0,208,148,0.04))" }
                        ].map((item, idx) => (
                            <div key={idx} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 100 + 100}ms`}>
                                <div className="meswork-glass text-center h-100" style={{ padding: '36px 24px', borderRadius: '24px' }}>
                                    <div className="d-inline-flex align-items-center justify-content-center mb-4" style={{ width: 64, height: 64, borderRadius: 18, background: item.gradient, boxShadow: `0 8px 24px ${item.color}20` }}>
                                        <i className={`fas fa-${item.icon}`} style={{ fontSize: '24px', color: item.color }}></i>
                                    </div>
                                    <h4 className="text-white mb-2" style={{ fontSize: '18px', fontWeight: 700 }}>{item.title}</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', lineHeight: '1.6', marginBottom: 0 }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Summary */}
                    <div className="row justify-content-center wow fadeInUp" data-wow-delay="500ms">
                        <div className="col-lg-8">
                            <div className="meswork-glass text-center" style={{ padding: '28px 40px', borderRadius: '20px', background: 'linear-gradient(135deg, rgba(250,86,116,0.04), rgba(96,101,212,0.04))' }}>
                                <div className="d-flex align-items-center justify-content-center gap-3">
                                    <div className="d-flex align-items-center justify-content-center" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(250,86,116,0.1)' }}>
                                        <i className="fas fa-chart-bar" style={{ color: '#FA5674', fontSize: '18px' }}></i>
                                    </div>
                                    <p className="mb-0" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', lineHeight: '1.6', textAlign: 'left' }}>
                                        This information is processed and displayed through <strong className="text-white">real-time production dashboards</strong>, enabling managers to monitor factory operations instantly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ CYCLE ARCHITECTURE — VISUAL HUB ═══════════════ */}
            <section className="py-5 position-relative" style={{ background: '#0B1320' }}>
                <div className="position-absolute float-bob-y" style={{ top: '5%', right: '3%', opacity: 0.04, zIndex: 0 }}>
                    <Image src="/assets/images/shapes/main-slider-two-shape-2.png" alt="shape" width={400} height={350} />
                </div>
                <div className="container py-4 position-relative z-1">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8 text-center">
                            <div className="section-title text-center mb-4 wow fadeInUp">
                                <div className="section-title__tagline-box justify-content-center">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline">System Architecture</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white" style={{ fontSize: '36px' }}>The 7-Step <span>Manufacturing Execution Cycle</span></h2>
                                </AnimatedTitle>
                            </div>
                            <p className="mx-auto" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', maxWidth: '650px', lineHeight: '1.7' }}>
                                Each step in Micraft MES is interconnected — creating a continuous, real-time cycle of production visibility from order creation to dispatch.
                            </p>
                        </div>
                    </div>

                    {/* ── ALIGNMENT INFOGRAPHIC TIMELINE ── */}
                    <div className="mes-infographic-container position-relative mx-auto mt-5" style={{ maxWidth: '1000px', padding: '20px 0 80px 0' }}>
                        
                        {/* THE HUB - Micraft MES Inc */}
                        <div className="text-center position-relative w-100 mb-5 wow zoomIn" style={{ zIndex: 10 }}>
                            <div className="d-inline-flex flex-column align-items-center justify-content-center mes-timeline-hub" style={{ width: '150px', height: '150px', borderRadius: '50%', background: 'linear-gradient(135deg, #070C14 0%, #1a2a40 100%)', border: '2px solid rgba(61, 114, 252, 0.4)', boxShadow: '0 0 40px rgba(61, 114, 252, 0.3), inset 0 0 20px rgba(61, 114, 252, 0.2)' }}>
                                <div className="mb-2">
                                    <i className="fas fa-microchip" style={{ fontSize: '28px', color: '#3D72FC' }}></i>
                                </div>
                                <h3 className="text-white fw-bold mb-0" style={{ fontSize: '20px', letterSpacing: '1px' }}>Micraft</h3>
                                <div style={{ color: '#3D72FC', fontSize: '11px', fontWeight: '800', letterSpacing: '2px' }}>MES INC</div>
                            </div>
                        </div>

                        {/* Main Vertical Center glowing line */}
                        <div className="mes-timeline-center-line"></div>
                        <div className="mes-timeline-arrow-bottom"></div>

                        {[
                            { title: "Production Orders", icon: "clipboard-list", color: "#3D72FC", desc: "Production orders are created in the system, defining product information, quantities, and involved workstations with absolute precision." },
                            { title: "Production Progress", icon: "sync-alt", color: "#FFD25D", desc: "Operators update job progress at each production stage, providing machining, assembly, and process completion updates in real time." },
                            { title: "Machine Utilization", icon: "cogs", color: "#FA5674", desc: "Micraft MES tracks machine productivity by monitoring running time, idle time, and production output to help manufacturers understand performance." },
                            { title: "Workflow Progress", icon: "exchange-alt", color: "#6065D4", desc: "Production processes are tracked across multiple stages like machining and assembly, ensuring managers maintain visibility across the factory." },
                            { title: "Inspection Recording", icon: "shield-alt", color: "#00D094", desc: "Quality checks and result logs are maintained instantly to track inspection results, rejection quantities, and defect trends." },
                            { title: "Production Dashboards", icon: "chart-bar", color: "#FA5674", desc: "Production data is converted into visual dashboards, providing instant visibility of work order progress and factory performance." },
                            { title: "Packing & Dispatch", icon: "truck-loading", color: "#FFD25D", desc: "Packing completion and order readiness for shipment are tracked to ensure finished products are delivered on schedule." }
                        ].map((step, idx) => {
                            const isRight = idx % 2 === 0;

                            return (
                                <div className={`mes-timeline-item row align-items-center position-relative wow fadeInUp`} data-wow-delay={`${(idx * 100) + 100}ms`} key={idx} style={{ marginBottom: '30px', minHeight: '120px' }}>
                                    
                                    {/* Left Spacer / Right Content */}
                                    <div className="col-lg-6 col-12 position-relative text-end pe-4 pe-lg-5 d-flex flex-row-reverse align-items-center justify-content-start mes-mobile-row">
                                        {!isRight && (
                                            <>
                                                {/* Left Side Content */}
                                                <div className="mes-step-square d-flex align-items-center justify-content-center flex-shrink-0 ms-4" style={{ background: step.color, boxShadow: `0 8px 30px ${step.color}66` }}>
                                                    STEP 0{idx + 1}
                                                </div>
                                                <div className="mes-step-info d-flex align-items-center gap-4 flex-grow-1 py-3 text-end" style={{ borderTop: '1px solid rgba(255,255,255,0.4)', borderBottom: '1px solid rgba(255,255,255,0.4)' }}>
                                                    <div className="mes-step-info-icon" style={{ color: step.color, fontSize: '38px', minWidth: '45px', textAlign: 'center' }}>
                                                        <i className={`fas fa-${step.icon}`}></i>
                                                    </div>
                                                    <div className="mes-step-info-text flex-grow-1">
                                                        <h4 style={{ color: step.color, fontSize: '18px', fontWeight: '700', marginBottom: '6px' }}>{step.title}</h4>
                                                        <p className="text-white-50 mb-0" style={{ fontSize: '12px', lineHeight: '1.6' }}>
                                                            {step.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    {/* Right Spacer / Left Content */}
                                    <div className="col-lg-6 col-12 position-relative ps-4 ps-lg-5 d-flex align-items-center justify-content-start mes-mobile-row">
                                        {/* Connector Lines */}
                                        <div className={`mes-connector-line ${isRight ? 'connector-line-right' : 'connector-line-left'}`} style={{ borderColor: 'rgba(255,255,255,0.5)' }}></div>
                                        
                                        {isRight && (
                                            <>
                                                {/* Right Side Content */}
                                                <div className="mes-step-square d-flex align-items-center justify-content-center flex-shrink-0 me-4" style={{ background: step.color, boxShadow: `0 8px 30px ${step.color}66` }}>
                                                    STEP 0{idx + 1}
                                                </div>
                                                <div className="mes-step-info d-flex align-items-center gap-4 flex-grow-1 py-3 text-start" style={{ borderTop: '1px solid rgba(255,255,255,0.4)', borderBottom: '1px solid rgba(255,255,255,0.4)' }}>
                                                    <div className="mes-step-info-text flex-grow-1">
                                                        <h4 style={{ color: step.color, fontSize: '18px', fontWeight: '700', marginBottom: '6px' }}>{step.title}</h4>
                                                        <p className="text-white-50 mb-0" style={{ fontSize: '12px', lineHeight: '1.6' }}>
                                                            {step.desc}
                                                        </p>
                                                    </div>
                                                    <div className="mes-step-info-icon" style={{ color: step.color, fontSize: '38px', minWidth: '45px', textAlign: 'center' }}>
                                                        <i className={`fas fa-${step.icon}`}></i>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                </div>
                            );
                        })}
                    </div>

                    {/* Infographic Scoped Styles */}
                    <style dangerouslySetInnerHTML={{__html: `
                        .mes-timeline-hub:hover {
                            transform: scale(1.05);
                            box-shadow: 0 0 60px rgba(61, 114, 252, 0.5), inset 0 0 30px rgba(61, 114, 252, 0.3) !important;
                            transition: all 0.4s ease;
                        }
                        .mes-timeline-center-line {
                            position: absolute;
                            top: 170px; /* Accounts for 20px padding + 150px hub */
                            bottom: 0;
                            left: 50%;
                            width: 2px;
                            background: linear-gradient(to bottom, rgba(61, 114, 252, 0.6), rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.1));
                            transform: translateX(-50%);
                            z-index: 0;
                            box-shadow: 0 0 15px rgba(61, 114, 252, 0.3);
                        }
                        .mes-timeline-arrow-bottom {
                            position: absolute;
                            bottom: -15px; /* stick out from bottom */
                            left: 50%;
                            width: 0; 
                            height: 0; 
                            border-left: 10px solid transparent;
                            border-right: 10px solid transparent;
                            border-top: 14px solid rgba(255,255,255,0.4);
                            transform: translateX(-50%);
                            z-index: 1;
                        }
                        .mes-connector-line {
                            position: absolute;
                            top: 50%;
                            width: 32px;  /* Span exact padding from box to center */
                            border-top: 2px solid;
                            z-index: 0;
                        }
                        .connector-line-right {
                            left: 0; /* from the boundary of the col-6 */
                        }
                        .connector-line-left {
                            right: 0;
                        }
                        /* We make an L shape line step by connecting vertical lines */
                        .connector-line-right::before {
                            content: ''; position: absolute; left: 0; bottom: 0; width: 2px; height: 35px; background: rgba(255,255,255,0.5);
                        }
                        .connector-line-left::before {
                            content: ''; position: absolute; right: 0; bottom: 0; width: 2px; height: 35px; background: rgba(255,255,255,0.5);
                        }
                        .mes-step-square {
                            width: 110px;
                            height: 100px;
                            border-radius: 18px;
                            color: #fff;
                            font-weight: 800;
                            font-size: 15px;
                            letter-spacing: 0.5px;
                            z-index: 2;
                            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                            position: relative;
                        }
                        .mes-timeline-item:hover .mes-step-square {
                            transform: scale(1.08) translateY(-4px);
                        }

                        
                        @media (max-width: 991px) {
                            .mes-timeline-center-line, .mes-timeline-arrow-bottom, .mes-connector-line {
                                display: none;
                            }
                            .mes-timeline-item {
                                padding: 0 15px;
                                flex-direction: column !important;
                                align-items: flex-start !important;
                            }
                            .mes-timeline-item .mes-mobile-row {
                                width: 100%;
                                padding: 0 !important;
                                text-align: left !important;
                                flex-direction: row !important;
                                justify-content: flex-start !important;
                                margin-bottom: 20px;
                            }
                            /* Reset visual order for mobile so Box is always first */
                            .mes-timeline-item .mes-mobile-row > .mes-step-square {
                                margin: 0 20px 0 0 !important;
                                width: 80px; height: 80px; font-size: 13px;
                            }
                            .mes-timeline-item .mes-mobile-row > .mes-step-info {
                                flex-direction: column !important;
                                text-align: left !important;
                                align-items: flex-start !important;
                                padding: 15px 0 !important;
                            }
                            /* Hide the extra large icons on mobile to save space */
                            .mes-step-info-icon {
                                display: none !important;
                            }
                            .mes-step-info-text h4 {
                                font-size: 16px !important;
                            }
                        }
                    `}} />
                </div>
            </section>

            {/* ═══════════════ DETAILED STEP SECTIONS ═══════════════ */}
            <section className="py-5 position-relative" style={{ background: '#070C14' }}>
                <div className="position-absolute" style={{ top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url(/assets/images/shapes/counter-one-bg-shape.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.02, zIndex: 0 }}></div>
                <div className="container py-4 position-relative z-1">

                    {/* STEP 1 */}
                    <div className="meswork-step-detail mb-5 wow fadeInUp" id="step-1-orders" style={{ borderLeft: '4px solid #FA5674' }}>
                        <div style={{ position: 'absolute', top: 0, right: 0, width: 200, height: 200, background: 'rgba(250,86,116,0.06)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }}></div>
                        <div className="row align-items-start g-4">
                            <div className="col-lg-7">
                                <div className="meswork-cycle-num mb-3" style={{ background: 'linear-gradient(135deg, #FA5674, #6065D4)' }}>1</div>
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white mb-3" style={{ fontSize: '30px' }}>Step 1 – Production Orders are <span>Created</span></h2>
                                </AnimatedTitle>
                                <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: '1.7', marginBottom: '20px' }}>
                                    Manufacturing operations begin with the creation of production orders. These orders contain details such such as:
                                </p>
                                <ul className="meswork-checklist mb-4">
                                    <li>Product information</li>
                                    <li>Production quantity</li>
                                    <li>Production stages</li>
                                    <li>Workstations involved</li>
                                </ul>
                                <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: '1.7', fontSize: '14px', marginBottom: '20px' }}>
                                    Micraft MES allows manufacturers to track production orders digitally instead of relying on manual registers.
                                </p>
                                <Link href="/solutions/production-tracking-software" className="meswork-link" style={{ color: '#FA5674' }}>
                                    Production Tracking Software <i className="icon-right-arrow"></i>
                                </Link>
                            </div>
                            <div className="col-lg-5">
                                <div className="meswork-img-card meswork-img-glow p-2">
                                    <Image src="/assets/images/micraftmeswork/production-order.png" alt="Production Orders" width={440} height={280} className="w-100" style={{ borderRadius: '20px', objectFit: 'cover' }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* STEP 2 */}
                    <div className="meswork-step-detail mb-5 wow fadeInUp" id="step-2-progress" style={{ borderLeft: '4px solid #FFD25D' }}>
                        <div style={{ position: 'absolute', top: 0, right: 0, width: 200, height: 200, background: 'rgba(255,210,93,0.06)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }}></div>
                        <div className="row align-items-start g-4">
                            <div className="col-lg-5 order-2 order-lg-1">
                                <div className="meswork-img-card meswork-img-glow p-2">
                                    <Image src="/assets/images/micraftmeswork/shop-floor-data.png" alt="Shop Floor Updates" width={440} height={280} className="w-100" style={{ borderRadius: '20px', objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div className="col-lg-7 order-1 order-lg-2">
                                <div className="meswork-cycle-num mb-3" style={{ background: 'linear-gradient(135deg, #FFD25D, #FA5674)' }}>2</div>
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white mb-3" style={{ fontSize: '30px' }}>Step 2 – Operators Update <span>Production Progress</span></h2>
                                </AnimatedTitle>
                                <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: '1.7', marginBottom: '20px' }}>
                                    As production begins, operators update job progress at each production stage. Examples include:
                                </p>
                                <ul className="meswork-checklist mb-4">
                                    <li>Machining completion</li>
                                    <li>Assembly progress</li>
                                    <li>Inspection checkpoints</li>
                                    <li>Process stage completion</li>
                                </ul>
                                <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: '1.7', fontSize: '14px', marginBottom: '20px' }}>
                                    These updates allow the system to maintain real-time visibility of production progress.
                                </p>
                                <Link href="/solutions/shop-floor-visibility-software" className="meswork-link" style={{ color: '#FFD25D' }}>
                                    Shop Floor Visibility Software <i className="icon-right-arrow"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* STEP 3 */}
                    <div className="meswork-step-detail mb-5 wow fadeInUp" id="step-3-monitoring" style={{ borderLeft: '4px solid #6065D4' }}>
                        <div style={{ position: 'absolute', top: 0, right: 0, width: 200, height: 200, background: 'rgba(96,101,212,0.06)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }}></div>
                        <div className="row align-items-start g-4">
                            <div className="col-lg-7">
                                <div className="meswork-cycle-num mb-3" style={{ background: 'linear-gradient(135deg, #6065D4, #3D72FC)' }}>3</div>
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white mb-3" style={{ fontSize: '30px' }}>Step 3 – Machine Utilization is <span>Monitored</span></h2>
                                </AnimatedTitle>
                                <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: '1.7', marginBottom: '20px' }}>
                                    Micraft MES tracks machine productivity by monitoring:
                                </p>
                                <ul className="meswork-checklist mb-4">
                                    <li>Machine running time</li>
                                    <li>Idle time</li>
                                    <li>Production output per machine</li>
                                    <li>Machine performance trends</li>
                                </ul>
                                <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: '1.7', fontSize: '14px', marginBottom: '20px' }}>
                                    This helps manufacturers understand how effectively machines are being used.
                                </p>
                                <Link href="/solutions/machine-utilization-tracking" className="meswork-link" style={{ color: '#6065D4' }}>
                                    Machine Utilization Tracking <i className="icon-right-arrow"></i>
                                </Link>
                            </div>
                            <div className="col-lg-5">
                                <div className="meswork-img-card meswork-img-glow p-2">
                                    <Image src="/assets/images/micraftmeswork/machine-monitoring.png" alt="Machine Monitoring" width={440} height={280} className="w-100" style={{ borderRadius: '20px', objectFit: 'cover' }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* STEP 4 */}
                    <div className="meswork-step-detail mb-5 wow fadeInUp" id="step-4-workflow" style={{ borderLeft: '4px solid #3D72FC' }}>
                        <div style={{ position: 'absolute', top: 0, right: 0, width: 200, height: 200, background: 'rgba(61,114,252,0.06)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }}></div>
                        <div className="row align-items-start g-4">
                            <div className="col-lg-5 order-2 order-lg-1">
                                <div className="meswork-img-card meswork-img-glow p-2">
                                    <Image src="/assets/images/project/WorkOrderExecution.jpg" alt="Workflow Tracking" width={440} height={280} className="w-100" style={{ borderRadius: '20px', objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div className="col-lg-7 order-1 order-lg-2">
                                <div className="meswork-cycle-num mb-3" style={{ background: 'linear-gradient(135deg, #3D72FC, #6065D4)' }}>4</div>
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white mb-3" style={{ fontSize: '30px' }}>Step 4 – Production Workflow is <span>Tracked</span></h2>
                                </AnimatedTitle>
                                <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: '1.7', marginBottom: '20px' }}>
                                    Manufacturing processes often involve multiple stages. Micraft MES tracks how work orders move through stages such as:
                                </p>
                                <ul className="meswork-checklist mb-4">
                                    <li>Machining</li>
                                    <li>Assembly</li>
                                    <li>Inspection</li>
                                    <li>Finishing</li>
                                </ul>
                                <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: '1.7', fontSize: '14px', marginBottom: '20px' }}>
                                    This ensures that managers can monitor workflow progress across the factory.
                                </p>
                                <Link href="/solutions/manufacturing-process-tracking" className="meswork-link" style={{ color: '#3D72FC' }}>
                                    Manufacturing Process Tracking <i className="icon-right-arrow"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* STEP 5 */}
                    <div className="meswork-step-detail mb-5 wow fadeInUp" id="step-5-quality" style={{ borderLeft: '4px solid #00D094' }}>
                        <div style={{ position: 'absolute', top: 0, right: 0, width: 200, height: 200, background: 'rgba(0,208,148,0.06)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }}></div>
                        <div className="row align-items-start g-4">
                            <div className="col-lg-7">
                                <div className="meswork-cycle-num mb-3" style={{ background: 'linear-gradient(135deg, #00D094, #00B07D)' }}>5</div>
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white mb-3" style={{ fontSize: '30px' }}>Step 5 – Inspection Results are <span>Recorded</span></h2>
                                </AnimatedTitle>
                                <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: '1.7', marginBottom: '20px' }}>
                                    Quality checks are recorded during production. Inspectors can log:
                                </p>
                                <ul className="meswork-checklist mb-4">
                                    <li>Inspection results</li>
                                    <li>Rejection quantities</li>
                                    <li>Defect types</li>
                                </ul>
                                <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: '1.7', fontSize: '14px', marginBottom: '20px' }}>
                                    This enables manufacturers to track quality performance and rejection trends.
                                </p>
                                <Link href="/solutions/quality-inspection-tracking" className="meswork-link" style={{ color: '#00D094' }}>
                                    Quality Inspection Tracking <i className="icon-right-arrow"></i>
                                </Link>
                            </div>
                            <div className="col-lg-5">
                                <div className="meswork-img-card meswork-img-glow p-2">
                                    <Image src="/assets/images/micraftmeswork/quality-inspection.png" alt="Quality Inspection" width={440} height={280} className="w-100" style={{ borderRadius: '20px', objectFit: 'cover' }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* STEP 6 */}
                    <div className="meswork-step-detail mb-5 wow fadeInUp" id="step-6-dashboards" style={{ borderLeft: '4px solid #FA5674' }}>
                        <div style={{ position: 'absolute', top: 0, right: 0, width: 200, height: 200, background: 'rgba(250,86,116,0.06)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }}></div>
                        <div className="row align-items-start g-4">
                            <div className="col-lg-5 order-2 order-lg-1">
                                <div className="meswork-img-card meswork-img-glow p-2">
                                    <Image src="/assets/images/micraftmeswork/dispatch-dashboard.png" alt="Dashboards" width={440} height={280} className="w-100" style={{ borderRadius: '20px', objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div className="col-lg-7 order-1 order-lg-2">
                                <div className="meswork-cycle-num mb-3" style={{ background: 'linear-gradient(135deg, #FA5674, #6065D4)' }}>6</div>
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white mb-3" style={{ fontSize: '30px' }}>Step 6 – Real-Time Production <span>Dashboards</span></h2>
                                </AnimatedTitle>
                                <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: '1.7', marginBottom: '20px' }}>
                                    Micraft MES converts production data into visual dashboards. Managers can monitor:
                                </p>
                                <ul className="meswork-checklist mb-4">
                                    <li>Production output</li>
                                    <li>Machine utilization</li>
                                    <li>Work order progress</li>
                                    <li>Inspection results</li>
                                    <li>Dispatch readiness</li>
                                </ul>
                                <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: '1.7', fontSize: '14px', marginBottom: '20px' }}>
                                    These dashboards provide instant visibility of factory operations.
                                </p>
                                <Link href="/solutions/digital-production-dashboard" className="meswork-link" style={{ color: '#FA5674' }}>
                                    Digital Production Dashboard <i className="icon-right-arrow"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* STEP 7 */}
                    <div className="meswork-step-detail wow fadeInUp" id="step-7-dispatch" style={{ borderLeft: '4px solid #FFD25D' }}>
                        <div style={{ position: 'absolute', top: 0, right: 0, width: 200, height: 200, background: 'rgba(255,210,93,0.06)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }}></div>
                        <div className="row align-items-start g-4">
                            <div className="col-lg-7">
                                <div className="meswork-cycle-num mb-3" style={{ background: 'linear-gradient(135deg, #FFD25D, #e8b835)' }}>7</div>
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white mb-3" style={{ fontSize: '30px' }}>Step 7 – Dispatch Readiness <span>Monitoring</span></h2>
                                </AnimatedTitle>
                                <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: '1.7', marginBottom: '20px' }}>
                                    After production is completed, Micraft MES tracks:
                                </p>
                                <ul className="meswork-checklist mb-4">
                                    <li>Packing completion</li>
                                    <li>Order readiness for shipment</li>
                                    <li>Dispatch preparation</li>
                                </ul>
                                <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: '1.7', fontSize: '14px', marginBottom: '20px' }}>
                                    This helps manufacturers ensure that finished products are delivered on schedule.
                                </p>
                                <Link href="/solutions/packing-dispatch-tracking" className="meswork-link" style={{ color: '#FFD25D' }}>
                                    Packing & Dispatch Tracking <i className="icon-right-arrow"></i>
                                </Link>
                            </div>
                            <div className="col-lg-5">
                                <div className="meswork-img-card meswork-img-glow p-2">
                                    <Image src="/assets/images/micraftmeswork/dispatch-dashboard.png" alt="Dispatch" width={440} height={280} className="w-100" style={{ borderRadius: '20px', objectFit: 'cover' }} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ═══════════════ END-TO-END VISIBILITY PANEL ═══════════════ */}
            <section className="py-5" style={{ background: '#0B1320' }}>
                <div className="container py-4">
                    <div className="meswork-glass p-5 text-center" style={{ borderRadius: '30px', border: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(135deg, rgba(61,114,252,0.05), rgba(7,12,20,0.8))' }}>
                        <div className="section-title text-center mb-4 wow fadeInUp">
                            <AnimatedTitle>
                                <h2 className="section-title__title text-white" style={{ fontSize: '32px' }}>Complete Production Monitoring <span>from Start to Dispatch</span></h2>
                            </AnimatedTitle>
                        </div>
                        <p className="mx-auto mb-5" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '17px', maxWidth: '800px', lineHeight: '1.8' }}>
                            Micraft MES connects all stages of manufacturing operations. The system provides visibility across production orders, machine utilization, manufacturing processes, inspection activities, and packing & dispatch. This end-to-end monitoring allows manufacturers to control production operations more effectively.
                        </p>
                        <div className="row g-3 justify-content-center">
                            {['Production Orders', 'Machine Utilization', 'Manufacturing Processes', 'Inspection Activities', 'Packing & Dispatch'].map((item, i) => (
                                <div key={i} className="col-auto">
                                    <div className="px-3 py-2" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', fontSize: '13px', color: 'rgba(255,255,255,0.7)', fontWeight: '600' }}>
                                        <i className="fas fa-check-circle me-2" style={{ color: '#00D094' }}></i> {item}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ BENEFITS ═══════════════ */}
            <section className="py-5" style={{ background: '#070C14' }}>
                <div className="container py-5">
                    <div className="section-title text-center mb-5">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Why Implement Micraft</span>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white" style={{ fontSize: '36px' }}>Benefits of <span>Implementing Micraft MES</span></h2>
                        </AnimatedTitle>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {[
                            { title: "Real-Time Production Visibility", text: "Monitor factory operations instantly with live dashboards.", icon: "eye", color: "#FA5674" },
                            { title: "Faster Operational Decisions", text: "Detect issues quickly and respond faster to floor disruptions.", icon: "bolt", color: "#FFD25D" },
                            { title: "Improved Production Efficiency", text: "Optimize workflows and reduce delays across the factory.", icon: "chart-line", color: "#6065D4" },
                            { title: "Better Machine Utilization", text: "Improve equipment productivity and optimize machine performance.", icon: "cogs", color: "#3D72FC" },
                            { title: "Accurate Production Reporting", text: "Access reliable production data through digital factory dashboards.", icon: "poll-h", color: "#00D094" }
                        ].map((benefit, idx) => (
                            <div key={idx} className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 100}ms`}>
                                <div className="meswork-benefit">
                                    <div className="meswork-benefit__icon" style={{ background: `${benefit.color}12`, color: benefit.color, boxShadow: `0 4px 12px ${benefit.color}20` }}>
                                        <i className={`fas fa-${benefit.icon}`}></i>
                                    </div>
                                    <h4 className="text-white mb-2" style={{ fontSize: '20px', fontWeight: 700 }}>{benefit.title}</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '15px', lineHeight: '1.6' }}>{benefit.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ RELATED SOLUTIONS QUICK LINKS ═══════════════ */}
            <section className="py-5" style={{ background: '#070C14' }}>
                <div className="container">
                    <div className="section-title text-center mb-5">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Explore More</span>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white" style={{ fontSize: '32px' }}>Related <span>Manufacturing Solutions</span></h2>
                        </AnimatedTitle>
                    </div>
                    
                    <div className="row g-3 justify-content-center">
                        {[
                            { name: "Production Tracking Software", path: "/solutions/production-tracking-software", icon: "clipboard-list", color: "#FA5674" },
                            { name: "Shop Floor Visibility Software", path: "/solutions/shop-floor-visibility-software", icon: "eye", color: "#FFD25D" },
                            { name: "Machine Utilization Tracking", path: "/solutions/machine-utilization-tracking", icon: "cogs", color: "#6065D4" },
                            { name: "Manufacturing Performance Tracking", path: "/solutions/manufacturing-performance-tracking", icon: "chart-line", color: "#00D094" },
                            { name: "Manufacturing Process Tracking", path: "/solutions/manufacturing-process-tracking", icon: "exchange-alt", color: "#3D72FC" },
                            { name: "Quality Inspection Tracking", path: "/solutions/quality-inspection-tracking", icon: "shield-alt", color: "#00D094" },
                            { name: "Digital Production Dashboard", path: "/solutions/digital-production-dashboard", icon: "chart-bar", color: "#FA5674" },
                            { name: "Packing & Dispatch Tracking", path: "/solutions/packing-dispatch-tracking", icon: "truck-loading", color: "#FFD25D" }
                        ].map((solution, i) => (
                            <div key={i} className="col-xl-3 col-lg-4 col-md-6">
                                <Link href={solution.path} className="d-block p-4 h-100 text-decoration-none" 
                                      style={{ 
                                          background: 'rgba(255,255,255,0.02)', 
                                          border: '1px solid rgba(255,255,255,0.06)', 
                                          borderRadius: '20px',
                                          transition: 'all 0.3s ease'
                                      }}>
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="d-flex align-items-center justify-content-center" 
                                             style={{ width: 45, height: 45, borderRadius: '12px', background: `${solution.color}12`, border: `1px solid ${solution.color}25` }}>
                                            <i className={`fas fa-${solution.icon}`} style={{ color: solution.color, fontSize: '18px' }}></i>
                                        </div>
                                        <h4 className="text-white mb-0" style={{ fontSize: '14px', fontWeight: '600' }}>{solution.name}</h4>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <style jsx>{`
                    .col-xl-3 Link:hover {
                        background: rgba(255,255,255,0.04) !important;
                        border-color: rgba(255,255,255,0.2) !important;
                        transform: translateY(-5px);
                    }
                `}</style>
            </section>

            {/* ═══════════════ FINAL CTA ═══════════════ */}
            <section className="newsletter-one newsletter-three" style={{ padding: '80px 0 0 0' }}>
                <div className="container">
                    <div className="newsletter-one__inner" style={{ background: 'linear-gradient(90deg, #FA5674 0%, #6065D4 100%)' }}>
                        <div className="newsletter-one__shape-bg"
                            style={{ backgroundImage: "url(/assets/images/shapes/newsletter-one-shape-bg.png)" }}></div>
                        <div className="newsletter-one__shape-1 float-bob-x">
                            <Image src="/assets/images/shapes/newsletter-one-shape-1.png" alt="Image" width={416} height={368} priority />
                        </div>
                        <div className="newsletter-one__shape-2"></div>
                        <div className="newsletter-one__shape-3"></div>
                        <div className="newsletter-one__img">
                            <Image src="/assets/images/backgrounds/cta.png" alt="Image" width={280} height={280} priority />
                        </div>

                        <div className="row justify-content-center text-center">
                            <div className="col-lg-10" style={{ position: 'relative', zIndex: 5 }}>
                                <AnimatedTitle>
                                    <h2 className="newsletter-one__title text-white mb-20" style={{ fontSize: '42px', lineHeight: '1.2' }}>
                                        See How Micraft MES Works <br />
                                        <span>In Your Factory</span>
                                    </h2>
                                </AnimatedTitle>
                                <p className="newsletter-one__text text-white mb-40 mx-auto" style={{ maxWidth: '750px' }}>
                                    Discover how Micraft MES can help your manufacturing company gain real-time production visibility and improve operational efficiency. Schedule a Live Demo to see Micraft MES in action.
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
                
                <style dangerouslySetInnerHTML={{__html: `
                    .newsletter-three {
                        padding: 40px 0 !important;
                    }
                    .newsletter-one__img {
                        position: absolute;
                        right: 40px;
                        top: 50%;
                        transform: translateY(-50%);
                        display: flex;
                        align-items: center;
                        height: auto;
                        z-index: 2;
                    }
                    .thm-btn:hover {
                        background: #fff !important;
                        color: #0B192C !important;
                    }
                    @media (max-width: 1199px) {
                        .newsletter-one__img {
                            right: 20px;
                        }
                        .newsletter-one__img img {
                            width: 200px;
                            height: auto;
                        }
                    }
                    @media (max-width: 991px) {
                        .newsletter-one__img {
                            display: none !important;
                        }
                        .newsletter-one__shape-1 {
                            display: none;
                        }
                        .newsletter-one__inner {
                            padding: 60px 20px;
                            margin: 0 15px;
                        }
                    }
                    @media (max-width: 767px) {
                        .newsletter-one__title {
                            font-size: 30px !important;
                            line-height: 1.3 !important;
                        }
                        .newsletter-one__text {
                            font-size: 15px;
                            margin-bottom: 30px !important;
                        }
                        .cta-btns {
                            flex-direction: column;
                            align-items: center;
                            gap: 15px !important;
                        }
                        .thm-btn {
                            width: 100%;
                            max-width: 100%;
                            justify-content: center;
                        }
                    }
                `}} />
            </section>

        </Layout>
    )
}