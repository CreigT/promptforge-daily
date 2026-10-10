# PromptForge Daily

Simple AI commerce store for the masses.

**You only edit `config.js` + one Vercel environment variable.** Everything else is already built.

---

## Quick Start (real payments)

1. **Get your Stripe keys**  
   Go to [https://dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys)
   - Copy the **Publishable key** (`pk_test_…` or `pk_live_…`)
   - Copy the **Secret key** (`sk_test_…` or `sk_live_…`)

2. **Edit `config.js`** (only public values):
   - Paste the publishable key into `stripe.publishableKey`
   - Update brand name, tagline, support email, and product details if you want

3. **Set the secret key in Vercel** (never put this in the repo):
   - In your Vercel project → Settings → Environment Variables
   - Add: `STRIPE_SECRET_KEY` = your secret key
   - Redeploy (or it will pick up on next push)

4. **Deploy / redeploy**
   - Import `CreigT/promptforge-daily` if you haven’t already
   - Framework Preset: **Other**
   - Deploy

Customers now go to real Stripe Checkout. After they pay they land on the success page.

---

## What the store does now

- Landing page with plain-language explanation
- Product catalog with clear prices
- Product detail page with free preview
- Buy button creates a real Stripe Checkout Session and redirects the customer
- Success page after successful payment

---

## Before Full Production Completion

These remaining items make delivery and support fully automatic:

| Step | Status | What to do |
|------|--------|------------|
| Real Stripe Checkout | Done | Uses `/api/create-checkout` |
| Unique download links | Not yet | After payment, generate a one-time or time-limited download URL (or email the file). Success page currently shows a placeholder. |
| Email receipt | Not yet | Send confirmation + download link (Resend free tier works well). |
| Webhook (optional) | Not yet | Listen for `checkout.session.completed` to mark orders paid and trigger delivery. |
| Refund policy page | Optional | Add a short `/refund.html` and link it in the footer. |
| Custom domain | Optional | Add your domain in Vercel project settings. |
| Analytics | Optional | Enable Vercel Analytics. |

The public pages stay simple. You can ship real payments today and add automatic delivery later.

---

## Files

| File | Edit? | Purpose |
|------|-------|---------|
| `config.js` | **Yes** | Brand, publishable key, products |
| `api/create-checkout.js` | No | Creates real Stripe Checkout Sessions |
| `index.html` | No | Landing page |
| `store.html` | No | Product list |
| `product.html` | No | Detail + paywall |
| `success.html` | No | After payment |
| `style.css` | No | Styles |
| `script.js` | No | Renders products and starts checkout |
| `vercel.json` | No | Security headers |

---

## Support

Questions or issues → open a GitHub issue on this repo or email the support address you set in `config.js`.

Real payments are ready. Add your keys and ship.
