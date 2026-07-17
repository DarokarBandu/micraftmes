"use client"
import Layout from "../../../../components/layout/Layout"
import Breadcrumb from "../../../../components/layout/Breadcrumb"
import Link from "next/link"
import Image from "next/image"
import FinalCTA from "../../../../components/sections/home1/FinalCTA"

export default function AutomotiveTraceabilityCaseStudy() {
    return (
        <Layout headerStyle={1} footerStyle={2}>
            <Breadcrumb breadcrumbTitle="Case Study: Automotive Traceability" />
            
            <section className="case-study-details pt-100 pb-100 bg-dark-depth">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-8">
                            <div className="cs-content rounded-5 bg-glass-dark border border-white-05 p-4 p-md-5">
                                <span className="tagline-glow mb-3">Automotive Components</span>
                                <h1 className="text-white display-5 fw-black mb-4">Achieving Production Traceability for an Automotive Supplier</h1>
                                
                                <div className="cs-image-hero mb-60 rounded-5 overflow-hidden border border-white-05 shadow-2xl" style={{ height: '450px', position: 'relative' }}>
                                    <Image src="/assets/images/project/auto-traceability.png" alt="Traceability Monitoring" fill className="img-cover grayscale" />
                                </div>

                                <div className="cs-section mb-60">
                                    <h3 className="text-white mb-4 fw-bold"><span className="text-accent">01.</span> The Problem</h3>
                                    <p className="text-white-opacity-70 fs-5 leading-relaxed">
                                        The manufacturer faced major challenges in tracking product history and identifying affected batches during quality issues. Manual logs were unreliable for deep root cause analysis required by automotive OEMs.
                                    </p>
                                </div>

                                <div className="cs-section mb-60">
                                    <h3 className="text-white mb-4 fw-bold"><span className="text-primary-glow">02.</span> The Solution</h3>
                                    <p className="text-white-opacity-70 fs-5 leading-relaxed">
                                        Micraft MES traceability module was implemented to track batch data, production processes, and inspection records. Every component&apos;s journey was digitized from raw material to dispatch.
                                    </p>
                                    <ul className="list-unstyled mt-4 space-y-3">
                                        {["End-to-end batch tracking", "Digital quality inspection logs", "One-click genealogy reports"].map((item, i) => (
                                            <li key={i} className="text-white d-flex align-items-center gap-3">
                                                <i className="fas fa-check-circle text-accent"></i>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="cs-section">
                                    <h3 className="text-white mb-4 fw-bold"><span className="text-success">03.</span> The Outcome</h3>
                                    <div className="row g-4">
                                        {[
                                            { t: "Compliance", d: "Complete product and batch traceability achieved." },
                                            { t: "Speed", d: "Faster root cause analysis for any quality issues." },
                                            { t: "Trust", d: "Improved compliance with global automotive customer requirements." }
                                        ].map((item, i) => (
                                            <div key={i} className="col-md-4">
                                                <div className="p-4 rounded-4 bg-white-05 border border-white-05 h-100">
                                                    <h5 className="text-white fw-bold mb-2">{item.t}</h5>
                                                    <p className="text-white-opacity-40 x-small mb-0">{item.d}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <aside className="sticky-top" style={{ top: '100px' }}>
                                <div className="p-4 rounded-5 bg-dark-alt border border-white-05 shadow-xl mb-4">
                                    <h4 className="text-white mb-4 fw-bold">At a Glance</h4>
                                    <ul className="list-unstyled space-y-4">
                                        <li className="d-flex justify-content-between border-bottom border-white-05 pb-3 text-white">
                                            <span className="text-white-50 small">Industry</span>
                                            <span className="fw-bold small">Automotive</span>
                                        </li>
                                        <li className="d-flex justify-content-between border-bottom border-white-05 pb-3 text-white">
                                            <span className="text-white-50 small">Goal</span>
                                            <span className="fw-bold small">Zero Recall Risk</span>
                                        </li>
                                        <li className="d-flex justify-content-between pb-3 text-white">
                                            <span className="text-white-50 small">Platform</span>
                                            <span className="fw-bold small">Micraft MES</span>
                                        </li>
                                    </ul>
                                    <Link href="/book-demo" className="thm-btn w-100 text-center mt-4">Demo Traceability</Link>
                                </div>

                                <div className="p-4 rounded-5 bg-glass-dark border border-white-05">
                                    <h5 className="text-white mb-3 fw-bold">Similar Operations</h5>
                                    <div className="space-y-4">
                                        <Link href="/customers/case-studies/engineering-visibility" className="d-block text-white-50 small hover-text-accent transition-3s border-bottom border-white-05 pb-3 mb-3">Engineering Visibility Study</Link>
                                        <Link href="/customers/case-studies/fabrication-dispatch" className="d-block text-white-50 small hover-text-accent transition-3s">Dispatch Accuracy Success</Link>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>

            <FinalCTA />
        </Layout>
    )
}
