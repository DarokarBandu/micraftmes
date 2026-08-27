'use client';
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbProps {
  breadcrumbTitle?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumbTitle }) => {
  const pathname = usePathname() || "";

  // Generate crumbs from pathname
  const pathSegments = pathname.split('/').filter(segment => segment !== "");

  const lastSegment = pathSegments[pathSegments.length - 1];
  const inferredTitle = lastSegment
    ? lastSegment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    : "Home";

  const displayTitle = breadcrumbTitle || inferredTitle;

  const crumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const label = segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    // For the last segment, use displayTitle
    const displayLabel = (index === pathSegments.length - 1) ? displayTitle : label;

    return {
      label: displayLabel,
      href,
      isLast: index === pathSegments.length - 1
    };
  });

  return (
    <section className="page-header">
      <div className="page-header__bg" style={{ backgroundImage: "url(/assets/images/backgrounds/breadcrumb.jpg)" }}>
      </div>
      <div className="container">
        <div className="page-header__inner text-center">
          <h1 className="page-header__title mb-3" style={{ color: '#FFFFFF' }}>{displayTitle}</h1>
          <div className="thm-breadcrumb__box-refined">
            <ul className="thm-breadcrumb list-unstyled d-inline-flex align-items-center justify-content-center flex-wrap mb-0">
              <li>
                <Link href="/" className="breadcrumb-nav-link text-decoration-none hover-base transition-all d-flex align-items-center" style={{ color: '#FFFFFF' }}>
                  <i className="fas fa-home me-1"></i>Home
                </Link>
              </li>
              {crumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <li className="crumb-sep" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                    <span className="icon-right-arrow-1"></span>
                  </li>
                  <li className={crumb.isLast ? "fw-bold active-crumb" : ""}>
                    {crumb.isLast ? (
                      <span className="active-crumb-label" style={{ color: '#FFFFFF', opacity: 0.95 }}>{crumb.label}</span>
                    ) : (
                      <Link href={crumb.href} className="breadcrumb-nav-link text-decoration-none hover-base transition-all" style={{ color: '#FFFFFF' }}>
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        .page-header {
          position: relative;
          padding: 175px 0 75px;
          background-color: #030a15;
          overflow: hidden;
        }
        .page-header__bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          z-index: 0;
        }
        .page-header__bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(3, 10, 21, 0.85) 0%, rgba(3, 10, 21, 0.6) 100%);
          z-index: 1;
        }
        .page-header__inner {
          position: relative;
          z-index: 2;
          max-width: 900px;
          margin: 0 auto;
        }
        .page-header__title {
          color: #ffffff !important;
          font-size: 32px;
          font-weight: 700;
          letter-spacing: -0.5px;
          line-height: 1.25;
          margin-bottom: 16px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
        }
        :global([data-theme="light"] .page-header .page-header__title),
        :global([data-theme="light"] .page-header h1),
        :global([data-theme="dark"] .page-header .page-header__title),
        :global([data-theme="dark"] .page-header h1) {
          color: #ffffff !important;
        }
        .thm-breadcrumb__box-refined {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          padding: 8px 22px;
          border-radius: 40px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          max-width: 100%;
          font-size: 13.5px;
        }
        :global(.thm-breadcrumb li),
        :global(.thm-breadcrumb li a),
        :global(.thm-breadcrumb li span),
        :global(.breadcrumb-nav-link),
        :global(.active-crumb-label),
        :global([data-theme="light"] .page-header .breadcrumb-nav-link),
        :global([data-theme="light"] .page-header .active-crumb-label),
        :global([data-theme="light"] .page-header .thm-breadcrumb a),
        :global([data-theme="light"] .page-header .thm-breadcrumb span) {
          color: #ffffff !important;
        }
        :global(.crumb-sep) {
          margin: 0 8px;
          font-size: 9px;
          display: flex;
          align-items: center;
          color: rgba(255, 255, 255, 0.6) !important;
        }
        :global(.hover-base:hover),
        :global([data-theme="light"] .page-header .breadcrumb-nav-link:hover) {
          color: #FFD25D !important;
          opacity: 1 !important;
        }
        :global(.transition-all) {
          transition: all 0.25s ease;
        }
        @media (max-width: 991px) {
          .page-header {
            padding: 140px 0 60px;
          }
          .page-header__title {
            font-size: 26px;
            margin-bottom: 14px;
          }
        }
        @media (max-width: 767px) {
          .page-header {
            padding: 125px 0 50px;
          }
          .page-header__title {
            font-size: 22px;
            letter-spacing: -0.3px;
            margin-bottom: 12px;
          }
          .thm-breadcrumb__box-refined {
            padding: 6px 16px;
            font-size: 12px;
            border-radius: 20px;
          }
          :global(.crumb-sep) {
            margin: 0 5px;
            font-size: 8px;
          }
        }
        @media (max-width: 480px) {
          .page-header {
            padding: 115px 0 40px;
          }
          .page-header__title {
            font-size: 19px;
            line-height: 1.3;
            margin-bottom: 10px;
          }
          .thm-breadcrumb__box-refined {
            padding: 5px 12px;
            font-size: 11.5px;
          }
          :global(.crumb-sep) {
            margin: 0 4px;
            font-size: 7.5px;
          }
        }
      `}</style>
    </section>
  );
};

export default Breadcrumb;
