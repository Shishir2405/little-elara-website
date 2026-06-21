"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowClockwise,
  DownloadSimple,
  MagnifyingGlass,
  SignOut,
  Trash,
} from "@phosphor-icons/react/dist/ssr";

type Status = "new" | "contacted" | "archived";
type Item = {
  _id: string;
  name: string;
  phone: string;
  childAge?: string;
  program?: string;
  message?: string;
  status: Status;
  createdAt: string;
};

const STATUS_STYLE: Record<Status, string> = {
  new: "bg-sky-soft text-sky-deep",
  contacted: "bg-sage-soft text-sage-deep",
  archived: "bg-cream-deep text-ink-soft",
};

function fmt(d: string) {
  try {
    return new Date(d).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return d;
  }
}

export default function AdminContactPage() {
  const router = useRouter();
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<"all" | Status>("all");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/submissions", { cache: "no-store" });
      if (res.status === 401) {
        router.replace("/admin-login");
        return;
      }
      if (!res.ok) throw new Error("Could not load submissions.");
      const data = (await res.json()) as { items: Item[] };
      setItems(data.items);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error loading data.");
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    load();
  }, [load]);

  const filtered = useMemo(
    () =>
      items.filter((it) => {
        if (filter !== "all" && it.status !== filter) return false;
        if (q) {
          const hay =
            `${it.name} ${it.phone} ${it.message ?? ""} ${it.program ?? ""}`.toLowerCase();
          if (!hay.includes(q.toLowerCase())) return false;
        }
        return true;
      }),
    [items, q, filter]
  );

  const counts = useMemo(
    () => ({
      all: items.length,
      new: items.filter((i) => i.status === "new").length,
      contacted: items.filter((i) => i.status === "contacted").length,
      archived: items.filter((i) => i.status === "archived").length,
    }),
    [items]
  );

  async function changeStatus(id: string, status: Status) {
    setItems((prev) => prev.map((i) => (i._id === id ? { ...i, status } : i)));
    await fetch(`/api/admin/submissions/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    }).catch(() => {});
  }

  async function remove(id: string) {
    if (!window.confirm("Delete this enquiry permanently?")) return;
    setItems((prev) => prev.filter((i) => i._id !== id));
    await fetch(`/api/admin/submissions/${id}`, { method: "DELETE" }).catch(() => {});
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" }).catch(() => {});
    router.replace("/admin-login");
  }

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-charcoal text-[1.5rem] font-semibold">Enquiries</h1>
          <p className="text-ink-soft text-[0.85rem]">Little Elara Steps · admission enquiries</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={load}
            className="rounded-pill border-border-soft text-charcoal hover:bg-cream-deep inline-flex items-center gap-2 border bg-white px-4 py-2.5 text-[0.85rem] font-medium transition"
          >
            <ArrowClockwise size={16} weight="bold" /> Refresh
          </button>
          <button
            onClick={() => {
              window.location.href = "/api/admin/submissions/export";
            }}
            className="rounded-pill bg-sage-deep inline-flex items-center gap-2 px-4 py-2.5 text-[0.85rem] font-semibold text-white transition hover:brightness-110"
          >
            <DownloadSimple size={16} weight="bold" /> Export Excel
          </button>
          <button
            onClick={logout}
            className="rounded-pill bg-charcoal inline-flex items-center gap-2 px-4 py-2.5 text-[0.85rem] font-semibold text-white transition hover:brightness-110"
          >
            <SignOut size={16} weight="bold" /> Logout
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {(["all", "new", "contacted", "archived"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`rounded-pill px-3.5 py-1.5 text-[0.82rem] font-medium capitalize transition ${
                filter === s
                  ? "bg-sky-deep text-white"
                  : "border-border-soft text-charcoal hover:bg-cream-deep border bg-white"
              }`}
            >
              {s} ({counts[s]})
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-64">
          <MagnifyingGlass
            size={16}
            className="text-ink-soft absolute top-1/2 left-3 -translate-y-1/2"
          />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search name, phone, message..."
            className="rounded-pill border-border-soft text-charcoal focus:border-sky-deep w-full border bg-white py-2.5 pr-4 pl-9 text-[0.85rem] outline-none"
          />
        </div>
      </div>

      {/* States */}
      {error && (
        <p className="bg-highlight-soft text-highlight-deep mt-6 rounded-md px-4 py-3 text-[0.88rem] font-medium">
          {error}
        </p>
      )}
      {loading ? (
        <p className="text-ink-soft mt-10 text-center text-[0.9rem]">Loading enquiries...</p>
      ) : filtered.length === 0 ? (
        <p className="text-ink-soft mt-10 text-center text-[0.9rem]">No enquiries found.</p>
      ) : (
        <>
          {/* Desktop table */}
          <div className="border-border-soft mt-6 hidden overflow-hidden rounded-lg border bg-white md:block">
            <table className="w-full text-left text-[0.85rem]">
              <thead className="bg-cream-deep text-ink-soft text-[0.78rem] tracking-wide uppercase">
                <tr>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Phone</th>
                  <th className="px-4 py-3">Age</th>
                  <th className="px-4 py-3">Program</th>
                  <th className="px-4 py-3">Message</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-border-soft divide-y">
                {filtered.map((it) => (
                  <tr key={it._id} className="text-charcoal align-top">
                    <td className="text-ink-soft px-4 py-3 whitespace-nowrap">
                      {fmt(it.createdAt)}
                    </td>
                    <td className="px-4 py-3 font-medium">{it.name}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <a href={`tel:${it.phone}`} className="text-sky-deep hover:underline">
                        {it.phone}
                      </a>
                    </td>
                    <td className="px-4 py-3">{it.childAge || "-"}</td>
                    <td className="px-4 py-3">{it.program || "-"}</td>
                    <td className="text-ink-soft max-w-[260px] px-4 py-3">{it.message || "-"}</td>
                    <td className="px-4 py-3">
                      <select
                        value={it.status}
                        onChange={(e) => changeStatus(it._id, e.target.value as Status)}
                        className={`rounded-pill px-2.5 py-1 text-[0.78rem] font-medium ${STATUS_STYLE[it.status]}`}
                      >
                        <option value="new">new</option>
                        <option value="contacted">contacted</option>
                        <option value="archived">archived</option>
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => remove(it._id)}
                        aria-label="Delete"
                        className="text-ink-soft hover:bg-highlight-soft hover:text-highlight-deep grid h-8 w-8 place-items-center rounded-full transition"
                      >
                        <Trash size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mt-6 flex flex-col gap-3 md:hidden">
            {filtered.map((it) => (
              <div key={it._id} className="border-border-soft rounded-lg border bg-white p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-charcoal font-semibold">{it.name}</p>
                    <a href={`tel:${it.phone}`} className="text-sky-deep text-[0.85rem]">
                      {it.phone}
                    </a>
                  </div>
                  <span className="text-ink-soft text-[0.74rem] whitespace-nowrap">
                    {fmt(it.createdAt)}
                  </span>
                </div>
                <div className="text-ink-soft mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[0.82rem]">
                  {it.childAge && <span>Age: {it.childAge}</span>}
                  {it.program && <span>{it.program}</span>}
                </div>
                {it.message && <p className="text-charcoal mt-2 text-[0.85rem]">{it.message}</p>}
                <div className="mt-3 flex items-center justify-between">
                  <select
                    value={it.status}
                    onChange={(e) => changeStatus(it._id, e.target.value as Status)}
                    className={`rounded-pill px-2.5 py-1 text-[0.78rem] font-medium ${STATUS_STYLE[it.status]}`}
                  >
                    <option value="new">new</option>
                    <option value="contacted">contacted</option>
                    <option value="archived">archived</option>
                  </select>
                  <button
                    onClick={() => remove(it._id)}
                    aria-label="Delete"
                    className="text-ink-soft hover:bg-highlight-soft hover:text-highlight-deep grid h-9 w-9 place-items-center rounded-full transition"
                  >
                    <Trash size={17} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
