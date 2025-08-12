import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <span className="text-primary text-2xl font-bold">TRAE HISTORY</span>
            <span className="sr-only">TRAE HISTORY Home</span>
          </Link>
          <p className="text-sm text-muted-foreground">© 2025 TRAE HISTORY Inc. All rights reserved.</p>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold text-lg">Terms</h3>
          <Link href="/user-agreement" className="text-muted-foreground hover:text-primary text-sm">
            User Agreement
          </Link>
          <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary text-sm">
            Privacy Policy
          </Link>
        
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold text-lg">Resources</h3>
          <Link href="/docs" className="text-muted-foreground hover:text-primary text-sm">
            Docs
          </Link>
          <Link href="/blog" className="text-muted-foreground hover:text-primary text-sm">
            Blog
          </Link>
        </div>
   
      </div>
    </footer>
  )
}
