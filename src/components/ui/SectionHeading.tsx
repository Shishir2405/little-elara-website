"use client";

import { motion } from "motion/react";
import { fadeUp, inView, stagger } from "@/lib/motion";
import { Badge } from "./Badge";

export function SectionHeading({
  badge,
  title,
  titleBold,
  subtitle,
  align = "center",
  light = false,
}: {
  badge?: string;
  title: string;
  titleBold?: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <motion.div
      variants={stagger(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      className={`flex flex-col gap-3 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
    >
      {badge && (
        <motion.div variants={fadeUp}>
          <Badge>{badge}</Badge>
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        className={`max-w-[20ch] text-[clamp(1.5rem,3vw,2.15rem)] font-normal ${light ? "text-cream" : "text-charcoal"}`}
      >
        {title} {titleBold && <span className="text-highlight font-semibold">{titleBold}</span>}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`max-w-[52ch] text-[0.95rem] leading-relaxed ${light ? "text-cream/70" : "text-ink-soft"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
