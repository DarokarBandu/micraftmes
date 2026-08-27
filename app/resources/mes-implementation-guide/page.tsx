"use client"
import Layout from "../../../components/layout/Layout"
import Breadcrumb from "../../../components/layout/Breadcrumb"
import Link from "next/link"
import Image from "next/image"
import AnimatedTitle from "../../../components/elements/AnimatedTitle"
import FinalCTA from "../../../components/sections/home1/FinalCTA"

export default function MESImplementationGuidePage() {
    return (
        <Layout headerStyle={1} footerStyle={2}>
            <Breadcrumb breadcrumbTitle="MES Implementation" />

            {/* 1. Hero Section */}
            <section className="mes-hero pt-100 pb-100 overflow-hidden bg-dark-depth" id="hero">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="section-title text-left">
                                <AnimatedTitle>
                                    <h1 className="section-title__title text-white">
                                        The Complete Guide to <br /> <span>MES Implementation</span>
                                    </h1>
                                </AnimatedTitle>
                            </div>
                            <div className="mt-4 text-white">
                                <p className="mb-4 hero-subtitle">
                                    Learn how to successfully deploy a Manufacturing Execution System in 30-60 days with a practical approach.
                                </p>
                                <p className="text-white-50 mb-3 text-medium">
                                    Deploying an MES doesn&apos;t have to take months. Small and mid-sized manufacturing plants can deploy a practical MES to gain real-time visibility without replacing their ERP or disrupting current operations.
                                </p>
                                <p className="text-white-50 mb-5 text-medium">
                                    This guide explains the step-by-step implementation strategy for modern factories to ensure zero-disruption digital transformation.
                                </p>
                                <div className="btn-box">
                                    <Link href="#understanding" className="thm-btn">Explore Framework <span className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="p-3 bg-dark rounded-5 border border-secondary border-opacity-10 shadow-2xl position-relative overflow-hidden">
                                {/* MES Implementation Timeline SVG */}
                                <svg viewBox="0 0 560 420" xmlns="http://www.w3.org/2000/svg" className="w-100 rounded-4">
                                    <defs>
                                        <linearGradient id="implBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#0a0f1e" /><stop offset="100%" stopColor="#111827" /></linearGradient>
                                        <linearGradient id="implAccent" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FA5674" /><stop offset="100%" stopColor="#6366f1" /></linearGradient>
                                        <filter id="implGlow"><feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                                    </defs>
                                    <rect width="560" height="420" fill="url(#implBg)" rx="12" />
                                    {/* Header */}
                                    <rect x="0" y="0" width="560" height="44" fill="#1a2235" rx="12" />
                                    <text x="50" y="27" fill="#94a3b8" fontSize="11" fontFamily="monospace">Micraft Execution Road-Map — Active Deployment</text>
                                    <circle cx="520" cy="22" r="5" fill="#FA5674" className="glow-pulse" filter="url(#implGlow)" />
                                    <text x="530" y="27" fill="#FA5674" fontSize="10" fontFamily="monospace">LIVE</text>

                                    {/* PHASE CARS - Horizontal Scroll Look */}
                                    <g transform="translate(20, 60)">
                                        {[
                                            { t: "Phase 1: Assessment", d: "Process Mapping & Goals", p: 100, c: "#10b981", i: "\uf0ca" },
                                            { t: "Phase 2: Config", d: "Routing & Work Orders", p: 75, c: "#6366f1", i: "\uf0ad" },
                                            { t: "Phase 3: Deploy", d: "Shop Floor Go-Live", p: 10, c: "#94a3b8", i: "\uf135" }
                                        ].map((card, idx) => (
                                            <g key={idx} transform={`translate(${idx * 180}, 0)`}>
                                                <rect width="160" height="100" rx="12" fill="#1e2d45" stroke={card.c} strokeOpacity="0.4" />
                                                <text x="15" y="25" fill={card.c} fontSize="10" fontWeight="bold">{card.t}</text>
                                                <text x="15" y="45" fill="#fff" fontSize="8">{card.d}</text>
                                                {/* Progress Bar */}
                                                <rect x="15" y="70" width="130" height="6" rx="3" fill="#111827" />
                                                <rect x="15" y="70" width={130 * card.p / 100} height="6" rx="3" fill={card.c} />
                                                <text x="145" y="76" textAnchor="end" fill={card.c} fontSize="7" fontFamily="monospace">{card.p}%</text>
                                            </g>
                                        ))}
                                    </g>

                                    {/* CENTRAL STATUS BOARD */}
                                    <rect x="20" y="180" width="520" height="220" rx="12" fill="#1a2235" stroke="#334155" strokeWidth="0.5" />
                                    <text x="40" y="210" fill="#94a3b8" fontSize="10" fontWeight="bold">IMPLEMENTATION VITAL SIGNS</text>
                                    
                                    {/* Implementation Graph */}
                                    <path d="M 40,360 L 100,340 L 160,300 L 220,260 L 280,240 L 340,180 L 400,200 L 500,160" fill="none" stroke="#FA5674" strokeWidth="3" className="data-pulse-line" strokeDasharray="10,5" />
                                    <text x="40" y="380" fill="#64748b" fontSize="8">Day 0</text>
                                    <text x="500" y="380" fill="#64748b" fontSize="8" textAnchor="end">Day 60</text>

                                    {/* Floating Stats */}
                                    <rect x="360" y="250" width="150" height="80" rx="10" fill="#1e3a5f" stroke="#6366f1" strokeOpacity="0.5" />
                                    <text x="375" y="275" fill="#94a3b8" fontSize="9">ESTIMATED ROI</text>
                                    <text x="375" y="300" fill="#fff" fontSize="18" fontWeight="bold">6-9 Months</text>
                                    <text x="375" y="315" fill="#10b981" fontSize="8">▲ Positive projected cashflow</text>
                                </svg>
                                {/* Floating badge */}
                                <div className="position-absolute bottom-0 end-0 m-3 bg-glass-dark border border-accent border-opacity-30 rounded-pill px-3 py-2 d-flex align-items-center gap-2">
                                    <span className="badge-dot pulse-primary"></span>
                                    <span className="text-white" style={{ fontSize: '11px' }}>Quick-Start Framework Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Traditional vs Practical Approach */}
            <section id="understanding" className="definition-section pt-100 pb-100 bg-dark-alt">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay="100ms">
                            <div className="definition-img-wrapper position-relative">
                                <div className="glow-shape-1"></div>
                                <div className="glow-shape-2"></div>
                                {/* Strategy Comparison SVG */}
                                <svg viewBox="0 0 480 380" xmlns="http://www.w3.org/2000/svg" className="w-100 rounded-5">
                                    <defs>
                                        <linearGradient id="compBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#0f172a" /><stop offset="100%" stopColor="#1a2745" /></linearGradient>
                                    </defs>
                                    <rect width="480" height="380" fill="url(#compBg)" rx="16" />
                                    
                                    {/* BOX 1: Traditional Enterprise */}
                                    <rect x="25" y="40" width="200" height="150" rx="10" fill="#1e2d45" stroke="#ef4444" strokeOpacity="0.3" />
                                    <text x="125" y="65" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="middle">TRADITIONAL MES</text>
                                    <text x="45" y="90" fill="#94a3b8" fontSize="9">● 6-12 Month Deployment</text>
                                    <text x="45" y="110" fill="#94a3b8" fontSize="9">● High Infrastructure Cost</text>
                                    <text x="45" y="130" fill="#94a3b8" fontSize="9">● Massive Operational Change</text>
                                    <text x="125" y="165" fill="#ef4444" fontSize="18" fontWeight="bold" textAnchor="middle">HIGH RISK</text>

                                    {/* BOX 2: Practical SME */}
                                    <rect x="255" y="40" width="200" height="150" rx="10" fill="#1e2d45" stroke="#10b981" strokeOpacity="0.3" />
                                    <text x="355" y="65" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">PRACTICAL MES</text>
                                    <text x="275" y="90" fill="#94a3b8" fontSize="9">● 30-60 Day Deployment</text>
                                    <text x="275" y="110" fill="#94a3b8" fontSize="9">● Cloud-Scale Low Cost</text>
                                    <text x="275" y="130" fill="#94a3b8" fontSize="9">● Minimal Disruption</text>
                                    <text x="355" y="165" fill="#10b981" fontSize="18" fontWeight="bold" textAnchor="middle">QUICK ROI</text>

                                    {/* CONNECTING GRAPH */}
                                    <rect x="25" y="210" width="430" height="130" rx="10" fill="#111827" />
                                    <text x="240" y="235" fill="#fff" fontSize="10" textAnchor="middle">The &quot;Valley of Disruption&quot; Elimination</text>
                                    <path d="M 50,320 C 150,320 150,230 240,230 C 330,230 330,320 430,320" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,2" opacity="0.4" />
                                    <path d="M 50,300 Q 240,250 430,300" fill="none" stroke="#10b981" strokeWidth="4" className="data-pulse-line" />
                                    <text x="50" y="315" fill="#94a3b8" fontSize="7">Start</text>
                                    <text x="430" y="315" fill="#94a3b8" fontSize="7" textAnchor="end">Live</text>
                                </svg>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1 wow fadeInLeft" data-wow-delay="200ms">
                            <div className="section-title text-left mb-4">
                                <span className="section-title__tagline tagline-glow">Modern Implementation Strategy</span>
                                <h2 className="section-title__title text-white">Traditional MES vs <span>Practical MES</span></h2>
                            </div>

                            <div className="text-white-50">
                                <p className="mb-4 text-highlight-premium">
                                    Why factories hesitate: Typical enterprise systems demand deep pockets, heavy infrastructure, and long deployment timelines.
                                </p>

                                <div className="tracking-grid-premium mb-4">
                                    <h4 className="text-white mb-3 text-h4-premium">The Micraft focused approach solves for:</h4>
                                    <div className="row g-3">
                                        {[
                                            { t: 'Rapid Deployment', i: 'bolt' },
                                            { t: 'Cloud Infrastructure', i: 'cloud' },
                                            { t: 'Operator-First UX', i: 'users' },
                                            { t: 'Selective Rollout', i: 'layer-group' },
                                            { t: 'ERP Co-existence', i: 'sync' },
                                            { t: 'Mobile Scaling', i: 'mobile-alt' }
                                        ].map((item, idx) => (
                                            <div key={idx} className="col-md-6">
                                                <div className="tracking-item-premium d-flex align-items-center gap-3 p-2 px-3 rounded-3">
                                                    <i className={`fas fa-${item.i} text-primary-glow`}></i>
                                                    <span className="text-white-50 small">{item.t}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <p className="mt-4 text-accent-soft fw-bold mb-0">
                                    We replace months of integration with weeks of focused process mapping and selective digital deployment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The 3-Phase Implementation Strategy */}
            <section className="why-need-monitoring pt-100 pb-100 bg-dark-depth">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <h2 className="section-title__title text-white">Our <span>3-Phase Execution Strategy</span></h2>
                        <p className="text-white-50 mt-3 max-w-2xl mx-auto">
                            A focused implementation strategy designed for mid-sized manufacturing plants to avoid disruption.
                        </p>
                    </div>
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="challenge-card p-5 rounded-4 h-100 card-challenge">
                                <h3 className="text-white mb-4"><i className="fas fa-exclamation-triangle me-2 text-danger"></i> Why Big Implementations Fail</h3>
                                <p className="text-white-50 mb-4">Traditional MES deployments often fail due to three core factors:</p>
                                <ul className="list-unstyled d-flex flex-column gap-3 text-white-50">
                                    <li className="d-flex align-items-start gap-2"><i className="fas fa-times-circle mt-1 text-danger"></i> <span>Excessive scoping: Trying to track &quot;everything&quot; at once.</span></li>
                                    <li className="d-flex align-items-start gap-2"><i className="fas fa-times-circle mt-1 text-danger"></i> <span>Operator rejection: Systems too complex for shop personnel.</span></li>
                                    <li className="d-flex align-items-start gap-2"><i className="fas fa-times-circle mt-1 text-danger"></i> <span>Integration paralysis: Stalling while waiting for ERP sync.</span></li>
                                    <li className="d-flex align-items-start gap-2"><i className="fas fa-times-circle mt-1 text-danger"></i> <span>Hidden infrastructure costs: On-prem servers & PLC cabling.</span></li>
                                    <li className="d-flex align-items-start gap-2"><i className="fas fa-times-circle mt-1 text-danger"></i> <span>Lack of clear ROI milestones during the long setup.</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="solution-card p-5 rounded-4 h-100 card-solution">
                                <h3 className="text-white mb-4"><i className="fas fa-chart-line me-2 text-success"></i> The Practical Path</h3>
                                <p className="text-white mb-4 text-medium">We deliver visibility in targeted phases, allowing the shop floor to adapt naturally without stopping production.</p>
                                <div className="rounded-4 overflow-hidden mt-4">
                                    {/* Deployment Graph SVG */}
                                    <svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" className="w-100 rounded-4">
                                        <defs>
                                            <linearGradient id="solBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#0f172a" /><stop offset="100%" stopColor="#1a2235" /></linearGradient>
                                        </defs>
                                        <rect width="420" height="200" fill="url(#solBg)" rx="10" />
                                        {/* Staircase milestones */}
                                        {[
                                            { x: 30, h: 40, lbl: "Audit", c: "#94a3b8" },
                                            { x: 130, h: 80, lbl: "Pilot", c: "#6366f1" },
                                            { x: 230, h: 120, lbl: "Rollout", c: "#FA5674" },
                                            { x: 330, h: 160, lbl: "Success", c: "#10b981" }
                                        ].map((step, i) => (
                                            <g key={i}>
                                                <rect x={step.x} y={180 - step.h} width="60" height={step.h} rx="6" fill={step.c} opacity="0.8" />
                                                <text x={step.x + 30} y="192" textAnchor="middle" fill="#fff" fontSize="8">{step.lbl}</text>
                                            </g>
                                        ))}
                                        <text x="16" y="22" fill="#FA5674" fontSize="10" fontWeight="bold">The Accelerated Go-Live Path</text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Core Implementation Elements */}
            <section className="key-components pt-100 pb-100 bg-dark-alt">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <h2 className="section-title__title text-white">Keys to <span>Successful Adoption</span></h2>
                        <p className="text-white-50 mt-3">Practical tools to ensure your shop floor teams embrace the digital transition.</p>
                    </div>
                    <div className="row g-4">
                        {[
                            { title: "Operator-First GUI", desc: "Build interfaces simple enough to learn in 15 minutes.", link: "/solutions/production-tracking-software", icon: "user-check" },
                            { title: "Selective Rollout", desc: "Deploy system on one line, solve issues, then scale.", link: "/solutions/shop-floor-visibility-software", icon: "th-large" },
                            { title: "Mobile Hardware", desc: "Utilize existing shop floor tablets/mobiles, no servers.", link: "/solutions/machine-utilization-tracking", icon: "tablet-alt" },
                            { title: "Visual Cues", desc: "Color-coded feedback for instant status understanding.", link: "/solutions/manufacturing-process-tracking", icon: "palette" },
                            { title: "No Clicks Wasted", desc: "Minimize data entry time to prioritize manufacturing.", link: "/solutions/quality-inspection-tracking", icon: "mouse-pointer" },
                            { title: "Real-Time ROI", desc: "See performance gains within the first 30 days.", link: "/solutions/digital-production-dashboard", icon: "hand-holding-usd" }
                        ].map((func, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 100}ms`}>
                                <div className="function-card p-4 rounded-4 h-100 d-flex flex-column function-card-base">
                                    <i className={`fas fa-${func.icon} fa-2x mb-3 icon-accent`}></i>
                                    <h4 className="text-white mb-2 text-h4">{func.title}</h4>
                                    <p className="text-white-50 mb-4 flex-grow-1">{func.desc}</p>
                                    <Link href={func.link} className="text-decoration-none d-flex align-items-center gap-2 link-explore">
                                        Explore Feature <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. The workflow node component style */}
            <section className="how-it-works pt-100 pb-100 bg-dark-surface">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <h2 className="section-title__title text-white">The <span>30-60 Day</span> Implementation Steps</h2>
                        <p className="text-white-50 mt-3 max-w-2xl mx-auto">
                            A structured framework that takes you from paper to real-time dashboards in weeks.
                        </p>
                    </div>
                    <div className="workflow-flow-container wow fadeInUp" data-wow-delay="200ms">
                        <div className="row g-4 justify-content-center">
                            {[
                                { t: "Process Audit", d: "Map physical floor workflows", i: "search" },
                                { t: "Gap Analysis", d: "Identify where data is lost", i: "exchange-alt" },
                                { t: "Core Setup", d: "Configure master data in MES", i: "tools" },
                                { t: "Pilot Test", d: "Live test on a single line", i: "vial" },
                                { t: "Site Rollout", d: "Full scale factory go-live", i: "rocket" }
                            ].map((step, idx) => (step &&
                                <div key={idx} className="col-lg-2-5 col-md-4 col-sm-6 text-center workflow-node-col">
                                    <div className="workflow-node-inner">
                                        <div className={`workflow-icon-box node-color-${idx % 2 === 0 ? 'primary' : 'accent'}`}>
                                            <i className={`fas fa-${step.i}`}></i>
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
                        <div className="dashboard-callout p-4 rounded-4 bg-glass-dark border border-secondary border-opacity-10 d-inline-block">
                            <p className="text-white mb-0 text-medium-weight d-flex align-items-center gap-3">
                                <i className="fas fa-tachometer-alt text-accent"></i>
                                This rapid cycle minimizes the cost of digital transformation while maximizing speed-to-value.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Operational Benefits */}
            <section className="benefits-section pt-100 pb-100 position-relative overflow-hidden">
                {/* Background Image Layer with Opacity Overlay */}
                <div className="benefits-bg-layer position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 1, pointerEvents: 'none' }}>
                    <Image
                        src="/assets/images/backgrounds/mes-localized-implementation-bg.jpg"
                        alt="MES Localized Implementation Background"
                        fill
                        priority
                        className="benefits-bg-img"
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                    <div className="benefits-bg-overlay position-absolute top-0 start-0 w-100 h-100"></div>
                </div>

                <div className="container position-relative" style={{ zIndex: 2 }}>
                    <div className="section-title text-center mb-60">
                        <div className="section-title__tagline-box justify-content-center mb-2">
                            <div className="section-title__tagline-shape-1"></div>
                            <span className="section-title__tagline">Proven Advantages</span>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title benefits-heading-title">Benefits of <span>Localized Implementation</span></h2>
                        </AnimatedTitle>
                    </div>
                    <div className="row g-4">
                        {[
                            { title: "Controlled Disruption", desc: "Shift from manual to digital without production downtime." },
                            { title: "Immediate ROI Identification", desc: "Find bottlenecks within the first two weeks of data." },
                            { title: "Higher Operator Adoption", desc: "Low-overhead GUI ensures shop floor buy-in." },
                            { title: "Lower Infrastructure Cost", desc: "Leverage existing Wi-fi and tablet assets." },
                            { title: "Scalable Lessons", desc: "Fix process issues on one line before scaling to others." },
                            { title: "Management Confidence", desc: "Prove digital ROI before making large enterprise bets." }
                        ].map((ben, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 100}ms`}>
                                <div className="benefit-card p-4 rounded-4 text-center h-100 card-benefit-inner transition-3s">
                                    <div className="icon-box mb-3 mx-auto icon-box-benefit">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <h4 className="benefit-card-title mb-2">{ben.title}</h4>
                                    <p className="benefit-card-desc small mb-0">{ben.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Industry Marquee */}
            <section className="industries-marquee-section pt-100 pb-100 bg-dark-depth overflow-hidden">
                <div className="container-fluid p-0">
                    <div className="section-title text-center mb-50">
                        <h2 className="section-title__title text-white h3">Industries Successfully <span>implementing Micraft MES</span></h2>
                        <p className="text-white-50 mt-2">Specialized implementation frameworks for complex manufacturing sectors.</p>
                    </div>

                    <div className="marquee-wrapper position-relative">
                        <div className="marquee-fade-left"></div>
                        <div className="marquee-fade-right"></div>
                        <div className="marquee-container d-flex">
                            <div className="marquee-content d-flex gap-4">
                                {[
                                    "Precision Machining", "Defense Components", "Aerospace Parts",
                                    "Sheet Metal Fabrication", "Custom Automotive", "Electronics PCB"
                                ].map((ind, i) => (
                                    <div key={i} className="industry-badge-premium py-3 px-4 rounded-pill d-flex align-items-center gap-3 bg-glass-dark border border-secondary border-opacity-10">
                                        <div className="badge-dot pulse-primary"></div>
                                        <span className="text-white small fw-bold text-nowrap">{ind}</span>
                                    </div>
                                ))}
                                {[
                                    "Precision Machining", "Defense Components", "Aerospace Parts",
                                    "Sheet Metal Fabrication", "Custom Automotive", "Electronics PCB"
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

            {/* 8. Implementation Challenge Timeline SVG */}
            <section className="challenges-section pt-100 pb-100 bg-dark-alt">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="position-relative">
                                {/* Implementation Readiness Timeline SVG */}
                                <svg viewBox="0 0 440 380" xmlns="http://www.w3.org/2000/svg" className="w-100 rounded-5">
                                    <defs>
                                        <linearGradient id="readyBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#0f172a" /><stop offset="100%" stopColor="#1e293b" /></linearGradient>
                                        <filter id="readyGlow"><feGaussianBlur stdDeviation="3" /></filter>
                                    </defs>
                                    <rect width="440" height="380" fill="url(#readyBg)" rx="16" />
                                    <text x="22" y="36" fill="#e2e8f0" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Implementation Readiness Check</text>
                                    <line x1="60" y1="60" x2="60" y2="340" stroke="#334155" strokeWidth="2" strokeDasharray="6 3" />
                                    {[
                                        { y: 70, done: true, lbl: "Leadership Buy-in", sub: "Vision aligned", clr: "#10b981" },
                                        { y: 130, done: true, lbl: "Key User Identified", sub: "Implementation champion", clr: "#10b981" },
                                        { y: 190, done: true, lbl: "Hardware Audit", sub: "Tablets/Wi-fi ready", clr: "#10b981" },
                                        { y: 250, done: false, lbl: "Data Cleansing", sub: "Pending master data", clr: "#f59e0b" },
                                        { y: 310, done: false, lbl: "Full Rollout", sub: "Target: 4 weeks", clr: "#6366f1" }
                                    ].map((item, i) => (
                                        <g key={i}>
                                            <circle cx="60" cy={item.y} r="10" fill={item.clr} filter="url(#readyGlow)" />
                                            <circle cx="60" cy={item.y} r="6" fill={item.done ? item.clr : "#1e293b"} stroke={item.clr} strokeWidth="1.5" />
                                            {item.done && <text x="57" y={item.y + 4} fill="#fff" fontSize="8">✓</text>}
                                            <rect x="84" y={item.y - 28} width="332" height="52" rx="8" fill={item.done ? "#1e3a2a" : "#1e2d45"} stroke={item.clr} strokeWidth="0.8" strokeOpacity="0.4" />
                                            <text x="100" y={item.y - 8} fill="#f1f5f9" fontSize="11" fontWeight="bold" fontFamily="sans-serif">{item.lbl}</text>
                                            <text x="100" y={item.y + 10} fill="#94a3b8" fontSize="9" fontFamily="sans-serif">{item.sub}</text>
                                            <rect x="330" y={item.y - 22} width="74" height="18" rx="9" fill={item.clr} opacity="0.15" />
                                            <text x="367" y={item.y - 9} fill={item.clr} fontSize="8" fontFamily="monospace" textAnchor="middle">{item.done ? "READY" : "PENDING"}</text>
                                        </g>
                                    ))}
                                </svg>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="section-title text-left mb-4">
                                <h2 className="section-title__title text-white">Overcoming <span>Implementation Challenges</span></h2>
                            </div>
                            <p className="text-white-50 mb-4">Common pitfalls to watch for and how Micraft bypasses them.</p>
                            <div className="signs-list d-flex flex-column gap-3 mb-4">
                                {[
                                    "Start small: Don't try to digitize the whole factory in week 1.",
                                    "Pick a Champion: Assign a supervisor to drive shop floor adoption.",
                                    "Quality over Quantity: Focus on critical data capture points first.",
                                    "Feedback Loop: Adjust system configs based on real operator live input."
                                ].map((sign, idx) => (
                                    <div key={idx} className="d-flex align-items-center gap-3 p-3 rounded-3 card-sign">
                                        <i className="fas fa-exclamation-circle text-accent"></i>
                                        <span className="text-white">{sign}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="p-4 rounded-4 bg-glass-dark border border-white border-opacity-05">
                                <p className="text-white mb-0 fw-bold d-flex align-items-center gap-3">
                                    <i className="fas fa-lightbulb text-primary-glow fa-lg"></i>
                                    A practical MES isn&apos;t a cost center—it&apos;s an operational lever that empowers your teams.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9 & 10. Digital Bridge - Role of MES */}
            <section className="mes-digital-bridge pt-100 pb-100 bg-dark-depth overflow-hidden position-relative">
                <div className="glow-shape-1" style={{ top: '20%', left: '10%', opacity: 0.2 }}></div>
                <div className="glow-shape-2" style={{ bottom: '20%', right: '10%', opacity: 0.2 }}></div>

                <div className="container position-relative z-2">
                    <div className="row justify-content-center mb-80">
                        <div className="col-lg-8 text-center wow fadeInUp">
                            <span className="tagline-glow">Digital Control Hub</span>
                            <h2 className="section-title__title text-white">How MES Connects <span>Your Implementation</span></h2>
                            <p className="text-white-50 mt-4 text-medium mx-auto" style={{ maxWidth: '700px' }}>
                                Micraft MES acts as the high-speed bridge between your existing analog processes and your future digital management.
                            </p>
                        </div>
                    </div>

                    <div className="row g-0 align-items-center position-relative">
                        {/* Phase Input */}
                        <div className="col-lg-4 px-3 wow fadeInLeft">
                            <div className="d-flex flex-column gap-4">
                                {[
                                    { t: "Process Audit", d: "Discovery & Alignment", i: "search-plus", c: "accent" },
                                    { t: "Tech Check", d: "Hardware & Network Scan", i: "wifi", c: "primary" },
                                    { t: "Pilot Launch", d: "Targeted Line Execution", i: "flask", c: "accent" }
                                ].map((source, idx) => (
                                    <div key={idx} className="bg-glass-dark p-4 rounded-4 border border-white border-opacity-05 hover-lift">
                                        <div className={`d-flex align-items-center gap-3 mb-2 text-${source.c === 'accent' ? 'accent' : 'primary-glow'}`}>
                                            <i className={`fas fa-${source.i} fs-4`}></i>
                                            <h5 className="text-white mb-0 fs-6">{source.t}</h5>
                                        </div>
                                        <p className="text-white opacity-40 small mb-0">{source.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Center: The Core Engine */}
                        <div className="col-lg-4 wow zoomIn">
                            <div className="position-relative py-5">
                                <div className="execution-engine m-auto execution-engine-wrap" style={{ width: '220px', height: '220px', position: 'relative', top: 'auto', left: 'auto', transform: 'none' }}>
                                    <div className="engine-pulse glow-pulse"></div>
                                    <div className="engine-pulse engine-pulse-slow" style={{ animationDelay: '1s', borderStyle: 'dashed' }}></div>
                                    <div className="engine-core d-flex flex-column text-center glow-pulse">
                                        <i className="fas fa-layer-group fa-spin-slow mb-2"></i>
                                        <span className="fw-bold" style={{ fontSize: '14px', letterSpacing: '2px' }}>MICRAFT</span>
                                        <span className="tiny-text opacity-100 text-white" style={{ fontSize: '10px' }}>CORE ENGINE</span>
                                    </div>
                                </div>
                                <div className="d-none d-lg-block">
                                    <div className="connector-line position-absolute" style={{ top: '50%', left: '-50px', width: '50px', transform: 'translateY(-50%)' }}>
                                        <div className="connector-pulse"></div>
                                    </div>
                                    <div className="connector-line position-absolute" style={{ top: '50%', right: '-50px', width: '50px', transform: 'translateY(-50%)' }}>
                                        <div className="connector-pulse" style={{ animationDirection: 'reverse' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Output Visibility */}
                        <div className="col-lg-4 px-3 wow fadeInRight">
                            <div className="d-flex flex-column gap-4">
                                {[
                                    { t: "Live Visibility", d: "Shop Floor Truth Revealed", i: "eye", c: "primary" },
                                    { t: "Data Driven Ops", d: "Decision Confidence", i: "chart-area", c: "accent" },
                                    { t: "Scaling Ready", d: "Enterprise Expansion", i: "expand-arrows-alt", c: "primary" }
                                ].map((output, idx) => (
                                    <div key={idx} className="bg-glass-dark p-4 rounded-4 border border-white border-opacity-05 hover-lift">
                                        <div className={`d-flex align-items-center gap-3 mb-2 text-${output.c === 'accent' ? 'accent' : 'primary-glow'}`}>
                                            <i className={`fas fa-${output.i} fs-4`}></i>
                                            <h5 className="text-white mb-0 fs-6">{output.t}</h5>
                                        </div>
                                        <p className="text-white opacity-40 small mb-0">{output.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="row mt-80 justify-content-center pt-4">
                        <div className="col-lg-12 wow fadeInUp">
                            <div className="resource-inline-cta p-4 p-md-5 rounded-4 position-relative overflow-hidden shadow-2xl">
                                {/* Ambient Background Decorative Elements */}
                                <div className="resource-cta-shape-bg position-absolute top-0 start-0 w-100 h-100" style={{ backgroundImage: "url(/assets/images/shapes/newsletter-one-shape-bg.png)", opacity: 0.15, backgroundSize: 'cover' }}></div>
                                <div className="resource-cta-glow position-absolute" style={{ top: '-40%', right: '-10%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)', filter: 'blur(30px)', pointerEvents: 'none' }}></div>
                                
                                <div className="row align-items-center position-relative" style={{ zIndex: 2 }}>
                                    <div className="col-lg-8 mb-4 mb-lg-0 text-center text-lg-start">
                                        <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(255, 255, 255, 0.18)', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
                                            <span className="badge-dot pulse-primary" style={{ background: '#7366CA', boxShadow: '0 0 8px #7366CA' }}></span>
                                            <span className="text-white text-uppercase fw-bold" style={{ fontSize: '11px', letterSpacing: '1px' }}>Accelerated 30-60 Day Deployment</span>
                                        </div>
                                        <h3 className="text-white mb-3 fw-bold" style={{ fontSize: '28px', lineHeight: 1.3 }}>
                                            Ready to Digitize Your Factory Floor?
                                        </h3>
                                        <p className="text-white mb-0 pe-lg-4" style={{ fontSize: '16px', opacity: 0.92, lineHeight: 1.6 }}>
                                            Our architecture activates shop-floor data in real time, eliminating lag between production and management without disrupting active lines.
                                        </p>
                                    </div>
                                    <div className="col-lg-4 text-center text-lg-end">
                                        <div className="d-flex flex-column flex-sm-row flex-lg-column align-items-center align-items-lg-end justify-content-center gap-3">
                                            <Link href="/contact" className="thm-btn cta-btn-white w-100 text-center" style={{ maxWidth: '280px', justifyContent: 'center' }}>
                                                Check Implementation <span className="icon-arrow-right"></span>
                                            </Link>
                                            <Link href="/solutions/production-tracking-software" className="thm-btn cta-btn-dark w-100 text-center" style={{ maxWidth: '280px', justifyContent: 'center' }}>
                                                Explore Features <span className="icon-arrow-right"></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 11. Future section */}
            <section className="future-section pt-100 pb-100 bg-dark-depth">
                <div className="container">
                    <div className="row flex-row-reverse align-items-center g-5">
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="100ms">
                            <div className="dual-image-perspective position-relative">
                                <div className="perspective-main rounded-5 overflow-hidden shadow-2xl border border-secondary border-opacity-20 p-2 bg-dark" style={{ height: '400px' }}>
                                    <Image
                                        src="/assets/images/backgrounds/EndtoEndVisibility.jpg"
                                        alt="Future of MES Deployment"
                                        width={600}
                                        height={400}
                                        className="img-fluid rounded-4 img-cover h-100"
                                    />
                                </div>
                                <div className="perspective-floating-card d-none d-md-block p-3 bg-glass-dark-heavy shadow-2xl rounded-4 border border-secondary border-opacity-20 position-absolute" style={{ top: '-30px', left: '-30px', bottom: 'auto', background: 'rgba(96, 101, 212, 0.9)' }}>
                                    <div className="d-flex align-items-center gap-3">
                                        <i className="fas fa-rocket text-white fa-2x"></i>
                                        <h5 className="text-white mb-0 small">Speed to Value</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="200ms">
                            <div className="section-title text-left mb-4">
                                <h2 className="section-title__title text-white">The Future of <span>Rapid MES Deployment</span></h2>
                            </div>
                            <p className="text-white-50 mb-4">Future-proof your factory with an implementation that grows with you.</p>

                            <div className="row g-4 mb-4">
                                {[
                                    { t: "Plug-and-Play IOT", i: "plug" },
                                    { t: "Zero-Code Workflows", i: "code-branch" },
                                    { t: "Self-Serve Training", i: "graduation-cap" },
                                    { t: "Instant ROI Analytics", i: "chart-bar" }
                                ].map((item, idx) => (
                                    <div key={idx} className="col-sm-6">
                                        <div className="p-3 rounded-4 bg-glass-dark border border-white border-opacity-05 h-100 transition-3s d-flex align-items-center gap-3">
                                            <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', background: 'rgba(96, 101, 212, 0.1)', color: '#6065D4' }}>
                                                <i className={`fas fa-${item.i}`}></i>
                                            </div>
                                            <span className="text-white small fw-bold">{item.t}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="text-white fw-bold text-medium mb-0">
                                Your process is ready for a digital future—today.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 12. Final Call to Action */}
            <FinalCTA
                title={<>Your Process, Digitized in <br /> <span>30-60 Days.</span></>}
                text="Micraft MES helps manufacturing companies successfully implement digital monitoring. Schedule a Discovery Call to see how fast we can map to your shop floor."
                buttonLabel1="Book Your Discovery Call"
            />
        </Layout>
    )
}