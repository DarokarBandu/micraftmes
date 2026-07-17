// components/layout/Footer.tsx
// ✅ Server Component (no "use client" needed)

import Footer2 from "./footer/Footer2";

interface FooterProps {
  style?: number;
}

/**
 * Footer Component
 * 
 * This component dynamically renders a footer style based on the "style" prop.
 * It runs on the server by default (no client-side JS needed).
 */
export default function Footer({}: FooterProps) {
  // Use the style prop if needed to switch between footer versions
  // For now, we only have Footer2.
  return <Footer2 />;
}
