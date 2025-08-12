import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DownloadCard } from "@/components/download-card"
import { traeDownloadData } from "@/lib/data"

export default function DownloadPage() {
const latestVersion = traeDownloadData.versions[0] // Assuming the first entry is the latest

return (
  <div className="flex flex-col min-h-screen bg-black text-white">
    <Header />
    <main className="flex-1 flex flex-col items-center justify-center py-12 px-4 md:px-6">
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Download TRAE</h1>
        <p className="text-lg text-muted-foreground">Download TRAE for your desired operating system.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        <DownloadCard os="mac" versionInfo={latestVersion.darwin} />
        <DownloadCard os="windows" versionInfo={latestVersion.win32} />
        <DownloadCard os="linux" isComingSoon />
      </div>
    </main>
    <Footer />
  </div>
)
}
