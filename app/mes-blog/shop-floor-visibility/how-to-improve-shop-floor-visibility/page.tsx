"use client"
import Layout from "../../../../components/layout/Layout"
import Breadcrumb from "../../../../components/layout/Breadcrumb"
import Image from "next/image"
import AnimatedTitle from "../../../../components/elements/AnimatedTitle"
import FinalCTA from "../../../../components/sections/home1/FinalCTA"
import MesBlogSidebar from "../../../../components/sections/InnerSection/MesBlogSidebar"

export default function ShopFloorVisibilityPost() {
    return (
        <Layout headerStyle={1} footerStyle={2}>
            <Breadcrumb breadcrumbTitle="How to Improve Shop Floor Visibility" />

            <section className="blog-details pt-100 pb-100 bg-dark-alt">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="blog-details__left">
                                {/* Article Header Info */}
                                <div className="section-title text-left mb-4">

                                    <AnimatedTitle>
                                        <h1 className="section-title__title text-white">
                                            How to Improve <span>Shop Floor Visibility</span>
                                        </h1>
                                    </AnimatedTitle>
                                </div>

                                <div className="d-flex align-items-center gap-3 mb-4">
                                    <div style={{ width: '44px', height: '44px', position: 'relative', overflow: 'hidden', borderRadius: '50%', border: '2px solid rgba(96,101,212,0.6)', flexShrink: 0 }}>
                                        <Image src="/assets/images/blog/jalindra-shinde.png" alt="Jalindra Shinde" fill style={{ objectFit: 'cover' }} />
                                    </div>
                                    <div>
                                        <span className="text-white fw-bold d-block" style={{ fontSize: '14px' }}>Jalindra Shinde</span>
                                        <span className="text-white-50" style={{ fontSize: '12px' }}><i className="far fa-calendar-alt me-1" style={{ color: 'rgba(96,101,212,0.9)' }}></i> April 6, 2026 · 8 min read</span>
                                    </div>
                                </div>

                                {/* Featured Image */}
                                <div className="blog-details__img mb-5 rounded-5 border border-primary border-opacity-20 overflow-hidden shadow-2xl" style={{ height: '420px', position: 'relative' }}>
                                    <Image src="/assets/images/blog/shop-floor-visibility-v4.png" alt="Shop Floor Visibility" fill style={{ objectFit: 'cover' }} className="rounded-4" />
                                </div>

                                <article className="blog-article text-white-50" style={{ lineHeight: '1.9', fontSize: '16px' }}>

                                    <h2 className="text-white h4 mb-3">What is Shop Floor Visibility?</h2>
                                    <p className="mb-4">
                                        Shop floor visibility refers to a manufacturer&apos;s ability to monitor and understand real-time production activities on the factory floor. It means knowing — at any given moment — which machines are running, what work orders are in progress, where delays are occurring, and how output compares to targets.
                                    </p>
                                    <p className="mb-5">
                                        Without visibility, production managers are essentially flying blind. Decisions are made on outdated data from paper registers or end-of-shift reports, leading to poor planning, reactive problem-solving, and missed delivery commitments.
                                    </p>

                                    {/* Callout */}
                                    <div className="p-4 rounded-4 mb-5" style={{ background: 'rgba(96,101,212,0.1)', border: '1px solid rgba(96,101,212,0.3)' }}>
                                        <p className="text-white mb-0 fw-bold d-flex align-items-center gap-3">
                                            <i className="fas fa-eye text-primary-glow fa-lg"></i>
                                            Factories with real-time shop floor visibility reduce unplanned downtime by up to 35% and improve on-time delivery by 28%.
                                        </p>
                                    </div>

                                    <h2 className="text-white h4 mb-3">Why Most Factories Lack Visibility</h2>
                                    <p className="mb-4">
                                        Manual data collection is the primary reason for poor visibility. When operators record production counts on paper and supervisors compile reports hours later, the data is already stale. By the time a manager sees that a machine has been idle for three hours, the opportunity to intervene has long passed.
                                    </p>
                                    <div className="d-flex flex-column gap-3 mb-5">
                                        {[
                                            { t: "Paper-based production registers with no real-time updates", i: "file-alt" },
                                            { t: "No centralized dashboard for floor activity monitoring", i: "desktop" },
                                            { t: "Manual machine status updates causing information lag", i: "clock" },
                                            { t: "Siloed data between departments and production stages", i: "sitemap" },
                                            { t: "Lack of alert systems for production deviations", i: "bell-slash" }
                                        ].map((item, i) => (
                                            <div key={i} className="d-flex align-items-center gap-3 p-3 rounded-3 bg-glass-dark border border-white border-opacity-05">
                                                <i className={`fas fa-${item.i} text-danger`}></i>
                                                <span className="text-white-50">{item.t}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <h2 className="text-white h4 mb-3">5 Strategies to Improve Shop Floor Visibility</h2>

                                    {[
                                        { num: "01", title: "Implement Real-Time Production Dashboards", body: "A centralized production dashboard gives managers an instant view of shop floor status. Production counts, machine status, work order progress, and operator activity are visible in real time — without needing to walk the floor or chase updates." },
                                        { num: "02", title: "Digitize Work Order Tracking", body: "When work orders are managed digitally, each stage of production — from job initiation to completion — is recorded automatically. Managers can see exactly where every job stands at any moment, enabling proactive scheduling and resource allocation." },
                                        { num: "03", title: "Monitor Machine Status Automatically", body: "Machine monitoring systems track equipment activity in real time. Running, idle, breakdown, and maintenance states are captured automatically, eliminating manual machine log entries and enabling faster maintenance response." },
                                        { num: "04", title: "Set Up Deviation Alerts", body: "Real-time alerts notify managers when production targets are missed, machines go idle unexpectedly, or quality issues are detected. Alerts ensure issues are addressed instantly rather than discovered hours later at shift-end." },
                                        { num: "05", title: "Use Historical Production Analytics", body: "Beyond real-time data, visibility also includes historical analysis. Understanding production patterns, recurring bottlenecks, and machine performance trends allows managers to make data-driven improvements to production planning." }
                                    ].map((step, i) => (
                                        <div key={i} className="mb-4 p-4 rounded-4 bg-glass-dark border border-white border-opacity-05">
                                            <div className="d-flex align-items-start gap-4">
                                                <span className="fw-bold flex-shrink-0" style={{ fontSize: '32px', color: 'rgba(96,101,212,0.4)', lineHeight: 1 }}>{step.num}</span>
                                                <div>
                                                    <h4 className="text-white mb-2" style={{ fontSize: '17px' }}>{step.title}</h4>
                                                    <p className="text-white-50 mb-0">{step.body}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    <h2 className="text-white h4 mb-3 mt-5">The Role of MES in Shop Floor Visibility</h2>
                                    <p className="mb-4">
                                        A Manufacturing Execution System (MES) is the most effective tool for achieving comprehensive shop floor visibility. Unlike simple data loggers or spreadsheet-based tracking, an MES digitizes the entire production operation from a single platform.
                                    </p>
                                    <p className="mb-5">
                                        Micraft MES enables factories to monitor production orders, machine activity, operator performance, and quality inspections in real time. Production managers and supervisors gain instant access to live dashboards on any device — reducing fire-fighting and improving operational control.
                                    </p>
                                </article>
                            </div>
                        </div>

                        {/* Sidebar Column */}
                        <div className="col-xl-4 col-lg-5">
                            <MesBlogSidebar />
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Grid Section (Full Width below) */}
            <section className="pt-60 pb-100 bg-dark-depth">
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        {[
                            { title: "Faster Issue Resolution", desc: "Production problems are identified and resolved in real time instead of hours later.", icon: "bolt" },
                            { title: "Better Production Planning", desc: "Accurate live data enables better scheduling and resource allocation decisions.", icon: "calendar-check" },
                            { title: "Reduced Idle Machine Time", desc: "Machine idle periods are detected immediately, enabling faster corrective action.", icon: "cogs" },
                            { title: "Improved On-Time Delivery", desc: "Proactive visibility ensures jobs stay on schedule and commitments are met.", icon: "truck" },
                            { title: "Accurate Shift Reporting", desc: "Automated data capture eliminates manual errors from end-of-shift paper reports.", icon: "file-chart-line" },
                            { title: "Data-Driven Decisions", desc: "Managers make informed decisions based on real production data, not guesses.", icon: "chart-line" }
                        ].map((b, i) => (
                            <div key={i} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${i * 80}ms`}>
                                <div className="p-4 rounded-4 h-100 text-center" style={{ background: 'linear-gradient(145deg, rgba(15,17,35,0.95), rgba(22,25,50,0.9))', border: '1px solid rgba(96,101,212,0.2)' }}>
                                    <div className="mb-3 mx-auto d-flex align-items-center justify-content-center rounded-circle" style={{ width: '56px', height: '56px', background: 'rgba(96,101,212,0.12)', color: '#6065D4', fontSize: '22px' }}>
                                        <i className={`fas fa-${b.icon}`}></i>
                                    </div>
                                    <h4 className="text-white mb-2" style={{ fontSize: '16px', fontWeight: 700 }}>{b.title}</h4>
                                    <p className="text-white-50 small mb-0">{b.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <FinalCTA
                title={<>Ready to See Your Shop Floor <br /> <span>In Real Time?</span></>}
                text="Micraft MES gives manufacturing teams complete shop floor visibility with live dashboards, machine tracking, and real-time production insights."
                buttonLabel1="Book a Free Demo"
            />
        </Layout>
    )
}
