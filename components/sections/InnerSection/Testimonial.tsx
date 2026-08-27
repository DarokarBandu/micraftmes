'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image";
import Link from "next/link";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "Thomas Alison",
      role: "Operations Head",
      img: "/assets/images/testimonial/testimonial-2-1.jpg",
      text: "Absolutely fantastic experience! The team exceeded our expectations and delivered a solution that perfectly met our needs. Their attention to detail and commitment to quality is unmatched."
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Plant Manager",
      img: "/assets/images/testimonial/testimonial-2-2.jpg",
      text: "With Micraft MES, we gained instant clarity on machine bottlenecks and reduced shift downtime significantly within the first month of deployment."
    },
    {
      id: 3,
      name: "James Anderson",
      role: "Production Director",
      img: "/assets/images/testimonial/testimonial-2-3.jpg",
      text: "The real-time dashboards allow our shop floor leads to take prompt corrective action during active shifts rather than waiting for day-end reports."
    },
    {
      id: 4,
      name: "Michael Chang",
      role: "Quality Assurance Lead",
      img: "/assets/images/testimonial/testimonial-2-2.jpg",
      text: "Digital inspection checkpoints and traceability have drastically improved our compliance audits and zero-defect dispatch confidence."
    }
  ];

  // Double items for loop mode with slidesPerView: 3
  const displayTestimonials = [...testimonials, ...testimonials];

  return (
    <>
        <section className="testimonials-carousel-page">
            <div className="testimonial-two__shape-1"></div>
            <div className="testimonial-two__shape-2"></div>
            <div className="container">
                <Swiper {...swiperOptions} className="testimonials-carousel-style">
                    {displayTestimonials.map((item, idx) => (
                        <SwiperSlide key={`${item.id}-${idx}`}>
                            <div className="item">
                                <div className="testimonial-two__single">
                                    <div className="testimonial-two__single-inner">
                                        <div className="testimonial-two__star">
                                            <span className="icon-pointed-star"></span>
                                            <span className="icon-pointed-star"></span>
                                            <span className="icon-pointed-star"></span>
                                            <span className="icon-star"></span>
                                            <span className="icon-star"></span>
                                        </div>
                                        <p className="testimonial-two__text">{item.text}</p>
                                    </div>
                                    <div className="testimonial-two__client-info">
                                        <div className="testimonial-two__client-img">
                                            <Image src={item.img} alt={item.name} width={60} height={60} style={{ width: '60px', height: '60px', objectFit: 'cover' }} priority />
                                        </div>
                                        <div className="testimonial-two__client-content">
                                            <h4 className="testimonial-two__client-name"><Link href="/testimonials">{item.name}</Link></h4>
                                            <p className="testimonial-two__sub-title">{item.role}</p>
                                        </div>
                                    </div>
                                    <div className="testimonial-two__quote">
                                        <span className="icon-right-quote"></span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="carousel-dot-style">
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>
        </section>
    </>
  )
}
