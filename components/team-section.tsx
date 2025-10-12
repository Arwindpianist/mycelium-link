"use client"

import { User, Wrench, Compass } from "lucide-react"
import { NetworkAnimation } from "@/components/network-animation"
import { motion } from "framer-motion"

export function TeamSection() {
  const team = [
    {
      icon: User,
      role: "Founder & System Architect",
      name: "Arwin Kumar",
      description:
        "Experienced full-stack developer and infrastructure designer specializing in distributed systems and web APIs.",
    },
    {
      icon: Wrench,
      role: "Blockchain Engineer",
      name: "Contract",
      description: "Responsible for consensus mechanism and ledger optimization.",
    },
    {
      icon: Compass,
      role: "Advisory Network",
      name: "ASEAN & India Experts",
      description: "Legal, infrastructure, and data compliance experts from ASEAN and India.",
    },
  ]

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <NetworkAnimation opacity={0.15} variant="accent" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="space-y-12">
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              We're combining practical systems engineering with visionary decentralization to create the future of
              trust-based data.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-6 space-y-4 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <member.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{member.role}</div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">{member.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-8">
            <blockquote className="text-lg text-primary italic border-l-4 border-primary pl-6 py-2 inline-block">
              "We're building a data network that behaves like nature — self-healing, resilient, and organic."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
