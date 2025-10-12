"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NetworkAnimation } from "@/components/network-animation"
import { motion } from "framer-motion"

export function MonetizationSection() {
  const channels = [
    {
      title: "Node Staking Fees",
      description: "Datacenters stake to participate in the network, increasing accountability.",
    },
    {
      title: "Data Access Credits",
      description: "Usage-based model for storing and retrieving data.",
    },
    {
      title: "API & SDK Access",
      description: "Paid integration for enterprises and developers.",
    },
    {
      title: "Verification-as-a-Service",
      description: "Blockchain audit trails for compliance and forensics.",
    },
    {
      title: "Green Cloud Reports",
      description: "Sell verified sustainability and carbon efficiency data.",
    },
  ]

  const [nodes, setNodes] = useState(0)
  const [revenue, setRevenue] = useState(0)
  const [margin, setMargin] = useState(0)

  useEffect(() => {
    const nodeInterval = setInterval(() => {
      setNodes((prev) => (prev < 500 ? prev + 10 : 500))
    }, 50)

    const revenueInterval = setInterval(() => {
      setRevenue((prev) => (prev < 3.2 ? prev + 0.1 : 3.2))
    }, 50)

    const marginInterval = setInterval(() => {
      setMargin((prev) => (prev < 40 ? prev + 1 : 40))
    }, 50)

    return () => {
      clearInterval(nodeInterval)
      clearInterval(revenueInterval)
      clearInterval(marginInterval)
    }
  }, [])

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <NetworkAnimation opacity={0.15} variant="primary" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="space-y-12">
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Monetization Model</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              MyceliumLink is designed for sustainable, scalable revenue generation.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {channels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="h-full hover:border-primary/50 transition-all bg-card/90 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <CardTitle className="text-lg">{channel.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{channel.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-2xl p-8 md:p-12 space-y-8">
            <h3 className="text-3xl font-bold text-center">Forecast Metrics (Post-Year 2)</h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-2">
                <div className="text-5xl font-bold text-primary">{nodes}+</div>
                <div className="text-muted-foreground">Node Operators Across ASEAN</div>
              </div>

              <div className="text-center space-y-2">
                <div className="text-5xl font-bold text-accent">RM {revenue.toFixed(1)}M</div>
                <div className="text-muted-foreground">Recurring Annual Revenue</div>
              </div>

              <div className="text-center space-y-2">
                <div className="text-5xl font-bold text-primary">{margin}%</div>
                <div className="text-muted-foreground">Operating Margin</div>
              </div>
            </div>

            <p className="text-center text-muted-foreground font-semibold">
              Break-even point: 18 months after production rollout
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
