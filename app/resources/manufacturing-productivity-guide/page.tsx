"use client"
import Layout from "../../../components/layout/Layout"
import Breadcrumb from "../../../components/layout/Breadcrumb"
import Link from "next/link"
import Image from "next/image"
import AnimatedTitle from "../../../components/elements/AnimatedTitle"
import FinalCTA from "../../../components/sections/home1/FinalCTA"

export default function ManufacturingProductivityGuidePage() {
    return (
        <Layout headerStyle={1} footerStyle={2}>
            <Breadcrumb breadcrumbTitle="Improving Manufacturing Productivity" />

            {/* 1. Hero Section */}
            <section className="mes-hero pt-100 pb-100 overflow-hidden bg-dark-depth" id="hero">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="section-title text-left">
                                <AnimatedTitle>
                                    <h1 className="section-title__title text-white">
                                        The Complete Guide to Improving <br /> <span>Manufacturing Productivity</span>
                                    </h1>
                                </AnimatedTitle>
                            </div>
                            <div className="mt-4 text-white">
                                <p className="mb-4 hero-subtitle">
                                    Discover practical strategies manufacturers use to improve production efficiency, optimize machine utilization, reduce delays, and increase factory output.
                                </p>
                                <p className="text-white-50 mb-3 text-medium">
                                    Manufacturing productivity is one of the most critical factors determining the success of a factory. Companies that continuously improve production efficiency can reduce costs, increase output, and maintain competitive advantage.
                                </p>
                                <p className="text-white-50 mb-5 text-medium">
                                    This guide explains how manufacturers can improve productivity using modern manufacturing practices and digital production monitoring systems.
                                </p>
                                <div className="btn-box">
                                    <Link href="#understanding" className="thm-btn">Read the Guide <span className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="hero-img-wrap p-2 bg-dark rounded-5 border border-primary border-opacity-20 overflow-hidden shadow-2xl">
                                <Image
                                    src="/assets/images/resources/productivity_hero.png"
                                    alt="Improving Manufacturing Productivity"
                                    width={600}
                                    height={500}
                                    className="img-fluid rounded-4 img-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. What is Manufacturing Productivity? */}
            <section id="understanding" className="definition-section pt-100 pb-100 bg-dark-alt">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay="100ms">
                            <div className="definition-img-wrapper">
                                <div className="glow-shape-1"></div>
                                <div className="glow-shape-2"></div>
                                <div className="p-4 bg-glass-dark rounded-5 border border-secondary border-opacity-10 shadow-2xl">
                                    <h4 className="text-white mb-4 text-h4-premium"><i className="fas fa-chart-pie text-accent me-2"></i> Key Productivity Metrics evaluated:</h4>
                                    <div className="row g-3">
                                        {[
                                            { t: 'Production Output per Machine', i: 'industry' },
                                            { t: 'Machine Utilization Rate', i: 'percentage' },
                                            { t: 'Production Cycle Time', i: 'stopwatch' },
                                            { t: 'Rejection Rate', i: 'times-circle' },
                                            { t: 'On-Time Delivery Performance', i: 'truck' }
                                        ].map((item, idx) => (
                                            <div key={idx} className="col-12">
                                                <div className="tracking-item-premium shadow-sm d-flex align-items-center gap-3 p-3 rounded-4">
                                                    <i className={`fas fa-${item.i} text-primary-glow fa-lg`}></i>
                                                    <span className="text-white small fw-bold">{item.t}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4 p-3 rounded-4 bg-accent-glow bg-opacity-10 border border-accent border-opacity-20 text-center">
                                        <p className="text-white mb-0 fw-bold small">Improving these metrics leads to better operational efficiency and profitability.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1 wow fadeInLeft" data-wow-delay="200ms">
                            <div className="section-title text-left mb-4">
                                <span className="section-title__tagline tagline-glow">Core Manufacturing Concept</span>
                                <h2 className="section-title__title text-white">Understanding <span>Manufacturing Productivity</span></h2>
                            </div>
                            <div className="text-white-50">
                                <p className="mb-4 text-highlight-premium">
                                    Manufacturing productivity measures how efficiently a factory converts resources into finished products.
                                </p>
                                <p className="mb-4 text-medium">Resources may include:</p>
                                <div className="row g-3 mb-4">
                                    {['Machines', 'Labor', 'Raw Materials', 'Time'].map((res, i) => (
                                        <div key={i} className="col-sm-6">
                                            <div className="d-flex align-items-center gap-2 p-2 rounded bg-glass-dark border border-white border-opacity-05">
                                                <i className="fas fa-check text-accent"></i>
                                                <span className="text-white">{res}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-white text-medium-weight mt-5">
                                    A highly productive factory produces more output with fewer resources and minimal delays.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Common Causes of Low Manufacturing Productivity */}
            <section className="challenges-section pt-100 pb-100 bg-dark-surface position-relative overflow-hidden">
                <div className="container">
                    <div className="row g-5 align-items-start position-relative">
                        {/* Sticky Left Sidebar */}
                        <div className="col-lg-4" style={{ position: 'sticky', top: '120px', zIndex: 10 }}>
                            <div className="section-title text-left mb-4 wow fadeInLeft" data-wow-delay="100ms">
                                <span className="section-title__tagline tagline-glow" style={{ color: '#fa5674', textShadow: 'none' }}>Operational Roadblocks</span>
                                <h2 className="section-title__title text-white h2">Why Many Factories Struggle with <span>Productivity</span></h2>
                            </div>
                            <p className="text-white-50 mb-5 wow fadeInLeft" data-wow-delay="200ms">
                                Reliance on manual tracking and generic legacy systems creates a cascade of operational issues. These are the top five roadblocks preventing manufacturing scale.
                            </p>
                            <div className="p-4 rounded-4 bg-accent-glow bg-opacity-10 border border-white border-opacity-10 shadow-lg d-none d-lg-block wow fadeInLeft" data-wow-delay="300ms">
                                <i className="fas fa-exclamation-triangle text-white fa-2x mb-3 drop-shadow-glow"></i>
                                <h5 className="text-white text-uppercase small fw-bold" style={{ letterSpacing: '1px' }}>Diagnostic Alert</h5>
                                <p className="text-white-50 small mb-0 lh-lg">Unmonitored floors lose an average of <span className="text-white fw-bold border-bottom pb-1" style={{ borderColor: 'rgba(250, 86, 116, 0.5)' }}>20% production time</span> to invisible, uncontrolled inefficiencies.</p>
                            </div>
                        </div>

                        {/* Right Scrolling List */}
                        <div className="col-lg-8">
                            <div className="d-flex flex-column gap-4 position-relative">
                                {/* Vertical connection line */}
                                <div className="position-absolute d-none d-sm-block bg-accent-glow bg-opacity-25" style={{ width: '2px', top: '30px', bottom: '30px', left: '35px', zIndex: 0 }}></div>

                                {[
                                    { title: "Lack of Production Visibility", desc: "Managers cannot see real-time shop floor activity, delaying critical operational decisions.", link: "/solutions/shop-floor-visibility-software", icon: "eye-slash" },
                                    { title: "Poor Machine Utilization", desc: "Machines remain idle due to inefficient scheduling, maintenance delays, or material shortages.", link: "/solutions/machine-utilization-tracking", icon: "power-off" },
                                    { title: "Production Bottlenecks", desc: "Certain production stages slow down the entire workflow, choking downstream output.", link: "/solutions/manufacturing-process-tracking", icon: "hourglass-half" },
                                    { title: "Manual Production Tracking", desc: "Data is collected on paper registers and reported hours late, creating a massive data lag.", link: "/solutions/production-tracking-software", icon: "clipboard-list" },
                                    { title: "Quality Issues and Rejections", desc: "Undetected defects increase rework, scrap rates, and directly reduce overall order efficiency.", link: "/solutions/quality-inspection-tracking", icon: "times-hexagon" }
                                ].map((issue, idx) => (
                                    <div key={idx} className="challenge-horizontal-card position-relative z-1 d-flex flex-column flex-sm-row align-items-sm-center gap-4 p-4 rounded-4 bg-glass-dark border border-secondary border-opacity-10 transition-3s shadow-sm wow fadeInRight" data-wow-delay={`${idx * 100}ms`}>
                                        <div className="flex-shrink-0 bg-glass-dark border border-primary border-opacity-20 text-primary-glow rounded-circle d-flex align-items-center justify-content-center shadow-lg" style={{ width: '70px', height: '70px', fontSize: '26px' }}>
                                            <i className={`fas fa-${issue.icon}`}></i>
                                        </div>
                                        <div className="flex-grow-1 pe-md-3">
                                            <h4 className="text-white mb-2 fs-5 fw-bold">{issue.title}</h4>
                                            <p className="text-white-50 mb-0 small lh-base">{issue.desc}</p>
                                        </div>
                                        <div className="flex-shrink-0 mt-3 mt-sm-0 text-start text-sm-end">
                                            <Link href={issue.link} className="thm-btn btn-theme-soft">
                                                Solve Issue <i className="fas fa-angle-right ms-2"></i>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Key Strategies to Improve Manufacturing Productivity */}
            <section className="strategies-section pt-100 pb-100 bg-dark-depth">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <h2 className="section-title__title text-white">Proven Strategies to <span>Improve Factory Productivity</span></h2>
                    </div>
                    <div className="row justify-content-center g-4">
                        {[
                            { t: "Improve Production Visibility", d: "Real-time monitoring helps managers detect delays instantly.", i: "search" },
                            { t: "Optimize Machine Utilization", d: "Tracking machine activity helps identify idle equipment and improve scheduling.", i: "cogs" },
                            { t: "Reduce Production Bottlenecks", d: "Analyze production workflows to identify slow stages.", i: "project-diagram" },
                            { t: "Digitize Production Tracking", d: "Replace manual production registers with digital systems.", i: "tablet-alt" },
                            { t: "Improve Quality Control", d: "Early defect detection prevents rework and production delays.", i: "shield-check" },
                            { t: "Use Production Data for Decision Making", d: "Data-driven decisions improve operational planning.", i: "chart-line" }
                        ].map((strat, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 100}ms`}>
                                <div className="strategy-card p-4 rounded-4 h-100 border border-secondary border-opacity-20 d-flex gap-3 align-items-start" style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.03), transparent)' }}>
                                    <div className="strat-icon bg-glass-dark text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0" style={{ width: '50px', height: '50px', fontSize: '20px' }}>
                                        <i className={`fas fa-${strat.i}`}></i>
                                    </div>
                                    <div>
                                        <h4 className="text-white small fw-bold mb-2">{strat.t}</h4>
                                        <p className="text-white-50 small mb-0">{strat.d}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Role of Real-Time Production Monitoring */}
            <section className="role-of-monitoring pt-100 pb-100 bg-dark-alt">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="dual-image-perspective position-relative ps-lg-5">
                                <div className="perspective-main rounded-5 overflow-hidden shadow-2xl border border-secondary border-opacity-20 p-2 bg-dark">
                                    <Image
                                        src="/assets/images/resources/mes_digital_bridge_overview.png"
                                        alt="Real Time Monitoring"
                                        width={600}
                                        height={600}
                                        className="img-fluid rounded-4 img-cover h-100"
                                    />
                                </div>
                                <div className="perspective-floating-card d-none d-md-block p-2 bg-glass-dark-heavy shadow-2xl rounded-4 border border-accent border-opacity-20 position-absolute" style={{ bottom: '-30px', left: '-10px', width: '320px' }}>
                                    <div className="p-3 d-flex align-items-center gap-3">
                                        <div className="dot-blink bg-danger"></div>
                                        <div>
                                            <span className="text-white small fw-bold d-block">Issues Identified Immediately</span>
                                            <span className="text-white-50 tiny-text">Corrective Tracking Active</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="section-title text-left mb-4">
                                <h2 className="section-title__title text-white">How Real-Time Production Monitoring <span>Improves Productivity</span></h2>
                            </div>
                            <p className="text-white-50 mb-4 text-medium">
                                Real-time monitoring systems enable managers to track production activities instantly. They provide visibility into:
                            </p>
                            <div className="d-flex flex-wrap gap-2 mb-4">
                                {['Machine Activity', 'Production Output', 'Work Order Progress', 'Inspection Results'].map((tag, i) => (
                                    <div key={i} className="text-white py-2 px-3 rounded-pill bg-glass-dark border border-secondary border-opacity-10 small fw-bold">
                                        <i className="fas fa-satellite-dish text-accent me-2"></i> {tag}
                                    </div>
                                ))}
                            </div>
                            <div className="p-4 rounded-4 bg-accent-glow bg-opacity-10 border border-accent border-opacity-20 mb-4">
                                <p className="text-white mb-0 d-flex align-items-center gap-3 fw-bold">
                                    <i className="fas fa-bell text-white fa-lg"></i>
                                    This allows factories to identify issues immediately and take corrective actions.
                                </p>
                            </div>
                            <Link href="/resources/real-time-production-monitoring" className="thm-btn btn-primary-alt">Explore Real-Time Monitoring <span className="icon-right-arrow"></span></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Importance of Machine Utilization */}
            <section className="machine-utilization pt-100 pb-100 bg-dark-depth">
                <div className="container">
                    <div className="row flex-row-reverse align-items-center g-5">
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="100ms">
                            <div className="position-relative">
                                <div className="rounded-5 overflow-hidden shadow-2xl border border-secondary border-opacity-20 p-2 bg-dark">
                                    <Image
                                        src="/assets/images/backgrounds/ProductionandDowntime.jpg"
                                        alt="Machine Utilization"
                                        width={600}
                                        height={450}
                                        className="img-fluid rounded-4 img-cover"
                                    />
                                </div>
                                <div className="position-absolute top-50 start-0 translate-middle-y ms-n4 d-none d-lg-block">
                                    <div className="dashboard-callout p-4 rounded-4 bg-glass-dark border border-white border-opacity-10 text-center shadow-lg" style={{ width: '200px' }}>
                                        <p className="text-white-50 tiny-text text-uppercase mb-1">Utilization</p>
                                        <h3 className="text-white mb-2" style={{ fontSize: '36px' }}>85<span className="text-accent">%</span></h3>
                                        <div className="progress bg-dark" style={{ height: '4px' }}>
                                            <div className="progress-bar bg-accent-glow" style={{ width: '85%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="200ms">
                            <div className="section-title text-left mb-4">
                                <h2 className="section-title__title text-white">Machine Utilization and <span>Productivity</span></h2>
                            </div>
                            <p className="text-white-50 mb-4 text-medium">
                                Machine productivity plays a critical role in manufacturing efficiency.
                            </p>
                            <div className="mb-4">
                                <h5 className="text-white mb-3">Low machine utilization often indicates:</h5>
                                <ul className="list-unstyled d-flex flex-column gap-3 text-white-50">
                                    <li className="d-flex align-items-center gap-3 p-3 rounded-3 bg-glass-dark border-start border-danger" style={{ borderWidth: '3px' }}>
                                        <i className="fas fa-calendar-times text-danger"></i>
                                        <span>Poor scheduling</span>
                                    </li>
                                    <li className="d-flex align-items-center gap-3 p-3 rounded-3 bg-glass-dark border-start border-danger" style={{ borderWidth: '3px' }}>
                                        <i className="fas fa-tools text-danger"></i>
                                        <span>Unplanned downtime</span>
                                    </li>
                                    <li className="d-flex align-items-center gap-3 p-3 rounded-3 bg-glass-dark border-start border-danger" style={{ borderWidth: '3px' }}>
                                        <i className="fas fa-network-wired text-danger"></i>
                                        <span>Inefficient workflows</span>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-white fw-bold mb-4">
                                Tracking machine utilization helps factories optimize equipment productivity.
                            </p>
                            <Link href="/solutions/machine-utilization-tracking-software" className="text-decoration-none d-flex align-items-center gap-2 link-explore">
                                View Machine Tracking Software <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Benefits of Digital Manufacturing Systems */}
            <section className="benefits-section pt-100 pb-100 position-relative overflow-hidden mes-benefits-bg">
                <div className="overlay-dark"></div>
                <div className="container relative-z2">
                    <div className="section-title text-center mb-60">
                        <h2 className="section-title__title text-white">How Digital Manufacturing <span>Improves Productivity</span></h2>
                        <p className="text-white-50 mt-3 max-w-2xl mx-auto">Modern digital manufacturing systems provide factories with core capabilities to continuously improve operational efficiency.</p>
                    </div>
                    <div className="row justify-content-center g-4">
                        {[
                            { title: "Real-Time Production Visibility", desc: "Gain instant clarity on factory operations." },
                            { title: "Automated Production Reporting", desc: "Eliminate manual data entries and errors." },
                            { title: "Machine Performance Monitoring", desc: "Ensure maximum equipment output." },
                            { title: "Quality Inspection Tracking", desc: "Digital checkpoints integrated into workflows." },
                            { title: "Production Analytics Dashboards", desc: "Data driven insights for management." }
                        ].map((ben, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 100}ms`}>
                                <div className="benefit-card p-4 rounded-4 text-center h-100 border border-secondary border-opacity-10 shadow-lg card-benefit-inner transition-3s hover-lift">
                                    <div className="icon-box mb-3 mx-auto icon-box-benefit">
                                        <i className="fas fa-long-arrow-alt-up"></i>
                                    </div>
                                    <h4 className="text-white mb-2 text-h4">{ben.title}</h4>
                                    <p className="text-white-50 small mb-0">{ben.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. Industries Focused on Productivity Improvement */}
            <section className="industries-marquee-section pt-100 pb-100 bg-dark-alt overflow-hidden ">
                <div className="container-fluid p-0">
                    <div className="section-title text-center mb-50">
                        <h2 className="section-title__title text-white h3">Industries Actively Improving <span>Manufacturing Productivity</span></h2>
                        <p className="text-white-50 mt-2 max-w-2xl mx-auto">Factories in these industries rely heavily on production monitoring systems to improve efficiency.</p>
                    </div>

                    <div className="marquee-wrapper position-relative">
                        <div className="marquee-fade-left"></div>
                        <div className="marquee-fade-right"></div>
                        <div className="marquee-container d-flex">
                            <div className="marquee-content d-flex gap-4">
                                {[
                                    "Automotive Component Manufacturing", "CNC Machining", "Engineering Manufacturing",
                                    "Fabrication & Metal Processing", "Plastic Injection Molding", "Electronics Manufacturing"
                                ].map((ind, i) => (
                                    <div key={i} className="industry-badge-premium py-3 px-4 rounded-pill d-flex align-items-center gap-3 bg-glass-dark border border-secondary border-opacity-10">
                                        <i className="fas fa-industry text-primary-glow"></i>
                                        <span className="text-white small fw-bold text-nowrap">{ind}</span>
                                    </div>
                                ))}
                                {[
                                    "Automotive Component Manufacturing", "CNC Machining", "Engineering Manufacturing",
                                    "Fabrication & Metal Processing", "Plastic Injection Molding", "Electronics Manufacturing"
                                ].map((ind, i) => (
                                    <div key={`dup-${i}`} className="industry-badge-premium py-3 px-4 rounded-pill d-flex align-items-center gap-3 bg-glass-dark border border-secondary border-opacity-10">
                                        <i className="fas fa-industry text-primary-glow"></i>
                                        <span className="text-white small fw-bold text-nowrap">{ind}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. How Micraft MES Helps Improve Manufacturing Productivity */}
            <section className="micraft-solution pt-100 pb-100 bg-dark-depth">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="section-title text-left mb-4">
                                <span className="section-title__tagline tagline-glow">Purpose-Built Solution</span>
                                <h2 className="section-title__title text-white">Micraft MES for Manufacturing <span>Productivity Improvement</span></h2>
                                <p className="text-white-50 mt-4 h6 fw-normal">
                                    Micraft MES enables manufacturing companies to monitor production operations and optimize factory performance at an enterprise level.
                                </p>
                            </div>
                            <div className="row g-3 mt-4">
                                {[
                                    { title: "Production Tracking Software", icon: "tasks" },
                                    { title: "Machine Utilization Monitoring", icon: "cogs" },
                                    { title: "Real-Time Production Dashboards", icon: "chart-bar" },
                                    { title: "Manufacturing Process Tracking", icon: "project-diagram" },
                                    { title: "Quality Inspection Monitoring", icon: "check-double" }
                                ].map((feat, i) => (
                                    <div key={i} className="col-sm-6">
                                        <div className="p-3 rounded-4 bg-glass-dark border border-white border-opacity-05 h-100 d-flex flex-column justify-content-center text-center transition-3s hover-primary-border">
                                            <i className={`fas fa-${feat.icon} fs-4 text-white-50 mb-2`}></i>
                                            <h5 className="text-white small fw-bold mb-0">{feat.title}</h5>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="solution-dashboard-pannel p-1 rounded-5 bg-glass-dark border border-secondary border-opacity-10 shadow-2xl overflow-hidden">
                                <div className="p-5 bg-primary bg-opacity-10 rounded-5 border border-primary border-opacity-10">
                                    <div className="d-flex align-items-center gap-3 mb-4">
                                        <div className="bg-primary text-white d-flex align-items-center justify-content-center rounded-3 shadow-lg" style={{ width: '50px', height: '50px' }}>
                                            <i className="fas fa-bolt fs-4"></i>
                                        </div>
                                        <h3 className="text-white mb-0">Gain The Edge</h3>
                                    </div>
                                    <p className="text-white mb-5 text-medium">By providing real-time production insights, Micraft MES helps manufacturers directly improve operational efficiency and productivity securely and seamlessly.</p>
                                    <Link href="/solutions" className="thm-btn w-100 text-center">Transform Productivity Today <span className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. Key Productivity Metrics Manufacturers Should Track */}
            <section className="productivity-metrics pt-100 pb-100 bg-dark-alt">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <h2 className="section-title__title text-white">Important <span>Manufacturing Productivity</span> Metrics</h2>
                        <p className="text-white-50 mt-3">Manufacturers should monitor these key performance indicators to measure and improve productivity.</p>
                    </div>
                    <div className="metrics-board bg-dark-depth p-5 rounded-5 border border-secondary border-opacity-10 shadow-2xl">
                        <div className="row g-4">
                            {[
                                { val: "Output", t: "Production Output", d: "Quantity of products produced per shift or day.", p: "+18%" },
                                { val: "Util", t: "Machine Utilization", d: "Percentage of time machines are actively producing.", p: "↑ 92%" },
                                { val: "Time", t: "Production Cycle Time", d: "Time required to complete production processes.", p: "-12m" },
                                { val: "Qual", t: "Defect Rate", d: "Percentage of products rejected during inspection.", p: "↓ 0.4%" },
                                { val: "OTD", t: "On-Time Delivery", d: "Ability to deliver products within scheduled timelines.", p: "99.8%" }
                            ].map((metric, i) => (
                                <div key={i} className="col-12 col-md-4 col-lg">
                                    <div className="metric-panel p-4 rounded-4 bg-glass-dark h-100 border border-white border-opacity-05 position-relative overflow-hidden transition-3s">
                                        <div className="position-absolute top-0 end-0 p-3 text-accent fw-bold small">{metric.p}</div>
                                        <div className="metric-val text-white-50 small text-uppercase fw-bold mb-3">{metric.val}</div>
                                        <h4 className="text-white mb-2 fs-6">{metric.t}</h4>
                                        <p className="text-white-50 tiny-text mb-0 lh-base">{metric.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 11. Future of Manufacturing Productivity */}
            <section className="future-section pt-100 pb-100 bg-dark-surface">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="dual-image-perspective position-relative pe-lg-5">
                                <div className="perspective-main rounded-5 overflow-hidden shadow-2xl border border-secondary border-opacity-20 p-2 bg-dark" style={{ height: '450px' }}>
                                    <Image
                                        src="/assets/images/backgrounds/Realtimeshopfloor.jpg"
                                        alt="Future of Factory Productivity"
                                        width={600}
                                        height={450}
                                        className="img-fluid rounded-4 img-cover h-100"
                                    />
                                </div>
                                <div className="perspective-floating-card d-none d-md-block p-4 bg-glass-dark-heavy shadow-2xl rounded-4 border border-secondary border-opacity-20 position-absolute" style={{ bottom: '-30px', right: '-10px', left: 'auto', background: 'rgba(96, 101, 212, 0.9)' }}>
                                    <h4 className="text-white fw-bold mb-2">Connected Factories</h4>
                                    <p className="text-white-50 small mb-0 pt-2 border-top border-white border-opacity-10">Data streams bridging operations with digital intelligence.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="section-title text-left mb-4">
                                <h2 className="section-title__title text-white">The Future of <span>Productivity in Manufacturing</span></h2>
                            </div>
                            <p className="text-white-50 mb-5">Manufacturing productivity will increasingly rely on Next-Gen technologies:</p>

                            <div className="d-flex flex-column gap-4 mb-5">
                                {[
                                    { t: "Real-Time Production Monitoring", i: "satellite-dish" },
                                    { t: "Digital Manufacturing Systems", i: "cogs" },
                                    { t: "Automated Production Analytics", i: "chart-line" },
                                    { t: "Connected Factory Technologies", i: "project-diagram" }
                                ].map((item, idx) => (
                                    <div key={idx} className="d-flex align-items-center gap-4">
                                        <div className="bg-glass-dark rounded-circle d-flex align-items-center justify-content-center text-accent flex-shrink-0" style={{ width: '50px', height: '50px', fontSize: '20px' }}>
                                            <i className={`fas fa-${item.i}`}></i>
                                        </div>
                                        <h5 className="text-white mb-0 fw-normal fs-6">{item.t}</h5>
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 rounded-4 border-start border-accent bg-glass-dark" style={{ borderWidth: '4px !important' }}>
                                <p className="text-white mb-0 text-medium">
                                    Factories adopting digital production monitoring systems will gain a <span className="text-accent fw-bold">significant competitive advantage</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 12. Call to Action */}
            <FinalCTA
                title={<>Improve Your Factory Productivity <br /> <span>with Micraft MES</span></>}
                text="Micraft MES helps manufacturing companies gain real-time visibility of production operations and improve manufacturing efficiency. Schedule a Live Demo to see how Micraft MES improves factory productivity."
                buttonLabel1="Book Your Demo"
            />
        </Layout>
    )
}