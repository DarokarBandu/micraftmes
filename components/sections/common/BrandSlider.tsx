'use client'
import Image from "next/image"

export default function BrandSlider() {
    const brands = [
        { id: 1, src: "/assets/images/brand/1.jpg" },
        { id: 2, src: "/assets/images/brand/2.jpg" },
        { id: 3, src: "/assets/images/brand/3.jpg" },
        { id: 4, src: "/assets/images/brand/4.jpg" },
        { id: 5, src: "/assets/images/brand/5.jpg" },
        { id: 6, src: "/assets/images/brand/6.jpg" },
        { id: 7, src: "/assets/images/brand/7.jpg" },
        { id: 8, src: "/assets/images/brand/8.jpg" },
        { id: 9, src: "/assets/images/brand/9.jpg" },
        { id: 10, src: "/assets/images/brand/10.jpg" }
    ]

    // Double the brands for seamless infinite loop
    const displayBrands = [...brands, ...brands];

    return (
        <section className="brand-marquee-section py-60 position-relative overflow-hidden" style={{ background: '#070C14' }}>
            {/* Blurred Industrial Background - Professional Vibe */}
            <div className="absolute inset-0 z-0 h-100">
                <Image
                    src="/assets/images/backgrounds/brand_section_bg.png"
                    alt="Industrial Network Background"
                    fill
                    style={{ objectFit: 'cover', opacity: 0.15 }}
                />
                <div className="absolute inset-0 bg-dark-depth opacity-90"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-depth via-transparent to-dark-depth"></div>
            </div>

            <div className="container position-relative z-1">
                <div className="section-title text-center mb-2">
                    <div className="section-title__tagline-box justify-content-center wow fadeInUp">
                        <span className="section-title__tagline tagline-glow">Partnership Excellence</span>
                    </div>
                    <h3 className="text-white mt-2 wow fadeInUp" data-wow-delay="100ms" style={{ fontWeight: '700', fontSize: '28px' }}>
                        Trusted by Advanced Manufacturers
                    </h3>
                </div>

                {/* Premium High-Contrast Logo Cards */}
                <div className="marquee-wrapper-compact wow fadeInUp" data-wow-delay="200ms">
                    <div className="marquee-content-premium">
                        {displayBrands.map((brand, idx) => (
                            <div key={`${brand.id}-${idx}`} className="brand-logo-item">
                                <div className="brand-card-premium rounded-3">
                                    <div className="brand-logo-wrapper">
                                        <Image
                                            src={brand.src}
                                            alt={`Brand ${brand.id}`}
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
                .py-60 { padding: 60px 0; }
                .marquee-wrapper-compact {
                    display: flex;
                    width: 100%;
                    overflow: hidden;
                    mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
                    padding: 20px 0;
                }
                .marquee-content-premium {
                    display: flex;
                    gap: 35px;
                    animation: marquee-scroll 45s linear infinite;
                    width: max-content;
                }
                .marquee-content-premium:hover {
                    animation-play-state: paused;
                }
                @keyframes marquee-scroll {
                    0% { transform: translateX(0); }
                    /* 10 items * (220px width + 35px gap) = 2550px perfect translation */
                    100% { transform: translateX(-2550px); }
                }
                .brand-logo-item {
                    flex-shrink: 0;
                }
                .brand-card-premium {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100px;
                    width: 220px;
                    background: rgba(255, 255, 255, 0.03) !important;
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 12px;
                    backdrop-filter: blur(12px);
                }
                .brand-card-premium:hover {
                    transform: translateY(-5px);
                    background: rgba(255, 255, 255, 0.08) !important;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1);
                    border: 1px solid rgba(61, 114, 252, 0.5);
                }
                .brand-logo-wrapper {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                    padding: 10px 20px;
                }
                .brand-logo-wrapper :global(img) {
                    transition: all 0.3s ease;
                    opacity: 0.8;
                }
                .brand-card-premium:hover :global(img) {
                    opacity: 1;
                    transform: scale(1.05);
                }
                .tagline-glow {
                    color: #FA5674;
                    font-weight: 800;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    font-size: 13px;
                }
                .transition-3s {
                    transition: all 0.3s ease-in-out;
                }
                .max-w-700 { max-width: 700px; }
                .transition-5s {
                    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
                }
            `}</style>
        </section>
    )
}
