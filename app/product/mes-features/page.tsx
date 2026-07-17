import Layout from "@/components/layout/Layout"
import Breadcrumb from "@/components/layout/Breadcrumb"
import Link from "next/link"
import Image from "next/image"
import AnimatedTitle from "@/components/elements/AnimatedTitle"
import "@/public/assets/css/module-css/mesfeatures.css"
import "@/public/assets/css/module-css/micraftmeswork.css"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'MES Software Features | Manufacturing Execution System Capabilities | Micraft MES',
    description: 'Explore Micraft MES features including production tracking, machine utilization monitoring, shop floor visibility, and real-time factory dashboards',
    keywords: ['MES Features', 'Manufacturing Execution System Capabilities', 'Production Tracking Software', 'Machine Utilization Tracking', 'Shop Floor Visibility', 'Factory Dashboards'],
}

export default function MesFeaturesPage() {

    const featuresData = [
        {
            num: "01",
            subtitle: "Tracking & Control",
            title: "Production Order <span>Tracking</span>",
            desc: "Micraft MES enables manufacturers to track production orders across multiple stages of the manufacturing process.",
            list: ["work order progress tracking", "stage-wise production updates", "production output monitoring", "real-time job status visibility"],
            footerText: "This helps managers understand exactly where each production order stands.",
            linkText: "Production Tracking Software",
            linkUrl: "/solutions/production-tracking-software",
            icon: "fas fa-clipboard-list",
            img: "/assets/images/project/mes_3d_vector_hero.png"
        },
        {
            num: "02",
            subtitle: "Shop Floor Visibility",
            title: "Real-Time Shop Floor <span>Visibility</span>",
            desc: "Micraft MES provides real-time monitoring of shop floor activities.",
            list: ["workstation activity", "machine status", "production progress", "operator activity"],
            footerText: "Real-time dashboards provide complete operational transparency.",
            linkText: "Shop Floor Visibility Software",
            linkUrl: "/solutions/shop-floor-visibility-software",
            icon: "fas fa-industry",
            img: "/assets/images/project/feat_shopfloor_visibility.png"
        },
        {
            num: "03",
            subtitle: "Asset Optimization",
            title: "Machine Utilization <span>Monitoring</span>",
            desc: "Micraft MES helps manufacturers monitor machine productivity and equipment utilization.",
            list: ["machine activity monitoring", "idle time tracking", "production output by machine", "equipment performance insights"],
            footerText: "These insights help manufacturers optimize machine utilization and increase productivity.",
            linkText: "Machine Utilization Tracking",
            linkUrl: "/solutions/machine-utilization-tracking",
            icon: "fas fa-cogs",
            img: "/assets/images/project/feat_machine_utilization.png"
        },
        {
            num: "04",
            subtitle: "Workflow Orchestration",
            title: "Manufacturing Process <span>Monitoring</span>",
            desc: "Micraft MES tracks production workflows across multiple manufacturing stages.",
            list: ["stage-wise production monitoring", "workflow tracking", "production bottleneck identification", "process visibility dashboards"],
            footerText: "This helps manufacturers optimize production workflows and reduce delays.",
            linkText: "Manufacturing Process Tracking",
            linkUrl: "/solutions/manufacturing-process-tracking",
            icon: "fas fa-project-diagram",
            img: "/assets/images/project/feat_process_monitoring.png"
        },
        {
            num: "05",
            subtitle: "Quality Assurance",
            title: "Quality Inspection <span>Tracking</span>",
            desc: "Micraft MES allows manufacturers to record inspection results during production processes.",
            list: ["digital inspection records", "defect tracking", "rejection analysis", "inspection performance monitoring"],
            footerText: "This helps improve quality control and defect management.",
            linkText: "Quality Inspection Tracking",
            linkUrl: "/solutions/quality-inspection-tracking",
            icon: "fas fa-shield-alt",
            img: "/assets/images/project/feat_quality_inspection.png"
        },
        {
            num: "06",
            subtitle: "Command Center",
            title: "Real-Time Production <span>Dashboards</span>",
            desc: "Micraft MES provides visual dashboards that display real-time factory performance.",
            list: ["production output", "machine utilization", "work order status", "inspection results", "dispatch readiness"],
            footerText: "These dashboards provide instant visibility of factory operations.",
            linkText: "Digital Production Dashboard",
            linkUrl: "/solutions/digital-production-dashboard",
            icon: "fas fa-chart-bar",
            img: "/assets/images/project/feat_production_dashboards.png"
        },
        {
            num: "07",
            subtitle: "Fulfillment & Logistics",
            title: "Packing and Dispatch <span>Monitoring</span>",
            desc: "Micraft MES tracks the final stage of production operations.",
            list: ["packing status monitoring", "dispatch readiness tracking", "shipment preparation visibility", "completed order tracking"],
            footerText: "This ensures that production operations remain aligned with delivery schedules.",
            linkText: "Packing & Dispatch Tracking",
            linkUrl: "/solutions/packing-dispatch-tracking",
            icon: "fas fa-truck-loading",
            img: "/assets/images/project/feat_packing_dispatch.png"
        },
        {
            num: "08",
            subtitle: "Live Telemetry",
            title: "Real-Time Factory <span>Monitoring</span>",
            desc: "Micraft MES enables continuous monitoring of factory operations.",
            list: ["live production monitoring", "machine activity tracking", "production bottleneck identification", "operational performance insights"],
            footerText: "This enables managers to respond quickly to production issues.",
            linkText: "Real-Time Production Monitoring",
            linkUrl: "/solutions/real-time-production-monitoring",
            icon: "fas fa-network-wired",
            img: "/assets/images/project/feat_factory_monitoring.png"
        },
        {
            num: "09",
            subtitle: "Data & Intelligence",
            title: "Manufacturing Analytics and <span>Reporting</span>",
            desc: "Micraft MES provides production insights through detailed analytics and reports.",
            list: ["production performance reports", "machine utilization reports", "inspection reports", "production output analysis"],
            footerText: "These insights help manufacturers make data-driven decisions.",
            linkText: "",
            linkUrl: "",
            icon: "fas fa-chart-pie",
            img: "/assets/images/project/feat_analytics_reporting.png"
        }
    ];

    return (
        <Layout headerStyle={1} footerStyle={2}>

            <Breadcrumb breadcrumbTitle="MES Features" />

            {/* ═══════════════ PREMIUM HERO SECTION ═══════════════ */}
            <section className="meswork-hero overflow-hidden position-relative">
                {/* Animated Background Shapes */}
                <div className="meswork-hero__glow-1"></div>
                <div className="meswork-hero__glow-2"></div>
                <div className="position-absolute float-bob-x" style={{ top: '10%', right: '5%', opacity: 0.06, zIndex: 0 }}>
                    <Image src="/assets/images/shapes/main-slider-two-shape-2.png" alt="shape" width={500} height={440} />
                </div>
                <div className="position-absolute float-bob-y" style={{ bottom: '5%', left: '2%', opacity: 0.05, zIndex: 0 }}>
                    <Image src="/assets/images/shapes/main-slider-two-shape-3.png" alt="shape" width={300} height={450} />
                </div>
                <div className="position-absolute" style={{ top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url(/assets/images/shapes/counter-one-bg-shape.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.04, zIndex: 0 }}></div>

                <div className="container position-relative z-1">
                    <div className="row justify-content-center">
                        <div className="col-xl-9 col-lg-10 text-center">
                            <div className="section-title text-center mb-4 wow fadeInUp" data-wow-delay="100ms">
                                <div className="section-title__tagline-box justify-content-center">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline">Complete Manufacturing Monitoring Platform</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <AnimatedTitle>
                                    <h1 className="section-title__title title-animation mb-4" style={{ fontSize: '52px', lineHeight: '1.15' }}>
                                        Micraft MES Features – <br />
                                        <span>Complete Manufacturing Monitoring Platform</span>
                                    </h1>
                                </AnimatedTitle>
                            </div>

                            {/* Subheading */}
                            <p className="wow fadeInUp mx-auto mb-5" data-wow-delay="200ms" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontSize: '18px', maxWidth: '780px', fontWeight: 500 }}>
                                Discover the powerful features of Micraft MES designed to help manufacturers track production, monitor shop floor operations, improve machine utilization, and gain real-time factory visibility.
                                <br /><br />
                                Micraft MES provides a comprehensive set of tools that enable manufacturing companies to digitize production operations and monitor factory performance in real time. From production tracking to quality inspection management, the platform connects every stage of the manufacturing process.
                            </p>

                            {/* CTAs */}
                            <div className="d-flex flex-wrap justify-content-center gap-3 wow fadeInUp" data-wow-delay="400ms">
                                <Link href="/book-demo" className="thm-btn">Book a Live Demo<span className="icon-right-arrow"></span></Link>
                                <Link href="/solutions" className="thm-btn" style={{ background: 'rgba(255,255,255,0.04)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)' }}>Explore Solutions<span className="icon-right-arrow"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ THE FEATURES ARCHITECTURE ═══════════════ */}
            <section className="feat-section">
                {featuresData.map((feature, idx) => {
                    const isEven = idx % 2 !== 0;

                    return (
                        <div key={idx} className="feat-row">
                            <div className="container">
                                <div className="row align-items-center g-5">

                                    {/* Text Content */}
                                    <div className={`col-lg-6 ${isEven ? 'order-2' : 'order-1'} wow ${isEven ? 'fadeInLeft' : 'fadeInRight'}`}>
                                        <div className="feat-content-clean">
                                            <div className="feat-number-bg">{feature.num}</div>

                                            <div className="feat-icon-elegant">
                                                <i className={feature.icon}></i>
                                            </div>

                                            <span className="feat-subtitle">{feature.subtitle}</span>
                                            <AnimatedTitle>
                                                <h2 className="section-title__title text-white mb-3" dangerouslySetInnerHTML={{ __html: feature.title }} style={{ fontSize: '38px', lineHeight: '1.2' }}></h2>
                                            </AnimatedTitle>
                                            <p className="feat-desc-clean">{feature.desc}</p>

                                            <ul className="feat-list-minimal">
                                                {feature.list.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>

                                            <div className="feat-footer-note">
                                                <p>{feature.footerText}</p>
                                            </div>

                                            {feature.linkUrl && (
                                                <Link href={feature.linkUrl} className="feat-link-elegant">
                                                    {feature.linkText} <i className="fas fa-arrow-right mt-1" style={{ fontSize: 12 }}></i>
                                                </Link>
                                            )}
                                        </div>
                                    </div>

                                    {/* Abstract Imagery Wrapper */}
                                    <div className={`col-lg-6 ${isEven ? 'order-1' : 'order-2'} wow ${isEven ? 'fadeInRight' : 'fadeInLeft'}`}>
                                        <div className="feat-img-wrapper">
                                            <div className="feat-img-glare"></div>
                                            <Image
                                                src={feature.img}
                                                alt={feature.title}
                                                width={600}
                                                height={420}
                                                className="w-100"
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>

            {/* ═══════════════ UNIFIED PLATFORM ═══════════════ */}
            <section className="feat-unified-wrap position-relative overflow-hidden" style={{ background: 'var(--techguru-black)', border: 'none' }}>
                {/* Same Animated Background Shapes as Hero */}
                <div className="meswork-hero__glow-1"></div>
                <div className="meswork-hero__glow-2"></div>
                <div className="position-absolute float-bob-x" style={{ top: '10%', right: '5%', opacity: 0.06, zIndex: 0 }}>
                    <Image src="/assets/images/shapes/main-slider-two-shape-2.png" alt="shape" width={500} height={440} />
                </div>
                <div className="position-absolute float-bob-y" style={{ bottom: '5%', left: '2%', opacity: 0.05, zIndex: 0 }}>
                    <Image src="/assets/images/shapes/main-slider-two-shape-3.png" alt="shape" width={300} height={450} />
                </div>
                <div className="position-absolute" style={{ top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url(/assets/images/shapes/counter-one-bg-shape.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.04, zIndex: 0 }}></div>

                <div className="container position-relative z-1">
                    <div className="row justify-content-center mb-5 text-center">
                        <div className="col-lg-8 text-center wow fadeInUp">
                            <div className="section-title text-center mb-4">
                                <div className="section-title__tagline-box justify-content-center">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline">Integrated Manufacturing Monitoring</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <AnimatedTitle>
                                    <h2 className="section-title__title title-animation mb-4" style={{ fontSize: '46px', lineHeight: '1.2' }}>
                                        All Manufacturing Monitoring <br /> in <span>One Platform</span>
                                    </h2>
                                </AnimatedTitle>
                            </div>
                            <p className="wow fadeInUp mx-auto" data-wow-delay="200ms" style={{ color: 'rgba(255,255,255,0.45)', lineHeight: '1.8', fontSize: '17px', maxWidth: '720px', fontWeight: 400 }}>
                                Micraft MES integrates multiple manufacturing capabilities into a single platform:
                            </p>
                        </div>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {[
                            { name: "production tracking", icon: "fas fa-clipboard-check" },
                            { name: "shop floor monitoring", icon: "fas fa-video" },
                            { name: "machine utilization monitoring", icon: "fas fa-cogs" },
                            { name: "manufacturing process tracking", icon: "fas fa-project-diagram" },
                            { name: "quality inspection tracking", icon: "fas fa-shield-alt" },
                            { name: "production dashboards", icon: "fas fa-chart-line" }
                        ].map((item, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 100}ms`}>
                                <div className="feat-grid-box">
                                    <i className={item.icon}></i>
                                    <span>{item.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ FINAL CTA ═══════════════ */}
            <section className="newsletter-one newsletter-three" style={{ padding: '80px 0 0 0' }}>
                <div className="container">
                    <div className="newsletter-one__inner" style={{ background: 'linear-gradient(90deg, #FA5674 0%, #6065D4 100%)' }}>
                        <div className="newsletter-one__shape-bg"
                            style={{ backgroundImage: "url(/assets/images/shapes/newsletter-one-shape-bg.png)" }}></div>
                        <div className="newsletter-one__shape-1 float-bob-x">
                            <Image src="/assets/images/shapes/newsletter-one-shape-1.png" alt="Image" width={416} height={368} priority />
                        </div>
                        <div className="newsletter-one__shape-2"></div>
                        <div className="newsletter-one__shape-3"></div>
                        <div className="newsletter-one__img">
                            <Image src="/assets/images/backgrounds/cta.png" alt="Image" width={280} height={280} priority />
                        </div>

                        <div className="row justify-content-center text-center">
                            <div className="col-lg-10" style={{ position: 'relative', zIndex: 5 }}>
                                <AnimatedTitle>
                                    <h2 className="newsletter-one__title text-white mb-20" style={{ fontSize: '42px', lineHeight: '1.2' }}>
                                        Explore Micraft MES Features <br />
                                        <span>in Action</span>
                                    </h2>
                                </AnimatedTitle>
                                <p className="newsletter-one__text text-white mb-40 mx-auto" style={{ maxWidth: '750px' }}>
                                    See how Micraft MES helps manufacturing companies monitor production operations and improve factory performance. Schedule a Live Demo to explore the platform features.
                                </p>

                                <div className="cta-btns d-flex flex-wrap justify-content-center gap-4">
                                    <Link href="/contact" className="thm-btn" style={{ background: '#0B192C', color: '#fff' }}>
                                        Book Your Demo <span className="icon-arrow-right"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
                    .newsletter-three {
                        padding: 40px 0 !important;
                    }
                    .newsletter-one__img {
                        position: absolute;
                        right: 40px;
                        top: 50%;
                        transform: translateY(-50%);
                        display: flex;
                        align-items: center;
                        height: auto;
                        z-index: 2;
                    }
                    .thm-btn:hover {
                        background: #fff !important;
                        color: #0B192C !important;
                    }
                    @media (max-width: 1199px) {
                        .newsletter-one__img {
                            right: 20px;
                        }
                        .newsletter-one__img img {
                            width: 200px;
                            height: auto;
                        }
                    }
                    @media (max-width: 991px) {
                        .newsletter-one__img {
                            display: none !important;
                        }
                        .newsletter-one__shape-1 {
                            display: none;
                        }
                        .newsletter-one__inner {
                            padding: 60px 20px;
                            margin: 0 15px;
                        }
                    }
                    @media (max-width: 767px) {
                        .newsletter-one__title {
                            font-size: 30px !important;
                            line-height: 1.3 !important;
                        }
                        .newsletter-one__text {
                            font-size: 15px;
                            margin-bottom: 30px !important;
                        }
                        .cta-btns {
                            flex-direction: column;
                            align-items: center;
                            gap: 15px !important;
                        }
                        .thm-btn {
                            width: 100%;
                            max-width: 100%;
                            justify-content: center;
                        }
                    }
                `}} />
            </section>

        </Layout>
    )
}