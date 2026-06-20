"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { NAV_LINKS } from "@/lib/constants";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { EASE } from "@/lib/motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  const left = NAV_LINKS.slice(0, 3);
  const right = NAV_LINKS.slice(3);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav
        className={`rounded-pill mx-auto flex max-w-[1180px] items-center justify-between border px-4 py-2.5 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "border-border-soft shadow-medium bg-white/85 backdrop-blur-md"
            : "shadow-soft border-transparent bg-white/60 backdrop-blur"
        }`}
      >
        {/* Left links (desktop) */}
        <ul className="text-charcoal hidden items-center gap-6 text-[0.9rem] lg:flex">
          {left.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-sage-deep transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Center logo */}
        <a href="#top" className="lg:absolute lg:left-1/2 lg:-translate-x-1/2" aria-label="Home">
          <Logo size={56} />
        </a>

        {/* Right links + CTA (desktop) */}
        <div className="hidden items-center gap-6 lg:flex">
          <ul className="text-charcoal flex items-center gap-6 text-[0.9rem]">
            {right.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-sage-deep transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#contact" variant="secondary">
            Get in touch
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="bg-cream text-charcoal ml-auto grid h-10 w-10 place-items-center rounded-full lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: reduce ? 0 : 0.3, ease: EASE }}
            className="border-border-soft bg-cream shadow-lift mx-auto mt-3 max-w-[1180px] rounded-lg border p-6 lg:hidden"
          >
            <ul className="flex flex-col gap-1 text-lg">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-charcoal hover:bg-cream-deep block rounded-md px-3 py-2.5 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Button href="#contact" full onClick={() => setOpen(false)}>
                Get in touch
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
