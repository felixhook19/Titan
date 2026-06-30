import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Atelier is a curated online gallery representing a small roster of contemporary artists.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-sm uppercase tracking-[0.25em] text-accent">About</p>
      <h1 className="mt-2 font-display text-5xl">A small gallery, carefully kept.</h1>

      <div className="mt-8 space-y-6 text-lg leading-relaxed text-stone">
        <p>
          Atelier began with a simple idea: that owning original art should feel
          personal, not intimidating. We represent a small roster of
          contemporary artists working in paint, photography, sculpture and
          print, and we show their work the way it deserves to be seen — slowly,
          and in good light.
        </p>
        <p>
          Every piece in the collection is either an original or a hand-numbered
          limited edition. We work directly with each artist, so a fair share of
          every sale goes back to the studio. When you buy a work, it arrives
          with a signed certificate of authenticity and the story of how it was
          made.
        </p>
        <p>
          We pack each piece by hand to museum standards and ship it insured,
          anywhere in the world. And if it isn&apos;t right for your space, you
          have fourteen days to send it back.
        </p>
      </div>

      <div className="mt-12 grid gap-6 border-t border-black/10 pt-10 sm:grid-cols-3">
        {[
          { stat: "30+", label: "Works in the collection" },
          { stat: "4", label: "Represented artists" },
          { stat: "100%", label: "Authenticated originals" },
        ].map((s) => (
          <div key={s.label}>
            <p className="font-display text-4xl">{s.stat}</p>
            <p className="mt-1 text-sm text-stone">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link
          href="/gallery"
          className="inline-block bg-ink px-7 py-3 text-sm uppercase tracking-widest text-canvas transition-colors hover:bg-accent"
        >
          See the collection
        </Link>
      </div>
    </section>
  );
}
