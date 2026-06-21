"use client";

import { motion } from "motion/react";
import { PROGRAMS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Wave } from "@/components/ui/Wave";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { fadeUp, inView, stagger } from "@/lib/motion";
import { tintCard, tintSoft } from "@/lib/tints";

export function Programs() {
  return (
    <section id="programs" className="bg-cream relative pt-14 sm:pt-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <SectionHeading
          badge={PROGRAMS.badge}
          title={PROGRAMS.title}
          titleBold={PROGRAMS.titleBold}
          subtitle={PROGRAMS.subtitle}
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-8 grid gap-6 sm:mt-12 md:grid-cols-3"
        >
          {PROGRAMS.items.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="relative"
            >
              {/* hard offset shadow layer (the sticker look) */}
              <div
                aria-hidden
                className="bite-tr bg-charcoal/85 absolute inset-0 translate-x-2 translate-y-2 rounded-[26px] rounded-tr-none"
              />

              {/* card */}
              <div className="bite-tr relative flex h-full flex-col gap-3.5 rounded-[26px] rounded-tr-none bg-white p-5 sm:p-6">
                <span
                  className={`text-charcoal grid h-12 w-12 place-items-center rounded-2xl ${tintCard(p.tint)}`}
                >
                  <Icon name={p.icon} size={24} weight="duotone" />
                </span>

                <div>
                  <h3 className="text-charcoal text-[1.15rem] font-semibold">{p.title}</h3>
                  <span
                    className={`rounded-pill text-charcoal mt-2 inline-block px-3 py-1 text-[0.74rem] font-semibold ${tintSoft(p.tint)}`}
                  >
                    {p.age}
                  </span>
                </div>

                <p className="text-ink-soft text-[0.88rem] leading-relaxed">{p.desc}</p>

                <ul className="mt-auto grid grid-cols-1 gap-1.5 pt-1">
                  {p.points.map((pt) => (
                    <li key={pt} className="text-charcoal flex items-center gap-2 text-[0.84rem]">
                      <CheckCircle size={16} weight="fill" className="text-sage-deep shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <Wave fill="sky-soft" className="mt-16" />
    </section>
  );
}
