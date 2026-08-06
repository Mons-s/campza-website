export default function About() {
  return (
    <section id="about" className="py-24 px-8" style={{ background: "var(--light)" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="rounded-2xl p-12 flex flex-col gap-6" style={{ background: "var(--navy)", boxShadow: "0 20px 60px rgba(12,17,40,0.18)" }}>
          {[
            { icon: "⚡", title: "Built on Firebase", desc: "Data syncs in real time across every device. Nothing waits for a page refresh." },
            { icon: "📱", title: "Works on any device", desc: "Android phone, tablet, or browser on a laptop. No installation required on web." },
            { icon: "🔒", title: "Secure by default", desc: "Role-based access means every user sees only what they need to. Student data stays private." },
            { icon: "💳", title: "Online fee payments", desc: "Parents pay fees digitally from their phone and get instant receipts — no cash queues, no office visits." },
          ].map((b) => (
            <div key={b.title} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                style={{ background: "rgba(90,122,232,0.18)" }}>{b.icon}</div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">{b.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="text-xs font-bold tracking-widest uppercase mb-2.5" style={{ color: "var(--blue)" }}>About CampZa</div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4" style={{ color: "var(--navy)", textWrap: "balance" }}>
            We started because school admin was still living in 2005
          </h2>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--muted)" }}>
            Walk into most schools and you will still find attendance registers, fee receipt books, and WhatsApp groups doing the work that proper software should handle.
          </p>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--muted)" }}>
            CampZa was built to fix that. Not with a bloated system that needs a full-time IT administrator, but with a simple app that a principal can set up in an afternoon and teachers can learn in ten minutes.
          </p>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--muted)" }}>
            Every feature in CampZa solves a real problem that schools face every single day. Nothing is added just to look impressive on a features list.
          </p>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
            Parents get visibility. Teachers get time back. Admins get clarity. And students get a school that feels a little more organised.
          </p>
          <a href="https://app.campza.in" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white no-underline"
            style={{ background: "var(--blue)" }}>
            Try CampZa →
          </a>
        </div>
      </div>
    </section>
  );
}
