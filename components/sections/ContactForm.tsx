"use client"

import { useState } from "react"

type Status = "idle" | "submitting" | "success" | "error"

const fieldStyle = {
  color:       "#2D1A2A",
  borderColor: "rgba(120,60,100,0.18)",
  background:  "transparent",
} as const

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:    data.get("name"),
          email:   data.get("email"),
          message: data.get("message"),
        }),
      })

      if (!res.ok) throw new Error("Request failed")
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <p className="py-6 font-serif italic text-[18px]" style={{ color: "#2D1A2A" }}>
        Thank you — your message is on its way. I&apos;ll get back to you within 24 hours.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="py-6 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <input
          type="text"
          name="name"
          required
          placeholder="Your name"
          className="w-full border-b py-2 text-[15px] outline-none placeholder:opacity-50"
          style={fieldStyle}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your email"
          className="w-full border-b py-2 text-[15px] outline-none placeholder:opacity-50"
          style={fieldStyle}
        />
      </div>
      <textarea
        name="message"
        required
        rows={4}
        placeholder="What's on your mind?"
        className="w-full border-b py-2 text-[15px] outline-none resize-none placeholder:opacity-50"
        style={fieldStyle}
      />

      <div className="flex items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="text-[13px] font-medium uppercase tracking-[0.12em] border-b pb-1
                     transition-opacity duration-300 disabled:opacity-50"
          style={{ color: "#2D1A2A", borderColor: "#2D1A2A" }}
        >
          {status === "submitting" ? "Sending…" : "Send message →"}
        </button>
        {status === "error" && (
          <span className="text-[13px]" style={{ color: "#7B6B99" }}>
            Something went wrong — please try again.
          </span>
        )}
      </div>
    </form>
  )
}
