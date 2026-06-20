"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import { APPROACH } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Wave } from "@/components/ui/Wave";
import { tintCard } from "@/lib/tints";

gsap.registerPlugin(ScrollTrigger);

export function Approach() {
  const root = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !root.current) return;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".stack-card");
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        // Pin each card at the top while the next scrolls up over it.
        ScrollTrigger.create({
          trigger: card,
          start: "top top+=96",
          endTrigger: cards[cards.length - 1],
          end: "top top+=96",
          pin: true,
          pinSpacing: false,
        });
        // Shrink + fade the card as the next one arrives.
        gsap.to(card, {
          scale: 0.94,
          opacity: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top bottom",
            end: "top top+=96",
            scrub: true,
          },
        });
      });
    }, root);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section id="approach" className="bg-cream relative pt-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <SectionHeading
          badge={APPROACH.badge}
          title={APPROACH.title}
          titleBold={APPROACH.titleBold}
          subtitle={APPROACH.subtitle}
        />
      </div>

      <div ref={root} className="mx-auto mt-10 max-w-[920px] px-6">
        {APPROACH.steps.map((step) => (
          <div
            key={step.no}
            className="stack-card border-border-soft shadow-medium mb-6 grid items-center gap-6 rounded-lg border bg-white p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8"
          >
            <div>
              <div className="flex items-center gap-3">
                <span
                  className={`text-charcoal grid h-11 w-11 place-items-center rounded-full ${tintCard(step.tint)}`}
                >
                  <Icon name={step.icon} size={20} weight="duotone" />
                </span>
                <span className="font-display text-border-soft text-[1.6rem] font-semibold">
                  {step.no}
                </span>
              </div>
              <h3 className="text-charcoal mt-4 text-[1.2rem] font-semibold">{step.title}</h3>
              <p className="text-ink-soft mt-2 text-[0.92rem] leading-relaxed">{step.desc}</p>
            </div>
            <ImageSlot label={step.title} shape="rounded" tint={step.tint} aspect="5 / 4" />
          </div>
        ))}
      </div>

      <Wave fill="charcoal" className="mt-16" />
    </section>
  );
}
