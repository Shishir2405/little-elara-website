"use client";

import { motion } from "motion/react";
import { SERVICES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Wave } from "@/components/ui/Wave";
import { fadeUp, inView, stagger } from "@/lib/motion";
import { tintSoft } from "@/lib/tints";

export function Services() {
  return (
    <section id="services" className="bg-cream relative pt-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <SectionHeading
          badge={SERVICES.badge}
          title={SERVICES.title}
          titleBold={SERVICES.titleBold}
          subtitle={SERVICES.subtitle}
        />

        <motion.div
          variants={stagger(0.09)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.items.map((s) => (
            <motion.article
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="border-border-soft shadow-soft flex flex-col overflow-hidden rounded-lg border bg-white"
            >
              <div className="p-3 pb-0">
                <ImageSlot label={s.title} shape="arch" tint={s.tint} aspect="4 / 3" />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <span
                  className={`text-charcoal grid h-10 w-10 place-items-center rounded-full ${tintSoft(s.tint)}`}
                >
                  <Icon name={s.icon} size={19} weight="duotone" />
                </span>
                <h3 className="text-charcoal mt-1 text-[1.02rem] font-semibold">{s.title}</h3>
                <p className="text-ink-soft text-[0.88rem] leading-relaxed">{s.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <Wave fill="charcoal" className="mt-16" />
    </section>
  );
}
