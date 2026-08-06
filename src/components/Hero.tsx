export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-10 px-8 relative overflow-hidden"
      style={{ background: "var(--navy)" }}>
      <div className="absolute -top-44 -right-44 w-[650px] h-[650px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(90,122,232,0.13) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-6 text-xs font-semibold tracking-wide"
            style={{ background: "rgba(90,122,232,0.1)", border: "1px solid rgba(90,122,232,0.25)", color: "#8fa8f0" }}>
            Built for forward-thinking schools
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white mb-5"
            style={{ textWrap: "balance" }}>
            Empowering schools<br />
            <span style={{ color: "var(--blue)" }}>through simplicity.</span>
          </h1>
          <p className="text-base text-white/55 leading-relaxed mb-8 max-w-md">
            CampZa puts attendance, marks, fees, homework, timetables and parent communication into one app that actually makes sense to use — from day one.
          </p>
          <div className="flex gap-3 flex-wrap mb-10">
            <a href="https://app.campza.in" target="_blank" rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl text-sm font-bold text-white no-underline transition-all hover:-translate-y-0.5"
              style={{ background: "var(--blue)" }}>
              Open the App →
            </a>
            <a href="#contact"
              className="px-6 py-3.5 rounded-xl text-sm font-medium text-white/75 no-underline transition-all hover:text-white"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}>
              Request a Demo
            </a>
          </div>
          <div className="flex gap-8 flex-wrap">
            {[
              { n: "4", l: "User roles" },
              { n: "15+", l: "Modules" },
              { n: "Live", l: "Real-time sync" },
              { n: "₹0", l: "Setup cost" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-black tracking-tight" style={{ color: "var(--blue)" }}>{s.n}</div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.5px" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex justify-center items-center relative h-[480px]">
          {/* Floating feature cards */}
          {[
            { top: "8%", right: "5%", icon: "✅", label: "Attendance", sub: "All marked for Class 8A", color: "rgba(34,197,94,0.15)" },
            { bottom: "12%", left: "5%", icon: "📚", label: "Homework", sub: "New assignment posted", color: "rgba(249,115,22,0.15)" },
            { bottom: "12%", right: "5%", icon: "💰", label: "Fee Paid", sub: "₹15,000 received", color: "rgba(90,122,232,0.15)" },
            { top: "45%", left: "0%", icon: "📢", label: "Notice", sub: "School holiday Friday", color: "rgba(168,85,247,0.15)" },
            { top: "45%", right: "-2%", icon: "📊", label: "Marks", sub: "Term results updated", color: "rgba(20,184,166,0.15)" },
          ].map((c, i) => (
            <div key={i} className="absolute flex items-center gap-2 px-3.5 py-2.5 rounded-2xl text-xs font-semibold text-white whitespace-nowrap"
              style={{ top: c.top, bottom: (c as any).bottom, left: (c as any).left, right: (c as any).right,
                background: "rgba(22,30,70,0.92)", border: "1px solid rgba(90,122,232,0.25)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)", backdropFilter: "blur(8px)", zIndex: 3 }}>
              <span className="w-7 h-7 flex items-center justify-center rounded-lg text-sm flex-shrink-0" style={{ background: c.color }}>{c.icon}</span>
              <div>
                <div className="text-[10px] text-white/40 mb-0.5">{c.label}</div>
                {c.sub}
              </div>
            </div>
          ))}
          {/* Center app icon */}
          <div className="w-36 h-36 rounded-3xl flex items-center justify-center relative z-10"
            style={{ background: "linear-gradient(145deg, #1c2d6b 0%, #0C1128 100%)",
              boxShadow: "0 0 0 1px rgba(90,122,232,0.25), 0 0 60px rgba(90,122,232,0.15), 0 24px 48px rgba(0,0,0,0.5)" }}>
            <svg width="80" height="80" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="hi1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#5A7AE8" /><stop offset="100%" stopColor="#2A4AC0" />
                </linearGradient>
                <linearGradient id="hi2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FF3535" /><stop offset="100%" stopColor="#B50000" />
                </linearGradient>
              </defs>
              <path d="M 318 118 A 175 175 0 1 0 318 394" fill="none" stroke="url(#hi1)" strokeWidth="40" strokeLinecap="round" />
              <polygon points="222,148 296,210 222,272 148,210" fill="none" stroke="url(#hi1)" strokeWidth="26" strokeLinejoin="round" />
              <rect x="130" y="286" width="184" height="24" rx="8" fill="url(#hi1)" />
              <line x1="296" y1="210" x2="296" y2="320" stroke="url(#hi2)" strokeWidth="18" strokeLinecap="round" />
              <circle cx="296" cy="338" r="20" fill="url(#hi2)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
