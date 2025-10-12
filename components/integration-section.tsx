"use client"

import { DollarSign, Shield, Globe, Award, TrendingUp, Leaf } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { NetworkAnimation } from "@/components/network-animation"

export function IntegrationSection() {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null)

  const benefits = [
    {
      icon: DollarSign,
      title: "Monetize Idle Storage",
      description: "Rent out unused disk space and bandwidth securely.",
      details:
        "Turn your underutilized infrastructure into revenue. Earn $0.05-0.15 per GB/month based on performance and uptime. Average datacenter can generate $5,000-50,000/month from idle capacity.",
    },
    {
      icon: Shield,
      title: "Offer Proof-of-Integrity Services",
      description: "Provide auditable data verification for clients.",
      details:
        "Become a trusted validator in the network. Earn premium fees for cryptographic verification services. Build reputation as a compliance-ready storage provider.",
    },
    {
      icon: Globe,
      title: "Participate in Distributed Backups",
      description: "Sell redundancy storage to enterprises.",
      details:
        "Enterprise backup market worth $10B+ annually. Offer geo-redundant backup services with cryptographic guarantees. Automatic failover and disaster recovery capabilities.",
    },
    {
      icon: Leaf,
      title: "Gain ESG Advantage",
      description: "Report carbon-efficient data hosting with verifiable metrics.",
      details:
        "Track and prove energy efficiency. Qualify for green data initiatives. Attract ESG-conscious enterprise clients. Reduce carbon footprint through optimized utilization.",
    },
    {
      icon: Award,
      title: "Stay Compliant",
      description: "Maintain local data residency while participating globally.",
      details:
        "Meet GDPR, PDPA, and regional data sovereignty requirements. Serve local clients while earning from global network. Automated compliance reporting and audit trails.",
    },
    {
      icon: TrendingUp,
      title: "Earn Rewards",
      description: "Get data credits or staking tokens based on availability and trust.",
      details:
        "Token rewards for high uptime and performance. Stake tokens to increase trust score and earn higher fees. Governance rights in network decisions.",
    },
  ]

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <NetworkAnimation opacity={0.18} variant="secondary" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="space-y-12">
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Empowering Datacenters, Not Replacing Them</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              We're not trying to destroy the datacenter model — we're giving it a new purpose. Existing datacenters can
              join the MyceliumLink mesh and instantly unlock new revenue streams.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="relative bg-card/90 backdrop-blur-sm border border-border rounded-xl p-6 space-y-4 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10"
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                <motion.div
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <benefit.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>

                {hoveredBenefit === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-card/98 backdrop-blur-sm border-2 border-primary rounded-xl p-6 flex flex-col justify-center"
                  >
                    <p className="text-sm leading-relaxed text-primary/90">{benefit.details}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="max-w-3xl mx-auto text-center space-y-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-muted-foreground leading-relaxed">
              Each datacenter becomes a "node partner", validated by uptime, compliance, and reliability. Partners earn
              rewards based on availability, trust, and contribution.
            </p>
            <motion.blockquote
              className="text-2xl font-medium italic text-primary border-l-4 border-primary pl-6 py-4"
              whileHover={{ scale: 1.02, x: 10 }}
              transition={{ duration: 0.3 }}
            >
              "MyceliumLink doesn't compete with cloud providers — it connects them into one global data fabric."
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
