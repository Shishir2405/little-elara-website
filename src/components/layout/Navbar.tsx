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
      <div className="relative mx-auto max-w-[1180px]">
        <nav
          className={`rounded-pill flex min-h-[64px] items-center justify-between bg-white px-5 py-2.5 transition-shadow duration-300 sm:px-7 ${
            scrolled ? "shadow-lift" : "shadow-medium"
          }`}
        >
          {/* Left links (desktop) */}
          <ul className="text-charcoal hidden items-center gap-6 text-[0.9rem] font-medium lg:flex">
            {left.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="link-underline hover:text-sky-deep transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right links + CTA (desktop) */}
          <div className="ml-auto hidden items-center gap-6 lg:flex">
            <ul className="text-charcoal flex items-center gap-6 text-[0.9rem] font-medium">
              {right.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-underline hover:text-sky-deep transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button href="#contact" variant="primary">
              Book a Visit
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="bg-sky-soft text-sky-deep ml-auto grid h-11 w-11 place-items-center rounded-full lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </nav>

        {/* Centered logo medallion */}
        <a
          href="#top"
          aria-label="Little Elara Steps home"
          className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
        >
          <span className="shadow-medium ring-border-soft block rounded-full bg-white p-1 ring-1">
            <Logo size={62} />
          </span>
        </a>
      </div>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: reduce ? 0 : 0.3, ease: EASE }}
            className="border-border-soft shadow-lift mx-auto mt-10 max-w-[1180px] rounded-lg border bg-white p-6 lg:hidden"
          >
            <ul className="flex flex-col gap-1 text-lg">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-charcoal hover:bg-sky-soft block rounded-md px-3 py-2.5 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Button href="#contact" full onClick={() => setOpen(false)} arrow>
                Book a Visit
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
