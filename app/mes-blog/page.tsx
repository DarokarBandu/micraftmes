"use client";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import AnimatedTitle from "../../components/elements/AnimatedTitle";
import FinalCTA from "../../components/sections/home1/FinalCTA";


const bLogs = [
    {
        id: 1,
        title: "How to Improve Shop Floor Visibility",
        category: "Shop Floor Visibility",
        date: "April 6, 2026",
        excerpt: "Eliminate blind spots on your factory floor. Learn how real-time monitoring and dashboards can transform your operational visibility.",
        img: "/assets/images/blog/shop-floor-visibility-v4.png",
        author: "Jalindra Shinde",
        authorImg: "/assets/images/blog/jalindra-shinde.png",
        detailUrl: "/mes-blog/shop-floor-visibility/how-to-improve-shop-floor-visibility"
    },
    {
        id: 2,
        title: "What is Production Tracking in Manufacturing?",
        category: "Production Tracking",
        date: "March 22, 2026",
        excerpt: "Mastering work orders, production status, and digital workflows to replace manual errors in modern shop floors.",
        img: "/assets/images/blog/production-tracking-v4.png",
        author: "Umesh Dahare",
        authorImg: "/assets/images/blog/umesh-dahare.png",
        detailUrl: "/mes-blog/production-tracking/what-is-production-tracking-in-manufacturing"
    },
    {
        id: 3,
        title: "How to Improve Machine Utilization",
        category: "Machine Utilization",
        date: "February 28, 2026",
        excerpt: "Discover equipment productivity methods and how real-time machine monitoring can uncover hidden plant capacity.",
        img: "/assets/images/blog/machine-utilization-v4.png",
        author: "Bandhu Dorokar",
        authorImg: "/assets/images/blog/bandhu-dorokar.png",
        detailUrl: "/mes-blog/machine-utilization/how-to-improve-machine-utilization"
    },
    {
        id: 4,
        title: "7 Ways to Improve Manufacturing Productivity",
        category: "Manufacturing Efficiency",
        date: "February 10, 2026",
        excerpt: "Practical strategies for SMEs to digitize their factory and leverage real-time data for peak operational performance.",
        img: "/assets/images/blog/productivityoptimization.png",
        author: "Omkar Arankalle",
        authorImg: "/assets/images/blog/Expert MicraftExpert.png",
        detailUrl: "/mes-blog/manufacturing-efficiency/7-ways-to-improve-manufacturing-productivity"
    },
    {
        id: 5,
        title: "How to Track Quality Inspections",
        category: "Quality Control",
        date: "January 20, 2026",
        excerpt: "Reduce production rejections through digital inspection systems and real-time defect tracking built for manufacturers.",
        img: "/assets/images/blog/mesimplementation.png",
        author: "Vishal Karpe",
        authorImg: "/assets/images/blog/ManufacturingProductivity.png",
        detailUrl: "/mes-blog/quality-control/how-to-track-quality-inspections"
    },
    {
        id: 6,
        title: "MES vs ERP: Which One Does Your Factory Need?",
        category: "Manufacturing Technology",
        date: "January 5, 2026",
        excerpt: "Understand the critical differences between Execution Systems and Planning resources for Manufacturing SMEs.",
        img: "/assets/images/blog/mes-erp-dashboard-v5.png",
        author: "Saurabh Burude",
        authorImg: "/assets/images/blog/Expert MicraftExpert.png",
        detailUrl: "/mes-blog/manufacturing-technology/mes-vs-erp"
    }
];

