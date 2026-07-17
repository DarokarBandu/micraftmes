"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedTitle from "@/components/elements/AnimatedTitle";

const faqData = [
    {
        question: "What is Micraft MES and how can it benefit my shop floor?",
        answer: "Micraft MES is a comprehensive Manufacturing Execution System designed to provide real-time visibility into production, downtime, and quality. It helps reduce manual paperwork, eliminates data entry errors, and improves overall equipment effectiveness (OEE)."
    },
    {
        question: "Can Micraft MES integrate with our existing ERP?",
        answer: "Yes, Micraft MES is designed with integration in mind. It can seamlessly exchange data with popular ERP systems to ensure your production schedules and inventory levels are always synchronized."
    },
    {
        question: "Is it suitable for Small and Medium Enterprises (SMEs)?",
        answer: "Absolutely. We have specialized modules specifically designed for the agility and budget of growing SMEs, allowing you to start with the essentials and scale as your business grows."
    },
    {
        question: "How long does a typical implementation take?",
        answer: "Most implementations are completed within 4 to 8 weeks, depending on the complexity of your shop floor and the number of machines being connected."
    },
    {
        question: "Does the system support mobile production tracking?",
        answer: "Yes, Micraft MES features a mobile-responsive interface and dedicated apps for operators and supervisors to track progress and log downtime directly from the terminal or handheld devices."
    }
];

export default function MesFaqSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    
    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-two pt-120 pb-120 overflow-hidden">
            <div className="faq-two__shape-1">
                <Image src="/assets/images/shapes/faq-two-shape-1.png" alt="Shape" width={886} height={924} priority />
            </div>
            <div className="faq-two__shape-2">
                <Image src="/assets/images/shapes/faq-two-shape-2.png" alt="Shape" width={993} height={924} priority />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="faq-two__left">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline">FAQS</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <AnimatedTitle>
                                    <h2 className="section-title__title title-animation">
                                        Your Questions <br />
                                        <span>Answered</span>
                                    </h2>
                                </AnimatedTitle>
                            </div>
                            <p className="faq-two__text">Common inquiries about implementing and scaling <br />with Micraft MES in your manufacturing facility.</p>
                            <div className="faq-two__bdr"></div>
                            <div className="faq-two__contact">
                                <div className="icon">
                                    <span className="icon-customer-service-headset"></span>
                                </div>
                                <div className="content">
                                    <span>Direct Support</span>
                                    <p><Link href="tel:+919356865559">+91 93568 65559</Link></p>
                                </div>
                            </div>
                            <div className="faq-two__btn-box">
                                <Link href="/contact" className="thm-btn">Contact Sales<span className="icon-right-arrow"></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="faq-two__right">
                            <div className="accrodion-grp faq-one-accrodion">
                                {faqData.map((item, index) => (
                                    <div key={index} className={`accrodion ${activeIndex === index ? "active" : ""}`}>
                                        <div className="accrodion-title" onClick={() => toggleAccordion(index)}>
                                            <h4 style={{ color: activeIndex === index ? "#1a1a1a" : "inherit" }}>{item.question}</h4>
                                        </div>
                                        <div
                                            className="accrodion-content"
                                            style={{
                                                maxHeight: activeIndex === index ? "500px" : "0px",
                                                overflow: "hidden",
                                                opacity: activeIndex === index ? 1 : 0,
                                                transition: "all 500ms ease"
                                            }}
                                        >
                                            <div className="inner">
                                                <p className="accrodion-content__text-1" style={{ color: activeIndex === index ? "#2d2d2d" : "inherit" }}>{item.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
