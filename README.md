# PromptForge Daily

A simple online store that sells digital products (AI prompt packs, guides, templates) with real Stripe payments.

---

## What this app is for

PromptForge Daily is a ready-to-deploy storefront for people who want to sell digital products without building a complicated site or managing servers.

It gives you:
- A clean landing page that explains the products in plain language
- A product catalog with clear prices
- Free previews so customers can see what they’re buying
- Real Stripe Checkout (customers pay securely and return to a success page)
- Instant digital delivery path (placeholder link today; unique links can be added later)

You only change one file (`config.js`) and one environment variable. Everything else is already built and stays simple so the masses can understand and operate it.

---

## Who this is for

- Creators who want to sell prompt packs, guides, templates, or other digital files
- Small business owners who need a simple store without monthly platform fees beyond Stripe
- People building autonomous or low-ops AI commerce experiments
- Anyone who wants a store they can customize by editing a single config file and deploy to Vercel in minutes

It is **not** for physical products, complex inventories, or multi-vendor marketplaces. It is intentionally simple.

---

## How to use it

### For the store owner (you)

1. **Get Stripe keys**  
   Visit [https://dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys)  
   Copy the Publishable key (`pk_…`) and the Secret key (`sk_…`).

2. **Edit `config.js`** (the only file you change in the repo):
   - Put your publishable key in `stripe.publishableKey`
   - Change the brand name, tagline, and support email if you want
   - Edit the products: name, price, short description, full description, and preview text

3. **Set the secret key in Vercel** (never commit the secret key):
   - Vercel project → Settings → Environment Variables
   - Add `STRIPE_SECRET_KEY` = your secret key
   - Redeploy

4. **Deploy**
   - Import this repo in Vercel
   - Framework Preset: **Other**
   - Deploy

After that, customers can browse, preview, and pay. Any future product or price change is just an edit to `config.js` + push.

**Important:** If you change a product price in `config.js`, also update the matching price (in cents) inside `api/create-checkout.js` so the amount charged matches what the customer sees.

### For the customer

1. Visit the store
2. Browse products
3. Open a product and read the free preview
4. Click **Buy Now** → redirected to Stripe Checkout
5. Pay → land on the success page with the download link

---

## Quick Start checklist

- [ ] Stripe publishable key in `config.js`
- [ ] `STRIPE_SECRET_KEY` environment variable set in Vercel
- [ ] Products updated in `config.js` (and prices synced in `api/create-checkout.js` if changed)
- [ ] Repo imported to Vercel as **Other** and deployed
- [ ] Test a purchase in Stripe test mode

---

## Before full production completion

These remaining items make delivery fully automatic:

| Step | Status | What to do |
|------|--------|------------|
| Real Stripe Checkout | Done | `/api/create-checkout` creates the session |
| Unique download links | Not yet | Generate a one-time or time-limited URL (or email the file) after payment |
| Email receipt | Not yet | Send confirmation + download link |
| Webhook | Optional | Listen for `checkout.session.completed` to trigger delivery |
| Refund policy page | Optional | Add `/refund.html` and link it |
| Custom domain | Optional | Add domain in Vercel settings |
| Analytics | Optional | Enable Vercel Analytics |

You can take real payments today. Automatic unique delivery can be added later without changing the public pages.

---

## Files

| File | Edit? | Purpose |
|------|-------|---------|
| `config.js` | **Yes** | Brand, publishable key, products |
| `api/create-checkout.js` | Only if prices change | Creates real Stripe Checkout Sessions |
| `index.html` | No | Landing page |
| `store.html` | No | Product list |
| `product.html` | No | Detail + paywall |
| `success.html` | No | After payment |
| `style.css` | No | Styles |
| `script.js` | No | Renders products and starts checkout |
| `vercel.json` | No | Security headers |

---

## Support

Open a GitHub issue on this repo or email the support address you set in `config.js`.

Built for the masses. Add your keys and ship.
