import { NextResponse } from "next/server";
<<<<<<< HEAD
import { transporter, DEFAULT_RECIPIENT, SENDER_ADDRESS } from "@/lib/mailer";
=======
import sgMail from "@sendgrid/mail";


const apiKey = process.env.SENDGRID_API_KEY;
if (apiKey) {
  sgMail.setApiKey(apiKey);
}
>>>>>>> aa5c15ba013298643fde7bfdfb70b4110fd0611e

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = (formData.get("name") as string) || "Anonymous Applicant";
    const email = (formData.get("email") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const role = (formData.get("role") as string) || "General Application";
    const resume = formData.get("resume") as File | null;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: "Name and email are required." },
        { status: 400 }
      );
    }

    const MAX_RESUME_SIZE = 8 * 1024 * 1024; // 8 MB limit
    if (resume && resume.size > MAX_RESUME_SIZE) {
      return NextResponse.json(
        {
          success: false,
          message: `Resume file is too large (${(resume.size / (1024 * 1024)).toFixed(1)} MB). Email providers limit attachments to 8 MB. Please upload a smaller document.`,
        },
        { status: 400 }
      );
    }

    const attachments: {
      filename: string;
      content: Buffer;
      contentType?: string;
    }[] = [];

    if (resume && resume.size > 0) {
      const arrayBuffer = await resume.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      attachments.push({
        filename: resume.name || "Resume.pdf",
        content: buffer,
        contentType: resume.type || "application/octet-stream",
      });
    }

    // 1. Admin / HR Notification (to shinde@micraft.co.in)
    const adminMailSubject = `[Micraft Careers] New Application: ${name} - ${role}`;

    const adminMailOptions = {
      from: SENDER_ADDRESS,
      to: DEFAULT_RECIPIENT,
      replyTo: email,
      subject: adminMailSubject,
      text: `
New Job Application Received:
----------------------------------
Candidate Name: ${name}
Email Address: ${email}
Phone Number: ${phone || "Not Provided"}
Role Applied For: ${role}
Resume Attached: ${resume && resume.size > 0 ? resume.name : "No file attached"}
----------------------------------
Sent from Micraft MES Careers Form
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
            .badge-role { display: inline-block; background: rgba(115, 102, 202, 0.12); color: #7366CA; font-weight: 700; padding: 4px 12px; border-radius: 20px; font-size: 13px; }
            .footer { background: #0B192C; padding: 15px; text-align: center; font-size: 12px; color: #94a3b8; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Job Application Received</h2>
            </div>
            <div class="content">
              <div class="field-row">
                <div class="field-label">Candidate Name</div>
                <div class="field-value"><strong>${name}</strong></div>
              </div>
              <div class="field-row">
                <div class="field-label">Role Applied For</div>
                <div class="field-value"><span class="badge-role">${role}</span></div>
              </div>
              <div class="field-row">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:${email}" style="color: #7366CA; text-decoration: none;">${email}</a></div>
              </div>
              <div class="field-row">
                <div class="field-label">Phone Number</div>
                <div class="field-value">${phone || "Not Provided"}</div>
              </div>
              <div class="field-row" style="border-bottom: none;">
                <div class="field-label">Resume Attachment</div>
                <div class="field-value">${resume && resume.size > 0 ? `📎 <strong>${resume.name}</strong> (${(resume.size / 1024).toFixed(1)} KB)` : "<em>No resume uploaded</em>"}</div>
              </div>
            </div>
            <div class="footer">
              This application was submitted via the Micraft MES Careers Portal.
            </div>
          </div>
        </body>
        </html>
      `,
      attachments,
    };

    // 2. Candidate Confirmation Email (Sent directly to applicant)
    const userMailSubject = `Application Received: ${role} at Micraft`;

    const userMailOptions = {
      from: SENDER_ADDRESS,
      to: email,
      replyTo: DEFAULT_RECIPIENT,
      subject: userMailSubject,
      text: `
Dear ${name},

Thank you for your interest in a career with Micraft! We have successfully received your application for the position of: ${role}.

Here is a summary of the details you submitted:
--------------------------------------------------
Name: ${name}
Role Applied: ${role}
Phone: ${phone || "Not Provided"}
Resume Uploaded: ${resume && resume.size > 0 ? resume.name : "None"}
--------------------------------------------------

Our recruitment team is reviewing your profile and credentials. If your background aligns with our current openings, we will contact you directly for the next round of discussions.

Thank you once again for considering Micraft as your next career move!

Best regards,
The Recruitment Team
Micraft Solutions
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
              <h1>Micraft Careers</h1>
              <p>Building the Future of Manufacturing Technology</p>
            </div>
            <div class="content">
              <div class="greeting">Dear ${name},</div>
              <div class="intro-text">
                Thank you for applying to join the Micraft team! We have successfully received your profile and application details.
              </div>

              <div class="summary-card">
                <div class="summary-title">Your Application Summary</div>
                <div class="summary-row"><strong>Role of Interest:</strong> ${role}</div>
                <div class="summary-row"><strong>Candidate Name:</strong> ${name}</div>
                <div class="summary-row"><strong>Email:</strong> ${email}</div>
                <div class="summary-row"><strong>Phone:</strong> ${phone || "Not Provided"}</div>
                <div class="summary-row"><strong>Resume:</strong> ${resume && resume.size > 0 ? `📎 ${resume.name}` : "<em>No file uploaded</em>"}</div>
              </div>

              <div class="next-steps">
                <strong>What happens next?</strong><br/>
                Our recruitment and engineering team will review your qualifications. If there is a strong match with our current open positions, we will contact you to schedule an initial interview.
              </div>

              <p style="font-size: 14px; color: #64748b; margin-bottom: 0;">
                If you need to update your application or have questions, feel free to reach out to us at <a href="mailto:careers@micraft.co.in" style="color: #7366CA;">careers@micraft.co.in</a>.
              </p>
            </div>
            <div class="footer">
              &copy; ${new Date().getFullYear()} Micraft Solutions. All rights reserved.<br/>
              Empowering manufacturers with innovative digital solutions.
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send admin notification with resume attachment
    await transporter.sendMail(adminMailOptions);

    // Send candidate confirmation auto-reply
    try {
      await transporter.sendMail(userMailOptions);
    } catch (userMailErr) {
      console.warn("Could not send confirmation email to applicant:", userMailErr);
    }

    return NextResponse.json({
      success: true,
      message: "Your application has been submitted successfully!",
    });
  } catch (error: unknown) {
    console.error("Error submitting job application:", error);
    const err = error as { responseCode?: number; message?: string; response?: string };
    if (
      err.responseCode === 552 ||
      (err.message && err.message.includes("552")) ||
      (err.response && err.response.includes("552"))
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Your resume file is too large for email delivery. Please upload a PDF under 8 MB or send it directly to careers@micraft.co.in.",
        },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Failed to submit application. Please try again later." },
      { status: 500 }
    );
  }
}
