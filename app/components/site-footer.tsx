"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Facebook, Twitter, Linkedin, Youtube, ArrowUp, MapPin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// If you have an SVG logo, use the string path instead (sharpest):
// const logoSrc = "/iriselogo.svg"
// Otherwise keep the PNG import:
import iriselogo from "@/public/iriselogo.png" // high-res (prefer @2x or larger)

export function SiteFooter() {
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <footer className="mt-16 border-t border-orange-100 bg-background">
      {/* Newsletter band */}
      <section className="bg-orange-600 text-white">
        <div className="container px-5">
          <div className="mx-auto max-w-[1100px] py-10 md:py-12 grid gap-6 md:grid-cols-[1.1fr_1.2fr] items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Join the <span className="opacity-90">iRisehub</span> Community
              </h2>
              <p className="mt-2 text-white/90">
                Don’t miss programs, events, and opportunities across Somalia’s tech ecosystem.
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full flex-col gap-3 sm:flex-row"
              aria-label="Subscribe to iRisehub newsletter"
            >
              <Input
                type="email"
                required
                placeholder="Your email address"
                className="bg-white text-neutral-900 placeholder:text-neutral-500"
                aria-label="Email address"
              />
              <Button className="bg-neutral-900 hover:bg-neutral-800 text-white" type="submit">
                Subscribe
              </Button>
            </form>

            {/* Socials */}
            <div className="col-span-full flex flex-wrap items-center gap-4 pt-2">
              <span className="text-white/90 text-sm">Follow us</span>
              <SocialIcon href="https://facebook.com" label="Facebook">
                <Facebook className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href="https://twitter.com" label="Twitter">
                <Twitter className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com" label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href="https://youtube.com" label="YouTube">
                <Youtube className="h-5 w-5" />
              </SocialIcon>
            </div>
          </div>
        </div>
      </section>

      {/* Main footer grid */}
      <section className="container px-5">
        <div className="mx-auto max-w-[1100px] py-10 md:py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand block */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="iRisehub home">
              {/* If you have an SVG, use:
                  <Image src="/iriselogo.svg" alt="iRisehub" width={160} height={160} className="h-11 w-auto" priority />
                 PNG kept sharp via higher intrinsic size, quality, and unoptimized. */}
              <Image
                src={iriselogo}
                alt="iRisehub"
                width={160}         // render at higher intrinsic px
                height={160}
                quality={100}       // avoid over-compression
                unoptimized         // keep original sharpness for small logos
                sizes="44px"        // tell the browser the display size
                decoding="async"
                priority
                className="h-11 w-auto object-contain"
              />
              <span className="sr-only">iRisehub</span>
            </Link>
            <p className="text-sm text-neutral-600">
              A home to learn, build, and invest in Somalia’s future. We support founders and talent
              through programs, community, and access to capital.
            </p>
          </div>

          {/* Quick Links */}
          <FooterCol title="Quick Links">
            <FooterLink href="/about">Who we are</FooterLink>
            <FooterLink href="/ecosystem">Ecosystem</FooterLink>
            <FooterLink href="/">Community</FooterLink>
            <FooterLink href="/">Startups</FooterLink>
            <FooterLink href="/">Areas we focus</FooterLink>
            <FooterLink href="/">News</FooterLink>
          </FooterCol>

          {/* Explore */}
          <FooterCol title="Explore">
            <FooterLink href="/">Team</FooterLink>
            <FooterLink href="/">Board of Trustees</FooterLink>
            <FooterLink href="/">Events</FooterLink>
            <FooterLink href="/">Careers</FooterLink>
            <FooterLink href="/">Contact</FooterLink>
          </FooterCol>

          {/* Visit Us */}
          <FooterCol title="Visit Us">
            <div className="flex items-start gap-2 text-sm text-neutral-700">
              <MapPin className="mt-0.5 h-4 w-4 text-orange-600" />
              <p>
                Amira Castel Opposite, Pizza House 252 Hodan
                <br />
                Mogadishu, Somalia
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700">
              <Mail className="h-4 w-4 text-orange-600" />
              <a className="hover:text-orange-700" href="mailto:hello@irisehub.org">
                hello@irisehub.org
              </a>
            </div>
          </FooterCol>
        </div>
      </section>

      {/* Bottom bar */}
      <div className="border-t border-orange-100">
        <div className="container px-5">
          <div className="mx-auto max-w-[1100px] py-5 flex flex-col gap-3 items-center justify-between text-xs sm:flex-row text-neutral-600">
            <p>© {new Date().getFullYear()} iRisehub. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link className="hover:text-orange-700" href="/privacy">
                Privacy
              </Link>
              <Link className="hover:text-orange-700" href="/terms">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <Button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 rounded-full p-0 h-11 w-11 shadow-lg transition
          ${showTop ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"}
          bg-orange-600 hover:bg-orange-700 text-white`}
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </footer>
  )
}

/* ---------- helpers ---------- */

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-neutral-900">{title}</h3>
      <div className="mt-3 grid gap-2">{children}</div>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm text-neutral-700 hover:text-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500/50 rounded"
    >
      {children}
    </Link>
  )
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/30 hover:bg-white/20 transition"
    >
      {children}
    </Link>
  )
}
