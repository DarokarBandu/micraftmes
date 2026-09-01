'use client'
import React from 'react'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const WhoItIsFor = () => {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 2,
        spaceBetween: 20,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        speed: 4000,
        loop: true,
        pagination: {
            el: '.industry-swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            }
        }
    };

    const targetProfiles = [
        {
            text: "Use manual or Excel-based production tracking",
            icon: (
                <svg className="svg-icon-mini" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            text: "Have ERP systems but lack real-time shop-floor visibility",
            icon: (
                <svg className="svg-icon-mini" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            )
        },
        {
            text: "Struggle to track downtime and production performance accurately",
            icon: (
                <svg className="svg-icon-mini" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            text: "Need better traceability for inspection and quality control",
            icon: (
                <svg className="svg-icon-mini" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            text: "Require clear coordination between production, packing, and dispatch",
            icon: (
                <svg className="svg-icon-mini" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
            )
        }
    ];

    const industries = [
        {
            name: "Automotive Components",
            desc: "Traceability, batch control & OEM compliance.",
            icon: (
                <svg className="svg-icon-mini" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 10V9a2 2 0 012-2h10a2 2 0 012 2v1m-14 0h14m-14 0a1 1 0 00-1 1v5a1 1 0 001 1h14a1 1 0 001-1v-5a1 1 0 00-1-1M5 10a1 1 0 00-1 1v1m16-1a1 1 0 011 1v1M6 16a2 2 0 100 4 2 2 0 000-4zm12 0a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
            )
        },
        {
            name: "CNC Machining",
            desc: "Cycle timing, spindle runtime & tool tracking.",
            icon: (
                <svg className="svg-icon-mini" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
        {
            name: "Plastic Injection Molding",
            desc: "Shot counting, mold maintenance & cycle logs.",
            icon: (
                <svg className="svg-icon-mini" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            )
        },
        {
            name: "Fabrication & Sheet Metal",
            desc: "Cutting, bending, welding & stage routing.",
            icon: (
                <svg className="svg-icon-mini" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4v5a2 2 0 002 2h12a2 2 0 002-2V4M4 20v-5a2 2 0 012-2h12a2 2 0 012 2v5M12 11v2" />
                </svg>
            )
        },
        {
            name: "Electronics (EMS)",
            desc: "SMT line monitoring, component serials & rework.",
            icon: (
                <svg className="svg-icon-mini" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
            )
        },
        {
            name: "General SME Plants",
            desc: "Affordable paperless tracking with rapid ROI.",
            icon: (
                <svg className="svg-icon-mini" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16M3 21h18M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5" />
                </svg>
            )
        }
    ];

    const quickLinks = [
        { name: "Production Tracking", href: "/solutions/production-tracking-software" },
        { name: "Shop Floor Visibility", href: "/solutions/shop-floor-visibility-software" },
        { name: "Machine Utilization", href: "/solutions/machine-utilization-tracking" },
        { name: "Quality Inspection", href: "/solutions/quality-inspection-tracking" },
        { name: "Manufacturing Performance", href: "/solutions/manufacturing-performance-tracking" },
        { name: "Factory Monitoring", href: "/solutions/factory-production-monitoring-system" },
        { name: "Digital Dashboard", href: "/solutions/digital-production-dashboard" }
    ];

    return (
        <section className="who-is-for">
            {isMounted && (
                <>
                    <div className="who-is-for__shape-1"></div>
                    <div className="who-is-for__shape-2"></div>
                    <div className="who-is-for__shape-3"></div>
                </>
            )}
            <div className="container">
                <div className="row justify-content-center text-center mb-3">
                    <div className="col-lg-8">
                        <div className="section-title">
                            <div className="section-title__tagline-box">
                                <span className="section-title__tagline-shape-1"></span>
                                <span className="section-title__tagline">WHO MICRAFT MES IS FOR</span>
                                <span className="section-title__tagline-shape-2"></span>
                            </div>
                            <h2 className="section-title__title">
                                Designed for <span>Manufacturing Teams</span> That Need Better Operational Visibility
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="row g-4">
                    {/* Left Column: Ideal For Plants */}
                    <div className="col-lg-6">
                        <div className="who-is-for__card h-100 shadow-lg">
                            <h3 className="text-white mb-3" style={{ fontSize: '20px', fontWeight: '700' }}>
                                Micraft MES is Ideal For Plants That:
                            </h3>
                            <div className="who-is-for__list-custom">
                                {targetProfiles.map((item, index) => (
                                    <div key={index} className="hexagon-item wow zoomIn" data-wow-delay={`${index * 0.1}s`}>
                                        <div className="hexagon-icon-box">
                                            {item.icon}
                                        </div>
                                        <span className="hexagon-text">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Industries Grid */}
                    <div className="col-lg-6">
                        <div className="section-title mb-3 ps-lg-3 d-flex justify-content-between align-items-center">
                            <h3 className="text-white mb-0" style={{ fontSize: '20px', fontWeight: '700' }}>
                                Industries Served
                            </h3>
                            <div className="industry-swiper-pagination position-relative" style={{ width: 'auto', bottom: '0' }}></div>
                        </div>

                        <div className="ps-lg-3">
                            <Swiper {...swiperOptions} className="industry-carousel">
                                {industries.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="industry-premium-card h-100 d-flex flex-column">
                                            <div className="industry-premium-card__header d-flex align-items-center mb-3">
                                                <div className="industry-premium-card__icon">
                                                    {item.icon}
                                                </div>
                                                <h4 className="industry-premium-card__title ms-3 mb-0">
                                                    {item.name}
                                                </h4>
                                            </div>
                                            <p className="industry-premium-card__desc mt-auto mb-0">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Quick Links Section */}
                        <div className="quick-links-box mt-4 ps-lg-3 wow fadeInUp" data-wow-delay="0.6s">
                            <h4 className="text-white mb-3" style={{ fontSize: '18px', fontWeight: '600' }}>Quick Links</h4>
                            <div className="d-flex flex-wrap gap-3">
                                {quickLinks.map((link, index) => (
                                    <a key={index} href={link.href} className="quick-link-item">
                                        {link.name}
                                        <i className="icon-arrow-right-2 ms-2"></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .who-is-for { padding: 60px 0 60px; }
                :global(.who-is-for .section-title) { margin-bottom: 20px !important; }
                :global(.who-is-for .section-title__tagline-box) { margin-bottom: 8px !important; }
                :global(.who-is-for .section-title__title) { margin-bottom: 6px !important; }

                .industry-premium-card {
                    background: var(--thm-black-3, #FFFFFF);
                    border: 1px solid rgba(115, 102, 202, 0.15);
                    border-radius: 12px;
                    padding: 24px;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.03);
                    min-height: 180px;
                }
                :global([data-theme="dark"]) .industry-premium-card {
                    background: rgba(255, 255, 255, 0.03) !important;
                    border-color: rgba(255, 255, 255, 0.08) !important;
                }
                .industry-premium-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, rgba(115, 102, 202, 0.1) 0%, rgba(255,255,255,0) 100%);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }
                .industry-premium-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(115, 102, 202, 0.5);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
                }
                :global([data-theme="dark"]) .industry-premium-card:hover {
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3) !important;
                }
                .industry-premium-card:hover::before {
                    opacity: 1;
                }
                .industry-premium-card__icon {
                    width: 45px;
                    height: 45px;
                    border-radius: 10px;
                    background: rgba(115, 102, 202, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #7366CA;
                    flex-shrink: 0;
                    transition: all 0.3s ease;
                    position: relative;
                    z-index: 1;
                }
                .industry-premium-card:hover .industry-premium-card__icon {
                    background: #7366CA;
                    color: #FFFFFF;
                }
                :global(.industry-premium-card__icon svg) {
                    width: 22px;
                    height: 22px;
                }
                .industry-premium-card__title {
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 1.3;
                    position: relative;
                    z-index: 1;
                    color: #11121b;
                }
                :global([data-theme="dark"]) .industry-premium-card__title {
                    color: #FFFFFF !important;
                }
                .industry-premium-card__desc {
                    font-size: 14px;
                    color: var(--thm-text);
                    line-height: 1.5;
                    position: relative;
                    z-index: 1;
                }
                :global([data-theme="dark"]) .industry-premium-card__desc {
                    color: rgba(255, 255, 255, 0.6) !important;
                }
                :global(.industry-carousel) {
                    padding-bottom: 30px !important;
                    padding-top: 10px !important;
                }
                :global(.industry-carousel .swiper-wrapper) {
                    transition-timing-function: linear !important;
                }
                :global(.industry-swiper-pagination .swiper-pagination-bullet) {
                    background: #7366CA;
                    opacity: 0.3;
                }
                :global(.industry-swiper-pagination .swiper-pagination-bullet-active) {
                    opacity: 1;
                }
            `}</style>
        </section>
    );
};

export default WhoItIsFor;


