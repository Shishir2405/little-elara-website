"use client";

import { motion, useReducedMotion } from "motion/react";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import { EASE_INOUT } from "@/lib/motion";

type Variant = "primary" | "secondary" | "ghost" | "link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  type?: "button" | "submit";
  full?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 font-medium text-[0.92rem] rounded-pill transition-colors";

const styles: Record<Variant, string> = {
  primary: "bg-charcoal text-cream px-6 py-3 shadow-soft hover:bg-charcoal-deep",
  secondary:
    "bg-cream text-charcoal px-6 py-3 border border-border-soft shadow-soft hover:bg-cream-deep",
  ghost: "bg-transparent text-charcoal px-5 py-3 border border-charcoal/30 hover:bg-charcoal/5",
  link: "text-charcoal underline underline-offset-4 decoration-1 px-1 py-1 hover:text-sage-deep",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  arrow,
  className = "",
  type = "button",
  full,
}: ButtonProps) {
  const reduce = useReducedMotion();
  const cls = `${base} ${styles[variant]} ${full ? "w-full" : ""} ${className}`;

  const motionProps = reduce
    ? {}
    : {
        whileHover: { scale: 1.03 },
        whileTap: { scale: 0.97 },
        transition: { duration: 0.2, ease: EASE_INOUT },
      };

  const inner = (
    <>
      {children}
      {arrow && <CaretRight weight="bold" className="text-[0.95em]" aria-hidden />}
    </>
  );

  if (href) {
    return (
      <motion.a href={href} className={cls} {...motionProps}>
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} className={cls} {...motionProps}>
      {inner}
    </motion.button>
  );
}
