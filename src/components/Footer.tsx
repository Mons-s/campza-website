import Logo from "./Logo";

export default function Footer() {
  return (
    <>
      <section className="py-24 px-8 text-center relative overflow-hidden" style={{ background: "var(--navy)" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(90,122,232,0.1) 0%, transparent 70%)" }} />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-3.5" style={{ textWrap: "balance" }}>
            Your school deserves better tools.
          </h2>
          <p className="text-base mb-9" style={{ color: "rgba(255,255,255,0.55)" }}>
            Free to set up. No training required. Works from day one.
          </p>
          <a href="https://app.campza.in" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-xl text-base font-bold text-white no-underline transition-all hover:-translate-y-0.5"
            style={{ background: "var(--red)", boxShadow: "0 8px 24px rgba(232,48,48,0.28)" }}>
            Open CampZa App →
          </a>
        </div>
      </section>

      <footer className="px-8 py-10" style={{ background: "#070c1c", borderTop: "1px solid rgba(90,122,232,0.08)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 flex-wrap">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <Logo size={30} />
              <span className="text-lg font-black text-white">Camp<span style={{ color: "var(--red)" }}>Za</span></span>
            </div>
            <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.18)", letterSpacing: "2.5px" }}>
              CREATE · INSPIRE · SUCCEED
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-1.5">
            <div className="flex gap-5">
              <a href="/privacy" className="text-xs no-underline hover:underline" style={{ color: "rgba(255,255,255,0.35)" }}>Privacy Policy</a>
              <a href="/security" className="text-xs no-underline hover:underline" style={{ color: "rgba(255,255,255,0.35)" }}>Security</a>
              <a href="mailto:campza.in@outlook.com" className="text-xs no-underline hover:underline" style={{ color: "var(--blue)" }}>campza.in@outlook.com</a>
            </div>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>© 2026 CampZa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
