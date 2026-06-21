"use client";

import { usePathname, useRouter } from "next/navigation";
import { SignOut } from "@phosphor-icons/react/dist/ssr";

const LINKS = [
  { href: "/admin/contact", label: "Enquiries" },
  { href: "/admin/gallery", label: "Gallery" },
];

export function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" }).catch(() => {});
    router.replace("/admin-login");
  }

  return (
    <header className="border-border-soft border-b bg-white">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex flex-wrap items-center gap-1">
          <span className="font-display text-charcoal mr-2 text-[1.02rem] font-semibold sm:mr-3">
            Little Elara Admin
          </span>
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`rounded-pill px-3.5 py-1.5 text-[0.85rem] font-medium transition ${
                pathname === l.href ? "bg-sky-deep text-white" : "text-charcoal hover:bg-cream-deep"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
        <button
          onClick={logout}
          className="rounded-pill bg-charcoal inline-flex shrink-0 items-center gap-2 px-4 py-2 text-[0.82rem] font-semibold text-white transition hover:brightness-110"
        >
          <SignOut size={15} weight="bold" /> Logout
        </button>
      </div>
    </header>
  );
}
