import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-canvas">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="text-xl font-semibold uppercase tracking-[0.4em]">
            Titan
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone">
            A gallery for dark, psychedelic and expressionistic work. Each piece
            ships insured, with a signed certificate of authenticity.
          </p>
          <a
            href="https://www.instagram.com/gallerie.titan/"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 inline-flex items-center gap-2 text-sm text-stone transition-colors hover:text-accent"
            aria-label="Follow TITAN on Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="h-5 w-5 fill-current"
            >
              <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.8c-3.15 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.41-.35 1.03-.4 2.17-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.05 1.14.24 1.76.4 2.17.22.55.47.94.88 1.35.41.41.8.66 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17a3.64 3.64 0 0 0-.88-1.35 3.64 3.64 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4-1.24-.06-1.59-.07-4.74-.07Zm0 3.06a4.98 4.98 0 1 1 0 9.96 4.98 4.98 0 0 1 0-9.96Zm0 1.8a3.18 3.18 0 1 0 0 6.36 3.18 3.18 0 0 0 0-6.36Zm5.18-3.24a1.16 1.16 0 1 1 0 2.32 1.16 1.16 0 0 1 0-2.32Z" />
            </svg>
            <span className="tracking-wide">@gallerie.titan</span>
          </a>
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
            New work and private viewings, twice a month.
          </p>
          <div className="mt-3 flex gap-2">
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full border border-white/15 bg-transparent px-3 py-2 text-sm outline-none focus:border-accent"
            />
            <Link href="/contact" className="btn btn-primary px-4 py-2">
              Join
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-stone sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TITAN. All rights reserved.</p>
          <p>Free worldwide shipping · 14-day returns</p>
        </div>
      </div>
    </footer>
  );
}
