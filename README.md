# PromptForge Daily

Simple AI commerce store for the masses.

Edit **only** `config.js`. Then push to GitHub and redeploy on Vercel.

## What you change
- Brand name and tagline
- Support email
- Stripe publishable key
- Product names, prices, descriptions, and previews

## Deploy
1. Push this repo to GitHub (already public).
2. In Vercel: Import Project → select this repo → Framework Preset: **Other** (no build command).
3. Deploy.
4. Edit `config.js` with your Stripe key, push, and Vercel redeploys automatically.

## How the paywall works
- Free preview on every product page.
- Buy button checks that a real Stripe key is present.
- After payment the success page shows the download link.

This is the Day 1 foundation. Later days add real Checkout Sessions, email delivery, and more agents. The public pages stay simple so anyone can understand and operate them.

## Files
- `config.js` — the only file you edit
- `index.html` — landing page
- `store.html` — product list
- `product.html` — detail + paywall
- `success.html` — after payment
- `style.css` / `script.js` — do not edit unless you want to

Ready for production. Add your variables and ship.