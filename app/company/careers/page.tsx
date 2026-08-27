"use client"
import Layout from "../../../components/layout/Layout"
import Breadcrumb from "../../../components/layout/Breadcrumb"
import Link from "next/link"
import Image from "next/image"
import AnimatedTitle from "../../../components/elements/AnimatedTitle"
import FinalCTA from "../../../components/sections/home1/FinalCTA"
import { useState } from "react"

export default function CareersPage() {
    const [status, setStatus] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage(null);
        
        const form = e.currentTarget;
        const formData = new FormData(form);
        
        try {
            const res = await fetch("/api/careers", {
                method: "POST",
                body: formData,
            });
            const json = await res.json().catch(() => ({}));
            if (res.ok && json.success !== false) {
                setStatus("success");
                form.reset();
                setFileName(null);
            } else {
                setStatus("error");
                setErrorMessage(json.message || "Failed to submit application. Please try again.");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
            setErrorMessage("Network error. Please try again or email careers@micraft.co.in.");
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 8 * 1024 * 1024) {
                alert(`The selected file is ${(file.size / (1024 * 1024)).toFixed(1)} MB. Please select a resume smaller than 8 MB.`);
                e.target.value = "";
                setFileName(null);
                return;
            }
            setFileName(`${file.name} (${(file.size / 1024).toFixed(1)} KB)`);
        } else {
            setFileName(null);
        }
    };

    return (
        <Layout headerStyle={1} footerStyle={2}>
            <Breadcrumb breadcrumbTitle="Careers at Micraft" />

            {/* 1. Hero Section */}
            <section className="careers-hero pt-100 pb-100 overflow-hidden" id="careers-hero" style={{ background: '#070C14', position: 'relative' }}>
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline">Join Our Team</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                <AnimatedTitle>
                                    <h1 className="section-title__title text-white">Careers at <span>Micraft</span></h1>
                                </AnimatedTitle>
                            </div>
                            <div className="mt-4 text-white">
                                <p className="mb-4" style={{ fontSize: '20px', fontWeight: '600', color: '#FA5674' }}>
                                    Join us in building technology platforms that transform manufacturing operations and enable factories to gain real-time production visibility.
                                </p>
                                <p className="text-white-50 mb-4" style={{ fontSize: '18px' }}>
                                    Micraft is focused on building innovative manufacturing technology solutions that help factories monitor production operations and improve operational efficiency.
                                </p>
                                <p className="text-white-50 mb-5" style={{ fontSize: '18px' }}>
                                    We are always looking for passionate individuals who are excited about building products that solve real-world manufacturing challenges.
                                </p>
                                <div className="btn-box">
                                    <Link href="#opportunities" className="thm-btn">Explore Opportunities <span className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="careers-img-wrap p-2 bg-dark rounded-5 border border-secondary border-opacity-10 overflow-hidden shadow-2xl">
                                <Image 
                                    src="/assets/images/backgrounds/PracticalImplementation.jpg" 
                                    alt="Work at Micraft" 
                                    width={600} 
                                    height={500} 
                                    className="img-fluid rounded-4" 
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Why Join Micraft */}
            <section className="why-join pt-100 pb-100" style={{ background: '#0e121d' }}>
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <h2 className="section-title__title text-white">Why Join <span>Micraft</span></h2>
                        <p className="text-white-50 mt-3" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            At Micraft, we are building technology platforms that help manufacturers improve production visibility and operational efficiency.
                        </p>
                    </div>
                    <div className="row g-4">
                        {[
                            { title: "Impactful Work", desc: "opportunity to work on impactful manufacturing technology products", icon: "rocket" },
                            { title: "Innovation", desc: "collaborative and innovation-driven environment", icon: "lightbulb" },
                            { title: "Real-world Challenges", desc: "exposure to real-world manufacturing challenges", icon: "tools" },
                            { title: "Growth", desc: "opportunity to contribute to product development and growth", icon: "chart-line" }
                        ].map((item, idx) => (
                            <div key={idx} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 100}ms`}>
                                <div className="why-card h-100 p-5 rounded-4 text-center border border-secondary border-opacity-10 shadow-lg" style={{ background: 'rgba(255,255,255,0.02)', transition: 'all 0.3s ease' }}>
                                    <div className="icon-box mb-4 mx-auto" style={{ width: '60px', height: '60px', background: 'rgba(250, 86, 116, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FA5674' }}>
                                        <i className={`fas fa-${item.icon} fa-2x`}></i>
                                    </div>
                                    <h4 className="text-white mb-3" style={{ fontSize: '18px', fontWeight: '700' }}>{item.title}</h4>
                                    <p className="text-white-50 small mb-0">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Our Work Culture */}
            <section className="culture-section pt-100 pb-100" style={{ background: '#070C14' }}>
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-5 order-lg-2 wow fadeInRight" data-wow-delay="100ms">
                            <div className="culture-img rounded-5 overflow-hidden shadow-2xl border border-secondary border-opacity-20 transition-all scale-on-hover">
                                <Image src="/assets/images/backgrounds/Realtimeshopfloor.jpg" alt="Micraft Culture" width={500} height={600} className="img-fluid grayscale" style={{ filter: 'grayscale(100%)' }} />
                            </div>
                        </div>
                        <div className="col-lg-7 order-lg-1 wow fadeInLeft" data-wow-delay="200ms">
                            <div className="section-title text-left">
                                <h2 className="section-title__title text-white">Our <span>Culture</span></h2>
                                <p className="mt-4 text-white-50" style={{ fontSize: '18px' }}>
                                    Micraft fosters a culture that encourages learning, innovation, and collaboration.
                                </p>
                            </div>
                            <div className="culture-features mt-5">
                                <div className="row g-4">
                                    {[
                                        { t: "Problem Solving", d: "We focus on solving real manufacturing challenges through practical technology solutions." },
                                        { t: "Continuous Learning", d: "Technology and manufacturing are constantly evolving, and we encourage continuous development." },
                                        { t: "Collaboration", d: "Great products are built by teams that collaborate effectively." },
                                        { t: "Innovation", d: "We encourage new ideas that help improve manufacturing technology solutions." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="col-md-6">
                                            <div className="culture-item-box p-4 rounded-4" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                <h4 className="text-white mb-2" style={{ color: '#FA5674 !important' }}>{item.t}</h4>
                                                <p className="text-white-50 mb-0">{item.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Areas We Work In */}
            <section className="areas-section pt-100 pb-100 position-relative overflow-hidden" 
                style={{ 
                    backgroundImage: 'url(/assets/images/backgrounds/Realtimeshopfloor.jpg)', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(7, 12, 20, 0.92)', zIndex: 1 }}></div>
                <div className="container position-relative" style={{ zIndex: 2 }}>
                    <div className="section-title text-center mb-60">
                        <h2 className="section-title__title text-white">Areas <span>We Work In</span></h2>
                        <p className="text-white-50 mt-3">Micraft operates at the intersection of manufacturing and technology.</p>
                    </div>
                    <div className="row g-4">
                        {[
                            "manufacturing software development",
                            "product design and user experience",
                            "manufacturing process analysis",
                            "data analytics and production monitoring systems",
                            "customer success and implementation"
                        ].map((area, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 100}ms`}>
                                <div className="area-box h-100 p-4 rounded-4" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.3s ease' }}>
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="area-icon" style={{ color: '#FA5674' }}>
                                            <i className="fas fa-layer-group fa-2x"></i>
                                        </div>
                                        <p className="text-white m-0 fw-bold">{area}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-5">
                        <p className="text-white-50">This allows team members to work on technology solutions that directly impact manufacturing operations.</p>
                    </div>
                </div>
            </section>

            {/* 5. Current Opportunities */}
            <section id="opportunities" className="opportunities-section pt-100 pb-100" style={{ background: '#0e121d' }}>
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="section-title text-left mb-40">
                                <h2 className="section-title__title text-white">Current <span>Openings</span></h2>
                                <p className="text-white-50 mt-3">
                                    We are always interested in connecting with talented professionals who want to contribute to building innovative manufacturing technology platforms.
                                </p>
                            </div>
                            <div className="opening-list">
                                {[
                                    { r: "Software Developers", i: "code" },
                                    { r: "Product Engineers", i: "cog" },
                                    { r: "UI/UX Designers", i: "desktop" },
                                    { r: "Implementation Specialists", i: "clipboard-check" },
                                    { r: "Manufacturing Domain Experts", i: "industry" }
                                ].map((role, idx) => (
                                    <div key={idx} className="opening-item mb-3 p-4 rounded-3 d-flex justify-content-between align-items-center border border-white border-opacity-5 transition-all hover-glow" style={{ background: 'rgba(255,255,255,0.02)' }}>
                                        <div className="d-flex align-items-center gap-3">
                                            <i className={`fas fa-${role.i}`} style={{ color: '#FA5674' }}></i>
                                            <h4 className="text-white mb-0" style={{ fontSize: '18px' }}>{role.r}</h4>
                                        </div>
                                        <span className="badge p-2 px-3 rounded-pill" style={{ background: 'rgba(250, 86, 116, 0.1)', color: '#FA5674', fontSize: '12px' }}>Apply Now</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-4 text-white-50 italic">Even if there are no current openings that match your profile, we welcome applications from individuals who are passionate about technology and manufacturing innovation.</p>
                        </div>
                        {/* 6. Send Your Profile Form */}
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="application-form-box p-5 rounded-5 shadow-2xl" id="apply-form" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <div className="text-center mb-4">
                                    <h3 className="text-white mb-2">Interested in Working with Micraft?</h3>
                                    <p className="text-white-50">Send your resume to: <strong style={{ color: '#FA5674' }}>careers@micraft.co.in</strong> or use the form below.</p>
                                </div>
                                <form className="row g-3" onSubmit={handleSubmit}>
                                    <div className="col-12">
                                        <input type="text" name="name" className="form-control career-input" placeholder="Enter your full name" required />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" name="email" className="form-control career-input" placeholder="Enter your email address" required />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="tel" name="phone" className="form-control career-input" placeholder="Enter your phone number" required />
                                    </div>
                                    <div className="col-12">
                                        <select name="role" className="form-select career-input" defaultValue="" required>
                                            <option value="" disabled>Select Role of Interest</option>
                                            <option value="Software Developer">Software Developer</option>
                                            <option value="Product Engineer">Product Engineer</option>
                                            <option value="UI/UX Designer">UI/UX Designer</option>
                                            <option value="Implementation Specialist">Implementation Specialist</option>
                                            <option value="Manufacturing Domain Expert">Manufacturing Domain Expert</option>
                                            <option value="Other">Other / General Application</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <div className="upload-wrapper position-relative p-4 text-center rounded-3 border border-dashed" style={{ border: '1px dashed rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.01)' }}>
                                            <i className="fas fa-cloud-upload-alt text-white-50 mb-2 fs-4"></i>
                                            <p className="text-white-50 small mb-0">{fileName ? `📎 ${fileName}` : "Upload Resume (PDF / DOC / DOCX)"}</p>
                                            <input type="file" name="resume" accept=".pdf,.doc,.docx" className="d-none" id="resumeUpload" onChange={handleFileChange} />
                                            <label htmlFor="resumeUpload" className="stretched-link cursor-pointer d-block"></label>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-4 text-center">
                                        {status === "success" && (
                                            <div className="form-alert-success mb-3 d-flex align-items-center gap-3">
                                                <i className="fas fa-check-circle form-alert-icon"></i>
                                                <div>
                                                    <strong className="form-alert-title">
                                                        Application Submitted Successfully!
                                                    </strong>
                                                    <span className="form-alert-text">
                                                        Thank you for your interest. Your resume and application have been sent to our recruitment team.
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                        {status === "error" && (
                                            <div className="form-alert-error mb-3 d-flex align-items-center gap-3">
                                                <i className="fas fa-exclamation-circle form-alert-icon"></i>
                                                <div>
                                                    <strong className="form-alert-title">
                                                        Submission Failed
                                                    </strong>
                                                    <span className="form-alert-text">
                                                        {errorMessage || "Could not submit application. Please email your resume directly to careers@micraft.co.in."}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                        <button type="submit" className="thm-btn w-100 justify-content-center" disabled={status === "loading"}>
                                            <span>{status === "loading" ? "Submitting Application..." : "Submit Application"}</span>
                                            <i className="icon-right-arrow"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Call to Action */}
            <FinalCTA 
                title={<>Build the Future of <br /> <span>Manufacturing Technology</span></>}
                text="If you are passionate about technology and interested in solving real manufacturing challenges, we would love to hear from you. Join Micraft in building platforms that help factories become more efficient and digitally connected."
            />

            <style dangerouslySetInnerHTML={{ __html: `
                .career-input {
                    background: rgba(255,255,255,0.02) !important;
                    border: 1px solid rgba(255,255,255,0.1) !important;
                    color: white !important;
                    padding: 12px 18px !important;
                    border-radius: 8px !important;
                }
                .career-input:focus {
                    border-color: #FA5674 !important;
                    box-shadow: 0 0 10px rgba(250, 86, 116, 0.2) !important;
                }
                .career-input::placeholder {
                    color: rgba(255,255,255,0.4) !important;
                }
                .form-select.career-input {
                    appearance: none;
                }
                .career-input option {
                    background: #0B192C;
                }
                .hover-glow:hover {
                    box-shadow: 0 0 20px rgba(250, 86, 116, 0.1);
                    border-color: #FA5674 !important;
                    transform: translateX(10px);
                }
                .scale-on-hover:hover {
                    transform: scale(1.03);
                }
                .transition-all {
                    transition: all 0.3s ease;
                }
                .area-box:hover {
                    background: rgba(255, 255, 255, 0.05) !important;
                    border-color: #FA5674 !important;
                    transform: translateY(-5px);
                }
                .why-card:hover {
                    border-color: #FA5674 !important;
                    background: rgba(255, 255, 255, 0.05) !important;
                    transform: translateY(-10px);
                }
                .italic {
                    font-style: italic;
                }
            ` }} />
        </Layout>
    )
}