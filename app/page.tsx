import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { TechnologySection } from "@/components/technology-section"
import { IntegrationSection } from "@/components/integration-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { MonetizationSection } from "@/components/monetization-section"
import { TeamSection } from "@/components/team-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <div id="problem">
          <ProblemSection />
        </div>
        <div id="solution">
          <SolutionSection />
        </div>
        <div id="technology">
          <TechnologySection />
        </div>
        <div id="integration">
          <IntegrationSection />
        </div>
        <div id="roadmap">
          <RoadmapSection />
        </div>
        <MonetizationSection />
        <div id="team">
          <TeamSection />
        </div>
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
