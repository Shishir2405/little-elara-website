"use client";

import "./globals.css";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-cream grid min-h-[100dvh] place-items-center px-6 text-center">
          <div className="max-w-[460px]">
            <p className="text-highlight text-[clamp(3rem,12vw,5rem)] leading-none font-semibold">
              500
            </p>
            <h1 className="text-charcoal mt-3 text-[clamp(1.4rem,4vw,2rem)] font-semibold">
              Something went wrong
            </h1>
            <p className="text-ink-soft mt-3 text-[0.95rem]">
              We hit an unexpected error. Please try again, or call us at +91 93109 82342.
            </p>
            <button
              onClick={reset}
              className="rounded-pill bg-sky-deep mt-7 px-6 py-3 font-semibold text-white transition hover:brightness-110"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
