import React from 'react';

const SMEHighlight = () => {
    return (
        <section className="sme-highlight" style={{
            background: 'linear-gradient(90deg, #0B192C 0%, #1E1B4B 100%)',
            padding: '25px 0',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            position: 'relative',
            zIndex: 10
        }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 text-center">
                        <div className="sme-highlight__content">
                            <h3 className="sme-highlight__title text-white mb-2 fs-4 fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>
                                Designed for <span style={{ color: '#FA5674' }}>Manufacturing SMEs</span>
                            </h3>
                            <div className="sme-highlight__subtitle text-uppercase fw-medium" style={{ fontSize: '15px', color: '#A5A5A5', letterSpacing: '2px' }}>
                                FAST DEPLOYMENT <span className="mx-3" style={{ color: '#6065D4' }}>|</span>
                                PRACTICAL IMPLEMENTATION <span className="mx-3" style={{ color: '#6065D4' }}>|</span>
                                REAL-TIME VISIBILITY
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SMEHighlight;
