import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type MobileMenuProps = {
  isSidebar: boolean;
  handleMobileMenu: () => void;
};

export default function MobileMenu({ isSidebar, handleMobileMenu }: MobileMenuProps) {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleDropdown = (key: number) => {
    setActiveDropdown((prev) => (prev === key ? null : key));
  };

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <div className={`mobile-nav__wrapper ${isSidebar ? "expanded" : ""}`}>
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={handleMobileMenu}
        ></div>

        <div className="mobile-nav__content">
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={handleMobileMenu}
          >
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <Link href="/" aria-label="logo image" onClick={handleMobileMenu}>
              <Image
                src="/assets/images/logo/Micraftmeslogo.svg"
                alt="Micraft Solutions | Micraft MES"
                width={190}
                height={50}
                priority
              />
            </Link>
          </div>

          <div className="mobile-nav__container">
            <ul className="main-menu__list">
              <li className={isActive("/") ? "current" : ""}>
                <Link href="/" onClick={handleMobileMenu}>
                  Home
                </Link>
              </li>

              {/* Product */}
              <li className="dropdown">
                <Link href="/product/micraft-mes">Product</Link>
                <ul style={{ display: activeDropdown === 1 ? "block" : "none" }}>
                  <li><Link href="/product/micraft-mes" onClick={handleMobileMenu}>Micraft MES Overview</Link></li>
                  <li><Link href="/product/how-micraft-mes-works" onClick={handleMobileMenu}>How It Works</Link></li>
                  <li><Link href="/product/mes-features" onClick={handleMobileMenu}>Features</Link></li>
                  <li><Link href="/product/mes-implementation" onClick={handleMobileMenu}>Implementation</Link></li>
                  <li><Link href="/product/mes-pricing" onClick={handleMobileMenu}>Pricing</Link></li>
                </ul>
                <div className={`dropdown-btn ${activeDropdown === 1 ? "open" : ""}`} onClick={() => toggleDropdown(1)}>
                  <span className="fa fa-angle-down" />
                </div>
              </li>

              {/* Solutions */}
              <li className="dropdown">
                <Link href="/solutions/production-tracking-software">Solutions</Link>
                <ul style={{ display: activeDropdown === 2 ? "block" : "none" }}>
                  <li><Link href="/solutions/production-tracking-software" onClick={handleMobileMenu}>Production Tracking</Link></li>
                  <li><Link href="/solutions/shop-floor-visibility-software" onClick={handleMobileMenu}>Shop Floor Visibility</Link></li>
                  <li><Link href="/solutions/factory-production-monitoring-system" onClick={handleMobileMenu}>Factory Production Monitoring</Link></li>
                  <li><Link href="/solutions/digital-production-dashboard" onClick={handleMobileMenu}>Digital Production Dashboard</Link></li>
                  <li><Link href="/solutions/machine-utilization-tracking" onClick={handleMobileMenu}>Machine Utilization</Link></li>
                  <li><Link href="/solutions/manufacturing-process-tracking" onClick={handleMobileMenu}>Manufacturing Process</Link></li>
                  <li><Link href="/solutions/quality-inspection-tracking" onClick={handleMobileMenu}>Quality Inspection</Link></li>
                  <li><Link href="/solutions/packing-dispatch-tracking" onClick={handleMobileMenu}>Packing & Dispatch</Link></li>
                  <li><Link href="/solutions/real-time-production-monitoring" onClick={handleMobileMenu}>Real-Time Production</Link></li>
                  <li><Link href="/solutions/manufacturing-performance-tracking" onClick={handleMobileMenu}>Manufacturing Performance</Link></li>
                </ul>
                <div className={`dropdown-btn ${activeDropdown === 2 ? "open" : ""}`} onClick={() => toggleDropdown(2)}>
                  <span className="fa fa-angle-down" />
                </div>
              </li>

              {/* Industries */}
              <li className="dropdown">
                <Link href="/industries">Industries</Link>
                <ul style={{ display: activeDropdown === 3 ? "block" : "none" }}>
                  <li><Link href="/industries/automotive-component-manufacturing" onClick={handleMobileMenu}>Automotive</Link></li>
                  <li><Link href="/industries/cnc-machining-engineering" onClick={handleMobileMenu}>CNC Machining</Link></li>
                  <li><Link href="/industries/fabrication-industry" onClick={handleMobileMenu}>Fabrication</Link></li>
                  <li><Link href="/industries/plastic-injection-molding" onClick={handleMobileMenu}>Injection Molding</Link></li>
                  <li><Link href="/industries/electronics-manufacturing" onClick={handleMobileMenu}>Electronics</Link></li>
                  <li><Link href="/industries/general-manufacturing-smes" onClick={handleMobileMenu}>General Manufacturing</Link></li>
                </ul>
                <div className={`dropdown-btn ${activeDropdown === 3 ? "open" : ""}`} onClick={() => toggleDropdown(3)}>
                  <span className="fa fa-angle-down" />
                </div>
              </li>

              {/* Features */}
              <li className="dropdown">
                <Link href="/features">Features</Link>
                <ul style={{ display: activeDropdown === 4 ? "block" : "none" }}>
                  <li><Link href="/features/production-order-management" onClick={handleMobileMenu}>Planning & Scheduling</Link></li>
                  <li><Link href="/features/work-order-tracking" onClick={handleMobileMenu}>Work Order Tracking</Link></li>
                  <li><Link href="/features/shop-floor-data-collection" onClick={handleMobileMenu}>Data Collection</Link></li>
                  <li><Link href="/features/machine-monitoring" onClick={handleMobileMenu}>Machine Monitoring</Link></li>
                  <li><Link href="/features/quality-inspection-management" onClick={handleMobileMenu}>Quality Management</Link></li>
                  <li><Link href="/features/production-analytics-reports" onClick={handleMobileMenu}>Production Analytics</Link></li>
                  <li><Link href="/features/production-dashboard" onClick={handleMobileMenu}>Production Dashboard</Link></li>
                  <li><Link href="/features/dispatch-tracking" onClick={handleMobileMenu}>Dispatch Tracking</Link></li>
                </ul>
                <div className={`dropdown-btn ${activeDropdown === 4 ? "open" : ""}`} onClick={() => toggleDropdown(4)}>
                  <span className="fa fa-angle-down" />
                </div>
              </li>

              {/* Why Micraft */}
              <li className="dropdown">
                <Link href="/why-micraft">Why Micraft</Link>
                <ul style={{ display: activeDropdown === 5 ? "block" : "none" }}>
                  <li><Link href="/why-micraft/mes-vs-erp" onClick={handleMobileMenu}>MES vs ERP</Link></li>
                  <li><Link href="/why-micraft/manual-vs-digital-production-tracking" onClick={handleMobileMenu}>Manual vs Digital</Link></li>
                  <li><Link href="/why-micraft/micraft-vs-traditional-mes" onClick={handleMobileMenu}>Micraft vs Traditional</Link></li>
                  <li><Link href="/why-micraft/mes-benefits-small-manufacturers" onClick={handleMobileMenu}>MES Benefits</Link></li>
                  <li><Link href="/company/about" onClick={handleMobileMenu}>About</Link></li>
                  <li><Link href="/company/leadership" onClick={handleMobileMenu}>Leadership</Link></li>
                  <li><Link href="/company/careers" onClick={handleMobileMenu}>Careers</Link></li>
                </ul>
                <div className={`dropdown-btn ${activeDropdown === 5 ? "open" : ""}`} onClick={() => toggleDropdown(5)}>
                  <span className="fa fa-angle-down" />
                </div>
              </li>

              {/* Resources */}
              <li className="dropdown">
                <Link href="/resources">Resources</Link>
                <ul style={{ display: activeDropdown === 6 ? "block" : "none" }}>
                  <li><Link href="/resources/what-is-mes" onClick={handleMobileMenu}>What is MES</Link></li>
                  <li><Link href="/resources/shop-floor-digitization-benefits" onClick={handleMobileMenu}>Shop Floor Digitization</Link></li>
                  <li><Link href="/resources/manufacturing-productivity-guide" onClick={handleMobileMenu}>Productivity Guide</Link></li>
                  <li><Link href="/resources/mes-implementation-guide" onClick={handleMobileMenu}>Implementation Guide</Link></li>
                  <li><Link href="/resources/production-monitoring-guide" onClick={handleMobileMenu}>Production Monitoring Guide</Link></li>
                  <li><Link href="/customers/case-studies" onClick={handleMobileMenu}>Case Studies</Link></li>
                  <li><Link href="/success-stories" onClick={handleMobileMenu}>Success Stories</Link></li>
                  <li><Link href="/mes-blog" onClick={handleMobileMenu}>Blogs</Link></li>
                </ul>
                <div className={`dropdown-btn ${activeDropdown === 6 ? "open" : ""}`} onClick={() => toggleDropdown(6)}>
                  <span className="fa fa-angle-down" />
                </div>
              </li>




            </ul>
          </div>

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <Link href="mailto:sales@micraft.co.in">sales@micraft.co.in</Link>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <Link href="tel:+919356865559">+91 93568 65559</Link>
            </li>
          </ul>

          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <Link href="#" className="fab fa-twitter" target="_blank" rel="noopener noreferrer"></Link>
              <Link href="#" className="fab fa-facebook-square" target="_blank" rel="noopener noreferrer"></Link>
              <Link href="https://www.linkedin.com/company/micraft-solutions/" className="fab fa-linkedin" target="_blank" rel="noopener noreferrer"></Link>
              <Link href="https://www.instagram.com/micraft_solutions/?hl=en" className="fab fa-instagram" target="_blank" rel="noopener noreferrer"></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
