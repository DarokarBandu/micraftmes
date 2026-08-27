"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const mesBlogPosts = [
    {
        title: "How to Improve Shop Floor Visibility",
        category: "Shop Floor Visibility",
        date: "April 6, 2026",
        img: "/assets/images/blog/shop-floor-visibility-v4.png",
        authorImg: "/assets/images/blog/jalindra-shinde.png",
        detailUrl: "/mes-blog/shop-floor-visibility/how-to-improve-shop-floor-visibility"
    },
    {
        title: "What is Production Tracking in Manufacturing?",
        category: "Production Tracking",
        date: "March 22, 2026",
        img: "/assets/images/blog/production-tracking-v4.png",
        authorImg: "/assets/images/blog/umesh-dahare.png",
        detailUrl: "/mes-blog/production-tracking/what-is-production-tracking-in-manufacturing"
    },
    {
        title: "How to Improve Machine Utilization",
        category: "Machine Utilization",
        date: "February 28, 2026",
        img: "/assets/images/blog/machine-utilization-v4.png",
        authorImg: "/assets/images/blog/bandhu-dorokar.png",
        detailUrl: "/mes-blog/machine-utilization/how-to-improve-machine-utilization"
    },
    {
        title: "7 Ways to Improve Manufacturing Productivity",
        category: "Manufacturing Efficiency",
        date: "February 10, 2026",
        img: "/assets/images/blog/productivityoptimization.png",
        authorImg: "/assets/images/blog/Expert MicraftExpert.png",
        detailUrl: "/mes-blog/manufacturing-efficiency/7-ways-to-improve-manufacturing-productivity"
    },
    {
        title: "How to Track Quality Inspections",
        category: "Quality Control",
        date: "January 20, 2026",
        img: "/assets/images/blog/mesimplementation.png",
        authorImg: "/assets/images/blog/ManufacturingProductivity.png",
        detailUrl: "/mes-blog/quality-control/how-to-track-quality-inspections"
    },
    {
        title: "MES vs ERP: Which One Does Your Factory Need?",
        category: "Manufacturing Technology",
        date: "January 5, 2026",
        img: "/assets/images/blog/mes-erp-dashboard-v5.png",
        authorImg: "/assets/images/blog/Expert MicraftExpert.png",
        detailUrl: "/mes-blog/manufacturing-technology/mes-vs-erp"
    }
]



const tags = ["MES", "Production", "Shop Floor", "Machine", "Quality", "Efficiency", "Tracking", "Digital"]

