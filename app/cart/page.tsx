"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/artworks";

export default function CartPage() {
  const { items, setQty, remove, subtotal, count } = useCart();

  return (
    <section className="mx-auto max-w-5xl px-5 py-14">
      <h1 className="font-display text-5xl">Your cart</h1>

      {items.length === 0 ? (
        <div className="mt-10 border border-dashed border-black/15 px-6 py-20 text-center">
          <p className="text-stone">Your cart is empty.</p>
          <Link
            href="/gallery"
            className="mt-6 inline-block bg-ink px-7 py-3 text-sm uppercase tracking-widest text-canvas transition-colors hover:bg-accent"
          >
            Browse the gallery
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <ul className="lg:col-span-2 divide-y divide-black/10 border-y border-black/10">
            {items.map((item) => (
              <li key={item.slug} className="flex gap-4 py-5">
                <Link
                  href={`/art/${item.slug}`}
                  className="h-24 w-20 shrink-0 overflow-hidden bg-black/5"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </Link>

                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex justify-between gap-4">
                    <div>
                      <Link
                        href={`/art/${item.slug}`}
                        className="font-display text-xl leading-tight hover:text-accent"
                      >
                        {item.title}
                      </Link>
                      <p className="text-sm text-stone">{item.artist}</p>
                    </div>
                    <p className="whitespace-nowrap text-sm">
                      {formatPrice(item.price * item.qty)}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-black/15">
                      <button
                        aria-label="Decrease quantity"
                        onClick={() => setQty(item.slug, item.qty - 1)}
                        className="px-3 py-1 text-stone hover:text-accent"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm">{item.qty}</span>
                      <button
                        aria-label="Increase quantity"
                        onClick={() => setQty(item.slug, item.qty + 1)}
                        className="px-3 py-1 text-stone hover:text-accent"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => remove(item.slug)}
                      className="text-xs uppercase tracking-widest text-stone hover:text-accent"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <aside className="h-fit border border-black/10 bg-white/40 p-6">
            <h2 className="font-display text-2xl">Summary</h2>
            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-stone">Items</dt>
                <dd>{count}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-stone">Subtotal</dt>
                <dd>{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-stone">Shipping</dt>
                <dd>Free</dd>
              </div>
              <div className="flex justify-between border-t border-black/10 pt-3 text-base font-medium">
                <dt>Total</dt>
                <dd>{formatPrice(subtotal)}</dd>
              </div>
            </dl>
            <Link
              href="/checkout"
              className="mt-6 block bg-ink px-6 py-3 text-center text-sm uppercase tracking-widest text-canvas transition-colors hover:bg-accent"
            >
              Checkout
            </Link>
            <Link
              href="/gallery"
              className="mt-3 block text-center text-xs uppercase tracking-widest text-stone hover:text-accent"
            >
              Continue browsing
            </Link>
          </aside>
        </div>
      )}
    </section>
  );
}
