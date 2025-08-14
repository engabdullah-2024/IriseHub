"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { SiteNav } from "../components/SiteNav" // ✅ unified path
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { SiteFooter } from "../components/site-footer"

const fade = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
}

export default function AboutPage() {
  return (
    <main className="bg-background">
      {/* Global Navigation */}
      <SiteNav />

      {/* HERO */}
      <section aria-labelledby="about-hero" className="relative">
        <div className="container">
          <div
            className="
              relative mx-auto w-full overflow-hidden rounded-2xl
              border border-orange-200 bg-white shadow-soft
              aspect-[16/10] sm:aspect-[21/9] md:h-[clamp(360px,48vw,520px)]
              max-w-[1200px]
            "
          >
            <Image
              src="/iRisehub-Team-Image.jpg"
              alt="iRise community group photo"
              fill
              priority
              sizes="(min-width: 1280px) 1200px, (min-width: 768px) 90vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute left-5 right-5 bottom-5 sm:left-8 sm:bottom-8 md:left-10 md:bottom-10">
              <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                About iRise Hub
              </Badge>

              <h1
                id="about-hero"
                className="
                  mt-3 text-white font-extrabold leading-tight drop-shadow text-balance
                  text-[clamp(1.75rem,4vw,3rem)]
                "
              >
                We’re building a prosperous Somalia through{" "}
                <span className="text-orange-300">entrepreneurship</span> and{" "}
                <span className="text-orange-300">innovation</span>.
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION + STATS */}
      <section className="container py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Copy */}
            <motion.div {...fade} className="space-y-6 lg:col-span-7">
              <h2 className="text-neutral-900 font-extrabold tracking-tight text-[clamp(1.75rem,3vw,2.25rem)]">
                Our mission
              </h2>
              <p className="text-neutral-700 text-[1.05rem] leading-relaxed">
                iRise is a home for founders, operators, and students to learn, share ideas, and
                access opportunities. We run practical programs, connect talent to capital, and
                convene a community that turns ideas into companies.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { k: "Founders trained", v: "2,500+" },
                  { k: "Startups supported", v: "180+" },
                  { k: "Events hosted", v: "400+" },
                ].map(({ k, v }) => (
                  <Card key={k} className="border-orange-100">
                    <CardContent className="p-5">
                      <div className="text-2xl md:text-3xl font-extrabold text-orange-600">
                        {v}
                      </div>
                      <div className="mt-1 text-sm text-neutral-600">{k}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* What we do */}
            <motion.div
              {...fade}
              transition={{ ...fade.transition, delay: 0.05 }}
              className="lg:col-span-5"
            >
              <Card className="shadow-soft h-full">
                <CardHeader>
                  <CardTitle className="text-neutral-900">What we do</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4 text-neutral-700">
                  <div>
                    <h3 className="font-semibold text-neutral-900">Programs</h3>
                    <p>Bootcamps, incubation, and acceleration tailored to your stage.</p>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="font-semibold text-neutral-900">Community</h3>
                    <p>Meetups, hackathons, and knowledge sharing across the ecosystem.</p>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="font-semibold text-neutral-900">Access</h3>
                    <p>Mentors, partners, and investors—so teams can move faster.</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-orange-50/60 border-y border-orange-100">
        <div className="container py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-neutral-900 font-extrabold tracking-tight text-[clamp(1.75rem,3vw,2.25rem)]">
              Our values
            </h2>
            <p className="mt-2 text-neutral-700 max-w-2xl">
              Principles that shape how we build and support our community.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { t: "Ambition", d: "Aim high and execute with urgency." },
                { t: "Practicality", d: "Real problems, real users, real impact." },
                { t: "Inclusivity", d: "Create access for everyone." },
                { t: "Integrity", d: "Do the right thing, always." },
              ].map(({ t, d }) => (
                <Card key={t} className="border-orange-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-orange-700">{t}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-neutral-700">{d}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section className="container py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-neutral-900 font-extrabold tracking-tight text-[clamp(1.75rem,3vw,2.25rem)]">
                The team
              </h2>
              <p className="mt-2 text-neutral-700">
                A small, driven team with deep roots in Somalia’s tech ecosystem.
              </p>
            </div>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white self-start sm:self-auto" asChild>
              <a href="/team">Meet everyone</a>
            </Button>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { n: "Mohamed Ali", r: "Director", img: "/team-1.jpg" },
              { n: "Amina Yusuf", r: "Programs Lead", img: "/team-2.jpg" },
              { n: "Hassan Abdi", r: "Community Manager", img: "/team-3.jpg" },
            ].map(({ n, r, img }) => (
              <Card key={n} className="overflow-hidden border-orange-100">
                <div className="relative h-[220px] sm:h-[240px] md:h-[260px] w-full">
                  <Image
                    src={img}
                    alt={n}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 380px, (min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="font-semibold text-neutral-900">{n}</div>
                  <div className="text-sm text-orange-700">{r}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-orange-100 bg-white/60">
        <div className="container py-12 md:py-16">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex flex-col items-center text-center gap-5">
              <h3 className="font-extrabold text-neutral-900 text-[clamp(1.5rem,2.4vw,2rem)]">
                Want to collaborate with iRise?
              </h3>
              <p className="max-w-2xl text-neutral-700">
                Whether you’re a founder, mentor, or partner—we’d love to hear from you.
                Let’s build the future together.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white" asChild>
                  <a href="/startups">For Startups</a>
                </Button>
                <Button
                  variant="outline"
                  className="border-orange-300 text-orange-700 hover:bg-orange-50"
                  asChild
                >
                  <a href="/contact">Contact us</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter/>
    </main>
  )
}
