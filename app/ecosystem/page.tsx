// app/ecosystem/page.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowRight } from "lucide-react"
import { partners } from "../../app/partners"
import { SiteNav } from "../components/SiteNav"
import { SiteFooter } from "../components/site-footer"
import ContactSection from "../components/ContactSection"

const fade = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" },
}

export default function EcosystemPage() {
  return (
    <div>
        <SiteNav/>
      <main className="bg-background">
      {/* HERO */}
      <section aria-labelledby="eco-hero" className="relative">
        <div className="relative mx-auto w-full overflow-hidden border-y">
          <div className="relative aspect-[16/9] md:aspect-[21/9]">
            <Image
              src="/ecos.jpg"
              alt="iRise ecosystem in action"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-x-0 bottom-0">
              <div className="container max-w-screen-xl mx-auto px-4 py-10 md:py-14">
                <Badge className="bg-orange-600 text-white border-orange-600">
                  Ecosystem
                </Badge>
                <h1
                  id="eco-hero"
                  className="mt-3 text-white font-extrabold leading-tight text-balance text-[clamp(2rem,4vw,3.25rem)] drop-shadow"
                  >
                  A connected platform for founders, talent & partners
                </h1>
                <p className="mt-3 max-w-3xl text-white/90 text-[clamp(.95rem,1.4vw,1.05rem)] leading-relaxed">
                  We link universities, mentors, investors, and public
                  stakeholders so teams can learn fast, build faster, and scale
                  what works across Somalia.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    asChild
                    className="bg-orange-600 hover:bg-orange-700 text-white"
                  >
                    <Link href="/startups">See programs</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white/40 text-orange-500 hover:bg-white/10 hover:text-white"
                    >
                    <Link href="#pillars">Explore pillars</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Local sub-nav */}
        <nav className="sticky top-16 z-30 border-b bg-background/80 backdrop-blur">
          <div className="container max-w-screen-xl mx-auto px-4 flex gap-6 overflow-x-auto py-3 text-sm">
            {[
              { href: "#pillars", label: "Pillars" },
              { href: "#metrics", label: "Metrics" },
              { href: "#pathway", label: "Pathway" },
              { href: "#partners", label: "Partners" },
            ].map((l) => (
                <a
                key={l.href}
                href={l.href}
                className="text-neutral-700 hover:text-orange-700 whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      </section>

      {/* PILLARS */}
      <section
        id="pillars"
        className="container max-w-screen-xl mx-auto px-4 py-12 md:py-16"
      >
        <motion.div
          {...fade}
          className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-3xl">
            <h2 className="text-neutral-900 font-extrabold tracking-tight text-[clamp(1.6rem,3vw,2.2rem)]">
              The 4 pillars that power our ecosystem
            </h2>
            <p className="mt-2 text-neutral-700">
              Practical programs, a builder community, access to mentors &
              capital, and a collaborative space.
            </p>
          </div>
          <Button
            asChild
            className="bg-orange-600 hover:bg-orange-700 text-white self-start md:self-auto"
          >
            <Link href="/contact">Partner with us</Link>
          </Button>
        </motion.div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              t: "Programs",
              d: "Bootcamps, incubation, and accelerators tailored to where you are.",
              img: "/ecosystem/pillars-programs.jpg",
            },
            {
              t: "Community",
              d: "Meetups, hackathons, and peer learning across the tech scene.",
              img: "/ecosystem/pillars-community.jpg",
            },
            {
              t: "Access",
              d: "Warm introductions to mentors, partners, and investors.",
              img: "/ecosystem/pillars-access.jpg",
            },
            {
              t: "Space",
              d: "A hub for teams to learn, collaborate, and launch MVPs.",
              img: "/ecosystem/pillars-space.jpg",
            },
          ].map(({ t, d, img }, i) => (
            <motion.div
              key={t}
              {...fade}
              transition={{ ...fade.transition, delay: i * 0.05 }}
            >
              <Card className="overflow-hidden border-orange-100 hover:shadow-lg transition-shadow">
                <div className="relative h-44 w-full">
                  <Image
                    src={img}
                    alt={t}
                    fill
                    sizes="(min-width:1024px) 300px, 50vw"
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-[1.1rem]">{t}</CardTitle>
                </CardHeader>
                <CardContent className="text-neutral-700">{d}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* METRICS */}
      <section id="metrics" className="bg-neutral-950 text-white">
        <div className="container max-w-screen-xl mx-auto px-4 py-10 md:py-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
              { v: "28+", k: "Programs" },
              { v: "350+", k: "Events" },
            { v: "400+", k: "Impacted Startups" },
            { v: "$10M", k: "Investment Raised" },
          ].map(({ v, k }, i) => (
            <motion.div
              key={k}
              {...fade}
              transition={{ ...fade.transition, delay: i * 0.05 }}
            >
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
                <div className="text-3xl font-extrabold text-orange-400">{v}</div>
                <div className="mt-1 text-sm text-white/80">{k}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PATHWAY */}
      <section
        id="pathway"
        className="bg-orange-50/60 border-y border-orange-100"
      >
        <div className="container max-w-screen-xl mx-auto px-4 py-12 md:py-16">
          <motion.h3
            {...fade}
            className="text-neutral-900 font-extrabold tracking-tight text-[clamp(1.4rem,2.6vw,2rem)]"
          >
            From idea to scale — a clear path
          </motion.h3>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
                {
                    n: "01",
                    t: "Discover",
                d: "Bootcamps & ideation sprints to validate real problems.",
              },
              {
                  n: "02",
                  t: "Build",
                d: "Incubation to ship MVPs, test with users and reach traction.",
              },
              {
                  n: "03",
                t: "Grow",
                d: "Acceleration, mentorship & capital to scale what works.",
              },
            ].map(({ n, t, d }, i) => (
              <motion.div
                key={t}
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.05 }}
              >
                <Card className="relative h-full border-orange-100">
                  <span className="absolute -top-3 left-5 rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-white">
                    {n}
                  </span>
                  <CardHeader className="pb-2">
                    <CardTitle>{t}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-neutral-700">{d}</CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-orange-600 hover:bg-orange-700 text-white"
              >
              <Link href="/startups">See current programs</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-orange-300 text-orange-700 hover:bg-orange-50"
              >
              <Link href="/community">Join our community</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section
        id="partners"
        className="container max-w-screen-xl mx-auto px-4 py-10 md:py-14"
        >
        <motion.h4
          {...fade}
          className="text-neutral-900 font-extrabold tracking-tight text-[clamp(1.2rem,2vw,1.5rem)]"
        >
          Trusted by our ecosystem partners
        </motion.h4>
        <Separator className="my-4" />

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {partners.map((p, i) => (
            <motion.div
              key={p.id}
              {...fade}
              transition={{ ...fade.transition, delay: i * 0.04 }}
            >
              <Card className="h-full border-orange-100 hover:shadow-lg transition-shadow">
                <div className="relative h-32 w-full border-b">
                  <Image
                    src={p.cover}
                    alt={`${p.name} cover`}
                    fill
                    sizes="(min-width:1024px) 300px, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-2 left-2 h-12 w-32 relative">
                   
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{p.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-neutral-700">
                  {p.blurb}
                </CardContent>
                {p.href && (
                  <div className="p-4 pt-0">
                    <Link
                      href={p.href}
                      className="text-orange-600 hover:underline text-sm font-medium"
                      >
                      Learn more →
                    </Link>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-orange-100 bg-white/60">
        <div className="container max-w-screen-lg mx-auto px-4 py-12 md:py-16 text-center">
          <h3 className="text-neutral-900 font-extrabold tracking-tight text-[clamp(1.5rem,2.4vw,2rem)]">
            Let’s build Somalia’s next wave of startups
          </h3>
          <p className="mt-2 text-neutral-700 max-w-2xl mx-auto">
            Whether you’re a founder, mentor, or partner — we’d love to
            collaborate.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button
              asChild
              className="bg-orange-600 hover:bg-orange-700 text-white"
              >
              <Link href="/contact">
                Get in touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-orange-300 text-orange-700 hover:bg-orange-50"
              >
              <Link href="/startups">View programs</Link>
            </Button>
          </div>
        </div>
      </section>
      <ContactSection/>

    </main>
    <SiteFooter/>
    </div>
  )
}
