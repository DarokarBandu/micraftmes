import Layout from "@/components/layout/Layout";
import About from "@/components/sections/home1/About";
import Banner from "@/components/sections/home1/Banner";
import Blog from "@/components/sections/home1/Blog";
import Counter from "@/components/sections/home1/Counter";
import Portfolio from "@/components/sections/home1/Portfolio";
import Process from "@/components/sections/home1/Process";
import Services from "@/components/sections/home1/Services";

import WhoItIsFor from "@/components/sections/home1/WhoItIsFor";
import ImplementationApproach from "@/components/sections/home1/ImplementationApproach";
import OperationalImprovements from "@/components/sections/home1/OperationalImprovements";
import FinalCTA from "@/components/sections/home1/FinalCTA";

export const metadata = {
    title: "Manufacturing Execution System | Real-Time Shop Floor Visibility | Micraft MES",
    description: "Micraft MES is a Manufacturing Execution System designed for manufacturing companies that need real-time shop floor visibility. Monitor production, track downtime, manage work orders, and improve manufacturing operations with practical MES software.",
    keywords: "manufacturing execution system, MES software, shop floor visibility software, production monitoring software, manufacturing downtime tracking, MES for manufacturing SMEs, real time production tracking",
    alternates: {
        canonical: 'https://www.micraftmes.com/',
    },
    openGraph: {
        url: 'https://www.micraftmes.com/',
    },
};

export default function Home_One() {

    return (
        <Layout headerStyle={1} footerStyle={2}>
            {/* 1. HERO SLIDER — 4 slides with SEO headlines */}
            <Banner />
            {/* 2. QUICK CREDIBILITY STRIP — Built for Practical Manufacturing */}
            <Counter />
            {/* 3. TRUST / POSITIONING SECTION — Why plants lack visibility */}
            <About />
            {/* 4. VISUAL PROOF — Product Screenshots */}
            <Portfolio />
            {/* 5. KEY CAPABILITIES */}
            <Services />
            {/* 6. HOW IT WORKS */}
            <Process />
            {/* 7. WHO IT IS FOR */}
            <WhoItIsFor />
            {/* 8. IMPLEMENTATION APPROACH */}
            <ImplementationApproach />
            {/* 9. BUSINESS IMPACT */}
            <OperationalImprovements />
            {/* Additional: Blog */}
            <Blog />
            {/* 10. FINAL CTA */}
            <FinalCTA />
        </Layout>
    )
}
