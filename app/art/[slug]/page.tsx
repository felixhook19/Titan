import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { artworks, getArtwork, formatPrice } from "@/lib/artworks";
import { ArtworkCard } from "@/components/ArtworkCard";
import { AddToCartButton } from "@/components/AddToCartButton";

export function generateStaticParams() {
  return artworks.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const art = getArtwork(slug);
  if (!art) return { title: "Not found" };
  return {
    title: art.title,
    description: `${art.title} by ${art.artist} — ${art.medium}, ${art.dimensions}.`,
  };
}

export default async function ArtworkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const art = getArtwork(slug);
  if (!art) notFound();

  const related = artworks
    .filter((a) => a.slug !== art.slug && a.category === art.category)
    .slice(0, 3);

  return (
    <article className="mx-auto max-w-6xl px-5 py-10">
      <nav className="mb-8 text-sm text-stone">
        <Link href="/gallery" className="hover:text-accent">
          ← Back to gallery
        </Link>
      </nav>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="overflow-hidden bg-black/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={art.image}
            alt={art.title}
            className="w-full object-cover"
          />
        </div>

        <div className="md:pt-6">
          <p className="text-sm uppercase tracking-[0.25em] text-accent">
            {art.category}
          </p>
          <h1 className="mt-2 font-display text-4xl md:text-5xl">{art.title}</h1>
          <p className="mt-2 text-lg text-stone">
            {art.artist} · {art.year}
          </p>

          <p className="mt-6 text-3xl font-display">{formatPrice(art.price)}</p>

          <p className="mt-6 leading-relaxed text-stone">{art.description}</p>

          <dl className="mt-8 grid grid-cols-2 gap-y-4 border-t border-black/10 pt-6 text-sm">
            <dt className="text-stone">Medium</dt>
            <dd>{art.medium}</dd>
            <dt className="text-stone">Dimensions</dt>
            <dd>{art.dimensions}</dd>
            {art.edition && (
              <>
                <dt className="text-stone">Edition</dt>
                <dd>{art.edition}</dd>
              </>
            )}
            <dt className="text-stone">Authenticity</dt>
            <dd>Signed certificate included</dd>
          </dl>

          <div className="mt-8 max-w-sm">
            <AddToCartButton artwork={art} />
            <p className="mt-3 text-xs text-stone">
              Free insured shipping worldwide · 14-day returns
            </p>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-8 font-display text-3xl">More in {art.category}</h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3">
            {related.map((a, i) => (
              <ArtworkCard key={a.slug} artwork={a} index={i} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
