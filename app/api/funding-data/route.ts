import { NextResponse } from 'next/server'

// This API endpoint provides real-time funding data
// Data will be updated by Stripe webhooks
export async function GET() {
  try {
    // Start with empty data - will be populated by actual contributions
    const fundingData = {
      totalRaised: 0, // Will be updated by webhooks
      goal: 100000,
      contributors: [], // Will be populated by webhooks
      campaignStart: "2025-10-12",
      campaignEnd: "2025-12-31T23:59:59+08:00", // December 31, 2025 (Malaysia Time)
      lastUpdated: new Date().toISOString()
    }

    // TODO: In production, read from your database instead of returning empty data
    // Example:
    // const contributions = await db.contributions.findMany()
    // const totalRaised = contributions.reduce((sum, c) => sum + c.amount, 0)
    // const topContributors = contributions.sort((a, b) => b.amount - a.amount).slice(0, 10)

    return NextResponse.json(fundingData)
  } catch (error) {
    console.error('Error fetching funding data:', error)
    return NextResponse.json(
      { error: 'Failed to fetch funding data' },
      { status: 500 }
    )
  }
}

// POST endpoint for manual updates (for testing or admin use)
export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // TODO: Update your database with the new data
    console.log('Manual funding data update:', body)
    
    return NextResponse.json({ success: true, message: 'Funding data updated' })
  } catch (error) {
    console.error('Error updating funding data:', error)
    return NextResponse.json(
      { error: 'Failed to update funding data' },
      { status: 500 }
    )
  }
}