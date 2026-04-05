import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const CONTACT_EMAIL = "jain.mrinal140@gmail.com";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function sanitize(input: unknown, maxLength: number) {
  if (typeof input !== "string") {
    return "";
  }

  return input.trim().slice(0, maxLength);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function submitToSheet(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: string;
}) {
  const webhookUrl = process.env.CONTACT_SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error("Missing CONTACT_SHEET_WEBHOOK_URL environment variable");
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Sheet webhook request failed with status ${response.status}`);
  }
}

async function sendInquiryEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: string;
}) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFromEmail = process.env.RESEND_FROM_EMAIL;

  if (resendApiKey && resendFromEmail) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: resendFromEmail,
        to: [CONTACT_EMAIL],
        reply_to: data.email,
        subject: `[Contact Inquiry] ${data.subject}`,
        html: `
          <h2>New Contact Inquiry</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Submitted At:</strong> ${data.submittedAt}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, "<br />")}</p>
        `,
        text: [
          `Name: ${data.name}`,
          `Email: ${data.email}`,
          `Submitted At: ${data.submittedAt}`,
          "",
          "Message:",
          data.message,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      throw new Error(`Resend request failed with status ${response.status}`);
    }

    return;
  }

  const smtpHost = process.env.CONTACT_SMTP_HOST;
  const smtpPort = Number(process.env.CONTACT_SMTP_PORT || "587");
  const smtpFamily = Number(process.env.CONTACT_SMTP_FAMILY || "4");
  const smtpUser = process.env.CONTACT_SMTP_USER;
  const smtpPass = process.env.CONTACT_SMTP_PASS;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || smtpUser;

  if (!smtpHost || !smtpUser || !smtpPass || !fromEmail) {
    throw new Error(
      "Missing email config. Set RESEND_API_KEY + RESEND_FROM_EMAIL, or SMTP vars CONTACT_SMTP_HOST, CONTACT_SMTP_USER, CONTACT_SMTP_PASS, and CONTACT_FROM_EMAIL or CONTACT_SMTP_USER"
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    family: smtpFamily === 6 ? 6 : 4,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  await transporter.sendMail({
    from: fromEmail,
    to: CONTACT_EMAIL,
    subject: `[Contact Inquiry] ${data.subject}`,
    replyTo: data.email,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Submitted At: ${data.submittedAt}`,
      "",
      "Message:",
      data.message,
    ].join("\n"),
    html: `
      <h2>New Contact Inquiry</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Submitted At:</strong> ${data.submittedAt}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, "<br />")}</p>
    `,
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = sanitize(body.name, 80);
    const email = sanitize(body.email, 160);
    const subject = sanitize(body.subject, 120);
    const message = sanitize(body.message, 2000);

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { ok: false, message: "name, email, subject, and message are required" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, message: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    const submittedAt = new Date().toISOString();
    const payload = {
      name,
      email,
      subject,
      message,
      submittedAt,
    };

    await Promise.all([submitToSheet(payload), sendInquiryEmail(payload)]);

    return NextResponse.json(
      {
        ok: true,
        message: "Inquiry submitted successfully. Thanks for reaching out.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST /api/contact error:", error);
    return NextResponse.json(
      {
        ok: false,
        message: "Unable to submit inquiry right now. Please try again shortly.",
      },
      { status: 500 }
    );
  }
}