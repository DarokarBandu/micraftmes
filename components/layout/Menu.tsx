import Link from "next/link";
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

      {/* Product */}
      <li className={`dropdown ${isActive("/product", false) ? "current" : ""}`}>
        <Link href="/product">Product</Link>
        <ul className="shadow-box" style={{
          display: 'grid',
          gridTemplateColumns: '300px 1fr 1fr',
          minWidth: '850px',
          alignItems: 'start',
          padding: '0px',
          overflow: 'hidden',
          backgroundColor: '#0B192C',
          border: '2px solid rgba(255,255,255,0.2)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
          borderRadius: '12px'
        }}>
          <li style={{ gridColumn: '1', padding: '25px 30px', borderRight: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)', alignSelf: 'stretch' }}>
            <div style={{ width: '40px', height: '40px', background: 'var(--techguru-base)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px', fontSize: '18px', color: 'white' }}>
              <i className="fas fa-layer-group"></i>
            </div>
            <h4 style={{ color: 'white', fontSize: '18px', fontWeight: '700', marginBottom: '8px', letterSpacing: '-0.5px' }}>Product Excellence</h4>
            <p style={{ color: '#97a2b0', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
              Flagship Manufacturing Execution System to bridge the gap between planning and the shop floor.
            </p>
          </li>
          <li style={{ padding: '15px 10px', gridColumn: '2' }}>
            <div style={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '1px' }}><Link href="/product/micraft-mes" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/product/micraft-mes") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/product/micraft-mes") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/product/micraft-mes") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-eye" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Micraft MES Overview</Link></div>
              <div style={{ padding: '1px' }}><Link href="/product/how-micraft-mes-works" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/product/how-micraft-mes-works") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/product/how-micraft-mes-works") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/product/how-micraft-mes-works") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-cogs" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> How Micraft MES Works</Link></div>
              <div style={{ padding: '1px' }}><Link href="/product/mes-features" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/product/mes-features") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/product/mes-features") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/product/mes-features") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-star" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> MES Features</Link></div>
            </div>
          </li>
          <li style={{ padding: '15px 10px', gridColumn: '3', borderLeft: '1px solid rgba(255,255,255,0.08)', alignSelf: 'stretch' }}>
            <div style={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '1px' }}><Link href="/product/mes-implementation" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/product/mes-implementation") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/product/mes-implementation") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/product/mes-implementation") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-rocket" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> MES Implementation Process</Link></div>
              <div style={{ padding: '1px' }}><Link href="/product/mes-pricing" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/product/mes-pricing") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/product/mes-pricing") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/product/mes-pricing") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-tag" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> MES Pricing / Request Quote</Link></div>
            </div>
          </li>
        </ul>
      </li>

      {/* Solutions */}
      <li className={`dropdown ${isActive("/solutions", false) ? "current" : ""}`}>
        <Link href="/solutions">Solutions</Link>
        <ul className="shadow-box" style={{
          display: 'grid',
          gridTemplateColumns: '300px 1fr 1fr',
          minWidth: '950px',
          alignItems: 'start',
          padding: '0px',
          overflow: 'hidden',
          backgroundColor: '#0B192C',
          border: '2px solid rgba(255,255,255,0.2)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
          borderRadius: '12px'
        }}>
          <li style={{ gridColumn: '1', padding: '25px 30px', borderRight: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)', alignSelf: 'stretch' }}>
            <div style={{ width: '40px', height: '40px', background: 'var(--techguru-base)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px', fontSize: '18px', color: 'white' }}>
              <i className="fas fa-lightbulb"></i>
            </div>
            <h4 style={{ color: 'white', fontSize: '18px', fontWeight: '700', marginBottom: '8px', letterSpacing: '-0.5px' }}>Tailored Solutions</h4>
            <p style={{ color: '#97a2b0', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
              Discover digital tools designed to supercharge your factory&apos;s performance and visibility.
            </p>
          </li>
          <li style={{ padding: '15px 10px', gridColumn: '2' }}>
            <div style={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '1px' }}><Link href="/solutions/production-tracking-software" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/solutions/production-tracking-software") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/solutions/production-tracking-software") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/solutions/production-tracking-software") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-chart-line" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Production Tracking</Link></div>
              <div style={{ padding: '1px' }}><Link href="/solutions/shop-floor-visibility-software" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/solutions/shop-floor-visibility-software") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/solutions/shop-floor-visibility-software") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/solutions/shop-floor-visibility-software") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-laptop-code" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Shop Floor Visibility</Link></div>
              <div style={{ padding: '1px' }}><Link href="/solutions/factory-production-monitoring-system" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/solutions/factory-production-monitoring-system") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/solutions/factory-production-monitoring-system") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/solutions/factory-production-monitoring-system") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-industry" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Factory Monitoring</Link></div>
              <div style={{ padding: '1px' }}><Link href="/solutions/digital-production-dashboard" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/solutions/digital-production-dashboard") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/solutions/digital-production-dashboard") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/solutions/digital-production-dashboard") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-tachometer-alt" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Digital Dashboard</Link></div>
              <div style={{ padding: '1px' }}><Link href="/solutions/machine-utilization-tracking" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/solutions/machine-utilization-tracking") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/solutions/machine-utilization-tracking") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/solutions/machine-utilization-tracking") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-microchip" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Machine Utilization</Link></div>
            </div>
          </li>
          <li style={{ padding: '15px 10px', gridColumn: '3', borderLeft: '1px solid rgba(255,255,255,0.08)', alignSelf: 'stretch' }}>
            <div style={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '1px' }}><Link href="/solutions/manufacturing-process-tracking" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/solutions/manufacturing-process-tracking") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/solutions/manufacturing-process-tracking") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/solutions/manufacturing-process-tracking") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-sync" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Process Tracking</Link></div>
              <div style={{ padding: '1px' }}><Link href="/solutions/quality-inspection-tracking" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/solutions/quality-inspection-tracking") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/solutions/quality-inspection-tracking") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/solutions/quality-inspection-tracking") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-vial" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Quality Inspection</Link></div>
              <div style={{ padding: '1px' }}><Link href="/solutions/packing-dispatch-tracking" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/solutions/packing-dispatch-tracking") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/solutions/packing-dispatch-tracking") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/solutions/packing-dispatch-tracking") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-box-open" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Packing & Dispatch</Link></div>
              <div style={{ padding: '1px' }}><Link href="/solutions/real-time-production-monitoring" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/solutions/real-time-production-monitoring") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/solutions/real-time-production-monitoring") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/solutions/real-time-production-monitoring") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-clock" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Real-Time Production</Link></div>
              <div style={{ padding: '1px' }}><Link href="/solutions/manufacturing-performance-tracking" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/solutions/manufacturing-performance-tracking") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/solutions/manufacturing-performance-tracking") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/solutions/manufacturing-performance-tracking") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-award" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Performance Tracking</Link></div>
            </div>
          </li>
        </ul>
      </li>

      {/* Industries */}
      <li className={`dropdown ${isActive("/industries", false) ? "current" : ""}`}>
        <Link href="/industries">Industries</Link>
        <ul className="shadow-box" style={{
          display: 'grid',
          gridTemplateColumns: '300px 1fr 1fr',
          minWidth: '850px',
          alignItems: 'start',
          padding: '0px',
          overflow: 'hidden',
          backgroundColor: '#0B192C',
          border: '2px solid rgba(255,255,255,0.2)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
          borderRadius: '12px'
        }}>
          <li style={{ gridColumn: '1', padding: '25px 30px', borderRight: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)', alignSelf: 'stretch' }}>
            <div style={{ width: '40px', height: '40px', background: 'var(--techguru-base)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px', fontSize: '18px', color: 'white' }}>
              <i className="fas fa-microchip"></i>
            </div>
            <h4 style={{ color: 'white', fontSize: '18px', fontWeight: '700', marginBottom: '8px', letterSpacing: '-0.5px' }}>Industry Expertise</h4>
            <p style={{ color: '#97a2b0', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
              Specialized MES implementations for automotive, electronics, and general manufacturing.
            </p>
          </li>
          <li style={{ padding: '15px 10px', gridColumn: '2' }}>
            <div style={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '1px' }}><Link href="/industries/automotive-component-manufacturing" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/industries/automotive-component-manufacturing") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/industries/automotive-component-manufacturing") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/industries/automotive-component-manufacturing") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-car" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Automotive</Link></div>
              <div style={{ padding: '1px' }}><Link href="/industries/cnc-machining-engineering" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/industries/cnc-machining-engineering") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/industries/cnc-machining-engineering") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/industries/cnc-machining-engineering") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-hammer" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> CNC Machining</Link></div>
              <div style={{ padding: '1px' }}><Link href="/industries/fabrication-industry" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/industries/fabrication-industry") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/industries/fabrication-industry") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/industries/fabrication-industry") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-tools" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Fabrication</Link></div>
            </div>
          </li>
          <li style={{ padding: '15px 10px', gridColumn: '3', borderLeft: '1px solid rgba(255,255,255,0.08)', alignSelf: 'stretch' }}>
            <div style={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '1px' }}><Link href="/industries/plastic-injection-molding" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/industries/plastic-injection-molding") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/industries/plastic-injection-molding") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/industries/plastic-injection-molding") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-flask" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Injection Molding</Link></div>
              <div style={{ padding: '1px' }}><Link href="/industries/electronics-manufacturing" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/industries/electronics-manufacturing") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/industries/electronics-manufacturing") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/industries/electronics-manufacturing") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-bolt" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Electronics</Link></div>
              <div style={{ padding: '1px' }}><Link href="/industries/general-manufacturing-smes" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/industries/general-manufacturing-smes") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/industries/general-manufacturing-smes") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/industries/general-manufacturing-smes") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-building" style={{ fontSize: '14px', width: '18px', color: 'var(--techguru-base)' }}></i> General Manufacturing</Link></div>
            </div>
          </li>
        </ul>
      </li>

      {/* Features */}
      <li className={`dropdown ${isActive("/features", false) ? "current" : ""}`}>
        <Link href="/features">Features</Link>
        <ul className="shadow-box" style={{
          display: 'grid',
          gridTemplateColumns: '300px 1fr 1fr',
          minWidth: '850px',
          alignItems: 'start',
          padding: '0px',
          overflow: 'hidden',
          backgroundColor: '#0B192C',
          border: '2px solid rgba(255,255,255,0.2)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
          borderRadius: '12px'
        }}>
          <li style={{ gridColumn: '1', padding: '25px 30px', borderRight: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)', alignSelf: 'stretch' }}>
            <div style={{ width: '40px', height: '40px', background: 'var(--techguru-base)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px', fontSize: '18px', color: 'white' }}>
              <i className="fas fa-magic"></i>
            </div>
            <h4 style={{ color: 'white', fontSize: '18px', fontWeight: '700', marginBottom: '8px', letterSpacing: '-0.5px' }}>Powerful Platform</h4>
            <p style={{ color: '#97a2b0', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
              Work orders and machine utilization tracking with our digitization tools.
            </p>
          </li>
          <li style={{ padding: '15px 10px', gridColumn: '2' }}>
            <div style={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '1px' }}><Link href="/features/production-order-management" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/features/production-order-management") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/features/production-order-management") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/features/production-order-management") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-calendar-alt" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Planning & Scheduling</Link></div>
              <div style={{ padding: '1px' }}><Link href="/features/work-order-tracking" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/features/work-order-tracking") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/features/work-order-tracking") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/features/work-order-tracking") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-file-invoice" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Work Order Tracking</Link></div>
              <div style={{ padding: '1px' }}><Link href="/features/shop-floor-data-collection" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/features/shop-floor-data-collection") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/features/shop-floor-data-collection") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/features/shop-floor-data-collection") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-database" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Data Collection</Link></div>
              <div style={{ padding: '1px' }}><Link href="/features/machine-monitoring" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/features/machine-monitoring") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/features/machine-monitoring") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/features/machine-monitoring") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-video" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Machine Monitoring</Link></div>
            </div>
          </li>
          <li style={{ padding: '15px 10px', gridColumn: '3', borderLeft: '1px solid rgba(255,255,255,0.08)', alignSelf: 'stretch' }}>
            <div style={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '1px' }}><Link href="/features/quality-inspection-management" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/features/quality-inspection-management") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/features/quality-inspection-management") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/features/quality-inspection-management") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-check-circle" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Quality Management</Link></div>
              <div style={{ padding: '1px' }}><Link href="/features/production-analytics-reports" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/features/production-analytics-reports") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/features/production-analytics-reports") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/features/production-analytics-reports") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-chart-bar" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Production Analytics</Link></div>
              <div style={{ padding: '1px' }}><Link href="/features/production-dashboard" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/features/production-dashboard") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/features/production-dashboard") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/features/production-dashboard") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-tv" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Production Dashboard</Link></div>
              <div style={{ padding: '1px' }}><Link href="/features/dispatch-tracking" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/features/dispatch-tracking") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/features/dispatch-tracking") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/features/dispatch-tracking") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-shipping-fast" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Dispatch Tracking</Link></div>
            </div>
          </li>
        </ul>
      </li>

      {/* Why Micraft */}
      <li className={`dropdown ${isActive("/why-micraft", false) ? "current" : ""}`}>
        <Link href="/why-micraft">Why Micraft</Link>
        <ul className="shadow-box" style={{
          display: 'grid',
          gridTemplateColumns: '300px 1fr 1fr',
          minWidth: '850px',
          alignItems: 'start',
          padding: '0px',
          overflow: 'hidden',
          left: 'auto',
          right: '0px',
          transform: 'translateX(0)',
          transformOrigin: 'top right',
          backgroundColor: '#0B192C',
          border: '2px solid rgba(255,255,255,0.2)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
          borderRadius: '12px'
        }}>
          <li style={{ gridColumn: '1', padding: '25px 30px', borderRight: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)', alignSelf: 'stretch' }}>
            <div style={{ width: '40px', height: '40px', background: 'var(--techguru-base)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px', fontSize: '18px', color: 'white' }}>
              <i className="fas fa-shield-alt"></i>
            </div>
            <h4 style={{ color: 'white', fontSize: '18px', fontWeight: '700', marginBottom: '8px', letterSpacing: '-0.5px' }}>The Micraft Edge</h4>
            <p style={{ color: '#97a2b0', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
              Practical, scalable digital transformation built specifically for manufacturing SMEs.
            </p>
          </li>
          <li style={{ padding: '15px 10px', gridColumn: '2' }}>
            <div style={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '1px' }}><Link href="/why-micraft/mes-vs-erp" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/why-micraft/mes-vs-erp") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/why-micraft/mes-vs-erp") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/why-micraft/mes-vs-erp") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-exchange-alt" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> MES vs ERP</Link></div>
              <div style={{ padding: '1px' }}><Link href="/why-micraft/manual-vs-digital-production-tracking" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/why-micraft/manual-vs-digital-production-tracking") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/why-micraft/manual-vs-digital-production-tracking") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/why-micraft/manual-vs-digital-production-tracking") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-fingerprint" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Manual vs Digital</Link></div>
              <div style={{ padding: '1px' }}><Link href="/why-micraft/micraft-vs-traditional-mes" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/why-micraft/micraft-vs-traditional-mes") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/why-micraft/micraft-vs-traditional-mes") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/why-micraft/micraft-vs-traditional-mes") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-shield-alt" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Micraft vs Traditional</Link></div>
              <div style={{ padding: '1px' }}><Link href="/why-micraft/mes-benefits-small-manufacturers" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/why-micraft/mes-benefits-small-manufacturers") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/why-micraft/mes-benefits-small-manufacturers") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/why-micraft/mes-benefits-small-manufacturers") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-smile" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> MES Benefits</Link></div>
            </div>
          </li>
          <li style={{ padding: '15px 10px', gridColumn: '3', borderLeft: '1px solid rgba(255,255,255,0.08)', alignSelf: 'stretch' }}>
            <div style={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '1px' }}><Link href="/company/about" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/company/about") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/company/about") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/company/about") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-info-circle" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> About Us</Link></div>
              <div style={{ padding: '1px' }}><Link href="/company/leadership" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/company/leadership") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/company/leadership") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/company/leadership") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-user-friends" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Leadership Team</Link></div>
              <div style={{ padding: '1px' }}><Link href="/company/careers" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/company/careers") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/company/careers") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/company/careers") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-briefcase" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Careers & Growth</Link></div>
              <div style={{ padding: '1px' }}><Link href="/contact" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/contact") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/contact") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/contact") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-envelope" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Contact Support</Link></div>
            </div>
          </li>
        </ul>
      </li>

      {/* Resources */}
      <li className={`dropdown ${isActive("/resources", false) ? "current" : ""}`}>
        <Link href="/resources">Resources</Link>
        <ul className="shadow-box" style={{
          display: 'grid',
          gridTemplateColumns: '300px 1fr 1fr',
          minWidth: '850px',
          alignItems: 'start',
          padding: '0px',
          overflow: 'hidden',
          left: 'auto',
          right: '0px',
          transform: 'translateX(0)',
          transformOrigin: 'top right',
          backgroundColor: '#0B192C',
          border: '2px solid rgba(255,255,255,0.2)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
          borderRadius: '12px'
        }}>
          <li style={{ gridColumn: '1', padding: '25px 30px', borderRight: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)', alignSelf: 'stretch' }}>
            <div style={{ width: '40px', height: '40px', background: 'var(--techguru-base)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px', fontSize: '18px', color: 'white' }}>
              <i className="fas fa-bookmark"></i>
            </div>
            <h4 style={{ color: 'white', fontSize: '18px', fontWeight: '700', marginBottom: '8px', letterSpacing: '-0.5px' }}>Knowledge Hub</h4>
            <p style={{ color: '#97a2b0', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
              Access case studies, implementation guides, and manufacturing insights.
            </p>
          </li>
          <li style={{ padding: '15px 10px', gridColumn: '2' }}>
            <div style={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '1px' }}><Link href="/resources/what-is-mes" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/resources/what-is-mes") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/resources/what-is-mes") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/resources/what-is-mes") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-question-circle" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> What is MES</Link></div>
              <div style={{ padding: '1px' }}><Link href="/resources/shop-floor-digitization-benefits" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/resources/shop-floor-digitization-benefits") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/resources/shop-floor-digitization-benefits") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/resources/shop-floor-digitization-benefits") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-mobile-alt" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Shop Floor Digitization</Link></div>
              <div style={{ padding: '1px' }}><Link href="/resources/manufacturing-productivity-guide" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/resources/manufacturing-productivity-guide") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/resources/manufacturing-productivity-guide") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/resources/manufacturing-productivity-guide") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-book-open" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Productivity Guide</Link></div>
              <div style={{ padding: '1px' }}><Link href="/resources/mes-implementation-guide" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/resources/mes-implementation-guide") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/resources/mes-implementation-guide") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/resources/mes-implementation-guide") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-map-signs" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Implementation Guide</Link></div>
            </div>
          </li>
          <li style={{ padding: '15px 10px', gridColumn: '3', borderLeft: '1px solid rgba(255,255,255,0.08)', alignSelf: 'stretch' }}>
            <div style={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '1px' }}><Link href="/resources/production-monitoring-guide" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/resources/production-monitoring-guide") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/resources/production-monitoring-guide") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/resources/production-monitoring-guide") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-broadcast-tower" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Monitoring Guide</Link></div>
              <div style={{ padding: '1px' }}><Link href="/customers/case-studies" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/customers/case-studies") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/customers/case-studies") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/customers/case-studies") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-search" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Case Studies</Link></div>
              <div style={{ padding: '1px' }}><Link href="/success-stories" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/success-stories") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/success-stories") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/success-stories") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-medal" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Success Stories</Link></div>
              <div style={{ padding: '1px' }}><Link href="/mes-blog" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 15px', borderRadius: '8px', borderLeft: isActive("/mes-blog") ? '3px solid var(--techguru-base)' : '3px solid transparent', background: isActive("/mes-blog") ? 'rgba(255,255,255,0.05)' : 'transparent', color: isActive("/mes-blog") ? 'white' : 'white', fontSize: '14px' }}><i className="fas fa-pen-nib" style={{ fontSize: '13px', width: '18px', color: 'var(--techguru-base)' }}></i> Blogs</Link></div>
            </div>
          </li>
        </ul>
      </li>

    </ul>
  );
}

