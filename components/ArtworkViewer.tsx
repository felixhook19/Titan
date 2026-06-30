"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type ViewerItem = {
  slug: string;
  title: string;
  image: string;
  medium: string;
};

export function ArtworkViewer({
  items,
  startSlug,
}: {
  items: ViewerItem[];
  startSlug: string;
}) {
  const startIndex = Math.max(
    0,
    items.findIndex((it) => it.slug === startSlug)
  );
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(startIndex);

  const next = useCallback(
    () => setIdx((p) => (p + 1) % items.length),
    [items.length]
  );
  const prev = useCallback(
    () => setIdx((p) => (p - 1 + items.length) % items.length),
    [items.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, next, prev]);

  const hero = items[startIndex];
  const cur = items[idx];

  return (
    <>
      <button
        onClick={() => {
          setIdx(startIndex);
          setOpen(true);
        }}
        className="group relative block w-full cursor-zoom-in overflow-hidden border border-white/10 bg-white/5"
        aria-label={`Expand ${hero.title}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={hero.image}
          alt={hero.title}
          className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span className="absolute bottom-3 right-3 border border-white/20 bg-canvas/70 px-2 py-1 text-[10px] uppercase tracking-widest text-ink opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
          Expand ⤢
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-5 top-5 z-10 text-sm uppercase tracking-widest text-stone transition-colors hover:text-accent"
            >
              Close ✕
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous work"
              className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center text-2xl text-stone transition-colors hover:text-accent md:left-8"
            >
              ‹
            </button>

            <div
              className="flex max-h-[88vh] flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={cur.slug}
                  src={cur.image}
                  alt={cur.title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="max-h-[80vh] max-w-[90vw] object-contain"
                />
              </AnimatePresence>
              <p className="mt-4 text-center text-sm text-stone">
                <span className="font-display text-lg text-ink">
                  {cur.title}
                </span>{" "}
                · {cur.medium}
              </p>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next work"
              className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center text-2xl text-stone transition-colors hover:text-accent md:right-8"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
