import Image from "next/image";

/* Uses your real logo from /public/logo.png.
   Replace that file to update the logo everywhere. */
export function Logo({ size = 76 }: { size?: number }) {
  return (
    <span
      className="border-border-soft bg-cream shadow-soft grid place-items-center overflow-hidden rounded-full border"
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo.png"
        alt="Little Elara Steps"
        width={size}
        height={size}
        className="h-full w-full object-contain p-1"
        priority
      />
    </span>
  );
}
