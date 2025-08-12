import { Apple, Download, LaptopIcon as Linux, ComputerIcon as Windows, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
DropdownMenu,
DropdownMenuContent,
DropdownMenuItem,
DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { type DownloadLink, type PlatformVersion } from "@/lib/data"

interface DownloadCardProps {
os: "mac" | "windows" | "linux"
versionInfo?: PlatformVersion
isComingSoon?: boolean
}

export function DownloadCard({ os, versionInfo, isComingSoon }: DownloadCardProps) {
const getDownloadLink = (downloads: DownloadLink[], type: "x64" | "apple" | "intel") => {
  // Prioritize 'cn' region, otherwise take the first available
  const cnDownload = downloads.find(d => d.region === "cn")
  const defaultDownload = downloads[0]

  const selectedDownload = cnDownload || defaultDownload

  if (!selectedDownload) return null

  if (type === "x64" && selectedDownload.x64) return selectedDownload.x64
  if (type === "apple" && selectedDownload.apple) return selectedDownload.apple
  if (type === "intel" && selectedDownload.intel) return selectedDownload.intel
  return null
}

return (
  <Card className="flex flex-col items-center p-6 bg-card text-white border-gray-800 rounded-lg shadow-lg">
    <CardHeader className="flex flex-col items-center gap-4 p-0 pb-4">
      {os === "mac" && <Apple className="w-16 h-16 text-white" />}
      {os === "windows" && <Windows className="w-16 h-16 text-white" />}
      {os === "linux" && <Linux className="w-16 h-16 text-white" />}
      <CardTitle className="text-2xl font-bold capitalize">{os}</CardTitle>
      {os === "mac" && <p className="text-muted-foreground text-sm">macOS 11.0+</p>}
      {os === "windows" && <p className="text-muted-foreground text-sm">Windows 10, 11</p>}
      {os === "linux" && (
        <p className="text-muted-foreground text-center text-sm">
          TRAE is coming to Linux soon. Sign up for the waitlist.
        </p>
      )}
    </CardHeader>
    <CardContent className="flex flex-col items-center gap-4 w-full p-0">
      {isComingSoon ? (
        <div className="text-center">
          <p className="text-lg font-medium text-muted-foreground">Coming Soon</p>
        </div>
      ) : (
        <>
          {os === "mac" && versionInfo?.downloads && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="w-full bg-primary text-black hover:bg-primary/90">
                  <Download className="mr-2 h-4 w-4" />
                  Download .dmg ({'Apple Silicon'}) <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="bg-gray-800 text-white border-gray-700">
                {getDownloadLink(versionInfo.downloads, "apple") && (
                  <DropdownMenuItem asChild className="hover:bg-gray-700">
                    <a href={getDownloadLink(versionInfo.downloads, "apple") || undefined} download>
                      Download .dmg (Apple Silicon)
                    </a>
                  </DropdownMenuItem>
                )}
                {getDownloadLink(versionInfo.downloads, "intel") && (
                  <DropdownMenuItem asChild className="hover:bg-gray-700">
                    <a href={getDownloadLink(versionInfo.downloads, "intel") || undefined} download>
                      Download .dmg (Intel)
                    </a>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          {os === "windows" && versionInfo?.downloads && (
            <Button asChild className="w-full bg-primary text-black hover:bg-primary/90">
              <a href={getDownloadLink(versionInfo.downloads, "x64") || undefined} download>
                <Download className="mr-2 h-4 w-4" />
                Download for Windows (x64)
              </a>
            </Button>
          )}
          {versionInfo && (
            <p className="text-xs text-muted-foreground mt-2">
              Version: {versionInfo.version} | Last updated: {new Date(versionInfo.uploadDateFormatted).toLocaleDateString()}
            </p>
          )}
        </>
      )}
    </CardContent>
  </Card>
)
}
