"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { Code2, Database, Shield, Zap, Users, BarChart3 } from "lucide-react"
import { NetworkAnimation } from "@/components/network-animation"

export function TechnologySection() {
  const [selectedLayer, setSelectedLayer] = useState<number | null>(null)

  const layers = [
    {
      icon: Database,
      title: "Storage Layer",
      description: "Distributes data shards across multiple nodes",
      technology: "MinIO, IPFS hybrid",
      details: {
        purpose: "Handles physical storage and retrieval of encrypted data shards across the distributed network",
        technologies: [
          "MinIO for S3-compatible object storage",
          "IPFS for content-addressed storage",
          "Custom sharding algorithm",
        ],
        benefits: ["Redundancy through erasure coding", "Geographic distribution", "Automatic replication"],
        performance: "Sub-100ms shard retrieval, 99.999% availability",
      },
    },
    {
      icon: Shield,
      title: "Consensus Layer",
      description: "Validates shard integrity and node reliability",
      technology: "Proof-of-Storage + Proof-of-Integrity",
      details: {
        purpose:
          "Ensures data integrity and node trustworthiness through cryptographic proofs and consensus mechanisms",
        technologies: ["Custom Proof-of-Storage protocol", "Byzantine Fault Tolerance", "Merkle tree verification"],
        benefits: ["Tamper-proof data verification", "Automatic node reputation scoring", "Slashing for bad actors"],
        performance: "Block time: 5 seconds, 10,000+ TPS validation",
      },
    },
    {
      icon: Zap,
      title: "Compute Layer",
      description: "Handles encryption, validation, and routing",
      technology: "Rust, Go",
      details: {
        purpose: "Core processing engine for encryption, decryption, routing decisions, and data operations",
        technologies: [
          "Rust for performance-critical operations",
          "Go for network services",
          "WebAssembly for edge compute",
        ],
        benefits: ["Memory-safe operations", "High-performance encryption", "Parallel processing"],
        performance: "1GB/s encryption throughput, <10ms routing decisions",
      },
    },
    {
      icon: Code2,
      title: "API Layer",
      description: "Developer and enterprise connectivity",
      technology: "GraphQL, gRPC",
      details: {
        purpose: "Provides developer-friendly interfaces for integrating MyceliumLink into applications and services",
        technologies: ["GraphQL for flexible queries", "gRPC for high-performance RPC", "REST fallback API"],
        benefits: ["S3-compatible interface", "Real-time subscriptions", "Multi-language SDKs"],
        performance: "99.99% uptime SLA, <50ms API response time",
      },
    },
    {
      icon: Users,
      title: "Governance Layer",
      description: "Decentralized node voting & staking",
      technology: "DAO-compatible smart contracts",
      details: {
        purpose:
          "Enables decentralized decision-making for protocol upgrades, parameter changes, and dispute resolution",
        technologies: ["Smart contracts on EVM-compatible chain", "Token-weighted voting", "Timelock mechanisms"],
        benefits: ["Community-driven development", "Transparent governance", "Stake-based security"],
        performance: "7-day voting periods, 51% quorum requirement",
      },
    },
    {
      icon: BarChart3,
      title: "Monitoring & Metrics",
      description: "Node trust score & data flow analytics",
      technology: "Prometheus, Grafana",
      details: {
        purpose: "Real-time monitoring of network health, node performance, and data flow patterns",
        technologies: ["Prometheus for metrics collection", "Grafana for visualization", "Custom alerting system"],
        benefits: ["Real-time network visibility", "Predictive maintenance", "Performance optimization"],
        performance: "1-second metric granularity, 30-day retention",
      },
    },
  ]

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <NetworkAnimation opacity={0.18} variant="accent" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="space-y-12">
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-balance">The Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Each layer is modular, allowing MyceliumLink to integrate easily with existing datacenters and private
              clouds without requiring hardware overhaul.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {layers.map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card
                  className="cursor-pointer hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 h-full bg-card/90 backdrop-blur-sm"
                  onClick={() => setSelectedLayer(selectedLayer === index ? null : index)}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <motion.div
                        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <layer.icon className="w-5 h-5 text-primary" />
                      </motion.div>
                      <CardTitle className="text-xl">{layer.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <CardDescription className="text-base leading-relaxed">{layer.description}</CardDescription>
                    <div className="pt-2 border-t border-border">
                      <p className="text-sm font-mono text-primary">{layer.technology}</p>
                    </div>
                    <p className="text-xs text-primary/70">Click for technical details →</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedLayer !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedLayer(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-card border-2 border-primary/50 rounded-xl p-8 max-w-3xl w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                    {(() => {
                      const Icon = layers[selectedLayer].icon
                      return <Icon className="w-7 h-7 text-primary" />
                    })()}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">{layers[selectedLayer].title}</h3>
                    <p className="text-sm font-mono text-primary">{layers[selectedLayer].technology}</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Purpose</h4>
                    <p className="leading-relaxed">{layers[selectedLayer].details.purpose}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
                      Core Technologies
                    </h4>
                    <ul className="space-y-2">
                      {layers[selectedLayer].details.technologies.map((tech, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">▸</span>
                          <span className="text-sm">{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {layers[selectedLayer].details.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-accent mt-1">✓</span>
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                      Performance Metrics
                    </h4>
                    <p className="text-sm font-mono">{layers[selectedLayer].details.performance}</p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedLayer(null)}
                  className="w-full py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
