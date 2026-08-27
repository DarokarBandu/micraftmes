import nodemailer from "nodemailer";

// Create reusable transporter object using SMTP transport
export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || "anita@micraft.co.in",
    pass: (process.env.SMTP_PASS || "ofph divg boub gflg").replace(/\s+/g, ""), // strip any spaces in app password
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const DEFAULT_RECIPIENT = process.env.RECIPIENT_EMAIL || "shinde@micraft.co.in";
export const SENDER_ADDRESS = process.env.SMTP_FROM || `"Micraft MES" <anita@micraft.co.in>`;
