function renderStore() {
  const grid = document.getElementById('product-grid');
  if (!grid || typeof CONFIG === 'undefined') return;
  document.getElementById('brand-name').textContent = CONFIG.brand.name;
  document.getElementById('footer-brand').textContent = CONFIG.brand.name;
  grid.innerHTML = CONFIG.products.map(p => `
    <div class="product-card">
      <h3>${p.name}</h3>
      <p>${p.short || p.description}</p>
      <div class="price">$${p.price}</div>
      <a href="product.html?id=${p.id}" class="cta">View & Buy</a>
    </div>
  `).join('');
}

function renderProduct() {
  const container = document.getElementById('product-detail');
  if (!container || typeof CONFIG === 'undefined') return;
  document.getElementById('brand-name').textContent = CONFIG.brand.name;
  document.getElementById('footer-brand').textContent = CONFIG.brand.name;
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const product = CONFIG.products.find(p => p.id === id);
  if (!product) {
    container.innerHTML = '<p>Product not found. <a href="store.html">Back to store</a></p>';
    return;
  }
  container.innerHTML = `
    <h1>${product.name}</h1>
    <div class="price">$${product.price}</div>
    <p>${product.description}</p>
    <h3 style="margin-top:1.5rem;">Free preview</h3>
    <pre style="background:#1e293b;padding:1rem;border-radius:8px;margin:1rem 0;white-space:pre-wrap;">${product.preview}</pre>
    <button id="checkout-btn" class="cta">Buy Now – $${product.price}</button>
    <p style="margin-top:1rem;color:#94a3b8;">Secure payment via Stripe. Instant digital delivery after payment.</p>
    <p style="margin-top:0.5rem;color:#64748b;font-size:0.9rem;">Refund policy: digital products are delivered immediately. Contact support if something is wrong.</p>
  `;

  document.getElementById('checkout-btn').onclick = async () => {
    const key = CONFIG.stripe.publishableKey;
    if (!key || key.includes('your_key_here')) {
      alert('Add your Stripe publishable key in config.js first.\n\nThen set STRIPE_SECRET_KEY in Vercel environment variables and redeploy.');
      return;
    }

    const btn = document.getElementById('checkout-btn');
    btn.disabled = true;
    btn.textContent = 'Redirecting to Stripe…';

    try {
      const res = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: product.id,
          successUrl: window.location.origin + '/success.html?product=' + product.id + '&session_id={CHECKOUT_SESSION_ID}',
          cancelUrl: window.location.href
        })
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || 'Could not start checkout');
      }
      window.location.href = data.url;
    } catch (err) {
      alert('Checkout failed: ' + err.message);
      btn.disabled = false;
      btn.textContent = `Buy Now – $${product.price}`;
    }
  };
}

document.addEventListener('DOMContentLoaded', () => {
  renderStore();
  renderProduct();
});