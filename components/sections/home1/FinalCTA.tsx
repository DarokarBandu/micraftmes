"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FinalCTAProps {
    title?: React.ReactNode;
    text?: React.ReactNode;
    buttonLabel1?: string;
    buttonLabel2?: string;
}

const FinalCTA = ({ title, text, buttonLabel1, buttonLabel2 }: FinalCTAProps) => {
    return (
        <section className="newsletter-one newsletter-three pb-0">
            <div className="container">
                <div className="newsletter-one__inner" style={{ background: 'linear-gradient(90deg, #FA5674 0%, #6065D4 100%)' }}>
                    <div className="newsletter-one__shape-bg"
                        style={{ backgroundImage: "url(/assets/images/shapes/newsletter-one-shape-bg.png)" }}></div>
                    <div className="newsletter-one__shape-1 float-bob-x">
                        <Image src="/assets/images/shapes/newsletter-one-shape-1.png" alt="Image" width={416} height={368} priority />
                    </div>
                    <div className="newsletter-one__shape-2"></div>
                    <div className="newsletter-one__shape-3"></div>
                    <div className="newsletter-one__img">
                        <Image src="/assets/images/backgrounds/cta.png" alt="Image" width={280} height={280} priority />
                    </div>

                    <div className="row justify-content-center text-center">
                        <div className="col-lg-10" style={{ position: 'relative', zIndex: 5 }}>
                            <h2 className="newsletter-one__title text-white mb-20" style={{ fontSize: '42px', lineHeight: '1.2' }}>
                                {title || (
                                    <>Bring Real-Time Visibility <br /> <span>to Your Manufacturing Operations</span></>
                                )}
                            </h2>
                            <p className="newsletter-one__text text-white mb-40 mx-auto" style={{ maxWidth: '750px' }}>
                                {text || "If your manufacturing plant lacks clear visibility across production, inspection, packing, and dispatch, Micraft MES can help simplify operations and improve decision-making. Schedule a short discussion to see how Micraft MES can fit your manufacturing environment."}
                            </p>

                            <div className="cta-btns d-flex flex-wrap justify-content-center gap-4">
                                <Link href="/contact" className="thm-btn" style={{ background: '#0B192C', color: '#fff' }}>
                                    {buttonLabel1 || "Request a Demo"} <span className="icon-arrow-right"></span>
                                </Link>
                                <Link href="/contact" className="thm-btn" style={{ background: 'transparent', border: '1px solid #fff', color: '#fff' }}>
                                    {buttonLabel2 || "Book a 15-Minute Consultation"} <span className="icon-arrow-right"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .newsletter-three {
                    padding: 40px 0 0 0 !important;
                }
                .newsletter-one__img {
                    position: absolute;
                    right: 40px;
                    top: 50%;
                    transform: translateY(-50%);
                    display: flex;
                    align-items: center;
                    height: auto;
                    zIndex: 2;
                }
                .thm-btn:hover {
                    background: #fff !important;
                    color: #0B192C !important;
                }
                @media (max-width: 1199px) {
                    .newsletter-one__img {
                        right: 20px;
                    }
                    .newsletter-one__img :global(img) {
                        width: 200px;
                        height: auto;
                    }
                }
                @media (max-width: 991px) {
                    .newsletter-one__img {
                        display: none !important;
                    }
                    .newsletter-one__shape-1 {
                        display: none;
                    }
                    .newsletter-one__inner {
                        padding: 60px 20px;
                        margin: 0 15px;
                    }
                }
                @media (max-width: 767px) {
                    .newsletter-one__title {
                        font-size: 30px !important;
                        line-height: 1.3 !important;
                    }
                    .newsletter-one__text {
                        font-size: 15px;
                        margin-bottom: 30px !important;
                    }
                    .cta-btns {
                        flex-direction: column;
                        align-items: center;
                        gap: 15px !important;
                    }
                    .thm-btn {
                        width: 100%;
                        max-width: 100%;
                        justify-content: center;
                    }
                }
            `}</style>
        </section>
    );
};

export default FinalCTA;
