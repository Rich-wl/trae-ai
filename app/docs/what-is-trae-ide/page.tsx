import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'What is Trae IDE? - TRAE Documentation | AI Programming Assistant',
  description: 'Learn about TRAE IDE, the revolutionary AI-powered programming assistant that enhances your development workflow with intelligent code completion, analysis, and generation.',
  keywords: 'TRAE,trae ai,trae idea,trae 2.0,trae solo,trae国际版,AI programming,intelligent code,AI development tool,code generation,programming assistant,IDE,integrated development environment',
}

const sidebarItems = [
  {
    category: "Get Started",
    items: [
      { title: "What is Trae IDE?", href: "/docs/what-is-trae-ide", active: true },
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

export default function WhatIsTraeIDEPage() {
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
                          className={`block text-sm py-1 transition-colors ${
                            item.active
                              ? "text-primary font-medium"
                              : "text-muted-foreground hover:text-primary"
                          }`}
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
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
              <Link href="/docs" className="hover:text-primary transition-colors">
                Documentation
              </Link>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m9 18 6-6-6-6"/>
              </svg>
              <span className="text-white">What is Trae IDE?</span>
            </nav>

            <article className="prose prose-invert prose-lg max-w-none">
              <h1>What is Trae IDE?</h1>
              
              <p className="lead">
                TRAE IDE is a revolutionary AI-powered integrated development environment that transforms the way developers write, analyze, and optimize code. Built with cutting-edge artificial intelligence, TRAE enhances your programming workflow by providing intelligent assistance at every step of the development process.
              </p>

              <h2>Core Philosophy</h2>
              <p>
                TRAE is designed with the belief that AI should amplify human creativity and productivity, not replace it. Our IDE serves as an intelligent programming companion that understands your coding patterns, anticipates your needs, and provides contextual assistance to help you build better software faster.
              </p>

              <h2>Key Features</h2>

              <h3>🤖 Advanced AI Code Generation</h3>
              <p>
                TRAE AI engine can generate high-quality code snippets, complete functions, and even entire classes based on natural language descriptions or code comments. The AI understands context, coding conventions, and best practices to produce code that not just functional, but maintainable and efficient.
              </p>

              <h3>⚡ Intelligent Code Completion</h3>
              <p>
                Go beyond traditional autocomplete with TRAE context-aware suggestions. The IDE analyzes your entire codebase, understands relationships between different components, and provides completions that are relevant to your specific project and coding style.
              </p>

              <h3>🔍 Real-time Code Analysis</h3>
              <p>
                TRAE continuously analyzes your code for potential issues, performance optimizations, and security vulnerabilities. Get instant feedback on code quality, receive suggestions for improvements, and catch problems before they become bugs.
              </p>

              <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6 my-8">
                <h4 className="text-blue-200 mb-3 mt-0">💡 AI-Powered Workflow</h4>
                <p className="text-blue-100 mb-0">
                  TRAE learns from your coding patterns and preferences to provide increasingly personalized assistance. The more you use it, the better it becomes at predicting your needs and providing relevant suggestions.
                </p>
              </div>

              <h2>How TRAE Works</h2>
              
              <h3>1. Contextual Understanding</h3>
              <p>
                TRAE analyzes your entire project structure, dependencies, and coding patterns to build a comprehensive understanding of your codebase. This allows it to provide suggestions that are not just syntactically correct, but semantically meaningful within your project context.
              </p>

              <h3>2. Predictive Assistance</h3>
              <p>
                Using machine learning models trained on millions of lines of code, TRAE can predict what you likely to write next and offer intelligent suggestions that save time and reduce errors.
              </p>

              <div className="bg-gray-900 rounded-lg p-6 not-prose">
                <h4 className="font-semibold mb-3">Next Steps</h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/docs/installation"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-center transition-colors"
                  >
                    Install TRAE
                  </Link>
                  <Link 
                    href="/docs/ai-code-generation"
                    className="border border-gray-600 hover:border-primary text-white px-4 py-2 rounded-md text-center transition-colors"
                  >
                    Explore AI Features
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}