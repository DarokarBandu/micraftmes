import Layout from "@/components/layout/Layout"

export default function BookDemoPage() {
    return (
        <Layout breadcrumbTitle="Book Demo" headerStyle={1} footerStyle={1}>
            <section className="page-title pt-150 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="title text-center">Book Demo</h1>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="content-section pt-50 pb-100">
                <div className="container">
                    <p>Coming soon...</p>
                </div>
            </section>
        </Layout>
    )
}