import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  { icon: "⚡", title: "Built on Firebase", desc: "Data syncs in real time across every device. Nothing waits for a page refresh." },
  { icon: "📱", title: "Works on any device", desc: "Android phone, tablet, or a laptop browser. No installation required on web." },
  { icon: "🔒", title: "Secure by default", desc: "Role-based access means every user sees only what they need to. Student data stays private." },
  { icon: "💳", title: "Online payments", desc: "Collect fees digitally — parents pay from their phone and get instant receipts, no office visits needed." },
  { icon: "🚀", title: "Zero setup cost", desc: "No upfront fees, no long-term contracts, no hidden charges. Your school is live in one afternoon." },
  { icon: "🎯", title: "No feature bloat", desc: "Every feature in CampZa solves a real daily problem. Nothing is added just to look impressive on a list." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <div className="py-20 px-8" style={{ background: "var(--navy)" }}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "rgba(90,122,232,0.8)" }}>About CampZa</div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6" style={{ textWrap: "balance" }}>
              We started because schools have evolved — their software should too.
            </h1>
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Walk into most schools and you will still find attendance registers, fee receipt books, and group chats doing the work that proper software should handle.
            </p>
          </div>
        </div>

        {/* Story */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-base leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
              CampZa was built to fix that. Not with a bloated system that needs a full-time IT administrator, but with a simple app that a principal can set up in an afternoon and teachers can learn in ten minutes.
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
              Every feature in CampZa solves a real problem that schools face every single day. Nothing is added just to look impressive on a features list.
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
              Parents get visibility. Teachers get time back. Admins get clarity. And students get a school that feels a little more organised.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              CampZa is built for schools of every size — from small neighbourhood schools to large multi-branch institutions. One app, every role, every workflow covered.
            </p>
          </div>
        </section>

        {/* Values grid */}
        <section className="py-20 px-8" style={{ background: "var(--light)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-xs font-bold tracking-widest uppercase mb-3 text-center" style={{ color: "var(--blue)" }}>What we stand for</div>
            <h2 className="text-3xl font-black tracking-tight text-center mb-12" style={{ color: "var(--navy)" }}>
              Built differently, on purpose
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((v) => (
                <div key={v.title} className="rounded-2xl p-6 bg-white" style={{ border: "1px solid var(--border)" }}>
                  <div className="text-2xl mb-3">{v.icon}</div>
                  <h3 className="text-sm font-bold mb-2" style={{ color: "var(--navy)" }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="py-20 px-8 text-center bg-white">
          <h2 className="text-2xl md:text-3xl font-black mb-4" style={{ color: "var(--navy)" }}>
            Ready to modernise your school?
          </h2>
          <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>
            Get in touch and we'll walk you through the app and get you set up — at no cost.
          </p>
          <a href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white no-underline"
            style={{ background: "var(--blue)" }}>
            Request a Demo →
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
