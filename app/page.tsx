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
            <h1 className="mt-4 font-display text-5xl leading-[1.02] md:text-7xl">
              Art that
              <span className="italic text-accent"> stares back.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-stone">
              TITAN is a collection of dark, psychedelic and expressionistic
              work — spectral faces, fractured colour and strange mythologies.
              Each piece is signed, authenticated and shipped insured.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/gallery" className="btn btn-primary">
                Enter the gallery
              </Link>
              <Link href="/about" className="btn btn-ghost">
                The studio
              </Link>
            </div>
          </div>

          <div
            className="fade-up grid grid-cols-2 gap-4"
            style={{ animationDelay: "120ms" }}
          >
            {artworks.slice(0, 4).map((a, i) => (
              <Link
                key={a.slug}
                href={`/art/${a.slug}`}
                className={`group overflow-hidden border border-white/10 bg-white/5 ${
                  i % 2 === 1 ? "mt-8" : ""
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={a.image}
                  alt={a.title}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="relative z-10 border-y border-white/10 bg-white/[0.02]">
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
              <h3 className="font-display text-xl text-accent">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured works */}
      <section className="relative z-10 mx-auto max-w-6xl px-5 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-accent">
              Featured
            </p>
            <h2 className="mt-2 font-display text-4xl">Latest work</h2>
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
      <section className="relative z-10 border-y border-white/10 bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-4xl">
              Commission a piece
            </h2>
            <p className="mt-3 max-w-md text-stone">
              Want something made for your space? Titan takes a limited number of
              commissions each year — tell us what you have in mind.
            </p>
          </div>
          <Link href="/contact" className="btn btn-primary">
            Start a commission
          </Link>
        </div>
      </section>
    </>
  );
}
