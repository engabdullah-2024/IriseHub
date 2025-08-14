"use client"

import { useMemo, useState, FormEvent } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const fade = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" },
}

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    topic: "",
    message: "",
  })

  const fields = ["name", "email", "topic", "message"] as const
  const progress = useMemo(() => {
    const filled = fields.reduce((n, k) => n + (form[k].trim() ? 1 : 0), 0)
    return Math.round((filled / fields.length) * 100)
  }, [form])

  const onChange =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((s) => ({ ...s, [key]: e.target.value }))

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    // TODO: wire to /api/contact or a service
    alert("Thanks! We’ll be in touch shortly.")
    setForm({ name: "", email: "", org: "", topic: "", message: "" })
  }

  return (
    <section id="contact" className="border-y border-orange-100 bg-white">
      <div className="container max-w-screen-xl mx-auto px-4 py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr] items-start">
          {/* Left: Intro card */}
          <motion.aside
            {...fade}
            className="rounded-2xl border bg-orange-50/60 border-orange-100 p-6 md:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-orange-700">
              Reach us
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
              Let’s Talk
            </h2>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Connect with us to explore how our programs and the iRise ecosystem
              can help you <span className="font-medium">build, hire,</span> and
              <span className="font-medium"> grow</span> in Somalia.
            </p>

            <div className="mt-6 grid gap-3 text-sm text-neutral-700">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-orange-600" />
                <a className="hover:text-orange-700" href="mailto:hello@irisehub.org">
                  hello@irisehub.org
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-orange-600" />
                <span>+252 (0) 61 000 0000</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-orange-600" />
                <span>Amira Castel Opposite, Pizza House 252 Hodan, Mogadishu</span>
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <Social href="https://facebook.com" label="Facebook">
                <Facebook className="h-4 w-4" />
              </Social>
              <Social href="https://twitter.com" label="Twitter / X">
                <Twitter className="h-4 w-4" />
              </Social>
              <Social href="https://linkedin.com" label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </Social>
            </div>
          </motion.aside>

          {/* Right: Form */}
          <motion.div {...fade}>
            {/* tiny progress meter */}
            <div className="mb-4 flex items-center gap-3">
              <span className="text-xs font-medium text-neutral-500">
                {progress}% completed
              </span>
              <div className="relative h-2 w-full rounded-full bg-neutral-200">
                <div
                  className={cn(
                    "absolute inset-y-0 left-0 rounded-full bg-orange-600 transition-all",
                  )}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-neutral-200 p-6 md:p-8 shadow-sm bg-white"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="name" className="font-semibold text-neutral-900">
                    Full Name <span className="text-orange-600">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="e.g. John Deo"
                    value={form.name}
                    onChange={onChange("name")}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-semibold text-neutral-900">
                    Email <span className="text-orange-600">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={onChange("email")}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="org" className="font-semibold text-neutral-900">
                    Organization
                  </Label>
                  <Input
                    id="org"
                    placeholder="Company / University / NGO"
                    value={form.org}
                    onChange={onChange("org")}
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="topic" className="font-semibold text-neutral-900">
                    Topic <span className="text-orange-600">*</span>
                  </Label>
                  <Input
                    id="topic"
                    placeholder="Partnerships, program inquiry, venue, mentorship…"
                    value={form.topic}
                    onChange={onChange("topic")}
                    required
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="message" className="font-semibold text-neutral-900">
                    Message <span className="text-orange-600">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us briefly how we can help…"
                    className="min-h-[140px] resize-vertical"
                    value={form.message}
                    onChange={onChange("message")}
                    required
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-neutral-500">
                  By submitting, you agree to our{" "}
                  <Link className="underline decoration-orange-400 decoration-2 underline-offset-2" href="/privacy">
                    Privacy Policy
                  </Link>
                  .
                </p>
                <Button
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-700 text-white"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Social({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-orange-200 text-orange-700 hover:bg-orange-50 transition"
      target="_blank"
    >
      {children}
    </Link>
  )
}
