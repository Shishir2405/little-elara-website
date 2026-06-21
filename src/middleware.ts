import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SESSION_COOKIE, verifySession } from "@/lib/session";

const ADMIN_PREFIX = "admin.";

async function isAuthed(req: NextRequest) {
  const token = req.cookies.get(SESSION_COOKIE)?.value;
  return token ? Boolean(await verifySession(token)) : false;
}

function loginRedirect(req: NextRequest) {
  const url = req.nextUrl.clone();
  url.pathname = "/admin-login";
  url.search = "";
  return NextResponse.redirect(url);
}

export async function middleware(req: NextRequest) {
  const host = (req.headers.get("host") || "").toLowerCase();
  const isAdminHost = host.startsWith(ADMIN_PREFIX);
  const path = req.nextUrl.pathname;

  // ───────── admin.<domain> : the whole subdomain IS the admin app ─────────
  if (isAdminHost) {
    // Serve the dashboard at the subdomain root.
    if (path === "/") {
      if (!(await isAuthed(req))) return loginRedirect(req);
      const dest = req.nextUrl.clone();
      dest.pathname = "/admin/contact";
      return NextResponse.rewrite(dest);
    }
    // Guard the admin app pages (login + auth APIs stay public).
    if (path.startsWith("/admin") && path !== "/admin-login") {
      if (!(await isAuthed(req))) return loginRedirect(req);
    }
    return NextResponse.next();
  }

  // ───────── main domain : keep /admin/* guarded (admin also works here) ─────────
  if (path.startsWith("/admin") && path !== "/admin-login") {
    if (!(await isAuthed(req))) return loginRedirect(req);
  }
  return NextResponse.next();
}

export const config = {
  // Run on everything except static assets and image files.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|ico|webp)$).*)"],
};
