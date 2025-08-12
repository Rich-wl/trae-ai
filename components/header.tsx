import Link from "next/link"
import { ChevronDown } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
return (
  <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 px-4 md:px-6 bg-black text-white border-b border-gray-800">
    <div className="flex items-center gap-6">
      <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
        <span className="text-primary text-2xl font-bold">TRAE</span>
        <span className="sr-only">TRAE Home</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <Link href="/pricing" className="text-white hover:text-primary">
          Pricing
        </Link>
        <Link href="#" className="text-white hover:text-primary">
          Blog
        </Link>
        <Link href="#" className="text-white hover:text-primary">
          Docs
        </Link>
        <Link href="/about" className="text-white hover:text-primary">
          About
        </Link>
      </nav>
    </div>
    <div className="flex items-center gap-4">
      <Button className="bg-primary text-black hover:bg-primary/90">Download</Button>
    </div>
  </header>
)
}
