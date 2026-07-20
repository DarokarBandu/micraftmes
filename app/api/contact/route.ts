import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

const apiKey = process.env.SENDGRID_API_KEY;
if (apiKey) {
  sgMail.setApiKey(apiKey);
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, subject, message } = data;

    if (!apiKey) {
      console.warn("SENDGRID_API_KEY is not set.");
      return NextResponse.json({ success: false, message: "Server misconfigured" }, { status: 500 });
    }

    const senderEmail = process.env.SENDER_EMAIL || "shinde@micraft.co.in";

    const msg = {
      to: senderEmail, 
      from: senderEmail, // Must be verified in SendGrid
      replyTo: email,
      subject: `New Contact Form Submission: ${subject || "No Subject"}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr/>
        <p><strong>Message:</strong></p>
        <p>${message?.replace(/\n/g, "<br/>")}</p>
      `,
    };

    await sgMail.send(msg);

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully!",
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    if (error.response) {
      console.error(error.response.body);
    }
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
  }
}
