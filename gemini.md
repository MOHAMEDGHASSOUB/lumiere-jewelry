# 💎 Luxury Jewelry Brand — Project Constitution (gemini.md)
_This file is law. Update only when schema, rules, or architecture change._

## Data Schema

### WhatsApp Config
```json
{
  "phone": "212600000000",
  "messages": {
    "general": "Hello! I'm interested in your jewelry collection.",
    "order": "Hello! I'd like to place an order for [ITEM]. Can you help me?",
    "price": "Hello! I'd like to know the price of [ITEM]. Thank you!",
    "custom": "Hello! I'd like to request a custom jewelry design. Can we discuss the details?"
  }
}
```

### Page Schema
```json
{
  "pages": ["index.html", "collection.html", "about.html", "contact.html", "custom.html"],
  "assets": {
    "css": "css/style.css",
    "js": "js/main.js",
    "images": "images/"
  }
}
```

## Architectural Invariants
- No dead links — all Nav links must resolve to real files
- WhatsApp links use `https://wa.me/` protocol
- All pages share the same nav + footer component (replicated in each file)
- Mobile-first responsive design
- Palette: Black (#0a0a0a), Gold (#c9a84c → #f5d485), White (#fafafa)

## Behavioral Rules
- Brand name: **Lumière Jewelry** (French for "light" — premium feel)
- Tone: Elegant, minimal, aspirational
- No eCommerce — CTA is always WhatsApp or Instagram
- Do NOT use generic stock photo URLs that may break
