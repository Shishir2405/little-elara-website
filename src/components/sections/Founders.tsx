"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, X } from "@phosphor-icons/react/dist/ssr";
import { FOUNDERS } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { EASE, fadeUp, inView, stagger } from "@/lib/motion";

type Person = (typeof FOUNDERS.people)[number];

export function Founders() {
  const [open, setOpen] = useState<Person | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="mx-auto max-w-[1180px] px-6 pb-4">
      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="text-center"
      >
        <motion.div variants={fadeUp}>
          <Badge>{FOUNDERS.badge}</Badge>
        </motion.div>
        <motion.h3
          variants={fadeUp}
          className="text-charcoal mt-3 text-[clamp(1.35rem,3vw,2rem)] font-normal"
        >
          {FOUNDERS.title}{" "}
          <span className="text-highlight font-semibold">{FOUNDERS.titleBold}</span>
        </motion.h3>
        <motion.p
          variants={fadeUp}
          className="text-ink-soft mx-auto mt-2 max-w-[56ch] text-[0.88rem]"
        >
          {FOUNDERS.note}
        </motion.p>
      </motion.div>

      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="mt-8 grid gap-6 md:grid-cols-2"
      >
        {FOUNDERS.people.map((p) => (
          <motion.article
            key={p.name}
            variants={fadeUp}
            className="border-border-soft shadow-soft flex flex-col gap-4 rounded-lg border bg-white p-5 sm:flex-row sm:p-6"
          >
            <div className="mx-auto w-32 shrink-0 sm:mx-0 sm:w-28">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src={p.photo}
                  alt={p.name}
                  fill
                  unoptimized
                  sizes="160px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-charcoal text-[1.15rem] font-semibold">{p.name}</h4>
              <p className="text-sky-deep text-[0.82rem] font-medium">{p.role}</p>
              <p className="text-ink-soft mt-1 text-[0.74rem]">{p.tagline}</p>
              <p className="text-ink-soft mt-3 line-clamp-3 text-[0.86rem] leading-relaxed">
                {p.short}
              </p>
              <button
                onClick={() => setOpen(p)}
                className="group text-highlight-deep mt-3 inline-flex items-center gap-1.5 text-[0.85rem] font-semibold"
              >
                Read full profile
                <ArrowRight
                  size={15}
                  weight="bold"
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* Profile modal with reading reveal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(null)}
            className="bg-charcoal/55 fixed inset-0 z-[100] flex items-end justify-center backdrop-blur-sm sm:items-center sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={open.name}
          >
            <motion.div
              initial={{ y: reduce ? 0 : 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: reduce ? 0 : 30, opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="bg-cream shadow-lift relative flex max-h-[92vh] w-full max-w-[640px] flex-col overflow-hidden rounded-t-[28px] sm:rounded-[28px]"
            >
              {/* reading progress bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: reduce ? 0 : 0.7, ease: "easeOut" }}
                className="bg-highlight absolute top-0 left-0 z-10 h-1 w-full origin-left"
              />

              {/* header */}
              <div className="border-border-soft flex items-center gap-4 border-b bg-white p-5">
                <div className="ring-sky-soft relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2">
                  <Image
                    src={open.photo}
                    alt={open.name}
                    fill
                    unoptimized
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="text-charcoal text-[1.2rem] font-semibold">{open.name}</h4>
                  <p className="text-sky-deep text-[0.8rem] font-medium">{open.role}</p>
                </div>
                <button
                  onClick={() => setOpen(null)}
                  aria-label="Close"
                  className="bg-cream text-charcoal hover:bg-cream-deep ml-auto grid h-10 w-10 shrink-0 place-items-center rounded-full transition"
                >
                  <X size={20} />
                </button>
              </div>

              {/* body */}
              <motion.div
                variants={stagger(0.07, 0.1)}
                initial="hidden"
                animate="show"
                className="flex-1 overflow-y-auto p-5 sm:p-6"
              >
                <motion.p variants={fadeUp} className="text-ink-soft text-[0.82rem] font-medium">
                  {open.tagline}
                </motion.p>

                {open.bio.map((para, i) => (
                  <motion.p
                    key={i}
                    variants={fadeUp}
                    className="text-charcoal/90 mt-3 text-[0.92rem] leading-relaxed"
                  >
                    {para}
                  </motion.p>
                ))}

                {open.groups.map((g) => (
                  <motion.div key={g.title} variants={fadeUp} className="mt-5">
                    <p className="text-sky-deep text-[0.78rem] font-semibold tracking-wide uppercase">
                      {g.title}
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {g.items.map((it) => (
                        <li
                          key={it}
                          className="rounded-pill text-charcoal shadow-soft bg-white px-3 py-1.5 text-[0.8rem] font-medium"
                        >
                          {it}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}

                <motion.div variants={fadeUp} className="bg-sky-soft mt-6 rounded-lg p-4">
                  <p className="text-sky-deep text-[0.78rem] font-semibold tracking-wide uppercase">
                    Professional Mission
                  </p>
                  <p className="text-charcoal mt-1.5 text-[0.9rem] leading-relaxed">
                    {open.mission}
                  </p>
                </motion.div>

                <motion.blockquote
                  variants={fadeUp}
                  className="border-highlight text-charcoal mt-5 border-l-4 pl-4 text-[1rem] font-medium italic"
                >
                  &ldquo;{open.quote}&rdquo;
                </motion.blockquote>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
