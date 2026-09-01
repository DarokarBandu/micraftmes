"use client";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "@/components/elements/AnimatedTitle";

export default function Process() {
    return (
        <>
            <section className="process-one">
                <div className="process-one__shape-1">
                    <Image src="/assets/images/shapes/process-one-shape-1.png" alt="Image" width={90} height={90} priority />
                </div>
                <div className="process-one__shape-2"></div>
                <div className="process-one__shape-3"></div>
                <div className="process-one__bg-shape"
                    style={{ backgroundImage: "url(/assets/images/shapes/process-one-bg-shape.png)" }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <div className="process-one__left">
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <div className="section-title__tagline-box">
                                        <div className="section-title__tagline-shape-1"></div>
                                        <span className="section-title__tagline">HOW MICRAFT MES WORKS</span>
                                        <div className="section-title__tagline-shape-2"></div>
                                    </div>
                                    <AnimatedTitle>
                                        <h2 className="section-title__title title-animation">
                                            How Micraft MES Improves <br />
                                            <span>Shop Floor Execution</span>
                                        </h2>
                                    </AnimatedTitle>
                                </div>
                                <p className="process-one__text">
                                    Micraft MES captures operational data directly from the shop floor and converts it into real-time production insights.
                                </p>
                                <div className="process-one__btn-box">
                                    <Link href="/product/how-micraft-mes-works" className="thm-btn">Learn More<span
                                        className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="process-one__right">
                                <ul className="process-one__process-list list-unstyled">
                                    <li>
                                        <div className="process-one__process-count"></div>
                                        <div className="process-one__process-content">
                                            <h3 className="process-one__process-title">Step 1 — Capture Production Data</h3>
                                            <p className="process-one__process-text">
                                                Operators and machines provide production events, downtime reasons, inspection results, and work order updates directly into the system.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="process-one__process-content">
                                            <h3 className="process-one__process-title">Step 2 — Create Real-Time Operational Visibility</h3>
                                            <p className="process-one__process-text">
                                                Live dashboards display production performance, machine status, and workflow progress.
                                            </p>
                                        </div>
                                        <div className="process-one__process-count"></div>
                                    </li>
                                    <li>
                                        <div className="process-one__process-count"></div>
                                        <div className="process-one__process-content">
                                            <h3 className="process-one__process-title">Step 3 — Enable Faster Operational Decisions</h3>
                                            <p className="process-one__process-text">
                                                Plant teams identify issues early and take corrective action before production losses increase.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                .process-one { padding: 60px 0 60px; }
                :global(.process-one .section-title) { margin-bottom: 18px !important; }
                :global(.process-one .section-title__tagline-box) { margin-bottom: 10px !important; }
                :global(.process-one .section-title__title) { margin-bottom: 8px !important; }
            `}</style>
        </>
    )
}

