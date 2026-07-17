import React from 'react';

interface LegalContentSectionProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalContentSection({ title, lastUpdated, children }: LegalContentSectionProps) {
  return (
    <section className="legal-content pt-100 pb-100" style={{ background: '#070C14', color: '#97a2b0' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="legal-card p-4 p-md-5 rounded-4 shadow-lg" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <div className="legal-header mb-5">
                <h1 className="text-white mb-3" style={{ fontSize: '36px', fontWeight: '700' }}>{title}</h1>
                <p className="text-white-50" style={{ fontSize: '14px' }}>Last Updated: {lastUpdated}</p>
                <div className="separator mt-4" style={{ height: '2px', width: '60px', background: '#FA5674' }}></div>
              </div>
              <div className="legal-body text-white-50" style={{ lineHeight: '1.8', fontSize: '16px' }}>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .legal-body h2 {
          color: white;
          font-size: 24px;
          font-weight: 700;
          margin-top: 40px;
          margin-bottom: 20px;
        }
        .legal-body h3 {
          color: white;
          font-size: 20px;
          font-weight: 600;
          margin-top: 30px;
          margin-bottom: 15px;
        }
        .legal-body p {
          margin-bottom: 20px;
        }
        .legal-body ul {
          margin-bottom: 25px;
          list-style: none;
          padding-left: 0;
        }
        .legal-body li {
          margin-bottom: 12px;
          display: flex;
          gap: 15px;
        }
        .legal-body li::before {
          content: '•';
          color: #FA5674;
          font-weight: bold;
        }
        .legal-card {
          backdrop-filter: blur(10px);
        }
      `}} />
    </section>
  );
}
