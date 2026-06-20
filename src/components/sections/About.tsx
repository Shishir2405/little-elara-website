"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ABOUT } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Wave } from "@/components/ui/Wave";
import { Birds, Blob } from "@/components/ui/Doodles";
import { CheckCircle, HeartStraight } from "@phosphor-icons/react/dist/ssr";
import { fadeUp, fromLeft, fromRight, inView, stagger } from "@/lib/motion";

export function About() {
  return (
    <section id="about" className="bg-sky-soft relative pt-8">
      <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-6 py-10 md:grid-cols-[0.9fr_1.1fr]">
        {/* Photo — cut-out educator on a coloured arch */}
        <motion.div
          variants={fromLeft}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="relative mx-auto w-full max-w-[420px]"
        >
          <Birds className="absolute -top-6 -right-3 z-20 w-16 opacity-80" />
          <Blob fill="#fbde8a" className="absolute top-8 -left-6 -z-10 h-36 w-36 opacity-70" />
          <Blob fill="#f7b7d3" className="absolute -right-4 bottom-24 -z-10 h-28 w-28 opacity-60" />

          <div className="relative">
            {/* coloured arch panel behind the woman */}
            <div
              aria-hidden
              className="from-blush-soft to-sand absolute inset-x-2 top-8 bottom-0 rounded-[200px_200px_36px_36px] bg-linear-to-b"
            />
            {/* cut-out educator in front */}
            <Image
              src="/images/section-2.png"
              alt="A caring Little Elara Steps educator"
              width={1024}
              height={1536}
              unoptimized
              className="relative z-10 mx-auto h-auto w-[92%] object-contain drop-shadow-[0_18px_24px_rgba(30,127,174,0.18)]"
            />
          </div>

          {/* floating tagline card */}
          <div className="floaty slow shadow-lift absolute -bottom-3 -left-3 z-20 flex max-w-[220px] items-center gap-3 rounded-2xl bg-white p-3.5">
            <span className="bg-highlight-soft text-highlight-deep grid h-10 w-10 shrink-0 place-items-center rounded-full">
              <HeartStraight size={20} weight="fill" />
            </span>
            <span className="text-charcoal text-[0.82rem] leading-snug font-semibold">
              Every little step matters.
            </span>
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={inView}>
          <motion.div variants={fadeUp}>
            <Badge>{ABOUT.badge}</Badge>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-charcoal mt-4 text-[clamp(1.5rem,3.2vw,2.2rem)] font-normal"
          >
            {ABOUT.title} <span className="text-highlight font-semibold">{ABOUT.titleBold}</span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="text-ink-soft mt-4 space-y-3 text-[0.95rem] leading-relaxed"
          >
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>

          {/* Focus chips */}
          <motion.div variants={fromRight} className="mt-6">
            <p className="text-sky-deep text-[0.82rem] font-semibold tracking-wide uppercase">
              {ABOUT.focusTitle}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2.5">
              {ABOUT.focus.map((f) => (
                <li
                  key={f}
                  className="rounded-pill text-charcoal shadow-soft flex items-center gap-1.5 bg-white px-3.5 py-1.5 text-[0.82rem] font-medium"
                >
                  <CheckCircle size={15} weight="fill" className="text-sage-deep" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Founders */}
      <div className="mx-auto max-w-[1180px] px-6 pb-6">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="border-border-soft shadow-soft rounded-lg border bg-white p-6 sm:p-8"
        >
          <motion.div variants={fadeUp} className="text-center">
            <h3 className="text-charcoal text-[1.3rem] font-semibold">{ABOUT.foundersTitle}</h3>
            <p className="text-ink-soft mx-auto mt-2 max-w-[56ch] text-[0.9rem]">
              {ABOUT.foundersNote}
            </p>
          </motion.div>

          <div className="mt-7 grid gap-6 sm:grid-cols-2">
            {ABOUT.founders.map((f) => (
              <motion.div
                key={f.role}
                variants={fadeUp}
                className="bg-cream flex items-center gap-4 rounded-md p-4"
              >
                <div className="w-24 shrink-0">
                  {/* TODO(client): add founder photo */}
                  <ImageSlot label="Photo" shape="circle" tint="blush" aspect="1 / 1" />
                </div>
                <div>
                  <h4 className="text-charcoal text-[1.02rem] font-semibold">{f.name}</h4>
                  <p className="text-sky-deep text-[0.8rem] font-medium">{f.role}</p>
                  <p className="text-ink-soft mt-1.5 text-[0.84rem] leading-relaxed">{f.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Wave fill="cream" className="mt-8" />
    </section>
  );
}
