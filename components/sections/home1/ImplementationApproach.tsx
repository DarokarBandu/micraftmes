'use client';
import React from 'react';
import AnimatedTitle from "@/components/elements/AnimatedTitle";

const ImplementationApproach = () => {
    const phases = [
        {
            title: "Phase 1 — Process Assessment",
            text: "Understand the production workflow and identify where real-time visibility is missing within your plant.",
            icon: "fas fa-microscope",
            color: "#5CB0E9",
            delay: "100ms"
        },
        {
            title: "Phase 2 — System Configuration",
            text: "Configure the Manufacturing Execution System to match production processes, work orders, and reporting needs.",
            icon: "fas fa-project-diagram",
            color: "#FFD25D",
            delay: "200ms"
        },
        {
            title: "Phase 3 — Deployment and Training",
            text: "Deploy the system on selected production lines and train teams to capture and use shop-floor data.",
            icon: "fas fa-users-cog",
            color: "#10B981",
            delay: "300ms"
        }
    ];

    return (
        <section className="process-two implementation-approach" id="implementation" style={{ padding: '90px 0', position: 'relative' }}>
            <div className="process-two__bg" style={{
                backgroundImage: "url(/assets/images/backgrounds/PracticalImplementation.jpg)",
                backgroundAttachment: 'fixed',
                opacity: 0.12
            }}></div>
            <div className="process-two__bg-overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(180deg, #0B192C 0%, #080A0E 100%)',
                zIndex: -1
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="section-title text-center sec-title-animation animation-style1 mb-5">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape-1"></div>
                        <span className="section-title__tagline text-uppercase" style={{ letterSpacing: '3px', fontWeight: '700' }}>IMPLEMENTATION APPROACH</span>
                        <div className="section-title__tagline-shape-2"></div>
                    </div>
                    <AnimatedTitle>
                        <h2 className="section-title__title title-animation text-white" style={{ fontSize: '38px', fontWeight: '800' }}>
                            A Practical Manufacturing Execution <br />
                            <span style={{ color: '#FFD25D' }}>System Implementation</span>
                        </h2>
                    </AnimatedTitle>
                    <p className="mt-3 text-white opacity-75 mx-auto" style={{ maxWidth: '850px', fontSize: '17px', lineHeight: '1.7' }}>
                        Traditional MES projects can take months to deploy. <strong style={{ color: '#FFD25D' }}>Micraft MES</strong> follows a focused and practical implementation approach specifically designed for mid-sized manufacturing plants.
                    </p>
                </div>

                <div className="row gy-4 position-relative">
                    {/* Visual Connector Line (hidden on mobile) */}
                    <div className="d-none d-lg-block position-absolute" style={{
                        top: '40%',
                        left: '10%',
                        right: '10%',
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, rgba(255,210,93,0.3), transparent)',
                        zIndex: 0
                    }}></div>

                    {phases.map((item, index) => (
                        <div key={index} className="col-xl-4 col-lg-4 col-md-12 wow fadeInUp" data-wow-delay={item.delay}>
                            <div className="implementation-card text-center" style={{
                                padding: '40px 30px',
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '24px',
                                backdropFilter: 'blur(15px)',
                                position: 'relative',
                                zIndex: 1,
                                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                height: '100%'
                            }}>
                                {/* Phase Number Icon */}
                                <div className="phase-badge mx-auto mb-4" style={{
                                    width: '70px',
                                    height: '70px',
                                    borderRadius: '20px',
                                    background: `linear-gradient(135deg, ${item.color}22, ${item.color}44)`,
                                    border: `1px solid ${item.color}55`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '24px',
                                    color: item.color,
                                    boxShadow: `0 10px 20px ${item.color}11`
                                }}>
                                    <i className={item.icon}></i>
                                </div>

                                <div className="phase-count-num" style={{
                                    fontSize: '12px',
                                    fontWeight: '900',
                                    color: item.color,
                                    letterSpacing: '2px',
                                    marginBottom: '10px',
                                    opacity: 0.8
                                }}>PHASE 0{index + 1}</div>

                                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#fff', marginBottom: '15px' }}>
                                    {item.title.split(' — ')[1]}
                                </h3>

                                <p style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                                    {item.text}
                                </p>

                                {/* Bottom Glow Accent */}
                                <div className="position-absolute bottom-0 start-50 translate-middle-x" style={{ width: '40%', height: '3px', background: item.color, borderRadius: '10px 10px 0 0', opacity: 0, transition: '0.4s opacity' }}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Timeline Callout — Enhanced */}
                <div className="text-center mt-5 pt-4 wow fadeInUp" data-wow-delay="500ms">
                    <div className="timeline-banner mx-auto" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '15px',
                        background: 'linear-gradient(90deg, rgba(255,210,93,0.05), rgba(255,210,93,0.15), rgba(255,210,93,0.05))',
                        border: '1px solid rgba(255,210,93,0.3)',
                        borderRadius: '100px',
                        padding: '15px 40px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                    }}>
                        <div className="pulse-icon" style={{ width: '10px', height: '10px', background: '#FFD25D', borderRadius: '50%', boxShadow: '0 0 10px #FFD25D' }}></div>
                        <p className="mb-0" style={{ color: '#fff', fontSize: '16px', fontWeight: '700', letterSpacing: '0.5px' }}>
                            Typical Implementation Timeline: <span style={{ color: '#FFD25D', fontSize: '20px', marginLeft: '5px' }}>30–60 Days</span>
                        </p>
                    </div>
                </div>

            </div>

            <style jsx>{`
                .implementation-card:hover {
                    background: rgba(255, 255, 255, 0.05) !important;
                    border-color: rgba(255, 255, 255, 0.2) !important;
                    transform: translateY(-12px) scale(1.02);
                    box-shadow: 0 30px 60px rgba(0,0,0,0.4);
                }
                .implementation-card:hover div:last-child {
                    opacity: 1 !important;
                }
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.5); opacity: 0.5; }
                    100% { transform: scale(1); opacity: 1; }
                }
                .pulse-icon {
                    animation: pulse 2s infinite ease-in-out;
                }
            `}</style>
        </section>
    );
};

export default ImplementationApproach;
