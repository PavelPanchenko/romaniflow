export function SiteFooter() {
  return (
    <footer className="site-foot">
      <span>
        © {new Date().getFullYear()} RomaniFlow · Сделано с уважением к языку и культуре рома.
      </span>
      <span style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: 11 }}>
        sastipe ✦ kher ✦ pani
      </span>
    </footer>
  );
}
