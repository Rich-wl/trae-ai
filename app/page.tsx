import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DownloadCard } from "@/components/download-card"
import { traeDownloadData } from "@/lib/data"
import Link from "next/link"

export default function DownloadPage() {
  // Sort versions by timestamp in descending order (newest first)
  const sortedVersions = [...traeDownloadData.versions].sort((a, b) =>
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  )

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1 flex flex-col items-center pt-28 pb-12 px-4 md:px-6">
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
              className="lucide lucide-box-select mx-auto text-primary"
            >
              <path d="M12.5 2.5L10 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V14L21.5 11.5" />
              <path d="M17 10L22 5" />
              <path d="M17 5L22 10" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Download TRAE1</h1>
          <p className="text-lg text-muted-foreground">Download TRAE for your desired operating system.</p>
        </div>

        <div className="w-full max-w-7xl space-y-12">
          {sortedVersions.map((version, index) => (
            <div key={version.logId} className="space-y-6">
              <div className="text-center">
                <Link href={`/version/${version.win32?.version || version.darwin?.version || index}`}>
                  <h2 className="text-2xl font-semibold mb-2 hover:text-primary transition-colors cursor-pointer">
                    {index === 0 && <span className="text-primary mr-2">[Latest]</span>}
                    Version Release - {new Date(version.timestamp).toLocaleDateString()}
                  </h2>
                </Link>
                <p className="text-sm text-muted-foreground mb-4">
                  Windows: {version.win32?.version || 'N/A'} |
                  macOS: {version.darwin?.version || 'N/A'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <DownloadCard os="mac" versionInfo={version.darwin} />
                <DownloadCard os="windows" versionInfo={version.win32} />
                <DownloadCard os="linux" isComingSoon />
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
