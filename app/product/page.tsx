import Layout from "@/components/layout/Layout"
import Breadcrumb from "@/components/layout/Breadcrumb"
import Link from "next/link"
import Image from "next/image"
import { Metadata } from 'next'
import AnimatedTitle from "@/components/elements/AnimatedTitle"
import "@/public/assets/css/module-css/micraftmeswork.css"

export const metadata: Metadata = {
    alternates: {
        canonical: '/product',
    },
    title: 'Micraft MES | Manufacturing Execution System for Real-Time Factory Control',
    description: 'Micraft MES is a real-time manufacturing execution system that provides complete visibility across production, machines, quality, and dispatch operations.',
    keywords: ['Manufacturing Execution System', 'MES Software for Manufacturing', 'Shop Floor Management System']
}

export default function ProductMicraftMesPage() {
    return (
        <Layout headerStyle={1} footerStyle={2}>

            <Breadcrumb breadcrumbTitle="Micraft MES Software" />

            {/* 1️⃣ HERO SECTION */}
            <section className="meswork-hero overflow-hidden position-relative" style={{ padding: '120px 0 80px 0' }}>
                <div className="meswork-hero__glow-1"></div>
                <div className="meswork-hero__glow-2"></div>
                
                <div className="container position-relative z-1">
                    <div className="row align-items-center g-5">
                        {/* Text Content (Left) */}
                        <div className="col-lg-6">
                            <div className="section-title text-start mb-4 wow fadeInUp" data-wow-delay="100ms">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline text-primary" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px', fontWeight: 700 }}>COMPLETE MANUFACTURING EXECUTION</span>
                                </div>
                                <h1 className="section-title__title mt-3 mb-4" style={{ fontSize: '48px', lineHeight: '1.2', fontWeight: 800 }}>
                                    Control Your Factory <span className="text-gradient-yellow">in Real Time</span>
                                </h1>
                            </div>

                            <p className="wow fadeInUp mb-4" data-wow-delay="200ms" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.7', fontSize: '18px', fontWeight: 500 }}>
                                Micraft MES gives manufacturers complete visibility and control across production, machines, quality, materials, and dispatch — all in one connected system.
                            </p>
                            
                            <p className="wow fadeInUp mb-5" data-wow-delay="250ms" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px' }}>
                                Move from manual tracking to real-time decision-making.
                            </p>

                            <div className="d-flex flex-wrap gap-3 wow fadeInUp" data-wow-delay="300ms">
                                <Link href="/contact" className="thm-btn">Request A Demo<span className="icon-right-arrow"></span></Link>
                                <Link href="#features" className="thm-btn" style={{ background: 'rgba(255,255,255,0.08)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)' }}>See Features<span className="icon-right-arrow"></span></Link>
                            </div>
                        </div>
                        
                        {/* Dashboard Image (Right) */}
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="400ms">
                            <div className="position-relative p-2">
                                {/* Decorative Glow behind image */}
                                <div className="position-absolute top-50 start-50 translate-middle" style={{ width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(115, 102, 202, 0.4) 0%, transparent 60%)', zIndex: -1, filter: 'blur(40px)' }}></div>
                                
                                <div className="rounded-4 overflow-hidden shadow-2xl position-relative" style={{ border: '1px solid rgba(255,255,255,0.15)', background: '#111' }}>
                                    <Image 
                                        src="/assets/images/resources/mes-hero-dashboard.png" 
                                        alt="Micraft MES Dashboard" 
                                        width={900} 
                                        height={600} 
                                        className="w-100 h-auto" 
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2️⃣ PROBLEM SECTION */}
            <section className="py-4 position-relative meswork-dark-section">
                <div className="container py-3 position-relative z-1">
                    <div className="row justify-content-center mb-4">
                        <div className="col-lg-8 text-center">
                            <div className="section-title text-center mb-4 wow fadeInUp">
                                <div className="section-title__tagline-box justify-content-center">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline text-primary">The Challenge</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <AnimatedTitle>
                                    <h2 className="section-title__title" style={{ fontSize: '36px' }}>Most Factories Operate <span>Without Real Visibility</span></h2>
                                </AnimatedTitle>
                            </div>
                            <p className="mx-auto meswork-text" style={{ lineHeight: '1.8', fontSize: '16px', maxWidth: '780px' }}>
                                Manufacturing operations often rely on manual processes, disconnected systems, and delayed reporting. Without real-time data, managing production becomes reactive.
                            </p>
                        </div>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {[
                            { title: "Production Unclear", desc: "Production status is unclear across shifts", icon: "exclamation-triangle", color: "#FA5674" },
                            { title: "Untracked Downtime", desc: "Machine downtime is not tracked or analyzed", icon: "clock", color: "#7366CA" },
                            { title: "Late Quality Checks", desc: "Quality issues are detected too late in the cycle", icon: "search", color: "#6065D4" },
                            { title: "Limited Visibility", desc: "Material visibility is limited across the floor", icon: "eye-slash", color: "#00D094" },
                            { title: "Manual Dispatch", desc: "Dispatch coordination is entirely manual", icon: "clipboard-list", color: "#3D72FC" }
                        ].map((issue, idx) => (
                            <div key={idx} className="col-lg col-md-4 col-sm-6 wow fadeInUp" data-wow-delay={`${idx * 100 + 100}ms`}>
                                <div className="meswork-glass text-center h-100" style={{ padding: '30px 20px', borderRadius: '20px' }}>
                                    <div className="d-inline-flex align-items-center justify-content-center mb-4" style={{ width: 56, height: 56, borderRadius: 14, background: `${issue.color}15`, color: issue.color }}>
                                        <i className={`fas fa-${issue.icon}`} style={{ fontSize: '24px' }}></i>
                                    </div>
                                    <h4 className="mb-2" style={{ fontSize: '16px', fontWeight: 700 }}>{issue.title}</h4>
                                    <p style={{ fontSize: '13px', lineHeight: '1.5', marginBottom: 0 }}>{issue.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3️⃣ TRANSFORMATION SECTION */}
            <section className="transformation-section position-relative overflow-hidden meswork-gray-section" style={{ padding: '50px 0 30px 0' }}>
                {/* Decorative floating blobs */}
                <div className="position-absolute top-0 start-0" style={{ width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(250, 86, 116, 0.05) 0%, transparent 70%)', transform: 'translate(-30%, -30%)', zIndex: 0 }}></div>
                <div className="position-absolute bottom-0 end-0" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0, 208, 148, 0.05) 0%, transparent 70%)', transform: 'translate(20%, 20%)', zIndex: 0 }}></div>

                <div className="container py-4 position-relative z-1">
                    <div className="row mb-5 text-center justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center mb-4 wow fadeInUp">
                                <div className="section-title__tagline-box justify-content-center mb-3">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline text-primary">The Transformation</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <h2 className="section-title__title" style={{ fontSize: '42px', fontWeight: 800 }}>
                                    From Disconnected Operations to a <span className="text-primary">Connected Factory</span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-stretch justify-content-center g-4 mt-2 wow fadeInUp">
                        {/* BEFORE CARD */}
                        <div className="col-lg-5">
                            <div className="meswork-glass p-5 h-100 position-relative transition-all"
                                style={{
                                    border: '1px solid rgba(250, 86, 116, 0.15)',
                                    borderTop: '6px solid #FA5674'
                                }}>

                                <div className="d-flex align-items-center justify-content-between mb-4 pb-4" style={{ borderBottom: '1px dashed rgba(250, 86, 116, 0.2)' }}>
                                    <h4 className="fw-bold mb-0 d-flex align-items-center gap-3">
                                        <div className="position-relative d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', background: 'rgba(250, 86, 116, 0.1)', borderRadius: '50%' }}>
                                            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FA5674', boxShadow: '0 0 10px #FA5674' }}></div>
                                        </div>
                                        Before Micraft MES
                                    </h4>
                                    <i className="fas fa-times-circle fs-3 text-danger opacity-25"></i>
                                </div>

                                <ul className="list-unstyled d-flex flex-column gap-4 mb-0">
                                    {[
                                        "Manual tracking and paper registers",
                                        "No real-time operational visibility",
                                        "Delayed issue and defect detection",
                                        "Poor inter-department coordination"
                                    ].map((item, idx) => (
                                        <li key={idx} className="d-flex align-items-start gap-3">
                                            <div className="mt-1" style={{ width: '24px', height: '24px', background: 'rgba(250, 86, 116, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '24px' }}>
                                                <i className="fas fa-minus text-danger" style={{ fontSize: '10px' }}></i>
                                            </div>
                                            <p className="mb-0" style={{ fontSize: '16px', fontWeight: 500 }}>{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* ARROW */}
                        <div className="col-lg-2 d-flex align-items-center justify-content-center">
                            <div className="transformation-arrow position-relative d-flex align-items-center justify-content-center transition-all hover-scale"
                                style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #7366CA 0%, #3D72FC 100%)', borderRadius: '50%', boxShadow: '0 10px 30px rgba(115, 102, 202, 0.3)', color: '#FFF', zIndex: 5 }}>
                                <i className="fas fa-arrow-right fs-3 d-none d-lg-block"></i>
                                <i className="fas fa-arrow-down fs-3 d-lg-none"></i>
                                {/* Ripple rings */}
                                <div className="position-absolute w-100 h-100 rounded-circle border border-primary border-opacity-50 pulse-ring-1" style={{ animation: 'ripple 2s infinite' }}></div>
                                <div className="position-absolute w-100 h-100 rounded-circle border border-primary border-opacity-25 pulse-ring-2" style={{ animation: 'ripple 2s infinite 1s' }}></div>
                            </div>
                        </div>

                        {/* AFTER CARD */}
                        <div className="col-lg-5">
                            <div className="meswork-glass p-5 h-100 position-relative transition-all"
                                style={{
                                    border: '1px solid rgba(0, 208, 148, 0.2)',
                                    borderTop: '6px solid #00D094'
                                }}>

                                <div className="d-flex align-items-center justify-content-between mb-4 pb-4" style={{ borderBottom: '1px dashed rgba(0, 208, 148, 0.2)' }}>
                                    <h4 className="fw-bold mb-0 d-flex align-items-center gap-3">
                                        <div className="position-relative d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', background: 'rgba(0, 208, 148, 0.1)', borderRadius: '50%' }}>
                                            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#00D094', boxShadow: '0 0 10px #00D094' }}></div>
                                        </div>
                                        After Micraft MES
                                    </h4>
                                    <i className="fas fa-check-circle fs-3 text-success opacity-25"></i>
                                </div>

                                <ul className="list-unstyled d-flex flex-column gap-4 mb-0">
                                    {[
                                        "Live production tracking and metrics",
                                        "Complete shop floor visibility",
                                        "Faster, data-driven decision making",
                                        "Controlled and automated dispatch"
                                    ].map((item, idx) => (
                                        <li key={idx} className="d-flex align-items-start gap-3">
                                            <div className="mt-1" style={{ width: '24px', height: '24px', background: 'rgba(0, 208, 148, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '24px' }}>
                                                <i className="fas fa-check text-success" style={{ fontSize: '12px' }}></i>
                                            </div>
                                            <p className="mb-0" style={{ fontSize: '16px', fontWeight: 600 }}>{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* 4️⃣ WHAT IS MICRAFT MES */}
            <section className="py-3 position-relative">
                <div className="container py-3">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 order-lg-2 wow fadeInRight">
                            <div className="section-title mb-4">
                                <h2 className="section-title__title">A Real-Time <span>Manufacturing Execution</span> System</h2>
                            </div>
                            <p className="meswork-text" style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px' }}>
                                Micraft MES connects all critical manufacturing operations into a single platform. It captures real-time data from the shop floor and provides visibility across production processes, enabling better planning, execution, and control.
                            </p>
                            <div className="meswork-glass p-4 rounded-3 d-flex gap-3 align-items-center mt-4 border-start border-warning border-4">
                                <i className="fas fa-info-circle text-warning fs-3"></i>
                                <p className="mb-0 fw-medium">Micraft MES acts as a central system for managing factory operations.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1 wow fadeInLeft">
                            <Image src="/assets/images/generated/smart_factory_digital_twin_1775557569697.png" alt="Smart Factory Platform" width={600} height={400} className="w-100 rounded-4 shadow-sm" style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5️⃣ ARCHITECTURE SECTION */}
            <section className="py-4 position-relative overflow-hidden">
                {/* Background accents */}
                <div className="position-absolute" style={{ top: '20%', left: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(115, 102, 202, 0.08) 0%, transparent 70%)', zIndex: 0 }}></div>

                <div className="container py-4 position-relative z-1">
                    <div className="row align-items-center g-5">
                        {/* Left Side: Text Content */}
                        <div className="col-lg-5 wow fadeInLeft">
                            <div className="section-title text-start mb-4">
                                <div className="section-title__tagline-box mb-3">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline text-primary">Unified Architecture</span>
                                </div>
                                <h2 className="section-title__title mb-4" style={{ fontSize: '40px', lineHeight: '1.2' }}>
                                    One Platform Connecting Your <span className="text-primary">Entire Factory</span>
                                </h2>
                                <p className="mb-4 meswork-text" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                    Micraft MES integrates machines, operators, materials, and processes into a unified digital system. By bridging the gap between your enterprise ERP and the physical shop floor, it ensures that every stage of production is connected and visible in real-time.
                                </p>

                                <ul className="list-unstyled mt-4 mb-0 d-flex flex-column gap-3">
                                    <li className="d-flex align-items-center gap-3">
                                        <i className="fas fa-check-circle text-success fs-5"></i>
                                        <span className="fw-medium meswork-text">Seamless ERP & SCADA Integration</span>
                                    </li>
                                    <li className="d-flex align-items-center gap-3">
                                        <i className="fas fa-check-circle text-success fs-5"></i>
                                        <span className="fw-medium meswork-text">Direct Machine Sensor Connectivity</span>
                                    </li>
                                    <li className="d-flex align-items-center gap-3">
                                        <i className="fas fa-check-circle text-success fs-5"></i>
                                        <span className="fw-medium meswork-text">Cloud & On-Premise Deployment</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Side: Architecture Image */}
                        <div className="col-lg-6 offset-lg-1 wow fadeInRight">
                            <div className="position-relative">
                                {/* Glow effects for premium look */}
                                <div className="position-absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '90%', height: '90%', background: 'radial-gradient(circle, rgba(115, 102, 202, 0.2) 0%, transparent 70%)', filter: 'blur(50px)', zIndex: 0 }}></div>

                                <div className="position-relative z-1">
                                    <Image
                                        src="/assets/images/generated/mes_flat_architecture.png"
                                        alt="Micraft MES Operational Architecture Diagram"
                                        width={1200}
                                        height={1200}
                                        className="w-100 rounded-3 transition-all hover-scale-img"
                                        style={{ objectFit: 'contain', height: 'auto', maxHeight: '70vh' }}
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            {/* 6️⃣ CORE CAPABILITIES */}
            <section id="features" className="py-4 position-relative meswork-dark-section">
                <div className="container py-3">
                    <div className="section-title text-center mb-4 wow fadeInUp">
                        <h2 className="section-title__title">Everything You Need to <span className="text-primary">Run Your Factory</span></h2>
                    </div>

                    <div className="row g-4">
                        {[
                            { title: "Production Planning", desc: "Plan and schedule production efficiently.", icon: "calendar-check", color: "#3D72FC" },
                            { title: "Shop Floor Tracking", desc: "Monitor production in real time.", icon: "tasks", color: "#FA5674" },
                            { title: "Quality Management", desc: "Control quality across operations.", icon: "shield-check", color: "#00D094" },
                            { title: "Material Tracking", desc: "Track materials across production stages.", icon: "cubes", color: "#7366CA" },
                            { title: "Traceability", desc: "Maintain complete product history.", icon: "barcode", color: "#6065D4" },
                            { title: "Machine Monitoring", desc: "Track machine performance and downtime.", icon: "cogs", color: "#FA5674" },
                            { title: "Analytics", desc: "Gain insights into production performance.", icon: "chart-line", color: "#7366CA" },
                            { title: "Dispatch", desc: "Ensure accurate and timely shipments.", icon: "truck-loading", color: "#3D72FC" }
                        ].map((cap, i) => (
                            <div key={i} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${i * 50}ms`}>
                                <div className="meswork-glass p-4 rounded-4 h-100 transition-all text-center">
                                    <div className="d-inline-flex align-items-center justify-content-center mb-3 rounded-circle" style={{ width: 60, height: 60, background: `${cap.color}15`, color: cap.color }}>
                                        <i className={`fas fa-${cap.icon}`} style={{ fontSize: '24px' }}></i>
                                    </div>
                                    <h4 className="mb-2" style={{ fontSize: '18px', fontWeight: '700' }}>{cap.title}</h4>
                                    <p style={{ fontSize: '14px', marginBottom: 0 }}>{cap.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-5">
                        <Link href="/product/mes-features" className="thm-btn">Explore Features <span className="icon-right-arrow"></span></Link>
                    </div>
                </div>
            </section>

            {/* 7️⃣ HOW MICRAFT MES WORKS (Vertical Automation Stack) */}
            <section className="py-4 position-relative overflow-hidden meswork-gray-section">
                {/* Background Decorations */}
                <div className="position-absolute opacity-05" style={{ top: '10%', right: '5%', zIndex: 0 }}><Image src="/assets/images/shapes/main-slider-two-shape-1.png" alt="shape" width={400} height={400} /></div>

                <div className="container position-relative z-1 py-3">
                    <div className="section-title text-center mb-2 pb-0 wow fadeInUp">
                        <div className="section-title__tagline-box justify-content-center">
                            <span className="section-title__tagline text-primary">OPERATIONAL LIFECYCLE</span>
                        </div>
                        <h2 className="section-title__title fw-bolder mt-2" style={{ fontSize: '42px' }}>Integrated Factory <span className="text-primary">Lifecycle</span></h2>
                        <p className="mx-auto mt-2 meswork-text" style={{ fontSize: '16px', maxWidth: '750px' }}>
                            Micraft MES synchronizes every critical touchpoint—from initial order planning to the final dispatch readiness—into a single, unified digital thread.
                        </p>
                    </div>

                    <div className="vertical-workflow position-relative mt-2">
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
                                <div key={idx} className="col-12 mb-4 position-relative">
                                    {/* Central Step Orb (Desktop Only) */}
                                    <div className="position-absolute start-50 top-50 translate-middle d-none d-lg-flex align-items-center justify-content-center bg-black border border-warning rounded-circle shadow-glow-sm"
                                        style={{ width: '30px', height: '30px', zIndex: 10 }}>
                                        <div className="bg-warning rounded-circle animate-pulse" style={{ width: '10px', height: '10px' }}></div>
                                    </div>

                                    <div className={`row ${step.side === 'right' ? 'flex-lg-row-reverse' : ''} align-items-center`}>
                                        <div className="col-lg-5 wow px-5 position-relative" data-wow-delay={`${idx * 100}ms`}>
                                            {/* Step Card */}
                                            <div className="meswork-glass p-4 rounded-4 shadow-lg hover-glow-base transition-all position-relative" style={{ zIndex: 2 }}>
                                                <div className="d-flex align-items-center gap-4 mb-3">
                                                    <div className="d-flex align-items-center justify-content-center text-warning rounded-3 bg-dark" style={{ width: '50px', height: '50px' }}>
                                                        <i className={`fas fa-${step.i} fs-4`}></i>
                                                    </div>
                                                    <h4 className="h5 fw-bold mb-0">{step.t}</h4>
                                                </div>
                                                <p className="small mb-0 fw-medium line-height-base">{step.d}</p>
                                            </div>
                                            
                                            {/* Connector Line to Central Orb */}
                                            <div className="position-absolute top-50 d-none d-lg-block" 
                                                style={{
                                                    [step.side === 'left' ? 'right' : 'left']: '-20%',
                                                    width: 'calc(20% + 3rem)',
                                                    height: '2px', 
                                                    background: 'var(--thm-primary, #7366CA)',
                                                    opacity: 0.6,
                                                    zIndex: 0
                                                }}>
                                            </div>
                                            
                                            {/* Small Dot where line meets card */}
                                            <div className="position-absolute top-50 d-none d-lg-block rounded-circle bg-primary" 
                                                style={{
                                                    [step.side === 'left' ? 'right' : 'left']: 'calc(3rem - 4px)',
                                                    width: '8px', 
                                                    height: '8px', 
                                                    transform: 'translateY(-50%)',
                                                    zIndex: 2,
                                                    boxShadow: '0 0 10px var(--thm-primary, #7366CA)'
                                                }}>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 text-center d-none d-lg-block position-relative">
                                            {/* Move Step Text slightly below the orb */}
                                            <span className="text-warning fw-bold ls-2 small opacity-50 position-absolute start-50 translate-middle-x" style={{ top: '25px' }}>STEP {idx + 1}</span>
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
            <section className="py-4 position-relative overflow-hidden meswork-dark-section">
                {/* Visual Accent Glows */}
                <div className="position-absolute" style={{ top: '-10%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(61, 114, 252, 0.08) 0%, transparent 70%)', zIndex: 0 }}></div>
                <div className="position-absolute" style={{ bottom: '-10%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(250, 86, 116, 0.08) 0%, transparent 70%)', zIndex: 0 }}></div>

                <div className="container position-relative z-1 py-3">
                    <div className="row g-5">
                        {/* Benefits Panel — List with Accent Borders */}
                        <div className="col-lg-6 wow fadeInLeft">
                            <div className="meswork-glass p-5 rounded-4 h-100 shadow-2xl">
                                <div className="section-title text-start mb-4">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline text-primary">MEASURABLE IMPACT</span>
                                    </div>
                                    <h3 className="section-title__title mt-2 mb-0" style={{ fontSize: '32px', fontWeight: 800 }}>Impact on <span className="text-primary">Operations</span></h3>
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
                                            style={{ background: 'var(--bg-black, rgba(255,255,255,0.02))', borderLeft: '4px solid #3D72FC' }}>
                                            <div className="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 text-primary rounded-circle" style={{ width: '40px', height: '40px', minWidth: '40px' }}>
                                                <i className={`fas fa-${ben.i} small`}></i>
                                            </div>
                                            <span className="fw-medium meswork-text" style={{ fontSize: '15px' }}>{ben.t}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Industries Panel — Creative Interactive Cards */}
                        <div className="col-lg-6 wow fadeInRight">
                            <div className="h-100 d-flex flex-column">
                                <div className="section-title text-start mb-4">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline text-warning">VERTICALS</span>
                                    </div>
                                    <h3 className="section-title__title mt-2 mb-0" style={{ fontSize: '32px', fontWeight: 800 }}>Built for <span className="text-primary">Manufacturing</span></h3>
                                </div>

                                <div className="row g-4 flex-grow-1">
                                    {[
                                        { t: "Auto Components", i: "car", c: "linear-gradient(135deg, #FA5674 0%, #6065D4 100%)" },
                                        { t: "Precision Engg.", i: "cogs", c: "linear-gradient(135deg, #3D72FC 0%, #5CB0E9 100%)" },
                                        { t: "Fabrication Industry", i: "tools", c: "linear-gradient(135deg, #00D094 0%, #009D70 100%)" },
                                        { t: "Heavy Equipment", i: "industry", c: "linear-gradient(135deg, #7366CA 0%, #FF9C2A 100%)" }
                                    ].map((ind, i) => (
                                        <div key={i} className="col-sm-6">
                                            <div className="meswork-glass p-4 rounded-4 text-center h-100 shadow-lg group hover-translate-y transition-all">
                                                <div className="icon-box mx-auto mb-4 d-flex align-items-center justify-content-center rounded-4 shadow-glow-sm"
                                                    style={{ width: '70px', height: '70px', background: ind.c }}>
                                                    <i className={`fas fa-${ind.i} text-white fs-3`}></i>
                                                </div>
                                                <h5 className="fw-bold mb-0" style={{ fontSize: '17px' }}>{ind.t}</h5>
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
            <section className="py-4 position-relative meswork-dark-section">
                <div className="container py-4 text-center">
                    <div className="section-title mb-4 wow fadeInUp">
                        <h2 className="section-title__title">Built for Real <span>Manufacturing Operations</span></h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="d-flex flex-wrap justify-content-center gap-3 gap-md-4 wow zoomIn">
                                {[
                                    "Designed for SMEs", "Covers Production to Dispatch", "Simple for Shop Teams", "Fast Implementation", "Scalable Growth"
                                ].map((reason, i) => (
                                    <div key={i} className="px-4 py-3 rounded-pill shadow-sm d-flex align-items-center gap-2 meswork-glass" style={{ fontWeight: 500 }}>
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
