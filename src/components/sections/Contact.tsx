"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { CONTACT, PROGRAMS, SITE } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ArrowUpRight,
  CheckCircle,
  Clock,
  EnvelopeSimple,
  MapPin,
  Phone,
  WarningCircle,
} from "@phosphor-icons/react/dist/ssr";
import { fadeUp, inView, stagger } from "@/lib/motion";

const MAPS_SRC = `https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`;
const MAPS_LINK = `https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}`;

const METHODS = [
  {
    icon: Phone,
    label: "Call or WhatsApp",
    value: SITE.phone,
    href: `tel:${SITE.phoneRaw}`,
  },
  {
    icon: EnvelopeSimple,
    label: "Email us",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: SITE.area,
    href: MAPS_LINK,
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, boolean> = {};
    ["name", "phone", "age"].forEach((k) => {
      if (!String(data.get(k) ?? "").trim()) next[k] = true;
    });
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      // TODO(client): connect this to email or a form service (e.g. Formspree / Google Forms).
    }
  }

  const fieldCls =
    "rounded-sm border border-border-soft bg-cream px-3.5 py-2.5 text-[0.9rem] text-charcoal outline-none transition focus:border-sky-deep focus:ring-2 focus:ring-sky-deep/25";

  return (
    <section id="contact" className="bg-cream relative pt-20">
      <div className="mx-auto max-w-[1180px] px-6 pb-20">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* Left: intro + contact methods */}
          <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={inView}>
            <motion.div variants={fadeUp}>
              <Badge>{CONTACT.badge}</Badge>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-charcoal mt-4 text-[clamp(1.7rem,3.4vw,2.4rem)] font-normal"
            >
              {CONTACT.title}{" "}
              <span className="text-highlight font-semibold">{CONTACT.titleBold}</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-ink-soft mt-3 max-w-[46ch] text-[0.95rem]">
              {CONTACT.subtitle}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-7 flex flex-col gap-3">
              {METHODS.map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  target={m.icon === MapPin ? "_blank" : undefined}
                  rel={m.icon === MapPin ? "noopener noreferrer" : undefined}
                  className="group border-border-soft hover:border-sky hover:shadow-soft flex items-center gap-4 rounded-xl border bg-white p-4 transition"
                >
                  <span className="bg-sky-soft text-sky-deep grid h-12 w-12 shrink-0 place-items-center rounded-xl">
                    <m.icon size={22} weight="fill" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="text-charcoal block text-[0.8rem] font-semibold">
                      {m.label}
                    </span>
                    <span className="text-ink-soft block truncate text-[0.85rem]">{m.value}</span>
                  </span>
                  <span className="bg-cream text-charcoal group-hover:bg-sky-deep grid h-8 w-8 shrink-0 place-items-center rounded-full transition group-hover:text-white">
                    <ArrowUpRight size={16} weight="bold" />
                  </span>
                </a>
              ))}

              <div className="border-border-soft flex items-center gap-4 rounded-xl border bg-white p-4">
                <span className="bg-sky-soft text-sky-deep grid h-12 w-12 shrink-0 place-items-center rounded-xl">
                  <Clock size={22} weight="fill" />
                </span>
                <span className="min-w-0">
                  <span className="text-charcoal block text-[0.8rem] font-semibold">
                    Open hours
                  </span>
                  <span className="text-ink-soft block text-[0.85rem]">{SITE.hours}</span>
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="border-border-soft shadow-lift rounded-lg border bg-white p-6 sm:p-8"
          >
            {sent ? (
              <div className="flex min-h-[360px] flex-col items-center justify-center gap-3 text-center">
                <CheckCircle size={52} weight="fill" className="text-sage-deep" />
                <h3 className="text-charcoal text-[1.2rem] font-semibold">
                  We will be in touch soon!
                </h3>
                <p className="text-ink-soft max-w-[34ch] text-[0.9rem]">
                  Thank you for reaching out. We will call you within one working day to arrange
                  your visit.
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
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Mobile number"
                      className={fieldCls}
                    />
                    {errors.phone && <Err>Please enter a phone number</Err>}
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5">
                    <span className="text-charcoal text-[0.82rem] font-medium">
                      Child&rsquo;s age
                    </span>
                    <input name="age" type="text" placeholder="e.g. 3 years" className={fieldCls} />
                    {errors.age && <Err>Please add your child&rsquo;s age</Err>}
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-charcoal text-[0.82rem] font-medium">Interested in</span>
                    <select name="program" defaultValue="" className={fieldCls}>
                      <option value="">Select a program</option>
                      {PROGRAMS.items.map((p) => (
                        <option key={p.title}>{p.title}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="flex flex-col gap-1.5">
                  <span className="text-charcoal text-[0.82rem] font-medium">
                    Anything we should know? (optional)
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Your child's needs, questions, best time to call..."
                    className={fieldCls}
                  />
                </label>

                <Button type="submit" full arrow>
                  Send enquiry
                </Button>
                <p className="text-ink-soft text-center text-[0.78rem]">
                  We reply within one working day. Your details stay private.
                </p>
              </form>
            )}
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="border-border-soft shadow-soft mt-10 overflow-hidden rounded-lg border"
        >
          <iframe
            title="Little Elara Steps location"
            src={MAPS_SRC}
            className="h-[280px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}

function Err({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-1 text-[0.76rem] font-medium">
      <WarningCircle size={14} weight="fill" className="text-sky-deep" />
      <span className="text-charcoal/80">{children}</span>
    </span>
  );
}
