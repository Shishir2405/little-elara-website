"use client";

import { motion, useScroll, useSpring } from "motion/react";

/* A thin vertical line down the left margin that fills as you scroll,
   stitching the sections into one continuous journey. Desktop only. */
export function ProgressThread() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <div
      aria-hidden
      className="bg-border-soft/60 pointer-events-none fixed top-[20vh] left-6 z-40 hidden h-[60vh] w-[3px] rounded-full xl:block"
    >
      <motion.div
        style={{ scaleY, transformOrigin: "top" }}
        className="bg-sky-deep h-full w-full rounded-full"
      />
    </div>
  );
}
