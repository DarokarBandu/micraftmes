
"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "@/components/elements/AnimatedTitle";

const blogs = [
    {
        id: 1,
        title: "How to Improve Shop Floor Visibility",
        image: "/assets/images/blog/shop-floor-visibility-v4.png",
        tags: ["Industrial", "Shop Floor Visibility"],
        author: "Jalindra Shinde",
        authorImage: "/assets/images/blog/jalindra-shinde.png",
        date: "April 6, 2026",
        link: "/resources/shop-floor-visibility-guide"
    },
    {
        id: 2,
        title: "What is Production Tracking in Manufacturing?",
        image: "/assets/images/blog/production-tracking-v4.png",
        tags: ["Industrial", "Production Tracking"],
        author: "Umesh Dahare",
        authorImage: "/assets/images/blog/umesh-dahare.png",
        date: "March 22, 2026",
        link: "/resources/what-is-production-tracking"
    },
    {
        id: 3,
        title: "How to Improve Machine Utilization",
        image: "/assets/images/blog/machine-utilization-v4.png", tags: ["Industrial", "Machine Utilization"],
        author: "Bandhu Dorokar",
        authorImage: "/assets/images/blog/bandhu-dorokar.png",
        date: "February 28, 2026",
        link: "/resources/improve-machine-utilization"
    }
];

export default function Blog() {
    return (
        <section className="blog-section" id="blog" style={{ padding: '50px 0 80px' }}>
            <div className="container">
                <div className="section-title text-center mb-60">
                    <div className="section-title__tagline-box justify-content-center">
                        <div className="section-title__tagline-shape-1"></div>
                        <span className="section-title__tagline">Manufacturing Insights &amp; Resources</span>
                        <div className="section-title__tagline-shape-2"></div>
                    </div>
                    <AnimatedTitle>
                        <h2 className="section-title__title">Latest Manufacturing <br /> <span>Trends &amp; Expert Blogs</span></h2>
                    </AnimatedTitle>
                </div>

                <div className="row">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${blog.id * 100}ms`}>
                            <div className="blog-card-modern mb-30">
                                <div className="blog-card-img" style={{ position: 'relative', height: '248px' }}>
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className="blog-card-tags" style={{
                                        position: 'absolute',
                                        bottom: '20px',
                                        left: '20px',
                                        display: 'flex',
                                        gap: '8px',
                                        zIndex: 2
                                    }}>
                                        {blog.tags.map(tag => (
                                            <span key={tag} className="blog-tag-badge">{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="blog-card-content" style={{ padding: '25px' }}>
                                    <div className="blog-card-meta" style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '15px'
                                    }}>
                                        <div className="blog-card-author" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div style={{ position: 'relative', width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden', border: '1px solid #E2E8F0' }}>
                                                <Image src={blog.authorImage} alt={blog.author} fill style={{ objectFit: 'cover' }} />
                                            </div>
                                            <span className="blog-card-author-name">{blog.author}</span>
                                        </div>
                                        <div className="blog-card-date">
                                            <span className="far fa-calendar-alt" style={{ marginRight: '6px' }}></span>
                                            {blog.date}
                                        </div>
                                    </div>

                                    <h3 className="blog-card-title">
                                        <Link href={blog.link}>{blog.title}</Link>
                                    </h3>

                                    <Link href={blog.link} className="read-more-link">
                                        Read More <span className="icon-right-arrow"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-40">
                    <Link href="/mes-blog" className="thm-btn">View All Blogs <span className="icon-right-arrow"></span></Link>
                </div>
            </div>
        </section>
    );
}

