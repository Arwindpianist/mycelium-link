"use client"

import { NetworkAnimation } from "@/components/network-animation"
import { ProgressBar } from "./progress-bar"
import { Leaderboard } from "./leaderboard"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ExternalLink, Users, Zap } from "lucide-react"
import Image from "next/image"

export function FundingPageContent() {
  const stripePaymentLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || ""

  return (
    <div className="min-h-screen bg-background relative">
      <NetworkAnimation opacity={0.15} variant="mixed" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12 md:py-20 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Image
              src="/favicon.svg"
              alt="MyceliumLink"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Seed Round
            </h1>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Support the MyceliumLink Vision
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Join the decentralized data revolution. Help fund the MyceliumLink MVP and empower the next generation of sustainable data infrastructure that connects datacenters, enterprises, and individuals into one intelligent, secure, and autonomous data mesh.
          </p>

          {/* Goal Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-8">
            <Zap className="w-5 h-5 text-primary" />
            <span className="font-semibold text-primary">Goal: RM 100,000 (≈ USD 21,000)</span>
          </div>
        </motion.div>

        {/* Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-center mb-8">Funding Progress</h3>
            <ProgressBar />
          </div>
        </motion.div>

        {/* Leaderboard Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold">Top Contributors</h3>
            </div>
            <Leaderboard />
          </div>
        </motion.div>

        {/* What Your Contribution Supports */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-center mb-8">What Your Contribution Supports</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h4 className="font-semibold mb-2">MVP Development</h4>
                <p className="text-sm text-muted-foreground">
                  Build the core decentralized storage and blockchain integrity verification system
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="text-2xl">🌐</span>
                </div>
                <h4 className="font-semibold mb-2">Network Infrastructure</h4>
                <p className="text-sm text-muted-foreground">
                  Deploy initial nodes across Malaysia, Singapore, and India
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
                <h4 className="font-semibold mb-2">Research & Legal</h4>
                <p className="text-sm text-muted-foreground">
                  Technical whitepaper, legal structuring, and compliance framework
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-12">
            <h3 className="text-3xl font-bold mb-4">Ready to Join the Revolution?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Your contribution helps build the MyceliumLink decentralized data mesh and supports the future of sustainable, secure data infrastructure.
            </p>
            
            <Button
              size="lg"
              className="text-lg px-12 py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                if (stripePaymentLink) {
                  window.open(stripePaymentLink, '_blank')
                } else {
                  alert('Payment link not configured. Please contact hello@myceliumlink.com')
                }
              }}
            >
              Contribute via Stripe
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              Secure payment processing • Instant confirmation • Thank you for your support!
            </p>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-6 max-w-2xl mx-auto">
            <h4 className="font-semibold mb-2">Questions About Contributing?</h4>
            <p className="text-muted-foreground mb-4">
              Our team is here to help with any questions about the seed round or contribution process.
            </p>
            <a
              href="mailto:hello@myceliumlink.com"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              Contact us for more information
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
