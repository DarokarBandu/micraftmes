"use client"
import Layout from "../../../components/layout/Layout"
import Breadcrumb from "../../../components/layout/Breadcrumb"
import Link from "next/link"
import Image from "next/image"
import AnimatedTitle from "../../../components/elements/AnimatedTitle"
import FinalCTA from "../../../components/sections/home1/FinalCTA"

export default function ShopFloorDigitizationGuidePage() {
    return (
        <Layout headerStyle={1} footerStyle={2}>
            <Breadcrumb breadcrumbTitle="Shop Floor Digitization" />

            {/* 1. Hero Section */}
            <section className="mes-hero pt-100 pb-100 overflow-hidden bg-dark-depth" id="hero">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="section-title text-left">
                                <AnimatedTitle>
                                    <h1 className="section-title__title text-white">
                                        The Complete Guide to <br /> <span>Shop Floor Digitization</span>
                                    </h1>
                                </AnimatedTitle>
                            </div>
                            <div className="mt-4 text-white">
                                <p className="mb-4 hero-subtitle">
                                    Gain real-time shop floor visibility and improve manufacturing efficiency with digital monitoring systems.
                                </p>
                                <p className="text-white-50 mb-3 text-medium">
                                    Shop floor digitization is transforming manufacturing operations worldwide. By replacing manual production tracking with digital monitoring systems, factories can improve operational visibility, optimize machine utilization, and make faster production decisions.
                                </p>
                                <p className="text-white-50 mb-5 text-medium">
                                    This guide explains how shop floor digitization works and how factories can implement it successfully.
                                </p>
                                <div className="btn-box">
                                    <Link href="#understanding" className="thm-btn">Read the Guide <span className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="p-3 bg-dark rounded-5 border border-secondary border-opacity-10 shadow-2xl position-relative overflow-hidden">
                                {/* Shop Floor Digitization Dashboard SVG */}
                                <svg viewBox="0 0 560 420" xmlns="http://www.w3.org/2000/svg" className="w-100 rounded-4">
                                    <defs>
                                        <linearGradient id="sfBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#0a0f1e" /><stop offset="100%" stopColor="#111827" /></linearGradient>
                                        <linearGradient id="sfAccent" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#6366f1" /><stop offset="100%" stopColor="#4f46e5" /></linearGradient>
                                        <linearGradient id="sfGreen" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#10b981" /><stop offset="100%" stopColor="#059669" /></linearGradient>
                                        <filter id="sfGlow"><feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                                    </defs>
                                    <rect width="560" height="420" fill="url(#sfBg)" rx="12" />
                                    {/* Header bar */}
                                    <rect x="0" y="0" width="560" height="44" fill="#1a2235" rx="12" />
                                    <rect x="0" y="32" width="560" height="12" fill="#1a2235" />
                                    <circle cx="22" cy="22" r="6" fill="#ef4444" />
                                    <circle cx="40" cy="22" r="6" fill="#f59e0b" />
                                    <circle cx="58" cy="22" r="6" fill="#10b981" />
                                    <text x="88" y="27" fill="#94a3b8" fontSize="11" fontFamily="monospace">Micraft MES — Shop Floor Status</text>
                                    <circle cx="520" cy="22" r="5" fill="#10b981" className="glow-pulse" filter="url(#sfGlow)" />
                                    <text x="530" y="27" fill="#10b981" fontSize="10" fontFamily="monospace">LIVE</text>

                                    {/* KPI Cards */}
                                    <rect x="16" y="58" width="126" height="70" rx="8" fill="#1e2d45" stroke="#6366f1" strokeWidth="0.8" strokeOpacity="0.4" />
                                    <text x="28" y="76" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">DIGITIZED STATIONS</text>
                                    <text x="28" y="98" fill="#fff" fontSize="22" fontWeight="bold" fontFamily="sans-serif">24<tspan fontSize="12" fill="#6366f1">/28</tspan></text>
                                    <text x="28" y="116" fill="#10b981" fontSize="9" fontFamily="sans-serif">▲ 86% coverage</text>

                                    <rect x="154" y="58" width="126" height="70" rx="8" fill="#1e2d45" stroke="#10b981" strokeWidth="0.8" strokeOpacity="0.4" />
                                    <text x="166" y="76" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">ORDERS TRACKED</text>
                                    <text x="166" y="98" fill="#fff" fontSize="22" fontWeight="bold" fontFamily="sans-serif">187<tspan fontSize="12" fill="#10b981">/day</tspan></text>
                                    <text x="166" y="116" fill="#10b981" fontSize="9" fontFamily="sans-serif">▲ +24% this week</text>

                                    <rect x="292" y="58" width="126" height="70" rx="8" fill="#1e2d45" stroke="#06b6d4" strokeWidth="0.8" strokeOpacity="0.4" />
                                    <text x="304" y="76" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">PAPER ELIMINATED</text>
                                    <text x="304" y="98" fill="#fff" fontSize="22" fontWeight="bold" fontFamily="sans-serif">96<tspan fontSize="12" fill="#06b6d4">%</tspan></text>
                                    <text x="304" y="116" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Zero paper registers</text>

                                    <rect x="430" y="58" width="114" height="70" rx="8" fill="#1e2d45" stroke="#f59e0b" strokeWidth="0.8" strokeOpacity="0.4" />
                                    <text x="442" y="76" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">DATA LATENCY</text>
                                    <text x="442" y="98" fill="#fff" fontSize="22" fontWeight="bold" fontFamily="sans-serif">0.5<tspan fontSize="12" fill="#f59e0b">sec</tspan></text>
                                    <text x="442" y="116" fill="#10b981" fontSize="9" fontFamily="sans-serif">Real-time sync</text>

                                    {/* Digitization Progress Chart */}
                                    <rect x="16" y="144" width="320" height="130" rx="8" fill="#1a2235" stroke="#6366f1" strokeWidth="0.5" strokeOpacity="0.3" />
                                    <text x="28" y="162" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">DIGITIZATION PROGRESS (%)</text>
                                    {[
                                        { x: 36, w: 260, pct: 92, lbl: "Production Orders", clr: "#6366f1" },
                                        { x: 36, w: 240, pct: 86, lbl: "Machine Tracking", clr: "#06b6d4" },
                                        { x: 36, w: 220, pct: 78, lbl: "Quality Inspection", clr: "#10b981" },
                                        { x: 36, w: 200, pct: 72, lbl: "Dispatch Tracking", clr: "#f59e0b" }
                                    ].map((bar, i) => (
                                        <g key={i}>
                                            <text x="38" y={182 + i * 24} fill="#cbd5e1" fontSize="8" fontFamily="sans-serif">{bar.lbl}</text>
                                            <rect x="160" y={174 + i * 24} width="160" height="10" rx="5" fill="#1e2d45" />
                                            <rect x="160" y={174 + i * 24} width={160 * bar.pct / 100} height="10" rx="5" fill={bar.clr} opacity="0.85" />
                                            <text x={165 + 160 * bar.pct / 100} y={182 + i * 24} fill="#fff" fontSize="7" fontFamily="monospace">{bar.pct}%</text>
                                        </g>
                                    ))}

                                    {/* Station Map Panel */}
                                    <rect x="348" y="144" width="196" height="130" rx="8" fill="#1a2235" stroke="#06b6d4" strokeWidth="0.5" strokeOpacity="0.3" />
                                    <text x="360" y="162" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">STATION STATUS</text>
                                    {["CNC Bay A", "Assembly L1", "QC Station", "Paint Booth", "Pack & Ship"].map((m, i) => {
                                        const statuses = ["DIGITAL", "DIGITAL", "DIGITAL", "MANUAL", "DIGITAL"];
                                        const colors = ["#10b981", "#10b981", "#10b981", "#f59e0b", "#10b981"];
                                        return (
                                            <g key={i}>
                                                <rect x="360" y={172 + i * 18} width="174" height="14" rx="3" fill="#1e2d45" />
                                                <text x="368" y={183 + i * 18} fill="#cbd5e1" fontSize="8" fontFamily="monospace">{m}</text>
                                                <circle cx="510" cy={179 + i * 18} r="4" fill={colors[i]} className="glow-pulse" filter="url(#sfGlow)" />
                                                <text x="518" y={183 + i * 18} fill={colors[i]} fontSize="7" fontFamily="monospace">{statuses[i]}</text>
                                            </g>
                                        );
                                    })}

                                    {/* Activity Log */}
                                    <rect x="16" y="288" width="528" height="112" rx="8" fill="#1a2235" stroke="#334155" strokeWidth="0.5" />
                                    <text x="28" y="306" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">RECENT DIGITAL ACTIVITY LOG</text>
                                    <rect x="16" y="310" width="528" height="16" fill="#1e3a5f" opacity="0.6" />
                                    {["TIMESTAMP", "STATION", "EVENT", "OPERATOR", "STATUS"].map((h, i) => (
                                        <text key={i} x={28 + i * 106} y="322" fill="#6366f1" fontSize="8" fontFamily="monospace">{h}</text>
                                    ))}
                                    {[
                                        ["14:32:05", "CNC Bay A", "Job Complete", "R.Sharma", "LOGGED"],
                                        ["14:31:42", "QC Station", "Inspection", "M.Patel", "PASSED"],
                                        ["14:30:18", "Assembly L1", "WO Started", "K.Singh", "ACTIVE"]
                                    ].map((row, ri) => (
                                        <g key={ri}>
                                            <rect x="16" y={328 + ri * 22} width="528" height="20" fill={ri % 2 === 0 ? "#1a2235" : "#1e2d45"} />
                                            {row.map((cell, ci) => (
                                                <text key={ci} x={28 + ci * 106} y={342 + ri * 22} fill={ci === 4 ? (cell === "LOGGED" ? "#10b981" : cell === "PASSED" ? "#06b6d4" : "#f59e0b") : "#cbd5e1"} fontSize="8" fontFamily="monospace">{cell}</text>
                                            ))}
                                        </g>
                                    ))}
                                </svg>
                                {/* Floating badge */}
                                <div className="position-absolute bottom-0 end-0 m-3 bg-glass-dark border border-accent border-opacity-30 rounded-pill px-3 py-2 d-flex align-items-center gap-2">
                                    <span className="badge-dot pulse-primary"></span>
                                    <span className="text-white" style={{ fontSize: '11px' }}>Paperless Operations Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. What is Shop Floor Digitization? */}
            <section id="understanding" className="definition-section pt-100 pb-100 bg-dark-alt">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay="100ms">
                            <div className="definition-img-wrapper position-relative">
                                <div className="glow-shape-1"></div>
                                <div className="glow-shape-2"></div>
                                {/* Analog vs Digital Transformation SVG */}
                                <svg viewBox="0 0 480 380" xmlns="http://www.w3.org/2000/svg" className="w-100 rounded-5">
                                    <defs>
                                        <linearGradient id="defBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#0f172a" /><stop offset="100%" stopColor="#1a2745" /></linearGradient>
                                        <filter id="defGlow"><feGaussianBlur stdDeviation="4" /></filter>
                                    </defs>
                                    <rect width="480" height="380" fill="url(#defBg)" rx="16" />

                                    {/* LEFT: Analog Side */}
                                    <rect x="20" y="50" width="200" height="280" rx="12" fill="#1e2d45" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.4" />
                                    <text x="120" y="78" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ANALOG PROCESS</text>
                                    {[
                                        { y: 100, lbl: "Paper Registers", i: "file-invoice" },
                                        { y: 145, lbl: "Manual Counting", i: "pencil-alt" },
                                        { y: 190, lbl: "Verbal Updates", i: "comments" },
                                        { y: 235, lbl: "Delayed Reports", i: "hourglass-half" },
                                        { y: 280, lbl: "No Visibility", i: "eye-slash" }
                                    ].map((item, i) => (
                                        <g key={i}>
                                            <rect x="34" y={item.y} width="172" height="34" rx="6" fill="#1a2235" />
                                            <text x="50" y={item.y + 22} fill="#94a3b8" className="fas" fontSize="14" fontFamily="Font Awesome 5 Free" fontWeight="900" style={{ pointerEvents: 'none' }}>
                                                {item.i === 'file-invoice' ? '\uf543' : item.i === 'pencil-alt' ? '\uf303' : item.i === 'comments' ? '\uf086' : item.i === 'hourglass-half' ? '\uf252' : '\uf070'}
                                            </text>
                                            <text x="70" y={item.y + 22} fill="#94a3b8" fontSize="10" fontFamily="sans-serif">{item.lbl}</text>
                                            <text x="190" y={item.y + 22} fill="#ef4444" fontSize="9" fontFamily="monospace">✕</text>
                                        </g>
                                    ))}

                                    {/* CENTER: Arrow */}
                                    <text x="240" y="200" fill="#6366f1" fontSize="24" textAnchor="middle" fontWeight="bold">→</text>
                                    <text x="240" y="220" fill="#6366f1" fontSize="8" textAnchor="middle" fontFamily="sans-serif">DIGITIZE</text>

                                    {/* RIGHT: Digital Side */}
                                    <rect x="260" y="50" width="200" height="280" rx="12" fill="#1e2d45" stroke="#10b981" strokeWidth="1" strokeOpacity="0.4" />
                                    <text x="360" y="78" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">DIGITAL PROCESS</text>
                                    {[
                                        { y: 100, lbl: "Digital Work Orders", i: "laptop-code" },
                                        { y: 145, lbl: "Auto Data Capture", i: "satellite-dish" },
                                        { y: 190, lbl: "Live Dashboards", i: "chart-line" },
                                        { y: 235, lbl: "Instant Reports", i: "bolt" },
                                        { y: 280, lbl: "Full Visibility", i: "eye" }
                                    ].map((item, i) => (
                                        <g key={i}>
                                            <rect x="274" y={item.y} width="172" height="34" rx="6" fill="#1a2235" />
                                            <text x="290" y={item.y + 22} fill="#10b981" className="fas" fontSize="14" fontFamily="Font Awesome 5 Free" fontWeight="900" style={{ pointerEvents: 'none' }}>
                                                {item.i === 'laptop-code' ? '\uf5fc' : item.i === 'satellite-dish' ? '\uf7db' : item.i === 'chart-line' ? '\uf201' : item.i === 'bolt' ? '\uf0e7' : '\uf06e'}
                                            </text>
                                            <text x="310" y={item.y + 22} fill="#cbd5e1" fontSize="10" fontFamily="sans-serif">{item.lbl}</text>
                                            <text x="430" y={item.y + 22} fill="#10b981" fontSize="9" fontFamily="monospace">✓</text>
                                        </g>
                                    ))}

                                    {/* Status strip */}
                                    <rect x="16" y="342" width="448" height="26" rx="6" fill="#1e2d45" />
                                    <circle cx="32" cy="355" r="5" fill="#10b981" className="glow-pulse" filter="url(#defGlow)" />
                                    <text x="44" y="359" fill="#10b981" fontSize="9" fontFamily="monospace">Digital transformation active</text>
                                    <text x="320" y="359" fill="#64748b" fontSize="9" fontFamily="monospace">96% paperless achieved</text>
                                </svg>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1 wow fadeInLeft" data-wow-delay="200ms">
                            <div className="section-title text-left mb-4">
                                <span className="section-title__tagline tagline-glow">Core Manufacturing Concept</span>
                                <h2 className="section-title__title text-white">Understanding <span>Shop Floor Digitization</span></h2>
                            </div>

                            <div className="text-white-50">
                                <p className="mb-4 text-highlight-premium">
                                    Shop floor digitization refers to the process of converting manual manufacturing operations into digitally monitored and managed systems.
                                </p>

                                <div className="tracking-grid-premium mb-4">
                                    <h4 className="text-white mb-3 text-h4-premium">Digitization systems allow factories to track:</h4>
                                    <div className="row g-3">
                                        {[
                                            { t: 'Production Orders', i: 'clipboard-list' },
                                            { t: 'Machine Activity', i: 'cogs' },
                                            { t: 'Operator Performance', i: 'users-cog' },
                                            { t: 'Inspection Results', i: 'microscope' },
                                            { t: 'Production Output', i: 'box' },
                                            { t: 'Dispatch Readiness', i: 'truck-loading' }
                                        ].map((item, idx) => (
                                            <div key={idx} className="col-md-6">
                                                <div className="tracking-item-premium d-flex align-items-center gap-3 p-2 px-3 rounded-3">
                                                    <i className={`fas fa-${item.i} text-primary-glow`}></i>
                                                    <span className="text-white-50 small">{item.t}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <p className="mt-4 text-accent-soft fw-bold mb-0">
                                    Instead of relying on paper registers, spreadsheets, or verbal updates, factories implement digital platforms to track activities natively.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Why Shop Floor Digitization is Important */}
            <section className="why-need-monitoring pt-100 pb-100 bg-dark-depth">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <h2 className="section-title__title text-white">Why Modern Factories Need <span>Shop Floor Digitization</span></h2>
                        <p className="text-white-50 mt-3 max-w-2xl mx-auto">
                            Manufacturing companies face increasing pressure to improve production efficiency, reduce delays, and meet strict delivery timelines.
                        </p>
                    </div>
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="challenge-card p-5 rounded-4 h-100 card-challenge">
                                <h3 className="text-white mb-4"><i className="fas fa-exclamation-triangle me-2 text-danger"></i> The Risks of Manual Operations</h3>
                                <p className="text-white-50 mb-4">Without digital systems, factories often face challenges such as:</p>
                                <ul className="list-unstyled d-flex flex-column gap-3 text-white-50">
                                    <li className="d-flex align-items-start gap-2"><i className="fas fa-times-circle mt-1 text-danger"></i> <span>Delayed production updates and stale reporting data</span></li>
                                    <li className="d-flex align-items-start gap-2"><i className="fas fa-times-circle mt-1 text-danger"></i> <span>Lack of real-time shop floor visibility</span></li>
                                    <li className="d-flex align-items-start gap-2"><i className="fas fa-times-circle mt-1 text-danger"></i> <span>Inability to identify production bottlenecks early</span></li>
                                    <li className="d-flex align-items-start gap-2"><i className="fas fa-times-circle mt-1 text-danger"></i> <span>Poor machine utilization insights</span></li>
                                    <li className="d-flex align-items-start gap-2"><i className="fas fa-times-circle mt-1 text-danger"></i> <span>Inaccurate production and quality reporting</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="solution-card p-5 rounded-4 h-100 card-solution">
                                <h3 className="text-white mb-4"><i className="fas fa-chart-line me-2 text-success"></i> The Digital Advantage</h3>
                                <p className="text-white mb-4 text-medium">Digitizing the shop floor provides real-time operational insights that help factories improve efficiency and decision-making.</p>
                                <div className="rounded-4 overflow-hidden mt-4">
                                    {/* Digitization Impact Metrics SVG */}
                                    <svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" className="w-100 rounded-4">
                                        <defs>
                                            <linearGradient id="daBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#0f172a" /><stop offset="100%" stopColor="#1a2235" /></linearGradient>
                                        </defs>
                                        <rect width="420" height="200" fill="url(#daBg)" rx="10" />
                                        {/* Before/After comparison bars */}
                                        {[
                                            { x: 30, bh: 50, ah: 120, lbl: "Visibility", clr: "#6366f1" },
                                            { x: 100, bh: 40, ah: 110, lbl: "Speed", clr: "#06b6d4" },
                                            { x: 170, bh: 60, ah: 130, lbl: "Accuracy", clr: "#10b981" },
                                            { x: 240, bh: 70, ah: 100, lbl: "Efficiency", clr: "#f59e0b" }
                                        ].map((b, i) => (
                                            <g key={i}>
                                                <rect x={b.x} y={162 - b.bh} width="18" height={b.bh} rx="3" fill="#334155" opacity="0.6" />
                                                <rect x={b.x + 22} y={162 - b.ah} width="18" height={b.ah} rx="3" fill={b.clr} opacity="0.85" />
                                                <text x={b.x + 20} y="178" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">{b.lbl}</text>
                                            </g>
                                        ))}
                                        {/* Legend */}
                                        <rect x="330" y="30" width="10" height="10" rx="2" fill="#334155" />
                                        <text x="346" y="39" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">Before</text>
                                        <rect x="330" y="48" width="10" height="10" rx="2" fill="#6366f1" />
                                        <text x="346" y="57" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">After</text>
                                        {/* Right KPIs */}
                                        <rect x="330" y="80" width="78" height="44" rx="6" fill="#1e2d45" stroke="#10b981" strokeWidth="0.8" />
                                        <text x="369" y="98" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="sans-serif">PAPER SAVED</text>
                                        <text x="369" y="116" fill="#10b981" fontSize="16" fontWeight="bold" textAnchor="middle">96%</text>
                                        <rect x="330" y="134" width="78" height="44" rx="6" fill="#1e2d45" stroke="#06b6d4" strokeWidth="0.8" />
                                        <text x="369" y="152" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="sans-serif">DATA SPEED</text>
                                        <text x="369" y="170" fill="#06b6d4" fontSize="16" fontWeight="bold" textAnchor="middle">10x</text>
                                        <text x="16" y="18" fill="#6366f1" fontSize="10" fontFamily="sans-serif" fontWeight="bold">Before vs After Digitization</text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Core Technologies Used in Shop Floor Digitization */}
            <section className="key-components pt-100 pb-100 bg-dark-alt">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <h2 className="section-title__title text-white">Core Technologies Used in <span>Shop Floor Digitization</span></h2>
                        <p className="text-white-50 mt-3">A modern digital shop floor typically includes several key technology components.</p>
                    </div>
                    <div className="row g-4">
                        {[
                            { title: "Production Tracking Systems", desc: "Track work order progress across production stages.", link: "/solutions/production-tracking-software", icon: "tasks" },
                            { title: "Shop Floor Visibility Systems", desc: "Provide live monitoring of shop floor activities.", link: "/solutions/shop-floor-visibility-software", icon: "eye" },
                            { title: "Machine Utilization Monitoring", desc: "Track machine activity and equipment productivity.", link: "/solutions/machine-utilization-tracking", icon: "industry" },
                            { title: "Manufacturing Process Tracking", desc: "Monitor multi-stage production workflows.", link: "/solutions/manufacturing-process-tracking", icon: "project-diagram" },
                            { title: "Quality Inspection Monitoring", desc: "Digitally record inspection results and defect data.", link: "/solutions/quality-inspection-tracking", icon: "check-double" },
                            { title: "Performance Dashboards", desc: "Visualize production performance using real-time dashboards.", link: "/solutions/digital-production-dashboard", icon: "chart-pie" }
                        ].map((func, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 100}ms`}>
                                <div className="function-card p-4 rounded-4 h-100 d-flex flex-column function-card-base">
                                    <i className={`fas fa-${func.icon} fa-2x mb-3 icon-accent`}></i>
                                    <h4 className="text-white mb-2 text-h4">{func.title}</h4>
                                    <p className="text-white-50 mb-4 flex-grow-1">{func.desc}</p>
                                    <Link href={func.link} className="text-decoration-none d-flex align-items-center gap-2 link-explore">
                                        Explore Software <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. How Shop Floor Digitization Works */}
            <section className="how-it-works pt-100 pb-100 bg-dark-surface">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <h2 className="section-title__title text-white">How <span>Shop Floor Digitization</span> Works</h2>
                        <p className="text-white-50 mt-3 max-w-2xl mx-auto">
                            Digital systems capture production data directly from shop floor activities and display it in real-time dashboards.
                        </p>
                    </div>
                    <div className="workflow-flow-container wow fadeInUp" data-wow-delay="200ms">
                        <div className="row g-4 justify-content-center">
                            {[
                                { t: "Process Mapping", d: "Document current workflows and identify gaps", i: "sitemap" },
                                { t: "Data Capture Setup", d: "Define what data to collect digitally", i: "database" },
                                { t: "System Deploy", d: "Install digital monitoring on shop floor", i: "tablet-alt" },
                                { t: "Team Training", d: "Train operators to use digital workflows", i: "user-graduate" },
                                { t: "Live Dashboards", d: "Real-time production data visible to all", i: "chart-line" }
                            ].map((step, idx) => (
                                <div key={idx} className="col-lg-2-5 col-md-4 col-sm-6 text-center workflow-node-col">
                                    <div className="workflow-node-inner">
                                        <div className={`workflow-icon-box node-color-${idx % 2 === 0 ? 'primary' : 'accent'}`}>
                                            <i className={`fas fa-${step.i}`}></i>
                                            {idx < 4 && <div className="flow-connector-arrow d-none d-lg-block"><i className="fas fa-chevron-right"></i></div>}
                                        </div>
                                        <div className="workflow-content-premium mt-4 pt-2">
                                            <h4 className="text-white small fw-bold text-uppercase mb-2" style={{ letterSpacing: '1px' }}>{step.t}</h4>
                                            <p className="text-white-50 small-text-relaxed mb-0">{step.d}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-center mt-60 wow fadeIn" data-wow-delay="500ms">
                        <div className="dashboard-callout p-4 rounded-4 bg-glass-dark border border-secondary border-opacity-10 d-inline-block">
                            <p className="text-white mb-0 text-medium-weight d-flex align-items-center gap-3">
                                <i className="fas fa-tachometer-alt text-accent"></i>
                                This workflow enables factory managers to transition from manual to fully digital operations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Benefits of Shop Floor Digitization */}
            <section className="benefits-section pt-100 pb-100 position-relative overflow-hidden mes-benefits-bg">
                <div className="overlay-dark"></div>
                <div className="container relative-z2">
                    <div className="section-title text-center mb-60">
                        <h2 className="section-title__title text-white">Operational Benefits of <span>Shop Floor Digitization</span></h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { title: "Real-Time Production Visibility", desc: "Managers can monitor factory performance instantly." },
                            { title: "Faster Decision Making", desc: "Production issues are identified and resolved quickly." },
                            { title: "Improved Machine Utilization", desc: "Identify idle machines and improve equipment productivity." },
                            { title: "Better Production Coordination", desc: "Improve collaboration between production stages." },
                            { title: "Improved Quality Monitoring", desc: "Track inspection results and defect trends digitally." },
                            { title: "Reliable Production Reporting", desc: "Access accurate manufacturing data for decisions." }
                        ].map((ben, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 100}ms`}>
                                <div className="benefit-card p-4 rounded-4 text-center h-100 border border-secondary border-opacity-10 shadow-lg card-benefit-inner transition-3s">
                                    <div className="icon-box mb-3 mx-auto icon-box-benefit">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <h4 className="text-white mb-2 text-h4">{ben.title}</h4>
                                    <p className="text-white-50 small mb-0">{ben.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Industries That Benefit From Digitization */}
            <section className="industries-marquee-section pt-100 pb-100 bg-dark-depth overflow-hidden">
                <div className="container-fluid p-0">
                    <div className="section-title text-center mb-50">
                        <h2 className="section-title__title text-white h3">Manufacturing Industries Benefiting From <span>Shop Floor Digitization</span></h2>
                        <p className="text-white-50 mt-2">These industries benefit significantly from digital shop floor operations.</p>
                    </div>

                    <div className="marquee-wrapper position-relative">
                        <div className="marquee-fade-left"></div>
                        <div className="marquee-fade-right"></div>
                        <div className="marquee-container d-flex">
                            <div className="marquee-content d-flex gap-4">
                                {[
                                    "CNC Machining", "Engineering Manufacturing", "Automotive Components",
                                    "Metal Fabrication", "Plastic Injection Molding", "Electronics Manufacturing"
                                ].map((ind, i) => (
                                    <div key={i} className="industry-badge-premium py-3 px-4 rounded-pill d-flex align-items-center gap-3 bg-glass-dark border border-secondary border-opacity-10">
                                        <div className="badge-dot pulse-primary"></div>
                                        <span className="text-white small fw-bold text-nowrap">{ind}</span>
                                    </div>
                                ))}
                                {[
                                    "CNC Machining", "Engineering Manufacturing", "Automotive Components",
                                    "Metal Fabrication", "Plastic Injection Molding", "Electronics Manufacturing"
                                ].map((ind, i) => (
                                    <div key={`dup-${i}`} className="industry-badge-premium py-3 px-4 rounded-pill d-flex align-items-center gap-3 bg-glass-dark border border-secondary border-opacity-10">
                                        <div className="badge-dot pulse-primary"></div>
                                        <span className="text-white small fw-bold text-nowrap">{ind}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Challenges in Implementing Digitization */}
            <section className="challenges-section pt-100 pb-100 bg-dark-alt">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="position-relative">
                                {/* Digitization Readiness Timeline SVG */}
                                <svg viewBox="0 0 440 380" xmlns="http://www.w3.org/2000/svg" className="w-100 rounded-5">
                                    <defs>
                                        <linearGradient id="chBg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#0f172a" /><stop offset="100%" stopColor="#1e293b" /></linearGradient>
                                        <filter id="gch2"><feGaussianBlur stdDeviation="3" /></filter>
                                    </defs>
                                    <rect width="440" height="380" fill="url(#chBg2)" rx="16" />
                                    <text x="22" y="36" fill="#e2e8f0" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Digitization Readiness Assessment</text>
                                    <line x1="60" y1="60" x2="60" y2="340" stroke="#334155" strokeWidth="2" strokeDasharray="6 3" />
                                    {[
                                        { y: 70, done: true, lbl: "Workflow Documentation", sub: "All processes mapped", clr: "#10b981" },
                                        { y: 130, done: true, lbl: "Data Point Identification", sub: "28 stations documented", clr: "#10b981" },
                                        { y: 190, done: true, lbl: "Digital Platform Selection", sub: "Micraft MES chosen", clr: "#10b981" },
                                        { y: 250, done: false, lbl: "Operator Training", sub: "Scheduled: Week 2", clr: "#f59e0b" },
                                        { y: 310, done: false, lbl: "Full Paperless Go-Live", sub: "Target: 21 days", clr: "#6366f1" }
                                    ].map((item, i) => (
                                        <g key={i}>
                                            <circle cx="60" cy={item.y} r="10" fill={item.clr} filter="url(#gch2)" />
                                            <circle cx="60" cy={item.y} r="6" fill={item.done ? item.clr : "#1e293b"} stroke={item.clr} strokeWidth="1.5" />
                                            {item.done && <text x="57" y={item.y + 4} fill="#fff" fontSize="8">✓</text>}
                                            <rect x="84" y={item.y - 28} width="332" height="52" rx="8" fill={item.done ? "#1e3a2a" : "#1e2d45"} stroke={item.clr} strokeWidth="0.8" strokeOpacity="0.4" />
                                            <text x="100" y={item.y - 8} fill="#f1f5f9" fontSize="11" fontWeight="bold" fontFamily="sans-serif">{item.lbl}</text>
                                            <text x="100" y={item.y + 10} fill="#94a3b8" fontSize="9" fontFamily="sans-serif">{item.sub}</text>
                                            <rect x="330" y={item.y - 22} width="74" height="18" rx="9" fill={item.clr} opacity="0.15" />
                                            <text x="367" y={item.y - 9} fill={item.clr} fontSize="8" fontFamily="monospace" textAnchor="middle">{item.done ? "COMPLETE" : "PENDING"}</text>
                                        </g>
                                    ))}
                                </svg>
                                {/* Floating alert */}
                                <div className="perspective-floating-card d-none d-md-flex p-3 bg-glass-dark-heavy shadow-2xl rounded-4 border border-accent border-opacity-20 position-absolute align-items-center gap-3" style={{ bottom: '-16px', right: '0px' }}>
                                    <i className="fas fa-exclamation-triangle text-warning fa-lg"></i>
                                    <div>
                                        <h5 className="text-white mb-0" style={{ fontSize: '12px' }}>Training Required</h5>
                                        <p className="text-white-50 mb-0" style={{ fontSize: '10px' }}>Operator adoption pending</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="section-title text-left mb-4">
                                <h2 className="section-title__title text-white">Common Challenges in <span>Shop Floor Digitization</span></h2>
                            </div>
                            <p className="text-white-50 mb-4">Manufacturing companies may face challenges during digital adoption:</p>
                            <div className="signs-list d-flex flex-column gap-3 mb-4">
                                {[
                                    "Resistance to change from shop floor teams accustomed to manual tracking",
                                    "Difficulty selecting the right software platform for SME operations",
                                    "Lack of pre-existing digital production data baselines",
                                    "Complex integrations with legacy existing ERP systems"
                                ].map((sign, idx) => (
                                    <div key={idx} className="d-flex align-items-center gap-3 p-3 rounded-3 card-sign">
                                        <i className="fas fa-exclamation-circle text-accent"></i>
                                        <span className="text-white">{sign}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="p-4 rounded-4 bg-glass-dark border border-white border-opacity-05">
                                <p className="text-white mb-0 fw-bold d-flex align-items-center gap-3">
                                    <i className="fas fa-lightbulb text-primary-glow fa-lg"></i>
                                    Choosing user-friendly MES platforms designed for manufacturing SMEs helps overcome these challenges.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9 & 10. Role of MES - The Digital Nerve Center */}
            <section className="mes-digital-bridge pt-100 pb-100 bg-dark-depth overflow-hidden position-relative">
                <div className="glow-shape-1" style={{ top: '20%', left: '10%', opacity: 0.2 }}></div>
                <div className="glow-shape-2" style={{ bottom: '20%', right: '10%', opacity: 0.2 }}></div>

                <div className="container position-relative z-2">
                    <div className="row justify-content-center mb-80">
                        <div className="col-lg-8 text-center wow fadeInUp">
                            <span className="tagline-glow">Digital Nerve Center</span>
                            <h2 className="section-title__title text-white">How MES Enables <span>Shop Floor Digitization</span></h2>
                            <p className="text-white-50 mt-4 text-medium mx-auto" style={{ maxWidth: '700px' }}>
                                Manufacturing Execution Systems act as the central digital nervous system of the factory floor,
                                connecting every station into a unified real-time monitoring platform.
                            </p>
                        </div>
                    </div>

                    <div className="row g-0 align-items-center position-relative">
                        {/* Left Side: Analog Inputs */}
                        <div className="col-lg-4 px-3 wow fadeInLeft">
                            <div className="d-flex flex-column gap-4">
                                {[
                                    { t: "Paper Registers", d: "Manual Log Books & Sheets", i: "file-alt", c: "accent" },
                                    { t: "Verbal Updates", d: "Supervisor Walk-Around Reports", i: "comments", c: "primary" },
                                    { t: "Spreadsheets", d: "Delayed Excel-Based Tracking", i: "table", c: "accent" }
                                ].map((source, idx) => (
                                    <div key={idx} className="bg-glass-dark p-4 rounded-4 border border-white border-opacity-05 hover-lift">
                                        <div className={`d-flex align-items-center gap-3 mb-2 text-${source.c === 'accent' ? 'accent' : 'primary-glow'}`}>
                                            <i className={`fas fa-${source.i} fs-4`}></i>
                                            <h5 className="text-white mb-0 fs-6">{source.t}</h5>
                                        </div>
                                        <p className="text-white opacity-40 small mb-0">{source.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Center: The MES Engine */}
                        <div className="col-lg-4 wow zoomIn">
                            <div className="position-relative py-5">
                                <div className="execution-engine m-auto execution-engine-wrap" style={{ width: '220px', height: '220px', position: 'relative', top: 'auto', left: 'auto', transform: 'none' }}>
                                    <div className="engine-pulse glow-pulse"></div>
                                    <div className="engine-pulse engine-pulse-slow" style={{ animationDelay: '1s', borderStyle: 'dashed' }}></div>
                                    <div className="engine-core d-flex flex-column text-center glow-pulse">
                                        <i className="fas fa-layer-group fa-spin-slow mb-2"></i>
                                        <span className="fw-bold" style={{ fontSize: '14px', letterSpacing: '2px' }}>MICRAFT</span>
                                        <span className="tiny-text opacity-100 text-white" style={{ fontSize: '10px' }}>CORE ENGINE</span>
                                    </div>
                                </div>
                                <div className="d-none d-lg-block">
                                    <div className="connector-line position-absolute" style={{ top: '50%', left: '-50px', width: '50px', transform: 'translateY(-50%)' }}>
                                        <div className="connector-pulse"></div>
                                    </div>
                                    <div className="connector-line position-absolute" style={{ top: '50%', right: '-50px', width: '50px', transform: 'translateY(-50%)' }}>
                                        <div className="connector-pulse" style={{ animationDirection: 'reverse' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Digital Outputs */}
                        <div className="col-lg-4 px-3 wow fadeInRight">
                            <div className="d-flex flex-column gap-4">
                                {[
                                    { t: "Live Dashboards", d: "Instant Production Visibility", i: "chart-line", c: "primary" },
                                    { t: "Digital Records", d: "Auto-Generated Production Data", i: "database", c: "accent" },
                                    { t: "Alert System", d: "Proactive Issue Notifications", i: "bell", c: "primary" }
                                ].map((output, idx) => (
                                    <div key={idx} className="bg-glass-dark p-4 rounded-4 border border-white border-opacity-05 hover-lift">
                                        <div className={`d-flex align-items-center gap-3 mb-2 text-${output.c === 'accent' ? 'accent' : 'primary-glow'}`}>
                                            <i className={`fas fa-${output.i} fs-4`}></i>
                                            <h5 className="text-white mb-0 fs-6">{output.t}</h5>
                                        </div>
                                        <p className="text-white opacity-40 small mb-0">{output.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="row mt-80 justify-content-center pt-5">
                        <div className="col-lg-10 wow fadeInUp">
                            <div className="bg-accent-glow p-1 rounded-5">
                                <div className="bg-dark-surface p-5 rounded-5 border border-white border-opacity-10 position-relative overflow-hidden">
                                    <div className="position-absolute top-50 end-0 translate-middle-y p-5 opacity-05 fa-8x d-none d-md-block">
                                        <i className="fas fa-microchip text-white"></i>
                                    </div>
                                    <div className="row align-items-center position-relative z-2">
                                        <div className="col-md-8">
                                            <h3 className="text-white mb-3 h4 fw-bold">Micraft MES for Shop Floor Digitization</h3>
                                            <p className="text-white opacity-75 mb-0 pe-lg-5">
                                                Micraft MES provides manufacturing companies with a practical platform to digitize shop floor operations and gain real-time factory visibility from day one.
                                            </p>
                                        </div>
                                        <div className="col-md-4 text-md-end mt-4 mt-md-0">
                                            <Link href="/solutions" className="btn btn-primary px-4 py-3 fw-bold rounded-pill shadow-lg hover-up d-inline-flex align-items-center gap-2" style={{ background: 'linear-gradient(135deg, #6065D4, #FA5674)', border: 'none' }}>
                                                Explore Solution <i className="fas fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 11. Future of Shop Floor Digitization */}
            <section className="future-section pt-100 pb-100 bg-dark-depth">
                <div className="container">
                    <div className="row flex-row-reverse align-items-center g-5">
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="100ms">
                            <div className="dual-image-perspective position-relative">
                                <div className="perspective-main rounded-5 overflow-hidden shadow-2xl border border-secondary border-opacity-20 p-2 bg-dark" style={{ height: '400px' }}>
                                    <Image
                                        src="/assets/images/backgrounds/EndtoEndVisibility.jpg"
                                        alt="Future of Shop Floor Digitization"
                                        width={600}
                                        height={400}
                                        className="img-fluid rounded-4 img-cover h-100"
                                    />
                                </div>
                                <div className="perspective-floating-card d-none d-md-block p-3 bg-glass-dark-heavy shadow-2xl rounded-4 border border-secondary border-opacity-20 position-absolute" style={{ top: '-30px', left: '-30px', bottom: 'auto', background: 'rgba(96, 101, 212, 0.9)' }}>
                                    <div className="d-flex align-items-center gap-3">
                                        <i className="fas fa-robot text-white fa-2x"></i>
                                        <h5 className="text-white mb-0 small">AI-Powered Automation</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="200ms">
                            <div className="section-title text-left mb-4">
                                <h2 className="section-title__title text-white">The Future of <span>Digital Manufacturing Floors</span></h2>
                            </div>
                            <p className="text-white-50 mb-4">The future of manufacturing digitization will include:</p>

                            <div className="row g-4 mb-4">
                                {[
                                    { t: "Automated Data Collection", i: "database" },
                                    { t: "Connected Factory Systems", i: "network-wired" },
                                    { t: "Predictive Analytics", i: "brain" },
                                    { t: "Digital Twin Technology", i: "clone" }
                                ].map((item, idx) => (
                                    <div key={idx} className="col-sm-6">
                                        <div className="p-3 rounded-4 bg-glass-dark border border-white border-opacity-05 h-100 transition-3s d-flex align-items-center gap-3">
                                            <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', background: 'rgba(96, 101, 212, 0.1)', color: '#6065D4' }}>
                                                <i className={`fas fa-${item.i}`}></i>
                                            </div>
                                            <span className="text-white small fw-bold">{item.t}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="text-white fw-bold text-medium mb-0">
                                Manufacturers that adopt digitization early will gain a significant operational advantage over competitors.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 12. Call to Action */}
            <FinalCTA
                title={<>Start Your Shop Floor <br /> <span>Digitization Journey</span></>}
                text="Micraft MES helps manufacturing companies digitize production operations and gain real-time factory visibility. Schedule a Live Demo to see how Micraft MES transforms operations."
                buttonLabel1="Book Your Demo"
            />
        </Layout>
    )
}