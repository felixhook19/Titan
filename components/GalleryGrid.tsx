"use client";

import { useMemo, useState } from "react";
import { artworks, categories } from "@/lib/artworks";
import { ArtworkCard } from "@/components/ArtworkCard";
import { Reveal } from "@/components/Reveal";

type Sort = "featured" | "price-asc" | "price-desc";

export function GalleryGrid() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [sort, setSort] = useState<Sort>("featured");

  const visible = useMemo(() => {
    let list = artworks.filter(
      (a) => category === "All" || a.category === category
    );
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc")
      list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [category, sort]);

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-3 py-1.5 text-sm uppercase tracking-widest transition-colors ${
                category === c
                  ? "bg-accent text-canvas"
                  : "text-stone hover:text-accent"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 text-sm text-stone">
          Sort
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="border border-white/15 bg-canvas px-2 py-1.5 text-sm text-ink outline-none focus:border-accent"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
          </select>
        </label>
      </div>

      {visible.length === 0 ? (
        <p className="py-20 text-center text-stone">
          No works in this category yet.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3">
          {visible.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 0.06}>
              <ArtworkCard artwork={a} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
