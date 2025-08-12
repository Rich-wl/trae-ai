import Link from "next/link"
import { ChevronDown } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
return (
  <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-black text-white border-b border-gray-800">
    <div className="flex items-center gap-6">
      <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
        <span className="text-primary text-2xl font-bold">TRAE</span>
        <span className="sr-only">TRAE Home</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-white hover:text-primary">
              Product <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="bg-gray-800 text-white border-gray-700">
            <DropdownMenuItem className="hover:bg-gray-700">Features</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-700">Integrations</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href="/pricing" className="text-white hover:text-primary">
          Pricing
        </Link>
        <Link href="#" className="text-white hover:text-primary">
          Blog
        </Link>
        <Link href="#" className="text-white hover:text-primary">
          Docs
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-white hover:text-primary">
              Community <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="bg-gray-800 text-white border-gray-700">
            <DropdownMenuItem className="hover:bg-gray-700">Discord</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-700">Forum</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </div>
    <div className="flex items-center gap-4">
      <Button variant="ghost" className="text-white hover:text-primary">
        Log in
      </Button>
      <Button className="bg-primary text-black hover:bg-primary/90">Download</Button>
    </div>
  </header>
)
}
