import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F2EAD6"
        }}
      >
        <svg width="160" height="160" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="15" stroke="rgba(26, 20, 12, 0.25)" strokeWidth="1" />
          <path
            d="M16 2 L18.4 13.6 L30 16 L18.4 18.4 L16 30 L13.6 18.4 L2 16 L13.6 13.6 Z"
            fill="#A93428"
          />
          <circle cx="16" cy="16" r="3" fill="#D4933A" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
