"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

const nav = [
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const { count } = useCart();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-canvas/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="text-xl font-semibold uppercase tracking-[0.4em] text-ink transition-colors hover:text-accent"
          onClick={() => setOpen(false)}
        >
          Titan
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm uppercase tracking-widest transition-colors hover:text-accent ${
                pathname.startsWith(item.href) ? "text-accent" : "text-stone"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <CartLink count={count} />
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <CartLink count={count} />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center"
          >
            <span className="space-y-1.5">
              <span className="block h-px w-6 bg-ink" />
              <span className="block h-px w-6 bg-ink" />
              <span className="block h-px w-6 bg-ink" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-5 py-4 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm uppercase tracking-widest text-stone"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

function CartLink({ count }: { count: number }) {
  return (
    <Link
      href="/cart"
      className="relative text-sm uppercase tracking-widest text-stone transition-colors hover:text-accent"
    >
      Cart
      {count > 0 && (
        <span className="absolute -right-4 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-medium text-canvas">
          {count}
        </span>
      )}
    </Link>
  );
}
