"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/artworks";

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const [placed, setPlaced] = useState(false);
  const [orderId] = useState(
    () => "ATL-" + Math.floor(100000 + Math.random() * 900000)
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Demo checkout: no real payment is processed.
    clear();
    setPlaced(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (placed) {
    return (
      <section className="mx-auto max-w-2xl px-5 py-24 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-accent">
          Thank you
        </p>
        <h1 className="mt-3 font-display text-5xl">Order confirmed</h1>
        <p className="mt-5 text-stone">
          Your order <span className="font-medium text-ink">{orderId}</span> has
          been received. A confirmation email is on its way, and our team will be
          in touch about shipping within two business days.
        </p>
        <Link
          href="/gallery"
          className="mt-8 inline-block bg-ink px-7 py-3 text-sm uppercase tracking-widest text-canvas transition-colors hover:bg-accent"
        >
          Continue browsing
        </Link>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-2xl px-5 py-24 text-center">
        <h1 className="font-display text-4xl">Your cart is empty</h1>
        <Link
          href="/gallery"
          className="mt-8 inline-block bg-ink px-7 py-3 text-sm uppercase tracking-widest text-canvas transition-colors hover:bg-accent"
        >
          Browse the gallery
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-5xl px-5 py-14">
      <h1 className="font-display text-5xl">Checkout</h1>
      <p className="mt-2 text-sm text-stone">
        This is a demonstration store — no payment is taken and no card details
        are stored.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        <form
          onSubmit={handleSubmit}
          className="space-y-8 lg:col-span-2"
          id="checkout-form"
        >
          <Fieldset legend="Contact">
            <Field label="Email" type="email" name="email" required />
            <Field label="Full name" name="name" required />
          </Fieldset>

          <Fieldset legend="Shipping address">
            <Field label="Address" name="address" required />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="City" name="city" required />
              <Field label="Postal code" name="zip" required />
            </div>
            <Field label="Country" name="country" required />
          </Fieldset>

          <Fieldset legend="Payment">
            <Field label="Card number" name="card" placeholder="4242 4242 4242 4242" required />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Expiry" name="exp" placeholder="MM / YY" required />
              <Field label="CVC" name="cvc" placeholder="123" required />
            </div>
          </Fieldset>

          <button
            type="submit"
            className="w-full bg-ink px-6 py-4 text-sm uppercase tracking-widest text-canvas transition-colors hover:bg-accent"
          >
            Place order · {formatPrice(subtotal)}
          </button>
        </form>

        <aside className="h-fit border border-black/10 bg-white/40 p-6">
          <h2 className="font-display text-2xl">Order</h2>
          <ul className="mt-5 space-y-4">
            {items.map((item) => (
              <li key={item.slug} className="flex gap-3">
                <div className="h-16 w-12 shrink-0 overflow-hidden bg-black/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 justify-between gap-2 text-sm">
                  <div>
                    <p className="font-medium leading-tight">{item.title}</p>
                    <p className="text-stone">Qty {item.qty}</p>
                  </div>
                  <p className="whitespace-nowrap">
                    {formatPrice(item.price * item.qty)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <dl className="mt-6 space-y-2 border-t border-black/10 pt-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-stone">Shipping</dt>
              <dd>Free</dd>
            </div>
            <div className="flex justify-between text-base font-medium">
              <dt>Total</dt>
              <dd>{formatPrice(subtotal)}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}

function Fieldset({
  legend,
  children,
}: {
  legend: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="space-y-4">
      <legend className="mb-2 text-sm uppercase tracking-widest text-accent">
        {legend}
      </legend>
      {children}
    </fieldset>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm text-stone">{label}</span>
      <input
        {...props}
        className="w-full border border-black/15 bg-transparent px-3 py-2.5 text-sm outline-none focus:border-accent"
      />
    </label>
  );
}