export default function MesBlogSidebar() {
    const pathname = usePathname()

    return (
        <div className="sidebar">

            {/* Search — Updated High Fidelity */}
            <div className="sidebar__single sidebar__search bg-glass-dark border-0 p-4 rounded-5 mb-4 shadow-2xl" style={{ background: 'rgba(28, 31, 46, 0.95)' }}>
                <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom border-white border-opacity-10">
                    <div style={{ width: '8px', height: '8px', backgroundColor: '#7366CA', borderRadius: '50%', boxShadow: '0 0 10px #7366CA' }}></div>
                    <h3 className="text-white m-0 h4 fw-bold">Search</h3>
                </div>
                <p className="text-white-50 small mb-3 mt-2">Search MES blogs to discover manufacturing insights and best practices.</p>
                <form action="#" className="sidebar__search-form position-relative">
                    <input type="search" placeholder="Search Blogs" 
                           className="w-100 rounded-pill border-0 px-3 py-2 text-white-50"
                           style={{ background: 'rgba(255,255,255,0.05)', fontSize: '14px', height: '45px' }} />
                    <button type="submit" className="position-absolute end-0 top-0 h-100 border-0 bg-transparent px-3 text-primary-glow">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>

            {/* Recent Posts — Updated High Fidelity */}
            <div className="sidebar__single sidebar__post bg-glass-dark border-0 p-4 rounded-5 mb-4 shadow-2xl" style={{ background: 'rgba(28, 31, 46, 0.95)' }}>
                <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom border-white border-opacity-10">
                    <div style={{ width: '8px', height: '8px', backgroundColor: '#7366CA', borderRadius: '50%', boxShadow: '0 0 10px #7366CA' }}></div>
                    <h3 className="text-white m-0 h4 fw-bold">Recent Posts</h3>
                </div>
                <ul className="sidebar__post-list list-unstyled">
                    {mesBlogPosts.map((post, i) => (
                        <li key={i} style={pathname === post.detailUrl ? { borderLeft: '3px solid #7366CA', paddingLeft: '10px', marginBottom: '20px' } : { marginBottom: '20px' }}>
                            <div className="sidebar__post-image">
                                <div style={{ width: '80px', height: '80px', position: 'relative', borderRadius: '8px', overflow: 'hidden', flexShrink: 0 }}>
                                    <Image
                                        src={post.img}
                                        alt={post.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                            <div className="sidebar__post-content">
                                <p className="sidebar__post-date">
                                    <span className="icon-calendar"></span>{post.date}
                                </p>
                                <h3 className="sidebar__post-title">
                                    <Link href={post.detailUrl}>{post.title}</Link>
                                </h3>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tags — Updated High Fidelity */}
            <div className="sidebar__single sidebar__tags bg-glass-dark border-0 p-4 rounded-5 mb-4 shadow-2xl" style={{ background: 'rgba(28, 31, 46, 0.95)' }}>
                <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom border-white border-opacity-10">
                    <div style={{ width: '8px', height: '8px', backgroundColor: '#7366CA', borderRadius: '50%', boxShadow: '0 0 10px #7366CA' }}></div>
                    <h3 className="text-white m-0 h4 fw-bold">Keywords</h3>
                </div>
                <ul className="sidebar__tags-list clearfix list-unstyled">
                    {tags.map((tag, i) => (
                        <li key={i}><Link href="/mes-blog">{tag}</Link></li>
                    ))}
                </ul>
            </div>

            {/* Newsletter — Updated High Fidelity */}
            <div className="sidebar__single sidebar__newsletter bg-glass-dark border-0 p-4 rounded-5 shadow-2xl" style={{ background: 'rgba(28, 31, 46, 0.95)' }}>
                <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom border-white border-opacity-10">
                    <div style={{ width: '8px', height: '8px', backgroundColor: '#7366CA', borderRadius: '50%', boxShadow: '0 0 10px #7366CA' }}></div>
                    <h3 className="text-white m-0 h4 fw-bold">Subscribe</h3>
                </div>
                
                <p className="text-white-50 small mb-4 mt-2" style={{ lineHeight: '1.6' }}>
                    Subscribe to our newsletter for the latest manufacturing insights and MES updates.
                </p>
                
                <form action="#" className="sidebar__newsletter-form">
                    <div className="position-relative mb-3">
                        <div className="d-flex align-items-center rounded-pill overflow-hidden" 
                             style={{ background: '#FFFFFF', border: '1px solid rgba(255,255,255,0.1)', height: '48px' }}>
                            <input 
                                type="email" 
                                placeholder="Email" 
                                className="flex-grow-1 border-0 px-3" 
                                style={{ background: 'transparent', outline: 'none', color: '#1C1F2E', fontSize: '14px' }}
                            />
                            <div className="d-flex align-items-center justify-content-center px-3" 
                                 style={{ background: '#1C1F2E', height: '100%', color: 'white' }}>
                                <i className="far fa-envelope"></i>
                            </div>
                        </div>
                    </div>
                    
                    <button type="submit" 
                            className="w-100 border-0 rounded-pill text-white fw-bold d-flex align-items-center justify-content-center gap-2 py-2"
                            style={{ 
                                background: '#7366CA', 
                                height: '48px', 
                                transition: 'all 0.3s ease',
                                fontSize: '15px',
                                boxShadow: '0 4px 14px rgba(115, 102, 202, 0.35)'
                            }}>
                        Subscribe Now <i className="icon-right-arrow-1" style={{ fontSize: '12px' }}></i>
                    </button>
                </form>
            </div>

        </div>
    )
}
