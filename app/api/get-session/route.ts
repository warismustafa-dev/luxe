import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const session_id = searchParams.get('session_id');
    if (!session_id) return NextResponse.json({ error: 'Missing session_id' }, { status: 400 });
    if (!process.env.STRIPE_SECRET_KEY) return NextResponse.json({ error: 'Stripe secret not configured' }, { status: 500 });

    const Stripe = (await import('stripe')).default;
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ['payment_intent', 'customer', 'invoice'],
    });
    return NextResponse.json({ session });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Failed to fetch session' }, { status: 500 });
  }
}


