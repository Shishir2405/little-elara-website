"use client";

import { motion } from "motion/react";
import { GALLERY } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Wave } from "@/components/ui/Wave";
import { fadeUp, inView, stagger } from "@/lib/motion";

const SPAN: Record<string, string> = {
  tall: "row-span-2",
  wide: "col-span-2",
  square: "",
};
const TINTS = ["sage", "clay", "sand", "blush"];

export function Gallery() {
  return (
    <section id="gallery" className="bg-cream relative pt-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <SectionHeading
          badge={GALLERY.badge}
          title={GALLERY.title}
          titleBold={GALLERY.titleBold}
          subtitle={GALLERY.subtitle}
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-4 md:grid-cols-4"
        >
          {GALLERY.slots.map((slot, i) => (
            <motion.div key={slot.label} variants={fadeUp} className={SPAN[slot.shape] ?? ""}>
              <ImageSlot
                label={slot.label}
                tint={TINTS[i % TINTS.length]}
                shape="square"
                aspect="auto"
                className="h-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Wave fill="sage" className="mt-16" />
    </section>
  );
}
