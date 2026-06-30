"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();

  if (reduce) return <>{children}</>;

  return (
    <>
      {/* Curtain that covers, then lifts away to reveal the page */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[90] origin-top bg-canvas"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.65, ease }}
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1], delay: 0.18 }}
      >
        {children}
      </motion.div>
    </>
  );
}
