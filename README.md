# PromptForge Daily

Simple AI commerce store for the masses.

**You only edit `config.js`.** Everything else is already built.

---

## Quick Start (5 minutes)

1. **Get a Stripe key** (free test mode is fine to start)  
   Go to [https://dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys) → copy the **Publishable key** (starts with `pk_test_` or `pk_live_`).

2. **Edit `config.js`** (this is the only file you change):
   - Paste your Stripe key into `stripe.publishableKey`
   - Update brand name, tagline, and support email if you want
   - Edit the three products (name, price, short description, full description, preview text)

3. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com) → Add New → Project
   - Import `CreigT/promptforge-daily`
   - Framework Preset: **Other** (leave Build Command and Output Directory blank)
   - Click Deploy

4. **Done.** Your store is live. Any future change to `config.js` + push will auto-redeploy.

---

## What the store does right now

- Landing page with plain-language explanation
- Product catalog with clear prices
- Product detail page with free preview
- Buy button that checks for a real Stripe key
- Success page after purchase (demo delivery link)

The public pages stay simple so anyone can understand and operate the store.

---

## Before Production Completion

These items are intentionally left for the next modules so the first version stays simple and usable today. Complete them when you want real money and real delivery:

| Step | Status | What to do |
|------|--------|------------|
| Real Stripe Checkout | Not yet | Add a tiny serverless function (Vercel API route) that creates a Checkout Session and redirects the customer. Webhook to mark the order paid. |
| Unique download links | Not yet | After successful payment, generate a time-limited or one-time download URL (or email the file). Currently the success page uses a placeholder link. |
| Email receipt | Not yet | Send a confirmation email with the download link (Resend, SendGrid, or similar free tier). |
| Refund policy page | Optional | Add a short `/refund.html` page and link it in the footer. |
| Custom domain | Optional | Add your domain in the Vercel project settings. |
| Analytics | Optional | Enable Vercel Analytics or add a simple privacy-friendly tracker. |

You can run the store in demo mode today (real key + success page) while you add the real Checkout Session later. The public HTML does not need to change when you add the backend.

---

## Files

| File | Edit? | Purpose |
|------|-------|---------|
| `config.js` | **Yes** | Brand, Stripe key, products |
| `index.html` | No | Landing page |
| `store.html` | No | Product list |
| `product.html` | No | Detail + paywall |
| `success.html` | No | After payment |
| `style.css` | No | Styles |
| `script.js` | No | Renders products from config |
| `vercel.json` | No | Security headers |

---

## Support

Questions or issues → open a GitHub issue on this repo or email the support address you set in `config.js`.

Ready for the masses. Add your variables and ship.
