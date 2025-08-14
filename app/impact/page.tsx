"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import {
  BadgeDollarSign,
  Users,
  Handshake,
  BrainCircuit,
  CalendarDays,
  Cpu,
  Layers,
  DollarSign,
  UserCheck,
  UserPlus,
  ClipboardList,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// ---------- helpers

type Stat = {
  label: string
  value: number
  suffix?: string     // "+", "K", "M", etc
  prefix?: string     // "$"
  icon: React.ComponentType<{ className?: string }>
  tone?: "light" | "dark" // which panel it belongs to
}

// Short “K/M” formatting for static labels (used when animation completes)
function shortNumber(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(n % 1_000 === 0 ? 0 : 0)}K`
  return new Intl.NumberFormat().format(n)
}

// Animated count-up that respects reduced-motion
function useCountUp(target: number, start: boolean, duration = 1200) {
  const [val, setVal] = useState(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!start) return
    const d = Math.max(400, duration)
    const t0 = performance.now()
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / d)
      const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
      setVal(Math.round(eased * target))
      if (p < 1) rafRef.current = requestAnimationFrame(step)
    }
    // prefer-reduced-motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mq.matches) {
      setVal(target)
      return
    }
    rafRef.current = requestAnimationFrame(step)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [target, start, duration])

  return val
}

function Count({ value, prefix, suffix, start }: { value: number; prefix?: string; suffix?: string; start: boolean }) {
  const v = useCountUp(value, start)
  const display =
    v >= value ? `${prefix ?? ""}${shortNumber(value)}${suffix ?? ""}` : `${prefix ?? ""}${shortNumber(v)}${suffix ?? ""}`
  return <span>{display}</span>
}

// ---------- data

const lightStats: Stat[] = [
  { label: "Programs", value: 28, suffix: "+", icon: Layers, tone: "light" },
  { label: "Events", value: 350, suffix: "+", icon: CalendarDays, tone: "light" },
  { label: "Impacted Startups", value: 400, suffix: "+", icon: Cpu, tone: "light" },
  { label: "Youth Empowered", value: 3_000, suffix: "+", icon: UserPlus, tone: "light" },
  { label: "Partners", value: 50, suffix: "+", icon: Handshake, tone: "light" },
  { label: "Investment Raised", value: 10_000_000, prefix: "$", icon: DollarSign, tone: "light" },
]

const darkStats: Stat[] = [
  { label: "Startup Grant", value: 720_000, prefix: "$", icon: BadgeDollarSign, tone: "dark" },
  { label: "Mentors", value: 80, suffix: "+", icon: UserCheck, tone: "dark" },
  { label: "Participants", value: 25_000, suffix: "", icon: Users, tone: "dark" },
  { label: "Women Invested", value: 300, suffix: "+", icon: Users, tone: "dark" },
  { label: "Applications Received", value: 45_000, suffix: "", icon: ClipboardList, tone: "dark" },
  { label: "iRise Community Members", value: 40_000, suffix: "", icon: Users, tone: "dark" },
]

// ---------- page

export default function ImpactPage() {
  return (
    <>
     

      <main className="bg-background">
        {/* Hero / intro */}
        <section className="border-b border-orange-100">
          <div className="container py-10 md:py-14">
            <div className="mx-auto max-w-[1200px] grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <h1 className="text-neutral-900 font-extrabold tracking-tight text-[clamp(1.75rem,3.4vw,2.5rem)] leading-tight">
                  Impact <span className="text-orange-600">Numbers</span>
                </h1>
                <p className="mt-3 text-neutral-700">
                  A snapshot of the outcomes we’ve achieved with founders, talent, and partners across Somalia’s tech ecosystem.
                </p>
                <Button asChild variant="outline" className="mt-5 border-orange-300 text-orange-700 hover:bg-orange-50">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>

              {/* Light panel stats */}
              <div className="lg:col-span-7">
                <StatsGrid stats={lightStats} tone="light" />
              </div>
            </div>
          </div>
        </section>

        {/* Orange spotlight panel */}
        <section className="bg-orange-600 text-white">
          <div className="container py-12 md:py-16">
            <div className="mx-auto max-w-[1200px]">
              <StatsGrid stats={darkStats} tone="dark" />
            </div>
          </div>
        </section>

        {/* Callout */}
        <section className="border-t border-orange-100">
          <div className="container py-12 md:py-16">
            <div className="mx-auto max-w-[1000px] text-center">
              <h2 className="text-neutral-900 font-extrabold tracking-tight text-[clamp(1.5rem,3vw,2rem)]">
                Building a stronger startup ecosystem—together.
              </h2>
              <p className="mt-2 text-neutral-700">
                These numbers grow with every cohort, mentorship session, and partnership we form. Join us and help push them further.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white" asChild>
                  <Link href="/startups">Apply to a Program</Link>
                </Button>
                <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50" asChild>
                  <Link href="/contact">Become a Partner</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

// ---------- sub-components

function StatsGrid({ stats, tone }: { stats: Stat[]; tone: "light" | "dark" }) {
  // single observer trigger for all children
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  const cardClass =
    tone === "dark"
      ? "bg-transparent/10 border-white/20 hover:bg-white/10"
      : "bg-white border-orange-100 hover:shadow-lg"

  const iconClass =
    tone === "dark" ? "text-white/90" : "text-orange-600"

  const valueClass =
    tone === "dark" ? "text-white" : "text-orange-700"

  const labelClass =
    tone === "dark" ? "text-white/80" : "text-neutral-600"

  return (
    <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.05 }}
        >
          <Card className={`h-full overflow-hidden border ${cardClass} transition-colors`}>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <s.icon className={`h-6 w-6 ${iconClass}`} />
                <div className={`text-2xl font-extrabold ${valueClass}`}>
                  <Count value={s.value} prefix={s.prefix} suffix={s.suffix} start={inView} />
                </div>
              </div>
              <div className={`mt-2 text-sm ${labelClass}`}>{s.label}</div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
