"use client";

export default function Counter() {
    return (
        <>
            <section className="counter-two pt-60 pb-40">
                <div className="counter-two__bg-shape" style={{ backgroundImage: "url(/assets/images/shapes/counter-two-bg-shape.png)" }}></div>
                <div className="container">
                    <div className="section-title text-center mb-40">
                        <span className="section-title__tagline" style={{ letterSpacing: '2px' }}> Quick Credibility </span>
                        <h2 className="text-white mt-2" style={{ fontSize: '32px', fontWeight: '700' }}>Built for Practical Manufacturing Execution</h2>
                    </div>
                    <div className="row g-4">

                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="counter-two__single glass-card">
                                <div className="counter-two__icon-wrap mb-4">
                                    <div className="counter-two__icon">
                                        <span className="icon-clock"></span>
                                    </div>
                                </div>
                                <div className="counter-two__content text-center">
                                    <h4 className="counter-title">Real-Time Production Visibility</h4>
                                    <p className="counter-text">Track machine status, work orders, and production output as it happens on the shop floor.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="counter-two__single glass-card">
                                <div className="counter-two__icon-wrap mb-4">
                                    <div className="counter-two__icon">
                                        <span className="icon-strategy"></span>
                                    </div>
                                </div>
                                <div className="counter-two__content text-center">
                                    <h4 className="counter-title">Downtime Tracking &amp; Analysis</h4>
                                    <p className="counter-text">Capture downtime reasons at the source and identify production bottlenecks faster.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="counter-two__single glass-card">
                                <div className="counter-two__icon-wrap mb-4">
                                    <div className="counter-two__icon">
                                        <span className="icon-quality"></span>
                                    </div>
                                </div>
                                <div className="counter-two__content text-center">
                                    <h4 className="counter-title">Inspection, Packing &amp; Dispatch</h4>
                                    <p className="counter-text">Maintain clear visibility across quality checks, packing progress, and dispatch readiness.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="counter-two__single glass-card">
                                <div className="counter-two__icon-wrap mb-4">
                                    <div className="counter-two__icon">
                                        <span className="icon-folder"></span>
                                    </div>
                                </div>
                                <div className="counter-two__content text-center">
                                    <h4 className="counter-title">Fast MES Deployment</h4>
                                    <p className="counter-text">Deploy a practical Manufacturing Execution System in 30–60 days without disrupting operations.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

