"use client"

import { Button } from "@/components/ui/button"
import React from "react"

export default function NewsletterSection() {
  const [email, setEmail] = React.useState("")
  const [submitted, setSubmitted] = React.useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-xl px-6 text-center">
        <span className="text-xs tracking-wider text-muted-foreground">SUBSCRIBE TO OUR NEWSLETTER</span>
        <h3 className="mt-3 text-2xl font-semibold md:text-3xl">Subscribe to stay tuned for new web design and latest updates. Let&apos;s do it!</h3>

        <form onSubmit={onSubmit} className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full rounded-md border bg-background px-4 py-3 text-sm outline-none transition focus:ring-[3px] focus:ring-ring/50 sm:max-w-md"
          />
          <Button type="submit" className="px-6">Subscribe</Button>
        </form>
        {submitted ? (
          <p className="text-muted-foreground mt-3 text-sm">Thanks for subscribing! We&apos;ll be in touch.</p>
        ) : null}
      </div>
    </section>
  )
}
