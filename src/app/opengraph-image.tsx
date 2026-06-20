import { ImageResponse } from "next/og";

export const alt = "Little Elara Steps — Inclusive Day Care & Pre School, New Ashok Nagar, Delhi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background: "linear-gradient(135deg, #F6FBFE 0%, #E3F3FC 100%)",
        fontFamily: "sans-serif",
        overflow: "hidden",
      }}
    >
      {/* decorative shapes */}
      <div
        style={{
          position: "absolute",
          top: -70,
          right: -50,
          width: 260,
          height: 260,
          borderRadius: 9999,
          background: "#F7B7D3",
          opacity: 0.5,
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -90,
          left: -60,
          width: 280,
          height: 280,
          borderRadius: 9999,
          background: "#FBDE8A",
          opacity: 0.45,
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 120,
          right: 80,
          width: 120,
          height: 120,
          borderRadius: 9999,
          background: "#AEDFB6",
          opacity: 0.5,
          display: "flex",
        }}
      />

      <div
        style={{
          display: "flex",
          fontSize: 24,
          color: "#1E7FAE",
          fontWeight: 700,
          letterSpacing: 2,
        }}
      >
        INCLUSIVE DAY CARE &amp; PRE SCHOOL · NEW ASHOK NAGAR, DELHI
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 78,
            fontWeight: 800,
            color: "#33445C",
            lineHeight: 1.05,
          }}
        >
          Every child learns
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 78,
            fontWeight: 800,
            color: "#F2683F",
            lineHeight: 1.1,
          }}
        >
          at their own pace.
        </div>
        <div
          style={{ display: "flex", fontSize: 30, color: "#6E7E93", marginTop: 20, maxWidth: 820 }}
        >
          Play-based learning, life skills &amp; inclusive support for every child — including ASD,
          ADHD &amp; developmental delays.
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", fontSize: 38, fontWeight: 800, color: "#33445C" }}>
          Little Elara Steps
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontWeight: 700,
            color: "#FFFFFF",
            background: "#1E7FAE",
            padding: "14px 26px",
            borderRadius: 9999,
          }}
        >
          Call +91 93109 82342
        </div>
      </div>
    </div>,
    { ...size }
  );
}
