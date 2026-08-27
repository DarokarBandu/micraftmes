'use client'
import Image from "next/image"

export default function BrandSlider() {
    const brands = [
        { id: 1, name: "PAPL", src: "/assets/images/brand/1.jpg" },
        { id: 2, name: "Bridgestone", src: "/assets/images/brand/3.jpg" },
        { id: 3, name: "TATA Autocomp Systems", src: "/assets/images/brand/4.jpg" },
        { id: 4, name: "Mitsubishi Electric", src: "/assets/images/brand/9.jpg" },
        { id: 5, name: "Hexagon", src: "/assets/images/brand/hexagon.png" },
        { id: 6, name: "MSKH Seating Systems", src: "/assets/images/brand/MSKH.png" },
        { id: 7, name: "Schneider Electric", src: "/assets/images/brand/schneider.png" },
        { id: 8, name: "TM Automotive Seating Systems", src: "/assets/images/brand/tmseeting.png" },
        { id: 9, name: "Woodbridge", src: "/assets/images/brand/woodbridge.png" },
        { id: 10, name: "ABB", src: "/assets/images/brand/6.jpg" }
    ]

    // Double the brands for seamless infinite loop
    const displayBrands = [...brands, ...brands];

    return (
        <section className="brand-marquee-section position-relative overflow-hidden">
            {/* Deep Dark Subtle Textured Background */}
            <div className="brand-bg-layer">
                <Image
                    src="/assets/images/backgrounds/brand_bg_industrial_blur.png"
                    alt="Industrial Atmosphere Background"
                    fill
                    style={{ objectFit: 'cover', opacity: 0.25 }}
                />
                <div className="brand-dark-overlay"></div>
            </div>

            <div className="container position-relative" style={{ zIndex: 2 }}>
                <div className="text-center mb-3">
                    <div className="brand-tagline-wrapper">
                        <span className="brand-tagline-pill">PARTNERSHIP EXCELLENCE</span>
                    </div>
                    <h3 className="brand-section-heading">
                        Trusted by Advanced Manufacturers
                    </h3>
                </div>

                {/* Premium High-Contrast Logo Cards */}
                <div className="marquee-wrapper-compact">
                    <div className="marquee-content-premium">
                        {displayBrands.map((brand, idx) => (
                            <div key={`${brand.id}-${idx}`} className="brand-logo-item">
                                <div className="brand-card-premium">
                                    <div className="brand-logo-wrapper">
                                        <Image
                                            src={brand.src}
                                            alt={brand.name}
                                            width={160}
                                            height={70}
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .brand-marquee-section {
                    position: relative;
                    background-color: #050912 !important;
                    padding: 50px 0 45px !important;
                    border-top: 1px solid rgba(255, 255, 255, 0.06);
                    overflow: hidden !important;
                }
                .brand-bg-layer {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 1;
                }
                .brand-dark-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: #050912;
                    opacity: 0.70;
                }
                .brand-tagline-wrapper {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 6px;
                }
                .brand-tagline-pill {
                    display: inline-block;
                    padding: 4px 16px;
                    border-radius: 30px;
                    border: 1px solid rgba(115, 102, 202, 0.35);
                    background: rgba(115, 102, 202, 0.08);
                    color: #7366CA !important;
                    font-size: 11.5px;
                    font-weight: 700;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                }
                .brand-section-heading {
                    color: #FFFFFF !important;
                    font-weight: 700 !important;
                    font-size: 26px !important;
                    line-height: 1.25 !important;
                    margin: 0 !important;
                }
                .marquee-wrapper-compact {
                    display: flex;
                    width: 100%;
                    overflow: hidden;
                    mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
                    padding: 15px 0 10px;
                }
                .marquee-content-premium {
                    display: flex;
                    gap: 30px;
                    animation: marquee-scroll 40s linear infinite;
                    width: max-content;
                }
                .marquee-content-premium:hover {
                    animation-play-state: paused;
                }
                @keyframes marquee-scroll {
                    0% { transform: translateX(0); }
                    /* 10 items * (210px card width + 30px gap) = 2400px translation */
                    100% { transform: translateX(-2400px); }
                }
                .brand-logo-item {
                    flex-shrink: 0;
                }
                .brand-card-premium {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 94px;
                    width: 210px;
                    background: rgba(255, 255, 255, 0.04) !important;
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    border: 1px solid rgba(255, 255, 255, 0.08) !important;
                    border-radius: 12px;
                    backdrop-filter: blur(12px);
                }
                .brand-card-premium:hover {
                    transform: translateY(-4px);
                    background: rgba(255, 255, 255, 0.08) !important;
                    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(115, 102, 202, 0.5) !important;
                }
                .brand-logo-wrapper {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                    padding: 10px 18px;
                }
                .brand-logo-wrapper :global(img) {
                    transition: all 0.3s ease;
                    opacity: 0.92;
                    border-radius: 6px;
                }
                .brand-card-premium:hover :global(img) {
                    opacity: 1;
                    transform: scale(1.04);
                }
                @media (max-width: 767px) {
                    .brand-marquee-section {
                        padding: 35px 0 30px !important;
                    }
                    .brand-section-heading {
                        font-size: 20px !important;
                    }
                    .brand-card-premium {
                        height: 75px;
                        width: 160px;
                    }
                    @keyframes marquee-scroll {
                        0% { transform: translateX(0); }
                        /* 10 items * (160px card width + 30px gap) = 1900px translation */
                        100% { transform: translateX(-1900px); }
                    }
                }
            `}</style>
        </section>
    )
}
