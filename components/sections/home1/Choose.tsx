
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "@/components/elements/AnimatedTitle";

export default function Choose() {
  const industries = [
    "Automotive and Auto Components",
    "Engineering and Fabrication",
    "Electronics Manufacturing",
    "Industrial Equipment",
    "Consumer Durable Manufacturing"
  ];

  return (
    <>
        <section className="why-choose-one">
            <div className="why-choose-one__shape-3 float-bob-y">
                <Image src="/assets/images/shapes/why-choose-one-shape-3.png" alt="Shape" width={1022} height={751} priority />
            </div>
            <div className="why-choose-one__shape-4"></div>
            <div className="why-choose-one__shape-5"></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="why-choose-one__left">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline">Who It Is For</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <AnimatedTitle>
                                    <h2 className="section-title__title title-animation">
                                        Designed for <span>Manufacturing Teams</span><br />
                                        <span>That Need Better Operational Visibility</span>
                                    </h2>
                                </AnimatedTitle>
                            </div>
                            <p className="why-choose-one__text">Micraft MES is ideal for manufacturing plants that:</p>
                            <ul className="list-unstyled mb-4">
                                <li className="mb-2"><i className="fa fa-check-circle text-primary mr-2"></i> Use manual or Excel-based production tracking</li>
                                <li className="mb-2"><i className="fa fa-check-circle text-primary mr-2"></i> Have ERP systems but lack real-time shop-floor visibility</li>
                                <li className="mb-2"><i className="fa fa-check-circle text-primary mr-2"></i> Struggle to track downtime and production performance accurately</li>
                                <li className="mb-2"><i className="fa fa-check-circle text-primary mr-2"></i> Need better traceability for inspection and quality control</li>
                                <li className="mb-2"><i className="fa fa-check-circle text-primary mr-2"></i> Require clear coordination between production, packing, and dispatch</li>
                            </ul>

                            <h4 className="mb-3">Industries Served</h4>
                            <div className="row mb-4">
                                <div className="col-md-12">
                                    <ul className="list-unstyled d-flex flex-wrap gap-3">
                                        {industries.map((ind, i) => (
                                            <li key={i} className="bg-light p-2 rounded" style={{ fontSize: '14px' }}>{ind}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="why-choose-one__btn-and-client-info">
                                <div className="why-choose-one__btn-box">
                                    <Link href="/industries/automotive-component-manufacturing" className="thm-btn">View Industries<span
                                            className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="why-choose-one__right wow slideInRight" data-wow-duration="1.2s" data-wow-delay="0.4s">
                            <div className="why-choose-one__img">
                                <Image src="/assets/images/resources/why-choose-one-img-1.png" alt="Image" width={670} height={610} priority />
                            </div>
                            <div className="why-choose-one__shape-1 img-bounce">
                                <Image src="/assets/images/shapes/why-choose-one-shape-1.png" alt="Image" width={80} height={80} priority />
                            </div>
                            <div className="why-choose-one__shape-2 float-bob-x">
                                <Image src="/assets/images/shapes/why-choose-one-shape-2.png" alt="Image" width={142} height={46} priority />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

