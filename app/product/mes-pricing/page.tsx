"use client"
import Layout from "@/components/layout/Layout"
import Breadcrumb from "@/components/layout/Breadcrumb"
import Link from "next/link"
import Image from "next/image"
import AnimatedTitle from "@/components/elements/AnimatedTitle"
import FinalCTA from "@/components/sections/home1/FinalCTA"

export default function MesPricingPage() {
    return (
        <Layout headerStyle={1} footerStyle={2}>
            <Breadcrumb breadcrumbTitle="Micraft MES Pricing" />

            {/* ═══════════════ 1. HERO SECTION (matches about-one) ═══════════════ */}
            <section className="about-one" id="pricing-hero">
                <div className="about-one__shape-1"></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7">
                            <div className="about-one__left">
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <div className="section-title__tagline-box">
                                        <div className="section-title__tagline-shape-1"></div>
                                        <span className="section-title__tagline">MES Software Pricing</span>
                                        <div className="section-title__tagline-shape-2"></div>
                                    </div>
                                    <AnimatedTitle>
                                        <h1 className="section-title__title title-animation">
                                            Micraft MES Pricing for <span>Manufacturing Companies</span>
                                        </h1>
                                    </AnimatedTitle>
                                </div>
                                <p className="about-one__text-1 mb-4 fw-bold text-white">Flexible pricing designed for manufacturing SMEs looking to digitize shop floor operations and gain real-time production visibility.</p>
                                <p className="about-one__text-2 mb-4">Micraft MES pricing is designed to be affordable and scalable for manufacturing companies of different sizes. Instead of complex enterprise licensing models, our pricing approach ensures manufacturers can start digitizing production operations quickly and expand the system as their factory grows.</p>
                                <div className="about-one__btn-box d-flex flex-wrap gap-3 mt-4">
                                    <Link href="#request-pricing" className="thm-btn">Request Pricing<span className="icon-right-arrow"></span></Link>
                                    <Link href="/book-demo" className="thm-btn thm-btn--two" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)' }}>Book a Live Demo<span className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="about-one__right">
                                <div className="about-one__left-img-box">
                                    <div className="about-one__left-img">
                                        <Image 
                                            src="/assets/images/resources/pricing-hero.png" 
                                            alt="Micraft MES Pricing" 
                                            width={600} 
                                            height={500} 
                                            className="img-fluid" 
                                            priority 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ 2. WHY MES IS HIGH-ROI (matches why-choose-one / feature-two) ═══════════════ */}
            <section className="why-choose-one py-5" id="roi-investment" style={{ backgroundColor: '#070C14', padding: '90px 0' }}>
                <div className="container" style={{ maxWidth: '1200px' }}>
                    <div className="section-title text-center mb-50">
                        <div className="section-title__tagline-box">
                            <div className="section-title__tagline-shape-1"></div>
                            <span className="section-title__tagline">High-ROI Investment</span>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white">
                                Why Manufacturing Companies <span>Invest in MES</span>
                            </h2>
                        </AnimatedTitle>
                        <p className="mt-3 text-white opacity-75" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            Manufacturing execution systems are not just software—they are operational improvement platforms. Factories implementing MES often achieve significant improvements.
                        </p>
                    </div>

                    <div className="row justify-content-center gy-4">
                        {[
                            { title: "Increased Machine Utilization", icon: "icon-strategy", text: "Better equipment productivity and reduced idle time." },
                            { title: "Reduced Production Delays", icon: "icon-clock", text: "Faster production workflows and reduced bottlenecks." },
                            { title: "Improved Visibility", icon: "icon-pin", text: "Real-time production visibility across all operations." },
                            { title: "Better Quality Control", icon: "icon-quality", text: "Improved quality monitoring and defect reduction." },
                            { title: "On-time Delivery", icon: "icon-strategy", text: "Improved on-time delivery of orders to customers." }
                        ].map((item, idx) => (
                            <div key={idx} className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp" data-wow-delay={`${idx * 100}ms`}>
                                <div className="feature-two__single h-100 mb-0">
                                    <div className="feature-two__icon">
                                        <span className={item.icon}></span>
                                    </div>
                                    <h3 className="feature-two__title" style={{ fontSize: '20px' }}>{item.title}</h3>
                                    <p className="feature-two__text">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-4">
                        <p className="text-white opacity-50">These improvements directly impact manufacturing productivity and profitability.</p>
                    </div>
                </div>
            </section>

            {/* ═══════════════ 3 & 4. FACTORS & STRUCTURE (matches what-is-mes / who-is-for) ═══════════════ */}
            <section className="what-is-mes who-is-for" id="pricing-details" style={{ padding: '90px 0', background: '#0e121d' }}>
                <div className="who-is-for__shape-1"></div>
                <div className="who-is-for__shape-2"></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="row g-5">
                        {/* 3. Factors That Influence Pricing */}
                        <div className="col-lg-6 wow fadeInLeft">
                            <div className="who-is-for__card shadow-none" style={{ background: 'transparent', padding: 0, border: 'none' }}>
                                <div className="section-title text-left mb-4">
                                    <div className="section-title__tagline-box">
                                        <div className="section-title__tagline-shape-1"></div>
                                        <span className="section-title__tagline">Pricing Factors</span>
                                        <div className="section-title__tagline-shape-2"></div>
                                    </div>
                                    <AnimatedTitle>
                                        <h2 className="section-title__title text-white mt-3">
                                            Factors That Influence <span>MES Pricing</span>
                                        </h2>
                                    </AnimatedTitle>
                                </div>
                                <div className="content-box">
                                    <p className="mb-4 text-white opacity-75">MES pricing depends on several operational factors. Because each manufacturing environment is unique, Micraft MES pricing is customized to match factory requirements.</p>
                                    
                                    <div className="who-is-for__list-custom d-flex flex-column gap-3 mt-4">
                                        {[
                                            { title: "Factory Size", desc: "Number of machines and workstations.", icon: "industry" },
                                            { title: "Production Complexity", desc: "Number of production stages and workflows.", icon: "project-diagram" },
                                            { title: "Monitoring Requirements", desc: "Types of production monitoring required.", icon: "desktop" },
                                            { title: "Number of Users", desc: "Operators, supervisors, and managers using the system.", icon: "users" },
                                            { title: "Integration Requirements", desc: "Integration with ERP or other manufacturing systems.", icon: "sync" }
                                        ].map((item, idx) => (
                                            <div key={idx} className="hexagon-item wow fadeInRight" data-wow-delay={`${idx * 100}ms`}>
                                                <div className="hexagon-icon-box" style={{ background: 'linear-gradient(135deg, #FA5674 0%, #6065D4 100%)', border: 'none' }}>
                                                    <i className={`fas fa-${item.icon} text-white`} style={{ fontSize: '14px' }}></i>
                                                </div>
                                                <div className="ms-3">
                                                    <h5 className="text-white mb-0" style={{ fontSize: '16px' }}>{item.title}</h5>
                                                    <p className="text-white-50 mb-0" style={{ fontSize: '13px' }}>{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4. Typical Pricing Structure */}
                        <div className="col-lg-6 wow fadeInRight">
                             <div className="who-is-for__card p-4 p-xl-5 shadow-lg h-100" style={{ borderRadius: '30px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                                <div className="section-title text-left mb-4">
                                    <span className="section-title__tagline" style={{ color: '#FA5674' }}>Pricing Structure</span>
                                    <h3 className="text-white mt-2" style={{ fontSize: '28px', fontWeight: '700' }}>How Micraft MES <br/><span>Pricing Works</span></h3>
                                </div>
                                <p className="text-white-50 mb-4">Micraft MES pricing typically includes the following components to ensure manufacturers receive complete support during adoption.</p>
                                
                                <div className="who-is-for__list-custom d-flex flex-column gap-4">
                                    {[
                                        { title: "Platform License", desc: "Access to the Micraft MES software platform.", icon: "key" },
                                        { title: "Implementation and Setup", desc: "System configuration based on factory workflows.", icon: "tools" },
                                        { title: "Training and Onboarding", desc: "Training for operators, supervisors, and managers.", icon: "user-graduate" },
                                        { title: "Support and Maintenance", desc: "Continuous system support and updates.", icon: "headset" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="d-flex align-items-center gap-3">
                                            <div className="workflow-number" style={{ width: '50px', height: '50px', fontSize: '18px', minWidth: '50px' }}>
                                                <i className={`fas fa-${item.icon}`}></i>
                                            </div>
                                            <div>
                                                <h4 className="text-white mb-1" style={{ fontSize: '18px' }}>{item.title}</h4>
                                                <p className="text-white-50 small mb-0">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-5 text-white-50 italic small">This ensures manufacturers receive complete support during adoption.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ 5. COST ADVANTAGE - PREMIUM COMPARISON MATRIX ═══════════════ */}
            <section className="feature-one position-relative" style={{ backgroundColor: '#070C14', padding: '120px 0' }}>
                <div className="container">
                    <div className="section-title text-center mb-60 wow fadeInUp">
                        <div className="section-title__tagline-box justify-content-center">
                            <div className="section-title__tagline-shape-1"></div>
                            <span className="section-title__tagline">The Better Alternative</span>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white">
                                Why Small Manufacturers <span>Choose Micraft</span>
                            </h2>
                        </AnimatedTitle>
                        <p className="text-white opacity-75 mt-3 mx-auto" style={{ maxWidth: '800px' }}>
                            We&apos;ve eliminated the technical complexity and financial barriers of enterprise MES. Compare how Micraft transforms shop floor digitization for SMEs.
                        </p>
                    </div>

                    <div className="comparison-matrix wow fadeInUp">
                        <div className="row g-0 rounded-4 overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}>
                            {/* Matrix Header */}
                            <div className="col-12 d-none d-lg-block">
                                <div className="row g-0 p-4 border-bottom border-white border-opacity-10 align-items-center">
                                    <div className="col-4"><h5 className="text-white-50 m-0 uppercase small fw-bold">CAPABILITY</h5></div>
                                    <div className="col-4 text-center"><h5 className="text-white-50 m-0 uppercase small fw-bold">TRADITIONAL MES</h5></div>
                                    <div className="col-4 text-center"><h5 className="text-white m-0 uppercase small fw-bold" style={{ color: '#FA5674' }}>MICRAFT MES ADVANTAGE</h5></div>
                                </div>
                            </div>

                            {/* Matrix Rows */}
                            {[
                                { 
                                    label: "Implementation Speed", 
                                    trad: "6 - 12 Months Average", 
                                    micraft: "4 - 8 Weeks Deployment", 
                                    icon: "bolt",
                                    desc: "Get visible results in weeks, not years."
                                },
                                { 
                                    label: "Financial Investment", 
                                    trad: "High Upfront Licensing", 
                                    micraft: "Flexible SME Pricing", 
                                    icon: "tag",
                                    desc: "Pricing designed to match your growth."
                                },
                                { 
                                    label: "Technical Barrier", 
                                    trad: "Complex Training & IT", 
                                    micraft: "Intuitive Shop-Floor UI", 
                                    icon: "users",
                                    desc: "Your team can start using it day one."
                                },
                                { 
                                    label: "Infrastructure", 
                                    trad: "On-Premise Server Rooms", 
                                    micraft: "Cloud-Connected / Edge", 
                                    icon: "server",
                                    desc: "Zero capital investment in IT hardware."
                                }
                            ].map((row, idx) => (
                                <div key={idx} className="col-12 border-bottom border-white border-opacity-10 last-child-no-border">
                                    <div className="row g-0 p-lg-5 p-4 align-items-center hover-row transition-all" style={{ background: idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                                        <div className="col-lg-4 mb-3 mb-lg-0">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="matrix-icon"><i className={`fas fa-${row.icon}`}></i></div>
                                                <div>
                                                    <h4 className="text-white m-0" style={{ fontSize: '20px' }}>{row.label}</h4>
                                                    <p className="text-white-50 small m-0 d-none d-lg-block">{row.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 text-center mb-3 mb-lg-0">
                                            <div className="matrix-badge trad-badge d-inline-block p-2 px-3 rounded-pill">
                                                <span className="text-white-50 small">{row.trad}</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 text-center">
                                            <div className="matrix-badge micraft-badge d-inline-block p-2 px-4 rounded-pill border border-danger border-opacity-25" style={{ background: 'rgba(250, 86, 116, 0.05)' }}>
                                                <span className="text-white fw-bold">{row.micraft}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 6. IMPACT STATS */}
                    <div className="row mt-80">
                        {[
                            { val: "50%", label: "Faster Deployment", desc: "Proprietary implementation framework." },
                            { val: "40%", label: "Lower Total Cost", desc: "Designed for SME hardware budgets." },
                            { val: "+30%", label: "Floor Efficiency", desc: "Instant visibility into machine state." },
                            { val: "Zero", label: "IT Maintenance", desc: "We manage the infrastructure." }
                        ].map((stat, sidx) => (
                            <div key={sidx} className="col-lg-3 col-sm-6 mb-4 mb-lg-0 wow fadeInUp" data-wow-delay={`${sidx * 100}ms`}>
                                <div className="stat-card p-4 rounded-4 text-center h-100" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <div className="stat-val text-white mb-2" style={{ fontSize: '32px', fontWeight: '800', color: '#FA5674' }}>{stat.val}</div>
                                    <div className="stat-label text-white-50 small uppercase fw-bold mb-3">{stat.label}</div>
                                    <p className="text-white-50 x-small m-0">{stat.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* ═══════════════ 7. INDUSTRIES (matches key capabilities layout) ═══════════════ */}
            <section className="capabilities-section who-is-for" id="industries" style={{ background: '#0e121d', padding: '90px 0' }}>
                <div className="who-is-for__shape-1"></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="section-title text-center mb-50">
                        <span className="section-title__tagline">Target Industries</span>
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white">
                                Manufacturing Industries <span>Using Micraft MES</span>
                            </h2>
                        </AnimatedTitle>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {[
                            "CNC Machining & Engineering",
                            "Automotive Components",
                            "Fabrication & Metal Processing",
                            "Plastic Injection Molding",
                            "Electronics Manufacturing",
                            "General Manufacturing SMEs"
                        ].map((industry, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 100}ms`}>
                                <div className="workflow-card text-center p-4 d-flex align-items-center justify-content-center" style={{ minHeight: '100px' }}>
                                    <h4 className="text-white mb-0" style={{ fontSize: '17px' }}>{industry}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ 8. REQUEST PRICING FORM (matches contact-one) ═══════════════ */}
            <section className="contact-one" id="request-pricing" style={{ padding: '100px 0' }}>
                <div className="contact-one__bg-shape" style={{ backgroundImage: "url(/assets/images/shapes/contact-one-bg-shape.png)" }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="contact-one__left wow slideInLeft">
                                <div className="contact-one__left-shape-1"></div>
                                <div className="contact-one__left-shape-2"></div>
                                <h3 className="contact-one__from-title" style={{ fontSize: '32px' }}>Request Your Custom Quote</h3>
                                <p className="text-white-50 mb-3 small">Fill out the form below for a customized factory digitization quote.</p>
                                
                                <form className="row g-2">
                                    <div className="col-md-6 mb-1">
                                        <label className="text-white-50 x-small fw-bold mb-1 d-block uppercase" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>Full Name</label>
                                        <div className="mb-0">
                                            <input type="text" placeholder="e.g. John Doe" name="name" required className="compact-input" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-1">
                                        <label className="text-white-50 x-small fw-bold mb-1 d-block uppercase" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>Company Name</label>
                                        <div className="mb-0">
                                            <input type="text" placeholder="Your Manufacturing Firm" name="company" required className="compact-input" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-1">
                                        <label className="text-white-50 x-small fw-bold mb-1 d-block uppercase" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>Select Industry</label>
                                        <div className="mb-0">
                                            <select name="industry" className="form-select compact-input border-0 shadow-none text-white-50" style={{ height: '40px', background: 'rgba(255,255,255,0.02)' }}>
                                                <option value="" className="bg-dark">Choose Manufacturing Sector</option>
                                                <option value="CNC" className="bg-dark">CNC Machining & Engineering</option>
                                                <option value="Auto" className="bg-dark">Automotive Components</option>
                                                <option value="Metal" className="bg-dark">Metal Fabrication</option>
                                                <option value="Plastic" className="bg-dark">Plastic Injection Molding</option>
                                                <option value="Electronics" className="bg-dark">Electronics Manufacturing</option>
                                                <option value="General" className="bg-dark">General Manufacturing SMEs</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-1">
                                        <label className="text-white-50 x-small fw-bold mb-1 d-block uppercase" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>Email Address</label>
                                        <div className="mb-0">
                                            <input type="email" placeholder="john@company.com" name="email" required className="compact-input" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-1">
                                        <label className="text-white-50 x-small fw-bold mb-1 d-block uppercase" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>Phone Number</label>
                                        <div className="mb-0">
                                            <input type="tel" placeholder="+123..." name="phone" required className="compact-input" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-1">
                                        <label className="text-white-50 x-small fw-bold mb-1 d-block uppercase" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>No. of Machines</label>
                                        <div className="mb-0">
                                            <input type="number" placeholder="Production Units" name="machines" className="compact-input" />
                                        </div>
                                    </div>
                                    <div className="col-12 mt-1">
                                        <label className="text-white-50 x-small fw-bold mb-1 d-block uppercase" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>Requirements / Custom Requests</label>
                                        <div className="mb-0">
                                            <textarea name="message" placeholder="Details about your shop floor digitization needs..." className="compact-input" style={{ height: '70px', minHeight: '70px' }}></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-2">
                                        <button type="submit" className="thm-btn w-100 py-2 d-flex align-items-center justify-content-center" style={{ minHeight: '44px' }}>Request Pricing<span className="icon-right-arrow ms-2"></span></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="contact-one__right ps-xl-5 mt-5 mt-lg-0">
                                <div className="section-title text-left">
                                    <span className="section-title__tagline">Digitize Your Factory</span>
                                    <AnimatedTitle>
                                        <h2 className="section-title__title text-white">
                                            Start Your <span>Digitization Journey</span>
                                        </h2>
                                    </AnimatedTitle>
                                </div>
                                <p className="contact-one__text">Micraft MES helps manufacturing companies gain real-time production visibility and improve operational efficiency. Our team works closely with manufacturers to ensure smooth implementation.</p>
                                
                                <div className="impact-quote mt-5 p-4 rounded-4" style={{ background: 'rgba(250, 86, 116, 0.05)', borderLeft: '4px solid #FA5674' }}>
                                    <h4 className="text-white mb-2">Technical Feasibility Review</h4>
                                    <p className="text-white-50 mb-0 small">Get a custom implementation roadmap and a modular pricing plan based on your shop floor requirements.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ 9. FINAL TRUST (FinalCTA component) ═══════════════ */}
            <FinalCTA 
                title={<>Digitize Your Factory Operations <br /> <span>with Micraft MES</span></>}
                text="Micraft MES helps manufacturing companies gain real-time production visibility and improve operational efficiency. Our team works closely with manufacturers to ensure smooth implementation and measurable operational improvements. Schedule a Live Demo to see how Micraft MES works in real manufacturing environments."
                buttonLabel1="Book Your Demo"
                buttonLabel2="Schedule live Demo"
            />


            {/* Reusing template specific styles */}
            <style dangerouslySetInnerHTML={{ __html: `
                .about-one { padding: 120px 0 90px; }
                .hexagon-item { display: flex; align-items: center; }
                .hexagon-icon-box {
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                }
                .workflow-number {
                    background: linear-gradient(135deg, rgba(250, 86, 116, 0.1) 0%, rgba(96, 101, 212, 0.1) 100%);
                    border: 1px solid rgba(250, 86, 116, 0.3);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #FA5674;
                }
                .benefits-wrapper {
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    gap: 12px;
                }
                .benefit-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    background: rgba(255, 255, 255, 0.02);
                    padding: 15px 20px;
                    border-radius: 12px;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }
                .benefit-icon {
                    width: 42px;
                    height: 42px;
                    background: linear-gradient(135deg, rgba(96,101,212,0.1), rgba(250,86,116,0.1));
                    color: #FA5674;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                }
                .premium-dark-card {
                    border-radius: 24px;
                    transition: transform 0.4s ease, box-shadow 0.4s ease;
                }
                .premium-dark-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
                }
                .card-bg-glow {
                    position: absolute;
                    background: radial-gradient(circle, rgba(250, 86, 116, 0.4) 0%, rgba(7, 12, 20, 0) 70%);
                    filter: blur(60px);
                    z-index: 0;
                }
                .roi-tag {
                    display: inline-block;
                    padding: 6px 14px;
                    background: rgba(250, 86, 116, 0.1);
                    color: #FA5674;
                    border-radius: 30px;
                    font-size: 12px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .factor-icon {
                    width: 50px;
                    height: 50px;
                    background: rgba(255,255,255,0.05);
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                    color: #FA5674;
                }
                .roi-icon-sm {
                    width: 45px;
                    height: 45px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                }
                .stat-card {
                    transition: all 0.3s ease;
                }
                .stat-card:hover { border-color: #FA5674 !important; background: rgba(250, 86, 116, 0.03) !important; }
                .comparison-matrix {
                    border-radius: 20px;
                    overflow: hidden;
                }
                .matrix-icon {
                    width: 50px;
                    height: 50px;
                    background: rgba(255,255,255,0.05);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                    color: #FA5674;
                }
                .hover-row:hover {
                    background: rgba(255,255,255,0.03) !important;
                }
                .matrix-badge {
                    transition: all 0.3s ease;
                }
                .micraft-badge {
                    box-shadow: 0 0 20px rgba(250, 86, 116, 0.1);
                }
                .workflow-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 16px;
                    transition: all 0.4s ease;
                }
                .workflow-card:hover { border-color: #FA5674; transform: translateY(-5px); }
                .compact-input {
                    width: 100%;
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    padding: 8px 12px;
                    border-radius: 8px;
                    color: white;
                    outline: none;
                    font-size: 14px;
                    transition: border-color 0.3s ease;
                }
                .compact-input:focus {
                    border-color: #FA5674;
                    background: rgba(255, 255, 255, 0.04);
                }
                .contact-one__input-box input, 
                .contact-one__input-box textarea {
                    width: 100%;
                    background: rgba(255,255,255,0.02);
                    border: 1px solid rgba(255,255,255,0.05);
                    padding: 10px 15px;
                    border-radius: 10px;
                    color: white;
                    outline: none;
                }
                .contact-one__input-box input:focus, 
                .contact-one__input-box textarea:focus {
                    border-color: #FA5674;
                }
            ` }} />
        </Layout>
    )
}