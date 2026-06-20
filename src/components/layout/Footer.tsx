import { CONTACT, FOOTER, NAV_LINKS, SERVICES, SITE } from "@/lib/constants";
import { Logo } from "./Logo";
import { Icon } from "@/components/ui/Icon";
import { Wave } from "@/components/ui/Wave";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream relative">
      <Wave fill="sage" flip className="absolute -top-[1px] left-0" />

      <div className="mx-auto max-w-[1180px] px-6 pt-24 pb-10">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo size={64} />
            <p className="text-cream/70 mt-4 max-w-[34ch] text-[0.9rem] leading-relaxed">
              {FOOTER.blurb}
            </p>
            <div className="mt-5 flex gap-3">
              {["InstagramLogo", "FacebookLogo", "WhatsappLogo", "LinkedinLogo"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s.replace("Logo", "")}
                  className="bg-cream/10 hover:bg-clay hover:text-charcoal grid h-10 w-10 place-items-center rounded-full transition-colors"
                >
                  <Icon name={s} size={18} weight="fill" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h5 className="text-cream mb-4 text-[0.95rem] font-semibold">Company</h5>
            <ul className="text-cream/70 space-y-2.5 text-[0.88rem]">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-clay transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-cream mb-4 text-[0.95rem] font-semibold">Services</h5>
            <ul className="text-cream/70 space-y-2.5 text-[0.88rem]">
              {SERVICES.items.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <a href="#services" className="hover:text-clay transition-colors">
                    {s.title.replace(/ \(.*\)/, "")}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-cream mb-4 text-[0.95rem] font-semibold">{CONTACT.badge}</h5>
            <ul className="text-cream/70 space-y-3 text-[0.88rem]">
              <li className="flex items-start gap-2.5">
                <Icon name="Phone" size={18} className="text-clay mt-0.5" weight="fill" />
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="EnvelopeSimple" size={18} className="text-clay mt-0.5" weight="fill" />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="MapPin" size={18} className="text-clay mt-0.5" weight="fill" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="Clock" size={18} className="text-clay mt-0.5" weight="fill" />
                <span>{SITE.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-cream/10 text-cream/50 mt-12 flex flex-col items-center justify-between gap-3 border-t pt-6 text-[0.8rem] sm:flex-row">
          <span>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </span>
          <span>{FOOTER.madeWith}</span>
        </div>
      </div>
    </footer>
  );
}
