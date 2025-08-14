import MarketingPage from "./(marketing)/page"
import { SiteFooter } from "./components/site-footer"
import { SiteNav } from "./components/SiteNav"
import { SocialRail } from "./components/social-rail"
import ImpactPage from "./impact/page"

import { Hero } from "./pages/hero"

export default function Page() {
  return (
    <>
      {/* Navigation */}
      <SiteNav />

      {/* Social Links */}
      <SocialRail />

      {/* Main Content */}
      <main>
        <Hero />
       <MarketingPage/>
       <ImpactPage/>
        {/* You can call other page sections here, like <About />, <Ecosystem />, <Community />, etc. */}
        {/* footer */}
        <SiteFooter/>
      </main>
    </>
  )
}
