"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface ProgressBarProps {
  totalRaised?: number
  goal?: number
}

interface FundingData {
  totalRaised: number
  goal: number
  campaignEnd: string
}

export function ProgressBar({ totalRaised, goal }: ProgressBarProps) {
  const [animatedRaised, setAnimatedRaised] = useState(0)
  const [fundingData, setFundingData] = useState<FundingData | null>(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchFundingData = async () => {
      try {
        const response = await fetch('/api/funding-data')
        const data = await response.json()
        setFundingData(data)
        setAnimatedRaised(data.totalRaised || 0)
      } catch (error) {
        console.error('Failed to fetch funding data:', error)
        // Fallback to props or default values
        setAnimatedRaised(totalRaised || 0)
      } finally {
        setLoading(false)
      }
    }

    fetchFundingData()
  }, [totalRaised])

  const finalRaised = fundingData?.totalRaised || totalRaised || 0
  const finalGoal = fundingData?.goal || goal || 100000
  const percentage = Math.min((finalRaised / finalGoal) * 100, 100)
  
  // Calculate days left
  const daysLeft = fundingData?.campaignEnd 
    ? Math.max(0, Math.ceil((new Date(fundingData.campaignEnd).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)))
    : 45

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setAnimatedRaised(finalRaised)
      }, 500)
      
      return () => clearTimeout(timer)
    }
  }, [finalRaised, loading])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-MY', {
      style: 'currency',
      currency: 'MYR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="w-full bg-muted rounded-full h-4 animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded mb-2" />
            <div className="h-4 bg-muted rounded w-16 mx-auto" />
          </div>
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded mb-2" />
            <div className="h-4 bg-muted rounded w-16 mx-auto" />
          </div>
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded mb-2" />
            <div className="h-4 bg-muted rounded w-16 mx-auto" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Progress Bar */}
      <div className="space-y-4">
        {/* Progress Bar Container */}
        <div className="relative">
          <div className="w-full bg-muted rounded-full h-6 overflow-hidden shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-primary/90 to-accent rounded-full relative"
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {/* Animated glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full"
                animate={{ 
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"
                animate={{ 
                  x: ['-100%', '100%']
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </div>
          
          {/* Progress percentage - positioned below the bar */}
          <motion.div
            className="flex justify-center mt-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-lg font-bold">
              {percentage.toFixed(1)}% Complete
            </div>
          </motion.div>
        </div>

        {/* Progress Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-lg text-muted-foreground">
            <span className="font-bold text-primary text-xl">
              {formatCurrency(animatedRaised)}
            </span>{" "}
            raised of{" "}
            <span className="font-bold text-foreground text-xl">
              {formatCurrency(finalGoal)}
            </span>{" "}
            goal
          </p>
        </motion.div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center p-6 bg-card/30 rounded-lg border border-border"
        >
          <div className="text-3xl font-bold text-primary mb-2">
            {formatCurrency(animatedRaised)}
          </div>
          <p className="text-sm text-muted-foreground">Total Raised</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center p-6 bg-card/30 rounded-lg border border-border"
        >
          <div className="text-3xl font-bold text-secondary mb-2">
            {formatCurrency(finalGoal - animatedRaised)}
          </div>
          <p className="text-sm text-muted-foreground">Remaining</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-center p-6 bg-card/30 rounded-lg border border-border"
        >
          <div className="text-3xl font-bold text-accent mb-2">
            {daysLeft}
          </div>
          <p className="text-sm text-muted-foreground">Days Left</p>
        </motion.div>
      </div>
    </div>
  )
}