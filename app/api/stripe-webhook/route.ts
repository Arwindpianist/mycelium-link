import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: NextRequest) {
  const startTime = Date.now()
  console.log(`[WEBHOOK] Received request at ${new Date().toISOString()}`)
  
  try {
    const body = await req.text()
    const signature = req.headers.get('stripe-signature')!

    if (!signature) {
      console.error('[WEBHOOK] No signature provided')
      return NextResponse.json({ error: 'No signature provided' }, { status: 400 })
    }

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
      console.log(`[WEBHOOK] Signature verified for event: ${event.type}`)
    } catch (err) {
      console.error('[WEBHOOK] Signature verification failed:', err)
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    console.log(`[WEBHOOK] Processing event: ${event.type} (ID: ${event.id})`)

    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutSessionCompleted(event.data.object as Stripe.Checkout.Session)
        break
      
      case 'payment_intent.succeeded':
        await handlePaymentIntentSucceeded(event.data.object as Stripe.PaymentIntent)
        break
      
      case 'invoice.payment_succeeded':
        await handleInvoicePaymentSucceeded(event.data.object as Stripe.Invoice)
        break
      
      default:
        console.log(`[WEBHOOK] Unhandled event type: ${event.type}`)
    }

    const processingTime = Date.now() - startTime
    console.log(`[WEBHOOK] Successfully processed ${event.type} in ${processingTime}ms`)
    
    return NextResponse.json({ 
      received: true, 
      eventType: event.type,
      processingTime: `${processingTime}ms`,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    const processingTime = Date.now() - startTime
    console.error(`[WEBHOOK] Error after ${processingTime}ms:`, error)
    return NextResponse.json(
      { 
        error: 'Webhook handler failed',
        processingTime: `${processingTime}ms`,
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}

async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  console.log(`[CONTRIBUTION] Checkout session completed: ${session.id}`)
  
  // Extract contribution details
  const amount = session.amount_total || 0
  const amountInMYR = amount / 100 // Convert from cents
  
  // Get customer email if available
  const customerEmail = session.customer_details?.email || 'Anonymous'
  
  // Generate contributor name
  const contributorName = session.customer_details?.name || `Investor #${Date.now().toString().slice(-4)}`
  
  console.log(`[CONTRIBUTION] New contribution received:`)
  console.log(`  - Contributor: ${contributorName}`)
  console.log(`  - Email: ${customerEmail}`)
  console.log(`  - Amount: RM ${amountInMYR}`)
  console.log(`  - Session ID: ${session.id}`)
  console.log(`  - Payment Status: ${session.payment_status}`)
  
  // TODO: Store in your database
  // For now, we'll log the contribution
  console.log(`[CONTRIBUTION] ✅ Contribution logged: ${contributorName} - RM ${amountInMYR}`)
  
  // TODO: Send confirmation email
  // TODO: Update funding totals
  // TODO: Add to leaderboard
  
  // Example of what you might do:
  // await addContribution({
  //   name: contributorName,
  //   amount: amountInMYR,
  //   email: customerEmail,
  //   stripeSessionId: session.id,
  //   date: new Date().toISOString()
  // })
}

async function handlePaymentIntentSucceeded(paymentIntent: Stripe.PaymentIntent) {
  console.log('Payment intent succeeded:', paymentIntent.id)
  
  // Handle successful payment
  const amount = paymentIntent.amount || 0
  const amountInMYR = amount / 100
  
  console.log(`Payment confirmed: RM ${amountInMYR}`)
  
  // TODO: Update your database with confirmed payment
  // TODO: Send receipt email
  // TODO: Update funding progress
}

async function handleInvoicePaymentSucceeded(invoice: Stripe.Invoice) {
  console.log('Invoice payment succeeded:', invoice.id)
  
  // Handle recurring payments or invoices
  const amount = invoice.amount_paid || 0
  const amountInMYR = amount / 100
  
  console.log(`Invoice payment: RM ${amountInMYR}`)
  
  // TODO: Handle recurring contributions
  // TODO: Update database
}
