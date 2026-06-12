import { ImageResponse } from "next/og"
import { SITE_NAME, META, SITE_URL } from "@/lib/metadata"

export const size        = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt         = META.ogTitle

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width:           "100%",
          height:          "100%",
          backgroundColor: "#141412",
          display:         "flex",
          flexDirection:   "column",
          alignItems:      "flex-start",
          justifyContent:  "flex-end",
          padding:         "72px",
          fontFamily:      "Georgia, 'Times New Roman', serif",
        }}
      >
        {/* Thin top border */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", backgroundColor: "#252422" }} />

        {/* Left content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <p style={{
            color:          "#6B6963",
            fontSize:       "13px",
            letterSpacing:  "0.12em",
            textTransform:  "uppercase",
            margin:         0,
            fontFamily:     "system-ui, -apple-system, sans-serif",
          }}>
            Athens · Greece
          </p>

          <h1 style={{
            color:         "#F7F5F0",
            fontSize:      "88px",
            fontStyle:     "italic",
            fontWeight:    400,
            margin:        0,
            lineHeight:    1.0,
            letterSpacing: "-0.02em",
          }}>
            {SITE_NAME}
          </h1>

          <p style={{
            color:       "#4A4845",
            fontSize:    "20px",
            margin:      0,
            fontFamily:  "system-ui, -apple-system, sans-serif",
            lineHeight:  1.4,
          }}>
            Web Design &amp; Development
          </p>
        </div>

        {/* Bottom-right: URL */}
        <div style={{
          position:      "absolute",
          right:         "72px",
          bottom:        "72px",
          display:       "flex",
          flexDirection: "column",
          alignItems:    "flex-end",
          gap:           "10px",
        }}>
          <div style={{ width: "40px", height: "1px", backgroundColor: "#252422" }} />
          <p style={{
            color:         "#4A4845",
            fontSize:      "12px",
            letterSpacing: "0.10em",
            textTransform: "uppercase",
            margin:        0,
            fontFamily:    "system-ui, -apple-system, sans-serif",
          }}>
            {SITE_URL.replace("https://", "")}
          </p>
        </div>
      </div>
    ),
    { ...size },
  )
}
