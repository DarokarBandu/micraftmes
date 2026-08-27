"use client" // Triggering type re-validation post-directory-refactor
import Layout from "../../../components/layout/Layout"
import Breadcrumb from "../../../components/layout/Breadcrumb"
import Link from "next/link"
import Image from "next/image"
import AnimatedTitle from "../../../components/elements/AnimatedTitle"
import FinalCTA from "../../../components/sections/home1/FinalCTA"

export default function AboutMicraftPage() {
    return (
        <Layout headerStyle={1} footerStyle={2}>
            {/* Meta Tags handled by Layout or common head, but I will focus on content structure */}
            <Breadcrumb breadcrumbTitle="About Micraft" />
            {/* 1. Hero Section */}
            <section className="about-one pt-100 pb-100 overflow-hidden" id="about-hero" style={{ backgroundColor: '#070C14' }}>
                <div className="about-one__shape-1"></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6">
                            <div className="about-one__left wow fadeInLeft" data-wow-delay="100ms">
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <div className="section-title__tagline-box">
                                        <div className="section-title__tagline-shape-1"></div>
                                        <span className="section-title__tagline">Manufacturing Software Company</span>
                                        <div className="section-title__tagline-shape-2"></div>
                                    </div>
                                    <AnimatedTitle>
                                        <h1 className="section-title__title title-animation">
                                            About Micraft – <span>Building the Future of Manufacturing Visibility</span>
                                        </h1>
                                    </AnimatedTitle>
                                </div>
                                <p className="about-one__text-1 mb-4 fw-bold text-white" style={{ fontSize: '18px' }}>
                                    Micraft develops modern manufacturing technology platforms that help factories gain real-time visibility of production operations and improve manufacturing efficiency.
                                </p>
                                <div className="about-one__text-box mb-4">
                                    <p className="about-one__text-2 mb-3">Manufacturing companies operate in complex production environments where operational visibility, machine utilization, and workflow coordination are critical for success.</p>
                                    <p className="about-one__text-2">Micraft focuses on building software platforms that help manufacturers digitize shop floor operations and monitor factory performance through real-time production insights.</p>
                                </div>
                                <div className="about-one__btn-box mt-4">
                                    <Link href="/solutions/production-tracking-software" className="thm-btn">
                                        Explore Micraft MES<span className="icon-right-arrow"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-one__right wow fadeInRight" data-wow-delay="200ms">
                                <div className="about-one__img-box rounded-4 overflow-hidden border border-secondary border-opacity-25 shadow-lg">
                                    <Image
                                        src="/assets/images/backgrounds/Realtimeshopfloor.jpg"
                                        alt="Manufacturing Visibility"
                                        width={600}
                                        height={500}
                                        className="img-fluid"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2 & 3. Mission & Vision - Premium Glassmorphic Cards */}
            <section className="mission-vision pt-100 pb-100" style={{ background: '#0e121d', position: 'relative' }}>
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-6 col-md-10 wow fadeInUp" data-wow-delay="100ms">
                            <div className="mission-vision-card h-100 p-5 rounded-4" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                                <div className="icon-box mb-4" style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #FA5674 0%, #6065D4 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <i className="fas fa-bullseye text-white" style={{ fontSize: '24px' }}></i>
                                </div>
                                <h2 className="text-white mb-4" style={{ fontSize: '32px', fontWeight: '700' }}>Our Mission</h2>
                                <p className="text-white mb-4" style={{ fontWeight: '600' }}>
                                    Our mission is to help manufacturing companies gain complete operational visibility across their factory floor.
                                </p>
                                <p className="text-white-50 mb-4">
                                    Many factories still rely on manual systems to track production activities. These methods limit transparency and delay operational decision-making.
                                </p>
                                <div className="mission-list">
                                    <h4 className="text-white mb-3" style={{ fontSize: '18px' }}>Enabling manufacturers to:</h4>
                                    <ul className="list-unstyled d-flex flex-column gap-2 text-white-50">
                                        <li><i className="fas fa-check-circle me-3" style={{ color: '#FA5674' }}></i>digitize shop floor processes</li>
                                        <li><i className="fas fa-check-circle me-3" style={{ color: '#FA5674' }}></i>monitor production operations in real time</li>
                                        <li><i className="fas fa-check-circle me-3" style={{ color: '#FA5674' }}></i>improve manufacturing efficiency</li>
                                        <li><i className="fas fa-check-circle me-3" style={{ color: '#FA5674' }}></i>make data-driven operational decisions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10 wow fadeInUp" data-wow-delay="200ms">
                            <div className="mission-vision-card h-100 p-5 rounded-4" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                                <div className="icon-box mb-4" style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #FA5674 0%, #6065D4 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <i className="fas fa-eye text-white" style={{ fontSize: '24px' }}></i>
                                </div>
                                <h2 className="text-white mb-4" style={{ fontSize: '32px', fontWeight: '700' }}>Our Vision</h2>
                                <p className="text-white mb-4" style={{ fontWeight: '600' }}>
                                    Our vision is to enable the transition toward digitally connected manufacturing operations.
                                </p>
                                <p className="text-white-50 mb-4">
                                    As manufacturing becomes more competitive, factories require digital systems that provide real-time insights into production activities.
                                </p>
                                <div className="vision-list">
                                    <h4 className="text-white mb-3" style={{ fontSize: '18px' }}>Building platforms that help:</h4>
                                    <ul className="list-unstyled d-flex flex-column gap-2 text-white-50">
                                        <li><i className="fas fa-check-circle me-3" style={{ color: '#6065D4' }}></i>improve operational visibility</li>
                                        <li><i className="fas fa-check-circle me-3" style={{ color: '#6065D4' }}></i>optimize factory performance</li>
                                        <li><i className="fas fa-check-circle me-3" style={{ color: '#6065D4' }}></i>build smarter manufacturing environments</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Why We Focus on Manufacturing */}
            <section className="focus-section pt-100 pb-100" style={{ background: '#11131a' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay="100ms">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline">Industry Focus</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white">Focused on <span>Manufacturing Technology</span></h2>
                                </AnimatedTitle>
                            </div>
                            <div className="text-white-50 mt-4">
                                <p className="mb-3">Manufacturing operations involve complex production workflows that require precise monitoring and coordination.</p>
                                <p className="mb-3">While many enterprise software systems focus on business processes, they often lack real-time visibility of shop floor operations.</p>
                                <p className="mb-3">Micraft focuses specifically on manufacturing technology solutions that monitor production processes and provide operational insights directly from the factory floor.</p>
                                <p>This focus allows us to develop solutions that address real manufacturing challenges.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1 wow fadeInLeft" data-wow-delay="200ms">
                            <div className="focus-img p-2 bg-dark border border-secondary border-opacity-25 rounded-4 shadow-lg overflow-hidden">
                                <Image
                                    src="/assets/images/backgrounds/PracticalImplementation.jpg"
                                    alt="Focus on Manufacturing"
                                    width={600}
                                    height={400}
                                    className="img-fluid rounded"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Our Core Platform – Micraft MES */}
            <section className="platform-section pt-100 pb-100" style={{ background: '#070C14' }}>
                <div className="container">
                    <div className="section-title text-center mb-50">
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white">Micraft MES – <span>Manufacturing Execution System</span></h2>
                        </AnimatedTitle>
                    </div>
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="platform-content text-white-50">
                                <p className="mb-4 text-white" style={{ fontSize: '18px', fontWeight: '500' }}>
                                    Micraft MES is designed to help manufacturers monitor and manage production operations in real time.
                                </p>
                                <div className="tracking-list mb-4">
                                    <h4 className="text-white mb-3">The platform enables factories to track:</h4>
                                    <div className="row">
                                        {[
                                            { name: "Production Order Progress", icon: "tasks" },
                                            { name: "Machine Utilization", icon: "cogs" },
                                            { name: "Manufacturing Workflows", icon: "sitemap" },
                                            { name: "Inspection Results", icon: "check-double" },
                                            { name: "Dispatch Readiness", icon: "shipping-fast" }
                                        ].map((item, idx) => (
                                            <div key={idx} className="col-md-6 mb-3">
                                                <div className="p-3 rounded-3 d-flex align-items-center gap-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                    <i className={`fas fa-${item.icon}`} style={{ color: '#FA5674' }}></i>
                                                    <span className="text-white" style={{ fontSize: '14px' }}>{item.name}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <p>Micraft MES converts production data into real-time operational insights through centralized dashboards.</p>
                                <div className="mt-4">
                                    <Link href="/solutions/production-tracking-software" className="capability-link" style={{ color: '#FA5674' }}>
                                        Micraft MES Overview <span className="icon-right-arrow"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="platform-img rounded-4 overflow-hidden shadow-2xl">
                                <Image
                                    src="/assets/images/micraftmeswork/shop-floor-data.png"
                                    alt="Micraft MES Platform"
                                    width={700}
                                    height={500}
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Founder’s Perspective */}
            <section className="founder-section pt-100 pb-100" style={{ background: '#0e121d' }}>
                <div className="container">
                    <div className="founder-card p-5 rounded-5 overflow-hidden position-relative" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <div className="row align-items-center g-5">
                            <div className="col-lg-4 text-center">
                                <div className="founder-img-wrap mx-auto" style={{ width: '250px', height: '250px', borderRadius: '50%', border: '5px solid #FA5674', overflow: 'hidden', padding: '0' }}>
                                    <Image src="/assets/images/team/jalindra-Shinde.png" alt="Jalindra Shinde" width={250} height={250} className="rounded-circle" style={{ objectFit: 'cover' }} />
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-white mb-1">Jalindra Shinde</h3>
                                    <p style={{ color: '#fa56e1ff', fontWeight: '700' }}>Founder & Director</p>
                                    <Link href="https://www.linkedin.com/in/jalindrashinde/" target="_blank" className="text-white-50 hover-white transition-all">
                                        <i className="fab fa-linkedin fa-2x"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="section-title text-left mb-4">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline">Message from the Founder</span>
                                    </div>
                                    <h2 className="section-title__title text-white">Founder’s <span>Perspective</span></h2>
                                </div>
                                <div className="quote-box text-white-50" style={{ position: 'relative' }}>
                                    <i className="fas fa-quote-left position-absolute top-0 start-0 opacity-10" style={{ fontSize: '80px', translate: '-40px -40px' }}></i>
                                    <p className="mb-4" style={{ fontSize: '18px', lineHeight: '1.7', position: 'relative', zIndex: 1 }}>
                                        &quot;Manufacturing companies often struggle with limited visibility of their shop floor operations. Many factories still rely on manual processes to track production activities, making it difficult to monitor efficiency and identify operational bottlenecks.&quot;
                                    </p>
                                    <p className="mb-4" style={{ position: 'relative', zIndex: 1 }}>
                                        &quot;Micraft was founded with the belief that manufacturers should have clear, real-time visibility into their factory operations. Our goal is to help factories move beyond manual tracking and adopt digital systems that enable better production monitoring, faster decision-making, and improved operational efficiency.&quot;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Industries We Support */}
            <section className="industries-section pt-100 pb-100" style={{ background: '#11131a' }}>
                <div className="container">
                    <div className="section-title text-center mb-50">
                        <div className="section-title__tagline-box justify-content-center">
                            <span className="section-title__tagline">Diverse Applications</span>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white">Manufacturing Industries <span>We Serve</span></h2>
                        </AnimatedTitle>
                    </div>
                    <div className="row g-4">
                        {[
                            "CNC machining and engineering manufacturing",
                            "automotive component manufacturing",
                            "fabrication and metal processing",
                            "plastic injection molding manufacturing",
                            "electronics manufacturing",
                            "general manufacturing SMEs"
                        ].map((industry, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 100}ms`}>
                                <div className="industry-box h-100 p-4 rounded-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.3s ease' }}>
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="industry-icon" style={{ width: '40px', height: '40px', background: 'rgba(250, 86, 116, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FA5674' }}>
                                            <i className="fas fa-industry"></i>
                                        </div>
                                        <h4 className="text-white m-0" style={{ fontSize: '16px', fontWeight: '600' }}>{industry}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-5">
                        <p className="text-white-50">Each of these industries requires real-time production monitoring and operational visibility to remain competitive.</p>
                    </div>
                </div>
            </section>

            {/* 8. Our Approach */}
            <section className="approach-section pt-100 pb-100" style={{ background: '#0e121d' }}>
                <div className="container">
                    <div className="row align-items-center gap-lg-5">
                        <div className="col-lg-7 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="section-title text-left">
                                <h2 className="section-title__title text-white">Our <span>Approach</span></h2>
                                <p className="mt-4 text-white" style={{ fontSize: '18px' }}>
                                    Micraft builds manufacturing software with a strong focus on practical usability for real factory environments.
                                </p>
                            </div>
                            <div className="approach-features mt-5">
                                <div className="row g-4">
                                    {[
                                        { title: "Design for Shop Floor", desc: "Building systems specifically for shop floor teams, not just meeting rooms." },
                                        { title: "Simplify Workflows", desc: "Taking complex manufacturing processes and making them intuitive." },
                                        { title: "Fast Implementation", desc: "Enabling rapid system rollout to ensure speed of value." },
                                        { title: "Scalable Solutions", desc: "Supporting manufacturing SMEs with technology that grows with them." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="col-md-6">
                                            <div className="approach-item">
                                                <h4 className="text-white mb-2" style={{ fontSize: '20px', fontWeight: '700' }}>{item.title}</h4>
                                                <p className="text-white-50" style={{ fontSize: '15px' }}>{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInRight" data-wow-delay="200ms">
                            <div className="approach-visual p-4 rounded-5" style={{ background: 'linear-gradient(135deg, #1A2234 0%, #070C14 100%)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <Image src="/assets/images/resources/MicraftMESOverview.png" alt="Micraft Approach" width={400} height={400} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Core Values */}
            <section className="core-values-section py-5 position-relative overflow-hidden"
                style={{
                    backgroundImage: 'url(/assets/images/backgrounds/PracticalImplementation.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '120px 0'
                }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(7, 12, 20, 0.92)',
                    zIndex: 1
                }}></div>
                <div className="container position-relative" style={{ zIndex: 2 }}>
                    <div className="section-title text-center mb-60">
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white">Our <span>Core Values</span></h2>
                        </AnimatedTitle>
                    </div>
                    <div className="row g-4">
                        {[
                            { title: "Manufacturing First", desc: "We focus on solving real manufacturing challenges." },
                            { title: "Practical Innovation", desc: "We build solutions that factories can adopt easily." },
                            { title: "Simplicity", desc: "We design software that is intuitive for shop floor teams." },
                            { title: "Continuous Improvement", desc: "We believe manufacturing operations should evolve through data-driven insights." }
                        ].map((value, idx) => (
                            <div key={idx} className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 100}ms`}>
                                <div className="value-card-premium h-100 p-5 rounded-4 text-center d-flex flex-column align-items-center shadow-lg"
                                    style={{
                                        background: 'rgba(255,255,255,0.02)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        backdropFilter: 'blur(10px)',
                                        transition: 'all 0.4s ease'
                                    }}>
                                    <div className="value-number mb-4" style={{ fontSize: '48px', fontWeight: '900', color: 'rgba(250, 86, 116, 0.4)', lineHeight: '1' }}>0{idx + 1}</div>
                                    <h3 className="text-white mb-3" style={{ fontSize: '22px', fontWeight: '700' }}>{value.title}</h3>
                                    <p className="text-white-50 m-0">{value.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. Technology Philosophy - Marquee Style */}
            <section className="philosophy-marquee-section py-50" style={{ background: '#0e121d', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
                <div className="marquee-wrapper d-flex align-items-center">
                    <div className="marquee-content d-flex align-items-center gap-5 py-4">
                        {[
                            "THREAD UNIFIED",
                            "BUSINESS + EXECUTION",
                            "MACRO TO MICRO SYNC",
                            "DATA-DRIVEN FACTORY",
                            "INTEGRATED ECOSYSTEM",
                            "REAL-TIME VISIBILITY",
                            "OPERATIONAL EXCELLENCE",
                            "SCALABLE ARCHITECTURE"
                        ].map((phi, idx) => (
                            <div key={idx} className="marquee-item d-flex align-items-center gap-3">
                                <span className="philosophy-text text-white fw-900" style={{ fontSize: '18px', letterSpacing: '2px', whiteSpace: 'nowrap' }}>{phi}</span>
                                <div className="divider-dot" style={{ width: '8px', height: '8px', backgroundColor: '#FA5674', boxShadow: '0 0 10px #FA5674' }}></div>
                            </div>
                        ))}
                        {/* Duplicate for infinite effect if needed via CSS, or just large container for now */}
                        {[
                            "THREAD UNIFIED",
                            "BUSINESS + EXECUTION",
                            "MACRO TO MICRO SYNC",
                            "DATA-DRIVEN FACTORY",
                            "INTEGRATED ECOSYSTEM",
                            "REAL-TIME VISIBILITY",
                            "OPERATIONAL EXCELLENCE",
                            "SCALABLE ARCHITECTURE"
                        ].map((phi, idx) => (
                            <div key={`dup-${idx}`} className="marquee-item d-flex align-items-center gap-3">
                                <span className="philosophy-text text-white fw-900" style={{ fontSize: '18px', letterSpacing: '2px', whiteSpace: 'nowrap' }}>{phi}</span>
                                <div className="divider-dot" style={{ width: '8px', height: '8px', backgroundColor: '#FA5674', boxShadow: '0 0 10px #FA5674' }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-content {
                    display: flex;
                    animation: marquee 30s linear infinite;
                    width: max-content;
                }
                .philosophy-marquee-section:hover .marquee-content {
                    animation-play-state: paused;
                }
                .fw-900 { font-weight: 900; }
            `}} />

            {/* 11 & 12. Journey & Commitment */}
            <section className="journey-section pt-100 pb-100" style={{ background: '#11131a' }}>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="section-title text-left">
                                <h2 className="section-title__title text-white">Our <span>Journey</span></h2>
                            </div>
                            <div className="journey-text text-white-50 mt-4">
                                <p className="mb-3">Micraft has evolved with a strong focus on manufacturing technology and digital production monitoring.</p>
                                <p className="mb-3">Our journey reflects a commitment to helping manufacturing companies adopt systems that improve operational transparency and efficiency.</p>
                                <p>As manufacturing continues to evolve, Micraft remains focused on building platforms that enable modern, connected, and efficient factory operations.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="journey-img-box p-3 rounded-5" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div className="rounded-4 overflow-hidden shadow-2xl">
                                    <Image
                                        src="/assets/images/backgrounds/EndtoEndVisibility.jpg"
                                        alt="Our Journey"
                                        width={600}
                                        height={400}
                                        className="img-fluid"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 pt-lg-5 g-5 align-items-center">
                        <div className="col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay="100ms">
                            <div className="section-title text-left">
                                <h2 className="section-title__title text-white">Driving Manufacturing <span>Innovation</span></h2>
                            </div>
                            <div className="innovation-text text-white-50 mt-4">
                                <p className="mb-4">Manufacturing is undergoing a major transformation driven by digital technologies. Micraft is committed to supporting this transformation by helping manufacturers implement systems that enable:</p>
                                <ul className="list-unstyled d-flex flex-column gap-3">
                                    <li className="d-flex align-items-center gap-3">
                                        <div style={{ width: '10px', height: '10px', backgroundColor: '#FA5674', borderRadius: '50%' }}></div>
                                        <span className="text-white">real-time production monitoring</span>
                                    </li>
                                    <li className="d-flex align-items-center gap-3">
                                        <div style={{ width: '10px', height: '10px', backgroundColor: '#FA5674', borderRadius: '50%' }}></div>
                                        <span className="text-white">digital manufacturing insights</span>
                                    </li>
                                    <li className="d-flex align-items-center gap-3">
                                        <div style={{ width: '10px', height: '10px', backgroundColor: '#FA5674', borderRadius: '50%' }}></div>
                                        <span className="text-white">improved operational efficiency</span>
                                    </li>
                                </ul>
                                <p className="mt-4">Our goal is to help factories move toward smart manufacturing operations.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1 wow fadeInLeft" data-wow-delay="200ms">
                            <div className="innovation-img-box p-3 rounded-5" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div className="rounded-4 overflow-hidden shadow-2xl">
                                    <Image
                                        src="/assets/images/backgrounds/ProductionandDowntime.jpg"
                                        alt="Manufacturing Innovation"
                                        width={600}
                                        height={400}
                                        className="img-fluid"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 13. Call to Action */}
            <FinalCTA />

            <style dangerouslySetInnerHTML={{
                __html: `
                .about-one__shape-1 {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 50%;
                    height: 100%;
                    background: radial-gradient(circle at 60% 40%, rgba(250, 86, 116, 0.05) 0%, transparent 70%);
                    pointer-events: none;
                }
                .mission-vision-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(250, 86, 116, 0.4) !important;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
                    transition: all 0.4s ease;
                }
                .industry-box:hover {
                    background: rgba(255, 255, 255, 0.06) !important;
                    border-color: #FA5674 !important;
                    transform: scale(1.02);
                }
                .value-card-premium:hover {
                    background: rgba(255, 255, 255, 0.05) !important;
                    border-color: #FA5674 !important;
                    transform: translateY(-10px);
                }
                .transition-all {
                    transition: all 0.3s ease;
                }
                .hover-white:hover {
                    color: white !important;
                    transform: scale(1.1);
                }
                .phi-item:hover {
                    background: rgba(250, 86, 116, 0.05);
                    border-color: rgba(250, 86, 116, 0.3) !important;
                }
            ` }} />
        </Layout>
    )
}
