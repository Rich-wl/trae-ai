import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bolt } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      className="relative w-full h-[calc(100vh-4rem)] flex items-center justify-center text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/hero-background.png")' }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
      <div className="relative z-20 flex flex-col items-start max-w-6xl mx-auto px-4 md:px-6 w-full">
        <div className="mb-8 flex items-center gap-2 text-sm text-primary bg-gray-800/50 px-3 py-1 rounded-full backdrop-blur-sm border border-primary/30">
          <Bolt className="w-4 h-4" />
          <span>Grok-4 is now on Trae. Start building.</span>
          <Link href="#" className="underline hover:no-underline ml-1">
            Explore now
          </Link>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
          ThReAIEng <br />
          Collaborate with Intelligence
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
          Understand. Execute. Deliver. TRAE is your 10x AI Engineer who can independently build software solutions for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <Button asChild className="bg-primary text-black hover:bg-primary/90 px-8 py-6 text-lg font-semibold">
            <Link href="/download">Download TRAE</Link>
          </Button>
          <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold">
            <Link href="#">Get SOLO Code</Link>
          </Button>
        </div>
        <Link href="/download" className="text-muted-foreground hover:text-primary text-sm flex items-center group">
          All Downloads
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right ml-1 transition-transform group-hover:translate-x-1"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
