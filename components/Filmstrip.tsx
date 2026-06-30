"use client";

import Link from "next/link";
import { useRef } from "react";
import { artworks, formatPrice } from "@/lib/artworks";

export function Filmstrip() {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: 0 });

  // Mouse drag-to-scroll (touch/trackpad use native scrolling).
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    drag.current = {
      active: true,
      startX: e.clientX,
      startScroll: ref.current.scrollLeft,
      moved: 0,
    };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.active || !ref.current) return;
    const dx = e.clientX - drag.current.startX;
    drag.current.moved = Math.abs(dx);
    ref.current.scrollLeft = drag.current.startScroll - dx;
  };
  const endDrag = () => {
    drag.current.active = false;
  };

  return (
    <div
      ref={ref}
      data-lenis-prevent
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      className="no-scrollbar flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto pb-4 active:cursor-grabbing"
    >
      {artworks.map((a) => (
        <Link
          key={a.slug}
          href={`/art/${a.slug}`}
          data-cursor="view"
          onClick={(e) => {
            // Suppress navigation if the user was dragging.
            if (drag.current.moved > 6) e.preventDefault();
          }}
          className="group w-[78vw] shrink-0 snap-start sm:w-[46vw] lg:w-[31vw]"
        >
          <div className="overflow-hidden border border-white/10 bg-white/5 transition-shadow duration-500 group-hover:shadow-[0_0_50px_-10px_rgba(180,241,30,0.4)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={a.image}
              alt={a.title}
              draggable={false}
              className="aspect-[3/4] w-full select-none object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.05]"
            />
          </div>
          <div className="mt-3 flex items-start justify-between gap-3">
            <div>
              <p className="font-display text-lg leading-tight transition-colors group-hover:text-accent">
                {a.title}
              </p>
              <p className="text-sm text-stone">{a.medium}</p>
            </div>
            <p className="whitespace-nowrap text-sm text-stone">
              {formatPrice(a.price)}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
