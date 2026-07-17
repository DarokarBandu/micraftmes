"use client"
import Layout from "../../../components/layout/Layout"
import Breadcrumb from "../../../components/layout/Breadcrumb"
import Link from "next/link"
import Image from "next/image"
import AnimatedTitle from "../../../components/elements/AnimatedTitle"
import FinalCTA from "../../../components/sections/home1/FinalCTA"

export default function FactoryProductionMonitoringPage() {
    return (
        <Layout headerStyle={1} footerStyle={2}>
            <Breadcrumb breadcrumbTitle="Factory Production Monitoring" />

            {/* 1. Hero Section */}
            <section className="mes-hero pt-100 pb-100 overflow-hidden bg-dark-depth" id="hero">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="section-title text-left">
                                <AnimatedTitle>
                                    <h1 className="section-title__title text-white">
                                        The Complete Guide to <br /> <span>Factory Production Monitoring</span>
                                    </h1>
                                </AnimatedTitle>
                            </div>
                            <div className="mt-4 text-white">
                                <p className="mb-4 hero-subtitle">
                                    Learn how modern production monitoring systems help manufacturers track factory operations, improve machine utilization, and gain real-time visibility of manufacturing performance.
                                </p>
                                <p className="text-white-50 mb-3 text-medium">
                                    Factory production monitoring enables manufacturers to track shop floor operations in real time. By digitizing production activities, companies can monitor machines, track work order progress, identify bottlenecks, and improve manufacturing efficiency.
                                </p>
                                <p className="text-white-50 mb-5 text-medium">
                                    This guide explains how production monitoring systems work and how factories can implement them successfully.
                                </p>
                                <div className="btn-box">
                                    <Link href="#understanding" className="thm-btn">Read the Guide <span className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="p-3 bg-dark rounded-5 border border-secondary border-opacity-10 shadow-2xl position-relative overflow-hidden">
                                {/* MES Live Dashboard SVG Illustration */}
                                <svg viewBox="0 0 560 420" xmlns="http://www.w3.org/2000/svg" className="w-100 rounded-4">
                                    <defs>
                                        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#0a0f1e" /><stop offset="100%" stopColor="#111827" /></linearGradient>
                                        <linearGradient id="barBlue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#6366f1" /><stop offset="100%" stopColor="#4f46e5" /></linearGradient>
                                        <linearGradient id="barCyan" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#06b6d4" /><stop offset="100%" stopColor="#0891b2" /></linearGradient>
                                        <linearGradient id="barGreen" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#10b981" /><stop offset="100%" stopColor="#059669" /></linearGradient>
                                        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#6366f1" stopOpacity="0" /><stop offset="40%" stopColor="#6366f1" /><stop offset="100%" stopColor="#06b6d4" /></linearGradient>
                                        <filter id="glow"><feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                                    </defs>
                                    {/* Background */}
                                    <rect width="560" height="420" fill="url(#bg)" rx="12" />
                                    {/* Header bar */}
                                    <rect x="0" y="0" width="560" height="44" fill="#1a2235" rx="12" />
                                    <rect x="0" y="32" width="560" height="12" fill="#1a2235" />
                                    <circle cx="22" cy="22" r="6" fill="#ef4444" />
                                    <circle cx="40" cy="22" r="6" fill="#f59e0b" />
                                    <circle cx="58" cy="22" r="6" fill="#10b981" />
                                    <text x="88" y="27" fill="#94a3b8" fontSize="11" fontFamily="monospace">Micraft MES — Live Production Dashboard</text>
                                    {/* Live indicator */}
                                    <circle cx="520" cy="22" r="5" fill="#10b981" filter="url(#glow)" />
                                    <text x="530" y="27" fill="#10b981" fontSize="10" fontFamily="monospace">LIVE</text>
                                    {/* KPI Cards row */}
                                    {/* Card 1 */}
                                    <rect x="16" y="58" width="116" height="70" rx="8" fill="#1e2d45" stroke="#6366f1" strokeWidth="0.8" strokeOpacity="0.4" />
                                    <text x="28" y="76" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">PRODUCTION RATE</text>
                                    <text x="28" y="98" fill="#fff" fontSize="22" fontWeight="bold" fontFamily="sans-serif">94.3<tspan fontSize="12" fill="#6366f1">%</tspan></text>
                                    <text x="28" y="116" fill="#10b981" fontSize="9" fontFamily="sans-serif">▲ 3.2% vs yesterday</text>
                                    {/* Card 2 */}
                                    <rect x="144" y="58" width="116" height="70" rx="8" fill="#1e2d45" stroke="#06b6d4" strokeWidth="0.8" strokeOpacity="0.4" />
                                    <text x="156" y="76" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">MACHINES ONLINE</text>
                                    <text x="156" y="98" fill="#fff" fontSize="22" fontWeight="bold" fontFamily="sans-serif">18<tspan fontSize="12" fill="#06b6d4">/21</tspan></text>
                                    <text x="156" y="116" fill="#f59e0b" fontSize="9" fontFamily="sans-serif">3 in maintenance</text>
                                    {/* Card 3 */}
                                    <rect x="272" y="58" width="116" height="70" rx="8" fill="#1e2d45" stroke="#10b981" strokeWidth="0.8" strokeOpacity="0.4" />
                                    <text x="284" y="76" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">ORDERS COMPLETE</text>
                                    <text x="284" y="98" fill="#fff" fontSize="22" fontWeight="bold" fontFamily="sans-serif">142<tspan fontSize="12" fill="#10b981">/160</tspan></text>
                                    <text x="284" y="116" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Shift target: 160</text>
                                    {/* Card 4 */}
                                    <rect x="400" y="58" width="144" height="70" rx="8" fill="#1e2d45" stroke="#f59e0b" strokeWidth="0.8" strokeOpacity="0.4" />
                                    <text x="412" y="76" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">DOWNTIME TODAY</text>
                                    <text x="412" y="98" fill="#fff" fontSize="22" fontWeight="bold" fontFamily="sans-serif">24<tspan fontSize="12" fill="#f59e0b">min</tspan></text>
                                    <text x="412" y="116" fill="#ef4444" fontSize="9" fontFamily="sans-serif">▼ -12min vs avg</text>
                                    {/* Production Chart */}
                                    <rect x="16" y="144" width="320" height="130" rx="8" fill="#1a2235" stroke="#6366f1" strokeWidth="0.5" strokeOpacity="0.3" />
                                    <text x="28" y="162" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">OUTPUT / HOUR (UNITS)</text>
                                    {/* Chart lines */}
                                    <polyline points="36,256 76,236 116,244 156,220 196,228 236,208 276,216 310,200" fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" filter="url(#glow)" />
                                    <polyline points="36,256 76,248 116,250 156,240 196,244 236,235 276,240 310,230" fill="none" stroke="#334155" strokeWidth="1.5" strokeDasharray="4 2" />
                                    {/* Dots on line */}
                                    <circle cx="310" cy="200" r="4" fill="#6366f1" filter="url(#glow)" />
                                    {/* Grid lines */}
                                    <line x1="36" y1="220" x2="316" y2="220" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 2" />
                                    <line x1="36" y1="238" x2="316" y2="238" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 2" />
                                    <line x1="36" y1="256" x2="316" y2="256" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 2" />
                                    {/* X-axis labels */}
                                    {["7AM", "9AM", "11AM", "1PM", "3PM", "5PM", "7PM", "NOW"].map((lbl, i) => (
                                        <text key={i} x={36 + i * 40} y="272" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">{lbl}</text>
                                    ))}
                                    {/* Machine Status Panel */}
                                    <rect x="348" y="144" width="196" height="130" rx="8" fill="#1a2235" stroke="#06b6d4" strokeWidth="0.5" strokeOpacity="0.3" />
                                    <text x="360" y="162" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">MACHINE STATUS</text>
                                    {["CNC-01", "CNC-02", "LATHE-01", "PRESS-01", "MILL-02"].map((m, i) => {
                                        const statuses = ["RUNNING", "RUNNING", "IDLE", "RUNNING", "MAINT"];
                                        const colors = ["#10b981", "#10b981", "#f59e0b", "#10b981", "#ef4444"];
                                        return (
                                            <g key={i}>
                                                <rect x="360" y={172 + i * 18} width="174" height="14" rx="3" fill="#1e2d45" />
                                                <text x="368" y={183 + i * 18} fill="#cbd5e1" fontSize="8" fontFamily="monospace">{m}</text>
                                                <circle cx="510" cy={179 + i * 18} r="4" fill={colors[i]} filter="url(#glow)" />
                                                <text x="518" y={183 + i * 18} fill={colors[i]} fontSize="7" fontFamily="monospace">{statuses[i]}</text>
                                            </g>
                                        );
                                    })}
                                    {/* Work Orders table */}
                                    <rect x="16" y="288" width="528" height="112" rx="8" fill="#1a2235" stroke="#334155" strokeWidth="0.5" />
                                    <text x="28" y="306" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">ACTIVE WORK ORDERS</text>
                                    {/* Table header */}
                                    <rect x="16" y="310" width="528" height="16" fill="#1e3a5f" opacity="0.6" />
                                    {["ORDER ID", "PART", "MACHINE", "QTY", "PROGRESS", "STATUS"].map((h, i) => (
                                        <text key={i} x={28 + i * 88} y="322" fill="#6366f1" fontSize="8" fontFamily="monospace">{h}</text>
                                    ))}
                                    {[
                                        ["WO-1042", "Bracket-A", "CNC-01", "500", "76%", "IN PROGRESS"],
                                        ["WO-1043", "Shaft-B", "LATHE-01", "200", "45%", "ON HOLD"],
                                        ["WO-1044", "Gear-C", "MILL-02", "350", "12%", "STARTING"]
                                    ].map((row, ri) => (
                                        <g key={ri}>
                                            <rect x="16" y={328 + ri * 22} width="528" height="20" fill={ri % 2 === 0 ? "#1a2235" : "#1e2d45"} />
                                            {row.map((cell, ci) => (
                                                <text key={ci} x={28 + ci * 88} y={342 + ri * 22} fill={ci === 5 ? (cell === "IN PROGRESS" ? "#10b981" : cell === "STARTING" ? "#06b6d4" : "#f59e0b") : "#cbd5e1"} fontSize="8" fontFamily="monospace">{cell}</text>
                                            ))}
                                        </g>
                                    ))}
                                </svg>
                                {/* Floating badge */}
                                <div className="position-absolute bottom-0 end-0 m-3 bg-glass-dark border border-accent border-opacity-30 rounded-pill px-3 py-2 d-flex align-items-center gap-2">
                                    <span className="badge-dot pulse-primary"></span>
                                    <span className="text-white" style={{ fontSize: '11px' }}>Real-Time Data Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. What is Factory Production Monitoring? */}
            <section id="understanding" className="definition-section pt-100 pb-100 bg-dark-alt">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay="100ms">
                            <div className="definition-img-wrapper position-relative">
                                <div className="glow-shape-1"></div>
                                <div className="glow-shape-2"></div>
                                {/* MES Data Flow SVG */}
                                <svg viewBox="0 0 480 380" xmlns="http://www.w3.org/2000/svg" className="w-100 rounded-5">
                                    <defs>
                                        <linearGradient id="cardBg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#0f172a" /><stop offset="100%" stopColor="#1a2745" /></linearGradient>
                                        <radialGradient id="pulse2" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" /><stop offset="100%" stopColor="transparent" /></radialGradient>
                                        <filter id="g2"><feGaussianBlur stdDeviation="4" /></filter>
                                    </defs>
                                    <rect width="480" height="380" fill="url(#cardBg2)" rx="16" />
                                    {/* Central MES hub */}
                                    <circle cx="240" cy="180" r="52" fill="#1e2d54" stroke="#6366f1" strokeWidth="1.5" />
                                    <circle cx="240" cy="180" r="40" fill="#1a2745" stroke="#6366f1" strokeWidth="0.8" strokeOpacity="0.5" />
                                    <circle cx="240" cy="180" r="60" fill="url(#pulse2)" filter="url(#g2)" />
                                    <text x="240" y="174" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">MICRAFT</text>
                                    <text x="240" y="188" fill="#6366f1" fontSize="9" textAnchor="middle" fontFamily="sans-serif">MES HUB</text>
                                    {/* Satellite nodes */}
                                    {[
                                        { cx: 240, cy: 60, label: "Production", sub: "Orders", icon: "📋", clr: "#6366f1" },
                                        { cx: 400, cy: 140, label: "Machine", sub: "Monitoring", icon: "⚙️", clr: "#06b6d4" },
                                        { cx: 380, cy: 290, label: "Quality", sub: "Inspection", icon: "🔍", clr: "#10b981" },
                                        { cx: 100, cy: 290, label: "Dispatch", sub: "Tracking", icon: "🚛", clr: "#f59e0b" },
                                        { cx: 80, cy: 140, label: "Shop Floor", sub: "Visibility", icon: "👁️", clr: "#8b5cf6" }
                                    ].map((n, i) => (
                                        <g key={i}>
                                            {/* Connection line */}
                                            <line x1="240" y1="180" x2={n.cx} y2={n.cy} stroke={n.clr} strokeWidth="1" strokeDasharray="6 3" strokeOpacity="0.5" />
                                            {/* Node circle */}
                                            <circle cx={n.cx} cy={n.cy} r="36" fill="#1e2d45" stroke={n.clr} strokeWidth="1.5" />
                                            <circle cx={n.cx} cy={n.cy} r="28" fill="#111827" stroke={n.clr} strokeWidth="0.5" strokeOpacity="0.4" />
                                            <text x={n.cx} y={n.cy - 6} fill={n.clr} fontSize="14" textAnchor="middle">{n.icon}</text>
                                            <text x={n.cx} y={n.cy + 8} fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">{n.label}</text>
                                            <text x={n.cx} y={n.cy + 18} fill="#94a3b8" fontSize="7" textAnchor="middle" fontFamily="sans-serif">{n.sub}</text>
                                            {/* Animated dot on line */}
                                            <circle cx={n.cx} cy={n.cy} r="3" fill={n.clr} opacity="0.8" filter="url(#g2)" />
                                        </g>
                                    ))}
                                    {/* Central icon */}
                                    <text x="240" y="168" fontSize="18" textAnchor="middle">🏭</text>
                                    {/* Status strip */}
                                    <rect x="16" y="342" width="448" height="26" rx="6" fill="#1e2d45" />
                                    <circle cx="32" cy="355" r="5" fill="#10b981" filter="url(#g2)" />
                                    <text x="44" y="359" fill="#10b981" fontSize="9" fontFamily="monospace">All systems connected</text>
                                    <text x="340" y="359" fill="#64748b" fontSize="9" fontFamily="monospace">Last sync: 0.3s ago</text>
                                </svg>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1 wow fadeInLeft" data-wow-delay="200ms">
                            <div className="section-title text-left mb-4">
                                <span className="section-title__tagline tagline-glow">Core Manufacturing Concept</span>
                                <h2 className="section-title__title text-white">Understanding <span>Factory Production Monitoring</span></h2>
                            </div>

                            <div className="text-white-50">
                                <p className="mb-4 text-highlight-premium">
                                    Factory production monitoring refers to the process of tracking manufacturing operations in real time using digital monitoring systems.
                                </p>

                                <div className="tracking-grid-premium mb-4">
                                    <h4 className="text-white mb-3 text-h4-premium">Production monitoring systems allow factories to track:</h4>
                                    <div className="row g-3">
                                        {[
                                            { t: 'Machine Activity', i: 'cogs' },
                                            { t: 'Work Order Progress', i: 'clipboard-list' },
                                            { t: 'Production Output', i: 'box' },
                                            { t: 'Operator Activity', i: 'users-cog' },
                                            { t: 'Inspection Results', i: 'microscope' },
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
                                    These systems provide managers with live visibility of production operations, enabling faster operational decisions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Why Production Monitoring is Important */}
            <section className="why-need-monitoring pt-100 pb-100 bg-dark-depth">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <h2 className="section-title__title text-white">Why Modern Factories Need <span>Production Monitoring Systems</span></h2>
                        <p className="text-white-50 mt-3 max-w-2xl mx-auto">
                            Manufacturing companies operate in highly competitive environments where efficiency and delivery reliability are critical.
                        </p>
                    </div>
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="challenge-card p-5 rounded-4 h-100 card-challenge">
                                <h3 className="text-white mb-4"><i className="fas fa-exclamation-triangle me-2 text-danger"></i> The Risks of Unmonitored Floors</h3>
                                <p className="text-white-50 mb-4">Without production monitoring systems, factories often face challenges such as:</p>
                                <ul className="list-unstyled d-flex flex-column gap-3 text-white-50">
                                    <li className="d-flex align-items-start gap-2"><i className="fas fa-times-circle mt-1 text-danger"></i> <span>Delayed production updates and manual reporting</span></li>
                                    <li className="d-flex align-items-start gap-2"><i className="fas fa-times-circle mt-1 text-danger"></i> <span>Lack of shop floor visibility</span></li>
                                    <li className="d-flex align-items-start gap-2"><i className="fas fa-times-circle mt-1 text-danger"></i> <span>Difficulty identifying production bottlenecks</span></li>
                                    <li className="d-flex align-items-start gap-2"><i className="fas fa-times-circle mt-1 text-danger"></i> <span>Poor machine utilization insights</span></li>
                                    <li className="d-flex align-items-start gap-2"><i className="fas fa-times-circle mt-1 text-danger"></i> <span>Inaccurate production reporting</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="solution-card p-5 rounded-4 h-100 card-solution">
                                <h3 className="text-white mb-4"><i className="fas fa-chart-line me-2 text-success"></i> The Digital Solution</h3>
                                <p className="text-white mb-4 text-medium">Production monitoring systems provide real-time operational insights that help factories improve efficiency and decision-making.</p>
                                <div className="rounded-4 overflow-hidden mt-4">
                                    {/* Metrics board SVG */}
                                    <svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" className="w-100 rounded-4">
                                        <defs>
                                            <linearGradient id="mbg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#0f172a" /><stop offset="100%" stopColor="#1a2235" /></linearGradient>
                                        </defs>
                                        <rect width="420" height="200" fill="url(#mbg)" rx="10" />
                                        {/* Bar chart */}
                                        {[
                                            { x: 30, h: 90, lbl: "Mon", clr: "#6366f1" },
                                            { x: 80, h: 110, lbl: "Tue", clr: "#6366f1" },
                                            { x: 130, h: 75, lbl: "Wed", clr: "#f59e0b" },
                                            { x: 180, h: 130, lbl: "Thu", clr: "#6366f1" },
                                            { x: 230, h: 100, lbl: "Fri", clr: "#10b981" },
                                            { x: 280, h: 120, lbl: "Sat", clr: "#10b981" }
                                        ].map((b, i) => (
                                            <g key={i}>
                                                <rect x={b.x} y={162 - b.h} width="32" height={b.h} rx="4" fill={b.clr} opacity="0.85" />
                                                <text x={b.x + 16} y="178" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="mono">{b.lbl}</text>
                                                <text x={b.x + 16} y={158 - b.h} textAnchor="middle" fill="#fff" fontSize="8" fontFamily="mono">{b.h + 10}</text>
                                            </g>
                                        ))}
                                        {/* Right KPIs */}
                                        <rect x="340" y="20" width="68" height="44" rx="6" fill="#1e2d45" stroke="#10b981" strokeWidth="0.8" />
                                        <text x="374" y="38" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="sans-serif">OEE</text>
                                        <text x="374" y="56" fill="#10b981" fontSize="16" fontWeight="bold" textAnchor="middle">87%</text>
                                        <rect x="340" y="74" width="68" height="44" rx="6" fill="#1e2d45" stroke="#06b6d4" strokeWidth="0.8" />
                                        <text x="374" y="92" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="sans-serif">QUALITY</text>
                                        <text x="374" y="110" fill="#06b6d4" fontSize="16" fontWeight="bold" textAnchor="middle">98%</text>
                                        <rect x="340" y="128" width="68" height="44" rx="6" fill="#1e2d45" stroke="#f59e0b" strokeWidth="0.8" />
                                        <text x="374" y="146" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="sans-serif">DWNTIME</text>
                                        <text x="374" y="164" fill="#f59e0b" fontSize="16" fontWeight="bold" textAnchor="middle">24m</text>
                                        <text x="16" y="18" fill="#6366f1" fontSize="10" fontFamily="sans-serif" fontWeight="bold">Daily Output Trend</text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Key Components of a Production Monitoring System */}
            <section className="key-components pt-100 pb-100 bg-dark-alt">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <h2 className="section-title__title text-white">Core Elements of <span>Modern Production Monitoring</span></h2>
                        <p className="text-white-50 mt-3">A modern factory monitoring system typically includes several key components.</p>
                    </div>
                    <div className="row g-4">
                        {[
                            { title: "Production Tracking Systems", desc: "Track work order progress across production stages.", link: "/solutions/production-tracking-software", icon: "tasks" },
                            { title: "Shop Floor Visibility Systems", desc: "Provide live monitoring of shop floor activities.", link: "/solutions/shop-floor-visibility-software", icon: "eye" },
                            { title: "Machine Utilization Monitoring", desc: "Track machine productivity and idle time.", link: "/solutions/machine-utilization-tracking", icon: "industry" },
                            { title: "Manufacturing Process Tracking", desc: "Monitor multi-stage production workflows.", link: "/solutions/manufacturing-process-tracking", icon: "project-diagram" },
                            { title: "Quality Inspection Monitoring", desc: "Track inspection results and defect trends.", link: "/solutions/quality-inspection-tracking", icon: "check-double" },
                            { title: "Production Performance Dashboards", desc: "Visualize factory performance metrics.", link: "/solutions/digital-production-dashboard", icon: "chart-pie" }
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

            {/* 5. How Real-Time Production Monitoring Works */}
            <section className="how-it-works pt-100 pb-100 bg-dark-surface">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <h2 className="section-title__title text-white">How Real-Time <span>Factory Monitoring Systems</span> Work</h2>
                        <p className="text-white-50 mt-3 max-w-2xl mx-auto">
                            Production monitoring systems capture production data directly from shop floor activities.
                        </p>
                    </div>
                    <div className="workflow-flow-container wow fadeInUp" data-wow-delay="200ms">
                        <div className="row g-4 justify-content-center">
                            {[
                                { t: "Order Creation", d: "Production orders are created in the system", i: "file-invoice-dollar" },
                                { t: "Live Execution", d: "Operators update work order progress", i: "tablet-alt" },
                                { t: "Machine Connect", d: "Machine activity is recorded", i: "microchip" },
                                { t: "Digital Quality", d: "Inspection results are logged", i: "clipboard-check" },
                                { t: "Live Dashboards", d: "Production dashboards display real-time data", i: "chart-line" }
                            ].map((step, idx) => (
                                <div key={idx} className="col-lg-2-5 col-md-4 col-sm-6 text-center workflow-node-col">
                                    <div className="workflow-node-inner">
                                        <div className={`workflow-icon-box node-color-${idx % 2 === 0 ? 'primary' : 'accent'}`}>
                                            <i className={`fas fa-${step.i}`}></i>
                                            {/* Connector arrow for next items except the last one */}
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
                                This workflow enables factory managers to monitor production operations continuously.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Benefits of Production Monitoring Systems */}
            <section className="benefits-section pt-100 pb-100 position-relative overflow-hidden mes-benefits-bg">
                <div className="overlay-dark"></div>
                <div className="container relative-z2">
                    <div className="section-title text-center mb-60">
                        <h2 className="section-title__title text-white">Operational Benefits of <span>Factory Monitoring</span></h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { title: "Real-Time Production Visibility", desc: "Managers can track factory performance instantly." },
                            { title: "Faster Decision Making", desc: "Production issues can be identified and resolved quickly." },
                            { title: "Improved Machine Utilization", desc: "Factories can optimize machine productivity." },
                            { title: "Reduced Production Bottlenecks", desc: "Workflow inefficiencies become visible." },
                            { title: "Improved Production Planning", desc: "Reliable production data supports better planning." },
                            { title: "Accurate Manufacturing Reports", desc: "Factories gain reliable operational insights." }
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

            {/* 7. Industries That Use Production Monitoring */}
            <section className="industries-marquee-section pt-100 pb-100 bg-dark-depth overflow-hidden">
                <div className="container-fluid p-0">
                    <div className="section-title text-center mb-50">
                        <h2 className="section-title__title text-white h3">Manufacturing Industries Using <span>Production Monitoring Systems</span></h2>
                        <p className="text-white-50 mt-2">These industries benefit significantly from real-time production visibility.</p>
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

            {/* 8. Challenges in Implementing Production Monitoring */}
            <section className="challenges-section pt-100 pb-100 bg-dark-alt">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="position-relative">
                                {/* MES Challenges Timeline SVG */}
                                <svg viewBox="0 0 440 380" xmlns="http://www.w3.org/2000/svg" className="w-100 rounded-5">
                                    <defs>
                                        <linearGradient id="chBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#0f172a" /><stop offset="100%" stopColor="#1e293b" /></linearGradient>
                                        <filter id="gch"><feGaussianBlur stdDeviation="3" /></filter>
                                    </defs>
                                    <rect width="440" height="380" fill="url(#chBg)" rx="16" />
                                    {/* Title */}
                                    <text x="22" y="36" fill="#e2e8f0" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Implementation Readiness Check</text>
                                    {/* Vertical timeline line */}
                                    <line x1="60" y1="60" x2="60" y2="340" stroke="#334155" strokeWidth="2" strokeDasharray="6 3" />
                                    {[
                                        { y: 70, done: true, lbl: "Process Mapping", sub: "Workflow documented", clr: "#10b981" },
                                        { y: 130, done: true, lbl: "Data Capture Points", sub: "12 stations identified", clr: "#10b981" },
                                        { y: 190, done: false, lbl: "System Integration", sub: "ERP sync in progress", clr: "#f59e0b" },
                                        { y: 250, done: false, lbl: "Team Training", sub: "Scheduled: Week 3", clr: "#6366f1" },
                                        { y: 310, done: false, lbl: "Go-Live Deployment", sub: "Target: 30 days", clr: "#6366f1" }
                                    ].map((item, i) => (
                                        <g key={i}>
                                            {/* dot */}
                                            <circle cx="60" cy={item.y} r="10" fill={item.clr} filter="url(#gch)" />
                                            <circle cx="60" cy={item.y} r="6" fill={item.done ? item.clr : "#1e293b"} stroke={item.clr} strokeWidth="1.5" />
                                            {item.done && <text x="57" y={item.y + 4} fill="#fff" fontSize="8">✓</text>}
                                            {/* Card */}
                                            <rect x="84" y={item.y - 28} width="332" height="52" rx="8" fill={item.done ? "#1e3a2a" : "#1e2d45"} stroke={item.clr} strokeWidth="0.8" strokeOpacity="0.4" />
                                            <text x="100" y={item.y - 8} fill="#f1f5f9" fontSize="11" fontWeight="bold" fontFamily="sans-serif">{item.lbl}</text>
                                            <text x="100" y={item.y + 10} fill="#94a3b8" fontSize="9" fontFamily="sans-serif">{item.sub}</text>
                                            {/* Status pill */}
                                            <rect x="330" y={item.y - 22} width="74" height="18" rx="9" fill={item.clr} opacity="0.15" />
                                            <text x="367" y={item.y - 9} fill={item.clr} fontSize="8" fontFamily="monospace" textAnchor="middle">{item.done ? "COMPLETE" : "PENDING"}</text>
                                        </g>
                                    ))}
                                </svg>
                                {/* Floating alert */}
                                <div className="perspective-floating-card d-none d-md-flex p-3 bg-glass-dark-heavy shadow-2xl rounded-4 border border-accent border-opacity-20 position-absolute align-items-center gap-3" style={{ bottom: '-16px', right: '0px' }}>
                                    <i className="fas fa-exclamation-triangle text-warning fa-lg"></i>
                                    <div>
                                        <h5 className="text-white mb-0" style={{ fontSize: '12px' }}>Integration Required</h5>
                                        <p className="text-white-50 mb-0" style={{ fontSize: '10px' }}>ERP + MES sync</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="section-title text-left mb-4">
                                <h2 className="section-title__title text-white">Common Challenges in <span>Production Monitoring Implementation</span></h2>
                            </div>
                            <p className="text-white-50 mb-4">Manufacturers often encounter challenges such as:</p>
                            <div className="signs-list d-flex flex-column gap-3 mb-4">
                                {[
                                    "Resistance to adopting digital systems",
                                    "Lack of production data visibility",
                                    "Difficulty selecting suitable monitoring software",
                                    "Integration with existing ERP systems"
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

            {/* 9 & 10. Role of MES & Micraft MES - UNIQUE REDESIGN: THE DIGITAL BRIDGE */}
            <section className="mes-digital-bridge pt-100 pb-100 bg-dark-depth overflow-hidden position-relative">
                <div className="glow-shape-1" style={{ top: '20%', left: '10%', opacity: 0.2 }}></div>
                <div className="glow-shape-2" style={{ bottom: '20%', right: '10%', opacity: 0.2 }}></div>

                <div className="container position-relative z-2">
                    <div className="row justify-content-center mb-80">
                        <div className="col-lg-8 text-center wow fadeInUp">
                            <span className="tagline-glow">Digital Control Hub</span>
                            <h2 className="section-title__title text-white">The Digital Bridge: How MES <span>Powers Monitoring</span></h2>
                            <p className="text-white-50 mt-4 text-medium mx-auto" style={{ maxWidth: '700px' }}>
                                Manufacturing Execution Systems act as the high-speed data artery of your factory,
                                instantly translating raw shop floor activity into structured management intelligence.
                            </p>
                        </div>
                    </div>

                    <div className="row g-0 align-items-center position-relative">
                        {/* Left Side: Data Sources */}
                        <div className="col-lg-4 px-3 wow fadeInLeft">
                            <div className="d-flex flex-column gap-4">
                                {[
                                    { t: "Machine Sensors", d: "IOT & PLC Integration", i: "microchip", c: "accent" },
                                    { t: "Operator Input", d: "Mobile & Tablet Portals", i: "tablet-alt", c: "primary" },
                                    { t: "Quality Checks", d: "Digital Inspection Points", i: "check-double", c: "accent" }
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

                        {/* Right Side: Monitoring Output */}
                        <div className="col-lg-4 px-3 wow fadeInRight">
                            <div className="d-flex flex-column gap-4">
                                {[
                                    { t: "Live Dashboards", d: "Instant Performance Visibility", i: "chart-line", c: "primary" },
                                    { t: "OEE Tracking", d: "Automatic Efficiency Scoring", i: "percentage", c: "accent" },
                                    { t: "Alert System", d: "Predictive Downtime Warnings", i: "bell", c: "primary" }
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
                                            <h3 className="text-white mb-3 h4 fw-bold">Why Micraft MES is Uniquely Efficient</h3>
                                            <p className="text-white opacity-75 mb-0 pe-lg-5">
                                                Our architecture doesn&apos;t just store data—it activates it. By removing the lag between the shop floor and
                                                the head office, we enable a proactive manufacturing culture where bottlenecks are solved in minutes, not days.
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

            {/* 11. Future of Production Monitoring */}
            <section className="future-section pt-100 pb-100 bg-dark-depth">
                <div className="container">
                    <div className="row flex-row-reverse align-items-center g-5">
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="100ms">
                            <div className="dual-image-perspective position-relative">
                                <div className="perspective-main rounded-5 overflow-hidden shadow-2xl border border-secondary border-opacity-20 p-2 bg-dark" style={{ height: '400px' }}>
                                    <Image
                                        src="/assets/images/backgrounds/EndtoEndVisibility.jpg"
                                        alt="Future of Factory Production Monitoring"
                                        width={600}
                                        height={400}
                                        className="img-fluid rounded-4 img-cover h-100"
                                    />
                                </div>
                                <div className="perspective-floating-card d-none d-md-block p-3 bg-glass-dark-heavy shadow-2xl rounded-4 border border-secondary border-opacity-20 position-absolute" style={{ top: '-30px', left: '-30px', bottom: 'auto', background: 'rgba(96, 101, 212, 0.9)' }}>
                                    <div className="d-flex align-items-center gap-3">
                                        <i className="fas fa-robot text-white fa-2x"></i>
                                        <h5 className="text-white mb-0 small">AI-Powered Insights</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="200ms">
                            <div className="section-title text-left mb-4">
                                <h2 className="section-title__title text-white">The Future of <span>Digital Production Monitoring</span></h2>
                            </div>
                            <p className="text-white-50 mb-4">The future of manufacturing monitoring will include:</p>

                            <div className="row g-4 mb-4">
                                {[
                                    { t: "Real-Time Factory Analytics", i: "chart-bar" },
                                    { t: "Connected Manufacturing Systems", i: "network-wired" },
                                    { t: "Automated Production Reporting", i: "file-alt" },
                                    { t: "AI-Powered Manufacturing Insights", i: "brain" }
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
                                Factories adopting modern monitoring systems will achieve higher productivity and operational efficiency.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 12. Call to Action */}
            <FinalCTA
                title={<>Gain Real-Time Visibility of Your <br /> <span>Factory Operations</span></>}
                text="Micraft MES helps manufacturing companies monitor production operations, improve efficiency, and optimize factory performance. Schedule a Live Demo to see how Micraft MES transforms factory production monitoring."
                buttonLabel1="Book Your Demo"
            />
        </Layout>
    )
}
