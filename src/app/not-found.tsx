import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-cream grid place-items-center px-6 py-28 text-center">
      <div className="max-w-[460px]">
        <p className="text-sky-deep text-[clamp(3rem,12vw,5rem)] leading-none font-semibold">404</p>
        <h1 className="text-charcoal mt-3 text-[clamp(1.4rem,4vw,2rem)] font-semibold">
          This little page took a wrong step
        </h1>
        <p className="text-ink-soft mt-3 text-[0.95rem]">
          The page you are looking for is not here. Let us walk you back to safe hands.
        </p>
        <div className="mt-7 flex justify-center">
          <Button href="/" arrow>
            Back to home
          </Button>
        </div>
      </div>
    </section>
  );
}
