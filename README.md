🌐 iRise Hub Website — Modern Black/Orange Brand

A fully responsive, SEO-optimized, and accessible website for iRise Hub, showcasing programs, events, partners, and opportunities for Somali innovators, entrepreneurs, and changemakers.

Built with Next.js 14 App Router, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion for a smooth, modern user experience.

📌 Table of Contents

✨ Features

🛠 Tech Stack

📂 Project Structure

🚀 Getting Started

⚙️ Environment Variables

📸 Screenshots

🤝 Contributing

📜 License

✨ Features
🎨 Brand-Aligned UI

Black + Orange theme to match brand identity.

Modern typography and spacing for readability.

📄 Core Pages

Home — Hero, marketing sections, impact highlights.

Programs — Bootcamps, incubation, accelerator details.

Ecosystem — The 4 pillars: programs, community, access, space.

Events & Updates — Cards with images, dates, and descriptions.

Partners — Logos, blurbs, and collaboration links.

Testimonials — Quotes and photos from community members.

Contact — Form with progress indicator and validation.

⚡ Performance & Accessibility

Lighthouse scores ≥ 95 (Performance, SEO, A11y, Best Practices).

Server-side rendering (SSR) & static site generation (SSG) where possible.

Images optimized with next/image.

Lazy-loaded components and animations.

📱 Responsiveness

Mobile-first design with Tailwind’s responsive utilities.

Accessible navigation with keyboard support.

🛠 Tech Stack
Technology	Purpose
Next.js 14+ (App Router)	Framework, routing, SSR/SSG
TypeScript	Type safety & maintainability
Tailwind CSS	Utility-first styling
shadcn/ui	Accessible, themeable UI components
Framer Motion	Page & component animations
Lucide Icons	Lightweight, SVG-based icons
Vercel	Deployment & hosting
📂 Project Structure
app/
  (marketing)/
    page.tsx            # Marketing page
  ecosystem/
    page.tsx            # Ecosystem 4-pillars section
  events/
    page.tsx            # Events & Updates
  impact/
    page.tsx            # Impact highlights
  partners/
    page.tsx            # Partners page
  testimonials/
    page.tsx            # Testimonials section
  contact/
    page.tsx            # Contact form
  layout.tsx            # Root layout
  page.tsx              # Home page
components/
  SiteNav.tsx           # Navigation bar
  Footer.tsx            # Footer
  ui/                   # shadcn/ui components
lib/
  utils.ts              # Helpers & formatters
public/
  partners/             # Partner images
  testimonials/         # Avatar photos
  events/               # Event images
styles/
  globals.css           # Global Tailwind styles

🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/your-username/irise-hub.git
cd irise-hub

2️⃣ Install dependencies
npm install
# or
yarn install
# or
pnpm install

3️⃣ Start development server
npm run dev
# or
yarn dev
# or
pnpm dev


Visit http://localhost:3000 in your browser.

⚙️ Environment Variables

This project uses minimal env variables since it’s frontend-only.

Example .env.local:

NEXT_PUBLIC_SITE_URL=https://your-deployment-url.vercel.app

📸 Screenshots
Home Page	Events & Updates	Testimonials

	
	
🤝 Contributing

Fork the repository.

Create a new branch:

git checkout -b feature/your-feature


Commit changes:

git commit -m "Add your message"


Push to your fork:

git push origin feature/your-feature


Create a Pull Request.

📜 License

MIT License © 2025 — Built with ❤️ by [Eng Abdalla]
