"use client"
import Layout from "../../components/layout/Layout"
import Breadcrumb from "../../components/layout/Breadcrumb"
import Link from "next/link"
import Image from "next/image"
import AnimatedTitle from "../../components/elements/AnimatedTitle"
import FinalCTA from "../../components/sections/home1/FinalCTA"
import CountUp from "react-countup"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 30 },
        767: { slidesPerView: 2, spaceBetween: 30 },
        1199: { slidesPerView: 3, spaceBetween: 30 },
    }
}

export default function ResourcesPage() {
    return (
        <Layout headerStyle={1} footerStyle={2}>
            <Breadcrumb breadcrumbTitle="Resources" />

            {/* 1. Hero Section (Asymmetric Modern Layout) */}
            <section className="mes-hero pt-100 pb-100 overflow-hidden bg-dark-depth position-relative" id="hero">
                {/* Decorative Shapes (Parity with About-Three) */}
                <div className="about-three__shape-1 float-bob-x opacity-20"></div>
                <div className="about-three__shape-2 float-bob-y opacity-20"></div>

                <div className="container position-relative z-2">
                    <div className="row align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="section-title text-left">
                                <span className="tagline-glow mb-2 d-inline-block">Industrial Impact</span>
                                <AnimatedTitle>
                                    <h1 className="section-title__title text-white mt-2 display-5 fw-bold">
                                        Trusted by <span>Manufacturing</span> <br /> Global Teams
                                    </h1>
                                </AnimatedTitle>
                            </div>
                            <div className="mt-4 text-white">
                                <p className="mb-4 hero-subtitle opacity-80" style={{ maxWidth: '540px', fontSize: '18px', lineHeight: '1.7' }}>
                                    Manufacturers across multiple industries rely on Micraft MES to gain real-time visibility,
                                    improve production efficiency, and maintain control over factory operations.
                                </p>
                                <div className="btn-box d-flex align-items-center gap-3">
                                    <Link href="#impact" className="thm-btn">Verify results <span className="icon-right-arrow"></span></Link>
                                    <Link href="/book-demo" className="btn-schedule-demo text-decoration-none d-flex align-items-center gap-3 group">
                                        <div className="icon-circle-outline transition-3s group-hover:bg-accent border border-accent rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                            <i className="fas fa-play text-accent group-hover:text-dark fs-xs transition-3s"></i>
                                        </div>
                                        <span className="text-white fw-bold small text-uppercase tracking-widest">Book Live Demo</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="hero-image-wrap-premium position-relative mt-5 mt-lg-0">
                                <div className="image-border-glow p-[2px] rounded-5 shadow-2xl" style={{ background: 'linear-gradient(135deg, var(--techguru-accent), rgba(250, 86, 116, 0.1))' }}>
                                    <div className="rounded-5 overflow-hidden position-relative" style={{ height: '420px' }}>
                                        <Image
                                            src="/assets/images/project/prodcutiondashboard.jpg"
                                            alt="Production Dashboard"
                                            fill
                                            className="img-cover shadow-2xl"
                                        />
                                        <div className="overlay-transparent"></div>

                                        {/* Live Pulse Indicator */}
                                        <div className="position-absolute bottom-0 start-0 m-4 z-2">
                                            <div className="kpi-pill-premium bg-dark-depth px-4 py-3 rounded-4 border border-accent border-opacity-30 shadow-2xl d-flex align-items-center gap-3">
                                                <span className="badge-dot pulse-primary"></span>
                                                <div className="d-flex flex-column">
                                                    <span className="text-white extra-small fw-bold text-uppercase opacity-50 tracking-widest">Live Network</span>
                                                    <span className="text-accent small fw-bold">Active Shopfloors</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Floating Element Decor */}
                                <div className="position-absolute top-0 end-0 mt-n4 me-n4 z-n1 wow zoomIn" data-wow-delay="400ms">
                                    <div className="bg-primary-glow opacity-10 rounded-circle" style={{ width: '200px', height: '200px', filter: 'blur(60px)' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Industries Network Slider (Clean Yellow Accent Style) */}
            <section className="industries-network-slider pt-100 pb-100 bg-dark-alt overflow-hidden">
                <div className="container">
                    <div className="section-title text-center mb-60 wow fadeInUp">
                        <span className="text-accent fw-bold text-uppercase letter-spacing-3 small opacity-80 mb-2 d-inline-block">Vertical Solutions</span>
                        <h2 className="section-title__title text-white">Industries Using <span>Micraft MES</span></h2>
                    </div>
                </div>

                <div className="container-fluid px-xl-5">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        slidesPerView={2}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        breakpoints={{
                            576: { slidesPerView: 3 },
                            768: { slidesPerView: 4 },
                            992: { slidesPerView: 5 },
                            1200: { slidesPerView: 6 }
                        }}
                        className="network-swiper pb-40"
                    >
                        {[
                            { t: "Automotive", img: "DowntimeTracking.jpg" },
                            { t: "CNC Engineering", img: "WorkOrderExecution.jpg" },
                            { t: "Electronics", img: "InspectionQualityRecording.jpg" },
                            { t: "Plastic Molding", img: "feat_process_monitoring.png" },
                            { t: "Metal Fab", img: "DispatchTracking.jpg" },
                            { t: "General Mfg", img: "prodcutiondashboard.jpg" },
                            { t: "Precision", img: "feat_factory_monitoring.png" },
                            { t: "Inspection", img: "feat_quality_inspection.png" }
                        ].map((ind, i) => (
                            <SwiperSlide key={i}>
                                <div className="network-slide-card text-center p-3 rounded-5 bg-glass-dark border border-white border-opacity-05 transition-5s hover-lift shadow-2xl h-100">
                                    <div className="image-wrap-modern mb-3 mx-auto rounded-4 overflow-hidden border border-accent border-opacity-20" style={{ width: '140px', height: '110px', position: 'relative' }}>
                                        <Image
                                            src={`/assets/images/project/${ind.img}`}
                                            alt={ind.t}
                                            fill
                                            className="img-cover grayscale-0 transition-5s"
                                        />
                                    </div>
                                    <h4 className="text-white small fw-bold text-uppercase letter-spacing-1 mb-0 py-2" style={{ fontSize: '10px', minHeight: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {ind.t}
                                    </h4>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* 3. Customer Impact Section (Modernized Counter Style) */}
            <section id="impact" className="counter-one">
                <div className="counter-one__wrap">
                    <div className="counter-one__bg-shape float-bob-x"
                        style={{ backgroundImage: "url(/assets/images/shapes/counter-one-bg-shape.png)" }}></div>
                    <div className="counter-one__shape-1"></div>
                    <div className="counter-one__shape-2"></div>
                    <div className="container">
                        <div className="section-title text-center sec-title-animation animation-style1">
                            <div className="section-title__tagline-box">
                                <div className="section-title__tagline-shape-1"></div>
                                <span className="section-title__tagline">Proven Results</span>
                                <div className="section-title__tagline-shape-2"></div>
                            </div>
                            <AnimatedTitle>
                                <h2 className="section-title__title title-animation">
                                    Operational Improvements with <span>Micraft MES</span>
                                </h2>
                            </AnimatedTitle>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                                <div className="counter-one__single">
                                    <div className="counter-one__icon">
                                        <i className="fas fa-eye text-primary-glow fs-1"></i>
                                    </div>
                                    <div className="counter-one__content">
                                        <div className="counter-one__count-box">
                                            <h3 className="odometer" style={{ fontSize: '64px' }}><CountUp end={35} duration={3} /></h3>
                                            <span style={{ fontSize: '32px' }}>%</span>
                                        </div>
                                        <p className="counter-one__text fs-6 fw-bold">Production Visibility Gain</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
                                <div className="counter-one__single">
                                    <div className="counter-one__icon">
                                        <i className="fas fa-clock text-accent fs-1"></i>
                                    </div>
                                    <div className="counter-one__content">
                                        <div className="counter-one__count-box">
                                            <h3 className="odometer" style={{ fontSize: '64px' }}><CountUp end={40} duration={2.5} /></h3>
                                            <span style={{ fontSize: '32px' }}>%</span>
                                        </div>
                                        <p className="counter-one__text fs-6 fw-bold">Reduction in Downtime</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="200ms">
                                <div className="counter-one__single">
                                    <div className="counter-one__icon">
                                        <i className="fas fa-check-double text-primary-glow fs-1"></i>
                                    </div>
                                    <div className="counter-one__content">
                                        <div className="counter-one__count-box">
                                            <h3 className="odometer" style={{ fontSize: '64px' }}><CountUp end={30} duration={2} /></h3>
                                            <span style={{ fontSize: '32px' }}>%</span>
                                        </div>
                                        <p className="counter-one__text fs-6 fw-bold">Quality Yield Increase</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="400ms">
                                <div className="counter-one__single">
                                    <div className="counter-one__icon">
                                        <i className="fas fa-chart-line text-accent fs-1"></i>
                                    </div>
                                    <div className="counter-one__content">
                                        <div className="counter-one__count-box">
                                            <h3 className="odometer" style={{ fontSize: '64px' }}><CountUp end={100} duration={3} /></h3>
                                            <span style={{ fontSize: '32px' }}>%</span>
                                        </div>
                                        <p className="counter-one__text fs-6 fw-bold">Audit-Ready Traceability</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Customer Testimonials (Modernized Carousel) */}
            <section className="testimonial-two pt-100 pb-100 bg-dark-alt" id="testimonial">
                <div className="testimonial-two__shape-1"></div>
                <div className="testimonial-two__shape-2"></div>
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box">
                            <div className="section-title__tagline-shape-1"></div>
                            <span className="section-title__tagline">Social Proof</span>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title title-animation">
                                What Manufacturing <span>Teams Say</span>
                            </h2>
                        </AnimatedTitle>
                    </div>

                    <Swiper {...swiperOptions} className="testimonial-two__carousel mt-60">
                        {[
                            { q: "Micraft MES gave us real-time visibility across our shop floor. Production planning and machine monitoring are now much easier.", a: "Thomas Alison", s: "Production Manager", c: "Precision Engineering", img: "testimonial-2-1" },
                            { q: "The transition from paper-based tracking to digital was seamless. Our supervisors now have instant access to production data.", a: "Sarah Williams", s: "Plant Head", c: "Automotive Parts", img: "testimonial-2-2" },
                            { q: "Since implementing Micraft, we've reduced our downtime by identifying bottlenecks as they happen, not at the end of the shift.", a: "James Anderson", s: "Operations Director", c: "Industrial Equipment", img: "testimonial-2-3" },
                            { q: "The level of control we have over our work orders now is incredible. The operator-first interface really made a difference in adoption.", a: "Michael Chen", s: "Shift Lead", c: "Metal Fabrication", img: "testimonial-2-1" }
                        ].map((test, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="testimonial-two__single h-100 shadow-lg">
                                    <div className="testimonial-two__single-inner">
                                        <div className="testimonial-two__star">
                                            <i className="fas fa-star text-accent"></i>
                                            <i className="fas fa-star text-accent"></i>
                                            <i className="fas fa-star text-accent"></i>
                                            <i className="fas fa-star text-accent"></i>
                                            <i className="fas fa-star text-accent"></i>
                                        </div>
                                        <p className="testimonial-two__text italic">&quot;{test.q}&quot;</p>
                                    </div>
                                    <div className="testimonial-two__client-info">
                                        <div className="testimonial-two__client-img">
                                            <Image src={`/assets/images/testimonial/${test.img}.jpg`} alt={test.a} width={64} height={64} className="rounded-circle" />
                                        </div>
                                        <div className="testimonial-two__client-content">
                                            <h4 className="testimonial-two__client-name"><Link href="/customers/testimonials">{test.a}</Link></h4>
                                            <p className="testimonial-two__sub-title">{test.s} | {test.c}</p>
                                        </div>
                                    </div>
                                    <div className="testimonial-two__quote">
                                        <i className="fas fa-quote-right opacity-20"></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-pagination mt-40"></div>
                </div>
            </section>

            {/* 5. Success Stories Section (Compact & Gradient Design) */}
            <section className="case-studies-preview pt-100 pb-100 bg-dark-depth position-relative overflow-hidden">
                {/* Layered Decorative Shapes */}
                <div className="portfolio-one__shape-1 opacity-20">
                    <Image src="/assets/images/shapes/portfolio-one-shape-1.png" alt="Shape" width={923} height={1948} />
                </div>
                <div className="portfolio-one__shape-2 opacity-20">
                    <Image src="/assets/images/shapes/portfolio-one-shape-2.png" alt="Shape" width={1358} height={1948} />
                </div>

                <div className="container position-relative z-2">
                    <div className="row align-items-center mb-60">
                        <div className="col-xl-8 wow fadeInLeft">
                            <div className="section-title text-left">
                                <span className="tagline-glow mb-2 d-inline-block">Industrial Proof</span>
                                <AnimatedTitle>
                                    <h2 className="section-title__title text-white mt-2">
                                        Measurable Success Across <br /> <span>Global Manufacturing</span>
                                    </h2>
                                </AnimatedTitle>
                            </div>
                        </div>
                        <div className="col-xl-4 text-xl-end wow fadeInRight">
                            {/* ROI Rotating Badge */}
                            <div className="portfolio-one__round-text-box d-inline-block">
                                <div className="portfolio-one__round-text-box-outer">
                                    <div className="portfolio-one__round-text-box-inner">
                                        <div className="portfolio-one__curved-circle" style={{ animation: 'rotate-circle 20s linear infinite' }}>
                                            <svg viewBox="0 0 150 150" className="w-100 h-100">
                                                <path id="circlePath" d="M 75, 75 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" fill="transparent" />
                                                <text className="text-white-50 small fw-bold" style={{ fontSize: '11px', letterSpacing: '4px' }}>
                                                    <textPath xlinkHref="#circlePath">
                                                        40% ROI • 100% VISIBILITY • 40% ROI • 100% VISIBILITY •
                                                    </textPath>
                                                </text>
                                            </svg>
                                        </div>
                                        <div className="portfolio-one__round-icon">
                                            <i className="fas fa-chart-line text-primary-glow fs-4"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4">
                        {[
                            { t: "The FPY Boost Prototype", i: "Precision Engineering", d: "Increased First-Pass Yield by 35% using real-time machine-signal analytics and bottleneck identification.", img: "WorkOrderExecution", kpi: "35% Yield Boost", year: "2024" },
                            { t: "Total Downtime Elimination", i: "Automotive Supplier", d: "Reduced unplanned equipment downtime by 40% through AI-powered predictive maintenance alerts.", img: "DowntimeTracking", kpi: "40% Less Downtime", year: "2024" },
                            { t: "Global Audit Visibility", i: "Aerospace Parts", d: "Achieved 100% paperless digital traceability, passing multiple critical safety audits with zero non-conformances.", img: "InspectionQualityRecording", kpi: "100% Traceability", year: "2023" }
                        ].map((caseStudy, idx) => (
                            <div key={idx} className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 150}ms`}>
                                <div className="case-card-premium h-100 rounded-5 overflow-hidden bg-glass-dark group transition-5s shadow-2xl position-relative p-[1px]" style={{ background: 'linear-gradient(135deg, rgba(96, 101, 212, 0.5), rgba(250, 86, 116, 0.5))' }}>
                                    <div className="bg-dark rounded-5 h-100 overflow-hidden">
                                        <div className="case-card__image-wrap position-relative" style={{ height: '240px' }}>
                                            <Image
                                                src={`/assets/images/project/${caseStudy.img}.jpg`}
                                                alt={caseStudy.t}
                                                fill
                                                className="img-cover group-hover:scale-105 transition-5s rounded-t-5"
                                            />
                                            <div className="position-absolute top-0 start-0 m-4 z-2">
                                                <span className="badge-sector-premium px-3 py-2 rounded-pill small fw-bold text-uppercase tracking-wider shadow-lg"
                                                    style={{ background: 'rgba(250, 86, 116, 0.9)', backdropFilter: 'blur(10px)', fontSize: '10px' }}>
                                                    {caseStudy.i}
                                                </span>
                                            </div>
                                            <div className="position-absolute bottom-0 end-0 m-4 z-2">
                                                <div className="kpi-pill-premium bg-dark-depth px-3 py-2 rounded-4 border border-accent border-opacity-50 shadow-2xl d-flex align-items-center gap-2">
                                                    <span className="badge-dot pulse-primary"></span>
                                                    <span className="text-accent small fw-bold">{caseStudy.kpi}</span>
                                                </div>
                                            </div>
                                            <div className="overlay-transparent group-hover:bg-dark group-hover:opacity-10 transition-5s"></div>
                                        </div>

                                        <div className="p-4 p-xl-4">
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <span className="text-primary-glow small fw-bold text-uppercase tracking-widest" style={{ fontSize: '10px' }}>{caseStudy.year} Case</span>
                                                <i className="fas fa-star text-accent small opacity-50" style={{ fontSize: '10px' }}></i>
                                            </div>
                                            <h4 className="text-white mb-2 text-h4-premium transition-3s group-hover:text-primary-glow font-bold" style={{ minHeight: '50px', fontSize: '1.25rem' }}>{caseStudy.t}</h4>
                                            <p className="text-white opacity-70 small mb-3" style={{ fontSize: '13px', lineHeight: '1.6' }}>{caseStudy.d}</p>
                                            <div className="pt-3 border-top border-white border-opacity-05">
                                                <Link href="/case-studies" className="link-explore-modern text-decoration-none d-flex align-items-center gap-3">
                                                    <span className="text-white-50 small fw-bold text-uppercase tracking-widest group-hover:text-white transition-3s" style={{ fontSize: '11px' }}>Full Case Study</span>
                                                    <div className="icon-circle bg-glass-light transition-3s">
                                                        <i className="fas fa-arrow-right text-primary-glow"></i>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <style jsx>{`
                    @keyframes rotate-circle {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                `}</style>
            </section>

            {/* 6. Industries Using Micraft MES */}
            <section className="industries-section pt-100 pb-100 bg-dark-alt">
                <div className="container">
                    <div className="section-title text-center mb-60 mt-40">
                        <span className="tagline-glow">Global Footprint</span>
                        <h2 className="section-title__title text-white">Used Across <span>Manufacturing Industries</span></h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { t: "Automotive Components", i: "car", l: "/industries/automotive-components" },
                            { t: "Precision Engineering", i: "cog", l: "/industries/precision-engineering" },
                            { t: "Metal Fabrication", i: "tools", l: "/industries/fabrication" },
                            { t: "Industrial Equipment", i: "industry", l: "/industries/industrial-equipment" },
                            { t: "Contract Mfg", i: "handshake", l: "/industries/contract-manufacturing" },
                            { t: "Plastics & Molding", i: "fill-drip", l: "/industries/plastic-injection-molding" }
                        ].map((ind, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 100}ms`}>
                                <Link href={ind.l} className="text-decoration-none">
                                    <div className="p-4 rounded-4 bg-glass-dark border border-white border-opacity-05 d-flex align-items-center gap-4 hover-lift transition-3s">
                                        <div className="icon-bg-shop p-3 rounded" style={{ background: 'rgba(96, 101, 212, 0.1)' }}>
                                            <i className={`fas fa-${ind.i} text-primary-glow fs-4`}></i>
                                        </div>
                                        <h5 className="text-white mb-0 fs-6 fw-bold">{ind.t}</h5>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-5 wow fadeIn">
                        <Link href="/case-studies" className="thm-btn">
                            View All Success Stories <span className="icon-right-arrow"></span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 7. Final Call to Action */}
            <FinalCTA
                title={<>See How Micraft MES Can <br /> <span>Transform Your Factory</span></>}
                text="Request a live demo to see how Micraft MES helps manufacturers improve visibility, efficiency, and operational control."
                buttonLabel1="Schedule Your Demo"
            />
        </Layout>
    )
}
