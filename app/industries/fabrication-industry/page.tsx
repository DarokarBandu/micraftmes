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
    { name: "Metal Fabrication Industry", link: "/industries/fabrication-industry", active: true },
    { name: "Plastic Injection Molding", link: "/industries/plastic-injection-molding", active: false },
    { name: "General Manufacturing SMEs", link: "/industries/general-manufacturing-smes", active: false },
];

export default function FabricationIndustryPage() {
    return (
        <Layout
            headerStyle={1}
            footerStyle={2}
        >
            <Breadcrumb breadcrumbTitle="MES for Fabrication Industry" />

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
                                        <h3 className="services-details__services-list-title text-white" style={{ lineHeight: '1.1' }}>Target Industries</h3>
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
                                        <Image src="/assets/images/solutions/manufacturing-process-hero-1775021166547.png" alt="Fabrication Manufacturing" width={356} height={450} style={{ objectFit: 'cover', width: '100%', height: 'auto' }} priority />
                                        <div className="services-details__need-help-content" style={{ background: 'rgba(2, 5, 10, 0.9)', backdropFilter: 'blur(10px)' }}>
                                            <div className="services-details__need-help-bdr"></div>
                                            <AnimatedTitle>
                                                <h3 className="services-details__need-help-title text-white" style={{ lineHeight: '1.1' }}>Scale Today.</h3>
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
                                        MES Software for <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }} className="d-block">Fabrication Industry</span>
                                    </h1>
                                </AnimatedTitle>
                                <h3 className="h5 text-white opacity-90 mb-4 fw-bold">Digitize shop floor operations and gain real-time visibility of cutting, bending, welding, and assembly processes.</h3>
                                <div className="services-details__bdr bg-primary opacity-20 my-4" style={{ height: '1px' }}></div>
                                <p className="services-details__text-1 text-white opacity-70 mb-4 lead">
                                    Micraft MES helps fabrication companies monitor production progress, track job orders, manage inspection processes, and improve delivery performance through real-time shop floor visibility.
                                </p>
                                <div className="d-flex flex-wrap gap-3 mb-5">
                                    <Link href="/book-demo" className="thm-btn industry-btn-gradient px-5 shadow-2xl">Schedule a Live Demo</Link>
                                    <Link href="/product/how-micraft-mes-works" className="thm-btn bg-white text-dark px-5">See How It Works</Link>
                                </div>
                                <div className="services-details__points-box p-5 rounded-5 mt-5" style={{ background: 'rgba(23, 28, 41, 0.4)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                    <AnimatedTitle><h4 className="services-details__title-2 text-white fw-bold mb-4" style={{ lineHeight: '1.1' }}>Fabrication Shop Challenges</h4></AnimatedTitle>
                                    <p className="services-details__text-3 text-white opacity-70 mb-4">Custom jobs often lead to critical blind spots. Without digital tracking, shops face:</p>
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <ul className="services-details__points-list list-unstyled">
                                                {["Difficulty tracking job progress across stages", "Limited visibility between cutting and finishing", "Manual job tracking using whiteboards"].map((item, idx) => (
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
                                                {["Workflow bottlenecks causing delivery delays", "Quality inspection results recorded manually", "Limited real-time reporting for management"].map((item, idx) => (
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

            {/* Fabrication Flow Roadmap */}
            <section className="production-journey responsive-section-padding overflow-hidden" style={{ background: 'var(--techguru-black)', position: 'relative' }}>
                <div className="section-glow-background" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', height: '100%', background: 'radial-gradient(circle at center, rgba(61, 114, 252, 0.05), transparent 70%)', zIndex: 0 }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="section-title text-center mb-3 pb-2">
                        <AnimatedTitle><h2 className="section-title__title text-white mt-3 display-4 fw-900" style={{ lineHeight: '1.1' }}>Fabrication Flow Logic Roadmap</h2></AnimatedTitle>
                    </div>
                    <div className="horizontal-roadmap-wrapper d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-start gap-5 gap-lg-4 mt-5 pb-5">
                        {[
                            { step: "01", title: "Cutting & Laser", icon: "fas fa-cut", desc: "Sheet metal cutting & prep" },
                            { step: "02", title: "Bending / Form", icon: "fas fa-layer-group", desc: "Precision CNC bending ops" },
                            { step: "03", title: "Welding Phase", icon: "fas fa-fire", desc: "Digital weld-tracking & QC" },
                            { step: "04", title: "Surface Finish", icon: "fas fa-fill-drip", desc: "Coating and final polish" },
                            { step: "05", title: "Job Dispatch", icon: "fas fa-shipping-fast", desc: "Serialized release & shipment" }
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
                                    <h2 className="section-title__title text-white mt-3 display-4 fw-900" style={{ lineHeight: '1.1' }}>
                                        End-to-End Metal Fabrication Hub
                                    </h2>
                                </AnimatedTitle>
                            </div>
                        </div>
                        <div className="col-xl-6 d-flex align-items-center">
                            <p className="text-white opacity-70 lead mb-0">Micraft MES provide full job-shop visibility across custom fabrication stages, ensuring material and labor efficiency.</p>
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
                                            <h5 className="text-white fw-bold">Job Shop Flow Tracking</h5>
                                            <p className="text-white-50 small">Track unique custom jobs through every work center from CAD to dispatch.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-target"></span>
                                        </div>
                                        <div className="content">
                                            <h5 className="text-white fw-bold">Material Batch Linking</h5>
                                            <p className="text-white-50 small">Link sheet metal heat codes and plate batches to specific customer projects.</p>
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
                                            <h5 className="text-white fw-bold">Welding Quality Logs</h5>
                                            <p className="text-white-50 small">Digitally record weld inspections and NDT results against specific job weldments.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-transparency"></span>
                                        </div>
                                        <div className="content">
                                            <h5 className="text-white fw-bold">Cutting Efficiency Monitoring</h5>
                                            <p className="text-white-50 small">Track laser and plasma uptime to identify nozzle or nest optimization opportunities.</p>
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
                                <AnimatedTitle><h2 className="section-title__title text-white mt-3 display-5 fw-900" style={{ lineHeight: '1.1' }}>Industrial Shop Performance Impact</h2></AnimatedTitle>
                            </div>
                        </div>
                        <div className="col-lg-5"><p className="text-white opacity-60 lead mb-0 border-start ps-4 border-primary border-3">High-fidelity job tracking for zero-defect fabrication manufacturing operations.</p></div>
                    </div>
                    <div className="row g-4 mt-4">
                        {[
                            { title: "Material Yield", desc: "Maximize sheet metal usage and reduce scrap through analyzed cutting data.", icon: "icon-strategy" },
                            { title: "Better Coordination", desc: "Improve communication between departments, cutting teams, and welding stalls.", icon: "icon-target" },
                            { title: "Reduced Latency", desc: "Identify and eliminate bottlenecks earlier in the fabrication workflow for faster output.", icon: "icon-check-mark" },
                            { title: "Process Visibility", desc: "Track every fabrication job from laser to final box with 100% data accuracy.", icon: "icon-tick-inside-circle" },
                            { title: "Reliable Reporting", desc: "Access high-fidelity production data to make informed management decisions daily.", icon: "icon-idea" },
                            { title: "Predictable Delivery", desc: "Ensure every fabrication project is completed and dispatched exactly on time.", icon: "icon-transparency" }
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
                <div className="container py-lg-5">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="segments-box p-5 rounded-5 h-100" style={{ background: 'linear-gradient(145deg, rgba(23,28,41,0.6) 0%, rgba(2,5,10,0.8) 100%)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <h3 className="text-white fw-bold mb-4">Ideal for Fabrication Segments</h3>
                                <ul className="list-unstyled">
                                    {[
                                        "Structural Steel Fabrication",
                                        "Custom Sheet Metal Enclosures",
                                        "Industrial Tank & Vessel Mfg",
                                        "Automotive Chassis & Framing",
                                        "Heavy Machinery Components",
                                        "Modular Process Skids"
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
                                <h3 className="text-white fw-bold mb-4">Why Job Shops Choose Micraft</h3>
                                <p className="text-white-50 mb-4">Custom fabrication needs flexibility. We provide the digital backbone for varied jobs.</p>
                                <ul className="list-unstyled">
                                    {[
                                        "Fast set up for unique one-off jobs",
                                        "Visual tracking of multi-stage progress",
                                        "Mobile-friendly shop floor interface",
                                        "Digital traveler and document storage",
                                        "Real-time productivity dashboards"
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

                    <div className="clusters-box mt-5 p-5 rounded-5 text-center" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 className="text-white fw-bold mb-4">Supporting Major Fabrication Clusters</h3>
                        <div className="d-flex flex-wrap justify-content-center gap-4">
                            {["MIDC Pune Region", "Peenya Industrial (Bangalore)", "Faridabad Ind. Cluster", "Jamshedpur Steel Hub", "Vadodara Fab-Cluster"].map((cluster, i) => (
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
            <section className="integration-section py-5" style={{ background: '#060A13' }}>
                <div className="container py-lg-5 text-center">
                    <h2 className="text-white fw-900 mb-5">Complete Fabrication MES Integration</h2>
                    <p className="text-white-50 max-w-700 mx-auto mb-5">Micraft MES integrates multiple manufacturing capabilities into a single source of truth for plant management.</p>
                    <div className="row g-3 justify-content-center">
                        {[
                            { name: "Metal Process Tracking", link: "/solutions/manufacturing-process-tracking" },
                            { name: "Laser & Plasma Uptime", link: "/solutions/machine-utilization-tracking" },
                            { name: "Real-Time Job Tracking", link: "/solutions/production-tracking-software" },
                            { name: "Weld Inspection Logs", link: "/solutions/quality-inspection-tracking" },
                            { name: "Shop Floor Visibility Hub", link: "/solutions/shop-floor-visibility-software" },
                            { name: "Packing & Dispatch Tracking", link: "/solutions/packing-dispatch-tracking" }
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
                                    <h2 className="newsletter-one__title text-white mb-20 fw-900" style={{ fontSize: '42px', lineHeight: '1.1' }}>
                                        Digitize Your Fabrication Shop Operations
                                    </h2>
                                </AnimatedTitle>
                                <p className="newsletter-one__text text-white mb-40 mx-auto opacity-90" style={{ maxWidth: '750px' }}>
                                    Gain real-time visibility of fabrication jobs, production stages, and shop floor performance.
                                    Schedule a demo to see how Micraft MES fits your fabrication facility.
                                </p>

                                <div className="cta-btns d-flex flex-wrap justify-content-center gap-4">
                                    <Link href="/book-demo" className="thm-btn shadow-2xl" style={{ background: '#0B192C', color: '#fff' }}>
                                        Start Your Fabrication Pilot <span className="icon-arrow-right"></span>
                                    </Link>
                                    <Link href="/contact" className="thm-btn shadow-2xl" style={{ background: 'transparent', border: '1px solid #fff', color: '#fff' }}>
                                        Consultation for Metal Shops <span className="icon-arrow-right"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .newsletter-three { padding: 40px 0 !important; }
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
                .responsive-section-padding { padding-top: 70px; padding-bottom: 70px; }
                .services-details__title-1 { font-size: 48px !important; }

                @media (min-width: 992px) {
                    .roadmap-step { width: 20% !important; }
                }
                @media (max-width: 991px) {
                    .responsive-section-padding { padding-top: 40px !important; padding-bottom: 40px !important; }
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