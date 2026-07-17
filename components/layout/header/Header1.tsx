import Link from "next/link";
import Image from "next/image";
import MobileMenu from "../MobileMenu";
import Menu from "../Menu";

// ✅ Define props type
type Header1Props = {
    scroll: boolean;
    isMobileMenu: boolean;
    handleMobileMenu: () => void;
};

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }: Header1Props) {
    return (
        <>
            {/* main header */}
            <header className={`main-header-two ${scroll ? "fixed-header" : ""}`}>
                <div className="main-menu-two__top">
                    <div className="main-menu-two__top-inner">
                        <div className="main-menu-two__top-left">
                            <ul className="list-unstyled main-menu-two__contact-list">
                                <li>
                                    <div className="icon">
                                        <i className="icon-search-mail"></i>
                                    </div>
                                    <div className="text">
                                        <p><Link href="mailto:sales@micraft.co.in">sales@micraft.co.in</Link></p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="icon-phone-call"></i>
                                    </div>
                                    <div className="text">
                                        <p><Link href="tel:+919356865559">+91 93568 65559</Link></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="main-menu-two__top-social">
                            <Link href="https://www.linkedin.com/company/micraft-solutions/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></Link>
                            <Link href="https://www.instagram.com/micraft_solutions/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></Link>
                            <Link href="https://www.youtube.com/channel/UC44Pb_1TzOY8mwPzy_0SjLQ" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></Link>
                            <Link href="https://wa.me/9022476798?text=Hello%20there!" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></Link>
                        </div>
                    </div>
                </div>
                <nav className="main-menu main-menu-two">
                    <div className="main-menu-two__wrapper">
                        <div className="main-menu-two__wrapper-inner">
                            <div className="main-menu-two__left">
                                <div className="main-menu-two__logo">
                                    <Link href="/"><Image src="/assets/images/logo/Micraftmeslogo.svg" alt="Micraft Solutions | Micraft MES" width={190} height={50} priority /></Link>
                                </div>
                            </div>
                            <div className="main-menu-two__right">
                                <div className="main-menu-two__main-menu-box">
                                    <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                    <Menu />
                                </div>
                                    <div className="main-menu-two__btn-box">
                                        <Link href="/contact" className="thm-btn">Get In Touch</Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* sticky header */}
                <div className={`sticky-header main-menu main-menu-two ${scroll ? "animated slideInDown" : ""}`}>
                    <div className="sticky-header__content">
                        <div className="main-menu-two__wrapper">
                            <div className="main-menu-two__wrapper-inner">
                                <div className="main-menu-two__left">
                                    <div className="main-menu-two__logo">
                                        <Link href="/"><Image src="/assets/images/logo/Micraftmeslogo.svg" alt="Micraft Solutions | Micraft MES" width={190} height={50} priority /></Link>
                                    </div>
                                </div>
                                <div className="main-menu-two__right">
                                    <div className="main-menu-two__main-menu-box">
                                        <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                        <Menu />
                                    </div>
                                    <div className="main-menu-two__btn-box">
                                        <Link href="/contact" className="thm-btn">Get In Touch</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ✅ Fixed MobileMenu props */}
                <MobileMenu
                    isSidebar={isMobileMenu}
                    handleMobileMenu={handleMobileMenu}
                />
            </header>
        </>
    );
}
