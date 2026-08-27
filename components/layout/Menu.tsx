import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function MainMenu() {
  const pathname = usePathname();

  const isActive = (path: string, exact = true) =>
    exact ? pathname === path : pathname.startsWith(path);

  return (
    <ul className="main-menu__list">
      {/* Home */}
      <li className={isActive("/") ? "current" : ""}>
        <Link href="/">Home</Link>
      </li>

      {/* 1. Product Mega Menu */}
      <li className={`dropdown ${isActive("/product", false) ? "current" : ""}`}>
        <Link href="/product">Product</Link>
        <ul className="mega-menu-container shadow-box">
          {/* Column 1: Core Platform */}
          <li className="mega-menu-column">
            <span className="mega-menu-suite-title">Manufacturing Suite</span>
            <Link href="/product/micraft-mes" className={`mega-menu-item-link ${isActive("/product/micraft-mes") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Micraft MES</div>
              <p className="mega-menu-item-sub">Real-time production monitoring and execution system.</p>
            </Link>
            <Link href="/product/how-micraft-mes-works" className={`mega-menu-item-link ${isActive("/product/how-micraft-mes-works") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">How Micraft Works</div>
              <p className="mega-menu-item-sub">Data capture, workflow dispatch and logic execution.</p>
            </Link>
            <Link href="/product/mes-features" className={`mega-menu-item-link ${isActive("/product/mes-features") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">MES Features & Modules</div>
              <p className="mega-menu-item-sub">Complete modular suite of 8+ smart shop floor tools.</p>
            </Link>
          </li>

          {/* Column 2: Rollout & Implementation */}
          <li className="mega-menu-column">
            <span className="mega-menu-suite-title">Implementation Suite</span>
            <Link href="/product/mes-implementation" className={`mega-menu-item-link ${isActive("/product/mes-implementation") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">MES Implementation</div>
              <p className="mega-menu-item-sub">Step-by-step factory rollout in 2–4 weeks.</p>
            </Link>
            <Link href="/product/mes-pricing" className={`mega-menu-item-link ${isActive("/product/mes-pricing") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Pricing & Plans</div>
              <p className="mega-menu-item-sub">Transparent modular subscriptions tailored for SME ROI.</p>
            </Link>
            <Link href="/resources/mes-implementation-guide" className={`mega-menu-item-link ${isActive("/resources/mes-implementation-guide") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Deployment Roadmap</div>
              <p className="mega-menu-item-sub">Checklist and milestones for smooth shop floor adoption.</p>
            </Link>
          </li>

          {/* Column 3: Capabilities & Hardware */}
          <li className="mega-menu-column">
            <span className="mega-menu-suite-title">Workplace Suite</span>
            <Link href="/features/shop-floor-data-collection" className={`mega-menu-item-link ${isActive("/features/shop-floor-data-collection") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Operator Terminals</div>
              <p className="mega-menu-item-sub">Touchscreen paperless job logs & barcode scanners.</p>
            </Link>
            <Link href="/features/machine-monitoring" className={`mega-menu-item-link ${isActive("/features/machine-monitoring") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Machine IoT Sync</div>
              <p className="mega-menu-item-sub">PLC signal capture, spindle uptime & idle codes.</p>
            </Link>
            <Link href="/contact" className={`mega-menu-item-link ${isActive("/contact") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Request Live Demo</div>
              <p className="mega-menu-item-sub">Interactive walkthrough configured to your plant parts.</p>
            </Link>
          </li>

          {/* Column 4: Right Featured Promo Card */}
          <li className="mega-menu-featured-col">
            <div>
              <span className="mega-menu-suite-title">Our Product Suite</span>
              <div className="mega-menu-featured-card">
                <Image
                  src="/assets/images/solutions/micraft-product-suite-ecosystem.png"
                  alt="Our Product Suite - MES QMS DMS CRM WMS"
                  width={300}
                  height={170}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  priority
                />
              </div>
              <p className="mega-menu-featured-desc mt-2">
                Scalable Micraft architecture built for high-performance enterprise operations.
              </p>
            </div>
            <Link href="/product" className="mega-menu-featured-link">
              Explore More <i className="fas fa-arrow-right"></i>
            </Link>
          </li>
        </ul>
      </li>

      {/* 2. Solutions Mega Menu */}
      <li className={`dropdown ${isActive("/solutions", false) ? "current" : ""}`}>
        <Link href="/solutions">Solutions</Link>
        <ul className="mega-menu-container shadow-box">
          {/* Column 1: Shop Floor & Production */}
          <li className="mega-menu-column">
            <span className="mega-menu-suite-title">Production Suite</span>
            <Link href="/solutions/production-tracking-software" className={`mega-menu-item-link ${isActive("/solutions/production-tracking-software") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Production Tracking</div>
              <p className="mega-menu-item-sub">Work order tracking and live stage visibility.</p>
            </Link>
            <Link href="/solutions/shop-floor-visibility-software" className={`mega-menu-item-link ${isActive("/solutions/shop-floor-visibility-software") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Shop Floor Visibility</div>
              <p className="mega-menu-item-sub">Live operations feed & workstation monitors.</p>
            </Link>
            <Link href="/solutions/factory-production-monitoring-system" className={`mega-menu-item-link ${isActive("/solutions/factory-production-monitoring-system") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Factory Monitoring</div>
              <p className="mega-menu-item-sub">Connected plant metrics & shift-level dashboards.</p>
            </Link>
          </li>

          {/* Column 2: Quality & Machine Asset */}
          <li className="mega-menu-column">
            <span className="mega-menu-suite-title">Quality & Asset Suite</span>
            <Link href="/solutions/quality-inspection-tracking" className={`mega-menu-item-link ${isActive("/solutions/quality-inspection-tracking") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Quality Inspection</div>
              <p className="mega-menu-item-sub">Digital QA sheets, first-piece & defect logging.</p>
            </Link>
            <Link href="/solutions/machine-utilization-tracking" className={`mega-menu-item-link ${isActive("/solutions/machine-utilization-tracking") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Machine Utilization</div>
              <p className="mega-menu-item-sub">Downtime tracking, idle codes & efficiency.</p>
            </Link>
            <Link href="/solutions/manufacturing-performance-tracking" className={`mega-menu-item-link ${isActive("/solutions/manufacturing-performance-tracking") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Performance (OEE)</div>
              <p className="mega-menu-item-sub">Availability, performance & quality OEE metrics.</p>
            </Link>
          </li>

          {/* Column 3: Logistics & Insights */}
          <li className="mega-menu-column">
            <span className="mega-menu-suite-title">Logistics & Insight Suite</span>
            <Link href="/solutions/packing-dispatch-tracking" className={`mega-menu-item-link ${isActive("/solutions/packing-dispatch-tracking") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Packing & Dispatch</div>
              <p className="mega-menu-item-sub">Barcoded box verification & pallet tracking.</p>
            </Link>
            <Link href="/solutions/digital-production-dashboard" className={`mega-menu-item-link ${isActive("/solutions/digital-production-dashboard") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Digital KPI Dashboard</div>
              <p className="mega-menu-item-sub">Visual boards for plant managers & supervisors.</p>
            </Link>
            <Link href="/solutions/manufacturing-process-tracking" className={`mega-menu-item-link ${isActive("/solutions/manufacturing-process-tracking") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Process Tracking</div>
              <p className="mega-menu-item-sub">Stage-by-stage routing & cycle timing logs.</p>
            </Link>
          </li>

          {/* Column 4: Right Featured Promo Card */}
          <li className="mega-menu-featured-col">
            <div>
              <span className="mega-menu-suite-title">Tailored Solutions</span>
              <div className="mega-menu-featured-card">
                <Image
                  src="/assets/images/solutions/micraft-solutions-ecosystem.png"
                  alt="Micraft End-to-End MES Solutions"
                  width={300}
                  height={170}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  priority
                />
              </div>
              <p className="mega-menu-featured-desc mt-2">
                High-impact tracking software configured to your factory&apos;s unique process routing.
              </p>
            </div>
            <Link href="/solutions" className="mega-menu-featured-link">
              Explore More <i className="fas fa-arrow-right"></i>
            </Link>
          </li>
        </ul>
      </li>

      {/* 3. Industries Mega Menu */}
      <li className={`dropdown ${isActive("/industries", false) ? "current" : ""}`}>
        <Link href="/industries">Industries</Link>
        <ul className="mega-menu-container shadow-box">
          {/* Column 1: Discrete & Automotive */}
          <li className="mega-menu-column">
            <span className="mega-menu-suite-title">Discrete Manufacturing</span>
            <Link href="/industries/automotive-component-manufacturing" className={`mega-menu-item-link ${isActive("/industries/automotive-component-manufacturing") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Automotive Components</div>
              <p className="mega-menu-item-sub">Traceability, batch control & OEM compliance.</p>
            </Link>
            <Link href="/industries/cnc-machining-engineering" className={`mega-menu-item-link ${isActive("/industries/cnc-machining-engineering") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">CNC Machining</div>
              <p className="mega-menu-item-sub">Cycle timing, spindle runtime & tool tracking.</p>
            </Link>
          </li>

          {/* Column 2: Precision & Molding */}
          <li className="mega-menu-column">
            <span className="mega-menu-suite-title">Process & Tooling</span>
            <Link href="/industries/plastic-injection-molding" className={`mega-menu-item-link ${isActive("/industries/plastic-injection-molding") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Plastic Injection Molding</div>
              <p className="mega-menu-item-sub">Shot counting, mold maintenance & cycle logs.</p>
            </Link>
            <Link href="/industries/fabrication-industry" className={`mega-menu-item-link ${isActive("/industries/fabrication-industry") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Fabrication & Sheet Metal</div>
              <p className="mega-menu-item-sub">Cutting, bending, welding & stage routing.</p>
            </Link>
          </li>

          {/* Column 3: Electronics & SMEs */}
          <li className="mega-menu-column">
            <span className="mega-menu-suite-title">High-Tech & SMEs</span>
            <Link href="/industries/electronics-manufacturing" className={`mega-menu-item-link ${isActive("/industries/electronics-manufacturing") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Electronics (EMS)</div>
              <p className="mega-menu-item-sub">SMT line monitoring, component serials & rework.</p>
            </Link>
            <Link href="/industries/general-manufacturing-smes" className={`mega-menu-item-link ${isActive("/industries/general-manufacturing-smes") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">General SME Plants</div>
              <p className="mega-menu-item-sub">Affordable paperless tracking with rapid ROI.</p>
            </Link>
          </li>

          {/* Column 4: Right Featured Promo Card */}
          <li className="mega-menu-featured-col">
            <div>
              <span className="mega-menu-suite-title">Industry Expertise</span>
              <div className="mega-menu-featured-card">
                <Image
                  src="/assets/images/solutions/micraft-industries-ecosystem.png"
                  alt="Built for Every Industry. Engineered for Excellence."
                  width={300}
                  height={170}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  priority
                />
              </div>
              <p className="mega-menu-featured-desc mt-2">
                Domain-specific workflows tailored for your operational compliance standards.
              </p>
            </div>
            <Link href="/industries" className="mega-menu-featured-link">
              Explore More <i className="fas fa-arrow-right"></i>
            </Link>
          </li>
        </ul>
      </li>

      {/* 4. Features Mega Menu */}
      <li className={`dropdown ${isActive("/features", false) ? "current" : ""}`}>
        <Link href="/features">Features</Link>
        <ul className="mega-menu-container shadow-box">
          {/* Column 1: Shop Floor Control */}
          <li className="mega-menu-column">
            <span className="mega-menu-suite-title">Shop Floor Control</span>
            <Link href="/features/production-order-management" className={`mega-menu-item-link ${isActive("/features/production-order-management") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Planning & Scheduling</div>
              <p className="mega-menu-item-sub">Work order sequencing & machine allocations.</p>
            </Link>
            <Link href="/features/work-order-tracking" className={`mega-menu-item-link ${isActive("/features/work-order-tracking") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Work Order Tracking</div>
              <p className="mega-menu-item-sub">Barcode & QR-based job card management.</p>
            </Link>
            <Link href="/features/shop-floor-data-collection" className={`mega-menu-item-link ${isActive("/features/shop-floor-data-collection") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Data Collection Terminals</div>
              <p className="mega-menu-item-sub">Touchscreen operator inputs & IoT sync.</p>
            </Link>
          </li>

          {/* Column 2: Quality & Machine IoT */}
          <li className="mega-menu-column">
            <span className="mega-menu-suite-title">Quality & Machine IoT</span>
            <Link href="/features/quality-inspection-management" className={`mega-menu-item-link ${isActive("/features/quality-inspection-management") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Quality Inspection</div>
              <p className="mega-menu-item-sub">Digital inspections, defect logs & CAPA reports.</p>
            </Link>
            <Link href="/features/machine-monitoring" className={`mega-menu-item-link ${isActive("/features/machine-monitoring") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Machine Monitoring</div>
              <p className="mega-menu-item-sub">Spindle runtime, idle codes & fault alerts.</p>
            </Link>
            <Link href="/features/production-dashboard" className={`mega-menu-item-link ${isActive("/features/production-dashboard") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Live Floor Dashboard</div>
              <p className="mega-menu-item-sub">Factory floor big-screen & mobile monitors.</p>
            </Link>
          </li>

          {/* Column 3: Analytics & Shipping */}
          <li className="mega-menu-column">
            <span className="mega-menu-suite-title">Analytics & Logistics</span>
            <Link href="/features/production-analytics-reports" className={`mega-menu-item-link ${isActive("/features/production-analytics-reports") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Production Analytics</div>
              <p className="mega-menu-item-sub">Automated shift reports & scrap Pareto charts.</p>
            </Link>
            <Link href="/features/dispatch-tracking" className={`mega-menu-item-link ${isActive("/features/dispatch-tracking") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Dispatch Tracking</div>
              <p className="mega-menu-item-sub">Finished goods verification & packing lists.</p>
            </Link>
            <Link href="/product/micraft-mes" className={`mega-menu-item-link ${isActive("/product/micraft-mes") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Audit & Traceability</div>
              <p className="mega-menu-item-sub">Complete forward & backward batch history.</p>
            </Link>
          </li>

          {/* Column 4: Right Featured Promo Card */}
          <li className="mega-menu-featured-col">
            <div>
              <span className="mega-menu-suite-title">Our Feature Suite</span>
              <div className="mega-menu-featured-card">
                <Image
                  src="/assets/images/solutions/micraft-features-ecosystem.png"
                  alt="Powerful Features. Intelligent Manufacturing."
                  width={300}
                  height={170}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  priority
                />
              </div>
              <p className="mega-menu-featured-desc mt-2">
                Everything required to digitize and connect every machine and operator.
              </p>
            </div>
            <Link href="/features/production-order-management" className="mega-menu-featured-link">
              Explore More <i className="fas fa-arrow-right"></i>
            </Link>
          </li>
        </ul>
      </li>

      {/* 5. Why Micraft Mega Menu */}
      <li className={`dropdown ${isActive("/why-micraft", false) ? "current" : ""}`}>
        <Link href="/why-micraft">Why Micraft</Link>
        <ul className="mega-menu-container shadow-box">
          {/* Column 1: Comparisons */}
          <li className="mega-menu-column">
            <span className="mega-menu-suite-title">The Micraft Edge</span>
            <Link href="/why-micraft/mes-vs-erp" className={`mega-menu-item-link ${isActive("/why-micraft/mes-vs-erp") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">MES vs ERP</div>
              <p className="mega-menu-item-sub">Why ERP alone isn&apos;t enough for shop floor execution.</p>
            </Link>
            <Link href="/why-micraft/manual-vs-digital-production-tracking" className={`mega-menu-item-link ${isActive("/why-micraft/manual-vs-digital-production-tracking") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Manual vs Digital</div>
              <p className="mega-menu-item-sub">Eliminate paper sheets, Excel errors & hidden delays.</p>
            </Link>
          </li>

          {/* Column 2: Business Value */}
          <li className="mega-menu-column">
            <span className="mega-menu-suite-title">Business Value</span>
            <Link href="/why-micraft/micraft-vs-traditional-mes" className={`mega-menu-item-link ${isActive("/why-micraft/micraft-vs-traditional-mes") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Micraft vs Legacy MES</div>
              <p className="mega-menu-item-sub">Fast 2-week launch without heavy capital lock-ins.</p>
            </Link>
            <Link href="/why-micraft/mes-benefits-small-manufacturers" className={`mega-menu-item-link ${isActive("/why-micraft/mes-benefits-small-manufacturers") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">MES Benefits for SMEs</div>
              <p className="mega-menu-item-sub">Lower scrap rates, faster cycle times & clear ROI.</p>
            </Link>
          </li>

          {/* Column 3: Company & Team */}
          <li className="mega-menu-column">
            <span className="mega-menu-suite-title">Company & Team</span>
            <Link href="/company/about" className={`mega-menu-item-link ${isActive("/company/about") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">About Micraft</div>
              <p className="mega-menu-item-sub">Our mission to democratize smart Industry 4.0 MES.</p>
            </Link>
            <Link href="/company/leadership" className={`mega-menu-item-link ${isActive("/company/leadership") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Leadership Team</div>
              <p className="mega-menu-item-sub">Manufacturing engineers & software architects.</p>
            </Link>
            <Link href="/company/careers" className={`mega-menu-item-link ${isActive("/company/careers") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Careers & Growth</div>
              <p className="mega-menu-item-sub">Join our fast-growing industrial automation team.</p>
            </Link>
            <Link href="/contact" className={`mega-menu-item-link ${isActive("/contact") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Contact Support</div>
              <p className="mega-menu-item-sub">24/7 dedicated factory assistance & specialists.</p>
            </Link>
          </li>

          {/* Column 4: Right Featured Promo Card */}
          <li className="mega-menu-featured-col">
            <div>
              <span className="mega-menu-suite-title">Why Micraft</span>
              <div className="mega-menu-featured-card">
                <Image
                  src="/assets/images/solutions/micraft-why-micraft-ecosystem.png"
                  alt="Why Micraft MES: The Modern Edge"
                  width={300}
                  height={170}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  priority
                />
              </div>
              <p className="mega-menu-featured-desc mt-2">
                Purpose-built software designed for shop-floor operators and plant heads.
              </p>
            </div>
            <Link href="/why-micraft" className="mega-menu-featured-link">
              Explore More <i className="fas fa-arrow-right"></i>
            </Link>
          </li>
        </ul>
      </li>

      {/* 6. Resources Mega Menu */}
      <li className={`dropdown ${isActive("/resources", false) ? "current" : ""}`}>
        <Link href="/resources">Resources</Link>
        <ul className="mega-menu-container shadow-box">
          {/* Column 1: Guides & Primers */}
          <li className="mega-menu-column">
            <span className="mega-menu-suite-title">Guides & Primers</span>
            <Link href="/resources/what-is-mes" className={`mega-menu-item-link ${isActive("/resources/what-is-mes") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">What is MES (Guide)</div>
              <p className="mega-menu-item-sub">The definitive manufacturing execution primer.</p>
            </Link>
            <Link href="/resources/production-monitoring-guide" className={`mega-menu-item-link ${isActive("/resources/production-monitoring-guide") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Production Monitoring</div>
              <p className="mega-menu-item-sub">How to set up telemetry & live factory KPIs.</p>
            </Link>
            <Link href="/resources/shop-floor-digitization-benefits" className={`mega-menu-item-link ${isActive("/resources/shop-floor-digitization-benefits") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Digitization Benefits</div>
              <p className="mega-menu-item-sub">Strategic impact on scrap, throughput & OEE.</p>
            </Link>
          </li>

          {/* Column 2: Implementation Playbooks */}
          <li className="mega-menu-column">
            <span className="mega-menu-suite-title">Implementation</span>
            <Link href="/resources/manufacturing-productivity-guide" className={`mega-menu-item-link ${isActive("/resources/manufacturing-productivity-guide") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Productivity Playbook</div>
              <p className="mega-menu-item-sub">Strategies to eliminate shift bottlenecks.</p>
            </Link>
            <Link href="/resources/mes-implementation-guide" className={`mega-menu-item-link ${isActive("/resources/mes-implementation-guide") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Implementation Guide</div>
              <p className="mega-menu-item-sub">Step-by-step checklist from audit to go-live.</p>
            </Link>
            <Link href="/resources/what-is-mes" className={`mega-menu-item-link ${isActive("/resources/what-is-mes") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">ROI Calculator</div>
              <p className="mega-menu-item-sub">Calculate cost savings from paperless tracking.</p>
            </Link>
          </li>

          {/* Column 3: Case Studies & Articles */}
          <li className="mega-menu-column">
            <span className="mega-menu-suite-title">Stories & Articles</span>
            <Link href="/customers/case-studies" className={`mega-menu-item-link ${isActive("/customers/case-studies") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Customer Case Studies</div>
              <p className="mega-menu-item-sub">Real turnaround numbers from client factories.</p>
            </Link>
            <Link href="/success-stories" className={`mega-menu-item-link ${isActive("/success-stories") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">Success Stories</div>
              <p className="mega-menu-item-sub">Transformational journeys of plant leaders.</p>
            </Link>
            <Link href="/mes-blog" className={`mega-menu-item-link ${isActive("/mes-blog") ? "active-page" : ""}`}>
              <div className="mega-menu-item-name">MES & Industry Blog</div>
              <p className="mega-menu-item-sub">Articles on lean manufacturing & Industry 4.0.</p>
            </Link>
          </li>

          {/* Column 4: Right Featured Promo Card */}
          <li className="mega-menu-featured-col">
            <div>
              <span className="mega-menu-suite-title">Knowledge Hub</span>
              <div className="mega-menu-featured-card">
                <Image
                  src="/assets/images/solutions/micraft-resources-ecosystem.png"
                  alt="MES Knowledge & Resource Hub"
                  width={300}
                  height={170}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  priority
                />
              </div>
              <p className="mega-menu-featured-desc mt-2">
                Practical resources and actionable best practices from plant managers.
              </p>
            </div>
            <Link href="/resources" className="mega-menu-featured-link">
              Explore More <i className="fas fa-arrow-right"></i>
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
}
