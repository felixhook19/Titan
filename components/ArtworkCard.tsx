import Link from "next/link";
import type { Artwork } from "@/lib/artworks";
import { formatPrice } from "@/lib/artworks";

export function ArtworkCard({ artwork }: { artwork: Artwork }) {
  return (
    <Link
      href={`/art/${artwork.slug}`}
      data-cursor="view"
      className="group block"
    >
      <div className="relative overflow-hidden border border-white/10 bg-white/5 transition-shadow duration-500 group-hover:shadow-[0_0_50px_-10px_rgba(180,241,30,0.4)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={artwork.image}
          alt={artwork.title}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.06]"
        />
        {/* hover scrim + reveal label */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="pointer-events-none absolute bottom-3 left-3 translate-y-2 text-[11px] uppercase tracking-[0.22em] text-accent opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          View work →
        </span>
        {!artwork.available && (
          <span className="absolute left-3 top-3 border border-white/20 bg-canvas/80 px-2 py-1 text-[10px] uppercase tracking-widest text-ink backdrop-blur">
            Sold
          </span>
        )}
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg leading-tight transition-colors group-hover:text-accent">
            {artwork.title}
          </h3>
          <p className="text-sm text-stone">{artwork.medium}</p>
        </div>
        <p className="whitespace-nowrap text-sm text-stone">
          {formatPrice(artwork.price)}
        </p>
      </div>
    </Link>
  );
}
