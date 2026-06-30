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
      <div className="relative overflow-hidden bg-black/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={artwork.image}
          alt={artwork.title}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {!artwork.available && (
          <span className="absolute left-3 top-3 bg-ink/85 px-2 py-1 text-[10px] uppercase tracking-widest text-canvas">
            Sold
          </span>
        )}
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg leading-tight">{artwork.title}</h3>
          <p className="text-sm text-stone">{artwork.artist}</p>
        </div>
        <p className="whitespace-nowrap text-sm text-stone">
          {formatPrice(artwork.price)}
        </p>
      </div>
    </Link>
  );
}
