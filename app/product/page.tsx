import Layout from "@/components/layout/Layout"
import Breadcrumb from "@/components/layout/Breadcrumb"
import Link from "next/link"
import Image from "next/image"
import { Metadata } from 'next'
import AnimatedTitle from "@/components/elements/AnimatedTitle"
import "@/public/assets/css/module-css/micraftmeswork.css"

export const metadata: Metadata = {
    title: 'Micraft MES | Manufacturing Execution System for Real-Time Factory Control',
    description: 'Micraft MES is a real-time manufacturing execution system that provides complete visibility across production, machines, quality, and dispatch operations.',
    keywords: ['Manufacturing Execution System', 'MES Software for Manufacturing', 'Shop Floor Management System']
}

export default function ProductMicraftMesPage() {
    return (
        <Layout headerStyle={1} footerStyle={2}>

            <Breadcrumb breadcrumbTitle="Micraft MES Software" />

            {/* 1️⃣ HERO SECTION */}
            <section className="meswork-hero overflow-hidden position-relative">
                <div className="meswork-hero__glow-1"></div>
                <div className="meswork-hero__glow-2"></div>
                <div className="position-absolute float-bob-x" style={{ top: '10%', right: '5%', opacity: 0.06, zIndex: 0 }}>
                    <Image src="/assets/images/shapes/main-slider-two-shape-2.png" alt="shape" width={500} height={440} />
                </div>

                <div className="container position-relative z-1">
                    <div className="row justify-content-center">
                        <div className="col-xl-9 col-lg-10 text-center">
                            <div className="section-title text-center mb-4 wow fadeInUp" data-wow-delay="100ms">
                                <div className="section-title__tagline-box justify-content-center">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline">Manufacturing Execution System</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <AnimatedTitle>
                                    <h1 className="section-title__title title-animation mb-4" style={{ fontSize: '52px', lineHeight: '1.2' }}>
                                        Control Your Factory <br /> <span>in Real Time</span>
                                    </h1>
                                </AnimatedTitle>
                            </div>

                            <p className="wow fadeInUp mx-auto mb-5" data-wow-delay="200ms" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontSize: '18px', maxWidth: '750px', fontWeight: 500 }}>
                                Micraft MES gives manufacturers complete visibility and control across production, machines, quality, materials, and dispatch — all in one connected system. Move from manual tracking to real-time decision-making.
                            </p>

                            <div className="d-flex flex-wrap justify-content-center gap-3 wow fadeInUp" data-wow-delay="300ms">
                                <Link href="/contact" className="thm-btn">Request a Demo<span className="icon-right-arrow"></span></Link>
                                <Link href="#features" className="thm-btn" style={{ background: 'rgba(255,255,255,0.04)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)' }}>See Features<span className="icon-right-arrow"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2️⃣ PROBLEM SECTION */}
            <section className="py-5 position-relative" style={{ background: '#08111F' }}>
                <div className="container py-4 position-relative z-1">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8 text-center">
                            <div className="section-title text-center mb-4 wow fadeInUp">
                                <div className="section-title__tagline-box justify-content-center">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline">The Challenge</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white" style={{ fontSize: '36px' }}>Most Factories Operate <span>Without Real Visibility</span></h2>
                                </AnimatedTitle>
                            </div>
                            <p className="mx-auto" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: '1.8', fontSize: '16px', maxWidth: '780px' }}>
                                Manufacturing operations often rely on manual processes, disconnected systems, and delayed reporting. Without real-time data, managing production becomes reactive.
                            </p>
                        </div>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {[
                            { title: "Production Unclear", desc: "Production status is unclear across shifts", icon: "exclamation-triangle", color: "#FA5674" },
                            { title: "Untracked Downtime", desc: "Machine downtime is not tracked or analyzed", icon: "clock", color: "#FFD25D" },
                            { title: "Late Quality Checks", desc: "Quality issues are detected too late in the cycle", icon: "search", color: "#6065D4" },
                            { title: "Limited Visibility", desc: "Material visibility is limited across the floor", icon: "eye-slash", color: "#00D094" },
                            { title: "Manual Dispatch", desc: "Dispatch coordination is entirely manual", icon: "clipboard-list", color: "#3D72FC" }
                        ].map((issue, idx) => (
                            <div key={idx} className="col-lg col-md-4 col-sm-6 wow fadeInUp" data-wow-delay={`${idx * 100 + 100}ms`}>
                                <div className="meswork-glass text-center h-100" style={{ padding: '30px 20px', borderRadius: '20px' }}>
                                    <div className="d-inline-flex align-items-center justify-content-center mb-4" style={{ width: 56, height: 56, borderRadius: 14, background: `${issue.color}15`, color: issue.color }}>
                                        <i className={`fas fa-${issue.icon}`} style={{ fontSize: '24px' }}></i>
                                    </div>
                                    <h4 className="text-white mb-2" style={{ fontSize: '16px', fontWeight: 700 }}>{issue.title}</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', lineHeight: '1.5', marginBottom: 0 }}>{issue.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3️⃣ TRANSFORMATION SECTION */}
            <section className="py-5 position-relative" style={{ background: '#0B1320' }}>
                <div className="container py-4">
                    <div className="row mb-5 text-center">
                        <div className="col-12">
                            <div className="section-title">
                                <h2 className="section-title__title text-white mb-5">From Disconnected Operations to a <span>Connected Factory</span></h2>
                            </div>
                        </div>
                    </div>

                    <div className="row g-5 align-items-center wow fadeInUp">
                        {/* BEFORE */}
                        <div className="col-lg-5">
                            <div className="meswork-glass p-5 rounded-4 border border-secondary border-opacity-10 h-100 position-relative">
                                <div className="position-absolute top-0 end-0 p-4 opacity-10">
                                    <i className="fas fa-times-circle fs-1 text-danger"></i>
                                </div>
                                <h3 className="h4 fw-bold text-white mb-4 d-flex align-items-center gap-3">
                                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FA5674', boxShadow: '0 0 10px #FA5674' }}></div>
                                    Before Micraft MES
                                </h3>
                                <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                                    <li className="d-flex align-items-center gap-3 text-white-50"><i className="fas fa-minus text-danger opacity-75"></i> Manual tracking</li>
                                    <li className="d-flex align-items-center gap-3 text-white-50"><i className="fas fa-minus text-danger opacity-75"></i> No real-time visibility</li>
                                    <li className="d-flex align-items-center gap-3 text-white-50"><i className="fas fa-minus text-danger opacity-75"></i> Delayed issue detection</li>
                                    <li className="d-flex align-items-center gap-3 text-white-50"><i className="fas fa-minus text-danger opacity-75"></i> Poor coordination</li>
                                </ul>
                            </div>
                        </div>
                        {/* ARROW */}
                        <div className="col-lg-2 text-center">
                            <div className="d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: 60, height: 60, background: 'rgba(255,255,255,0.05)', color: '#FFD25D', fontSize: '24px' }}>
                                <i className="fas fa-arrow-right d-none d-lg-block"></i>
                                <i className="fas fa-arrow-down d-lg-none"></i>
                            </div>
                        </div>
                        {/* AFTER */}
                        <div className="col-lg-5">
                            <div className="meswork-glass p-5 rounded-4 border border-warning border-opacity-25 h-100 position-relative overflow-hidden">
                                <div className="position-absolute top-0 end-0" style={{ width: 150, height: 150, background: 'radial-gradient(circle, rgba(255,210,93,0.15) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}></div>
                                <h3 className="h4 fw-bold text-white mb-4 d-flex align-items-center gap-3">
                                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#00D094', boxShadow: '0 0 10px #00D094' }}></div>
                                    After Micraft MES
                                </h3>
                                <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                                    <li className="d-flex align-items-center gap-3 text-white fw-medium"><i className="fas fa-check text-success"></i> Live production tracking</li>
                                    <li className="d-flex align-items-center gap-3 text-white fw-medium"><i className="fas fa-check text-success"></i> Complete shop floor visibility</li>
                                    <li className="d-flex align-items-center gap-3 text-white fw-medium"><i className="fas fa-check text-success"></i> Faster decision-making</li>
                                    <li className="d-flex align-items-center gap-3 text-white fw-medium"><i className="fas fa-check text-success"></i> Controlled dispatch</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4️⃣ WHAT IS MICRAFT MES */}
            <section className="py-5 position-relative" style={{ background: '#070C14' }}>
                <div className="container py-4">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 order-lg-2 wow fadeInRight">
                            <div className="section-title mb-4">
                                <h2 className="section-title__title text-white">A Real-Time <span>Manufacturing Execution</span> System</h2>
                            </div>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: '1.8', marginBottom: '20px' }}>
                                Micraft MES connects all critical manufacturing operations into a single platform. It captures real-time data from the shop floor and provides visibility across production processes, enabling better planning, execution, and control.
                            </p>
                            <div className="meswork-glass p-4 rounded-3 d-flex gap-3 align-items-center mt-4 border-start border-warning border-4">
                                <i className="fas fa-info-circle text-warning fs-3"></i>
                                <p className="mb-0 text-white-50 fw-medium">Micraft MES acts as a central system for managing factory operations.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1 wow fadeInLeft">
                            <div className="meswork-img-card meswork-img-glow p-2 rounded-4">
                                <Image src="/assets/images/generated/smart_factory_digital_twin_1775557569697.png" alt="Smart Factory Platform" width={600} height={400} className="w-100 rounded-3" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5️⃣ ARCHITECTURE SECTION */}
            <section className="py-5 position-relative" style={{ background: '#08111F' }}>
                <div className="container py-4 text-center">
                    <div className="section-title mb-5 wow fadeInUp">
                        <h2 className="section-title__title text-white">One Platform Connecting Your <span>Entire Factory</span></h2>
                        <p className="mx-auto mt-3" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '16px', maxWidth: '700px' }}>
                            Micraft MES integrates machines, operators, materials, and processes into a unified system. This ensures that every stage of production is connected and visible.
                        </p>
                    </div>

                    <div className="row justify-content-center mt-5 wow zoomIn">
                        <div className="col-lg-10">
                            <div className="meswork-img-card p-3 rounded-4" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <Image src="/assets/images/generated/mes_flat_architecture.png" alt="Micraft MES Operational Architecture Diagram - Technical Infographic" width={900} height={500} className="w-100 rounded-3 shadow-lg" layout="responsive" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6️⃣ CORE CAPABILITIES */}
            <section id="features" className="py-5 position-relative" style={{ background: '#0B1320' }}>
                <div className="container py-4">
                    <div className="section-title text-center mb-5 wow fadeInUp">
                        <h2 className="section-title__title text-white">Everything You Need to <span>Run Your Factory</span></h2>
                    </div>

                    <div className="row g-4">
                        {[
                            { title: "Production Planning", desc: "Plan and schedule production efficiently.", icon: "calendar-check", color: "#3D72FC" },
                            { title: "Shop Floor Tracking", desc: "Monitor production in real time.", icon: "tasks", color: "#FA5674" },
                            { title: "Quality Management", desc: "Control quality across operations.", icon: "shield-check", color: "#00D094" },
                            { title: "Material Tracking", desc: "Track materials across production stages.", icon: "cubes", color: "#FFD25D" },
                            { title: "Traceability", desc: "Maintain complete product history.", icon: "barcode", color: "#6065D4" },
                            { title: "Machine Monitoring", desc: "Track machine performance and downtime.", icon: "cogs", color: "#FA5674" },
                            { title: "Analytics", desc: "Gain insights into production performance.", icon: "chart-line", color: "#FFD25D" },
                            { title: "Dispatch", desc: "Ensure accurate and timely shipments.", icon: "truck-loading", color: "#3D72FC" }
                        ].map((cap, i) => (
                            <div key={i} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${i * 50}ms`}>
                                <div className="meswork-glass p-4 rounded-4 h-100 transition-all text-center">
                                    <div className="d-inline-flex align-items-center justify-content-center mb-3 rounded-circle" style={{ width: 60, height: 60, background: `${cap.color}15`, color: cap.color }}>
                                        <i className={`fas fa-${cap.icon}`} style={{ fontSize: '24px' }}></i>
                                    </div>
                                    <h4 className="text-white mb-2" style={{ fontSize: '18px', fontWeight: '700' }}>{cap.title}</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', marginBottom: 0 }}>{cap.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-5">
                        <Link href="/product/mes-features" className="thm-btn" style={{ background: '#transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}>Explore Features <span className="icon-right-arrow"></span></Link>
                    </div>
                </div>
            </section>

            {/* 7️⃣ HOW MICRAFT MES WORKS (Vertical Automation Stack) */}
            <section className="py-5 py-lg-120 position-relative overflow-hidden" style={{ background: '#070C14' }}>
                {/* Background Decorations */}
                <div className="position-absolute opacity-05" style={{ top: '10%', right: '5%', zIndex: 0 }}><Image src="/assets/images/shapes/main-slider-two-shape-1.png" alt="shape" width={400} height={400} /></div>
                
                <div className="container position-relative z-1">
                    <div className="section-title text-center mb-5 pb-4 wow fadeInUp">
                        <div className="section-title__tagline-box justify-content-center">
                            <span className="section-title__tagline text-primary">OPERATIONAL LIFECYCLE</span>
                        </div>
                        <h2 className="text-white fw-bolder mt-2" style={{ fontSize: '42px' }}>Integrated Factory <span className="text-gradient-yellow">Lifecycle</span></h2>
                        <p className="mx-auto mt-3" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', maxWidth: '750px' }}>
                            Micraft MES synchronizes every critical touchpoint—from initial order planning to the final dispatch readiness—into a single, unified digital thread.
                        </p>
                    </div>

                    <div className="vertical-workflow position-relative mt-5">
                        {/* Central Connector Line */}
                        <div className="position-absolute top-0 bottom-0 start-50 translate-middle-x d-none d-lg-block" style={{ width: '2px', background: 'linear-gradient(to bottom, transparent, rgba(255,210,93,0.3) 10%, rgba(255,210,93,0.3) 90%, transparent)', zIndex: 0 }}></div>

                        <div className="row g-0">
                            {[
                                { t: "Order Planning", d: "Digital creation and scheduling of production orders.", i: "calendar-alt", side: "left" }, 
                                { t: "Material Control", d: "Real-time warehouse sync and material issue tracking.", i: "box-open", side: "right" }, 
                                { t: "Resource Sync", d: "Operator assignment and workstation setup verification.", i: "users", side: "left" }, 
                                { t: "Live Execution", d: "Real-time monitoring of machine activities and OEE.", i: "industry", side: "right" }, 
                                { t: "Quality Gate", d: "In-process digital inspection and defect management.", i: "microscope", side: "left" }, 
                                { t: "Total Traceability", d: "End-to-end component and process history logging.", i: "barcode", side: "right" }, 
                                { t: "Final QC Check", d: "Verification of finished product against specifications.", i: "clipboard-check", side: "left" }, 
                                { t: "Dispatch Ready", d: "Validated load confirmation for error-free shipping.", i: "truck", side: "right" }
                            ].map((step, idx) => (
                                <div key={idx} className="col-12 mb-5 position-relative">
                                    {/* Central Step Orb (Desktop Only) */}
                                    <div className="position-absolute start-50 top-0 translate-middle d-none d-lg-flex align-items-center justify-content-center bg-black border border-warning rounded-circle shadow-glow-sm" 
                                         style={{ width: '30px', height: '30px', zIndex: 10 }}>
                                        <div className="bg-warning rounded-circle animate-pulse" style={{ width: '10px', height: '10px' }}></div>
                                    </div>

                                    <div className={`row ${step.side === 'right' ? 'flex-lg-row-reverse' : ''} align-items-center`}>
                                        <div className="col-lg-5 wow px-5" data-wow-delay={`${idx * 100}ms`}>
                                            <div className="meswork-glass p-4 rounded-4 shadow-lg border border-white border-opacity-05 hover-glow-base transition-all">
                                                <div className="d-flex align-items-center gap-4 mb-3">
                                                    <div className="d-flex align-items-center justify-content-center bg-white bg-opacity-05 text-warning rounded-3" style={{ width: '50px', height: '50px' }}>
                                                        <i className={`fas fa-${step.i} fs-4`}></i>
                                                    </div>
                                                    <h4 className="text-white h5 fw-bold mb-0">{step.t}</h4>
                                                </div>
                                                <p className="text-white-50 small mb-0 fw-medium line-height-base">{step.d}</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 text-center d-none d-lg-block">
                                            <span className="text-warning fw-bold ls-2 small opacity-50">STEP {idx + 1}</span>
                                        </div>
                                        <div className="col-lg-5"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 8️⃣ & 9️⃣ KEY BENEFITS & INDUSTRIES — Differentiated Design */}
            <section className="py-5 py-lg-120 position-relative overflow-hidden" style={{ background: '#08111F' }}>
                {/* Visual Accent Glows */}
                <div className="position-absolute" style={{ top: '-10%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(61, 114, 252, 0.08) 0%, transparent 70%)', zIndex: 0 }}></div>
                <div className="position-absolute" style={{ bottom: '-10%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(250, 86, 116, 0.08) 0%, transparent 70%)', zIndex: 0 }}></div>

                <div className="container position-relative z-1">
                    <div className="row g-5">
                        {/* Benefits Panel — List with Accent Borders */}
                        <div className="col-lg-6 wow fadeInLeft">
                            <div className="meswork-glass p-5 rounded-4 h-100 border border-white border-opacity-05 shadow-2xl">
                                <div className="section-title text-start mb-5">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline text-primary">MEASURABLE IMPACT</span>
                                    </div>
                                    <h3 className="text-white mt-2 mb-0" style={{ fontSize: '32px', fontWeight: 800 }}>Impact on <span className="text-gradient-yellow">Operations</span></h3>
                                </div>
                                
                                <div className="d-flex flex-column gap-3">
                                    {[
                                        { t: "Real-time production visibility", i: "eye" },
                                        { t: "30% Reduction in machine downtime", i: "clock" },
                                        { t: "Instant issue & defect detection", i: "search-plus" },
                                        { t: "Unified coordination across floors", i: "users-cog" },
                                        { t: "Optimized on-time delivery (OTIF)", i: "truck-loading" }
                                    ].map((ben, i) => (
                                        <div key={i} className="benefit-item p-3 rounded-3 d-flex align-items-center gap-4 transition-all hover-glow-base" 
                                             style={{ background: 'rgba(255,255,255,0.02)', borderLeft: '4px solid #3D72FC' }}>
                                            <div className="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 text-primary rounded-circle" style={{ width: '40px', height: '40px', minWidth: '40px' }}>
                                                <i className={`fas fa-${ben.i} small`}></i>
                                            </div>
                                            <span className="text-white fw-medium" style={{ fontSize: '15px' }}>{ben.t}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Industries Panel — Creative Interactive Cards */}
                        <div className="col-lg-6 wow fadeInRight">
                            <div className="h-100 d-flex flex-column">
                                <div className="section-title text-start mb-5">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline text-warning">VERTICALS</span>
                                    </div>
                                    <h3 className="text-white mt-2 mb-0" style={{ fontSize: '32px', fontWeight: 800 }}>Built for <span className="text-gradient-yellow">Manufacturing</span></h3>
                                </div>

                                <div className="row g-4 flex-grow-1">
                                    {[
                                        { t: "Auto Components", i: "car", c: "linear-gradient(135deg, #FA5674 0%, #6065D4 100%)" },
                                        { t: "Precision Engg.", i: "cogs", c: "linear-gradient(135deg, #3D72FC 0%, #5CB0E9 100%)" },
                                        { t: "Fabrication Industry", i: "tools", c: "linear-gradient(135deg, #00D094 0%, #009D70 100%)" },
                                        { t: "Heavy Equipment", i: "industry", c: "linear-gradient(135deg, #FFD25D 0%, #FF9C2A 100%)" }
                                    ].map((ind, i) => (
                                        <div key={i} className="col-sm-6">
                                            <div className="meswork-glass p-4 rounded-4 text-center h-100 border border-white border-opacity-05 shadow-lg group hover-translate-y transition-all">
                                                <div className="icon-box mx-auto mb-4 d-flex align-items-center justify-content-center rounded-4 shadow-glow-sm" 
                                                     style={{ width: '70px', height: '70px', background: ind.c }}>
                                                    <i className={`fas fa-${ind.i} text-white fs-3`}></i>
                                                </div>
                                                <h5 className="text-white fw-bold mb-0" style={{ fontSize: '17px' }}>{ind.t}</h5>
                                                <div className="p-1 mt-3 mx-auto rounded-pill bg-white bg-opacity-05 opacity-0 group-hover-opacity-100 transition-all" style={{ width: '40px' }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🔟 WHY MICRAFT MES */}
            <section className="py-5 position-relative" style={{ background: '#0B1320' }}>
                <div className="container py-5 text-center">
                    <div className="section-title mb-5 wow fadeInUp">
                        <h2 className="section-title__title text-white">Built for Real <span>Manufacturing Operations</span></h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="d-flex flex-wrap justify-content-center gap-3 gap-md-4 wow zoomIn">
                                {[
                                    "Designed for SMEs", "Covers Production to Dispatch", "Simple for Shop Teams", "Fast Implementation", "Scalable Growth"
                                ].map((reason, i) => (
                                    <div key={i} className="px-4 py-3 rounded-pill bg-dark border border-secondary border-opacity-25 text-white-50 fw-medium shadow-sm d-flex align-items-center gap-2">
                                        <i className="fas fa-star text-warning small"></i> {reason}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 1️⃣1️⃣ CTA SECTION */}
            <section className="newsletter-one newsletter-three" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="newsletter-one__inner" style={{ background: 'linear-gradient(90deg, #FA5674 0%, #6065D4 100%)' }}>
                        <div className="newsletter-one__shape-bg" style={{ backgroundImage: "url(/assets/images/shapes/newsletter-one-shape-bg.png)" }}></div>
                        <div className="newsletter-one__img d-none d-xl-flex" style={{ position: 'absolute', right: '40px', top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}>
                            <Image src="/assets/images/backgrounds/cta.png" alt="CTA Image" width={280} height={280} />
                        </div>

                        <div className="row justify-content-center text-center">
                            <div className="col-lg-10" style={{ position: 'relative', zIndex: 5 }}>
                                <AnimatedTitle>
                                    <h2 className="text-white mb-3" style={{ fontSize: '42px', lineHeight: '1.2', fontWeight: 800 }}>See Micraft MES <br /><span>in Action</span></h2>
                                </AnimatedTitle>
                                <p className="text-white mb-5 mx-auto" style={{ maxWidth: '600px', fontSize: '16px', opacity: 0.9 }}>
                                    Understand how Micraft MES can transform your factory operations.
                                </p>
                                <div className="d-flex flex-wrap justify-content-center gap-3">
                                    <Link href="/contact" className="thm-btn" style={{ background: '#0B192C', color: '#fff' }}>Schedule a Demo <span className="icon-arrow-right"></span></Link>
                                    <Link href="/contact" className="thm-btn" style={{ background: 'transparent', border: '1px solid #fff', color: '#fff' }}>Talk to Expert <span className="icon-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    )
}
