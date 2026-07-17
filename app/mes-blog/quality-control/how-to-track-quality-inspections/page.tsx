"use client"
import Layout from "../../../../components/layout/Layout"
import Breadcrumb from "../../../../components/layout/Breadcrumb"
import Image from "next/image"
import AnimatedTitle from "../../../../components/elements/AnimatedTitle"
import FinalCTA from "../../../../components/sections/home1/FinalCTA"
import MesBlogSidebar from "../../../../components/sections/InnerSection/MesBlogSidebar"

export default function QualityInspectionsPost() {
    return (
        <Layout headerStyle={1} footerStyle={2}>
            <Breadcrumb breadcrumbTitle="How to Track Quality Inspections" />

            <section className="blog-details pt-100 pb-100 bg-dark-alt">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="blog-details__left">
                                {/* Article Header Info */}
                                <div className="section-title text-left mb-4">

                                    <AnimatedTitle>
                                        <h1 className="section-title__title text-white">
                                            How to Track <span>Quality Inspections</span>
                                        </h1>
                                    </AnimatedTitle>
                                </div>

                                <div className="d-flex align-items-center gap-3 mb-4">
                                    <div style={{ width: '44px', height: '44px', position: 'relative', overflow: 'hidden', borderRadius: '50%', border: '2px solid rgba(96,101,212,0.6)', flexShrink: 0 }}>
                                        <Image src="/assets/images/blog/ManufacturingProductivity.png" alt="Vishal Karpe" fill style={{ objectFit: 'cover' }} />
                                    </div>
                                    <div>
                                        <span className="text-white fw-bold d-block" style={{ fontSize: '14px' }}>Vishal Karpe</span>
                                        <span className="text-white-50" style={{ fontSize: '12px' }}><i className="far fa-calendar-alt me-1" style={{ color: 'rgba(96,101,212,0.9)' }}></i> January 20, 2026 · 9 min read</span>
                                    </div>
                                </div>

                                {/* Featured Image */}
                                <div className="blog-details__img mb-5 rounded-5 border border-primary border-opacity-20 overflow-hidden shadow-2xl" style={{ height: '420px', position: 'relative' }}>
                                    <Image src="/assets/images/blog/mesimplementation.png" alt="Quality Inspections" fill style={{ objectFit: 'cover' }} className="rounded-4" />
                                </div>

                                <article className="blog-article text-white-50" style={{ lineHeight: '1.9', fontSize: '16px' }}>

                                    <h2 className="text-white h4 mb-3">Why Quality Inspection Tracking is Critical</h2>
                                    <p className="mb-4">
                                        Quality inspections are the last line of defense between the production floor and the customer. Without systematic tracking, defects slip through, rejection rates remain high, and rework costs erode profitability. Worse, when defective products reach customers, the damage to reputation and relationships can be severe.
                                    </p>
                                    <p className="mb-5">
                                        For manufacturing SMEs operating on tight margins, quality failures are particularly costly. A single batch rejection can wipe out the profit from an entire production run. Digital quality tracking transforms inspection from a reactive, paper-based process into a proactive, data-driven system.
                                    </p>

                                    <div className="p-4 rounded-4 mb-5" style={{ background: 'rgba(96,101,212,0.1)', border: '1px solid rgba(96,101,212,0.3)' }}>
                                        <p className="text-white mb-0 fw-bold d-flex align-items-center gap-3">
                                            <i className="fas fa-shield-check text-primary-glow fa-lg"></i>
                                            Manufacturers using digital quality tracking reduce rejection rates by up to 41% and cut rework costs by 33% within the first six months.
                                        </p>
                                    </div>

                                    <h2 className="text-white h4 mb-3">The Problem with Manual Quality Inspections</h2>
                                    <div className="d-flex flex-column gap-3 mb-5">
                                        {[
                                            "Inspection results recorded on paper are difficult to compile and analyze",
                                            "Defect data is unavailable until end-of-shift report consolidation",
                                            "No real-time alerts when rejection rates exceed acceptable thresholds",
                                            "Identifying recurring defect patterns requires manual analysis of paper records",
                                            "Inspector sign-off and traceability difficult to maintain without digital records"
                                        ].map((p, i) => (
                                            <div key={i} className="d-flex align-items-center gap-3 p-3 rounded-3 bg-glass-dark border border-white border-opacity-05">
                                                <i className="fas fa-times-circle text-danger"></i>
                                                <span className="text-white-50">{p}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <h2 className="text-white h4 mb-3">How to Build an Effective Digital Inspection System</h2>

                                    {[
                                        { num: "01", title: "Define Inspection Checkpoints by Process Stage", body: "Quality inspections should occur at defined checkpoints throughout the production process — not just at final inspection. In-process inspection catches defects early, before they are compounded by downstream operations. Define specific inspection criteria for each stage and capture results digitally at the point of inspection." },
                                        { num: "02", title: "Record Defects with Category Classification", body: "Every defect should be recorded with a category — dimensional, surface finish, assembly error, material defect, etc. Categorized defect data enables analysis of failure modes. When a specific defect type trends upward, root cause investigation can be launched before the problem becomes systemic." },
                                        { num: "03", title: "Track Accepted, Rejected, and Rework Quantities Separately", body: "Production quality tracking must distinguish between accepted output, rejected parts, and rework quantities. This three-way classification gives managers an accurate picture of true production output and the real cost of rework compared to planned output." },
                                        { num: "04", title: "Enable Real-Time Quality Alerts", body: "Set threshold alerts that trigger automatically when rejection rates exceed acceptable limits. Real-time alerts notify supervisors and quality managers immediately — enabling investigation and correction before an entire batch is affected." },
                                        { num: "05", title: "Maintain Inspector Identity and Traceability", body: "Every inspection record should capture the inspector identity, timestamp, batch number, and relevant production details. Complete traceability ensures accountability and enables recall management should quality issues be identified after dispatch." }
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

                                    <h2 className="text-white h4 mb-3 mt-5">Key Quality Metrics Manufacturers Should Track</h2>
                                    <div className="row g-3 mb-5">
                                        {[
                                            { label: "FPY", name: "First Pass Yield", desc: "Percentage of parts passing inspection without rework on the first attempt." },
                                            { label: "DPM", name: "Defects Per Million", desc: "Industry-standard measure of defect frequency in high-volume production." },
                                            { label: "RWR", name: "Rework Rate", desc: "Percentage of production requiring rework before final acceptance." },
                                            { label: "COQ", name: "Cost of Quality", desc: "Total cost of defect prevention, inspection, and failure correction." }
                                        ].map((m, i) => (
                                            <div key={i} className="col-md-6">
                                                <div className="p-4 rounded-4 h-100 bg-glass-dark border border-white border-opacity-05">
                                                    <div className="fw-bold mb-1" style={{ color: '#6065D4', fontSize: '18px' }}>{m.label}</div>
                                                    <h5 className="text-white mb-1" style={{ fontSize: '14px' }}>{m.name}</h5>
                                                    <p className="text-white-50 small mb-0">{m.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <h2 className="text-white h4 mb-3">How Micraft MES Handles Quality Tracking</h2>
                                    <p className="mb-5">
                                        Micraft MES integrates quality inspection tracking directly into the production workflow. Inspectors record results digitally at each checkpoint — accepted, rejected, and rework quantities are captured in real time. Quality dashboards give managers instant visibility into rejection trends, defect categories, and inspection status across all active jobs. Automated alerts trigger when thresholds are breached, ensuring quality issues are never discovered too late.
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


            <FinalCTA
                title={<>Reduce Rejections & Rework <br /> <span>with Digital Quality Tracking</span></>}
                text="Micraft MES brings real-time quality inspection tracking, defect analytics, and automated alerts to manufacturing operations of all sizes."
                buttonLabel1="Book a Free Demo"
            />
        </Layout>
    )
}
