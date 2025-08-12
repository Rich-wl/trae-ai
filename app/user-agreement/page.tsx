import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function UserAgreementPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center">User Agreement for TraeHistory</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to TraeHistory! These Terms of Service ("Terms") govern your access to and use of the TraeHistory website and services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms and by our Privacy Policy. If you do not agree to these Terms, please do not use our Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Your Account</h2>
            <p className="text-muted-foreground leading-relaxed">
              You may need to create an account to access certain features of the Service. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify TraeHistory immediately of any unauthorized use of your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Use of Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to use the TraeHistory Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4">
              <li>In any way that violates any applicable national or international law or regulation.</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent.</li>
              <li>To impersonate or attempt to impersonate TraeHistory, a TraeHistory employee, another user, or any other person or entity.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Service and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by TraeHistory, its licensors, or other providers of such material and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post them and apply to all access to and use of the Service thereafter. Your continued use of the Service following the posting of revised Terms means that you accept and agree to the changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms, please contact us at treahistory@traehistory.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
