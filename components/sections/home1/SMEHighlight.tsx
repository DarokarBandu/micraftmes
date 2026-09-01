import React from 'react';

/*
  Each card carries 4 CSS custom properties:
    --card-color      → icon colour + accent bar background
    --card-bg         → icon-wrap background  (12 % opacity equivalent)
    --card-border     → icon-wrap border      (25 % opacity equivalent)
    --card-bg-hover   → icon-wrap hover bg    (22 % opacity equivalent)

  All four are pre-computed as plain rgba() strings so Webpack's CSS
  parser never encounters color-mix(), which is the cause of the
  "[object Event]" runtime error in Next.js 15 / Webpack.
*/
const blocks = [
    {
        icon: 'fas fa-satellite-dish',
        title: 'Real-Time Production Visibility',
        text: 'Track machine status, work orders, and production output as it happens on the shop floor.',
        color: '#7366CA',
        bg: 'rgba(115, 102, 202, 0.12)',
        border: 'rgba(115, 102, 202, 0.25)',
        bgHover: 'rgba(115, 102, 202, 0.22)',
        delay: '0ms'
    },
    {
        icon: 'fas fa-clock',
        title: 'Downtime Tracking & Analysis',
        text: 'Capture downtime reasons at the source and identify production bottlenecks faster.',
        color: '#FFD25D',
        bg: 'rgba(255, 210, 93, 0.12)',
        border: 'rgba(255, 210, 93, 0.25)',
        bgHover: 'rgba(255, 210, 93, 0.22)',
        delay: '100ms'
    },
    {
        icon: 'fas fa-boxes',
        title: 'Inspection, Packing & Dispatch',
        text: 'Maintain clear visibility across quality checks, packing progress, and dispatch readiness.',
        color: '#00D261',
        bg: 'rgba(0, 210, 97, 0.12)',
        border: 'rgba(0, 210, 97, 0.25)',
        bgHover: 'rgba(0, 210, 97, 0.22)',
        delay: '200ms'
    },
    {
        icon: 'fas fa-rocket',
        title: 'Fast MES Deployment',
        text: 'Deploy a practical Manufacturing Execution System in 30–60 days without disrupting operations.',
        color: '#00D2FF',
        bg: 'rgba(0, 210, 255, 0.12)',
        border: 'rgba(0, 210, 255, 0.25)',
        bgHover: 'rgba(0, 210, 255, 0.22)',
        delay: '300ms'
    }
];

const SMEHighlight = () => {
    return (
        <section className="sme-credibility-strip">

            {/* ── 4-Block Credibility Grid ── */}
            <div className="sme-credibility-strip__content">
                <div className="container">

                    {/* Pill label */}
                    <div className="sme-credibility-strip__heading text-center">
                        <span className="sme-credibility-strip__label">
                            Built for Practical Manufacturing Execution
                        </span>
                    </div>

                    <div className="row g-3 g-lg-4">
                        {blocks.map((block, idx) => (
                            <div
                                key={idx}
                                className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                                data-wow-delay={block.delay}
                            >
                                <div
                                    className="sme-cred-card h-100"
                                    style={{
                                        '--card-color': block.color,
                                        '--card-bg': block.bg,
                                        '--card-border': block.border,
                                        '--card-bg-hover': block.bgHover,
                                    } as React.CSSProperties}
                                >
                                    {/* Icon */}
                                    <div className="sme-cred-card__icon-wrap">
                                        <i className={`${block.icon} sme-cred-card__icon`} aria-hidden="true"></i>
                                    </div>

                                    {/* Text */}
                                    <h3 className="sme-cred-card__title">{block.title}</h3>
                                    <p className="sme-cred-card__text">{block.text}</p>

                                    {/* Bottom accent bar colour — data-driven, must remain inline */}
                                    <div
                                        className="sme-cred-card__bottom-accent"
                                        style={{ background: block.color }}
                                        aria-hidden="true"
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>


        </section>
    );
};

export default SMEHighlight;
