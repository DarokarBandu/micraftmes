import Layout from "@/components/layout/Layout"
import Breadcrumb from "@/components/layout/Breadcrumb"
import Contact from "@/components/sections/home2/Contact"
import MesFaqSection from "@/components/sections/InnerSection/MesFaqSection"

export default function ContactSalesPage() {
    return (
        <Layout headerStyle={1} footerStyle={2}>
            <Breadcrumb breadcrumbTitle="Contact Us" />
            
            <div className="pb-80">
                <Contact />
            </div>

            <MesFaqSection />

            {/* Google Map Section */}
            <section className="contact-page-map bg-dark-depth pb-100">
                <div className="container-fluid px-0">
                    <div className="map-inner overflow-hidden rounded-0 shadow-2xl border-y border-white border-opacity-05">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.6266007069607!2d73.7529962!3d18.5908656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b900347c5e0d%3A0x423f23980330a2a3!2sMicraft%20Solutions!5e0!3m2!1sen!2sin!4v1775477395204!5m2!1sen!2sin"
                            width="100%" 
                            height="450" 
                            style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(110%) brightness(90%)' }} 
                            allowFullScreen={true} 
                            loading="lazy"
                            title="Micraft Solutions Headquarters"
                        ></iframe>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
