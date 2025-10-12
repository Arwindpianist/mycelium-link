"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { X, AlertTriangle } from "lucide-react"
import { NetworkAnimation } from "@/components/network-animation"

export function ProblemSection() {
  const [selectedProblem, setSelectedProblem] = useState<number | null>(null)

  const problems = [
    {
      title: "Centralized Power",
      description:
        "Over 70% of the world's cloud data runs on three companies — AWS, Google Cloud, and Microsoft Azure. This creates single points of failure, monopolistic pricing, and an increasing lack of transparency.",
      details: {
        impact: "Single points of failure affect millions of businesses globally",
        statistics: [
          "AWS controls 32% of global cloud market",
          "Top 3 providers control 65% of enterprise workloads",
          "Average 99.9% SLA still means 8.7 hours downtime/year",
        ],
        consequences:
          "When AWS goes down, major portions of the internet become inaccessible. This centralization creates systemic risk and gives providers enormous pricing power.",
      },
    },
    {
      title: "Underutilized Capacity",
      description:
        "Across the world, universities, private datacenters, and enterprise server rooms sit underutilized, consuming electricity but contributing little to the cloud economy. Billions in idle compute and storage capacity remain disconnected.",
      details: {
        impact: "Estimated $100B+ in wasted infrastructure capacity globally",
        statistics: [
          "Average datacenter utilization: 12-18%",
          "University datacenters: 60-70% idle during off-peak",
          "Enterprise servers: 85% of capacity unused",
        ],
        consequences:
          "Massive energy waste and missed revenue opportunities. Existing infrastructure could serve global demand if properly networked.",
      },
    },
    {
      title: "Data Sovereignty & Compliance",
      description:
        "With new regulations like PDPA (Malaysia) and GDPR (EU), organizations are forced to store data within national borders. This has made cross-border data sharing more complex — and expensive.",
      details: {
        impact: "Compliance costs increased 300% since 2018",
        statistics: [
          "127 countries now have data localization laws",
          "GDPR fines exceeded €2.9B in 2023",
          "Cross-border data transfer costs up 400%",
        ],
        consequences:
          "Companies must maintain separate infrastructure in each region, multiplying costs and complexity while limiting innovation.",
      },
    },
    {
      title: "Rising Costs",
      description:
        "Traditional datacenters rely on massive CapEx investment. As storage and processing needs multiply, costs rise linearly, while efficiency gains lag. Enterprises are locked into multi-year vendor contracts.",
      details: {
        impact: "Cloud costs growing 25-30% annually for most enterprises",
        statistics: [
          "Average enterprise cloud bill: $2.4M/year",
          "70% of companies exceed cloud budgets",
          "Data egress fees can reach $0.12/GB",
        ],
        consequences:
          "Vendor lock-in prevents migration. Hidden fees and complex pricing make cost prediction impossible. SMEs priced out of cloud services.",
      },
    },
    {
      title: "Trust Without Verification",
      description:
        "Most cloud security today relies on trusting providers — not cryptographic verification. Enterprises are asked to believe that their data is safe, but can't independently verify integrity or tampering.",
      details: {
        impact: "Data breaches cost average $4.45M per incident",
        statistics: [
          "83% of organizations experienced cloud data breach",
          "60% can't verify data integrity independently",
          "Average breach detection time: 277 days",
        ],
        consequences:
          "No cryptographic proof of data integrity. Insider threats and provider breaches go undetected. Compliance audits rely on provider attestations.",
      },
    },
  ]

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <NetworkAnimation opacity={0.15} variant="secondary" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="space-y-12">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-balance text-center">
              Why the Current Cloud Model is <span className="text-destructive">Broken</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty text-center max-w-3xl mx-auto leading-relaxed">
              Despite decades of innovation, the global data infrastructure faces critical bottlenecks that threaten
              scalability, security, and sovereignty.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-card/90 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3 hover:border-destructive/50 transition-all cursor-pointer hover:shadow-xl hover:shadow-destructive/10"
                onClick={() => setSelectedProblem(index)}
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-card-foreground">{problem.title}</h3>
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
                <p className="text-xs text-primary hover:text-primary/80 transition-colors">Click for details →</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
              The cloud worked when data was simple and centralized. But in a multi-cloud, multi-region, AI-driven world
              — it's time for something new.
            </p>
          </motion.div>
        </div>
      </div>

      {selectedProblem !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProblem(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-card border-2 border-destructive/50 rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-destructive" />
                <h3 className="text-3xl font-bold text-card-foreground">{problems[selectedProblem].title}</h3>
              </div>
              <button
                onClick={() => setSelectedProblem(null)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">Overview</h4>
                <p className="text-base leading-relaxed">{problems[selectedProblem].description}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-destructive uppercase tracking-wide mb-2">Impact</h4>
                <p className="text-base leading-relaxed">{problems[selectedProblem].details.impact}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">Key Statistics</h4>
                <ul className="space-y-2">
                  {problems[selectedProblem].details.statistics.map((stat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm">{stat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Consequences
                </h4>
                <p className="text-base leading-relaxed">{problems[selectedProblem].details.consequences}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
