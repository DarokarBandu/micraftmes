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

            {/* ═══════════════ 1. HERO SECTION ═══════════════ */}
            <section className="pricing-hero-section position-relative overflow-hidden">
                <div className="pricing-hero-glow-1"></div>
                <div className="pricing-hero-glow-2"></div>
                <div className="container position-relative" style={{ zIndex: 2 }}>
                    <div className="row align-items-center g-5">
                        <div className="col-xl-7 col-lg-6">
                            <div className="pricing-hero__left pe-xl-4">
                                <div className="section-title text-left mb-4">
                                    <div className="section-title__tagline-box">
                                        <div className="section-title__tagline-shape-1"></div>
                                        <span className="section-title__tagline">MES Software Pricing</span>
                                        <div className="section-title__tagline-shape-2"></div>
                                    </div>
                                    <AnimatedTitle>
                                        <h1 className="section-title__title title-animation mt-2">
                                            Micraft MES Pricing for <span>Manufacturing Companies</span>
                                        </h1>
                                    </AnimatedTitle>
                                </div>
                                <p className="pricing-hero__lead mb-3">
                                    Flexible pricing designed for manufacturing SMEs looking to digitize shop floor operations and gain real-time production visibility.
                                </p>
                                <p className="pricing-hero__desc mb-4">
                                    Micraft MES pricing is designed to be affordable and scalable for manufacturing companies of different sizes. Instead of complex enterprise licensing models, our pricing approach ensures manufacturers can start digitizing production operations quickly and expand the system as their factory grows.
                                </p>
                                <div className="d-flex flex-wrap gap-3 mt-4 pt-2">
                                    <Link href="#request-pricing" className="thm-btn">
                                        Request Pricing<span className="icon-right-arrow ms-2"></span>
                                    </Link>
                                    <Link href="/book-demo" className="thm-btn thm-btn-outline">
                                        Book a Live Demo<span className="icon-right-arrow ms-2"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 text-center">
                            <div className="pricing-hero__image-wrapper">
                                <div className="pricing-hero__image-glow"></div>
                                <div className="pricing-hero__image-card">
                                    <Image 
                                        src="/assets/images/resources/pricing-hero.png" 
                                        alt="Micraft MES Pricing" 
                                        width={540} 
                                        height={450} 
                                        className="img-fluid rounded-4" 
                                        priority 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ 2. WHY MES IS HIGH-ROI ═══════════════ */}
            <section className="pricing-roi-section position-relative" id="roi-investment">
                <div className="container">
                    <div className="section-title text-center mb-50">
                        <div className="section-title__tagline-box justify-content-center">
                            <div className="section-title__tagline-shape-1"></div>
                            <span className="section-title__tagline">High-ROI Investment</span>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white mt-2">
                                Why Manufacturing Companies <span>Invest in MES</span>
                            </h2>
                        </AnimatedTitle>
                        <p className="mt-3 text-white-50 mx-auto" style={{ maxWidth: '780px', fontSize: '15px' }}>
                            Manufacturing execution systems are operational improvement platforms that pay for themselves through reduced downtime, lower waste, and heightened delivery precision.
                        </p>
                    </div>

                    <div className="row justify-content-center g-4">
                        {[
                            { title: "Increased Machine Utilization", icon: "icon-strategy", text: "Better equipment productivity and reduced idle time." },
                            { title: "Reduced Production Delays", icon: "icon-clock", text: "Faster production workflows and reduced bottlenecks." },
                            { title: "Improved Visibility", icon: "icon-pin", text: "Real-time production visibility across all operations." },
                            { title: "Better Quality Control", icon: "icon-quality", text: "Improved quality monitoring and defect reduction." },
                            { title: "On-time Delivery", icon: "icon-strategy", text: "Improved on-time delivery of orders to customers." }
                        ].map((item, idx) => (
                            <div key={idx} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 100}ms`}>
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

                    <div className="text-center mt-4 pt-2">
                        <p className="text-white-50 small mb-0">These improvements directly impact manufacturing productivity and profitability.</p>
                    </div>
                </div>
            </section>

            {/* ═══════════════ 2.5. TRANSPARENT PRICING TIERS ═══════════════ */}
            <section className="pricing-tiers-section position-relative pt-100 pb-100 bg-dark-deep-mes" id="pricing-tiers">
                <div className="container">
                    <div className="section-title text-center mb-50">
                        <div className="section-title__tagline-box justify-content-center">
                            <div className="section-title__tagline-shape-1"></div>
                            <span className="section-title__tagline text-gold">Transparent Costs</span>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white mt-2">
                                Simple, Scalable <span>Pricing</span>
                            </h2>
                        </AnimatedTitle>
                        <p className="mt-3 text-white-50 mx-auto" style={{ maxWidth: '780px', fontSize: '15px' }}>
                            Unlike enterprise MES vendors that hide their costs and charge heavy upfront licensing fees, Micraft MES offers transparent, modular subscription tiers. 
                            <br/><span className="text-warning small fst-italic">* The numbers below are baseline estimates. Final pricing depends on specific integration requirements.</span>
                        </p>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {/* Tier 1: Starter */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="glass-card-innovative p-5 border-white-10 h-100 transition-all hover-scale-3 text-center position-relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-100 h-1 background-gradient-primary"></div>
                                <h3 className="text-white h4 fw-bold mb-2">Starter</h3>
                                <p className="text-white-50 small mb-4">Perfect for single-line operations</p>
                                <div className="mb-4 pb-4 border-bottom border-white-10">
                                    <span className="text-white h1 fw-900">₹15,000</span>
                                    <span className="text-white-50"> / month</span>
                                </div>
                                <ul className="list-unstyled text-start text-white-80 mb-5 d-flex flex-column gap-3">
                                    <li><i className="fas fa-check text-primary me-2"></i> Up to 5 Connected Machines</li>
                                    <li><i className="fas fa-check text-primary me-2"></i> Basic Production Tracking</li>
                                    <li><i className="fas fa-check text-primary me-2"></i> Standard OEE Dashboards</li>
                                    <li><i className="fas fa-check text-primary me-2"></i> Email Support</li>
                                </ul>
                                <Link href="#request-pricing" className="thm-btn thm-btn-outline w-100">Get Started</Link>
                            </div>
                        </div>

                        {/* Tier 2: Professional (Popular) */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="glass-card-innovative p-5 border-gold border-opacity-30 h-100 transition-all hover-scale-3 text-center position-relative overflow-hidden group" style={{ background: 'rgba(240, 194, 41, 0.03)' }}>
                                <div className="absolute top-0 right-0 px-3 py-1 bg-gold text-dark fw-bold small rounded-bottom-start shadow-sm">MOST POPULAR</div>
                                <div className="absolute top-0 left-0 w-100 h-1 background-gradient-gold"></div>
                                <h3 className="text-gold h4 fw-bold mb-2">Professional</h3>
                                <p className="text-white-50 small mb-4">For growing mid-size factories</p>
                                <div className="mb-4 pb-4 border-bottom border-white-10">
                                    <span className="text-gold h1 fw-900">₹35,000</span>
                                    <span className="text-white-50"> / month</span>
                                </div>
                                <ul className="list-unstyled text-start text-white-80 mb-5 d-flex flex-column gap-3">
                                    <li><i className="fas fa-check text-gold me-2"></i> Up to 20 Connected Machines</li>
                                    <li><i className="fas fa-check text-gold me-2"></i> Advanced Quality Control</li>
                                    <li><i className="fas fa-check text-gold me-2"></i> ERP Integration API</li>
                                    <li><i className="fas fa-check text-gold me-2"></i> 24/7 Priority Support</li>
                                </ul>
                                <Link href="#request-pricing" className="thm-btn w-100">Get Started <i className="fas fa-arrow-right ms-2"></i></Link>
                            </div>
                        </div>

                        {/* Tier 3: Enterprise */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="glass-card-innovative p-5 border-white-10 h-100 transition-all hover-scale-3 text-center position-relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-100 h-1 bg-white opacity-25"></div>
                                <h3 className="text-white h4 fw-bold mb-2">Enterprise</h3>
                                <p className="text-white-50 small mb-4">For multi-plant operations</p>
                                <div className="mb-4 pb-4 border-bottom border-white-10">
                                    <span className="text-white h2 fw-900">Custom</span>
                                </div>
                                <ul className="list-unstyled text-start text-white-80 mb-5 d-flex flex-column gap-3">
                                    <li><i className="fas fa-check text-white-50 me-2"></i> Unlimited Machines</li>
                                    <li><i className="fas fa-check text-white-50 me-2"></i> Multi-Plant Rollup Dashboard</li>
                                    <li><i className="fas fa-check text-white-50 me-2"></i> Custom Feature Development</li>
                                    <li><i className="fas fa-check text-white-50 me-2"></i> Dedicated Account Manager</li>
                                </ul>
                                <Link href="#request-pricing" className="thm-btn thm-btn-outline w-100 text-white border-white-20 hover-bg-white hover-text-dark">Contact Sales</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ 3 & 4. FACTORS & STRUCTURE ═══════════════ */}
            <section className="pricing-details-section position-relative" id="pricing-details">
                <div className="container position-relative" style={{ zIndex: 1 }}>
                    <div className="row g-4 align-items-stretch">
                        {/* 3. Factors That Influence Pricing */}
                        <div className="col-lg-6 wow fadeInLeft">
                            <div className="pricing-info-card h-100">
                                <div className="section-title text-left mb-4">
                                    <div className="section-title__tagline-box mb-2">
                                        <div className="section-title__tagline-shape-1"></div>
                                        <span className="section-title__tagline">Pricing Factors</span>
                                        <div className="section-title__tagline-shape-2"></div>
                                    </div>
                                    <AnimatedTitle>
                                        <h2 className="pricing-card-title mt-2">
                                            Factors That Influence <span>MES Pricing</span>
                                        </h2>
                                    </AnimatedTitle>
                                </div>
                                <p className="pricing-card-desc mb-4">
                                    MES pricing depends on several operational factors. Because each manufacturing environment is unique, Micraft MES pricing is customized to match factory requirements.
                                </p>
                                
                                <div className="d-flex flex-column gap-3 mt-4">
                                    {[
                                        { title: "Factory Size", desc: "Number of machines and workstations.", icon: "industry" },
                                        { title: "Production Complexity", desc: "Number of production stages and workflows.", icon: "project-diagram" },
                                        { title: "Monitoring Requirements", desc: "Types of production monitoring required.", icon: "desktop" },
                                        { title: "Number of Users", desc: "Operators, supervisors, and managers using the system.", icon: "users" },
                                        { title: "Integration Requirements", desc: "Integration with ERP or other manufacturing systems.", icon: "sync" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="pricing-factor-row">
                                            <div className="pricing-factor-icon">
                                                <i className={`fas fa-${item.icon}`}></i>
                                            </div>
                                            <div className="ms-3 flex-grow-1">
                                                <h5 className="pricing-factor-title mb-1">{item.title}</h5>
                                                <p className="pricing-factor-desc mb-0">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 4. Typical Pricing Structure */}
                        <div className="col-lg-6 wow fadeInRight">
                            <div className="pricing-info-card h-100">
                                <div className="section-title text-left mb-4">
                                    <div className="section-title__tagline-box mb-2">
                                        <div className="section-title__tagline-shape-1"></div>
                                        <span className="section-title__tagline">Pricing Structure</span>
                                        <div className="section-title__tagline-shape-2"></div>
                                    </div>
                                    <AnimatedTitle>
                                        <h2 className="pricing-card-title mt-2">
                                            How Micraft MES <span>Pricing Works</span>
                                        </h2>
                                    </AnimatedTitle>
                                </div>
                                <p className="pricing-card-desc mb-4">
                                    Micraft MES pricing typically includes the following components to ensure manufacturers receive complete support during adoption.
                                </p>
                                
                                <div className="d-flex flex-column gap-3">
                                    {[
                                        { title: "Platform License", desc: "Access to the Micraft MES software platform.", icon: "key", num: "01" },
                                        { title: "Implementation and Setup", desc: "System configuration based on factory workflows.", icon: "tools", num: "02" },
                                        { title: "Training and Onboarding", desc: "Training for operators, supervisors, and managers.", icon: "user-graduate", num: "03" },
                                        { title: "Support and Maintenance", desc: "Continuous system support and updates.", icon: "headset", num: "04" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="pricing-structure-item d-flex align-items-center gap-3">
                                            <div className="pricing-structure-badge">
                                                <i className={`fas fa-${item.icon}`}></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h4 className="pricing-factor-title mb-1">{item.title}</h4>
                                                <p className="pricing-factor-desc mb-0">{item.desc}</p>
                                            </div>
                                            <div className="pricing-step-num d-none d-sm-block">
                                                {item.num}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-4 pt-2 text-white-50 small fst-italic mb-0">
                                    This modular structure ensures transparent onboarding with zero hidden costs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ 5. COST ADVANTAGE - PREMIUM COMPARISON MATRIX ═══════════════ */}
            <section className="pricing-matrix-section position-relative" style={{ padding: '100px 0' }}>
                <div className="container">
                    <div className="section-title text-center mb-60 wow fadeInUp">
                        <div className="section-title__tagline-box justify-content-center">
                            <div className="section-title__tagline-shape-1"></div>
                            <span className="section-title__tagline">The Better Alternative</span>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white mt-2">
                                Why Small Manufacturers <span>Choose Micraft</span>
                            </h2>
                        </AnimatedTitle>
                        <p className="text-white-50 mt-3 mx-auto" style={{ maxWidth: '800px', fontSize: '15px' }}>
                            We have eliminated the technical complexity and heavy financial barriers of enterprise MES. Compare how Micraft transforms shop floor digitization for SMEs.
                        </p>
                    </div>

                    <div className="comparison-matrix-wrapper wow fadeInUp">
                        <div className="comparison-matrix-card">
                            {/* Matrix Header */}
                            <div className="matrix-head-row d-none d-lg-block">
                                <div className="row g-0 p-4 align-items-center">
                                    <div className="col-4"><h5 className="matrix-head-title m-0">CAPABILITY</h5></div>
                                    <div className="col-4 text-center"><h5 className="matrix-head-title m-0">TRADITIONAL MES</h5></div>
                                    <div className="col-4 text-center"><h5 className="matrix-head-title-highlight m-0">MICRAFT MES ADVANTAGE</h5></div>
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
                                <div key={idx} className="matrix-data-row">
                                    <div className="row g-0 p-lg-4 p-3 align-items-center">
                                        <div className="col-lg-4 mb-3 mb-lg-0">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="matrix-icon">
                                                    <i className={`fas fa-${row.icon}`}></i>
                                                </div>
                                                <div>
                                                    <h4 className="matrix-row-title m-0">{row.label}</h4>
                                                    <p className="matrix-row-desc m-0 d-none d-lg-block">{row.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 text-center mb-3 mb-lg-0">
                                            <div className="matrix-badge-trad d-inline-block py-2 px-3 rounded-pill">
                                                <span>{row.trad}</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 text-center">
                                            <div className="matrix-badge-micraft d-inline-block py-2 px-4 rounded-pill">
                                                <span className="fw-bold">{row.micraft}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 6. IMPACT STATS */}
                    <div className="row mt-5 pt-3 g-4">
                        {[
                            { val: "50%", label: "Faster Deployment", desc: "Proprietary implementation framework." },
                            { val: "40%", label: "Lower Total Cost", desc: "Designed for SME hardware budgets." },
                            { val: "+30%", label: "Floor Efficiency", desc: "Instant visibility into machine state." },
                            { val: "Zero", label: "IT Maintenance", desc: "We manage the infrastructure." }
                        ].map((stat, sidx) => (
                            <div key={sidx} className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay={`${sidx * 100}ms`}>
                                <div className="pricing-stat-card text-center h-100">
                                    <div className="pricing-stat-val mb-2">{stat.val}</div>
                                    <div className="pricing-stat-label mb-2">{stat.label}</div>
                                    <p className="pricing-stat-desc mb-0">{stat.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ 7. INDUSTRIES ═══════════════ */}
            <section className="pricing-industries-section position-relative" id="industries" style={{ padding: '90px 0' }}>
                <div className="container position-relative" style={{ zIndex: 1 }}>
                    <div className="section-title text-center mb-50">
                        <div className="section-title__tagline-box justify-content-center">
                            <div className="section-title__tagline-shape-1"></div>
                            <span className="section-title__tagline">Target Industries</span>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white mt-2">
                                Manufacturing Industries <span>Using Micraft MES</span>
                            </h2>
                        </AnimatedTitle>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {[
                            { name: "CNC Machining & Engineering", icon: "cogs" },
                            { name: "Automotive Components", icon: "car" },
                            { name: "Fabrication & Metal Processing", icon: "hammer" },
                            { name: "Plastic Injection Molding", icon: "cube" },
                            { name: "Electronics Manufacturing", icon: "microchip" },
                            { name: "General Manufacturing SMEs", icon: "industry" }
                        ].map((industry, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 100}ms`}>
                                <div className="pricing-industry-card text-center d-flex align-items-center justify-content-center gap-3">
                                    <div className="pricing-industry-icon">
                                        <i className={`fas fa-${industry.icon}`}></i>
                                    </div>
                                    <h4 className="pricing-industry-name mb-0">{industry.name}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ 8. REQUEST PRICING FORM ═══════════════ */}
            <section className="pricing-form-section position-relative" id="request-pricing" style={{ padding: '100px 0' }}>
                <div className="container position-relative" style={{ zIndex: 1 }}>
                    <div className="row g-5 align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="pricing-quote-box">
                                <h3 className="pricing-quote-title mb-2">Request Your Custom Quote</h3>
                                <p className="pricing-quote-subtitle mb-4">
                                    Fill out the form below for a customized factory digitization quote tailored to your shop floor.
                                </p>
                                
                                <form className="row g-3">
                                    <div className="col-md-6">
                                        <label className="pricing-form-label">Full Name</label>
                                        <input type="text" placeholder="e.g. John Doe" name="name" required className="pricing-custom-input" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="pricing-form-label">Company Name</label>
                                        <input type="text" placeholder="Your Manufacturing Firm" name="company" required className="pricing-custom-input" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="pricing-form-label">Select Industry</label>
                                        <select name="industry" className="pricing-custom-input">
                                            <option value="">Choose Manufacturing Sector</option>
                                            <option value="CNC">CNC Machining & Engineering</option>
                                            <option value="Auto">Automotive Components</option>
                                            <option value="Metal">Metal Fabrication</option>
                                            <option value="Plastic">Plastic Injection Molding</option>
                                            <option value="Electronics">Electronics Manufacturing</option>
                                            <option value="General">General Manufacturing SMEs</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="pricing-form-label">Email Address</label>
                                        <input type="email" placeholder="john@company.com" name="email" required className="pricing-custom-input" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="pricing-form-label">Phone Number</label>
                                        <input type="tel" placeholder="+91 98765 43210" name="phone" required className="pricing-custom-input" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="pricing-form-label">No. of Machines</label>
                                        <input type="number" placeholder="e.g. 15" name="machines" className="pricing-custom-input" />
                                    </div>
                                    <div className="col-12">
                                        <label className="pricing-form-label">Requirements / Notes</label>
                                        <textarea name="message" placeholder="Details about your shop floor digitization needs..." className="pricing-custom-input" style={{ height: '90px', minHeight: '90px' }}></textarea>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <button type="submit" className="thm-btn w-100 d-flex align-items-center justify-content-center py-3">
                                            Request Pricing<span className="icon-right-arrow ms-2"></span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="pricing-form-sidebar ps-xl-4">
                                <div className="section-title text-left mb-4">
                                    <div className="section-title__tagline-box mb-2">
                                        <div className="section-title__tagline-shape-1"></div>
                                        <span className="section-title__tagline">Digitize Your Factory</span>
                                        <div className="section-title__tagline-shape-2"></div>
                                    </div>
                                    <AnimatedTitle>
                                        <h2 className="section-title__title text-white mt-2">
                                            Start Your <span>Digitization Journey</span>
                                        </h2>
                                    </AnimatedTitle>
                                </div>
                                <p className="text-white-50 mb-4" style={{ lineHeight: '1.8' }}>
                                    Micraft MES helps manufacturing companies gain real-time production visibility and improve operational efficiency. Our engineering team works closely with factory managers to ensure smooth deployment.
                                </p>
                                
                                <div className="pricing-feature-box p-4 rounded-4 mb-4">
                                    <div className="d-flex align-items-start gap-3">
                                        <div className="pricing-factor-icon mt-1">
                                            <i className="fas fa-check-circle"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-white mb-2" style={{ fontSize: '18px' }}>Technical Feasibility Review</h4>
                                            <p className="text-white-50 mb-0 small">
                                                Get a custom implementation roadmap and modular pricing plan based on your shop floor layout and machines.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pricing-feature-box p-4 rounded-4">
                                    <div className="d-flex align-items-start gap-3">
                                        <div className="pricing-factor-icon mt-1">
                                            <i className="fas fa-bolt"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-white mb-2" style={{ fontSize: '18px' }}>Rapid Go-Live Support</h4>
                                            <p className="text-white-50 mb-0 small">
                                                Go live within 4 to 8 weeks with dedicated on-site training for operators and supervisors.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ 9. FINAL CTA ═══════════════ */}
            <FinalCTA 
                title={<>Digitize Your Factory Operations <br /> <span>with Micraft MES</span></>}
                text="Micraft MES helps manufacturing companies gain real-time production visibility and improve operational efficiency. Our team works closely with manufacturers to ensure smooth implementation and measurable operational improvements. Schedule a Live Demo to see how Micraft MES works in real manufacturing environments."
                buttonLabel1="Book Your Demo"
                buttonLabel2="Schedule Live Demo"
            />

            {/* Custom Component Styles */}
            <style jsx>{`
                /* ─── Hero Section ─── */
                .pricing-hero-section {
                    padding: 110px 0 90px;
                    background-color: #070B14;
                }
                .pricing-hero-glow-1 {
                    position: absolute;
                    top: -10%;
                    left: 10%;
                    width: 450px;
                    height: 450px;
                    background: radial-gradient(circle, rgba(115, 102, 202, 0.25) 0%, rgba(7, 11, 20, 0) 70%);
                    filter: blur(80px);
                    pointer-events: none;
                }
                .pricing-hero-glow-2 {
                    position: absolute;
                    bottom: 0;
                    right: 5%;
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, rgba(115, 102, 202, 0.15) 0%, rgba(7, 11, 20, 0) 70%);
                    filter: blur(70px);
                    pointer-events: none;
                }
                .pricing-hero__lead {
                    font-size: 18px;
                    font-weight: 600;
                    color: #FFFFFF;
                    line-height: 1.6;
                }
                .pricing-hero__desc {
                    font-size: 15px;
                    color: rgba(255, 255, 255, 0.7);
                    line-height: 1.75;
                }
                .thm-btn-outline {
                    background: transparent !important;
                    border: 1px solid rgba(255, 255, 255, 0.25) !important;
                    color: #FFFFFF !important;
                }
                .thm-btn-outline:hover {
                    border-color: #7366CA !important;
                    background: rgba(115, 102, 202, 0.1) !important;
                    color: #7366CA !important;
                }
                .pricing-hero__image-wrapper {
                    position: relative;
                    display: inline-block;
                }
                .pricing-hero__image-glow {
                    position: absolute;
                    inset: -15px;
                    background: radial-gradient(circle, rgba(115, 102, 202, 0.3) 0%, transparent 70%);
                    filter: blur(30px);
                    z-index: 0;
                }
                .pricing-hero__image-card {
                    position: relative;
                    z-index: 1;
                    padding: 8px;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-radius: 20px;
                    backdrop-filter: blur(10px);
                    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
                }

                /* ─── ROI Section ─── */
                .pricing-roi-section {
                    background-color: #0B111E;
                    padding: 95px 0;
                }

                /* ─── Details Section (Factors & Structure) ─── */
                .pricing-details-section {
                    background-color: #070B14;
                    padding: 100px 0;
                }
                .pricing-info-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 24px;
                    padding: 40px;
                    backdrop-filter: blur(10px);
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
                    transition: transform 0.3s ease, border-color 0.3s ease;
                }
                .pricing-info-card:hover {
                    border-color: rgba(115, 102, 202, 0.4);
                }
                .pricing-card-title {
                    font-size: 28px;
                    font-weight: 700;
                    color: #FFFFFF;
                    line-height: 1.25;
                }
                .pricing-card-title span {
                    color: #7366CA;
                }
                .pricing-card-desc {
                    color: rgba(255, 255, 255, 0.65);
                    font-size: 14.5px;
                    line-height: 1.7;
                }
                .pricing-factor-row {
                    display: flex;
                    align-items: center;
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    border-radius: 14px;
                    padding: 14px 18px;
                    transition: all 0.3s ease;
                }
                .pricing-factor-row:hover {
                    background: rgba(115, 102, 202, 0.06);
                    border-color: rgba(115, 102, 202, 0.3);
                    transform: translateX(4px);
                }
                .pricing-factor-icon {
                    width: 42px;
                    height: 42px;
                    min-width: 42px;
                    background: rgba(115, 102, 202, 0.15);
                    border: 1px solid rgba(115, 102, 202, 0.3);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #7366CA;
                    font-size: 16px;
                }
                .pricing-factor-title {
                    font-size: 16px;
                    font-weight: 600;
                    color: #FFFFFF;
                }
                .pricing-factor-desc {
                    font-size: 13px;
                    color: rgba(255, 255, 255, 0.55);
                }
                .pricing-structure-item {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    border-radius: 16px;
                    padding: 16px 20px;
                    transition: all 0.3s ease;
                }
                .pricing-structure-item:hover {
                    background: rgba(115, 102, 202, 0.06);
                    border-color: rgba(115, 102, 202, 0.3);
                    transform: translateY(-2px);
                }
                .pricing-structure-badge {
                    width: 46px;
                    height: 46px;
                    min-width: 46px;
                    background: rgba(115, 102, 202, 0.15);
                    border: 1px solid rgba(115, 102, 202, 0.3);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #7366CA;
                    font-size: 18px;
                }
                .pricing-step-num {
                    font-size: 20px;
                    font-weight: 800;
                    color: rgba(255, 255, 255, 0.15);
                    letter-spacing: -1px;
                }

                /* ─── Matrix Comparison ─── */
                .pricing-matrix-section {
                    background-color: #0B111E;
                }
                .comparison-matrix-card {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 24px;
                    overflow: hidden;
                }
                .matrix-head-row {
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                    background: rgba(255, 255, 255, 0.03);
                }
                .matrix-head-title {
                    font-size: 13px;
                    font-weight: 700;
                    color: rgba(255, 255, 255, 0.65);
                    letter-spacing: 1px;
                }
                .matrix-head-title-highlight {
                    font-size: 13px;
                    font-weight: 800;
                    color: #7366CA !important;
                    letter-spacing: 1px;
                }
                .matrix-data-row {
                    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
                    transition: background 0.3s ease;
                }
                .matrix-data-row:last-child {
                    border-bottom: none;
                }
                .matrix-data-row:hover {
                    background: rgba(255, 255, 255, 0.03);
                }
                .matrix-icon {
                    width: 44px;
                    height: 44px;
                    min-width: 44px;
                    background: rgba(115, 102, 202, 0.15);
                    border: 1px solid rgba(115, 102, 202, 0.3);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                    color: #7366CA;
                }
                .matrix-row-title {
                    font-size: 17px;
                    font-weight: 600;
                    color: #FFFFFF;
                }
                .matrix-row-desc {
                    font-size: 13px;
                    color: rgba(255, 255, 255, 0.5);
                }
                .matrix-badge-trad {
                    background: rgba(255, 255, 255, 0.04);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    color: rgba(255, 255, 255, 0.65);
                    font-size: 13.5px;
                }
                .matrix-badge-trad span {
                    color: rgba(255, 255, 255, 0.65);
                }
                .matrix-badge-micraft {
                    background: rgba(115, 102, 202, 0.2);
                    border: 1px solid rgba(115, 102, 202, 0.45);
                    color: #FFFFFF !important;
                    font-size: 14px;
                    box-shadow: 0 4px 15px rgba(115, 102, 202, 0.2);
                }
                .matrix-badge-micraft span {
                    color: #FFFFFF !important;
                    font-weight: 700;
                }

                /* ─── Stat Cards ─── */
                .pricing-stat-card {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    border-radius: 20px;
                    padding: 30px 20px;
                    transition: all 0.3s ease;
                }
                .pricing-stat-card:hover {
                    transform: translateY(-4px);
                    border-color: rgba(115, 102, 202, 0.4);
                    background: rgba(115, 102, 202, 0.04);
                }
                .pricing-stat-val {
                    font-size: 36px;
                    font-weight: 800;
                    color: #7366CA;
                    line-height: 1;
                }
                .pricing-stat-label {
                    font-size: 13px;
                    font-weight: 700;
                    color: rgba(255, 255, 255, 0.8);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .pricing-stat-desc {
                    font-size: 12.5px;
                    color: rgba(255, 255, 255, 0.5);
                }

                /* ─── Industries ─── */
                .pricing-industries-section {
                    background-color: #070B14;
                }
                .pricing-industry-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 18px;
                    padding: 24px 20px;
                    transition: all 0.3s ease;
                }
                .pricing-industry-card:hover {
                    transform: translateY(-4px);
                    border-color: #7366CA;
                    background: rgba(115, 102, 202, 0.06);
                }
                .pricing-industry-icon {
                    width: 38px;
                    height: 38px;
                    min-width: 38px;
                    background: rgba(115, 102, 202, 0.15);
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #7366CA;
                    font-size: 16px;
                }
                .pricing-industry-name {
                    font-size: 16px;
                    font-weight: 600;
                    color: #FFFFFF;
                }

                /* ─── Quote Form Section ─── */
                .pricing-form-section {
                    background-color: #0B111E;
                }
                .pricing-quote-box {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 28px;
                    padding: 40px;
                    backdrop-filter: blur(12px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                }
                .pricing-quote-title {
                    font-size: 26px;
                    font-weight: 700;
                    color: #FFFFFF;
                }
                .pricing-quote-subtitle {
                    font-size: 14px;
                    color: rgba(255, 255, 255, 0.6);
                }
                .pricing-form-label {
                    display: block;
                    font-size: 11.5px;
                    font-weight: 700;
                    color: rgba(255, 255, 255, 0.7);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin-bottom: 6px;
                }
                .pricing-custom-input {
                    width: 100%;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    padding: 10px 14px;
                    border-radius: 10px;
                    color: #FFFFFF;
                    outline: none;
                    font-size: 14px;
                    transition: border-color 0.3s ease, background 0.3s ease;
                }
                .pricing-custom-input:focus {
                    border-color: #7366CA;
                    background: rgba(255, 255, 255, 0.08);
                    box-shadow: 0 0 0 3px rgba(115, 102, 202, 0.2);
                }
                .pricing-custom-input option {
                    background: #0B111E;
                    color: #FFFFFF;
                }
                .pricing-feature-box {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    transition: border-color 0.3s ease;
                }
                .pricing-feature-box:hover {
                    border-color: rgba(115, 102, 202, 0.3);
                }

                /* ─── Light Mode Overrides ─── */
                :global([data-theme="light"]) .pricing-hero-section {
                    background-color: #F8FAFC;
                }
                :global([data-theme="light"]) .pricing-hero__lead {
                    color: #0F172A;
                }
                :global([data-theme="light"]) .pricing-hero__desc {
                    color: #475569;
                }
                :global([data-theme="light"]) .thm-btn-outline {
                    border-color: #CBD5E1 !important;
                    color: #0F172A !important;
                }
                :global([data-theme="light"]) .thm-btn-outline:hover {
                    border-color: #7366CA !important;
                    color: #7366CA !important;
                }
                :global([data-theme="light"]) .pricing-hero__image-card {
                    background: #FFFFFF;
                    border-color: #E2E8F0;
                    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
                }
                :global([data-theme="light"]) .pricing-roi-section {
                    background-color: #FFFFFF;
                }
                :global([data-theme="light"]) .pricing-roi-section .section-title__title {
                    color: #0F172A !important;
                }
                :global([data-theme="light"]) .pricing-roi-section p {
                    color: #64748B !important;
                }
                :global([data-theme="light"]) .pricing-details-section {
                    background-color: #F8FAFC;
                }
                :global([data-theme="light"]) .pricing-info-card {
                    background: #FFFFFF;
                    border-color: #E2E8F0;
                    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
                }
                :global([data-theme="light"]) .pricing-card-title {
                    color: #0F172A;
                }
                :global([data-theme="light"]) .pricing-card-desc {
                    color: #64748B;
                }
                :global([data-theme="light"]) .pricing-factor-row {
                    background: #F8FAFC;
                    border-color: #E2E8F0;
                }
                :global([data-theme="light"]) .pricing-factor-title {
                    color: #0F172A;
                }
                :global([data-theme="light"]) .pricing-factor-desc {
                    color: #64748B;
                }
                :global([data-theme="light"]) .pricing-structure-item {
                    background: #F8FAFC;
                    border-color: #E2E8F0;
                }
                :global([data-theme="light"]) .pricing-step-num {
                    color: #CBD5E1;
                }
                :global([data-theme="light"]) .pricing-matrix-section {
                    background-color: #FFFFFF;
                }
                :global([data-theme="light"]) .pricing-matrix-section .section-title__title {
                    color: #0F172A !important;
                }
                :global([data-theme="light"]) .pricing-matrix-section p {
                    color: #64748B !important;
                }
                :global([data-theme="light"]) .comparison-matrix-card {
                    background: #FFFFFF;
                    border-color: #E2E8F0;
                    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
                }
                :global([data-theme="light"]) .matrix-head-row {
                    background: #F8FAFC;
                    border-color: #E2E8F0;
                }
                :global([data-theme="light"]) .matrix-head-title {
                    color: #475569;
                }
                :global([data-theme="light"]) .matrix-head-title-highlight {
                    color: #7366CA !important;
                    font-weight: 800 !important;
                }
                :global([data-theme="light"]) .matrix-data-row {
                    border-color: #F1F5F9;
                }
                :global([data-theme="light"]) .matrix-data-row:hover {
                    background: #F8FAFC;
                }
                :global([data-theme="light"]) .matrix-row-title {
                    color: #0F172A;
                }
                :global([data-theme="light"]) .matrix-row-desc {
                    color: #64748B;
                }
                :global([data-theme="light"]) .matrix-badge-trad {
                    background: #F1F5F9;
                    border: 1px solid #E2E8F0;
                    color: #475569;
                }
                :global([data-theme="light"]) .matrix-badge-trad span {
                    color: #475569 !important;
                }
                :global([data-theme="light"]) .matrix-badge-micraft {
                    background: rgba(115, 102, 202, 0.12) !important;
                    border: 1px solid rgba(115, 102, 202, 0.4) !important;
                    color: #5E50B6 !important;
                    box-shadow: 0 2px 10px rgba(115, 102, 202, 0.12) !important;
                }
                :global([data-theme="light"]) .matrix-badge-micraft span {
                    color: #5E50B6 !important;
                    font-weight: 700 !important;
                }
                :global([data-theme="light"]) .pricing-stat-card {
                    background: #F8FAFC;
                    border-color: #E2E8F0;
                }
                :global([data-theme="light"]) .pricing-stat-label {
                    color: #0F172A;
                }
                :global([data-theme="light"]) .pricing-stat-desc {
                    color: #64748B;
                }
                :global([data-theme="light"]) .pricing-industries-section {
                    background-color: #F8FAFC;
                }
                :global([data-theme="light"]) .pricing-industries-section .section-title__title {
                    color: #0F172A !important;
                }
                :global([data-theme="light"]) .pricing-industry-card {
                    background: #FFFFFF;
                    border-color: #E2E8F0;
                    box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
                }
                :global([data-theme="light"]) .pricing-industry-name {
                    color: #0F172A;
                }
                :global([data-theme="light"]) .pricing-form-section {
                    background-color: #FFFFFF;
                }
                :global([data-theme="light"]) .pricing-quote-box {
                    background: #F8FAFC;
                    border-color: #E2E8F0;
                    box-shadow: 0 15px 35px rgba(15, 23, 42, 0.06);
                }
                :global([data-theme="light"]) .pricing-quote-title {
                    color: #0F172A;
                }
                :global([data-theme="light"]) .pricing-quote-subtitle {
                    color: #64748B;
                }
                :global([data-theme="light"]) .pricing-form-label {
                    color: #475569;
                }
                :global([data-theme="light"]) .pricing-custom-input {
                    background: #FFFFFF;
                    border-color: #CBD5E1;
                    color: #0F172A;
                }
                :global([data-theme="light"]) .pricing-custom-input:focus {
                    background: #FFFFFF;
                }
                :global([data-theme="light"]) .pricing-custom-input option {
                    background: #FFFFFF;
                    color: #0F172A;
                }
                :global([data-theme="light"]) .pricing-form-sidebar .section-title__title {
                    color: #0F172A !important;
                }
                :global([data-theme="light"]) .pricing-form-sidebar p {
                    color: #64748B !important;
                }
                :global([data-theme="light"]) .pricing-feature-box {
                    background: #F8FAFC;
                    border-color: #E2E8F0;
                }
                :global([data-theme="light"]) .pricing-feature-box h4 {
                    color: #0F172A !important;
                }

                /* ─── Responsiveness ─── */
                @media (max-width: 991px) {
                    .pricing-hero-section {
                        padding: 70px 0 50px;
                    }
                    .pricing-details-section,
                    .pricing-matrix-section,
                    .pricing-form-section {
                        padding: 70px 0;
                    }
                    .pricing-info-card,
                    .pricing-quote-box {
                        padding: 28px 20px;
                    }
                }
            `}</style>
        </Layout>
    )
}