import { FOOTER, NAV_LINKS, PROGRAMS, SITE } from "@/lib/constants";
import { Logo } from "./Logo";
import { Icon } from "@/components/ui/Icon";
import { Wave } from "@/components/ui/Wave";

export function Footer() {
  return (
    <footer className="bg-cream-deep text-ink relative">
      <Wave fill="cream" flip className="absolute -top-px left-0" />

      <div className="relative mx-auto max-w-[1180px] px-6 pt-14 pb-10 sm:pt-20 md:pt-24">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Logo size={56} />
              <div>
                <p className="font-display text-charcoal text-[1.05rem] font-semibold">
                  {SITE.name}
                </p>
                <p className="text-ink-soft text-[0.78rem]">{SITE.category}</p>
              </div>
            </div>
            <p className="text-ink-soft mt-4 max-w-[34ch] text-[0.88rem] leading-relaxed">
              {FOOTER.blurb}
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { icon: "InstagramLogo", label: "Instagram", href: SITE.instagram, external: true },
                {
                  icon: "WhatsappLogo",
                  label: "WhatsApp",
                  href: `https://wa.me/${SITE.whatsapp}`,
                  external: true,
                },
                {
                  icon: "EnvelopeSimple",
                  label: "Email",
                  href: `mailto:${SITE.email}`,
                  external: false,
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  className="text-sky-deep shadow-soft hover:bg-sky-deep hover:shadow-medium grid h-11 w-11 place-items-center rounded-full bg-white transition-all duration-200 hover:-translate-y-1 hover:scale-110 hover:text-white"
                >
                  <Icon name={s.icon} size={19} weight="fill" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h5 className="text-charcoal mb-4 text-[0.95rem] font-semibold">Explore</h5>
            <ul className="text-ink-soft space-y-2.5 text-[0.88rem]">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-underline hover:text-sky-deep transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h5 className="text-charcoal mb-4 text-[0.95rem] font-semibold">Programs</h5>
            <ul className="text-ink-soft space-y-2.5 text-[0.88rem]">
              {PROGRAMS.items.map((p) => (
                <li key={p.title}>
                  <a
                    href="#programs"
                    className="link-underline hover:text-sky-deep transition-colors"
                  >
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-charcoal mb-4 text-[0.95rem] font-semibold">Visit us</h5>
            <ul className="text-ink-soft space-y-3 text-[0.88rem]">
              <li className="flex items-start gap-2.5">
                <Icon name="Phone" size={18} className="text-sky-deep mt-0.5" weight="fill" />
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="link-underline hover:text-sky-deep transition-colors"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon
                  name="EnvelopeSimple"
                  size={18}
                  className="text-sky-deep mt-0.5"
                  weight="fill"
                />
                <a
                  href={`mailto:${SITE.email}`}
                  className="link-underline hover:text-sky-deep transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="MapPin" size={18} className="text-sky-deep mt-0.5" weight="fill" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="Clock" size={18} className="text-sky-deep mt-0.5" weight="fill" />
                <span>{SITE.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-border-soft text-ink-soft mt-12 flex flex-col items-center justify-between gap-3 border-t pt-6 text-[0.8rem] sm:flex-row">
          <span>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </span>
          <span>{FOOTER.madeWith}</span>
        </div>
      </div>
    </footer>
  );
}
