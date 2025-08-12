import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { traeDownloadData } from "@/lib/data"
import Link from "next/link"
import { Metadata } from "next"
import { notFound } from "next/navigation"

type BlogPostPageProps = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return traeDownloadData.versions.map((version) => ({
    id: version.logId,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { id } = await params
  const version = traeDownloadData.versions.find(v => v.logId === id)
  
  if (!version) {
    return {
      title: 'Version Not Found - TRAE Blog',
    }
  }

  const versionNumber = version.win32?.version || version.darwin?.version || 'Unknown'
  const releaseDate = new Date(version.timestamp).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return {
    title: `TRAE ${versionNumber} Release - AI Programming Assistant | Trae AI, Trae Idea, Trae 2.0, Trae Solo`,
    description: `TRAE version ${versionNumber} released on ${releaseDate}. Discover new features, improvements, and enhancements in this latest version of our AI programming assistant.`,
    keywords: 'TRAE,trae ai,trae idea,trae 2.0,trae solo,trae国际版,trae 历史版本,trae下载,trae历史版本下载,AI programming,intelligent code,AI development tool,code generation,programming assistant,release notes',
    openGraph: {
      type: 'article',
      title: `TRAE ${versionNumber} Release - AI Programming Assistant`,
      description: `TRAE version ${versionNumber} released on ${releaseDate}. Discover new features and improvements.`,
      publishedTime: version.timestamp,
    },
    twitter: {
      card: 'summary_large_image',
      title: `TRAE ${versionNumber} Release - AI Programming Assistant`,
      description: `TRAE version ${versionNumber} released on ${releaseDate}. Discover new features and improvements.`,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params
  const version = traeDownloadData.versions.find(v => v.logId === id)
  
  if (!version) {
    notFound()
  }

  const versionNumber = version.win32?.version || version.darwin?.version || 'Unknown'
  const releaseDate = new Date(version.timestamp)
  const formattedDate = releaseDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  const isLatest = traeDownloadData.versions.findIndex(v => v.logId === id) === 0

  // Get version index for navigation
  const sortedVersions = [...traeDownloadData.versions].sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  )
  const currentIndex = sortedVersions.findIndex(v => v.logId === id)
  const prevVersion = currentIndex > 0 ? sortedVersions[currentIndex - 1] : null
  const nextVersion = currentIndex < sortedVersions.length - 1 ? sortedVersions[currentIndex + 1] : null

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1 pt-28 pb-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
            <span className="text-white">TRAE {versionNumber} Release</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              {isLatest && (
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium">
                  Latest Release
                </span>
              )}
              <time className="text-muted-foreground text-sm">
                {formattedDate}
              </time>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              TRAE {versionNumber} Release
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Discover the latest improvements and features in TRAE version {versionNumber}, bringing enhanced AI capabilities and improved user experience.
            </p>
          </header>

          {/* Article Content */}
          <article className="prose prose-invert prose-lg max-w-none">
            <div className="bg-gray-900 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">Version Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {version.win32 && (
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-blue-200">Windows</h3>
                    <p className="text-muted-foreground">Version: {version.win32.version}</p>
                    <p className="text-muted-foreground">
                      Release Date: {new Date(version.win32.uploadDateFormatted).toLocaleDateString()}
                    </p>
                  </div>
                )}
                {version.darwin && (
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-gray-200">macOS</h3>
                    <p className="text-muted-foreground">Version: {version.darwin.version}</p>
                    <p className="text-muted-foreground">
                      Release Date: {new Date(version.darwin.uploadDateFormatted).toLocaleDateString()}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <h2>What's New in TRAE {versionNumber}</h2>
            
            <p>
              We're excited to announce the release of TRAE {versionNumber}, packed with powerful new features and improvements designed to enhance your AI-powered development experience. This version continues our commitment to providing the most advanced AI programming assistant available.
            </p>

            <h3>🚀 Enhanced AI Capabilities</h3>
            <p>
              TRAE {versionNumber} introduces improved AI algorithms that provide more accurate code suggestions, better context understanding, and enhanced natural language processing. Experience faster and more intelligent code generation that adapts to your coding style and project requirements.
            </p>

            <h3>⚡ Performance Improvements</h3>
            <ul>
              <li>Optimized response times for code completion and suggestions</li>
              <li>Reduced memory usage for better system performance</li>
              <li>Enhanced startup speed and overall application responsiveness</li>
              <li>Improved handling of large codebases and complex projects</li>
            </ul>

            <h3>🛠️ New Features</h3>
            <ul>
              <li><strong>Smart Code Refactoring:</strong> Advanced refactoring suggestions that maintain code quality while improving structure</li>
              <li><strong>Enhanced Language Support:</strong> Expanded support for modern programming languages and frameworks</li>
              <li><strong>Improved Error Detection:</strong> More accurate identification and resolution suggestions for common coding issues</li>
              <li><strong>Better Integration:</strong> Seamless integration with popular IDEs and development environments</li>
            </ul>

            <h3>🔧 Bug Fixes and Stability</h3>
            <p>
              This release addresses numerous user-reported issues and includes significant stability improvements:
            </p>
            <ul>
              <li>Fixed memory leaks in long-running sessions</li>
              <li>Resolved issues with code completion in complex nested structures</li>
              <li>Improved error handling and recovery mechanisms</li>
              <li>Enhanced cross-platform compatibility</li>
            </ul>

            <h3>📈 User Experience Enhancements</h3>
            <p>
              We've focused on improving the overall user experience with intuitive interface updates, better documentation, and more informative feedback messages. The AI assistant now provides more contextual help and clearer explanations for its suggestions.
            </p>

            <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6 my-8">
              <h3 className="text-blue-200 mb-3">💡 Pro Tip</h3>
              <p className="text-blue-100 mb-0">
                Make sure to update your TRAE settings to take full advantage of the new AI capabilities. Check out our documentation for configuration tips that can help optimize performance for your specific development workflow.
              </p>
            </div>

            <h3>🔄 Upgrade Path</h3>
            <p>
              Upgrading to TRAE {versionNumber} is seamless. Your existing settings, preferences, and project configurations will be automatically migrated. We recommend backing up your custom configurations before upgrading as a best practice.
            </p>

            <h3>🌟 Looking Ahead</h3>
            <p>
              This release sets the foundation for even more exciting features coming in future versions. Stay tuned for announcements about upcoming enhancements to TRAE's AI capabilities and new collaboration features.
            </p>

            <p>
              <strong>Download TRAE {versionNumber} today and experience the next level of AI-powered development assistance!</strong>
            </p>
          </article>

          {/* Download Section */}
          <div className="bg-gray-900 rounded-lg p-6 my-8">
            <h3 className="text-xl font-semibold mb-4">Download TRAE {versionNumber}</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md text-center transition-colors"
              >
                Download Now
              </Link>
              <Link 
                href="/blog"
                className="border border-gray-600 hover:border-primary text-white px-6 py-3 rounded-md text-center transition-colors"
              >
                View All Releases
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex justify-between items-center pt-8 border-t border-gray-800">
            <div className="flex-1">
              {nextVersion && (
                <Link 
                  href={`/blog/${nextVersion.logId}`}
                  className="group flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                    <path d="m15 18-6-6 6-6"/>
                  </svg>
                  <div>
                    <div className="text-sm">Previous</div>
                    <div className="font-medium">TRAE {nextVersion.win32?.version || nextVersion.darwin?.version}</div>
                  </div>
                </Link>
              )}
            </div>
            
            <div className="flex-1 text-right">
              {prevVersion && (
                <Link 
                  href={`/blog/${prevVersion.logId}`}
                  className="group inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="text-right mr-2">
                    <div className="text-sm">Next</div>
                    <div className="font-medium">TRAE {prevVersion.win32?.version || prevVersion.darwin?.version}</div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </Link>
              )}
            </div>
          </nav>
        </div>
      </main>
      <Footer />
    </div>
  )
}