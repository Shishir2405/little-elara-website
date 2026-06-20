"use client";

import { motion, useReducedMotion } from "motion/react";
import { Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { SITE } from "@/lib/constants";

const waText = encodeURIComponent(
  "Hi Little Elara Steps, I would like to know more about admissions for my child."
);

const ITEMS = [
  {
    label: "Chat on WhatsApp",
    href: `https://wa.me/${SITE.whatsapp}?text=${waText}`,
    Icon: WhatsappLogo,
    bg: "#25D366",
    external: true,
    pulse: true,
  },
  {
    label: "Call us",
    href: `tel:${SITE.phoneRaw}`,
    Icon: Phone,
    bg: "var(--color-sky-deep)",
    external: false,
    pulse: false,
  },
];

export function StickyContact() {
  const reduce = useReducedMotion();

  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-row items-center gap-3">
      {ITEMS.map((it, i) => (
        <motion.a
          key={it.label}
          href={it.href}
          target={it.external ? "_blank" : undefined}
          rel={it.external ? "noopener noreferrer" : undefined}
          aria-label={it.label}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 230, damping: 16 }}
          whileHover={reduce ? undefined : { scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.94 }}
          className="group shadow-lift relative grid h-14 w-14 place-items-center rounded-full text-white"
          style={{ background: it.bg }}
        >
          {it.pulse && !reduce && (
            <motion.span
              aria-hidden
              className="absolute inset-0 -z-10 rounded-full"
              style={{ background: it.bg }}
              animate={{ scale: [1, 1.5], opacity: [0.45, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            />
          )}

          <it.Icon size={it.Icon === Phone ? 25 : 28} weight="fill" className="relative z-10" />

          {/* hover tooltip */}
          <span className="rounded-pill bg-charcoal shadow-medium pointer-events-none absolute -top-10 right-0 px-3 py-1.5 text-[0.78rem] font-medium whitespace-nowrap text-white opacity-0 transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100">
            {it.label}
          </span>
        </motion.a>
      ))}
    </div>
  );
}
