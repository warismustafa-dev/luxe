import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      currency = 'GBP',
      amount, // integer in smallest unit
      success_url,
      cancel_url,
      metadata = {},
    } = body || {};

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: 'Stripe secret key not configured' }, { status: 500 });
    }
    if (!amount || amount <= 0) {
      return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });
    }

    const Stripe = (await import('stripe')).default;
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

    // Ensure success_url contains the session id placeholder for client to read
    const ensuredSuccessUrl = (success_url || `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/booking-details?status=success`).includes('{CHECKOUT_SESSION_ID}')
      ? (success_url as string)
      : `${success_url || `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/booking-details?status=success`}${(success_url || '').includes('?') ? '&' : (success_url ? '?' : '&')}session_id={CHECKOUT_SESSION_ID}`;

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      invoice_creation: { enabled: true },
      line_items: [
        {
          price_data: {
            currency: currency.toLowerCase(),
            product_data: {
              name: metadata?.title || 'Luxe Experience Booking',
              description: metadata?.description || undefined,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      success_url: ensuredSuccessUrl,
      cancel_url: cancel_url || `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/booking-details?status=cancelled`,
      metadata,
    });

    return NextResponse.json({ id: session.id, url: session.url });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'Failed to create session' }, { status: 500 });
  }
}


