import Layout from "@/components/layout/Layout";
import About from "@/components/sections/home1/About";
import Banner from "@/components/sections/home1/Banner";
import Blog from "@/components/sections/home1/Blog";
import Counter from "@/components/sections/home1/Counter";
import Portfolio from "@/components/sections/home1/Portfolio";
import Process from "@/components/sections/home1/Process";
import Services from "@/components/sections/home1/Services";
import Testimonial from "@/components/sections/home1/Testimonial";
import WhoItIsFor from "@/components/sections/home1/WhoItIsFor";
import ImplementationApproach from "@/components/sections/home1/ImplementationApproach";
import OperationalImprovements from "@/components/sections/home1/OperationalImprovements";
import FinalCTA from "@/components/sections/home1/FinalCTA";

export const metadata = {
    title: "Manufacturing Execution System | Real-Time Shop Floor Visibility | Micraft MES",
    description: "Micraft MES is a Manufacturing Execution System designed for manufacturing companies that need real-time shop floor visibility. Monitor production, track downtime, manage work orders, and improve manufacturing operations with practical MES software.",
    keywords: "manufacturing execution system, MES software, shop floor visibility software, production monitoring software, manufacturing downtime tracking, MES for manufacturing SMEs, real time production tracking",
};

export default function Home_One() {

    return (
        <Layout headerStyle={1} footerStyle={2}>
            <Banner />
            {/* <SMEHighlight /> */}
            <Counter />
            <About />
            <Portfolio />
            <Services />
            <Process />
            <WhoItIsFor />
            <ImplementationApproach />
            <OperationalImprovements />
            {/* <Contact />
            <Pricing />
            <Event /> */}
            <Testimonial />
            <Blog />
            <FinalCTA />
            {/* <Newsletter /> */}
        </Layout>
    )
}
