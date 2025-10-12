"use client"

import { Shield, Network, CheckCircle2, Coins, Info } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { NetworkAnimation } from "@/components/network-animation"

export function SolutionSection() {
  const [hoveredPrinciple, setHoveredPrinciple] = useState<number | null>(null)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  const principles = [
    {
      icon: Network,
      title: "Decentralized Ownership",
      description: "No single provider controls your data.",
      details:
        "Data is distributed across multiple independent nodes. No single entity can access, control, or censor your information. True data sovereignty through cryptographic ownership.",
    },
    {
      icon: Shield,
      title: "Encrypted Shards",
      description: "Every file is split, encrypted, and distributed across trusted peers.",
      details:
        "Files are fragmented into encrypted shards using AES-256. Each shard is meaningless alone. Only authorized users with the correct keys can reassemble and decrypt the complete file.",
    },
    {
      icon: CheckCircle2,
      title: "Consensus Validation",
      description: "Blockchain-like ledger ensures integrity and traceability.",
      details:
        "Every data operation is recorded on an immutable ledger. Nodes validate shard integrity through cryptographic proofs. Tampering is mathematically impossible without detection.",
    },
    {
      icon: Coins,
      title: "Incentivized Uptime",
      description: "Datacenters and individuals earn rewards for reliability.",
      details:
        "Nodes earn tokens based on uptime, bandwidth, and trust scores. Economic incentives ensure network reliability. Poor performers are automatically deprioritized.",
    },
  ]

  const steps = [
    {
      number: "1",
      title: "Data Fragmentation",
      description: "When a file enters the network, it's split into multiple fragments (or shards).",
      details:
        "Files are split using Reed-Solomon erasure coding, allowing reconstruction even if some shards are lost. Optimal shard size is calculated based on file type and network conditions.",
    },
    {
      number: "2",
      title: "Encryption",
      description: "Each shard is individually encrypted using AES-256 and assigned ownership keys.",
      details:
        "Military-grade encryption ensures each shard is unreadable without keys. Key management uses hierarchical deterministic wallets for secure, recoverable access control.",
    },
    {
      number: "3",
      title: "Distribution",
      description:
        "Encrypted shards are distributed across multiple nodes based on performance, trust score, and location.",
      details:
        "Smart routing algorithm considers latency, geographic diversity, compliance requirements, and node reputation. Redundancy ensures availability even during node failures.",
    },
    {
      number: "4",
      title: "Ledger Registration",
      description:
        "A blockchain-like ledger records metadata about the data's structure and integrity (but not the data itself).",
      details:
        "Immutable ledger stores shard locations, checksums, and access logs. Zero-knowledge proofs enable verification without revealing data. Full audit trail for compliance.",
    },
    {
      number: "5",
      title: "Retrieval",
      description: "When requested, shards are verified, reassembled, and decrypted securely by the authorized owner.",
      details:
        "Parallel retrieval from multiple nodes ensures speed. Cryptographic verification prevents tampered data. Automatic failover if nodes are unavailable. Sub-second access times.",
    },
  ]

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <NetworkAnimation opacity={0.2} variant="primary" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="space-y-16">
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              The{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                MyceliumLink
              </span>{" "}
              Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              MyceliumLink introduces a distributed data layer where information is sharded, encrypted, and verified
              across an interconnected network of nodes - similar to how blockchain ensures trust, but optimized for
              data instead of finance.
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.h3
              className="text-3xl font-bold text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              How It Works
            </motion.h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="relative bg-card/90 backdrop-blur-sm border border-border rounded-xl p-6 space-y-3 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10"
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <motion.div
                    className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {step.number}
                  </motion.div>
                  <h4 className="text-lg font-semibold text-card-foreground">{step.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>

                  {hoveredStep === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute inset-0 bg-card/95 backdrop-blur-sm border-2 border-primary rounded-xl p-6 z-10"
                    >
                      <div className="flex items-start gap-2 mb-3">
                        <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <h5 className="font-semibold text-primary">Technical Details</h5>
                      </div>
                      <p className="text-sm leading-relaxed">{step.details}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
            <motion.p
              className="text-center text-muted-foreground italic max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              This approach guarantees that no single node ever holds complete, readable data - ensuring total privacy,
              redundancy, and trust.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.03 }}
                className="relative group bg-card/90 backdrop-blur-sm border border-border rounded-xl p-8 space-y-4 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all overflow-hidden"
                onMouseEnter={() => setHoveredPrinciple(index)}
                onMouseLeave={() => setHoveredPrinciple(null)}
              >
                <motion.div
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <principle.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-card-foreground">{principle.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{principle.description}</p>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: hoveredPrinciple === index ? "auto" : 0,
                    opacity: hoveredPrinciple === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-primary/20">
                    <p className="text-sm text-primary/90 leading-relaxed">{principle.details}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground italic">
              In short: <span className="text-primary font-semibold">torrents for speed</span>,{" "}
              <span className="text-primary font-semibold">blockchain for trust</span>,{" "}
              <span className="text-primary font-semibold">encryption for privacy</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
