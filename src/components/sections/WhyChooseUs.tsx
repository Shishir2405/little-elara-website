"use client";

import { WHY } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Wave } from "@/components/ui/Wave";
import { tintCard } from "@/lib/tints";

function Card({ item, hidden = false }: { item: (typeof WHY.items)[number]; hidden?: boolean }) {
  return (
    <article
      aria-hidden={hidden}
      className={`mr-5 flex w-[250px] shrink-0 flex-col gap-4 rounded-3xl p-6 shadow-[0_16px_26px_-14px_rgba(51,68,92,0.5)] ${tintCard(item.tint)}`}
    >
      <span className="bg-charcoal grid h-12 w-12 place-items-center rounded-full text-white">
        <Icon name={item.icon} size={22} weight="duotone" />
      </span>
      <h3 className="text-charcoal text-[1.05rem] leading-snug font-semibold">{item.title}</h3>
    </article>
  );
}

export function WhyChooseUs() {
  return (
    <section id="why" className="bg-sky-soft relative pt-14 sm:pt-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <SectionHeading
          badge={WHY.badge}
          title={WHY.title}
          titleBold={WHY.titleBold}
          subtitle={WHY.subtitle}
        />
      </div>

      {/* Auto-scrolling marquee of colour cards (hover to pause) */}
      <div className="marquee no-scrollbar mt-8 w-full px-6 sm:mt-12">
        <div className="marquee-track flex">
          {WHY.items.map((item) => (
            <Card key={item.title} item={item} />
          ))}
          {WHY.items.map((item) => (
            <Card key={`dup-${item.title}`} item={item} hidden />
          ))}
        </div>
      </div>

      <Wave fill="cream" className="mt-10 sm:mt-16" />
    </section>
  );
}
