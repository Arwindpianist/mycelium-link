import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service - MyceliumLink",
  description: "Terms of Service for MyceliumLink - operated by Arwindpianist Multimedia & Consulting (JR0170970-M).",
}

export default function TermsOfService() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12 md:py-20">
          <div className="prose prose-lg max-w-none">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                Terms of Service
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
                  Welcome to <strong>MyceliumLink</strong>, operated by <strong>Arwindpianist Multimedia & Consulting (JR0170970-M)</strong> ("Company," "we," "our," or "us"). These Terms of Service ("Terms") govern your use of our website, services, and any related communications.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  By accessing or using <strong>myceliumlink.com</strong> or any of our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
                </p>
              </section>

              {/* Acceptance of Terms */}
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">2. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. These Terms constitute a legally binding agreement between you and the Company.
                </p>
              </section>

              {/* Description of Services */}
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">3. Description of Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  MyceliumLink is a decentralized data infrastructure platform that aims to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Connect datacenters, enterprises, and individuals into a distributed data network</li>
                  <li>Provide blockchain-based data integrity and verification</li>
                  <li>Enable secure, decentralized data storage and retrieval</li>
                  <li>Facilitate collaboration between stakeholders in the data economy</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Our services are currently in development. Information provided is for informational purposes and does not constitute investment advice.
                </p>
              </section>

              {/* User Responsibilities */}
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">4. User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">As a user of our services, you agree to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Provide accurate and truthful information when contacting us</li>
                  <li>Use our services in compliance with applicable laws and regulations</li>
                  <li>Respect intellectual property rights and not infringe on third-party rights</li>
                  <li>Not use our services for any unlawful, harmful, or fraudulent activities</li>
                  <li>Maintain the confidentiality of any sensitive information shared</li>
                </ul>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">5. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content, trademarks, logos, and intellectual property on this website are owned by <strong>Arwindpianist Multimedia & Consulting</strong> or our licensors. You may not reproduce, distribute, or create derivative works without our written permission.
                </p>
              </section>

              {/* Investment Disclaimer */}
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">6. Investment Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Information provided on this website is for informational purposes only and does not constitute financial, investment, or legal advice. Any investment decisions should be made after consulting with qualified professionals. Past performance does not guarantee future results.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, the Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount you paid us, if any.
                </p>
              </section>

              {/* Indemnification */}
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">8. Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify and hold harmless the Company, its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of our services or violation of these Terms.
                </p>
              </section>

              {/* Privacy */}
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">9. Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your privacy is important to us. Please review our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>, which explains how we collect, use, and protect your information.
                </p>
              </section>

              {/* Termination */}
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">10. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may terminate or suspend your access to our services at any time, with or without cause or notice. You may also stop using our services at any time.
                </p>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">11. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of Malaysia. Any disputes shall be subject to the exclusive jurisdiction of the Malaysian courts.
                </p>
              </section>

              {/* Changes to Terms */}
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">12. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes via our website or email. Continued use of our services after changes constitutes acceptance of the new Terms.
                </p>
              </section>

              {/* Contact Information */}
              <section className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">13. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about these Terms, please contact us:
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
