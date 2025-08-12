import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy for TraeHistory</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              This Privacy Policy describes how TraeHistory ("we," "us," or "our") collects, uses, and discloses your information when you use our website and services (the "Service"). By using the Service, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We collect several types of information from and about users of our Service, including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4">
              <li>
                <strong>Personal Information:</strong> Information that can be used to identify you, such as your name, email address, and any other information you provide when you create an account or contact us.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you access and use the Service, such as your IP address, browser type, operating system, referral URLs, pages viewed, and the dates and times of your visits.
              </li>
              <li>
                <strong>Device Information:</strong> Information about the device you use to access the Service, such as hardware model, operating system version, unique device identifiers, and mobile network information.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use the information we collect for various purposes, including to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4">
              <li>Provide, operate, and maintain our Service.</li>
              <li>Improve, personalize, and expand our Service.</li>
              <li>Understand and analyze how you use our Service.</li>
              <li>Develop new products, services, features, and functionality.</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the Service, and for marketing and promotional purposes.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Disclosure of Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may share your information with third parties in the following situations:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed ml-4">
              <li>
                <strong>With Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work.
              </li>
              <li>
                <strong>For Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at treahistory@traehistory.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
