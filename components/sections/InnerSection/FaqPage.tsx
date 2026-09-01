"use client";

import { useState } from "react";
import Link from "next/link";
import AnimatedTitle from "@/components/elements/AnimatedTitle";
import { faqList } from "@/lib/faqData";

const categories = [
  { id: "All", label: "All Questions", icon: "fas fa-th-large" },
  { id: "Platform", label: "Platform & MES", icon: "fas fa-cubes" },
  { id: "Features", label: "Shop Floor & Features", icon: "fas fa-cogs" },
  { id: "Deployment", label: "Deployment & ERP", icon: "fas fa-network-wired" },
  { id: "Pricing", label: "Pricing & Security", icon: "fas fa-shield-alt" },
];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [openFaq, setOpenFaq] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const filteredFaqs = faqList.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      searchTerm === "" ||
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="faq-page-wrapper py-100 position-relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="ambient-glow glow-1 position-absolute" style={{ top: "10%", left: "5%", width: "400px", height: "400px", filter: "blur(120px)", borderRadius: "50%", pointerEvents: "none" }}></div>
      <div className="ambient-glow glow-2 position-absolute" style={{ bottom: "10%", right: "5%", width: "400px", height: "400px", filter: "blur(120px)", borderRadius: "50%", pointerEvents: "none" }}></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-xl-8 col-lg-10">
            <div className="section-title text-center sec-title-animation animation-style1 mb-3">
              <div className="section-title__tagline-box justify-content-center">
                <div className="section-title__tagline-shape-1"></div>
                <span className="section-title__tagline">KNOWLEDGE & ASSISTANCE</span>
                <div className="section-title__tagline-shape-2"></div>
              </div>
              <AnimatedTitle>
                <h2 className="section-title__title title-animation faq-main-title" style={{ fontSize: "38px", fontWeight: "700" }}>
                  Frequently Asked Questions About <br />
                  <span style={{ color: "#7366CA" }}>Micraft MES Platform</span>
                </h2>
              </AnimatedTitle>
            </div>
            <p className="faq-subtitle mx-auto" style={{ maxWidth: "680px", fontSize: "16px" }}>
              Find expert answers regarding real-time shop floor tracking, machine IoT integration, ERP connectivity, deployment timelines, and SME pricing.
            </p>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            {/* Live Search Input */}
            <div className="faq-search-box p-2 mb-4 rounded-4 shadow-sm">
              <div className="input-group">
                <span className="input-group-text bg-transparent border-0 ps-3">
                  <i className="fas fa-search" style={{ color: "#7366CA" }}></i>
                </span>
                <input
                  type="text"
                  className="form-control bg-transparent border-0 shadow-none ps-2 faq-search-input"
                  placeholder="Search questions by topic (e.g. ERP, OEE, downtime, pricing, deployment)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ fontSize: "15px" }}
                />
                {searchTerm && (
                  <button className="btn btn-link text-muted pe-3 text-decoration-none" onClick={() => setSearchTerm("")}>
                    <i className="fas fa-times"></i>
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`btn px-4 py-2 rounded-pill transition-all d-flex align-items-center gap-2 faq-cat-btn ${
                      isActive ? "active" : ""
                    }`}
                  >
                    <i className={cat.icon} style={{ fontSize: "13px" }}></i>
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Content Layout: Accordion & Help Card */}
        <div className="row g-4 justify-content-center">
          {/* FAQ Accordion Column */}
          <div className="col-lg-8">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-5 rounded-4 empty-faq-state">
                <i className="fas fa-search-minus mb-3" style={{ fontSize: "40px", color: "#7366CA" }}></i>
                <h4 className="fw-bold faq-heading">No Questions Match &quot;{searchTerm}&quot;</h4>
                <p className="faq-text-muted mb-3">Try searching with other keywords or reset your filters.</p>
                <button
                  className="thm-btn"
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("All");
                  }}
                >
                  Reset Filter
                </button>
              </div>
            ) : (
              <div className="d-flex flex-column gap-3">
                {filteredFaqs.map((faq, index) => {
                  const isOpen = openFaq === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className={`faq-card rounded-4 overflow-hidden transition-all ${isOpen ? "open" : ""}`}
                    >
                      <button
                        className="w-100 text-start p-4 bg-transparent border-0 d-flex justify-content-between align-items-center faq-accordion-header"
                        onClick={() => toggleFaq(faq.id)}
                        style={{ cursor: "pointer" }}
                        aria-expanded={isOpen}
                      >
                        <div className="d-flex align-items-center gap-3 pe-3">
                          <span className={`faq-q-badge rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 ${isOpen ? "active" : ""}`}>
                            Q{index + 1}
                          </span>
                          <span className="faq-question-text fw-bold" style={{ fontSize: "17px", lineHeight: "1.4" }}>
                            {faq.question}
                          </span>
                        </div>
                        <div className={`faq-chevron rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 transition-all ${isOpen ? "open" : ""}`}>
                          <i className="fas fa-chevron-down" style={{ fontSize: "12px" }}></i>
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 pt-1">
                          <div className="faq-answer-border pt-3">
                            <p className="faq-answer-text mb-0" style={{ fontSize: "15px", lineHeight: "1.7" }}>
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Help & Direct Support Card */}
          <div className="col-lg-4">
            <div className="sticky-top" style={{ top: "120px" }}>
              {/* Assistance Card */}
              <div className="card border-0 rounded-4 p-4 mb-4 shadow-sm faq-support-card">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: "45px", height: "45px", background: "rgba(115, 102, 202, 0.15)", color: "#7366CA" }}>
                    <i className="fas fa-headset" style={{ fontSize: "20px" }}></i>
                  </div>
                  <div>
                    <h5 className="mb-0 fw-bold faq-heading">Need Personal Advice?</h5>
                    <small className="faq-text-muted">MES Application Specialists</small>
                  </div>
                </div>
                <p className="faq-support-text" style={{ fontSize: "14px", lineHeight: "1.6" }}>
                  Have questions about specific machine connectivity, PLC protocols, or custom ERP integration? Speak directly with our MES engineers.
                </p>

                <div className="d-flex flex-column gap-3 my-3">
                  <div className="d-flex align-items-center gap-3 p-3 rounded-3 faq-contact-item">
                    <i className="fas fa-phone-alt" style={{ color: "#7366CA" }}></i>
                    <div>
                      <small className="faq-text-muted d-block" style={{ fontSize: "11px" }}>Call Direct</small>
                      <Link href="tel:+919356865559" className="faq-heading text-decoration-none fw-bold" style={{ fontSize: "14px" }}>
                        +91 93568 65559
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3 p-3 rounded-3 faq-contact-item">
                    <i className="fas fa-envelope" style={{ color: "#7366CA" }}></i>
                    <div>
                      <small className="faq-text-muted d-block" style={{ fontSize: "11px" }}>Email Us</small>
                      <Link href="mailto:support@micraft.co.in" className="faq-heading text-decoration-none fw-bold" style={{ fontSize: "14px" }}>
                        support@micraft.co.in
                      </Link>
                    </div>
                  </div>
                </div>

                <Link href="/book-demo" className="thm-btn w-100 text-center mt-2" style={{ padding: "14px 20px" }}>
                  Schedule 1-on-1 Demo <span className="icon-right-arrow"></span>
                </Link>
              </div>

              {/* Quick Links Card */}
              <div className="card border-0 rounded-4 p-4 shadow-sm faq-quick-card">
                <h6 className="fw-bold faq-heading mb-3 d-flex align-items-center gap-2">
                  <i className="fas fa-compass" style={{ color: "#7366CA" }}></i> Helpful Resources
                </h6>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0" style={{ fontSize: "14px" }}>
                  <li>
                    <Link href="/resources/what-is-mes" className="faq-quick-link d-flex align-items-center justify-content-between py-1 text-decoration-none">
                      <span>What is MES Guide</span>
                      <i className="fas fa-arrow-right" style={{ fontSize: "11px" }}></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/mes-implementation-guide" className="faq-quick-link d-flex align-items-center justify-content-between py-1 text-decoration-none">
                      <span>Implementation Roadmap</span>
                      <i className="fas fa-arrow-right" style={{ fontSize: "11px" }}></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/why-micraft/mes-vs-erp" className="faq-quick-link d-flex align-items-center justify-content-between py-1 text-decoration-none">
                      <span>MES vs ERP Comparison</span>
                      <i className="fas fa-arrow-right" style={{ fontSize: "11px" }}></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/customers/case-studies" className="faq-quick-link d-flex align-items-center justify-content-between py-1 text-decoration-none">
                      <span>Customer Case Studies</span>
                      <i className="fas fa-arrow-right" style={{ fontSize: "11px" }}></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .transition-all {
          transition: all 0.25s ease-in-out;
        }

        /* ════════════════════════════════════════════════════
           THEME TOKENS ADAPTATION FOR FAQ PAGE
           ════════════════════════════════════════════════════ */
        :global([data-theme="dark"]) .faq-page-wrapper {
          background-color: var(--bg-primary, #0B192C);
        }
        :global([data-theme="light"]) .faq-page-wrapper {
          background-color: var(--bg-secondary, #F8FAFC);
        }

        :global([data-theme="dark"]) .glow-1 {
          background: rgba(115, 102, 202, 0.08);
        }
        :global([data-theme="dark"]) .glow-2 {
          background: rgba(255, 210, 93, 0.05);
        }
        :global([data-theme="light"]) .glow-1 {
          background: rgba(115, 102, 202, 0.05);
        }
        :global([data-theme="light"]) .glow-2 {
          background: rgba(115, 102, 202, 0.03);
        }

        :global([data-theme="dark"]) .faq-main-title {
          color: #FFFFFF;
        }
        :global([data-theme="light"]) .faq-main-title {
          color: #0F172A;
        }

        :global([data-theme="dark"]) .faq-subtitle {
          color: rgba(255, 255, 255, 0.65);
        }
        :global([data-theme="light"]) .faq-subtitle {
          color: #475569;
        }

        /* Search input */
        :global([data-theme="dark"]) .faq-search-box {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }
        :global([data-theme="light"]) .faq-search-box {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.05);
        }
        :global([data-theme="dark"]) .faq-search-input {
          color: #FFFFFF;
        }
        :global([data-theme="light"]) .faq-search-input {
          color: #0F172A;
        }

        /* Category pills */
        .faq-cat-btn {
          font-size: 14px;
          font-weight: 600;
        }
        :global([data-theme="dark"]) .faq-cat-btn {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.8);
        }
        :global([data-theme="light"]) .faq-cat-btn {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          color: #475569;
        }
        .faq-cat-btn.active {
          background: #7366CA !important;
          border-color: #7366CA !important;
          color: #FFFFFF !important;
        }

        /* FAQ Card Accordion */
        :global([data-theme="dark"]) .faq-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        :global([data-theme="dark"]) .faq-card.open {
          background: rgba(115, 102, 202, 0.08);
          border-color: rgba(115, 102, 202, 0.4);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        :global([data-theme="light"]) .faq-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
        }
        :global([data-theme="light"]) .faq-card.open {
          background: #FFFFFF;
          border-color: #7366CA;
          box-shadow: 0 10px 25px rgba(115, 102, 202, 0.1);
        }

        :global([data-theme="dark"]) .faq-question-text {
          color: #FFFFFF;
        }
        :global([data-theme="light"]) .faq-question-text {
          color: #0F172A;
        }

        :global([data-theme="dark"]) .faq-q-badge {
          background: rgba(255, 255, 255, 0.08);
          color: #FFFFFF;
          width: 32px;
          height: 32px;
          font-size: 13px;
          font-weight: 700;
        }
        :global([data-theme="dark"]) .faq-q-badge.active {
          background: #7366CA;
        }
        :global([data-theme="light"]) .faq-q-badge {
          background: #F1F5F9;
          color: #475569;
          width: 32px;
          height: 32px;
          font-size: 13px;
          font-weight: 700;
        }
        :global([data-theme="light"]) .faq-q-badge.active {
          background: #7366CA;
          color: #FFFFFF;
        }

        :global([data-theme="dark"]) .faq-chevron {
          background: rgba(255, 255, 255, 0.08);
          color: #FFFFFF;
          width: 32px;
          height: 32px;
        }
        :global([data-theme="dark"]) .faq-chevron.open {
          background: #7366CA;
          color: #FFFFFF;
          transform: rotate(180deg);
        }
        :global([data-theme="light"]) .faq-chevron {
          background: #F1F5F9;
          color: #475569;
          width: 32px;
          height: 32px;
        }
        :global([data-theme="light"]) .faq-chevron.open {
          background: #7366CA;
          color: #FFFFFF;
          transform: rotate(180deg);
        }

        :global([data-theme="dark"]) .faq-answer-border {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        :global([data-theme="light"]) .faq-answer-border {
          border-top: 1px solid #E2E8F0;
        }

        :global([data-theme="dark"]) .faq-answer-text {
          color: rgba(255, 255, 255, 0.85);
        }
        :global([data-theme="light"]) .faq-answer-text {
          color: #334155;
        }

        /* Sidebar Cards */
        :global([data-theme="dark"]) .faq-support-card {
          background: linear-gradient(145deg, #101D30 0%, #0c1524 100%);
          border: 1px solid rgba(115, 102, 202, 0.25);
        }
        :global([data-theme="light"]) .faq-support-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);
        }

        :global([data-theme="dark"]) .faq-quick-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        :global([data-theme="light"]) .faq-quick-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);
        }

        :global([data-theme="dark"]) .faq-heading {
          color: #FFFFFF;
        }
        :global([data-theme="light"]) .faq-heading {
          color: #0F172A;
        }

        :global([data-theme="dark"]) .faq-text-muted,
        :global([data-theme="dark"]) .faq-support-text {
          color: rgba(255, 255, 255, 0.6);
        }
        :global([data-theme="light"]) .faq-text-muted,
        :global([data-theme="light"]) .faq-support-text {
          color: #64748B;
        }

        :global([data-theme="dark"]) .faq-contact-item {
          background: rgba(255, 255, 255, 0.04);
        }
        :global([data-theme="light"]) .faq-contact-item {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
        }

        :global([data-theme="dark"]) .faq-quick-link {
          color: rgba(255, 255, 255, 0.7);
        }
        :global([data-theme="dark"]) .faq-quick-link:hover {
          color: #FFFFFF;
          padding-left: 4px;
        }
        :global([data-theme="light"]) .faq-quick-link {
          color: #475569;
        }
        :global([data-theme="light"]) .faq-quick-link:hover {
          color: #7366CA;
          padding-left: 4px;
        }

        :global([data-theme="dark"]) .empty-faq-state {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        :global([data-theme="light"]) .empty-faq-state {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
        }
      `}</style>
    </section>
  );
}
