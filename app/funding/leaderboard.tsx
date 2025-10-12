"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Trophy, Medal, Award, Star, Users } from "lucide-react"

interface Contributor {
  name: string
  amount: number
  isAnonymous: boolean
  date: string
}

interface FundingData {
  contributors: Contributor[]
}

export function Leaderboard() {
  const [fundingData, setFundingData] = useState<FundingData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFundingData = async () => {
      try {
        const response = await fetch('/api/funding-data')
        const data = await response.json()
        setFundingData(data)
      } catch (error) {
        console.error('Failed to fetch funding data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchFundingData()
  }, [])

  const contributors = fundingData?.contributors || []
  const totalContributors = contributors.length
  const totalAmount = contributors.reduce((sum, contributor) => sum + contributor.amount, 0)

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Trophy className="w-5 h-5 text-yellow-500" />
      case 1:
        return <Medal className="w-5 h-5 text-gray-400" />
      case 2:
        return <Award className="w-5 h-5 text-amber-600" />
      default:
        return <Star className="w-4 h-4 text-muted-foreground" />
    }
  }

  const getRankColor = (index: number) => {
    switch (index) {
      case 0:
        return "bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border-yellow-500/20"
      case 1:
        return "bg-gradient-to-r from-gray-400/10 to-gray-500/10 border-gray-400/20"
      case 2:
        return "bg-gradient-to-r from-amber-600/10 to-amber-700/10 border-amber-600/20"
      default:
        return "bg-card/50 border-border"
    }
  }

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
        {/* Loading Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="text-center p-4 bg-card/30 rounded-lg border border-border animate-pulse">
            <div className="h-6 bg-muted rounded mb-2" />
            <div className="h-4 bg-muted rounded w-20 mx-auto" />
          </div>
          <div className="text-center p-4 bg-card/30 rounded-lg border border-border animate-pulse">
            <div className="h-6 bg-muted rounded mb-2" />
            <div className="h-4 bg-muted rounded w-20 mx-auto" />
          </div>
        </div>

        {/* Loading Contributors */}
        <div className="space-y-3">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border animate-pulse">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-muted rounded" />
                <div className="w-32 h-4 bg-muted rounded" />
              </div>
              <div className="w-20 h-4 bg-muted rounded" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (contributors.length === 0) {
    return (
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="text-center p-4 bg-card/30 rounded-lg border border-border">
            <div className="text-2xl font-bold text-primary">0</div>
            <div className="text-sm text-muted-foreground">Contributors</div>
          </div>
          <div className="text-center p-4 bg-card/30 rounded-lg border border-border">
            <div className="text-2xl font-bold text-secondary">RM 0</div>
            <div className="text-sm text-muted-foreground">Total Raised</div>
          </div>
        </div>

        {/* Empty State */}
        <div className="text-center py-12">
          <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h4 className="text-xl font-semibold mb-2">Be the First Contributor!</h4>
          <p className="text-muted-foreground">
            Your contribution will help kickstart the MyceliumLink decentralized data infrastructure.
          </p>
        </div>

        {/* Call to Action */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
          <h4 className="font-semibold text-primary mb-2">Join the Revolution</h4>
          <p className="text-sm text-muted-foreground">
            Be the first to support MyceliumLink's vision of decentralized data infrastructure.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="text-center p-4 bg-card/30 rounded-lg border border-border">
          <div className="text-2xl font-bold text-primary">{totalContributors}</div>
          <div className="text-sm text-muted-foreground">Contributors</div>
        </div>
        <div className="text-center p-4 bg-card/30 rounded-lg border border-border">
          <div className="text-2xl font-bold text-secondary">{formatCurrency(totalAmount)}</div>
          <div className="text-sm text-muted-foreground">Total Raised</div>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="space-y-3">
        {contributors.map((contributor, index) => (
          <motion.div
            key={`${contributor.name}-${contributor.date}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${getRankColor(index)}`}
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {getRankIcon(index)}
                <span className="font-semibold text-sm text-muted-foreground">
                  #{index + 1}
                </span>
              </div>
              
              <div>
                <div className="font-medium text-foreground">
                  {contributor.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {new Date(contributor.date).toLocaleDateString('en-MY', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="font-bold text-lg text-foreground">
                {formatCurrency(contributor.amount)}
              </div>
              <div className="text-xs text-muted-foreground">
                {((contributor.amount / 100000) * 100).toFixed(1)}% of goal
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Thank you message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center pt-6 border-t border-border"
      >
        <h4 className="font-semibold text-lg mb-2">Thank You for Your Support! 🙏</h4>
        <p className="text-muted-foreground">
          Every contribution brings us closer to building the decentralized data infrastructure of the future.
        </p>
      </motion.div>

      {/* Recent activity note */}
      {contributors.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-center"
        >
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-primary">Latest Contribution:</span>{" "}
            {contributors[0].name} contributed {formatCurrency(contributors[0].amount)} on{" "}
            {new Date(contributors[0].date).toLocaleDateString('en-MY')}
          </p>
        </motion.div>
      )}
    </div>
  )
}