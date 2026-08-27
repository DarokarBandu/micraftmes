import Link from "next/link"
import Image from "next/image";

export default function Footer2() {
    return (
        <>
            <footer className="site-footer-two">
                <div className="site-footer-two__shape-1"></div>
                <div className="site-footer-two__shape-2"></div>
                <div className="site-footer-two__shape-3"></div>
                <div className="site-footer-two__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-5 wow fadeInUp" data-wow-delay="100ms">
                                <div className="site-footer-two__about">
                                    <div className="site-footer-two__logo">
                                        <Link href="/"><Image src="/assets/images/logo/light.png" alt="Micraft MES Logo" width={190} height={50} priority style={{ height: 'auto', maxHeight: '50px', width: 'auto' }} /></Link>
                                    </div>
                                    <ul className="site-footer-two__contact-list list-unstyled">
                                        <li>
                                            <div className="site-footer-two__contact-icon">
                                                <span className="icon-pin"></span>
                                            </div>
                                            <div className="site-footer-two__contact-content">
                                                <h4 className="site-footer-two__contact-title">Location</h4>
                                                <p className="site-footer-two__contact-info">603, White Square, Hinjewadi-Wakad Road, Near Wakad Bridge, Phase 1, Hinjewadi, Pune, Maharashtra 411057</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="site-footer-two__contact-icon">
                                                <span className="icon-contact"></span>
                                            </div>
                                            <div className="site-footer-two__contact-content">
                                                <h4 className="site-footer-two__contact-title">Contact Us</h4>
                                                <p className="site-footer-two__contact-info">
                                                    <Link href="mailto:support@micraft.co.in" className="site-footer-two__contact-mail">support@micraft.co.in</Link>
                                                    <Link href="tel:+919356865559" className="site-footer-two__contact-phone">+91 93568 65559</Link>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 wow fadeInUp" data-wow-delay="200ms">
                                <div className="footer-widget-two__quick-links">
                                    <h4 className="footer-widget-two__title">Products</h4>
                                    <ul className="footer-widget-two__quick-links-list list-unstyled">
                                        <li><Link href="/solutions">All Solutions</Link></li>
                                        <li><Link href="/product/how-micraft-mes-works">How It Works</Link></li>
                                        <li><Link href="/solutions/production-tracking-software">Prod. Tracking</Link></li>
                                        <li><Link href="/solutions/shop-floor-visibility-software">Shop Visibility</Link></li>
                                        <li><Link href="/solutions/machine-utilization-tracking">Machine Tracking</Link></li>
                                        <li><Link href="/solutions/quality-inspection-tracking">Quality Control</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget-two__support">
                                    <h4 className="footer-widget-two__title">Industries</h4>
                                    <ul className="footer-widget-two__quick-links-list list-unstyled">
                                        <li><Link href="/industries/automotive-component-manufacturing">Automotive</Link></li>
                                        <li><Link href="/industries/cnc-machining-engineering">CNC Machining</Link></li>
                                        <li><Link href="/industries/fabrication-industry">Fabrication</Link></li>
                                        <li><Link href="/industries/plastic-injection-molding">Plastic Molding</Link></li>
                                        <li><Link href="/industries/electronics-manufacturing">Electronics</Link></li>
                                        <li><Link href="/industries/general-manufacturing-smes">General Mfg</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay="400ms">
                                <div className="footer-widget-two__services">
                                    <h4 className="footer-widget-two__title">Company</h4>
                                    <ul className="footer-widget-two__quick-links-list list-unstyled">
                                        <li><Link href="/resources/what-is-mes">What is MES?</Link></li>
                                        <li><Link href="/resources/mes-implementation-guide">Impl. Guide</Link></li>
                                        <li><Link href="/customers/case-studies">Case Studies</Link></li>
                                        <li><Link href="/company/about">About Us</Link></li>
                                        <li><Link href="/company/careers">Careers</Link></li>
                                        <li><Link href="/sitemap">Sitemap</Link></li>
                                        <li><Link href="/contact">Contact Sales</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer-two__bottom">
                    <div className="container">
                        <div className="site-footer-two__bottom-inner">
                            <div className="site-footer-two__copyright">
                                <p className="site-footer-two__copyright-text">
                                    ⓒ Copyright {new Date().getFullYear()} <Link href="https://micraftsolutions.com/">Micraft Solutions</Link>. All rights reserved.
                                    <span className="ms-3">
                                        <Link href="/privacy-policy" className="me-3">Privacy Policy</Link>
                                        <Link href="/terms-of-use" className="me-3">Terms of Use</Link>
                                        <Link href="/sitemap">Sitemap</Link>
                                    </span>
                                </p>
                            </div>
                            <div className="site-footer-two__social-box">
                                <h4 className="site-footer-two__social-title">Follow Us:</h4>
                                <div className="site-footer-two__social-box-inner">
                                    <Link href="https://www.linkedin.com/company/micraft-solutions/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></Link>
                                    <Link href="https://www.instagram.com/micraft_solutions/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></Link>
                                    <Link href="https://www.youtube.com/channel/UC44Pb_1TzOY8mwPzy_0SjLQ" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></Link>
                                    <Link href="https://wa.me/9022476798?text=Hello%20there!" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
