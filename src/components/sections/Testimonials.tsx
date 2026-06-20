"use client";

import { motion } from "motion/react";
import { TESTIMONIALS } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Star } from "@phosphor-icons/react/dist/ssr";
import { Wave } from "@/components/ui/Wave";
import { fadeUp, inView, stagger } from "@/lib/motion";

export function Testimonials() {
  return (
    <section className="bg-clay relative pt-12">
      <div className="mx-auto max-w-[1180px] px-6">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUp}>
            <Badge className="border-charcoal/15 bg-cream/50 text-charcoal/80">
              {TESTIMONIALS.badge}
            </Badge>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-charcoal mt-4 text-[clamp(1.5rem,3vw,2.1rem)] font-normal"
          >
            {TESTIMONIALS.title} <span className="font-semibold">{TESTIMONIALS.titleBold}</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-10 grid gap-5 md:grid-cols-3"
        >
          {TESTIMONIALS.items.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              className="shadow-medium flex flex-col gap-4 rounded-lg bg-white p-6"
            >
              <div className="text-clay flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} weight="fill" />
                ))}
              </div>
              <blockquote className="text-charcoal text-[0.92rem] leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3">
                <span className="bg-cream-deep text-charcoal grid h-10 w-10 place-items-center rounded-full text-[0.95rem] font-semibold">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="text-charcoal block text-[0.9rem] font-semibold">{t.name}</span>
                  <span className="text-ink-soft block text-[0.78rem]">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>

      <Wave fill="cream" className="mt-14" />
    </section>
  );
}
