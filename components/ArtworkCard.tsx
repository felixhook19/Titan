import Link from "next/link";
import type { Artwork } from "@/lib/artworks";
import { formatPrice } from "@/lib/artworks";

export function ArtworkCard({
  artwork,
  index = 0,
}: {
  artwork: Artwork;
  index?: number;
}) {
  return (
    <Link
      href={`/art/${artwork.slug}`}
      className="group fade-up block"
      style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
    >
      <div className="relative overflow-hidden border border-white/10 bg-white/5 transition-shadow duration-500 group-hover:shadow-[0_0_40px_-8px_rgba(180,241,30,0.35)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={artwork.image}
          alt={artwork.title}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
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
