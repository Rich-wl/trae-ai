import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { traeDownloadData } from "@/lib/data"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'TRAE Version History Blog - AI Programming Assistant | Trae AI, Trae Idea, Trae 2.0, Trae Solo',
  description: 'Explore TRAE version history and release notes. Stay updated with the latest features and improvements in Trae AI, Trae Idea, Trae 2.0, Trae Solo and Trae International Edition.',
  keywords: 'TRAE,trae ai,trae idea,trae 2.0,trae solo,trae国际版,trae 历史版本,trae下载,trae历史版本下载,AI programming,intelligent code,AI development tool,code generation,programming assistant,version history,release notes',
  openGraph: {
    type: 'website',
    title: 'TRAE Version History Blog - AI Programming Assistant | Trae AI, Trae Idea, Trae 2.0, Trae Solo',
    description: 'Explore TRAE version history and release notes. Stay updated with the latest features and improvements in Trae AI, Trae Idea, Trae 2.0, Trae Solo and Trae International Edition.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TRAE Version History Blog - AI Programming Assistant | Trae AI, Trae Idea, Trae 2.0, Trae Solo',
    description: 'Explore TRAE version history and release notes. Stay updated with the latest features and improvements in Trae AI, Trae Idea, Trae 2.0, Trae Solo and Trae International Edition.',
  },
}

export default function BlogPage() {
  // Sort versions by timestamp in descending order (newest first)
  const sortedVersions = [...traeDownloadData.versions].sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  )

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1 pt-28 pb-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-newspaper mx-auto text-primary"
              >
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
                <path d="M18 14h-8"/>
                <path d="M15 18h-5"/>
                <path d="M10 6h8v4h-8z"/>
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">TRAE Version History</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest TRAE releases. Discover new features, improvements, and enhancements in every version of our AI programming assistant.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedVersions.map((version, index) => {
              const versionNumber = version.win32?.version || version.darwin?.version || `v${index + 1}`
              const releaseDate = new Date(version.timestamp)
              const formattedDate = releaseDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })

              return (
                <article key={version.logId} className="group">
                  <Link href={`/blog/${version.logId}`}>
                    <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors duration-300 border border-gray-800 hover:border-primary/20">
                      <div className="flex items-center gap-2 mb-3">
                        {index === 0 && (
                          <span className="bg-primary text-primary-foreground px-2 py-1 rounded-sm text-xs font-medium">
                            Latest
                          </span>
                        )}
                        <span className="text-xs text-muted-foreground">
                          {formattedDate}
                        </span>
                      </div>
                      
                      <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        TRAE {versionNumber} Release
                      </h2>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        Discover the latest improvements and features in TRAE version {versionNumber}. Enhanced AI capabilities, better performance, and improved user experience.
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2 text-xs">
                          {version.win32 && (
                            <span className="bg-blue-900/50 text-blue-200 px-2 py-1 rounded">
                              Windows
                            </span>
                          )}
                          {version.darwin && (
                            <span className="bg-gray-700 text-gray-200 px-2 py-1 rounded">
                              macOS
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                          <span className="text-sm">Read more</span>
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
                            className="ml-1"
                          >
                            <path d="m9 18 6-6-6-6"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}