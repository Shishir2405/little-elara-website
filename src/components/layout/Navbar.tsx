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
          className={`rounded-pill flex min-h-[60px] items-center justify-between border border-transparent bg-white px-4 py-2 transition-shadow duration-300 sm:px-7 sm:py-2.5 ${
            scrolled ? "shadow-lift" : "shadow-medium"
          }`}
        >
          {/* Mobile: logo on the left */}
          <a href="#top" aria-label="Little Elara Steps home" className="lg:hidden">
            <Logo size={46} />
          </a>

          {/* Desktop: left links */}
          <ul className="text-charcoal hidden items-center gap-6 text-[0.9rem] font-medium lg:flex">
            {left.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="link-underline hover:text-sky-deep transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop: right links + CTA */}
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

          {/* Mobile: hamburger */}
          <button
            className="bg-sky-soft text-sky-deep grid h-11 w-11 place-items-center rounded-full lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <List size={22} />
          </button>
        </nav>

        {/* Desktop: centered logo medallion */}
        <a
          href="#top"
          aria-label="Little Elara Steps home"
          className="absolute top-1/2 left-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
        >
          <span className="shadow-medium ring-border-soft block rounded-full bg-white p-1 ring-1">
            <Logo size={62} />
          </span>
        </a>
      </div>

      {/* Mobile slide-in sidebar drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.25 }}
              onClick={() => setOpen(false)}
              className="bg-charcoal/40 fixed inset-0 z-[60] backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: reduce ? 0 : 0.3, ease: EASE }}
              className="bg-cream shadow-lift fixed top-0 right-0 z-[70] flex h-full w-[80%] max-w-[320px] flex-col p-6 lg:hidden"
            >
              <div className="flex items-center justify-between">
                <Logo size={46} />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="text-charcoal shadow-soft grid h-11 w-11 place-items-center rounded-full bg-white"
                >
                  <X size={22} />
                </button>
              </div>

              <ul className="mt-8 flex flex-col gap-1 text-[1.05rem]">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="text-charcoal hover:bg-sky-soft hover:text-sky-deep block rounded-md px-3 py-3 font-medium transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Button href="#contact" full onClick={() => setOpen(false)} arrow>
                  Book a Visit
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
