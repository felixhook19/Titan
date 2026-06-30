import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-canvas">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">Atelier</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone">
            An online gallery for original artwork and limited editions.
            Each piece ships insured, with a signed certificate of authenticity.
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-stone">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/gallery" className="hover:text-accent">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-stone">
            Newsletter
          </p>
          <p className="mt-3 text-sm text-stone">
            New works and private viewings, twice a month.
          </p>
          <div className="mt-3 flex gap-2">
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full border border-black/15 bg-transparent px-3 py-2 text-sm outline-none focus:border-accent"
            />
            <Link
              href="/contact"
              className="bg-ink px-4 py-2 text-sm text-canvas transition-colors hover:bg-accent"
            >
              Join
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-stone sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Atelier Gallery. All rights reserved.</p>
          <p>Free worldwide shipping · 14-day returns</p>
        </div>
      </div>
    </footer>
  );
}
