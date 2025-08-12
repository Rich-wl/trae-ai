import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { AlertCircle, Home } from "lucide-react"

export default function VersionNotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 px-4 md:px-6">
        <div className="text-center max-w-md">
          <AlertCircle className="mx-auto h-16 w-16 text-red-500 mb-6" />
          <h1 className="text-4xl font-bold mb-4">Version Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            The requested TRAE version could not be found. It may have been removed or the link is incorrect.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-primary text-black hover:bg-primary/90 rounded-lg transition-colors font-medium"
          >
            <Home className="mr-2 h-4 w-4" />
            Back to All Versions
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}