"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import { JOURNEY } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Wave } from "@/components/ui/Wave";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { tintCard } from "@/lib/tints";

gsap.registerPlugin(ScrollTrigger);

export function AgeJourney() {
  const root = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !root.current) return;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".stack-card");
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        // Shrink + fade each card as the next one scrolls up over it.
        gsap.to(card, {
          scale: 0.92,
          opacity: 0.55,
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top bottom",
            end: "top top+=140",
            scrub: true,
          },
        });
      });
    }, root);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section id="journey" className="bg-cream relative pt-14 sm:pt-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <SectionHeading
          badge={JOURNEY.badge}
          title={JOURNEY.title}
          titleBold={JOURNEY.titleBold}
          subtitle={JOURNEY.subtitle}
        />
      </div>

      {/* Stacking timeline cards */}
      <div ref={root} className="mx-auto mt-12 max-w-[900px] px-6">
        {JOURNEY.steps.map((step, i) => (
          <div
            key={step.age}
            className="stack-card sticky origin-top pb-6"
            style={{ top: `calc(6.5rem + ${i * 1.15}rem)` }}
          >
            <div
              className={`shadow-lift rounded-[28px] border border-white/50 p-7 sm:p-9 ${tintCard(step.tint)}`}
            >
              <div className="grid items-center gap-6 md:grid-cols-[0.85fr_1.15fr]">
                {/* Age + step marker */}
                <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-3">
                  <span className="text-charcoal shadow-soft grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-[1.05rem] font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <span className="text-charcoal/55 text-[0.78rem] font-semibold tracking-wide uppercase">
                      Age group
                    </span>
                    <h3 className="text-charcoal text-[clamp(1.8rem,4.5vw,2.6rem)] leading-none font-semibold">
                      {step.age}
                    </h3>
                  </div>
                </div>

                {/* Goals */}
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {step.goals.map((g) => (
                    <li
                      key={g}
                      className="text-charcoal flex items-center gap-2 rounded-xl bg-white/75 px-3.5 py-2.5 text-[0.88rem] font-medium"
                    >
                      <CheckCircle size={17} weight="fill" className="text-sage-deep shrink-0" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sky-deep mt-12 text-center text-[0.95rem] font-medium">
        Every child learns at their own pace.
      </p>

      <Wave fill="sage-soft" className="mt-14" />
    </section>
  );
}
