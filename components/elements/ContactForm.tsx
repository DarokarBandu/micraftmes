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

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json().catch(() => ({}));

      if (res.ok && json.success !== false) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(json.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <form className="contact-form-validated contact-one__form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <h4 className="contact-one__input-title">Full Name *</h4>
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
              placeholder="e.g. Rajesh Sharma"
            />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <h4 className="contact-one__input-title">Email Address *</h4>
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
              placeholder="rajesh@company.com"
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
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
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
              value={formData.subject}
              onChange={handleChange}
              placeholder="MES Software Inquiry"
            />
          </div>
        </div>
      </div>
      <div className="col-xl-12">
        <h4 className="contact-one__input-title">Inquiry Details *</h4>
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
            placeholder="Tell us about your factory requirements or questions..."
          />
        </div>

        {status === "success" && (
          <div className="form-alert-success mb-4 d-flex align-items-center gap-3">
            <i className="fas fa-check-circle form-alert-icon"></i>
            <div>
              <strong className="form-alert-title">
                Inquiry Sent Successfully!
              </strong>
              <span className="form-alert-text">
                Thank you! Your message has been delivered to our team. We will get in touch with you shortly.
              </span>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="form-alert-error mb-4 d-flex align-items-center gap-3">
            <i className="fas fa-exclamation-circle form-alert-icon"></i>
            <div>
              <strong className="form-alert-title">
                Submission Error
              </strong>
              <span className="form-alert-text">
                {errorMessage || "Failed to send email. Please try again later."}
              </span>
            </div>
          </div>
        )}

        <div className="contact-one__btn-box">
          <button type="submit" className="thm-btn" disabled={status === "loading"}>
            <span>{status === "loading" ? "Sending Message..." : "Submit Inquiry"}</span>
            <i className="icon-right-arrow"></i>
          </button>
        </div>
      </div>
    </form>
  );
}
