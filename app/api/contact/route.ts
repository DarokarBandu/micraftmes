import { NextResponse } from "next/server";
import { transporter, DEFAULT_RECIPIENT, SENDER_ADDRESS } from "@/lib/mailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, subject, message } = data;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: "Name and email are required." },
        { status: 400 }
      );
    }

    // 1. Admin / Sales Team Notification (to shinde@micraft.co.in)
    const adminMailSubject = `[Micraft MES Contact] ${subject || "New Inquiry"} - ${name}`;

    const adminMailOptions = {
      from: SENDER_ADDRESS,
      to: DEFAULT_RECIPIENT,
      replyTo: email,
      subject: adminMailSubject,
      text: `
New Contact Form Submission:
----------------------------------
Name: ${name}
Email: ${email}
Phone: ${phone || "Not Provided"}
Subject: ${subject || "No Subject"}

Message:
${message || "No message content"}
----------------------------------
Sent from Micraft MES Contact Form
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px; color: #333; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border: 1px solid #e5e7eb; }
            .header { background: #7366CA; padding: 25px; text-align: center; color: #ffffff; }
            .header h2 { margin: 0; font-size: 22px; font-weight: 700; }
            .content { padding: 30px; }
            .field-row { margin-bottom: 18px; padding-bottom: 12px; border-bottom: 1px solid #f1f5f9; }
            .field-label { font-size: 12px; text-transform: uppercase; font-weight: 700; color: #7366CA; margin-bottom: 4px; }
            .field-value { font-size: 15px; color: #0F172A; line-height: 1.5; }
            .message-box { background: #f8fafc; border-left: 4px solid #7366CA; padding: 15px; border-radius: 6px; margin-top: 8px; font-size: 15px; line-height: 1.6; color: #334155; }
            .footer { background: #0B192C; padding: 15px; text-align: center; font-size: 12px; color: #94a3b8; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field-row">
                <div class="field-label">Full Name</div>
                <div class="field-value"><strong>${name}</strong></div>
              </div>
              <div class="field-row">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:${email}" style="color: #7366CA; text-decoration: none;">${email}</a></div>
              </div>
              <div class="field-row">
                <div class="field-label">Phone Number</div>
                <div class="field-value">${phone || "Not Provided"}</div>
              </div>
              <div class="field-row">
                <div class="field-label">Subject / Inquiry</div>
                <div class="field-value">${subject || "General Inquiry"}</div>
              </div>
              <div class="field-row" style="border-bottom: none;">
                <div class="field-label">Message Details</div>
                <div class="message-box">${message ? message.replace(/\n/g, "<br/>") : "<em>No message provided</em>"}</div>
              </div>
            </div>
            <div class="footer">
              This inquiry was submitted from the Micraft MES website contact form.
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // 2. User Confirmation Email (Sent directly to the user who filled the form)
    const userMailSubject = `Thank you for contacting Micraft MES - We've received your inquiry`;

    const userMailOptions = {
      from: SENDER_ADDRESS,
      to: email,
      replyTo: DEFAULT_RECIPIENT,
      subject: userMailSubject,
      text: `
Hello ${name},

Thank you for reaching out to Micraft MES! We have successfully received your inquiry.

Here is a summary of the details you submitted:
--------------------------------------------------
Subject: ${subject || "General Inquiry"}
Phone: ${phone || "Not Provided"}
Message: ${message || "No message content"}
--------------------------------------------------

Our team is currently reviewing your requirements and one of our manufacturing technology specialists will get back to you within 24 business hours.

If you have any urgent queries, feel free to reply directly to this email or reach us at shinde@micraft.co.in.

Best regards,
The Micraft MES Team
https://micraftmes.com
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px; color: #333; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border: 1px solid #e5e7eb; }
            .header { background: #7366CA; padding: 30px 25px; text-align: center; color: #ffffff; }
            .header h1 { margin: 0 0 6px 0; font-size: 24px; font-weight: 700; }
            .header p { margin: 0; font-size: 14px; opacity: 0.9; }
            .content { padding: 30px; }
            .greeting { font-size: 17px; font-weight: 700; color: #0F172A; margin-bottom: 12px; }
            .intro-text { font-size: 15px; line-height: 1.6; color: #475569; margin-bottom: 24px; }
            .summary-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 24px; }
            .summary-title { font-size: 13px; text-transform: uppercase; font-weight: 700; color: #7366CA; margin-bottom: 12px; letter-spacing: 0.5px; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; }
            .summary-row { font-size: 14px; margin-bottom: 8px; color: #334155; }
            .summary-row strong { color: #0F172A; }
            .next-steps { background: rgba(115, 102, 202, 0.08); border-left: 4px solid #7366CA; padding: 14px 18px; border-radius: 6px; font-size: 14px; color: #334155; line-height: 1.5; margin-bottom: 24px; }
            .footer { background: #0B192C; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; line-height: 1.5; }
            .footer a { color: #7366CA; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Micraft MES</h1>
              <p>Precision in Manufacturing Execution</p>
            </div>
            <div class="content">
              <div class="greeting">Hello ${name},</div>
              <div class="intro-text">
                Thank you for reaching out to us! We have successfully received your inquiry. Our team is currently reviewing your details, and a manufacturing specialist will contact you shortly.
              </div>

              <div class="summary-card">
                <div class="summary-title">Summary of Your Submission</div>
                <div class="summary-row"><strong>Subject:</strong> ${subject || "General Inquiry"}</div>
                <div class="summary-row"><strong>Email:</strong> ${email}</div>
                <div class="summary-row"><strong>Phone:</strong> ${phone || "Not Provided"}</div>
                <div class="summary-row" style="margin-top: 10px;">
                  <strong>Message:</strong><br/>
                  <span style="color: #64748b;">${message ? message.replace(/\n/g, "<br/>") : "<em>No message provided</em>"}</span>
                </div>
              </div>

              <div class="next-steps">
                <strong>What happens next?</strong><br/>
                Our team will evaluate your shop floor requirements and get back to you within 24 business hours to discuss how Micraft MES can support your operational goals.
              </div>

              <p style="font-size: 14px; color: #64748b; margin-bottom: 0;">
                If you have additional details or need immediate assistance, simply reply to this email.
              </p>
            </div>
            <div class="footer">
              &copy; ${new Date().getFullYear()} Micraft Solutions. All rights reserved.<br/>
              Empowering manufacturers with real-time shop floor visibility & execution.
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send admin notification
    await transporter.sendMail(adminMailOptions);

    // Send user confirmation auto-reply (catch error silently so failure to reach user doesn't break form submission)
    try {
      await transporter.sendMail(userMailOptions);
    } catch (userMailErr) {
      console.warn("Could not send confirmation email to user:", userMailErr);
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error: unknown) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
