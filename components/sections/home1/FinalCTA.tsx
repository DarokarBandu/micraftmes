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
                <div className="newsletter-one__inner" style={{ background: '#7366CA' }}>
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
                            <h2 className="newsletter-one__title text-white mb-20 cta-heading-refined">
                                {title || (
                                    <>Bring Real-Time Visibility <br /> <span>to Your Manufacturing Operations</span></>
                                )}
                            </h2>
                            <p className="newsletter-one__text text-white mb-40 mx-auto" style={{ maxWidth: '750px' }}>
                                {text || "If your manufacturing plant lacks clear visibility across production, inspection, packing, and dispatch, Micraft MES can help simplify operations and improve decision-making. Schedule a short discussion to see how Micraft MES can fit your manufacturing environment."}
                            </p>

                            <div className="cta-btns d-flex flex-wrap justify-content-center gap-4">
                                <Link href="/contact" className="thm-btn cta-btn-white">
                                    {buttonLabel1 || "Request a Demo"} <span className="icon-arrow-right"></span>
                                </Link>
                                <Link href="/contact" className="thm-btn cta-btn-dark">
                                    {buttonLabel2 || "Book a 15-Minute Consultation"} <span className="icon-arrow-right"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .newsletter-three {
                    padding: 40px 0 50px 0 !important;
                }
                :global(.cta-heading-refined),
                .newsletter-one__title {
                    font-size: 32px !important;
                    line-height: 1.25 !important;
                    font-weight: 700 !important;
                }
                @media (max-width: 991px) {
                    :global(.cta-heading-refined),
                    .newsletter-one__title {
                        font-size: 26px !important;
                        line-height: 1.3 !important;
                    }
                }
                @media (max-width: 575px) {
                    :global(.cta-heading-refined),
                    .newsletter-one__title {
                        font-size: 22px !important;
                        line-height: 1.3 !important;
                    }
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
                :global(.cta-btns .cta-btn-white) {
                    background: #FFFFFF !important;
                    color: #0B192C !important;
                    font-weight: 700 !important;
                    border: none !important;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25) !important;
                    transition: all 0.3s ease !important;
                }
                :global(.cta-btns .cta-btn-white:hover) {
                    background: #FFD25D !important;
                    color: #0B192C !important;
                    transform: translateY(-3px) !important;
                    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.35) !important;
                }
                :global(.cta-btns .cta-btn-dark) {
                    background: #0B192C !important;
                    color: #FFFFFF !important;
                    font-weight: 700 !important;
                    border: 1.5px solid rgba(255, 255, 255, 0.25) !important;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25) !important;
                    transition: all 0.3s ease !important;
                }
                :global(.cta-btns .cta-btn-dark:hover) {
                    background: #FFFFFF !important;
                    color: #0B192C !important;
                    border-color: #FFFFFF !important;
                    transform: translateY(-3px) !important;
                    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.35) !important;
                }
                :global(.cta-btns .thm-btn::before),
                :global(.cta-btns .thm-btn::after) {
                    display: none !important;
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
