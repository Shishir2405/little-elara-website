/* Shared art for the downloadable social banners (rendered via next/og). */
import type { CSSProperties } from "react";

type Format = "facebook" | "square" | "story";

const C = {
  ink: "#33445C",
  soft: "#6E7E93",
  blue: "#1E7FAE",
  coral: "#F2683F",
};

function Circle(style: CSSProperties) {
  return <div style={{ position: "absolute", borderRadius: 9999, display: "flex", ...style }} />;
}

export function BannerArt(format: Format) {
  const vertical = format === "story";
  const pad = format === "facebook" ? 72 : vertical ? 90 : 80;
  const h1 = format === "facebook" ? 70 : vertical ? 92 : 82;

  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: pad,
        background: "linear-gradient(135deg, #F6FBFE 0%, #E3F3FC 100%)",
        fontFamily: "sans-serif",
        overflow: "hidden",
      }}
    >
      {/* decorative shapes */}
      {Circle({
        top: -80,
        right: -60,
        width: 280,
        height: 280,
        background: "#F7B7D3",
        opacity: 0.5,
      })}
      {Circle({
        bottom: -100,
        left: -70,
        width: 300,
        height: 300,
        background: "#FBDE8A",
        opacity: 0.45,
      })}
      {Circle({
        bottom: vertical ? 360 : 120,
        right: 90,
        width: 130,
        height: 130,
        background: "#AEDFB6",
        opacity: 0.5,
      })}

      {/* eyebrow */}
      <div
        style={{
          display: "flex",
          fontSize: format === "facebook" ? 22 : 26,
          color: C.blue,
          fontWeight: 700,
          letterSpacing: 2,
        }}
      >
        INCLUSIVE DAY CARE &amp; PRE SCHOOL
      </div>

      {/* headline */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{ display: "flex", fontSize: h1, fontWeight: 800, color: C.ink, lineHeight: 1.05 }}
        >
          Every child learns
        </div>
        <div
          style={{
            display: "flex",
            fontSize: h1,
            fontWeight: 800,
            color: C.coral,
            lineHeight: 1.1,
          }}
        >
          at their own pace.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: format === "facebook" ? 26 : 32,
            color: C.soft,
            marginTop: 20,
            maxWidth: vertical ? 820 : 760,
          }}
        >
          Play-based learning, life skills &amp; inclusive support for every child.
        </div>

        {/* program chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 30 }}>
          {["Play School & Preschool", "Inclusive Learning", "Day Care"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                fontSize: format === "facebook" ? 20 : 24,
                fontWeight: 600,
                color: C.ink,
                background: "#FFFFFF",
                padding: "10px 20px",
                borderRadius: 9999,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>

      {/* footer: brand + contact */}
      <div
        style={{
          display: "flex",
          flexDirection: vertical ? "column" : "row",
          justifyContent: "space-between",
          alignItems: vertical ? "flex-start" : "center",
          gap: 18,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: format === "facebook" ? 34 : 42,
              fontWeight: 800,
              color: C.ink,
            }}
          >
            Little Elara Steps
          </div>
          <div
            style={{ display: "flex", fontSize: format === "facebook" ? 20 : 24, color: C.soft }}
          >
            New Ashok Nagar, East Delhi · @littleelarasteps
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: format === "facebook" ? 24 : 30,
            fontWeight: 700,
            color: "#FFFFFF",
            background: C.blue,
            padding: "14px 28px",
            borderRadius: 9999,
          }}
        >
          Admissions Open · +91 93109 82342
        </div>
      </div>
    </div>
  );
}
