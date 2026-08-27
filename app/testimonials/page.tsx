'use client';
import Layout from "@/components/layout/Layout";
import FinalCTA from "@/components/sections/home1/FinalCTA";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedTitle from "@/components/elements/AnimatedTitle";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: '.testimonials-page-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
};

const mesTestimonials = [
    {
        id: 1,
        name: "Rajesh Sharma",
        role: "Operations Head",
        company: "Automotive Tier-1 Supplier",
        initials: "RS",
        text: "With Micraft MES, we gained real-time shop floor visibility across all 8 production lines. Shift downtime dropped by 24% in the first 60 days, and our operators love the digital work order tracking."
    },
    {
        id: 2,
        name: "Sarah Williams",
        role: "Plant Manager",
        company: "Precision Injection Molding",
        initials: "SW",
        text: "Before Micraft MES, our shift handover and scrap tracking relied entirely on paper logs. Now, live machine telemetry and digital production logs give us 100% accurate daily OEE reports."
    },
    {
        id: 3,
        name: "Amit Deshmukh",
        role: "Production Director",
        company: "CNC Machining & Engineering",
        initials: "AD",
        text: "The machine utilization monitoring software pinpointed idle micro-stoppages we were completely blind to. Our machine uptime increased from 68% to 84% within three months."
    },
    {
        id: 4,
        name: "Michael Chang",
        role: "Quality Assurance Lead",
        company: "Electronics Manufacturing",
        initials: "MC",
        text: "Digital quality checkpoints and automated defect logging have drastically improved our ISO audits and zero-defect dispatch confidence. Traceability is now instantaneous."
    },
    {
        id: 5,
        name: "Vikram Patil",
        role: "General Manager",
        company: "Fabrication & Assembly Plant",
        initials: "VP",
        text: "Micraft MES connected our production, inspection, and dispatch workflows seamlessly. We eliminated job card losses and reduced order-to-dispatch turnaround time by 30%."
    },
    {
        id: 6,
        name: "James Anderson",
        role: "Operations VP",
        company: "Industrial SME Manufacturing",
        initials: "JA",
        text: "The interactive production dashboard allows our plant supervisors to take immediate corrective actions during active shifts rather than waiting for outdated day-end spreadsheets."
    }
];

