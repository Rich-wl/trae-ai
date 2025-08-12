import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { PricingSection } from "@/components/pricing/pricing-section"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        {/* Placeholder for actual pricing content if needed later */}
        <PricingSection />
      </main>
      <Footer />
    </div>
  )
}
