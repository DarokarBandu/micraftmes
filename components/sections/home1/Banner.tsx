'use client'
import React from "react"
import { Autoplay, Navigation, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link";
import Image from "next/image";
import "swiper/css/effect-fade";

const swiperOptions = {
    modules: [Autoplay, Navigation, EffectFade],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    navigation: {
        nextEl: '.main-slider-two__nav-next',
        prevEl: '.main-slider-two__nav-prev',
    },
}

export default function Banner() {
    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                @media only screen and (min-width: 992px) {
                    .banner-title-desktop {
                        font-size: 50px !important;
                        font-weight: 700 !important;
                        line-height: 1.2 !important;
                    }
                }
            ` }} />
            <section className="main-slider-two">
                <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
                    {/* Slider 1 — CORE POSITIONING */}
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="main-slider-two__bg"
                                style={{ backgroundImage: "url(/assets/images/backgrounds/Realtimeshopfloor.jpg)" }}></div>

                            <div className="main-slider-two__shape-1"></div>
                            <div className="main-slider-two__shape-2 float-bob-x">
                                <Image src="/assets/images/shapes/main-slider-two-shape-2.png" alt="shape" width={588} height={519} priority />
                            </div>
                            <div className="main-slider-two__shape-3 float-bob-y">
                                <Image src="/assets/images/shapes/main-slider-two-shape-3.png" alt="shape" width={381} height={582} priority />
                            </div>
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-xl-7 col-lg-7">
                                        <div className="main-slider-two__content">
                                            <div className="main-slider-two__sub-title-box">
                                                <div className="main-slider-two__sub-title-icon">
                                                    <Image src="/assets/images/icon/core-icon.svg" alt="icon" width={20} height={20} priority />
                                                </div>
                                                <p className="main-slider-two__sub-title fw-bold" style={{ fontWeight: '700' }}>CORE POSITIONING</p>
                                            </div>
                                            <h1 className="main-slider-two__title banner-title-desktop">
                                                Manufacturing Execution System for <br /> <span>Real-Time Shop Floor Visibility</span>
                                            </h1>
                                            <h2 className="main-slider-two__h2 banner-h2-desktop mb-3" style={{ fontWeight: '700', fontSize: '32px', color: '#ffffff' }}>
                                                Track production, downtime, inspection, packing, and dispatch in real time.
                                            </h2>
                                            <p className="main-slider-two__text fw-medium" style={{ fontWeight: '500', color: 'rgba(255, 255, 255, 0.9)' }}>
                                                Micraft MES connects machines, operators, and processes to give <br />
                                                manufacturing teams a clear and reliable view of what is happening on the shop floor.
                                            </p>
                                            <div className="main-slider-two__btns-box">
                                                <div className="main-slider-two__btn-box-1">
                                                    <Link href="/contact" className="thm-btn">Request a Demo<span className="icon-right-arrow"></span></Link>
                                                </div>
                                                <div className="main-slider-two__btn-box-2">
                                                    <Link href="/product/how-micraft-mes-works" className="thm-btn">See How It Works<span className="icon-right-arrow"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 d-none d-lg-block">
                                        <div className="main-slider-two__illustration-wrapper float-bob-y" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', minHeight: '400px' }}>
                                            <div className="position-absolute" style={{ background: 'rgba(115, 102, 202, 0.15)', width: '500px', height: '500px', borderRadius: '50%', filter: 'blur(50px)' }}></div>

                                            <div className="glass-vector" style={{ position: 'relative', background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.1)', padding: '50px', borderRadius: '30px', textAlign: 'center', boxShadow: '0 25px 50px rgba(0,0,0,0.3)', zIndex: 2 }}>
                                                <div style={{ fontSize: '80px', marginBottom: '20px', color: '#7366CA', display: 'inline-block' }}>
                                                    <i className="fas fa-network-wired"></i>
                                                </div>
                                                <h3 style={{ color: 'white', fontSize: '24px', fontWeight: '700', margin: 0 }}>Real-Time Data</h3>
                                                <p style={{ color: '#97a2b0', marginTop: '10px', fontSize: '15px', marginBottom: 0 }}>100% Shop Floor Sync</p>
                                            </div>

                                            <div className="position-absolute float-bob-x" style={{ top: '15%', right: '0%', background: 'rgba(115,102,202,0.15)', border: '1px solid rgba(115,102,202,0.3)', backdropFilter: 'blur(10px)', padding: '12px 24px', borderRadius: '40px', zIndex: 3, display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
                                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#7366CA', boxShadow: '0 0 12px #7366CA' }}></div>
                                                <span style={{ color: '#fff', fontSize: '14px', fontWeight: '600', letterSpacing: '1px' }}>LIVE</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slider 2 — PRODUCTION & DOWNTIME */}
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="main-slider-two__bg"
                                style={{ backgroundImage: "url(/assets/images/backgrounds/ProductionandDowntime.jpg)" }}></div>

                            <div className="main-slider-two__shape-1"></div>
                            <div className="main-slider-two__shape-2 float-bob-x">
                                <Image src="/assets/images/shapes/main-slider-two-shape-2.png" alt="shape" width={588} height={519} priority />
                            </div>
                            <div className="main-slider-two__shape-3 float-bob-y">
                                <Image src="/assets/images/shapes/main-slider-two-shape-3.png" alt="shape" width={381} height={582} priority />
                            </div>
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-xl-7 col-lg-7">
                                        <div className="main-slider-two__content">
                                            <div className="main-slider-two__sub-title-box">
                                                <div className="main-slider-two__sub-title-icon">
                                                    <Image src="/assets/images/icon/production-icon.svg" alt="icon" width={20} height={20} priority />
                                                </div>
                                                <p className="main-slider-two__sub-title fw-bold" style={{ fontWeight: '700' }}>PRODUCTION & DOWNTIME</p>
                                            </div>
                                            <h1 className="main-slider-two__title banner-title-desktop">
                                                Reduce Downtime with <br /> <span>Real-Time Monitoring</span>
                                            </h1>
                                            <h2 className="main-slider-two__h2 banner-h2-desktop mb-3" style={{ fontWeight: '700', fontSize: '32px', color: '#ffffff' }}>
                                                Identify production losses faster and take corrective action during the shift.
                                            </h2>
                                            <p className="main-slider-two__text fw-medium" style={{ fontWeight: '500', color: 'rgba(255, 255, 255, 0.9)' }}>
                                                Micraft MES captures downtime reasons directly from the shop floor <br />
                                                and shows production performance in real time so teams can quickly identify bottlenecks.
                                            </p>
                                            <div className="main-slider-two__btns-box">
                                                <div className="main-slider-two__btn-box-1">
                                                    <Link href="/solutions/production-tracking-software" className="thm-btn">Explore Downtime Tracking<span className="icon-right-arrow"></span></Link>
                                                </div>
                                                <div className="main-slider-two__btn-box-2">
                                                    <Link href="/contact" className="thm-btn">Book A Demo<span className="icon-right-arrow"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 d-none d-lg-block">
                                        <div className="main-slider-two__illustration-wrapper float-bob-y" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', minHeight: '400px' }}>
                                            <div className="position-absolute" style={{ background: 'rgba(255,210,93,0.15)', width: '500px', height: '500px', borderRadius: '50%', filter: 'blur(50px)' }}></div>
                                            <div className="glass-vector" style={{ position: 'relative', background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.1)', padding: '50px', borderRadius: '30px', textAlign: 'center', boxShadow: '0 25px 50px rgba(0,0,0,0.3)', zIndex: 2 }}>
                                                <div style={{ fontSize: '80px', marginBottom: '20px', color: '#FFD25D', display: 'inline-block' }}>
                                                    <i className="fas fa-chart-bar"></i>
                                                </div>
                                                <h3 style={{ color: 'white', fontSize: '24px', fontWeight: '700', margin: 0 }}>OEE Tracking</h3>
                                                <p style={{ color: '#97a2b0', marginTop: '10px', fontSize: '15px', marginBottom: 0 }}>Instant Downtime Alerts</p>
                                            </div>
                                            <div className="position-absolute float-bob-x" style={{ bottom: '15%', left: '0%', background: 'rgba(255,210,93,0.15)', border: '1px solid rgba(255,210,93,0.3)', backdropFilter: 'blur(10px)', padding: '12px 24px', borderRadius: '40px', zIndex: 3, display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
                                                <i className="fas fa-bell text-warning"></i>
                                                <span style={{ color: '#fff', fontSize: '14px', fontWeight: '600' }}>Uptime Optimized</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slider 3 — END-TO-END VISIBILITY */}
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="main-slider-two__bg"
                                style={{ backgroundImage: "url(/assets/images/backgrounds/EndtoEndVisibility.jpg)" }}></div>

                            <div className="main-slider-two__shape-1"></div>
                            <div className="main-slider-two__shape-2 float-bob-x">
                                <Image src="/assets/images/shapes/main-slider-two-shape-2.png" alt="shape" width={588} height={519} priority />
                            </div>
                            <div className="main-slider-two__shape-3 float-bob-y">
                                <Image src="/assets/images/shapes/main-slider-two-shape-3.png" alt="shape" width={381} height={582} priority />
                            </div>
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-xl-7 col-lg-7">
                                        <div className="main-slider-two__content">
                                            <div className="main-slider-two__sub-title-box">
                                                <div className="main-slider-two__sub-title-icon">
                                                    <Image src="/assets/images/icon/visibility-icon.svg" alt="icon" width={20} height={20} priority />
                                                </div>
                                                <p className="main-slider-two__sub-title fw-bold" style={{ fontWeight: '700' }}>END-TO-END VISIBILITY</p>
                                            </div>
                                            <h1 className="main-slider-two__title banner-title-desktop">
                                                From Production to Dispatch <br /> <span>Complete Visibility</span>
                                            </h1>
                                            <h2 className="main-slider-two__h2 banner-h2-desktop mb-3" style={{ fontWeight: '700', fontSize: '32px', color: '#ffffff' }}>
                                                Monitor work orders, inspection results, packing status, and dispatch readiness in one system.
                                            </h2>
                                            <p className="main-slider-two__text fw-medium" style={{ fontWeight: '500', color: 'rgba(255, 255, 255, 0.9)' }}>
                                                Micraft MES connects production processes so manufacturing teams <br />
                                                always know what is completed, what is pending, and what is ready to ship.
                                            </p>
                                            <div className="main-slider-two__btns-box">
                                                <div className="main-slider-two__btn-box-1">
                                                    <Link href="/product/how-micraft-mes-works" className="thm-btn">View Manufacturing Flow<span className="icon-right-arrow"></span></Link>
                                                </div>
                                                <div className="main-slider-two__btn-box-2">
                                                    <Link href="/contact" className="thm-btn">Request Demo<span className="icon-right-arrow"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 d-none d-lg-block">
                                        <div className="main-slider-two__illustration-wrapper float-bob-y" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', minHeight: '400px' }}>
                                            <div className="position-absolute" style={{ background: 'rgba(115, 102, 202, 0.15)', width: '500px', height: '500px', borderRadius: '50%', filter: 'blur(50px)' }}></div>
                                            <div className="glass-vector" style={{ position: 'relative', background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.1)', padding: '50px', borderRadius: '30px', textAlign: 'center', boxShadow: '0 25px 50px rgba(0,0,0,0.3)', zIndex: 2 }}>
                                                <div style={{ fontSize: '80px', marginBottom: '20px', color: '#7366CA', display: 'inline-block' }}>
                                                    <i className="fas fa-project-diagram"></i>
                                                </div>
                                                <h3 style={{ color: 'white', fontSize: '24px', fontWeight: '700', margin: 0 }}>End-to-End Traceability</h3>
                                                <p style={{ color: '#97a2b0', marginTop: '10px', fontSize: '15px', marginBottom: 0 }}>Production to Dispatch</p>
                                            </div>
                                            <div className="position-absolute float-bob-x" style={{ top: '25%', right: '0%', background: 'rgba(115,102,202,0.15)', border: '1px solid rgba(115,102,202,0.3)', backdropFilter: 'blur(10px)', padding: '12px 24px', borderRadius: '40px', zIndex: 3, display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
                                                <i className="fas fa-check-circle" style={{ color: '#7366CA' }}></i>
                                                <span style={{ color: '#fff', fontSize: '14px', fontWeight: '600' }}>Quality Verified</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slider 4 — PRACTICAL IMPLEMENTATION */}
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="main-slider-two__bg"
                                style={{ backgroundImage: "url(/assets/images/backgrounds/PracticalImplementation.jpg)" }}></div>

                            <div className="main-slider-two__shape-1"></div>
                            <div className="main-slider-two__shape-2 float-bob-x">
                                <Image src="/assets/images/shapes/main-slider-two-shape-2.png" alt="shape" width={588} height={519} priority />
                            </div>
                            <div className="main-slider-two__shape-3 float-bob-y">
                                <Image src="/assets/images/shapes/main-slider-two-shape-3.png" alt="shape" width={381} height={582} priority />
                            </div>
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-xl-7 col-lg-7">
                                        <div className="main-slider-two__content">
                                            <div className="main-slider-two__sub-title-box">
                                                <div className="main-slider-two__sub-title-icon">
                                                    <Image src="/assets/images/icon/implementation-icon.svg" alt="icon" width={20} height={20} priority />
                                                </div>
                                                <p className="main-slider-two__sub-title fw-bold" style={{ fontWeight: '700' }}>PRACTICAL IMPLEMENTATION</p>
                                            </div>
                                            <h1 className="main-slider-two__title banner-title-desktop">
                                                Deploy a Practical MES in <br /> <span>30–60 Days</span>
                                            </h1>
                                            <h2 className="main-slider-two__h2 banner-h2-desktop mb-3" style={{ fontWeight: '700', fontSize: '32px', color: '#ffffff' }}>
                                                Improve shop-floor visibility without replacing ERP or disrupting operations.
                                            </h2>
                                            <p className="main-slider-two__text fw-medium" style={{ fontWeight: '500', color: 'rgba(255, 255, 255, 0.9)' }}>
                                                Micraft MES works alongside your existing systems and focuses on <br />
                                                solving the execution visibility gaps most manufacturing plants face.
                                            </p>
                                            <div className="main-slider-two__btns-box">
                                                <div className="main-slider-two__btn-box-1">
                                                    <Link href="/contact" className="thm-btn">Book a 15-Minute Demo<span className="icon-right-arrow"></span></Link>
                                                </div>
                                                <div className="main-slider-two__btn-box-2">
                                                    <Link href="/product/mes-implementation" className="thm-btn">Learn About Implementation<span className="icon-right-arrow"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 d-none d-lg-block">
                                        <div className="main-slider-two__illustration-wrapper float-bob-y" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', minHeight: '400px' }}>
                                            <div className="position-absolute" style={{ background: 'rgba(115, 102, 202, 0.15)', width: '500px', height: '500px', borderRadius: '50%', filter: 'blur(50px)' }}></div>
                                            <div className="glass-vector" style={{ position: 'relative', background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.1)', padding: '50px', borderRadius: '30px', textAlign: 'center', boxShadow: '0 25px 50px rgba(0,0,0,0.3)', zIndex: 2 }}>
                                                <div style={{ fontSize: '80px', marginBottom: '20px', color: '#7366CA', display: 'inline-block' }}>
                                                    <i className="fas fa-rocket"></i>
                                                </div>
                                                <h3 style={{ color: 'white', fontSize: '24px', fontWeight: '700', margin: 0 }}>Rapid Go-Live</h3>
                                                <p style={{ color: '#97a2b0', marginTop: '10px', fontSize: '15px', marginBottom: 0 }}>30-60 Days Deployment</p>
                                            </div>
                                            <div className="position-absolute float-bob-x" style={{ bottom: '20%', right: '10%', background: 'rgba(115,102,202,0.15)', border: '1px solid rgba(115,102,202,0.3)', backdropFilter: 'blur(10px)', padding: '12px 24px', borderRadius: '40px', zIndex: 3, display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
                                                <i className="fas fa-bolt" style={{ color: '#FFD25D' }}></i>
                                                <span style={{ color: '#fff', fontSize: '14px', fontWeight: '600' }}>Zero Disruption</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <div className="main-slider-two__nav">
                        <div className="swiper-button-prev main-slider-two__nav-prev">
                            <i className="icon-right-up"></i>
                        </div>
                        <div className="swiper-button-next main-slider-two__nav-next">
                            <i className="icon-right-up"></i>
                        </div>
                    </div>
                </Swiper>

                {/* Strategic Digital Ticker — Refined Minimalist Loop */}
                <div className="hero-ticker-overlay d-none d-xl-block position-absolute bottom-0 start-0 w-100" style={{ zIndex: 100, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(30px)', borderTop: '2px solid rgba(255,210,93,0.3)', padding: '16px 0' }}>
                    <div className="ticker-container-mes">
                        <div className="ticker-content-mes">
                            {[1, 2, 3].map((set) => (
                                <React.Fragment key={set}>
                                    <div className="ticker-item-mes px-5 d-flex align-items-center gap-2">
                                        <i className="fas fa-bolt" style={{ color: '#FFD25D', fontSize: '16px' }}></i>
                                        <span style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '2px', color: '#fff' }}>FAST DEPLOYMENT</span>
                                    </div>
                                    <div className="status-dot-glow"></div>

                                    <div className="ticker-item-mes px-5 d-flex align-items-center gap-2">
                                        <i className="fas fa-tools" style={{ color: '#FFD25D', fontSize: '16px' }}></i>
                                        <span style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '2px', color: '#fff' }}>PRACTICAL IMPLEMENTATION</span>
                                    </div>
                                    <div className="status-dot-glow"></div>

                                    <div className="ticker-item-mes px-5 d-flex align-items-center gap-2">
                                        <i className="fas fa-satellite-dish" style={{ color: '#FFD25D', fontSize: '16px' }}></i>
                                        <span style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '2px', color: '#fff' }}>REAL-TIME VISIBILITY</span>
                                    </div>
                                    <div className="status-dot-glow" style={{ background: '#fff', boxShadow: '0 0 12px #fff' }}></div>

                                    <div className="ticker-item-mes px-5 d-flex align-items-center gap-2">
                                        <i className="fas fa-microchip" style={{ color: '#fff', opacity: 0.8 }}></i>
                                        <span style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '2.5px', color: '#fff', textTransform: 'uppercase' }}>Designed for Manufacturing SMEs</span>
                                    </div>
                                    <div className="status-dot-glow" style={{ background: '#fff', boxShadow: '0 0 12px #fff' }}></div>

                                    <div className="ticker-item-mes px-5 d-flex align-items-center gap-2">
                                        <i className="fas fa-check-circle" style={{ color: '#FFD25D', fontSize: '12px' }}></i>
                                        <span style={{ fontSize: '12px', fontWeight: '600', color: '#FFD25D' }}>REDUCED DOWNTIME</span>
                                    </div>
                                    <div className="dot-sep-mes"></div>

                                    <div className="ticker-item-mes px-5 d-flex align-items-center gap-2">
                                        <i className="fas fa-check-circle" style={{ color: '#FFD25D', fontSize: '12px' }}></i>
                                        <span style={{ fontSize: '12px', fontWeight: '600', color: '#FFD25D' }}>IMPROVED EFFICIENCY</span>
                                    </div>
                                    <div className="dot-sep-mes"></div>

                                    <div className="ticker-item-mes px-5 d-flex align-items-center gap-2">
                                        <i className="fas fa-check-circle" style={{ color: '#FFD25D', fontSize: '12px' }}></i>
                                        <span style={{ fontSize: '12px', fontWeight: '600', color: '#FFD25D' }}>DATA-DRIVEN DECISIONS</span>
                                    </div>
                                    <div className="status-dot-glow"></div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

