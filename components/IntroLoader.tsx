"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export function IntroLoader() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (reduce) return;
    if (sessionStorage.getItem("titan-intro")) return;
    sessionStorage.setItem("titan-intro", "1");
    setShow(true);
    const t = setTimeout(() => setShow(false), 1900);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[120] flex flex-col items-center justify-center bg-canvas"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.p
            className="text-2xl font-semibold uppercase text-ink"
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.55em" }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            Titan
          </motion.p>
          <motion.div
            className="mt-5 h-px bg-accent"
            initial={{ width: 0 }}
            animate={{ width: 180 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
