"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { GALLERY } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Wave } from "@/components/ui/Wave";
import { Birds, CloudRainbow } from "@/components/ui/Doodles";
import { CaretLeft, CaretRight, MagnifyingGlassPlus, X } from "@phosphor-icons/react/dist/ssr";
import { fadeUp, inView, stagger } from "@/lib/motion";

const IMAGES = GALLERY.images;

export function Gallery() {
  const scroller = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<number | null>(null);

  const scrollByCards = (dir: number) =>
    scroller.current?.scrollBy({ left: dir * 320, behavior: "smooth" });

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(
    () => setOpen((i) => (i === null ? i : (i - 1 + IMAGES.length) % IMAGES.length)),
    []
  );
  const next = useCallback(() => setOpen((i) => (i === null ? i : (i + 1) % IMAGES.length)), []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  return (
    <section id="gallery" className="bg-sage-soft relative pt-20">
      <Birds className="absolute top-24 left-[6%] hidden w-16 opacity-70 md:block" />
      <CloudRainbow className="floaty absolute top-20 right-[7%] hidden w-20 opacity-80 md:block" />

      <div className="mx-auto max-w-[1180px] px-6">
        <SectionHeading
          badge={GALLERY.badge}
          title={GALLERY.title}
          titleBold={GALLERY.titleBold}
          subtitle={GALLERY.subtitle}
        />
      </div>

      {/* Simple image cards, click to open */}
      <motion.div
        ref={scroller}
        variants={stagger(0.07)}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:px-[max(1.5rem,calc((100vw-1180px)/2))]"
      >
        {IMAGES.map((img, i) => (
          <motion.button
            key={img.src}
            variants={fadeUp}
            onClick={() => setOpen(i)}
            aria-label={`Open ${img.title}`}
            className="group bg-cream-deep shadow-medium relative aspect-[3/4] w-[230px] shrink-0 snap-start overflow-hidden rounded-3xl"
          >
            <Image
              src={img.src}
              alt={img.title}
              fill
              unoptimized
              sizes="230px"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="bg-charcoal/0 group-hover:bg-charcoal/25 absolute inset-0 transition-colors duration-300" />
            <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-charcoal grid h-11 w-11 place-items-center rounded-full bg-white/90">
                <MagnifyingGlassPlus size={20} weight="bold" />
              </span>
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* Carousel controls */}
      <div className="mt-6 flex justify-center gap-3">
        <button
          onClick={() => scrollByCards(-1)}
          aria-label="Previous photos"
          className="bg-charcoal shadow-soft grid h-11 w-11 place-items-center rounded-full text-white transition hover:brightness-110 active:scale-95"
        >
          <CaretLeft size={18} weight="bold" />
        </button>
        <button
          onClick={() => scrollByCards(1)}
          aria-label="More photos"
          className="bg-charcoal shadow-soft grid h-11 w-11 place-items-center rounded-full text-white transition hover:brightness-110 active:scale-95"
        >
          <CaretRight size={18} weight="bold" />
        </button>
      </div>

      <Wave fill="cream" className="mt-14" />

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            className="bg-charcoal/80 fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={IMAGES[open].title}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/30"
            >
              <X size={22} weight="bold" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
              className="absolute left-3 grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/30 sm:left-6"
            >
              <CaretLeft size={24} weight="bold" />
            </button>

            <motion.div
              key={open}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative h-[80vh] w-[88vw] max-w-[920px]"
            >
              <Image
                src={IMAGES[open].src}
                alt={IMAGES[open].title}
                fill
                unoptimized
                sizes="90vw"
                className="rounded-xl object-contain"
              />
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
              className="absolute right-3 grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/30 sm:right-6"
            >
              <CaretRight size={24} weight="bold" />
            </button>

            <p className="rounded-pill absolute bottom-5 left-1/2 -translate-x-1/2 bg-white/15 px-4 py-1.5 text-[0.85rem] font-medium text-white">
              {IMAGES[open].title} · {open + 1} / {IMAGES.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
