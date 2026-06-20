"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
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
  target?: string;
  rel?: string;
}

const base =
  "group relative overflow-hidden inline-flex items-center justify-center gap-2 font-semibold text-[0.95rem] rounded-pill transition-all duration-200";

const styles: Record<Variant, string> = {
  primary:
    "bg-sky-deep text-white px-6 py-3 shadow-[0_12px_26px_-10px_rgba(30,127,174,0.85)] hover:shadow-[0_16px_30px_-10px_rgba(30,127,174,0.95)]",
  secondary:
    "bg-white text-sky-deep px-6 py-3 border-2 border-sky/50 shadow-soft hover:border-sky-deep hover:bg-sky-soft",
  ghost: "bg-white text-ink px-5 py-3 border border-border-soft hover:bg-cream-deep",
  link: "text-highlight-deep px-1 py-1 underline underline-offset-4 decoration-1 hover:text-sky-deep",
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
  target,
  rel,
}: ButtonProps) {
  const reduce = useReducedMotion();
  const cls = `${base} ${styles[variant]} ${full ? "w-full" : ""} ${className}`;
  const showShine = variant === "primary" || variant === "secondary";

  const motionProps = reduce
    ? {}
    : {
        whileHover: { y: -2, scale: 1.03 },
        whileTap: { scale: 0.97 },
        transition: { duration: 0.2, ease: EASE_INOUT },
      };

  const inner = (
    <>
      {/* shine sweep on hover */}
      {showShine && !reduce && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
        />
      )}
      <span className="relative z-10">{children}</span>
      {arrow && (
        <ArrowRight
          weight="bold"
          className="relative z-10 text-[0.95em] transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden
        />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a href={href} target={target} rel={rel} className={cls} {...motionProps}>
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
