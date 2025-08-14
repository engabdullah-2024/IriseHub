/* ---------- Partners Data ---------- */
export type PartnerItem = {
  id: string
  name: string
  cover: string
  blurb: string
  href?: string
}

export const partners: PartnerItem[] = [
  {
    id: "rise-academy",
    name: "Rise Academy",
    cover: "/rise.png",
    blurb:
      "Showcasing Somali tech talent and celebrating innovators through hands-on, real-world innovation events.",
    href: "/partners/rise-academy",
  },
  {
    id: "minbar",
    name: "Minbar – A Civic Space for Participation",
    cover: "/minbar.png",
    blurb:
      "A civic forum fostering participatory, democratic, and inclusive discourse in the Horn—liberal, progressive, and bold.",
    href: "/partners/minbar",
  },
  {
    id: "incubation-accelerator",
    name: "Incubation & Accelerator Program",
    cover: "/inc.png",
    blurb:
      "Supports stability, inclusive growth, and youth protection while fostering an environment for sustainable employment.",
    href: "/partners/incubation-accelerator",
  },
  {
    id: "mts",
    name: "MTS – Annual Premier Event",
    cover: "/mog.jpg",
    blurb:
      "The premier stage for Somali entrepreneurs, developers, and innovators—showcasing innovation in action.",
    href: "/partners/mts",
  },
  {
    id: "tvet",
    name: "TVET Centers Initiative",
    cover: "/tvet.jpg",
    blurb:
      "Youth hubs offering counseling, vocational & technical training, ICT, beauty, tailoring, and workshops—5,000+ youths trained in 2 years.",
    href: "/partners/tvet",
  },
  {
    id: "iffs",
    name: "Innovate for Food Security (IFFS)",
    cover: "/iff.jpg",
    blurb:
      "Delivers greenhouse kits, drip irrigation, and windpumps, while accelerating agro-startups to boost food security and sustainability.",
    href: "/partners/iffs",
  },
  {
    id: "upshift",
    name: "UPSHIFT – Empowering Change-Makers",
    cover: "/eag.jpg",
    blurb:
      "Empowers youth to address community challenges with entrepreneurial solutions—fueling growth, governance, and civil society.",
    href: "/partners/upshift",
  },
  {
    id: "khalid-award",
    name: "Khalid Innovation Award",
    cover: "/kia.png",
    blurb:
      "Encourages job creation and youth development through a holistic, ecosystem-based approach beyond traditional training.",
    href: "/partners/khalid-award",
  },
]
