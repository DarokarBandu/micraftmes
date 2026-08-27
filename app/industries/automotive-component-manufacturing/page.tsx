"use client"
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import AnimatedTitle from "@/components/elements/AnimatedTitle";
import Breadcrumb from "@/components/layout/Breadcrumb";

const industryList = [
    { name: "Automotive Component Mfg", link: "/industries/automotive-component-manufacturing", active: true },
    { name: "CNC & Precision Engineering", link: "/industries/cnc-machining-engineering", active: false },
    { name: "Electronics Manufacturing", link: "/industries/electronics-manufacturing", active: false },
    { name: "Metal Fabrication Industry", link: "/industries/fabrication-industry", active: false },
    { name: "Plastic Injection Molding", link: "/industries/plastic-injection-molding", active: false },
    { name: "General Manufacturing SMEs", link: "/industries/general-manufacturing-smes", active: false },
];

export default function AutomotiveIndustryPage() {
    return (
        <Layout
            headerStyle={1}
            footerStyle={2}
        >
            <Breadcrumb breadcrumbTitle="Automotive Component Manufacturing MES" />

            {/* 1. Hero Section */}
            <section className="services-details responsive-section-padding" style={{ background: 'radial-gradient(ellipse at left center, rgba(96, 101, 212, 0.2), var(--techguru-black) 70%)', position: 'relative', overflow: 'hidden' }}>
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
                                        <Image src="/assets/images/solutions/real-time-production.png" alt="Auto Parts Manufacturing" width={356} height={450} style={{ objectFit: 'cover', width: '100%', height: 'auto' }} priority />
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
                                <span className="section-title__tagline text-primary uppercase letter-spacing-3 fw-bold mb-0 d-block">Primary Keyword: MES for automotive component manufacturing</span>
                                <AnimatedTitle>
                                    <h1 className="services-details__title-1 text-white fw-900 mb-4" style={{ fontSize: '48px', lineHeight: '1.0' }}>
                                        MES Software for <span style={{ color: '#7366CA', fontFamily: 'var(--techguru-font-two)', fontWeight: '400' }} className="d-block">Automotive Component Manufacturing</span>
                                    </h1>
                                </AnimatedTitle>
                                <h3 className="h5 text-white opacity-90 mb-4 fw-bold">Monitor production, track machining operations, manage inspections, and improve delivery performance with Micraft MES.</h3>
                                <div className="services-details__bdr bg-primary opacity-20 my-4" style={{ height: '1px' }}></div>
                                <p className="services-details__text-1 text-white opacity-70 mb-4 lead">
                                    Micraft MES enables automotive manufacturing companies to gain real-time visibility of shop floor operations, helping production managers track work orders, monitor machine utilization, manage inspection processes, and ensure on-time dispatch of components.
                                </p>
                                <p className="services-details__text-2 text-white-50 extra-small mb-5">
                                    The platform is designed to support high-volume manufacturing environments common in automotive supply chains, providing the digital backbone for modern automotive factory monitoring systems.
                                </p>

                                <div className="d-flex flex-wrap gap-3 mb-5">
                                    <Link href="/book-demo" className="thm-btn industry-btn-gradient px-5 shadow-2xl">Schedule a Live Demo</Link>
                                    <Link href="/product/how-micraft-mes-works" className="thm-btn bg-white text-dark px-5">See How It Works</Link>
                                </div>

                                {/* Challenge Section - Synced with Endpoint Security 'points-box' style */}
                                <div className="services-details__points-box p-5 rounded-5 mt-5" style={{ background: 'rgba(23, 28, 41, 0.4)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                    <AnimatedTitle>
                                        <h4 className="services-details__title-2 text-white fw-bold mb-4" style={{ lineHeight: '1.1' }}>Quality & Delivery Challenges</h4>
                                    </AnimatedTitle>
                                    <p className="services-details__text-3 text-white opacity-70 mb-4">Automotive parts manufacturing demands zero-defect quality and JIT delivery. Manual tracking often leads to critical blind spots:</p>
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <ul className="services-details__points-list list-unstyled">
                                                {[
                                                    "Unknown job-status across multi-machine operations",
                                                    "Inefficient link between inspection results and physical parts",
                                                    "Lack of real-time machine uptime and OEE visibility"
                                                ].map((item, idx) => (
                                                    <li key={idx}>
                                                        <div className="icon">
                                                            <span className="icon-tick-inside-circle"></span>
                                                        </div>
                                                        <p className="text-white opacity-80 small mb-0">{item}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="col-xl-6">
                                            <ul className="services-details__points-list list-unstyled">
                                                {[
                                                    "Difficulty identifying root causes for micro-stoppages",
                                                    "Manual management of PPAP and recall-ready traceability",
                                                    "Late detection of quality trends leading to rework"
                                                ].map((item, idx) => (
                                                    <li key={idx}>
                                                        <div className="icon">
                                                            <span className="icon-tick-inside-circle"></span>
                                                        </div>
                                                        <p className="text-white opacity-80 small mb-0">{item}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Capability Visuals - Synced with Endpoint Security 'img-box' style */}
                                <div className="services-details__img-box mt-5">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="services-details__img-box-img rounded-5 overflow-hidden border-primary-glow shadow-2xl transition-all duration-500 scale-hover">
                                                <Image src="/assets/images/solutions/performance-kpi-dashboard-1775020757736.png" alt="Auto Inspection" width={409} height={340} style={{ width: '100%', height: 'auto' }} priority />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="services-details__img-box-img rounded-5 overflow-hidden border-primary-glow shadow-2xl transition-all duration-500 scale-hover">
                                                <Image src="/assets/images/solutions/oee-monitoring-interface-1775021120923.png" alt="OEE Dashboard" width={409} height={340} style={{ width: '100%', height: 'auto' }} priority />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bespoke Production Nerve - Redesigned Roadmap */}
            <section className="production-journey responsive-section-padding overflow-hidden" style={{ background: 'var(--techguru-black)', position: 'relative' }}>
                <div className="section-glow-background" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', height: '100%', background: 'radial-gradient(circle at center, rgba(61, 114, 252, 0.05), transparent 70%)', zIndex: 0 }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="section-title text-center mb-3 pb-2">
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white mt-3 display-4 fw-900" style={{ lineHeight: '1.1' }}>
                                Digital Production Logic Roadmap
                            </h2>
                        </AnimatedTitle>
                    </div>

                    <div className="horizontal-roadmap-wrapper d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-start gap-5 gap-lg-4 mt-5 pb-5">
                        {[
                            { step: "01", title: "Raw Material", icon: "fas fa-dolly", desc: "Heat-code linking & inward QC" },
                            { step: "02", title: "Live Machining", icon: "fas fa-cogs", desc: "Spindle-level OEE tracking" },
                            { step: "03", title: "Quality Pulse", icon: "fas fa-microscope", desc: "Digital inspection checks" },
                            { step: "04", title: "Smart Assembly", icon: "fas fa-project-diagram", desc: "Work order management" },
                            { step: "05", title: "Dispatch", icon: "fas fa-shipping-fast", desc: "Serialized part release" }
                        ].map((item, i, arr) => (
                            <div key={i} className="roadmap-step text-center w-100" style={{ position: 'relative' }}>
                                {/* Floating Icon Box */}
                                <div className="roadmap-icon-wrap mx-auto mb-3 d-flex align-items-center justify-content-center transition-all shadow-xl"
                                    style={{
                                        width: '64px', height: '64px',
                                        background: 'rgba(23, 28, 41, 0.4)',
                                        border: '1px solid rgba(61, 114, 252, 0.3)',
                                        borderRadius: '20px',
                                        backdropFilter: 'blur(10px)',
                                        position: 'relative',
                                        zIndex: 5
                                    }}>
                                    <i className={`${item.icon} text-primary fs-4`}></i>
                                    <span className="position-absolute top-100 start-50 translate-middle badge rounded-pill bg-primary"
                                        style={{ fontSize: '10px', marginTop: '-5px' }}>{item.step}</span>
                                </div>
                                <h5 className="text-white fw-bold mb-2 small">{item.title}</h5>
                                <p className="text-white-50 extra-small m-0 px-2 lh-sm mb-4 mb-lg-0" style={{ maxWidth: '200px', margin: '0 auto' }}>{item.desc}</p>

                                {i < arr.length - 1 && (
                                    <div className="roadmap-connector d-none d-lg-block position-absolute"
                                        style={{
                                            top: '32px', left: '60%', width: '80%', height: '1px',
                                            background: 'linear-gradient(90deg, #3D72FC, transparent)',
                                            zIndex: 1
                                        }}></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Capability & Benefits Hub - Synced with Endpoint Security 'points-box-2' style */}
            <section className="capabilities-hub responsive-section-padding" style={{ background: 'radial-gradient(ellipse at right center, rgba(250, 86, 116, 0.1), var(--techguru-black) 70%)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="section-title text-start mb-5">
                                <span className="section-title__tagline text-primary uppercase letter-spacing-3 fw-bold">Driving Efficiency</span>
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white mt-3 display-4 fw-900" style={{ lineHeight: '1.1' }}>
                                        End-to-End Auto Manufacturing Hub
                                    </h2>
                                </AnimatedTitle>
                            </div>
                        </div>
                        <div className="col-xl-6 d-flex align-items-center">
                            <p className="text-white opacity-70 lead mb-0">Our automotive MES goes beyond simple tracking—offering innovative, data-driven, and tailored strategies to help your Tier-1 or Tier-2 facility thrive.</p>
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
                                            <h5 className="text-white fw-bold">Live OEE Analytics</h5>
                                            <p className="text-white-50 small">Track actual machine performance vs targets with automated cycle-time detection.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-target"></span>
                                        </div>
                                        <div className="content">
                                            <h5 className="text-white fw-bold">Micro-Level Traceability</h5>
                                            <p className="text-white-50 small">Link raw material heat codes to finished part serial numbers for ISO/IATF compliance.</p>
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
                                            <h5 className="text-white fw-bold">Visual Dashboard Hub</h5>
                                            <p className="text-white-50 small">Consolidated view of all work instruction status across every assembly station.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-transparency"></span>
                                        </div>
                                        <div className="content">
                                            <h5 className="text-white fw-bold">Automated Quality Gating</h5>
                                            <p className="text-white-50 small">Stop defective units before dispatch with digital checksheets and routing locks.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Benefits High-Fidelity Showcase */}
            <section className="benefits-section responsive-section-padding" style={{ background: 'radial-gradient(circle at center, #0B192C, var(--techguru-black) 80%)' }}>
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-7">
                            <div className="section-title text-start mb-0">
                                <span className="section-title__tagline text-primary uppercase letter-spacing-3 fw-bold">Outcome Focused</span>
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white mt-3 display-5 fw-900" style={{ lineHeight: '1.1' }}>Tier-1 & Tier-2 Performance Impact</h2>
                                </AnimatedTitle>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <p className="text-white opacity-60 lead mb-0 border-start ps-4 border-primary border-3">Real-time production data translated into actionable manufacturing intelligence for automotive factories.</p>
                        </div>
                    </div>

                    <div className="row g-4 mt-4">
                        {[
                            { title: "Total Visibility", desc: "Track every assembly stage of automotive component production with 100% accuracy.", icon: "icon-strategy" },
                            { title: "Spindle Optimization", desc: "Maximize machine utilization and eliminate hidden idle time across Tier-suppliers.", icon: "icon-target" },
                            { title: "Rapid QC Pulse", desc: "Real-time dashboards at every machine enables instantaneous quality-trend responses.", icon: "icon-check-mark" },
                            { title: "Serialized Traceability", desc: "Zero-error tracking of inspection results and ISO/IATF quality parameters.", icon: "icon-tick-inside-circle" },
                            { title: "Digital ERP Bridge", desc: "Seamless flow of shopfloor operational data to your legacy ERP for accurate planning.", icon: "icon-idea" },
                            { title: "OEM Compliance", desc: "Ensure components are delivered on time, meeting rigid automotive OEM timelines.", icon: "icon-transparency" }
                        ].map((ben, i) => (
                            <div key={i} className="col-lg-4 col-md-6 h-100">
                                <div className="benefit-card-premium p-5 rounded-5 transition-all text-start h-100"
                                    style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)' }}>
                                    <div className="icon-wrap mb-4 d-flex align-items-center justify-content-center rounded-3 bg-primary"
                                        style={{ width: '48px', height: '48px', background: 'linear-gradient(225deg, #3D72FC 0%, #FA5674 100%)' }}>
                                        <span className={`${ben.icon} text-white fs-5`}></span>
                                    </div>
                                    <h4 className="text-white h5 fw-bold mb-3">{ben.title}</h4>
                                    <p className="text-white-50 small opacity-70 m-0" style={{ lineHeight: '1.6' }}>{ben.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6, 8 & 9. Segments, Why Choose, Clusters */}
            <section className="segments-section responsive-section-padding" style={{ background: 'var(--techguru-black)' }}>
                <div className="container py-lg-5">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="segments-box p-5 rounded-5 h-100" style={{ background: 'linear-gradient(145deg, rgba(23,28,41,0.6) 0%, rgba(2,5,10,0.8) 100%)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <h3 className="text-white fw-bold mb-4">Ideal for Automotive Segments</h3>
                                <ul className="list-unstyled">
                                    {[
                                        "Precision Machining Companies",
                                        "Automotive Component Manufacturers",
                                        "Tier-1 and Tier-2 Automotive Suppliers",
                                        "Casting and Forging Manufacturers",
                                        "Sheet Metal Component Manufacturers",
                                        "Automotive Assembly Units"
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
                                <h3 className="text-white fw-bold mb-4">Why Manufacturers Choose Micraft MES</h3>
                                <p className="text-white-50 mb-4">Designed for SME manufacturers that require powerful visibility without complex enterprise system overhead.</p>
                                <ul className="list-unstyled">
                                    {[
                                        "Simple and intuitive shop floor interface",
                                        "Quick implementation for manufacturing environments",
                                        "Real-time production monitoring dashboards",
                                        "Scalable platform for growing factories",
                                        "Designed for Indian manufacturing ecosystems"
                                    ].map((adv, i) => (
                                        <li key={i} className="text-white opacity-80 mb-3 d-flex align-items-center gap-3">
                                            <i className="fas fa-star text-primary"></i>
                                            {adv}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="clusters-box mt-5 p-5 rounded-5 text-center" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 className="text-white fw-bold mb-4">Supporting Major Automotive Manufacturing Clusters</h3>
                        <div className="d-flex flex-wrap justify-content-center gap-4">
                            {["Pune & Chakan Hub", "Aurangabad Cluster", "Chennai Ecosystem", "Gurgaon & Manesar Network"].map((cluster, i) => (
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

            {/* 7. Integration & Internal Links */}
            <section className="integration-section py-5" style={{ background: '#060A13' }}>
                <div className="container py-lg-5 text-center">
                    <h2 className="text-white fw-900 mb-5">Complete Automotive MES Integration</h2>
                    <p className="text-white-50 max-w-700 mx-auto mb-5">Micraft MES provides complete digital monitoring by integrating multiple modular capabilities required in automotive production.</p>
                    <div className="row g-3 justify-content-center">
                        {[
                            { name: "Production Tracking Software", link: "/solutions/production-tracking-software" },
                            { name: "Machine Utilization Tracking", link: "/solutions/machine-utilization-tracking" },
                            { name: "Real-Time Production Monitoring", link: "/solutions/real-time-production-monitoring" },
                            { name: "Manufacturing Process Tracking", link: "/solutions/manufacturing-process-tracking" },
                            { name: "Quality Inspection Tracking", link: "/solutions/quality-inspection-tracking" },
                            { name: "Shop Floor Visibility Software", link: "/solutions/shop-floor-visibility-software" },
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

            {/* 10. CTA Section - Sync with Home FinalCTA style */}
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
                                        Digitize Your Automotive Manufacturing Factory
                                    </h2>
                                </AnimatedTitle>
                                <p className="newsletter-one__text text-white mb-40 mx-auto opacity-90" style={{ maxWidth: '750px' }}>
                                    Gain complete visibility of production operations, machine utilization, and inspection processes.
                                    Schedule a demo to see how Micraft MES fits your automotive facility.
                                </p>

                                <div className="cta-btns d-flex flex-wrap justify-content-center gap-4">
                                    <Link href="/book-demo" className="thm-btn shadow-2xl" style={{ background: '#0B192C', color: '#fff' }}>
                                        Schedule an Automotive Demo <span className="icon-arrow-right"></span>
                                    </Link>
                                    <Link href="/contact" className="thm-btn shadow-2xl" style={{ background: 'transparent', border: '1px solid #fff', color: '#fff' }}>
                                        Consultation for Tier-1 Suppliers <span className="icon-arrow-right"></span>
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
                
                /* Digital Production Journey Animations */
                @keyframes nervePulseMove {
                    0% { top: 0; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
                .nerve-card:hover { transform: translateY(-10px); border-color: rgba(61, 114, 252, 0.3) !important; background: rgba(23, 28, 41, 0.6) !important; box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
                .nerve-card:hover .icon-box { background: #3D72FC !important; }
                .nerve-card:hover .icon-box i { color: #fff !important; }
                .lead-small { font-size: 15px; line-height: 1.6; }

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