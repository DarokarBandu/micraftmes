"use client"
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import AnimatedTitle from "@/components/elements/AnimatedTitle";
import Breadcrumb from "@/components/layout/Breadcrumb";

const industryList = [
    { name: "Automotive Component Mfg", link: "/industries/automotive-component-manufacturing", active: false },
    { name: "CNC & Precision Engineering", link: "/industries/cnc-machining-engineering", active: false },
    { name: "Electronics Manufacturing", link: "/industries/electronics-manufacturing", active: false },
    { name: "Metal Fabrication Industry", link: "/industries/fabrication-industry", active: false },
    { name: "Plastic Injection Molding", link: "/industries/plastic-injection-molding", active: false },
    { name: "General Manufacturing SMEs", link: "/industries/general-manufacturing-smes", active: true },
];

export default function GeneralManufacturingSMEPage() {
    return (
        <Layout
            headerStyle={1}
            footerStyle={2}
        >
            <Breadcrumb breadcrumbTitle="MES for General Manufacturing SMEs" />

            {/* 1. Hero Section */}
            <section className="services-details responsive-section-padding" style={{ background: 'radial-gradient(ellipse at left center, rgba(61, 114, 252, 0.2), var(--techguru-black) 70%)', position: 'relative', overflow: 'hidden' }}>
                <div className="services-details__shape-1"></div>
                <div className="services-details__shape-2">
                    <Image src="/assets/images/shapes/services-details-shape-2.png" alt="Hero Shape" width={1920} height={1332} style={{ opacity: 0.05 }} priority />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5">
                            <div className="services-details__left">
                                <div className="services-details__services-list-box" style={{ background: 'rgba(23, 28, 41, 0.4)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '24px' }}>
                                    <AnimatedTitle>
                                        <h3 className="services-details__services-list-title text-white">Target Industries</h3>
                                    </AnimatedTitle>
                                    <ul className="services-details__services-list list-unstyled">
                                        {industryList.map((ind, i) => (
                                            <li key={i} className={ind.active ? 'active' : ''}>
                                                <Link href={ind.link} className="text-white opacity-80 decoration-none">
                                                    {ind.name}
                                                    <span className="icon-right-arrow-2"></span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="services-details__need-help mt-4">
                                    <div className="services-details__need-help-img rounded-4 overflow-hidden border-primary-glow shadow-2xl">
                                        <Image src="/assets/images/solutions/tracking-sme-v3.png" alt="SME Manufacturing" width={356} height={450} style={{ objectFit: 'cover' }} priority />
                                        <div className="services-details__need-help-content" style={{ background: 'rgba(2, 5, 10, 0.9)', backdropFilter: 'blur(10px)' }}>
                                            <div className="services-details__need-help-bdr"></div>
                                            <AnimatedTitle>
                                                <h3 className="services-details__need-help-title text-white">Scale Today.</h3>
                                            </AnimatedTitle>
                                            <p className="services-details__need-help-number">
                                                <Link href="/book-demo" className="text-primary fw-900 letter-spacing-1">BOOK DEMO</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-7">
                            <div className="services-details__right ps-xl-5">
                                <span className="section-title__tagline text-primary uppercase letter-spacing-3 fw-bold mb-0 d-block">Integrated Production Tracking</span>
                                <AnimatedTitle>
                                    <h1 className="services-details__title-1 text-white fw-900 mb-4" style={{ fontSize: '48px', lineHeight: '1.0' }}>
                                        MES Software for <span style={{ color: '#FFD25D', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }} className="d-block">General Manufacturing SMEs</span>
                                    </h1>
                                </AnimatedTitle>
                                <h3 className="h5 text-white opacity-90 mb-4 fw-bold">Digitize shop floor operations, track production progress, and monitor machine utilization for growing factories.</h3>
                                <div className="services-details__bdr bg-primary opacity-20 my-4" style={{ height: '1px' }}></div>
                                <p className="services-details__text-1 text-white opacity-70 mb-4 lead">
                                    Micraft MES helps small and mid-sized manufacturing companies gain complete visibility of production operations. Track work orders, monitor shop floor activities, and record inspection results digitally.
                                </p>
                                <div className="d-flex flex-wrap gap-3 mb-5">
                                    <Link href="/book-demo" className="thm-btn industry-btn-gradient px-5 shadow-2xl">Schedule a Live Demo</Link>
                                    <Link href="/product/how-micraft-mes-works" className="thm-btn bg-white text-dark px-5">See How It Works</Link>
                                </div>
                                <div className="services-details__points-box p-5 rounded-5 mt-5" style={{ background: 'rgba(23, 28, 41, 0.4)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                    <AnimatedTitle><h4 className="services-details__title-2 text-white fw-bold mb-4">SME Manufacturing Challenges</h4></AnimatedTitle>
                                    <p className="services-details__text-3 text-white opacity-70 mb-4">Growing manufacturers often face critical blind spots. Without digital tracking, SMEs face:</p>
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <ul className="services-details__points-list list-unstyled">
                                                {["Limited visibility of real-time production status", "Manual work order progress tracking", "Paper-based quality inspection recording"].map((item, idx) => (
                                                    <li key={idx}>
                                                        <div className="icon">
                                                            <span className="icon-tick-inside-circle text-primary"></span>
                                                        </div>
                                                        <p className="text-white opacity-80 small mb-0">{item}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="col-xl-6">
                                            <ul className="services-details__points-list list-unstyled">
                                                {["Inefficient machine utilization monitoring", "Delays in identifying factory bottlenecks", "Inaccurate production reporting for management"].map((item, idx) => (
                                                    <li key={idx}>
                                                        <div className="icon">
                                                            <span className="icon-tick-inside-circle text-primary"></span>
                                                        </div>
                                                        <p className="text-white opacity-80 small mb-0">{item}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Production Roadmap */}
            <section className="production-journey responsive-section-padding overflow-hidden" style={{ background: 'var(--techguru-black)', position: 'relative' }}>
                <div className="section-glow-background" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', height: '100%', background: 'radial-gradient(circle at center, rgba(61, 114, 252, 0.05), transparent 70%)', zIndex: 0 }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="section-title text-center mb-3 pb-2">
                        <AnimatedTitle><h2 className="section-title__title text-white mt-3 display-4 fw-900">SME Production Logic Roadmap</h2></AnimatedTitle>
                    </div>
                    <div className="horizontal-roadmap-wrapper d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-start gap-5 gap-lg-4 mt-5 pb-5">
                        {[
                            { step: "01", title: "Order Sync", icon: "fas fa-file-invoice", desc: "Work order progress & job status" },
                            { step: "02", title: "Machine Pulse", icon: "fas fa-tachometer-alt", desc: "Utilization & equipment activity" },
                            { step: "03", title: "Output Tracking", icon: "fas fa-cubes", desc: "Live production output monitoring" },
                            { step: "04", title: "Quality Check", icon: "fas fa-clipboard-check", desc: "Inspection & quality performance" },
                            { step: "05", title: "Ready-to-Ship", icon: "fas fa-box-open", desc: "Packing & dispatch readiness" }
                        ].map((item, i, arr) => (
                            <div key={i} className="roadmap-step text-center w-100" style={{ position: 'relative' }}>
                                <div className="roadmap-icon-wrap mx-auto mb-3 d-flex align-items-center justify-content-center transition-all shadow-xl"
                                    style={{ width: '64px', height: '64px', background: 'rgba(23, 28, 41, 0.4)', border: '1px solid rgba(61, 114, 252, 0.3)', borderRadius: '20px', backdropFilter: 'blur(10px)', position: 'relative', zIndex: 5 }}>
                                    <i className={`${item.icon} text-primary fs-4`}></i>
                                    <span className="position-absolute top-100 start-50 translate-middle badge rounded-pill bg-primary" style={{ fontSize: '10px', marginTop: '-5px' }}>{item.step}</span>
                                </div>
                                <h5 className="text-white fw-bold mb-2 small">{item.title}</h5>
                                <p className="text-white-50 extra-small m-0 px-2 lh-sm mb-4 mb-lg-0" style={{ maxWidth: '200px', margin: '0 auto' }}>{item.desc}</p>
                                {i < arr.length - 1 && (<div className="roadmap-connector d-none d-lg-block position-absolute" style={{ top: '32px', left: '60%', width: '80%', height: '1px', background: 'linear-gradient(90deg, #3D72FC, transparent)', zIndex: 1 }}></div>)}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Capability Hub */}
            <section className="capabilities-hub responsive-section-padding" style={{ background: 'radial-gradient(ellipse at right center, rgba(61, 114, 252, 0.1), var(--techguru-black) 70%)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="section-title text-start mb-5">
                                <span className="section-title__tagline text-primary uppercase letter-spacing-3 fw-bold">Driving Efficiency</span>
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white mt-3 display-4 fw-900">
                                        End-to-End SME Manufacturing Hub
                                    </h2>
                                </AnimatedTitle>
                            </div>
                        </div>
                        <div className="col-xl-6 d-flex align-items-center">
                            <p className="text-white opacity-70 lead mb-0">Micraft MES is designed specifically for small and mid-sized manufacturing businesses that need practical, scalable production monitoring solutions.</p>
                        </div>
                    </div>

                    <div className="services-details__points-box-2 mt-5">
                        <div className="row">
                            <div className="col-xl-6">
                                <ul className="services-details__points-two list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-strategy"></span>
                                        </div>
                                        <div className="content">
                                            <h5 className="text-white fw-bold">Production Order Tracking</h5>
                                            <p className="text-white-50 small">Track manufacturing jobs from start to completion with 100% visibility.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-target"></span>
                                        </div>
                                        <div className="content">
                                            <h5 className="text-white fw-bold">Machine Utilization Monitoring</h5>
                                            <p className="text-white-50 small">Understand equipment productivity and idle time to maximize factory output.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xl-6">
                                <ul className="services-details__points-two list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-idea"></span>
                                        </div>
                                        <div className="content">
                                            <h5 className="text-white fw-bold">Manufacturing Process Tracking</h5>
                                            <p className="text-white-50 small">Monitor production stages across the entire manufacturing workflow in real-time.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-transparency"></span>
                                        </div>
                                        <div className="content">
                                            <h5 className="text-white fw-bold">Quality Inspection Tracking</h5>
                                            <p className="text-white-50 small">Record inspection results digitally for zero-defect output and faster audits.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Hub */}
            <section className="benefits-section responsive-section-padding" style={{ background: 'radial-gradient(circle at center, #0B192C, var(--techguru-black) 80%)' }}>
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-7">
                            <div className="section-title text-start mb-0">
                                <span className="section-title__tagline text-primary uppercase letter-spacing-3 fw-bold">Outcome Focused</span>
                                <AnimatedTitle><h2 className="section-title__title text-white mt-3 display-5 fw-900">SME Performance Benefits & Impact</h2></AnimatedTitle>
                            </div>
                        </div>
                        <div className="col-lg-5"><p className="text-white opacity-60 lead mb-0 border-start ps-4 border-primary border-3">Real-time production data enables small manufacturers to perform like enterprise-level facilities.</p></div>
                    </div>
                    <div className="row g-4 mt-4">
                        {[
                            { title: "Complete Visibility", desc: "Understand what is happening across the factory floor at any given moment.", icon: "icon-strategy" },
                            { title: "Faster Decisions", desc: "Real-time data enables quicker responses to bottlenecks or production issues.", icon: "icon-target" },
                            { title: "Improved Efficiency", desc: "Identify true bottlenecks and optimize workflows for maximum daily throughput.", icon: "icon-check-mark" },
                            { title: "Better Utilization", desc: "Improve machine and workforce productivity through objective data monitoring.", icon: "icon-tick-inside-circle" },
                            { title: "Accurate Reporting", desc: "Generate reliable production data for management reviews without paper logs.", icon: "icon-idea" },
                            { title: "Reliable Delivery", desc: "Ensure production schedules align with dispatch timelines for guaranteed delivery.", icon: "icon-transparency" }
                        ].map((ben, i) => (
                            <div key={i} className="col-lg-4 col-md-6 h-100">
                                <div className="benefit-card-premium p-5 rounded-5 transition-all text-start h-100" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)' }}>
                                    <div className="icon-wrap mb-4 d-flex align-items-center justify-content-center rounded-3 bg-primary" style={{ width: '48px', height: '48px', background: 'linear-gradient(225deg, #3D72FC 0%, #FA5674 100%)' }}><span className={`${ben.icon} text-white fs-5`}></span></div>
                                    <h4 className="text-white h5 fw-bold mb-3">{ben.title}</h4>
                                    <p className="text-white-50 small opacity-70 m-0" style={{ lineHeight: '1.6' }}>{ben.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Segments, Why Choose, Clusters */}
            <section className="segments-section responsive-section-padding" style={{ background: 'var(--techguru-black)' }}>
                <div className="container py-lg-4">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="segments-box p-5 rounded-5 h-100" style={{ background: 'linear-gradient(145deg, rgba(23,28,41,0.6) 0%, rgba(2,5,10,0.8) 100%)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <h3 className="text-white fw-bold mb-4">Supported SME Industries</h3>
                                <ul className="list-unstyled">
                                    {[
                                        "Automotive Component Manufacturing",
                                        "CNC Machining & Engineering Units",
                                        "Fabrication & Metal Processing",
                                        "Plastic Injection Molding Units",
                                        "Electronics Manufacturing Units",
                                        "General Engineering & Assembly"
                                    ].map((seg, i) => (
                                        <li key={i} className="text-white-50 mb-3 d-flex align-items-center gap-3">
                                            <div className="rounded-circle bg-primary" style={{ width: '8px', height: '8px' }}></div>
                                            {seg}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="why-box p-5 rounded-5 h-100" style={{ background: 'rgba(61, 114, 252, 0.05)', border: '1px solid rgba(61, 114, 252, 0.2)' }}>
                                <h3 className="text-white fw-bold mb-4">Why SMEs Choose Micraft</h3>
                                <p className="text-white-50 mb-4">Designed for manufacturers that need high impact with minimal complexity.</p>
                                <ul className="list-unstyled">
                                    {[
                                        "Simple and intuitive shop floor interface",
                                        "Fast deployment without complex infrastructure",
                                        "Real-time production monitoring dashboards",
                                        "Scalable platform for growing manufacturers",
                                        "Affordable digital transformation package"
                                    ].map((adv, i) => (
                                        <li key={i} className="text-white opacity-80 mb-3 d-flex align-items-center gap-3">
                                            <i className="fas fa-check-circle text-primary"></i>
                                            {adv}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="clusters-box mt-4 p-5 rounded-5 text-center" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 className="text-white fw-bold mb-4">Supporting Major Manufacturing Clusters</h3>
                        <div className="d-flex flex-wrap justify-content-center gap-4">
                            {["Pune Industrial Hub", "Chennai Mfg Ecosystem", "Bangalore Industrial Belt", "NCR Manufacturing Zone", "Gujarat Industrial Clusters"].map((cluster, i) => (
                                <div key={i} className="px-4 py-2 rounded-pill transition-all"
                                    style={{
                                        background: 'rgba(61, 114, 252, 0.08)',
                                        border: '1px solid rgba(61, 114, 252, 0.3)',
                                        color: '#fff',
                                        fontSize: '14px',
                                        fontWeight: '500'
                                    }}>
                                    {cluster}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Integration & Internal Links */}
            <section className="integration-section py-4" style={{ background: '#060A13' }}>
                <div className="container py-lg-4 text-center">
                    <h2 className="text-white fw-900 mb-5">Complete SME MES Integration</h2>
                    <p className="text-white-50 max-w-700 mx-auto mb-5">Micraft MES integrates multiple manufacturing capabilities into a single source of truth for plant management.</p>
                    <div className="row g-3 justify-content-center">
                        {[
                            { name: "Digital Production Order", link: "/solutions/production-tracking-software" },
                            { name: "SME Machine Monitoring", link: "/solutions/machine-utilization-tracking" },
                            { name: "Real-Time Factory Hub", link: "/solutions/real-time-production-monitoring" },
                            { name: "Paperless Quality Logs", link: "/solutions/quality-inspection-tracking" },
                            { name: "Shop Floor Visibility Sync", link: "/solutions/shop-floor-visibility-software" },
                            { name: "SME Packing & Logistics", link: "/solutions/packing-dispatch-tracking" }
                        ].map((link, i) => (
                            <div key={i} className="col-lg-3 col-md-4 col-sm-6">
                                <Link href={link.link} className="d-block p-3 rounded-3 text-white-50 text-decoration-none transition-all hover-bg-primary" style={{ background: 'rgba(255,255,255,0.03)', fontSize: '13px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    {link.name}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="newsletter-one newsletter-three responsive-section-padding" style={{ background: 'var(--techguru-black)' }}>
                <div className="container">
                    <div className="newsletter-one__inner" style={{ background: 'linear-gradient(90deg, #FA5674 0%, #6065D4 100%)', borderRadius: '48px', overflow: 'hidden' }}>
                        <div className="newsletter-one__shape-bg"
                            style={{ backgroundImage: "url(/assets/images/shapes/newsletter-one-shape-bg.png)" }}></div>
                        <div className="newsletter-one__shape-1 float-bob-x">
                            <Image src="/assets/images/shapes/newsletter-one-shape-1.png" alt="Decoration" width={416} height={368} priority />
                        </div>
                        <div className="newsletter-one__img">
                            <Image src="/assets/images/backgrounds/cta.png" alt="MES Visual" width={280} height={280} priority />
                        </div>

                        <div className="row justify-content-center text-center">
                            <div className="col-lg-10" style={{ position: 'relative', zIndex: 5 }}>
                                <AnimatedTitle>
                                    <h2 className="newsletter-one__title text-white mb-20 fw-900" style={{ fontSize: '42px', lineHeight: '1.2' }}>
                                        Digitize Your Manufacturing SME Factory
                                    </h2>
                                </AnimatedTitle>
                                <p className="newsletter-one__text text-white mb-40 mx-auto opacity-90" style={{ maxWidth: '750px' }}>
                                    Gain complete visibility of production, machine utilization, and shop floor performance.
                                    Schedule a demo to see how Micraft MES fits your growing facility.
                                </p>

                                <div className="cta-btns d-flex flex-wrap justify-content-center gap-4">
                                    <Link href="/book-demo" className="thm-btn shadow-2xl" style={{ background: '#0B192C', color: '#fff' }}>
                                        Start Your SME Pilot <span className="icon-arrow-right"></span>
                                    </Link>
                                    <Link href="/contact" className="thm-btn shadow-2xl" style={{ background: 'transparent', border: '1px solid #fff', color: '#fff' }}>
                                        Consultation for Factories <span className="icon-arrow-right"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .newsletter-three { padding: 30px 0 !important; }
                .newsletter-one__img {
                    position: absolute;
                    right: 40px;
                    top: 50%;
                    transform: translateY(-50%);
                    display: flex;
                    align-items: center;
                    height: auto;
                    zIndex: 2;
                }
                .italic { font-style: italic; }
                .border-primary-glow:hover { border-color: #3D72FC !important; box-shadow: 0 0 30px rgba(61,114,252,0.2) !important; }
                .thm-btn:hover { background: #fff !important; color: #0B192C !important; }
                
                .benefit-card-premium:hover {
                    background: rgba(61, 114, 252, 0.05) !important;
                    border-color: rgba(61, 114, 252, 0.3) !important;
                    transform: translateY(-5px);
                }

                /* Mobile First Heading & Padding Styles */
                .responsive-section-padding { padding-top: 50px; padding-bottom: 50px; }
                .services-details__title-1 { font-size: 48px !important; }

                @media (min-width: 992px) {
                    .roadmap-step { width: 20% !important; }
                }
                @media (max-width: 991px) {
                    .responsive-section-padding { padding-top: 35px !important; padding-bottom: 35px !important; }
                    .services-details__title-1 { font-size: 32px !important; }
                    .section-title__title { font-size: 28px !important; }
                    .display-4 { font-size: 2.2rem !important; }
                    .display-5 { font-size: 1.8rem !important; }
                    .newsletter-one__img { display: none !important; }
                    .newsletter-one__shape-1 { display: none; }
                    .horizontal-roadmap-wrapper { gap: 40px !important; }
                    .newsletter-one__title { font-size: 28px !important; }
                }
            `}</style>
        </Layout>
    )
}