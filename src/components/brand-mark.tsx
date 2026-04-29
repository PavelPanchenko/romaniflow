import Link from "next/link";

export function BrandMark() {
  return (
    <Link href="/" className="brand" aria-label="RomaniFlow — главная">
      <span className="glyph" aria-hidden>
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Stylized eight-pointed star — folk motif */}
          <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1" opacity="0.25" />
          <path
            d="M16 2 L18.4 13.6 L30 16 L18.4 18.4 L16 30 L13.6 18.4 L2 16 L13.6 13.6 Z"
            fill="var(--madder)"
          />
          <circle cx="16" cy="16" r="3" fill="var(--saffron)" />
        </svg>
      </span>
      <span>
        Romani<em>Flow</em>
      </span>
    </Link>
  );
}
