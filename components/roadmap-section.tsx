"use client"

import { Circle, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { NetworkAnimation } from "@/components/network-animation"

export function RoadmapSection() {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null)

  const phases = [
    {
      phase: "Seed (Now)",
      duration: "6 months",
      goal: "RM100,000 (~USD 21,000) seed round to develop MVP, node simulator, and whitepaper.",
      status: "current",
      milestones: [
        "Complete technical whitepaper",
        "Build node simulator prototype",
        "Recruit founding team (3-5 members)",
        "Establish legal entity",
        "Initial investor outreach",
      ],
      deliverables: "Whitepaper, working prototype, founding team",
    },
    {
      phase: "MVP Launch",
      duration: "Month 6",
      goal: "3–5 connected datacenter nodes across Malaysia, Singapore, and India.",
      status: "upcoming",
      milestones: [
        "Deploy first 3 production nodes",
        "Implement basic sharding algorithm",
        "Launch developer API (alpha)",
        "Onboard 5 pilot customers",
        "Achieve 1TB data throughput",
      ],
      deliverables: "Working network, API access, pilot customers",
    },
    {
      phase: "Private Beta",
      duration: "Month 12",
      goal: "25 partner datacenters, 10TB data throughput, blockchain ledger testnet online.",
      status: "upcoming",
      milestones: [
        "Scale to 25 datacenter partners",
        "Launch consensus layer testnet",
        "Implement token economics",
        "Release SDK for developers",
        "Achieve 10TB daily throughput",
      ],
      deliverables: "Production-ready network, token system, developer tools",
    },
    {
      phase: "Public Launch",
      duration: "Year 2",
      goal: "ASEAN-wide node adoption, enterprise API release, and proof-of-storage rewards.",
      status: "upcoming",
      milestones: [
        "100+ nodes across ASEAN",
        "Enterprise SLA guarantees",
        "Token public sale",
        "S3-compatible API",
        "Compliance certifications (ISO 27001)",
      ],
      deliverables: "Public network, enterprise features, compliance",
    },
    {
      phase: "Expansion",
      duration: "Year 3",
      goal: "SDKs for developers, decentralized backup system, and multi-chain integration.",
      status: "upcoming",
      milestones: [
        "Global node network (500+ nodes)",
        "Multi-chain bridge integration",
        "AI-powered routing optimization",
        "Enterprise backup service",
        "DAO governance launch",
      ],
      deliverables: "Global network, advanced features, full decentralization",
    },
  ]

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <NetworkAnimation opacity={0.15} variant="mixed" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="space-y-12">
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Roadmap</h2>
            <p className="text-xl text-muted-foreground italic">
              Every node strengthens the network - like roots forming a living system.
            </p>
          </motion.div>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                className="relative flex gap-6 items-start group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  {phase.status === "current" ? (
                    <Circle className="w-6 h-6 text-primary fill-primary" />
                  ) : (
                    <Circle className="w-6 h-6 text-muted-foreground" />
                  )}
                </motion.div>

                {index < phases.length - 1 && (
                  <motion.div
                    className="absolute left-6 top-12 w-0.5 h-full bg-border"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    style={{ transformOrigin: "top" }}
                  />
                )}

                <motion.div
                  className="flex-1 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-6 group-hover:border-primary/50 transition-all cursor-pointer hover:shadow-lg hover:shadow-primary/10"
                  onClick={() => setExpandedPhase(expandedPhase === index ? null : index)}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h3 className="text-2xl font-semibold text-card-foreground">{phase.phase}</h3>
                    <span className="text-sm text-muted-foreground font-mono">{phase.duration}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-2">{phase.goal}</p>
                  <p className="text-xs text-primary/70">Click for detailed milestones →</p>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: expandedPhase === index ? "auto" : 0,
                      opacity: expandedPhase === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 pt-6 border-t border-border space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
                          Key Milestones
                        </h4>
                        <ul className="space-y-2">
                          {phase.milestones.map((milestone, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-start gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{milestone}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
                        <p className="text-sm">
                          <span className="font-semibold text-primary">Deliverables:</span> {phase.deliverables}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
