# Atelier — Artwork Store

A modern, fully responsive online gallery for selling original artwork and
limited editions, built with **Next.js (App Router)**, **TypeScript** and
**Tailwind CSS v4**.

## Features

- **Home page** with hero, value propositions and featured works
- **Gallery** with category filtering (Painting / Photography / Sculpture /
  Print) and price sorting
- **Artwork detail pages** with full metadata, related works and add-to-cart
- **Shopping cart** with quantity controls, persisted to `localStorage`
- **Checkout** flow with a demo order confirmation (no real payment is taken)
- **About** and **Contact** pages
- Elegant editorial design, sticky header with live cart count, mobile menu
- Accessible markup, lazy-loaded imagery and reveal animations

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

## Project structure

```
app/                 Routes (home, gallery, art/[slug], cart, checkout, about, contact)
components/          Header, Footer, ArtworkCard, GalleryGrid, AddToCartButton
context/CartContext  Cart state + localStorage persistence
lib/artworks.ts      Artwork catalogue + helpers
```

## Customising the catalogue

All artwork lives in [`lib/artworks.ts`](lib/artworks.ts). Each entry has a
title, artist, price, medium, dimensions, category, image URL and description.
Add, edit or remove entries there — pages, the gallery filters and related-works
sections all update automatically.

Images currently reference royalty-free Unsplash photography as placeholders.
Swap the `image` URLs for your own hosted artwork files.

## Notes on payments

The checkout is a front-end demonstration: it validates the form and shows an
order confirmation, but **does not process payments**. To take real orders,
integrate a payment provider such as Stripe Checkout or PayPal at the
`handleSubmit` step in [`app/checkout/page.tsx`](app/checkout/page.tsx).
