"use client"
import Layout from "@/components/layout/Layout"
import Breadcrumb from "@/components/layout/Breadcrumb"
import Link from "next/link"
import Image from "next/image"
import AnimatedTitle from "@/components/elements/AnimatedTitle"

const industries = [
    {
        title: "Automotive Components",
        image: "/assets/images/project/DowntimeTracking.jpg",
        link: "/industries/automotive-component-manufacturing",
        desc: "Precision tracking for high-volume automotive parts manufacturing with full traceability and recall ready logs.",
        icon: "car-side",
        kpi: "Recall Ready 100%"
    },
    {
        title: "CNC & Precision Engineering",
        image: "/assets/images/project/WorkOrderExecution.jpg",
        link: "/industries/cnc-machining-engineering",
        desc: "Advanced monitoring for CNC shops, ensuring high machine utilization and tool-life tracking.",
        icon: "cogs",
        kpi: "98% Utilization"
    },
    {
        title: "Electronics & PCB Assembly",
        image: "/assets/images/project/InspectionQualityRecording.jpg",
        link: "/industries/electronics-manufacturing",
        desc: "High-speed assembly line tracking with microscopic precision and digital quality logs.",
        icon: "microchip",
        kpi: "Zero-Defect Goal"
    },
    {
        title: "Plastic Injection Molding",
        image: "/assets/images/project/ProductionMonitoring.png",
        link: "/industries/plastic-injection-molding",
        desc: "Real-time cycle time monitoring and rejection analytics for high-volume molding operations.",
        icon: "vial",
        kpi: "30% Less Scrap"
    },
    {
        title: "Metal Fabrication",
        image: "/assets/images/project/DispatchTracking.jpg",
        link: "/industries/fabrication-industry",
        desc: "Streamlined inventory and process tracking for complex fabrication and assembly workflows.",
        icon: "hammer",
        kpi: "On-Time Dispatch"
    },
    {
        title: "General Manufacturing SMEs",
        image: "/assets/images/project/ShopFloor.png",
        link: "/industries/general-manufacturing-smes",
        desc: "Modular MES solutions designed specifically for the agility of growing manufacturing SMEs.",
        icon: "industry",
        kpi: "SME Focused"
    }
]

export default function IndustriesPage() {
    return (
        <Layout headerStyle={1} footerStyle={2}>
            <Breadcrumb breadcrumbTitle="Industries We Serve" />

            <section className="case-studies-preview pt-100 pb-100 bg-dark-depth">
                <div className="container">
                    <div className="section-title text-center mb-80 wow fadeInUp">
                        <span className="tagline-glow">Vertical Solutions</span>
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white">
                                Purpose-Built MES for <br /> <span>Diverse Industrial Sectors</span>
                            </h2>
                        </AnimatedTitle>
                        <p className="text-white-50 mt-4 mx-auto max-w-2xl px-4 op-7">
                            Micraft MES provides specialized tracking logic and dashboards tailored to the specific needs of these core manufacturing industries.
                        </p>
                    </div>

                    <div className="row g-4">
                        {industries.map((ind, i) => (
                            <div key={i} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${i * 100}ms`}>
                                <div className="case-card-premium h-100 rounded-5 overflow-hidden bg-glass-dark border border-white border-opacity-05 group transition-5s shadow-2xl">
                                    <div className="case-card__image-wrap position-relative" style={{ height: '260px' }}>
                                        <Image
                                            src={ind.image}
                                            alt={ind.title}
                                            fill
                                            className="img-cover group-hover:scale-105 transition-5s"
                                        />
                                        <div className="position-absolute top-0 start-0 m-4 z-2">
                                            <span className="badge-sector-premium px-3 py-2 rounded-pill small fw-bold text-uppercase tracking-wider shadow-lg"
                                                style={{ background: 'rgba(250, 86, 116, 0.9)', backdropFilter: 'blur(10px)', fontSize: '10px' }}>
                                                {ind.title.split(' ')[0]}
                                            </span>
                                        </div>
                                        <div className="position-absolute bottom-0 end-0 m-4 z-2">
                                            <div className="kpi-pill-premium bg-dark-depth px-3 py-2 rounded-4 border border-accent border-opacity-50 shadow-2xl d-flex align-items-center gap-2">
                                                <span className="badge-dot pulse-primary"></span>
                                                <span className="text-accent small fw-bold">{ind.kpi}</span>
                                            </div>
                                        </div>
                                        {/* Overlay removed to ensure full image visibility */}
                                    </div>

                                    <div className="p-4 p-xl-4 text-center">
                                        <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
                                            <div className="icon-circle-shop p-2 rounded-circle" style={{ background: 'rgba(96, 101, 212, 0.1)', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <i className={`fas fa-${ind.icon} text-primary-glow fs-5`}></i>
                                            </div>
                                        </div>
                                        <h3 className="text-white h5 mb-3 fw-bold transition-3s group-hover:text-primary-glow">{ind.title}</h3>
                                        <p className="text-white opacity-60 small mb-4 px-2" style={{ minHeight: '60px' }}>
                                            {ind.desc}
                                        </p>
                                        <div className="pt-4 border-top border-white border-opacity-05">
                                            <Link href={ind.link} className="link-explore-modern text-decoration-none d-flex align-items-center justify-content-center gap-3">
                                                <span className="text-white-50 small fw-bold text-uppercase tracking-widest group-hover:text-white transition-3s">Explore Solution</span>
                                                <div className="icon-circle bg-glass-light transition-3s">
                                                    <i className="fas fa-arrow-right text-primary-glow"></i>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    )
}
