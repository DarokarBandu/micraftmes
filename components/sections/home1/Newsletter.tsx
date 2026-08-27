"use client";
import Image from "next/image";

export default function Newsletter() {
  return (
    <>
        <section className="newsletter-one newsletter-three">
            <div className="container">
                <div className="newsletter-one__inner" style={{ background: '#7366CA' }}>
                    <div className="newsletter-one__shape-bg"
                        style={{ backgroundImage: "url(/assets/images/shapes/newsletter-one-shape-bg.png)" }}></div>
                    <div className="newsletter-one__shape-1 float-bob-x">
                        <Image src="/assets/images/shapes/newsletter-one-shape-1.png" alt="Image" width={416} height={368} priority />
                    </div>
                    <div className="newsletter-one__shape-2"></div>
                    <div className="newsletter-one__shape-3"></div>
                    <div className="newsletter-one__img float-bob-y">
                        <Image src="/assets/images/resources/newsletter-one-img-1.png" alt="Image" width={244} height={266} priority />
                    </div>
                    <h2 className="newsletter-one__title text-white">Subscribe to <span>Our Newsletter</span></h2>
                    <p className="newsletter-one__text text-white">Get the latest MES trends and shop floor optimization insights straight to your
                             inbox.</p>
                    <form className="newsletter-one__contact-form">
                        <div className="newsletter-one__contact-input-box">
                            <input type="email" placeholder="Enter email address" name="email" style={{ border: '1px solid rgba(255, 255, 255, 0.5)' }} />
                            <button type="submit" className="thm-btn" style={{ background: '#0B192C', color: '#fff' }}>Subscribe Now<span
                                    className="icon-arrow-right"></span></button>
                        </div>
                    </form>
                </div>
            </div>
            <style jsx>{`
                .newsletter-one__contact-form .thm-btn:hover {
                    background: #fff !important;
                    color: #0B192C !important;
                }
                .newsletter-one__contact-input-box input::placeholder {
                    color: rgba(255, 255, 255, 0.7);
                }
            `}</style>
        </section>
    </>
  )
}
