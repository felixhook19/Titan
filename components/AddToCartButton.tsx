"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import type { Artwork } from "@/lib/artworks";

export function AddToCartButton({ artwork }: { artwork: Artwork }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  if (!artwork.available) {
    return (
      <button
        disabled
        className="w-full cursor-not-allowed border border-black/15 px-6 py-3 text-sm uppercase tracking-widest text-stone"
      >
        Sold — enquire about commissions
      </button>
    );
  }

  return (
    <button
      onClick={() => {
        add(artwork);
        setAdded(true);
        setTimeout(() => setAdded(false), 1800);
      }}
      className="w-full bg-ink px-6 py-3 text-sm uppercase tracking-widest text-canvas transition-colors hover:bg-accent"
    >
      {added ? "Added to cart ✓" : "Add to cart"}
    </button>
  );
}
