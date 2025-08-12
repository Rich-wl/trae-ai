import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We provide historical version downloads for various software applications. Our mission is to preserve software history and make older versions accessible to users who need them for compatibility, research, or personal preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Independent Service</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Please note that we are an independent service and are <strong>not affiliated with any official software vendors or developers</strong>. We do not represent, endorse, or have any official relationship with the original creators of the software we archive.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Purpose</h2>
              <div className="text-muted-foreground leading-relaxed text-lg space-y-4">
                <p>
                  Software evolves rapidly, and sometimes newer versions may not be compatible with specific systems, workflows, or user requirements. We understand the importance of having access to historical versions for:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Legacy system compatibility</li>
                  <li>Software development and testing</li>
                  <li>Academic research and education</li>
                  <li>Personal preference and familiarity</li>
                  <li>System stability requirements</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                All software provided through our service is made available "as-is" without any warranties. Users are responsible for ensuring they have the appropriate licenses and permissions to use any downloaded software. We recommend always using the latest official versions when possible for security and feature updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                If you have any questions, concerns, or requests, please feel free to reach out to us at{" "}
                <a href="mailto:treahistory@traehistory" className="text-primary hover:underline">
                  treahistory@traehistory
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}