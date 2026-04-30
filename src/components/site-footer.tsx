import { layout } from "@/lib/ui-classes";

export function SiteFooter() {
  return (
    <footer className={`${layout.shell} mb-[calc(40px_+_var(--safe-bottom))] mt-20 grid grid-cols-[1fr_auto] items-center gap-[18px] border-t border-[rgba(26,20,12,0.16)] pt-7 text-[13px] text-ink-mute max-[600px]:mt-[42px] max-[600px]:grid-cols-1 max-[600px]:gap-2.5 max-[600px]:pt-5 max-[600px]:text-xs`}>
      <span>
        © {new Date().getFullYear()} RomaniFlow · Сделано с уважением к языку и культуре рома.
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] max-[600px]:tracking-[0.1em]">
        sastipe ✦ kher ✦ pani
      </span>
    </footer>
  );
}
