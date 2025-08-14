// app/(marketing)/page.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


type BriefItem = {
  title: string
  img: string
  description: string
  href: string
}

const briefItems: BriefItem[] = [
  {
    title: "Who We Are",
    img: "/iRisehub-Team-Image.jpg",
    description:
      "We are Somalia’s launchpad for innovation and entrepreneurship — a community of pioneers and problem-solvers accelerating economic prosperity.",
    href: "/about",
  },
  {
    title: "What We Do",
    img: "/twitter.jpg",
    description:
      "We nurture talent and founders with hands-on programs. Our blended approach teaches practical, design-thinking skills to turn ideas into reality.",
    href: "/ecosystem",
  },
  {
    title: "How We Do It",
    img: "/wedo.jpg",
    description:
      "We partner across the community and co-design tailored programs so every startup can move from concept to market faster.",
    href: "/community",
  },
]

export default function MarketingPage() {
  return (
    <>
     

      <main className="bg-background">
        {/* Brief Section */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-[1200px]">
            <div className="grid gap-8 lg:grid-cols-12">
              {/* Left intro (sticky on desktop) */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-20">
                  <h2 className="text-neutral-900 font-extrabold tracking-tight text-[clamp(1.75rem,3vw,2.25rem)] leading-tight">
                    A brief <br /> about <br />
                    <span className="text-orange-600">iRisehub</span>
                  </h2>

                  <Button
                    asChild
                    variant="outline"
                    className="mt-6 border-orange-300 text-orange-700 hover:bg-orange-50"
                  >
                    <Link href="/about">
                      Explore More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right: cards */}
              <div className="lg:col-span-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {briefItems.map((item) => (
                  <Card
                    key={item.title}
                    className="h-full overflow-hidden border-orange-100 bg-white shadow-soft transition-shadow hover:shadow-lg"
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="text-[1.375rem] leading-7">
                        {item.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                        <Image
                          src={item.img}
                          alt={item.title}
                          fill
                          sizes="(min-width: 1280px) 320px, (min-width: 768px) 33vw, 100vw"
                          className="object-cover"
                          priority={item.title === "Who We Are"}
                        />
                      </div>

                      <p className="text-neutral-700 text-[0.975rem] leading-relaxed">
                        {item.description}
                      </p>

                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-orange-600"
                        aria-label={`${item.title} - learn more`}
                      >
                        Learn more
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
