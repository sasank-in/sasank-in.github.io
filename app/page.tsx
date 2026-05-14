import PortfolioSection from "@/components/portfolio-section"
import { NavBar } from "@/components/nav-bar"

export default function Home() {
  return (
    <>
      <NavBar />
      <main id="main" className="min-h-screen bg-background">
        <PortfolioSection />
      </main>
    </>
  )
}
