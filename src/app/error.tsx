"use client";

import { Button } from "@/components/ui/Button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="bg-cream grid place-items-center px-6 py-28 text-center">
      <div className="max-w-[460px]">
        <p className="text-highlight text-[clamp(2.4rem,9vw,4rem)] leading-none font-semibold">
          Oops
        </p>
        <h1 className="text-charcoal mt-3 text-[clamp(1.4rem,4vw,2rem)] font-semibold">
          Something went wrong
        </h1>
        <p className="text-ink-soft mt-3 text-[0.95rem]">
          A little hiccup on our end. Please try again, or call us at +91 93109 82342.
        </p>
        <div className="mt-7 flex justify-center gap-3">
          <Button onClick={reset} arrow>
            Try again
          </Button>
          <Button href="/" variant="secondary">
            Home
          </Button>
        </div>
      </div>
    </section>
  );
}
