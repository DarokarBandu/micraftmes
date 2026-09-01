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
                                            Control Your Factory <span>in Real Time</span>
                                        </h1>
                                    </AnimatedTitle>
                                </div>
                                <p className="about-one__text-1 mb-4 fw-bold text-white">Micraft MES gives manufacturers complete visibility and control across production, machines, quality, materials, and dispatch — all in one connected system.</p>
                                <p className="about-one__text-2 mb-4">Move from manual tracking to real-time decision-making.</p>
                                <div className="about-one__btn-box d-flex flex-wrap gap-3 mt-4">
                                    <Link href="/book-demo" className="thm-btn">Request a Demo<span className="icon-right-arrow"></span></Link>
                                    <Link href="/features" className="thm-btn thm-btn--two">See Features<span className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="about-one__right">
                                <div className="about-one__left-img-box">
                                    <div className="about-one__left-img">
                                        <Image 
                                            src="/assets/images/resources/MicraftMESOverview.png" 
                                            alt="Micraft MES Real-Time Production Visibility - Smart Assembly Monitoring System" 
                                            width={850} 
                                            height={550} 
                                            className="img-fluid w-100" 
                                            priority 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section className="why-choose-one py-5 bg-dark-theme-adjusted" id="problem-section" style={{ padding: '90px 0' }}>
                <div className="container" style={{ maxWidth: '1200px' }}>
                    <div className="section-title text-center mb-5">
                        <div className="section-title__tagline-box">
                            <div className="section-title__tagline-shape-1"></div>
                            <span className="section-title__tagline">The Challenge</span>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title">
                                Most Factories Operate <span>Without Real Visibility</span>
                            </h2>
                        </AnimatedTitle>
                        <p className="mt-3 opacity-75" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            Manufacturing operations often rely on manual processes, disconnected systems, and delayed reporting.
                        </p>
                    </div>

                    <div className="row justify-content-center">
                        {[
                            { title: 'Production status is unclear', icon: 'icon-clock' },
                            { title: 'Machine downtime is not tracked', icon: 'icon-pin' },
                            { title: 'Quality issues are detected late', icon: 'icon-quality' },
                            { title: 'Material visibility is limited', icon: 'icon-strategy' },
                            { title: 'Dispatch coordination is manual', icon: 'icon-truck' }
                        ].map((item, index) => (
                            <div key={index} className="col-xl-4 col-lg-4 col-md-6 mb-30 wow fadeInUp" data-wow-delay={`${index * 100}ms`}>
                                <div className="feature-two__single h-100 p-4">
                                    <div className="feature-two__icon mb-3">
                                        <span className={item.icon}></span>
                                    </div>
                                    <h3 className="feature-two__title" style={{ fontSize: '18px' }}>{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-5">
                        <div className="conclusion-reveal d-inline-block p-4 rounded-4" style={{ background: 'rgba(255,0,0,0.05)', border: '1px solid rgba(255,0,0,0.1)' }}>
                            <h4 className="mb-0" style={{ fontSize: '18px', fontWeight: '600' }}>
                                Without real-time data, managing production becomes reactive.
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transformation Section */}
            <section className="transformation-section py-5 meswork-gray-section" style={{ padding: '90px 0' }}>
                <div className="container">
                    <div className="section-title text-center mb-5">
                        <div className="section-title__tagline-box justify-content-center mb-3">
                            <div className="section-title__tagline-shape-1"></div>
                            <span className="section-title__tagline text-primary">The Solution</span>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title" style={{ fontSize: '42px', fontWeight: 800 }}>
                                From Disconnected Operations to a <span className="text-primary">Connected Factory</span>
                            </h2>
                        </AnimatedTitle>
                    </div>
                    
                    <div className="row g-4 align-items-stretch">
                        {/* BEFORE CARD */}
                        <div className="col-lg-6">
                            <div className="meswork-glass before-card p-5 h-100 rounded-4" style={{ border: '1px solid rgba(255, 99, 71, 0.15)', borderTop: '6px solid #FF6347' }}>
                                <h4 className="mb-4 d-flex align-items-center gap-3" style={{ borderBottom: '1px dashed rgba(255, 99, 71, 0.2)', paddingBottom: '15px' }}>
                                    <div className="position-relative d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', background: 'rgba(255, 99, 71, 0.1)', borderRadius: '50%' }}>
                                        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF6347', boxShadow: '0 0 10px #FF6347' }}></div>
                                    </div>
                                    Before Micraft MES
                                </h4>
                                <ul className="list-unstyled mb-0 d-flex flex-column gap-3">
                                    {[
                                        'Manual tracking',
                                        'No real-time visibility',
                                        'Delayed issue detection',
                                        'Poor coordination'
                                    ].map((point, i) => (
                                        <li key={i} className="d-flex align-items-center">
                                            <i className="fas fa-times-circle me-3" style={{ color: '#FF6347' }}></i>
                                            <p className="mb-0" style={{ fontSize: '16px', fontWeight: '500' }}>{point}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* AFTER CARD */}
                        <div className="col-lg-6">
                            <div className="meswork-glass after-card p-5 h-100 rounded-4" style={{ border: '1px solid rgba(0, 208, 148, 0.15)', borderTop: '6px solid #00D094' }}>
                                <h4 className="mb-4 d-flex align-items-center gap-3" style={{ borderBottom: '1px dashed rgba(0, 208, 148, 0.2)', paddingBottom: '15px' }}>
                                    <div className="position-relative d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', background: 'rgba(0, 208, 148, 0.1)', borderRadius: '50%' }}>
                                        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#00D094', boxShadow: '0 0 10px #00D094' }}></div>
                                    </div>
                                    After Micraft MES
                                </h4>
                                <ul className="list-unstyled mb-0 d-flex flex-column gap-3">
                                    {[
                                        'Live production tracking',
                                        'Complete shop floor visibility',
                                        'Faster decision-making',
                                        'Controlled dispatch'
                                    ].map((point, i) => (
                                        <li key={i} className="d-flex align-items-center">
                                            <i className="fas fa-check-circle me-3" style={{ color: '#00D094' }}></i>
                                            <p className="mb-0" style={{ fontSize: '16px', fontWeight: '500' }}>{point}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Micraft MES Section - Clean & Professional Enterprise Layout */}
            <section className="about-two py-5 bg-light-soft what-is-mes-section" id="detailed-overview" style={{ padding: '90px 0', backgroundColor: '#F8FAFC' }}>
                <div className="container">
                    <div className="row align-items-center g-5">
                        {/* Left Side: Definition, Key Pillars & Actions */}
                        <div className="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="about-two__left">
                                <div className="section-title text-left sec-title-animation animation-style2 mb-3" style={{ marginBottom: '18px' }}>
                                    <div className="section-title__tagline-box mb-2" style={{ marginBottom: '12px' }}>
                                        <div className="section-title__tagline-shape-1"></div>
                                        <span className="section-title__tagline">What is Micraft MES</span>
                                        <div className="section-title__tagline-shape-2"></div>
                                    </div>
                                    <AnimatedTitle>
                                        <h2 className="section-title__title title-animation mb-0" style={{ marginBottom: '0' }}>
                                            A Real-Time <span>Manufacturing Execution System</span>
                                        </h2>
                                    </AnimatedTitle>
                                </div>
                                <p className="about-two__text-1 mb-3" style={{ marginTop: '0' }}>
                                    Micraft MES connects all critical manufacturing operations into a single platform.
                                </p>
                                <p className="about-two__text-2 mb-4">
                                    It captures real-time data from the shop floor and provides visibility across production processes, enabling better planning, execution, and control. Micraft MES acts as a central system for managing factory operations.
                                </p>

                                <ul className="about-two__points-list list-unstyled mb-4">
                                    <li className="d-flex align-items-start gap-3 mb-3">
                                        <div className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '28px', height: '28px', background: 'rgba(115, 102, 202, 0.15)', color: '#7366CA', marginTop: '2px' }}>
                                            <i className="fas fa-check" style={{ fontSize: '13px' }}></i>
                                        </div>
                                        <div>
                                            <h3 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '4px' }}>Sub-Second Telemetry &amp; Sensor Stream</h3>
                                            <p className="mb-0 text-muted" style={{ fontSize: '14px' }}>Direct PLC &amp; IoT sensor integration for instant machine performance tracking.</p>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-start gap-3 mb-3">
                                        <div className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '28px', height: '28px', background: 'rgba(115, 102, 202, 0.15)', color: '#7366CA', marginTop: '2px' }}>
                                            <i className="fas fa-check" style={{ fontSize: '13px' }}></i>
                                        </div>
                                        <div>
                                            <h3 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '4px' }}>End-to-End Lot &amp; Process Traceability</h3>
                                            <p className="mb-0 text-muted" style={{ fontSize: '14px' }}>Complete digital genealogy from raw material lot intake to final dispatch gate.</p>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-start gap-3 mb-3">
                                        <div className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '28px', height: '28px', background: 'rgba(115, 102, 202, 0.15)', color: '#7366CA', marginTop: '2px' }}>
                                            <i className="fas fa-check" style={{ fontSize: '13px' }}></i>
                                        </div>
                                        <div>
                                            <h3 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '4px' }}>Zero Supervisor Blind Spots</h3>
                                            <p className="mb-0 text-muted" style={{ fontSize: '14px' }}>Live centralized dashboards eliminating manual registers and supervisor delay.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Side: Professional 4-Card Enterprise Capability Matrix */}
                        <div className="col-xl-6 col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="row g-4">
                                <div className="col-sm-6">
                                    <div className="overview-cap-card h-100 p-4 rounded-4" style={{ border: '1px solid var(--border-color, rgba(255,255,255,0.08))', background: 'var(--bg-card, #FFFFFF)' }}>
                                        <div className="cap-icon-box mb-3" style={{ width: 52, height: 52, borderRadius: '12px', background: 'rgba(115, 102, 202, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7366CA' }}>
                                            <i className="fas fa-tasks" style={{ fontSize: '20px' }}></i>
                                        </div>
                                        <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>Work Order Tracking</h4>
                                        <p className="mb-0 text-muted" style={{ fontSize: '14px', lineHeight: '1.6' }}>Track order status, shift targets, and completed quantities across all assembly lines in real time.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="overview-cap-card h-100 p-4 rounded-4" style={{ border: '1px solid var(--border-color, rgba(255,255,255,0.08))', background: 'var(--bg-card, #FFFFFF)' }}>
                                        <div className="cap-icon-box mb-3" style={{ width: 52, height: 52, borderRadius: '12px', background: 'rgba(255, 210, 93, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7366CA' }}>
                                            <i className="fas fa-tachometer-alt" style={{ fontSize: '20px' }}></i>
                                        </div>
                                        <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>Machine OEE &amp; Uptime</h4>
                                        <p className="mb-0 text-muted" style={{ fontSize: '14px', lineHeight: '1.6' }}>Measure availability, speed, and quality rates with automated downtime classification.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="overview-cap-card h-100 p-4 rounded-4" style={{ border: '1px solid var(--border-color, rgba(255,255,255,0.08))', background: 'var(--bg-card, #FFFFFF)' }}>
                                        <div className="cap-icon-box mb-3" style={{ width: 52, height: 52, borderRadius: '12px', background: 'rgba(0, 208, 148, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00D094' }}>
                                            <i className="fas fa-shield-alt" style={{ fontSize: '20px' }}></i>
                                        </div>
                                        <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>In-Line Quality Gates</h4>
                                        <p className="mb-0 text-muted" style={{ fontSize: '14px', lineHeight: '1.6' }}>Enforce mandatory digital inspection checklists to catch defects before value addition.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="overview-cap-card h-100 p-4 rounded-4" style={{ border: '1px solid var(--border-color, rgba(255,255,255,0.08))', background: 'var(--bg-card, #FFFFFF)' }}>
                                        <div className="cap-icon-box mb-3" style={{ width: 52, height: 52, borderRadius: '12px', background: 'rgba(61, 114, 252, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3D72FC' }}>
                                            <i className="fas fa-network-wired" style={{ fontSize: '20px' }}></i>
                                        </div>
                                        <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>ERP &amp; Sensor Connect</h4>
                                        <p className="mb-0 text-muted" style={{ fontSize: '14px', lineHeight: '1.6' }}>Seamless bi-directional integration with ERP, PLCs, barcode scanners, and weighing scales.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .overview-cap-card {
                        transition: all 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);
                    }
                    .overview-cap-card:hover {
                        transform: translateY(-6px);
                        border-color: #7366CA !important;
                        box-shadow: 0 16px 36px rgba(115, 102, 202, 0.18) !important;
                    }
                    .cap-icon-box {
                        transition: all 0.35s ease;
                    }
                    .overview-cap-card:hover .cap-icon-box {
                        background: #7366CA !important;
                        color: #FFFFFF !important;
                    }
                    .overview-cap-card:hover .cap-icon-box i {
                        color: #FFFFFF !important;
                    }
                `}</style>
            </section>



            {/* Key Capabilities Section */}
            <section className="capabilities-section who-is-for" id="capabilities" style={{ position: 'relative', overflow: 'hidden', padding: '90px 0' }}>
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
                            <h2 className="section-title__title">
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
                        color: #7366CA;
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
                        color: #7366CA;
                    }
                    :global(.capability-link span) {
                        font-size: 10px;
                    }
                `}</style>
            </section>

            {/* How Micraft MES Works Workflow Section */}
            <section className="how-it-works-section bg-light-soft" id="how-it-works" style={{ backgroundColor: '#F8FAFC', padding: '90px 0', position: 'relative' }}>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="section-title text-center mb-50">
                        <div className="section-title__tagline-box justify-content-center">
                            <div className="section-title__tagline-shape-1"></div>
                            <span className="section-title__tagline">How Micraft MES Works</span>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title">
                                How Micraft MES <span>Works in a Factory</span>
                            </h2>
                        </AnimatedTitle>
                        <p className="mt-3 opacity-75 mx-auto" style={{ maxWidth: '750px', fontSize: '17px', lineHeight: '1.6' }}>
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
                                        <h4 className="workflow-title mb-2">Create Orders</h4>
                                        <p className="workflow-desc">Production orders are created in the system</p>
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
                                        <h4 className="workflow-title mb-2">Update Progress</h4>
                                        <p className="workflow-desc">Operators update work order progress during production</p>
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
                                        <h4 className="workflow-title mb-2">Machine Record</h4>
                                        <p className="workflow-desc">Machine activity and output are recorded</p>
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
                                        <h4 className="workflow-title mb-2">Capture Results</h4>
                                        <p className="workflow-desc">Inspection results are captured digitally</p>
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
                                        <h4 className="workflow-title mb-2">Pack &amp; Dispatch</h4>
                                        <p className="workflow-desc">Packing and dispatch readiness are tracked</p>
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
                        background: rgba(115, 102, 202, 0.2);
                        z-index: 0;
                    }
                    .workflow-line::after {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 100%;
                        width: 100px;
                        background: #7366CA;
                        box-shadow: 0 0 15px #7366CA;
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
                        background: #F8FAFC; 
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
                        background: #FFFFFF;
                        border: 2px solid rgba(115, 102, 202, 0.3);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 24px;
                        font-weight: 800;
                        color: #7366CA;
                        transition: all 0.4s ease;
                        position: relative;
                        box-shadow: 0 4px 14px rgba(115, 102, 202, 0.1);
                    }
                    .workflow-step:hover .workflow-number {
                        background: #7366CA;
                        color: #FFFFFF;
                        transform: scale(1.08);
                        border-color: #7366CA;
                        box-shadow: 0 10px 25px rgba(115, 102, 202, 0.35);
                    }
                    .workflow-card {
                        background: #FFFFFF;
                        border: 1px solid #E2E8F0;
                        border-radius: 16px;
                        padding: 30px 20px;
                        width: 100%;
                        min-height: 160px;
                        transition: all 0.4s ease;
                        box-shadow: 0 4px 20px rgba(15, 23, 42, 0.05);
                        position: relative;
                    }
                    .workflow-card::before {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 3px;
                        background: #7366CA;
                        transform: scaleX(0);
                        transition: transform 0.4s ease;
                        border-radius: 0 0 16px 16px;
                    }
                    .workflow-step:hover .workflow-card::before {
                        transform: scaleX(1);
                    }
                    .workflow-step:hover .workflow-card {
                        background: #FFFFFF;
                        border-color: #7366CA;
                        transform: translateY(-5px);
                        box-shadow: 0 16px 36px rgba(115, 102, 202, 0.15);
                    }
                    .workflow-title {
                        font-size: 19px;
                        font-weight: 700;
                        line-height: 1.3;
                        color: #0F172A;
                    }
                    .workflow-desc {
                        font-size: 14px;
                        line-height: 1.6;
                        color: #64748B;
                        margin-bottom: 0;
                    }
                `}</style>
            </section>


            <section className="feature-one position-relative bg-light-soft benefits-mes-section" id="benefits-mes" style={{ backgroundColor: '#F8FAFC', padding: '90px 0' }}>
                <div className="container">
                    {/* Full Width Heading */}
                    <div className="section-title text-center mb-40 wow fadeInUp" data-wow-delay="100ms">
                        <div className="section-title__tagline-box justify-content-center">
                            <div className="section-title__tagline-shape-1"></div>
                            <span className="section-title__tagline">Why Choose Us</span>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title" style={{ fontSize: '42px', lineHeight: '1.2' }}>
                                Benefits of Implementing <br className="d-md-none" />
                                <span>Micraft MES</span>
                            </h2>
                        </AnimatedTitle>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-xl-6 wow fadeInLeft" data-wow-delay="200ms">
                            <div className="feature-one__img-wrapper p-2 rounded-4 shadow-lg position-relative w-100 overflow-hidden" style={{ background: '#FFFFFF', border: '1px solid #E2E8F0' }}>
                                <div className="position-relative w-100 h-100 overflow-hidden rounded-3" style={{ aspectRatio: '3/2' }}>
                                    <Image src="/assets/images/resources/mes-benefits-overview.jpg" alt="Benefits of Implementing Micraft MES" fill priority style={{ objectFit: 'cover' }} className="rounded-3" />
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
                                            <p>Identify bottlenecks &amp; optimize workflow.</p>
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
                                            <p>Track inspection results &amp; defect trends.</p>
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
                        background: #FFFFFF;
                        padding: 12px 15px;
                        border-radius: 12px;
                        transition: all 0.3s ease;
                        border: 1px solid #E2E8F0;
                        border-left: 3px solid transparent;
                        box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04);
                    }
                    .benefit-item:hover {
                        transform: translateY(-3px);
                        border-left-color: #7366CA;
                        border-color: rgba(115, 102, 202, 0.35);
                        box-shadow: 0 10px 24px rgba(115, 102, 202, 0.15);
                    }
                    .benefit-icon {
                        width: 42px;
                        height: 42px;
                        min-width: 42px;
                        background: rgba(115, 102, 202, 0.12);
                        color: #7366CA;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 16px;
                        transition: all 0.3s ease;
                    }
                    .benefit-item:hover .benefit-icon {
                        background: #7366CA;
                        color: #FFFFFF;
                        transform: rotateY(180deg);
                        box-shadow: 0 5px 15px rgba(115, 102, 202, 0.4);
                    }
                    .benefit-content {
                        margin-top: 0;
                    }
                    .benefit-content h4 {
                        font-size: 15px;
                        font-weight: 700;
                        margin-bottom: 2px;
                        color: #0F172A;
                        transition: color 0.3s ease;
                        letter-spacing: -0.1px;
                    }
                    .benefit-item:hover .benefit-content h4 {
                        color: #7366CA;
                    }
                    .benefit-content p {
                        font-size: 12px;
                        color: #64748B;
                        margin-bottom: 0;
                        line-height: 1.35;
                    }
                `}</style>
            </section>

            {/* Industries Section */}
            <section className="blog-page position-relative" id="industries" style={{ backgroundColor: '#0e121d', padding: '90px 0 30px 0' }}>
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
                        padding-bottom: 24px !important;
                    }
                    :global(.industry-swiper .swiper-pagination-bullet) {
                        background: #7366CA;
                        width: 8px;
                        height: 8px;
                    }
                    :global(.industry-swiper .swiper-button-next),
                    :global(.industry-swiper .swiper-button-prev) {
                        color: #7366CA;
                        transform: scale(0.5);
                    }
                `}</style>
            </section>

            {/* Section 8: Key Advantages - Compact Split UI */}
            <section className="mes-advantages position-relative" style={{ overflow: 'hidden', padding: '30px 0 80px 0' }}>
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="advantages-img-wrap p-2 rounded-4 shadow-lg" style={{ background: 'var(--bg-card, #FFFFFF)', border: '1px solid var(--border-color, rgba(255,255,255,0.08))' }}>
                                <Image 
                                    src="/assets/images/resources/key-advantages-platform.jpg" 
                                    alt="Key Advantages of The Platform - Micraft Solutions" 
                                    width={650} 
                                    height={650} 
                                    className="img-fluid rounded-3 w-100" 
                                    priority 
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="ps-xl-3">
                                <div className="section-title text-left mb-3">
                                    <div className="section-title__tagline-box mb-2">
                                        <div className="section-title__tagline-shape-1"></div>
                                        <span className="section-title__tagline">Operational Excellence</span>
                                        <div className="section-title__tagline-shape-2"></div>
                                    </div>
                                    <AnimatedTitle>
                                        <h2 className="section-title__title mt-0 mb-3" style={{ fontSize: '36px', lineHeight: '1.2' }}>
                                            Key Advantages of <span>The Platform</span>
                                        </h2>
                                    </AnimatedTitle>
                                </div>
                                <p className="mt-0 mb-4 opacity-75" style={{ fontSize: '16px', lineHeight: '1.6' }}>Digitize operations without heavy infrastructure or long cycles.</p>

                                <div className="advantages-list d-flex flex-column gap-3">
                                    {[
                                        { title: "Simple Shop Floor Interface", desc: "Minimal training required for operators." },
                                        { title: "Fast Deployment", desc: "Go live in weeks with pre-built workflows." },
                                        { title: "Real-Time Dashboards", desc: "Instant status from any factory device." },
                                        { title: "Scalable Growth", desc: "Scale from one machine to entire complexes." },
                                        { title: "Practical Workflows", desc: "Designed to solve real shop floor problems." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="advantage-row d-flex gap-3 wow fadeInUp" data-wow-delay={`${100 + idx * 150}ms`}>
                                            <div className="adv-icon-box flex-shrink-0 mt-1" style={{ width: '26px', height: '26px', minWidth: '26px', borderRadius: '50%', background: '#7366CA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <i className="fas fa-check text-white" style={{ fontSize: '11px' }}></i>
                                            </div>
                                            <div className="adv-text">
                                                <h4 className="mb-1" style={{ fontSize: '17px', fontWeight: '700' }}>{item.title}</h4>
                                                <p className="mb-0 text-muted" style={{ fontSize: '14px', lineHeight: '1.5' }}>{item.desc}</p>
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
            <section className="integrated-platform bg-light-soft" id="integrated-platform" style={{ backgroundColor: '#F8FAFC', position: 'relative', padding: '80px 0' }}>
                <div className="container">
                    <div className="section-title text-center mb-4">
                        <div className="section-title__tagline-box justify-content-center mb-2">
                            <div className="section-title__tagline-shape-1"></div>
                            <span className="section-title__tagline">Integrated Visibility</span>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title mt-0 mb-2" style={{ fontSize: '36px', lineHeight: '1.2' }}>
                                Manufacturing Monitoring <span>In One Platform</span>
                            </h2>
                        </AnimatedTitle>
                        <p className="mt-0 opacity-75 mx-auto" style={{ maxWidth: '700px', fontSize: '15px' }}>
                            Micraft MES integrates multiple capabilities into a single unified platform.
                        </p>
                    </div>

                    <div className="row g-3 align-items-center">
                        {/* Center Visual */}
                        <div className="col-xl-6 order-xl-2 wow zoomIn" data-wow-delay="100ms">
                            <div className="hub-center-viz p-2 rounded-4 shadow-lg d-flex align-items-center justify-content-center" style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
                                <Image 
                                    src="/assets/images/resources/mes-integrated-platform-vector.jpg" 
                                    alt="Manufacturing Monitoring In One Platform - Smart Factory Vector Hub" 
                                    width={550} 
                                    height={550} 
                                    className="img-fluid rounded-3 w-100" 
                                    priority 
                                    style={{ objectFit: 'contain' }} 
                                />
                            </div>
                        </div>

                        {/* Bento Items Left */}
                        <div className="col-xl-3 col-lg-6 order-xl-1">
                            <div className="d-flex flex-column gap-3 h-100">
                                <div className="bento-card p-3 rounded-4 wow fadeInLeft" data-wow-delay="100ms">
                                    <div className="bento-icon-box mb-2" style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(115, 102, 202, 0.12)', color: '#7366CA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <i className="fas fa-layer-group" style={{ fontSize: '16px' }}></i>
                                    </div>
                                    <h4 className="bento-title mb-1" style={{ fontSize: '16px', fontWeight: '700' }}>Production Tracking</h4>
                                    <p className="bento-desc mb-0" style={{ fontSize: '13px' }}>Monitor output and yields live.</p>
                                </div>
                                <div className="bento-card p-3 rounded-4 wow fadeInLeft" data-wow-delay="300ms">
                                    <div className="bento-icon-box mb-2" style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(61, 114, 252, 0.12)', color: '#3D72FC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <i className="fas fa-desktop" style={{ fontSize: '16px' }}></i>
                                    </div>
                                    <h4 className="bento-title mb-1" style={{ fontSize: '16px', fontWeight: '700' }}>Shop Floor Monitoring</h4>
                                    <p className="bento-desc mb-0" style={{ fontSize: '13px' }}>Real-time sensor and operator updates.</p>
                                </div>
                                <div className="bento-card p-3 rounded-4 wow fadeInLeft" data-wow-delay="500ms">
                                    <div className="bento-icon-box mb-2" style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(255, 210, 93, 0.15)', color: '#7366CA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <i className="fas fa-tachometer-alt" style={{ fontSize: '16px' }}></i>
                                    </div>
                                    <h4 className="bento-title mb-1" style={{ fontSize: '16px', fontWeight: '700' }}>Machine Utilization</h4>
                                    <p className="bento-desc mb-0" style={{ fontSize: '13px' }}>Track key efficiency metrics.</p>
                                </div>
                            </div>
                        </div>

                        {/* Bento Items Right */}
                        <div className="col-xl-3 col-lg-6 order-xl-3">
                            <div className="d-flex flex-column gap-3 h-100">
                                <div className="bento-card p-3 rounded-4 wow fadeInRight" data-wow-delay="100ms">
                                    <div className="bento-icon-box mb-2" style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(115, 102, 202, 0.12)', color: '#7366CA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <i className="fas fa-project-diagram" style={{ fontSize: '16px' }}></i>
                                    </div>
                                    <h4 className="bento-title mb-1" style={{ fontSize: '16px', fontWeight: '700' }}>Process Monitoring</h4>
                                    <p className="bento-desc mb-0" style={{ fontSize: '13px' }}>Ensure adherence to procedures.</p>
                                </div>
                                <div className="bento-card p-3 rounded-4 wow fadeInRight" data-wow-delay="300ms">
                                    <div className="bento-icon-box mb-2" style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(0, 208, 148, 0.12)', color: '#00D094', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <i className="fas fa-clipboard-check" style={{ fontSize: '16px' }}></i>
                                    </div>
                                    <h4 className="bento-title mb-1" style={{ fontSize: '16px', fontWeight: '700' }}>Quality Inspection</h4>
                                    <p className="bento-desc mb-0" style={{ fontSize: '13px' }}>Digital traceability of defects.</p>
                                </div>
                                <div className="bento-card p-3 rounded-4 wow fadeInRight" data-wow-delay="500ms">
                                    <div className="bento-icon-box mb-2" style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(255, 210, 93, 0.15)', color: '#7366CA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <i className="fas fa-truck-loading" style={{ fontSize: '16px' }}></i>
                                    </div>
                                    <h4 className="bento-title mb-1" style={{ fontSize: '16px', fontWeight: '700' }}>Dispatch Readiness</h4>
                                    <p className="bento-desc mb-0" style={{ fontSize: '13px' }}>Logistics and packing monitoring.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .bento-card {
                        background: #FFFFFF;
                        border: 1px solid #E2E8F0;
                        box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05);
                        transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                    }
                    .bento-card:hover {
                        background: #FFFFFF !important;
                        border-color: #7366CA !important;
                        transform: translateY(-4px);
                        box-shadow: 0 12px 28px rgba(115, 102, 202, 0.15) !important;
                    }
                    .bento-icon-box {
                        transition: all 0.3s ease;
                    }
                    .bento-card:hover .bento-icon-box {
                        background: #7366CA !important;
                        color: #FFFFFF !important;
                    }
                    .bento-title {
                        color: #0F172A;
                        transition: color 0.3s ease;
                    }
                    .bento-card:hover .bento-title {
                        color: #7366CA;
                    }
                    .bento-desc {
                        color: #64748B;
                        line-height: 1.5;
                    }
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

