import { ImageResponse } from "next/og";

export const alt = "RomaniFlow — изучайте цыганский язык";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#F2EAD6",
          color: "#1A140C",
          fontFamily: "Georgia, 'Times New Roman', serif"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            marginBottom: 8
          }}
        >
          <svg width="120" height="120" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="15" stroke="rgba(26, 20, 12, 0.25)" strokeWidth="1" />
            <path
              d="M16 2 L18.4 13.6 L30 16 L18.4 18.4 L16 30 L13.6 18.4 L2 16 L13.6 13.6 Z"
              fill="#A93428"
            />
            <circle cx="16" cy="16" r="3" fill="#D4933A" />
          </svg>
          <div
            style={{
              fontSize: 76,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              display: "flex",
              alignItems: "baseline"
            }}
          >
            <span>Romani</span>
            <span style={{ fontStyle: "italic", fontWeight: 500, color: "#A93428", marginLeft: 4 }}>Flow</span>
          </div>
        </div>
        <div
          style={{
            marginTop: 12,
            fontSize: 30,
            color: "#3B2C1F",
            maxWidth: 880,
            textAlign: "center",
            lineHeight: 1.35,
            fontFamily: "system-ui, sans-serif",
            fontWeight: 500
          }}
        >
          Карточки, мини-квизы, транскрипция — восточноевропейский вариант цыганского языка
        </div>
      </div>
    ),
    { ...size }
  );
}
