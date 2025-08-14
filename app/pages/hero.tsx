"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
}

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden"
    >
      {/* Background layer */}
      <div className="absolute inset-0 -z-10 bg-background" />

      <div className="container px-5 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* LEFT: Content */}
          <motion.div {...fadeUp} className="space-y-6">
            {/* Pill badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700">
              <span className="inline-block h-2 w-2 rounded-full bg-orange-500" />
              Somali Innovation Hub
            </span>

            {/* Main heading */}
            <h1
              id="hero-title"
              className="font-extrabold tracking-tight leading-tight text-neutral-900 text-[clamp(2rem,4vw,3.5rem)]"
            >
              Welcome to Somalia’s{" "}
              <span className="text-orange-600">Innovation Hub</span>
            </h1>

            {/* Subtext */}
            <p className="max-w-xl text-base md:text-lg leading-relaxed text-neutral-700">
              A home to learn, share ideas, explore business and investment opportunities,
              and shape the country’s economic ecosystem.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-orange-600 hover:bg-orange-700 text-white"
                size="lg"
              >
                <a href="#programs">Explore Programs</a>
              </Button>

              <Button
                asChild
                variant="ghost"
                className="text-orange-700 hover:text-orange-800 hover:bg-orange-50"
                size="lg"
              >
                <a href="#learn-more" aria-label="Learn more">
                  Learn more →
                </a>
              </Button>
            </div>

            {/* Accent underline */}
            <div className="h-1 w-28 rounded-full bg-gradient-to-r from-orange-500 to-orange-600" />
          </motion.div>

          {/* RIGHT: Image card */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-soft">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/iRisehub-Team-Image.jpg"
                  alt="We call it Rising, and it became iRise"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                  priority
                />

                {/* Caption overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="text-4xl md:text-6xl font-extrabold tracking-tight text-orange-400 drop-shadow">
                    IRISE
                  </div>
                  <div className="mt-2 text-sm md:text-base text-white">
                    We call it Rising.{" "}
                    <span className="text-orange-300">And it became iRise.</span>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
                    2018
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
