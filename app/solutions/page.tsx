import Layout from "@/components/layout/Layout"
import Breadcrumb from "@/components/layout/Breadcrumb"
import Link from "next/link"
import Image from "next/image"
import AnimatedTitle from "@/components/elements/AnimatedTitle"
import "@/public/assets/css/module-css/micraftmeswork.css"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/solutions',
  },
    title: 'Manufacturing Execution Solutions | Shop Floor Visibility | Micraft MES',
    description: 'Explore Micraft MES solutions including production tracking software, shop floor visibility, and factory monitoring systems designed for manufacturing SMEs.',
    keywords: ['Production Tracking Software', 'Shop Floor Visibility Software', 'Factory Production Monitoring System', 'Digital Production Dashboard', 'Machine Utilization Tracking', 'Manufacturing Execution System'],
}

export default function SolutionsPage() {

    const solutions = [
        {
            title: "Production Tracking Software",
            desc: "Digitize your production tracking process and monitor work order progress in real time across multiple production stages.",
            href: "/solutions/production-tracking-software",
            icon: "fas fa-chart-line",
            color: "#3D72FC"
        },
        {
            title: "Shop Floor Visibility Software",
            desc: "Gain real-time visibility of shop floor operations, production progress, and operator activities from a centralized dashboard.",
            href: "/solutions/shop-floor-visibility-software",
            icon: "fas fa-eye",
            color: "#FA5674"
        },
        {
            title: "Factory Production Monitoring System",
            desc: "Monitor production performance across machines, workstations, and production lines with live factory monitoring dashboards.",
            href: "/solutions/factory-production-monitoring-system",
            icon: "fas fa-industry",
            color: "#00D261"
        },
        {
            title: "Digital Production Dashboard",
            desc: "Access live visual dashboards displaying real-time production data, work order status, and factory performance metrics.",
            href: "/solutions/digital-production-dashboard",
            icon: "fas fa-tachometer-alt",
            color: "#7366CA"
        },
        {
            title: "Machine Utilization Tracking Software",
            desc: "Track machine usage, idle time, and productivity to maximize equipment efficiency and reduce production delays.",
            href: "/solutions/machine-utilization-tracking",
            icon: "fas fa-microchip",
            color: "#6065D4"
        },
        {
            title: "Quality Inspection Tracking System",
            desc: "Digitally record inspection results, monitor quality performance, and track rejection trends across production processes.",
            href: "/solutions/quality-inspection-tracking",
            icon: "fas fa-vial",
            color: "#00D2FF"
        }
    ];

    return (
        <Layout headerStyle={1} footerStyle={2}>

            <Breadcrumb breadcrumbTitle="Manufacturing Solutions" />

            {/* ═══════════════ SOLUTIONS HERO ═══════════════ */}
            <section className="meswork-hero overflow-hidden position-relative" style={{ background: 'linear-gradient(135deg, #070C14 0%, #0D1421 100%)', paddingTop: 160, paddingBottom: 100 }}>
                <div className="meswork-hero__glow-1"></div>
                <div className="meswork-hero__glow-2"></div>

                <div className="container position-relative z-1">
                    <div className="row align-items-center g-5">
                        <div className="col-xl-6 col-lg-7">
                            <div className="meswork-hero__content text-left wow fadeInLeft" data-wow-delay="100ms">
                                <div className="section-title text-left mb-4">
                                    <div className="section-title__tagline-box">
                                        <div className="section-title__tagline-shape-1"></div>
                                        <span className="section-title__tagline">Manufacturing Solutions</span>
                                        <div className="section-title__tagline-shape-2"></div>
                                    </div>
                                    <AnimatedTitle>
                                        <h1 className="section-title__title title-animation mb-4" style={{ fontSize: '56px', lineHeight: '1.1' }}>
                                            Digital Solutions for Real-Time <br /> <span>Manufacturing Visibility</span>
                                        </h1>
                                    </AnimatedTitle>
                                </div>

                                <p className="mb-5" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontSize: '18px', fontWeight: 500 }}>
                                    Micraft MES provides a comprehensive set of solutions designed to help manufacturing companies gain complete control over shop floor operations, production performance, and delivery timelines. From production tracking to real-time factory monitoring, Micraft MES helps manufacturers digitize operations and improve operational efficiency.
                                </p>
                                
                                <div className="d-flex flex-wrap gap-4">
                                    <Link href="#solutions-grid" className="thm-btn">Explore Solutions <span className="icon-right-arrow"></span></Link>
                                    <Link href="/contact" className="thm-btn thm-btn--two">Book a Demo <span className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-6 col-lg-5">
                            <div className="meswork-hero__image-box wow fadeInRight" data-wow-delay="300ms">
                                <div className="position-relative p-2 rounded-5 overflow-hidden shadow-2xl" style={{ 
                                    background: 'rgba(255,255,255,0.03)', 
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    boxShadow: '0 40px 100px -20px rgba(0,0,0,0.8)'
                                }}>
                                    <Image src="/assets/images/resources/solutions-hero.png" alt="Micraft MES Visibility Dashboard" width={800} height={500} className="img-fluid rounded-4 shadow-lg" style={{ filter: 'brightness(1.1)', width: '100%', height: 'auto' }} />
                                    
                                    {/* Stats Badge */}
                                    <div className="position-absolute bottom-0 start-0 p-4 w-100">
                                        <div className="p-3 rounded-4 backdrop-blur-md d-inline-flex align-items-center gap-3" style={{ background: 'rgba(7,12,20,0.7)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                            <div className="rounded-circle bg-success" style={{ width: 10, height: 10, boxShadow: '0 0 15px #00D261' }}></div>
                                            <span className="text-white extra-small fw-bold letter-spacing-1">REAL-TIME PRODUCTION SYNC</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ SOLUTIONS GRID ═══════════════ */}
            <section id="solutions-grid" className="py-5 position-relative" style={{ background: '#08111F' }}>
                <div className="container py-4 position-relative z-1">
                    <div className="section-title text-center mb-50 wow fadeInUp">
                        <span className="section-title__tagline" style={{ color: '#FA5674' }}>Manufacturing Solutions</span>
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white">Full Suite of <span>Digital Manufacturing Tools</span></h2>
                        </AnimatedTitle>
                    </div>
                    
                    <div className="row g-4">
                        {solutions.map((item, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 100}ms`}>
                                <div className="meswork-glass p-5 rounded-4 h-100 transition-all hover-translate-y d-flex flex-column shadow-lg" style={{ border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
                                    {/* Accent Glow */}
                                    <div className="position-absolute" style={{ top: '-10%', right: '-10%', width: '120px', height: '120px', borderRadius: '50%', background: `${item.color}10`, filter: 'blur(35px)', zIndex: 0 }}></div>

                                    <div className="position-relative z-1 flex-grow-1">
                                        <div className="d-inline-flex align-items-center justify-content-center mb-4 rounded-3" style={{ width: 60, height: 60, background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}>
                                            <i className={`${item.icon} fs-3`}></i>
                                        </div>
                                        <h3 className="h5 fw-bold mb-3" style={{ fontSize: '20px' }}>
                                            <Link href={item.href} className="text-white text-decoration-none transition-all hover-base">
                                                {item.title}
                                            </Link>
                                        </h3>
                                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px', lineHeight: '1.6', marginBottom: '30px' }}>{item.desc}</p>
                                    </div>

                                    <div className="mt-auto position-relative z-1 pt-3 border-top border-white border-opacity-05">
                                        <Link href={item.href} className="text-primary-light d-inline-flex align-items-center gap-2 fw-bold text-decoration-none transition-all hover-base">
                                            Learn More about {item.title} <i className="icon-right-arrow-1" style={{ fontSize: '12px' }}></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ═══════════════ IMPLEMENTATION FLOW DIAGRAM ═══════════════ */}
            <section className="py-5 position-relative overflow-hidden" style={{ background: '#02050A', padding: '120px 0' }}>
                {/* Background Grid Pattern */}
                <div className="position-absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3D72FC 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>
                
                <div className="container position-relative z-1">
                    <div className="section-title text-center mb-80 wow fadeInUp">
                        <div className="section-title__tagline-box justify-content-center">
                            <span className="section-title__tagline" style={{ color: '#00D261' }}>Implementation Logic</span>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white">The Micraft <span>Implementation Flow</span></h2>
                        </AnimatedTitle>
                        <p className="text-white-50 mt-4 mx-auto" style={{ maxWidth: '700px' }}>
                            A streamlined digital manufacturing journey designed to minimize disruption and maximize shop-floor visibility in weeks.
                        </p>
                    </div>

                    <div className="implementation-flow-wrapper position-relative py-5">
                        {/* Desktop SVG Path */}
                        <svg className="position-absolute d-none d-lg-block" width="100%" height="200" style={{ top: '50px', left: 0, zIndex: 0, overflow: 'visible' }}>
                            <path 
                                d="M 120 40 Q 250 180, 500 40 T 900 40" 
                                fill="none" 
                                stroke="url(#flow-gradient)" 
                                strokeWidth="3" 
                                strokeDasharray="10 10"
                                className="flow-path-animation"
                            />
                            <defs>
                                <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#3D72FC" />
                                    <stop offset="50%" stopColor="#FA5674" />
                                    <stop offset="100%" stopColor="#00D261" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <div className="row g-4 row-cols-1 row-cols-lg-5 justify-content-center">
                            {[
                                { t: "Process Assessment", s: "Phase 01", i: "search", c: "#3D72FC", d: "Mapping your shop floor data nodes." },
                                { t: "System Config", s: "Phase 02", i: "cog", c: "#FA5674", d: "Tailoring logic to your workflows." },
                                { t: "Floor Deployment", s: "Phase 03", i: "industry", c: "#7366CA", d: "Installing tracking interfaces." },
                                { t: "Team Training", s: "Phase 04", i: "users", c: "#00D261", d: "Ensuring accurate data capture." },
                                { t: "Operational Live", s: "Phase 05", i: "rocket", c: "#6065D4", d: "Switching to digital monitoring." }
                            ].map((step, idx) => (
                                <div key={idx} className="col wow fadeInUp" data-wow-delay={`${idx * 150}ms`}>
                                    <div className="flow-node-container text-center pt-lg-0 pt-4">
                                        <div className="flow-icon-wrap mx-auto mb-4 d-flex align-items-center justify-content-center rounded-circle z-2 position-relative shadow-lg" style={{ 
                                            width: '80px', 
                                            height: '80px', 
                                            background: '#08111F', 
                                            border: `2px solid ${step.c}40`,
                                            boxShadow: `0 0 30px ${step.c}15`
                                        }}>
                                            <i className={`fas fa-${step.i} fs-4`} style={{ color: step.c }}></i>
                                            <div className="position-absolute" style={{ bottom: '-5px', right: '-5px', width: '24px', height: '24px', borderRadius: '50%', background: step.c, color: '#fff', fontSize: '10px', fontWeight: '900', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>{idx + 1}</div>
                                        </div>
                                        <div className="node-content px-2">
                                            <span className="extra-small fw-bold uppercase letter-spacing-2 mb-2 d-block" style={{ color: step.c, fontSize: '10px' }}>{step.s}</span>
                                            <h3 className="text-white h6 fw-bold mb-2">{step.t}</h3>
                                            <p className="text-white-50 extra-small opacity-50 mb-0 px-xl-2" style={{ fontSize: '12px', lineHeight: '1.4' }}>{step.d}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ INDUSTRIES SERVED ═══════════════ */}
            <section className="py-5" style={{ background: '#070C14' }}>
                <div className="container py-4">
                    <div className="section-title text-center mb-5 wow fadeInUp">
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white">Industries Using <span>Micraft MES</span></h2>
                        </AnimatedTitle>
                        <p className="text-white-50 mt-3">These industries benefit from real-time production monitoring and improved operational control.</p>
                    </div>
                    <div className="row g-3 justify-content-center">
                        {[
                            "CNC Machining & Engineering",
                            "Automotive Component Manufacturing",
                            "Fabrication & Metal Processing",
                            "Plastic Injection Molding",
                            "Electronics Manufacturing"
                        ].map((industry, i) => (
                            <div key={i} className="col-lg-2 col-md-4 col-sm-6 text-center wow fadeInUp" data-wow-delay={`${i * 100}ms`}>
                                <div className="p-3 rounded-3 h-100 d-flex align-items-center justify-content-center" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <h4 className="text-white mb-0" style={{ fontSize: '13px', fontWeight: '500' }}>{industry}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ QUICK LINKS ═══════════════ */}
            <section className="py-4" style={{ background: '#02050A', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container text-center">
                    <div className="d-flex flex-wrap justify-content-center gap-4">
                        <Link href="/solutions/production-tracking-software" className="text-white-50 text-decoration-none hover-white small transition-all">Production Tracking</Link>
                        <Link href="/solutions/shop-floor-visibility-software" className="text-white-50 text-decoration-none hover-white small transition-all">Shop Floor Visibility</Link>
                        <Link href="/solutions/factory-production-monitoring-system" className="text-white-50 text-decoration-none hover-white small transition-all">Factory Monitoring</Link>
                        <Link href="/solutions/digital-production-dashboard" className="text-white-50 text-decoration-none hover-white small transition-all">Digital Dashboard</Link>
                        <Link href="/solutions/machine-utilization-tracking" className="text-white-50 text-decoration-none hover-white small transition-all">Machine Tracking</Link>
                        <Link href="/solutions/quality-inspection-tracking" className="text-white-50 text-decoration-none hover-white small transition-all">Quality Inspection</Link>
                    </div>
                </div>
            </section>

            {/* ═══════════════ CTA SECTION ═══════════════ */}
            <section className="newsletter-one newsletter-three py-5" style={{ background: '#0B1320' }}>
                <div className="container py-5">
                    <div className="newsletter-one__inner" style={{ background: 'linear-gradient(90deg, #FA5674 0%, #6065D4 100%)', borderRadius: '40px' }}>
                        <div className="newsletter-one__shape-bg" style={{ backgroundImage: "url(/assets/images/shapes/newsletter-one-shape-bg.png)" }}></div>
                        <div className="newsletter-one__img d-none d-xl-flex">
                            <Image src="/assets/images/backgrounds/cta.png" alt="CTA Image" width={280} height={280} priority />
                        </div>

                        <div className="row justify-content-center text-center">
                            <div className="col-lg-10 position-relative" style={{ zIndex: 5 }}>
                                <AnimatedTitle>
                                    <h2 className="text-white mb-3" style={{ fontSize: '42px', lineHeight: '1.2', fontWeight: 800 }}>
                                        Transform Your Factory with <br /><span>Real-Time Production Visibility</span>
                                    </h2>
                                </AnimatedTitle>
                                <p className="text-white mb-5 mx-auto" style={{ maxWidth: '700px', fontSize: '17px', opacity: 0.9 }}>
                                    Discover how Micraft MES helps manufacturing companies digitize shop floor operations and gain complete production visibility.
                                </p>
                                <div className="d-flex flex-wrap justify-content-center gap-4">
                                    <Link href="/contact" className="thm-btn" style={{ background: '#0B192C', color: '#fff' }}>
                                        Schedule a Live Demo <span className="icon-arrow-right"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
                .meswork-hero {
                    padding: 120px 0 80px;
                    background: #070C14;
                }
                .text-primary-light {
                    color: #5D8CFF;
                }
                .marquee-content {
                    animation: marquee 30s linear infinite;
                    min-width: 100%;
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .flow-path-animation {
                    stroke-dasharray: 10, 5;
                    animation: dash 5s linear infinite;
                }
                @keyframes dash {
                    to {
                        stroke-dashoffset: -100;
                    }
                }
                .hover-translate-y:hover {
                    transform: translateY(-10px);
                    border-color: rgba(255,255,255,0.15) !important;
                }
                .newsletter-one__img {
                    position: absolute;
                    right: 40px;
                    top: 50%;
                    transform: translateY(-50%);
                }
                @media (max-width: 991px) {
                    .newsletter-one__inner {
                        padding: 60px 20px;
                    }
                }
            ` }} />

        </Layout>
    )
}
