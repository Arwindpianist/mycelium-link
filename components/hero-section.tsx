"use client"

import { Button } from "@/components/ui/button"
import { NetworkAnimation } from "@/components/network-animation"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NetworkAnimation opacity={0.3} variant="mixed" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            MyceliumLink — The{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Decentralized Data Layer
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Redefining the Future of Data Infrastructure
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground/90 max-w-3xl mx-auto text-pretty leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            The internet runs on data, but the infrastructure behind it is aging fast. MyceliumLink is a revolutionary
            blockchain-inspired data network that distributes, verifies, and protects data across interconnected nodes
            around the world.
          </motion.p>

          <motion.blockquote
            className="text-lg md:text-xl text-primary/90 italic max-w-2xl mx-auto border-l-4 border-primary pl-6 py-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            "Imagine a living network where data flows like mycelium through soil — organic, resilient, and
            unstoppable."
          </motion.blockquote>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={scrollToForm}
              >
                Join the Revolution
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10 bg-transparent"
              >
                Download Pitch Deck
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  )
}
