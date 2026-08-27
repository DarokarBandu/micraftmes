"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Counter() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const [activeStage, setActiveStage] = useState(1);

    const stages = [
        {
            step: "01",
            code: "MAPPING",
            stageLabel: "STAGE 01",
            title: "Real-Time Production Visibility",
            desc: "Track machine status, work orders, and production output as it happens on the shop floor.",
            icon: "icon-clock",
            tag: "CYCLE_TIME: 3.2s",
            telemetry: "STATUS: OPTIMAL",
            accent: "#7366CA",
            staggerClass: "stagger-1"
        },
        {
            step: "02",
            code: "DIAGNOSTICS",
            stageLabel: "STAGE 02",
            title: "Downtime Tracking & Analysis",
            desc: "Capture downtime reasons at the source and identify production bottlenecks faster.",
            icon: "icon-strategy",
            tag: "OEE_EFFICIENCY: 94.8%",
            telemetry: "DIAGNOSTICS: LIVE",
            accent: "#7366CA",
            staggerClass: "stagger-2"
        },
        {
            step: "03",
            code: "VERIFICATION",
            stageLabel: "STAGE 03",
            title: "Inspection, Packing & Dispatch",
            desc: "Maintain clear visibility across quality checks, packing progress, and dispatch readiness.",
            icon: "icon-quality",
            tag: "QA_ACCURACY: 99.8%",
            telemetry: "GATE_CHECKS: PASS",
            accent: "#7366CA",
            staggerClass: "stagger-3"
        },
        {
            step: "04",
            code: "DEPLOYMENT",
            stageLabel: "STAGE 04",
            title: "Fast MES Deployment",
            desc: "Deploy a practical Manufacturing Execution System in 30–60 days without disrupting operations.",
            icon: "icon-folder",
            tag: "GO_LIVE: 30-60 DAYS",
            telemetry: "INTEGRATION: ZERO_LAG",
            accent: "#7366CA",
            staggerClass: "stagger-4"
        }
    ];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!triggerRef.current || !trackRef.current || !sectionRef.current) return;

        const mm = gsap.matchMedia();

        mm.add("(min-width: 992px)", () => {
            const track = trackRef.current;
            if (!track || !triggerRef.current) return;

            const getScrollAmount = () => {
                const trackWidth = track.scrollWidth;
                const windowWidth = window.innerWidth;
                return -(trackWidth - windowWidth + 120);
            };

            const scrollTween = gsap.to(track, {
                x: getScrollAmount,
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: () => `+=${Math.max(1400, track.scrollWidth)}`,
                    scrub: 0.8,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    onUpdate: (self) => {
                        if (progressBarRef.current) {
                            progressBarRef.current.style.width = `${Math.min(100, Math.max(0, self.progress * 100))}%`;
                        }
                        const current = Math.min(4, Math.max(1, Math.ceil(self.progress * 4)));
                        setActiveStage(current);
                    }
                }
            });

            return () => {
                scrollTween.kill();
            };
        });

        // Mobile & Tablet: Native Smooth Touch Scroll with dynamic active indicators
        mm.add("(max-width: 991px)", () => {
            const trackWrapper = triggerRef.current?.querySelector('.robotics-track-wrapper');
            if (!trackWrapper) return;

            const handleMobileScroll = () => {
                const scrollLeft = trackWrapper.scrollLeft;
                const maxScroll = trackWrapper.scrollWidth - trackWrapper.clientWidth;
                if (maxScroll > 0) {
                    const progress = scrollLeft / maxScroll;
                    if (progressBarRef.current) {
                        progressBarRef.current.style.width = `${Math.min(100, Math.max(0, progress * 100))}%`;
                    }
                    const current = Math.min(4, Math.max(1, Math.ceil(progress * 4)));
                    setActiveStage(current);
                }
            };

            trackWrapper.addEventListener('scroll', handleMobileScroll, { passive: true });
            return () => {
                trackWrapper.removeEventListener('scroll', handleMobileScroll);
            };
        });

        return () => mm.revert();
    }, []);

    return (
        <section ref={sectionRef} className="robotics-flow-container position-relative">
            {/* ScrollTrigger Pinned Target */}
            <div ref={triggerRef} className="robotics-flow-viewport d-flex flex-column justify-content-between">

                {/* Top Section Header with Robotics Telemetry HUD */}
                <div className="container position-relative z-index-3 pt-4 pt-lg-5">
                    <div className="row align-items-center justify-content-between g-3">
                        <div className="col-lg-7">
                            <div className="section-title text-start mb-0">
                                <div className="section-title__tagline-box justify-content-start mb-2">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline">QUICK CREDIBILITY</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <h2 className="section-title__title mt-1 mb-0">
                                    Built for Practical <span>Manufacturing Execution</span>
                                </h2>
                            </div>
                        </div>

                        {/* Robotics Telemetry HUD Meter */}
                        <div className="col-lg-5 col-xl-4 text-lg-end">
                            <div className="robotics-hud-panel p-2 px-3 rounded-3 d-inline-flex flex-column align-items-lg-end">
                                <div className="d-flex align-items-center gap-2 mb-1">
                                    <span className="hud-pulse-dot"></span>
                                    <span className="hud-telemetry-text">
                                        EXECUTION PIPELINE: <strong className="text-accent-primary">STAGE 0{activeStage} / 04</strong>
                                    </span>
                                </div>
                                {/* HUD Laser Progress Tracker */}
                                <div className="hud-progress-track">
                                    <div ref={progressBarRef} className="hud-progress-fill"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle: Horizontally Moving Process Track */}
                <div className="robotics-track-wrapper flex-grow-1 d-flex align-items-center position-relative z-index-3">
                    <div ref={trackRef} className="robotics-flow-track d-flex align-items-center">
                        {stages.map((stage, idx) => (
                            <React.Fragment key={stage.step}>
                                {/* Process Stage Robotic Card */}
                                <div className={`robotics-stage-card ${stage.staggerClass} ${activeStage >= idx + 1 ? 'stage-active' : ''}`}>
                                    <div className="card-glass-body">
                                        {/* Cyber Corner Accents */}
                                        <div className="hud-bracket top-left"></div>
                                        <div className="hud-bracket top-right"></div>
                                        <div className="hud-bracket bottom-left"></div>
                                        <div className="hud-bracket bottom-right"></div>

                                        {/* Stage Top Bar */}
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <div className="stage-chip">
                                                <span className="chip-laser-dot"></span>
                                                <span>{stage.stageLabel}</span>
                                            </div>
                                            <span className="stage-code-mono">{stage.code}</span>
                                        </div>

                                        {/* Icon Wrap */}
                                        <div className="stage-icon-box mb-3">
                                            <span className={stage.icon}></span>
                                            <div className="icon-pulse-ring"></div>
                                        </div>

                                        {/* Content */}
                                        <h4 className="stage-card-title">{stage.title}</h4>
                                        <p className="stage-card-desc">{stage.desc}</p>

                                        {/* Stage Bottom Telemetry */}
                                        <div className="stage-card-footer d-flex align-items-center justify-content-between">
                                            <span className="footer-tag-badge">{stage.tag}</span>
                                            <span className="footer-telemetry-pill">{stage.telemetry}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* High-Tech Laser Flow Connector */}
                                {idx < stages.length - 1 && (
                                    <div className="robotics-connector" aria-hidden="true">
                                        <div className="connector-laser-line">
                                            <div className="laser-pulse-particle"></div>
                                        </div>
                                        <div className="connector-core-node">
                                            <span className="core-node-dot"></span>
                                            <div className="node-radar-sweep"></div>
                                        </div>
                                        <div className="connector-laser-line">
                                            <div className="laser-pulse-particle delayed"></div>
                                        </div>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

            </div>

            <style jsx>{`
                /* ─── Pinned Viewport Container ─── */
                .robotics-flow-container {
                    position: relative;
                    width: 100%;
                    background-color: var(--bg-secondary, #F8FAFC);
                    overflow: hidden;
                    border-top: 1px solid rgba(115, 102, 202, 0.1);
                    border-bottom: 1px solid rgba(115, 102, 202, 0.1);
                }
                :global([data-theme="dark"]) .robotics-flow-container {
                    background-color: #060B14 !important;
                    border-top-color: rgba(255, 255, 255, 0.06);
                    border-bottom-color: rgba(255, 255, 255, 0.06);
                }

                .robotics-flow-viewport {
                    width: 100%;
                    height: 100vh;
                    min-height: 650px;
                    max-height: 900px;
                    position: relative;
                    overflow: hidden;
                }

                .z-index-3 { position: relative; z-index: 3; }

                /* ─── Telemetry HUD Tracker ─── */
                .robotics-hud-panel {
                    background: #FFFFFF;
                    border: 1px solid rgba(115, 102, 202, 0.2);
                    box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05);
                }
                :global([data-theme="dark"]) .robotics-hud-panel {
                    background: #0E1A2C;
                    border-color: rgba(255, 255, 255, 0.1);
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
                }
                .hud-telemetry-text {
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 1px;
                    font-family: monospace;
                    color: var(--text-secondary, #475569);
                }
                :global([data-theme="dark"]) .hud-telemetry-text {
                    color: #C5C8CD;
                }
                .hud-pulse-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #10B981;
                    box-shadow: 0 0 8px #10B981;
                    animation: pulse-hud 2s infinite ease-in-out;
                }
                @keyframes pulse-hud {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.4); opacity: 0.6; }
                }

                .hud-progress-track {
                    width: 180px;
                    height: 5px;
                    background: rgba(115, 102, 202, 0.15);
                    border-radius: 10px;
                    overflow: hidden;
                    position: relative;
                }
                :global([data-theme="dark"]) .hud-progress-track {
                    background: rgba(255, 255, 255, 0.1);
                }
                .hud-progress-fill {
                    height: 100%;
                    width: 25%;
                    background: linear-gradient(90deg, #7366CA, #FFD25D);
                    border-radius: 10px;
                    transition: width 0.15s ease-out;
                    box-shadow: 0 0 10px rgba(115, 102, 202, 0.6);
                }

                /* ─── Moving Process Flow Track ─── */
                .robotics-track-wrapper {
                    width: 100%;
                    overflow: visible;
                    padding: 20px 0;
                }
                .robotics-flow-track {
                    padding-left: 8vw;
                    padding-right: 15vw;
                    width: max-content;
                    will-change: transform;
                }

                /* ─── Stage Cards ─── */
                .robotics-stage-card {
                    width: 350px;
                    min-width: 350px;
                    flex-shrink: 0;
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                }

                /* Staggered Heights */
                .stagger-1 { transform: translateY(16px); }
                .stagger-2 { transform: translateY(-16px); }
                .stagger-3 { transform: translateY(12px); }
                .stagger-4 { transform: translateY(-12px); }

                .card-glass-body {
                    background: #FFFFFF;
                    border: 1px solid rgba(115, 102, 202, 0.18);
                    border-radius: 22px;
                    padding: 28px 24px;
                    box-shadow: 0 12px 35px rgba(15, 23, 42, 0.08);
                    position: relative;
                    transition: all 0.35s ease;
                }
                :global([data-theme="dark"]) .card-glass-body {
                    background: #0E1A2C;
                    border-color: rgba(255, 255, 255, 0.1);
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
                }

                .stage-active .card-glass-body {
                    border-color: rgba(115, 102, 202, 0.5);
                    box-shadow: 0 18px 45px rgba(115, 102, 202, 0.18);
                }
                :global([data-theme="dark"]) .stage-active .card-glass-body {
                    border-color: rgba(115, 102, 202, 0.6);
                    box-shadow: 0 20px 50px rgba(115, 102, 202, 0.3);
                }

                /* Robotics HUD Corner Brackets */
                .hud-bracket {
                    position: absolute;
                    width: 8px;
                    height: 8px;
                    border-color: #7366CA;
                    border-style: solid;
                    opacity: 0.4;
                    transition: all 0.3s ease;
                }
                .stage-active .hud-bracket {
                    opacity: 1;
                    width: 12px;
                    height: 12px;
                }
                .hud-bracket.top-left { top: 8px; left: 8px; border-width: 2px 0 0 2px; }
                .hud-bracket.top-right { top: 8px; right: 8px; border-width: 2px 2px 0 0; }
                .hud-bracket.bottom-left { bottom: 8px; left: 8px; border-width: 0 0 2px 2px; }
                .hud-bracket.bottom-right { bottom: 8px; right: 8px; border-width: 0 2px 2px 0; }

                .stage-chip {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 4px 12px;
                    border-radius: 20px;
                    background: rgba(115, 102, 202, 0.1);
                    color: #7366CA;
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 1px;
                    font-family: monospace;
                }
                :global([data-theme="dark"]) .stage-chip {
                    background: rgba(115, 102, 202, 0.2);
                    color: #A78BFA;
                }
                .chip-laser-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: #7366CA;
                }

                .stage-code-mono {
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: 1.5px;
                    color: rgba(115, 102, 202, 0.5);
                    font-family: monospace;
                }
                :global([data-theme="dark"]) .stage-code-mono {
                    color: rgba(255, 255, 255, 0.3);
                }

                .stage-icon-box {
                    width: 60px;
                    height: 60px;
                    border-radius: 16px;
                    background: rgba(115, 102, 202, 0.12);
                    color: #7366CA;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 26px;
                    position: relative;
                    transition: all 0.3s ease;
                }
                .stage-active .stage-icon-box {
                    background: #7366CA;
                    color: #FFFFFF;
                    box-shadow: 0 8px 25px rgba(115, 102, 202, 0.4);
                }

                .stage-card-title {
                    font-size: 18px;
                    font-weight: 700;
                    color: #0F172A;
                    margin-bottom: 8px;
                    line-height: 1.35;
                }
                :global([data-theme="dark"]) .stage-card-title {
                    color: #FFFFFF !important;
                }

                .stage-card-desc {
                    font-size: 13.5px;
                    line-height: 1.6;
                    color: #64748B;
                    margin-bottom: 18px;
                    min-height: 65px;
                }
                :global([data-theme="dark"]) .stage-card-desc {
                    color: #C5C8CD !important;
                }

                .stage-card-footer {
                    padding-top: 12px;
                    border-top: 1px dashed rgba(115, 102, 202, 0.15);
                }
                :global([data-theme="dark"]) .stage-card-footer {
                    border-top-color: rgba(255, 255, 255, 0.08);
                }
                .footer-tag-badge {
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                    font-family: monospace;
                    color: #7366CA;
                }
                :global([data-theme="dark"]) .footer-tag-badge {
                    color: #A78BFA;
                }
                .footer-telemetry-pill {
                    font-size: 10px;
                    font-weight: 600;
                    color: #10B981;
                    font-family: monospace;
                }

                /* ─── Robotics Connectors ─── */
                .robotics-connector {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 90px;
                    min-width: 90px;
                    padding: 0 6px;
                    flex-shrink: 0;
                    position: relative;
                }

                .connector-laser-line {
                    flex: 1;
                    height: 2px;
                    background: rgba(115, 102, 202, 0.25);
                    position: relative;
                    overflow: hidden;
                }
                :global([data-theme="dark"]) .connector-laser-line {
                    background: rgba(255, 255, 255, 0.12);
                }
                .laser-pulse-particle {
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, #7366CA, transparent);
                    animation: pulse-laser 2s infinite linear;
                }
                .laser-pulse-particle.delayed {
                    animation-delay: 1s;
                }
                @keyframes pulse-laser {
                    0% { left: -100%; }
                    100% { left: 100%; }
                }

                .connector-core-node {
                    width: 26px;
                    height: 26px;
                    border-radius: 50%;
                    background: #FFFFFF;
                    border: 2px solid #7366CA;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    box-shadow: 0 0 12px rgba(115, 102, 202, 0.4);
                    margin: 0 4px;
                    flex-shrink: 0;
                }
                :global([data-theme="dark"]) .connector-core-node {
                    background: #0B192C;
                    border-color: #A78BFA;
                    box-shadow: 0 0 15px rgba(167, 139, 250, 0.5);
                }

                .core-node-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #7366CA;
                }
                :global([data-theme="dark"]) .core-node-dot {
                    background: #A78BFA;
                }

                /* ─── Responsive Breakdown ─── */
                @media (max-width: 1199px) {
                    .robotics-stage-card {
                        width: 320px;
                        min-width: 320px;
                    }
                    .robotics-connector {
                        width: 60px;
                        min-width: 60px;
                    }
                }

                @media (max-width: 991px) {
                    .robotics-flow-viewport {
                        height: auto;
                        min-height: auto;
                        max-height: none;
                        padding: 50px 0 40px;
                    }
                    .robotics-track-wrapper {
                        overflow-x: auto;
                        overflow-y: hidden;
                        -webkit-overflow-scrolling: touch;
                        padding: 25px 0 20px;
                        scrollbar-width: none;
                        -ms-overflow-style: none;
                    }
                    .robotics-track-wrapper::-webkit-scrollbar {
                        display: none;
                    }
                    .robotics-flow-track {
                        padding-left: 20px;
                        padding-right: 35px;
                    }
                    .robotics-stage-card {
                        width: 285px;
                        min-width: 285px;
                        transform: none !important;
                    }
                    .card-glass-body {
                        padding: 22px 18px;
                        border-radius: 18px;
                    }
                    .stage-card-title {
                        font-size: 16px;
                        margin-bottom: 6px;
                    }
                    .stage-card-desc {
                        font-size: 13px;
                        min-height: 55px;
                        margin-bottom: 14px;
                    }
                    .robotics-connector {
                        width: 44px;
                        min-width: 44px;
                        padding: 0 2px;
                    }
                    .connector-core-node {
                        width: 20px;
                        height: 20px;
                    }
                    .core-node-dot {
                        width: 6px;
                        height: 6px;
                    }
                }

                @media (max-width: 575px) {
                    .robotics-flow-viewport {
                        padding: 45px 0 35px;
                    }
                    .robotics-stage-card {
                        width: 270px;
                        min-width: 270px;
                    }
                    .robotics-connector {
                        width: 36px;
                        min-width: 36px;
                    }
                    .robotics-flow-track {
                        padding-left: 15px;
                        padding-right: 30px;
                    }
                    .hud-progress-track {
                        width: 140px;
                    }
                }
            `}</style>
        </section>
    );
}
