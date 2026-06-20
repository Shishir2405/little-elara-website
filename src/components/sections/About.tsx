"use client";

import { motion } from "motion/react";
import { ABOUT } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Wave } from "@/components/ui/Wave";
import { Birds } from "@/components/ui/Doodles";
import { fadeUp, fromLeft, fromRight, inView, stagger } from "@/lib/motion";
import { tintSoft } from "@/lib/tints";

export function About() {
  return (
    <section id="about" className="bg-charcoal text-cream relative pt-10">
      <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-6 py-8 md:grid-cols-[0.85fr_1.15fr]">
        {/* Portrait */}
        <motion.div
          variants={fromLeft}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="relative mx-auto w-full max-w-[340px]"
        >
          <Birds className="absolute -top-6 -right-6 w-16 opacity-80" />
          <ImageSlot label="Founder / team portrait" shape="arch" tint="sand" aspect="3 / 4" />
        </motion.div>

        {/* Copy */}
        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={inView}>
          <motion.div variants={fadeUp}>
            <Badge className="border-cream/20 bg-cream/10 text-cream/80">{ABOUT.badge}</Badge>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-cream mt-4 text-[clamp(1.5rem,3vw,2.1rem)] font-normal"
          >
            {ABOUT.title} <span className="font-semibold">{ABOUT.titleBold}</span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="bg-cream/[0.06] text-cream/75 mt-5 space-y-3 rounded-lg p-5 text-[0.9rem] leading-relaxed"
          >
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>

          {/* Pillars */}
          <motion.ul variants={fromRight} className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {ABOUT.pillars.map((pl) => (
              <li key={pl.label} className="flex flex-col items-center gap-2 text-center">
                <span
                  className={`text-charcoal grid h-11 w-11 place-items-center rounded-full ${tintSoft(pl.tint)}`}
                >
                  <Icon name={pl.icon} size={20} weight="duotone" />
                </span>
                <span className="text-cream/80 text-[0.78rem] font-medium">{pl.label}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      <Wave fill="cream" className="mt-6" />
    </section>
  );
}
