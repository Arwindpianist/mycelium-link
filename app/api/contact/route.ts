import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, type, message } = body

    // Validate required fields
    if (!name || !email || !phone || !type) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Configure Zoho Mail SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true, // SSL
      auth: {
        user: process.env.ZOHO_EMAIL || "hello@myceliumlink.com",
        pass: process.env.ZOHO_PASSWORD,
      },
    })

    // Format email content
    const emailContent = `
New Contact Form Submission from MyceliumLink

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name:     ${name}
Email:    ${email}
Phone:    ${phone}
Type:     ${type}

Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${message || "No message provided"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: ${new Date().toLocaleString("en-MY", {
      timeZone: "Asia/Kuala_Lumpur",
      dateStyle: "full",
      timeStyle: "long",
    })}
    `.trim()

    // HTML version
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #b1a235 0%, #236c71 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
    .header h1 { margin: 0; font-size: 24px; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
    .field { margin: 15px 0; padding: 15px; background: white; border-left: 4px solid #b1a235; border-radius: 4px; }
    .label { font-weight: bold; color: #666; font-size: 12px; text-transform: uppercase; }
    .value { color: #333; font-size: 16px; margin-top: 5px; }
    .message { background: white; padding: 20px; border-radius: 4px; margin: 20px 0; border: 1px solid #e0e0e0; }
    .footer { text-align: center; margin-top: 20px; color: #999; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🌐 New MyceliumLink Contact</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Full Name</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email Address</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Phone Number</div>
        <div class="value"><a href="tel:${phone}">${phone}</a></div>
      </div>
      <div class="field">
        <div class="label">Contact Type</div>
        <div class="value">${type}</div>
      </div>
      ${
        message
          ? `
      <div class="message">
        <div class="label">Message</div>
        <div class="value">${message.replace(/\n/g, "<br>")}</div>
      </div>
      `
          : ""
      }
      <div class="footer">
        Submitted on ${new Date().toLocaleString("en-MY", {
          timeZone: "Asia/Kuala_Lumpur",
          dateStyle: "full",
          timeStyle: "long",
        })}
      </div>
    </div>
  </div>
</body>
</html>
    `.trim()

    // Send email
    await transporter.sendMail({
      from: `"MyceliumLink Contact Form" <${process.env.ZOHO_EMAIL || "hello@myceliumlink.com"}>`,
      to: "hello@myceliumlink.com",
      replyTo: email,
      subject: `New Contact from ${name} - ${type}`,
      text: emailContent,
      html: htmlContent,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        error: "Failed to send message. Please try again or email us directly at hello@myceliumlink.com",
      },
      { status: 500 }
    )
  }
}
