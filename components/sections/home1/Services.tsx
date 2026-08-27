"use client";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "@/components/elements/AnimatedTitle";

export default function Services() {
  return (
    <>
      <section className="servces-one" id="solutions">
        <div className="servces-one__shape-2"></div>
        <div className="servces-one__shape-3 float-bob-y">
          <Image src="/assets/images/shapes/services-one-shape-3.png" alt="Image" width={693} height={1328} priority />
        </div>
        <div className="container">
          <div className="servces-one__top text-center mb-5 pb-3">
            <div className="section-title text-center mb-4">
              <div className="section-title__tagline-box justify-content-center">
                <div className="section-title__tagline-shape-1"></div>
                <span className="section-title__tagline">Manufacturing Solutions</span>
                <div className="section-title__tagline-shape-2"></div>
              </div>
              <AnimatedTitle>
                <h2 className="section-title__title title-animation">
                  Digital Solutions for Real-Time <br /> <span>Manufacturing Visibility</span>
                </h2>
              </AnimatedTitle>
            </div>
            <p className="mx-auto" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '850px', fontSize: '18px', lineHeight: '1.8' }}>
              Micraft MES provides a comprehensive set of solutions designed to help manufacturing companies gain complete control over shop floor operations, production performance, and delivery timelines.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {[
              {
                title: "Production Tracking Software",
                text: "Digitize your production tracking process and monitor work order progress in real time across multiple production stages.",
                href: "/solutions/production-tracking-software",
                icon: "fas fa-chart-line",
                color: "#3D72FC"
              },
              {
                title: "Shop Floor Visibility Software",
                text: "Gain real-time visibility of shop floor operations, production progress, and operator activities from a centralized dashboard.",
                href: "/solutions/shop-floor-visibility-software",
                icon: "fas fa-eye",
                color: "#7366CA"
              },
              {
                title: "Factory Production Monitoring System",
                text: "Monitor production performance across machines, workstations, and production lines with live factory monitoring dashboards.",
                href: "/solutions/factory-production-monitoring-system",
                icon: "fas fa-industry",
                color: "#00D261"
              },
              {
                title: "Digital Production Dashboard",
                text: "Access live visual dashboards displaying real-time production data, work order status, and factory performance metrics.",
                href: "/solutions/digital-production-dashboard",
                icon: "fas fa-tachometer-alt",
                color: "#FFD25D"
              },
              {
                title: "Machine Utilization Tracking Software",
                text: "Track machine usage, idle time, and productivity to maximize equipment efficiency and reduce production delays.",
                href: "/solutions/machine-utilization-tracking",
                icon: "fas fa-microchip",
                color: "#7366CA"
              },
              {
                title: "Quality Inspection Tracking System",
                text: "Digitally record inspection results, monitor quality performance, and track rejection trends across production processes.",
                href: "/solutions/quality-inspection-tracking",
                icon: "fas fa-vial",
                color: "#00D2FF"
              }
            ].map((sol, index) => (
              <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${index * 100}ms`}>
                <div className="solutions-card h-100 p-4 p-xl-5 rounded-4 transition-all hover-translate-y d-flex flex-column" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(10px)', position: 'relative' }}>
                  <div className="icon-wrap mb-4 d-flex align-items-center justify-content-center rounded-3 shadow-glow" style={{ width: 60, height: 60, background: `${sol.color}15`, color: sol.color, border: `1px solid ${sol.color}25` }}>
                    <i className={`${sol.icon} fs-3`}></i>
                  </div>
                  <h3 className="h5 text-white mb-3 fw-bold letter-spacing-1">{sol.title}</h3>
                  <p className="flex-grow-1" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '15px', lineHeight: '1.6' }}>{sol.text}</p>
                  <div className="mt-4 pt-3 border-top border-white border-opacity-05">
                    <Link href={sol.href} className="text-white-50 text-decoration-none d-flex align-items-center gap-2 hover-base fw-bold extra-small letter-spacing-2">
                      LEARN MORE <i className="icon-right-arrow-1" style={{ fontSize: '10px', marginTop: '1px' }}></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="homepage-section-cta mt-5 pt-5 text-center wow fadeInUp" data-wow-delay="700ms">
            <div className="px-4 py-5 rounded-5 shadow-2xl border-primary-glow mx-auto" style={{ background: '#101D30', border: '1px solid rgba(115, 102, 202, 0.35)', maxWidth: '1000px', boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)' }}>
              <h3 className="text-white h4 mb-3 fw-bold">Transform Your Factory with Real-Time Production Visibility</h3>
              <p className="text-white-50 mb-4 mx-auto" style={{ maxWidth: '700px' }}>Discover how Micraft MES helps manufacturing companies digitize shop floor operations and gain complete production visibility.</p>
              <Link href="/book-demo" className="thm-btn" style={{ background: '#FFD25D', color: '#0B192C' }}>
                Schedule a Live Demo <span className="icon-right-arrow-1"></span>
              </Link>
            </div>
          </div>
        </div>

        <style jsx>{`
          .servces-one { padding: 120px 0 100px; }
          .hover-translate-y { transition: all 0.4s ease; transition-delay: 0.1s; }
          .hover-translate-y:hover { transform: translateY(-10px); border-color: rgba(255,255,255,0.15) !important; box-shadow: 0 30px 60px rgba(0,0,0,0.4); }
          .shadow-glow { box-shadow: 0 10px 20px rgba(0,0,0,0.2); }
          .border-primary-glow { border: 1px solid rgba(61,114,252,0.2); }
          .shadow-2xl { box-shadow: 0 50px 100px -20px rgba(0,0,0,0.8); }
          .letter-spacing-1 { letter-spacing: -0.02em; }
          .letter-spacing-2 { letter-spacing: 2px; }
          .extra-small { font-size: 11px; }
        `}</style>
      </section>
    </>
  )
}
