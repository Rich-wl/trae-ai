import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Installation Guide - TRAE Documentation | AI Programming Assistant',
  description: 'Step-by-step installation instructions for TRAE AI programming assistant on Windows, macOS, and Linux systems.',
  keywords: 'TRAE,installation,download,setup,windows,macos,linux,install guide',
}

const sidebarItems = [
  {
    category: "Get Started",
    items: [
      { title: "What is Trae IDE?", href: "/docs/what-is-trae-ide" },
      { title: "Installation Guide", href: "/docs/installation", active: true },
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

export default function InstallationPage() {
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
              <span className="text-white">Installation Guide</span>
            </nav>

            <article className="prose prose-invert prose-lg max-w-none">
              <h1>Installation Guide</h1>
              
              <p className="lead">
                This article introduces how to set up Trae, including installing Trae on your PC, completing required settings, and finally developing your projects with Trae.
              </p>

              <h2>Step 1: Install and launch Trae</h2>
              <ol>
                <li>Go to <Link href="https://trae.ai" className="text-primary hover:underline">Trae's website</Link> and install Trae on your PC.</li>
                <li>Click Trae's icon to launch it.
                  <ul>
                    <li>The following screen appears at Trae's first launch.</li>
                  </ul>
                </li>
                <li>Click the <strong>Get Started</strong> button.
                  <ul>
                    <li>Trae's setup begins.</li>
                  </ul>
                </li>
              </ol>

              <h2>Step 2: Select a theme and language</h2>
              <ol>
                <li>Select a theme from <strong>Dark</strong>, <strong>Light</strong>, and <strong>DeepBlue</strong>.</li>
                <li>Select a language from <strong>English</strong>, <strong>Chinese (Simplified)</strong>, or <strong>Japanese</strong>.</li>
              </ol>

              <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6 my-8">
                <h4 className="text-blue-200 mb-3 mt-0">Note</h4>
                <p className="text-blue-100 mb-0">
                  You can change the theme and language at any desired time in the Settings center if needed.
                </p>
              </div>

              <ol start="3">
                <li>Click the <strong>Continue</strong> button.</li>
              </ol>

              <h2>Step 3: Import configurations from VS Code or Cursor</h2>
              <p>
                If you have already set up VS Code and/or Cursor on your PC, you can click <strong>Import from VSCode</strong> or <strong>Import from Cursor</strong>, and the system will import all extensions, settings, and keybindings configuration from these two IDEs into Trae, enabling you to quickly switch from other IDEs to Trae for development.
              </p>

              <h2>Step 4: Install Trae's commands</h2>
              <p>
                After adding Trae-related commands, you can perform corresponding tasks in Trae more quickly using relevant commands in the terminal. For example:
              </p>
              <ul>
                <li>Using <code>trae</code> to quickly launch Trae;</li>
                <li>Using <code>trae my-react-app</code> to open a project in Trae.</li>
              </ul>
              <p>
                Click the <strong>Install 'trae' command</strong> button and complete authorization.
              </p>

              <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6 my-8">
                <h4 className="text-blue-200 mb-3 mt-0">Note</h4>
                <p className="text-blue-100 mb-0">
                  If the Trae-related commands are not installed here, you can later use the shortcut (macOS: Command + Shift + P; Windows: Ctrl + Shift + P) in the IDE to open the command palette, and then use the command <code>install 'trae' command in PATH</code> to install them.
                </p>
              </div>

              <h2>Step 5: Log in to Trae</h2>
              <p>
                You need to log in to Trae to use the AI assistant. You can log in to Trae with your Google account, your GitHub account, or your email registered with Trae. If you do not have any account, create one for login.
              </p>
              <p>
                Click the <strong>Log in</strong> button and log in to Trae with your preferred method.
              </p>

              <div className="bg-gray-900 rounded-lg p-6 not-prose">
                <h4 className="font-semibold mb-3">Next Steps</h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/docs/ai-code-generation" className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-center transition-colors">
                    Explore AI Features
                  </Link>
                  <Link href="/" className="border border-gray-600 hover:border-primary text-white px-4 py-2 rounded-md text-center transition-colors">
                    Download TRAE
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