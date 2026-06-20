"use client";

import { motion } from "motion/react";
import { PROGRESS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Wave } from "@/components/ui/Wave";
import { Squiggle } from "@/components/ui/Doodles";
import { fadeUp, inView, stagger } from "@/lib/motion";
import { tintSoft } from "@/lib/tints";

export function Progress() {
  return (
    <section id="progress" className="bg-cream relative pt-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <SectionHeading
          badge={PROGRESS.badge}
          title={PROGRESS.title}
          titleBold={PROGRESS.titleBold}
          subtitle={PROGRESS.subtitle}
        />

        <div className="relative mt-14">
          <Squiggle className="absolute top-10 left-0 hidden w-full opacity-40 lg:block" />
          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {PROGRESS.milestones.map((m, i) => (
              <motion.div
                key={m.title}
                variants={fadeUp}
                className="border-border-soft shadow-soft flex flex-col items-center gap-3 rounded-lg border bg-white p-6 text-center lg:mt-0"
                style={{ marginTop: `calc(${(3 - i) * 14}px)` }}
              >
                <span
                  className={`text-charcoal grid h-12 w-12 place-items-center rounded-full ${tintSoft(m.tint)}`}
                >
                  <Icon name={m.icon} size={22} weight="duotone" />
                </span>
                <h3 className="text-charcoal text-[0.98rem] font-semibold">{m.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <Wave fill="clay" className="mt-16" />
    </section>
  );
}
