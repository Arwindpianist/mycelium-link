import { NextResponse } from 'next/server'

// Production status checker for webhook system
export async function GET() {
  try {
    const status = {
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      webhook: {
        endpoint: '/api/stripe-webhook',
        configured: !!process.env.STRIPE_WEBHOOK_SECRET,
        stripeKeyConfigured: !!process.env.STRIPE_SECRET_KEY,
        paymentLinkConfigured: !!process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK,
      },
      api: {
        fundingData: '/api/funding-data',
        contact: '/api/contact',
        testWebhook: '/api/test-webhook',
      },
      production: {
        domain: process.env.VERCEL_URL || 'localhost:3000',
        isProduction: process.env.NODE_ENV === 'production',
      },
      testing: {
        stripeTestCard: '4242 4242 4242 4242',
        webhookTestUrl: `${process.env.VERCEL_URL || 'http://localhost:3000'}/api/stripe-webhook`,
        fundingPageUrl: `${process.env.VERCEL_URL || 'http://localhost:3000'}/funding`,
      },
      instructions: {
        step1: 'Configure webhook in Stripe dashboard',
        step2: 'Set STRIPE_WEBHOOK_SECRET in environment variables',
        step3: 'Test with card 4242 4242 4242 4242',
        step4: 'Monitor Stripe dashboard for successful deliveries'
      }
    }

    return NextResponse.json(status, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    })
  } catch (error) {
    console.error('Status check error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to check system status',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}

// POST endpoint for manual webhook testing
export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Simulate webhook processing
    const testEvent = {
      id: `evt_test_${Date.now()}`,
      type: 'test.webhook',
      data: body,
      created: Math.floor(Date.now() / 1000)
    }
    
    console.log('[STATUS] Manual webhook test:', testEvent)
    
    return NextResponse.json({
      message: 'Test webhook processed successfully',
      event: testEvent,
      timestamp: new Date().toISOString(),
      status: 'success'
    })
  } catch (error) {
    console.error('Manual webhook test error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to process test webhook',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}
