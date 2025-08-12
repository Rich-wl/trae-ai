import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'AI Code Generation - TRAE Documentation | AI Programming Assistant',
  description: 'Learn how to use TRAE AI code generation features to write code faster and more efficiently.',
  keywords: 'TRAE,AI code generation,automatic coding,AI programming,code completion',
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
      { title: "AI Code Generation", href: "/docs/ai-code-generation", active: true },
    ]
  },
  {
    category: "Support",
    items: [
      { title: "Supported Countries and Regions", href: "/docs/supported-countries" },
    ]
  }
]

export default function AICodeGenerationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <div className="flex flex-1 pt-16">
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
                            item.active ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
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

        <main className="flex-1 ml-64 p-8">
          <div className="max-w-4xl">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
              <Link href="/docs" className="hover:text-primary transition-colors">Documentation</Link>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m9 18 6-6-6-6"/>
              </svg>
              <span className="text-white">AI Code Generation</span>
            </nav>

            <article className="prose prose-invert prose-lg max-w-none">
              <h1>AI Code Generation</h1>
              
              <p className="lead">
                Agents are your programming assistants designed for different development tasks. TRAE IDE provides built-in agents. You can create custom agents by configuring prompts and toolsets, enabling them to assist you more efficiently in completing complex tasks.
              </p>

              <h2>Capabilities of Agents</h2>
              
              <div className="grid md:grid-cols-2 gap-6 not-prose mb-8">
                <div className="bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-500/20 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-blue-400">Autonomous Operation</h3>
                  </div>
                  <p className="text-sm text-blue-100/80">
                    Independently explore your codebase, identify relevant files, and make necessary code changes.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-600/10 to-green-800/10 border border-green-500/20 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-400">
                        <path d="M12.5 2.5L10 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V14L21.5 11.5"/>
                        <path d="M17 10L22 5"/>
                        <path d="M17 5L22 10"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-green-400">Full Tool Access</h3>
                  </div>
                  <p className="text-sm text-green-100/80">
                    Utilize all available tools for searching, editing, creating files, and running terminal commands.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-600/10 to-purple-800/10 border border-purple-500/20 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400">
                        <path d="M9 12l2 2 4-4"/>
                        <circle cx="12" cy="12" r="9"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-purple-400">Contextual Understanding</h3>
                  </div>
                  <p className="text-sm text-purple-100/80">
                    Develop a comprehensive understanding of your project's structure and dependencies.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-600/10 to-orange-800/10 border border-orange-500/20 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-400">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14,2 14,8 20,8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10,9 9,9 8,9"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-orange-400">Multi-step Planning</h3>
                  </div>
                  <p className="text-sm text-orange-100/80">
                    Break down complex tasks into executable steps and handle them sequentially.
                  </p>
                </div>
              </div>

              <h2>Workflow of Agents</h2>
              
              <div className="bg-gray-900/50 rounded-xl p-8 mb-8 border border-gray-700">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-400 mb-2">Requirement Analysis</h3>
                      <p className="text-muted-foreground">
                        Gain a deep understanding of the goals and the context of the codebase, clarifying key requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-400 mb-2">Code Research</h3>
                      <p className="text-muted-foreground">
                        Search the codebase, documentation, and online resources to locate relevant files and analyze existing implementation logic.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-400 mb-2">Solution Design</h3>
                      <p className="text-muted-foreground">
                        Break down the steps based on the analysis results and dynamically optimize the modification planning.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-orange-400 mb-2">Implementation of Changes</h3>
                      <p className="text-muted-foreground mb-3">
                        Execute necessary code changes throughout the codebase as planned, which may involve:
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                          Recommendations for new dependency libraries
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                          Terminal commands to be executed
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                          Guidance for manual operation outside of the TRAE IDE client
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-teal-400 mb-2">Delivery and Acceptance</h3>
                      <p className="text-muted-foreground">
                        Transfer control to you after validation is complete and summarize all modifications made.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2>Built-in Agents</h2>
              <p>TRAE IDE provides the following built-in agents:</p>

              <div className="space-y-6 not-prose mb-8">
                <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 border border-blue-500/30 rounded-xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-blue-200 mb-3">Builder</h3>
                      <p className="text-blue-100/80 leading-relaxed">
                        Builder can help you develop a complete project from scratch. Based on your requests, Builder utilizes various tools when responding. These tools include those for analyzing code files, editing code files, running commands, and more, making the responses more precise and effective.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 border border-purple-500/30 rounded-xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        <path d="M8 12h8"/>
                        <path d="M12 8v8"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-purple-200 mb-3">Builder with MCP</h3>
                      <p className="text-purple-100/80 leading-relaxed">
                        On the basis of Builder, all MCP servers you set up will be automatically added to Builder with MCP and this is not editable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-900/30 to-cyan-900/30 border border-teal-500/30 rounded-xl p-8 my-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-teal-400">
                      <path d="M9 12l2 2 4-4"/>
                      <circle cx="12" cy="12" r="9"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-teal-200 mb-3 mt-0 font-semibold">Getting Started with Agents</h4>
                    <p className="text-teal-100/80 mb-0 leading-relaxed">
                      To make the most of TRAE's AI agents, start by clearly defining your development task or goal. 
                      The agents work best when provided with specific requirements and context about your project. 
                      They can handle everything from creating new features to refactoring existing code and setting up project dependencies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 not-prose">
                <h4 className="font-semibold mb-3">Related Topics</h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/docs/what-is-trae-ide" className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-center transition-colors">
                    What is TRAE?
                  </Link>
                  <Link href="/docs/installation" className="border border-gray-600 hover:border-primary text-white px-4 py-2 rounded-md text-center transition-colors">
                    Installation Guide
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