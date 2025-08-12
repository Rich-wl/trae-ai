import { traeDownloadData } from '@/lib/data'

export async function GET() {
  const baseUrl = 'https://traehistory.com'
  const currentDate = new Date().toISOString().split('T')[0]
  
  // Static pages
  const staticPages = [
    { url: '', priority: 1.0, changefreq: 'daily' },
    { url: '/about', priority: 0.8, changefreq: 'monthly' },
    { url: '/pricing', priority: 0.9, changefreq: 'weekly' },
    { url: '/privacy-policy', priority: 0.5, changefreq: 'yearly' },
    { url: '/user-agreement', priority: 0.5, changefreq: 'yearly' },
    { url: '/blog', priority: 0.8, changefreq: 'daily' },
    { url: '/docs', priority: 0.9, changefreq: 'weekly' },
  ]
  
  // Docs pages
  const docsPages = [
    { url: '/docs/ai-code-generation', priority: 0.7, changefreq: 'weekly' },
    { url: '/docs/installation', priority: 0.8, changefreq: 'weekly' },
    { url: '/docs/what-is-trae-ide', priority: 0.7, changefreq: 'weekly' },
    { url: '/docs/supported-countries', priority: 0.6, changefreq: 'monthly' },
  ]
  
  // Generate version pages from traeDownloadData
  const versionPages: { url: string; priority: number; changefreq: string; lastmod?: string }[] = []
  const versions = new Set<string>()
  
  traeDownloadData.versions.forEach(version => {
    // Add unique versions (both Windows and macOS versions)
    if (version.win32?.version) versions.add(version.win32.version)
    if (version.darwin?.version) versions.add(version.darwin.version)
  })
  
  // Create sitemap entries for each unique version
  Array.from(versions).forEach(version => {
    const versionData = traeDownloadData.versions.find(v => 
      v.win32?.version === version || v.darwin?.version === version
    )
    
    versionPages.push({
      url: `/version/${version}`,
      priority: 0.8,
      changefreq: 'monthly',
      lastmod: versionData ? new Date(versionData.timestamp).toISOString().split('T')[0] : currentDate
    })
  })
  
  const allPages = [...staticPages, ...docsPages, ...versionPages]
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod || currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}