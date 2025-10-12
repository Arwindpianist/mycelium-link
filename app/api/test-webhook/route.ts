import { NextResponse } from 'next/server'

// Test endpoint to verify webhook system is working
export async function GET() {
  try {
    const testData = {
      message: "Webhook system is operational",
      timestamp: new Date().toISOString(),
      environment: {
        hasStripeSecret: !!process.env.STRIPE_SECRET_KEY,
        hasWebhookSecret: !!process.env.STRIPE_WEBHOOK_SECRET,
        hasPaymentLink: !!process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK,
      },
      webhookEndpoint: "/api/stripe-webhook",
      fundingDataEndpoint: "/api/funding-data",
      testPaymentCard: "4242 4242 4242 4242",
      instructions: {
        step1: "Install Stripe CLI: stripe listen --forward-to localhost:3000/api/stripe-webhook",
        step2: "Update .env.local with webhook secret from CLI",
        step3: "Make test payment with card 4242 4242 4242 4242",
        step4: "Check console logs for webhook processing"
      }
    }

    return NextResponse.json(testData)
  } catch (error) {
    console.error('Test webhook error:', error)
    return NextResponse.json(
      { error: 'Failed to test webhook system' },
      { status: 500 }
    )
  }
}

// POST endpoint to simulate a webhook event (for testing)
export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    console.log('[TEST] Simulated webhook event:', body)
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 100))
    
    return NextResponse.json({
      message: "Test webhook event processed successfully",
      receivedData: body,
      timestamp: new Date().toISOString(),
      processingTime: "100ms"
    })
  } catch (error) {
    console.error('Test webhook POST error:', error)
    return NextResponse.json(
      { error: 'Failed to process test webhook' },
      { status: 500 }
    )
  }
}
