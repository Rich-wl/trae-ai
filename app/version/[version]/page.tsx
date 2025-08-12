import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DownloadCard } from "@/components/download-card"
import { traeDownloadData } from "@/lib/data"
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, Calendar, Package } from 'lucide-react'

interface VersionPageProps {
  params: {
    version: string
  }
}

// Generate static paths for all versions
export async function generateStaticParams() {
  const versions = new Set<string>()
  
  traeDownloadData.versions.forEach(version => {
    if (version.win32?.version) versions.add(version.win32.version)
    if (version.darwin?.version) versions.add(version.darwin.version)
  })
  
  return Array.from(versions).map(version => ({
    version: version
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: VersionPageProps): Promise<Metadata> {
  const requestedVersion = params.version
  
  // Find the version data
  const version = traeDownloadData.versions.find(v => 
    v.win32?.version === requestedVersion || v.darwin?.version === requestedVersion
  )
  
  if (!version) {
    return {
      title: 'Version Not Found - TRAE',
      description: 'The requested version was not found.'
    }
  }

  const releaseDate = new Date(version.timestamp).toLocaleDateString()
  const winVersion = version.win32?.version || 'N/A'

  return {
    title: `TRAE v${requestedVersion} 历史版本下载 - Trae AI, Trae Idea, Trae 2.0, Trae Solo`,
    description: `TRAE v${requestedVersion} 历史版本下载，发布于${releaseDate}。下载TRAE历史版本，体验Trae AI, Trae Idea, Trae 2.0, Trae Solo功能，支持Windows和macOS系统。`,
    keywords: 'TRAE,trae ai,trae idea,trae 2.0,trae solo,trae国际版,trae 历史版本,trae下载,trae历史版本下载,AI programming,version download,release notes,programming assistant',
    openGraph: {
      title: `TRAE v${requestedVersion} 历史版本下载 - AI Programming Assistant`,
      description: `TRAE v${requestedVersion} 历史版本下载，增强的Trae AI, Trae Idea, Trae 2.0, Trae Solo功能。`,
      type: 'website'
    },
    twitter: {
      card: 'summary',
      title: `TRAE v${requestedVersion} 历史版本下载 - AI Programming Assistant`,
      description: `TRAE v${requestedVersion} 历史版本下载，增强的Trae AI, Trae Idea, Trae 2.0, Trae Solo功能。`
    }
  }
}

export default function VersionPage({ params }: VersionPageProps) {
  const requestedVersion = params.version
  
  // Find the version data
  const version = traeDownloadData.versions.find(v => 
    v.win32?.version === requestedVersion || v.darwin?.version === requestedVersion
  )
  
  const versionIndex = traeDownloadData.versions.findIndex(v => 
    v.win32?.version === requestedVersion || v.darwin?.version === requestedVersion
  )

  if (!version) {
    notFound()
  }

  const releaseDate = new Date(version.timestamp)
  const isLatest = versionIndex === 0
  const sortedVersions = [...traeDownloadData.versions].sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  )

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to All Versions
            </Link>
          </div>

          {/* Version Header */}
          <div className="text-center mb-12">
            <div className="mb-6">
              <Package className="mx-auto h-16 w-16 text-primary" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              TRAE Version {requestedVersion}
              {isLatest && <span className="text-primary ml-4">[Latest]</span>}
            </h1>
            
            <div className="flex flex-wrap justify-center gap-6 text-lg text-muted-foreground mb-6">
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Released: {releaseDate.toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-gray-900 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">Windows Version</h3>
                <p className="text-2xl font-bold text-primary">
                  {version.win32?.version || 'Not Available'}
                </p>
                {version.win32 && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Updated: {new Date(version.win32.uploadDateFormatted).toLocaleDateString()}
                  </p>
                )}
              </div>
              
              <div className="bg-gray-900 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">macOS Version</h3>
                <p className="text-2xl font-bold text-primary">
                  {version.darwin?.version || 'Not Available'}
                </p>
                {version.darwin && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Updated: {new Date(version.darwin.uploadDateFormatted).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Download This Version</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <DownloadCard os="mac" versionInfo={version.darwin} />
              <DownloadCard os="windows" versionInfo={version.win32} />
              <DownloadCard os="linux" isComingSoon />
            </div>
          </div>

          {/* Version Navigation */}
          <div className="flex justify-between items-center border-t border-gray-800 pt-8">
            {versionIndex < sortedVersions.length - 1 ? (
              <Link
                href={`/version/${sortedVersions[versionIndex + 1].win32?.version || sortedVersions[versionIndex + 1].darwin?.version}`}
                className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Older Version
              </Link>
            ) : (
              <div></div>
            )}
            
            {versionIndex > 0 && (
              <Link
                href={`/version/${sortedVersions[versionIndex - 1].win32?.version || sortedVersions[versionIndex - 1].darwin?.version}`}
                className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                Newer Version
                <ChevronLeft className="ml-2 h-4 w-4 rotate-180" />
              </Link>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}