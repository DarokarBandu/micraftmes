"use client"
import Layout from "../../../../components/layout/Layout"
import Breadcrumb from "../../../../components/layout/Breadcrumb"
import Link from "next/link"
import Image from "next/image"
import FinalCTA from "../../../../components/sections/home1/FinalCTA"

export default function FabricationDispatchCaseStudy() {
    return (
        <Layout headerStyle={1} footerStyle={2}>
            <Breadcrumb breadcrumbTitle="Case Study: Dispatch Accuracy" />
            
            <section className="case-study-details pt-100 pb-100 bg-dark-depth">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-8">
                            <div className="cs-content rounded-5 bg-glass-dark border border-white-05 p-4 p-md-5">
                                <span className="tagline-glow mb-3">Fabrication & Machining</span>
                                <h1 className="text-white display-5 fw-black mb-4">Improving Dispatch Accuracy in a Fabrication Unit</h1>
                                
                                <div className="cs-image-hero mb-60 rounded-5 overflow-hidden border border-white-05 shadow-2xl" style={{ height: '450px', position: 'relative' }}>
                                    <Image src="/assets/images/project/fabrication-dispatch.png" alt="Dispatch Tracking" fill className="img-cover grayscale" />
                                </div>

                                <div className="cs-section mb-60">
                                    <h3 className="text-white mb-4 fw-bold"><span className="text-accent">01.</span> The Problem</h3>
                                    <p className="text-white-opacity-70 fs-5 leading-relaxed">
                                        Dispatch operations were manual, leading to incorrect shipments and constant delays in order fulfillment. The reliance on paper logs made it difficult to verify if the right quantity and parts were packed for each destination.
                                    </p>
                                </div>

                                <div className="cs-section mb-60">
                                    <h3 className="text-white mb-4 fw-bold"><span className="text-primary-glow">02.</span> The Solution</h3>
                                    <p className="text-white-opacity-70 fs-5 leading-relaxed">
                                        Micraft MES dispatch tracking and packing verification features were implemented. The system now validates each item against the dispatch plan before allowing the generation of final shipping labels.
                                    </p>
                                    <ul className="list-unstyled mt-4 space-y-3">
                                        {["Packing verification module", "Digital dispatch planning", "Live order status tracking"].map((item, i) => (
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
                                            { t: "Accuracy", d: "Accurate packing and dispatch verification established." },
                                            { t: "Reliability", d: "Significantly reduced shipment errors and customer complaints." },
                                            { t: "Performance", d: "Improved on-time delivery performance across all clients." }
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
                                            <span className="fw-bold small">Fabrication</span>
                                        </li>
                                        <li className="d-flex justify-content-between border-bottom border-white-05 pb-3 text-white">
                                            <span className="text-white-50 small">Metric</span>
                                            <span className="fw-bold small">On-Time Delivery</span>
                                        </li>
                                        <li className="d-flex justify-content-between pb-3 text-white">
                                            <span className="text-white-50 small">Platform</span>
                                            <span className="fw-bold small">Micraft MES</span>
                                        </li>
                                    </ul>
                                    <Link href="/book-demo" className="thm-btn w-100 text-center mt-4">Demo Dispatch Ops</Link>
                                </div>

                                <div className="p-4 rounded-5 bg-glass-dark border border-white-05">
                                    <h5 className="text-white mb-3 fw-bold">More Use Cases</h5>
                                    <div className="space-y-4">
                                        <Link href="/customers/case-studies/cnc-machine-downtime" className="d-block text-white-50 small hover-text-accent transition-3s border-bottom border-white-05 pb-3 mb-3">CNC Downtime Study</Link>
                                        <Link href="/customers/case-studies/automotive-traceability" className="d-block text-white-50 small hover-text-accent transition-3s">Automotive Part Tracking</Link>
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
