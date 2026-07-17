"use client"
import Layout from "../../../components/layout/Layout"
import Breadcrumb from "../../../components/layout/Breadcrumb"
import Link from "next/link"
import Image from "next/image"
import AnimatedTitle from "../../../components/elements/AnimatedTitle"
import FinalCTA from "../../../components/sections/home1/FinalCTA"

export default function LeadershipPage() {
    return (
        <Layout headerStyle={1} footerStyle={2}>
            <Breadcrumb breadcrumbTitle="Leadership" />

            {/* 1. Hero Section */}
            <section className="leadership-hero pt-100 pb-100 overflow-hidden bg-dark-depth position-relative">
                <div className="section-shape-1" style={{ position: 'absolute', top: '10%', right: '0', width: '300px', height: '300px', background: 'rgba(250, 86, 116, 0.05)', filter: 'blur(100px)', borderRadius: '50%' }}></div>
                <div className="container position-relative z-2">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-7 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="section-title text-left">
                                <span className="tagline-glow mb-2">Management Team</span>
                                <AnimatedTitle>
                                    <h1 className="section-title__title text-white mt-2">Leadership Team at <span>Micraft</span></h1>
                                </AnimatedTitle>
                            </div>
                            <div className="mt-4 text-white">
                                <p className="mb-4 hero-subtitle opacity-80" style={{ maxWidth: '600px', fontSize: '18px' }}>
                                    The Micraft leadership team is focused on building technology platforms that help manufacturing companies gain real-time visibility and improve production efficiency.
                                </p>
                                <p className="text-white-opacity-70 mb-4" style={{ fontSize: '17px', lineHeight: '1.7' }}>
                                    Micraft is driven by a strong vision to transform manufacturing operations through digital technologies. Our team brings experience in tech development, manufacturing systems, and enterprise software.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 wow fadeInRight" data-wow-delay="200ms">
                            <div className="leadership-visual p-2 rounded-5 bg-glass-dark border border-white-05 shadow-2xl overflow-hidden">
                                <div className="rounded-5 overflow-hidden grayscale opacity-40">
                                    <Image
                                        src="/assets/images/backgrounds/EndtoEndVisibility.jpg"
                                        alt="Leadership Vision"
                                        width={500}
                                        height={450}
                                        className="img-cover w-100"
                                        style={{ height: '400px' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Leadership Philosophy */}
            <section className="philosophy-section pt-100 pb-100 bg-dark-alt">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="philosophy-img rounded-5 overflow-hidden shadow-2xl border border-white-10 hover-lift transition-3s">
                                <Image
                                    src="/assets/images/micraftmeswork/hero-banner.png"
                                    alt="Practical Leadership"
                                    width={600}
                                    height={500}
                                    className="img-cover w-100"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="section-title text-left mb-4">
                                <span className="tagline-glow">Our Core Values</span>
                                <h2 className="section-title__title text-white">Our Leadership <span>Philosophy</span></h2>
                            </div>
                            <div className="philosophy-content">
                                <p className="mb-4 text-white fw-medium" style={{ fontSize: '18px' }}>
                                    At Micraft, leadership is guided by a simple principle: build practical technology solutions that solve real manufacturing problems.
                                </p>
                                <div className="phi-card p-4 rounded-4 bg-glass-dark border-start border-4 border-accent mb-4 shadow-xl">
                                    <h5 className="text-white mb-3 fw-bold uppercase tracking-widest small">Our focus areas:</h5>
                                    <ul className="list-unstyled space-y-3">
                                        {["Understanding real manufacturing challenges", "Building scalable technology platforms", "Enabling digital shop floor operations", "Delivering measurable improvements"].map((item, i) => (
                                            <li key={i} className="text-white-opacity-70 small d-flex align-items-center gap-3">
                                                <i className="fas fa-check-circle text-accent"></i>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <p className="text-white-opacity-40 x-small italic">We believe that technology should empower teams rather than complicate workflows.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Founder & Leadership Section */}
            <section className="founder-profile-section pt-100 pb-100 bg-dark-depth" id="founder-section">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <span className="tagline-glow">The Visionary Behind Micraft</span>
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white">Founder & <span>Leadership</span></h2>
                        </AnimatedTitle>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-11">
                            <div className="founder-profile-card p-4 p-md-5 rounded-5 shadow-2xl bg-glass-dark border border-white-05 overflow-hidden position-relative">
                                {/* Decorative elements */}
                                <div className="position-absolute top-0 end-0 p-5 opacity-10">
                                    <i className="fas fa-quote-right display-1 text-white"></i>
                                </div>
                                
                                <div className="row align-items-center g-4 g-lg-5">
                                    <div className="col-lg-4 text-center">
                                        <div className="founder-image-wrapper mb-4 position-relative mx-auto" style={{ maxWidth: '320px' }}>
                                            <div className="image-glow-ring position-absolute top-50 start-50 translate-middle w-100 h-100 rounded-circle" style={{ background: 'linear-gradient(135deg, #FA5674, #6065D4)', opacity: 0.2, filter: 'blur(15px)', padding: '10px' }}></div>
                                            <div className="rounded-circle overflow-hidden border border-white border-opacity-10 position-relative z-1 shadow-accent-glow" style={{ aspectRatio: '1/1' }}>
                                                <Image
                                                    src="/assets/images/team/jalindra-Shinde.png"
                                                    alt="Jalindra Shinde"
                                                    fill
                                                    className="img-cover grayscale transition-5s"
                                                />
                                            </div>
                                        </div>
                                        <div className="founder-info position-relative z-1">
                                            <h3 className="text-white mb-2 fw-black" style={{ fontSize: '32px' }}>Jalindra Shinde</h3>
                                            <p className="text-accent fw-bold tracking-widest uppercase mb-4" style={{ fontSize: '14px' }}>Founder & Director</p>
                                            
                                            <div className="social-links-premium d-flex justify-content-center gap-3">
                                                <Link href="https://www.linkedin.com/in/jalindrashinde/" target="_blank" className="btn-social-outline transition-3s">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </Link>
                                                <Link href="mailto:contact@micraft.co.in" className="btn-social-outline transition-3s">
                                                    <i className="fas fa-envelope"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-8">
                                        <div className="founder-content-wrapper position-relative z-1">
                                            <div className="ps-lg-4">
                                                <h4 className="text-white mb-4 fw-bold">Driving the Vision for Connected Manufacturing</h4>
                                                <p className="text-white-50 mb-4 text-medium leading-relaxed">
                                                    Jalindra Shinde founded Micraft with the vision of building technology solutions that enable manufacturers to gain real-time visibility of their production operations.
                                                </p>
                                                <p className="text-white-50 mb-4">
                                                    With deep experience in enterprise technology, he recognized that many manufacturers struggle with &quot;factory blindspots&quot; caused by manual tracking methods. Under his leadership, Micraft has become a central hub for digitizing shop floor operations.
                                                </p>
                                                
                                                <div className="quote-box-premium mt-5 p-4 rounded-4 bg-accent-glow-soft border-start border-4 border-accent">
                                                    <p className="mb-0 text-white italic-medium fw-medium" style={{ fontSize: '18px', fontStyle: 'italic', lineHeight: '1.6' }}>
                                                        &quot;Our goal is to bring the power of real-time data to factory operators and managers, enabling them to make smarter decisions every day.&quot;
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .btn-social-outline {
                        width: 45px;
                        height: 45px;
                        border: 1px solid rgba(255,255,255,0.1);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white !important;
                        text-decoration: none;
                    }
                    .btn-social-outline:hover {
                        background: #FA5674;
                        border-color: #FA5674;
                        transform: translateY(-3px);
                        box-shadow: 0 5px 15px rgba(250, 86, 116, 0.3);
                    }
                    .shadow-accent-glow {
                        box-shadow: 0 0 30px rgba(250, 86, 116, 0.15);
                    }
                `}</style>
            </section>

            {/* 4. Leadership Focus Areas */}
            <section className="focus-areas-section pt-100 pb-100 bg-dark-alt">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <span className="tagline-glow">Strategic Pillars</span>
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white">Leadership <span>Focus Areas</span></h2>
                        </AnimatedTitle>
                        <p className="text-white-opacity-70 mt-3 mx-auto max-w-700">The Micraft leadership team focuses on driving innovation at the intersection of shop floor reality and digital potential.</p>
                    </div>
                    <div className="row g-4">
                        {[
                            { title: "Tech Innovation", desc: "Developing platforms that help factories monitor production operations.", icon: "lightbulb" },
                            { title: "Product Dev", desc: "Building scalable and practical MES platforms for any environment.", icon: "code" },
                            { title: "Customer Success", desc: "Ensuring companies successfully adopt digital monitoring systems.", icon: "users" },
                            { title: "Excellence", desc: "Continuously improving Micraft to meet evolving manufacturing needs.", icon: "chart-line" }
                        ].map((area, idx) => (
                            <div key={idx} className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 100}ms`}>
                                <div className="focus-area-card h-100 p-4 rounded-5 bg-glass-dark border border-white-05 transition-3s text-center shadow-xl hover-lift">
                                    <div className="icon-wrap mb-4 mx-auto bg-accent-glow bg-opacity-10 d-flex align-items-center justify-content-center" style={{ width: '70px', height: '70px', borderRadius: '20px' }}>
                                        <i className={`fas fa-${area.icon} fs-3 text-accent`}></i>
                                    </div>
                                    <h4 className="text-white mb-3 fw-bold" style={{ fontSize: '18px' }}>{area.title}</h4>
                                    <p className="text-white-opacity-70 small m-0">{area.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Building the Future */}
            <section className="future-section pt-100 pb-100 position-relative overflow-hidden bg-dark-depth">
                <div className="future-shape" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundImage: 'url(/assets/images/shapes/counter-one-bg-shape.png)', backgroundSize: 'cover', opacity: 0.1 }}></div>
                <div className="container position-relative z-2">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="section-title text-left">
                                <span className="tagline-glow">The Digital Shift</span>
                                <h2 className="section-title__title text-white">Building the Future of <span>Manufacturing</span></h2>
                            </div>
                            <div className="mt-4">
                                <p className="mb-4 text-white fw-medium" style={{ fontSize: '18px' }}>
                                    Micraft leadership believes that the future of manufacturing will be driven by digital visibility and data-driven decision-making.
                                </p>
                                <div className="row g-3">
                                    {[
                                        { t: "Production Efficiency", i: "tachometer-alt" },
                                        { t: "Operational Transparency", i: "search-plus" },
                                        { t: "Manufacturing Productivity", i: "chart-bar" },
                                        { t: "Delivery Performance", i: "truck" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="col-6">
                                            <div className="p-3 rounded-3 d-flex align-items-center gap-3 bg-glass-dark border border-white-05">
                                                <i className={`fas fa-${item.i} text-accent`}></i>
                                                <span className="text-white small fw-bold">{item.t}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-4 text-white-opacity-70">Micraft is committed to building platforms that help manufacturers transition toward digitally connected factories.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="future-visual-wrap p-2 rounded-5 bg-glass-dark border border-white-05 shadow-2xl overflow-hidden">
                                <div className="rounded-5 overflow-hidden grayscale opacity-40">
                                    <Image
                                        src="/assets/images/backgrounds/Realtimeshopfloor.jpg"
                                        alt="Future Manufacturing"
                                        width={600}
                                        height={450}
                                        className="img-cover w-100"
                                        style={{ height: '400px' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Commitment to Customers */}
            <section className="commitment-section pt-100 pb-100 bg-dark-alt">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <span className="tagline-glow">Long-term Partnership</span>
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white">Commitment to <span>Manufacturers</span></h2>
                        </AnimatedTitle>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {[
                            { title: "Practical Solutions", desc: "delivering technology that works in real factory environments." },
                            { title: "Reliability", desc: "building manufacturing platforms you can trust." },
                            { title: "Innovation", desc: "continuously evolving our products to meet your needs." },
                            { title: "Partnership", desc: "working closely with you for long-term operational success." }
                        ].map((item, idx) => (
                            <div key={idx} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 100}ms`}>
                                <div className="commitment-card h-100 p-4 text-center rounded-4 bg-glass-dark border border-white-05 transition-3s hover-lift shadow-xl">
                                    <div className="checkmark mb-3 d-flex justify-content-center">
                                        <div className="bg-success-glow bg-opacity-10 d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', borderRadius: '50%', color: '#10b981' }}>
                                            <i className="fas fa-check"></i>
                                        </div>
                                    </div>
                                    <h4 className="text-white mb-2 fw-bold" style={{ fontSize: '17px' }}>{item.title}</h4>
                                    <p className="text-white-opacity-70 small mb-0">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-5">
                        <p className="text-white fw-medium" style={{ fontSize: '20px' }}>Our goal is to help manufacturers build more efficient and transparent factory operations.</p>
                    </div>
                </div>
            </section>

            {/* 7. CTA */}
            <FinalCTA />

            <style dangerouslySetInnerHTML={{
                __html: `
                .scale-on-hover:hover {
                    transform: scale(1.02);
                }
                .hover-red:hover {
                    background: #FA5674 !important;
                    border-color: #FA5674 !important;
                }
                .focus-area-card:hover {
                    background: rgba(255,255,255,0.05) !important;
                    border-color: #FA5674 !important;
                    transform: translateY(-8px);
                }
                .commitment-card:hover {
                    border-color: #FA5674 !important;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                }
            ` }} />
        </Layout>
    )
}