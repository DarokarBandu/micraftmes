"use client"
import Layout from "../../components/layout/Layout"
import Breadcrumb from "../../components/layout/Breadcrumb"
import Link from "next/link"
import Image from "next/image"
import AnimatedTitle from "../../components/elements/AnimatedTitle"
import FinalCTA from "../../components/sections/home1/FinalCTA"

export default function WhyMicraftPage() {
    return (
        <Layout headerStyle={1} footerStyle={2}>
            <Breadcrumb breadcrumbTitle="Why Micraft" />

            {/* 1. Hero Section */}
            <section className="mes-hero pt-100 pb-100 overflow-hidden bg-dark-depth position-relative">
                <div className="about-three__shape-1 float-bob-x opacity-20"></div>
                <div className="about-three__shape-2 float-bob-y opacity-20"></div>

                <div className="container position-relative z-2">
                    <div className="row align-items-center">
                        <div className="col-lg-7 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="section-title text-left">
                                <span className="tagline-glow mb-2 d-inline-block">The Micraft Edge</span>
                                <AnimatedTitle>
                                    <h1 className="section-title__title text-white mt-2 display-5 fw-bold">
                                        Control Your Factory <span>in Real Time</span>
                                    </h1>
                                </AnimatedTitle>
                            </div>
                            <div className="mt-4 text-white">
                                <p className="mb-4 hero-subtitle opacity-80" style={{ maxWidth: '600px', fontSize: '18px', lineHeight: '1.7' }}>
                                    Micraft MES gives manufacturers complete visibility and control across production, machines, quality, materials, and dispatch — all in one connected system.
                                    Move from manual tracking to real-time decision-making.
                                </p>
                                <div className="btn-box d-flex align-items-center gap-3">
                                    <Link href="/book-demo" className="thm-btn">Request a Demo <span className="icon-right-arrow"></span></Link>
                                    <Link href="/features" className="btn-schedule-demo text-decoration-none d-flex align-items-center gap-3 group">
                                        <div className="icon-circle-outline transition-3s group-hover:bg-accent border border-accent rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                            <i className="fas fa-magic text-accent group-hover:text-dark fs-xs transition-3s"></i>
                                        </div>
                                        <span className="text-white fw-bold small text-uppercase tracking-widest">See Features</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 wow fadeInRight" data-wow-delay="200ms">
                            <div className="hero-image-wrap-premium position-relative mt-5 mt-lg-0">
                                <div className="image-border-glow p-[2px] rounded-5 shadow-2xl" style={{ background: 'linear-gradient(135deg, rgba(96, 101, 212, 0.5), rgba(250, 86, 116, 0.5))' }}>
                                    <div className="rounded-5 overflow-hidden position-relative" style={{ height: '380px' }}>
                                        <Image
                                            src="/assets/images/project/mes_3d_vector_hero.png"
                                            alt="Micraft MES Platform"
                                            fill
                                            className="img-cover shadow-2xl"
                                        />
                                        <div className="overlay-transparent"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Problem Section */}
            <section className="problem-section pt-100 pb-100 bg-dark-alt">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInLeft">
                            <div className="section-title text-left">
                                <span className="tagline-glow">Factory Blindspots</span>
                                <h2 className="section-title__title text-white">Most Factories Operate <span>Without Real Visibility</span></h2>
                            </div>
                            <div className="mt-4 text-white">
                                <p className="mb-4 opacity-80" style={{ fontSize: '18px' }}>
                                    Manufacturing operations often rely on manual processes, disconnected systems, and delayed reporting. 
                                    Without real-time data, managing production becomes reactive.
                                </p>
                                <ul className="list-unstyled space-y-4">
                                    {[
                                        "Production status is unclear",
                                        "Machine downtime is not tracked",
                                        "Quality issues are detected late",
                                        "Material visibility is limited",
                                        "Dispatch coordination is manual"
                                    ].map((item, i) => (
                                        <li key={i} className="d-flex align-items-center gap-3 py-2 border-bottom border-white border-opacity-05">
                                            <div className="icon-circle bg-danger bg-opacity-10" style={{ width: '32px', height: '32px' }}>
                                                <i className="fas fa-times text-danger small"></i>
                                            </div>
                                            <span className="opacity-80 fw-bold">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight">
                            <div className="position-relative">
                                <div className="rounded-5 overflow-hidden border border-white border-opacity-10 shadow-2xl">
                                    <Image src="/assets/images/project/DowntimeTracking.jpg" alt="Disconnected Operations" width={600} height={400} className="w-100 grayscale opacity-50" />
                                </div>
                                <div className="position-absolute top-50 start-50 translate-middle text-center p-4 bg-glass-dark rounded-4 border border-danger border-opacity-30">
                                    <i className="fas fa-exclamation-triangle text-danger fs-1 mb-3"></i>
                                    <h4 className="text-white fw-bold">Reactive Management</h4>
                                    <p className="text-white-50 small mb-0">High Rework • Low OEE • Delivery Delays</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Transformation Section (Before vs After) */}
            <section className="transformation-section pt-100 pb-100 bg-dark-depth">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <span className="tagline-glow">The Digital Shift</span>
                        <h2 className="section-title__title text-white">From Disconnected Operations to a <span>Connected Factory</span></h2>
                    </div>

                    <div className="row g-0 rounded-5 overflow-hidden shadow-2xl border border-white border-opacity-05">
                        {/* Before */}
                        <div className="col-md-6 bg-glass-dark p-5 border-end border-white border-opacity-05">
                            <div className="d-flex align-items-center gap-3 mb-4">
                                <div className="icon-circle bg-danger bg-opacity-10">
                                    <i className="fas fa-times text-danger"></i>
                                </div>
                                <h3 className="text-white mb-0 fw-bold">Before Micraft MES</h3>
                            </div>
                            <ul className="list-unstyled space-y-4">
                                {["Manual tracking", "No real-time visibility", "Delayed issue detection", "Poor coordination"].map((item, i) => (
                                    <li key={i} className="text-white-50 d-flex align-items-center gap-3 py-2 border-bottom border-white border-opacity-05">
                                        <span className="badge-dot bg-danger"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* After */}
                        <div className="col-md-6 bg-primary-glow bg-opacity-05 p-5">
                            <div className="d-flex align-items-center gap-3 mb-4">
                                <div className="icon-circle bg-success bg-opacity-10">
                                    <i className="fas fa-check text-success"></i>
                                </div>
                                <h3 className="text-white mb-0 fw-bold">After Micraft MES</h3>
                            </div>
                            <ul className="list-unstyled space-y-4">
                                {["Live production tracking", "Complete shop floor visibility", "Faster decision-making", "Controlled dispatch"].map((item, i) => (
                                    <li key={i} className="text-white d-flex align-items-center gap-3 py-2 border-bottom border-white border-opacity-05">
                                        <span className="badge-dot pulse-primary"></span>
                                        <span className="fw-bold">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. What is Micraft MES */}
            <section className="about-micraft-section pt-100 pb-100 bg-dark-alt">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="bg-glass-dark p-5 rounded-5 border border-white border-opacity-05 shadow-2xl text-center wow fadeInUp">
                                <div className="icon-circle bg-accent bg-opacity-10 mx-auto mb-4" style={{ width: '80px', height: '80px' }}>
                                    <i className="fas fa-project-diagram text-accent fs-2"></i>
                                </div>
                                <h2 className="text-white mb-4 fw-bold">A Real-Time Manufacturing Execution System</h2>
                                <p className="text-white opacity-80 mb-4 mx-auto" style={{ fontSize: '18px', maxWidth: '800px', lineHeight: '1.8' }}>
                                    Micraft MES connects all critical manufacturing operations into a single platform. It captures real-time data from the shop floor and provides visibility across production processes, enabling better planning, execution, and control.
                                </p>
                                <p className="text-accent fw-bold tracking-widest text-uppercase">Micraft MES acts as a central system for managing factory operations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Architecture Section */}
            <section className="architecture-section pt-100 pb-100 bg-dark-depth overflow-hidden">
                <div className="container">
                    <div className="section-title text-center mb-80">
                        <span className="tagline-glow">Unified Connection</span>
                        <h2 className="section-title__title text-white">One Platform Connecting Your <span>Entire Factory</span></h2>
                    </div>

                    <div className="row g-5 align-items-center">
                        <div className="col-lg-7">
                            <div className="arch-diagram-wrapper p-4 bg-glass-dark rounded-5 border border-white border-opacity-05 shadow-2xl wow fadeInLeft">
                                {/* Architecture Diagram (Stylized) */}
                                <div className="d-flex flex-column align-items-center p-4">
                                    <div className="row w-100 justify-content-between mb-5">
                                        {["Machines", "Operators"].map((item, i) => (
                                            <div key={i} className="col-auto text-center">
                                                <div className="p-3 rounded-4 bg-glass-light border border-white border-opacity-05 text-white small fw-bold text-uppercase">{item}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="pulse-container mb-5">
                                        <div className="bg-accent p-4 rounded-5 shadow-accent-glow d-flex flex-column align-items-center justify-content-center" style={{ width: '220px', height: '120px' }}>
                                            <Image src="/assets/images/logo/Micraftmeslogo.svg" alt="Micraft MES" width={160} height={50} className="brightness-0 invert mb-2" />
                                            <span className="text-dark fw-bold small uppercase tracking-widest">Digital Hub</span>
                                        </div>
                                    </div>
                                    <div className="row w-100 justify-content-between">
                                        {["Materials", "Processes"].map((item, i) => (
                                            <div key={i} className="col-auto text-center">
                                                <div className="p-3 rounded-4 bg-glass-light border border-white border-opacity-05 text-white small fw-bold text-uppercase">{item}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 wow fadeInRight">
                            <div className="ps-lg-4">
                                <h3 className="text-white mb-4 fw-bold">The Connected Ecosystem</h3>
                                <p className="text-white-50 mb-4" style={{ fontSize: '17px' }}>
                                    Micraft MES integrates machines, operators, materials, and processes into a unified system.
                                    This ensures that every stage of production is connected and visible.
                                </p>
                                <div className="d-flex align-items-center gap-3 p-4 rounded-4 bg-primary-glow bg-opacity-05 border border-white border-opacity-05">
                                    <i className="fas fa-microchip text-accent fs-3"></i>
                                    <p className="text-white small fw-bold mb-0">Bridging the gap between the shop floor and management.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .arch-diagram-wrapper { position: relative; }
                    .pulse-container { position: relative; }
                    .shadow-accent-glow { box-shadow: 0 0 30px rgba(250, 86, 116, 0.3); }
                `}</style>
            </section>

            {/* 6. Core Capabilities */}
            <section className="capabilities-section pt-100 pb-100 bg-dark-alt">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <span className="tagline-glow">Full Stack Capabilities</span>
                        <h2 className="section-title__title text-white">Everything You Need to <span>Run Your Factory</span></h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { t: "Production Planning", d: "Plan and schedule production efficiently.", i: "calendar-alt" },
                            { t: "Shop Floor Tracking", d: "Monitor production in real time.", i: "video" },
                            { t: "Quality Management", d: "Control quality across operations.", i: "shield-alt" },
                            { t: "Material Tracking", d: "Track materials across production stages.", i: "box-open" },
                            { t: "Traceability", d: "Maintain complete product history.", i: "fingerprint" },
                            { t: "Machine Monitoring", d: "Track machine performance and downtime.", i: "cogs" },
                            { t: "Analytics", d: "Gain insights into production performance.", i: "chart-line" },
                            { t: "Dispatch", d: "Ensure accurate and timely shipments.", i: "truck" }
                        ].map((cap, i) => (
                            <div key={i} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${i * 50}ms`}>
                                <div className="p-4 rounded-5 bg-glass-dark border border-white border-opacity-05 h-100 transition-3s shadow-2xl hover-lift">
                                    <div className="icon-bg-shop mb-3 p-3 rounded bg-accent bg-opacity-10 d-inline-block">
                                        <i className={`fas fa-${cap.i} text-accent fs-4`}></i>
                                    </div>
                                    <h5 className="text-white mb-2 fw-bold">{cap.t}</h5>
                                    <p className="text-white-50 small mb-0">{cap.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-5">
                        <Link href="/features" className="thm-btn">Explore Features <span className="icon-right-arrow"></span></Link>
                    </div>
                </div>
            </section>

            {/* 7. How Micraft MES Works */}
            <section className="workflow-link-section pt-100 pb-100 bg-dark-depth">
                <div className="container text-center">
                    <div className="section-title mb-60">
                        <span className="tagline-glow">From Planning to Dispatch</span>
                        <h2 className="section-title__title text-white">Fully <span>Connected Pipeline</span></h2>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                        {[
                            "Production Planning", "Shop Floor Execution", "Quality Control", 
                            "Material Tracking", "Traceability", "Machine Monitoring", 
                            "Analytics", "Dispatch"
                        ].map((step, i) => (
                            <div key={i} className="d-flex align-items-center gap-3">
                                <div className="px-4 py-2 rounded-pill bg-glass-dark border border-white border-opacity-10 text-white small fw-bold">{step}</div>
                                {i < 7 && <i className="fas fa-chevron-right text-accent opacity-50"></i>}
                            </div>
                        ))}
                    </div>
                    <p className="text-white-50 mt-5 opacity-70">This workflow ensures seamless coordination across all operations.</p>
                </div>
            </section>

            {/* 8. Key Benefits */}
            <section id="benefits" className="benefits-section pt-100 pb-100 bg-dark-alt">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 order-2 order-lg-1 wow fadeInLeft">
                            <div className="rounded-5 overflow-hidden border border-white border-opacity-10 shadow-2xl">
                                <Image src="/assets/images/project/prodcutiondashboard.jpg" alt="Impact Dashboard" width={600} height={400} className="w-100" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 wow fadeInRight">
                            <div className="section-title text-left mb-4">
                                <span className="tagline-glow">Strategic ROI</span>
                                <h2 className="section-title__title text-white">Measurable Impact on <span>Operations</span></h2>
                            </div>
                            <ul className="list-unstyled space-y-4">
                                {[
                                    "Real-time production visibility",
                                    "Reduced machine downtime",
                                    "Faster issue detection",
                                    "Improved coordination across teams",
                                    "Better on-time delivery performance"
                                ].map((benefit, i) => (
                                    <li key={i} className="d-flex align-items-center gap-3 py-2 text-white">
                                        <div className="icon-bg-shop p-1 rounded-circle bg-success bg-opacity-10">
                                            <i className="fas fa-check text-success small"></i>
                                        </div>
                                        <span className="fw-bold">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Industries Section */}
            <section className="industries-section pt-100 pb-100 bg-dark-depth">
                <div className="container text-center">
                    <div className="section-title mb-60">
                        <span className="tagline-glow">Built for scale</span>
                        <h2 className="section-title__title text-white">Manufacturing <span>Focus</span></h2>
                    </div>
                    <div className="row g-4 justify-content-center text-left">
                        {[
                            { t: "Automotive Components", i: "car", l: "/industries/automotive" },
                            { t: "Precision Engineering", i: "cog", l: "/industries/precision" },
                            { t: "Fabrication & Machining", i: "tools", l: "/industries/fabrication" },
                            { t: "Industrial Equipment", i: "industry", l: "/industries/industrial" },
                            { t: "Contract Manufacturing", i: "handshake", l: "/industries/contract" }
                        ].map((ind, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 100}ms`}>
                                <div className="p-4 rounded-4 bg-glass-dark border border-white border-opacity-05 d-flex align-items-center gap-4 hover-lift transition-3s h-100">
                                    <div className="icon-bg-shop p-3 rounded" style={{ background: 'rgba(96, 101, 212, 0.1)' }}>
                                        <i className={`fas fa-${ind.i} text-primary-glow fs-4`}></i>
                                    </div>
                                    <h5 className="text-white mb-0 fs-6 fw-bold">{ind.t}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. Why Micraft MES (Value Prop) */}
            <section className="why-value-section pt-100 pb-100 bg-dark-alt position-relative overflow-hidden">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <span className="tagline-glow">The Micraft Advantage</span>
                        <h2 className="section-title__title text-white">Built for Real <span>Manufacturing Operations</span></h2>
                        <p className="text-white-50 mt-3 mx-auto" style={{ maxWidth: '600px' }}>Digitization simplified specifically for shop floor environments and growing manufacturing teams.</p>
                    </div>

                    <div className="bento-grid">
                        <div className="row g-4">
                            {/* Flagship Card - Massive Impact */}
                            <div className="col-lg-8 wow fadeInUp" data-wow-delay="100ms">
                                <div className="bento-card bento-card--flagship p-5 rounded-5 overflow-hidden h-100 position-relative border border-white border-opacity-10 shadow-2xl group">
                                    <Image 
                                        src="/assets/images/project/mes_real_overview.png" 
                                        alt="Micraft MES Hub" 
                                        fill 
                                        className="img-cover opacity-10 transition-5s group-hover:scale-105" 
                                    />
                                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-r from-accent to-transparent opacity-40 z-0"></div>
                                    <div className="position-relative z-1 d-flex flex-column justify-content-center h-100">
                                        <div className="icon-badge mb-4 d-inline-block px-3 py-1 bg-accent bg-opacity-20 text-accent rounded-pill small fw-bold uppercase tracking-widest text-[10px]">Flagship Platform</div>
                                        <h3 className="text-white display-5 fw-black mb-4 title-animation">Digitization Simplified <br /><span>for the Shop Floor</span></h3>
                                        <p className="text-white-50 fw-medium" style={{ fontSize: '18px', maxWidth: '500px' }}>
                                            The only platform that bridges the gap between complex planning and actual shop floor execution with zero complexity.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Secondary Square Card */}
                            <div className="col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                                <div className="bento-card p-5 rounded-5 bg-glass-dark border border-white border-opacity-10 h-100 d-flex flex-column justify-content-between transition-3s hover-lift shadow-2xl">
                                    <div className="icon-circle-outline border border-accent rounded-circle d-flex align-items-center justify-content-center mb-4" style={{ width: '60px', height: '60px' }}>
                                        <i className="fas fa-users-cog text-accent fs-4"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-white fw-bold mb-3">Designed for SMEs</h4>
                                        <p className="text-white-50 small mb-0">Specifically built for manufacturing small and medium enterprises where agility is key.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Row 2 - Three Columns */}
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="bento-card p-4 rounded-5 bg-dark-depth border border-white border-opacity-05 h-100 hover-lift transition-3s shadow-xl">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <i className="fas fa-layer-group text-primary-glow fs-4"></i>
                                        <h5 className="text-white mb-0 fw-bold">End-to-End Coverage</h5>
                                    </div>
                                    <p className="text-white-50 small mb-0">Covers everything from production to dispatch in one unified system.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div className="bento-card p-4 rounded-5 bg-dark-depth border border-white border-opacity-05 h-100 hover-lift transition-3s shadow-xl">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <i className="fas fa-bolt text-warning fs-4"></i>
                                        <h5 className="text-white mb-0 fw-bold">Fast Implementation</h5>
                                    </div>
                                    <p className="text-white-50 small mb-0">Get up and running in weeks, not months, with our streamlined boarding.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="500ms">
                                <div className="bento-card p-4 rounded-5 bg-primary-glow bg-opacity-05 border border-accent border-opacity-20 h-100 hover-lift transition-3s shadow-xl">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <i className="fas fa-chart-line text-accent fs-4"></i>
                                        <h5 className="text-white mb-0 fw-bold">Fully Scalable</h5>
                                    </div>
                                    <p className="text-white-50 small mb-0">Grows effortlessly with your operations as you expand your global factory reach.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .bento-card--flagship {
                        min-height: 400px;
                        background: rgba(255,255,255,0.02);
                    }
                    .bento-card {
                        position: relative;
                        z-index: 1;
                    }
                `}</style>
            </section>

            {/* 11. CTA Section */}
            <FinalCTA
                title={<>See Micraft MES <br /> <span>in Action</span></>}
                text="Understand how Micraft MES can transform your factory operations. Schedule a live demo today."
                buttonLabel1="Schedule a Demo"
                buttonLabel2="Talk to Expert"
            />
        </Layout>
    )
}
