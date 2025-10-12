import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy - MyceliumLink",
  description: "Privacy Policy for MyceliumLink - operated by Arwindpianist Multimedia & Consulting (JR0170970-M). Compliant with Malaysia's PDPA and international privacy standards.",
}

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12 md:py-20">
        <div className="prose prose-lg max-w-none">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Privacy Policy
            </h1>
            <div className="text-muted-foreground space-y-2">
              <p><strong>Effective Date:</strong> 10 October 2025</p>
              <p><strong>Last Updated:</strong> 10 October 2025</p>
            </div>
          </div>

          {/* Content */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12 space-y-8">
            
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to <strong>MyceliumLink</strong>, a project operated by <strong>Arwindpianist Multimedia & Consulting (JR0170970-M)</strong> ("we," "our," or "us").
                This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website, interact with our services, or communicate with us.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                By using <strong>myceliumlink.com</strong>, you agree to the terms of this Privacy Policy. If you do not agree, please discontinue use of our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect limited personal and non-personal data to improve user experience and maintain transparency.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">a. Information You Provide</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li><strong>Contact details</strong> (e.g., name, email, phone number) when you subscribe, donate, or express interest via forms.</li>
                    <li><strong>Business or investment details</strong>, if you voluntarily share them for collaboration or partnership purposes.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">b. Automatically Collected Data</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li><strong>Cookies and analytics</strong> data (e.g., IP address, browser type, time spent on pages).</li>
                    <li><strong>Device and usage data</strong> collected through tools such as Google Analytics, Vercel Analytics, or similar services.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use your data to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Facilitate communication with investors, collaborators, and partners.</li>
                <li>Analyze engagement and optimize website performance.</li>
                <li>Send project updates, newsletters, or announcements (only with your consent).</li>
                <li>Ensure compliance with applicable laws and maintain security.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                We do <strong>not</strong> sell or rent your information to any third party.
              </p>
            </section>

            {/* Data Storage and Retention */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">4. Data Storage and Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information is securely stored using industry-standard encryption and managed on trusted infrastructure (e.g., Vercel, Cloudflare, and related services).
                We retain data only as long as necessary to fulfill the purposes outlined or to comply with legal obligations.
              </p>
            </section>

            {/* Cookies and Tracking */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">5. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website uses cookies to improve functionality and user experience. You may disable cookies in your browser settings, but some features of the site may not function properly.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">6. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We may use third-party tools such as:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li><strong>Email services</strong> (e.g., Zoho Mail, ProtonMail, or similar) for communications.</li>
                <li><strong>Analytics</strong> (e.g., Google Analytics, Plausible, or Vercel Insights).</li>
                <li><strong>Hosting & CDN</strong> (e.g., Vercel, Cloudflare).</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                These services have their own privacy practices, which we recommend reviewing.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">7. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your jurisdiction (e.g., Malaysia's PDPA or EU's GDPR), you may have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Access, correct, or delete your personal information.</li>
                <li>Withdraw consent to processing.</li>
                <li>Request data portability.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Requests can be submitted to <a href="mailto:privacy@myceliumlink.com" className="text-primary hover:underline">privacy@myceliumlink.com</a>.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">8. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement physical, administrative, and technical safeguards to protect your data from unauthorized access, loss, or misuse.
                However, no system is completely secure; use of the website is at your own risk.
              </p>
            </section>

            {/* Links to Other Sites */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">9. Links to Other Sites</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those external sites.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">10. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed toward individuals under 18 years old. We do not knowingly collect personal data from minors.
              </p>
            </section>

            {/* Updates to Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">11. Updates to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy periodically. The "Last Updated" date will reflect the latest version.
                Material changes will be communicated via our website or by email.
              </p>
            </section>

            {/* Contact Us */}
            <section className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">12. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions, concerns, or data-related requests, please contact:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Arwindpianist Multimedia & Consulting</strong></p>
                <p>Business Registration No: <strong>JR0170970-M</strong></p>
                <p>Email: <a href="mailto:hello@myceliumlink.com" className="text-primary hover:underline">hello@myceliumlink.com</a></p>
                <p>Website: <a href="https://myceliumlink.com" className="text-primary hover:underline">https://myceliumlink.com</a></p>
              </div>
            </section>

          </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
