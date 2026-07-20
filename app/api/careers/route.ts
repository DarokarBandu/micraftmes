import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";


const apiKey = process.env.SENDGRID_API_KEY;
if (apiKey) {
  sgMail.setApiKey(apiKey);
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const role = formData.get("role") as string;
    const resume = formData.get("resume") as File | null;

    if (!apiKey) {
      console.warn("SENDGRID_API_KEY is not set.");
      return NextResponse.json({ success: false, message: "Server misconfigured" }, { status: 500 });
    }

    const senderEmail = process.env.SENDER_EMAIL || "shinde@micraft.co.in";
    let attachments: any[] = [];

    if (resume && resume.size > 0) {
      const arrayBuffer = await resume.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const base64File = buffer.toString("base64");

      attachments = [
        {
          content: base64File,
          filename: resume.name,
          type: resume.type || "application/octet-stream",
          disposition: "attachment",
        },
      ];
    }

    const msg = {
      to: senderEmail,
      from: senderEmail, // Must be verified in SendGrid
      replyTo: email,
      subject: `New Career Application: ${name} - ${role || "Open Role"}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Role of Interest: ${role || "Not Specified"}
      `,
      html: `
        <h3>New Career Application</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Role of Interest:</strong> ${role || "Not Specified"}</p>
      `,
      attachments,
    };

    await sgMail.send(msg);

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully!",
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    if (error.response) {
      console.error(error.response.body);
    }
    return NextResponse.json({ success: false, message: "Failed to submit application" }, { status: 500 });
  }
}
