"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { artworks, formatPrice } from "@/lib/artworks";

const slides = artworks.filter((a) => a.available).slice(0, 5);
const INTERVAL = 6000;

export function HeroShowcase() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), INTERVAL);
    return () => clearInterval(t);
  }, []);

  const cur = slides[i];

  return (
    <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
      {/* Rotating, slowly-zooming artwork backdrop */}
      <AnimatePresence>
        <motion.div
          key={cur.slug}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cur.image}
            alt={cur.title}
            className={`h-full w-full object-cover ${
              reduce ? "" : "hero-kenburns"
            }`}
          />
        </motion.div>
      </AnimatePresence>

      {/* Legibility scrims */}
      <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/45 to-canvas/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-canvas/85 via-canvas/30 to-transparent" />

      {/* Headline */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-5">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-sm uppercase tracking-[0.3em] text-accent"
        >
          Contemporary Art Gallery
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 max-w-3xl font-display text-6xl leading-[1.0] md:text-8xl"
        >
          Art that <span className="italic text-accent">stares back.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 max-w-md text-lg leading-relaxed text-stone"
        >
          Original paintings, mixed media and limited editions — dark,
          psychedelic and unrepeatable.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Link href="/gallery" className="btn btn-primary">
            Enter the gallery
          </Link>
          <Link href="/about" className="btn btn-ghost">
            The studio
          </Link>
        </motion.div>
      </div>

      {/* Now-showing caption + progress ticks */}
      <div className="absolute bottom-6 left-0 right-0 z-10 mx-auto flex max-w-6xl items-end justify-between gap-4 px-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={cur.slug}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
          >
            <Link href={`/art/${cur.slug}`} className="group block">
              <span className="text-[11px] uppercase tracking-[0.25em] text-accent">
                Now showing
              </span>
              <p className="mt-1 text-sm text-stone">
                <span className="font-display text-xl text-ink transition-colors group-hover:text-accent">
                  {cur.title}
                </span>{" "}
                · {formatPrice(cur.price)}
              </p>
            </Link>
          </motion.div>
        </AnimatePresence>

        <div className="flex shrink-0 gap-2 pb-1">
          {slides.map((s, idx) => (
            <button
              key={s.slug}
              onClick={() => setI(idx)}
              aria-label={`Show ${s.title}`}
              className={`h-[3px] w-8 transition-colors ${
                idx === i ? "bg-accent" : "bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
