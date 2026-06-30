import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse original paintings, photography, sculpture and limited-edition prints available at Atelier.",
};

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <header className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.25em] text-accent">
          The Collection
        </p>
        <h1 className="mt-2 font-display text-5xl">Gallery</h1>
        <p className="mt-4 text-lg leading-relaxed text-stone">
          Every piece is an original or a hand-numbered limited edition. Filter
          by medium, then click through for full details.
        </p>
      </header>

      <div className="mt-10">
        <GalleryGrid />
      </div>
    </section>
  );
}
