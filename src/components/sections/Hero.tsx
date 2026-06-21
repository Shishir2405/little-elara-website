"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { HERO } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Wave } from "@/components/ui/Wave";
import { Blob, HeartTrail, CloudRainbow, Moon, StarBurst } from "@/components/ui/Doodles";
import { fadeUp, stagger } from "@/lib/motion";

export function Hero() {
  const words = HERO.titleLight.split(" ");

  return (
    <section id="top" className="bg-cream relative overflow-hidden pt-8 sm:pt-10">
      {/* Faded graph-paper grid, stronger toward the sides */}
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />

      {/* Floating doodles */}
      <StarBurst
        className="floaty absolute top-[13%] left-[5%] hidden w-9 sm:block"
        style={{ "--r": "-8deg" } as React.CSSProperties}
      />
      <Moon className="floaty slow absolute top-[26%] left-[10%] hidden w-14 md:block" />
      <CloudRainbow className="floaty absolute top-[14%] right-[6%] hidden w-20 sm:block" />

      {/* Centered intro (sits above the kids) */}
      <div className="relative z-20 mx-auto max-w-[1180px] px-6 pb-[clamp(160px,20vw,260px)]">
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <Badge>{HERO.badge}</Badge>
          </motion.div>

          <h1 className="text-charcoal mt-5 text-[clamp(1.4rem,4.6vw,3.2rem)] leading-[1.1] font-normal">
            <motion.span
              variants={stagger(0.06)}
              initial="hidden"
              animate="show"
              className="inline-block"
            >
              {words.map((w, i) => (
                <motion.span key={i} variants={fadeUp} className="mr-[0.28em] inline-block">
                  {w}
                </motion.span>
              ))}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-highlight font-semibold"
            >
              {HERO.titleHighlight}
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="inline-block"
            >
              {HERO.titleEnd}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-ink-soft mt-4 max-w-[52ch] text-[0.88rem] leading-relaxed sm:text-[0.97rem]"
          >
            {HERO.subtitle.map((seg, j) =>
              typeof seg === "string" ? (
                <span key={j}>{seg}</span>
              ) : (
                <span key={j} className="text-sky-deep font-semibold">
                  {seg.b}
                </span>
              )
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-3"
          >
            <Button href="#contact" arrow>
              {HERO.ctaPrimary}
            </Button>
            <Button href="#programs" variant="secondary">
              {HERO.ctaSecondary}
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-2.5"
          >
            {HERO.chips.map((c) => (
              <li
                key={c}
                className="rounded-pill text-charcoal shadow-soft bg-white px-3.5 py-1.5 text-[0.76rem] font-medium"
              >
                {c}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Warm colour shapes behind the kids (sit above the wave) */}
      <Blob fill="#fbde8a" className="absolute bottom-4 left-[2%] z-0 h-56 w-56 opacity-70" />
      <Blob fill="#fbc9a8" className="absolute bottom-8 left-[12%] z-0 h-40 w-40 opacity-60" />
      <Blob fill="#fbc9a8" className="absolute right-[2%] bottom-4 z-0 h-56 w-56 opacity-70" />
      <Blob fill="#aedfb6" className="absolute right-[12%] bottom-8 z-0 h-40 w-40 opacity-55" />

      {/* Flowing dotted line with red hearts, connecting the two kids */}
      <HeartTrail className="absolute bottom-[15%] left-1/2 hidden w-[60%] -translate-x-1/2 md:block" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.8 }}
        className="absolute bottom-0 left-0 z-10 sm:left-[3%]"
      >
        <Image
          src="/images/hero-1.png"
          alt="A happy child in heart-shaped sunglasses"
          width={1024}
          height={1536}
          priority
          className="h-auto w-[clamp(100px,24vw,330px)] drop-shadow-[0_18px_24px_rgba(30,127,174,0.2)]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.68, duration: 0.8 }}
        className="absolute right-0 bottom-0 z-10 sm:right-[3%]"
      >
        <Image
          src="/images/hero-2.png"
          alt="A smiling toddler with a bow headband"
          width={1024}
          height={1536}
          priority
          className="h-auto w-[clamp(100px,24vw,330px)] drop-shadow-[0_18px_24px_rgba(30,127,174,0.2)]"
        />
      </motion.div>

      {/* Two-tone wavy ground: sage band peeking behind the soft-blue transition */}
      <Wave fill="sage" className="absolute bottom-3 left-0 z-0 w-full opacity-80" />
      <Wave fill="sky-soft" className="absolute bottom-0 left-0 z-0 w-full" />
    </section>
  );
}
