'use client'

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image";
import Link from "next/link";
import AnimatedTitle from "@/components/elements/AnimatedTitle";
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: false,

    // Navigation
    navigation: {
        nextEl: '.swiper-prev',
        prevEl: '.swiper-next',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
}

export default function Portfolio() {

    const [index, setIndex] = useState(0);
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        { src: "/assets/images/project/prodcutiondashboard.jpg" },
        { src: "/assets/images/project/DowntimeTracking.jpg" },
        { src: "/assets/images/project/WorkOrderExecution.jpg" },
        { src: "/assets/images/project/InspectionQualityRecording.jpg" },
        { src: "/assets/images/project/DispatchTracking.jpg" },
    ];

    const portfolioItems = [
        {
            title: "Production Monitoring Dashboard",
            text: "View real-time machine status, work order progress, and production output across the shop floor.",
            href: "/solutions/digital-production-dashboard"
        },
        {
            title: "Downtime Tracking Interface",
            text: "Capture downtime reasons and analyze production losses with accurate machine-level data.",
            href: "/solutions/machine-utilization-tracking"
        },
        {
            title: "Work Order Execution View",
            text: "Monitor production orders from release to completion and identify delays early.",
            href: "/solutions/production-tracking-software"
        },
        {
            title: "Inspection & Quality Recording",
            text: "Record inspection checkpoints and maintain traceable quality data during production.",
            href: "/solutions/quality-inspection-tracking"
        },
        {
            title: "Packing and Dispatch Tracking",
            text: "Track finished goods readiness and dispatch status for better coordination between production and logistics.",
            href: "/solutions/packing-dispatch-tracking"
        }
    ];

    return (
        <>
            <section className="portfolio-two" id="portfolio">
                <div className="portfolio-two__shape-1 float-bob-y">
                    <Image src="/assets/images/shapes/portfolio-two-shape-1.png" alt="Image" width={783} height={1104} priority />
                </div>
                <div className="portfolio-two__shape-2"></div>
                <div className="portfolio-two__shape-3"></div>
                <div className="portfolio-two__shape-4"></div>
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box">
                            <div className="section-title__tagline-shape-1"></div>
                            <span className="section-title__tagline">VISUAL PROOF </span>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <AnimatedTitle>
                            <h2 className="section-title__title title-animation">See Real-Time Shop Floor <span>Visibility</span><br />
                                <span>in Action</span>
                            </h2>
                        </AnimatedTitle>
                        <p className="section-title__text mt-3" style={{ maxWidth: '700px', margin: '15px auto 0' }}>
                            Micraft MES provides a clear operational view of manufacturing activities through live dashboards and production monitoring tools.
                        </p>
                    </div>
                    <div className="portfolio-two__carousel-container">
                        <Swiper {...swiperOptions} className="portfolio-two__carousel">
                            <SwiperSlide>
                                <div className="item">
                                    <div className="portfolio-two__single-box">
                                        <ul className="portfolio-two__box list-unstyled">
                                            {portfolioItems.map((item: { title: string; text: string; href: string }, idx: number) => (
                                                <li key={idx} className={`${activeIndex === idx ? "active" : ""}`} onMouseEnter={() => setActiveIndex(idx)}>
                                                    <div className="portfolio-two__box-content">
                                                        <div className="single-portfolio-two__bg"
                                                            style={{ backgroundImage: `url(${slides[idx]?.src})` }}>
                                                        </div>
                                                        <div className="portfolio-two__title">
                                                            <h3 style={{ color: '#FFFFFF' }}><Link href={item.href} style={{ color: '#FFFFFF' }}>{item.title}</Link></h3>
                                                        </div>
                                                        <div className="portfolio-two__content-box">
                                                            <div onClick={() => { setIndex(idx); setOpen(true); }} className="portfolio-two__icon">
                                                                <Link href={item.href} className="img-popup"><span className="icon-right-arrow-1"></span></Link>
                                                            </div>
                                                            <div className="portfolio-two__title-box">
                                                                 <h3 className="portfolio-two__title-2" style={{ color: '#FFFFFF' }}>
                                                                    <Link href={item.href} style={{ color: '#FFFFFF' }}>{item.title}</Link>
                                                                </h3>
                                                                <p className="portfolio-two__text" style={{ color: '#E2E8F0', fontSize: '15px', lineHeight: '1.6' }}>{item.text}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <div className="swiper-pagination"></div>

                            <div className="swiper-nav">
                                <div className="swiper-prev"><span className="icon-right-up"></span></div>
                                <div className="swiper-next"><span className="icon-right-up"></span></div>
                            </div>
                        </Swiper>
                    </div>
                </div>
                <Lightbox
                    open={open}
                    index={index}
                    close={() => setOpen(false)}
                    slides={slides}
                />
            </section>
            <style jsx>{`
                .portfolio-two { padding: 60px 0 60px; }
                :global(.portfolio-two .section-title) { margin-bottom: 25px !important; }
                :global(.portfolio-two .section-title__tagline-box) { margin-bottom: 10px !important; }
                :global(.portfolio-two .section-title__title) { margin-bottom: 6px !important; }
            `}</style>
        </>
    )
}