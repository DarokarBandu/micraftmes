"use client";


import React from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import AnimatedTitle from "@/components/elements/AnimatedTitle";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Settings, Target, Link as LinkIcon, Search, Users, Clock, Activity, EyeOff, ClipboardList } from 'lucide-react';

const swiperOptions = {
    modules: [Autoplay, Pagination, EffectFade],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    pagination: {
        el: '.mes-swiper-pagination',
        clickable: true,
    },
}


export default function MesVsErpPage() {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="MES vs ERP">

            {/* 1. About Four Hero Section (First Section) */}
            <section className="about-four py-100 bg-black-mes position-relative overflow-hidden" id="about-four">
                <div className="about-four__bg-shape" style={{ backgroundImage: "url(/assets/images/shapes/about-four-bg-shape.png)" }}></div>
                <div className="about-four__bg-shape-2" style={{ backgroundImage: "url(/assets/images/shapes/about-four-bg-shape-2.png)" }}></div>

                <div className="container relative z-index-1">
                    <div className="row align-items-center">
                        <div className="col-xl-6">
                            <div className="about-four__left">
                                <div className="about-four__img-box scale-up-anim">
                                    <div className="about-four__img border-white-10 shadow-3xl">
                                        <Image src="/assets/images/features/pa_hero.png" alt="Enterprise ERP Visualization" width={570} height={570} className="rounded-4 object-fit-cover" style={{ height: '480px' }} />
                                    </div>
                                    <div className="about-four__img-2 border-white-10 shadow-2xl float-anim">
                                        <Image src="/assets/images/features/pp_board.png" alt="Strategic Planning Board" width={308} height={250} className="rounded-4 shadow-lg border-white-10" />
                                    </div>
                                    <div className="about-four__experience rotate-anim pulse-glow-primary">
                                        <div className="about-four__experience-inner">
                                            <div className="about-four__experience-count-box">
                                                <h3 className="text-white fw-900 fs-1">Sync</h3>
                                            </div>
                                            <p className="about-four__experience-count-text text-white small fw-bold">ERP & MES</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 mt-100 mt-xl-0">
                            <div className="about-four__right ps-lg-5">
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <div className="section-title__tagline-box">
                                        <div className="section-title__tagline-shape-1"></div>
                                        <span className="section-title__tagline text-gold">Strategic Ecosystem</span>
                                        <div className="section-title__tagline-shape-2"></div>
                                    </div>
                                    <AnimatedTitle>
                                        <h2 className="section-title__title title-animation text-white fs-1 mb-4">
                                            The <span>MES vs ERP</span> <br />
                                            Manufacturing Synergy
                                        </h2>
                                    </AnimatedTitle>
                                </div>
                                <p className="about-four__text text-white-opacity-80 font-marcellus fs-5 mb-4">
                                    While ERP handles your business logic at the macro level, Micraft MES manage your shop floor pulse in real-time. Together, they create a high-performance digital bridge.
                                </p>
                                <p className="text-white mb-40 font-marcellus">
                                    Connecting the office with the factory floor allows for seamless data flow, eliminating manual delays and ensuring that production decisions are based on live, verifiable reality.
                                </p>

                                <div className="about-four__points-box py-4 border-top border-bottom border-white-10 my-5">
                                    <div className="d-flex flex-row align-items-center gap-5">
                                        <div className="d-flex align-items-center">
                                            <div className="icon-box-primary-soft me-3 rounded p-2"><span className="icon-tick-inside-circle text-primary"></span></div>
                                            <div className="text-white fw-bold small">Enterprise View</div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="icon-box-gold-soft me-3 rounded p-2"><span className="icon-target text-gold"></span></div>
                                            <div className="text-white fw-bold small">Operational Execution</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center gap-4 mt-5">
                                    <Link href="/contact" className="thm-btn shiny-btn px-5 py-4 fs-5 fw-900">Request Strategy Session <span className="icon-arrow-right ms-2"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* 2. What is ERP - Detailed Insight */}
            <section className="about-two py-100 bg-black-mes border-top border-white-05 relative overflow-hidden" id="what-is-erp text-white">
                <div className="about-two__bg-realistic opacity-20 position-absolute w-100 h-100 top-0 left-0" style={{ backgroundImage: "url(/assets/images/features/industries_section_bg.png)", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="about-two__overlay position-absolute w-100 h-100 top-0 left-0 bg-dark-deep-mes opacity-60"></div>
                <div className="mesh-shape-bg-01 opacity-10"></div>

                <div className="container position-relative z-index-2">
                    <div className="row flex-row-reverse align-items-center">
                        <div className="col-xl-6">
                            <div className="about-two__left ps-xl-5">
                                <div className="about-two__img-box">
                                    <div className="about-two__img border-white-10 shadow-3xl">
                                        <Image src="/assets/images/features/pd_solution_new.png" alt="ERP System Visual" width={495} height={474} className="rounded-4 shadow-2xl object-fit-cover" style={{ height: '420px' }} />
                                    </div>
                                    {/* <div className="about-two__shape-1"></div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-two__right pe-xl-5">
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <div className="section-title__tagline-box">
                                        <div className="section-title__tagline-shape-1"></div>
                                        <span className="section-title__tagline text-gold">The Enterprise Layer</span>
                                        <div className="section-title__tagline-shape-2"></div>
                                    </div>
                                    <AnimatedTitle>
                                        <h2 className="section-title__title title-animation text-white">
                                            What is an <span>ERP System</span> <br />
                                            in Manufacturing?
                                        </h2>
                                    </AnimatedTitle>
                                </div>
                                <p className="about-two__text text-justify text-white-opacity-80">
                                    Enterprise Resource Planning (ERP) systems focus on managing business-critical processes throughout the organization. In manufacturing, they handle finances, customer relations, procurement, and inventory logic.
                                </p>
                                <p className="about-two__text mt-3 text-justify text-white-opacity-70">
                                    While ERPs are excellent for office operations, they often lack the granularity needed to navigate the minute-by-second complexities of the shop floor. They provide the &quot;macro&quot; view of the production plan but not the &quot;micro&quot; view of live execution.
                                </p>
                                <div className="about-two__experience-contact-and-btn mt-4">
                                    <div className="about-two__btn-box">
                                        <Link href="/contact" className="thm-btn border-white-10">Download Architecture Guide <span className="icon-right-arrow ms-2"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            {/* 3. What is MES - The Operational Heart */}
            <section className="about-three py-100 bg-black-mes border-top border-white-05 position-relative overflow-hidden" id="what-is-mes">
                <div className="animated-factory-bg opacity-15"></div>
                <div className="container position-relative z-index-2">
                    <div className="row align-items-center">

                        <div className="col-xl-6">
                            <div className="about-three__left scale-up-anim">
                                <div className="about-three__img-box relative overflow-hidden rounded-4 border-white-10 shadow-3xl">
                                    <Swiper {...swiperOptions} className="thm-swiper__slider">
                                        <SwiperSlide>
                                            <div className="about-three__img h-100">
                                                <Image src="/assets/images/features/mm_hero_premium.png" alt="MES Execution Interface" width={570} height={500} className="object-fit-cover shadow-2xl h-100" style={{ height: '480px' }} />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="about-three__img h-100">
                                                <Image src="/assets/images/features/pd_monitoring_new.png" alt="Production Monitoring" width={570} height={500} className="object-fit-cover shadow-2xl h-100" style={{ height: '480px' }} />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="about-three__img h-100">
                                                <Image src="/assets/images/features/qi_realtime.png" alt="Real-time Data" width={570} height={500} className="object-fit-cover shadow-2xl h-100" style={{ height: '480px' }} />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>


                                    <div className="mes-swiper-pagination swiper-pagination p-3 z-index-10"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 mt-80 mt-xl-0">
                            <div className="about-three__right ps-xl-5">
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <div className="section-title__tagline-box">
                                        <div className="section-title__tagline-shape-1"></div>
                                        <span className="section-title__tagline text-gold">The Execution Layer</span>
                                        <div className="section-title__tagline-shape-2"></div>
                                    </div>
                                    <AnimatedTitle>
                                        <h2 className="section-title__title title-animation text-white font-marcellus mb-4">
                                            What is <span>MES</span> <br />
                                            in Manufacturing?
                                        </h2>
                                    </AnimatedTitle>
                                </div>
                                <p className="about-three__text text-white-opacity-80">
                                    A Manufacturing Execution System (MES) focuses on shop floor operations and production execution, acting as the nervous system of your digital factory.
                                </p>
                                <p className="text-white-opacity-60 mb-4 font-marcellus uppercase letter-spacing-1 small">
                                    MES systems track manufacturing activities in real-time, such as:
                                </p>
                                <div className="row g-3 mb-5">
                                    {[
                                        "Production order progress",
                                        "Machine utilization (OEE)",
                                        "Operator activity & shifts",
                                        "Quality inspection results",
                                        "Real-time production output",
                                        "Final dispatch readiness"
                                    ].map((item, i) => (
                                        <div key={i} className="col-md-6">
                                            <div className="d-flex align-items-center bg-white-05 p-3 rounded-3 border border-white-10 hover-scale-sm transition-all h-100 shadow-sm">
                                                <div className="icon-box-gold-soft me-3 rounded p-2 small"><span className="icon-target text-gold"></span></div>
                                                <span className="text-white small fw-bold font-marcellus">{item}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="about-three__text text-white-opacity-80 border-start border-gold ps-3 mb-5 font-marcellus italic">
                                    MES provides real-time operational visibility of factory performance.
                                </p>
                                <div className="about-three__btn-box">
                                    <Link href="/product/micraft-mes" className="thm-btn shiny-btn px-5 py-3 fs-6">Explore Micraft MES <span className="icon-right-arrow ms-2"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* 4. Key Differences - Creative "Digital Crossroads" Design */}
            <section className="why-choose-three py-100 bg-black-mes border-top border-white-05 position-relative overflow-hidden" id="key-differences">
                <div className="why-choose-three__bg-shape float-bob-x opacity-05" style={{ backgroundImage: "url(/assets/images/shapes/why-choose-three-bg-shape.png)" }}></div>
                <div className="container relative z-index-1">
                    <div className="section-title text-center mb-100">
                        <div className="section-title__tagline-box mx-auto">
                            <div className="section-title__tagline-shape-1"></div>
                            <span className="section-title__tagline text-gold">System Comparative Intelligence</span>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white font-marcellus">
                                Structural Harmony: <span>MES & ERP</span>
                            </h2>
                        </AnimatedTitle>
                    </div>


                    <div className="comparative-stack position-relative px-xl-5">
                        <div className="comparative-spine position-absolute h-100 top-0 start-50 translate-middle-x d-none d-xl-block border-end border-white-05 z-index-0 opacity-20"></div>



                        {[
                            { f: "Management Core", e: "Business processes", m: "Shop floor operations", Icon: Settings, color: "#3D72FC" },
                            { f: "Strategic Focus", e: "Planning & Resources", m: "Production Execution", Icon: Target, color: "#FFD25D" },
                            { f: "Data Domains", e: "Finance, Procurement, Inventory", m: "Live Orders & Machine Pulse", Icon: LinkIcon, color: "#00E5FF" },
                            { f: "Visibility Level", e: "High-level operational insights", m: "Real-time factory monitoring", Icon: Search, color: "#00E676" },
                            { f: "Primary Audience", e: "Enterprise Management Teams", m: "Supervisors & Shop Floor", Icon: Users, color: "#F50057" }
                        ].map((row, i) => (
                            <div key={i} className="row mb-5 align-items-center relative z-index-1 hover-scale-sm transition-all group">
                                {/* ERP SIDE */}
                                <div className="col-xl-5">
                                    <div className="glass-card-innovative p-4 text-end border-white-10 shadow-lg rounded-4 transition-all bg-white-02 relative overflow-hidden h-100 d-flex flex-column justify-content-center" style={{ borderRight: `2px solid ${row.color}44` }}>
                                        <h4 className="small fw-900 uppercase mb-2 tracking-widest" style={{ color: row.color }}>ERP (Macro)</h4>
                                        <p className="text-white-opacity-80 font-marcellus mb-0 fs-6">{row.e}</p>
                                    </div>
                                </div>

                                {/* CENTER ICON NODE (Multi-Color) */}
                                <div className="col-xl-2 text-center d-none d-xl-block">
                                    <div className="icon-node-wrap relative mb-3">
                                        <div className="icon-box-comparison mx-auto rounded-circle border p-3 shadow-3xl relative z-index-2 transition-all group-hover:scale-125 d-flex align-items-center justify-content-center"
                                            style={{
                                                width: '70px',
                                                height: '70px',
                                                backgroundColor: `${row.color}11`,
                                                borderColor: `${row.color}44`,
                                                boxShadow: `0 0 20px ${row.color}22`
                                            }}>
                                            <row.Icon size={32} color={row.color} className="transition-all" style={{ filter: `drop-shadow(0 0 8px ${row.color}77)` }} />
                                        </div>
                                        <div className="node-glow absolute top-50 start-50 translate-middle w-100 h-100 rounded-circle active-glow opacity-30" style={{ backgroundColor: row.color, filter: 'blur(30px)' }}></div>
                                    </div>
                                    <div className="position-relative d-inline-block px-4 py-2 mt-2">
                                        <div className="node-label-bg position-absolute top-50 start-50 translate-middle w-100 h-100 opacity-05 border border-white-20 rounded-pill" style={{ backgroundColor: row.color }}></div>
                                        <div className="text-white fw-bold small font-marcellus uppercase letter-spacing-1 position-relative z-index-1">{row.f}</div>
                                    </div>
                                </div>

                                {/* MES SIDE */}
                                <div className="col-xl-5">
                                    <div className="glass-card-innovative p-4 border-white-10 shadow-lg rounded-4 transition-all bg-white-02 relative overflow-hidden h-100 d-flex flex-column justify-content-center" style={{ borderLeft: `2px solid ${row.color}44` }}>
                                        <h4 className="small fw-900 uppercase mb-2 tracking-widest" style={{ color: row.color }}>MES (Micro)</h4>
                                        <p className="text-white-opacity-80 font-marcellus mb-0 fs-6">{row.m}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="row mt-100">
                        <div className="col-lg-6 mb-4">
                            <div className="glass-card-innovative p-5 border-white-10 text-center h-100 transition-all hover-scale-3 group overflow-hidden relative">
                                <div className="absolute top-0 left-0 w-100 h-1 background-gradient-primary"></div>
                                <h4 className="text-primary fw-900 h2 mb-3">ERP</h4>
                                <p className="text-white-opacity-80 font-marcellus fs-4 italic mb-0">Answers: “What <span>should be</span> produced?”</p>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="glass-card-innovative p-5 border-white-10 text-center h-100 transition-all hover-scale-3 group overflow-hidden relative">
                                <div className="absolute top-0 left-0 w-100 h-1 background-gradient-gold"></div>
                                <h4 className="text-gold fw-900 h2 mb-3">MES</h4>
                                <p className="text-white-opacity-80 font-marcellus fs-4 italic mb-0">Answers: “What is <span>actually happening</span>?”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/* 5. Why ERP Alone is Not Enough - Limitation Insight */}
            <section className="erp-limitations py-100 bg-black-mes border-top border-white-05 position-relative overflow-hidden" id="erp-limitations">
                <div className="limitations-mesh-bg opacity-10"></div>
                <div className="container relative z-index-1">
                    <div className="section-title text-center mb-80 sec-title-animation animation-style2">
                        <div className="section-title__tagline-box mx-auto">
                            <div className="section-title__tagline-shape-1"></div>
                            <span className="section-title__tagline text-gold">Strategic Gap Analysis</span>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title title-animation text-white font-marcellus">
                                Why ERP Alone is <span>Not Enough</span>
                            </h2>
                        </AnimatedTitle>
                        <p className="text-white-opacity-60 max-w-700 mx-auto mt-4 font-marcellus title-animation">
                            ERP systems are powerful business management platforms, but they typically lack real-time shop floor visibility.
                        </p>
                    </div>

                    <div className="row g-4 justify-content-center mb-80">
                        {[
                            { title: "Manual Data Entry", text: "Production updates often entered manually, leading to human error and data integrity issues.", Icon: ClipboardList, color: "#FF5252", delay: "100ms" },
                            { title: "Delayed Reporting", text: "Reporting lag where production data reaches management hours or days later, preventing proactive action.", Icon: Clock, color: "#FF7043", delay: "200ms" },
                            { title: "Utilization Gaps", text: "Limited machine utilization insights (OEE) make it difficult to identify bottlenecks in real-time.", Icon: EyeOff, color: "#FFA726", delay: "300ms" },
                            { title: "Fog of Execution", text: "A complete lack of real-time shop floor monitoring results in a 'blind spot' for operational control.", Icon: Activity, color: "#FFD54F", delay: "400ms" }
                        ].map((limitation, i) => (
                            <div key={i} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={limitation.delay}>
                                <div className="glass-card-innovative p-4 border-white-10 h-100 transition-all hover-scale-3 group relative overflow-hidden"
                                    style={{ borderBottom: `3px solid ${limitation.color}33` }}>
                                    <div className="limitation-icon-box mb-4 p-3 d-inline-block rounded-4 bg-white-05 border border-white-10 transition-all group-hover:bg-white-10 scale-up-anim">
                                        <limitation.Icon size={32} color={limitation.color} />
                                    </div>
                                    <h4 className="text-gold h5 fw-900 mb-3 font-marcellus">{limitation.title}</h4>
                                    <p className="text-gold fw-bold small mb-0 font-marcellus">{limitation.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </section>


            <section className="mes-erp-synergy py-120 bg-dark-deep-mes position-relative overflow-hidden" id="mes-erp-synergy">
                <div className="mesh-shape-bg-03 opacity-10"></div>
                <div className="container relative z-index-1">
                    <div className="row align-items-center mb-100 px-xl-5">
                        <div className="col-lg-7">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline text-gold">Intelligent Connectivity</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <AnimatedTitle>
                                    <h2 className="section-title__title title-animation text-white font-marcellus">
                                        The Unified <span>Digital Ecosystem</span>
                                    </h2>
                                </AnimatedTitle>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <p className="text-white-opacity-70 font-marcellus ps-lg-5 border-start border-white-10 wow fadeInRight" data-wow-delay="300ms">
                                True manufacturing excellence occurs at the intersection of business strategy and shop floor pulse. Our integrated model ensures a seamless thread from planning to production.
                            </p>
                        </div>
                    </div>

                    <div className="innovative-workflow-wrap py-5 position-relative">
                        {/* Curved Connection Path (SVG) Restored */}
                        <div className="position-absolute top-50 start-0 w-100 h-100 d-none d-lg-block z-index-0" style={{ transform: 'translateY(-20%)' }}>
                            <svg width="100%" height="200" viewBox="0 0 1200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
                                <path d="M0 100C300 100 300 20 600 20C900 20 900 180 1200 180" stroke="url(#paint0_linear)" strokeWidth="2" strokeDasharray="10 10" className="path-pulse" />
                                <defs>
                                    <linearGradient id="paint0_linear" x1="0" y1="100" x2="1200" y2="100" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#3D72FC" />
                                        <stop offset="0.5" stopColor="#FFD25D" />
                                        <stop offset="1" stopColor="#3D72FC" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        <div className="row g-5 relative z-index-1">
                            {[
                                { step: "01", title: "Generate Orders", text: "ERP system generates master production orders.", img: "/3d_generate_orders.png", offset: "-30px", delay: "0ms", color: "blue" },
                                { step: "02", title: "Receive Orders", text: "MES receives orders and assigns workstations.", img: "/3d_integration_hub_1775283971500.png", offset: "30px", delay: "200ms", color: "gold" },
                                { step: "03", title: "Live Tracking", text: "MES tracks real-time activities and progress.", img: "/3d_live_tracking_1775283990876.png", offset: "-30px", delay: "400ms", color: "blue" },
                                { step: "04", title: "Data Feedback", text: "Production data is sent back to ERP for reporting.", img: "/3d_data_feedback_1775284014264.png", offset: "30px", delay: "600ms", color: "gold" }
                            ].map((step, i) => (
                                <div key={i} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={step.delay} style={{ transform: `translateY(${step.offset})`, borderTop: 'none', position: 'relative' }}>
                                    <div className="ecosystem-node-card text-center transition-all hover-scale-3 group border-0 shadow-none" style={{ border: 'none', outline: 'none', boxShadow: 'none' }}>
                                        <div className="node-visual-wrap mb-5 position-relative mx-auto" style={{ width: '180px', height: '180px' }}>
                                            <div className={`absolute inset-0 bg-${step.color} opacity-05 rounded-circle pulse-glow-${step.color}`}></div>
                                            <div className={`absolute inset-n4 border border-${step.color} border-opacity-10 rounded-circle rotate-anim`}></div>

                                            <div className="position-relative z-index-1 h-100 d-flex align-items-center justify-content-center glass-card-innovative rounded-circle border border-white-10 shadow-3xl overflow-hidden group-hover:border-primary-opacity-50 transition-all">
                                                <Image src={step.img} alt={step.title} width={180} height={180} className="object-fit-cover transition-all group-hover:scale-110" />
                                            </div>

                                            <div className="node-step-identifier position-absolute d-flex align-items-center justify-content-center" style={{ top: '0', right: '-15px', transform: 'translate(50%, -50%)', width: '45px', height: '45px', background: `${step.color === 'blue' ? '#3D72FC' : '#FFD25D'}`, color: '#fff', borderRadius: '50%', fontWeight: '900', fontSize: '16px', border: '4px solid #080C14', boxShadow: 'none', zIndex: '10' }}>
                                                {step.step}
                                            </div>
                                        </div>

                                        <div className="node-content px-xl-3">
                                            <h4 className="text-white h5 fw-bold mb-3 font-marcellus tracking-wide group-hover:text-primary transition-all">{step.title}</h4>
                                            <p className="text-white-opacity-60 small mb-0 font-marcellus leading-relaxed">
                                                {step.text}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </section>




            {/* 7. Capability Alignment - Platform Specializations */}
            <section className="who-is-for py-100 bg-dark-deep-mes position-relative overflow-hidden" id="key-distinctions">
                <div className="mesh-shape-bg-02 opacity-10"></div>
                <div className="container position-relative z-index-1">
                    <div className="row justify-content-center text-center mb-80">
                        <div className="col-lg-8">
                            <div className="section-title">
                                <div className="section-title__tagline-box mx-auto">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline text-gold">Capability Alignment</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white font-marcellus">
                                        Platform <span>Specializations</span>
                                    </h2>
                                </AnimatedTitle>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4 overflow-hidden">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="300ms">
                            <div className="glass-card-innovative p-5 p-lg-100 rounded-4 shadow-2xl h-100 relative overflow-hidden" style={{ background: 'rgba(61,114,252,0.05)' }}>
                                <div className="light-radial-glow mt-n100"></div>
                                <h3 className="text-gold mb-5 h4 fw-bold uppercase letter-spacing-1 border-bottom border-gold border-opacity-30 pb-4">Focus of ERP Systems</h3>
                                <div className="feature-list-mes d-flex flex-column gap-4">
                                    {[
                                        "Office and business operations management",
                                        "Accounts, procurement, and HR logic",
                                        "Macro-level scheduling (Weeks/Months)",
                                        "Inventory management and supply chain",
                                        "Customer relationship management"
                                    ].map((item, i) => (
                                        <div key={i} className="d-flex align-items-center p-3 rounded-4 bg-white-05 border border-white-10 hover-scale-sm transition-all shadow-sm">
                                            <div className="icon-circle-32 bg-primary-soft me-3 rounded-circle d-flex align-items-center justify-content-center text-primary small"><span className="icon-tick-inside-circle"></span></div>
                                            <span className="text-white-80 fw-bold small">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="300ms">
                            <div className="glass-card-innovative p-5 p-lg-100 rounded-4 shadow-2xl h-100 relative overflow-hidden" style={{ background: 'rgba(240,194,41,0.05)' }}>
                                <div className="light-radial-glow mt-n100"></div>
                                <h3 className="text-gold mb-5 h4 fw-bold uppercase letter-spacing-1 border-bottom border-white-10 pb-4">Focus of Micraft MES</h3>
                                <div className="feature-list-mes d-flex flex-column gap-4">
                                    {[
                                        "Live shop floor execution monitoring",
                                        "Real-time machine and operator alerts",
                                        "Micro-level scheduling (Minutes/Hours)",
                                        "Defect tracking and quality gating",
                                        "Workstation-level data collection"
                                    ].map((item, i) => (
                                        <div key={i} className="d-flex align-items-center p-3 rounded-4 bg-white-05 border border-white-10 hover-scale-sm transition-all shadow-sm">
                                            <div className="icon-circle-32 bg-gold-soft me-3 rounded-circle d-flex align-items-center justify-content-center text-gold small"><span className="icon-target"></span></div>
                                            <span className="text-white-80 fw-bold small">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* 8. Stakeholder Alignment - Team Two Design */}
            <section className="team-two py-100 bg-black-mes position-relative overflow-hidden" id="stakeholders">
                <div className="team-two__bg-shape float-bob-y" style={{ backgroundImage: "url(/assets/images/shapes/team-two-bg-shape.png)" }}></div>
                <div className="team-two__shape-1"></div>
                <div className="container relative z-index-1">
                    <div className="row align-items-end mb-80">
                        <div className="col-xl-6">
                            <div className="team-two__left">
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <div className="section-title__tagline-box">
                                        <div className="section-title__tagline-shape-1"></div>
                                        <span className="section-title__tagline text-gold">Strategic Alignment</span>
                                        <div className="section-title__tagline-shape-2"></div>
                                    </div>
                                    <AnimatedTitle>
                                        <h2 className="section-title__title title-animation text-white font-marcellus">
                                            Success Across <span>The Organization</span>
                                        </h2>
                                    </AnimatedTitle>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <p className="text-gold fw-bold mb-4 font-marcellus ps-xl-5 border-start border-white-10">
                                The synergy between ERP and MES creates a unified data thread that empowers every department to hit their critical KPIs.
                            </p>
                        </div>
                    </div>

                    <Swiper {...{
                        modules: [Autoplay, Pagination],
                        slidesPerView: 4,
                        spaceBetween: 30,
                        autoplay: { delay: 4000 },
                        loop: true,
                        breakpoints: {
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 }
                        },
                        pagination: { clickable: true, el: '.team-pagination' }
                    }} className="team-two__carousel">
                        {[
                            { name: "Plant Manager", role: "Efficiency & OEE", img: "/plant_manager.png", text: "Meets production targets with live shop floor visibility." },
                            { name: "Quality Head", role: "Quality & Compliance", img: "/quality_head.png", text: "Ensures 100% traceability and zero-defect workflows." },
                            { name: "IT Director", role: "System Synergy", img: "/it_director.png", text: "Seamlessly integrates shop floor data into the enterprise layer." },
                            { name: "CFO", role: "Cost & ROI", img: "/cfo.png", text: "Reduces operational waste and improves production profitability." }
                        ].map((member, i) => (
                            <SwiperSlide key={i}>
                                <div className="team-two__single glass-card-innovative border-white-10 transition-all hover-scale-3 h-100 position-relative overflow-hidden">
                                    <div className="team-two__img h-100 bg-black relative">
                                        <div className="absolute inset-0 bg-black bg-opacity-70 z-index-1 transition-all duration-500 group-hover:bg-opacity-50 pointer-events-none"></div>
                                        <div className="absolute bottom-0 left-0 w-100 h-80 bg-gradient-to-t from-black via-black-95 to-transparent z-index-2 opacity-100 pointer-events-none"></div>
                                        <Image src={member.img} alt={member.name} width={400} height={450} className="object-fit-cover w-100 h-100 grayscale-hint hover-grayscale-off transition-all duration-500" />
                                    </div>
                                    <div className="team-two__title-box p-4 w-100 position-absolute bottom-0 start-0 z-index-3" style={{ textShadow: '0 4px 15px rgba(0,0,0,1)' }}>
                                        <div className="role-tag mb-2 font-marcellus extra-small fw-900 letter-spacing-2 d-inline-block px-3 py-1 bg-black bg-opacity-60 rounded-pill border border-warning border-opacity-50" style={{ color: '#FFD25D' }}>{member.role}</div>
                                        <h3 className="text-gold h5 fw-900 font-marcellus mb-2" style={{ fontSize: '20px', color: '#FFD25D' }}>{member.name}</h3>
                                        <p className="text-white fw-medium small mb-2 font-marcellus leading-relaxed opacity-100">{member.text}</p>
                                    </div>
                                    <div className="card-outer-glow absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-all duration-500 bg-gradient-primary"></div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="team-pagination swiper-pagination p-5 mt-4"></div>
                </div>
            </section>





            {/* 9. Integration Marquee - Refined Scale */}
            <section className="marquee-section bg-black-mes py-4 border-top border-bottom border-white-05 position-relative overflow-hidden">
                <div className="animated-factory-bg opacity-05"></div>
                <Marquee gradient={false} speed={50}>
                    {["ERP + MES SYNERGY", "DIGITAL THREAD UNIFIED", "BUSINESS + EXECUTION", "MACRO TO MICRO SYNC", "DATA-DRIVEN FACTORY", "INTEGRATED ECOSYSTEM"].map((text, i) => (
                        <div key={i} className="d-flex align-items-center px-60">
                            <div className="dot-mes me-3 opacity-30 bg-primary" style={{ width: '6px', height: '6px' }}></div>
                            <span className="text-white fw-900 text-outline-mes opacity-20" style={{ fontSize: '22px', letterSpacing: '2px' }}>{text}</span>
                        </div>
                    ))}
                </Marquee>
            </section>

            {/* 11. Call to Action - Enterprise Solution Style */}
            <section className="newsletter-one newsletter-three" style={{ padding: '80px 0 30px 0' }}>
                <div className="container">
                    <div className="newsletter-one__inner shadow-3xl" style={{
                        background: 'linear-gradient(90deg, #3D72FC 0%, #070B14 100%)',
                        borderRadius: '60px',
                        border: '1px solid rgba(255,255,255,0.05)'
                    }}>
                        <div className="newsletter-one__shape-bg"
                            style={{ backgroundImage: "url(/assets/images/shapes/newsletter-one-shape-bg.png)" }}></div>

                        <div className="newsletter-one__img">
                            <Image src="/assets/images/backgrounds/cta.png" alt="Micraft MES Live Visualization" width={320} height={320} priority className="rotate-hint" />
                        </div>

                        <div className="row justify-content-center text-center">
                            <div className="col-lg-10" style={{ position: 'relative', zIndex: 5 }}>
                                <AnimatedTitle>
                                    <h2 className="newsletter-one__title text-white mb-20 font-marcellus d-block" style={{ lineHeight: '1.2', fontSize: '36px' }}>
                                        Improve Factory Visibility <br />
                                        <span style={{ color: '#FFD25D', fontFamily: 'var(--techguru-font-two)', fontWeight: '400', fontSize: '32px' }}>with Micraft MES</span>
                                    </h2>
                                </AnimatedTitle>
                                <p className="newsletter-one__text text-white mb-4 fs-5 opacity-90 mx-auto font-marcellus d-block" style={{ maxWidth: '800px' }}>
                                    Micraft MES helps manufacturing companies gain real-time production visibility and improve operational efficiency.
                                </p>
                                <p className="text-white-50 mb-40 fs-6 italic font-marcellus d-block">
                                    Schedule a Live Demo to see how Micraft MES works alongside ERP systems.
                                </p>

                                <div className="cta-btns d-flex flex-wrap justify-content-center gap-4">
                                    <Link href="/contact" className="thm-btn shadow-primary-light" style={{ background: '#0B192C', color: '#fff', fontSize: '15px', padding: '14px 35px', borderRadius: '12px', textTransform: 'uppercase', fontWeight: '800', border: 'none' }}>
                                        Book Your Demo <span className="icon-arrow-right ms-2"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .newsletter-three { padding: 40px 0 !important; }
                    .newsletter-one__inner { position: relative; overflow: hidden; }
                    .newsletter-one__img { position: absolute; right: 40px; top: 50%; transform: translateY(-50%); display: flex; align-items: center; height: auto; z-index: 2; }
                    .thm-btn:hover { background: #fff !important; color: #0B192C !important; }
                    @media (max-width: 1199px) { .newsletter-one__img { right: 20px; } .newsletter-one__img img { width: 250px; height: auto; } }
                    @media (max-width: 991px) { .newsletter-one__img { display: none !important; } .newsletter-one__inner { padding: 60px 20px; } }
                    @media (max-width: 767px) { .newsletter-one__title { font-size: 28px !important; } .cta-btns { flex-direction: column; } .thm-btn { width: 100%; } }
                `}} />
            </section>

        </Layout>
    );
}
