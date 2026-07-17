// components/layout/Layout.tsx
// ✅ SERVER COMPONENT (no "use client")

import Header from "./Header"; // Client component
import Footer from "./Footer"; // Server component
import Breadcrumb from "./Breadcrumb";
import BrandSlider from "@/components/sections/common/BrandSlider"; // Reusable Component

interface LayoutProps {
  children: React.ReactNode;
  headerStyle?: number;
  footerStyle?: number;
  breadcrumbTitle?: string;
  hideBreadcrumb?: boolean;
}

export default function Layout({
  children,
  headerStyle = 1,
  footerStyle = 2,
  breadcrumbTitle,
  hideBreadcrumb = false,
}: LayoutProps) {
  return (
    <div className="page-wrapper" id="top">
      {/* Header (client component) */}
      <Header style={headerStyle} />

      {/* Breadcrumbs (server components) */}
      {breadcrumbTitle && !hideBreadcrumb && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

      {/* Main page content */}
      <main>{children}</main>

      {/* Reusable Brand Slider — Trusted by Industry Leaders */}
      <BrandSlider />

      {/* Footer (server component) */}
      <Footer style={footerStyle} />
    </div>
  );
}
