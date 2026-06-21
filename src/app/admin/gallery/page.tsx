"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FloppyDisk, Trash, UploadSimple } from "@phosphor-icons/react/dist/ssr";

type Item = { _id: string; url: string; title: string; caption: string; order: number };

export default function AdminGalleryPage() {
  const router = useRouter();
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [savedId, setSavedId] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const field =
    "w-full rounded-sm border border-border-soft bg-cream px-3 py-2 text-[0.88rem] text-charcoal outline-none focus:border-sky-deep";

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/gallery", { cache: "no-store" });
      if (res.status === 401) {
        router.replace("/admin-login");
        return;
      }
      if (!res.ok) throw new Error("Could not load the gallery.");
      const data = (await res.json()) as { items: Item[] };
      setItems(data.items);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error loading gallery.");
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    load();
  }, [load]);

  async function upload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setUploadError("");
    const file = fileRef.current?.files?.[0];
    if (!file) {
      setUploadError("Please choose an image first.");
      return;
    }
    const fd = new FormData();
    fd.append("file", file);
    fd.append("title", title);
    fd.append("caption", caption);
    setUploading(true);
    try {
      const res = await fetch("/api/admin/gallery", { method: "POST", body: fd });
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(body.error || "Upload failed.");
      setTitle("");
      setCaption("");
      if (fileRef.current) fileRef.current.value = "";
      await load();
    } catch (e) {
      setUploadError(e instanceof Error ? e.message : "Upload failed.");
    } finally {
      setUploading(false);
    }
  }

  function setItemField(id: string, key: "title" | "caption", value: string) {
    setItems((prev) => prev.map((i) => (i._id === id ? { ...i, [key]: value } : i)));
  }

  async function save(it: Item) {
    await fetch(`/api/admin/gallery/${it._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: it.title, caption: it.caption }),
    }).catch(() => {});
    setSavedId(it._id);
    setTimeout(() => setSavedId(null), 1500);
  }

  async function remove(id: string) {
    if (!window.confirm("Delete this image? It is removed from Cloudinary and the website."))
      return;
    setItems((prev) => prev.filter((i) => i._id !== id));
    await fetch(`/api/admin/gallery/${id}`, { method: "DELETE" }).catch(() => {});
  }

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6">
      <h1 className="text-charcoal text-[1.5rem] font-semibold">Gallery</h1>
      <p className="text-ink-soft text-[0.85rem]">
        Photos shown in the website&rsquo;s Gallery section. Upload, edit captions, or remove.
      </p>

      {/* Upload */}
      <form
        onSubmit={upload}
        className="border-border-soft shadow-soft mt-6 rounded-lg border bg-white p-5"
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <label className="flex flex-col gap-1.5 sm:col-span-1">
            <span className="text-charcoal text-[0.8rem] font-medium">Image (max 4 MB)</span>
            <input ref={fileRef} type="file" accept="image/*" className={field} />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-charcoal text-[0.8rem] font-medium">Title</span>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Our Play Room"
              className={field}
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-charcoal text-[0.8rem] font-medium">Caption</span>
            <input
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Short caption"
              className={field}
            />
          </label>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <button
            type="submit"
            disabled={uploading}
            className="rounded-pill bg-sky-deep inline-flex items-center gap-2 px-5 py-2.5 text-[0.85rem] font-semibold text-white transition hover:brightness-110 disabled:opacity-60"
          >
            <UploadSimple size={16} weight="bold" /> {uploading ? "Uploading..." : "Upload image"}
          </button>
          {uploadError && (
            <span className="text-highlight-deep text-[0.82rem] font-medium">{uploadError}</span>
          )}
        </div>
      </form>

      {/* Grid */}
      {error && (
        <p className="bg-highlight-soft text-highlight-deep mt-6 rounded-md px-4 py-3 text-[0.88rem] font-medium">
          {error}
        </p>
      )}
      {loading ? (
        <p className="text-ink-soft mt-10 text-center text-[0.9rem]">Loading gallery...</p>
      ) : items.length === 0 ? (
        <p className="text-ink-soft mt-10 text-center text-[0.9rem]">
          No images yet. Upload one above to show it on the website.
        </p>
      ) : (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it._id}
              className="border-border-soft shadow-soft overflow-hidden rounded-lg border bg-white"
            >
              <div className="bg-cream-deep relative aspect-[4/3]">
                <Image
                  src={it.url}
                  alt={it.title || "Gallery image"}
                  fill
                  unoptimized
                  sizes="360px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 p-4">
                <input
                  value={it.title}
                  onChange={(e) => setItemField(it._id, "title", e.target.value)}
                  placeholder="Title"
                  className={field}
                />
                <input
                  value={it.caption}
                  onChange={(e) => setItemField(it._id, "caption", e.target.value)}
                  placeholder="Caption"
                  className={field}
                />
                <div className="mt-1 flex items-center justify-between">
                  <button
                    onClick={() => save(it)}
                    className="rounded-pill bg-sage-deep inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[0.8rem] font-semibold text-white transition hover:brightness-110"
                  >
                    <FloppyDisk size={14} weight="bold" /> {savedId === it._id ? "Saved" : "Save"}
                  </button>
                  <button
                    onClick={() => remove(it._id)}
                    aria-label="Delete"
                    className="text-ink-soft hover:bg-highlight-soft hover:text-highlight-deep grid h-8 w-8 place-items-center rounded-full transition"
                  >
                    <Trash size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
