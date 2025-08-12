import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Supported Countries and Regions - TRAE Documentation | AI Programming Assistant',
  description: 'View the complete list of countries and regions where TRAE AI programming assistant is available for download and use.',
  keywords: 'TRAE,trae ai,trae idea,trae 2.0,trae solo,trae国际版,supported countries,regions,availability,international,global',
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
      { title: "Supported Countries and Regions", href: "/docs/supported-countries", active: true },
    ]
  }
]

export default function SupportedCountriesPage() {
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
              <span className="text-white">Supported Countries and Regions</span>
            </nav>

            <article className="prose prose-invert prose-lg max-w-none">
              <h1>Supported Countries and Regions</h1>
              
              <p className="lead">
                TRAE is currently available in the following countries and regions worldwide. Our global infrastructure ensures optimal performance and accessibility for users across different continents.
              </p>

              {/* Stats Overview */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 not-prose mb-12">
                <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-500/30 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">6</div>
                  <div className="text-sm text-blue-200">Continents</div>
                </div>
                <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 border border-green-500/30 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">200+</div>
                  <div className="text-sm text-green-200">Countries</div>
                </div>
                <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/30 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400">27</div>
                  <div className="text-sm text-purple-200">EU Countries</div>
                </div>
                <div className="bg-gradient-to-br from-orange-600/20 to-orange-800/20 border border-orange-500/30 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-400">Global</div>
                  <div className="text-sm text-orange-200">Coverage</div>
                </div>
              </div>

              {/* Asia Section */}
              <div className="bg-gray-900/50 rounded-xl p-8 mb-8 border border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">🌏</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-1">Asia</h2>
                    <p className="text-muted-foreground text-sm">42 countries and territories</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <h4 className="font-medium text-blue-400 mb-3">Southeast Asia</h4>
                      <ul className="space-y-1.5 text-sm">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                          Indonesia
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                          Singapore
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                          Malaysia
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                          Philippines
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                          Thailand
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                          Vietnam
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                          Myanmar
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                          Laos
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                          Cambodia
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                          Brunei
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                          Timor-Leste
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <h4 className="font-medium text-green-400 mb-3">East & South Asia</h4>
                      <ul className="space-y-1.5 text-sm">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                          India
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                          Japan
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                          Korea
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                          Bangladesh
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                          Sri Lanka
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                          Nepal
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                          Maldives
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                          Bhutan
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                          Pakistan
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                          Afghanistan
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                          Mongolia
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <h4 className="font-medium text-yellow-400 mb-3">Middle East & Central Asia</h4>
                      <ul className="space-y-1.5 text-sm">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                          Saudi Arabia
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                          United Arab Emirates
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                          Turkey
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                          Israel
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                          Kazakhstan
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                          Uzbekistan
                        </li>
                        <li className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
                          + 9 more countries
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Europe Section */}
              <div className="bg-gray-900/50 rounded-xl p-8 mb-8 border border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">🇪🇺</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-1">Europe</h2>
                    <p className="text-muted-foreground text-sm">53 countries and territories</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-500/20 rounded-lg p-6">
                    <h3 className="font-semibold text-blue-400 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      European Union (27 countries)
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>Germany</div><div>France</div>
                      <div>Italy</div><div>Spain</div>
                      <div>Netherlands</div><div>Belgium</div>
                      <div>Poland</div><div>Austria</div>
                      <div>Sweden</div><div>Denmark</div>
                      <div>Finland</div><div>Ireland</div>
                      <div>Portugal</div><div>Greece</div>
                      <div>Czech Republic</div><div>Hungary</div>
                      <div>Romania</div><div>Bulgaria</div>
                      <div>Croatia</div><div>Slovakia</div>
                      <div>Slovenia</div><div>Lithuania</div>
                      <div>Latvia</div><div>Estonia</div>
                      <div>Luxembourg</div><div>Malta</div>
                      <div className="col-span-2 text-center text-blue-400">Cyprus</div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-600/10 to-purple-800/10 border border-purple-500/20 rounded-lg p-6">
                    <h3 className="font-semibold text-purple-400 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Non-EU Europe (26 countries)
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>United Kingdom</div><div>Switzerland</div>
                      <div>Norway</div><div>Ukraine</div>
                      <div>Iceland</div><div>Serbia</div>
                      <div>Albania</div><div>Bosnia and Herzegovina</div>
                      <div>North Macedonia</div><div>Montenegro</div>
                      <div>Moldova</div><div>Georgia</div>
                      <div>Armenia</div><div>Azerbaijan</div>
                      <div>Monaco</div><div>Andorra</div>
                      <div>San Marino</div><div>Vatican City</div>
                      <div>Liechtenstein</div><div>Kosovo</div>
                      <div>Gibraltar</div><div>Isle of Man</div>
                      <div>Jersey</div><div>Guernsey</div>
                      <div className="col-span-2 text-center">+ 2 more territories</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Americas Section */}
              <div className="bg-gray-900/50 rounded-xl p-8 mb-8 border border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">🌎</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-1">Americas</h2>
                    <p className="text-muted-foreground text-sm">55 countries and territories</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-500/20 rounded-lg p-6">
                    <h3 className="font-semibold text-blue-400 mb-4">North America</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                        USA
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                        Mexico
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-600/10 to-green-800/10 border border-green-500/20 rounded-lg p-6">
                    <h3 className="font-semibold text-green-400 mb-4">South America</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                        Brazil
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                        Argentina
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                        Colombia
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                        Chile
                      </div>
                      <div className="text-xs text-muted-foreground mt-2">+ 9 more countries</div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-600/10 to-orange-800/10 border border-orange-500/20 rounded-lg p-6">
                    <h3 className="font-semibold text-orange-400 mb-4">Caribbean & Central America</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                        Costa Rica
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                        Panama
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                        Jamaica
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                        Bahamas
                      </div>
                      <div className="text-xs text-muted-foreground mt-2">+ 35 more territories</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Continents - Compact View */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Oceania */}
                <div className="bg-gradient-to-br from-teal-600/10 to-cyan-800/10 border border-teal-500/20 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">🏝️</span>
                    <div>
                      <h3 className="font-semibold text-teal-400">Oceania</h3>
                      <p className="text-xs text-muted-foreground">25 countries</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>Australia</div>
                    <div>New Zealand</div>
                    <div>Fiji</div>
                    <div>Samoa</div>
                    <div className="text-xs text-muted-foreground">+ 21 more</div>
                  </div>
                </div>

                {/* Africa */}
                <div className="bg-gradient-to-br from-yellow-600/10 to-orange-800/10 border border-yellow-500/20 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">🦁</span>
                    <div>
                      <h3 className="font-semibold text-yellow-400">Africa</h3>
                      <p className="text-xs text-muted-foreground">54 countries</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>South Africa</div>
                    <div>Nigeria</div>
                    <div>Kenya</div>
                    <div>Morocco</div>
                    <div className="text-xs text-muted-foreground">+ 50 more</div>
                  </div>
                </div>

                {/* Antarctica & Territories */}
                <div className="bg-gradient-to-br from-slate-600/10 to-slate-800/10 border border-slate-500/20 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">🐧</span>
                    <div>
                      <h3 className="font-semibold text-slate-400">Antarctica & Territories</h3>
                      <p className="text-xs text-muted-foreground">7 territories</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>Antarctica</div>
                    <div>British Indian Ocean Territory</div>
                    <div>French Southern Territories</div>
                    <div className="text-xs text-muted-foreground">+ 4 more</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-8 my-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                      <path d="M2 12h20"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-blue-200 mb-3 mt-0 font-semibold">Regional Availability Notice</h4>
                    <p className="text-blue-100/80 mb-0 leading-relaxed">
                      TRAE's availability and features may vary by region due to local regulations and infrastructure requirements. 
                      Some advanced features might be limited in certain territories. For the most up-to-date information about 
                      service availability and feature compatibility in your specific location, please visit our official website 
                      or contact our support team.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 not-prose">
                <h4 className="font-semibold mb-3">Need Help?</h4>
                <p className="text-muted-foreground mb-4">
                  If your country or region is not listed, please contact our support team for updates on availability.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-center transition-colors"
                  >
                    Download TRAE
                  </Link>
                  <Link 
                    href="/docs"
                    className="border border-gray-600 hover:border-primary text-white px-4 py-2 rounded-md text-center transition-colors"
                  >
                    Back to Docs
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