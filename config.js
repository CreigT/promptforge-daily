// Edit this file only. Then push to GitHub and redeploy on Vercel.
// Everything else is ready.

const CONFIG = {
  brand: {
    name: "PromptForge Daily",
    tagline: "Simple AI products. Clear prices. Instant delivery.",
    supportEmail: "support@example.com"
  },
  stripe: {
    // Put your Stripe publishable key here (test or live).
    // Get it from https://dashboard.stripe.com/apikeys
    publishableKey: "pk_test_your_key_here"
  },
  products: [
    {
      id: "prompt-pack-001",
      name: "High-Converting Product Descriptions",
      price: 29,
      currency: "usd",
      short: "50 prompts that write product copy that sells.",
      description: "Battle-tested prompts for fashion, electronics, and digital goods. Includes formulas that highlight benefits and end with a strong call to action.",
      preview: "Write a product description for [PRODUCT] that highlights [BENEFIT] and ends with a strong CTA...",
      deliveryNote: "Instant download link after payment"
    },
    {
      id: "prompt-pack-002",
      name: "Social Media Content Engine",
      price: 49,
      currency: "usd",
      short: "Daily posts, threads, and carousels on autopilot.",
      description: "Complete prompt system for LinkedIn, X, and Instagram. Built so content keeps moving without you writing every day.",
      preview: "Generate 7 days of LinkedIn posts for [NICHE] that build authority and drive traffic...",
      deliveryNote: "Instant download link after payment"
    },
    {
      id: "prompt-pack-003",
      name: "Pricing & Offer Optimizer",
      price: 39,
      currency: "usd",
      short: "Better prices, bundles, and limited-time offers.",
      description: "Prompts that look at a product and recommend a price, a simple bundle, and an urgency element that feels fair.",
      preview: "Analyze this product [PRODUCT] and recommend a price, bundle, and urgency element...",
      deliveryNote: "Instant download link after payment"
    }
  ]
};

// Do not edit below this line
if (typeof module !== "undefined") module.exports = CONFIG;