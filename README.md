# TITAN — Art Store

A dark, psychedelic online gallery for selling original artwork and limited
editions, built with **Next.js (App Router)**, **TypeScript** and **Tailwind
CSS v4**. Designed to match the tone of Titan's work — spectral faces, fractured
colour and acid-green light on near-black.

## Features

- **Home** with hero, trust badges and featured works
- **Gallery** with category filtering (Painting / Digital / Mixed Media) and
  price sorting
- **Artwork detail pages** with full metadata, related works and add-to-cart
- **Shopping cart** with quantity controls, persisted to `localStorage`
- **Checkout** flow with a demo order confirmation (no real payment is taken)
- **About** and **Contact** pages
- Dark, atmospheric design: film-grain + vignette overlay, Fraunces display
  type, electric-green accents, sticky header with live cart count
- Auto-deploys to GitHub Pages on every push

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build the static site:

```bash
npm run build    # outputs ./out
```

## The catalogue & images

All artwork is defined in [`lib/artworks.ts`](lib/artworks.ts) — title, medium,
dimensions, price, category, description and image. Pages, filters and
related-works update automatically from this list.

Artwork images live in [`public/artwork/`](public/artwork). Each piece currently
uses a **palette-matched SVG placeholder** that echoes the real work's colours.

### Swapping in the real photos

1. Add your real image to `public/artwork/`, e.g. `static-bloom.jpg`.
2. In `lib/artworks.ts`, change that piece's `image` helper call — the `img()`
   helper points at `/artwork/<slug>.svg`; update it to your file
   (`/artwork/<slug>.jpg`). Local image paths are automatically prefixed with the
   GitHub Pages base path via `NEXT_PUBLIC_BASE_PATH`.
3. Commit and push — the site rebuilds and redeploys automatically.

## Notes on payments

The checkout is a front-end demonstration: it validates the form and shows an
order confirmation, but **does not process payments**. To take real orders,
integrate a payment provider such as Stripe Checkout at the `handleSubmit` step
in [`app/checkout/page.tsx`](app/checkout/page.tsx).
