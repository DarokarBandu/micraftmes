import type { Metadata } from "next";
import { Space_Grotesk, Marcellus } from "next/font/google";

import "@/public/assets/css/bootstrap.min.css";
import "@/public/assets/css/font-awesome-all.css";
import "@/public/assets/css/flaticon.css";
import "@/public/assets/css/style.css";
import "@/public/assets/css/responsive.css";
import "@/public/assets/css/mes-resources-custom.css";
import "animate.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import 'swiper/css/effect-fade'
import CustomCursor from "@/components/elements/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // available weights
  display: 'swap',
});

const marcellus = Marcellus({
  subsets: ['latin'],
  weight: '400', // you can choose available weights
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Micraft MES | Manufacturing Excellence System",
  description: "Advanced Manufacturing Execution System for real-time shop floor visibility and optimization.",
  icons: {
    icon: '/assets/images/logo/favicon.svg',
    shortcut: '/assets/images/logo/favicon.svg',
    apple: '/assets/images/logo/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`custom-cursor ${spaceGrotesk.className}`}>
        <CustomCursor />
        <div className={marcellus.className}></div>
        {children}
      </body>
    </html>
  );
}
