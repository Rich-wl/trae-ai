import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'TRAE Documentation - AI Programming Assistant | Trae AI, Trae Idea, Trae 2.0, Trae Solo',
  description: 'Complete documentation for TRAE AI programming assistant. Learn how to get started with Trae AI, Trae Idea, Trae 2.0, Trae Solo and explore supported countries and regions.',
  keywords: 'TRAE,trae ai,trae idea,trae 2.0,trae solo,trae国际版,trae 历史版本,trae下载,trae历史版本下载,AI programming,intelligent code,AI development tool,code generation,programming assistant,documentation,guide',
  openGraph: {
    type: 'website',
    title: 'TRAE Documentation - AI Programming Assistant | Trae AI, Trae Idea, Trae 2.0, Trae Solo',
    description: 'Complete documentation for TRAE AI programming assistant. Learn how to get started and explore all features.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TRAE Documentation - AI Programming Assistant | Trae AI, Trae Idea, Trae 2.0, Trae Solo',
    description: 'Complete documentation for TRAE AI programming assistant. Learn how to get started and explore all features.',
  },
}

const sidebarItems = [
  {
    category: "Get Started",
    items: [
      { title: "What is Trae IDE?", href: "/docs/what-is-trae-ide" },
      { title: "Installation Guide", href: "/docs/installation" },
    ]
  },
  {
    category: "Features",
    items: [
      { title: "AI Code Generation", href: "/docs/ai-code-generation" },
    ]
  },
  {
    category: "Support",
    items: [
      { title: "Supported Countries and Regions", href: "/docs/supported-countries" },
    ]
  }
]

export default function DocsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 border-r border-gray-800 fixed left-0 top-16 bottom-0 overflow-y-auto">
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-6">Documentation</h2>
            <nav className="space-y-6">
              {sidebarItems.map((section) => (
                <div key={section.category}>
                  <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider mb-3">
                    {section.category}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-4xl">
            {/* Hero Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
                <h1 className="text-4xl font-bold">TRAE Documentation</h1>
              </div>
              <p className="text-xl text-muted-foreground">
                Welcome to the complete guide for TRAE AI programming assistant. Learn everything you need to know about installation, features, and best practices.
              </p>
            </div>

            {/* Quick Links */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Link href="/docs/what-is-trae-ide" className="group">
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-primary/20 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                        <path d="M12 17h.01"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">What is Trae IDE?</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Learn about TRAE's AI-powered features and how it revolutionizes development workflow.
                  </p>
                </div>
              </Link>

              <Link href="/docs/installation" className="group">
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-primary/20 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                        <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                        <line x1="12" y1="22.08" x2="12" y2="12"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">Installation Guide</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Step-by-step instructions to download and install TRAE on your system.
                  </p>
                </div>
              </Link>

              <Link href="/docs/supported-countries" className="group">
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-primary/20 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                        <path d="M2 12h20"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">Supported Regions</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    View the list of countries and regions where TRAE is available.
                  </p>
                </div>
              </Link>
            </div>

            {/* Getting Started Section */}
            <div className="prose prose-invert prose-lg max-w-none">
              <h2>Getting Started with TRAE</h2>
              <p>
                TRAE is an advanced AI-powered programming assistant designed to enhance your development workflow. 
                Whether you're a beginner or an experienced developer, TRAE adapts to your coding style and helps 
                you write better code faster.
              </p>

              <h3>Key Features</h3>
              <ul>
                <li><strong>Intelligent Code Completion:</strong> Advanced AI-powered suggestions that understand context</li>
                <li><strong>Real-time Code Analysis:</strong> Instant feedback on code quality and potential issues</li>
                <li><strong>Multi-language Support:</strong> Works with popular programming languages and frameworks</li>
                <li><strong>Smart Refactoring:</strong> Automated code improvements while maintaining functionality</li>
                <li><strong>Cross-platform Compatibility:</strong> Available on Windows, macOS, and Linux</li>
              </ul>

              <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6 my-8">
                <h4 className="text-blue-200 mb-3 mt-0">💡 Quick Tip</h4>
                <p className="text-blue-100 mb-0">
                  New to TRAE? Start with our <Link href="/docs/what-is-trae-ide" className="text-primary hover:underline">What is Trae IDE?</Link> guide 
                  to understand the core concepts, then follow our <Link href="/docs/installation" className="text-primary hover:underline">Installation Guide</Link> to get up and running.
                </p>
              </div>

              <h3>Popular Documentation</h3>
              <div className="grid md:grid-cols-2 gap-4 not-prose">
                <div className="border border-gray-700 rounded-lg p-4">
                  <h4 className="font-medium mb-2">
                    <Link href="/docs/ai-code-generation" className="text-primary hover:underline">AI Code Generation</Link>
                  </h4>
                  <p className="text-sm text-muted-foreground">Learn how to leverage TRAE's AI for automatic code generation</p>
                </div>
                <div className="border border-gray-700 rounded-lg p-4">
                  <h4 className="font-medium mb-2">
                    <Link href="/docs/supported-countries" className="text-primary hover:underline">Supported Countries</Link>
                  </h4>
                  <p className="text-sm text-muted-foreground">View regions where TRAE is available worldwide</p>
                </div>
              </div>

              <h3>Need Help?</h3>
              <p>
                If you can't find what you're looking for in our documentation, feel free to reach out to our support team. 
                We're here to help you make the most of TRAE's powerful features.
              </p>

              <div className="bg-gray-900 rounded-lg p-6 not-prose">
                <h4 className="font-semibold mb-3">Next Steps</h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/docs/what-is-trae-ide"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-center transition-colors"
                  >
                    Learn About TRAE
                  </Link>
                  <Link 
                    href="/"
                    className="border border-gray-600 hover:border-primary text-white px-4 py-2 rounded-md text-center transition-colors"
                  >
                    Download TRAE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}