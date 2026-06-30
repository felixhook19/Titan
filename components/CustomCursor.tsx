"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Variant = "default" | "hover" | "view";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 600, damping: 40, mass: 0.4 });
  const [variant, setVariant] = useState<Variant>("default");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      if (t?.closest("[data-cursor='view']")) setVariant("view");
      else if (t?.closest("a, button, label, input, textarea, select"))
        setVariant("hover");
      else setVariant("default");
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  const size = variant === "view" ? 78 : variant === "hover" ? 46 : 12;

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[130]"
      aria-hidden
    >
      <motion.div
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
        animate={{
          width: size,
          height: size,
          backgroundColor:
            variant === "default" ? "#b4f11e" : "rgba(180,241,30,0.12)",
          borderWidth: variant === "default" ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        style={{ borderColor: "#b4f11e", borderStyle: "solid" }}
      >
        {variant === "view" && (
          <span className="text-[10px] uppercase tracking-widest text-accent">
            View
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
