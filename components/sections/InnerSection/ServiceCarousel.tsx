'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 30 },
        767: { slidesPerView: 2, spaceBetween: 30 },
        991: { slidesPerView: 3, spaceBetween: 30 },
    }
}

export default function ServiceCarousel() {
    const services = [
        {
            title: "Production Tracking",
            text: "Digitize your production tracking process and monitor work order progress in real time.",
            href: "/solutions/production-tracking-software",
            icon: "fas fa-chart-line",
            color: "#3D72FC"
        },
        {
            title: "Shop Floor Visibility",
            text: "Gain real-time visibility of shop floor operations from a centralized dashboard.",
            href: "/solutions/shop-floor-visibility-software",
            icon: "fas fa-eye",
            color: "#FA5674"
        },
        {
            title: "Factory Monitoring",
            text: "Monitor production performance across machines and production lines with live dashboards.",
            href: "/solutions/factory-production-monitoring-system",
            icon: "fas fa-industry",
            color: "#00D261"
        },
        {
            title: "Machine Utilization",
            text: "Track machine usage and productivity to maximize equipment efficiency.",
            href: "/solutions/machine-utilization-tracking",
            icon: "fas fa-microchip",
            color: "#6065D4"
        }
    ];

    return (
        <section className="service-carousel-section" style={{ padding: '100px 0', background: '#070B14' }}>
            <div className="container">
                <Swiper {...swiperOptions} className="service-carousel">
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <div className="service-card" style={{ 
                                background: 'rgba(255,255,255,0.03)', 
                                padding: '40px', 
                                borderRadius: '20px', 
                                border: '1px solid rgba(255,255,255,0.06)',
                                height: '100%'
                            }}>
                                <div className="icon" style={{ 
                                    width: '60px', 
                                    height: '60px', 
                                    background: `${service.color}20`, 
                                    color: service.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '12px',
                                    marginBottom: '25px',
                                    fontSize: '24px'
                                }}>
                                    <i className={service.icon}></i>
                                </div>
                                <h3 style={{ color: 'white', marginBottom: '15px' }}>{service.title}</h3>
                                <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '25px', fontSize: '15px' }}>{service.text}</p>
                                <Link href={service.href} style={{ color: service.color, fontWeight: 'bold', fontSize: '13px' }}>
                                    LEARN MORE <i className="fas fa-arrow-right" style={{ marginLeft: '5px' }}></i>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
