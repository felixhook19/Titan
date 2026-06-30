"use client";

import { useReducedMotion } from "framer-motion";

export function Marquee({ items }: { items: string[] }) {
  const reduce = useReducedMotion();
  const row = [...items, ...items];

  return (
    <div className="select-none overflow-hidden border-y border-white/10 bg-white/[0.02] py-4">
      <div
        className={`flex w-max items-center gap-10 whitespace-nowrap ${
          reduce ? "" : "animate-marquee"
        }`}
      >
        {row.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display text-2xl italic text-stone/70"
          >
            {t}
            <span className="text-sm not-italic text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
