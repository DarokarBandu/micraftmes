"use client"
import Layout from "../../components/layout/Layout"
import Breadcrumb from "../../components/layout/Breadcrumb"
import Link from "next/link"
import Image from "next/image"
import AnimatedTitle from "../../components/elements/AnimatedTitle"
import FinalCTA from "../../components/sections/home1/FinalCTA"

export default function FeaturesLandingPage() {
    return (
        <Layout headerStyle={1} footerStyle={2}>
            <Breadcrumb breadcrumbTitle="Features" />

            {/* 1. Hero Section */}
            <section className="mes-hero pt-100 pb-100 overflow-hidden bg-dark-depth position-relative">
                <div className="about-three__shape-1 float-bob-x opacity-20"></div>
                <div className="about-three__shape-2 float-bob-y opacity-20"></div>
                
                <div className="container position-relative z-2">
                    <div className="row align-items-center">
                        <div className="col-lg-7 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="section-title text-left">
                                <span className="tagline-glow mb-2 d-inline-block">System Capabilities</span>
                                <AnimatedTitle>
                                    <h1 className="section-title__title text-white mt-2 display-5 fw-bold">
                                        Complete Control Over Your <span>Manufacturing Operations</span>
                                    </h1>
                                </AnimatedTitle>
                            </div>
                            <div className="mt-4 text-white">
                                <p className="mb-4 hero-subtitle opacity-80" style={{ maxWidth: '600px', fontSize: '18px', lineHeight: '1.7' }}>
                                    Micraft MES connects planning, production, quality, materials, machines, and dispatch into a single system designed specifically for manufacturing operations.
                                    Gain real-time visibility, improve production efficiency, and maintain control over your entire shop floor.
                                </p>
                                <div className="btn-box">
                                    <Link href="/book-demo" className="thm-btn">Request Demo <span className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 wow fadeInRight" data-wow-delay="200ms">
                            <div className="hero-image-wrap-premium position-relative mt-5 mt-lg-0">
                                <div className="image-border-glow p-[2px] rounded-5 shadow-2xl" style={{ background: 'linear-gradient(135deg, var(--techguru-accent), rgba(250, 86, 116, 0.1))' }}>
                                    <div className="rounded-5 overflow-hidden position-relative" style={{ height: '380px' }}>
                                        <Image
                                            src="/assets/images/project/mes_3d_vector_hero.png"
                                            alt="Micraft MES Control Center"
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

            {/* 2. Manufacturing Lifecycle Overview */}
            <section className="workflow-section pt-100 pb-100 bg-dark-alt position-relative">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <span className="tagline-glow text-uppercase tracking-widest">End-to-End Orchestration</span>
                        <h2 className="section-title__title text-white">Manufacturing <span>Workflow</span></h2>
                        <p className="text-white-50 mt-3">Micraft MES manages the complete factory workflow from planning to fulfillment.</p>
                    </div>

                    <div className="workflow-container position-relative">
                        <div className="workflow-line d-none d-lg-block"></div>
                        <div className="row g-4 justify-content-center">
                            {[
                                { t: "Production Planning", l: "/features/production-planning-scheduling", i: "calendar-alt" },
                                { t: "Shop Floor Execution", l: "/features/shop-floor-data-collection", i: "industry" },
                                { t: "Quality Control", l: "/features/quality-inspection-management", i: "shield-alt" },
                                { t: "Material Tracking", l: "/features/production-order-management", i: "boxes" },
                                { t: "Production Traceability", l: "/features/work-order-tracking", i: "fingerprint" },
                                { t: "Machine Monitoring", l: "/features/machine-monitoring", i: "microchip" },
                                { t: "Production Analytics", l: "/features/production-analytics-reports", i: "chart-line" },
                                { t: "Dispatch & Fulfillment", l: "/features/dispatch-tracking", i: "shipping-fast" }
                            ].map((step, idx) => (
                                <div key={idx} className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay={`${idx * 100}ms`}>
                                    <Link href={step.l} className="text-decoration-none group">
                                        <div className="workflow-card bg-glass-dark p-4 rounded-4 border border-white border-opacity-05 text-center transition-5s hover-lift h-100">
                                            <div className="workflow-icon-box mb-3 mx-auto shadow-lg bg-accent bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                                                <i className={`fas fa-${step.i} text-accent fs-4`}></i>
                                            </div>
                                            <h5 className="text-white small fw-bold text-uppercase tracking-wider mb-0 group-hover:text-accent transition-3s">{step.t}</h5>
                                            {idx < 7 && <div className="workflow-arrow d-none d-lg-block"><i className="fas fa-long-arrow-alt-right text-white-50 opacity-20"></i></div>}
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .workflow-line {
                        position: absolute;
                        top: 50%;
                        left: 5%;
                        right: 5%;
                        height: 1px;
                        background: linear-gradient(90deg, transparent, rgba(250, 86, 116, 0.2), transparent);
                        z-index: 0;
                    }
                    .workflow-card {
                        position: relative;
                        z-index: 1;
                    }
                `}</style>
            </section>

            {/* 3. Feature Grid */}
            <section className="feature-grid-section pt-100 pb-100 bg-dark-depth">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <span className="tagline-glow">Core Capabilities</span>
                        <h2 className="section-title__title text-white">Full Feature <span>Suite</span></h2>
                    </div>

                    <div className="row g-4">
                        {[
                            {
                                t: "Production Planning & Scheduling",
                                d: "Plan production orders, assign machines, and balance capacity efficiently.",
                                l: "/features/production-planning-scheduling",
                                i: "calendar-check"
                            },
                            {
                                t: "Real-Time Shop Floor Tracking",
                                d: "Monitor work orders and production activity as it happens.",
                                l: "/features/shop-floor-data-collection",
                                i: "video"
                            },
                            {
                                t: "Quality Management",
                                d: "Implement structured inspections and defect tracking during production.",
                                l: "/features/quality-inspection-management",
                                i: "check-double"
                            },
                            {
                                t: "Material & Inventory Tracking",
                                d: "Track materials from stores to the shop floor with full visibility.",
                                l: "/features/production-order-management",
                                i: "box-open"
                            },
                            {
                                t: "Production Traceability",
                                d: "Maintain complete product genealogy and batch traceability.",
                                l: "/features/work-order-tracking",
                                i: "search-location"
                            },
                            {
                                t: "Machine Monitoring & OEE",
                                d: "Monitor machine utilization and analyze downtime.",
                                l: "/features/machine-monitoring",
                                i: "clock"
                            },
                            {
                                t: "Production Analytics & Insights",
                                d: "Transform production data into actionable insights.",
                                l: "/features/production-analytics-reports",
                                i: "chart-area"
                            },
                            {
                                t: "Dispatch & Order Fulfillment",
                                d: "Ensure accurate packing and timely shipment of orders.",
                                l: "/features/dispatch-tracking",
                                i: "truck"
                            }
                        ].map((feat, i) => (
                            <div key={i} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${i * 50}ms`}>
                                <div className="case-card-premium h-100 rounded-5 overflow-hidden bg-glass-dark border border-white border-opacity-05 p-4 transition-5s shadow-2xl hover-lift group">
                                    <div className="icon-circle bg-accent bg-opacity-10 mb-4 transition-3s group-hover:bg-accent d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                        <i className={`fas fa-${feat.i} text-accent group-hover:text-dark transition-3s`}></i>
                                    </div>
                                    <h4 className="text-white mb-3 fw-bold" style={{ fontSize: '1.15rem' }}>{feat.t}</h4>
                                    <p className="text-white-50 small mb-4 opacity-80" style={{ height: '40px', overflow: 'hidden' }}>{feat.d}</p>
                                    <Link href={feat.l} className="text-accent small fw-bold text-uppercase tracking-widest text-decoration-none d-flex align-items-center gap-2">
                                        Learn More <i className="fas fa-arrow-right mt-1" style={{ fontSize: '10px' }}></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Why These Features Matter */}
            <section className="why-features-section pt-100 pb-100 bg-dark-alt">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInLeft">
                            <div className="section-title text-left">
                                <span className="tagline-glow">Industrial Rationale</span>
                                <h2 className="section-title__title text-white">Built for Real <span>Manufacturing Operations</span></h2>
                            </div>
                            <div className="mt-4 text-white">
                                <p className="mb-4 opacity-80" style={{ fontSize: '17px' }}>
                                    Micraft MES features are designed around the real operational challenges manufacturers face every day.
                                    Instead of isolated software modules, Micraft MES connects production planning, execution, quality control, and delivery into one integrated platform.
                                </p>
                                <div className="row g-3">
                                    {[
                                        "Reduce production delays",
                                        "Improve machine utilization",
                                        "Maintain consistent product quality",
                                        "Increase operational visibility",
                                        "Deliver orders on time"
                                    ].map((item, i) => (
                                        <div key={i} className="col-sm-6">
                                            <div className="d-flex align-items-center gap-3 py-2">
                                                <i className="fas fa-check-circle text-accent"></i>
                                                <span className="fw-bold opacity-90">{item}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight">
                            <div className="rounded-5 overflow-hidden border border-white border-opacity-10 shadow-2xl shadow-accent-glow">
                                <Image src="/assets/images/project/prodcutiondashboard.jpg" alt="Production Dashboard" width={600} height={400} className="w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Visual System Architecture */}
            <section className="architecture-section pt-100 pb-100 bg-dark-depth overflow-hidden">
                <div className="container">
                    <div className="section-title text-center mb-80">
                        <span className="tagline-glow">Integrated Ecosystem</span>
                        <h2 className="section-title__title text-white">Visual <span>System Architecture</span></h2>
                        <p className="text-white-50 mt-3">Showing Micraft MES as the central platform connecting everything.</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-10 position-relative">
                            <div className="arch-diagram d-flex flex-column align-items-center justify-content-center">
                                {/* Top */}
                                <div className="arch-node wow fadeInDown" data-wow-delay="100ms">
                                    <div className="bg-glass-dark px-4 py-2 border border-white border-opacity-10 rounded-pill shadow-lg">
                                        <span className="text-white fw-bold small text-uppercase tracking-wider">Production Planning</span>
                                    </div>
                                    <div className="arch-line-v"></div>
                                </div>

                                {/* Center Row */}
                                <div className="d-flex align-items-center justify-content-center w-100 g-0">
                                    <div className="arch-node-h wow fadeInLeft" data-wow-delay="200ms">
                                        <div className="bg-glass-dark px-4 py-2 border border-white border-opacity-10 rounded-pill shadow-lg">
                                            <span className="text-white fw-bold small text-uppercase tracking-wider">Materials</span>
                                        </div>
                                        <div className="arch-line-h"></div>
                                    </div>

                                    <div className="arch-center-node wow zoomIn" data-wow-delay="100ms">
                                        <div className="bg-accent p-4 rounded-5 shadow-2xl border border-white border-opacity-20 d-flex flex-column align-items-center justify-content-center" style={{ width: '200px', height: '120px' }}>
                                            <Image src="/assets/images/logo/Micraftmeslogo.svg" alt="Micraft MES" width={140} height={40} className="brightness-0 invert mb-2" />
                                            <span className="text-dark fw-black small text-uppercase tracking-widest">Central Platform</span>
                                        </div>
                                    </div>

                                    <div className="arch-node-h wow fadeInRight" data-wow-delay="200ms">
                                        <div className="arch-line-h"></div>
                                        <div className="bg-glass-dark px-4 py-2 border border-white border-opacity-10 rounded-pill shadow-lg">
                                            <span className="text-white fw-bold small text-uppercase tracking-wider">Quality</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Flow */}
                                <div className="arch-node wow fadeInUp" data-wow-delay="300ms">
                                    <div className="arch-line-v"></div>
                                    <div className="bg-glass-dark px-4 py-2 border border-white border-opacity-10 rounded-pill shadow-lg">
                                        <span className="text-white fw-bold small text-uppercase tracking-wider">Shop Floor Tracking</span>
                                    </div>
                                    <div className="arch-line-v"></div>
                                    <div className="bg-glass-dark px-4 py-2 border border-white border-opacity-10 rounded-pill shadow-lg">
                                        <span className="text-white fw-bold small text-uppercase tracking-wider">Machine Monitoring</span>
                                    </div>
                                    <div className="arch-line-v"></div>
                                    <div className="bg-glass-dark px-4 py-2 border border-white border-opacity-10 rounded-pill shadow-lg">
                                        <span className="text-white fw-bold small text-uppercase tracking-wider">Production Analytics</span>
                                    </div>
                                    <div className="arch-line-v"></div>
                                    <div className="bg-glass-dark px-4 py-2 border border-white border-opacity-10 rounded-pill shadow-lg">
                                        <span className="text-white fw-bold small text-uppercase tracking-wider">Dispatch</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .arch-line-v {
                        width: 2px;
                        height: 40px;
                        background: linear-gradient(180deg, rgba(250, 86, 116, 0.4), rgba(250, 86, 116, 0.1));
                        margin: 0 auto;
                    }
                    .arch-line-h {
                        width: 60px;
                        height: 2px;
                        background: linear-gradient(90deg, rgba(250, 86, 116, 0.1), rgba(250, 86, 116, 0.4));
                    }
                    .arch-node, .arch-node-h {
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                    }
                    .arch-node-h {
                        flex-direction: row;
                    }
                    .arch-center-node {
                        margin: 0 20px;
                    }
                `}</style>
            </section>

            {/* 6. Industries Using These Features */}
            <section className="industries-section pt-100 pb-100 bg-dark-alt">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <span className="tagline-glow">Industry Relevance</span>
                        <h2 className="section-title__title text-white">Used Across <span>Manufacturing</span></h2>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {[
                            { t: "Automotive Components", l: "/industries/automotive-components", i: "car" },
                            { t: "Precision Engineering", l: "/industries/precision-engineering", i: "cog" },
                            { t: "Fabrication & Machining", l: "/industries/fabrication", i: "tools" },
                            { t: "Industrial Equipment", l: "/industries/industrial-equipment", i: "industry" },
                            { t: "Contract Manufacturing", l: "/industries/contract-manufacturing", i: "handshake" }
                        ].map((ind, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 100}ms`}>
                                <Link href={ind.l} className="text-decoration-none h-100 d-block">
                                    <div className="p-4 rounded-4 bg-glass-dark border border-white border-opacity-05 d-flex align-items-center gap-4 hover-lift transition-3s h-100">
                                        <div className="icon-bg-shop p-3 rounded" style={{ background: 'rgba(96, 101, 212, 0.1)' }}>
                                            <i className={`fas fa-${ind.i} text-primary-glow fs-4`}></i>
                                        </div>
                                        <h5 className="text-white mb-0 fs-6 fw-bold">{ind.t}</h5>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Call to Action */}
            <FinalCTA
                title={<>Bring Complete Visibility <br /> <span>to Your Factory</span></>}
                text="Micraft MES helps manufacturers gain real-time visibility and control across production operations. Start transforming your manufacturing processes with a system built specifically for shop floor environments."
                buttonLabel1="Schedule a Demo"
            />
        </Layout>
    )
}
