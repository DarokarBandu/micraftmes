'use client';
import React from 'react';
import { CheckCircle2, Zap } from 'lucide-react';
import AnimatedTitle from "@/components/elements/AnimatedTitle";

const OperationalImprovements = () => {
    const improvements = [
        "Faster identification of production bottlenecks",
        "More accurate downtime reporting",
        "Reduced manual data collection",
        "Improved coordination between production and dispatch",
        "Better readiness for quality audits and compliance reviews"
    ];

    return (
        <section className="operational-improvements" id="results" style={{
            background: '#0B192C',
            padding: '60px 0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Subtle Texture */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: "url(/assets/images/backgrounds/ProductionandDowntime.jpg)",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.04,
                zIndex: 0,
                pointerEvents: 'none'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="row align-items-center g-5">
                    {/* Left Side: Content */}
                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="section-title mb-4">
                            <div className="section-title__tagline-box">
                                <div className="section-title__tagline-shape-1"></div>
                                <span className="section-title__tagline">BUSINESS IMPACT</span>
                                <div className="section-title__tagline-shape-2"></div>
                            </div>
                            <AnimatedTitle>
                                <h2 className="section-title__title text-white mt-3" style={{ fontSize: '36px', lineHeight: '1.2' }}>
                                    Operational Improvements <br /> <span>with Micraft MES</span>
                                </h2>
                            </AnimatedTitle>
                            <p className="mt-3" style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '16px', lineHeight: '1.6' }}>
                                Manufacturers implementing real-time shop-floor visibility typically achieve improvements such as:
                            </p>
                        </div>

                        <div className="impact-callout p-3 d-flex align-items-center gap-3" style={{
                            background: 'rgba(250, 86, 116, 0.1)',
                            borderLeft: '4px solid #FA5674',
                            borderRadius: '8px'
                        }}>
                            <Zap className="w-6 h-6" style={{ color: '#FA5674' }} />
                            <p className="mb-0 text-white" style={{ fontSize: '15px', fontWeight: '500' }}>
                                These improvements help manufacturing teams move from reactive decision-making to <span style={{ color: '#00D261' }}>proactive operational control</span>.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: List of Improvements */}
                    <div className="col-lg-6">
                        <div className="improvements-list d-flex flex-column gap-3 mt-lg-0 mt-4">
                            {improvements.map((item, index) => (
                                <div key={index} className="improvement-item-compact wow fadeInRight" data-wow-delay={`${index * 100}ms`}>
                                    <div className="icon-wrap">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <span className="improvement-text">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .improvement-item-compact {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    padding: 18px 25px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(10px);
                }
                .improvement-item-compact:hover {
                    background: rgba(255, 255, 255, 0.06);
                    border-color: #FA5674;
                    transform: translateX(10px);
                }
                .icon-wrap {
                    color: #FA5674;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .improvement-text {
                    color: #E2E8F0;
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 1.4;
                }
                @media (max-width: 991px) {
                    .improvement-item-compact:hover {
                        transform: translateY(-5px);
                    }
                }
            `}</style>
        </section>
    );
};

export default OperationalImprovements;
