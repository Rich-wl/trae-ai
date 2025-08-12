import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQ } from "@/components/faq"
import { PricingCards } from "@/components/pricing-cards"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1 pt-16">
        <PricingCards />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
