import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "TITAN is the studio and gallery of Titan — dark, psychedelic and expressionistic work in paint, mixed media and digital print.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-sm uppercase tracking-[0.25em] text-accent">About</p>
      <h1 className="mt-2 font-display text-5xl">
        Faces in the noise.
      </h1>

      <div className="mt-8 space-y-6 text-lg leading-relaxed text-stone">
        <p>
          TITAN is the studio and gallery of <span className="text-ink">Titan</span>
          , an artist working at the edge where portraiture dissolves into pure
          texture. The work is dark and psychedelic — spectral faces, fractured
          colour, frozen figures and invented mythologies, built up in dense,
          restless layers.
        </p>
        <p>
          Each piece is an original painting, a mixed-media work, or a
          hand-numbered limited-edition print. Nothing here is mass-produced.
          When you buy a work it arrives with a signed certificate of
          authenticity and the context of how it was made.
        </p>
        <p>
          Everything is packed by hand to museum standards and shipped insured,
          anywhere in the world. If it isn&apos;t right for your space, you have
          fourteen days to send it back.
        </p>
      </div>

      <div className="mt-12 grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-3">
        {[
          { stat: "10", label: "Works in the collection" },
          { stat: "1", label: "Artist, one obsession" },
          { stat: "100%", label: "Authenticated originals" },
        ].map((s) => (
          <div key={s.label}>
            <p className="font-display text-4xl text-accent">{s.stat}</p>
            <p className="mt-1 text-sm text-stone">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link href="/gallery" className="btn btn-primary">
          See the collection
        </Link>
      </div>
    </section>
  );
}
