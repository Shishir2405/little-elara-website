"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { CONTACT, SITE } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { CheckCircle, WarningCircle } from "@phosphor-icons/react/dist/ssr";
import { fadeUp, fromLeft, fromRight, inView, stagger } from "@/lib/motion";

const INFO = [
  {
    icon: "Phone",
    label: "Phone",
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/\s/g, "")}`,
  },
  { icon: "EnvelopeSimple", label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: "MapPin", label: "Visit us", value: SITE.address },
  { icon: "Clock", label: "Open hours", value: SITE.hours },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, boolean> = {};
    ["name", "phone", "age"].forEach((k) => {
      if (!String(data.get(k) ?? "").trim()) next[k] = true;
    });
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      // TODO(client): connect this to email or a form service (e.g. Formspree).
    }
  }

  const fieldCls =
    "rounded-sm border border-border-soft bg-cream px-3.5 py-2.5 text-[0.9rem] text-charcoal outline-none transition focus:border-sage-deep focus:ring-2 focus:ring-sage-deep/30";

  return (
    <section id="contact" className="bg-sage relative pt-14">
      <div className="mx-auto grid max-w-[1180px] items-start gap-10 px-6 pb-20 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Info */}
        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={inView}>
          <motion.div variants={fadeUp}>
            <Badge className="border-charcoal/15 bg-cream/50 text-charcoal/80">
              {CONTACT.badge}
            </Badge>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-charcoal mt-4 text-[clamp(1.5rem,3vw,2.1rem)] font-normal"
          >
            {CONTACT.title} <span className="font-semibold">{CONTACT.titleBold}</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-charcoal/75 mt-3 max-w-[44ch] text-[0.92rem]">
            {CONTACT.subtitle}
          </motion.p>

          <motion.ul variants={fromLeft} className="mt-7 grid gap-3 sm:grid-cols-2">
            {INFO.map((it) => (
              <li key={it.label} className="bg-cream/60 flex items-start gap-3 rounded-md p-4">
                <span className="text-charcoal grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white">
                  <Icon name={it.icon} size={18} weight="fill" />
                </span>
                <span className="min-w-0">
                  <span className="text-charcoal/60 block text-[0.78rem] font-medium">
                    {it.label}
                  </span>
                  {it.href ? (
                    <a
                      href={it.href}
                      className="text-charcoal block text-[0.88rem] font-medium break-words"
                    >
                      {it.value}
                    </a>
                  ) : (
                    <span className="text-charcoal block text-[0.88rem] font-medium">
                      {it.value}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Form */}
        <motion.div
          variants={fromRight}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="shadow-lift rounded-lg bg-white p-6 sm:p-8"
        >
          {sent ? (
            <div className="flex min-h-[320px] flex-col items-center justify-center gap-3 text-center">
              <CheckCircle size={52} weight="fill" className="text-sage-deep" />
              <h3 className="text-charcoal text-[1.2rem] font-semibold">
                We will be in touch soon!
              </h3>
              <p className="text-ink-soft max-w-[34ch] text-[0.9rem]">
                Thank you for reaching out. We will call you within one working day to arrange your
                visit.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="text-charcoal text-[0.82rem] font-medium">Parent name</span>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    className={fieldCls}
                  />
                  {errors.name && <Err>Please enter your name</Err>}
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-charcoal text-[0.82rem] font-medium">Phone</span>
                  <input name="phone" type="tel" placeholder="Mobile number" className={fieldCls} />
                  {errors.phone && <Err>Please enter a phone number</Err>}
                </label>
              </div>

              <label className="flex flex-col gap-1.5">
                <span className="text-charcoal text-[0.82rem] font-medium">Child&rsquo;s age</span>
                <select name="age" defaultValue="" className={fieldCls}>
                  <option value="" disabled>
                    Select age group
                  </option>
                  <option>Under 1 year</option>
                  <option>1 to 2 years</option>
                  <option>3 to 4 years</option>
                  <option>4 to 5 years</option>
                </select>
                {errors.age && <Err>Please choose an age group</Err>}
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-charcoal text-[0.82rem] font-medium">
                  Anything we should know? (optional)
                </span>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Your child's needs, questions, best time to call..."
                  className={fieldCls}
                />
              </label>

              <Button type="submit" full arrow>
                Book a visit
              </Button>
              <p className="text-ink-soft text-center text-[0.78rem]">
                No obligation. We reply within one working day.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Err({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-1 text-[0.76rem] font-medium">
      <WarningCircle size={14} weight="fill" className="text-sage-deep" />
      <span className="text-charcoal/80">{children}</span>
    </span>
  );
}
