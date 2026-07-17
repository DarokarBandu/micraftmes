
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
        <section className="blog-section" id="blog" style={{ padding: '80px 0', background: '#0a0d14' }}>
            <div className="container">
                <div className="section-title text-center mb-60">
                    <div className="section-title__tagline-box justify-content-center">
                        <div className="section-title__tagline-shape-1"></div>
                        <span className="section-title__tagline">Manufacturing Insights & Resources</span>
                        <div className="section-title__tagline-shape-2"></div>
                    </div>
                    <AnimatedTitle>
                        <h2 className="section-title__title" style={{ color: '#fff' }}>Latest Manufacturing <br /> <span>Trends & Expert Blogs</span></h2>
                    </AnimatedTitle>
                </div>

                <div className="row">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${blog.id * 100}ms`}>
                            <div className="blog-card-modern" style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                                marginBottom: '30px',
                                transition: 'all 0.3s ease'
                            }}>
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
                                        gap: '8px'
                                    }}>
                                        {blog.tags.map(tag => (
                                            <span key={tag} style={{
                                                background: '#1a73e8',
                                                color: '#fff',
                                                padding: '4px 12px',
                                                borderRadius: '20px',
                                                fontSize: '12px',
                                                fontWeight: '600'
                                            }}>{tag}</span>
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
                                            <div style={{ position: 'relative', width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden', background: '#ccc' }}>
                                                <Image src={blog.authorImage} alt={blog.author} fill style={{ objectFit: 'cover' }} />
                                            </div>
                                            <span style={{ color: '#fff', fontSize: '14px', fontWeight: '500' }}>{blog.author}</span>
                                        </div>
                                        <div className="blog-card-date" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '13px' }}>
                                            <span className="far fa-calendar-alt" style={{ marginRight: '6px', color: '#1a73e8' }}></span>
                                            {blog.date}
                                        </div>
                                    </div>

                                    <h3 className="blog-card-title" style={{ fontSize: '20px', lineHeight: '1.4', marginBottom: '20px' }}>
                                        <Link href={blog.link} style={{ color: '#fff', transition: '0.3s' }}>{blog.title}</Link>
                                    </h3>

                                    <Link href={blog.link} className="read-more-link" style={{
                                        color: '#1a73e8',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}>
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

            <style jsx>{`
                .blog-card-modern:hover {
                    transform: translateY(-10px);
                    border-color: rgba(26, 115, 232, 0.4);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                }
                .blog-card-title a:hover {
                    color: #1a73e8 !important;
                }
            `}</style>
        </section>
    );
}

