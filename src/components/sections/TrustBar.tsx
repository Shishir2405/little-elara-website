"use client";

import { motion } from "motion/react";
import { TRUST } from "@/lib/constants";
import { Icon } from "@/components/ui/Icon";
import { Wave } from "@/components/ui/Wave";
import { fadeUp, inView, stagger } from "@/lib/motion";
import { tintCard } from "@/lib/tints";

export function TrustBar() {
  return (
    <section className="bg-sage relative pt-10">
      <div className="mx-auto max-w-[1180px] px-6">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="flex flex-col items-center text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-charcoal text-[clamp(1.4rem,3vw,2rem)] font-normal"
          >
            {TRUST.title} <span className="font-semibold">{TRUST.titleBold}</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-charcoal/70 mt-2 max-w-[46ch] text-[0.9rem]">
            {TRUST.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-9 grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {TRUST.items.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className={`shadow-soft flex flex-col gap-4 rounded-lg p-5 ${tintCard(item.tint)}`}
            >
              <span className="bg-cream/70 text-charcoal grid h-11 w-11 place-items-center rounded-full">
                <Icon name={item.icon} size={20} weight="duotone" />
              </span>
              <h3 className="text-charcoal text-[0.98rem] leading-snug font-semibold">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Wave fill="cream" className="mt-12" />
    </section>
  );
}
