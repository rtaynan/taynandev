import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/siteConfig";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const title = (searchParams.get("title") || siteConfig.title).slice(0, 160);
  const subtitle = (
    searchParams.get("subtitle") || siteConfig.description
  ).slice(0, 200);
  const tag = searchParams.get("tag") || siteConfig.author.role;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #1e3a8a 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top bar — site identity */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 28,
            color: "#cbd5e1",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 9999,
                background: "#60a5fa",
              }}
            />
            <span style={{ fontWeight: 600, color: "white" }}>
              taynan<span style={{ color: "#60a5fa" }}>.dev</span>
            </span>
          </div>
          <span
            style={{
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: 2,
              color: "#60a5fa",
            }}
          >
            {tag}
          </span>
        </div>

        {/* Title */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: -1,
              color: "white",
              display: "flex",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#cbd5e1",
              lineHeight: 1.4,
              display: "flex",
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Footer — author */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#94a3b8",
          }}
        >
          <span>{siteConfig.author.name}</span>
          <span>{siteConfig.url.replace(/^https?:\/\//, "")}</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
