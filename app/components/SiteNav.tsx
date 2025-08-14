"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

// ✅ Adjust path to your actual logo
import iriselogo from "@/public/iriselogo.png"

const links = [
  { href: "/about", label: "About us" },
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/", label: "Community" },
  { href: "/", label: "Startups" },
  { href: "/", label: "Areas We Focus" },
]

export function SiteNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-50 bg-background border-b border-orange-200">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo only */}
        <Link href="/" className="flex items-center">
          <Image
            src={iriselogo}
            alt="iRise Logo"
            width={48} // Bigger for clarity
            height={48}
            priority
            unoptimized
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={cn(
                  "transition-colors hover:text-orange-600",
                  pathname === l.href && "text-orange-600 underline underline-offset-4"
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-orange-300 text-orange-600"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile nav menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-orange-200 bg-white shadow-lg"
          >
            <ul className="flex flex-col p-4 space-y-3 text-sm font-medium">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block px-2 py-2 rounded-md hover:bg-orange-50 hover:text-orange-600 transition-colors",
                      pathname === l.href && "text-orange-600 font-semibold"
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
