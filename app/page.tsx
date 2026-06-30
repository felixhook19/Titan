import Link from "next/link";
import { artworks } from "@/lib/artworks";
import { HeroShowcase } from "@/components/HeroShowcase";
import { Marquee } from "@/components/Marquee";
import { Filmstrip } from "@/components/Filmstrip";
import { Reveal } from "@/components/Reveal";

export default function HomePage() {
  const marqueeItems = artworks.map((a) => a.title);

  return (
    <>
      <HeroShowcase />

      <Marquee items={marqueeItems} />

      {/* Value props */}
      <section className="relative z-10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3">
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
          ].map((f, idx) => (
            <Reveal key={f.title} delay={idx * 0.08}>
              <h3 className="font-display text-xl text-accent">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{f.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Horizontal filmstrip showcase */}
      <section className="relative z-10 border-t border-white/10 py-16">
        <Reveal className="mx-auto mb-8 flex max-w-6xl items-end justify-between px-5">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-accent">
              The Collection
            </p>
            <h2 className="mt-2 font-display text-4xl">Drag to explore</h2>
          </div>
          <Link
            href="/gallery"
            className="hidden text-sm uppercase tracking-widest text-stone hover:text-accent sm:block"
          >
            View all →
          </Link>
        </Reveal>

        <div className="px-5">
          <Filmstrip />
        </div>
      </section>

      {/* CTA band */}
      <section className="relative z-10 border-y border-white/10 bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between">
          <Reveal>
            <h2 className="font-display text-4xl">Commission a piece</h2>
            <p className="mt-3 max-w-md text-stone">
              Want something made for your space? Titan takes a limited number of
              commissions each year — tell us what you have in mind.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/contact" className="btn btn-primary">
              Start a commission
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
