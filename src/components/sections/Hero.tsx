"use client";

import { motion } from "motion/react";
import { HERO } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Wave } from "@/components/ui/Wave";
import { Blob, DashedConnector, Moon, Rocket, StarBurst } from "@/components/ui/Doodles";
import { fadeUp, inView, stagger } from "@/lib/motion";
import { MapPin } from "@phosphor-icons/react/dist/ssr";

export function Hero() {
  return (
    <section id="top" className="bg-cream relative overflow-hidden pt-10">
      {/* Floating doodles */}
      <StarBurst
        className="floaty absolute top-[16%] left-[6%] hidden w-9 sm:block"
        style={{ "--r": "-8deg" } as React.CSSProperties}
      />
      <Moon className="floaty slow absolute top-[26%] left-[12%] hidden w-14 md:block" />
      <Rocket
        className="floaty absolute top-[18%] right-[7%] hidden w-16 sm:block"
        style={{ "--r": "10deg" } as React.CSSProperties}
      />

      <div className="relative mx-auto max-w-[1180px] px-6">
        {/* Centered intro */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-[760px] flex-col items-center text-center"
        >
          <motion.div variants={fadeUp}>
            <Badge>
              <MapPin size={13} weight="fill" className="text-sage-deep" />
              {HERO.badge}
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-charcoal mt-5 text-[clamp(1.9rem,4.4vw,3.1rem)] leading-[1.12] font-normal"
          >
            {HERO.titleLight} <span className="font-semibold">{HERO.titleBold}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-ink-soft mt-4 max-w-[48ch] text-[0.97rem] leading-relaxed"
          >
            {HERO.subtitle}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-wrap items-center justify-center gap-3"
          >
            <Button href="#contact" arrow>
              {HERO.ctaPrimary}
            </Button>
            <Button href="#services" variant="link">
              {HERO.ctaSecondary}
            </Button>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            className="mt-6 flex flex-wrap items-center justify-center gap-2.5"
          >
            {HERO.chips.map((c) => (
              <li
                key={c}
                className="rounded-pill bg-cream-deep text-charcoal px-3.5 py-1.5 text-[0.76rem] font-medium"
              >
                {c}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Photo band */}
        <div className="relative mt-10 grid grid-cols-1 items-end gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-2">
          <Blob fill="#f3e2c2" className="absolute bottom-0 -left-10 -z-0 h-56 w-56 opacity-70" />
          <Blob fill="#f6ddc9" className="absolute -right-10 bottom-4 -z-0 h-56 w-56 opacity-70" />

          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={inView}
            transition={{ duration: 0.7 }}
            className="relative z-10 mx-auto w-full max-w-[300px]"
          >
            <ImageSlot label="Child photo (left)" shape="arch" tint="blush" aspect="3 / 4" />
          </motion.div>

          <DashedConnector className="z-0 hidden h-24 w-[220px] self-center md:block" />

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={inView}
            transition={{ duration: 0.7 }}
            className="relative z-10 mx-auto w-full max-w-[300px]"
          >
            <ImageSlot label="Child photo (right)" shape="arch" tint="clay" aspect="3 / 4" />
          </motion.div>
        </div>
      </div>

      <Wave fill="sage" className="mt-[-10px] -mb-[1px]" />
    </section>
  );
}