export default function BlogPage() {
    return (
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Manufacturing Insights">

            {/* 1. Blog Hero Section */}
            <section className="blog-page-header pt-5 pb-5 bg-dark-depth overflow-hidden">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="tagline-glow mb-2 d-inline-block">Mastering Modern Manufacturing</span>
                        <AnimatedTitle>
                            <h1 className="section-title__title text-white display-4">
                                Manufacturing Productivity & <br /> <span>MES Insights</span>
                            </h1>
                        </AnimatedTitle>
                        <p className="text-white-50 mt-4 mx-auto" style={{ maxWidth: '700px', fontSize: '18px' }}>
                            Actionable guides and industry deep-dives to help SMEs digitize their shop floors
                            and lead with data-driven efficiency.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Main Blog Grid (Full Width 3-Column) */}
            <section className="blog-page pt-80 pb-120 bg-dark-alt">
                <div className="container">
                    <div className="row g-4">
                        {/* Article Feed - Full Width */}
                        <div className="col-lg-12">
                            <div className="row g-5">
                                {bLogs.map((post, i) => (
                                    <div key={post.id} className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${i * 100}ms`}>
                                        {/* Full Card with Border */}
                                        <div className="blog-card-wrapper h-100" style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            borderRadius: '20px',
                                            border: '1px solid rgba(96, 101, 212, 0.3)',
                                            overflow: 'hidden',
                                            background: 'linear-gradient(145deg, rgba(15,17,35,0.95) 0%, rgba(22,25,50,0.9) 100%)',
                                            backdropFilter: 'blur(16px)',
                                            boxShadow: '0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
                                            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                                        }}>
                                            {/* Card Image — top, flush */}
                                            <div className="position-relative overflow-hidden" style={{ height: '240px', flexShrink: 0 }}>
                                                <Image src={post.img} alt={post.title} fill style={{ objectFit: 'cover' }} />
                                                {/* Gradient overlay at bottom of image */}
                                                <div style={{
                                                    position: 'absolute', inset: 0,
                                                    background: 'linear-gradient(to bottom, transparent 50%, rgba(10,12,28,0.85) 100%)'
                                                }} />
                                                {/* Post tags (removed category) */}
                                                <div className="position-absolute bottom-0 start-0 m-3 z-2 d-flex gap-2 flex-wrap">
                                                    <span className="badge rounded-pill px-3 py-1 text-white fw-semibold" style={{ fontSize: '11px', background: 'rgba(96, 101, 212, 0.85)', backdropFilter: 'blur(8px)', letterSpacing: '0.3px' }}>Industrial</span>
                                                </div>
                                            </div>

                                            {/* Divider line between image and content */}
                                            <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(96,101,212,0.5), rgba(250,86,116,0.3), transparent)' }} />

                                            {/* Card Content Body */}
                                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '24px 24px 20px' }}>

                                                {/* Author + Date row */}
                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div style={{ width: '34px', height: '34px', position: 'relative', overflow: 'hidden', borderRadius: '50%', border: '2px solid rgba(96,101,212,0.6)', flexShrink: 0 }}>
                                                            <Image src={post.authorImg} alt={post.author} fill style={{ objectFit: 'cover' }} />
                                                        </div>
                                                        <span style={{ color: '#e0e0f0', fontSize: '13px', fontWeight: 600 }}>{post.author}</span>
                                                    </div>
                                                    <div className="d-flex align-items-center gap-1" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '12px' }}>
                                                        <i className="far fa-calendar-alt" style={{ color: 'rgba(96,101,212,0.9)' }}></i>
                                                        <span>{post.date}</span>
                                                    </div>
                                                </div>

                                                {/* Thin separator */}
                                                <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', marginBottom: '16px' }} />

                                                {/* Title */}
                                                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, lineHeight: 1.45, color: '#ffffff', marginBottom: '12px', flex: 0 }}>
                                                    <Link href={post.detailUrl}
                                                        style={{ color: 'inherit', textDecoration: 'none' }}
                                                        className="blog-card-title-link">
                                                        {post.title}
                                                    </Link>
                                                </h3>

                                                {/* Excerpt */}
                                                <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, marginBottom: '20px', flex: 1 }}>
                                                    {post.excerpt}
                                                </p>

                                                {/* CTA Button — pinned to bottom */}
                                                <div style={{ paddingTop: '4px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                                                    <Link href={post.detailUrl}
                                                        className="thm-btn rounded-pill d-inline-flex align-items-center gap-2"
                                                        style={{ fontSize: '13px', padding: '9px 22px' }}>
                                                        Read Article <span className="icon-right-arrow"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="blog-page__pagination mt-60 d-flex justify-content-center">
                                <ul className="pg-pagination list-unstyled d-flex gap-2">
                                    <li className="prev">
                                        <Link href="#" className="rounded-circle border border-white border-opacity-10 d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}><span className="icon-left-arrow-1"></span></Link>
                                    </li>
                                    <li className="count active"><Link href="#" className="rounded-circle d-flex align-items-center justify-content-center font-bold" style={{ width: '50px', height: '50px' }}>01</Link></li>
                                    <li className="count"><Link href="#" className="rounded-circle border border-white border-opacity-10 d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>02</Link></li>
                                    <li className="next">
                                        <Link href="#" className="rounded-circle border border-white border-opacity-10 d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}><span className="icon-left-arrow-1 text-rotate-180"></span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FinalCTA
                title={<>Ready to Digitize Your <br /> <span>Shop Floor Operations?</span></>}
                text="See how Micraft MES turns blog insights into real-time operational excellence for manufacturers."
                buttonLabel1="Schedule Your Demo"
            />

            <style jsx>{`
                .text-rotate-180 { transform: rotate(180deg); }
                .blog-card-wrapper:hover {
                    border-color: rgba(96, 101, 212, 0.7) !important;
                    box-shadow: 0 8px 48px rgba(96, 101, 212, 0.25), 0 2px 16px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08) !important;
                }
                .blog-card-title-link:hover {
                    color: rgba(150, 155, 255, 1) !important;
                }
                .extra-small { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; }
            `}</style>
        </Layout>
    )
}
