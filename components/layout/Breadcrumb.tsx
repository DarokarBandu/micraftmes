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
        <div className="page-header__inner">
          <h2 className="mb-3 text-white" style={{ fontSize: '3rem', fontWeight: '700', letterSpacing: '-0.02em' }}>{displayTitle}</h2>
          <div className="thm-breadcrumb__box-refined">
            <ul className="thm-breadcrumb list-unstyled d-inline-flex align-items-center flex-wrap">
              <li><Link href="/" className="text-white text-decoration-none opacity-100 hover-base transition-all d-flex align-items-center">
                <i className="fas fa-home me-2"></i>Home
              </Link></li>
              {crumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <li className="mx-3"><span className="icon-right-arrow-1 text-white opacity-50" style={{ fontSize: '10px' }}></span></li>
                  <li className={crumb.isLast ? "text-white fw-bold" : ""}>
                    {crumb.isLast ? (
                      <span className="opacity-75">{crumb.label}</span>
                    ) : (
                      <Link href={crumb.href} className="text-white text-decoration-none opacity-100 hover-base transition-all">{crumb.label}</Link>
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
          padding: 180px 0 100px;
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
          background: linear-gradient(180deg, rgba(3, 10, 21, 0.8) 0%, rgba(3, 10, 21, 0.4) 100%);
          z-index: 1;
        }
        .page-header__inner {
          position: relative;
          z-index: 2;
        }
        .thm-breadcrumb__box-refined {
          position: relative;
          display: inline-block;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(4px);
          padding: 8px 20px;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        :global(.hover-base:hover) {
          color: #FA5674 !important;
          opacity: 1 !important;
        }
        :global(.transition-all) {
          transition: all 0.3s ease;
        }
        @media (max-width: 991px) {
          .page-header {
            padding: 150px 0 80px;
          }
          .page-header__inner h2 {
            font-size: 2.2rem !important;
          }
        }
        @media (max-width: 767px) {
          .page-header {
            padding: 130px 0 70px;
            text-align: center;
          }
          .page-header__inner h2 {
            font-size: 1.8rem !important;
          }
          .thm-breadcrumb__box-refined {
            padding: 6px 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default Breadcrumb;
