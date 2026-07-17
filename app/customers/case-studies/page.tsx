"use client"
import Layout from "../../../components/layout/Layout"
import Breadcrumb from "../../../components/layout/Breadcrumb"
import Link from "next/link"
import Image from "next/image"
import AnimatedTitle from "../../../components/elements/AnimatedTitle"
import FinalCTA from "../../../components/sections/home1/FinalCTA"

const caseStudies = [
    {
        id: "engineering-visibility",
        title: "Improving Production Visibility in an Engineering Factory",
        category: "Production Visibility",
        industry: "Precision Engineering",
        problem: "The factory lacked real-time visibility into production across multiple machines. Supervisors depended on manual updates, leading to delays in identifying production issues.",
        solution: "Micraft MES was implemented to enable real-time shop floor tracking and work order monitoring across machines and operations.",
        outcomes: [
            "Real-time visibility across all production activities",
            "Faster identification of delays and bottlenecks",
            "Improved coordination between planning and production teams"
        ],
        image: "/assets/images/project/engineering-visibility.png"
    },
    {
        id: "cnc-machine-downtime",
        title: "Reducing Machine Downtime in a CNC Machine Shop",
        category: "Machine Monitoring",
        industry: "CNC Machining",
        problem: "Frequent machine stoppages were not properly tracked, resulting in lost production time and poor machine utilization.",
        solution: "Micraft MES machine monitoring and OEE tracking were implemented to capture machine status and downtime reasons.",
        outcomes: [
            "Reduced unplanned machine downtime",
            "Better visibility into downtime causes",
            "Improved machine utilization and productivity"
        ],
        image: "/assets/images/project/cnc-downtime.png"
    },
    {
        id: "automotive-traceability",
        title: "Achieving Production Traceability for an Automotive Supplier",
        category: "Traceability",
        industry: "Automotive Components",
        problem: "The manufacturer faced challenges in tracking product history and identifying affected batches during quality issues.",
        solution: "Micraft MES traceability module was implemented to track batch data, production processes, and inspection records.",
        outcomes: [
            "Complete product and batch traceability",
            "Faster root cause analysis",
            "Improved compliance with customer requirements"
        ],
        image: "/assets/images/project/auto-traceability.png"
    },
    {
        id: "fabrication-dispatch",
        title: "Improving Dispatch Accuracy in a Fabrication Unit",
        category: "Dispatch Efficiency",
        industry: "Fabrication & Machining",
        problem: "Dispatch operations were manual, leading to incorrect shipments and delays in order fulfillment.",
        solution: "Micraft MES dispatch tracking and packing verification features were implemented.",
        outcomes: [
            "Accurate packing and dispatch verification",
            "Reduced shipment errors",
            "Improved on-time delivery performance"
        ],
        image: "/assets/images/project/fabrication-dispatch.png"
    }
];

