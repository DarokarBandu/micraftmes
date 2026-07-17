"use client"
import { Fragment, useState, useEffect } from 'react'
import Layout from "@/components/layout/Layout"
import Breadcrumb from "@/components/layout/Breadcrumb"
import Link from "next/link"
import Image from "next/image"
import AnimatedTitle from "@/components/elements/AnimatedTitle"
import "@/public/assets/css/module-css/micraftmeswork.css"

export default function ProductionDashboardPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Layout headerStyle={1} footerStyle={2}>
      <Breadcrumb breadcrumbTitle="Digital Production Dashboard" />

      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section className="meswork-hero overflow-hidden position-relative pb-5">
        {/* Animated Background Shapes */}
        <div className="meswork-hero__glow-1"></div>
        <div className="meswork-hero__glow-2"></div>
        <div className="position-absolute float-bob-x" style={{ top: '10%', right: '5%', opacity: 0.06, zIndex: 0 }}>
          <Image src="/assets/images/shapes/main-slider-two-shape-2.png" alt="shape" width={500} height={440} />
        </div>
        <div className="position-absolute float-bob-y" style={{ bottom: '5%', left: '2%', opacity: 0.05, zIndex: 0 }}>
          <Image src="/assets/images/shapes/main-slider-two-shape-3.png" alt="shape" width={300} height={450} />
        </div>
        <div className="position-absolute" style={{ top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url(/assets/images/shapes/counter-one-bg-shape.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.04, zIndex: 0 }}></div>

        <div className="container position-relative z-1">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10 text-center">
              <div className="section-title text-center mb-4 wow fadeInUp" data-wow-delay="100ms">
                <div className="section-title__tagline-box justify-content-center">
                  <div className="section-title__tagline-shape-1"></div>
                  <span className="section-title__tagline">Real-Time Factory Intelligence</span>
                  <div className="section-title__tagline-shape-2"></div>
                </div>
                <AnimatedTitle>
                  <h1 className="section-title__title title-animation mb-4" style={{ fontSize: '52px', lineHeight: '1.15' }}>
                    Precision <span>Production Dashboard</span> & Performance Hub
                  </h1>
                </AnimatedTitle>
              </div>

              <p className="wow fadeInUp mx-auto mb-4" data-wow-delay="200ms" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontSize: '18px', maxWidth: '720px', fontWeight: 500 }}>
                View live production dashboards and factory performance metrics in one centralized view. Gain real-time clarity across every shop floor event.
              </p>

              <p className="wow fadeInUp mx-auto mb-5" data-wow-delay="300ms" style={{ color: 'rgba(255,255,255,0.45)', lineHeight: '1.7', fontSize: '15px', maxWidth: '780px' }}>
                Micraft MES provides a visual control center for your manufacturing operations. Monitor real-time output, track efficiency against targets, and gain the absolute visibility needed to keep your factory running at peak performance without manual data entry delays.
              </p>

              <div className="d-flex flex-wrap justify-content-center gap-3 wow fadeInUp mb-5 pb-4" data-wow-delay="400ms">
                <Link href="/contact" className="thm-btn">Schedule a Demo<span className="icon-right-arrow"></span></Link>
                <Link href="/solutions/real-time-production-monitoring" className="thm-btn" style={{ background: 'rgba(255,255,255,0.04)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)' }}>Explore Factory View<span className="icon-right-arrow"></span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ QUICK NAVIGATION ═══════════════ */}
      <div className="meswork-quick-nav d-none d-lg-block">
        <div className="container">
          <div className="nav-wrapper" style={{ position: 'relative', top: '-30px', zIndex: 100 }}>
            <div className="meswork-nav-inner d-flex align-items-center justify-content-center"
              style={{
                background: 'rgba(13, 19, 31, 0.85)',
                padding: '12px 30px',
                borderRadius: '100px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 20px rgba(61, 114, 252, 0.05)'
              }}>

              <div className="nav-links d-flex align-items-center justify-content-center gap-2 flex-wrap">
                {[
                  { id: "step-1-conn", label: "Asset Connectivity", icon: "network-wired", color: "#FA5674" },
                  { id: "step-2-ingest", label: "Data Ingestion", icon: "download", color: "#FFD25D" },
                  { id: "step-3-live", label: "Live Metrics", icon: "tachometer-alt", color: "#6065D4" },
                  { id: "step-4-eff", label: "Efficiency Scoring", icon: "percentage", color: "#3D72FC" },
                  { id: "step-5-trend", label: "Trend Monitoring", icon: "chart-line", color: "#00D094" },
                  { id: "step-6-review", label: "Performance Review", icon: "clipboard-list", color: "#FA5674" }
                ].map((nav, i) => (
                  <Fragment key={i}>
                    <Link href={`#${nav.id}`} className="nav-item-link px-3 py-2 d-flex align-items-center gap-3">
                      <div className="icon-wrap" style={{
                        width: 32,
                        height: 32,
                        borderRadius: '10px',
                        background: `${nav.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `1px solid ${nav.color}30`,
                        transition: 'all 0.3s ease'
                      }}>
                        <i className={`fas fa-${nav.icon}`} style={{ fontSize: '14px', color: nav.color }}></i>
                      </div>
                      <span style={{ fontSize: '13px', fontWeight: '600', color: 'rgba(255, 255, 255, 0.65)', transition: 'all 0.3s ease', whiteSpace: 'nowrap' }}>
                        {nav.label}
                      </span>
                    </Link>
                    {i < 5 && <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.08)' }}></div>}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════ INTRO SECTION ═══════════════ */}
      <section className="py-5 position-relative" style={{ background: '#08111F' }}>
        <div className="position-absolute" style={{ top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url(/assets/images/shapes/process-one-bg-shape.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.03, zIndex: 0 }}></div>
        <div className="container py-4 position-relative z-1">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <div className="section-title text-center mb-4 wow fadeInUp" data-wow-delay="100ms">
                <div className="section-title__tagline-box justify-content-center">
                  <div className="section-title__tagline-shape-1"></div>
                  <span className="section-title__tagline">Operations Hub</span>
                  <div className="section-title__tagline-shape-2"></div>
                </div>
                <AnimatedTitle>
                  <h2 className="section-title__title text-white" style={{ fontSize: '36px' }}>Digital <span>Operational Command</span></h2>
                </AnimatedTitle>
              </div>
              <p className="mx-auto" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: '1.8', fontSize: '16px', maxWidth: '680px' }}>
                Stop walking the factory floor to find production statuses. Micraft MES provides a high-fidelity visual control center for modern manufacturing managers.
              </p>
            </div>
          </div>

          <div className="row g-4 justify-content-center mb-5">
            {[
              { title: "Live Output Tracking", desc: "Real-time count of produced goods vs. scheduled shift targets", icon: "box-open", color: "#FA5674", gradient: "linear-gradient(135deg, rgba(250,86,116,0.12), rgba(250,86,116,0.04))" },
              { title: "Efficiency Dashboards", desc: "Visual percentage metrics for utilization and operator performance", icon: "tachometer-alt", color: "#6065D4", gradient: "linear-gradient(135deg, rgba(96,101,212,0.12), rgba(96,101,212,0.04))" },
              { title: "Visual Control Center", desc: "A unified birds-eye view of all machines, work orders, and priority jobs", icon: "video", color: "#FFD25D", gradient: "linear-gradient(135deg, rgba(255,210,93,0.12), rgba(255,210,93,0.04))" },
              { title: "Real-time KPI Feed", desc: "Sub-second updates on cycle times, downtime reasons, and quality trends", icon: "stream", color: "#00D094", gradient: "linear-gradient(135deg, rgba(0,208,148,0.12), rgba(0,208,148,0.04))" }
            ].map((item, idx) => (
              <div key={idx} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 100 + 100}ms`}>
                <div className="meswork-glass text-center h-100" style={{ padding: '36px 24px', borderRadius: '24px' }}>
                  <div className="d-inline-flex align-items-center justify-content-center mb-4" style={{ width: 64, height: 64, borderRadius: 18, background: item.gradient, boxShadow: `0 8px 24px ${item.color}20` }}>
                    <i className={`fas fa-${item.icon}`} style={{ fontSize: '24px', color: item.color }}></i>
                  </div>
                  <h4 className="text-white mb-2" style={{ fontSize: '18px', fontWeight: 700 }}>{item.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', lineHeight: '1.6', marginBottom: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ THE DASHBOARD CYCLE ═══════════════ */}
      <section className="py-5 position-relative" style={{ background: '#0B1320' }}>
        <div className="container py-4 position-relative z-1">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <div className="section-title text-center mb-4 wow fadeInUp">
                <div className="section-title__tagline-box justify-content-center">
                  <div className="section-title__tagline-shape-1"></div>
                  <span className="section-title__tagline">Visual Intelligence</span>
                  <div className="section-title__tagline-shape-2"></div>
                </div>
                <AnimatedTitle>
                  <h2 className="section-title__title text-white" style={{ fontSize: '36px' }}>The 6-Step <span>Factory Insight Cycle</span></h2>
                </AnimatedTitle>
              </div>
              <p className="mx-auto" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', maxWidth: '650px', lineHeight: '1.7' }}>
                From physical asset connectivity to strategic performance reviews, Micraft MES converts floor pulses into boardroom-level clarity.
              </p>
            </div>
          </div>

          {/* CYCLE ARCHITECTURE */}
          <div className="mes-infographic-container position-relative mx-auto mt-5" style={{ maxWidth: '1000px', padding: '20px 0 80px 0' }}>
            <div className="text-center position-relative w-100 mb-5 wow zoomIn" style={{ zIndex: 10 }}>
              <div className="d-inline-flex flex-column align-items-center justify-content-center mes-timeline-hub" style={{ width: '150px', height: '150px', borderRadius: '50%', background: 'linear-gradient(135deg, #070C14 0%, #1a2a40 100%)', border: '2px solid rgba(61, 114, 252, 0.4)', boxShadow: '0 0 40px rgba(61, 114, 252, 0.3), inset 0 0 20px rgba(61, 114, 252, 0.2)' }}>
                <div className="mb-2">
                  <i className="fas fa-desktop" style={{ fontSize: '28px', color: '#3D72FC' }}></i>
                </div>
                <h3 className="text-white fw-bold mb-0" style={{ fontSize: '20px', letterSpacing: '1px' }}>Command Hub</h3>
                <div style={{ color: '#3D72FC', fontSize: '11px', fontWeight: '800', letterSpacing: '2px' }}>MICRAFT MES</div>
              </div>
            </div>

            <div className="mes-timeline-center-line"></div>
            <div className="mes-timeline-arrow-bottom"></div>

            {[
              { title: "Asset Connectivity", icon: "network-wired", color: "#3D72FC", desc: "Synchronize floor terminals and machine PLCs to a centralized data stream." },
              { title: "Automated Data Ingestion", icon: "download", color: "#FFD25D", desc: "Continuously pull production counts and status codes from operator touchpoints." },
              { title: "Live Metrics Visualization", icon: "tachometer-alt", color: "#FA5674", desc: "Display real-time KPI gauges for OEE, output, and utilization across the plant." },
              { title: "Efficiency Scoring", icon: "percentage", color: "#6065D4", desc: "Calculate performance vs. target in real-time to identify underperforming stations." },
              { title: "Historical Trend Monitoring", icon: "chart-line", color: "#00D094", desc: "Visualize shift-wise and daily production history for long-term improvement." },
              { title: "Performance Strategic Review", icon: "clipboard-list", color: "#FA5674", desc: "Use data-driven reports to conduct production meetings and drive accountability." }
            ].map((step, idx) => {
              const isRight = idx % 2 === 0;
              return (
                <div className={`mes-timeline-item row align-items-center position-relative wow fadeInUp`} data-wow-delay={`${(idx * 100) + 100}ms`} key={idx} style={{ marginBottom: '30px', minHeight: '120px' }}>
                  <div className="col-lg-6 col-12 position-relative text-end pe-4 pe-lg-5 d-flex flex-row-reverse align-items-center justify-content-start mes-mobile-row">
                    {!isRight && (
                      <>
                        <div className="mes-step-square d-flex align-items-center justify-content-center flex-shrink-0 ms-4 step-left-side" style={{ background: step.color, boxShadow: `0 8px 30px ${step.color}66` }}>
                          STEP 0{idx + 1}
                        </div>
                        <div className="mes-step-info d-flex align-items-center gap-4 flex-grow-1 py-3 text-end" style={{ borderTop: '1px solid rgba(255,255,255,0.4)', borderBottom: '1px solid rgba(255,255,255,0.4)' }}>
                          <div className="mes-step-info-icon" style={{ color: step.color, fontSize: '38px', minWidth: '45px', textAlign: 'center' }}>
                            <i className={`fas fa-${step.icon}`}></i>
                          </div>
                          <div className="mes-step-info-text flex-grow-1">
                            <h4 style={{ color: step.color, fontSize: '18px', fontWeight: '700', marginBottom: '6px' }}>{step.title}</h4>
                            <p className="text-white-50 mb-0" style={{ fontSize: '12px', lineHeight: '1.6' }}>{step.desc}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="col-lg-6 col-12 position-relative ps-4 ps-lg-5 d-flex align-items-center justify-content-start mes-mobile-row">
                    {isRight && (
                      <>
                        <div className="mes-step-square d-flex align-items-center justify-content-center flex-shrink-0 me-4 step-right-side" style={{ background: step.color, boxShadow: `0 8px 30px ${step.color}66` }}>
                          STEP 0{idx + 1}
                        </div>
                        <div className="mes-step-info d-flex align-items-center gap-4 flex-grow-1 py-3 text-start" style={{ borderTop: '1px solid rgba(255,255,255,0.4)', borderBottom: '1px solid rgba(255,255,255,0.4)' }}>
                          <div className="mes-step-info-text flex-grow-1">
                            <h4 style={{ color: step.color, fontSize: '18px', fontWeight: '700', marginBottom: '6px' }}>{step.title}</h4>
                            <p className="text-white-50 mb-0" style={{ fontSize: '12px', lineHeight: '1.6' }}>{step.desc}</p>
                          </div>
                          <div className="mes-step-info-icon" style={{ color: step.color, fontSize: '38px', minWidth: '45px', textAlign: 'center' }}>
                            <i className={`fas fa-${step.icon}`}></i>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <style dangerouslySetInnerHTML={{
            __html: `
                        .mes-timeline-hub:hover {
                            transform: scale(1.05);
                            box-shadow: 0 0 60px rgba(61, 114, 252, 0.5), inset 0 0 30px rgba(61, 114, 252, 0.3) !important;
                            transition: all 0.4s ease;
                        }
                        .mes-timeline-center-line {
                            position: absolute;
                            top: 170px;
                            bottom: 0;
                            left: 50%;
                            width: 2px;
                            background: linear-gradient(to bottom, rgba(61, 114, 252, 0.6), rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.1));
                            transform: translateX(-50%);
                            z-index: 0;
                        }
                        .mes-timeline-arrow-bottom {
                            position: absolute;
                            bottom: -15px; 
                            left: 50%;
                            width: 0; 
                            height: 0; 
                            border-left: 10px solid transparent;
                            border-right: 10px solid transparent;
                            border-top: 14px solid rgba(255,255,255,0.4);
                            transform: translateX(-50%);
                            z-index: 1;
                        }
                        .mes-step-square {
                            width: 110px; 
                            height: 100px; 
                            border-radius: 20px; 
                            color: #fff; 
                            font-weight: 800; 
                            font-size: 15px; 
                            letter-spacing: 0.5px; 
                            z-index: 10; 
                            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
                            position: relative;
                        }
                        .step-right-side { margin-left: -55px; }
                        .step-left-side { margin-right: -55px; }

                        .mes-timeline-item:hover .mes-step-square { 
                            transform: scale(1.1) translateY(-5px); 
                            box-shadow: 0 15px 40px rgba(0,0,0,0.5) !important;
                        }
                        
                        @media (max-width: 991px) {
                            .mes-timeline-center-line, .mes-timeline-arrow-bottom { display: none; }
                            .mes-timeline-item { padding: 0 15px; flex-direction: column !important; align-items: flex-start !important; }
                            .mes-timeline-item .mes-mobile-row { width: 100%; padding: 0 !important; text-align: left !important; flex-direction: row !important; justify-content: flex-start !important; margin-bottom: 25px; }
                            .mes-timeline-item .mes-mobile-row > .mes-step-square { margin: 0 20px 0 0 !important; width: 80px; height: 80px; font-size: 13px; transform: none !important; }
                            .mes-timeline-item .mes-mobile-row > .mes-step-info { flex-direction: column !important; text-align: left !important; align-items: flex-start !important; padding: 15px 0 !important; }
                            .mes-step-info-icon { display: none !important; }
                            .mes-step-info-text h4 { font-size: 18px !important; }
                            .step-right-side, .step-left-side { margin: 0 20px 0 0 !important; }
                        }
                    `}} />
        </div>
      </section>

      {/* ═══════════════ DETAILED FEATURE SECTIONS ═══════════════ */}
      <section className="py-5 position-relative" style={{ background: '#070C14' }}>
        <div className="container py-4 position-relative z-1">

          {/* FEATURE 1: LIVE OUTPUT */}
          <div className="meswork-step-detail mb-5 wow fadeInUp" id="step-3-live" style={{ borderLeft: '4px solid #FA5674' }}>
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <div className="meswork-cycle-num mb-3" style={{ background: 'linear-gradient(135deg, #FA5674, #6065D4)' }}>01</div>
                <AnimatedTitle>
                  <h2 className="section-title__title text-white mb-3" style={{ fontSize: '30px' }}>Real-Time <span>Production Output</span></h2>
                </AnimatedTitle>
                <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: '1.7', marginBottom: '20px' }}>
                  Stop guessing about shift performance. Micraft MES provides a high-fidelity ticker of completed goods, grouped by order and workstation.
                </p>
                <ul className="meswork-checklist mb-4">
                  <li>Actual vs Target gauges updated in real-time</li>
                  <li>Live notifications for target achievement or deviations</li>
                  <li>Shift-wise visual trackers for high-volume lines</li>
                  <li>Automatic calculation of run-rates and pending quantities</li>
                </ul>
                <Link href="/solutions/real-time-production-monitoring" className="meswork-link" style={{ color: '#FA5674' }}>
                   View Dashboard Features <i className="icon-right-arrow"></i>
                </Link>
              </div>
              <div className="col-lg-5">
                <div className="meswork-img-card meswork-img-glow p-2">
                  <Image src="/assets/images/features/pd_hero_new.png" alt="Live Output" width={440} height={280} className="w-100" style={{ borderRadius: '20px', objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>

          {/* FEATURE 2: FACTORY EFFICIENCY */}
          <div className="meswork-step-detail mb-5 wow fadeInUp" id="step-4-eff" style={{ borderLeft: '4px solid #FFD25D' }}>
            <div className="row align-items-center g-4">
              <div className="col-lg-5 order-2 order-lg-1">
                <div className="meswork-img-card meswork-img-glow p-2">
                  <Image src="/assets/images/features/pd_monitoring_new.png" alt="Efficiency Dashboard" width={440} height={280} className="w-100" style={{ borderRadius: '20px', objectFit: 'cover' }} />
                </div>
              </div>
              <div className="col-lg-7 order-1 order-lg-2">
                <div className="meswork-cycle-num mb-3" style={{ background: 'linear-gradient(135deg, #FFD25D, #FA5674)' }}>02</div>
                <AnimatedTitle>
                  <h2 className="section-title__title text-white mb-3" style={{ fontSize: '30px' }}>Factory <span>Efficiency Dashboards</span></h2>
                </AnimatedTitle>
                <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: '1.7', marginBottom: '20px' }}>
                  A visual breakdown of your factory&apos;s health. Monitor utilization across machine groups and identify exactly where performance is lagging.
                </p>
                <ul className="meswork-checklist mb-4">
                  <li>Instant OEE calculation at the machine and factory level</li>
                  <li>Color-coded status maps for Running, Idle, and Stopped assets</li>
                  <li>Top-down view of work order flow vs. planned schedule</li>
                  <li>Operator productivity metrics and shift performance ranking</li>
                </ul>
                <Link href="/features/production-analytics-reports" className="meswork-link" style={{ color: '#FFD25D' }}>
                   Performance Analytics <i className="icon-right-arrow"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* FEATURE 3: TARGET COMPARISON */}
          <div className="meswork-step-detail mb-5 wow fadeInUp" id="step-6-review" style={{ borderLeft: '4px solid #6065D4' }}>
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <div className="meswork-cycle-num mb-3" style={{ background: 'linear-gradient(135deg, #6065D4, #3D72FC)' }}>03</div>
                <AnimatedTitle>
                  <h2 className="section-title__title text-white mb-3" style={{ fontSize: '30px' }}>Automated <span>Target Comparison</span></h2>
                </AnimatedTitle>
                <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: '1.7', marginBottom: '20px' }}>
                  Keep your floor teams accountable. Our system compares live production against the original schedule, providing predictive alerts for potential delays.
                </p>
                <ul className="meswork-checklist mb-4">
                  <li>Automated &quot;What-If&quot; impact analysis for machine stops</li>
                  <li>Visual progress tracking for critical path work orders</li>
                  <li>Digital whiteboards for shared shop floor visibility</li>
                  <li>Integrated meeting tool for production stand-ups</li>
                </ul>
                <Link href="/features/production-planning-scheduling" className="meswork-link" style={{ color: '#6065D4' }}>
                  Scheduling Integration <i className="icon-right-arrow"></i>
                </Link>
              </div>
              <div className="col-lg-5">
                <div className="meswork-img-card meswork-img-glow p-2">
                  <Image src="/assets/images/features/pd_traceability.png" alt="Target Comparison" width={440} height={280} className="w-100" style={{ borderRadius: '20px', objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════ IMPACT & BENEFITS ═══════════════ */}
      <section className="py-5" style={{ background: '#070C14' }}>
        <div className="container py-5">
          <div className="section-title text-center mb-5 wow fadeInUp">
            <div className="section-title__tagline-box mx-auto">
              <span className="section-title__tagline">Quantitative ROI</span>
            </div>
            <AnimatedTitle>
              <h2 className="section-title__title text-white" style={{ fontSize: '36px' }}>The Impact of <span>Unified Visibility</span></h2>
            </AnimatedTitle>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              { title: "100% Floor Visibility", text: "Know the status of every machine and order without leaving your desk.", icon: "satellite", color: "#FA5674" },
              { title: "Fast Decision Making", text: "React to operational hurdles in seconds with live performance data.", icon: "bolt", color: "#FFD25D" },
              { title: "Identifying Bottlenecks", text: "Visually pinpoint exactly where work orders are accumulating.", icon: "filter", color: "#6065D4" },
              { title: "Proactive Issue Management", text: "Solve minor stops before they snowball into major production delays.", icon: "heartbeat", color: "#3D72FC" },
              { title: "Scalable Factory Monitoring", text: "Deploy across a single line or multiple factory locations globally.", icon: "expand-arrows-alt", color: "#00D094" }
            ].map((benefit, idx) => (
              <div key={idx} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 100}ms`}>
                <div className="meswork-benefit h-100">
                  <div className="meswork-benefit__icon" style={{ background: `${benefit.color}12`, color: benefit.color, boxShadow: `0 4px 12px ${benefit.color}20` }}>
                    <i className={`fas fa-${benefit.icon}`}></i>
                  </div>
                  <h4 className="text-white mb-2" style={{ fontSize: '20px', fontWeight: 700 }}>{benefit.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '15px', lineHeight: '1.6' }}>{benefit.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ RELATED FEATURES ═══════════════ */}
      <section className="py-5" style={{ background: '#0B1320' }}>
        <div className="container">
          <div className="section-title text-center mb-5">
            <AnimatedTitle>
              <h2 className="section-title__title text-white" style={{ fontSize: '32px' }}>Integrated <span>Command Ecosystem</span></h2>
            </AnimatedTitle>
          </div>
          <div className="row g-3 justify-content-center">
            {[
              { name: "Order Tracking", path: "/features/work-order-tracking", icon: "tasks", color: "#FA5674" },
              { name: "Live OEE Monitoring", path: "/features/machine-monitoring", icon: "chart-line", color: "#00D094" },
              { name: "Smarter Scheduling", path: "/features/production-planning-scheduling", icon: "calendar-alt", color: "#FFD25D" },
              { name: "Quality Control", path: "/features/quality-inspection-management", icon: "shield-alt", color: "#00D094" },
              { name: "Operator Hub", path: "/features/shop-floor-data-collection", icon: "tablet-alt", color: "#6065D4" },
              { name: "Performance Reports", path: "/features/production-analytics-reports", icon: "file-chart-line", color: "#FFD25D" }
            ].map((solution, i) => (
              <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                <Link href={solution.path} className="d-block p-4 h-100 text-decoration-none"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '20px',
                    transition: 'all 0.3s ease'
                  }}>
                  <div className="d-flex align-items-center gap-3">
                    <div className="d-flex align-items-center justify-content-center"
                      style={{ width: 45, height: 45, borderRadius: '12px', background: `${solution.color}12`, border: `1px solid ${solution.color}25` }}>
                      <i className={`fas fa-${solution.icon}`} style={{ color: solution.color, fontSize: '18px' }}></i>
                    </div>
                    <h4 className="text-white mb-0" style={{ fontSize: '15px', fontWeight: '600' }}>{solution.name}</h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FINAL CALL TO ACTION ═══════════════ */}
      <section className="newsletter-one newsletter-three" style={{ padding: '80px 0 0 0', background: '#070C14' }}>
        <div className="container">
          <div className="newsletter-one__inner" style={{ background: 'linear-gradient(90deg, #3D72FC 0%, #FA5674 100%)' }}>
            <div className="newsletter-one__shape-bg" style={{ backgroundImage: "url(/assets/images/shapes/newsletter-one-shape-bg.png)" }}></div>
            <div className="newsletter-one__img">
              <Image src="/assets/images/backgrounds/cta.png" alt="Image" width={280} height={280} priority />
            </div>

            <div className="row justify-content-center text-center">
              <div className="col-lg-10" style={{ position: 'relative', zIndex: 5 }}>
                <AnimatedTitle>
                  <h2 className="newsletter-one__title text-white mb-20" style={{ fontSize: '42px', lineHeight: '1.2' }}>
                    Command Your <span>Factory Operations</span>
                  </h2>
                </AnimatedTitle>
                <p className="newsletter-one__text text-white mb-40 mx-auto" style={{ maxWidth: '750px' }}>
                  Stop guessing about your shop floor performance. Gain the clarity and control you need to ensure every shift hits its targets and every order stays on schedule.
                </p>

                <div className="cta-btns d-flex flex-wrap justify-content-center gap-4">
                  <Link href="/contact" className="thm-btn" style={{ background: '#0B192C', color: '#fff' }}>
                    Schedule a Demo <span className="icon-arrow-right"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
