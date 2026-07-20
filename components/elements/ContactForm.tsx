"use client";

import { useState } from "react";

export default function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <>
      <style>{`
        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.95) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
      `}</style>
  <form
    className="contact-one__form contact-form-validated"
    onSubmit={handleSubmit}
  >
    <div className="row">
        <div className="col-xl-6 col-lg-6">
            <h4 className="contact-one__input-title">Full Name</h4>
            <div className="contact-one__input-box">
                <div className="contact-one__input-icon">
                  <span className="icon-user-1"></span>
                </div>
                <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                />
            </div>
        </div>
        <div className="col-xl-6 col-lg-6">
            <h4 className="contact-one__input-title">Email Address</h4>
            <div className="contact-one__input-box">
                <div className="contact-one__input-icon">
                    <span className="icon-email"></span>
                </div>
                <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                />
            </div>
        </div>
        <div className="col-xl-6 col-lg-6">
            <h4 className="contact-one__input-title">Phone Number</h4>
            <div className="contact-one__input-box">
                <div className="contact-one__input-icon">
                    <span className="icon-phone-call"></span>
                </div>
                <input
                type="text"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                />
            </div>
        </div>
        <div className="col-xl-6 col-lg-6">
            <h4 className="contact-one__input-title">Subject</h4>
            <div className="contact-one__input-box">
              <div className="contact-one__input-icon">
                  <span className="icon-edit"></span>
              </div>
                <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter the subject"
                />
            </div>
        </div>
    </div>
    <div className="col-xl-12">
        <h4 className="contact-one__input-title">Inquiry about </h4>
        <div className="contact-one__input-box text-message-box">
            <div className="contact-one__input-icon">
                <span className="icon-edit"></span>
            </div>
            <textarea
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            />
        </div>
        <div className="contact-one__btn-box">
            <button type="submit" className="thm-btn"><span>Submit
                    Now</span><i className="icon-right-arrow"></i></button>
        </div>
    </div>

    {status === "loading" && (
      <div style={{ marginTop: "20px", padding: "14px 20px", borderRadius: "10px", backgroundColor: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "#e2e8f0", display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", fontWeight: 500, animation: "fadeInScale 0.3s ease-out forwards" }}>
        <span style={{ width: "18px", height: "18px", border: "2px solid rgba(255,255,255,0.2)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin 0.8s linear infinite" }}></span>
        Sending your message...
      </div>
    )}
    {status === "success" && (
      <div style={{ marginTop: "20px", padding: "16px 20px", borderRadius: "10px", backgroundColor: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.25)", color: "#34d399", display: "flex", alignItems: "center", gap: "14px", fontSize: "15.5px", fontWeight: 500, animation: "fadeInScale 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "28px", height: "28px", borderRadius: "50%", backgroundColor: "rgba(16, 185, 129, 0.2)" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <span>Message sent successfully! We'll be in touch shortly.</span>
      </div>
    )}
    {status === "error" && (
      <div style={{ marginTop: "20px", padding: "16px 20px", borderRadius: "10px", backgroundColor: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.25)", color: "#f87171", display: "flex", alignItems: "center", gap: "14px", fontSize: "15.5px", fontWeight: 500, animation: "fadeInScale 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "28px", height: "28px", borderRadius: "50%", backgroundColor: "rgba(239, 68, 68, 0.2)" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
        <span>Oops! Something went wrong. Please try again.</span>
      </div>
    )}
  </form>
  </>
  );
}
