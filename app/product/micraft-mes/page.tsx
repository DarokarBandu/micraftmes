"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Layout from "@/components/layout/Layout"
import Breadcrumb from "@/components/layout/Breadcrumb"
import Link from "next/link"
import Image from "next/image"
import AnimatedTitle from "@/components/elements/AnimatedTitle"

export default function MicraftMesOverviewPage() {
    return (
        <Layout headerStyle={1} footerStyle={2}>
            <Breadcrumb breadcrumbTitle="Micraft MES – Manufacturing Execution System" />
            {/* about overview */}
            <section className="about-one" id="about">
                <div className="about-one__shape-1"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <div className="about-one__left">
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <div className="section-title__tagline-box">
                                        <div className="section-title__tagline-shape-1"></div>
                                        <span className="section-title__tagline">Complete Manufacturing Execution</span>
                                        <div className="section-title__tagline-shape-2"></div>
                                    </div>
                                    <AnimatedTitle>
                                        <h1 className="section-title__title title-animation">
                                            Micraft MES – <span>Real-Time Production Visibility</span>
                                        </h1>
                                    </AnimatedTitle>
                                </div>
                                <p className="about-one__text-1 mb-4 fw-bold text-white">Digitize shop floor operations, monitor production in real time, and improve manufacturing efficiency with Micraft MES.</p>
                                <p className="about-one__text-2 mb-4">Micraft MES is a modern Manufacturing Execution System designed for manufacturing companies that need real-time visibility of factory operations. It enables manufacturers to track production orders, monitor machine utilization, manage inspections, and analyze production performance through centralized digital dashboards.</p>
                                <div className="about-one__btn-box d-flex flex-wrap gap-3 mt-4">
                                    <Link href="/book-demo" className="thm-btn">Book a Live Demo<span className="icon-right-arrow"></span></Link>
                                    <Link href="/features" className="thm-btn thm-btn--two" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)' }}>Explore MES Features<span className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="about-one__right">
                                <div className="about-one__left-img-box">
                                    <div className="about-one__left-img">
                                        <Image 
                                            src="/assets/images/resources/MicraftMESOverview.png" 
                                            alt="Micraft MES Overview" 
                                            width={700} 
                                            height={500} 
                                            className="img-fluid" 
                                            priority 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Micraft MES Section - Premium Redesign */}
            <section className="what-is-mes who-is-for" id="detailed-overview" style={{ padding: '60px 0', background: '#08111F' }}>
                <div className="who-is-for__shape-1"></div>
                <div className="who-is-for__shape-2"></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="row align-items-center g-5">
                        {/* Left Side: Definition & Concept */}
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="who-is-for__card shadow-none" style={{ background: 'transparent', padding: 0, border: 'none' }}>
                                <div className="section-title text-left mb-4">
                                    <div className="section-title__tagline-box">
                                        <div className="section-title__tagline-shape-1"></div>
                                        <span className="section-title__tagline">What is Micraft MES</span>
                                        <div className="section-title__tagline-shape-2"></div>
                                    </div>
                                    <AnimatedTitle>
                                        <h2 className="section-title__title text-white mt-3">
                                            Manufacturing Execution System <span>for Real-Time Production Visibility</span>
                                        </h2>
                                    </AnimatedTitle>
                                </div>
                                <div className="content-box pe-xl-4">
                                    <p className="description-text mb-4 text-white opacity-75" style={{ lineHeight: '1.7' }}>
                                        Micraft MES is a manufacturing execution system that connects shop floor operations with real-time production monitoring.
                                    </p>
                                    <p className="mb-4 text-white opacity-60" style={{ fontSize: '16px' }}>
                                        The platform helps manufacturers track and monitor production activities across the factory floor to ensure schedule adherence and quality compliance.
                                    </p>

                                    <div className="impact-quote mt-5 p-4 rounded-4 position-relative" style={{
                                        background: 'rgba(250, 86, 116, 0.05)',
                                        borderLeft: '4px solid #FA5674',
                                        overflow: 'hidden'
                                    }}>
                                        <div className="quote-icon position-absolute opacity-10" style={{ top: '-10px', right: '10px' }}>
                                            <svg width="60" height="60" viewBox="0 0 24 24" fill="#FA5674"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56929 13 6.017 13H5.017V21H6.017Z" /></svg>
                                        </div>
                                        <p className="mb-0 text-white fw-medium" style={{ fontSize: '15px', color: '#E2E8F0 !important' }}>
                                            By digitizing shop floor operations, Micraft MES provides manufacturers with
                                            <span style={{ color: '#FA5674', display: 'block', marginTop: '5px', fontSize: '18px', fontWeight: '700' }}>Complete Operational Visibility</span>
                                            and better production control.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Features/Tracking Matrix */}
                        <div className="col-lg-6">
                            <div className="who-is-for__card p-4 p-xl-5 shadow-lg" style={{ borderRadius: '30px', border: 'none' }}>
                                <h4 className="text-white mb-4" style={{ fontSize: '20px', fontWeight: '700' }}>
                                    Enterprise-Grade Tracking:
                                </h4>
                                <div className="who-is-for__list-custom d-flex flex-column gap-3">
                                    {[
                                        { title: "Work Order Progress", icon: "clipboard-list" },
                                        { title: "Machine Utilization", icon: "activity" },
                                        { title: "Production Output", icon: "package" },
                                        { title: "Inspection Results", icon: "shield-check" },
                                        { title: "Dispatch Readiness", icon: "truck" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="hexagon-item wow fadeInRight" data-wow-delay={`${idx * 100}ms`}>
                                            <div className="hexagon-icon-box" style={{ background: 'linear-gradient(135deg, #FA5674 0%, #6065D4 100%)', border: 'none' }}>
                                                <i className={`fas fa-${item.icon === 'activity' ? 'cog' : item.icon === 'package' ? 'box' : item.icon === 'shield-check' ? 'shield-alt' : item.icon === 'truck' ? 'truck-loading' : 'clipboard-list'} text-white`} style={{ fontSize: '16px' }}></i>
                                            </div>
                                            <span className="hexagon-text text-white fw-bold" style={{ fontSize: '16px', opacity: 1 }}>{item.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .what-is-mes :global(.who-is-for__card) {
                        border: none !important;
                    }
                    .what-is-mes :global(.section-title__tagline-box) {
                        border: none !important;
                    }
                `}</style>
            </section>

            {/* Why Manufacturers Need MES Section - Re-designed with Feature Two UI */}
            <section className="why-choose-one py-5" id="why-mes" style={{ backgroundColor: '#070C14', padding: '90px 0' }}>
                <div className="container" style={{ maxWidth: '1200px' }}>
                    <div className="section-title text-center mb-20">
                        <div className="section-title__tagline-box">
                            <div className="section-title__tagline-shape-1"></div>
                            <span className="section-title__tagline">Why Manufacturers Need MES</span>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white">
                                Why Manufacturers Need <span>Micraft MES?</span>
                            </h2>
                        </AnimatedTitle>
                        <p className="mt-3 text-white opacity-75" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            Many factories still rely on manual methods to track production operations, including paper production registers, spreadsheets, and verbal updates from supervisors. These methods create operational blind spots and lack real-time visibility.
                        </p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-6 col-md-12 mb-30 wow fadeInUp" data-wow-delay="100ms">
                            <div className="feature-two__single h-100">
                                <div className="feature-two__icon">
                                    <span className="icon-clock"></span>
                                </div>
                                <h3 className="feature-two__title">No Real-Time Visibility</h3>
                                <p className="feature-two__text">Struggle to see what&apos;s happening on the production floor in real-time.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-12 mb-30 wow fadeInUp" data-wow-delay="200ms">
                            <div className="feature-two__single h-100">
                                <div className="feature-two__icon">
                                    <span className="icon-pin"></span>
                                </div>
                                <h3 className="feature-two__title">Delayed Reporting</h3>
                                <p className="feature-two__text">Compiling reports take hours or days, making them outdated instantly.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-12 mb-30 wow fadeInUp" data-wow-delay="300ms">
                            <div className="feature-two__single h-100">
                                <div className="feature-two__icon">
                                    <span className="icon-strategy"></span>
                                </div>
                                <h3 className="feature-two__title">Hidden Bottlenecks</h3>
                                <p className="feature-two__text">Inability to pinpoint exactly where production stops or slows down.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-12 mb-30 wow fadeInUp" data-wow-delay="400ms">
                            <div className="feature-two__single h-100">
                                <div className="feature-two__icon">
                                    <span className="icon-quality"></span>
                                </div>
                                <h3 className="feature-two__title">Poor Machine Utility</h3>
                                <p className="feature-two__text">Guessing machine performance instead of using sensor-based data.</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-5">
                        <div className="conclusion-reveal d-inline-block p-4 rounded-4" style={{ background: 'rgba(250, 86, 116, 0.05)', borderLeft: '4px solid #FA5674' }}>
                            <h4 className="text-white mb-0" style={{ fontSize: '18px', fontWeight: '600' }}>
                                Micraft MES eliminates these challenges by providing real-time monitoring of factory operations.
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Capabilities Section */}
            <section className="capabilities-section who-is-for" id="capabilities" style={{ background: '#0e121d', position: 'relative', overflow: 'hidden', padding: '90px 0' }}>
                {/* Background animation shapes from existing theme */}
                <div className="who-is-for__shape-1"></div>
                <div className="who-is-for__shape-2"></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="section-title text-center mb-50">
                        <div className="section-title__tagline-box">
                            <div className="section-title__tagline-shape-1"></div>
                            <span className="section-title__tagline">Key Capabilities of Micraft MES</span>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white">
                                Key Capabilities of the <span>Micraft MES Platform</span>
                            </h2>
                        </AnimatedTitle>
                    </div>

                    <div className="row g-4">
                        {/* Capability 1: Production Tracking */}
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="capability-card h-100">
                                <div className="capability-img-box">
                                    <Image src="/assets/images/capabilities/production-tracking-v3.png" alt="Production Tracking" width={120} height={120} className="capability-illustration" />
                                </div>
                                <div className="capability-content">
                                    <h3><Link href="/solutions/production-tracking-software">Production Tracking</Link></h3>
                                    <p>Track work orders across multiple production stages with real-time status and yield tracking.</p>
                                    <Link href="/solutions/production-tracking-software" className="capability-link">
                                        Explore Solution <span className="icon-right-arrow"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Capability 2: Shop Floor Visibility */}
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="capability-card h-100">
                                <div className="capability-img-box">
                                    <Image src="/assets/images/capabilities/shop-floor-visibility.png" alt="Shop Floor Visibility" width={120} height={120} className="capability-illustration" />
                                </div>
                                <div className="capability-content">
                                    <h3><Link href="/solutions/shop-floor-visibility-software">Shop Floor Visibility</Link></h3>
                                    <p>Monitor shop floor operations in real time to eliminate operational blind spots and respond rapidly.</p>
                                    <Link href="/solutions/shop-floor-visibility-software" className="capability-link">
                                        Explore Solution <span className="icon-right-arrow"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Capability 3: Machine Utilization */}
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="capability-card h-100">
                                <div className="capability-img-box">
                                    <Image src="/assets/images/capabilities/machine-utilization.png" alt="Machine Utilization" width={120} height={120} className="capability-illustration" />
                                </div>
                                <div className="capability-content">
                                    <h3><Link href="/solutions/machine-utilization-tracking">Machine Utilization Monitoring</Link></h3>
                                    <p>Track machine activity, downtime reasons, and equipment productivity using real-time sensor data.</p>
                                    <Link href="/solutions/machine-utilization-tracking" className="capability-link">
                                        Explore Solution <span className="icon-right-arrow"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Capability 4: Manufacturing Process Tracking */}
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            <div className="capability-card h-100">
                                <div className="capability-img-box">
                                    <Image src="/assets/images/capabilities/process-tracking.png" alt="Manufacturing Process" width={120} height={120} className="capability-illustration" />
                                </div>
                                <div className="capability-content">
                                    <h3><Link href="/solutions/manufacturing-process-tracking">Manufacturing Process Tracking</Link></h3>
                                    <p>Monitor multi-stage production workflows and ensure every step follows the defined standard.</p>
                                    <Link href="/solutions/manufacturing-process-tracking" className="capability-link">
                                        Explore Solution <span className="icon-right-arrow"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Capability 5: Quality Inspection Tracking */}
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                            <div className="capability-card h-100">
                                <div className="capability-img-box">
                                    <Image src="/assets/images/capabilities/quality-inspection.png" alt="Quality Inspection" width={120} height={120} className="capability-illustration" />
                                </div>
                                <div className="capability-content">
                                    <h3><Link href="/features/quality-inspection-management">Quality Inspection Tracking</Link></h3>
                                    <p>Record inspection results and defect data at the source for instant quality traceability and root cause analysis.</p>
                                    <Link href="/features/quality-inspection-management" className="capability-link">
                                        Explore Solution <span className="icon-right-arrow"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Capability 6: Dashboards */}
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="600ms">
                            <div className="capability-card h-100">
                                <div className="capability-img-box">
                                    <Image src="/assets/images/capabilities/dashboard-monitoring.png" alt="Production Dashboard" width={120} height={120} className="capability-illustration" />
                                </div>
                                <div className="capability-content">
                                    <h3><Link href="/solutions/digital-production-dashboard">Production Monitoring Dashboards</Link></h3>
                                    <p>Visualize factory performance using digital dashboards that display OEE, yield, and live metrics.</p>
                                    <Link href="/solutions/digital-production-dashboard" className="capability-link">
                                        Explore Solution <span className="icon-right-arrow"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-8px); }
                    }
                    .capability-card {
                        background: rgba(255, 255, 255, 0.03);
                        border: 1px solid rgba(255, 255, 255, 0.08);
                        border-radius: 16px;
                        padding: 30px;
                        transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                        position: relative;
                        overflow: hidden;
                    }
                    .capability-card::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 3px;
                        height: 0;
                        background: linear-gradient(180deg, #FA5674 0%, #6065D4 100%);
                        transition: height 0.4s ease;
                    }
                    .capability-card:hover::before {
                        height: 100%;
                    }
                    .capability-card:hover {
                        transform: translateY(-8px);
                        background: rgba(255, 255, 255, 0.06);
                        border-color: rgba(250, 86, 116, 0.4);
                        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(250, 86, 116, 0.08);
                    }
                    .capability-img-box {
                        width: 100px;
                        height: 100px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 20px;
                        animation: float 4s ease-in-out infinite;
                    }
                    .capability-card:nth-child(2) .capability-img-box { animation-delay: 0.5s; }
                    .capability-card:nth-child(3) .capability-img-box { animation-delay: 1s; }
                    .capability-card:nth-child(4) .capability-img-box { animation-delay: 1.5s; }
                    .capability-card:nth-child(5) .capability-img-box { animation-delay: 2s; }
                    .capability-card:nth-child(6) .capability-img-box { animation-delay: 2.5s; }
                    :global(.capability-illustration) {
                        width: 100px !important;
                        height: 100px !important;
                        object-fit: contain;
                        filter: drop-shadow(0 5px 15px rgba(0,0,0,0.3));
                        transition: all 0.4s ease;
                        mix-blend-mode: lighten;
                        border-radius: 12px;
                    }
                    .capability-card:hover :global(.capability-illustration) {
                        transform: scale(1.1);
                        filter: drop-shadow(0 8px 25px rgba(250, 86, 116, 0.25));
                    }
                    .capability-content h3 {
                        font-size: 18px;
                        font-weight: 700;
                        margin-bottom: 10px;
                        line-height: 1.4;
                    }
                    .capability-content h3 a {
                        color: #fff;
                        transition: all 0.3s ease;
                    }
                    .capability-card:hover .capability-content h3 a {
                        color: #FFD25D;
                    }
                    .capability-content p {
                        font-size: 14px;
                        color: rgba(255,255,255,0.55);
                        line-height: 1.7;
                        margin-bottom: 20px;
                    }
                    :global(.capability-link) {
                        font-size: 13px;
                        font-weight: 600;
                        color: rgba(255, 210, 93, 0.8);
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        letter-spacing: 0.5px;
                        transition: all 0.3s ease;
                    }
                    :global(.capability-link:hover) {
                        gap: 12px;
                        color: #FFD25D;
                    }
                    :global(.capability-link span) {
                        font-size: 10px;
                    }
                `}</style>
            </section>

            {/* How Micraft MES Works Workflow Section */}
            <section className="how-it-works-section" id="how-it-works" style={{ backgroundColor: '#0e121d', padding: '90px 0' }}>
                {/* Visual Background Elements */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.15, backgroundImage: "url(/assets/images/shapes/counter-one-bg-shape.png)", backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }}></div>
                <div className="counter-one__shape-1" style={{ zIndex: 0 }}></div>
                <div className="counter-one__shape-2" style={{ zIndex: 0 }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="section-title text-center mb-50">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">How Micraft MES Works</span>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white">
                                How Micraft MES <span>Works in a Factory</span>
                            </h2>
                        </AnimatedTitle>
                        <p className="mt-20 text-white-50 mx-auto" style={{ maxWidth: '750px', fontSize: '18px', lineHeight: '1.6' }}>
                            Micraft MES captures production data directly from shop floor operations and displays it through centralized dashboards.
                        </p>
                    </div>

                    <div className="workflow-timeline position-relative">
                        {/* Connecting Line */}
                        <div className="workflow-line d-none d-xl-block"></div>

                        <div className="row g-4 position-relative z-1 align-items-stretch">
                            {/* Step 1 */}
                            <div className="col-xl col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="workflow-step">
                                    <div className="workflow-number-wrap">
                                        <div className="workflow-number">01</div>
                                    </div>
                                    <div className="workflow-card">
                                        <h4 className="text-white mb-15">Create Orders</h4>
                                        <p className="text-white-50">Production orders are created in the system</p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="col-xl col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="workflow-step">
                                    <div className="workflow-number-wrap">
                                        <div className="workflow-number">02</div>
                                    </div>
                                    <div className="workflow-card">
                                        <h4 className="text-white mb-15">Update Progress</h4>
                                        <p className="text-white-50">Operators update work order progress during production</p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="col-xl col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="workflow-step">
                                    <div className="workflow-number-wrap">
                                        <div className="workflow-number">03</div>
                                    </div>
                                    <div className="workflow-card">
                                        <h4 className="text-white mb-15">Machine Record</h4>
                                        <p className="text-white-50">Machine activity and output are recorded</p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="col-xl col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div className="workflow-step">
                                    <div className="workflow-number-wrap">
                                        <div className="workflow-number">04</div>
                                    </div>
                                    <div className="workflow-card">
                                        <h4 className="text-white mb-15">Capture Results</h4>
                                        <p className="text-white-50">Inspection results are captured digitally</p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 5 */}
                            <div className="col-xl col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="500ms">
                                <div className="workflow-step">
                                    <div className="workflow-number-wrap">
                                        <div className="workflow-number">05</div>
                                    </div>
                                    <div className="workflow-card">
                                        <h4 className="text-white mb-15">Pack & Dispatch</h4>
                                        <p className="text-white-50">Packing and dispatch readiness are tracked</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .workflow-timeline {
                        padding-top: 15px;
                    }
                    .workflow-line {
                        position: absolute;
                        top: 45px; 
                        left: 10%;
                        right: 10%;
                        height: 2px;
                        background: rgba(250, 86, 116, 0.2);
                        z-index: 0;
                    }
                    .workflow-line::after {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 100%;
                        width: 100px;
                        background: #FA5674;
                        box-shadow: 0 0 15px #FA5674;
                        animation: flowLine 4s linear infinite;
                    }
                    @keyframes flowLine {
                        0% { left: 0%; opacity: 0; }
                        10% { opacity: 1; }
                        90% { opacity: 1; }
                        100% { left: 100%; opacity: 0; }
                    }
                    .workflow-step {
                        text-align: center;
                        position: relative;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .workflow-number-wrap {
                        background: #0e121d; 
                        padding: 10px;
                        border-radius: 50%;
                        display: inline-block;
                        margin-bottom: 25px;
                        position: relative;
                        z-index: 2;
                    }
                    .workflow-number {
                        width: 70px;
                        height: 70px;
                        background: linear-gradient(135deg, rgba(250, 86, 116, 0.1) 0%, rgba(96, 101, 212, 0.1) 100%);
                        border: 2px solid rgba(250, 86, 116, 0.3);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 24px;
                        font-weight: 800;
                        color: #FA5674;
                        transition: all 0.4s ease;
                        position: relative;
                        box-shadow: 0 0 20px rgba(250, 86, 116, 0.1);
                    }
                    .workflow-step:hover .workflow-number {
                        background: linear-gradient(135deg, #FA5674 0%, #6065D4 100%);
                        color: white;
                        transform: scale(1.1);
                        border-color: transparent;
                        box-shadow: 0 10px 25px rgba(250, 86, 116, 0.4);
                    }
                    .workflow-card {
                        background: rgba(255, 255, 255, 0.03);
                        border: 1px solid rgba(255, 255, 255, 0.08);
                        border-radius: 16px;
                        padding: 30px 20px;
                        width: 100%;
                        min-height: 160px;
                        transition: all 0.4s ease;
                        backdrop-filter: blur(10px);
                        position: relative;
                    }
                    .workflow-card::before {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 3px;
                        background: linear-gradient(90deg, #FA5674 0%, #6065D4 100%);
                        transform: scaleX(0);
                        transition: transform 0.4s ease;
                        border-radius: 0 0 16px 16px;
                    }
                    .workflow-step:hover .workflow-card::before {
                        transform: scaleX(1);
                    }
                    .workflow-step:hover .workflow-card {
                        background: rgba(255, 255, 255, 0.06);
                        border-color: rgba(250, 86, 116, 0.4);
                        transform: translateY(-5px);
                    }
                    .workflow-card h4 {
                        font-size: 19px;
                        font-weight: 700;
                        line-height: 1.3;
                    }
                    .workflow-card p {
                        font-size: 14px;
                        line-height: 1.6;
                        margin-bottom: 0;
                    }
                `}</style>
            </section>


            <section className="feature-one position-relative" style={{ backgroundColor: '#11131a', padding: '90px 0' }}>
                <div className="container">
                    {/* Full Width Heading */}
                    <div className="section-title text-center mb-40 wow fadeInUp" data-wow-delay="100ms">
                        <div className="section-title__tagline-box justify-content-center">
                            <div className="section-title__tagline-shape-1"></div>
                            <span className="section-title__tagline">Why Choose Us</span>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white" style={{ fontSize: '42px', lineHeight: '1.2' }}>
                                Benefits of Implementing <br className="d-md-none" />
                                <span>Micraft MES</span>
                            </h2>
                        </AnimatedTitle>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-xl-6 wow fadeInLeft" data-wow-delay="200ms">
                            <div className="feature-one__img-wrapper p-3 bg-dark border border-secondary border-opacity-25 rounded-4 shadow-lg position-relative w-100">
                                <div className="position-relative w-100 h-100 overflow-hidden rounded-3" style={{ aspectRatio: '4/3' }}>
                                    <Image src="/assets/images/backgrounds/PracticalImplementation.jpg" alt="Benefits of Micraft MES" fill priority style={{ objectFit: 'cover' }} />
                                    {/* Overlay shape for aesthetic flair */}
                                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(135deg, rgba(96,101,212,0.2), rgba(250,86,116,0.2))' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="ps-xl-4 mt-4 mt-xl-0">
                                <div className="benefits-wrapper wow fadeInRight" data-wow-delay="300ms">
                                    <div className="benefit-item">
                                        <div className="benefit-icon"><i className="fas fa-chart-line"></i></div>
                                        <div className="benefit-content">
                                            <h4>Real-Time Visibility</h4>
                                            <p>Monitor factory operations instantly.</p>
                                        </div>
                                    </div>

                                    <div className="benefit-item">
                                        <div className="benefit-icon"><i className="fas fa-bolt"></i></div>
                                        <div className="benefit-content">
                                            <h4>Improved Efficiency</h4>
                                            <p>Identify bottlenecks & optimize workflow.</p>
                                        </div>
                                    </div>

                                    <div className="benefit-item">
                                        <div className="benefit-icon"><i className="fas fa-eye"></i></div>
                                        <div className="benefit-content">
                                            <h4>Real-Time Production Visibility</h4>
                                            <p>Monitor factory operations instantly.</p>
                                        </div>
                                    </div>

                                    <div className="benefit-item">
                                        <div className="benefit-icon"><i className="fas fa-chart-line"></i></div>
                                        <div className="benefit-content">
                                            <h4>Improved Production Efficiency</h4>
                                            <p>Identify bottlenecks and optimize workflows.</p>
                                        </div>
                                    </div>

                                    <div className="benefit-item">
                                        <div className="benefit-icon"><i className="fas fa-cogs"></i></div>
                                        <div className="benefit-content">
                                            <h4>Better Machine Utilization</h4>
                                            <p>Track equipment productivity and reduce idle time.</p>
                                        </div>
                                    </div>

                                    <div className="benefit-item">
                                        <div className="benefit-icon"><i className="fas fa-file-alt"></i></div>
                                        <div className="benefit-content">
                                            <h4>Accurate Production Reporting</h4>
                                            <p>Generate reliable production insights.</p>
                                        </div>
                                    </div>

                                    <div className="benefit-item">
                                        <div className="benefit-icon"><i className="fas fa-microscope"></i></div>
                                        <div className="benefit-content">
                                            <h4>Improved Quality Monitoring</h4>
                                            <p>Track inspection results & defect trends.</p>
                                        </div>
                                    </div>

                                    <div className="benefit-item">
                                        <div className="benefit-icon"><i className="fas fa-shipping-fast"></i></div>
                                        <div className="benefit-content">
                                            <h4>Improved Delivery Performance</h4>
                                            <p>Ensure production stays aligned with dispatch schedules.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .benefits-wrapper {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        gap: 12px;
                    }
                    @media (max-width: 767px) {
                        .benefits-wrapper {
                            grid-template-columns: 1fr;
                        }
                    }
                    .benefit-item {
                        display: flex;
                        align-items: flex-start;
                        gap: 12px;
                        background: rgba(255, 255, 255, 0.02);
                        padding: 12px 15px;
                        border-radius: 12px;
                        transition: all 0.3s ease;
                        border: 1px solid rgba(255, 255, 255, 0.05);
                        border-left: 3px solid transparent;
                    }
                    .benefit-item:hover {
                        transform: translateY(-3px);
                        border-left-color: #FA5674;
                        background: rgba(255, 255, 255, 0.05);
                        border-color: rgba(250, 86, 116, 0.2);
                        box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                    }
                    .benefit-icon {
                        width: 42px;
                        height: 42px;
                        min-width: 42px;
                        background: linear-gradient(135deg, rgba(96,101,212,0.1), rgba(250,86,116,0.1));
                        color: #FA5674;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 16px;
                        transition: all 0.3s ease;
                    }
                    .benefit-item:hover .benefit-icon {
                        background: linear-gradient(135deg, #FA5674, #6065D4);
                        color: #ffffff;
                        transform: rotateY(180deg);
                        box-shadow: 0 5px 15px rgba(250, 86, 116, 0.4);
                    }
                    .benefit-content {
                        margin-top: 0;
                    }
                    .benefit-content h4 {
                        font-size: 15px;
                        font-weight: 700;
                        margin-bottom: 2px;
                        color: #ffffff;
                        transition: color 0.3s ease;
                        letter-spacing: -0.1px;
                    }
                    .benefit-item:hover .benefit-content h4 {
                        color: #FA5674;
                    }
                    .benefit-content p {
                        font-size: 12px;
                        color: rgba(255, 255, 255, 0.65);
                        margin-bottom: 0;
                        line-height: 1.35;
                    }
                `}</style>
            </section>

            {/* Industries Section */}
            <section className="blog-page position-relative" id="industries" style={{ backgroundColor: '#0e121d', padding: '90px 0' }}>
                <div className="blog-page__shape-1"></div>
                <div className="blog-page__shape-2"></div>
                <div className="container">
                    <div className="section-title text-center mb-50">
                        <div className="section-title__tagline-box justify-content-center">
                            <div className="section-title__tagline-shape-1"></div>
                            <span className="section-title__tagline">Industries We Serve</span>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white">
                                Manufacturing Industries Using <br />
                                <span>Micraft MES</span>
                            </h2>
                        </AnimatedTitle>
                    </div>

                    <div className="industry-carousel-wrapper">
                        <Swiper
                            modules={[Autoplay, Pagination, Navigation]}
                            spaceBetween={24}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            navigation={true}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            className="industry-swiper"
                        >
                            {/* Industry 1: CNC Machining */}
                            <SwiperSlide>
                                <div className="blog-one__single shadow-lg h-100 mb-3" style={{ background: '#11131a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', overflow: 'hidden' }}>
                                    <div className="blog-one__img" style={{ height: '180px', overflow: 'hidden' }}>
                                        <Image src="/assets/images/industries/cnc-v2.png" alt="CNC Machining" width={400} height={200} style={{ objectFit: 'cover', height: '100%' }} />
                                    </div>
                                    <div className="blog-one__content p-3 position-relative">
                                        <h3 className="industry-header mt-0 mb-2">
                                            <Link href="/industries/cnc-machining" style={{ fontSize: '18px' }}>CNC Machining & Engineering</Link>
                                        </h3>
                                        <p className="industry-description">Precision engineering tools to optimize tool paths and production schedules.</p>
                                        <div className="industry-btn-bar mt-3 pt-3">
                                            <Link href="/industries/cnc-machining" className="thm-btn" style={{ padding: '8px 20px', fontSize: '12px' }}>Explore Industry <span className="icon-right-arrow"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Industry 2: Automotive */}
                            <SwiperSlide>
                                <div className="blog-one__single shadow-lg h-100 mb-3" style={{ background: '#11131a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', overflow: 'hidden' }}>
                                    <div className="blog-one__img" style={{ height: '180px', overflow: 'hidden' }}>
                                        <Image src="/assets/images/industries/automotive-v2.png" alt="Automotive" width={400} height={200} style={{ objectFit: 'cover', height: '100%' }} />
                                    </div>
                                    <div className="blog-one__content p-3 position-relative">
                                        <h3 className="industry-header mt-0 mb-2">
                                            <Link href="/industries/automotive" style={{ fontSize: '18px' }}>Automotive Component</Link>
                                        </h3>
                                        <p className="industry-description">Ensuring zero-defect quality and JIT delivery for critical automotive parts.</p>
                                        <div className="industry-btn-bar mt-3 pt-3">
                                            <Link href="/industries/automotive" className="thm-btn" style={{ padding: '8px 20px', fontSize: '12px' }}>Explore Industry <span className="icon-right-arrow"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Industry 3: Fabrication */}
                            <SwiperSlide>
                                <div className="blog-one__single shadow-lg h-100 mb-3" style={{ background: '#11131a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', overflow: 'hidden' }}>
                                    <div className="blog-one__img" style={{ height: '180px', overflow: 'hidden' }}>
                                        <Image src="/assets/images/industries/fabrication-v2.png" alt="Fabrication" width={400} height={200} style={{ objectFit: 'cover', height: '100%' }} />
                                    </div>
                                    <div className="blog-one__content p-3 position-relative">
                                        <h3 className="industry-header mt-0 mb-2">
                                            <Link href="/industries/fabrication" style={{ fontSize: '18px' }}>Fabrication & Metal Processing</Link>
                                        </h3>
                                        <p className="industry-description">Tracking throughput across sheet metal and fabrication workflows efficiently.</p>
                                        <div className="industry-btn-bar mt-3 pt-3">
                                            <Link href="/industries/fabrication" className="thm-btn" style={{ padding: '8px 20px', fontSize: '12px' }}>Explore Industry <span className="icon-right-arrow"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Industry 4: Plastic */}
                            <SwiperSlide>
                                <div className="blog-one__single shadow-lg h-100 mb-3" style={{ background: '#11131a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', overflow: 'hidden' }}>
                                    <div className="blog-one__img" style={{ height: '180px', overflow: 'hidden' }}>
                                        <Image src="/assets/images/industries/plastic-v2.png" alt="Plastic" width={400} height={200} style={{ objectFit: 'cover', height: '100%' }} />
                                    </div>
                                    <div className="blog-one__content p-3 position-relative">
                                        <h3 className="industry-header mt-0 mb-2">
                                            <Link href="/industries/plastic-molding" style={{ fontSize: '18px' }}>Plastic Injection Molding</Link>
                                        </h3>
                                        <p className="industry-description">Real-time cycle time monitoring for high-volume plastic production.</p>
                                        <div className="industry-btn-bar mt-3 pt-3">
                                            <Link href="/industries/plastic-molding" className="thm-btn" style={{ padding: '8px 20px', fontSize: '12px' }}>Explore Industry <span className="icon-right-arrow"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Industry 5: Electronics */}
                            <SwiperSlide>
                                <div className="blog-one__single shadow-lg h-100 mb-3" style={{ background: '#11131a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', overflow: 'hidden' }}>
                                    <div className="blog-one__img" style={{ height: '180px', overflow: 'hidden' }}>
                                        <Image src="/assets/images/industries/electronics-v2.png" alt="Electronics" width={400} height={200} style={{ objectFit: 'cover', height: '100%' }} />
                                    </div>
                                    <div className="blog-one__content p-3 position-relative">
                                        <h3 className="industry-header mt-0 mb-2">
                                            <Link href="/industries/electronics" style={{ fontSize: '18px' }}>Electronics Manufacturing</Link>
                                        </h3>
                                        <p className="industry-description">PCB assembly tracking and quality control for sensitive hardware manufacturing.</p>
                                        <div className="industry-btn-bar mt-3 pt-3">
                                            <Link href="/industries/electronics" className="thm-btn" style={{ padding: '8px 20px', fontSize: '12px' }}>Explore Industry <span className="icon-right-arrow"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Industry 6: SME */}
                            <SwiperSlide>
                                <div className="blog-one__single shadow-lg h-100 mb-3" style={{ background: '#11131a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', overflow: 'hidden' }}>
                                    <div className="blog-one__img" style={{ height: '180px', overflow: 'hidden' }}>
                                        <Image src="/assets/images/industries/general-sme-v2.png" alt="SME" width={400} height={200} style={{ objectFit: 'cover', height: '100%' }} />
                                    </div>
                                    <div className="blog-one__content p-3 position-relative">
                                        <h3 className="industry-header mt-0 mb-2">
                                            <Link href="/industries/general-manufacturing" style={{ fontSize: '18px' }}>General Manufacturing SMEs</Link>
                                        </h3>
                                        <p className="industry-description">Empowering small and medium enterprises with real-time digital factory control.</p>
                                        <div className="industry-btn-bar mt-3 pt-3">
                                            <Link href="/industries/general-manufacturing" className="thm-btn" style={{ padding: '8px 20px', fontSize: '12px' }}>Explore Industry <span className="icon-right-arrow"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <style jsx>{`
                    .industry-header {
                        font-weight: 700;
                        line-height: 1.3;
                    }
                    .industry-header a {
                        color: #ffffff;
                        transition: all 0.3s ease;
                        display: block;
                    }
                    .blog-one__single:hover .industry-header a {
                        color: #FA5674;
                    }
                    .industry-description {
                        font-size: 13px;
                        line-height: 1.5;
                        color: rgba(255, 255, 255, 0.6);
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        margin-bottom: 0;
                    }
                    .industry-btn-bar {
                        border-top: 1px solid rgba(255, 255, 255, 0.08);
                    }
                    /* Swiper Overrides */
                    :global(.industry-swiper) {
                        padding-bottom: 40px !important;
                    }
                    :global(.industry-swiper .swiper-pagination-bullet) {
                        background: #FA5674;
                        width: 8px;
                        height: 8px;
                    }
                    :global(.industry-swiper .swiper-button-next),
                    :global(.industry-swiper .swiper-button-prev) {
                        color: #FA5674;
                        transform: scale(0.5);
                    }
                `}</style>
            </section>

            {/* Section 8: Key Advantages - Compact Split UI */}
            <section className="mes-advantages position-relative" style={{ backgroundColor: '#070C14', overflow: 'hidden', padding: '90px 0' }}>
                <div className="container">
                    <div className="row align-items-center g-4">
                        <div className="col-lg-5 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="advantages-img-wrap p-1 border border-secondary border-opacity-10 rounded-4" style={{ background: 'rgba(255,255,255,0.02)' }}>
                                <Image src="/assets/images/resources/mes-advantages-v3.png" alt="Micraft MES Advantages" width={550} height={450} className="img-fluid rounded-3" />
                            </div>
                        </div>
                        <div className="col-lg-7 wow fadeInRight" data-wow-delay="200ms">
                            <div className="ps-xl-4">
                                <div className="section-title text-left mb-2">
                                    <div className="section-title__tagline-box mb-1">
                                        <span className="section-title__tagline">Operational Excellence</span>
                                    </div>
                                    <AnimatedTitle>
                                        <h2 className="section-title__title text-white mt-0 mb-2" style={{ fontSize: '32px' }}>
                                            Key Advantages of <span>The Platform</span>
                                        </h2>
                                    </AnimatedTitle>
                                </div>
                                <p className="mt-0 mb-2 text-white opacity-75" style={{ fontSize: '15px' }}>Digitize operations without heavy infrastructure or long cycles.</p>

                                <div className="advantages-list d-flex flex-column gap-2">
                                    {[
                                        { title: "Simple Shop Floor Interface", desc: "Minimal training required for operators." },
                                        { title: "Fast Deployment", desc: "Go live in weeks with pre-built workflows." },
                                        { title: "Real-Time Dashboards", desc: "Instant status from any factory device." },
                                        { title: "Scalable Growth", desc: "Scale from one machine to entire complexes." },
                                        { title: "Practical Workflows", desc: "Designed to solve real shop floor problems." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="advantage-row d-flex gap-2 wow fadeInUp" data-wow-delay={`${100 + idx * 150}ms`}>
                                            <div className="adv-icon-box mt-1" style={{ width: '20px', height: '20px', minWidth: '20px', borderRadius: '50%', background: '#FA5674', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <i className="fas fa-check text-white" style={{ fontSize: '8px' }}></i>
                                            </div>
                                            <div className="adv-text">
                                                <h4 className="text-white mb-0" style={{ fontSize: '16px', fontWeight: '700' }}>{item.title}</h4>
                                                <p className="mb-0 text-white-50" style={{ fontSize: '13px' }}>{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 9: Integrated Platform - Compact Bento UI */}
            <section className="integrated-platform" style={{ backgroundColor: '#0e121d', position: 'relative', padding: '90px 0' }}>
                <div className="container">
                    <div className="section-title text-center mb-3">
                        <div className="section-title__tagline-box justify-content-center mb-1">
                            <span className="section-title__tagline">Integrated Visibility</span>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white mt-0 mb-2" style={{ fontSize: '32px' }}>
                                Manufacturing Monitoring <span>In One Platform</span>
                            </h2>
                        </AnimatedTitle>
                        <p className="mt-0 text-white-50 mx-auto" style={{ maxWidth: '700px', fontSize: '14px' }}>
                            Micraft MES integrates multiple capabilities into a single unified platform.
                        </p>
                    </div>

                    <div className="row g-2">
                        {/* Center Visual */}
                        <div className="col-xl-6 order-xl-2 wow zoomIn" data-wow-delay="100ms">
                            <div className="hub-center-viz h-100 p-2 border border-secondary border-opacity-10 rounded-4 d-flex align-items-center justify-content-center bg-black bg-opacity-10" style={{ position: 'relative' }}>
                                <Image src="/assets/images/resources/integrated-hub-v3.png" alt="Integrated Platform Hub" width={450} height={450} className="img-fluid" />
                            </div>
                        </div>

                        {/* Bento Items Left */}
                        <div className="col-xl-3 col-lg-6 order-xl-1">
                            <div className="row g-2 h-100">
                                <div className="col-12">
                                    <div className="bento-card p-3 rounded-3 h-100 wow fadeInLeft" data-wow-delay="100ms" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                                        <div className="bento-icon mb-2" style={{ color: '#FA5674' }}><i className="fas fa-layer-group"></i></div>
                                        <h4 className="text-white mb-1" style={{ fontSize: '16px' }}>Production Tracking</h4>
                                        <p className="text-white-50 mb-0" style={{ fontSize: '12px' }}>Monitor output and yields live.</p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="bento-card p-3 rounded-3 h-100 wow fadeInLeft" data-wow-delay="300ms" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                                        <div className="bento-icon mb-2" style={{ color: '#6065D4' }}><i className="fas fa-desktop"></i></div>
                                        <h4 className="text-white mb-1" style={{ fontSize: '16px' }}>Shop Floor Monitoring</h4>
                                        <p className="text-white-50 mb-0" style={{ fontSize: '12px' }}>Real-time sensor and operator updates.</p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="bento-card p-3 rounded-3 h-100 wow fadeInLeft" data-wow-delay="500ms" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                                        <div className="bento-icon mb-2" style={{ color: '#FFD25D' }}><i className="fas fa-tachometer-alt"></i></div>
                                        <h4 className="text-white mb-1" style={{ fontSize: '16px' }}>Machine Utilization</h4>
                                        <p className="text-white-50 mb-0" style={{ fontSize: '12px' }}>Track key efficiency metrics.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bento Items Right */}
                        <div className="col-xl-3 col-lg-6 order-xl-3">
                            <div className="row g-2 h-100">
                                <div className="col-12">
                                    <div className="bento-card p-3 rounded-3 h-100 wow fadeInRight" data-wow-delay="100ms" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                                        <div className="bento-icon mb-2" style={{ color: '#FA5674' }}><i className="fas fa-project-diagram"></i></div>
                                        <h4 className="text-white mb-1" style={{ fontSize: '16px' }}>Process Monitoring</h4>
                                        <p className="text-white-50 mb-0" style={{ fontSize: '12px' }}>Ensure adherence to procedures.</p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="bento-card p-3 rounded-3 h-100 wow fadeInRight" data-wow-delay="300ms" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                                        <div className="bento-icon mb-2" style={{ color: '#6065D4' }}><i className="fas fa-clipboard-check"></i></div>
                                        <h4 className="text-white mb-1" style={{ fontSize: '16px' }}>Quality Inspection</h4>
                                        <p className="text-white-50 mb-0" style={{ fontSize: '12px' }}>Digital traceability of defects.</p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="bento-card p-3 rounded-3 h-100 wow fadeInRight" data-wow-delay="500ms" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                                        <div className="bento-icon mb-2" style={{ color: '#FFD25D' }}><i className="fas fa-truck-loading"></i></div>
                                        <h4 className="text-white mb-1" style={{ fontSize: '16px' }}>Dispatch Readiness</h4>
                                        <p className="text-white-50 mb-0" style={{ fontSize: '12px' }}>Logistics and packing monitoring.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .bento-card { transition: all 0.3s ease; }
                    .bento-card:hover { background: rgba(255, 255, 255, 0.08) !important; border-color: rgba(250, 86, 116, 0.2) !important; transform: translateY(-3px); }
                `}</style>
            </section>

            {/* ═══════════════ FINAL CTA ═══════════════ */}
            <section className="newsletter-one newsletter-three" style={{ padding: '80px 0 0 0' }}>
                <div className="container">
                    <div className="newsletter-one__inner wow fadeInUp" style={{ background: 'linear-gradient(90deg, #FA5674 0%, #6065D4 100%)' }}>
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
                                        Transform Your Factory <br />
                                        <span>with Micraft MES</span>
                                    </h2>
                                </AnimatedTitle>
                                <p className="newsletter-one__text text-white mb-40 mx-auto" style={{ maxWidth: '750px' }}>
                                    Gain real-time visibility of production operations and improve manufacturing performance with Micraft MES.
                                    Schedule a Live Demo to see how Micraft MES works.
                                </p>

                                <div className="cta-btns d-flex flex-wrap justify-content-center gap-4">
                                    <Link href="/book-demo" className="thm-btn" style={{ background: '#0B192C', color: '#fff' }}>
                                        Book Your Demo <span className="icon-arrow-right"></span>
                                    </Link>
                                    <Link href="/contact" className="thm-btn" style={{ background: 'transparent', border: '1px solid #fff', color: '#fff' }}>
                                        Contact Sales Team <span className="icon-arrow-right"></span>
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

