import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  if (
    typeof name !== "string" || !name.trim() ||
    typeof email !== "string" || !isValidEmail(email) ||
    typeof message !== "string" || !message.trim()
  ) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from:    `Artemis Axen site <contact@${process.env.RESEND_EMAIL_DOMAIN}>`,
    to:      [process.env.CONTACT_TO_EMAIL!],
    replyTo: email,
    subject: `New message from ${name}`,
    text:    `From: ${name} <${email}>\n\n${message}`,
  })

  if (error) {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