export default function CaseStudiesPage() {
    const filteredCaseStudies = caseStudies;

    return (
        <Layout headerStyle={1} footerStyle={2}>
            <Breadcrumb breadcrumbTitle="Case Studies" />

            {/* 1. Hero Section */}
            <section className="case-studies-hero pt-100 pb-50 bg-dark-depth position-relative overflow-hidden">
                <div className="section-shape-1" style={{ position: 'absolute', top: '10%', left: '0', width: '300px', height: '300px', background: 'rgba(250, 86, 116, 0.05)', filter: 'blur(100px)', borderRadius: '50%' }}></div>
                <div className="container position-relative z-2">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-7 wow fadeInLeft">
                            <div className="section-title text-left">
                                <span className="tagline-glow mb-2">Real-World Success</span>
                                <AnimatedTitle>
                                    <h1 className="section-title__title text-white mt-2 display-5 fw-black">
                                        Real Manufacturing Results with <span>Micraft MES</span>
                                    </h1>
                                </AnimatedTitle>
                            </div>
                            <div className="mt-4 text-white">
                                <p className="mb-4 hero-subtitle opacity-80" style={{ maxWidth: '600px', fontSize: '18px', lineHeight: '1.7' }}>
                                    See how manufacturers are improving production visibility, reducing machine downtime, and achieving better control over their operations with Micraft MES.
                                </p>
                                <div className="btn-box d-flex align-items-center gap-3">
                                    <Link href="/book-demo" className="thm-btn">Request a Demo <span className="icon-right-arrow"></span></Link>
                                    <a href="#case-studies-grid" className="btn-theme-soft">Explore Case Studies</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 wow fadeInRight">
                            <div className="rounded-5 overflow-hidden bg-glass-dark border border-white-05 p-2 shadow-2xl">
                                <Image src="/assets/images/project/mes_real_overview.png" alt="Success Metrics" width={600} height={400} className="w-100 grayscale opacity-50" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 1.5 Strategic Results Ticker (Marquee) */}
            <section className="results-ticker-section bg-dark-alt py-4 border-top border-bottom border-white-05 overflow-hidden">
                <div className="ticker-container-mes">
                    <div className="ticker-content-mes">
                        {[
                            "30% IMPROVED OEE", "REAL-TIME VISIBILITY", "ZERO RECALL RISK", "FASTER DISPATCH",
                            "30% IMPROVED OEE", "REAL-TIME VISIBILITY", "ZERO RECALL RISK", "FASTER DISPATCH",
                            "30% IMPROVED OEE", "REAL-TIME VISIBILITY", "ZERO RECALL RISK", "FASTER DISPATCH"
                        ].map((text, i) => (
                            <div key={i} className="ticker-item-mes">
                                <span>{text}</span>
                                <div className="dot-sep-mes"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* 3. Case Study Cards Section */}
            <section id="case-studies-grid" className="case-studies-section pt-100 pb-100 bg-dark-depth">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <span className="tagline-glow">The Impact</span>
                        <h2 className="section-title__title text-white">Success Stories from the <span>Shop Floor</span></h2>
                    </div>

                    <div className="row g-5">
                        {filteredCaseStudies.map((cs, idx) => (
                            <div key={idx} className="col-lg-12 wow fadeInUp" data-wow-delay={`${idx * 100}ms`}>
                                <div className="case-study-creative-card rounded-5 bg-glass-dark border border-white-05 overflow-hidden transition-3s shadow-3xl position-relative">
                                    <div className="row g-0 h-100">
                                        <div className="col-xl-5 col-lg-6 position-relative">
                                            <div className="h-100 position-relative min-h-400">
                                                <Image src={cs.image} alt={cs.title} fill className="img-cover grayscale transition-5s" />
                                                <div className="overlay-dark-soft position-absolute inset-0 bg-gradient-to-r from-dark-depth via-transparent to-transparent"></div>
                                                <div className="industry-badge-floating translate-middle-y">
                                                    <span className="px-3 py-1 bg-accent rounded-pill text-white x-small fw-bold uppercase tracking-widest">{cs.industry}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-7 col-lg-6 p-4 p-md-5 d-flex flex-column">
                                            <div className="card-top-content mb-4">
                                                <div className="d-flex align-items-center gap-3 mb-3">
                                                    <div className="category-tag x-small uppercase tracking-widest fw-black text-accent">{cs.category}</div>
                                                    <div className="v-divider"></div>
                                                    <div className="case-id text-white-opacity-40 x-small fw-medium">ID: CS-00{idx + 1}</div>
                                                </div>
                                                <h3 className="text-white fw-black mb-4 fs-3">{cs.title}</h3>
                                            </div>

                                            <div className="impact-grid mb-5">
                                                <div className="row g-3">
                                                    {cs.outcomes.map((out, i) => (
                                                        <div key={i} className="col-md-4">
                                                            <div className="outcome-pill p-3 rounded-4 bg-white-02 border border-white-05 h-100 shadow-sm transition-3s hover-lift">
                                                                <div className="d-flex align-items-center gap-2 mb-2">
                                                                    <div className="dot-blink pulse-primary"></div>
                                                                    <span className="text-white-opacity-40 x-small uppercase tracking-widest fw-bold">Goal Met</span>
                                                                </div>
                                                                <p className="text-white small fw-bold mb-0 leading-tight">{out}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="challenge-solution-box p-4 rounded-5 bg-dark-alt border border-white-05 position-relative flex-grow-1 mb-4">
                                                <div className="row g-4">
                                                    <div className="col-sm-6">
                                                        <h6 className="text-white-opacity-40 x-small uppercase tracking-widest fw-black mb-2"><i className="fas fa-exclamation-triangle me-2 text-danger"></i>The Challenge</h6>
                                                        <p className="text-white small mb-0 opacity-80">{cs.problem}</p>
                                                    </div>
                                                    <div className="col-sm-6 border-start-sm border-white-10">
                                                        <h6 className="text-white-opacity-40 x-small uppercase tracking-widest fw-black mb-2"><i className="fas fa-lightbulb me-2 text-primary-glow"></i>The Implementation</h6>
                                                        <p className="text-white small mb-0 opacity-80">{cs.solution}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card-btn-footer mt-auto text-end">
                                                <Link href={`/customers/case-studies/${cs.id}`} className="thm-btn-premium py-2 px-5 rounded-pill small transition-5s">
                                                    Explore Full Report <i className="fas fa-chevron-right ms-2 mt-1"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <style jsx>{`
                    .case-study-creative-card:hover {
                        border-color: rgba(250, 86, 116, 0.3) !important;
                        box-shadow: 0 40px 80px -15px rgba(0,0,0,0.6);
                    }
                    .case-study-creative-card:hover .img-cover {
                        transform: scale(1.05);
                        filter: grayscale(0%);
                    }
                    .min-h-400 { min-height: 400px; }
                    .industry-badge-floating {
                        position: absolute;
                        bottom: 30px;
                        right: -15px;
                        z-index: 10;
                    }
                    .v-divider { width: 1px; height: 12px; background: rgba(255,255,255,0.1); }
                    .bg-white-02 { background: rgba(255,255,255,0.02); }
                    .thm-btn-premium {
                        background: linear-gradient(135deg, #FA5674, #6065D4);
                        color: white !important;
                        display: inline-flex;
                        align-items: center;
                        font-weight: 800;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        font-size: 11px;
                        box-shadow: 0 10px 20px rgba(250, 86, 116, 0.2);
                        border: none;
                        text-decoration: none;
                    }
                    .thm-btn-premium:hover {
                        transform: translateY(-3px) scale(1.05);
                        box-shadow: 0 15px 30px rgba(250, 86, 116, 0.4);
                        filter: brightness(1.1);
                    }
                    @media (min-width: 576px) {
                        .border-start-sm { border-left: 1px solid rgba(255,255,255,0.1); padding-left: 20px; }
                    }
                    @media (max-width: 991px) {
                        .min-h-400 { min-height: 300px; }
                        .industry-badge-floating { right: 20px; }
                    }
                `}</style>
            </section>

            {/* 4. Section: What These Results Mean */}
            <section className="impact-summary-section pt-100 pb-100 bg-dark-alt">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInLeft">
                            <div className="section-title text-left">
                                <span className="tagline-glow">Transformation</span>
                                <h2 className="section-title__title text-white">Real Operational Impact <span>Across Factories</span></h2>
                            </div>
                            <p className="text-white-opacity-70 mt-4 fs-5 leading-relaxed">
                                Micraft MES helps manufacturers move from disconnected and manual processes to a structured and data-driven production environment.
                            </p>
                            <ul className="list-unstyled mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Improved production visibility",
                                    "Reduced machine downtime",
                                    "Faster response to issues",
                                    "Better coordination across teams",
                                    "Reliable order fulfillment"
                                ].map((item, i) => (
                                    <li key={i} className="d-flex align-items-center gap-3 p-3 rounded-4 bg-glass-dark border border-white-05 shadow-lg">
                                        <div className="icon-p-sm rounded-circle bg-accent bg-opacity-10 d-flex align-items-center justify-content-center" style={{ minWidth: '32px', height: '32px' }}>
                                            <i className="fas fa-check text-accent small"></i>
                                        </div>
                                        <span className="text-white fw-bold small">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-lg-6 wow fadeInRight">
                            <div className="bg-glass-dark p-5 rounded-5 border border-white-05 shadow-2xl position-relative overflow-hidden">
                                <div className="glow-shape-1"></div>
                                <h4 className="text-white mb-4 fw-black">Driving Proactive Management</h4>
                                <p className="text-white-opacity-70 leading-relaxed mb-4">
                                    Across different implementations, manufacturers have experienced measurable improvements that enable factories to operate with greater control and efficiency.
                                </p>
                                <div className="d-flex align-items-center gap-4 p-4 rounded-4 bg-primary-glow bg-opacity-05 border border-white-05">
                                    <h2 className="text-white display-4 fw-black mb-0">30%</h2>
                                    <p className="text-white-50 x-small uppercase tracking-widest mb-0 fw-bold">Avg. Improvement <br />in Machine OEE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Featured Case Study Section */}
            <section className="featured-case-section pt-100 pb-100 bg-dark-depth">
                <div className="container">
                    <div className="bg-glass-dark rounded-5 overflow-hidden border border-white-05 shadow-3xl">
                        <div className="row g-0">
                            <div className="col-lg-6">
                                <div className="p-4 p-md-5 h-100 d-flex flex-column justify-content-center">
                                    <span className="tagline-glow mb-3">Featured Transformation</span>
                                    <h2 className="text-white fw-black display-6 mb-4">Complete Factory Transformation <br /><span>with Micraft MES</span></h2>
                                    <div className="industry-pill d-inline-block px-3 py-1 bg-dark bg-opacity-05 border border-white-10 rounded-pill text-white-50 x-small fw-bold uppercase tracking-widest mb-4">Precision Engineering</div>

                                    <div className="row g-4 mt-2">
                                        <div className="col-md-6">
                                            <h5 className="text-danger small uppercase tracking-widest fw-black mb-3"><i className="fas fa-times me-2"></i>Before Micraft</h5>
                                            <ul className="list-unstyled space-y-2 x-small text-white-opacity-40">
                                                <li>No real-time production visibility</li>
                                                <li>Manual tracking of work orders</li>
                                                <li>Delayed reporting of issues</li>
                                                <li>Limited coordination</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6 border-start border-white-05">
                                            <h5 className="text-success small uppercase tracking-widest fw-black mb-3"><i className="fas fa-check me-2"></i>After Micraft</h5>
                                            <ul className="list-unstyled space-y-2 x-small text-white fw-bold">
                                                <li>Live production tracking</li>
                                                <li>Real-time monitoring of work orders</li>
                                                <li>Faster bottleneck ID</li>
                                                <li>Improved cross-team ops</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <Link href="/customers/case-studies/engineering-visibility" className="thm-btn-premium py-3 px-5 rounded-pill">Read Full Story <span className="icon-right-arrow ms-2"></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 position-relative">
                                <Image src="/assets/images/project/engineering-visibility.png" alt="Transformation Result" fill className="img-cover grayscale" />
                                <div className="overlay-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Internal Linking Ticker (Marquee) */}
            <section className="internal-linking-ticker bg-dark-alt py-4 border-top border-white-05 overflow-hidden">
                <div className="ticker-container-mes">
                    <div className="ticker-content-mes" style={{ animationDuration: '30s' }}>
                        {[...Array(2)].map((_, groupIdx) => (
                            <div key={groupIdx} className="d-flex align-items-center gap-5 pe-5">
                                <span className="text-white-50 x-small uppercase tracking-widest fw-black">Explore More:</span>
                                <Link href="/features" className="text-white small hover-text-accent transition-3s no-wrap">Powerful Features</Link>
                                <div className="dot-sep-mes"></div>
                                <Link href="/solutions" className="text-white small hover-text-accent transition-3s no-wrap">Industry Solutions</Link>
                                <div className="dot-sep-mes"></div>
                                <Link href="/why-micraft" className="text-white small hover-text-accent transition-3s no-wrap">Why Micraft</Link>
                                <div className="dot-sep-mes"></div>
                                <Link href="/request-demo" className="text-white small hover-text-accent transition-3s no-wrap">Free Demo</Link>
                                <div className="dot-sep-mes"></div>
                            </div>
                        ))}
                    </div>
                </div>
                <style jsx>{`
                    .no-wrap { white-space: nowrap; }
                `}</style>
            </section>

            {/* 7. CTA Section */}
            <FinalCTA
                title={<>See How Micraft MES Can <br /> <span>Work in Your Factory</span></>}
                text="Every manufacturing operation is different, but the challenges are often similar. Micraft MES can be configured to match your specific production processes."
                buttonLabel1="Schedule a Demo"
                buttonLabel2="Talk to Expert"
            />
        </Layout>
    )
}