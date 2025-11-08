import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

// Email sending function using Resend
async function sendEmail(body: {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  timeline?: string;
  description: string;
}) {
  const { name, email, company, budget, timeline, description } = body;

  const TO_EMAIL = process.env.CONTACT_EMAIL || "hello@sritek.com";
  const FROM_EMAIL = process.env.FROM_EMAIL || "onboarding@resend.dev"; // Update with your verified domain

  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set, email will not be sent");
    return { success: false, error: "Email service not configured" };
  }

  try {
    // Escape HTML in user input to prevent XSS
    const escapeHtml = (text: string) => {
      const map: Record<string, string> = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      };
      return text.replace(/[&<>"']/g, (m) => map[m]);
    };

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = company ? escapeHtml(company) : "";
    const safeDescription = description
      .replace(/\n/g, "<br>")
      .replace(/[&<>"']/g, (m) => {
        const map: Record<string, string> = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;",
        };
        return map[m] || m;
      });

    const { data, error } = await resend.emails.send({
      from: `SriTek Contact Form <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      reply_to: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #0ea5e9; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #0ea5e9; margin-bottom: 5px; }
              .value { padding: 10px; background: white; border-radius: 4px; border-left: 3px solid #0ea5e9; }
              .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; }
              a { color: #0ea5e9; text-decoration: none; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${safeName}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${safeEmail}">${safeEmail}</a></div>
                </div>
                ${
                  safeCompany
                    ? `
                <div class="field">
                  <div class="label">Company:</div>
                  <div class="value">${safeCompany}</div>
                </div>
                `
                    : ""
                }
                ${
                  budget
                    ? `
                <div class="field">
                  <div class="label">Budget Range:</div>
                  <div class="value">${escapeHtml(budget)}</div>
                </div>
                `
                    : ""
                }
                ${
                  timeline
                    ? `
                <div class="field">
                  <div class="label">Timeline:</div>
                  <div class="value">${escapeHtml(timeline)}</div>
                </div>
                `
                    : ""
                }
                <div class="field">
                  <div class="label">Project Description:</div>
                  <div class="value">${safeDescription}</div>
                </div>
                <div class="footer">
                  <p>This email was sent from the SriTek contact form.</p>
                  <p>Submitted at: ${new Date().toLocaleString()}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ""}
${budget ? `Budget Range: ${budget}` : ""}
${timeline ? `Timeline: ${timeline}` : ""}

Project Description:
${description}

---
This email was sent from the SriTek contact form.
Submitted at: ${new Date().toLocaleString()}
      `.trim(),
    });

    if (error) {
      throw new Error(error.message || "Failed to send email");
    }

    return { success: true, data };
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, budget, timeline, description } = body;

    // Validate required fields
    if (!name || !email || !description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Log the submission
    console.log("New contact form submission:", {
      name,
      email,
      company,
      budget,
      timeline,
      description,
      timestamp: new Date().toISOString(),
    });

    // Send email
    const emailResult = await sendEmail({
      name,
      email,
      company,
      budget,
      timeline,
      description,
    });

    if (!emailResult.success) {
      // Log the error but don't fail the request
      // This way the user still gets a success message even if email fails
      console.error("Failed to send email:", emailResult.error);
    }

    return NextResponse.json(
      {
        message: "Form submitted successfully",
        emailSent: emailResult.success,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
