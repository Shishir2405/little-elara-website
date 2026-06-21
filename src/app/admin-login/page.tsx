"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

export default function AdminLogin() {
  const router = useRouter();
  const [step, setStep] = useState<"email" | "otp">("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  const field =
    "w-full rounded-sm border border-border-soft bg-cream px-3.5 py-3 text-[0.95rem] text-charcoal outline-none transition focus:border-sky-deep focus:ring-2 focus:ring-sky-deep/25";

  async function requestOtp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setInfo("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/request-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const b = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(b.error || "Could not send the code.");
      }
      setStep("otp");
      setInfo("If this email is an admin, a 6-digit code has been sent. Check your inbox.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  async function verify(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });
      const b = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(b.error || "Verification failed.");
      router.replace("/admin/contact");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-cream grid min-h-[100dvh] place-items-center px-4 py-10">
      <div className="border-border-soft shadow-lift w-full max-w-[400px] rounded-lg border bg-white p-7">
        <p className="text-sky-deep text-[0.78rem] font-semibold tracking-wide uppercase">
          Little Elara Steps
        </p>
        <h1 className="text-charcoal mt-1 text-[1.5rem] font-semibold">Admin login</h1>
        <p className="text-ink-soft mt-1.5 text-[0.88rem]">
          {step === "email"
            ? "Enter the admin email to receive a one-time code."
            : "Enter the 6-digit code we just emailed you."}
        </p>

        {step === "email" ? (
          <form onSubmit={requestOtp} className="mt-6 flex flex-col gap-4">
            <input
              type="email"
              required
              autoFocus
              placeholder="admin@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={field}
            />
            <Button type="submit" full arrow>
              {loading ? "Sending..." : "Send code"}
            </Button>
          </form>
        ) : (
          <form onSubmit={verify} className="mt-6 flex flex-col gap-4">
            <input
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={6}
              required
              autoFocus
              placeholder="123456"
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
              className={`${field} text-center text-[1.3rem] tracking-[0.5em]`}
            />
            <Button type="submit" full arrow>
              {loading ? "Verifying..." : "Verify & sign in"}
            </Button>
            <button
              type="button"
              onClick={() => {
                setStep("email");
                setCode("");
                setError("");
                setInfo("");
              }}
              className="text-sky-deep text-[0.82rem] hover:underline"
            >
              Use a different email
            </button>
          </form>
        )}

        {error && (
          <p className="bg-highlight-soft text-highlight-deep mt-4 rounded-sm px-3 py-2 text-[0.82rem] font-medium">
            {error}
          </p>
        )}
        {info && !error && (
          <p className="bg-sky-soft text-charcoal mt-4 rounded-sm px-3 py-2 text-[0.82rem]">
            {info}
          </p>
        )}
      </div>
    </main>
  );
}
