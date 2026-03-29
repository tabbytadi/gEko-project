import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { BottleSection } from "@/components/sections/bottle-section"
import { MissionSection } from "@/components/sections/mission-section"
import { AnimatorsSection } from "@/components/sections/animators-section"
import { WorkshopsSection } from "@/components/sections/workshops-section"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-geko-cream">
      <Header />
      <main>
        <HeroSection />
        <BottleSection />
        <MissionSection />
        <AnimatorsSection />
        <WorkshopsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
