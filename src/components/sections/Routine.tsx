"use client";

import { motion } from "motion/react";
import { ROUTINE } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { Wave } from "@/components/ui/Wave";
import { fadeUp, inView, stagger } from "@/lib/motion";

const TINTS = ["sage", "clay", "sand", "blush"] as const;
const SOFT: Record<string, string> = {
  sage: "bg-sage",
  clay: "bg-clay",
  sand: "bg-sand",
  blush: "bg-blush",
};

export function Routine() {
  return (
    <section id="routine" className="bg-charcoal text-cream relative pt-12">
      <div className="mx-auto max-w-[1180px] px-6">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUp}>
            <Badge className="border-cream/20 bg-cream/10 text-cream/80">{ROUTINE.badge}</Badge>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-cream mt-4 text-[clamp(1.5rem,3vw,2.1rem)] font-normal"
          >
            {ROUTINE.title} <span className="font-semibold">{ROUTINE.titleBold}</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-cream/70 mt-3 max-w-[52ch] text-[0.92rem]">
            {ROUTINE.subtitle}
          </motion.p>
        </motion.div>
      </div>

      {/* Horizontal scroll timeline */}
      <div className="no-scrollbar mt-12 overflow-x-auto pb-2">
        <motion.ol
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto flex w-max gap-5 px-6"
        >
          {ROUTINE.stops.map((stop, i) => {
            const tint = TINTS[i % TINTS.length];
            return (
              <motion.li
                key={stop.time}
                variants={fadeUp}
                className="bg-cream/[0.06] relative flex w-[210px] flex-col gap-3 rounded-lg p-5"
              >
                <span
                  className={`text-charcoal grid h-11 w-11 place-items-center rounded-full ${SOFT[tint]}`}
                >
                  <Icon name={stop.icon} size={20} weight="duotone" />
                </span>
                <span className="text-clay text-[0.85rem] font-semibold">{stop.time}</span>
                <span className="text-cream/85 text-[0.92rem] leading-snug">{stop.label}</span>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>

      <Wave fill="cream" className="mt-12" />
    </section>
  );
}