export default function Testimonial_Page() {
    return (
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Testimonials">
            <section className="testimonials-page-modern" style={{ padding: '80px 0 60px' }}>
                <div className="container">
                    <div className="section-title text-center mb-50">
                        <div className="section-title__tagline-box justify-content-center">
                            <div className="section-title__tagline-shape-1"></div>
                            <span className="section-title__tagline">Client Success Stories</span>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title text-white">
                                What Manufacturers Say <br />
                                <span>About Micraft MES</span>
                            </h2>
                        </AnimatedTitle>
                        <p className="mt-3 text-secondary mx-auto" style={{ maxWidth: '700px' }}>
                            Discover how manufacturing SMEs and factory leaders achieve operational clarity, higher machine utilization, and error-free production with Micraft MES.
                        </p>
                    </div>

                    <Swiper {...swiperOptions} className="testimonials-page-carousel">
                        {mesTestimonials.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="mes-testimonial-card">
                                    <div>
                                        <div className="mes-testimonial-card__header">
                                            <div className="mes-testimonial-card__stars">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i} className="star-icon">★</span>
                                                ))}
                                            </div>
                                            <div className="mes-testimonial-card__quote-badge">
                                                <i className="fas fa-quote-right"></i>
                                            </div>
                                        </div>

                                        <div className="mes-testimonial-card__body">
                                            <p className="mes-testimonial-card__text">
                                                &ldquo;{item.text}&rdquo;
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mes-testimonial-card__footer">
                                        <div className="mes-testimonial-card__avatar">
                                            {item.initials}
                                        </div>
                                        <div className="mes-testimonial-card__author-info">
                                            <h4 className="mes-testimonial-card__author-name">{item.name}</h4>
                                            <p className="mes-testimonial-card__author-role">{item.role}</p>
                                            <span className="mes-testimonial-card__author-company">{item.company}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="testimonials-page-pagination text-center mt-4"></div>
                </div>
            </section>
            <FinalCTA />
            <style jsx>{`
                .testimonials-page-modern {
                    position: relative;
                    overflow: hidden;
                }
                .mes-testimonial-card {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    height: 100%;
                    min-height: 290px;
                    background: #FFFFFF;
                    border: 1px solid #E2E8F0;
                    border-radius: 20px;
                    padding: 28px 26px 24px;
                    box-shadow: 0 4px 20px rgba(15, 23, 42, 0.05);
                    transition: all 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);
                }
                :global([data-theme="dark"] .mes-testimonial-card) {
                    background: #101D30;
                    border-color: rgba(255, 255, 255, 0.08);
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
                }
                .mes-testimonial-card:hover {
                    transform: translateY(-6px);
                    border-color: #7366CA;
                    box-shadow: 0 16px 36px rgba(115, 102, 202, 0.15);
                }
                :global([data-theme="dark"] .mes-testimonial-card:hover) {
                    border-color: rgba(115, 102, 202, 0.4);
                    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
                }
                .mes-testimonial-card__header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 18px;
                }
                .mes-testimonial-card__stars {
                    display: flex;
                    align-items: center;
                    gap: 3px;
                }
                .star-icon {
                    color: #7366CA;
                    font-size: 17px;
                    line-height: 1;
                    filter: drop-shadow(0 1px 2px rgba(255, 210, 93, 0.4));
                }
                .mes-testimonial-card__quote-badge {
                    width: 34px;
                    height: 34px;
                    border-radius: 50%;
                    background: rgba(115, 102, 202, 0.1);
                    color: #7366CA;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 13px;
                }
                .mes-testimonial-card__body {
                    margin-bottom: 22px;
                }
                .mes-testimonial-card__text {
                    font-size: 14.5px;
                    line-height: 1.65;
                    color: #334155;
                    margin: 0;
                }
                :global([data-theme="dark"] .mes-testimonial-card__text) {
                    color: #C5C8CD;
                }
                .mes-testimonial-card__footer {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    padding-top: 16px;
                    border-top: 1px solid #EDF2F7;
                }
                :global([data-theme="dark"] .mes-testimonial-card__footer) {
                    border-top-color: rgba(255, 255, 255, 0.07);
                }
                .mes-testimonial-card__avatar {
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    background: #7366CA;
                    color: #FFFFFF;
                    font-size: 14px;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    box-shadow: 0 4px 12px rgba(115, 102, 202, 0.25);
                }
                .mes-testimonial-card__author-info {
                    flex: 1;
                    min-width: 0;
                }
                .mes-testimonial-card__author-name {
                    font-size: 15.5px;
                    font-weight: 700;
                    color: #0F172A;
                    margin: 0 0 2px 0;
                    line-height: 1.2;
                }
                :global([data-theme="dark"] .mes-testimonial-card__author-name) {
                    color: #FFFFFF;
                }
                .mes-testimonial-card__author-role {
                    font-size: 12.5px;
                    font-weight: 600;
                    color: #7366CA;
                    margin: 0 0 1px 0;
                    line-height: 1.3;
                }
                .mes-testimonial-card__author-company {
                    font-size: 12px;
                    color: #64748B;
                    display: block;
                    line-height: 1.3;
                }
                :global([data-theme="dark"] .mes-testimonial-card__author-company) {
                    color: #8896A6;
                }
                :global(.testimonials-page-pagination) {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    margin-top: 30px !important;
                }
                :global(.testimonials-page-pagination .swiper-pagination-bullet) {
                    width: 9px;
                    height: 9px;
                    margin: 0 3px;
                    background: rgba(115, 102, 202, 0.25);
                    border-radius: 50%;
                    opacity: 1;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                }
                :global(.testimonials-page-pagination .swiper-pagination-bullet-active) {
                    background: #7366CA;
                    width: 24px;
                    border-radius: 10px;
                }
                @media (max-width: 767px) {
                    .testimonials-page-modern {
                        padding: 50px 0 30px !important;
                    }
                    .mes-testimonial-card {
                        padding: 24px 20px 20px;
                    }
                }
            `}</style>
        </Layout>
    );
}
