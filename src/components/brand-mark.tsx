import Link from "next/link";
import Image from "next/image";

export function BrandMark() {
  return (
    <Link
      href="/"
      className="inline-flex items-baseline gap-2.5 font-display text-[22px] font-medium tracking-[-0.02em] max-[480px]:gap-2 max-[480px]:text-lg"
      aria-label="RomaniFlow — главная"
    >
      <span className="inline-block size-7 self-center max-[480px]:size-6" aria-hidden>
        <Image className="block size-full object-contain" src="/brand-glyph.svg" alt="" width={32} height={32} />
      </span>
      <span>
        Romani<em className="font-normal italic text-madder">Flow</em>
      </span>
    </Link>
  );
}
