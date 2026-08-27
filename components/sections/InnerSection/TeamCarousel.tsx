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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
}

export default function TeamCarousel() {
  const teamMembers = [
    {
      id: 1,
      name: "James Carter",
      role: "CEO & Founder",
      img: "/assets/images/team/team-1-1.jpg"
    },
    {
      id: 2,
      name: "Sophia Reynolds",
      role: "Chief Technology Officer",
      img: "/assets/images/team/team-1-2.jpg"
    },
    {
      id: 3,
      name: "Michael Hayes",
      role: "Lead Software Engineer",
      img: "/assets/images/team/team-1-3.jpg"
    },
    {
      id: 4,
      name: "Emma Brooks",
      role: "UI/UX Designer",
      img: "/assets/images/team/team-1-4.jpg"
    }
  ];

  // Double items so slides count >= 2 * slidesPerView (4 * 2 = 8)
  const displayTeam = [...teamMembers, ...teamMembers];

  return (
    <>
        <section className="team-carousel-page">
            <div className="container">
                <Swiper {...swiperOptions} className="team-carousel-style">
                    {displayTeam.map((member, idx) => (
                        <SwiperSlide key={`${member.id}-${idx}`}>
                            <div className="item">
                                <div className="team-one__single">
                                    <div className="team-one__img-box">
                                        <div className="team-one__img">
                                            <Image src={member.img} alt={member.name} width={300} height={300} style={{ width: '100%', height: 'auto' }} priority />
                                        </div>
                                        <div className="team-one__social-box-inner">
                                            <div className="team-one__social-box">
                                                <div className="team-one__social">
                                                    <Link href="#"><span className="icon-facebook"></span></Link>
                                                    <Link href="#"><span className="icon-dribble"></span></Link>
                                                </div>
                                                <div className="team-one__social">
                                                    <Link href="#"><span className="icon-linkedin"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-one__content">
                                        <div className="team-one__arrow">
                                            <Link href="/team-details"><span className="icon-link"></span></Link>
                                        </div>
                                        <div className="team-one__title-box">
                                            <p className="team-one__sub-title"><span></span>{member.role}</p>
                                            <h3 className="team-one__title"><Link href="/team-details">{member.name}</Link></h3>
                                        </div>
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