"use client"
import Layout from "../../components/layout/Layout"
import Breadcrumb from "../../components/layout/Breadcrumb"
import Link from "next/link"
import Image from "next/image"
import AnimatedTitle from "../../components/elements/AnimatedTitle"
import FinalCTA from "../../components/sections/home1/FinalCTA"
import CountUp from "react-countup"

export default function SuccessStoriesPage() {
    return (
        <Layout headerStyle={1} footerStyle={2}>
            <Breadcrumb breadcrumbTitle="Success Stories" />

            {/* 1. Hero Section */}
            <section className="mes-hero pt-100 pb-100 overflow-hidden bg-dark-depth position-relative" id="hero">
                <div className="about-three__shape-1 float-bob-x opacity-20"></div>
                <div className="about-three__shape-2 float-bob-y opacity-20"></div>

                <div className="container position-relative z-2">
                    <div className="row align-items-center">
                        <div className="col-lg-7 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="section-title text-left">
                                <span className="tagline-glow mb-2 d-inline-block">Real Impact</span>
                                <AnimatedTitle>
                                    <h1 className="section-title__title text-white mt-2 display-5 fw-bold">
                                        Real Results from Real <span>Manufacturing Floors</span>
                                    </h1>
                                </AnimatedTitle>
                            </div>
                            <div className="mt-4 text-white">
                                <p className="mb-4 hero-subtitle opacity-80" style={{ maxWidth: '600px', fontSize: '18px', lineHeight: '1.7' }}>
                                    Micraft MES helps manufacturers gain visibility, improve efficiency, and take control of their operations. 
                                    These success stories highlight how factories are solving real operational challenges using Micraft MES.
                                </p>
                                <div className="btn-box d-flex align-items-center gap-3">
                                    <Link href="/book-demo" className="thm-btn">Request a Demo <span className="icon-right-arrow"></span></Link>
                                    <Link href="#stories" className="btn-schedule-demo text-decoration-none d-flex align-items-center gap-3 group">
                                        <div className="icon-circle-outline transition-3s group-hover:bg-accent border border-accent rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                            <i className="fas fa-eye text-accent group-hover:text-dark fs-xs transition-3s"></i>
                                        </div>
                                        <span className="text-white fw-bold small text-uppercase tracking-widest">View Case Studies</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 wow fadeInRight" data-wow-delay="200ms">
                            <div className="hero-image-wrap-premium position-relative mt-5 mt-lg-0">
                                <div className="image-border-glow p-[2px] rounded-5 shadow-2xl" style={{ background: 'linear-gradient(135deg, var(--techguru-accent), rgba(250, 86, 116, 0.1))' }}>
                                    <div className="rounded-5 overflow-hidden position-relative" style={{ height: '380px' }}>
                                        <Image
                                            src="/assets/images/project/prodcutiondashboard.jpg"
                                            alt="Success Results Dashboard"
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

            {/* 2. Quick Impact Metrics */}
            <section id="impact" className="counter-one pt-80 pb-80">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <span className="tagline-glow">Measurable Improvements</span>
                        <h2 className="section-title__title text-white">Results with <span>Micraft MES</span></h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { val: 30, unit: "%", label: "Improvement in production visibility", icon: "eye" },
                            { val: 20, unit: "%", label: "Reduction in machine downtime", icon: "clock" },
                            { val: 25, unit: "%", label: "Faster issue identification", icon: "bolt" },
                            { val: 100, unit: "%", label: "Improved on-time order dispatch", icon: "shipping-fast", isPlus: true }
                        ].map((m, i) => (
                            <div key={i} className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`${i * 100}ms`}>
                                <div className="counter-one__single p-5 rounded-4 h-100 text-center shadow-lg transition-all" style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.borderColor = 'rgba(250,86,116,0.5)' }}
                                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}>
                                    <div className="counter-one__icon mb-4 d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '80px', height: '80px', background: 'rgba(250,86,116,0.1)', border: '1px solid rgba(250,86,116,0.2)' }}>
                                        <i className={`fas fa-${m.icon}`} style={{ fontSize: '32px', color: '#FA5674' }}></i>
                                    </div>
                                    <div className="counter-one__count-box mb-3 d-flex align-items-baseline justify-content-center gap-1">
                                        <h3 className="odometer text-white mb-0" style={{ fontSize: '56px', fontWeight: '800', lineHeight: 1 }}>
                                            <CountUp end={m.val} duration={2.5} />
                                        </h3>
                                        <span style={{ fontSize: '32px', color: '#FA5674', fontWeight: '700' }}>{m.unit}</span>
                                    </div>
                                    <p className="text-white-50 m-0 fw-bold text-uppercase tracking-wider" style={{ fontSize: '14px', letterSpacing: '1px' }}>{m.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Success Stories Grid */}
            <section id="stories" className="case-studies-preview pt-100 pb-100 bg-dark-depth">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <span className="tagline-glow">Real-World Case Studies</span>
                        <h2 className="section-title__title text-white">Real Improvements Across <span>Operations</span></h2>
                    </div>
                    <div className="row g-4">
                        {[
                            {
                                t: "Production Visibility",
                                s: "Achieving Real-Time Production Visibility",
                                c: "Production status was unclear across machines and operations.",
                                r: ["Live tracking of work orders", "Immediate visibility into production progress", "Faster decision-making on the shop floor"],
                                img: "prodcutiondashboard.jpg"
                            },
                            {
                                t: "Machine Utilization",
                                s: "Improving Machine Utilization",
                                c: "Frequent machine downtime with no visibility into causes.",
                                r: ["Better tracking of machine activity", "Reduced downtime events", "Increased machine productivity"],
                                img: "DowntimeTracking.jpg"
                            },
                            {
                                t: "Quality Control",
                                s: "Strengthening Quality Control",
                                c: "Quality issues were detected late, leading to rework.",
                                r: ["In-process quality inspections", "Early defect detection", "Reduced rejection rates"],
                                img: "InspectionQualityRecording.jpg"
                            },
                            {
                                t: "Material Visibility",
                                s: "Improving Material Tracking",
                                c: "Lack of visibility into material availability and usage.",
                                r: ["Real-time inventory tracking", "Better material planning", "Reduced production delays"],
                                img: "feat_process_monitoring.png"
                            },
                            {
                                t: "Traceability",
                                s: "Achieving Complete Production Traceability",
                                c: "Difficulty tracking product history and batch details.",
                                r: ["Full product genealogy", "Faster root cause analysis", "Improved compliance"],
                                img: "feat_factory_monitoring.png"
                            },
                            {
                                t: "Dispatch Efficiency",
                                s: "Improving Dispatch Accuracy",
                                c: "Manual dispatch processes caused errors and delays.",
                                r: ["Accurate packing verification", "Better dispatch coordination", "Improved on-time delivery"],
                                img: "DispatchTracking.jpg"
                            }
                        ].map((story, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 150}ms`}>
                                <div className="case-card-premium h-100 rounded-5 overflow-hidden bg-glass-dark border border-white border-opacity-05 hover-lift transition-5s shadow-2xl">
                                    <div className="case-card__image-wrap position-relative" style={{ height: '200px' }}>
                                        <Image
                                            src={`/assets/images/project/${story.img}`}
                                            alt={story.t}
                                            fill
                                            className="img-cover"
                                        />
                                        <div className="position-absolute top-0 start-0 m-3 z-2">
                                            <span className="badge-sector-premium px-3 py-1 rounded-pill small fw-bold text-uppercase tracking-wider shadow-lg bg-accent text-dark" style={{ fontSize: '10px' }}>
                                                {story.t}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h4 className="text-white mb-3 fw-bold" style={{ fontSize: '1.2rem' }}>{story.s}</h4>
                                        <div className="mb-3">
                                            <p className="text-accent small fw-bold mb-1 uppercase tracking-tighter">Challenge:</p>
                                            <p className="text-white-50 small mb-0">{story.c}</p>
                                        </div>
                                        <div>
                                            <p className="text-primary-glow small fw-bold mb-2 uppercase tracking-tighter">Result:</p>
                                            <ul className="list-unstyled">
                                                {story.r.map((item, i) => (
                                                    <li key={i} className="text-white opacity-80 small mb-1 d-flex align-items-start gap-2">
                                                        <i className="fas fa-check-circle text-accent mt-1"></i>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Before vs After Section */}
            <section className="before-after-section pt-100 pb-100 bg-dark-alt">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <span className="tagline-glow">The Transformation</span>
                        <h2 className="section-title__title text-white">Manual Operations to <span>Connected Manufacturing</span></h2>
                    </div>
                    <div className="row g-0 rounded-5 overflow-hidden shadow-2xl border border-white border-opacity-05">
                        <div className="col-md-6 bg-glass-dark p-5 border-end border-white border-opacity-05">
                            <div className="d-flex align-items-center gap-3 mb-4">
                                <div className="icon-circle bg-danger bg-opacity-10">
                                    <i className="fas fa-times text-danger"></i>
                                </div>
                                <h3 className="text-white mb-0 fw-bold">Before Micraft MES</h3>
                            </div>
                            <ul className="list-unstyled space-y-4">
                                {[
                                    "Manual production tracking",
                                    "No real-time visibility",
                                    "Machine downtime unknown",
                                    "Delayed issue detection",
                                    "Dispatch errors"
                                ].map((item, i) => (
                                    <li key={i} className="text-white-50 d-flex align-items-center gap-3 py-2 border-bottom border-white border-opacity-05">
                                        <span className="badge-dot bg-danger"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md-6 bg-primary-glow bg-opacity-05 p-5">
                            <div className="d-flex align-items-center gap-3 mb-4">
                                <div className="icon-circle bg-success bg-opacity-10">
                                    <i className="fas fa-check text-success"></i>
                                </div>
                                <h3 className="text-white mb-0 fw-bold">After Micraft MES</h3>
                            </div>
                            <ul className="list-unstyled space-y-4">
                                {[
                                    "Real-time production tracking",
                                    "Complete shop floor visibility",
                                    "Machine monitoring and analytics",
                                    "Faster issue resolution",
                                    "Accurate dispatch tracking"
                                ].map((item, i) => (
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

            {/* 5. Industry Impact Section */}
            <section className="industries-section pt-100 pb-100 bg-dark-depth">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <span className="tagline-glow">Industry Coverage</span>
                        <h2 className="section-title__title text-white">Used Across <span>Manufacturing Industries</span></h2>
                        <p className="text-white-50 mt-3">Micraft MES success stories span multiple industries:</p>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {[
                            { t: "Automotive Components", i: "car" },
                            { t: "Precision Engineering", i: "cog" },
                            { t: "Fabrication & Machining", i: "tools" },
                            { t: "Industrial Equipment", i: "industry" },
                            { t: "Contract Manufacturing", i: "handshake" }
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

            {/* 6. CTA Section */}
            <FinalCTA
                title={<>Start Your Factory <br /> <span>Transformation</span></>}
                text="Every factory faces challenges in visibility, coordination, and efficiency. Micraft MES helps manufacturers solve these challenges with a structured and connected system."
                buttonLabel1="Schedule a Demo"
                buttonLabel2="Talk to Expert"
            />
        </Layout>
    )
}
