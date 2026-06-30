import Link from "next/link";
import { artworks } from "@/lib/artworks";
import { ArtworkCard } from "@/components/ArtworkCard";

export default function HomePage() {
  const featured = artworks.filter((a) => a.available).slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div className="fade-up">
            <p className="text-sm uppercase tracking-[0.25em] text-accent">
              Contemporary Art Gallery
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] md:text-6xl">
              Original artwork for the spaces you live in.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-stone">
              A curated collection of paintings, photography, sculpture and
              limited-edition prints — each one signed, authenticated and
              shipped insured to your door.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/gallery"
                className="bg-ink px-7 py-3 text-sm uppercase tracking-widest text-canvas transition-colors hover:bg-accent"
              >
                Browse the gallery
              </Link>
              <Link
                href="/about"
                className="border border-black/20 px-7 py-3 text-sm uppercase tracking-widest transition-colors hover:border-accent hover:text-accent"
              >
                Our story
              </Link>
            </div>
          </div>

          <div className="fade-up grid grid-cols-2 gap-4" style={{ animationDelay: "120ms" }}>
            {artworks.slice(0, 4).map((a, i) => (
              <div
                key={a.slug}
                className={`overflow-hidden bg-black/5 ${
                  i % 2 === 1 ? "mt-8" : ""
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={a.image}
                  alt={a.title}
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-y border-black/10 bg-white/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-3">
          {[
            {
              title: "Authenticated",
              body: "Every work ships with a signed certificate of authenticity.",
            },
            {
              title: "Insured shipping",
              body: "Museum-grade packing and fully insured worldwide delivery.",
            },
            {
              title: "14-day returns",
              body: "Live with the piece. If it isn't right, send it back.",
            },
          ].map((f) => (
            <div key={f.title}>
              <h3 className="font-display text-xl">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured works */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-accent">
              Featured
            </p>
            <h2 className="mt-2 font-display text-4xl">Recently added</h2>
          </div>
          <Link
            href="/gallery"
            className="hidden text-sm uppercase tracking-widest text-stone hover:text-accent sm:block"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3">
          {featured.map((a, i) => (
            <ArtworkCard key={a.slug} artwork={a} index={i} />
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-ink text-canvas">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-4xl">Commission a piece</h2>
            <p className="mt-3 max-w-md text-canvas/70">
              Looking for something made for your space? Our artists take a
              limited number of commissions each year.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-canvas px-7 py-3 text-sm uppercase tracking-widest text-ink transition-colors hover:bg-accent hover:text-canvas"
          >
            Start a commission
          </Link>
        </div>
      </section>
    </>
  );
}
