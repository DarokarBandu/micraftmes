"use client";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "@/components/elements/AnimatedTitle";

export default function About() {
    return (
        <>
            <section className="about-two" id="about">
                <div className="about-two__shape-2"></div>
                <div className="about-two__shape-3">
                    <Image src="/assets/images/shapes/about-two-shape-3.png" alt="Shape" width={560} height={583} priority />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="about-two__left">
                                <div className="about-two__img-box">
                                    <div className="about-two__img">
                                        <Image src="/assets/images/resources/shopfloor.png" alt="Shop Floor Visibility" width={550} height={480} style={{ width: '100%', height: 'auto' }} priority />
                                    </div>
                                    <div className="about-two__shape-1"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-two__right">
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <div className="section-title__tagline-box">
                                        <div className="section-title__tagline-shape-1"></div>
                                        <span className="section-title__tagline">TRUST / POSITIONING </span>
                                        <div className="section-title__tagline-shape-2"></div>
                                    </div>
                                    <AnimatedTitle>
                                        <h2 className="section-title__title title-animation">
                                            Why Manufacturing Plants Still Lack <br className="d-none d-md-block" />
                                            <span>Real-Time Shop Floor Visibility</span>
                                        </h2>
                                    </AnimatedTitle>
                                </div>
                                <p className="about-two__text text-justify">
                                    Even with ERP systems, machine automation, and digital reports, many manufacturing plants still struggle to get a clear real-time view of what is happening on the shop floor. Production data may exist in multiple systems, but execution details such as machine status, downtime reasons, work order progress, inspection records, packing status, and dispatch readiness are often fragmented.
                                </p>
                                <p className="about-two__text mt-3 text-justify">
                                    As a result, plant teams rely on delayed reports or manual updates to understand production performance. <strong>Micraft MES bridges this gap.</strong>
                                </p>
                                <p className="about-two__text mt-3 text-justify">
                                    Micraft MES is a Manufacturing Execution System (MES) designed to connect production activities into a single operational layer. It captures real-time shop-floor data and provides a unified view of production, quality, and dispatch processes.
                                </p>
                                <p className="about-two__text mt-3 text-justify">
                                    With Micraft MES, manufacturing teams gain immediate visibility, faster decision-making, and better control over daily operations.
                                </p>

                                <div className="about-two__experience-contact-and-btn mt-4">
                                    <div className="about-two__btn-box">
                                        <Link href="/product/micraft-mes" className="thm-btn">Learn More<span className="icon-right-arrow"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                .about-two { padding: 60px 0 60px; }
                :global(.about-two .section-title) { margin-bottom: 18px !important; }
                :global(.about-two .section-title__tagline-box) { margin-bottom: 10px !important; }
                :global(.about-two .section-title__title) { margin-bottom: 8px !important; }
            `}</style>
        </>
    )
}

