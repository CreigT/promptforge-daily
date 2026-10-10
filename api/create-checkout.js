// Vercel serverless function — creates a real Stripe Checkout Session
// Secret key comes from Vercel environment variable STRIPE_SECRET_KEY

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return res.status(500).json({ error: 'STRIPE_SECRET_KEY is not set in Vercel environment variables.' });
  }

  try {
    const { productId, successUrl, cancelUrl } = req.body || {};

    // Load products from config (simple inline for serverless — keep in sync with config.js)
    // In a larger system this would come from a database or shared module.
    const products = {
      'prompt-pack-001': { name: 'High-Converting Product Descriptions', price: 2900, currency: 'usd' },
      'prompt-pack-002': { name: 'Social Media Content Engine', price: 4900, currency: 'usd' },
      'prompt-pack-003': { name: 'Pricing & Offer Optimizer', price: 3900, currency: 'usd' }
    };

    const product = products[productId];
    if (!product) {
      return res.status(400).json({ error: 'Unknown product' });
    }

    const origin = req.headers.origin || 'https://your-domain.vercel.app';
    const finalSuccess = successUrl || `${origin}/success.html?product=${productId}&session_id={CHECKOUT_SESSION_ID}`;
    const finalCancel = cancelUrl || `${origin}/product.html?id=${productId}`;

    const params = new URLSearchParams();
    params.append('mode', 'payment');
    params.append('success_url', finalSuccess);
    params.append('cancel_url', finalCancel);
    params.append('line_items[0][price_data][currency]', product.currency);
    params.append('line_items[0][price_data][product_data][name]', product.name);
    params.append('line_items[0][price_data][unit_amount]', String(product.price));
    params.append('line_items[0][quantity]', '1');
    params.append('metadata[productId]', productId);

    const stripeRes = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${secretKey}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params.toString()
    });

    const data = await stripeRes.json();
    if (!stripeRes.ok) {
      return res.status(stripeRes.status).json({ error: data.error?.message || 'Stripe error' });
    }

    return res.status(200).json({ url: data.url, id: data.id });
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Server error' });
  }
}