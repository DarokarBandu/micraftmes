import type { Metadata } from "next";
import { Space_Grotesk, Marcellus } from "next/font/google";
import Script from "next/script";
import StructuredData from "@/components/seo/StructuredData";
import ChatbotScript from "@/components/seo/ChatbotScript";

import "@/public/assets/css/bootstrap.min.css";
import "@/public/assets/css/font-awesome-all.css";
import "@/public/assets/css/flaticon.css";
import "@/public/assets/css/style.css";
import "@/public/assets/css/responsive.css";
import "@/public/assets/css/mes-resources-custom.css";
import "@/public/assets/css/global-overrides.css";
import "@/public/assets/css/module-css/sme-highlight.css";
import "animate.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import 'swiper/css/effect-fade'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const marcellus = Marcellus({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.micraftmes.com'),
  title: {
    default: "Micraft MES | Manufacturing Execution System for Real-Time Shop Floor Visibility",
    template: "%s | Micraft MES",
  },
  description: "Micraft MES is a practical Manufacturing Execution System providing real-time shop floor visibility, downtime tracking, OEE monitoring, and work order tracking.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Micraft MES | Manufacturing Execution System",
    description: "Advanced Manufacturing Execution System for real-time shop floor visibility, machine downtime reduction, and production monitoring.",
    url: 'https://www.micraftmes.com',
    siteName: 'Micraft MES',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'Micraft MES',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Micraft MES | Manufacturing Execution System",
    description: "Advanced Manufacturing Execution System for real-time shop floor visibility and optimization.",
    images: ['/assets/images/logo/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storedTheme = localStorage.getItem('micraft-theme');
                  var theme = storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
        <StructuredData />
      </head>
      <body className={spaceGrotesk.className}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YBGJKLKGFE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YBGJKLKGFE');
          `}
        </Script>
        <ChatbotScript />
        <div className={marcellus.className}></div>
        {children}
      </body>
    </html>
  );
}
