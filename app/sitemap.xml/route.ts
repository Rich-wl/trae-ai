export async function GET() {
  const baseUrl = 'https://trae.ai'
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
  
  // TODO: Add dynamic blog posts and version pages
  // You'll need to implement logic to fetch actual blog posts and versions
  // For now, adding placeholder structure
  
  const allPages = [...staticPages, ...docsPages]
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
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